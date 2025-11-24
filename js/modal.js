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
    if(item.startsWith('http')){ // video YouTube
        const iframe = document.createElement('iframe');
        let embedLink = item.replace('watch?v=', 'embed/');
        iframe.src = embedLink;
        iframe.width = "100%";
        iframe.height = "500";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
    } else { // immagine
        const img = document.createElement('img');
        img.src = item;
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
