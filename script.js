// complete the given function

function palindrome(str){
	
if(str.toLowerCase().trim()==str.toLowerCase().replaceAll(" ",'').trim().split("").reverse().join('')){
	return true
}else{
	return false
}
}
module.exports = palindrome
