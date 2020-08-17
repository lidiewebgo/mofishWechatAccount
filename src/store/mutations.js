import * as types from './mutation-types';

const mutations = {
  // 标签页数据
  [types.SET_ALLTYPS](state, allTypeList) {
    state.allTypeList = allTypeList;
  },
  // 列表页数据
  [types.SET_LISTDATA](state, listData) {
    state.listData = listData;
  },
}
export default mutations;
