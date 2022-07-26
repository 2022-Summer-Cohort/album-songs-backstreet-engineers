export default function homeView(albums) {
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
                            <h2 class="albumName">Select an Album:</h2>
                        </div>
                    </div>
                    <div class="albumGroupPart2">
                        <div class="albumBox">
                        ${albums.map(album=>{
                            return `
                                <div class="boxBottleHome">
                                    <img src="/images/sodaSoundLogo bottle only cropped.png" alt="Vector image of colored soda bottle">
                                </div>
                                <div class="albumCard">
                                    <input class = "album-id" type="hidden" value="${album.id}">
                                    <div class="test">
                                        <img src=${album.imageUrl} class="albumPicHome" alt="Album Cover">
                                    </div>
                                    <div class="cardTextHome">
                                        <ul>
                                            <li><b>${album.title}</b></li>
                                            <li>${album.artist}</li>
                                            <li>Label: ${album.recordLabel}</li>
                                            <li>${album.duration}</li>
                                        </ul>
                                    </div>
                                </div>
                            `
                            }).join("")
                        }
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