import state from "./state.js"

//const treeMusic = document.getElementById('tree')


const sounds = {
  tree: document.getElementById('tree'),
  rain: document.getElementById('rain'),
  coffee: document.getElementById('coffee'),
  fire: document.getElementById('fire'),
}

const playMusic = (music) => {
  for (var key in sounds) {
    sounds[key].pause();
  }
  sounds[music].play();
}


musicOn.addEventListener('click', (event) => {
  //state.music.soundOn = document.documentElement.classList.toggle('musicOn')

  //event.target.querySelector('audio').play();

playMusic(event.target.querySelector('audio').id);


  /* if (action === 'tree') {
    treeMusic.play()
  } */
})

//rainAudio.loop = true
//coffeAudio.loop = true
//fireAudio.loop = true 