<template lang="en">
    <div>
        <div :class="taskDesignObject.classPriority + ' padding margin indication-block'">
        </div>
        <div :class="taskDesignObject.classState + ' padding margin indication-block'">
        </div>
        <div>
            <h3>{{ taskDesignObject.title }}</h3>
        </div>
        <div class="flex row justify-center">
            <button class="margin padding" @click="toggleDetail">Details</button>
            <button class="margin padding" @click="markComplete">Mark as Complete</button>
            <button class="margin padding" @click="removeTask">Remove</button>
        </div>
        <div v-if="displayFlag" class="margin padding flex row" v-for="data in taskDataObject" :key="data">
            <div class="margin padding flex row task-detail-border basis label">
                <label>{{ data.label }}</label>
            </div>
            <div class="margin padding flex row task-detail-border basis value">
                <label>{{ data.value }}</label>
            </div>
        </div>
    </div>
</template>
<script>
import {TaskList} from '@/components/task-manager/assets/recipe/TaskManagerRecipe.js'
export default
{
    name: 'TaskListDisplay',
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
        },
        taskIndex:
        {
            type: Number,
            required: true,
        }
    },
    data()
    {
        return{
            localTaskList: TaskList,
            displayFlag: false,
        }
    },
    computed:
    {
        cloneSortedTaskList()
        {
            return truePriorityObjects.concat(falsePriorityObjects);
        },
    },
    methods:
    {
        /**
         * Parent: <button> | Trigger type: onClick - toggles the flag for showing task details.
         */
        toggleDetail()
        {
            this.displayFlag = !this.displayFlag
        },
        /**
         * Parent: <button> | Trigger type: onClick - updates the state of the task.
         */
        markComplete()
        {
            this.cloneSortedTaskList[this.taskIndex].classState = 'complete'
        },
        /**
         * Parent: <button> | Trigger type: onClick - removes selected task item.
         */
        removeTask()
        {
            this.localTaskList.splice(this.taskIndex, 1)
        }
    }
}
</script>
<style scoped>
/* tags */
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
/* common */
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
.justify-center
{
    justify-content: center;
}
.task-detail-border
{
    background-color: #45413848;

    border-width: 0px 2px 2px 0px;
    border-radius: 3px;
    border-style: solid;
    border-color: #454138;
}
.indication-block
{
    padding: 5px;
    margin: 0px;

    border-width: 0px 2px 2px 2px;
    border-radius: 3px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.5);
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
/* task state indications */
.complete
{
    background-color: #4aff42;
}
.pending
{
    background-color: #fbff8f;
}
.priority
{
    background-color: #ff9694;
}
.non-priority
{
    background-color: #a4a3ff;
}
</style>