import state from "./state"

const getters = {
  // 过滤需要的标签页数据
  allTypeList:state=>{   
        return state.allTypeList.slice(0,10)
  }
}
export default getters
