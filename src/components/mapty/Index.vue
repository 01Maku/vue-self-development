<template lang="en">
  <navigation-bar></navigation-bar>
  <div class="super-container">
    <div class="sidebar">

      <!-- n1 -->
      <img src="@/components/mapty/logo.jpeg" alt="Logo" class="logo" />

      <!-- n2 -->
      <div class="form">
        <form @submit.prevent="pushData">
          <label class="form__label">{{latitude}}</label>
          <label class="form__label">{{longitude}}</label>
          <div class="form__row">
            <label class="form__label">Type</label>
            <select v-model="actionFlag" required class="form__input form__input--type" @change="saveData($event.target.value, 'Type')">
              <option value="" disabled selected>Select an activity</option>
              <option value="Running">Running</option>
              <option value="Cycling">Cycling</option>
            </select>
          </div>
          <div class="form__row">
            <label class="form__label">Distance</label>
            <input required class="form__input form__input--distance" type="number" placeholder="km" @change="saveData(`${$event.target.value} KM`, 'Distance')"/>
          </div>
          <div class="form__row">
            <label class="form__label">Duration</label>
            <input required class="form__input form__input--duration" type="number" placeholder="min" @change="saveData(`${$event.target.value} MIN`, 'Duration')"/>
          </div>
          <div class="form__row">
            <label class="form__label">Cadence</label>
            <input required class="form__input form__input--cadence" type="number" placeholder="step/min" @change="saveData(`${$event.target.value} KM/MIN`, 'Progress')"/>
          </div>
          <button class="form__btn">OK</button>
        </form>
      </div>
  
      <!-- n3 -->
      <div class="workouts">
        <button @click="clearMarkers">Clear All</button>
        <div v-for="(workouts, index) in markerDataList" :key="workouts" class="workout-items">
          <label>{{workouts.data.Type}}</label>
          <label>{{workouts.data.Distance}}</label>
          <label>{{workouts.data.Duration}}</label>
          <label>{{workouts.data.Progress}}</label>
          <button @click="deleteWorkout(index)">Delete</button>
        </div>
      </div>
    </div>
    <div id="map">
    </div>
  </div>
