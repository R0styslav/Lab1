function factorial(n, result){
    result = result || 1;
    if(!n){
        return result;
    }else{
        return factorial(n-1, result*n);
    }
}
console.log(factorial(7));