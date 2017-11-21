<template>
  <div id="app">
	  <router-link to="/" class="index">&lt;首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$fontColor: #306155;
$borderColor: #008866;

body {
    margin: 0;
    padding: 0;
    font-size: 16px;
}

ul,
li {
    margin: 0;
    padding: 0;
    list-style: none;
}

img {
    display: block;
    border: none;
}

a {
    text-decoration: none;
}

table {
    width: 100%;
    margin: 0 auto;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: center;
    th {
        font-weight: 500;
        background: #007777;
        color: #FFF;
    }
    th,
    td {
        border: 1px solid $borderColor;
        padding-top: 8px;
        padding-bottom: 8px;
    }
}

.usage-title {
    color: $fontColor;
    padding-top: 10px;
    padding-bottom: 15px;
    font-size: 18px;
}

.usage {
    color: #000;
    background: rgba(0, 0, 0, .3);
    div {
        padding-left: 2em;
        padding-top: 5px;
    }
    pre {
        margin: 0;
        code {
            background: transparent;
            padding: 0;
        }
    }
}

.comTitle {
    text-align: center;
    color: $fontColor;
    font-size: 24px;
    padding-bottom: 15px;
}

.index{
  display: block;
  width: 800px;
  margin: 0 auto;
  color: $fontColor;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