</template>
<script>
import NavigationBar from '@/components/home/NavBar.vue'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {importMarkerDataList, workoutDataTemplate} from '@/components/mapty/assets/workoutData.js'
export default
{
    name: 'Index',
    components:
    {
        NavigationBar,
    },
    data() 
    {
        return {
            // recipe
            markerDataList: importMarkerDataList,
            cloneWorkoutDataTemplate: structuredClone(workoutDataTemplate),
            // map
            map: null,
            latitude: null,
            longitude: null,
            currentMarker: null,
            mapZoomLevel: 13, 
            workout: [],
            // flag
            actionFlag: null,
        };
    },
    beforeMount()
    {
        this.getPosition()
    },
    methods:
    {
      getPosition() 
      {
          if (navigator.geolocation) 
          {
              navigator.geolocation.getCurrentPosition
              (
                  (position) => this.loadMap(position),() => 
                  {
                      alert('Could not get your position');
                  }
              );
          }
      },
      loadMap(position) 
      {
          if (this.map === null) 
          {
              const latitude = position.coords.latitude; 
              const longitude = position.coords.longitude;
              const coords = [latitude, longitude];

              this.map = L.map('map').setView(coords, this.mapZoomLevel);

              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
              {
                  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              }).addTo(this.map);

              this.map.on('click', this.onMapClick);
          }
      },
      onMapClick(event) 
      {
          if(this.actionFlag)
          {
            this.latitude =  event.latlng.lat;
            this.longitude =  event.latlng.lng;

            this.cloneWorkoutDataTemplate.Latitude = this.latitude
            this.cloneWorkoutDataTemplate.Longitude = this.longitude

            if(this.currentMarker) 
            {
              this.map.removeLayer(this.currentMarker);
            }

            let customIcon
            
            // using html and img src
            if(this.actionFlag == 'Cycling')
            {
              customIcon = L.divIcon
              ({
                className: 'custom-marker-icon',
                html: `
                  <div class="custom-marker-container">
                    <img src="${require('@/components/mapty/assets/cycling-2.gif')}" alt="Icon" class="marker-gif">
                    <div class="marker-label">Cycling</div>
                  </div>
                `,
                iconSize: [32, 32],
                iconAnchor: [32, 72], 
              });
            }

            // using html and img src
            if(this.actionFlag == 'Running')
            {
              customIcon = L.divIcon
              ({
                className: 'custom-marker-icon',
                html: `
                  <div class="custom-marker-container">
                    <img src="${require('@/components/mapty/assets/running-2.gif')}" alt="Icon" class="marker-gif">
                    <div class="marker-label">Running</div>
                  </div>
                `,
                iconSize: [32, 32],
                iconAnchor: [32, 72], 
              });
            }
          
            this.currentMarker = L.marker([this.latitude, this.longitude], 
            {
              icon: customIcon,
            }).addTo(this.map);
          }
          else
          {
            alert('Pick an Action first')
          }
      },
      saveData(paramValue, paramModel)
      {
        for(const key in this.cloneWorkoutDataTemplate)
        {
          if(key == paramModel)
          {
            this.cloneWorkoutDataTemplate[key] = paramValue
          }
        }
      },
      pushData()
      {
        if(this.latitude && this.longitude)
        {
          const customIcon = L.divIcon({
            className: 'custom-marker-icon',
            html: `
              <div class="custom-marker-container">
                <img src="${require('@/components/mapty/assets/running-2.gif')}" alt="Icon" class="marker-gif">
                <div class="marker-label">Running</div>
              </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [32, 72],
          });

          const marker = L.marker([this.latitude, this.longitude], 
          {
            icon: customIcon,
          }).addTo(this.map);

              // Store the marker reference along with data
          const markerData = 
          {
            data: structuredClone(this.cloneWorkoutDataTemplate),
            marker: marker,  // Store the marker reference
          };

          this.markerDataList.push(markerData);
          this.cloneWorkoutDataTemplate = structuredClone(workoutDataTemplate)
        }
        else
        {
          alert('Pick a Location First')
        }
      },
      deleteWorkout(paramIndex)
      {
        const markerData = this.markerDataList[paramIndex];
        this.map.removeLayer(markerData.marker);
        this.markerDataList.splice(paramIndex, 1);
      },
      clearMarkers() 
      {
        this.markerDataList.forEach((markerData) => {
          this.map.removeLayer(markerData.marker);
        });
        this.markerDataList.splice(0, this.markerDataList.length)
      },
    }
}
</script>
<style>
/* custom marker container */
.custom-marker-container 
{
  position: relative;
  width: 64px;
  height: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-width: 2px 2px 2px 2px;
  border-radius: 3px;
  border-style: solid;
  border-color: #0e1c2f;

  background-color: #0d2e76c9;
}
.custom-marker-container::before
{
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  width: 0;
  height: 0;
  
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #0d2e76c9;
}
.marker-gif
{
  width: 32px;
  height: 32px;
}
.marker-label
{
  color:#ffffff
}
</style>
<style scoped>
/* ============================================================================================================================== */
/* sidebar */
.sidebar 
{
  position: fixed;
  top: 8%; /* You can adjust this top position */
  bottom: 8%; /* You can adjust this bottom position */
  left: 75%;
  right: 1%;

  padding: 10px;

  min-height: 100px; /* Adjust the minimum height as needed */

  display: flex;
  flex-direction: column;
  flex-basis: 30%; /* Adjust the width as needed */

  overflow-y: auto; /* Enable vertical scrolling when content overflows */
  overflow-x: hidden; /* Enable vertical scrolling when content overflows */

  background-color: #0d2e76c9;

  z-index: 1;
}

.logo 
{
  height: 5.2rem;
  align-self: center;
  margin-bottom: 2rem; /* Adjust the margin as needed */
}

.workouts 
{
  display: flex;
  flex-direction: column;

  min-height: 200px;
  max-height: 400px; /* Set a maximum height, adjust as needed */
  overflow-y: auto; /* Enable vertical scrolling when content overflows */
  padding: 1rem; /* Add padding for better spacing */

  background-color: #0d2e76c9;
}

.workout-items 
{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  margin-top: 1rem; /* Add margin to separate items */
}

/* Add more specific styles for form elements as needed */
.form 
{
  color: #ffffff;
  padding: 1rem;
}

.form__input 
{
  width: 100%;
  padding: 0.3rem 1.1rem;
  border: none;
  border-radius: 3px;
  background-color: var(--color-light--3);
  transition: all 0.2s;
}

.form__input:focus {
  outline: none;
  background-color: #ffffff;
}
/* ============================================================================================================================== */
/* super-container */
.super-container 
{
  height: 92vh;

  display: flex;
  color: #ffffff;
}
/* MAP */
#map 
{
  flex: 1;
  height: 100%;
  opacity: 85%;
}
/* ============================================================================================================================== */
/* Add a media query for a specific screen width */
@media (max-width: 800px) 
{
  .sidebar 
  {
    position: fixed;
    top: 60%; /* You can adjust this top position */
    bottom: 0%; /* You can adjust this bottom position */
    left: 0%;
    right: 0%;

    padding: 10px;

    min-height: 100px; /* Adjust the minimum height as needed */

    display: flex;
    flex-direction: column;
    flex-basis: 30%; /* Adjust the width as needed */

    overflow-y: auto; /* Enable vertical scrolling when content overflows */
    overflow-x: hidden; /* Enable vertical scrolling when content overflows */

    background-color: #0d2e76c9;

    z-index: 1;
  }
}
</style>