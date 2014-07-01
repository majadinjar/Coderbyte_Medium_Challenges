function RunLength(str) { 

  var count = 0;
  var boundary = false;
  var prev = '';
  var new_str = '';
  
  if (str.length == 1) {
    return 1 + str;
  }
  else {
    for(var i = 0; i< str.length; i++) {
      if ( i == 0) {
        count = 1;
        prev = str.charAt(0);
        continue;
      }
      
      if (str.charAt(i) == prev) {
        count += 1;
      } else {
        new_str += count + prev;
        count = 1;
        prev = str.charAt(i);
      }
    }
    
    new_str += count + prev;
  }
  
  return new_str;
            
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());           
