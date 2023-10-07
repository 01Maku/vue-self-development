<template lang="en">
    <div :class="taskDesignObject.class">
        <div>
            <h3>{{ taskDesignObject.title }}</h3>
        </div>
        <button class="padding" @click="toggleDetail">Details</button>
        <div v-if="displayFlag" class="margin padding flex row" v-for="data in taskDataObject" :key="data">
            <div class="margin padding flex row std-border basis label">
                <label>{{ data.label }}</label>
            </div>
            <div class="margin padding flex row std-border basis value">
                <label>{{ data.value }}</label>
            </div>
        </div>
    </div>
</template>
<script>
export default
{
    props:
    {
        taskDataObject:
        {
            type: Object,
            required: true
        },
        taskDesignObject:
        {
            type: Object,
            required: true
        }
    },
    data()
    {
        return{
            displayFlag: false,
        }
    },
    methods:
    {
        toggleDetail()
        {
            this.displayFlag = !this.displayFlag
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
.basis
{
    flex-basis: 100%;
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
    border-color: black;
}
/* specific container design */
.label 
{
  flex: 0 0 25%;
}
.value
 {
  flex: 1; 
}
.priority
{
    background-color: #f8e1de;
}
.non-priority
{
    background-color: #93ccea;
}
</style>