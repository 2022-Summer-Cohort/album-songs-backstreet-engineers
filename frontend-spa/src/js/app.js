import albumView from "./album.js";
import header from "./header.js";
import footer from "./footer.js";
import homeView from "./home.js";

const container = document.querySelector(".anchor");


function makeHomeView() {
    fetch(`http://localhost:8080/api/albums`)
        .then(res => res.json())
        .then(albums => {
            console.log(albums);
            container.innerHTML = header();
            container.innerHTML += homeView(albums);
            container.innerHTML += footer();

            const albumViewBtn = document.querySelectorAll(".albumCard")
            albumViewBtn.forEach(albumEl => {
                const albumIdEl = albumEl.querySelector(".album-id");
                albumEl.addEventListener("click", () => {
                    makeAlbumView(albumIdEl.value);
                })
            })
            const albumTitleIN = document.querySelector("#album-title");
            const albumArtistIN = document.querySelector("#album-artist");
            const albumDurationIN = document.querySelector("#album-duration");
            const albumRecordLabelIN = document.querySelector("#album-record-label");
            const albumImageIN = document.querySelector("#album-img");
            const addAlbumBtn = document.querySelector(".addAlbumBtn");


            addAlbumBtn.addEventListener("click", () => {
                const newAlbumJson = {
                    "title": albumTitleIN.value,
                    "artist": albumArtistIN.value,
                    "duration": albumDurationIN.value,
                    "recordLabel": albumRecordLabelIN.value,
                    "imageUrl": albumImageIN.value,
                }
                fetch(`http://localhost:8080/api/album/new`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newAlbumJson)
                })
                    .then(res => res.json())
                    .then(newAlbums => {
                        makeHomeView(newAlbums);
                    })
            })

        })
        .catch(err => console.error(err))
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
            goHomeBtn.addEventListener("click", () => {
                makeHomeView();
            })
            const commentAuthorIN = document.querySelector(".reviewName");
            const commentContentIN = document.querySelector(".reviewContent");
            const commentBtn = document.querySelector(".reviewSubmit");

            commentBtn.addEventListener("click", () => {
                const newCommentJson = {
                    "author": commentAuthorIN.value,
                    "content": commentContentIN.value,
                }
                fetch(`http://localhost:8080/api/album/${albumNumber.id}/addComment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newCommentJson)
                })
                    .then(res => res.json())
                    .then(albumNumber => {
                        makeAlbumView(albumNumber.id);
                    })
            })
            const deleteBtn = document.querySelector(".delete-button");
            const albumIdEl = document.querySelector(".album-id");
            deleteBtn.addEventListener("click", () => {
                fetch(`http://localhost:8080/api/album/${albumIdEl.value}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(newAlbums => {
                        makeHomeView(newAlbums);
                    })
                    .catch(err => console.error(err))
            })
            const songTitleIN = document.querySelector("#song-title");
            const songDurationtIN = document.querySelector("#song-duration");
            const addSongBtn = document.querySelector(".addSongBtn")

            addSongBtn.addEventListener("click", () => {
                const newSongJson = {
                    "title": songTitleIN.value,
                    "duration": songDurationtIN.value,
                }
                fetch(`http://localhost:8080/api/album/${albumIdEl.value}/newsong`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newSongJson)

                })
                    .then(res => res.json())
                    .then(updateAlbum => {
                        makeAlbumView(updateAlbum.id);
                    })
                    .catch(err => console.error(err))
            })

            let songEl = document.querySelectorAll(".super");

            songEl.forEach(songTest => {
                const songIdEl = songTest.querySelector(".songId");
                const songReviewContentIN = songTest.querySelector(".review-content");
                const songReviewAuthorIN = songTest.querySelector(".review-author");
                const songReviewBtn = songTest.querySelector(".reviewBtn");

                songReviewBtn.addEventListener("click", () => {
                    const newSongCommentJson = {
                        "author": songReviewAuthorIN.value,
                        "content": songReviewContentIN.value,
                    }
                    fetch(`http://localhost:8080/api/song/${songIdEl.value}/addComment`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newSongCommentJson)
                    })
                        .then(res => res.json())
                        .then(albumSong => {
                            console.log(songIdEl);
                            makeAlbumView(albumSong.id);
                        })
                        .catch(err => console.error(err))
                })

            })


            songEl.forEach(songTest => {
                const songIdEl = songTest.querySelector(".songId");
                // const songRatingIN = songTest.querySelector(".song-rating");
                const songRatingBtn = songTest.querySelector(".song-ratingBtn");

                songRatingBtn.addEventListener("click", () => {
                    // const newSongRatingJson = songRatingIN.value;
                    const songRatingIN = songTest.querySelector(".song-rating");
                    // const newSongRatingJson = {
                    //     "rating": songRatingIN.value,
                    // }
                    fetch(`http://localhost:8080/api/songs/${songIdEl.value}/ratings`, {
                        method: 'PATCH',
                        // headers: {
                        //     'Content-Type': 'application/json'
                        // },
                        // body: JSON.stringify(newSongRatingJson)
                        body: songRatingIN.value
                    })
                        .then(res => res.json())
                        .then(albumSong => {
                            makeAlbumView(albumSong.id);
                        })
                        .catch(err => console.error(err))
                })

            })
        })
        .catch(err => console.error(err))
}

makeHomeView();
// makeAlbumView(1);


