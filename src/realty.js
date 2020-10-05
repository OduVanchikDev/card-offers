

export function realty (arr) {
if (arr.length===0) {
  return 'Нет требований';
}
const obj = {
  flatNew:'новостроек',
  houseOrTownhouse:'домов и таунхаусов',
  garage:'гаражей',
  repair:'ремонтов',
  flatSecondary:'вторичного жилья',
  houseBuilding:'строительство дома'
}
let newArr = arr.map(e => obj[e]);
  if(arr.length===1){
    return `Программа распространяется на покупку ${newArr[0]}.`
  }
  if(arr.length===2){
    return `Программа распространяется на покупку ${newArr[0]} и ${newArr[1]}.`
  } else {
    let str = 'Программа распространяется на покупку ';
    for (let i=0; i<arr.length-1; i++) {
      str += ` ${newArr[i]},`;
    }
    return str.slice(0, str.length-1) + ' и ' + newArr[arr.length-1];
  }

}
