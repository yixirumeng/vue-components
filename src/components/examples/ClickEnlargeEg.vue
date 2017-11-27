<template>
    <div class="enlarge">
        <div class="comTitle">点击放大弹出组件</div>
        <enlarge :imgSrc="imgSrc" :imgStyle="imgStyle"></enlarge>
        <div class="usage-title">Code：</div>
        <div class="usage" v-highlight>
            <div class="usage-intro">1、首先引入ClickEnlarge.vue组件</div>
            <pre>
                <code>
                    {{html1}}
                </code>
            </pre>
            <div class="usage-intro">2、在模板文件调用，并传入需要的API参数，以及样式调整</div>
            <pre>
                <code>
                    {{html2}}
                </code>
            </pre>
            <div class="usage-intro">3、参数可以在data数据中传递，方便书写</div>
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
                <td>imgSrc</td>
                <td>图片路径</td>
                <td>String</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>imgStyle</td>
                <td>图片样式</td>
                <td>Object</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import enlarge from '@/components/ClickEnlarge.vue'
    export default{
        name: 'ClickEnlargeEg',
        components: {enlarge},
        data(){
            return {
                imgSrc: '../../../src/assets/carousel1.jpg',
                imgStyle: {
                    width: '400px',
                    height: '225px',
                    display: 'block',
                    margin: '0 auto',
                    cursor: 'pointer'
                },
                html1: `import enlarge from '组件路径'`,
                html2: `<enlarge :imgSrc="imgSrc" :imgStyle="imgStyle"></enlarge>`,
                html3: `data(){
                        return {
                            imgSrc: '图片路径',
                            imgStyle: {图片样式}
                        }
                    }`
            }
        }
    }
</script>

<style lang="scss" scoped>
.enlarge{
    width: 800px;
    margin: 0 auto 40px;
}
</style>
