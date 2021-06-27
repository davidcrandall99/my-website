<template>

  <div
    :class="`showcase ${isDark === 'true' ? 'bg-dark' : ''}`"
    :style="`background-image: url(${bgImage});`"
  >
    <div class="container">
      <div class="content left">
        <p class="preamble">{{ preamble }}</p>
        <h1>{{ title }}</h1>
        <p>
          {{ description }}
        </p>
        <a
          v-if="btnUrl !== '' && btnCopy !== ''"
          class="button is-primary"
          target="_blank"
          :href="btnUrl"
          >{{ btnCopy }}</a
        >
        <br />
        <a
          v-if="linkUrl !== '' && linkCopy !== ''"
          :href="linkUrl"
          target="_blank"
          >{{ linkCopy }}</a
        >
      </div>
    </div>
  </div>

</template>

<script>
import { gsap } from "gsap";
export default {
    mounted: function() {
        var ScrollTrigger = require('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger)

        var content = gsap.utils.toArray('.showcase .content');
        content.forEach((section) =>{
            gsap.fromTo(section.children, {
                x: -100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%'
                },
                stagger: .25
            })
        })
    },
  props: {
    preamble: {
      type: String,
      default: "Music feature",
    },
    title: {
      type: String,
      default: "Music feature",
    },
    description: {
      type: String,
      default: "",
    },
    btnCopy: {
      type: String,
      default: "",
    },
    btnUrl: {
      type: String,
      default: "",
    },
    linkCopy: {
      type: String,
      default: "",
    },
    linkUrl: {
      type: String,
      default: "",
    },
    isDark: {
      type: String,
      default: "true",
    },
    bgImage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase {
  height: 100vh;
  min-height: 800px;
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 1;

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    div {
      padding: 20px;
    }
    .content {
      width: 45%;
    }
  }
  @media (max-width: 900px) {
    background-position: right;
    .container {
      .content {
        width: 100%;
      }
    }
    * {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    }
  }
}
#sabrina::before {
  background-image: url("/images/music/sabrinabg.jpg");
}
#bourdain::before {
  background-image: url("/images/music/noreservations.jpg");
}
#belushi::before {
  background-image: url("/images/music/belushi.jpg");
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