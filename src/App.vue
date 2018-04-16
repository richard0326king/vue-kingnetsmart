<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <div class="panel panel-default">
        <router-view v-title="title"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import AppHeader from './components/header'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="less">
@import '~bootstrap/less/bootstrap';
@import './assets/css/customized.css';
@import './assets/css/fonts/font-knst-icon.css';
</style>
