let isOpening = false;

function triggerPackOpening() {
    if (isOpening) return;
    isOpening = true;

    const flashOverlay = document.getElementById('whiteFlash');
    const videoContainer = document.getElementById('fullscreenVideo');
    const packVideo = document.getElementById('packVideo');
    const actionBtn = document.getElementById('videoActionBtn');

    // 1. ค่อยๆ เฟดเปิดแสงขาวเต็มจอ
    if (flashOverlay) {
        flashOverlay.classList.add('active');
    }

    // 2. ผ่านไป 1 วิ เปิดวิดีโอด้านหลัง
    setTimeout(() => {
        if (videoContainer && packVideo) {
            videoContainer.style.display = 'block';
            packVideo.currentTime = 0;
            packVideo.play().catch(err => {
                console.log("Video Play Error: ", err);
            });
        }
    }, 1000);

    // 3. ครบ 2 วิ จางแสงขาวออก ให้เห็นวิดีโอเล่นเต็มจอ
    setTimeout(() => {
        if (flashOverlay) {
            flashOverlay.classList.remove('active');
        }
        if (actionBtn) {
            actionBtn.style.display = 'block';
        }
    }, 2000);
}
