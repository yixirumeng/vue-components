<template>
    <div class="home">
        <ul>
            <li>
                <router-link to="/carousel">轮播图组件&nbsp;&nbsp;&gt;&gt;</router-link>
            </li>
            <li>
                <router-link to="/hoverFold">悬浮伸展组件&nbsp;&nbsp;&gt;&gt;</router-link>
            </li>
            <li>
                <router-link to="/hoverPop">悬浮弹出组件&nbsp;&nbsp;&gt;&gt;</router-link>
            </li>
            <li>
                <router-link to="/clickEnlarge">点击放大弹出组件&nbsp;&nbsp;&gt;&gt;</router-link>
            </li>
            <li>
                <router-link to="/DropDown">下拉菜单组件&nbsp;&nbsp;&gt;&gt;</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.home{
    width: 800px;
    height: 800px; 
    margin: 10px auto;
    border: 1px solid #008866;
    border-radius: 5px;
    font-size: 18px;
    ul{
        height: 100%;
        li{
            height: 35px;
            line-height: 35px;
            border-bottom: 1px solid #008866;
            text-align: center;
            a{
                color: #306155;
            }
        }
    }
}
</style>
