const sounds = {
    music: new Audio('sound/music.mp3'),
    musicAlt: new Audio('sound/music-alt.mp3'),
    type: new Audio('sound/type.wav'),
    digit: new Audio('sound/digit.wav'),
    timeRefill: new Audio('sound/time-refill.wav'),
    score: new Audio('sound/score.wav'),
    letterMiss: new Audio('sound/letter-miss.wav'),
    digitMiss: new Audio('sound/digit-miss.wav'),
    gameLose: new Audio('sound/game-lose.wav'),
    gameWin: new Audio('sound/game-win.wav')
};

sounds.music.loop = true;
sounds.musicAlt.loop = true;

function playSound(soundName, volume = 1) {
    const sound = sounds[soundName];
    sound.pause();
    sound.currentTime = 0;
    sound.volume = volume;
    sound.play();
}

function stopSound(soundName) {
    const sound = sounds[soundName];
    sound.pause();
    sound.currentTime = 0;
}

export { playSound, stopSound };