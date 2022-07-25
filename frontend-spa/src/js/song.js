export default function song (song) {
    return `
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