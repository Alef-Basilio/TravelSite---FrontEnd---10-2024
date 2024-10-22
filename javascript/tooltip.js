const tooltipText = document.getElementsByClassName("tooltipText");

window.onmousemove = function(e) {
    if (window.innerWidth > 1000) {
        Array.prototype.forEach.call(tooltipText, element => {
            element.style.display = "block";
        });
        let checkY = e.clientY < 40 ? -30 : 40;

        for (let i = 0; i < tooltipText.length; i++) {
            const radius = checkY == -30 ? "6px" : "0";
            tooltipText[i].style.borderBottomLeftRadius = radius;
            tooltipText[i].style.borderTopLeftRadius = radius == "6px" ? "0" : "6px";
        
            tooltipText[i].style.top = (e.clientY - checkY) + "px";
            tooltipText[i].style.left = (e.clientX + 10) + "px";
        }
    } else {
        Array.prototype.forEach.call(tooltipText, element => {
            element.style.display = "none";
        });
    }
}