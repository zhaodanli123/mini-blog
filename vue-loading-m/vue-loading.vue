<template>
<div class="vue-loading" style="height:300px;">
  <div class="E_loading">
    <div class="loading_cont W_tc">
      <p class="icon_bed E_MB10"><i class="W_loading"></i></p>                                
      <p class="S_txt2">{{loadMsg||'加载中，请稍候 ...'}}</p>
    </div>
  </div> 
</div>
</template>

<script>
export default {
  data() {
    return {
      loadMsg: ""
    };
  },
};
</script>
<style lang="less" scoped="scoped">
.vue-loading {
  .E_loading {
      width: 100%;
      height: 100%;
      position: relative;
      .loading_cont {
          position: absolute;
          height: 66px;
          width: 100%;
          left: 0;
          top: 50%;
          margin-top: -33px
      }
  }
  
  .W_tc {
      text-align: center
  }
  .E_MB10 {
      margin-bottom: 10px
  }
  .S_txt2 {
      color: grey;
      text-decoration: none
  }
  .W_loading {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: url(../../assets/img/mobile/icon_load.png) no-repeat;
      background-size: 100%;
      background-position: bottom;
      -webkit-animation: loading .8s linear infinite
  }
}
</style>