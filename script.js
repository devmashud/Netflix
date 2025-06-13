const scroll = new LocomotiveScroll({
    el: document.querySelector("#smooth"),
    smooth: true
});


function circleMouseFollower() {
    window.addEventListener("mousemove", (dets) => {
       document.querySelector("#mini-circle").style.transform = 
        `translate(${dets.clientX}px, ${dets.clientY}px)`;
})
}

circleMouseFollower();