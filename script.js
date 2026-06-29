let number = Math.floor(Math.random() * 10) + 1;
let score = 0;

function startGame() {

    let guess = parseInt(document.getElementById("guess").value);

    if (guess === number) {
        score++;
        document.getElementById("text").innerHTML =
        "🎉 Chính xác! Điểm: " + score;

        number = Math.floor(Math.random() * 10) + 1;
    }
    else if (guess < number) {
        document.getElementById("text").innerHTML =
        "📉 Số nhỏ quá!";
    }
    else {
        document.getElementById("text").innerHTML =
        "📈 Số lớn quá!";
    }
}

function newGame() {
    number = Math.floor(Math.random() * 10) + 1;
    document.getElementById("guess").value = "";
    document.getElementById("text").innerHTML = "🎮 Trò chơi mới!";
}
