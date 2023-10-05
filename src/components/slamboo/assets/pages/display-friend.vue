<template>
    <div class="std-padding std-margin flex column justify-center tp1-border">
        <div class="tp1-padding tp1-margin flex justify-center">
            <h3>{{ l1nickname }}</h3>
        </div>  
        <div v-for="l1 in lclListObject.intro" :key="l1.id" class="tp1-padding tp1-margin flex column tp1-border">
            <label>{{ l1.label }}</label>
            <p>{{ l1.value }}</p>
        </div>
        <div v-for="l1 in lclListObject.more" :key="l1.id" class="tp1-padding tp1-margin flex column tp1-border">
            <label>{{ l1.label }}</label>
            <p>{{ l1.value }}</p>
        </div>
    </div>
</template>
<script>
export default 
{
    props:
    {
        l1nickname:
        {
            type: String,
            required: true
        },
        l1ListObject:
        {
            type: Object,
            required: true
        }
    },
    data()
    {
        return{
            lclListObject: this.l1ListObject,
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
    border-color: black;
}
/* text formatter */
</style>
