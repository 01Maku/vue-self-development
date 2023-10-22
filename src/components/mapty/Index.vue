<template lang="en">
    <navigation-bar></navigation-bar>
    <div class="super-container">
        <div class="sidebar">
            <img src="@/components/mapty/logo.jpeg" alt="Logo" class="logo" />
            <div class="workouts">
                <form class="form" @submit.prevent="pushData">
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
                <div v-for="(workouts, index) in markerDataList" :key="workouts" class="workout-items">
                  <label>{{workouts.data.Type}}</label>
                  <label>{{workouts.data.Distance}}</label>
                  <label>{{workouts.data.Duration}}</label>
                  <label>{{workouts.data.Progress}}</label>
                  <button @click="deleteWorkout(index)">Delete</button>
                </div>
                <button @click="clearMarkers">Clear All</button>
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
/* super-container */
.super-container 
{
  font-family: 'Manrope', sans-serif;
  color: var(--color-light--2);
  line-height: 1.6;
  height: 85vh;
  overscroll-behavior-y: none;
  padding: 2.5rem;

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
/* SIDEBAR */
.workout-items
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #ffffff;
}
.sidebar {
  flex-basis: 30%;
  background-color: var(--color-dark--1);
  display: flex;
  flex-direction: column;
  background-color: #0d2e76c9;
}
form
{
    color: #ffffff;
}

:root {
  --color-brand--1: #ffb545;
  --color-brand--2: #00c46a;

  --color-dark--1: #2d3439;
  --color-dark--2: #42484d;
  --color-light--1: #aaa;
  --color-light--2: #ececec;
  --color-light--3: rgb(214, 222, 224);
}

/* GENERAL */
a:link,
a:visited {
  color: var(--color-brand--1);
}

.logo {
  height: 5.2rem;
  align-self: center;
  margin-bottom: 4rem;
}

.workouts {
  list-style: none;
  height: 77vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

.workouts::-webkit-scrollbar {
  width: 0;
}

.workout {
  background-color: var(--color-dark--2);
  border-radius: 5px;
  padding: 1.5rem 2.25rem;
  margin-bottom: 1.75rem;
  cursor: pointer;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.75rem 1.5rem;
}
.workout--running {
  border-left: 5px solid var(--color-brand--2);
}
.workout--cycling {
  border-left: 5px solid var(--color-brand--1);
}

.workout__title {
  grid-column: 1 / -1;
}

.workout__details {
  display: flex;
  align-items: baseline;
}

.workout__icon {
  margin-right: 0.2rem;
  height: 0.28rem;
}

.workout__value {
  margin-right: 0.5rem;
}

.workout__unit {
  color: var(--color-light--1);
  text-transform: uppercase;
}

.form {
  background-color: var(--color-dark--2);
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  /* Match height and activity boxes */
  height: 9.25rem;
  transition: all 0.5s, transform 1ms;
}

.form.hidden {
  transform: translateY(-30rem);
  height: 0;
  padding: 0 2.25rem;
  margin-bottom: 0;
  opacity: 0;
}

.form__row {
  display: flex;
  align-items: center;
}

.form__label {
  flex: 0 0 50%;
}

.form__input {
  width: 100%;
  padding: 0.3rem 1.1rem;
  border: none;
  border-radius: 3px;
  background-color: var(--color-light--3);
  transition: all 0.2s;
}

.form__input:focus {
  outline: none;
  background-color: #fff;
}

.copyright {
  margin-top: auto;
  text-align: center;
  color: var(--color-light--1);
}

.twitter-link:link,
.twitter-link:visited {
  color: var(--color-light--1);
  transition: all 0.2s;
}

.twitter-link:hover,
.twitter-link:active {
  color: var(--color-light--2);
}

/* Popup width is defined in JS using options */
.leaflet-popup .leaflet-popup-content-wrapper {
  background-color: var(--color-dark--1);
  color: var(--color-light--2);
  border-radius: 5px;
  padding-right: 0.6rem;
}

.leaflet-popup .leaflet-popup-content {
  font-size: 1.5rem;
}

.leaflet-popup .leaflet-popup-tip {
  background-color: var(--color-dark--1);
}

.running-popup .leaflet-popup-content-wrapper {
  border-left: 5px solid var(--color-brand--2);
}
.cycling-popup .leaflet-popup-content-wrapper {
  border-left: 5px solid var(--color-brand--1);
}
</style>