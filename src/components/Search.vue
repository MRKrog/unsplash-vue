<template>
  <div class="row">
    <form id="photo-form" v-on:submit="submitForm">
      <input type="text" v-model="searchText">
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        searchText: '',
    }
  },
  methods: {
    submitForm(e){
      e.preventDefault();
      this.$emit('clicked', this.searchText)
      this.searchText = ''
    }
  }
}
</script>

<style>
  #photo-form {
    display: flex;
    align-items: center
  }

  input {
    border: none;
    outline: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    padding: 4px 10px;
    font-size: 1em;
    color: #231f20;
    border: solid 3px #ffbe1d;
  }

  button {
    border: none;
    outline: none;
    padding: 4px 10px;
    font-size: 1em;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    text-transform: uppercase;
    background: #ffbe1d;
    color: #fff;
    font-weight: bold;
    border: solid 3px #ffbe1d;
    cursor: pointer;
    transition: all .5 ease;
  }

</style>
