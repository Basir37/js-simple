// const number = 589.2556;
// const random = Math.random();
// const between = random * 10;
// const rounded = Math.round(between);
// console.log(rounded);

const selected = []
for(let i = 0; i < 10; i++){
    const random = Math.random()*100;
    const picked = Math.round(random);
    if(selected.indexOf(picked) == -1){
        selected.push(picked);
    }
    else {
        console.log('found duplicate', selected, picked);
    }
}
console.log(selected);