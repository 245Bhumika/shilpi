const correctName = "shilshi";
const wishes = [
  "You are becoming everything you once dreamed of. ✨",
  "You have the power to shape your future, don’t forget that. 💪",
  "May every challenge be an opportunity in disguise. 🚀",
  "You are enough. You always were. You always will be. 🌸",
  "Your kindness makes this world brighter. 🌟",
  "Here’s to finding peace in your own company. 🕊️",
  "Every setback is just a setup for a comeback. 🔁",
  "Keep being curious, fearless, and beautifully *you*. 💡",
  "You’re not behind. You’re exactly where you need to be. ⏳",
  "Smile, even on the hard days – you’ve got this. 😊",
  "The world needs your voice. Speak your truth. 🗣️",
  "You are not alone. I’m always cheering for you. 📣",
  "Let your heart guide you, always. ❤️",
  "You will bloom in your own time. Be patient. 🌷",
  "You deserve love, rest, and joy – every single day. 🌈",
  "Don’t be afraid to restart. New beginnings are beautiful. 🌅",
  "Your dreams are valid. Chase them shamelessly. 🌠",
  "Celebrate yourself, even when no one else does. 🎉",
  "Never doubt your magic – it’s real. 🪄",
  "You are turning into someone you would be proud of. 🧭",
  "One year from now, you won’t believe how far you’ve come. 🎯"
];

function checkName() {
  const name = document.getElementById("nameInput").value.toLowerCase();
  if (name === correctName) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    loadLetter();
    loadWishes();
  } else {
    alert("Oops! This gift is only for Shilpi 🌸");
  }
}

function loadLetter() {
  const letter = `
Dear Shilpi,

Happy Birthday to the kindest, smartest, and beautiful soul. 💖  
In a world full of people, I’m so grateful that I found *you* in this little corner of our hostel life. Your smile, your strength, your stories – they’ve all touched me in ways I can’t fully describe.

From,  
Bhumika 💜
`;
  document.getElementById("letterText").innerText = letter;
}

function loadWishes() {
  const container = document.getElementById("wishes-container");
  wishes.forEach((wish, index) => {
    const btn = document.createElement("button");
    btn.className = "wish-button";
    btn.innerText = `Wish ${index + 1}`;
    btn.addEventListener("mouseover", () => {
      btn.innerText = wish;
    });
    btn.addEventListener("mouseout", () => {
      btn.innerText = `Wish ${index + 1}`;
    });
    container.appendChild(btn);
  });
}
