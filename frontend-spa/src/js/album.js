

export default function albumView(album) {
    return `
    <section class="backgroundStructure">
    <section class="sodaMachine">
        <section class="sodaMachineLeft">
            <img src="/images/sodaSoundLogo.png" alt="">
        </section>
        <section class="sodaMachineMiddle">
            <section class="albumGroup">
                <div class="albumGroupPart1">
                    <div class="albumHeader">
                        <h2 class="albumName">${album.title} <span class="artistName">${album.artist}</span></h2>
                    </div>
                </div>
                <div class="albumGroupPart2">
                    <div class="albumBox">
                        <div class="boxBottle">
                            <img src="/images/sodaSoundLogo bottle only cropped.png" alt="">
                        </div>
                        <div class="albumCard">
                            <div class="test">
                                <img src="${album.imageUrl}" class="albumPic" alt="">
                            </div>
                            <div class="cardText">
                                <ul>
                                    <li>${album.title}</li>
                                    <li>${album.artist}</li>
                                    <li>${album.recordLabel}</li>
                                    <li>${album.duration}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="albumRatingReviewCombo">
                            <div class="albumRating">
                                <h5>Album Rating</h5>
                                <div class="combinedRating">
                                    <p class="rating1">${album.avgRating}</p>
                                    <p class="rating2">/</p>
                                    <p class="rating3">5</p>
                                </div>
                            </div>
                            <div class="albumReviews">
                                <a href="#popup3">
                                    <h4 class="reviewPop">Reviews</h4>
                                </a>
                            </div>
                            <button type="button" class="delete-button">
                                <img class="trashcan" src="/images/trashcan.png" alt="">
                            </button>
                            <input class="album-id" type="hidden" value="${album.id}">
                        </div>
                        <div id="popup3" class="overlay">
                            <div class="popup">
                                <a class="close" href="#">&times;</a>
                                <div class="content">
                                    <div class="albumFix">
                                        <h4>Album Reviews</h4>
                                        <ul>
                                            ${album.comments.map(comment => {
                                            return `
                                            <li>
                                                <p>${comment.content}
                                                </p>
                                                <h5>${comment.author}</h5>
                                            </li>
                                            `
                                            }).join("")
                                            }
                                        </ul>
                                    </div>
                                    <div class="albumLeaveReview">
                                        <hr>
                                        <h3>Leave A Review</h3>
                                        <input class="reviewName" type="text" placeholder="reviewer's name">
                                        <input class="reviewContent" type="text" placeholder="write a review...">
                                        <button class="reviewSubmit" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="addSongHeadingCombo">
                <div>
                    <h3 class="trackHeading">Album Tracks</h3>
                </div>
                <div>
                    <a href="#popup5">
                        <img class="plusSign" src="/images/plusSign.png" alt="">
                    </a>
                </div>
            </div>
            <div id="popup5" class="overlay">
                <div class="popup">
                    <div class="addSongHeading">
                        <h4>Add A Song To Album</h4>
                    </div>
                    <a class="close" href="#">&times;</a>
                    <div class="addSongInputs">
                        <div class="inputStyle">
                            <label for="">Song Title</label>
                            <input type="text" placeholder="add song title..." id="song-title">
                        </div>
                        <div class="inputStyle">
                            <label for="">Song Duration</label>
                            <input type="text" placeholder="can include decimals..." name="" id="song-duration">
                        </div>
                        <button class="addSongBtn">Submit</button>
                    </div>
                </div>
            </div>
            <section class="trackListings">
                <ol>
                    ${album.songs.map(song => {
                    return `
                    <div class="trackButton">
                        <a class="songPopup" href="${'#' + song.title}">
                            <li>${song.title}</li>
                        </a>
                    </div>
                    `
                    }).join("")
                    }
                </ol>
                ${album.songs.map(song => {
                return `
                <div id="${song.title}" class="overlay super">
                    <div class="popup">
                        <div class="songInfoGroup">
                            <input type="hidden" class="songId" value="${song.id}">
                            <h3>${song.title}</h3>
                            <ul>
                                <h4>Song Duration</h4>
                                <li>${song.duration}</li>
                                <li class="songRating">
                                    <h4>Song Rating</h4>
                                    <div class="songRatingCombo">
                                        <p class="rating1">${song.avgRating}</p>
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
                        <hr>
                        <div class="songFix">
                            <h3>Reviews</h3>
                            <ul>
                                ${song.comments.map(comment => {
                                return `
                                <li>
                                    <p>${comment.content}
                                    </p>
                                    <h5>${comment.author}</h5>
                                </li>
                                `
                                }).join("")
                                }
                            </ul>
                        </div>
                        <hr>
                        <div class="songLeaveReview">
                            <h3>Leave A Review</h3>
                            <input class="review-author" type="text" placeholder="reviewer's name">
                            <input class="review-content" type="text" placeholder="write a review...">
                            <button class="reviewBtn" id="review-Btn">Submit</button>
                        </div>
                    </div>
                </div>
                `
                }).join("")
                }
            </section>
            <section class="dispenser">
                <div class="dispenseOuter">
                    <div class="dispenseInner"></div>
                </div>
                <div class="notes">
                    <img class="note" src="/images/quarterNote.png" alt="">
                    <img class="note" src="/images/wholeNote.png" alt="">
                    <img class="note" src="/images/doubleNote.png" alt="">
                    <img class="note" src="/images/clefNote.png" alt="">
                    <img class="note" src="/images/treble.png" alt="">
                </div>
            </section>
        </section>
        <section class="sodaMachineRight">
            <div class="sidePanel">
                <h4>A1</h4>
                <button disabled="disabled">GO</button>
            </div>
        </section>
    </section>
</section>
    `  
}