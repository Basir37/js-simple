const business = 450;
const minister = 350;
const army = 600;

// compare 2
// if(business > minister){
//     console.log('Business person er pola is bigger');
// }
// else{
//     console.log('minister er pola is bigger');
// }

// compare 3

// if(business > minister && business > army){
//     console.log('Business person is bigger');
// }
// else if (minister > business && minister > army) {
//     console.log('minister is bigger');
// }
// else {
//     console.log('army is bigger');
// }

var max = Math.max(business, minister, army);
// // console.log('largest is', max);

function findlargest(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}
cost larger = findlargest(354, 241);
console.log('largest is', largest);

