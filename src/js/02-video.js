import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerIframe = document.getElementById('vimeo-player');
const player = new Player(playerIframe);

const storageItem = 'videoplayer-current-time';

const saveCurrentTime = time => {
  localStorage.setItem(storageItem, time);
};

const getCurrentTime = () => {
  return parseFloat(localStorage.getItem(storageItem) || 0);
};

player.ready().then(() => {

  player.setCurrentTime(getCurrentTime());

  
  player.on('timeupdate', throttle(event => {
    
    saveCurrentTime(event.seconds);
  }, 1000)); 
});
