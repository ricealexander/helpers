import { stripHTML } from '../helpers'

describe('stripHTML.js', () => {
  it('should return text without HTML as-is', () => {
    const text1 = 'Sample text with no HTML formatting'
    const text2 = 'Love of Dogs > Love of Cats'
    const text3 = '<<< << < > >> >>>'

    expect(stripHTML(text1)).toBe(text1)
    expect(stripHTML(text2)).toBe(text2)
    expect(stripHTML(text3)).toBe(text3)
  })


  // Handle HTML Elements
  it('should remove single-line HTML', () => {
    expect(stripHTML('<p>Sample paragraph</p>'))
      .toBe('Sample paragraph')

    expect(stripHTML('Ends with <em>Italicized Text</em>'))
      .toBe('Contains Italicized Text')

    expect(stripHTML('<strong>Bold Text</strong> at the start'))
      .toBe('Bold Text at the start')

    expect(stripHTML('The <del>Striked Text</del> is in the middle'))
      .toBe('The Striked Text is in the middle')
  })

  it('should remove multi-line HTML', () => {
    expect(stripHTML(`
      <p>
        Paragraph has its own line
      </p>
    `)).toBe(`
      Paragraph has its own line
    `)
  })


  // Handle Void Elements
  it('should remove single-line void tags', () => {
    expect(stripHTML('<hr>')).toBe('')
    expect(stripHTML('<hr/>')).toBe('')
    expect(stripHTML('<hr />')).toBe('')
    expect(stripHTML('kitty photo: <img alt="cute kitty">')).toBe('kitty photo: ')
    expect(stripHTML('kitty photo: <img alt="cute kitty"/>')).toBe('kitty photo: ')
    expect(stripHTML('kitty photo: <img alt="cute kitty" />')).toBe('kitty photo: ')
  })

  it('should remove multi-line void tags', () => {
    expect(stripHTML(`
      Kitty Photo:<img
        src="...path to kitty photo"
        alt="cute kitty"
      >
    `)).toBe(`
      Kitty Photo:
    `)
  })

  it('should replace br tags with a linebreak', () => {
    expect(stripHTML('<br>')).toBe('\n')
    expect(stripHTML('<br/>')).toBe('\n')
    expect(stripHTML('<br />')).toBe('\n')
    expect(stripHTML('<br class="clear">')).toBe('\n')
    expect(stripHTML('<br class="clear"/>')).toBe('\n')
    expect(stripHTML('<br class="clear" />')).toBe('\n')
    expect(stripHTML('Phase 1: Collect Underpants<br>Phase 2: ?<br>Phase 3: Profit')).toBe(
`Phase 1: Collect Underpants
Phase 2: ?
Phase 3: Profit`
    )
  })


  // Handle Nested HTML
  it('should remove nested HTML', () => {
    expect(stripHTML(`
      <label for="newsletter">
        <input type="checkbox" id="newsletter"> Opt-In to Email Updates
      </label>
    `)).toBe(`
       Opt-In to Email Updates
    `)

    expect(stripHTML(`
      <p>
        <span class="uppercase">
          <span class="red">
            <span class="align-right">
              <del>
                <strong>
                  <em>
                    <s>
                      <b>
                        <i>
                          <u>Fancy Text
                        </i>
                      </b>
                    </s>
                  </em>
                </strong>
              </del>
            </span>
          </span>
        </span>
      </p>
    `)).toBe(`
      Fancy Text
    `)
  })

  // What it does not do
  it('should not remove non-void elements missing a closing tag', () => {
    expect('<p>This is a paragraph').toBe('<p>This is a paragraph')
    expect('<h3>Heading <em>1</p>').toBe('Heading <em>1')
    expect('A <span><span>B</span> C').toBe('A <span>B C')
  })
})
