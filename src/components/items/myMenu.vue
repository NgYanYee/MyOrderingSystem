<template>
    <div class="my-menu">
        <div class="layout-left">
            <ul class="dish-type">
                <li class="is-selected"><a href="#1">推荐</a></li>
                <li><a href="#2">泰国菜</a></li>
                <li><a href="#3">凉拌菜</a></li>
                <li><a href="#4">茶位</a></li>
                <li><a href="#5">碟头饭</a></li>

            </ul>
        </div>
        <div class="layout-right">
            <p class="dish-type-name">推荐</p>
            <menuItem v-for="i in 10"></menuItem>  
            <div style="clear: both;"></div>
        </div>
    </div>
</template>

<script>
import menuItem from './menuItem'

export default {
    data() {
        return {

        }
    },
    components: {
        menuItem
    },
    created() {
    }
}
</script>

<style>
    .my-menu {
        background: #fff;
        height: 100%;

        
    }

    .layout-left {
        float: left;

        z-index: 100;
        width: 6.25rem;
        overflow-y: auto;

        color: #000;
        background-color: #f6f6f3;
    }

    .dish-type li {
        height: 2.85rem;
        line-height: 2.85rem;

        border-bottom: 2px solid #eee;
    }

    .dish-type .is-selected {
        border-left: 1px solid #e6951d;
        background-color: #fff;
    }

    .layout-right {
        float: left;
        margin-left: 1.25rem;

        background-color: #fff;
        z-index: 200;
    }

    .dish-type a {
        text-decoration: none;
    }

    .dish-type-name {
        margin: .625rem 0;

        text-align: left;

    }
</style>


