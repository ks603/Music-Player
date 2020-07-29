const image = document.querySelector('img')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector('audio')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

// Music
const songs = [
  {
    name: 'Jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'Jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'Jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
]

//  Check if Playing
let isPlaying = false

// Play
const playSong = () => {
  isPlaying = true
  playBtn.classList.replace('fa-play', 'fa-pause')
  playBtn.setAttribute('title', 'Pause')
  music.play()
}

// Pause
const pauseSong = () => {
  isPlaying = false
  playBtn.classList.replace('fa-pause', 'fa-play')
  playBtn.setAttribute('title', 'Play')
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

// Update the DOM

const loadSong = (song) => {
  title.textContent = song.displayName
  artist.textContent = song.artist
  music.src = `music/${song.name}.mp3`
  image.src = `img/${song.name}.jpg`
}

// Current Song
let songIndex = 0

//  Next Song
const nextSong = () => {
  songIndex++
  loadSong(songs[songIndex])
}

const prevSong = () => {
  songIndex--
  loadSong(songs[songIndex])
}

// On Load - Select first song
loadSong(songs[songIndex])

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
