const video = document.querySelector(".js-video");
const muteBtn = document.querySelector(".js-muteBtn");
video.autoplay = true;
video.muted = true;
video.loop = true;

const handleScroll =() => {
    const scrollHeight = Math.floor(window.scrollY);
    if(scrollHeight > 200){
        video.pause();
    }
    else{
        video.play();
    }
};

const handleMuteBtnClick = () => {
    console.log("Btn Clicked!");
    if(video.muted)
    {
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    }
    else
    {
        video.muted = true;
        muteBtn.innerHTML = "Unmuted";
    }
}

muteBtn.addEventListener("click", handleMuteBtnClick);
window.addEventListener("scroll", handleScroll);

