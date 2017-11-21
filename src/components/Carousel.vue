<template>
    <div class="slide-show" @mouseover="overRun" @mouseout="outRun" :style="carouselStyle">
        <transition-group tag="ul" class="slide-ul" :name="transformation" v-if="imgForm=='image'">
            <li v-for="(item, index) in slides" :key="index" v-show="index===nowIndex">
                <a :href="item.href" :target="target">
                    <img :src="item.src" alt="">
                </a>
            </li>
        </transition-group>
        <transition-group tag="ul" class="slide-ul" :name="transformation" v-else-if="imgForm=='bg'">
            <li v-for="(item, index) in slides" :key="index" v-show="index===nowIndex">
                <a class="imgHref" :href="item.href" :target="target" :style="{background: `url(${item.src}) center no-repeat`}">
                </a>
            </li>
        </transition-group>

        <ul class="slide-pages" :style="focusUl" v-if="signShow">
            <li v-for="(item, index) in slides" :key="index" @click="goto(index)" class="slide-page-point">
                <a :class="{'active': index === nowIndex}" :style="focusSign">{{index + 1}}</a>
            </li>
        </ul>
        <div class="control-wrapper" v-if="arrowShow">
            <a class="prev" @click="goto(prevIndex)" :style="arrowLeft"></a>
            <a class="next" @click="goto(nextIndex)" :style="arrowRight"></a>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            slides: {
                type: Array,
                default: []
            },
            inv: {
                type: Number,
                default: 3000
            },
            transformation: {
                type: String,
                default: "move"
            },
            target: {
                type: String,
                default: "_blank"
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            imgForm: {
                type: String,
                default: "image"
            },
            signShow: {
                type: Boolean,
                default: true
            },
            arrowShow: {
                type: Boolean,
                default: true
            },
            carouselStyle:{
                tyle: Object,
                default: ()=>{
                    return { 
                        width: "800px",
                        height: "450px"
                    }
                }
            },
            focusUl: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            focusSign: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            arrowLeft: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            arrowRight: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data(){
            return {
                nowIndex: 0,
                signActive: this.signActive
            }
        },
        computed: {
            prevIndex(){
                if(this.nowIndex === 0){
                    return this.slides.length - 1
                }else{
                    return this.nowIndex - 1
                }
            },
            nextIndex(){
                if(this.nowIndex === this.slides.length - 1){
                    return 0
                }else{
                    return this.nowIndex + 1
                }
            }
        },
        methods: {
            goto(index){
                this.nowIndex = index
            },
            runInv(){
                this.invId = setInterval(
                    ()=>{
                        this.goto(this.nextIndex)
                    }, this.inv
                )
            },
            clearInv(){
                clearInterval(this.invId)
            },
            outRun(){
                this.autoPlay ? this.runInv() : ""
            },
            overRun(){
                this.autoPlay ? this.clearInv() : ""
            }
        },
        mounted(){
            this.autoPlay ? this.runInv() : ""
        },
        destroyed(){
            this.clearInv()
        }
    }
</script>

<style lang="scss" scoped>
.slide-pages{
    position: absolute;
    width: 100%;
    bottom: 30px;
    text-align: center;
    line-height: 1;
    li{
        display: inline-block;
        a{
            display: block;
            width: 6px;
            height: 6px;
            margin: 0 5px;
            border: 2px solid rgba(255, 255, 255, .3);
            border-radius: 5px;
            text-align: left;
            text-indent: -9999px;
            overflow: hidden;
            _zoom: 1;
            background: rgba(0, 0, 0, .4);
            transition: all .2s;
            &.active{
                background: #fff;
                opacity: .4;
                border-color: rgba(0, 0, 0, .4);
            }
        }
    }
}

.control-wrapper{
    a{
        display: inline-block;
        position: absolute;
        top: 50%;
        width: 41px;
        height: 69px;
        transform: translateY(-50%);
    }
}

.prev{
    left: 0;
    background: url("http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") -84px 50% no-repeat;
    &:hover{
        background-position: 0 50%;
    }
}

.next{
    right: 0;
    background: url("http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") -125px 50% no-repeat;
    &:hover{
        background-position: -42px 50%;
    }
}

.slide-show{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.slide-ul{
    width: 100%;
    height: 100%;
    li{
        width: 100%;
        height: 100%;
        position: absolute;
        img{
            width: 100%;
            height: 100%;
        }
        a.imgHref{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}

.move-enter-active{
    transition: all .5s ease;
    transform: translateX(0);
}

.move-leave-active{
    transition: all .5s ease;
    transform: translateX(-100%);
}

.move-enter{
    transform: translateX(100%);
}

.move-leave{
    transform: translateX(0);
}

.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}

.fade-enter, .fade-leave-active{
    opacity: 0;
}
</style>
