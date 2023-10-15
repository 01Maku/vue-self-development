<template lang="en">
  <nav>
      <router-link to="/home" class="router-links">
        <div>Home</div>
      </router-link>
      <router-link to="/slam-boo" class="router-links">
          <div>Slamboo</div>
      </router-link>
      <router-link to="/bmi-calculator" class="router-links">
          <div>BMI Calculator</div>
      </router-link>
      <router-link to="/task-manager" class="router-links">
          <div>Task Manager</div>
      </router-link>
      <router-link to="/" class="router-links">
        <div>Leave</div>
      </router-link>
  </nav>
</template>
<style scoped>
/* tags */
a
{
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