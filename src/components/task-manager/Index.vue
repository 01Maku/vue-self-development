<template lang="en">
    <div v-if="newTaskAlertFlag" class="padding parent-margin std-border green-alert">
        <h3>New Task Added! Check your List.</h3>
    </div>
    <div class="parent-margin padding flex column">
        <form ref="taskForm" @submit.prevent="addTask">
            <div class="margin padding flex column std-border">
                <div class="margin padding flex column" v-for="template in localStringPutTemplate" :key="template">
                    <h3>{{ template.label }}</h3>
                    <input required v-model.trim="cloneNullModel[template.model]" @change="captureData(cloneNullModel[template.model], template.model)" :type="template.type">
                </div>
                <h3>Is this task a Priority?</h3>
                <div v-for="item in localRadioPutTemplate" :key="item">
                    <label>{{ item.label }}</label>
                    <input required v-model="cloneNullModel[item.model]" @click="captureData(item.value, item.model)" :name="item.name" :type="item.type">
                </div>
                <div class="margin padding flex column">
                    <h3>Description</h3>
                    <textarea required v-model="cloneNullModel[textareaNullModel]" @change="captureData(cloneNullModel[textareaNullModel], textareaNullModel)"></textarea>
                </div>
                <div class="margin padding flex column">
                    <button class="margin padding">Add Task</button>
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
            newTaskAlertFlag: false,
            textareaNullModel: 'inputDescription',
        }
    },
    computed:
    {
        cloneTaskList()
        {
            const truePriorityObjects = [];
            const falsePriorityObjects = [];

            for (let i = 0; i < this.localTaskList.length; i++) 
            {
                if (this.localTaskList[i].taskData[1].value) 
                {
                    truePriorityObjects.push(this.localTaskList[i]);
                } else 
                {
                    falsePriorityObjects.push(this.localTaskList[i]);
                }
            }

            return truePriorityObjects.concat(falsePriorityObjects);
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
         * @param {String} paramModel - holds the model reference of the form.
         */
        captureData(paramValue, paramModel)
        { 
            // key iteration of the first level object in the clone array.
            for(let key in this.cloneTaskTemplate)
            {
                if(this.cloneTaskTemplate[key] == paramModel)
                {
                    this.cloneTaskTemplate.title = paramValue
                }
            }

            // index iteration of the taskData array within the first level object.
            this.cloneTaskTemplate.taskData.forEach((object, index) => 
            {
                // console.log(object)
                // key iteration of the deep level object in the clone taskData array.
                for(let key in object)
                {
                    if(object[key] == paramModel)
                    {
                        this.cloneTaskTemplate.taskData[index].value = paramValue
                    } 
                }
            });

            console.log(this.cloneTaskTemplate)
        },
        /**
         * Parent: <button> | Trigger Type: onClick - pushes the cloned template into cloned task list.
         */
        addTask()
        {
            this.localTaskList.push(this.cloneTaskTemplate)
            this.newTaskAlertFlag = true
            this.$refs.taskForm.reset()
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
/* add alert */
.green-alert
{
    background-color: #b5f2b4;
}
</style>
