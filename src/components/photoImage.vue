<template>
  <div class='photoImage'>
    <div class="card" :style="{ backgroundImage: `url('${photo}')` }"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "photoImage",
    props: ['photo'],
    data() {
      return {
        isEditing: false,
      };
    },
  };
</script>

<style scoped>
  .photoImage {
    display: flex;
    width: 31%;
    margin: 1%;
  }

  .card {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: top center;
    border-radius: 2px;
    box-shadow: 0 0 6px 2px #00000036;
  }
</style>
