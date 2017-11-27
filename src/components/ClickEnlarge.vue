<template>
    <div>
        <img :src="imgSrc" @click="popDisplay" :style="imgStyle">
        <div class="modal-img" v-if="modalShow" @click="popHide">
            <img :src="imgSrc">
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ClickEnglarge',
        props: {
            imgSrc: {
                type: String,
                default: ''
            },
            imgStyle: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data(){
            return {
                modalShow: false
            }
        },
        methods: {
            popDisplay(){
                this.modalShow = true
            },
            popHide(){
                this.modalShow = false
            }
        }
    }
</script>

<style lang="scss" scoped>
.modal-img{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99998;
    background: rgba(0, 0, 0, .3);
    cursor: pointer;
    img{
        display: block;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
}
</style>
