const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

  test('Whole number', (done) => {
    let input = '1km'
    assert.equal(convertHandler.getNum(input), 1)
    done()
  })

  test('Decimal number', (done) => {
    let input = '3.5l'
    assert.equal(convertHandler.getNum(input), 3.5)
    done()
  })

  test('Fractional number', (done) => {
    let input = '5/2l'
    assert.equal(convertHandler.getNum(input), 5 / 2)
    done()
  })
  test('Fractional decimal number', (done) => {
    let input = '3/2.2l'
    assert.equal(convertHandler.getNum(input), 3 / 2.2)
    done()
  })

  test('Fractional decimal number', (done) => {
    let input = '3/2/2l'
    assert.equal(convertHandler.getNum(input), undefined)
    done()
  })

  test('No input', (done) => {
    let input = ''
    assert.equal(convertHandler.getNum(input), 1)
    done()
  })

  test('Valid input unit', (done) => {
    let inputs= [
      'gal',
      'L',
      'mi',
      'km',
      'lbs',
      'kg'
    ]
    inputs.forEach((e, i) => {
      assert.equal(convertHandler.getUnit(e), e)
    })
    done()
  })

  test('Invalid input unit', (done) => {
    let input = '10Kilograms'
    assert.equal(convertHandler.getUnit(input), undefined)
    done()
  })
  
  test('Correct return unit for each valid input unit', (done) => {
    let validInput= [
      'gal',
      'L',
      'mi',
      'km',
      'lbs',
      'kg'
    ]
    let correctReturn = ['L','gal','km','mi','kg','lbs']

    validInput.forEach( (e, i) => {
      assert.equal(convertHandler.getReturnUnit(e), correctReturn[i])
    })
    done()
  })

  test('Correct return spelled unit', (done) => {
    let validInput= [
      'gal',
      'L',
      'mi',
      'km',
      'lbs',
      'kg'
    ]
    let correctReturn = ['gallons','liters','miles','kilometers','pounds','kilograms']

    validInput.forEach( (e, i) => {
      assert.equal(convertHandler.spellOutUnit(e), correctReturn[i])
    })
    done()
  })

  test('gal to L', (done) => {
    let input = ['1', 'gal']
    let expected = 3.78541

    assert.equal(convertHandler.convert(input[0], input[1]), expected)
    done()
  })
  test('L to gal', (done) => {
    let input = ['1', 'L']
    let expected = 0.26417

    assert.equal(convertHandler.convert(input[0], input[1]), expected)
    done()
  })

  test('mi to km', (done) => {
    let input = ['1', 'mi']
    let expected = 1.60934

    assert.equal(convertHandler.convert(input[0], input[1]), expected)
    done()
  })

  test('km to mi', (done) => {
    let input = ['1', 'km']
    let expected = 0.62137

    assert.equal(convertHandler.convert(input[0], input[1]), expected)
    done()
  })

  test('lbs to kg', (done) => {
    let input = ['1', 'lbs']
    let expected = 0.45359

    assert.equal(convertHandler.convert(input[0], input[1]), expected)
    done()
  })

  test('kg to lbs', (done) => {
    let input = ['1', 'kg']
    let expected = 2.20462

    assert.equal(convertHandler.convert(input[0], input[1]), expected)
    done()
  })
  
});