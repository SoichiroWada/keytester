<template>
  <div class="keytester">
    <h1>{{ msg }}</h1>
    <div>
      <input
      v-model="inputValue"
      v-on:focus="isFocused = true"
      v-on:focusout="isFocused = false"
      v-bind:style="{ backgroundColor: isFocused ? 'white' : '#021128' }"
      ref="textbox"
      placeholder="CLICK THIS TEXT BOX"
      id="textbox"
      v-on:keydown="keyDown"
      v-on:keypress="keyPress"
      v-on:keyup="keyUp"
      >
      <button class = "btn" type="button" id="button" v-on:click="clear">Clear</button>
    </div>
    <div class="alert" id="alertJ"> {{ message01 }}</div>
    <div class="alert" id="alertE"> {{ message02 }}</div>
    <div class="text" id="inputValue">inputValue: {{ inputValue }}</div>
    <h2 class="input" id="keydown">keydown</h2>
    <div class="text" id="message1">{{ message1 }}</div>
    <div class="text" id="message2">{{ message2 }}</div>
    <div class="text" id="message3">{{ message3 }}</div>
    <div class="text" id="message4">{{ message4 }}</div>
    <h2 class="input" id="keypress">keypress</h2>
    <div class="text" id="message5">{{ message5 }}</div>
    <div class="text" id="message6">{{ message6 }}</div>
    <div class="text" id="message7">{{ message7 }}</div>
    <div class="text" id="message8">{{ message8 }}</div>
    <h2 class="input" id="otherKeys">keyup</h2>
    <div class="text" id="message9">{{ message9 }}</div>
    <div class="text" id="message10">{{ message10 }}</div>
    <div class="text" id="message11">{{ message11 }}</div>
    <div class="text" id="message12">{{ message12 }}</div>

    <div id="url">
      <a href="https://www.w3.org/2002/09/tests/keys.html" class="ref" target="_blank">Key and Character Codes vs. Event Types</a><br>
      <a href="https://www.w3.org/TR/uievents-code/" class="ref" target="_blank">UI Events KeyboardEvent code Values</a><br>
      <a href="https://javascript.info/keyboard-events" class="ref" target="_blank">Keyboard: keydown and keyup</a><br>
    </div>

  </div>
</template>

<script>
export default {
  name: 'keyTester',
  data:function(){
    return {
      msg: "Keycode Finder - VUE CLI",
      inputValue: null,
      message01:null,
      message02:null,
      message1:null,
      message2:null,
      message3:null,
      message4:null,
      message5:null,
      message6:null,
      message7:null,
      message8:null,
      message9:null,
      message10:null,
      message11:null,
      message12:null,
      isFocused: false
    }
  },
  methods: {
    keyDown(event){
      if (event.keyCode === 229) {
        this.message01 = "カナ漢字変換をOFFにしてください";
        this.message02 = "Please turn off Kana Kanji Converter";
      }
      else if (event.keyCode !== 229){
        this.message01 = null;
        this.message02 = null;
        this.message1 = 'event.key: ' + event.key;
        this.message2 = 'event.keyCode: ' + event.keyCode;
        this.message3 = 'event.charCode: ' + event.charCode;
        this.message4 = 'event.code: ' + event.code;
      }
    },
    keyPress(event){
      this.message5 = 'event.key: ' + event.key;
      this.message6 = 'event.keyCode: ' + event.keyCode;
      this.message7 = 'event.charCode: ' + event.charCode;
      this.message8 = 'event.code: ' + event.code;
    },
    keyUp(event){
      this.message9 = 'event.key: ' + event.key;
      this.message10 = 'event.keyCode: ' + event.keyCode;
      this.message11 = 'event.charCode: ' + event.charCode;
      this.message12 = 'event.code: ' + event.code;
    },
    clear(){
      this.message01 = null;
      this.message02 = null;
      this.message1 = null;
      this.message2 = null;
      this.message3 = null;
      this.message4 = null;
      this.message5 = null;
      this.message6 = null;
      this.message7 = null;
      this.message8 = null;
      this.message9 = null;
      this.message10 = null;
      this.message11 = null;
      this.message12 = null;
      this.inputValue = null;
      this.$refs.textbox.focus();
    }
  }
}
</script>

<style>


</style>
