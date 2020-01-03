 <template>
    <div :class="['vue-loading', 'W_loading',{notext:!text}]">
      <div class="icon"></div>
      <p v-if="text" class="page fff font20">{{text}}</p>
    </div>
</template>
<script>
export default {
    data() {
    return {
      text: '',
    };
  },
};
</script>
<style lang="less" scoped>
@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes loading {
  0% {
    -moz-transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-o-keyframes loading {
  0% {
    -o-transform: rotate(0);
  }
  100% {
    -o-transform: rotate(360deg);
  }
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
  .W_loading {
    text-align:center;
    animation:none;
    width: 146px;
    height: 88px;
    margin: auto;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    &.notext {
      height: 35px;
      margin: 10px auto;
    }
    .icon {
      width: 35px;
      height: 35px;
      margin: 0 auto;
      background-image: url(../../../assets/img/loading_big.png);
      background-image: url(../../../assets/img/loading_big.gif) \9;
      background-repeat: no-repeat;
      animation: loading 0.8s linear infinite;
    }
    .page {
      margin-top: 12px;
      font-size: 12px;
    }
  }
  .W_statement {
    bottom: 30px;
    left: 0;
    width: 100%;
  }
</style>
