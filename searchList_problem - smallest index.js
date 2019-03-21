var myList = ["cat", "dog", "mouse", "lion", "tiger", "bull", "cat", "elephant", "monkey", "dog", "lion", "lion", "cat", "monkey"];
function searchList(something){
    for(let i=0;i<=myList.length;i++){
        if(something!==myList[i]){
            return "Missing from the haystack";
        }else 
        if(something===myList[i]){
            var myIndex=myList.indexOf(myList[i]); 
            return myIndex;
        }  
}

}
searchList("cat");

