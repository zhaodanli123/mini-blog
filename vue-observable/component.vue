<template>
  <div>
    {{ userInfo.name }}
  </div>
</template>
<script>
import { store, mutations } from './store'
export default {
  computed: {
    userInfo() {
      return store.userInfo
    }
  },
  created() {
    mutations.setUserInfo({
      name: '子君'
    })
  }
}
</script>
