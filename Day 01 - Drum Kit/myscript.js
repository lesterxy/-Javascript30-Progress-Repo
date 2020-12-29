function playSound(e) {         
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);     //query the audio based on activated keycode 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);        //query the key to highlight when pressed
    if(!audio) return;  // if there is no audio (e.g. other keys) => return to stop function from running
    
    key.classList.add('playing'); //add playing visual effects
    audio.currentTime = 0; //rewind to start so can play each key fast 
    audio.play();       //call audio constant and command it to play
}

function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== 'transform') return; //skip if it's not transformed
    this.classList.remove('playing');  //this refers to "key" as called in foreach
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound); // listen for keydown event, then run function playsound (event)