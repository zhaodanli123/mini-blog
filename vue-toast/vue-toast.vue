<template>
  <div class="mask vue-toast">
    <div>
      <div class="toast" v-if="['success', 'fail', 'warning','loading'].indexOf(type) > -1">
        <div class="icon" v-if="['success', 'fail', 'warning'].indexOf(type) > -1">
          <div v-if="type=='success'" class="success-icon"></div>
          <div v-if="type=='fail'" class="fail-icon"></div>
          <div v-if="type=='warning'" class="warning-icon"></div>
        </div>
        <div class="loading-icon" v-else>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="msg" v-html="msg"></p>
      </div>
      <div v-else class="toast-msg" v-html="msg"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: " ",
      type: "success"
    };
  }
};
</script>
<style scoped="scoped " lang="less">
.mask {
  width: 100%;
  height: 100%;
  /*background: rgba(0, 0, 0, 0.4);*/
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  .toast-msg {
    font-size: 1.5rem;
    text-align: center;
    position: relative;
    transform: translateX(-50%);
    color: #fff;
    left: 50%;
    padding: 1.125rem 1.6875rem;
    overflow: hidden;
    border-radius: 4px;
    white-space: nowrap;
    display: block;
    background: rgba(0, 0, 0, 0.7);
  }
  .toast {
    font-size: 0rem;
    padding: 1rem 0.5rem;
    box-sizing:border-box;
    width: 7.5rem;
    min-height: 7.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    background: rgba(0,0,0,.6);
    border-radius: 0.3rem;
    text-align: center;
    .icon {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 1px solid #f2f2f2;
      position: relative;
      justify-content: center;
      align-items: center;
      display: flex;
      
      position: relative;
      .success-icon {
        border-right: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
        transform: rotate(45deg);
        width: 0.7rem;
        height: 1.5rem;
        margin-top: -0.5rem;
      }
      .fail-icon {
        &:before {
          content: " ";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          border-top: 1px solid #f2f2f2;
          width: 3.125rem;
          height: 0px;
        }
        &:after {
          content: " ";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          border-top: 1px solid #f2f2f2;
          width: 3.125rem;
          height: 0px;
        }
      }
      .warning-icon {
        &:before {
          content: " ";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -500%) rotate(90deg);
          border-top: 1px solid #f2f2f2;
          width: 0.85rem;
          height: 0px;
        }
        &:after {
          content: " ";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 250%) rotate(-45deg);
          background: #f2f2f2;
          width: 3px;
          border-radius: 50%;
          height: 3px;
        }
      }
    }
    .msg {
      margin-top: 1.125rem;
      font-size: 0.85rem;
      word-break: break-all;
      line-height:1.2rem;
      -webkit-font-smoothing: antialiased;
    }
  }
}

.loading-icon {
  font-size: 0px;
  box-sizing: border-box;
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  span {
    position: absolute;
    height: 1px;
    left: 50%;
    top: 50%;
    width: 1.125rem;
    animation: loading-fade-light 1.1s infinite linear;
    background: rgba(255, 255, 255, 0.3);
    transform-origin: -1.125rem 50%;
    margin-left: 1.125rem;
    &:nth-child(1) {
      animation-delay: 0s;
      transform: rotate(0deg);
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
      transform: rotate(30deg);
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
      transform: rotate(60deg);
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
      transform: rotate(90deg);
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
      transform: rotate(120deg);
    }
    &:nth-child(6) {
      animation-delay: 0.5s;
      transform: rotate(150deg);
    }
    &:nth-child(7) {
      animation-delay: 0.6s;
      transform: rotate(180deg);
    }
    &:nth-child(8) {
      animation-delay: 0.7s;
      transform: rotate(210deg);
    }
    &:nth-child(9) {
      animation-delay: 0.8s;
      transform: rotate(240deg);
    }
    &:nth-child(10) {
      animation-delay: 0.9s;
      transform: rotate(270deg);
    }
    &:nth-child(11) {
      animation-delay: 1s;
      transform: rotate(300deg);
    }
    &:nth-child(12) {
      animation-delay: 1.1s;
      transform: rotate(330deg);
    }
  }
}

@-webkit-keyframes loading-fade-light {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
  }
}

@keyframes loading-fade-light {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>