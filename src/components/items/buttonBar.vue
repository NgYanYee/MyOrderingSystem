<template>
    <div class="button-bar">
        <div class="shop-cart">
            <img src="../../assets/images/orange-cart.png">
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
            cartImg: '../assets/images/orange-cart.png'
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

    img {
        width: 2.25rem;
        height: 2.25rem;
    }

    .shop-cart {
        position: absolute;
        left: 3rem;

        display: inline-block;
        width: 5rem;
        height: 100%;
    }
</style>


