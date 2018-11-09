<template>
    <div class="button-bar">
        <div class="shop-cart">
            <img :src="cartImg">
            <span class="count-icon">{{ count }}</span>
            <p class="price">￥{{ sum }}</p>
        </div>
        <div :class="[isEmpty ? 'empty' : 'noEmpty', 'to-pay']">
            去支付
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEmpty: false,
            // cartImg: require('@/assets/images/orange-cart.png'),
            cartImg: require('@/assets/images/car.png'),
            count: 0,
            sum: 0
        }
    }
}
</script>

<style>
    .button-bar {
        position: fixed;
        bottom: 0;
        
        height: 3rem;
        width: 100%;
        
        background-color: #494946;

        z-index: 1000;
    }

    .to-pay {
        position: absolute;
        right: 0;

        display: inline-block;
        width: 6.85rem;
        height: 100%;
        line-height: 3;

        font-size: 18px;

    }

    .empty {
        background-color: #a4a3a3;
        color: #343434;
    }

    .noEmpty {
        background-color: #e6951d;
        color: #fff;
    }

    .shop-cart img {
        position: relative;
        /* top: -0.25rem; */
        
        width: 2.5rem;
        height: 2.5rem;

        vertical-align: top;

        margin-top:0.25rem;
    }

    .shop-cart {
        position: absolute;
        left: 2rem;

        display: inline-block;
        /* width: 6rem; */
        height: 100%;
    }

    .count-icon {
        position: absolute;
        top: 0;
        left: 2rem;

        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        
        background-color: red;
        color: white;
        
    }

    .price {
        display: inline-block;

        margin-left: 1rem;

        color: #e6951d;
        font-size: 30px;
    }
</style>


