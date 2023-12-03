<template>
    <div class="flex super-container">
        <div class="flex log-in-card border">
            <h1>あなたの名前とパスワードを教えてください</h1>
            <form ref="inputForm" @submit.prevent="validateUser">
                <input required v-model.trim="inputUser" type="text" placeholder="username">
                <input required v-model.trim="inputPass" type="password" placeholder="password">
                <button>ログイン</button>
            </form>
        </div>
        <audio id="buttonClickSFX" preload="auto">
            <source src="@/components/home/assets/sfx/nier-sfx-5.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
        </audio>
        <button @click="printFlag()">see current val</button>
    </div>
</template>
<script>
import {isLoggedIn} from '@/router/index.js';
import {userProfiles} from '@/components/home/assets/scripts/userProfiles.js'
export default
{
    data()
    {
        return{
            localUserProfiles: structuredClone(userProfiles),
            localActiveUser: null,
            inputUser: '',
            inputPass: '',
        } 
    },
    provide()
    {
        return {
            provideLocalActiveUser: this.localActiveUser,
        }
    },
    methods:
    {
        validateUser()
        {
            const audio = document.getElementById('buttonClickSFX');
            audio.currentTime = 0;

            audio.play();

            if(this.inputPass=="maks" && this.inputUser=="maks")
            {
                isLoggedIn.isLoggedIn = true;
                this.$router.push("/home")
            }
            else
            {
                alert("incorrect username and password.")
            }
        },
        printFlag()
        {
            console.log(isLoggedIn.isLoggedIn)
        }
    }
}
</script>
<style scoped>
/* tags */
form
{
    display: flex;
    flex-direction: column;
}
input[type="text"], input[type="password"]
{
    padding: 10px;
    margin: 10px;
    text-align: center;
}
/* reusables */
.flex
{
    display: flex;
}
/* specifics */
.super-container
{
    margin: 0;
    padding: 0;

    justify-content: center;
    align-items: center;
    height: 100vh;
}
.log-in-card
{
    margin: 10px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #dbd7d4;
    background-color: #795662a2;
}
.border
{
    border-width: 3px 3px 3px 3px;
    border-radius: 5px;
    border-style: solid;
    border-color: #9e916d;
}
</style>