function add(){
var h1=parseInt(document.getElementById("h1").value);
var m1=parseInt(document.getElementById("m1").value);
var s1=parseInt(document.getElementById("s1").value);
var f1=parseInt(document.getElementById("f1").value);
var h2=parseInt(document.getElementById("h2").value);
var m2=parseInt(document.getElementById("m2").value);
var s2=parseInt(document.getElementById("s2").value);
var f2=parseInt(document.getElementById("f2").value);
var fps;
if(document.getElementById('f24').checked)
	fps=parseInt(document.getElementById('f24').value);
if(document.getElementById('f25').checked)
	fps=parseInt(document.getElementById('f25').value);
if(document.getElementById('f30').checked)
	fps=parseInt(document.getElementById('f30').value);


var rip1=Math.floor((f1+f2)/fps);
var f3=(f1+f2)-(rip1*fps);
var rip2=Math.floor((rip1+s1+s2)/60);
var s3=(rip1+s1+s2)-(rip2*60);
rip1=Math.floor((rip2+m1+m2)/60);
var m3=(rip2+m1+m2)-(rip1*60);	
var h3=(rip1+h1+h2);
document.getElementById('result').textContent =h3+":"+m3+":"+s3+":"+f3;
}

function clearData(){
document.getElementById("h1").value=0;
document.getElementById("m1").value=0;
document.getElementById("s1").value=0;
document.getElementById("f1").value=0;
document.getElementById("h2").value=0;
document.getElementById("m2").value=0;
document.getElementById("s2").value=0;
document.getElementById("f2").value=0;
add();
}