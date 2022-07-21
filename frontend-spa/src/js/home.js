export default function home() {
    return `
    <div class="mainContainer">
            <div class="jukeboxLeft">
                <h3>Top 10 Artists</h3>
                <ol>
                    <a href="">
                    <a href="${}">
                        <li>Artist 1</li>
                        <li>${}</li>
                    </a>
                    </a>
                </ol>
            </div>
            <div class="jukeboxMiddle">
                <div>
                    <img src="/frontend-spa/images/sodaSoundLogo.png" class="siteLogoHome" alt="">
                </div>
                <div class="selectedSongInfo">
                    <h3 class="topTenSongs">Top 10 Songs</h3>
                    <ul>
                        <a href="">
                        <a href="${}">
                            <li class="songsList">Song 1</li>
                            <li>${}</li>
                        </a>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="jukeboxRight">
                <h3>Top 10 Albums</h3>
                <ol>
                    <a href="">
                    <a href="${}">
                        <img src="" class="albumPicSide" alt="">
                        <li>Album 1</li>
                        <li>${}</li>
                    </a>
                    </a>
                </ol>
            </div>
        </div>
    `
}