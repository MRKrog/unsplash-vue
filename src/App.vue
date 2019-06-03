<template>
  <div id="app">
    <div class="Header">
      <h1>Photo Search</h1>
      <Search v-on:fetch-photos="fetchPhotos" @clicked="fetchPhotos"/>
    </div>
    <PhotoContainer :photos="photos"/>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import PhotoContainer from './components/PhotoContainer';

import { fetchData, fetchPhotos } from './helpers.js';

export default {
  name: 'app',
  components: {
    Search,
    PhotoContainer
  },
  data() {
    return {
      photos: []
    };
  },
  async created() {
    let loadImages = await fetchData()
    this.photos = loadImages;
  },
  methods: {
    async fetchPhotos(search) {
      let searchedPhotos = await fetchPhotos(search)
      this.photos = searchedPhotos;
    }
  },
};
</script>



<style>
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .Header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    background: #231f20;
  }

  h1 {
    margin: 0;
    color: #ffffff;
    font-family: 'Roboto';
  }
</style>
