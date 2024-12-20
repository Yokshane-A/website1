// Fungsi untuk menampilkan informasi destinasi
function showInfo(destinasi) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const text = document.getElementById("popup-text");

    if (destinasi === "Bali") {
        title.innerText = "Bali";
        text.innerText = "Bali adalah surga wisata yang terkenal dengan pantai indah, budaya, dan kuil-kuil yang megah.";
    } else if (destinasi === "Raja Ampat") {
        title.innerText = "Raja Ampat";
        text.innerText = "Raja Ampat menawarkan keindahan alam bawah laut yang spektakuler dan pemandangan pulau-pulau kecil yang menakjubkan.";
    } else if (destinasi === "Yogyakarta") {
        title.innerText = "Yogyakarta";
        text.innerText = "Yogyakarta dikenal dengan kebudayaan Jawa yang kaya, Candi Borobudur, dan suasana tradisionalnya.";
    }

    popup.style.display = "flex";
}

// Fungsi untuk menutup pop-up
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}