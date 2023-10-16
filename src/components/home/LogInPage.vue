<template lang="en">
    <div class="flex super-container">
        <div class="flex log-in-card border">
            <h1>あなたの名前とパスワードを教えてください</h1>
            <form ref="inputForm" @submit.prevent="validateUser">
                <input required v-model.trim="nullModelDesignation" type="text" placeholder="username">
                <input required v-model.trim="nullModelIdentifier" type="password" placeholder="password">
                <button>ログイン</button>
            </form>
            <audio id="log-success" preload="auto">
            <source src="@/components/home/assets/sfx/nier-sfx-8.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <audio id="log-denied" preload="auto">
            <source src="@/components/home/assets/sfx/nier-sfx-5.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
</template>
<script>
export default
{

    data()
    {
        return{
            nullModelDesignation: '',
            nullModelIdentifier: '',
        } 
    },
    methods:
    {
        validateUser()
        {
            const logSuccess = document.getElementById('log-success');
            const logDenied = document.getElementById('log-denied');
            logSuccess.currentTime = 0;
            logDenied.currentTime = 0;
            if(this.nullModelDesignation == 'Maks' && this.nullModelIdentifier == 'Maks')
            {
                logSuccess.play();
                alert('Access Granted')
                this.$router.push('/home')
            }
            else
            {
                logDenied.play();
                alert('Access Denied')
            }
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