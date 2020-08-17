import {getAllType,getListData} from '@/api/api'
const actions = {
  getAllType({
    commit
  }) {
    return new Promise((resolve, reject) => {
        getAllType().then(res => {
        console.log(res);
        if (res.Code === 0) {
          commit('SET_ALLTYPS', res.Data["全部"]);
          resolve();
        } else {
          reject();
        }
      });
    });
  },
  getListData({
    commit
  },params) {
    return new Promise((resolve, reject) => {
        getListData(params).then(res => {
        // console.log(pageSize);
        if (res.Code === 0) {
          commit('SET_LISTDATA', res.Data.data);
          resolve();
        } else {
          reject();
        }
      });
    });
  }
}
export default actions;
