function toggle_chat() {
    var chat = document.getElementById("chat");
    var button = document.getElementById("toggle_chat_button");

    if (chat.style.display === "none") {
        chat.style.display = "block";
        button.innerHTML = ">";
    } else {
        chat.style.display = "none";
        button.innerHTML = "<";
    }
}
