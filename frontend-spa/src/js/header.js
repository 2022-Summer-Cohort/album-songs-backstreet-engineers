export default function header() {
    return `
    <header class="topPage">
        <div class="siteNameLogo">
        <a href="home();">
            <h1 class="siteName">Soda Sounds</h1>
            <img src="/frontend-spa/images/sodaSoundLogo.png" class="siteLogo" alt="">
            </a>
        </div>
        <div class="searchBar">
            <!-- <label for="">Search</label> -->
            <input type="search" placeholder="search for albums, songs & artists...">
            <button type="submit">Search</button>
        </div>
    </header>
    `
}