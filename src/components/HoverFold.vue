<template>
    <div class="foldSum">
        <slot name="foldTitle"></slot>
        <div class="foldList" :style="{transitionDuration: `${foldTime}s`}">
            <slot name="foldList"></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: "HoverFold",
        props: {
           foldTime: {
               type: Number,
               default: 1.2
           }
        }
    }
</script>

<style lang="scss" scoped>
.foldSum{
    cursor: pointer;
    div{
        line-height: 1;
    }
    .foldList{
        max-height: 0;
        overflow: hidden;
        transition-property: max-height;
        transition-timing-function: ease-in-out;
    }
    &:hover .foldList{
        max-height: 2000px;
        
    }
}
</style>
