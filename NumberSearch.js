function NumberSearch(str) { 
  var arr = str.split('');
  var numbers = 0;
  var letters = 0;
  var typeNumber = ['1','2','3','4','5','6','7','8','9','0'];
  var alphaLetters= 'abcdefghijklmnopqrstuvwxyzabcdefghi';
  var capsLock = alphaLetters.toUpperCase();
  var alpha2 = capsLock.split('');
  var alpha = alphaLetters.split('');
  
  for(var i=0; i<arr.length; i++) {
    if(typeNumber.indexOf(arr[i])!=-1) {
      arr[i] = parseInt(arr[i]);
      numbers+=arr[i];
    }
    else if(alphaLetters.indexOf(arr[i])!=-1 || alpha2.indexOf(arr[i])!=-1) {
      letters+=1;
    }
  }
    console.log('numbers: ' + numbers);
    console.log('letters: ' + letters);
  var result = numbers/letters;
  var final = Math.round(result);
  
  return final;

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberSearch(readline());  
