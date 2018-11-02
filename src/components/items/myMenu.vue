<template>
    <div class="my-menu">
        <div class="layout-left">
            <ul class="dish-type">
                <li class="is-selected">推荐</li>
                <li>泰国菜</li>
                <li>凉拌菜</li>
                <li>茶位</li>
                <li>碟头饭</li>

            </ul>
        </div>
        <div class="layout-right"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .my-menu {
        background: #fff;
    }

    .layout-left {

        z-index: 100;
        width: 100px;
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
        background-color: #fff;
    }
</style>


