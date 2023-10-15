<template>
    <div class="std-padding std-margin flex column justify-center tp1-border">
        <label>{{ l1ListObject.label }}</label>
        <input required :type="l1ListObject.type" :value="value" @change="pushToStruct(l1ListObject.var, $event.target.value)">
    </div>
</template>
<script>
export default 
{
    inject:
    [
       'provNewFriendStruct'
    ],
    props:
    {
        l1ListObject:   
        {
            type: Array,
            required: true
        },
        value: 
        {
            type: String,
            required: true,
        },
    },
    computed:
    {
        copyl1ListObject() 
        {
            return this.l1ListObject;
        }
    },
    methods:
    {
        pushToStruct(paramVar, paramValue)
        {
            this.$emit("input", paramValue)

            // if(paramVar == 'varNickname')
            // {
            //     this.provNewFriendStruct.nickname = paramValue
            // }

            // if(paramVar == 'varFname')
            // {
            //     this.provNewFriendStruct.intro[0].value = paramValue
            // }

            // if(paramVar == 'varBday')
            // {
            //     this.provNewFriendStruct.intro[1].value = paramValue
            // }

            // if(paramVar == 'varGender')
            // {
            //     this.provNewFriendStruct.intro[2].value = paramValue
            // }

            // if(paramVar == 'varSign')
            // {
            //     this.provNewFriendStruct.more[0].value = paramValue
            // }

            // if(paramVar == 'varColor')
            // {
            //     this.provNewFriendStruct.more[1].value = paramValue
            // }

            // if(paramVar == 'varFood')
            // {
            //     this.provNewFriendStruct.more[2].value = paramValue
            // }
        }
    }
}
</script>
<style scoped>
/* tags */
/* flex */
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
.wrap
{
    flex-wrap: wrap;
}
.basis33
{
    flex-basis: 33%;
}
.grow-shrink
{
  flex-grow: 1;
  flex-shrink: 1;  
}
/* flex formatter */
.align-center
{
    align-items: center;
}
.justify-center
{
    justify-content: center;
}
/* container formatter */
.std-margin
{
    margin: 10px;
}
.std-padding
{
    padding: 10px;
}
.tp1-padding
{
    padding: 5px;
}
.tp1-margin
{
    margin: 5px;
}
.l15-margin
{
    margin-left: 15%;
}
.r15-margin
{
    margin-right: 15%;
}
/* container design */
.tp1-border
{
    border-radius: 3px;
    border-width: 2px;
    border-style: solid;
    border-color: #ffffff;
}
/* text formatter */
</style>
