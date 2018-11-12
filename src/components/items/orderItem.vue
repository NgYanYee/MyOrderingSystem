<template>
    <div class="order-item">
        <div class="order-store">{{storeName}}</div>
        <div class="order-info">
            <p class="order-id">订单号：{{orderId}}</p>
            <p class="order-amount">金额：{{orderAmount}}元</p>
            <p class="order-time">下单时间：{{createTime}}</p>
        </div>
    </div>
</template>

<script>
import menu from '../../store/types/menu'
import { mapState, mapActions } from 'vuex'

export default {

    props: ['orderId', 'orderAmount', 'createTime'],
    computed: {
        ...mapState({
            'storeName': state => {
                return state.menu.storeName
            },
        })
    },
    methods: {
        ...mapActions(menu.actions),

    }
}
</script>

<style>
    .order-item {
        background-color: #fff;
        text-align: left;
    }
    .order-store {
        padding-left: 1.5rem;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;

        text-align: left;
        
    }

    .order-info {
        padding: 1rem 1.5rem;
        line-height: 1.2rem;
        color: #888
    }
</style>


