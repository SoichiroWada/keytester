<template>
  <div id="app">
    <keyTester></keyTester>
  </div>
</template>

<script>
import keyTester from '@/components/keyTester.vue'

export default {
  name: 'app',
  components: {
    keyTester
  }
}
</script>

<style>
h1{
  margin-top: -5px;
  margin-bottom: 5px;
  padding-top: 0px;
  font-size: 36px;
  color:#5984ba;
}
h2{
  margin-top:20px;
  margin-bottom:3px;
  font-size: 32px;
  color:#5984ba;
}
body{
  background-color: #232323;
  font-family:'Saira','Lucida Console';
}

.text{
  text-align: left;
  margin-left:31%;
  margin-top: 10px;
  font-size: 26px;
  font-family:'Saira','Lucida Console';
  border-color: darkgray;
  color:white;
}
.input{
  text-align: left;
  margin-left:30%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#textbox{
  width: 360px;
  height: 32px;
  font-family: 'Saira','Lucida Console';
  color:gray;
  background-color:#021128;
  font-size:20px;
  margin-top:15px;
  margin-left:15px;
  border-radius: 5px;
}
::placeholder {
    color: white;
    text-align: center;
    opacity: 1; /* Firefox */
}
#button{
  width: 100px;
  height: 36px;
  font-size: 20px;
  font-family:'Saira','Lucida Console';
  border-color: darkgray;
  background-color:gray;
  color:white;
  margin-top:20px;
  margin-left:15px;
}
#inputValue{
  margin-top:40px;
  margin-left:30%;
  color:gray;
}
#url{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
  margin-left:30%;
  margin-top: 30px;
  font-size: 24px;
  border-color: darkgray;
  color:white;
}
#alertJ{
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 30px;
  color: yellow;
}
#alertE{
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 30px;
  color: yellow;
}
.ref{
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

a:link {
    color: green;
    background-color: transparent;
    text-decoration: underline;
}

a:visited {
    color: gray;
    background-color: transparent;
    text-decoration: none;
}


</style>
