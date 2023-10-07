<template lang="en">
    <div class="parent-margin padding flex column">
        <form ref="taskForm" @submit.prevent="addTask">
            <div class="margin padding flex column std-border">
                <div class="margin padding flex column" v-for="template in localStringPutTemplate" :key="template">
                    <h3>{{ template.label }}</h3>
                    <input required v-model="cloneNullModel[template.model]" @change="captureData(cloneNullModel[template.model])" :type="template.type">
                </div>
                <h3>Is this task a Priority?</h3>
                <div v-for="item in localRadioPutTemplate" :key="item">
                    <label>{{ item.label }}</label>
                    <input required v-model="cloneNullModel[item.model]" @click="captureData(item.value)" :name="item.name" :type="item.type">
                </div>
                <div class="margin padding flex column">
                    <h3>Description</h3>
                    <textarea required v-model="cloneNullModel[textareaNullModel]" @change="captureData(cloneNullModel[textareaNullModel])"></textarea>
                </div>
                <div class="margin padding flex column">
                    <button class="padding">Add Task</button>
                </div>
            </div>
        </form>
        <div class="margin padding std-border">
            <h3>My Task Lists</h3>
            <task-list-display class="margin padding flex column std-border" v-for="taskObject in cloneTaskList" :key="taskObject"
                :task-data-object="taskObject.taskData"
                :task-design-object="{title: taskObject.title, class: taskObject.class}">
            </task-list-display>
        </div>
    </div>
</template>
<script>
// pages
import TaskListDisplay from '@/components/task-manager/assets/pages/TaskListDisplay.vue'
// object
import {TaskList, TaskTemplate, StringPutTemplate, RadioPutTemplate, NullModel} from '@/components/task-manager/assets/recipe/TaskManagerRecipe.js'
export default 
{
    name: 'Index',
    components:
    {
        TaskListDisplay,
    },
    data()
    {
        return{
            localTaskList: TaskList,
            localTaskTemplate: TaskTemplate,
            localStringPutTemplate: StringPutTemplate,
            localRadioPutTemplate: RadioPutTemplate,
            localNullModel: NullModel,
            textareaNullModel: 'inputDescription',
        }
    },
    computed:
    {
        cloneTaskList()
        {
            return structuredClone(this.localTaskList)
        },
        cloneTaskTemplate()
        {
            return structuredClone(this.localTaskTemplate)
        },
        cloneNullModel()
        {
            return structuredClone(this.localNullModel)
        }
    },
    methods:
    {
        /**
         * Parent: <input> | Trigger type: onChange - streams the input value into the cloned template.
         * @param {String} paramValue - holds the input value from the form.
         */
        captureData(paramValue)
        { 
            // key iteration of the first level object in the clone array.
            for(let key in this.cloneTaskTemplate)
            {
                if(key == 'title')
                {
                    this.cloneTaskTemplate.title = paramValue
                }
            }

            // index iteration of the taskData array within the first level object.
            this.cloneTaskTemplate.taskData.forEach((object, index) => {
                console.log(object + ' & ' + index) 
            });
        },
        /**
         * Parent: <button> | Trigger Type: onClick - pushes the cloned template into cloned task list.
         */
        addTask()
        {

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
