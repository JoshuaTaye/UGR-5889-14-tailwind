let slides = document.querySelectorAll(".slide__container");
let index = 0;

function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"),
      list.classList.remove("absolute"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"),
      list.classList.add("absolute"));
}
function sendMessage(message) {
  const chatBox = document.getElementById("chatbox__child");

  let botReply = "";
  if (message === "Talk to me") {
    botReply =
      "Contact me via tayejoshua4@gmail.com or phone: +251-943-015-328";
  } else if (message === "Get my CV") {
    botReply = `
      You can download my CV <a href="CV.docx" class="link" download>here</a>.
    `;
  } else {
    botReply = "Sorry, I cannot help with that at the moment.";
  }

  const formattedReply = `
    <div><strong>You:</strong> ${message}  </div>
    <div><strong>Bot:</strong> ${botReply}  </div>
    <hr>
  `;

  chatBox.innerHTML += formattedReply;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showContact() {
  let contactInfo = document.getElementById("contact-info");
  if (contactInfo.classList.contains('hidden')) {
    contactInfo.classList.remove("hidden");
  } else {
    contactInfo.classList.add("hidden");
  }
}

function openLink(link) {
  window.open(link, "_blank");
}

const videoSlider = document.getElementById("video-slider");
const videoElement = document.getElementById("video");
const titleOverlay = document.getElementById("title-overlay");
const paragraphOverlay = document.getElementById("paragraph-overlay");
const p1 = `Amidst the ceaseless symphony of honking horns and hurried 
footsteps, lies an unspoken beauty waiting to be uncovered. In the 
pulsating heart of urban chaos exists a harmonious pattern that can 
only be seen through the lens of the one who takes a moment to observe.`;
const p2 = `With meticulous precision, twigs become the foundation, 
carefully intertwined to form a sturdy base. Each twig, handpicked and 
delicately placed, a testament to the bird's discerning eye for design 
and structural integrity.`;
const p3 = `In the canvas of the cerulean heavens, clouds drift as
ethereal storytellers, weaving narratives in wisps and
billows, their silent whispers carrying secrets of the
skies. Each form, a brushstroke of nature's artistry,
dances across the vast expanse, a transient gallery of
cottony sculptures, painting the firmament with transient
hues of dawn's blush and dusk's farewell.`;
const p4 = `Walking is my sanctuary, my daily ritual of connection
with the world around me. With every step, I feel the
ground beneath me, grounding my thoughts and emotions. The
rhythm of each stride seems to sync with the pulse of life
itself. It's a simple act that transcends its simplicity,
inviting me to witness the beauty that often escapes
hurried gazes.`;
const videoList = [
  { path: "videos/megenagna.mp4", title: "መገናኛ", paragraph: p1 },
  {
    path: "videos/birdy.mp4",
    title: "Intricacy",
    paragraph: p2,
  },
  {
    path: "videos/clouds.mp4",
    title: "Clouds",
    paragraph: p3,
  },
  {
    path: "videos/walking.mp4",
    title: "Walking",
    paragraph: p4,
  },
];

let currentIndex = 0;

function showVideo(index) {
  if (index < 0) {
    index = videoList.length - 1;
  } else if (index >= videoList.length) {
    index = 0;
  }

  const { path, title, paragraph } = videoList[index];
  videoElement.src = path;
  titleOverlay.textContent = title;
  paragraphOverlay.textContent = paragraph;
}

function nextVideo() {
  currentIndex = (currentIndex + 1) % videoList.length;
  showVideo(currentIndex);
}

function prevVideo() {
  currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
  showVideo(currentIndex);
}

showVideo(currentIndex);
