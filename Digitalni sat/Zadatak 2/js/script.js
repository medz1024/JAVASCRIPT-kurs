var acc = document.getElementsByClassName("header");
var acc1 = document.getElementsByClassName("body")[0];
acc1.style.maxHeight = acc1.scrollHeight + 'px';


for(var i = 0; i < acc.length; i++){

	acc[i].addEventListener("click", function(){
		this.classList.toggle("active");
		var nextNode = this.nextElementSibling;

		if (!nextNode.classList.contains('show')){
			nextNode.style.maxHeight = nextNode.scrollHeight + 'px';
			nextNode.classList.add('show');

		}else{
			nextNode.classList.remove('show');
			nextNode.style.maxHeight = 0 + 'px';
		}
	});
}