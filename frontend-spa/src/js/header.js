export default function header() {
    return `
    <header class="topPage">
            <div class="siteNameLogo">
                    <h1 class="siteName">Soda Sound</h1>
                    <img src="/images/sodaSoundLogo.png" class="siteLogo" alt="">
            </div>
            <div class="searchBar">
                <!-- <label for="">Search</label> -->
                <input type="search" placeholder="search for albums, songs & artists...">
                <button type="submit">Search</button>
            </div>
        </header>
    `
}