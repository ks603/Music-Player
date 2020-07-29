const music = document.querySelector('audio')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

//  Check if Playing
let isPlaying = false

// Play
const playSong = () => {
  isPlaying = true
  music.play()
}

// Pause
const pauseSong = () => {
  isPlaying = false
  music.pause()
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    playSong()
  } else {
    pauseSong()
  }
})
