<template>
<div>
    <input placeholder="add your age">
    <input type="submit" @click="print()" value="add" id="btn">
 </div>   
</template>

<script>
import axios from 'axios'
export default{
    name:'select',
    data(){
        return{
        }
    },
    methods:{
        print(){
            axios.post('',{
                params:{
                    ID:"12345"
                }
            }).then(function(response){
                console.log(response);
            }).catch(function(err){
                console.log(err);
            })
        }
    }
}
</script>

<style lang="less">

</style>