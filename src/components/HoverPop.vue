<template>
    <div class="pop">
        <div class="pop-sub">
            <slot name="popSub"></slot>
        </div>
        <div class="pop-intro" :style="msgStyle">{{message}}</div>
        <div class="pop-sign" :style="signStyle"></div>
    </div>
</template>

<script>
    export default{
        name: "HoverPop",
        props: {
            message: {
                type: String,
                default: "Hi developer, welcome to use vue framework！"
            },
            msgStyle: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            signStyle: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.pop{
    position: relative;
    .pop-sign{
        border: 6px solid transparent;
        position: absolute;
        top: -8px;
        left: 12px;
        border-top-color: #2F8760;
        opacity: 0;
    }
    .pop-intro{
        position: absolute;
        left: 0;
        top: -36px;
        font-size: 12px;
        text-align: center;
        color: #fff;
        padding: 8px 6px;
        background: #2F8760;
        border-radius: 5px;
        opacity: 0;
    }
    .pop-sub:hover ~ .pop-intro, .pop-sub:hover ~ .pop-sign {
        animation: pop .15s ease-in .4s;
        animation-fill-mode: forwards;
    }
}

@keyframes pop {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
