let currentIndex = 0;
let currentItems = [];
let modalTitle = "";
let modalDesc = "";

function openModal(items, title, desc) {
    currentItems = items;
    currentIndex = 0;
    modalTitle = title;
    modalDesc = desc;
    showModalItem();
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-container").innerHTML = "";
}

function prevItem() {
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    showModalItem();
}

function nextItem() {
    currentIndex = (currentIndex + 1) % currentItems.length;
    showModalItem();
}

function showModalItem() {
    const container = document.getElementById("modal-container");
    container.innerHTML = "";
    const current = currentItems[currentIndex];

    if (current.startsWith("http")) {
        const iframe = document.createElement("iframe");
        iframe.src = current.replace("watch?v=", "embed/"); // Youtube embed
        iframe.width = "100%";
        iframe.height = "450";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
    } else {
        const img = document.createElement("img");
        img.src = current;
        container.appendChild(img);
    }

    document.getElementById("modal-title").textContent = modalTitle;
    document.getElementById("modal-desc").textContent = modalDesc;
}
