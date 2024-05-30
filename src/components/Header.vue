<script setup>

</script>

<template>
<header>
  <ul>
    <li><RouterLink to="/"><p>Главная</p></RouterLink></li>
    <li><RouterLink to="/story/"><p>История</p></RouterLink></li>
    <li><RouterLink to="/adventures/"><p>Приключения</p></RouterLink></li>
    <li><RouterLink to="/chars/"><p>Персонажи</p></RouterLink></li>
  </ul>
</header>
</template>

<style scoped>
header ul{
  display: flex;
  list-style-type: none;
  color: black;
  text-decoration: none;
  justify-content: space-around;

}

header ul li{
  font-family: LaborUnion, sans-serif;
  background: radial-gradient(#d9d9d9, #b0b0b0);
  flex: 1;
  border: #989898 solid 0.2vw;
  padding: 1vw 0 1vw  0;
}

header ul li a{
  text-decoration: none;
  color: white;
}

p{
  filter: drop-shadow(0.2vw 0.2vw 0.2vw rgba(0, 0, 0, 0.6));
  text-align: center;
  font-size: 2.5vw;
}

</style>