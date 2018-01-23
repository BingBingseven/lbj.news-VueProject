<template>
  <div>
        <ul id="slide_img">
          <li><a><img href="#" src="../../../assets/advtisement/adv.png"></a></li>
          <li><a><img href="#" src="../../../assets/advtisement/adv.png"></a></li>
          <li><a><img href="#" src="../../../assets/advtisement/adv.png"></a></li>
          <li><a><img href="#" src="../../../assets/advtisement/adv.png"></a></li>
          <li><a><img href="#" src="../../../assets/advtisement/adv.png"></a></li>
          <li><a><img href="#" src="../../../assets/advtisement/adv.png"></a></li>
        </ul>
        <ul id="index_list">
          <li class="hover"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  mounted(){
    var clientWidth=document.documentElement.clientWidth;
    const WIDTH = clientWidth,
          WAIT = 2500,
          INTERVAL = 700; 
     let  canMove = true,
          timer = null,
          moved = 0;
     $("#slide_img").css("width",clientWidth*6);
     $("#slide_img>li>a>img").css("width",clientWidth);
    function move() {
    if (canMove) {
        timer = setTimeout(() => {
            moved++;
            $("#slide_img").animate({ left: -WIDTH * moved }, INTERVAL, () => {
                if (moved < 5) {
                    $("#index_list").children(`:eq(${moved})`).addClass("hover").siblings().removeClass("hover");
                } else{
                    moved = 0;
                    $("#slide_img").css("left", 0);
                    $("#index_list").children(":first").addClass("hover").siblings().removeClass("hover");
                }
                move();
            })
        }, WAIT);
    }
  };
  move();
  $(".subject").hover(
    () => {
        clearTimeout(timer);
        canMove = false;
        timer = null;
    },
    () => {
        canMove = true;
        move();
    }
  );
  $("#index_list").on("mouseover", "li", e => {
    var $li = $(e.target);
    moved = $li.index();
    $("#slide_img").stop(true).animate({
        left: -WIDTH * moved
    }, INTERVAL);
    $li.addClass("hover").siblings().removeClass("hover");
  })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#slide_img {
    position: absolute;
    top: 0;
    left: 0;
}
#slide_img>li {
    float: left;
}

#index_list {
    position: absolute;
    top: 85%;
    left: 45%;
}

#index_list>li {
    border: 1px solid #ddd;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
    background: #eee;
    font-size:12px;
}

#index_list>li.hover {
    background: #78A000;
}
</style>
