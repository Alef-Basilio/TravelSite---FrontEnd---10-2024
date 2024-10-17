const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
let day = 6;

setTimeout(() => {
    const titles = Array.from(document.getElementsByClassName("title"));

    titles.forEach((title) => {
        day < 10 ? title.children[0].textContent = month + "/" + "0" + day + "/" + year : title.children[0].textContent = month + "/" + day + "/" + year;
        day += 4;
    });
    
}, 1000);