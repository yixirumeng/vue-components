<template>
    <div>
        <carsouel :slides="slides" :name="transitionName1" :imgForm="'bg'"></carsouel>
        <carsouel :slides="slides" :name="transitionName2"></carsouel>
    </div>
</template>

<script>
    import carsouel from '@/components/Carousel.vue'
    export default{
        components: {carsouel},
        data(){
            return {
                slides: [
                    {
                        src: "../../src/assets/banner5.png",
                        href: ""
                    },
                    {
                        src: "../../src/assets/banner6.png",
                        href: ""
                    },
                    {
                        src: "../../src/assets/banner8.png",
                        href: ""
                    }
                ],
                transitionName1: "move",
                transitionName2: "fade",
                arrowRight: {
                    right: "70px"
                }
            }
        }
    }
</script>
