<template lang="en">
  <audio id="buttonClickSFX" preload="auto">
    <source src="@/components/home/assets/sfx/nier-sfx-5.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
  </audio>
  <nav>
      <a @click="playSfx('/home')" class="router-links">
        <div @click="playSfx('/home')">Home</div>
      </a>
      <a @click="playSfx('/slam-boo')" class="router-links">
          <div @click="playSfx('/slam-boo')">Slamboo</div>
      </a>
      <a @click="playSfx('/bmi-calculator')" class="router-links">
          <div @click="playSfx('/bmi-calculator')">BMI Calculator</div>
      </a>
      <a @click="playSfx('/task-manager')" class="router-links">
          <div @click="playSfx('/task-manager')">Task Manager</div>
      </a>
      <a @click="playSfx('/mapty')" class="router-links">
          <div @click="playSfx('/mapty')">Mapty</div>
      </a>
      <a @click="playSfx('/'); updateSession();" class="router-links">
          <div @click="playSfx('/'); updateSession();">Leave</div>
      </a>
  </nav>
</template>
<script>
import {isLoggedIn} from '@/router/index.js';
export default
{
  inject: ['provideLocalActiveUser'],
  methods:
  {
    playSfx(paramLink)
    {
      const audio = document.getElementById('buttonClickSFX');
      audio.currentTime = 0;
      audio.play();
      this.$router.push(paramLink);
    },
    updateSession()
    {
      isLoggedIn.isLoggedIn = false;
    }
  }
}
</script>
<style scoped>
/* tags */
a
{
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
}
nav
{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.router-links
{
  margin: 10px;
  padding: 10px;

  background-color: transparent;

  transition: all 0.8s ease;
}
.router-links:hover
{
  text-decoration: underline;
  text-decoration-color: #ffffff;
  border-width: 0px 0px 0px 0px;
  border-radius: 3px;
  border-style: solid;
  border-color: #418dffcc;
  
  background-color: #418dffcc;
}
</style>