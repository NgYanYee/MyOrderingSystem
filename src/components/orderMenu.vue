<template>
    <div>
        <div class="header">
        <div class="bulletin">
            {{notice}}
        </div>
        <div class="head">
            <div class="seller-info">
                <img :src="storeImage" alt="111">
                <p class="seller-name">{{storeName}}</p>
            </div>
            <div class="search-box">
                <!-- <i class="icon-hall"></i> -->
                <!-- <yd-search v-model="value1" :on-submit="submitHandler"></yd-search> -->
                <input class="search" type="text" placeholder="搜索菜品" >
            </div>
        </div>




        <mt-navbar v-model="selected">
            <mt-tab-item id="1">点餐</mt-tab-item>
            <mt-tab-item id="2">订单</mt-tab-item>
            <mt-tab-item id="3">服务</mt-tab-item>
        </mt-navbar>
        </div>
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <my-menu 

            :productList="productList"></my-menu>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            
        </mt-tab-container-item>
        </mt-tab-container>
        <!-- <mt-button @click.native="handleClick">按钮</mt-button> -->
        <button-bar></button-bar>
    </div>
</template>

<script>
import myMenu from './items/myMenu'
import buttonBar from './items/buttonBar'
import menu from '../store/types/menu'
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            selected: "1",
            typeIndex: 0
        }
    },
    components: {
        myMenu,
        buttonBar
    },
    computed: {
        ...mapState({
            'storeName': state => {
                return state.menu.storeName
            },
            'storeImage': state => {
                return state.menu.storeImage
            },
            'notice': state => {
                return state.menu.notice
            },
            'productList': state => {
                return state.menu.productList
            },
        })
    },
    methods: {
        ...mapActions(menu.actions)
    },
    created() {
        this.getSellerInfo({
            sellerId: 0
        }).then((data) => {
				
			}).catch((err) => {
				this.$Message.error(err)
            })
        this.getMenuInfo({
            sellerId: 0
        })
    }
    
}
</script>

<style>
    /* .header {
        position: fixed;
        top: 0;
    } */


    .bulletin {
        width: 100%;
        height: 36px;
        line-height: 36px;

        background-color: #fffdcf;
        color: #f69d19;
        font-size: 12px;
    }

    .search-box {
        display: inline-block;
        text-align: right;

        /* background: url(../assets/images/search.png) no-repeat; */
    }

    .search {
        /* border: 0; */
        display: inline-block;
        border: 1px solid #c4c4c4;

        border-radius: 4px;
        padding-left: 1.25rem;

        width: 45%;
        height: 1.5rem;
        line-height: 1.5rem;

        background: url(../assets/images/search.png) no-repeat;
        background-size: 1rem 1rem;
        background-position: 1px 50%;

        outline: none;


    }


    .icon-user {
        display: inline-block;
        
        background-image: url(../assets/logo.png); 

        background-repeat: no-repeat;

        background-position: 0px 0px; 

        width: 20px; 

        height: 20px; 

    }

   

    .head {
        padding: 2.5% 3%;
        width: 100%;

        border-bottom: 2px solid #eee;

        background-color: #fff;
    }

    .seller-info {
        display: inline-block;
        background-color: #fff;
        
        
        
        
    }

    .seller-name {
        display: inline-block;
    
    }

    .seller-info img {
        height: 30px;
        width: 30px;

        border-radius: 10px;

        vertical-align: middle;
    }

    

</style>
