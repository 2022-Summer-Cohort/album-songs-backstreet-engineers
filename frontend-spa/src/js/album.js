export default function album() {
    return `
    <div class="mainContainer">
    <div class="top">
        <div class="albumGroup">
            <div class="albumPart1">
                <h4 class="artist">Artist Name</h4>
                <h4 class="recordLabel">Record Label</h4>
                <div class="albumRating">
                    <div class="ratingCombo">
                        <h4>Album Rating</h4>
                        <div class="rating">
                            <p class="starRating">4</p>
                            <p class="fiveStars">/5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="albumPart2">
                <h2 class="albumSelected">Album Name</h2>
                <img src="" class="albumPicMiddle" alt="">
            </div>
            <div class="albumPart3">
                <div class="albumReviews">
                    <h4>Album Reviews</h4>
                    <ul>
                        <li>
                            <p>Review 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, eum!
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="albumLeaveReview">
                    <input type="text" placeholder="write a review...">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <div class="middle">
        <div class="trackListings">
            <h3>Album Tracks</h3>
            <ol>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
                <div class="trackButton">
                    <a href="">
                        <li>Track 1</li>
                    </a>
                </div>
            </ol>
        </div>
    </div>
    <div class="bottom">
        <div class="songPart1">
            <div class="selectedSongInfo">
                <h3 class="songTitle">Song Title</h3>
                <ul>
                    <li class="songDuration">Song Duration: 1:67 minutes</li>
                    <li class="songCollabs">Song Artists</li>
                </ul>
            </div>
        </div>
        <div class="songPart2">
            <div class="songUserInputGroup">
                <div class="songRating">
                    <div class="ratingCombo">
                        <h4>Song Rating</h4>
                        <div class="rating">
                            <p class="starRating">4</p>
                            <p class="fiveStars">/5</p>
                        </div>
                    </div>
                    <div class="songLeaveRating">
                        <label for="stars">Rate Song (0-5):</label>
                        <input type="number" name="stars" min="0" max="5">
                        <button type="submit">Submit</button>
                    </div>
                </div>
                <div class="songReviews">
                    <h4>Song Reviews</h4>
                    <ul>
                        <li>
                            <p>Review 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                                consectetur?</p>
                        </li>
                    </ul>
                    <div class="songLeaveReview">
                        <input type="text" placeholder="write a review...">
                        <button type="submit">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `
}