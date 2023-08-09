console.log("Welcome to SPotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let giF = document.getElementById('giF');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
    {songName: "SaLam-E-IsHqe", filePath: "songs/1.mp3", coverPath: "covers/1.jpg",},
    {songName: "NCS-Song-1", filePath: "songs/2.mp3", coverPath: "covers/2.jpg",},
    {songName: "Bhuladena", filePath: "songs/3.mp3", coverPath: "covers/3.jpg",},
    {songName: "KGF-Mass BGM", filePath: "songs/4.mp3", coverPath: "covers/4.jpg",},
    {songName: "Leo-Movie-BGM", filePath: "songs/5.mp3", coverPath: "covers/5.jpg",},
    {songName: "Rangisari", filePath: "songs/6.mp3", coverPath: "covers/6.jpg",},
    {songName: "Tera-Hawale-Arijit Singh", filePath: "songs/7.mp3", coverPath: "covers/7.jpg",},
    {songName: "NCS-song-2", filePath: "songs/8.mp3", coverPath: "covers/8.jpg",},
    {songName: "NCS-song-3", filePath: "songs/9.mp3", coverPath: "covers/9.jpg",},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

//audioElement.play()

//Handle pLay/Pause Click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

});

// Listen to event
audioElement.addEventListener('timeupdate', () => {
    // update  seekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const  makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (event)=> {
        makeAllPlays();
        gif.style.opacity = 1;
        songIndex = parseInt(event.target.id);
        event.target.classList.remove('fa-play-circle');
        event.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });

});

document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=8){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

//previous-play
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    // changing the song name
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});



