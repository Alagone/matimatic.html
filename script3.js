let z = [" в провотиположном направлении","навстречу друг другу"]
let r = z[get_random(0,1)]
let a = get_random(10,300)
let b = a - get_random(30,60)
let q = b - get_random(0, 30)
let p = get_random(1, 10)
let w = ["встретились","приехали"]
let o = w[get_random(0,1)]
if (r == z[0]){
	o = w[1]
}
if (r == z[1]){
	o = w[0]
}
document.querySelector(".n").innerHTML = a
document.querySelector(".nu").innerHTML = b
document.querySelector(".where").innerHTML = r
document.querySelector(".num").innerHTML = p
document.querySelector(".why").innerHTML = o
let d = a / p - b;
document.querySelector(".two_two").onclick = function(){
	let c = document.querySelector(".one").value
	if (c == d) {
		document.querySelector(".answer").innerHTML = " правильно" ;
	}
	else{
		document.querySelector(".answer").innerHTML = " неправильно" ;
	}
}
function get_random(min,max){
	return Math.floor (Math.random()*(max-min+1))+min;
}