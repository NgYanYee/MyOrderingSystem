<template>
    <div class="order-item" @click="getThisDetail">
        <div class="order-store">{{storeName}}</div>
        <div class="order-info">
            <p class="order-id">订单号：{{orderId}}</p>
            <p class="order-amount">金额：{{orderAmount}}元</p>
            <p class="order-time">下单时间：{{createTime}}</p>
        </div>
        <div class="items" v-if="seeMore">
            <p class="items-title">订单详情</p>
            <div class="item-info" v-for="i in details.orderDetailList">
                <p class="item-name">{{i.productName}}</p>
                <p class="item-count">x{{i.productQuantity}}</p>
                <p class="item-price">￥{{i.productPrice}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import menu from '../../store/types/menu'
import { mapState, mapActions } from 'vuex'
import router from '@/router/index.js'

export default {
    data() {
        return {
            seeMore: false
        }
    },
    props: ['orderId', 'orderAmount', 'createTime'],
    computed: {
        ...mapState({
            'storeName': state => {
                return state.menu.storeName
            },
            'details': state => {
                return state.menu.details
            }
        })
    },
    methods: {
        ...mapActions(menu.actions),
        getThisDetail: function() {
            // alert('111')
            this.getOrderDetail(this.orderId)
            // router.push('orderDetail')
            this.seeMore = !this.seeMore
        }

    },
    create() {
        // alert('212')
        // this.getThisDetail().then(function() {
        //     alert('111')
        // }).catch(function() {
        //     alert('000')
        // })
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

    .order-item .items {
        background-color: #f5f5f5;
        padding-left: 1rem;
        padding-right: 1rem;
        color: #111;
        width: 100%;
    }

   

    .items .items-title {
        padding: .5rem 0;
        padding-left: .5rem;
        border-bottom: .01rem solid #ccc;
    }

    .item-info {
        padding-left: .5rem;
    }

    .item-info p {
        display: inline-block;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 13px;
    }

    .item-count {
        margin-left: 42%;
    }

    .item-price {
        margin-left: 12%;
        font-weight: bold;

        color: #e6951d;
    }
</style>


