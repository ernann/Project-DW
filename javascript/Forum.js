// Ambil elemen form, input, dan chat box
const form = document.getElementById("form");
const input = document.getElementById("message-input");
const chatBox = document.getElementById("chat-box");

// Event listener saat submit form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah reload halaman

  const text = input.value.trim();
  if (!text) return; // jika kosong, hentikan

  // Tambahkan pesan user ke chat
  addMessage(text, "user");

  // Kosongkan input
  input.value = "";

  // Auto reply bot setelah 1 detik
  setTimeout(() => {
    autoReply();
  }, 1000);
});

// Fungsi menambahkan pesan ke chat
function addMessage(text, type) {
  const message = document.createElement("div");
  message.classList.add("message", type);
  message.innerHTML = `<p>${text}</p><span>${currentTime()}</span>`;

  chatBox.appendChild(message);

  // Scroll otomatis ke bawah
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Fungsi balasan otomatis bot
function autoReply() {
  const replies = [
    "Baik, saya bantu ya 👍",
    "Sip, terima kasih informasinya!",
    "Okee, catat 👌",
    "Mantap bro 😎🔥",
    "Boleh jelaskan lebih detail?",
  ];

  const randomReply = replies[Math.floor(Math.random() * replies.length)];
  addMessage(randomReply, "other");
}

// Fungsi mengambil jam saat ini
function currentTime() {
  const now = new Date();
  return now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0");
}
