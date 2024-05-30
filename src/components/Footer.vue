<script setup>

</script>

<template>
<footer>
  <div class="icons">
    <img src="/RGG.png"  alt="" class="rgg">
    <img src="/SEGA.png" alt="" class="sega">
  </div>

  <div class="refs">
    <ul>
      <li><a href="#">Официальный сайт SEGA</a></li>
      <li><a href="#">Официальный сайт Ryu Ga Gotoku</a></li>
      <li><a href="#">Политика конфиденциальности</a></li>
    </ul>
  </div>

  <div class="platfotms">

  </div>
</footer>
</template>

<style scoped>

footer{
  background: radial-gradient(#494949, #303030);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 25vw;
}

.icons{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.refs{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  margin: auto;
}

.refs ul{
  list-style-type: none;
}

.refs ul li{
  margin: 2vw 0 2vw 0;
}

.refs ul li a{
  color: white;
  text-decoration: none;
  font-family: "UKIJ Sulus", sans-serif;
  font-size: 2vw;
}

.sega{
  width: 12vw;
}

.rgg{
  width: 9vw;
  margin-bottom: 2vw;
}

</style>