export default function album() {
    return `
    <div class="mainContainer">
    <div class="top">
        <div class="albumGroup">
            <div class="albumPart1">
                <h4 class="artist">${album.artist}</h4>
                <h4 class="recordLabel">${album.recordLabel}</h4>
                <div class="albumRating">
                    <div class="ratingCombo">
                        <h4>Album Rating</h4>
                        <div class="rating">
                            <p class="starRating">${album.avgRating}</p>
                            <p class="fiveStars">/5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="albumPart2">
                <h2 class="albumSelected">${album.title}</h2>
                <img src=${album.imageUrl} class="albumPicMiddle" alt="">
            </div>
            <div class="albumPart3">
                <div class="albumReviews">
                    <h4>Album Reviews</h4>
                    ${
                    album.comments.map(comment => {
                        return `
                            <div class="review1">
                            <h4>${comment.author}</h4>
                            <p>${comment.content}</p>

                            </div>
                        `
                    }).join("")
                }  
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
            ${
                    album.songs.map(song => {
                        return `
                        <ol>
                        <div class="trackButton">
                            <a href="${album.song}">
                                <li>${song.title}</li>
                            </a>
                        </div>
                        </ol>
                        `
                    }).join("")
                }  
        </div>
    </div>
    <div class="bottom">
        <div class="songPart1">
            <div class="selectedSongInfo">
                <h3 class="songTitle">${song.title}</h3>
                <ul>
                    <li class="songDuration">${song.duration}</li>
                    <li class="songCollabs">${song.artist}</li>
                </ul>
            </div>
        </div>
        <div class="songPart2">
            <div class="songUserInputGroup">
                <div class="songRating">
                    <div class="ratingCombo">
                        <h4>Song Rating</h4>
                        <div class="rating">
                            <p class="starRating">${song.avgRating()}</p>
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
                    ${
                        song.comments.map(comment => {
                            return `
                                <div class="review1">
                                <h4>${comment.author}</h4>
                                <p>${comment.content}</p>
    
                                </div>
                            `
                        }).join("")
                    }  
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