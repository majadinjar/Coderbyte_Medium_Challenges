function ArrayAddition(arr) {

	// Let's sort the array numerically and pop the last element to get the largest number
	var largest = arr.sort( function(a,b) { return a-b; } ).pop();
	var sum = 0;

	// Strightforward way to see if a sum exists that equals the largest number
	for ( var i = 0; i < arr.length; i++ ) {
		sum = arr[i];

		if ( sum == largest )
			return true;

		for ( var j = i+1; j < arr.length; j++ ) {
			sum += arr[j];

			if ( sum == largest )
				return true;
		}

		// this will complete the combinations of elements to sum by subtracting each element from i+1 through to the last element
		for ( var j = i+1; j < arr.length; j++ ) {
			sum -= arr[j];

			if ( sum == largest )
				return true;
		}
	}

	return false; // default to false
        
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAddition(readline());           
