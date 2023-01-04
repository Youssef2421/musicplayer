let greetingSongs = [
  {
    track: "music/The Chainsmokers - Hope ft. Winona Oak.mp3",
    image: "images/Sick-Boy.png",
    title: "Hope",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:00",
  },
  {
    track: "music/The Chainsmokers - Beach House.mp3",
    image: "images/Sick-Boy.png",
    title: "Beach House",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:26",
  },
  {
    track: "music/The Chainsmokers - Side Effects ft. Emily Warren.mp3",
    image: "images/Sick-Boy.png",
    title: "Side Effects",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "2:54",
  },
  {
    track: "music/The Chainsmokers Somebody ft. Drew Love.mp3",
    image: "images/Sick-Boy.png",
    title: "Somebody",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:42",
  },
  {
    track: "music/The Chainsmokers ‒ Sick Boy.mp3",
    image: "images/Sick-Boy.png",
    title: "Sick Boy",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:14",
  },
  {
    track: "music/The Chainsmokers - You Owe Me.mp3",
    image: "images/Sick-Boy.png",
    title: "You Owe Me",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:09",
  },
];
let madeForYou = [
  {
    track: "music/The Chainsmokers - Hope ft. Winona Oak.mp3",
    image: "images/Sick-Boy.png",
    title: "Hope",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:00",
  },
  {
    track: "music/The Chainsmokers - Beach House.mp3",
    image: "images/Sick-Boy.png",
    title: "Beach House",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:26",
  },
  {
    track: "music/The Chainsmokers - Side Effects ft. Emily Warren.mp3",
    image: "images/Sick-Boy.png",
    title: "Side Effects",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "2:54",
  },
  {
    track: "music/The Chainsmokers Somebody ft. Drew Love.mp3",
    image: "images/Sick-Boy.png",
    title: "Somebody",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:42",
  },
  {
    track: "music/The Chainsmokers ‒ Sick Boy.mp3",
    image: "images/Sick-Boy.png",
    title: "Sick Boy",
    artist: "The Chainsmokers",
    album: "Sick Boy",
    duration: "3:14",
  },
];
const cards = document.getElementsByClassName("card");
const shuffleBtn = document.getElementById("shuffle-btn");
const previousBtn = document.getElementById("previous-btn");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const repeatBtn = document.getElementById("repeat-btn");
const playerTrackImg = document.getElementById("player-track-img");
const playerTrackTitle = document.getElementById("player-track-title");
const playerTrackArtist = document.getElementById("player-track-artist");
const audioEl = document.getElementById("audio-el");
const currentDurationEl = document.getElementById("current-duration-el");
const totalDurationEl = document.getElementById("total-duration-el");
const seekSlider = document.getElementById("seek-slider");
const volumeSlider = document.getElementById("volume-slider");
let noSource = true;
let isPlaying = false;
let isRandom = false;
let isRepeated = false;

for (i = 0; i < greetingSongs.length; i++) {
  createSCard();
}
function createSCard() {
  const sCard = document.createElement("div");
  sCard.classList.add("s-card");
  sCard.innerHTML = `
        <img src="${greetingSongs[i].image}" alt="" />
        <div>
            <h4>${greetingSongs[i].title}</h4>
            <i class="fa-solid fa-circle-play"></i>
        </div>
        <audio src="${greetingSongs[i].track}"></audio>
    `;
  sCard.addEventListener("click", function () {
    noSource = false;
    isPlaying = true;
    playBtn.src = "images/pause.svg";
    playerTrackImg.src = sCard.querySelector("img").src;
    playerTrackTitle.textContent = sCard.querySelector("h4").innerHTML;
    playerTrackArtist.textContent = "The Chainsmokers";
    setTimeout(() => {
      let totalMinutes = parseInt(audioEl.duration / 60);
      let totalSeconds = Math.floor(audioEl.duration - totalMinutes * 60);
      if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds;
      }
      totalDurationEl.textContent = totalMinutes + ":" + totalSeconds;
    }, 100);
    seekSlider.max = sCard.querySelector("audio").duration;
    audioEl.src = sCard.querySelector("audio").src;
    audioEl.play();
  });
  document.getElementById("row-2").appendChild(sCard);
}

