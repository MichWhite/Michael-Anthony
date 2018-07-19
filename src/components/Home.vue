<template>
  <div id="container">
  <v-container elevation-20>

    <v-layout>

        <v-flex sm12>
  <h2>World Renowned Healer</h2>
                <hr>

<p>
I am the 7th son of a 7th son and as a natural born healer, the spirit world works through me, to bring healing to people with, mental, physical and spiritual problems.
</p>

</v-flex>
 </v-layout>
</v-container>
<br>
  <v-container elevation-20>

    <v-layout>
<v-carousel hide-delimiters hide-controls>
    <v-carousel-item  
      v-for="(data,i) in items"
      :key="i"
      :src="data.src">

      </v-carousel-item>

</v-carousel> </v-layout>
</v-container>
<br>

  <v-container elevation-20>

    <v-layout>

        <v-flex sm6>
<h2>Spiritual Cleanser</h2>
              <hr>

<p>
I work with energy; I sense spirit, which is the essence of our loved ones that have moved on. Some of whom become trapped between our dimensions and theirs, I show them the way home, so they can be with their loved ones on the other side.
</p>

</v-flex>

        <v-flex sm6>
<h2>Psychic Medium</h2>
              <hr>

<p>
My work as a Psychic Medium brings me to helping people to communicate with their loved ones on the other side, and also give them direction with their lives on earth.
</p>

</v-flex>
 </v-layout>
</v-container>
 <br>
  </div>



</template>



<script>
export default {
  name: 'Home',
       
       data () {
      return {
        items: [
            {
            src: require('../assets/hill-top.jpeg')
          },
          {
            src: require('../assets/earth-summer.jpeg')

          },
         
          {
            src: require('../assets/mohamed-nohassi.jpg')

          },
         
          {
            src: require('../assets/pexels-photo.jpeg')

          }
        ]
      }
    }
  }
</script>

