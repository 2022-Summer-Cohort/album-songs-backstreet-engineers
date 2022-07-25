export default function makeSong (song) {
    return `
   
   
    <div id="popup4" class="overlay">
        <div class="popup">
            <div class="songInfoGroup">
                <h3>${song.title}</h3>
                <ul>
                    <li>${song.duration}</li>
                    <li class="songRating">
                        <h5>Rating</h5>
                        <div>
                            <p class="rating1">${song.rating}</p>
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
            ${song.comments.map(comment => {
                return`                           
                 <ul>
                <li>
                    <p>${comment.content}
                    </p>
                    <h5>${comment.author}</h5>
                </li>
            </ul>
            `
        }).join("")
            }  
            <div class="songLeaveReview">
                <input type="text" placeholder="reviewer's name">
                <input type="text" placeholder="write a review...">
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
</section>
    `
}