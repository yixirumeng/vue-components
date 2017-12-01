<template>
    <div class="switch">
        <div class="comTitle">开关组件</div>
        <div class="clearfix">
            <switchEg class="switchEg" @change="switchChange"></switchEg>
            <div class="switchEg-msg">{{switchVal}}</div>
            <switchEg class="switchEg" :disabled="true"></switchEg>
            <div class="switchEg-msg">禁用</div>
        </div>
        <div class="usage-title">Code：</div>
        <div class="usage" v-highlight>
            <div class="usage-intro">1、首先引入Switch.vue组件</div>
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
                <td>switchWidth</td>
                <td>按钮宽度</td>
                <td>Number</td>
                <td></td>
                <td>40</td>
            </tr>
            <tr>
                <td>activeColor</td>
                <td>按钮打开的背景色</td>
                <td>String</td>
                <td></td>
                <td>#13CE66</td>
            </tr>
            <tr>
                <td>inactiveColor</td>
                <td>按钮关闭的背景色</td>
                <td>String</td>
                <td></td>
                <td>#FF4949</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>Boolean</td>
                <td></td>
                <td>false</td>
            </tr>
            <tr>
                <td>disabledColor</td>
                <td>禁用背景色</td>
                <td>String</td>
                <td></td>
                <td>#d8dce5</td>
            </tr>
        </table>
        <div class="usage-title" :style="{'margin-top': '30px'}">Event：</div>
        <table>
            <tr>
                <td width="20%">事件名称</td>
                <td width="50%">说明</td>
                <td width="30%">回调参数</td>
            </tr>
            <tr>
                <td>change</td>
                <td>按钮状态改变的回调函数</td>
                <td>不同状态的背景色</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import switchEg from '@/components/Switch'
    export default{
        name: "SwitchEg",
        components: {switchEg},
        data(){
            return {
                val: "",
                html1: `import switchEg from '组件路径'`,
                html2: `<switchEg @change="switchChange" API参数></switchEg>`
            }
        },
        computed: {
            switchVal(){
                return (this.val == "#FF4949") ? "关闭" : "打开"
            }
        },
        methods: {
            switchChange(col){
                this.val = col
            }
        },
        mounted(){
            this.switchChange()
        }
    }
</script>

<style lang="scss" scoped>
.switch{
    width: 800px;
    margin: 0 auto;
    .switchEg{
        width: 80px;
        line-height: 1;
        margin-left: 200px;
        margin-top: 50px;
        margin-bottom: 30px;
        float: left;
    }
    .switchEg-msg{
        float: left;
        font-size: 18px;
        margin-top: 50px;
        margin-bottom: 30px;
    }
}
</style>
