<script>

export default {
  data() {
    return {
      minis: [],
      dialog: false,
      idmini: 1
    }
  },
  methods: {
    showPopup() {
      this.dialog = !this.dialog
    },
    setId(id){
      this.idmini = id
      console.log(id)
    }
  },
  mounted() {
    fetch('/mini-games.json')
        .then(res => res.json())
        .then(res => this.minis = res)
        .catch(err => console.log(err))
  }}
</script>

<template>
<div class="adventures" v-if="minis.length > 0">

  <div class="popup" v-if="dialog" >
    <p @click="showPopup" style="text-align: right; font-size: 1vw; font-family: LaborUnion, sans-serif; width: 97%;  margin-top: 1vw">X</p>
    <h1>{{minis[idmini].game_name}}</h1>
    <p v-html="minis[idmini].game_desk"></p>
  </div>

  <div class="substories">
    <h1>Побочные истории</h1>
    <p>Живой город, который может рассказать 100 историй! <br> <br>
      В Yakuza 0 доступно 100 побочных заданий! Сквозь смех и слезы вы узнаете истории граждан, представляющих весь спектр
      культур. Вы даже можете встретить знакомые лица из сериала «Якудза» в молодости. Настоящему фанату необходимо
      выполнить их все!<br><br>
    </p>

    <div class="kirusub">
      <p>Истории Камурочо</p>
      <div>
        <ul>
          <li>
            <img src="/DamnedYanki.png" alt="">
            Проклятые янки
          </li>
          <li>
            <img src="/ShowMustGoOn.png"  alt="">
            Шоу должно продолжаться
          </li>

          <li>
            <img src="/ShugarDaddy.png" alt="">
            Сладкий папочка
          </li>
        </ul>
      </div>
    </div>

    <div class="gorosub">
      <p>Истории Сотенбори</p>
      <div>
        <ul>
          <li>
            <img src="/CallingTheFuture.png" alt="">
            Звонок в будущее
          </li>
          <li>
            <img src="/ToiletTalk.png"  alt="">
            Туалетный разговор
          </li>

          <li>
            <img src="/BeMyBoyfriend.png" alt="">
            Будь моим парнем!
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="minigames">
    <h1>Мини-игры</h1>

    <div class="mini-list-wrapper">
      <div class="mini-list" v-for="mini in minis" :key="mini.id">
        <img @click="showPopup(); setId(mini.id)" :src="mini.game_img">
        {{mini.game_name}}
      </div>
    </div>



  </div>

</div>
</template>

<style scoped>
.adventures{
  background-image: url("/adventuresBG.png");
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  font-family: "UKIJ Sulus", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.substories{
  width: 80vw;
  font-size: 1vw;
}

.kirusub img{
  width: 20vw;
}

.kirusub p{
  font-size: 1.4vw;
  line-height: 4vw;
}

.gorosub p{
  font-size: 1.4vw;
  line-height: 4vw;
}

.kirusub div ul{
  display: flex;
}

.kirusub div ul li{
  display: flex;
  flex-direction: column;
  margin-right: 3vw;
  line-height: 3vw;
}

.gorosub img{
  width: 20vw;
}

.gorosub div ul{
  display: flex;
}

.gorosub div ul li{
  display: flex;
  flex-direction: column;
  margin-right: 3vw;
  line-height: 3vw;
}

.substories h1{
  font-family: "Edo SZ HQ", sans-serif;
  font-size: 2.5vw;
  line-height: 6vw;
}

.minigames{
  width: 80vw;
  font-size: 1vw;
}

.minigames h1{
  font-family: "Edo SZ HQ", sans-serif;
  font-size: 2.5vw;
  line-height: 6vw;
}

.minigames img{
  width: 13vw;
  border-radius: 0.5vw;
}

.mini-list{
  display: flex;
  flex-direction: column;
  margin-right: 3vw;
  margin-bottom: 2vw;
  line-height: 2vw;
  background-color: white;
  padding: 1vw;
  border-radius: 1vw;
}

.mini-list-wrapper{
  display: flex;
  max-width: 80vw;
  flex-wrap: wrap;
  margin-bottom: 10vw;
}

.popup{
  position: fixed;
  width: 50vw;
  height: 30vw;
  z-index: 3;
  background-color: #f6f6f6;
  top: 7vw;
  border-radius: 1vw;
  padding: 2vw;
}

.popup h1{
  font-family: "Edo SZ HQ", sans-serif;
  font-size: 3vw;
  margin-bottom: 3vw;
}

.popup p{
  font-size: 1vw;
  font-family: "UKIJ Sulus", sans-serif;
}

</style>