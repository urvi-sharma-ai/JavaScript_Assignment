function map(arr, func){
    const result = [];
    for(let i=0 ; i<arr.length ; i++){
        result.push(func(arr[i]));
    }
    return result;
}

function filter(arr, func){
    const result = [];
    for(let i=0 ; i<arr.length ; i++){
        if(func(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function reduce(arr, func, initialValue) {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
      result = func(result, arr[i]);
    }
    return result;
}

function forEach(arr){
    for(let i=0 ; i<arr.length ; i++){
        console.log(arr[i]);
    }
}

let arr = [1,2,3,4,5];
let mapped_val = map(arr, value => value * value);
let filtered_val = filter(arr, value => value >= 2);
let reduced_val = reduce(arr, (result, value) => {
            result.push(value * 3);
            return result;
         },
         []);


console.log(mapped_val);
console.log(filtered_val);
console.log(reduced_val);
forEach(arr);
