<template>
<div id="app">
  <header>
    <div class="wrapper">
      <nav>
        <a id="logo" href="#" v-scroll-to="'#home'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.78 112.82"><path d="M72,61c6,0,10.22,4.18,10.22,10.23v13.1c0,6-4.17,10.23-10.22,10.23H55.87V112.8H45.5V61ZM69.4,84.72a2.21,2.21,0,0,0,2.45-2.45V73.2a2.2,2.2,0,0,0-2.45-2.45H55.87v14Z"/><path d="M10.33,52.42H26.74C32.79,52.42,37,48.24,37,42.2V33.84H26.6v6.34a2.21,2.21,0,0,1-2.45,2.45H12.92a2.21,2.21,0,0,1-2.45-2.45V12.24a2.21,2.21,0,0,1,2.45-2.45H24.15a2.21,2.21,0,0,1,2.45,2.45v6.34H37V10.22C37,4.18,32.79,0,26.74,0H10.33C4.28,0,.1,4.18.1,10.22v32C.1,48.24,4.28,52.42,10.33,52.42Z"/><polygon points="56.55 30.53 74.41 30.53 74.41 52.13 84.78 52.13 84.78 0.29 74.41 0.29 73.41 20.74 56.55 20.74 56.55 0.29 46.18 0.29 46.18 52.13 56.55 52.13 56.55 30.53"/><path d="M27.29,60.4H10.23C4.18,60.4,0,64.58,0,70.62v32c0,6,4.18,10.22,10.23,10.22H27.29c6.05,0,10.23-4.18,10.23-10.22V83.51H17.64v9.36h9.51v7.71A2.21,2.21,0,0,1,24.7,103H12.82a2.21,2.21,0,0,1-2.45-2.45V72.64a2.21,2.21,0,0,1,2.45-2.45H24.7a2.21,2.21,0,0,1,2.45,2.45v4.75H37.52V70.62C37.52,64.58,33.34,60.4,27.29,60.4Z"/><polygon points="73.92 99.8 62.48 99.8 72.75 112.8 84.19 112.8 73.92 99.8"/></svg>
