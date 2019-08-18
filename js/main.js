function getData(){
	 	value = document.getElementById('in2').value;
	 	showData(value);
	};

	function showData(msg){
		console.log(msg);
		document.getElementById('lb2').innerHTML=msg;
	};