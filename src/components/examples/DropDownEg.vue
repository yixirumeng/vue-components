<template>
    <div class="drop-down clearfix">
        <div class="comTitle">下拉菜单组件</div>
        <dropDown class="drop-item-sum" :leftSize="-15">
            <div class="drop-item-title" slot="item-title">下拉列表</div>
            <div class="drop-item-list" slot="item-list">流行音乐</div>
            <div class="drop-item-list" slot="item-list">经典曲目</div>
            <div class="drop-item-list" slot="item-list">热播电影</div>
            <div class="drop-item-list" slot="item-list">最新上映</div>
        </dropDown>
        <dropDown class="drop-item-sum" :leftSize="-15">
            <div class="drop-item-title" slot="item-title">下拉列表</div>
            <div class="drop-item-list" slot="item-list">流行音乐</div>
            <div class="drop-item-list" slot="item-list">经典曲目</div>
            <div class="drop-item-list" slot="item-list">热播电影</div>
            <div class="drop-item-list" slot="item-list">最新上映</div>
        </dropDown>
        <dropDown class="drop-item-sum" :leftSize="-15">
            <div class="drop-item-title" slot="item-title">下拉列表</div>
            <div class="drop-item-list" slot="item-list">流行音乐</div>
            <div class="drop-item-list" slot="item-list">经典曲目</div>
            <div class="drop-item-list" slot="item-list">热播电影</div>
            <div class="drop-item-list" slot="item-list">最新上映</div>
        </dropDown>
        <dropDown class="drop-item-sum" :leftSize="-15">
            <div class="drop-item-title" slot="item-title">下拉列表</div>
            <div class="drop-item-list" slot="item-list">流行音乐</div>
            <div class="drop-item-list" slot="item-list">经典曲目</div>
            <div class="drop-item-list" slot="item-list">热播电影</div>
            <div class="drop-item-list" slot="item-list">最新上映</div>
        </dropDown>
        <div class="usage-title">Code：</div>
        <div class="usage" v-highlight>
            <div class="usage-intro">1、首先引入DropDown.vue组件</div>
            <pre>
                <code class="hljs">
                    {{html1}}
                </code>
            </pre>
            <div class="usage-intro">2、在模板文件调用，主标题solt设置为item-title，副标题slot设置为item-list，传入需要的API参数</div>
            <pre>
                <code>
                    {{html2}}
                </code>
            </pre>
            <div class="usage-intro">3、根据需要，调整主、副标题的样式</div>
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
                <td>topSize</td>
                <td>副标题框上偏移量</td>
                <td>Number</td>
                <td></td>
                <td>30</td>
            </tr>
            <tr>
                <td>leftSize</td>
                <td>副标题框左偏移量</td>
                <td>Number</td>
                <td></td>
                <td>0</td>
            </tr>
            <tr>
                <td>showTime</td>
                <td>副标题框显示动画时间（秒）</td>
                <td>Number</td>
                <td></td>
                <td>0.5</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import dropDown from '@/components/DropDown.vue'

    export default{
        name: 'DropDownEg',
        components: {dropDown},
        data(){
            return {
                html1: `import dropDown from '组件路径'`,
                html2: `<div slot="item-title">下拉列表</div>
                    <div slot="item-list">流行音乐</div>`
            }
        }
    }
</script>

<style lang="scss" scoped>
.drop-down{
    width: 800px;
    margin: 0 auto;
    .drop-item-sum{
        float: left;
        margin: 30px 65px 0;
    }
    .drop-item-title:hover{
        color: #f33;
    }
    .drop-item-list{
        line-height: 2.5em;
        padding: 0 15px;
        text-align: center;
        width: 64px;
        &:hover{
            color: #f33;
        }
    }
    .usage-title{
        margin-top: 50px;
    }
}
</style>
