var i=document.getElementsByClassName('box').length;

document.getElementById("click").onclick = function () { alert('hello!'); };
document.getElementById("clickme").onclick = function (){
	addBox();
};

function addBox() { 
		var nextdiv = document.createElement('div');
		nextdiv.className='box';
		document.getElementsByClassName('boxgroup')[0].appendChild(nextdiv);
		var txt = document.createElement('p');
		nextdiv.appendChild(txt);
		txt.innerHTML = ++i+" pudełko!";
 };
