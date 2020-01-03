<template>
    <div class="mask vue-dialog">
        <div class="m-dialog">
            <header>
                <h2 v-if="title">{{title}}</h2>
                <h3>{{text}}</h3>
            </header>
            <footer :class="['m-btm-btns','m-box',{'m-box-dir':direction=='column'}]">
                <div class="m-box-col" @click="handleCancel"><a class="m-btn m-btn-white"
                        :style="{color:cancelColor}">{{cancelText}}</a></div>
                <div class="m-box-col" @click="handleThird" v-if="thirdText"><a class="m-btn m-btn-white"
                        :style="{color:thirdColor}">{{thirdText}}</a></div>
                <div class="m-box-col" @click="handleOk"><a class="m-btn m-btn-white"
                        :style="{color:okColor}">{{okText}}</a></div>
            </footer>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            handleCancel() {
                this.removeDialog();
                this.cancel && this.cancel();
            },
            handleOk() {
                this.removeDialog();
                this.ok && this.ok()
            },
            handleThird() {
                this.removeDialog();
                this.third && this.third();
            }
        }
    }
</script>
<style lang="less">
    .vue-dialog {
        &.mask {
            position: fixed;
            z-index: 990;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.3);
            transition: all 0.2s linear;
        }
    }

    .m-dialog {
        position: fixed;
        z-index: 999;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        box-sizing: border-box;
        width: 17.5rem;
        background: rgba(255, 255, 255, 0.95);
        -webkit-backdrop-filter: blur(0.625rem);
        border-radius: 0.75rem;
        text-align: center;
        overflow: hidden;
    }

    .m-dialog header {
        padding: 20px 12px;
    }

    .m-dialog h2 {
        font-size: 1.0625rem;
    }

    .m-dialog h2+h3 {
        margin-top: 16px;
    }

    .m-dialog h3 {
        font-size: 0.875rem;
        line-height: 1.5;
        // color: #333;
        // font-weight: 300;
        color: #797979;
        font-weight: 400;
    }

    .m-dialog .m-dialog-title {
        margin-bottom: 1.375rem;
    }

    .m-dialog .m-dialog-form input {
        box-sizing: border-box;
        padding: 0 0.5625rem;
        border: 1px solid #c8c8c8;
        box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.05);
        border-radius: 0.3125rem;
        height: 2.25rem;
        width: 100%;
    }

    .iosx2 .m-dialog .m-dialog-form input {
        border: 0.5px solid #c8c8c8;
    }

    .iosx3 .m-dialog .m-dialog-form input {
        border: 0.35714px solid #c8c8c8;
    }

    .m-dialog .m-btn {
        border: 0;
        border-radius: 0;
        background-color: transparent;
        height: 2.8125rem;
        line-height: 2.8125rem;
    }

    .m-dialog .m-btn.m-btn-text-orange:active {
        color: #FF8200;
    }

    .m-dialog .m-btn:active {
        background-color: #E6E6E6;
    }

    .m-dialog .m-btm-btns {
        margin: 0 -1px;
    }

    .m-dialog .m-box-col {
        border-top: 1px solid #d0d0d0;
        border-left: 1px solid #d0d0d0;
        margin: 0;
    }

    .iosx2 .m-dialog .m-box-col {
        border-top: 0.5px solid #d0d0d0;
    }

    .iosx3 .m-dialog .m-box-col {
        border-top: 0.35714px solid #d0d0d0;
    }

    .iosx2 .m-dialog .m-box-col {
        border-left: 0.5px solid #d0d0d0;
    }

    .iosx3 .m-dialog .m-box-col {
        border-left: 0.35714px solid #d0d0d0;
    }

    .m-box {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }

    .m-box-col {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        display: block;
        min-width: 0;
    }

    .m-box-center-a {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .m-box-center {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .m-box-dir {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
</style>