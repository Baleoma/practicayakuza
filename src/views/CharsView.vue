<script>

</script>

<template>
<div class="chars">
  <div class="kiru"><RouterLink to="/chars/Kiru">Ветка Кирю</RouterLink></div>
  <div class="majima"><RouterLink to="/chars/Majima">Верка Маджимы</RouterLink></div>
</div>
</template>

<style scoped>
.chars{
  background-image: url("/2eblaChars.png");
  height: 55vw;
  display: flex;
  justify-content: space-around;

}

.chars div{
  font-family: "Edo SZ HQ", sans-serif;
  font-size: 5vw;
  margin-top: 27vw;
}

.chars div a{
  color: white;
  filter: drop-shadow(0.2vw 0.2vw 0.2vw rgba(0, 0, 0, 0.6));
  text-decoration: none;
}

</style>