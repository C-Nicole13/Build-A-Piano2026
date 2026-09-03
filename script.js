// To use keys to play notes
const WHITE_KEYS = ['s', 'd', 'f', 'h', 'j', 'k', 'l'];
const BLACK_KEYS = ['e', 'r', 'y', 'u', 'r'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});

// Select all the keys
const keys = document.querySelectorAll('.key');

// Listener for click events on each key
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// Handler
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');

    noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
  
    // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }
}