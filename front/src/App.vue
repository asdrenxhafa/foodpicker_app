<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--      <router-link to="/login">Login</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.header-parent {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.v-main__wrap {
  padding: 16px;
}
.restaurant-parent {
  position: relative;
  float: left;
  width: 100%;
}
.title {
  position: relative;
  width: 100%;
  text-align: left;
  padding-left: 16px;
}
.v-card__actions {
  padding: 0 !important;
  padding-top: 5px !important;
  padding-bottom: 8px !important;
  justify-content: flex-end;
}
.tbody-table td {
  text-align: left;
}
.tbody-table button {
  width: auto;
  height: 40px;
  padding: 0px 10px;
  border: 1px solid red;
  margin-left: 10px;
  /* margin-bottom: 10px; */
}
.text-actions {
  text-align: right;
}
</style>