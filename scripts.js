/*changing pages*/
	
	function show(shown, hidden) {
  		document.getElementById(shown).style.display='block';
  		document.getElementById(hidden).style.display='none';
}
	/*loading function*/
	
	function start(){
		show('auth','loading');
}
	/*first onload*/
	
	window.onload = function (){
	setTimeout(start,4000);	
	return false;
}
	/*checkinput errors*/
	
	function check(){
		let email = document.getElementById("input_email").value;
		let password = document.getElementById("input_password").value;
		let count = password.length;
		let password_repeat = document.getElementById("input_password2").value;
		
	if(email === "" || email === null){
		document.getElementById("error").innerHTML = '<p>Проверьте написание e-mail</p>';
	} else{
		document.getElementById("error").innerHTML = '';
	}
	if(count <= 6){
		document.getElementById("error2").innerHTML = '<p>Пароль должен быть больше 6 символов</p>';
	} else{
		document.getElementById("error2").innerHTML = '';
	}
	if(password != password_repeat){
		document.getElementById("error3").innerHTML = '<p>Пароли не совпадают</p>';
	} else{
		document.getElementById("error3").innerHTML = '';
	}	
}