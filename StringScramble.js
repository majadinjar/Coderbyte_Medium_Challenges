function StringScramble(str1,str2) { 
  var str1=str1.split('');
  var str2=str2.split('');
  var found = [];
  var i=0;
  
  
  while(i<str2.length) {
    if(str1.indexOf(str2[i])!=-1) {
      found.push(str2[i]);
      str1.splice(str1.indexOf(str2[i]),1);
      i++;
    }
    else {
      return "false";
    }
  }
  if(found.length===str2.length) {
    return true;
  }
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline()); 
