function calculateScore(){

let score = 0;

let answers = document.querySelectorAll(
'input[type="radio"]:checked'
);

answers.forEach(answer=>{
    score += Number(answer.value);
});

document.getElementById("result").innerHTML =
"Your Score: " + score + " / 3";

document.getElementById("certificateBtn").style.display = "inline-block";
}
