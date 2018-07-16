<template>
<div class="hello">
  <!-- <div class="welcome">
    <h2 :class="$style.text">The</h2>
    <glitch text="Change"></glitch>
    <glitch text="Group"></glitch>
  </div> -->
</div>
</template>

<script>
import glitchText from './glitchtext'
export default {
  components: {
    'glitch': glitchText
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
.welcome {
  text-align: left;
}

.text {
  text-transform: uppercase;
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  letter-spacing: 5px;
}
</style>
