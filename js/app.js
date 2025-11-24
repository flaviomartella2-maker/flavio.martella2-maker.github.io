const mainContainer = document.getElementById("main-container");

function generateHome() {
    categories.forEach(cat => {
        const section = document.createElement("section");
        section.className = "category-row";
        section.id = cat.id;

        const h2 = document.createElement("h2");
        h2.textContent = cat.name;
        section.appendChild(h2);

        const previewRow = document.createElement("div");
        previewRow.className = "preview-row";

        cat.items.forEach(item => {
            const box = document.createElement("div");
            box.className = "preview-box";

            box.addEventListener("click", () => openModal(item.images.concat(item.video ? [item.video] : []), item.title, item.description));

            const wrapper = document.createElement("div");
            wrapper.className = "img-wrapper";

            const img = document.createElement("img");
            img.src = item.images[0];
            img.alt = item.title;

            wrapper.appendChild(img);
            box.appendChild(wrapper);
            previewRow.appendChild(box);
        });

        section.appendChild(previewRow);
        mainContainer.appendChild(section);
    });
}

// Genera home al caricamento
window.onload = generateHome;
