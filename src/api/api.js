// axios
import request from '@/utils/request'

// 获取标签页
export function getAllType() {
  return request({
    url: 'GetAllType',
    method: 'get',
  })
}

// 获取列表页数据
export function getListData(params) {
  return request({
    url: `v2/GetAllInfoGzip`,
    method: 'get',
    params:params
  })
}
