<template>
    <div>
        <div id="sabrina" class="showcase bg-dark">
            <div class="container">
                <div class="content left">
                    <p class="preamble">Music feature</p>
                    <h1>Music featured the Chilling Adventure of Sabrina!</h1>
                    <p>Watch Sabrina and Lucifer dance to my song, 'Waltz of David' on Netflix's Chilling Adventures of Sabrina. Be sure to watch Season 2 Episode 9 on Netflix to see it in action!</p>
                    <a class="button is-primary" target="_blank" href="https://www.netflix.com/title/80223989">Watch on Netflix</a><br>
                    <a href="https://www.youtube.com/watch?v=MfJrxlEqGJ0" target="_blank">Listen to the full song on YouTube</a>
                </div>
            </div>
        </div>

        <div id="bourdain" class="showcase">
            <div class="container">
                <div class="content right">
                    <p class="preamble">Music feature</p>
                    <h1>Anthony Bourdain's No Reservations: Kurdistan</h1>
                    <p>I was lucky to have my song "Freedom" featured as part of a musical montage to bookend the Kurdistan episode of Anthony Bourdain's No Reservations. You can watch and listen to it 37 minutes in on episode 15 of Season 8. </p>
                    <a class="button is-primary" target="_blank" href="https://open.spotify.com/track/1ZO5oPdYlc2vVx5v1irwOu?si=fb2c6a73b60c4eda">Listen on Spotify</a><br>
                    <a href="https://www.hulu.com/watch/9e3c16a9-81a1-4d6b-9684-b3276e32e338" target="_blank">Watch the episode on Hulu</a>
                </div>
            </div>
        </div>
          <div id="belushi" class="showcase bg-dark">
            <div class="container">
                <div class="content right">
                    <p class="preamble">Music feature</p>
                    <h1>Biography channel: John Belushi</h1>
                    <p>John Belushi has always been one of my favorite comedic actors and SNL cast members. My song 'Freedom' was used for the end-credits and backdrop to emotional stories about John from his family and friends. I take pride in the emotion my music can add to a story, and this is something I'm really proud of.</p>
                    <a class="button is-primary" target="_blank" href="https://vimeo.com/473236125">Watch the Documentary</a><br>
                    <a href="https://open.spotify.com/track/1ZO5oPdYlc2vVx5v1irwOu?si=fb2c6a73b60c4eda" target="_blank">Listen to 'Freedom' on Spotify</a>
                </div>
            </div>
        </div>


        <div id="workedwith">
            <div class="container">
                <div class="content">
                    <h1>You've also heard my music on...</h1>
                </div>
                <div class="content">
                    <img src="/images/music/aelogo.svg" alt="A&E" />
                    <img src="/images/music/biography.png" alt="Biography Channel" />
                    <img src="/images/music/comedycentral.png" alt="Comedy Central" />
                    <img src="/images/music/hallmark.png" alt="Hallmark Channel Movies" />
                    <img src="/images/music/maxim.png" alt="Maxim" />
                    <img src="/images/music/mlb.png" alt="MLB Live" />
                    <img src="/images/music/syfy.png" alt="SyFy Channel" />
                    <img src="/images/music/tennischannel.webp" alt="The Tennish Channel" />
                    <img src="/images/music/tlc.png" alt="TLC" />
                    <img src="/images/music/walgreens.png" alt="Walgreens" />
                    <img src="/images/music/wnetwork.png" alt="The W Network" />
                    <img src="/images/music/wwe.png" alt="WWE" />
                </div>
            </div>
        </div>
        <div id="cta" class="bg-dark">
            <div class="intro">
                <h1>Be sure to follow!</h1><br>
                <p>Click on your favorite platform below to follow my music!</p>    
            </div><br>
            <div class="images">
                <a href="https://www.youtube.com/c/DavidCrandallIsHere" target="_blank"><img src="/images/music/youtube.png"><p>Follow me on YouTube</p></a>
                <a href="https://open.spotify.com/artist/3XC3atB6PjVMCNFMdLy3Nt" target="_blank"><img src="/images/music/spotify.png"></a>
                <a href="https://music.apple.com/us/album/composed/1540133822" target="_blank"><img src="/images/music/itunes.svg"></a>
                <a href="https://music.youtube.com/playlist?list=OLAK5uy_k5Z4FNVPFTmnHwZIsJPXpW1Jch5JT1G3k" target="_blank"><img src="/images/music/googleplay.png"></a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
}

.showcase {
    height: 100vh;
    min-height: 800px;
    width: 100%;
    position: relative;
    &::before {
        content: "";
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .7;
    }
    .container {
        div {
            padding: 20px;
        }
        .content {
            width: 45%;
        }
    }
    @media (max-width: 900px) {
        &::before{ background-position: right; }
        .container {
            .content {
                width: 100%;
            }
        }
        * {
            text-shadow: 1px 1px 2px rgba(0,0,0,0.4)
        }
    }
}
#sabrina::before {
    background-image: url('/images/music/sabrinabg.jpg');
}
#bourdain::before {
    background-image: url('/images/music/noreservations.jpg');
}
#belushi::before {
    background-image: url('/images/music/belushi.jpg');
}
#workedwith {
    padding: 40px 0;
    h1 {
        text-align: center;
    }
    .container {
        display: block;
        align-items: initial;
        justify-content: center;;
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    img {
        height: 50px;
        width: auto;
        margin: 20px;
    }
}
#cta {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px;
    .intro {
        text-align: center;
        display: block;
    }
    .images {
        width: 100%;
        display: flex;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 50px;
            width: auto;
            margin: 20px;
        }
        a {
            position: relative;
            p {
                position: absolute;
                width: 200%;
                left: -50%;
                bottom: 0px;
                font-size: .7em;
            }
        }
    }
}
</style>