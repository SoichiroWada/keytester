<template>
  <div id="app">
    <keyTester></keyTester>
  </div>
</template>

<script>
import keyTester from './components/keyTester.vue'

export default {
  name: 'app',
  components: {
    keyTester
  }
}
</script>

<style>
* { box-sizing: border-box; }
body { margin: 0; background: #232323; color: #edf2fa; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1800px;
  margin: 0 auto;
  padding: 28px 24px;
}
h1 { margin: 0 0 18px; color: #7ca7df; font-size: 32px; text-align: center; }
h2 { margin: 18px 0 8px; color: #7ca7df; font-size: 22px; }
.keytester > div:first-of-type { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
#textbox { width: 360px; max-width: 100%; height: 40px; padding: 6px 10px; color: #777; background: #021128; font: 18px monospace; border: 1px solid #64758c; border-radius: 5px; }
#textbox::placeholder { color: #a0acc0; text-align: center; }
#button { min-width: 100px; min-height: 40px; font-size: 18px; background: #526174; color: white; border: 1px solid #8292a5; border-radius: 5px; cursor: pointer; }
.tester-layout { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 30px; margin-top: 24px; align-items: start; }
.results { padding: 0 18px 18px; background: #19212c; border: 1px solid #3d4d61; border-radius: 8px; min-width: 0; }
.text { margin-top: 7px; font: 16px/1.45 monospace; overflow-wrap: anywhere; min-height: 1.45em; }
#inputValue { margin-top: 18px; color: #b8c5d5; }
.alert { color: #ffe96c; text-align: center; font-size: 18px; }
.alert:not(:empty) { margin-top: 12px; }
#url { margin-top: 28px; line-height: 1.8; font-size: 15px; }
a { color: #8cc7ff; }
a:visited { color: #c4b1ef; }
@media (max-width: 1050px) {
  .tester-layout { grid-template-columns: minmax(0, 1fr); }
  #app { padding: 20px 12px; }
}
</style>
