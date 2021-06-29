var count1 = 9
var count2 = 12
var count3 = 9



var like1 = document.querySelector("#like1")
like1.innerHTML = `${count1} like(s)`

var like2 = document.querySelector("#like2")
like2.innerHTML = `${count2} like(s)`

var like3 = document.querySelector("#like3")
like3.innerHTML = `${count3} like(s)`


function add1() {
    count1++;
    like1.innerHTML = `${count1} like(s)`
}

function add2() {
    count2++;
    like2.innerHTML = `${count2} like(s)`
}

function add3() {
    count3++;
    like3.innerHTML = `${count3} like(s)`
}