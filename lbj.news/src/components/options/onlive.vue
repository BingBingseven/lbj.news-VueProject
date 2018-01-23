<template>
    <div>
        <p class="gameDone">已结束</p>
        <div v-for='g in gameDone' class="games">
            <h1 class="pkName">{{g.name}}</h1>
            <div class="pkBox">
                <div>
                    <p><img :src="setSrc(g.logoA)"></p>
                    <h1 class="playerName">{{g.playerA}}</h1>
                </div>
                <div class="pkState">
                    <p>{{g.schedule}}</p>
                    <h1>{{g.score}}</h1>
                    <p><span class="red">比赛集锦</span><span class="yellow">回放</span></p>
                </div>
                <div>
                    <p><img :src="setSrc(g.logoB)"></p>
                    <h1 class="playerName">{{g.playerB}}</h1>
                </div>
            </div>         
        </div>
        <p class="gameNow">进行中</p>
        <div v-for='n in gameNow' class="games">
            <h1 class="pkName">{{n.name}}</h1>
            <div class="pkBox">
                <div>
                    <p><img :src="setSrc(n.logoA)"></p>
                    <h1 class="playerName">{{n.playerA}}</h1>
                </div>
                <div class="pkState">
                    <p>{{n.schedule}}</p>
                    <h1>{{n.score}}</h1>
                    <p><span class="green">直播中</span></p>
                </div>
                <div>
                    <p><img :src="setSrc(n.logoB)"></p>
                    <h1 class="playerName">{{n.playerB}}</h1>
                </div>
            </div>         
        </div>
        <p class="gameGoon">未开始</p>
        <div v-for='l in gameGoon' class="games">
            <h1 class="pkName">{{l.name}}</h1>
            <div class="pkBox">
                <div>
                    <p><img :src="setSrc(l.logoA)"></p>
                    <h1 class="playerName">{{l.playerA}}</h1>
                </div>
                <div class="pkState">
                    <p>{{l.schedule}}</p>
                    <p><span class="blue">提醒</span></p>
                </div>
                <div>
                    <p><img :src="setSrc(l.logoB)"></p>
                    <h1 class="playerName">{{l.playerB}}</h1>
                </div>
            </div>         
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
    name:'game',
    computed: {
      ...mapState({
      gameDone: state => state.LiveStore.liveDone,
      gameNow: state => state.LiveStore.liveNow,
      gameGoon: state => state.LiveStore.liveGoon
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
@red:#e4393c;
@green:#009100;
@blue:#238ff1;
.games{
    text-align:center;

    .pkName{
    font-size:16px;
    font-weight:bold;
    background-color:#eeeeee;
    height:25px;
    line-height:25px;
    width:90%;
    margin:2px auto;
    text-align:center;
    }

    .pkBox{
    display:flex;
    justify-content:space-around;
    margin:10px auto;
    }
}

img{
    width:55px;
}
.playerName{
    font-size:14px;
    font-weight:bold;
    margin-top:10px;
}
.pkState{
    font-size:16px;
}
.pkState>h1{
    font-size:22px;
    font-weight:bold;
    margin:5px;
}
.red,.yellow,.blue,.green{
    color:#fff;
    display:inline-block;
    height:20px;
    line-height:20px;
    padding:5px;
}
.red{
    background:@red;
    margin-right:10px;
}
.yellow{
    background:#c9813f;
}
.green{
    background:@green;
}
.blue{
    background:@blue;
    margin-top:15px;
}
.gameDone,.gameGoon,.gameNow{
    width:90%;
    font-size:18px;
    font-weight:bold;
    margin-bottom:5px;
    margin:15px 5% 5px;
    border-bottom:1px solid #bbbbbb;
}
.gameDone{
    color:@red;
}
.gameNow{
    color:@green;
}
.gameGoon{
    color:@blue;
}
</style>