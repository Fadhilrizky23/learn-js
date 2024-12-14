const test1 = () =>({key : "VALUE"})
console.log(test1()); // { key: 'VALUE' }


const test2 = () => {key : "VALUE"};
console.log(test2()); // undefined