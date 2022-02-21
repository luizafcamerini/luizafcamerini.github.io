document.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".circulo").forEach((shift) => {
        const posição = shift.getAttribute("value")
        const x = (window.innerWidth - event.pageX * posição)/90;
        const y = (window.innerWidth - event.pageY * posição)/90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}