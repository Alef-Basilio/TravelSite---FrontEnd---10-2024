const collection = document.querySelector(".collection");

export function addCollectionItems(h3Text, h4Text, aText, aHref) {
    const item = document.createElement("div");
    const title = document.createElement("div");
    const links = document.createElement("div");
    const ul = document.createElement("ul");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    item.classList.add("item");
    title.classList.add("title");
    links.classList.add("links");

    h3.textContent = h3Text;
    h4.textContent = h4Text;

    title.appendChild(h3);
    title.appendChild(h4);

    for (let i = 0; i < aText.length; i++) {
        const a = document.createElement("a");
        const li = document.createElement("li");
        a.href = aHref[i];
        a.target = "_blank";
        a.textContent = aText[i];
        li.appendChild(a);
        ul.appendChild(li);
    }

    links.appendChild(ul);
    item.appendChild(title);
    item.appendChild(links);

    collection.childElementCount === 0 ? item.classList.add("current-item") : "";

    collection.appendChild(item);
}