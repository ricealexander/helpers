import { round } from '../helpers'

describe('round.js', () => {
  it('should return NaN if first argument cannot be resolved to a number', () => {
    const β = 'Bernstein’s constant'
    expect(round(β)).toBeNaN()
  })

  // Round Numeric Values
  it('rounds numbers with decimals < 0.5 down', () => {
    const 𝜋 = 3.1415927 // Archimedes constant
    expect(round(𝜋)).toBe(3)
  })

  it('rounds numbers with decimals > 0.5 up', () => {
    const ϕ = 1.6180340 // Golden Ratio
    expect(round(ϕ)).toBe(2)
  })

  it('rounds numbers with decimals = 0.5 up', () => {
    const α = 2.50 // Feigenbaum constant (to 2 digits)
    expect(round(α)).toBe(3)
  })


  // Round String Values Which Can be Converted to Numbers
  it('rounds numeric strings with decimals < 0.5 down', () => {
    const μ = '1.4513692' // Ramanujan-Soldner constant
    expect(round(μ)).toBe(1)
  })

  it('rounds numeric strings with decimals > 0.5 up', () => {
    const 𝑒 = '2.7182818' // Euler's Number
    expect(round(𝑒)).toBe(3)
  })

  it('rounds numeric strings with decimals = 0.5 up', () => {
    const 𝐶 = '1.5' // Porter's constant (to 1 digit)
    expect(round(𝐶)).toBe(2)
  })


  // Second parameter allows user to specify number of places to round to
  it('can round to a set number of decimal places', () => {
    const β = 1.3813564 // Kneser-Mahler polynomial constant
    expect(round(β, 3)).toBe(1.381)
  })

  it('can round to a set number of decimal places', () => {
    const 𝐾 = 2.5849818 // Sierpiński's constant
    expect(round(𝐾, 3)).toBe(2.585)
  })


  // Throw Errors
  it('should throw an error if first argument is neither a string nor numeric', () => {
    expect(() => round(true)).toThrow()
  })

  it('should throw an error if second argument is neither a string nor numeric', () => {
    const ρ = 1.3247179 // plastic number
    expect(() => round(ρ, true)).toThrow()
  })

  it('should throw an error if second argument cannot be resolved to a number', () => {
    const 𝐶 = 1.7052111 // Niven's constant
    expect(() => round(𝐶, 'three')).toThrow()
  })
})
