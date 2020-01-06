import { round } from '../helpers'

describe('round.js', () => {
  // Round numeric values
  it('rounds numbers with decimals < 0.5 down', () => {
    expect(round(3.1415927)).toBe(3)
  })
  it('rounds numbers with decimals > 0.5 up', () => {
    expect(round(1.618034)).toBe(2)
  })
  it('rounds numbers with decimals = 0.5 up', () => {
    expect(round(2.5)).toBe(3)
  })

  // Round string values if they can be resolved to a number
  it('rounds numeric strings with decimals < 0.5 down', () => {
    expect(round('3.1415927')).toBe(3)
  })
  it('rounds numeric strings with decimals > 0.5 up', () => {
    expect(round('1.618034')).toBe(2)
  })
  it('rounds numeric strings with decimals = 0.5 up', () => {
    expect(round('2.5')).toBe(3)
  })

  // Second parameter specifies number of places to round to
  it('can round numbers to a specified number of decimal places', () => {
    expect(round(3.1415927, 3)).toBe(3.142)
    expect(round(1.618034, 3)).toBe(1.618)
    expect(round(2.5, 1)).toBe(2.5)
  })

  it('can round strings to a specified number of decimal places', () => {
    expect(round('3.1415927', 3)).toBe(3.142)
    expect(round('1.618034', 3)).toBe(1.618)
    expect(round('2.5', 1)).toBe(2.5)
  })

  // Non-numeric values should return as NaN
  it('should return NaN if first argument cannot be resolved to a number', () => {
    expect(round('Archimedes’s constant')).toBeNaN()
  })

  // Throw Errors
  it('should throw an error if first argument is neither a string nor numeric', () => {
    expect(() => round(true)).toThrow()
  })

  it('should throw an error if second argument is neither a string nor numeric', () => {
    expect(() => round(3.1415927, true)).toThrow()
  })

  it('should throw an error if second argument cannot be resolved to a number', () => {
    expect(() => round(3.1415927, 'three')).toThrow()
  })
})
