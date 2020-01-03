<template>
    <div v-if="list.length" class="mask vue-popup">
        <div class="m-actionsheet">
            <div class="m-actionsheet-list">
                <a v-for="(item,k) of list" @click="handleItem(item)" :style="{color:item.color || '#333'}" class="m-actionsheet-item" :key="k">{{item.text}}</a>
            </div>
            <a v-if="showOk" @click="handleOk" class="m-actionsheet-item" :style="{color:okColor}">{{okText}}</a>
            <a @click="handleCancel" class="m-actionsheet-item" :style="{color:cancelColor}">{{cancelText}}</a>
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
                this.removePopup();
                this.cancel && this.cancel();
            },
            handleOk() {
                this.removePopup();
                this.ok && this.ok()
            },
            handleItem(item) {
                this.removePopup();
                item.callback && item.callback();
            },
        }
    }
</script>
<style lang="less">
    .vue-popup {
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
        .m-actionsheet {
            position: fixed;
            z-index: 999;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.8);
            -webkit-backdrop-filter: blur(0.625rem);
        }

        .m-actionsheet .m-actionsheet-list .m-actionsheet-item + .m-actionsheet-item {
            border-top: 1px solid transparent;
        }

        .iosx2 .m-actionsheet .m-actionsheet-list .m-actionsheet-item + .m-actionsheet-item {
            border-top: 0.5px solid transparent;
        }

        .iosx3 .m-actionsheet .m-actionsheet-list .m-actionsheet-item + .m-actionsheet-item {
            border-top: 0.35714px solid transparent;
        }

        .m-actionsheet .m-actionsheet-list + .m-actionsheet-item {
            margin-top: 5px;
        }

        .m-actionsheet .m-actionsheet-item {
            display: block;
            background-color: rgba(255, 255, 255, 0.8);
            background-clip: padding-box;
            height: 3.25rem;
            line-height: 3.25rem;
            text-align: center;
            font-size: 16px;
            color: #333;
        }

        .m-actionsheet .m-actionsheet-item:active {
            background-color: #E6E6E6;
        }

        .m-actionsheet .m-actionsheet-warn {
            color: #F83232;
        }

        @supports (overflow: -webkit-marquee) and (justify-content: inherit) {
            .m-actionsheet {
                background: rgba(255, 255, 255, 0.8);
            }
        }     
    }
</style>