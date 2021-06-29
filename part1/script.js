var count = 3;
var countElement = document.querySelector("#count")



function add1(){
    count++;
    countElement.innerHTML = count + " " + "Like(s)"
    console.log(count);
}

