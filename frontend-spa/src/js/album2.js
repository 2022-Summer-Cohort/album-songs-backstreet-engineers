

export default function albumView(album) {
    return `
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
                        <a  href="#popup3">
                            <h4 class="reviewPop">Reviews</h4>
                        </a>
                    </div>
                </div>
                <div id="popup3" class="overlay">
                    <div class="popup">
                        <div class="albumReviewsHeading">
                            <h4>Album Reviews</h4>
                        </div>
                        <a class="close" href="#">&times;</a>
                        <div class="content"> 
                        ${album.comments.map(comment => {
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

                
                            <div class="albumLeaveReview">
                                <input type="text" placeholder="reviewer's name">
                                <input type="text" placeholder="write a review...">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="trackListings"> 
    ${album.songs.map(song =>{
        return`
         <ol>
        <div class="trackButton">
            <a class="aboutUs" href="#popup4">
                <li>${song.title}</li>
            </a>
        </div>
    </ol>
    `
}).join("")
}

    `
}