import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const myPlayer = document.querySelector('iframe');
const player = new Player(myPlayer);

player.on('timeupdate', throttle(onPause, 1000));
function onPause(data) {
  const currentTime = JSON.stringify(data.seconds);

  localStorage.setItem('videoplayer-current-time', currentTime);
}

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
