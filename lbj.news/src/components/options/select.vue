<template>
<div>
    <input type="button" @click="getmore()" value="加载更多" id="btn" v-if="axiosData">
    <div id="warnWord" v-else>~~~~(>_<)~~~~ 请求数据失败 ! 请稍候再试</div>
 </div>   
</template>

<script>
import axios from 'axios'
export default{
    name:'select',
    data(){
        return{
            axiosData:true
        }
    },
    computed:{
        change:function(){
            this.axiosData=false;
            return this.axiosData;
        }
    },
    methods:{
        getmore(){
            $("#btn").css("background","#808080");
            let changeState=this.change;
            axios.post('',{
                params:{
                    ID:"12345"
                }
            }).then(function(response){
                console.log(response);
            }).catch(function(err){
                changeState();
            })
        }
    }
}
</script>

<style lang="less">
@bgcolor:#214d61;
#btn{
    width:40%;
    margin-left:30%;
    margin-right:30%;
    height:50px;
    background:@bgcolor;
    color:#fff;
    margin-top:30px;    
}
#warnWord{
    margin-top:30px;
    color:#e10000;
}
</style>