<template>
  <div>
    <large-feature 
      v-for="item, index in showcase"
      :key="index"
      :preamble="item.preamble" 
      :title="item.title" 
      :description="item.description"
      :btnCopy="item.btnCopy"
      :btnUrl="item.btnUrl"
      :linkCopy="item.linkCopy"
      :linkUrl="item.linkUrl"
      :isDark="item.isDark"
      :bgImage="item.bgImage"
    />
    
    <div id="releases" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="full-width">Releases</h2>
        </div>
      </div>
    </div>
    <div id="albums">
      <AlbumList />
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
          <img
            src="/images/music/tennischannel.webp"
            alt="The Tennish Channel"
          />
          <img src="/images/music/tlc.png" alt="TLC" />
          <img src="/images/music/walgreens.png" alt="Walgreens" />
          <img src="/images/music/wnetwork.png" alt="The W Network" />
          <img src="/images/music/wwe.png" alt="WWE" />
        </div>
      </div>
    </div>
    <div id="cta" class="bg-dark">
      <div class="intro">
        <h1>Be sure to follow!</h1>
        <br />
        <p>Click on your favorite platform below to follow my music!</p>
      </div>
      <br />
      <div class="images">
        <div><a href="https://www.youtube.com/c/DavidCrandallIsHere" target="_blank"
          ><img alt="follow me on youtube" src="/images/music/youtube.png" /></a
        ></div>
        <a
          href="https://open.spotify.com/artist/3XC3atB6PjVMCNFMdLy3Nt"
          target="_blank"
          ><img alt="follow me on spotify" src="/images/music/spotify.png"
        /></a>
        <a
          href="https://music.apple.com/us/album/composed/1540133822"
          target="_blank"
          ><img alt="check out my music on itunes" src="/images/music/itunes.svg"
        /></a>
        <a
          href="https://music.youtube.com/playlist?list=OLAK5uy_k5Z4FNVPFTmnHwZIsJPXpW1Jch5JT1G3k"
          target="_blank"
          ><img alt="check me out on youtube music" src="/images/music/googleplay.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
const showcase = require('~/assets/music-showcase.json');  
export default {
  fetchOnServer: false,
  data() {
    return {
      showcase: showcase,
    }
  },
  head() {
    return {
      title: "Music | David Crandall",
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: 'https://davidcrandall.com/images/side-pic.jpg',
        },
        {
            hid: 'description',
            name: 'description',
            content: 'David Crandall is a musician, music composer, music & sound producer, and has written & composed a number of songs for film and television.'
        },
        {
            hid: 'og:description',
            property: 'og:description',
            content: 'David Crandall is a musician, music composer, music & sound producer, and has written & composed a number of songs for film and television.'
        },
        {
            hid: 'og:title',
            property: 'og:title',
            content: 'Music by David Crandall'
        }
    ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "Person",
            name: "David Crandall",
            mainEntityOfPage: `https://davidcrandall.com`,
          },
        },
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "Brand",
            name: "David Crandall",
            mainEntityOfPage: `https://davidcrandall.com`,
          },
        },
      ],
    };
  },
};
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
#releases h2 {
  text-align: center;
  width: 100%;
}
#workedwith {
  padding: 40px 0;
  h1 {
    text-align: center;
  }
  .container {
    display: block;
    align-items: initial;
    justify-content: center;
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
  div {
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
        font-size: 0.7em;
      }
    }
  }
}
</style>