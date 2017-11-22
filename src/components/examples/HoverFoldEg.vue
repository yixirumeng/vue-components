<template>
    <div class="fold">
        <div class="comTitle">悬浮伸展组件</div>
        <div class="comSubTitle">鼠标移上副标题展开，离开收起</div>
        <hoverFold class="hoverfold">
            <div slot="foldTitle">1、电影推荐</div>
            <div class="foldItem" slot="foldList">速度与激情8</div>
            <div class="foldItem" slot="foldList">加勒比海盗之死无对证</div>
            <div class="foldItem" slot="foldList">复仇者联盟3：无限战争</div>
        </hoverFold>
        <hoverFold class="hoverfold">
            <div slot="foldTitle">2、音乐赏析</div>
            <div class="foldItem" slot="foldList">告白气球</div>
            <div class="foldItem" slot="foldList">不为谁而做的歌</div>
            <div class="foldItem" slot="foldList">勋章</div>
        </hoverFold>
        <hoverFold class="hoverfold">
            <div slot="foldTitle">3、精美图书</div>
            <div class="foldItem" slot="foldList">瓦尔登湖</div>
            <div class="foldItem" slot="foldList">偷影子的人</div>
            <div class="foldItem" slot="foldList">百年孤独</div>
        </hoverFold>
        <div class="usage-title">Code：</div>
        <div class="usage" v-highlight>
            <div class="usage-intro">1、首先引入HoverFold.vue组件</div>
            <pre>
                <code class="hljs">
                    {{html1}}
                </code>
            </pre>
            <div class="usage-intro">2、在模板文件调用，主标题solt设置为foldTitle，副标题slot设置为foldList，传入需要的API参数</div>
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
                <td>foldTime</td>
                <td>副标题伸缩间隔(秒)</td>
                <td>Number</td>
                <td></td>
                <td>1.2</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import hoverFold from '@/components/HoverFold.vue'
    export default{
        name: "navDemo",
        components: {hoverFold},
        data(){
            return {
                html1: `import hoverFold from '组件路径'`,
                html2: `<hoverFold>
                        <div slot="foldTitle">3、精美图书</div>
                        <div slot="foldList">瓦尔登湖</div>
                        <div slot="foldList">偷影子的人</div>
                        <div slot="foldList">百年孤独</div>
                    </hoverFold>`
            }
        }
    }
</script>

<style lang="scss" scoped>
.fold{
    width: 800px;
    min-height: 1000px;
    margin: 10px auto;
    padding-left: 2em;
    .hoverfold{
        margin-bottom: 15px;
        font-size: 18px;
        .foldItem{
            margin-top: 10px;
            padding-left: 28px;
        }
    }
}
</style>
