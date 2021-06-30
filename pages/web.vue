<template>
    <div>
        <SimpleHero id="hero">
            <div class="heroContent">
                <div>
                    <h1>Web</h1>
                    <p>Specializing in frontend development, design, and marketing</p>
                </div>
                <div class="images">
                    <img id="laptop" src="/images/web/hero-laptop.png" />
                    <img id="desktop" src="/images/web/hero-desktop.png" />
                    <img id="tablet" src="/images/web/hero-tablet.png" />
                    <img id="tablet2" src="/images/web/hero-tablet-2.png" />
                    <img id="phone" src="/images/web/hero-phone.png" />
                </div>
            </div>
        </SimpleHero>
        <section class="has-background-black has-text-white">
            <div class="content">
                <h2 class="has-text-white">Web development</h2>
                <p>I am an engineer with a keen interest in web development and frontend engineering, from SPA's, to landing pages, to microsites, and more.</p>
                <p>I like building things <b>people</b> can engage with, enjoy, and find useful. This is the mantra behind every project.
                </p>
            </div>
            <div class="image">
            </div>
        </section>
        <section>
            <div class="image">
            </div>
            <div class="content">
                <h2>UX &amp; UI</h2>
                <p>UX research, wireframing, and planning help make a <b>project</b> work for the <b>user</b>.<br/> 
                UI design makes the <b>experience</b> work for <b>people.</b></p>
            </div>
        </section>
        <SlantedSection class="has-background-dark has-text-white section">
            <div class="content">
                <h2 class="has-text-white">Cloud &amp; Infrastructure</h2>
                <p>Every website has the specific need to continuously optimize and iterate. I assess each project at hand to design and implement solid, simple infrastructure that not only meets those needs, but gives room to scale for the future.</p>
            </div>
        </SlantedSection>
        <SlantedSection id="skills" class="section">
            <div class="content">
                <div class="has-text-centered">
                    <h2 class="title is-1">Tools of the trade</h2>
                    <p>My toolbelt has infinite slots. <br/>Below are some of the things I use today;<br/> I'm always learning and adding to my skillset.</p>
                </div>
                <div id="skillList">
                    <div id="code">
                        <h3 class="has-text-white">Dev</h3>
                        <p><b>Code</b><br/>
                        HTML, CSS, JavaScript, <br/>Node, Nuxt, Vue, React, <br/>and more...</p>
                        <p><b>Infrastructure</b><br/>
                        AWS, Lambdas, DynamoDB, <br/>
                        MySQL, LAMP, Microservices, <br/>and more...</p>
                    </div>
                    <div id="design">
                        <h3 class="has-text-white">Design</h3>
                        <p><b>Software &amp; tools</b><br/>
                        Adobe Creative Suite
                        <br/>
                        Sketch
                        <br/>
                        Figma
                        <br/>
                        Invision
                        <br/>
                        Zeplin
                        <br/> and more...
                        </p>
                    </div>
                </div>
            </div>
        </SlantedSection>
        <section id="worktogether" class="has-background-black has-text-white">
            <div>
                <h2>Let's work together</h2>
                <div class="cols">
                    <div class="copy">
                        <h3>Contact me</h3>
                        <p>Use the form, or email me directly at <a href="mailto:david@davidcrandall.com">david@davidcrandall.com</a></p>
                        <h3>Resume</h3>
                        <a href="/resume.pdf" target="_blank">Click here to download my resume</a>
                    </div>
                    <div class="contact">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #hero {
        margin-bottom: -100px
    }
    .heroContent {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 100%;
        div {
            text-align: center;
        }
        .images {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            img {
                position: absolute;
                opacity: 0;
                width: auto;
            }
            #tablet2 {
                opacity: 1;
                bottom: -10%;
                right: -200px;
                height: 50%;
                transform: rotate(-25deg);
            }
            #phone {
                opacity: 1;
                width: 300px;
                left: -5%;
                bottom: -15%;
                transform: rotate(30deg);
            }
            #laptop {
                opacity: 1;
                right: -50px;
                top: 0px;
                transform: rotate(35deg);
                height: 300px;
            }
            #desktop {
                opacity: 1;
                width: 45%;
                transform: rotate(-45deg);
                left: -100px;
                top: 10px;
            }
        }
    }
    section, .section {
        min-height: 100vh;
        align-items: center;
    }
    section {
        display: flex;
        .content {
            padding: 40px;
            width: 45%;
        }
        .image {
            width: 45%;
            height: 100%;
            display: block;
        }
        &#skills {
            .content {
                width: 100%;
            }
            #skillList {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                padding: 40px 0;
                div {
                    width: 45%;
                    min-width: 200px;
                    margin: 20px 0px;
                    text-align: center;
                    padding: 10px;
                }
            }
        }
        &#worktogether {
            margin-bottom: -40px;
            > div {
                padding: 40px;
            }
            .cols {
                h3 {
                    margin-top: 20px;
                }
            }
        }
    }
</style>