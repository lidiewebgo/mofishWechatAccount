<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <a :href="item.Url" v-for="item in list" :key="item.id">
               <van-cell  :title="item.Title" />
          </a>
       
       
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      params: {
        id: this.id,
        page: 0
      },
      isFist: 1,
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  props: {
    id: String
  },
  computed: {
    ...mapState(['listData'])
  },
  mounted() {
    // this.getListData(this.params).then(() => {
    //   this.list = this.listData
    //   //   console.log(this.list)
    //   console.group('List.vue:mounted:', this.page)
    // })
  },
  methods: {
    ...mapActions(['getListData']),
    onLoad() {
      setTimeout(() => {
        this.loading = false
        this.getListData(this.params).then(() => {
          this.list = [...this.list, ...this.listData]
          console.group('----')
          console.log(this.list)
          console.log(this.listData)
          this.params.page++
        })
      }, 100)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      if (this.refreshing) {
        this.params.page = 0
        this.list = []
        this.refreshing = false
        // this.getListData(this.params).then(() => {
        //   this.list = [...this.list, ...this.listData]

        //   //   console.log(this.list)
        //   //    this.finished = true;

        // })
        this.onLoad()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>