let number = Math.floor(Math.random() * 10) + 1;

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let tries = 0;
let lives = 3;

document.getElementById("highScore").textContent = highScore;

function startGame() {

    let guess = Number(document.getElementById("guess").value);

    if (!guess) {
        document.getElementById("text").innerHTML = "⚠️ Nhập số!";
        return;
    }

    tries++;
    document.getElementById("tries").textContent = tries;

    if (guess === number) {

        score += 10;
        document.getElementById("score").textContent = score;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            document.getElementById("highScore").textContent = highScore;
        }

        document.getElementById("text").innerHTML =
        "🎉 Chính xác! Bạn thắng!";

        number = Math.floor(Math.random() * 10) + 1;

    } else {

        lives--;

        if (lives <= 0) {

            document.getElementById("text").innerHTML =
            "💀 Hết lượt! Số đúng là " + number;

            newGame();
            return;
        }

        if (guess < number) {
            document.getElementById("text").innerHTML =
            "📈 Số nhỏ quá! ❤️ Còn " + lives + " mạng";
        } else {
            document.getElementById("text").innerHTML =
            "📉 Số lớn quá! ❤️ Còn " + lives + " mạng";
        }

    }

    document.getElementById("guess").value = "";
}

function newGame(){

    number = Math.floor(Math.random()*10)+1;

    tries = 0;
    lives = 3;

    document.getElementById("tries").textContent = 0;

    document.getElementById("text").innerHTML =
    "🎮 Game mới bắt đầu!";
}

document.getElementById("guess").addEventListener("keypress",function(e){

    if(e.key==="Enter"){
        startGame();
    }

});
