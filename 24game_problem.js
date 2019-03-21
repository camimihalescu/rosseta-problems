var randomNr;
randomNr=(function fourDigits() {
    return Math.floor((1000+Math.random()*9000));
    
})() //function that generate 4 random digits
prompt("Please enter a valid arithmetic expression with these numbers: "+ randomNr)


var nrToStr=String(randomNr);//transform given numbers to string
var arr=nrToStr.split(' ');//and then to array
var operators= ["*", "+", "/", "-"][Math.random()*4];//create random operators

for(i=0;i<arr.length;i++){
    experssion=arr[i]+operators;
}
var expr=eval(expression);
if(expr===24){
    console.log("The expression is correct!");
}else{
    console.log("Something went wrong!");
}
