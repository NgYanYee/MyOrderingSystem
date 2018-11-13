import namespace from '@/utils/namespace.js'

export default namespace('menu', {
  actions: [
    'getSellerInfo',
    'getMenuInfo',
    'setMenuInfo',
    'addToCart',
    'getOrderInfo',
    'createOrder',
    'getOrderDetail'
  ],
  mutations: [
    'setInfo',
    'clearCart',
    'addCart'
  ]
})
