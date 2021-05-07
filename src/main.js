import { isTouchDevice, shuffleArray }  from './utils.js';
import { playSound, stopSound } from './sound.js';
import words from './words.js';

const mainContainer = document.querySelector('main');
const startButton = document.querySelector('.start-btn');
const scoreboard = document.querySelector('.scoreboard');
const wordSlot = document.querySelector('.word-slot');
const digitsSlot = document.querySelector('.digits');
const timeBarFill = document.querySelector('.fill');
const timeBarBarriers = {
    left: document.querySelector('.fill-barrier.left'),
    right: document.querySelector('.fill-barrier.right')
}
const carlton = document.querySelector('.carlton');

let score = 0,
    timeLimit = 10,
    mistypes = 0,
    currentWord,
    currentDigits;
const timeBarBarrierWidth = 100 / timeLimit / 2;

function initGame() {
    shuffleArray(words);
    currentWord = words[0].split('');
    mountWord();
    mountDigits();
    refillTimeBar();
    timeBarFill.addEventListener("animationend", () => gameOver('loss'));
    enableInput();
}

function mountWord() {
    let splitWord = currentWord.map(c => `<span class="char">${c}</span>`);
    splitWord = splitWord.join('');
    wordSlot.innerHTML = splitWord;
}

function mountDigits() {
    const randomNum = Math.floor(Math.random() * (999 - 100) + 100);
    currentDigits = randomNum.toString().split('');
    const digits = randomNum.toString().split('').map(n => `<span class="digit">${n}</span>`).join('');
    digitsSlot.innerHTML = digits;
}

function handleInput(key) {
    if (/^[a-zA-Z0-9]{1}$/.test(key)) {
        checkMatch(key);
    }
}

function checkMatch(pressedKey) {
    if (isNaN(Number(pressedKey))) {
        if (pressedKey === currentWord[0]) {
            currentWord.shift();
            wordSlot.children[wordSlot.children.length - currentWord.length - 1].classList.add('matched');
            playSound('type', 0.33);
        } else {
            applyPenalty();
            playSound('letterMiss', 0.5);
        }
    
        if (!currentWord.length) {
            modifyScore(1);
            words.shift();
    
            setTimeout(() => {
                if (words.length) {
                    currentWord = words[0].split('');
                    mountWord();
                    playSound('score', 0.3);
                    
                    switch (score) {
                        case 10:
                            scoreboard.dataset.shenanigen = 'true';
                            playSound('music', 0.10);
                            break;
                        case 20:
                            digitsSlot.dataset.shenanigen = 'true';
                            break;
                        case 30:
                            wordSlot.dataset.shenanigen = 'true';
                            stopSound('music');
                            playSound('musicAlt', 0.10);
                            break;
                        case 40:
                            mainContainer.dataset.shenanigen = 'true';
                            carlton.classList.add('dance');
                            break;
                        case 50:
                            gameOver('win');
                    }
                } else {
                    gameOver('win');
                }
            }, 100);
        }
    } else {
        if (pressedKey === currentDigits[0]) {
            currentDigits.shift();
            digitsSlot.children[digitsSlot.children.length - currentDigits.length - 1].classList.add('matched');
            playSound('digit', 0.15);
        } else {
            playSound('digitMiss', 0.15);
        }

        if (!currentDigits.length) {
            refillTimeBar();
            setTimeout(() => {
                mountDigits();
                playSound('timeRefill', 0.1);
            }, 100);
        }
    }
}

function refillTimeBar() {
    timeBarFill.style.setProperty('animation', '');
    void timeBarFill.offsetWidth; // Forces a DOM reflow, needed for animation restart.
    timeBarFill.style.setProperty('animation', `drain linear 1 forwards`);
    timeBarFill.style.setProperty('animation-duration', `${timeLimit - mistypes}s`);
}

function modifyScore(mod) {
    const modifiedScore = score + mod;
    score = modifiedScore;
    scoreboard.innerHTML = `SCORE ${modifiedScore.toString().padStart(2, '0')}`;
}

function addTimeBarBarriers() {
    const currentLeftBarrierWidth = Number(timeBarBarriers.left.style.getPropertyValue('width').replace('%',''));
    const currentRightBarrierWidth = Number(timeBarBarriers.right.style.getPropertyValue('width').replace('%',''));
    timeBarBarriers.left.style.setProperty('width', `${currentLeftBarrierWidth + timeBarBarrierWidth}%`);
    timeBarBarriers.right.style.setProperty('width', `${currentRightBarrierWidth + timeBarBarrierWidth}%`);
    if (Number(timeBarBarriers.left.style.getPropertyValue('width').replace('%','')) === 50) {
        gameOver('loss');
    }
}

function applyPenalty() {
    addTimeBarBarriers();
    mistypes++;
    timeBarFill.style.setProperty('animation-duration', `${timeLimit - mistypes}s`);
}

function resetPenalties() {
    mistypes = 0;
    timeBarBarriers.left.style.removeProperty('width');
    timeBarBarriers.right.style.removeProperty('width');
}

function gameOver(result) {
    disableInput();
    timeBarFill.style.setProperty('animation', '');
    stopSound('music');
    stopSound('musicAlt');
    scoreboard.removeAttribute('data-shenanigen');
    digitsSlot.removeAttribute('data-shenanigen');
    wordSlot.removeAttribute('data-shenanigen');
    mainContainer.removeAttribute('data-shenanigen');
    carlton.classList.remove('dance');
    
    if (result === 'win') {
        wordSlot.innerHTML =
        `<div class="end-message">
            YOU WIN
        </div>`;
        playSound('gameWin', 0.15);
    } else {
        wordSlot.innerHTML =
        `<div class="end-message">
            YOU LOSE<br>
            <div class="char retry">
            r
            </div>etry?
        </div>`;
        playSound('gameLose', 0.5);
        enableResetInput();
    }
}

function resetGame() {
    modifyScore(-score);
    resetPenalties();
    initGame();
}

function handleInputCallback(e) {
    const key = e.key ? e.key : e.data;
    handleInput(key);
}

function enableInput() {
    if (isTouchDevice()) {
        document.querySelector('input').addEventListener('input', handleInputCallback);
    } else {
        document.addEventListener("keyup", handleInputCallback);
    }
}

function disableInput() {
    if (isTouchDevice()) {
        document.querySelector('input').removeEventListener('input', handleInputCallback);
    } else {
        document.removeEventListener("keyup", handleInputCallback);
    }
}

function handleResetCallback(e) {
    if (e.key === 'r' || e.data === 'r') {
        disableResetInput();
        resetGame();
    }
}

function enableResetInput() {
    if (isTouchDevice()) {
        document.querySelector('input').addEventListener('input', handleResetCallback);
    } else {
        document.addEventListener("keyup", handleResetCallback);
    }
}

function disableResetInput() {
    if (isTouchDevice()) {
        document.querySelector('input').removeEventListener('input', handleResetCallback);
    } else {
        document.removeEventListener("keyup", handleResetCallback);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    console.log(`is touch device: ${isTouchDevice()}`);
    startButton.addEventListener('click', () => {
        document.querySelector('input').focus();
        document.querySelector('input').click();
        document.querySelector('.start-screen').remove();
        initGame();
    });
});

/*
TODO:
1. Seperate to modules?
2. Test on more devices and bugfix.
 */