<template lang="en">
    <label>{{ objectTemplate.label }}</label>
    <input required v-model="cloneNullModel[cloneObjectTemplate.model]" :type="objectTemplate.type" :step="objectTemplate.step" @change="emitter(cloneObjectTemplate.model, $event.target.value, dataFlag)">
</template>
<script>
export default
{
    emits:
    [
        'emitData',
    ],
    inject:
    [
        'provNullModel',
    ],  
    props:
    {
        objectTemplate:
        {
            type: Object,
            required: true,
        },
        dataFlag:
        {
            type: String,
            required: true,
        }
    },

    computed:
    {
        cloneObjectTemplate()
        {
            return structuredClone(this.objectTemplate)
        },
        cloneNullModel()
        {
            return structuredClone(this.provNullModel)
        }
    },
    methods:
    {
        /**
         * Handles the emitting of data to parent, emits input data.
         */
        emitter(paramModel, paramData, paramFlag)
        {
            const objectData =
            {
                flag: paramFlag,
                model: paramModel,
                data: paramData,
            }
            this.$emit('emitData', objectData )
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
