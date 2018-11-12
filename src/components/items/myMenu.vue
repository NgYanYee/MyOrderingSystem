<template>
    <div>
    <div class="my-menu">
        <div class="layout-left">
            <ul class="dish-type" v-model="typeSelected">
                <li  v-for="(item, index) in productList" :class="{'is-selected': curType == index}" @click="switchType(index, item.name)">{{item.name}}</li>
                <!-- <li class="is-selected"><a href="#1">推荐</a></li> -->

            </ul>
        </div>
        <div class="layout-right">
            <div v-for="(item, index) in productList" :id="item.name">
                <p class="dish-type-name">{{item.name}}</p>
                <menuItem v-for="i in item.foods" 
                :key = "i.id"
                :name = "i.name"
                :price = "i.price"
                :description = "i.description"
                :icon = "i.icon"
                :id = "i.id"
                @dish = "changDishes"></menuItem>  
            </div>
            <div style="clear: both;"></div>
        </div>
        <div class="preference">

        </div>
        <div class="shadow" v-if="toggle"></div>
    </div>
    <button-bar :toggle = "toggle" :dishesList = "dishesList" @click=""></button-bar>
    </div>
</template>

<script>
import menuItem from './menuItem'
import buttonBar from './buttonBar'
import { mapState, mapActions } from 'vuex'
import menu from '../../store/types/menu'

export default {
    data() {
        return {
            curType: 0,
            typeSelected: 1,
            lastType: '',
            curTop: 0,
            curDivHeight: 0,
            preHeight: 0,
            nextHeight: 0,
            dishesList: {},
            toggle: false
        }
    },
    props: ['productList'],
    components: {
        menuItem,
        buttonBar
    },
    computed: {
        
    },
    methods: {
        ...mapActions(menu.actions),
        switchType(index, typeId) {
            this.curType = index
            
            var top = document.getElementById(typeId).offsetTop - 140
            var height = document.getElementById(typeId).offerHeight
            // console.log(top)
            // document.body.scrollTop = top
            document.documentElement.scrollTop = top
            this.curTop = top
            this.curDivHeight = height
        },
        handleScroll() {
            var top = document.documentElement.scrollTop + 146
            var curTypeTop = document.getElementById(this.productList[this.curType].name).offsetTop
            // console.log(top + '+' + curTypeTop)
            if(top > curTypeTop + this.curDivHeight) {
                
                this.curType += 1
                // console.log(this.curType)
                this.preHeight = this.curDivHeight
                this.curDivHeight = this.nextHeight
                this.nextHeight = document.getElementById(this.productList[this.curType + 1].name).offsetHeight
                

            }
            if(top < curTypeTop) {
                this.curType -= 1
                // console.log(this.curType)
                // var curDivHeight = document.getElementById(this.productList[this.curType].name).offsetHeight
                this.preHeight = document.getElementById(this.productList[this.curType - 1].name).offsetHeight
                this.nextHeight = this.curDivHeight
                this.curDivHeight = this.preHeight
            }
        },
        changDishes(data) {
            // console.log(data)
            var name = data.dishName
            this.dishesList[name] = data
            console.log(this.dishesList)
            // this.setMenuInfo({
            //     dishesList: this.dishesList
            // })
    },
    Toggle() {
        this.toggle = !toggle
    }
    },
    created() {
        
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
        
    },
    watch: {
        productList: function() {
            this.$nextTick(function() {
                this.preHeight = 0
                this.curDivHeight = document.getElementById(this.productList[this.curType].name).offsetHeight
                this.nextHeight = document.getElementById(this.productList[this.curType + 1].name).offsetHeight
            })
        }
    }
}
</script>

<style>
    .my-menu {
        background: #fff;
        height: 100%;

        
    }

    .layout-left {
        position: fixed;
        top: 140px;
        /* float: left; */

        z-index: 100;
        width: 6.825rem;
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
        margin-left: 6.8rem;
        margin-top: 8.5rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;

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

    .shadow {

        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, .1);
        z-index: 501;
    }
</style>


