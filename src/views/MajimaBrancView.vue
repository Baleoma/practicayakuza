<script>

export default {
  data() {
    return {
      chars: [],
      dialog: false,
      idchar: 1
    }
  },
  methods: {
    showPopup() {
      this.dialog = !this.dialog
    },
    setId(id){
      this.idchar = id
      console.log(id)
    }
  },
  mounted() {
    fetch('/gorochars.json')
        .then(res => res.json())
        .then(res => this.chars = res)
        .catch(err => console.log(err))
  }}

</script>

<template>
  <div class="goroBR" v-if="chars.length > 0">

    <div class="popup" v-if="dialog" >
      <p @click="showPopup" style="text-align: right; font-size: 1vw; font-family: LaborUnion, sans-serif; width: 97%;  margin-top: 1vw; margin-left: 4vw; position: relative">X <br> </p>
      <h1>{{chars[idchar].name}}</h1>
      <p v-html="chars[idchar].desk"></p>
      <img :src="chars[idchar].img" alt="" style="width: unset; height: 70%; position: absolute; left: 1vw; top: 5vw">
    </div>

    <div class="charlistwrapper">
      <div class="charslist" v-for="char in chars" :key="char.id" @click="showPopup(); setId(char.id)">
        <img :src="char.img" alt="">
        <div class="nameplace">{{ char.name }}</div>
      </div>
    </div>
    <img src="/Goro.png" alt="">
    <p>Ветка Маджимы</p>
    <p class="goro"><router-link to="/chars/Kiru">Перейти к Кирю</router-link></p>
  </div>
</template>

<style scoped>

.popup{
  position: fixed;
  width: 50vw;
  height: 40vw;
  z-index: 3;
  background-color: #f6f6f6;
  top: 2vw;
  left: calc(75% - 50vw);
  border-radius: 1vw;
  padding: 1.5vw;
}

#app > main > div > div.popup > h1{
  font-family: "Edo SZ HQ", sans-serif;
  font-size: 3vw;
  margin-bottom: 2vw;
  position: unset;
  margin-left: 3vw;
  margin-top: 2vw;
}

#app > main > div > div.popup > p{
  margin-top: unset;
  font-size: 1vw;
  font-family: "UKIJ Sulus", sans-serif;
  color: black;
  filter: unset;
  width: 22vw;
}

.goroBR{
  display: flex;
  background-image: url("/HannyaBG.png");
  background-repeat:no-repeat;
  background-size: 100% 120%;
}

.goroBR p{
  font-family: "Edo SZ HQ", sans-serif;
  font-size: 5vw;
  margin-top: 27vw;
  position: absolute;
  right: 5vw;
  filter: drop-shadow(0.2vw 0.2vw 0.2vw rgba(0, 0, 0, 0.6));
  color: white;
}

.goroBR .goro{
  top: 12vw;
  font-size: 3vw;
}

.goroBR .goro a{
  color: white;
  text-decoration: none;
}

.goroBR img{
  margin-top: 5vw;
  width: 70vw;
  height: 100%;
}

.charslist{
  position: relative;
  width: 9vw;
  height: 6vw;
  background-color: #4B1212;
  margin: 1vw;
  border: #d5a722 solid 0.2vw;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
}

.charslist img{
  position: absolute;
  width: 300px;
  height: 432px;
  z-index: 1;
  margin-bottom: -190%;
  left: calc(50% - 150px);
}

.nameplace{
  display: flex;
  background-color: rgba(0, 0, 0, 0.49);
  height: 1.2vw;
  color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.charlistwrapper{
  display: flex;
  flex-wrap: wrap;
  height: 20vw;
  margin-top: 5vw;
}
</style>