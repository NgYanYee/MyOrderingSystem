<template>
    <div class="menu-item">
       <img :src="icon">
       <div class="text">
           <p class="dish-name">{{name}}</p>
            <p class="dish-price">￥{{price}}/份</p>
            <p class="dish-sale">月销量 3</p>

            <!-- <span class="sub">－</span> -->
            <img class="sub" v-show="dishCount" :src="subGrey" @click="handle(-1)">
            <span class="dish-count" v-show="dishCount">{{dishCount}}</span>
            <!-- <span class="add">＋</span> -->
            <img class="add" :src="addOrange" @click="handle(1)">
       </div>
       
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import menu from '../../store/types/menu'

export default {
    data() {
        return {
            dishImg: '',
            subGrey: require('@/assets/images/sub_grey.png'),
            subOrange: require('@/assets/images/sub_orange.png'),
            addOrange: require('@/assets/images/plus_orange.png'), 
            dishCount: 0
        }
    },
    props: ['name', 'price', 'description', 'icon', 'id'],
     computed: {
        
        ...mapGetters({
                cartData:'addShopList',
                curObject: 'curObject'
            })
        
    },
    methods: {
        ...mapActions(menu.actions),
        handle(type) {
            if(type == -1) {
                this.dishCount -= 1
            }
            if(type == 1) {
                this.dishCount += 1
            }
            
            let data = {
                dishId: this.id,
                dishName: this.name,
                dishCount: this.dishCount,
                dishPrice: this.price
            }
            // console.log(data)
            // this.$emit('dish',data)

            this.addToCart(data)
            // this.searchCount()
        },
        // searchCount: function() {
        //     var id = this.id
        //     var record = this.cartData.find(function(elem) {
        //         return elem.dishId == id
        //     })
        //     console.log(record)
        //     if(!record) {
        //         this.dishCount = 0
        //     } else {
        //         this.dishCount = record.dishCount
        //     }
        // }
    },
    created() {
        // this.count = this.dishCount
    },
    watch: {
        // cartData: function(oldval, newval) {
        //     console.log("111")
        //     var id = this.id
        //     var record = newval.find(function(elem) {
        //         return elem.dishId == id
        //     })
        //     console.log(record)
        //     if(!record) {
        //         this.dishCount = 0
        //     } else {
        //         this.dishCount = record.dishCount
        //     }
        // }
        curObject: function(newval, oldval) {
            var id = this.id
            if(newval.dishId == id) {
                console.log(newval.dishId + '+' + newval.dishCount)
                this.dishCount = newval.dishCount
            }
        }
    }
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
        position: relative;
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



    .menu-item .dish-price {
        font-size: 16px;
        color: #e6951d;

    }
    .menu-item .dish-name {
        font-size: 15px;
    }

    .menu-item .dish-sale {
        display: inline-block;

        margin-top: 1.5rem;

        color: rgb(194, 193, 193);
    }

    .menu-item .text img {
        display: inline-block;

        /* border: 1px solid #000; */
        
        width: 1rem;
        height: 1rem;
        border-radius: 50%;

        vertical-align: text-top;
        /* text-align: left; */
        line-height: .85rem;

        font-size: 15px;
        /* font-weight: 800; */

    }



    .menu-item .sub {
        margin-left: 1.5rem;
    }

    .menu-item .add {
        position: absolute;
        right: .2rem;
        top: 4.125rem;
    }

    .menu-item .dish-count {
        margin: 0 .25rem;
        margin-top: .125rem;

        font-size: 16px;
        vertical-align: bottom;
    }
</style>

