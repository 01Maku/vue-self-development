<template lang="en">
    <div class="parent-margin padding flex column std-border">
        <div class="margin padding flex column std-border" v-for="template in localStringPutTemplate" :key="template">
            <h3>{{ template.label }} &nbsp;</h3>
            <input required v-model="template.model" :type="template.type">
        </div>
        <div class="margin padding flex column std-border">
            <h3>Is this task a Priority?</h3>
            <div v-for="template in localRadioPutTemplate" :key="template">
                <label>{{ template.label }} &nbsp;</label>
                <input required v-model="template.model" :name="template.name" :type="template.type">
            </div>
        </div>
        <div class="margin padding flex column std-border">
            <h3>Description &nbsp;</h3>
            <textarea></textarea>
        </div>
        <div>
            <h3>My Task Lists</h3>
        </div>
        <div class="margin padding flex column std-border" v-for="taskObject in cloneTaskList" :key="taskObject">
            <div>
                <h3>{{ taskObject.title }}</h3>
            </div>
            <div v-if="displayFlag" class="margin padding flex row std-border" v-for="task in taskObject.taskData" :key="task">
                <label>{{ task.label }} &nbsp;</label>
                <label>{{ task.value }}</label>
            </div>
            <button @click="toggleDetail">Details</button>
        </div>
    </div>
</template>
<script>
import {TaskList, StringPutTemplate, RadioPutTemplate, NullModel} from '@/components/task-manager/assets/recipe/TaskManagerRecipe.js'
export default 
{
    data()
    {
        return{
            localTaskList: TaskList,
            localStringPutTemplate: StringPutTemplate,
            localRadioPutTemplate: RadioPutTemplate,
            localNullModel: NullModel,
            displayFlag: false,
        }
    },
    computed:
    {
        cloneTaskList()
        {
            return structuredClone(this.localTaskList)
        },
        cloneNullModel()
        {
            return structuredClone(this.localNullModel)
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
<style scope>
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
    border-color: black;
}
</style>