</a>
        <ul class="navigation">
          <li><a href="#" v-scroll-to="'#about'">About</a></li>
          <li><a href="#" v-scroll-to="'#services'">Services</a></li>
          <li><a href="#" v-scroll-to="'#process'">Our Process</a></li>
          <li><a href="#" v-scroll-to="'#team'">team</a></li>
          <li><a href="#" v-scroll-to="'#contact'">contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <section class="section" id="home">
    <div class="img-container">
      <img src="./assets/building.jpg" alt="">
    </div>
    <div class="content">
      <div class="welcome">
        <h2>The</h2>
        <h1>Change Group</h1>
        <h2>INTELLIGENT, ELEGANT, ENGAGING,<br>WORLD-CHANGING TECHNOLOGY</h2>
      </div>
    </div>
  </section>
  <section class="section" id="about">
    <div class="content">
      <div class="text">
        <p>The Change Group is a high technology consultancy with deep focus and expertise in creating blockchain and cryptocurrency solutions.</p>
        <p>We are lead by former serial Chief Technology Officers and Chief Product Officers who are veterans of many successful (VC funded) technology companies. Our makeup allows us to offer the full spectrum of services, expertise, and discipline necessary to create engaging products with a perfect marriage of design and engineering.</p>
      </div>
    </div>
    <div class="img-container">
      <img src="./assets/building.jpg" alt="">
    </div>
  </section>
  <section class="section" id="services">
    <div class="content">
      <div class="wrapper">
        <h1>Services</h1>
        <div class="container">
          <div class="col">
            <h2>ADVISORY AND STRATEGY CONSULTING</h2>
            <p>Engage and work with us to drive your vision and strategy. We have a long track record across many industries and we can bring insight and experience to help you lay a strong foundation. Our consulting fast tracks and amplifies your team’s experience in order to charter your roadmap to success.</p>
            <br>
            <h2>BLOCKCHAIN SERVICES</h2>
            <p>We are heavily focused and interested in blockchain (distributed ledger technology) and have worked on many significant projects in the cryptocurrency, social, and gamification, loyalty, and rewards space. Through the constant expansion of our knowledge, abilities and toolset we work with you to make a great impact using decentralized technology.</p>
            <br>
            <h2>WE HAVE EXPERIENCE WORKING DEEPLY WITH:</h2>
            <ul>
              <li>Bitcoin Core and Bitcoin family blockchains</li>
              <li>Ethereum Solidity Smart contracts</li>
              <li>ERC-20 Tokens</li>
            </ul>
            <p>We are looking at many others: RChain, EOS, Stellar, Cardano</p>
            <br>
            <h2>DISCOVERY ENGAGEMENT</h2>
            <p>Our discovery engagement service allows us to work closely with your team and stakeholders to best determine how you can deliver value.</p>
            <br>
            <h2>TECHNICAL ARCHITECTURE AUDIT</h2>
            <p>Our technical architecture audit service provides you with a survey and recommendations report for existing legacy applications and platforms.</p>
          </div>
          <div class="col">
            <h2>FULL LIFE CYCLE PRODUCT DEVELOPMENT</h2>
            <p>We dive deep and work alongside you to develop products and solutions that may span multiple phases, from conception to distribution and post release enhancements.</p>
            <br>
            <h2>PROOF OF CONCEPTS (POC) AND MINIMAL VIABLE PRODUCTS (MVP) DEVELOPMENT</h2>
            <p>With a clear understanding of your challenges and what delivers value, we will work together to define perfect scope and build just enough features to validate your vision and early adopters.</p>
            <p>Interpretations vary by case and industry, this is a basic guideline:</p>
            <p><strong>POC</strong> - a rough prototype to demonstrate one aspect of the entire solution. Typically internal evaluation or very limited trial users.</p>
            <p><strong>MVP</strong> - the smallest set of features that enables one or more key user stories. May be designed for limited public release.</p>
            <br>
            <h2>WE CAN HELP YOU WITH:</h2>
            <ul>
              <li>ERC-20 Token design and Smart Contract Development</li>
              <li>Hardfork/code fork custom blockchain</li>
              <li>Ethereum custom side chain</li>
              <li>Whitepaper evaluation/audit</li>
              <li>Proof of concept development</li>
              <li>Testnet/Mainnet deployment</li>
              <li>Custom decentralized application (dApps) development with web3 wallet integrations</li>
            </ul>
            <p>We are also partnered closely with various firms to provide tokenomics, offerings (ICOs) and marketing needs</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="process">
    <div class="content">
      <div class="wrapper">
        <h1>Process</h1>
        <div class="container">
          <ul class="process">
            <li>
              <div class="img-wrap">
                <img src="./assets/compass.jpg" alt="">
              </div>
              <h2>UNDERSTAND</h2>
              <p>Every project is different. Our dialog with you allows us to understand your goals &amp; needs.</p>
            </li>
            <li>
              <div class="img-wrap">
                <img src="./assets/idea.jpg" alt="">
              </div>
              <h2>IDEATE</h2>
              <p>We draw on the collective wisdom of our veteran team &amp; domain experts for insights.</p>
            </li>
            <li>
              <div class="img-wrap">
                <img src="./assets/propose.jpg" alt="">
              </div>
              <h2>PROPOSE</h2>
              <p>Our proposals consider the unique product and technical factors of your project.</p>
            </li>
            <li>
              <div class="img-wrap">
                <img src="./assets/review.jpg" alt="">
              </div>
              <h2>REVIEW</h2>
              <p>Further discussion with your key stakeholders allow us to refine our approach.</p>
            </li>
            <li>
              <div class="img-wrap">
                <img src="./assets/dockyard.jpg" alt="">
              </div>
              <h2>BUILD</h2>
              <p>We develop each project with diligence &amp; transparency, whether planning, coding, wireframing, designing, or more.</p>
            </li>
            <li>
              <div class="img-wrap">
                <img src="./assets/review.jpg" alt="">
              </div>
              <h2>SUSTAIN</h2>
              <p>Our work doesn't end at launch. We remain part of your team as we observe, learn, and iterate on our solutions.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="team">
    <div class="img-container">
      <img src="./assets/team.jpg" alt="">
    </div>
    <div class="content">
      <div class="text">
        <h1>Team</h1>
        <p>We are a diverse collective of architects, product managers, software designers, and developers with over 50 years of combined experience. We have architected, developed, and shipped full-stack web and mobile applications, complex big data applications,
          and more for some of the most celebrated companies in the world.</p>
        <br>
        <h2>SKILLS AND EXPERTISE</h2>
        <p>Product Strategy, Product Roadmaps, PRDs, Use Cases, Storyboards, Wireframes, Design, Architecture, Development, Deployment</p>
        <p><strong>Mobile:</strong> Native, React Native</p>
        <p><strong>Stack:</strong> Node JS, React JS, Redux, Vue JS, Python, Flask</p>
        <p><strong>Languages:</strong> Javascript, Python, Ruby, C++, Java, Swift, Go Lang, Clojure</p>
        <p><strong>Data:</strong> MongoDB, PostGreSQL, MySQL, Dynamo, Firebase</p>
        <p><strong>Platforms:</strong> Amazon Web Service, Google Cloud platform, firebase</p>
        <br>
        <div class="hung">
          <img src="./assets/hung.jpg" alt="">
          <p><strong>Leadership:</strong> Hung Q. Tran</p>
        </div>

        <br>
      </div>
    </div>
  </section>

  <section class="section" id="contact">
    <div class="typeform-widget" data-url="https://thechgrp.typeform.com/to/V3u7Lo" data-transparency="100" data-hide-headers=true data-hide-footer=true style="width: 100%; height: 100vh;overflow:hidden;"></div>
  </section>

  <router-view/>
