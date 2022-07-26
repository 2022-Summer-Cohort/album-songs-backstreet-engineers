import albumView from "./album.js";
import header from "./header.js";
import footer from "./footer.js";
import homeView from "./home.js";

const container = document.querySelector(".anchor");


function makeHomeView(){
    fetch(`http://localhost:8080/api/albums`)
    .then(res => res.json())
    .then(albums =>{
        console.log(albums);
        container.innerHTML = header();
        container.innerHTML += homeView(albums);
        container.innerHTML += footer();
        
        const albumViewBtn = document.querySelectorAll(".albumCard")
        albumViewBtn.forEach(albumEl =>{
            const albumIdEl = albumEl.querySelector(".album-id");
            albumEl.addEventListener("click", () =>{
                makeAlbumView(albumIdEl.value);
            })
        })
    })

    
}

function makeAlbumView(albumId) {
    console.log(albumId);
    fetch(`http://localhost:8080/api/album/${albumId}`)
        .then(res => res.json())
        .then(albumNumber => {
            console.log(albumNumber);
            container.innerHTML = header();
            container.innerHTML += albumView(albumNumber);
            container.innerHTML += footer();

            const goHomeBtn = document.querySelector(".siteNameLogo");
            goHomeBtn.addEventListener("click", ()=> {
                makeHomeView();
            })
        })
        .catch(err => console.error(err))
        
        
}
makeHomeView();
// makeAlbumView(1);


