<template lang="en">
    <nav-bar></nav-bar>
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
            <div class="margin padding flex column">
                <button>Calculate</button>
            </div>
        </form>
        <div class="margin padding flex column">
            <button>Validate BMI</button>
        </div>
    </div>
</template>
<script>
// pages
import NavBar from '@/components/home/NavBar.vue'
import inputComponents from '@/components/bmi-calculator/assets/pages/input-components.vue'
// recipe
import {inputTemplate, nullModel, dataCluster, bmiValidator} from '@/components/bmi-calculator/assets/recipe/bmi-recipe.js'
export default
{
    provide:
    {
        provNullModel: nullModel
    },
    components:
    {
        NavBar,
        inputComponents,
    },
    data()
    {
        return{
            localInputTemplate: inputTemplate,
            localBmiValidator: bmiValidator,
        }
    },
    computed:
    {
        cloneDataCluster()
        {
            return structuredClone(dataCluster)
        },
        validateForm()
        {
            for(const key in this.cloneDataCluster)
            {
                if (this.cloneDataCluster[key] !== "") 
                {
                    return false;
                }
            }
            return true
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
        compareBMI(paramBmi)
        {
            for(const items of this.localBmiValidator) 
            {
                if (items.min <= paramBmi && items.max >= paramBmi) 
                {
                    return items.type;
                }
            }
            
            return 'Unknown Type';
        },
        calculateBMI()
        {
            const flag = this.validateForm

            if(!flag)
            {
                // calculate cluster1
                const cl1height = this.cloneDataCluster[1].value
                const cl1weight = this.cloneDataCluster[2].value
                const cl1bmi = (cl1weight / (cl1height * cl1height)) * 10000
                
                // calculate cluster2 
                const cl2height = this.cloneDataCluster[4].value
                const cl2weight = this.cloneDataCluster[5].value
                const cl2bmi = (cl2weight / (cl2height * cl2height)) * 10000

                console.log(cl1bmi)
                console.log(cl2bmi)

                const bmiType1 = this.compareBMI(cl1bmi)
                const bmiType2 = this.compareBMI(cl2bmi)

                console.log(bmiType1)
                console.log(bmiType2)
            }
            else
            {
                alert('Empty Input Fields detected. Please fill out all the fields')
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
.std-border
{
    border-width: 2px;
    border-radius: 3px;
    border-style: solid;
    border-color: black;
}
</style>