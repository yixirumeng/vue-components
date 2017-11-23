<template>
    <div class="carousel-sum">
        <div class="comTitle">轮播图组件</div>
        <div class="comSubTitle">move</div>
        <carsouel :slides="slides" :transformation="transitionName1" :carouselStyle="carouselStyle"></carsouel>
        <div class="comSubTitle">fade</div>
        <carsouel :slides="slides" :transformation="transitionName2" :carouselStyle="carouselStyle"></carsouel>
        <div class="usage-title">Code：</div>
        <div class="usage" v-highlight>
            <div class="usage-intro">1、首先引入Carousel.vue组件</div>
            <pre>
                <code>
                    {{html1}}
                </code>
            </pre>
            <div class="usage-intro">2、在模板文件调用，并传入需要的API参数</div>
            <pre>
                <code>
                    {{html2}}
                </code>
            </pre>
            <div class="usage-intro">3、参数的值可以通过data(){}函数返回，这样书写起来更加方便</div>
            <pre>
                <code>
                    {{html3}}
                </code>
            </pre>
        </div>
        <div class="usage-title">API：</div>
        <table>
            <tr>
                <th width="20%">参数</th>
                <th width="20%">说明</th>
                <th width="10%">类型</th>
                <th width="20%">可选值</th>
                <th width="30%">默认值</th>
            </tr>
            <tr>
                <td>slides</td>
                <td>轮播图图片与链接</td>
                <td>Array</td>
                <td></td>
                <td>数组的每个元素都为对象，对象参数src的值为图片链接，参数href的值为图片跳转链接</td>
            </tr>
            <tr>
                <td>carouselStyle</td>
                <td>轮播图主体样式</td>
                <td>Object</td>
                <td></td>
                <td>{width:800px,<br>height:450px}</td>
            </tr>
            <tr>
                <td>inv</td>
                <td>跳转间隔(毫秒)</td>
                <td>Number</td>
                <td></td>
                <td>3000</td>
            </tr>
            <tr>
                <td>transformation</td>
                <td>转换方式</td>
                <td>String</td>
                <td>move、fade</td>
                <td>move</td>
            </tr>
            <tr>
                <td>target</td>
                <td>图片跳转链接方式</td>
                <td>String</td>
                <td></td>
                <td>_blank</td>
            </tr>
            <tr>
                <td>autoPlay</td>
                <td>是否自动播放</td>
                <td>Boolean</td>
                <td>true、false</td>
                <td>true</td>
            </tr>
            <tr>
                <td>imgForm</td>
                <td>图片放置方式</td>
                <td>String</td>
                <td>image(img标签)、bg(背景图)</td>
                <td>image</td>
            </tr>
            <tr>
                <td>signShow</td>
                <td>圆点标记是否显示</td>
                <td>Boolean</td>
                <td>true、false</td>
                <td>true</td>
            </tr>
            <tr>
                <td>arrowShow</td>
                <td>左右箭头是否显示</td>
                <td>Boolean</td>
                <td>true、false</td>
                <td>true</td>
            </tr>
            <tr>
                <td>focusUl</td>
                <td>圆点标记整体样式</td>
                <td>Object</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>focusSign</td>
                <td>单个圆点样式</td>
                <td>Object</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>arrowLeft</td>
                <td>左箭头样式</td>
                <td>Object</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>arrowRight</td>
                <td>右箭头样式</td>
                <td>Object</td>
                <td></td>
                <td></td>
            </tr>
        </table>
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
                        src: "../../../src/assets/carousel1.jpg",
                        href: ""
                    },
                    {
                        src: "../../../src/assets/carousel2.jpg",
                        href: ""
                    },
                    {
                        src: "../../../src/assets/carousel3.jpg",
                        href: ""
                    }
                ],
                transitionName1: "move",
                transitionName2: "fade",
                carouselStyle: {
                    width: "800px",
                    height: "450px",
                    margin: "10px auto"
                },
                html1: "import carousel from '组件路径'",
                html2: "<carousel :slides='图片数据' :transformation='move'></carousel>",
                html3: `data(){
                            return slides: [
                                src: "图片路径"，
                                href: "跳转链接"
                            ]
                        }`
            }
        }
    }
</script>

<style lang="scss" scoped>
.carousel-sum{
    width: 900px;
    margin: 0 auto 100px;
}
</style>
