'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
  .get((req, res) => {
    let {input} = req.query

    let getNum = convertHandler.getNum(input)
    let getUnit = convertHandler.getUnit(input)

    if (!getNum && !getUnit){
      res.send('invalid number and unit')
    }else if(!getNum){
      res.send('invalid number')
    }else if(!getUnit){
      res.send('invalid unit')
    }

    let getReturnUnit = convertHandler.getReturnUnit(getUnit)
    let spellOutUnit = convertHandler.spellOutUnit(getUnit)
    let convert = convertHandler.convert(getNum, getUnit)
    let getString = convertHandler.getString(
      getNum, spellOutUnit, convert, convertHandler.spellOutUnit(getReturnUnit)
    )

    console.log('xd', convert)
    console.log(getReturnUnit)
    console.log(spellOutUnit)

    res.json({ initNum: getNum, initUnit: getUnit, returnNum: Number(convert), returnUnit: getReturnUnit, string: getString })
  })
  
};
