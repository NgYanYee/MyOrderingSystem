<template>
    <div class="my-order">
        <order-item v-for="item in orderList"
        :key = "item.orderId"
        :orderId = "item.orderId"
        :orderAmount = "item.orderAmount"
        :createTime = "item.createTime"></order-item>
        <!-- <order-item></order-item> -->
        <!-- <div>{{orderList}}</div> -->
    </div>
</template>

<script>
import orderItem from './orderItem'
import menu from '../../store/types/menu'
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            orderId: ''
        }
    },
    props: ['orderList'],
    components: {
        orderItem
    },
    // computed: {
    //     ...mapState({
    //         'orderList': state => state.menu.orderList
    //     })
    // },
    create() {
        console.log(this.orderList)
    }
}
</script>

<style>
    .my-order {
        margin-top: 8.75rem;
    }
</style>


