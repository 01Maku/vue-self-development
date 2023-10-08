<template>
  <div class="padding flex column">
      <div class="padding margin flex">
          <h4>BunkeR - Server 3C3C1D119440927</h4>
      </div>
      <nav class="padding margin router-links-container">
          <div class="router-links">
            <router-link to="/home">Home</router-link>
          </div>
          <div class="router-links">
              <router-link to="/slam-boo">Slamboo</router-link>
          </div>
          <div class="router-links">
              <router-link to="/bmi-calculator">BMI Calculator</router-link>
          </div>
          <div class="router-links">
              <router-link to="/task-manager">Task Manager</router-link>
          </div>
          <div class="router-links">
              <router-link to="/">Log Out</router-link>
          </div>
      </nav>
    </div>
</template>
<script>
export default
{

}
</script>
<style scoped>
.router-links
{
  margin: 10px
}

nav 
{
  display: flex;
  flex-direction: row;
  padding: 30px;
}

nav a 
{
  padding: 5px;
  text-decoration: none;

  font-weight: bold;
  color: #2c3e50;

  transition: all 0.3s ease;
}

nav a:hover
{
  background-color: #454138;
  color: #dcd8c0;

  border-width: 5px 0px 5px 0px;
  border-radius: 3px;
  border-style: double;
  border-color: #dcd8c0
}

nav a.router-link-exact-active
{
  background-color: #454138;
  color: #dcd8c0;

  border-width: 5px 0px 5px 0px;
  border-radius: 3px;
  border-style: double;
  border-color: #dcd8c0
}

.margin
{
    margin: 10px;
}
.padding
{
    padding: 10px;
}
.flex
{
    display: flex;
}
.column
{
    flex-direction: column;
}
.row
{
    flex-direction: row;
}
.router-links-container
{
  border-width: 2px 0px 2px 0px;
  border-radius: 3px;
  border-style: solid;
  border-color: #454138
}
</style>