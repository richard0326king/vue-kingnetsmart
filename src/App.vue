
<script>
  import $ from "jquery";
  import HeaderComponent from "./components/header";
  
  export default {
    name: "App",
    components: {
      HeaderComponent
    }
  };
</script>

<template>
  <div id="app">
    <header-component></header-component>
    <div class="container">
      <div class="panel panel-default">
        <router-view v-title="title"></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  @import "~bootstrap/less/bootstrap";
  @import "./assets/css/customized.css";
  @import "./assets/css/fonts/font-knst-icon.css";
</style>
