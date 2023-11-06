<template lang="en">
  <div class="parent">
    <div class="nav-window">
      <nav-bar></nav-bar>
    </div>
    <div class="main-window">
      <div class="profile-display">
        <img src="@/components/home/assets/profile/profile-maks.jpeg">
      </div>
      <div class="description-display">
        <p>Hi, Im Maks, I am a Web Developer! Did you know I made this web application, Pretty cool right?</p>
      </div>
    </div>
    <div class="preview-display">
      
    </div>
    <div class="foot-window">
      <h4>This is page is developed by Maks</h4>
    </div>  
  </div>
</template>
<script>
import NavBar from '@/components/home/NavBar.vue'
import SlamBoo from '@/components/slamboo/slam-boo.vue'
export default
{
  name: 'HomeView',
  components:
  {
    NavBar,
    SlamBoo
  },
  data()
  {
    return{
      componentName: null
    }
  },
  methods:
  {
    
  }
}
</script>
<style scoped>
/* tags */
img
{
  display: block; 

  max-width: 128px;
  min-width: 64px;
  height: auto; 
}
/* reusables */
.border
{
  border-width: 2px 2px 2px 2px;
  border-radius: 3px;
  border-style: solid;
  border-color: #454138;
}
/* specifics */
.parent
{
  flex-direction: column;
}
.nav-window
{
  padding: 25px;
  background-color: #171d25e8;
}
.main-window
{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: 100%;
  min-width: auto;
  height: auto; 

  margin-top: 5px;
  margin-left: 25%;
  margin-right: 25%;

  border-width: 2px 2px 2px 2px;
  border-radius: 2px;
  border-style: solid;
  border-color: #0e1c2f;

  background-color: #0d2e76c9;
}
.profile-display
{
  display: flex;
  flex: 0 0 128px;

  margin: 10px;

  justify-content: center;
  align-items: center;
}
.description-display
{
  display: flex;
  flex: 0 0 calc(100% - 256px);

  padding: 10px;
  margin: 10px;

  text-align: left;

  color: #ffffff;
}
.foot-window
{
  padding: 10px;
  margin-top: 5px;
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  border-width: 2px 2px 2px 2px;
  border-radius: 2px;
  border-style: solid;
  border-color: #0e1c2f;

  background-color: #0d2e76c9;

  color: #ffffff;
}
</style>