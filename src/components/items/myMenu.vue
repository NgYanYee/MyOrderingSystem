<template>
    <div class="my-menu">
        <div class="layout-left">
            <ul class="dish-type" v-model="typeSelected">
                <li  v-for="(item, index) in productList"><a :href="'#'+ item.type">{{item.name}}</a></li>
                <li class="is-selected"><a href="#1">推荐</a></li>

            </ul>
        </div>
        <div class="layout-right">
            <div v-for="(item, index) in productList">
                <p class="dish-type-name">{{item.name}}</p>
                <menuItem v-for="i in item.foods" 
                :key = "i.id"
                :name = "i.name"
                :price = "i.price"
                :description = "i.description"
                :icon = "i.icon"></menuItem>  
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</template>

<script>
import menuItem from './menuItem'

export default {
    data() {
        return {
            typeIndex: 1,
            typeSelected: 1
        }
    },
    props: ['productList'],
    components: {
        menuItem
    },
    computed: {
        
    },
    methods: {
        
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


