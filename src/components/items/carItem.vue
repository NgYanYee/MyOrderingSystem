<template>
    <div class="car-item" v-if="count">
     
       
           <p class="dish-name">{{dishName}}</p>
            <p class="dish-price">￥:{{dishPrice}}/份</p>

            <!-- <span class="sub">－</span> -->
            <img class="sub" v-show="count" :src="subGrey" @click="handler(-1)">
            <span class="dish-count" v-show="count">{{count}}</span>
            <!-- <span class="add">＋</span> -->
            <img class="add" :src="addOrange" @click="handler(1)">
    
       
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import menu from '../../store/types/menu'

export default {
    data() {
        return {
            count: 0,
            subGrey: require('@/assets/images/sub_grey.png'),
            addOrange: require('@/assets/images/plus_orange.png'), 
        }
        
    },
    props: ['dishName', 'dishPrice', 'dishCount', 'dishId'],
    methods: {
       
        handler(type) {
            
            if(type == -1) {
                this.count -= 1
            }
            if(type == 1) {
                this.count += 1
            }
            
            
            let data = {
                dishId: this.dishId,
                dishName: this.dishName,
                dishCount: this.count,
                dishPrice: this.dishPrice
            }
            // console.log(data)
            this.$emit('dish',data)

            
        }
    
    },
    watch: {
        dishCount: function() {
            this.count = this.dishCount
        }
    },
    created() {
        this.count = this.dishCount
    }
}
</script>

<style>
    .car-item {
        height: 3rem;
        line-height: 3rem;
        padding-left: .625rem;

        text-align: left;
        font-size: 13px;

    }

    .car-item .sub,
    .car-item .add {
        display: inline-block;

        width: 1rem;
        height: 1rem;

        vertical-align: middle;
    }

    .car-item p {
        display: inline-block;
    }

    .car-item .dish-price {
        margin-left: 42%;
        margin-right: 3%;

        color:#e6951d;
    }

</style>
