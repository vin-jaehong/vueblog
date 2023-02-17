<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuelog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/list">List</router-link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="mt-4">
    <router-view :postList="postList"></router-view>
  </div>
</template>

<script>
  import postList from './assets/blog';

  export default {
    name: 'App',
    data() {
      return {
        postList,
      }
    },
    components: {
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
