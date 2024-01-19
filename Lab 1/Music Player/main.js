const audioPlayer = document.getElementById('audio-player');
const displayedImage = document.getElementById('song-image');

const volumeBar = document.getElementById('volume-bar');
const seekBar = document.getElementById('seek-bar');
const rateBar = document.getElementById('rate-bar');

function playAudio(audioFile, imageFile) {
    audioPlayer.src = audioFile;
    seekBar.value = "0";
    audioPlayer.play();

    displayedImage.src = imageFile;
}

function play() {
    audioPlayer.play();
}

function pause() {
    audioPlayer.pause();
}

function stop() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

audioPlayer.addEventListener('loadedmetadata', function () {
    seekBar.max = audioPlayer.duration;
});

audioPlayer.addEventListener('timeupdate', function () {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    if (!isNaN(duration)) {
        seekBar.value = (currentTime / duration) * 100;
    }
});

volumeBar.addEventListener('input', function () {
    audioPlayer.volume = this.value;
    updateVolumeDisplay();
});

seekBar.addEventListener('input', function () {
    audioPlayer.currentTime = parseFloat(this.value) * audioPlayer.duration / 100;
});

rateBar.addEventListener('input', function () {
    audioPlayer.playbackRate = this.value;
});