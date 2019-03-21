var givenString="March 7 2009 7:30pm EST";
function add12Hrs(givenString){
   var newStr = givenString.split(" "); //splits the entire string in words
   var newDate = newStr[3].split(""); //splits the date in characters
   var hrs= Number(newDate[0]);  //convert first character of the date into nr. 
   hrs+=12 ;   
        if(hrs>=12&&newDate[4]==="p"){
            hrs-=12;
            newDate[4]="a";
        }
    hrs=String(hrs);
    var lastDate = hrs+newDate[1]+newDate[2]+newDate[3]+newDate[4]+newDate[5];
    lastDate.join("");
    var lastStr = newStr[0]+newStr[1]+newStr[2]+lastDate+newStr[4];
    console.log(lastStr);
}





