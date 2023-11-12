<template>
  <div class="loader">
    <div class="text">Loading...</div>
    <div class="horizontal">
      <div class="circlesup">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div class="circlesdwn">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
    <div class="vertical">
      <div class="circlesup">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div class="circlesdwn">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>

  <div
    style="
      text-align: center;
      margin: 10px 0;
      font: normal 14px/24px 'MicroSoft YaHei';
    "
  ></div>
</template>
<script>
export default {
  name: "loading1",
};
</script>
<style scoped>
@import "./index.less";
a {
  background: #13a3a5;
  padding: 5px;
  margin: 10px;
  display: block;
  font-weight: 100;
  cursor: pointer;
  font-size: 1.5em;
  float: left;
  text-decoration: none;
  font-size: 18px;
  color: white;
}
</style>
