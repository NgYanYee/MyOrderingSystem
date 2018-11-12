<template>
    <div class="car">
        <div class="car-menu">
            <div class="other-func">
                <p >已点菜品</p>
                <p class="clear-car" @click.native="clearCart">清空</p>
            </div>
            <div class="car-menu-item">
                <car-item v-for="item in cartData"
                :key = "item.dishId"
                :dishName = "item.dishName"
                :dishPrice = "item.dishPrice"
                :dishId = "item.dishId"
                :dishCount = "item.dishCount"
                @dish = "setCart"></car-item>
            </div>
        </div>
        
        <div class="button-bar">
        <div class="shop-cart">
            <img :src="(totalNum == 0) ? emptyCartImg : cartImg">
            <span class="count-icon" v-show="totalNum">{{ totalNum }}</span>
            <p class="price" :class="{'car_empty': totalNum == 0}">￥{{ totalPrice }}</p>
        </div>
        <div :class="[(totalNum == 0) ? 'empty' : 'noEmpty', 'to-pay']" @click="submitOrder">
            去下单
        </div>
    </div>
    </div>
    
</template>

<script>
    import carItem from './carItem.vue'
    import { mapState, mapActions, mapGetters } from 'vuex'
    import menu from '../../store/types/menu'


export default {


    data() {
        return {
            isEmpty: true,
            // cartImg: require('@/assets/images/orange-cart.png'),
            emptyCartImg: require('@/assets/images/car_gery.png'),
            cartImg: require('@/assets/images/car_orange.png'),
            count: 0,
            // sum: 0
        }
    },
    props: ['toggle'],
    components: {
        carItem
    },
    computed: {
        
        ...mapGetters({
                cartData:'addShopList',
                totalNum:'totalNum',
                totalPrice:'totalPrice'
            })
    },
    
    methods: {
        ...mapActions(menu.actions),
        setCart: function(data) {
            this.addToCart(data)
        },
        submitOrder: function() {
            
            this.createOrder().then(function(){
                alert('下单成功')
            }).catch(function() {
                alert('下单失败')
            })
        }
    },
    created () {
        
    }
}
</script>

<style>
    .car {
        z-index: 1001;
    }



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

    .car_empty {
        color: #bfbfbf
    }

    .other-func p {
        position: relative;
        display: inline-block;

    }

    .other-func {
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        padding-left:.625rem;
        border-bottom: 1px solid #eee;

        text-align: left;
    }

    .clear-car {
        margin-left: 75%;
        color: rgb(168, 167, 167);
    }

    .car-menu {
        position: fixed;
        bottom: 3rem;

        width: 100%;
        background-color: #fff;
        z-index: 10000;
    }

    .car-menu-item {
        max-height: 9rem;
        overflow-y: scroll;
    }
</style>


