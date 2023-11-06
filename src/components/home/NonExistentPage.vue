<template>
    <div>
        <div class="nav-window">
            <nav-bar></nav-bar>
        </div>
        <div class="main-window">
            <h1>Page Does not Exist</h1>
            <h2>Please Choose between the available links in the navigation bar above.</h2>
        </div>
    </div>
</template>
<script>
import NavBar from '@/components/home/NavBar.vue'
export default
{
  name: 'HomeView',
  components:
  {
    NavBar,
  }
}
</script>
<style scoped>
.nav-window
{
  padding: 25px;
  background-color: #171d25e8;
}
.main-window
{
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 5px;
  margin-left: 25%;
  margin-right: 25%;

  padding: 10px;

  border-width: 2px 2px 2px 2px;
  border-radius: 2px;
  border-style: solid;
  border-color: #0e1c2f;

  color: #ffffff;
  background-color: #0d2e76c9;
}
</style>