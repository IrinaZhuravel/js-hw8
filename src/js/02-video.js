import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle((data) => {
 localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000))

const currentTime = localStorage.getItem("videoplayer-current-time");
const time = parseFloat(currentTime);

if (!isNaN(time) && time >= 0) {
player.setCurrentTime(time).then(function(seconds) {
    console.log("Воспроизведение с ", seconds, " секунды")
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.error("Время выходит за пределы продолжительности видео.")
            break;
        default:
            console.error("Произошла ошибка при установке времени:", error);
            break;
    }
});}