</div>
</template>

<script>
/* eslint-disable */
import glitchText from './components/glitchtext'
export default {
  components: {
    'glitch': glitchText
  },
  name: 'App',
  mounted() {
    (function() {
      var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm',
        b = 'https://embed.typeform.com/'
      if (!gi.call(d, id)) {
        js = ce.call(d, 'script')
        js.id = id
        js.src = b + 'embed.js'
        q = gt.call(d, 'script')[0]
        q.parentNode.insertBefore(js, q)
      }
    })()
  }
}
</script>

<style lang="scss">
@import 'mixins';
html {
    box-sizing: border-box;
}
*,
*:after,
*:before {
    box-sizing: inherit;
}
body {
    background: #222;
    margin: 0;
    padding: 0;
}

iframe {
    overflow: hidden;
}

.hung {
    padding: 30px 0;

    p {
        text-align: center !important;
    }

    img {
        width: 145px;
    }
}

#logo {
    background: rgba(#fff,0.6);
    padding: 10px;
    @include breakpoint(mobile) {
        background: transparent;
        padding: 0;
    }
    svg {
        display: block;
    }
}

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 30px 0;
    z-index: 999;
    @include breakpoint(mobile) {
        padding: 15px 0;
        background: #222;
        border-bottom: 1px solid rgba(#fff,0.1);
    }

    svg {
        fill: #222;
        width: 70px;

        @include breakpoint(mobile) {
            width: 20px;
            fill: #fff;
        }
    }

    nav {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @include breakpoint(mobile) {
            flex-direction: column;
            align-items: center;
        }
    }
}
.wrapper {
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
}

