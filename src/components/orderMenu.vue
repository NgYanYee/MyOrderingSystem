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

        <!-- <yd-tab class="tab">
            <yd-tab-panel label="选项一">土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。</yd-tab-panel>
            <yd-tab-panel label="选项二">我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。</yd-tab-panel>
            <yd-tab-panel label="选项三">时间是一切财富中最宝贵的财富。</yd-tab-panel>
            <yd-tab-panel label="选项四">真理惟一可靠的标准就是永远自相符合。</yd-tab-panel>
        </yd-tab> -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
        </mt-tab-container>
        <!-- <mt-button @click.native="handleClick">按钮</mt-button> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: "1"
        }
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
    }

    .seller-info {
        display: inline-block;
        
        
        
        
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

    .tab {
        height: 
    }
</style>
