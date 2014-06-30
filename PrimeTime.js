function PrimeTime(num) { 
  var to = Math.pow(2,16);
  for(var i=2;i<=to;i++) {
    if(i!=num && num%i===0) {
      return "false";
      break;
    }
    else if (i!=num && num%i!=0) {
      return "true";

    }
  }
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());           
