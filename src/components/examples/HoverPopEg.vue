<template>
    <div class="popEg">
        <div class="comTitle">悬浮弹出组件</div>
        <hoverPop class="hover-sub" :msgStyle="msgStyle" :signStyle="signStyle">
            <img src="../../assets/logo.png" alt="" slot="popSub">
        </hoverPop>
        <div class="usage-title">Code：</div>
        <div class="usage" v-highlight>
            <div class="usage-intro">1、首先引入HoverPop.vue组件</div>
            <pre>
                <code>
                    {{html1}}
                </code>
            </pre>
            <div class="usage-intro">2、在模板文件调用，需要有弹出的元素，slot设置为popSub，并传入需要的API参数，以及样式调整</div>
            <pre>
                <code>
                    {{html2}}
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
                <td>message</td>
                <td>弹出框内容</td>
                <td>String</td>
                <td></td>
                <td>Hi developer, welcome to use vue framework！</td>
            </tr>
            <tr>
                <td>msgStyle</td>
                <td>弹出方框样式</td>
                <td>Object</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>signStyle</td>
                <td>弹出三角样式<br>（调整箭头方向，修改border四个方向）</td>
                <td>Object</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import hoverPop from "@/components/HoverPop.vue"
    export default{
        name: "popDemo",
        components: {hoverPop},
        data(){
            return {
                msgStyle: {
                    left: "25%"
                },
                signStyle: {
                    left: "53%"
                },
                html1: `import hoverPop from '组件路径'`,
                html2: `<hoverPop :msgStyle="msgStyle" :signStyle="signStyle">
                        <img src="../../assets/logo.png" alt="" slot="popSub">
                    </hoverPop>`
            }
        }
    }
</script>

<style lang="scss" scoped>
.popEg{
    width: 800px;
    margin: 0 auto;
    .hover-sub img{
        margin: 50px auto 0;
        cursor: pointer;
    }
}
</style>
