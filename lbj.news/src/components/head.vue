<template>
    <header>
        <h1 class="title">SPORTS</h1>
    </header>
</template>

<script>
    export default{
        name:'head'
    }
</script>

<style>
header{
    width:100%;
    background:#214d61;  
    height:80px;
    position:fixed;
    top:0;
    text-align:center;
    z-index:100;
}
header:before{
    content:'';
    display:table;
}
 .title{
        color:#ffffff;
        font-size:30px;
        margin-top:25px;
    }
</style>