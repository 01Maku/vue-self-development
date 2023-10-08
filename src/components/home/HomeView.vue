<template lang="en">
  <div class="flex">
      <h4>BunkeR - Server 3C3C1D119440927</h4>
  </div>
  <div class="flex row window">
    <div class="padding margin flex column sub-window page-select">
      <h2>PagE SelecT</h2>
      <nav class="padding margin router-links-container">
          <router-link to="/slam-boo">
              <div @mouseenter="showPreview" @mouseleave="hidePreview" class="padding margin router-links flex">Slamboo</div>
          </router-link>
          <router-link to="/bmi-calculator">
              <div class="padding margin router-links flex">BMI Calculator</div>
          </router-link>
          <router-link to="/task-manager">
              <div class="padding margin router-links flex">Task Manager</div>
          </router-link>
          <router-link to="/">
              <div class="padding margin router-links flex">Log Out</div>
          </router-link>
      </nav>
    </div>
    <div class="padding margin flex column sub-window preview">
      <h2>PagE Preview</h2>
      <div v-if="previewFlag">
          <h1>PagePreview.vue</h1>
      </div>
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
  },
  data()
  {
    return{
      previewFlag: false,
    }
  },
  methods:
  {
    showPreview()
    {
      this.previewFlag = true
    },
    hidePreview()
    {
      setTimeout(() => 
      {
        this.previewFlag = false
      }, 1500);
    }
  }
}
</script>
<style scoped>
/* tags */
a
{
  padding: 5px;
  text-decoration: none;

  font-weight: bold;
  color: #454138;
}

/* nav links */
.router-links
{
  margin: 10px;
  flex: 1;  

  background-color: #45413848;

  border-width: 6px 0px 6px 0px;
  border-radius: 2px;
  border-style: double;
  border-color: #454138;

  transition: all 0.3s ease;
}

.router-links:hover
{
  background-color: #454138;
  color: #dcd8c0;

  border-width: 6px 0px 6px 0px;
  border-radius: 2px;
  border-style: double;
  border-color: #dcd8c0;
}

.router-links:hover a 
{
  color: #dcd8c0;
}

/* reusable */
.padding
{
  padding: 5px;
}
.margin
{
  margin: 5px;
}
.flex
{
  display: flex;
}
.row
{
  flex-direction: row;
}
.column
{
  flex-direction: column;
}
/* window */
.window
{
  justify-content: space-between;
}
.sub-window
{
  flex: 1;  
}
.page-select
{
  flex: 0 0 25%;
  background-color: #dcd8c054;

  border-width: 0px 2px 2px 0px;
  border-radius: 3px;
  border-style: solid;
  border-color: #454138;
}
.preview
{
  flex: 1; 
  background-color: #dcd8c054;

  border-width: 0px 2px 2px 0px;
  border-radius: 3px;
  border-style: solid;
  border-color: #454138;
}
.preview-header
{
  border-width: 2px 2px 2px 2px;
  border-radius: 3px;
  border-style: solid;
  border-color: #454138;
}
</style>