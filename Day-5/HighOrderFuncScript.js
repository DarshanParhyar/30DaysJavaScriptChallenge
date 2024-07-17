function applyFunctionMultipleTimes(func, times, value) {
    let result = value;
    for (let i = 0; i < times; i++) {
        result = func(result);
    }
    return result;
}


const double = x => x * 2;
console.log(applyFunctionMultipleTimes(double, 3, 2));  

const addOne = x => x + 1;
console.log(applyFunctionMultipleTimes(addOne, 5, 0)); 