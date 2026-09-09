function openPack() {
    const packStage = document.getElementById('packStage');
    const videoStage = document.getElementById('videoStage');
    const actionArea = document.getElementById('actionArea');
    const video = document.getElementById('packVideo');

    if (packStage && videoStage && actionArea) {
        packStage.style.display = 'none';
        videoStage.style.display = 'block';
        actionArea.style.display = 'block';

        if (video) {
            video.play().catch(error => {
                console.log("Auto-play blocked or error: ", error);
            });

            // ปลดล็อกบรรทัดล่างสุดนี้ หากต้องการให้พอคลิปเล่นจบ แล้วย้ายไปหน้า index.html อัตโนมัติ
            // video.onended = () => { window.location.href = "index.html"; };
        }
    }
}