function createLCard() {
  const lCard = document.createElement("div");
  lCard.classList.add("l-card");
  lCard.innerHTML = `
        <img src="${madeForYou[i].image}" alt="" />
        <h3>${madeForYou[i].title}</h3>
        <p>${madeForYou[i].artist}</p>
        <i class="fa-solid fa-circle-play"></i>
        <audio src="${madeForYou[i].track}"></audio>
    `;
  lCard.addEventListener("click", function () {
    noSource = false;
    isPlaying = true;
    playBtn.src = "images/pause.svg";
    playerTrackImg.src = lCard.querySelector("img").src;
    playerTrackTitle.textContent = lCard.querySelector("h3").innerHTML;
    playerTrackArtist.textContent = "The Chainsmokers";
    setTimeout(() => {
      let totalMinutes = parseInt(audioEl.duration / 60);
      let totalSeconds = Math.floor(audioEl.duration - totalMinutes * 60);
      if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds;
      }
      totalDurationEl.textContent = totalMinutes + ":" + totalSeconds;
    }, 100);
    seekSlider.max = lCard.querySelector("audio").duration;
    audioEl.src = lCard.querySelector("audio").src;
    audioEl.play();
  });
  document.getElementById("row-3").appendChild(lCard);
}
for (i = 0; i < madeForYou.length; i++) {
  createLCard();
}

audioEl.addEventListener("ended", (event) => {
  setTimeout(() => {
    seekSlider.max = audioEl.duration;
  }, 500);
});

previousBtn.addEventListener("click", function () {
  setTimeout(() => {
    seekSlider.max = audioEl.duration;
  }, 500);
});

nextBtn.addEventListener("click", function () {
  setTimeout(() => {
    seekSlider.max = audioEl.duration;
  }, 500);
});

playBtn.addEventListener("click", function () {
  if (noSource === true) {
  } else {
    if (isPlaying == false) {
      isPlaying = true;
      playBtn.src = "images/pause.svg";
      audioEl.play();
    } else {
      isPlaying = false;
      playBtn.src = "images/play.svg";
      audioEl.pause();
    }
  }
});

shuffleBtn.addEventListener("click", function () {
  if (isRandom === false) {
    isRandom = true;
    shuffleBtn.style.filter =
      "invert(68%) sepia(18%) saturate(7271%) hue-rotate(149deg) brightness(102%) contrast(107%)";
  } else if (isRandom === true) {
    isRandom = false;
    shuffleBtn.style.filter = "invert(80%)";
  }
});

repeatBtn.addEventListener("click", function () {
  if (isRepeated === false) {
    isRepeated = true;
    repeatBtn.style.filter =
      "invert(68%) sepia(18%) saturate(7271%) hue-rotate(149deg) brightness(102%) contrast(107%)";
  } else if (isRepeated === true) {
    isRepeated = false;
    repeatBtn.style.filter = "invert(80%)";
  }
});

audioEl.addEventListener("timeupdate", () => {
  seekSlider.value = audioEl.currentTime;
  let currentMinutes = parseInt(audioEl.currentTime / 60);
  let currentSeconds = Math.floor(audioEl.currentTime - currentMinutes * 60);
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }
  currentDurationEl.textContent = currentMinutes + ":" + currentSeconds;
});

seekSlider.addEventListener("change", () => {
  audioEl.currentTime = seekSlider.value;
});

window.onload = function () {
  audioEl.volume = volumeSlider.value / 100;
};

volumeSlider.addEventListener("change", function () {
  audioEl.volume = volumeSlider.value / 100;
});
