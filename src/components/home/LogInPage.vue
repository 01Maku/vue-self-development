<template lang="en">
    <div class="padding margin flex column">
        <div class="padding margin flex column">
            <h1>YorhA OrbitaL BunkeR</h1>
        </div>
        <form ref="inputForm" @submit.prevent="validateUnit">
            <div class="padding margin flex column">
                <input required v-model="nullModelDesignation" type="text" placeholder="YorhA Designation">
                <input required v-model="nullModelIdentifier" type="password" placeholder="YorhA Identifier">
            </div>
            <button>SenD RequesT</button>
         </form>
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
        validateUnit()
        {
            if(this.nullModelDesignation == 'scout-unit-9' && this.nullModelIdentifier == 'scout-unit-9')
            {
                this.$refs.inputForm.reset()
                this.$router.push('/home')
                alert('AccesS GranteD foR uniT 9 - ModeL - ScouT')
            }
            else
            {
                alert('AccesS DenieD')
            }
        }
    }
}
</script>
<style scoped>
.parent-margin
{
    margin-left: 25%;
    margin-right: 25%;
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
.std-border
{
    border-width: 2px;
    border-radius: 3px;
    border-style: solid;
    border-color: #454138;
}

input[type="text"], input[type="password"]
{
    margin: 10px;
    padding: 10px;

    border-width: 2px;
    border-radius: 3px;
    border-style: outset;
    border-color: #454138;
}

button
{
    font-family: helvetica, sans-serif;
    
    margin: 10px;
    padding: 10px;

    color: #454138;
    background-color: #d1cdb7;

    border-width: 2px;
    border-radius: 3px;
    border-style: outset;
    border-color: #454138;

    transition: all 0.3s ease;
}

button:hover
{
    cursor: pointer;
    color: #d1cdb7;
    background-color: #454138;
}
</style>