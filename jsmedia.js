function onYouTubeIframeAPIReady() {
    // Create the YouTube video player
    var player = new YT.Player('videoPlayer', {
        videoId: 'zlcQKLQTZrI', // YouTube video ID
        playerVars: {
            autoplay: 1, // Auto-play the video
            controls: 1, // Hide player controls
            modestbranding: 1, // Hide YouTube logo
            showinfo: 0, // Hide video title and uploader information
            loop: 1, // Loop the video
            mute: 1, // Start the video on mute
            enablejsapi: 1 // Enable the JavaScript API
        },
        events: {
            onReady: function(event) {
                // Mute the video initially
                event.target.mute();
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const slideshowContainer = document.getElementById("slideshow-container");
    const images = slideshowContainer.getElementsByTagName("img");

    let currentImageIndex = 0;

    function showImage(index) {
        for (let i = 0; i < images.length; i++) {
            if (i === index) {
                images[i].classList.add("active");
            } else {
                images[i].classList.remove("active");
            }
        }
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    // Set the initial image
    showImage(currentImageIndex);

    // Start the slideshow
    setInterval(nextImage, 2000);
});
