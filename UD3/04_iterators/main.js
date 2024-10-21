'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple() {
  
  for (let i = 0; i < pilots.length; i++) {
    console.log(pilots[i]);
  }
  
  //pilots.forEach(printPilot);

  /*
  pilots.forEach(pilots){
    console.log(pilot.id)
    sum += pilot.years
  }
  */

  /*
  for (let pilot in pilots){
    console.log(pilots[pilot]);
  }
  */
}

function iterateForEach() {
  pilots.forEach(function (pilot){
    console.log(pilot);
  })

  
}

function mapIds() {
  let res = pilots.map(function (value, index, array){
    return value.id
  })

  // return pilots.map((value) => value.id)
}

function rebels() {
  return  pilots.filter((value) => {
    return value.faction === 'Rebels'
  })
}

function totalFaction(faction) {
  return pilots
    .filter(pilot => pilot.faction === faction)
    .length
}

function avgYears(faction) {
  let selectedFaction = pilots
                          .filter((value) => value.faction === faction)
  let suma = 0

  selectedFaction.forEach(function(pilot){
    suma +=pilot.years
  })
  return suma / selectedFaction.length

  /*
    selectedFaction.refuce((previousValue, currentValue) => )
  */
}

// use console.log
iterateSimple()
iterateForEach()
// try {
//   assert.deepStrictEqual(mapIds(), [2,8,40,66])
//   assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

//   assert.deepStrictEqual(totalFaction('Rebels'), 2)

//   assert.deepStrictEqual(avgYears('Rebels'), 22.5)
//   assert.deepStrictEqual(avgYears('Empire'), 25)
// } catch (error) {
//   console.error(error)
// }