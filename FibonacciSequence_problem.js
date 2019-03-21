function fibonacciSequence(n){
    if(n<=1){
        return n;
    }else{
        return fibonacciSequence(n-1)+fibonacciSequence(n-2);
    }
}
fibonacciSequence(7);





