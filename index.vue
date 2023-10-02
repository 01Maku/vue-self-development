<template lang="en">
    <div class="parent-margin padding flex column std-border">
        <div class="margin padding std-border">
            <h1>BMI Calculator</h1>
        </div>
        <form @submit.prevent="calculateBMI">
            <div class="margin padding flex column std-border">
                <h3>Data 1</h3>
                <input-components v-for="object in localInputTemplate" :key="object" :object-template="object" :data-flag="'dataFlag1'" @emit-data="captureData">
                </input-components>
            </div>
            <div class="margin padding flex column std-border">
                <h3>Data 2</h3>
                <input-components v-for="inputObject in localInputTemplate" :key="inputObject" :object-template="inputObject" :data-flag="'dataFlag2'" @emit-data="captureData">
                </input-components>
            </div>
            <div class="margin padding flex column" v-for="buttonObject in localButtonTemplate" :key="buttonObject">
                <button>{{ buttonObject.label }}</button>
            </div>
        </form>
    </div>
</template>
<script>
// pages
import inputComponents from '@/components/bmi-calculator/assets/pages/input-components.vue'
// recipe
import {inputTemplate, buttonTemplate, nullModel, dataCluster} from '@/components/bmi-calculator/assets/recipe/bmi-recipe.js'
export default
{
    provide:
    {
        provNullModel: nullModel
    },
    components:
    {
        inputComponents,
    },
    data()
    {
        return{
            localInputTemplate: inputTemplate,
            localButtonTemplate: buttonTemplate,
        }
    },
    computed:
    {
        cloneDataCluster()
        {
            return structuredClone(dataCluster)
        }
    },
    methods:
    {
        /**
         * Handles the capturing of data object from child input-components.
         * @param {Object} paramObjectData contains the model name and data value.
         */
        captureData(paramObjectData)
        {
            this.cloneDataCluster.forEach((item, index) => 
            {   
                if(this.cloneDataCluster[index].cluster == paramObjectData.flag && this.cloneDataCluster[index].model == paramObjectData.model)
                {
                    this.cloneDataCluster[index].value = paramObjectData.data
                }
            });
        },
        calculateBMI()
        {
            
        },
        compareBMI()
        {

        }
    }
}
</script>
<style scoped>
.parent-margin
{
    margin-left: 20%;
    margin-right: 15%;
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
.std-border
{
    border-width: 2px;
    border-radius: 3px;
    border-style: solid;
    border-color: black;
}
</style>