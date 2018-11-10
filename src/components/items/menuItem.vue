<template>
    <div class="menu-item">
       <img :src="dishImg">
       <div class="text">
           <p class="dish-name">{{name}}</p>
            <p class="dish-price">￥{{price}}/盘</p>
            <p class="dish-sale">月销量 3</p>

            <span class="sub">－</span>
            <span class="dish-count">{{dishCount}}</span>
            <span class="add">＋</span>
       </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            dishImg: require('@/assets/images/timg.jpeg'),
            dishCount: 1
        }
    },
    props: ['name', 'price', 'description', 'icon']
}
</script>

<style>
    .sub, 
    .add {
        display: inline-block;
        /* width:  */
    }

    .menu-item img {
        display: inline-block;

        width: 5rem;
        height: 5rem;
        border-radius: .375rem;
    }

    .menu-item {
        margin: .9375rem auto;
        width: 15rem;
    }

    .text {
        display: inline-block;

        margin-left: 1.35rem;
        width: 8rem;

        text-align: left;
        vertical-align: top;
    }



    .dish-price {
        font-size: 16px;
        color: #e6951d;

    }
    .dish-name {
        font-size: 15px;
    }

    .dish-sale {
        display: inline-block;

        margin-top: 1.5rem;

        color: rgb(194, 193, 193);
    }

    .sub,
    .add {
        display: inline-block;

        border: 1px solid #000;
        
        width: 1rem;
        height: 1rem;
        border-radius: 50%;

        vertical-align: text-top;
        /* text-align: left; */
        line-height: .85rem;

        font-size: 15px;
        /* font-weight: 800; */

    }

    .sub {
        margin-left: 1.25rem;
    }

    .dish-count {
        margin: 0 .25rem;

        font-size: 15px;
        vertical-align: bottom;
    }
</style>

