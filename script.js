const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	const keys = Object.keys(sampleObject);
	//for(let key in keys){
		if(!(key in sampleObject)){
			return false;
		} 
	//}  
	return true;
}   
  
// Do not change the code below

const key = prompt("Enter Key.");
alert(hasKey(key));
