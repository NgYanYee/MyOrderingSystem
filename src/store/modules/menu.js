import types from '../types/menu'
import {
  myAxios
  // IP
} from '../../utils/interaction'

const state = {
  storeName: '',
  storeImage: '',
  notice: '',
  productList: []
}

// const getters = {
//   studentPhoto(state) {
//     return IP + 'picture/' + state.studentId + '.jpg?' + state.refresh
//   }
// }

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

  [types.actions.setLeaderBoardInfo]: (context, data) => {
    context.commit(types.mutations.setInfo, data)
  }

}

const mutations = {
  [types.mutations.setInfo]: (state, datas) => {
    Object.assign(state, datas)
  }
}

export default {
  state,
  actions,
  mutations
}
