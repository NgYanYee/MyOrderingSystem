<template>
    <div>
        <div class="bulletin">
            欢迎光临泰国菜-线上餐厅，本店wifi密码为：whatforlunch208
        </div>
        <div class="head">
            <div class="seller-info">
                <img src="../assets/touxiang.jpg" alt="111">
                <p class="seller-name">中午吃啥泰国菜</p>
            </div>
            <div class="search-box">
                <i class="icon-hall"></i>
                <!-- <yd-search v-model="value1" :on-submit="submitHandler"></yd-search> -->
                <input class="search" type="text" placeholder="搜索菜品">
            </div>
        </div>




        <mt-navbar v-model="selected">
            <mt-tab-item id="1">点餐</mt-tab-item>
            <mt-tab-item id="2">订单</mt-tab-item>
            <mt-tab-item id="3">服务</mt-tab-item>
        </mt-navbar>
        
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <my-menu></my-menu>
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

export default {
    data() {
        return {
            selected: "1"
        }
    },
    components: {
        myMenu,
        buttonBar
    }
}
</script>

<style>
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
    }

    .search {
        /* border: 0; */
        display: inline-block;
        border: 2px solid #eee;

        border-radius: 4px;
        width: 35%;
        height: 25px;
        line-height: 25px;

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
