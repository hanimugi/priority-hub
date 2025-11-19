function classify() {
    const msg = document.getElementById("messageInput").value.toLowerCase();
    let result = "";

    if (msg.includes("urgent") || msg.includes("emergency")) {
        result = "🚨 Emergency detected!";
    } else {
        result = "✔️ Casual message";
    }

    document.getElementById("result").innerText = result;
}

