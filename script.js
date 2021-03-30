let alert_true = 0
let alert_false = 0
let min_max = [0,30]
let two = 0
let one = 0
let PA = ""
let answer = ""
document.querySelector("select").onchange = function(){
	let value = document.querySelector("select").value
	if (value == "easy") {
		min_max = [0,30]
	}
	if (value == "middl") {
		min_max = [0,100]
	}
	if (value == "hard") {
		min_max = [0,1000]
	}
	if (value == "very") {
		min_max = [0,1000000]
	}
}
document.querySelector(".Slozhit").onclick = function(){
	one = get_random(min_max[0],min_max[1]/2)
	two = get_random(min_max[0],min_max[1]/2)
	answer = prompt(one + "+" + two + "=","")
	PA = one + two
	check(PA,answer)
}
document.querySelector(".Vychest").onclick = function(){
	two = get_random(min_max[0],min_max[1])
	one = get_random(two,min_max[1])
	answer = prompt(one + "-" + two + "=","")
	PA = one - two
	check(PA,answer)
}
document.querySelector(".Umnozhit").onclick = function(){
	one = get_random(min_max[0],min_max[1]/3)
	two = get_random(min_max[0],min_max[1]/10)
	answer = prompt(one + "*" + two + "=","")
	PA = one * two
	check(PA,answer)
}
document.querySelector(".Razdelit").onclick = function(){
	PA = get_random(min_max[0],min_max[1])
	two = get_random(min_max[0],min_max[1])
	one = PA * two
	answer = prompt(one + ":" + two + "=","")
	check(PA,answer)
}
function get_random(min,max){
	return Math.floor (Math.random()*(max-min+1))+min;
}
function check(PA,answer){
	if (PA == answer) {
		alert("правильно")
		alert_true+= 1
	}
	else{
		alert("неправильно")
		alert_false+= 1
	}
}
document.querySelector(".Saw_stat").onclick = function(){
	alert(alert_true + " правильных ответов")
	alert(alert_false + " неправильных ответов")
}
document.querySelector(".Clear").onclick = function(){
	alert_true = 0
	alert_false = 0
}