const background = document.querySelector('#background'); // background derived from album cover below
const thumbnail = document.querySelector('#thumbnail'); // album cover 
const song = document.querySelector('#song'); // audio object

const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears
const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
songs = ['https://pagalworld.nl/files/download/id/25120', 'https://pagalworld.nl/files/download/id/24305']; // object storing paths for audio objects
thumbnails = ['data:image/jpeg;base64,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', 'https://www.abc.net.au/cm/rimage/10489108-16x9-large.jpg?v=2']; // object storing paths for album covers and backgrounds
songArtists = ['Eminem', 'Eminem1']; // object storing track artists
songTitles = ["Don't Hurt Yourself", "Not afraid"]; // object storing track titles

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song'),
        thumbnail = document.querySelector('#thumbnail');

        pPause.src = "pause.png"
        thumbnail.style.transform = "scale(1.15)";
        
        song.play();
        playing = false;
    } else {
        pPause.src = "play.png"
        thumbnail.style.transform = "scale(1)"
        
        song.pause();
        playing = true;
    }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track 
function nextSong() {
    songIndex++;
    if (songIndex > 1) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 1;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};