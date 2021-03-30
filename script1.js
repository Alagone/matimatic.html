let z = [" яблок"," апельсинов"," лимонов"," бананов"," мандаринов"," манго"," слив"]
let r = [" меньше"," больше"]
let p = r[0]
let u = r[1]
let w = r[0,1]
let fruit = z[get_random(0,6)]
let fruit2 = z[get_random(0,6)]
let a = get_random(10,20)
let b = get_random(0,10)
let e = get_random(0,10)
document.querySelector(".num_1").innerHTML = a
document.querySelector(".num_2").innerHTML = b
document.querySelector(".fruit").innerHTML = fruit
document.querySelector(".fruit1").innerHTML = fruit
document.querySelector(".fruit2").innerHTML = fruit
document.querySelector(".num_1_1").innerHTML = a
document.querySelector(".num_2_1").innerHTML = b
document.querySelector(".num_3_1").innerHTML = e
document.querySelector(".mb").innerHTML = w 
document.querySelector(".fruit_1").innerHTML = fruit2
document.querySelector(".fruit_2").innerHTML = fruit2
document.querySelector(".fruit_3").innerHTML = fruit2
document.querySelector(".one_one").onclick = function(){
	let d = a - b;
	let c = document.querySelector(".one").value
	if (c == d) {
		document.querySelector(".answer").innerHTML = " правильно" ;
	}
	else{
		document.querySelector(".answer").innerHTML = " неправильно" ;
	}
}
document.querySelector(".two_two").onclick = function(){
	let l = a - b;
	let c = document.querySelector(".one").value
	if (c == d,w = p == w) {
		document.querySelector(".answer").innerHTML = " правильно" ;
	}
	else{
		document.querySelector(".answer").innerHTML = " неправильно" ;
	}
}
function get_random(min,max){
	return Math.floor (Math.random()*(max-min+1))+min;
}