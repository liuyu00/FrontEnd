<template>
  <div class="page index-page">
    <SearchBar></SearchBar>
    <MenuList :menuJson="menuJson"></MenuList>
    <QuestionList></QuestionList>

    <FooterNav></FooterNav>
  </div>
</template>

<script>
import FooterNav from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import QuestionList from '@/components/QuestionList'

import MenuList from './components/MenuList.vue'


export default {
  name: 'hello',
  data () {
    return {
      menuJson:[]
    }
  },
  components: {
    FooterNav,
    SearchBar,
    MenuList,
    QuestionList
  },
  created () {
    let that = this;
    this.$axios.get('/getMenuList',{})
    .then(function (response) {
      var data = response.data;
      console.log(data)
      if( data.code == 1 ){
        that.menuJson = data.data;
      }else{
        that.menuJson = [];
      }
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
