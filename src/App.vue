<template lang="en">
  <div class="video-container ">
    <video autoplay loop muted>
      <source :src="require('@/components/home/assets/bg/grassland-night-camp-rev2.mp4')" type="video/mp4">
    </video>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<style scoped>
video 
{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.video-container 
{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.content 
{
  position: relative; 
  z-index: 1;
}
</style>