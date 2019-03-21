var myList = ["cat", "dog", "mouse", "lion", "tiger", "bull", "cat", "elephant", "monkey", "dog", "lion", "lion", "cat", "monkey"];
function searchList(something){
    for(let i=myList.length;i>=0;i--){
        if(something===myList[i]){
            var myIndex=myList.indexOf(myList[i]); 
            return myIndex;
        } else 
        if(something!==myList[i]){
            return "Missing from the haystack";
        }
}

}
searchList("cat");

