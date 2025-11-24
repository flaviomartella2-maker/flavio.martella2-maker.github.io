/* =============================
   MODALE UNIVERSALE
============================= */

let currentItems = [];
let currentIndex = 0;

function openModal(items, title, desc){
    currentItems = items;
    currentIndex = 0;
    updateModal();
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal').style.display = 'flex';
}

function updateModal(){
    const container = document.getElementById('modal-container');
    container.innerHTML = '';
    const item = currentItems[currentIndex];

    // VIDEO YOUTUBE
    if(item.startsWith('http')){
        const iframe = document.createElement('iframe');

        // Converti link corto youtube in embed
        let embedLink = item.replace('https://youtu.be/', 'https://www.youtube.com/embed/');
        iframe.src = embedLink;
        iframe.width = "100%";
        iframe.height = "500";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);

    } else {
        // IMMAGINE
        const img = document.createElement('img');
        img.src = item;
        img.style.width = "100%";
        container.appendChild(img);
    }
}

function nextItem(){
    if(currentIndex < currentItems.length - 1){
        currentIndex++;
        updateModal();
    }
}

function prevItem(){
    if(currentIndex > 0){
        currentIndex--;
        updateModal();
    }
}

function closeModal(){
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-container').innerHTML = '';
}
