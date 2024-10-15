let currentItem = 0;

setTimeout(() => {
    const controls = document.querySelectorAll(".control");
    const items = document.querySelectorAll(".item");
    
    const maxItems = items.length;

    controls.forEach(control => {
        control.addEventListener("click", function() {
            const isLeft = this.classList.contains("arrow-left");
                isLeft ? currentItem -= 1 : currentItem += 1;
                currentItem >= maxItems ? currentItem = 0 : currentItem < 0 ? currentItem = maxItems - 1 : null;
    
                items.forEach(item => { item.classList.remove("current-item"), item.children[0].style.display = "none" });
                items[currentItem].scrollIntoView({
                    block: "nearest",
                    inline: "center",
                    behavior: "smooth"
                });
                items[currentItem].classList.add("current-item");
                items[currentItem].children[0].style.display = "block";
            })
    })
}, 1000)