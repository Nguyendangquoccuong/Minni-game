let number = Math.floor(Math.random() * 10) + 1;

function startGame() {
    let guess = prompt("🎮 Đoán số từ 1 đến 10:");

    if (guess == null) return;

    if (parseInt(guess) === number) {
        document.getElementById("text").innerHTML =
        "🎉 Chính xác! Bạn thắng!";
        number = Math.floor(Math.random() * 10) + 1;
    } else {
        document.getElementById("text").innerHTML =
        "❌ Sai rồi! Số đúng là " + number + ". Nhấn nút để chơi lại.";
        number = Math.floor(Math.random() * 10) + 1;
    }
}
