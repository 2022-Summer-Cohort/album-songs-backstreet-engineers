export default function artist() {
    return `
    <div class="mainContainer">
        <div class="jukeboxLeft">
            <h3>Similar Artists</h3>
            <ol>
                <li>
                    <img src="" class="artistPic" alt="">
                    <a href="">Artist 1</a>
                </li>
                <li>
                <img src="${}" class="artistPic" alt="">
                <a href="${}">${}</a>
            </li>
            </ol>
        </div>
        <div class="jukeboxMiddle">
            <div>
                <h2 class="artistSelected">Artist Name</h2>
                <img src="" class="artistPic" alt="">
                <h2 class="artistSelected">${}</h2>
                <img src="${}" class="artistPic" alt="">
            </div>
            <div class="albumsList">
                <h3>Albums</h3>
                <ul>
                    <a href="">
                        <img src="" class="albumPicMiddle" alt="">
                        <li class="albumName">Album Name</li>
                    </a>
                    <a href="${}">
                    <img src="${}" class="albumPicMiddle" alt="">
                    <li class="albumName">${}</li>
                </a>
                </ul>
            </div>
        </div>
        <div class="jukeboxRight">
            <h3>Artist's Top Songs</h3>
            <h3>${ + "'s " + "Top Songs"}</h3>
            <ol>
                <li>
                    <img src="" class="albumPicSide" alt="">
                    <a href="">Top Song 1</a>
                </li>
                <li>
                <img src="${}" class="albumPicSide" alt="">
                <a href="${}">${}</a>
            </li>
            </ol>
        </div>
    </div>
    `
}