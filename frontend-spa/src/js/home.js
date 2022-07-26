export default function homeView() {
    return `
    <section class="sodaMachine">
            <!-- LOGO/SITE NAME OR SODA BOTTLE IMAGE -->
            <section class="sodaMachineLeft">
                <img src="/images/sodaSoundLogo bottle only cropped.png" alt="">
            </section>
            <section class="sodaMachineMiddle">
                <section class="albumGroup">
                    <div class="albumGroupPart1">
                        <div class="albumHeader">
                            <h2 class="albumName">Top Albums</h2>
                        </div>
                    </div>
                    <div class="albumGroupPart2">
                        <div class="albumBox">
                            <div class="boxBottleHome">
                                <img src="/images/sodaSoundLogo bottle only cropped.png" alt="Vector image of colored soda bottle">
                            </div>
                            <div class="albumCard">
                                <div class="test">
                                    <img src="/images/badCover.jpg" class="albumPicHome" alt="Michael Jackson's Bad album cover">
                                </div>
                                <div class="cardTextHome">
                                    <ul>
                                        <li><b>Bad</b></li>
                                        <li>Michael Jackson</li>
                                        <li>Label: Epic CBS</li>
                                        <li>48 min, 40 sec</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="boxBottleHome">
                                <img src="/images/sodaSoundLogo bottle only cropped_altColor1.png" alt="Vector image of colored soda bottle">
                            </div>
                            <div class="albumCard">
                                <div class="test">
                                    <img src="/images/badCover.jpg" class="albumPicHome" alt="">
                                </div>
                                <div class="cardTextHome">
                                    <ul>
                                        <li><b>Album Name</b></li>
                                        <li>Album Artist</li>
                                        <li>Record Label</li>
                                        <li>Album Duration</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="boxBottleHome">
                                <img src="/images/sodaSoundLogo bottle only cropped_altColor2.png" alt="Vector image of colored soda bottle">
                            </div>
                            <div class="albumCard">
                                <div class="test">
                                    <img src="/images/badCover.jpg" class="albumPicHome" alt="">
                                </div>
                                <div class="cardTextHome">
                                    <ul>
                                        <li><b>Album Name</b></li>
                                        <li>Album Artist</li>
                                        <li>Record Label</li>
                                        <li>Album Duration</li>
                                    </ul>
                                </div>
                            </div>
                </section>
                <section class="trackListings">
                    <div class="albumHeader">
                        <h2 class="albumName">Top Songs</h2>
                    </div>
                    <br>
                    <ol>
                        <div class="trackButton">
                            <a class="aboutUs" href="#top-track-1">
                                <li>Smooth Criminal</li>
                            </a>
                        </div>
                        <div class="trackButton">
                            <a class="aboutUs" href="#top-track-2">
                                <li>Last Two Dinosaurs Alive</li>
                            </a>
                        </div>
                        <div class="trackButton">
                            <a class="aboutUs " href="#top-track-3">
                                <li>Heroes</li>
                            </a>
                        </div>
                    </ol>
                    <div id="popup4" class="overlay">
                        <div class="popup">
                            <div class="songInfoGroup">
                                <h3>Song Title</h3>
                                <ul>
                                    <li>Song Duration</li>
                                    <li>Track # on Album</li>
                                    <li class="songRating">
                                        <h5>Rating</h5>
                                        <div>
                                            <p class="rating1">4</p>
                                            <p class="rating2">/</p>
                                            <p class="rating3">5</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <div class="songLeaveRating">
                                    <label for="stars">Rate (0-5):</label>
                                    <input type="number" name="stars" min="0" max="5">
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <p>Review 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Possimus,
                                        eum!
                                    </p>
                                    <h5>Review's Author</h5>
                                </li>
                            </ul>
                            <div class="songLeaveReview">
                                <input type="text" placeholder="reviewer's name">
                                <input type="text" placeholder="write a review...">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="dispenser">
                    <div class="dispenseOuter">
                        <div class="dispenseInner">
                            <img src="/images/sodaSoundLogo.png" class="dispenseLogo" alt="">
                        </div>
                    </div>
                </section>
            </section>
            <!-- SIDEPANEL/COIN SLOT/SELECTION AREA  -->
            <section class="sodaMachineRight">
                <div class="sidePanel">
                    <h4>A1</h4>
                    <button disabled="disabled">GO</button>
                </div>
            </section>
        </section>
    `
}