.process {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @include breakpoint(mobile) {
        grid-template-columns: 1fr;
    }

    li {
        text-align: center;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 30px 30px 60px;

        h2 {
            margin: 10px;
        }

        p {
            margin: 0;
        }
    }

    .img-wrap {
        width: 145px;
        height: 145px;
        overflow: hidden;
        position: relative;
        img {
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
}

.container {
    display: flex;
    justify-content: center;
    @include breakpoint(mobile) {
        flex-direction: column;
    }
    .col {
        max-width: 400px;
        width: 100%;
        padding: 0 20px;
        text-align: left;
    }

    ul {
        font-weight: 300;
        font-size: 18px;
        line-height: 1.5;
    }

    h1 {
        font-weight: 500;
        font-size: 35px;
        text-transform: uppercase;
    }

    h2 {
        font-weight: 500;
        font-size: 18px;
    }

    p {
        font-weight: 300;

        strong {
            font-weight: 500;
        }
    }
}

.navigation {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    @include breakpoint(mobile) {
        padding: 0;
    }

    li {
        text-transform: uppercase;
        margin: 0 30px 0 0;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        color: #777;
        &:last-of-type {
            margin: 0;
        }

        @include breakpoint(mobile) {
            margin: 10px 10px 0 0;
            font-size: 12px;

            &:last-of-type {
                margin: 10px 0 0;
            }

        }

        a {
            text-decoration: none;
            color: #777;

            transition: all 0.4s;
            &:hover {
                color: #999;
            }
        }
    }
}

.welcome {
    text-align: left;

    @include breakpoint(mobile) {
        text-align: center;

    }

    h1 {
        font-weight: 500;
        font-size: 50px;
        text-transform: uppercase;
        margin: 0;
        color: #222;
    }

    h2 {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 500;
        color: #222;
        //margin: 0 0 10px 16px;
        @include breakpoint(mobile) {
            font-size: 12px;
        }
    }
}

.section {
    min-height: 100vh;
    display: flex;
    overflow: hidden;
    @include breakpoint(mobile) {
        flex-direction: column;
    }

    &#about {
        .img-container {
            background: #fff;
            height: 100vh;

            @include breakpoint(mobile) {
                width: 100vh;
                height: auto;
            }

            img {
                object-fit: fill;
                transform: translateX(-50%);
            }
        }
    }
    &#home {
        display: flex;
        align-items: flex-end;
        position: relative;
        background: #fff;
        @include breakpoint(mobile) {
            flex-direction: column;
        }

        .img-container {
            width: 50vw;
            opacity: 1;
            display: flex;
            align-items: flex-end;
            height: 100vh;

            @include breakpoint(mobile) {
                width: 100vh;
                height: auto;
            }
        }

        .content {
            @include breakpoint(mobile) {
                position: absolute;
                top: 0;
                left: 0;
                padding: 0 20px;
            }
        }
    }

    &#contact {
        overflow: hidden;
        //padding: 30px 0;

        .typeform-widget {
            position: relative;
            left: 15px;
        }

        h1 {
            text-transform: uppercase;
            font-size: 35px;
            font-weight: 600;
        }
    }

    &#team {
        background: #fafafa;
        h1,
        h2,
        p,
        ul {
            color: #222;
            text-align: left;
        }

        ul {
            font-weight: 300;
            font-size: 18px;
            line-height: 1.5;
        }

        h2 {
            font-weight: 500;
            font-size: 18px;
        }
        h1 {
            font-weight: 500;
            font-size: 35px;
            text-transform: uppercase;
        }

        p {
            font-weight: 300;

            strong {
                font-weight: 500;
            }
        }
    }

    &#process {
        background: #222;
        height: auto;
        padding: 30px 0;

        .content {
            height: auto;
        }

        h1 {
            text-transform: uppercase;
            font-size: 35px;
            font-weight: 600;
            margin: 0;
        }
    }

    &#services {
        background: #fafafa;
        height: auto;
        padding: 30px 0;

        .content {
            height: auto;
        }

        h1,
        h2,
        p,
        ul {
            color: #222;
        }

        h1 {
            text-transform: uppercase;
            font-size: 35px;
            font-weight: 600;
        }
    }

    &#welcome {
        background: #222;
    }
    .content {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }
    .img-container {
        min-height: 100vh;
        overflow: hidden;
        flex: 1;

        img {
            object-fit: contain;
            height: 100%;
        }

        @include breakpoint(mobile) {
            width: 100%;
            height: auto;
            min-height: auto;
            img {
                width: 100% !important;
                display: block;
            }
        }
    }

    p {
        font-size: 20px;
        line-height: 1.5;
        font-weight: 300;
        color: #ebebeb;
        text-align: left;
    }

    .text {
        max-width: 400px;
        width: 100%;
        padding: 0 20px;
    }

}
#app {
    font-family: 'futura-pt', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0;
    color: #fafafa;
}
</style>
