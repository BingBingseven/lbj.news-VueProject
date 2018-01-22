<template>
    <footer>
        <span  v-for='m in menus' class="footer" @click="changeStyle()">
            <router-link :to='setPath(m.path)' class="nav">{{m.text}}</router-link>
        </span>
    </footer>
</template>

<script>
    export default{
        name:'foot',
        data(){
            return {
            menus:[{
                text:'资讯',
                path:'/news'
            },{
                text:'直播',
                path:'/onlive'
            },{
                text:'精选',
                path:'/select'
            }]
        }
    },
    methods:{
        setPath(path){
            return path;
        },
        changeStyle(){
            
        }
    }
        }
</script>

<style>
footer{
    height:50px;
    width:100%;
    background:#214d61; 
    position:fixed;
    bottom:0;
    color:#fff;
    display:flex;
    justify-content:space-around;
    z-index:100;
}
footer:before{
    content:'';
    display:table;
}
.nav{
    display:inline-block;
    color:#fff;
    font-size:18px;
    width:100%;
    height:50px;
    line-height:50px;
}
.footer{
    width:33%;
    text-align:center;
}
</style>