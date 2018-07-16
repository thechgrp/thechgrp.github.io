<template lang="html">
  <h1 :class="$style['text-wrap']">
    <span :class="$style.glitch" :data-text="letter" v-for="(letter, idx) in word" :key="`${_uid}-${letter}-${idx}`">{{letter}}</span>
  </h1>
</template>

<script>
export default {
  props: {
    text: String,
    tag: String
  },
  data () {
    return {
      letters: 'abcdefghijklmnopqrstuvwxyz#%&^+=-',
      speed: 50
    }
  },
  computed: {
    word () {
      return this.text.split('')
    }
  },
  mounted () {}
}
</script>

<style lang="css" module>
.text-wrap {
  margin:0;
  font-size:20px;
  text-transform: uppercase;
  line-height:40px;
  text-align: left;
  color:#fff;
}
  .glitch {
    width:40px;
    height:40px;
    font-weight:500;
    display: inline-block;
    position: relative;
    font-size:30px;
    vertical-align: middle;
    text-align: center;
  }

  .glitch:after,.glitch:before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: #222;
      clip: rect(0,0,0,0)
  }

  .glitch:after {
    left: 0;
    text-shadow: -1px 0 #d66ee2;
    -webkit-animation: glitch-1 2s infinite linear alternate-reverse;
    animation: glitch-1 2s infinite linear alternate-reverse
}

.glitch:before {
    left: 0;
    text-shadow: 1px 0 red;
    -webkit-animation: glitch-2 5s infinite linear alternate-reverse;
    animation: glitch-2 5s infinite linear alternate-reverse
}

@keyframes glitch-1 {
    0% {
        clip: rect(103px,450px,30px,0)
    }

    5.88235% {
        clip: rect(94px,450px,44px,0)
    }

    11.76471% {
        clip: rect(55px,450px,48px,0)
    }

    17.64706% {
        clip: rect(11px,450px,110px,0)
    }

    23.52941% {
        clip: rect(26px,450px,107px,0)
    }

    29.41176% {
        clip: rect(49px,450px,71px,0)
    }

    35.29412% {
        clip: rect(83px,450px,109px,0)
    }

    41.17647% {
        clip: rect(52px,450px,45px,0)
    }

    47.05882% {
        clip: rect(30px,450px,82px,0)
    }

    52.94118% {
        clip: rect(58px,450px,106px,0)
    }

    58.82353% {
        clip: rect(115px,450px,22px,0)
    }

    64.70588% {
        clip: rect(56px,450px,96px,0)
    }

    70.58824% {
        clip: rect(80px,450px,113px,0)
    }

    76.47059% {
        clip: rect(9px,450px,93px,0)
    }

    82.35294% {
        clip: rect(35px,450px,34px,0)
    }

    88.23529% {
        clip: rect(12px,450px,63px,0)
    }

    94.11765% {
        clip: rect(52px,450px,81px,0)
    }

    100% {
        clip: rect(14px,450px,109px,0)
    }
}

@keyframes glitch-2 {
    0% {
        clip: rect(65px,450px,83px,0)
    }

    5.88235% {
        clip: rect(94px,450px,32px,0)
    }

    11.76471% {
        clip: rect(59px,450px,31px,0)
    }

    17.64706% {
        clip: rect(59px,450px,10px,0)
    }

    23.52941% {
        clip: rect(10px,450px,46px,0)
    }

    29.41176% {
        clip: rect(103px,450px,113px,0)
    }

    35.29412% {
        clip: rect(53px,450px,107px,0)
    }

    41.17647% {
        clip: rect(112px,450px,72px,0)
    }

    47.05882% {
        clip: rect(99px,450px,93px,0)
    }

    52.94118% {
        clip: rect(63px,450px,100px,0)
    }

    58.82353% {
        clip: rect(108px,450px,4px,0)
    }

    64.70588% {
        clip: rect(113px,450px,41px,0)
    }

    70.58824% {
        clip: rect(24px,450px,74px,0)
    }

    76.47059% {
        clip: rect(40px,450px,92px,0)
    }

    82.35294% {
        clip: rect(62px,450px,29px,0)
    }

    88.23529% {
        clip: rect(75px,450px,17px,0)
    }

    94.11765% {
        clip: rect(80px,450px,30px,0)
    }

    100% {
        clip: rect(91px,450px,108px,0)
    }
}

</style>
