function playMusic(index) {
    let songs = [
        "assets/never-knew.mp3",
        "assets/almost-there.mp3",
        "assets/vejo-enfim.mp3",
        "assets/i-see-the-light.mp3"
    ];
    
    let music = document.getElementById("music");
    music.src = songs[index];
    music.play();
}
