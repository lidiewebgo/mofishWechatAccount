<template>
  <div id="home">
    <van-nav-bar title="我的老伙计!宁来啦~">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>

    <van-tabs v-model="active">
      <van-tab v-for="(value) in allTypeList" :key="value.id" :title="value.name">
       <List :id="value.id" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import List from "@/components/List"
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components:{List},
  data() {
    return {
      active: 0,
     
    }
  },
  computed: { ...mapGetters(['allTypeList']) },
  mounted() {
    this.getAllType()
  },
  methods: {
    ...mapActions(['getAllType']),
    search() {
      alert('薯片太累啦,搜索功能下个版本加上.')
    },

  }
}
</script>

<style lang="scss" scoped>

</style>