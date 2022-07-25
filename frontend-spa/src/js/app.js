import albumView from "./album2.js";
import header from "./header.js";
import footer from "./footer.js";
import song from "./song.js";
import home from "./home.js";
import makeSong from "./song.js";

const container = document.querySelector(".anchor");


function singleSongView(songId) {
    fetch(`http://localhost:8080/api/songs/${songId}`)
        .then(res => res.json())
        .then(songPick => {
            console.log(songPick);
            container.innerHTML += song(songPick);
        })
}

function makeAlbumView(albumId) {
    fetch(`http://localhost:8080/api/album/${albumId}`)
        .then(res => res.json())
        .then(albumNumber => {
            console.log(albumNumber);
            container.innerHTML = header();
            container.innerHTML += albumView(albumNumber);
            // container.innerHTML += makeSong();
            container.innerHTML += footer();

            // const songEl = document.querySelectorAll(".trackButton");

            // songEl.forEach(song1 => {
            //     song1.addEventListener("click",()=>{
            //        singleSongView(song1.id);
            //     })
            // })
        })
}

makeAlbumView(1);
// makeSong();

// function singleSongView(songId) {
//     fetch(`http://localhost:8080/api/songs/${songId}`)
//         .then(res => res.json())
//         .then(songPick => {
//             console.log(songPick);
//             container.innerHTML += song(songPick);
//         })
// }


