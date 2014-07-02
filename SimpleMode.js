function SimpleMode(arr) { 

  for(var i = 0; i < arr.length; i++) {
    var current = arr[i];
    var index = arr.indexOf(arr[i]);
    arr.splice(index, 1);
    if(arr.indexOf(current) != -1) {
      return current;
      break;
    }
    else {
      return '-1';
    }
  }

 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleMode(readline());           
