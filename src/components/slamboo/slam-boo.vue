<template>
    <div class="std-padding l15p-margin r15p-margin flex justify-center tp1-border">
        <h1>{{ headTitle }}</h1>
    </div>
    <h2>{{ bodyHeader }}</h2>
    <div class="std-padding t10px-margin l15p-margin r15p-margin flex justify-center tp1-border">
        <div class="std-padding std-margin flex row">
            <display-friend v-for="l1 in lclfriendList" :key="l1.id" 
                :l1nickname="l1.nickname"
                :l1ListObject="l1"    
            ></display-friend>
        </div>
    </div>
    <div class="std-padding t10px-margin l15p-margin r15p-margin flex justify-center tp1-border">
        <div class="std-padding std-margin flex column tp1-border">
            <form @submit.prevent="addFriend()">
                <!-- <add-friend v-for="l1 in lclfriendTemplate.intro" :key="l1.id" 
                    :l1ListObject="l1"
                ></add-friend>
                <add-friend v-for="l1 in lclfriendTemplate.more" :key="l1.id" 
                    :l1ListObject="l1"
                ></add-friend> -->
                <add-friend v-for="l1 in lclfriendTemplate.intro" :key="l1.id" 
                    :l1ListObject="l1"
                    :value="lclnewFriendStruct.intro[l1.var]" 
                    @input="updateFriendIntro(l1.var, $event)"
                ></add-friend>
                <button>{{ buttonSubmitFormLabel }}</button>
            </form>
        </div>
    </div>
</template>
<script>
import displayFriend from '@/components/slamboo/assets/pages/display-friend.vue'
import addFriend from '@/components/slamboo/assets/pages/add-friend.vue'
import { friendList } from '@/components/slamboo/assets/recipes/slamboo-recipe.js'
import { friendTemplate } from '@/components/slamboo/assets/recipes/slamboo-recipe.js'
import { newFriendStruct } from '@/components/slamboo/assets/recipes/slamboo-recipe.js'
export default 
{
    provide()
    {
        return{
            provNewFriendStruct: this.lclnewFriendStruct
        }
    },
    data()
    {
        return{
            headTitle: 'FrenFolio',
            bodyHeader: 'Your Friends',
            buttonSubmitFormLabel: 'Add Friend',
            lclfriendList: friendList,
            lclfriendTemplate: friendTemplate,
            lclnewFriendStruct: newFriendStruct,
        }
    },
    components:
    {
        displayFriend,
        addFriend
    },
    computed:
    {
        copyStruct()
        {
            return JSON.parse(JSON.stringify(this.lclnewFriendStruct))
        }
    },
    methods:
    {
        updateFriendIntro(varName, varValue)
        {
            if(varName == 'varNickname')
            {
                this.copyStruct.nickname = varValue
            }
        },
        addFriend()
        {
            this.lclfriendList.push(this.copyStruct);
            alert("Friend Added")
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
.basis25
{
    flex-basis: 25%;
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
.t10px-margin
{
    margin-top: 10px;
}
.l15p-margin
{
    margin-left: 15%;
}
.r15p-margin
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