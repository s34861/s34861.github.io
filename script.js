let isOpening = false;

// ==========================================
// ⚙️ ตั้งค่าเวลา (หน่วยเป็นมิลลิวินาที : 1000 ms = 1 วินาที)
// ==========================================
const CONFIG = {
    videoDelay: 1000,   // รอกี่วิถึงเริ่มเล่นวิดีโอ (ปัจจุบัน 1 วิ)
    flashFadeOut: 2000, // รอกี่วิถึงจางแสงขาวออก (ปัจจุบัน 2 วิ)
    btnDelay: 12000      // ⏱️ รอกี่วิถึงให้ปุ่มกดไปหน้า index แสดงขึ้นมา (ปรับแก้ตรงนี้)
};

function triggerPackOpening() {
    const flashOverlay = document.getElementById('whiteFlash');
    const videoContainer = document.getElementById('fullscreenVideo');
    const packVideo = document.getElementById('packVideo');
    const actionBtn = document.getElementById('videoActionBtn');

    if (!packVideo || !flashOverlay) return;
    if (isOpening) return;
    
    isOpening = true;

    // 1. ค่อยๆ เฟดเปิดแสงขาวเต็มจอ
    flashOverlay.classList.add('active');

    // 2. เปิดและเล่นวิดีโอ
    setTimeout(() => {
        if (videoContainer && packVideo) {
            videoContainer.style.display = 'block';
            packVideo.currentTime = 0;
            packVideo.play().catch(err => {
                console.warn("Video Play Error:", err);
            });
        }
    }, CONFIG.videoDelay);

    // 3. จางแสงขาวออก ให้เห็นวิดีโอ
    setTimeout(() => {
        flashOverlay.classList.remove('active');
    }, CONFIG.flashFadeOut);

    // 4. แสดงปุ่มกดไปหน้า Index (หน่วงเวลาตามที่ตั้งไว้)
    setTimeout(() => {
        if (actionBtn) {
            actionBtn.style.display = 'block';
            actionBtn.classList.add('fade-in'); // เพิ่ม Animation ค่อยๆ เฟดขึ้นมา
        }
    }, CONFIG.btnDelay);
}
