// 走vuex的dispatch请求
import * as catelogApi from '../../utils/api'
const catelog = {
  state: {
    statusObjList: {},
    searchType: {
      1: '勾选',
      2: '不勾选'
    },
    statusList: [{
      type: 1,
      name: '订阅完成'
    },
    {
      type: 2,
      name: '取消订阅'
    }
    ],
    statusColorObj: {
      '警告': 'warnning',
      '默认': 'default',
      '成功': 'success',
      '失败': 'error'
    }
  },
  mutations: {
    SET_CATA_LOG_STATUS_OBJ: (state, catelogStatusList) => {
      // console.log(state, '===', catelogStatusList);
      var statusObjList = {}
      catelogStatusList.map((_item) => {
        statusObjList[_item.code] = {}
        statusObjList[_item.code].text = _item.desc
        statusObjList[_item.code].status = state.statusColorObj[_item.code]
      })
      state.statusObjList = statusObjList
    }
  },
  actions: getActions()
}

function getActions() {
  var returnVal = {}
  console.log(catelogApi, '22222', [catelogApi]);
  [catelogApi].map(_apiObj => {
    Object.keys(_apiObj).forEach(_item => {
      console.log(_item, '333333333', returnVal[_item]);
      returnVal[_item] = ({ commit }, obj) => {
        // console.log(returnVal, '=====', obj);
        return new Promise((resolve, reject) => {
          // console.log(_apiObj[_item](obj), '=====', obj);
          _apiObj[_item](obj).then(response => {
            if (resolveList.hasOwnProperty(_item)) {
              resolve(resolveList[_item](response, commit))
            } else {
              resolve(response)
            }
          }).catch(error => {
            if (rejectList.hasOwnProperty(_item)) {
              reject(rejectList[_item(error, commit)])
            } else {
              reject(error)
            }
          })
        })
      }
    })
  })
  return returnVal
}

let resolveList = {
  // statusQuery(response, commit) {
  //   commit('SET_CATA_LOG_STATUS_OBJ', response.data)
  //   return response
  // }
}
let rejectList = {}
export default catelog
