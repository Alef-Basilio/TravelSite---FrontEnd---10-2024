const collection = document.querySelector(".collectionAllItems");

export function collectionItem(imgSrc, h4Text, h2Text, pText) {
    const item = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("div");
    const text = document.createElement("div");
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    img.classList.add("image");
    item.classList.add("collectionItem");
    title.classList.add("title");
    text.classList.add("text");

    img.src = imgSrc;
    img.alt = h2Text + " " + "event image";
    h2.textContent = h2Text;
    h4.textContent = h4Text;
    text.textContent = pText;

    title.appendChild(h4);
    title.appendChild(h2);
    text.appendChild(p);

    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(text);

    collection.childElementCount === 0 ? item.classList.add("current-item") : "";
    
    collection.appendChild(item);
}