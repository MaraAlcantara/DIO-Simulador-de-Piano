
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

//CAPTURANDO A TECLA DIGITADA:
document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handelVolume = (e) => {
    audio.volume = e.target.value;
};

const showHidekeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSider.addEventListener("input", handelVolume);

keysCheck.addEventListener("click", showHidekeys);