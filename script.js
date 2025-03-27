// complete the given function

function palindrome(str){
	
if(str.lowerCase().trim()==str.lowerCase().replaceAll(" ",'').trim().spilt("").reverse().join(',')){
	return true
}else{
	return false
}
}
module.exports = palindrome
