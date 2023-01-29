import player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer - current - time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveTime(data) {
  const time = data.seconds;
  localStorage.saveTime(STORAGE_KEY, time);
}

function updateTime() {
  const currentTime = localStorage.getitem(STORAGE_KEY);

  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
updateTime();
player.on('timeupdate', throttle(aveTime));
