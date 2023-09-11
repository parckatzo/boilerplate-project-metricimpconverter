const findInput = (input) => {
  let findNum = input.match(/[.\d\/]+/g) || ['1']
  let findUnit = input.match(/[a-zA-Z]+/g) || ''

  console.log('num',findNum)
  console.log('unit',findUnit)
  return [findNum, findUnit]
}

const checkIfDivide = (input) => {

  let divide = input.split('/')
  if(divide.length > 2){
    return false
  }
  return divide
  
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = findInput(input)[0].toString()
    let numbers = checkIfDivide(result)
    console.log('numeros', numbers)

    if(!numbers){
      return undefined
    }
    let num0 = numbers[0]
    let num1 = numbers[1] || '1'
    console.log('XDNUM',num1)
    console.log('XDNUM0',num0)

    result = parseFloat(num0) / parseFloat(num1)

    if (isNaN(num0) || isNaN(num1)){
      return undefined
    }
    
    return result
  };
  
  this.getUnit = function(input) {
    let result = findInput(input)[1].toString().toLowerCase()
    switch(result){
      case 'km':
        return 'km'
      case 'l':
        return 'L'
      case 'mi':
        return 'mi'
      case 'gal':
        return 'gal'
      case 'lbs':
        return 'lbs'
      case 'kg':
        return 'kg'
      default:
        return undefined
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = initUnit.toLowerCase();
    switch(result){
      case 'km':
        return 'mi'
      case 'l':
        return 'gal'
      case 'mi':
        return 'km'
      case 'gal':
        return 'L'
      case 'lbs':
        return 'kg'
      case 'kg':
        return 'lbs'
      default:
        return undefined
    }
  };

  this.spellOutUnit = function(unit) {
    let result = unit.toLowerCase();
    switch(result){
      case 'km':
        return 'kilometers'
        
      case 'l':
        return 'liters'
        
      case 'mi':
        return 'miles'
        
      case 'gal':
        return 'gallons'
        
      case 'lbs':
        return 'pounds'
        
      case 'kg':
        return 'kilograms'
        
      default:
        return undefined
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase()
    let result
    switch(unit){
      case 'km':
        result = initNum / miToKm
        break
      case 'l':
        result = initNum / galToL
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'gal':
        result = initNum * galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      default:
        return undefined
    }
    return parseFloat(result).toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
