<script>
import { Carousel, Slide } from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'

export default {
  components: {Carousel, Slide},
  data() {
    return {
      trailers: [],
      videoid: 0
    }
  },
  mounted() {
    fetch('/swiperdata.json')
        .then(res => res.json())
        .then(res => this.trailers = res)
        .catch(err => console.log(err))
  },
  methods:{
    setId(id){
      this.videoid = id
      console.log(id)
    }
  }
};
</script>

<template>
    <div class="pres">
      <img src="/yakuzers.png" alt="" class="guys">
      <img src="/yakuza0.png" alt="" class="name">
    </div>

    <div class="buy">
      <p>Доступна уже сейчас</p> <button><p>Заказать</p></button>
    </div>

    <div class="trailers" v-if="trailers.length > 0">
      <h1>Трейлеры</h1>
      <div class="maintrailer">
        <iframe width="960"
                height="540"
                :src="trailers[videoid].refvideo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
      </div>

      <div class="carousel-vid">
        <carousel :items-to-show="3">
          <slide v-for="slide in trailers" :key="slide.id">
            <img :src="slide.refimg" alt="" @click="setId(slide.id);">
          </slide>
        </carousel>
      </div>
    </div>
</template>

<style scoped>

.pres{
  display: flex;
  background-image: url("/dragonBG.png");
  background-repeat:no-repeat;
  background-size: 100% 100%;
}

.guys{
  width: 60vw;

}

.name{
  width: 50vw;
  position: absolute;
  left: 35vw;
  top: 20vw;
}

.buy{
  font-family: LaborUnion, sans-serif;
  display: flex;
  justify-content: space-around;
  font-size: 5vw;
  color: white;
  padding: 1.2vw 0 1.2vw 0;
  background: radial-gradient(#d9d9d9, #b0b0b0);
  border: #989898 solid 0.2vw;
}

.buy p{
  filter: drop-shadow(0.2vw 0.2vw 0.2vw rgba(0, 0, 0, 0.6));
}

button{
  font-family: LaborUnion, sans-serif;
  width: 25vw;
  background: radial-gradient(#A83B40, #7D2125);
  color: white;
  font-size: 3.5vw;
  border-radius: 0.5vw;
  border: #4B1212 0.2vw solid;
}

button p{
  filter: drop-shadow(0.2vw 0.2vw 0.2vw rgba(0, 0, 0, 0.6));
}

.trailers{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/HannyaBG.png");
  background-repeat:no-repeat;
  background-size: 100% 100%;
}

.carousel__viewport > ol > li > img{
  width: 400px;
}

.carousel-vid{
  width: 70vw;
  margin: 2vw 0 7vw 0;
}

.trailers h1{
  font-family: "Edo SZ HQ", sans-serif;
  font-size: 6vw;
  color: white;
  filter: drop-shadow(0.2vw 0.2vw 0.2vw rgba(0, 0, 0, 0.6));
  margin: 3vw 0 2.5vw 0;
}


</style>