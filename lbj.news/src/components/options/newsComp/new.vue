<template>
    <div>
        <p class="newsType redT">职业资讯</p>
        <div v-for="p in profession" class="newBox">
            <div class="newsImg"><img :src="setSrc(p.img)"></div>
            <div class="newsContent">
                <p class="newsTitle">{{p.title}}</p>
                <p class="newsTime">{{p.time}}</p>
            </div>
        </div>
        <p class="newsType greenT">业余资讯</p>
        <div v-for="a in amateur" class="newBox">
            <div class="newsImg"><img :src="setSrc(a.img)"></div>
            <div class="newsContent">
                <p class="newsTitle">{{a.title}}</p>
                <p class="newsTime">{{a.time}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:"new",
    computed:{
       ...mapState({
           amateur:state => state.NewsStore.amateur,
           profession:state => state.NewsStore.profession
       })
    },
    methods:{
        setSrc:function(src){
            return src;
        }
    }
}
</script>

<style lang="less">
.newsType{
    font-size:20px;
    font-weight:bold;
    margin-bottom:20px;
}
.redT{
    color:red;
}
.greenT{
    color:green;
}
.newBox{
    display:flex;
    .newsImg{
        margin-right:10px;
        margin-bottom:10px;
        img{
            width:120px;
        }
    }
    .newsContent{
        font-size:16px;
        .newsTitle{
            font-weight:bold;
            margin-bottom:20px;
        }
    }
}
</style>