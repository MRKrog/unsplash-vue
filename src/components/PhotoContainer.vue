<template>
  <div class="PhotoContainer">
    <div class="photoDisplay">
      <photoImage v-bind:key v-for="photo in photos" :photo.sync="photo"></photoImage>
    </div>
  </div>
</template>

<script type="text/javascript">
import photoImage from './photoImage'
export default {
  name: 'PhotoContainer',
  props: ['photos'],
  components: {
    photoImage,
  }
};
</script>

<style scoped>
  .PhotoContainer {
    margin: auto;
    background: #292929;
    box-shadow: inset 0 0 8px 4px #0000007d;
  }

  .photoDisplay {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em;
    box-sizing: border-box;
  }
</style>
