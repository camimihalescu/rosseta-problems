function doorsGame(n){
   var doorStatus=[]; //create an empty array that holds the doors
    for (let i=0;i<n;i++){
        for(let j=i+1;j<=n;j+=i){ //iterate the array
            doorStatus[0][j]=1; //put "one" on the first row, which means that all the doors are open
                if(i>0 && doorStatus[i-1][j]===1){ //if I am in second iteration and the door in the previous row and same column is open
                    doorStatus[i][j]=0;            // then close it, by putting 0;  
                }
        }
    }
    if(doorStatus===0){
        return "The door is closed";
    }else{
        return "The door is open";
    }
}
doorsGame(100);

