<template>
    <div class="switch">
        <span class="switch-outer" @click="switchMove();handleChange()" ref="outer">
            <span class="switch-inner" :style="{transform}"></span>
        </span>
    </div>
</template>

<script>
    export default{
        props: {
            switchWidth: {
                type: Number,
                default: 40
            },
            activeColor: {
                type: String,
                default: "#13CE66"
            },
            inactiveColor: {
                type: String,
                default: "#FF4949"
            },
            disabled: {
                type: Boolean,
                default: false
            },
            disabledColor: {
                type: String,
                default: "#d8dce5"
            }
        },
        data(){
            return {
                transform: "",
                moving: true,
                switchColor: this.activeColor
            }
        },
        methods: {
            switchMove(){
                if(!this.disabled){
                    if(this.moving){
                        this.transform = `translateX(${this.switchWidth-20}px)`
                        this.moving = !this.moving
                        this.switchColor = this.inactiveColor
                    }else{
                        this.transform = ""
                        this.moving = !this.moving
                        this.switchColor = this.activeColor
                    }
                    this.setColor()
                }
            },
            handleChange(event){
                this.$emit("change", this.switchColor)
            },
            setColor(){
                let outer = this.$refs.outer.style
                if(!this.disabled){
                    outer.backgroundColor = this.switchColor
                    outer.borderColor = this.switchColor
                }else {
                    outer.backgroundColor = this.disabledColor
                    outer.borderColor = this.disabledColor
                }
                this.$refs.outer.style.width = `${this.switchWidth}px`
            }
        },
        mounted(){
            this.setColor()
        }
    }
</script>

<style lang="scss" scoped>
.switch{
    span{
        display: inline-block;
    }
    .switch-outer{
        height: 20px;
        border-radius: 10px;
        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        position: relative;
        .switch-inner{
            width: 16px;
            height: 16px;
            background: #fff;
            border-radius: 100%;
            position: absolute;
            top: 1px;
            left: 1px;
            transition: all .3s;
        }
    }
}
</style>
