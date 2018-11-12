import namespace from '@/utils/namespace.js'

export default namespace('menu', {
  actions: [
    'getSellerInfo',
    'getMenuInfo',
    'setMenuInfo',
    'addToCart',
    'getOrderInfo',
    'createOrder'
  ],
  mutations: [
    'setInfo',
    'clearCart',
    'addCart'
  ]
})
