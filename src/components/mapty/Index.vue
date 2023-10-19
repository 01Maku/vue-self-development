<template lang="en">
    <navigation-bar></navigation-bar>
    <div class="super-container">
        <div class="sidebar">
            <img src="@/components/mapty/logo.jpeg" alt="Logo" class="logo" />
            <ul class="workouts">
                <form class="form">
                    <div class="form__row">
                        <label class="form__label">Type</label>
                        <select class="form__input form__input--type">
                            <option value="running">Running</option>
                            <option value="cycling">Cycling</option>
                        </select>
                    </div>
                    <div class="form__row">
                        <label class="form__label">Distance</label>
                        <input class="form__input form__input--distance" placeholder="km" />
                    </div>
                    <div class="form__row">
                        <label class="form__label">Duration</label>
                        <input class="form__input form__input--duration" placeholder="min"/>
                    </div>
                    <div class="form__row">
                        <label class="form__label">Cadence</label>
                        <input class="form__input form__input--cadence" placeholder="step/min"/>
                    </div>
                    <div class="form__row">
                        <label class="form__label">Elev Gain</label>
                        <input class="form__input form__input--elevation" placeholder="meters"/>
                    </div>
                    <button class="form__btn">OK</button>
                </form>
            </ul>
            <p class="copyright">&copy;Copyright by
                <a class="twitter-link" target="_blank" href="https://twitter.com/jonasschmedtman">Jonas Schmedtmann</a>
                . Use for learning or your portfolio. Don't use to teach. Don't claim as your own.
            </p>
        </div>
        <div id="map">
        </div>
    </div>
</template>
<script>
import NavigationBar from '@/components/home/NavBar.vue'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
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
            map: null,
            mapZoomLevel: 13, 
            workouts: [],
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

                this.workouts.forEach((work) => 
                {
                    this._renderWorkout(work);
                    this._renderWorkoutMarker(work);
                });
            }
        },
        onMapClick(event) 
        {
            const latlng = event.latlng;
            const latitude = latlng.lat;
            const longitude = latlng.lng;

            console.log('Latitude: ' + latitude);
            console.log('Longitude: ' + longitude);

            this.addMarker(latlng);
        },
        addMarker(latlng) 
        {
            L.marker(latlng).addTo(this.map);
        },
        createCustomMarker() 
        {
            // Create a custom marker icon
            const customIcon = L.divIcon
            ({
                className: 'custom-marker-icon',
                html: '<div class="custom-marker-content">Your HTML content here</div>',
            });

            // Add a marker with the custom HTML icon
            const marker = L.marker([51.505, -0.09],
            {
                icon: customIcon,
            }).addTo(this.map);
        },
    }
}
</script>
<style scoped>
/* super-container */
.super-container 
{
  font-family: 'Manrope', sans-serif;
  color: var(--color-light--2);
  line-height: 1.6;
  height: 100vh;
  overscroll-behavior-y: none;
  padding: 2.5rem;

  display: flex;
  color: #ffffff;
}
/* MAP */
#map 
{
  flex: 1;
  height: 100vh;
}
/* SIDEBAR */
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

.form__btn {
  display: none;
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