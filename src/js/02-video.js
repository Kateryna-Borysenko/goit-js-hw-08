import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

//событие 
player.on('timeupdate', data => {
    console.log(data); //{seconds: 1.765, percent: 0.003, duration: 571.563}
    //доступ к секутдам

    throttle(localStorage.setItem('videoplayer-current-time', data.seconds), 500); //запись в хранилище
});

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0); //считываю с хранилища



