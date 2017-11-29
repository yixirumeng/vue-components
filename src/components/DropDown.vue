<template>
    <div class="drop-sum">
        <div class="drop-title" :style="{paddingBottom: `${topSize-16}px`}">
            <slot name="item-title"></slot>
        </div>
        <div class="drop-item" :style="{top: `${topSize}px`, left: `${leftSize}px`, transitionDuration: `${showTime}s`}">
            <slot name="item-list"></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: "DropDown",
        props: {
            topSize: {
                type: Number,
                default: 30
            },
            leftSize: {
                type: Number,
                default: 0
            },
            showTime: {
                type: Number,
                default: .5
            }
        }
    }
</script>

<style lang="scss" scoped>
.drop-sum{
    position: relative;
    cursor: pointer;
    line-height: 1;
    .drop-title{
        padding-bottom: 14px;
    }
    .drop-item{
        position: absolute;
        top: 30px;
        left: 0;
        padding: 8px 0;
        border-radius: 2px;
        box-shadow: 0 0 12px rgba(0, 0, 0, .2);
        background: #fff;
        transition: all .5s ease 0s;
        transform: translateY(-15px);
        opacity: 0;
    }
    &:hover>.drop-item{
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
