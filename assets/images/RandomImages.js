const images = {
    1 : require('../images/Random (1).jpeg'),
    2 : require('../images/Random (2).jpeg'),
    3 : require('../images/Random (3).jpeg'),
    4 : require('../images/Random (4).jpeg'),
    5 : require('../images/Random (5).jpeg'),
    6 : require('../images/Random (6).jpeg'),
    7 : require('../images/Random (7).jpeg'),
    8 : require('../images/Random (8).jpeg'),
    9 : require('../images/Random (9).jpeg'),
    10 : require('../images/Random (10).jpeg'),
    11: require('../images/Random (11).jpeg'),
   
}
export default function randomImages(){
    let min = 1;
    let max = 11;
    let random = Math.floor(Math.random()*(max - min + 1))  +min;
    return images[random];
}