import types from '../types/menu'
import {
  myAxios
  // IP
} from '../../utils/interaction'

const state = {
  orderId: '',
  storeName: '',
  storeImage: '',
  notice: '',
  productList: [],
  orderList: [],
  dishesList: {},
  add: [],
  curChange: {},
  openId: 'asdasdas2',
  sellerId: 12312444412,
  spec: '正常份量',
  details: {}
}

const getters = {

  // 获取商品列表
  getShopList: state => state.productList,
  // 获取购物车列表
  addShopList: state => state.add,
  // 获取总数量
  totalNum: (state, getters) => {
    let total = 0
    getters.addShopList.map(n => {
      total += n.dishCount
    })
    return total
  },
  // 计算总价格
  totalPrice: (state, getters) => {
    let total = 0
    getters.addShopList.map(n => {
      total += n.dishCount * n.dishPrice
    })
    return total
  },
  curObject: (state) => state.curChange
}

const actions = {
  [types.actions.getSellerInfo]: (context, data) => {
    // context: commit,dispatch,getters,state
    return new Promise((resolve, reject) => {
      myAxios({
        method: 'GET',
        url: '/seller',
        data: data
      }).then(function (res) {
        if (res.data.code === 200) {
          context.commit(types.mutations.setInfo, {
            storeName: res.data.data.storeName,
            storeImage: res.data.data.storeImage,
            notice: res.data.data.notice
          })
          resolve({
            state: true,
            info: res.message
          })
        } else {
          resolve({
            state: false,
            info: res.data.message
          })
        }
      }).catch(function (err) {
        reject(err)
      })
    })
  },
  [types.actions.getMenuInfo]: (context, data) => {
    // context: commit,dispatch,getters,state
    return new Promise((resolve, reject) => {
      myAxios({
        method: 'GET',
        url: '/sell/buyer/product/list',
        data: data
      }).then(function (res) {
        if (res.data.code === 200) {
          context.commit(types.mutations.setInfo, {
            productList: res.data.data
          })
          // console.log(res.data.data)
          resolve({
            state: true,
            info: res.message
          })
        } else {
          resolve({
            state: false,
            info: res.data.message
          })
        }
      }).catch(function (err) {
        reject(err)
      })
    })
  },
  [types.actions.createOrder]: (context) => {
    // context: commit,dispatch,getters,state
    var data = {
      sellerid: context.state.sellerId,
      openid: context.state.openId,
      items: context.state.add.map(function (elem) {
        return {
          productId: elem.dishId,
          productQuantity: elem.dishCount
        }
      })

    }

    return new Promise((resolve, reject) => {
      myAxios({
        method: 'POST',
        url: '/sell/buyer/order/create',
        data: data
      }).then(function (res) {
        if (res.data.code === 200) {
          context.commit(types.mutations.setInfo, {
            orderId: res.data.data
          })
          context.commit(types.mutations.clearCart)
          // console.log(res.data.data)
          resolve({
            state: true,
            info: res.message
          })
        } else {
          resolve({
            state: false,
            info: res.data.message
          })
        }
      }).catch(function (err) {
        reject(err)
      })
    })
  },
  [types.actions.getOrderInfo]: (context) => {
    // context: commit,dispatch,getters,state
    var data = {
      sellerid: context.state.sellerId,
      openid: context.state.openId
    }
    // console.log(data)
    return new Promise((resolve, reject) => {
      myAxios({
        method: 'GET',
        url: '/sell/buyer/order/list',
        data: data
      }).then(function (res) {
        if (res.data.code === 697) {
          // console.log(res.data.data)
          context.commit(types.mutations.setInfo, {
            orderList: res.data.data
          })
          // console.log(res.data.data)
          resolve({
            state: true,
            info: res.message
          })
        } else {
          resolve({
            state: false,
            info: res.data.message
          })
        }
      }).catch(function (err) {
        reject(err)
      })
    })
  },
  [types.actions.getOrderDetail]: (context, orderId) => {
    // context: commit,dispatch,getters,state
    var data = {
      buyerOpenid: context.state.openId,
      orderid: orderId
    }
    // console.log(data)
    return new Promise((resolve, reject) => {
      myAxios({
        method: 'GET',
        url: '/sell/buyer/order/detail',
        data: data
      }).then(function (res) {
        if (res.data.code === 872) {
          // console.log(res.data.data)
          context.commit(types.mutations.setInfo, {
            details: res.data.data
          })
          // console.log(res.data.data)
          resolve({
            state: true,
            info: res.message
          })
        } else {
          resolve({
            state: false,
            info: res.data.message
          })
        }
      }).catch(function (err) {
        reject(err)
      })
    })
  },

  [types.actions.setMenuInfo]: (context, data) => {
    context.commit(types.mutations.setInfo, data)
  },
  [types.actions.addToCart]: (context, data) => {
    context.commit(types.mutations.addCart, data)
  }

}

const mutations = {
  [types.mutations.setInfo]: (state, datas) => {
    Object.assign(state, datas)
  },

  [types.mutations.clearCart]: (state) => {
    state.add = []
  },

  [types.mutations.addOrder]: (state, data) => {
    state.orderList.append(data)
  },

  [types.mutations.addCart]: (state, data) => {
    var record = state.add.find(function (elem) {
      return elem.dishId === data.dishId
    })
    if (!record) {
      state.add.push(data)
    } else {
      record.dishCount = data.dishCount
    }
    state.curChange = data
    // console.log(state.curChange.dishCount)
  }

}

export default {
  state,
  actions,
  getters,
  mutations
}
