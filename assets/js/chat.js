const chatInput = document.getElementById("chat-input");
const chatOutput = document.getElementById("chat-output");
const sendBtn = document.getElementById("send-btn");

function addMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-message");
  msgDiv.classList.add(sender === "user" ? "user-msg" : "bot-msg");
  msgDiv.textContent = message;
  chatOutput.appendChild(msgDiv);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function getBotResponse(userText) {
  userText = userText.toLowerCase();
  if (userText.includes("hello")) return "Hi there!";
  if (userText.includes("how are you")) return "I'm doing great, thanks!";
  if (userText.includes("tamil")) return "வணக்கம்! எப்படி இருக்கிறீர்கள்?";
  if (userText.includes("bye")) return "Goodbye!";
  return "I'm not sure about that yet.";
}

function handleChat() {
  const userText = chatInput.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  chatInput.value = "";

  setTimeout(() => {
    const botReply = getBotResponse(userText);
    addMessage(botReply, "bot");
  }, 600);
}

sendBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keypress", e => {
  if (e.key === "Enter") handleChat();
});
