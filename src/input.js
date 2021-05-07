import { isTouchDevice } from './utils.js';
import { handleInput, resetGame } from './main.js';

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

export { enableInput, disableInput, enableResetInput };