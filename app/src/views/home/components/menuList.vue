<template>
  <nav class="menu-list">
    <div class="content">
      <a href="javascript:;" v-for="item in menuJson">{{item.type}}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuList',
  props: ["menuJson"],
  data () {
    return {
      menuList: [
        { name: '推荐', id: 0 },
        { name: 'Html', id: 1 },
        { name: 'Css', id: 2 },
        { name: 'JavaScript', id: 3 },
        { name: 'Ajax', id: 0 },
        { name: 'Json', id: 0 },
        { name: 'Vue', id: 0 },
        { name: 'React', id: 0 },
        { name: 'Angular', id: 0 },
        { name: '小程序', id: 0 },
        { name: '工具', id: 0 },
        { name: '优化', id: 0 },
        { name: 'Html5Api', id: 0 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.menu-list{
  width: 100%;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ececec;
  .content{
    display: -webkit-box;
    a{
      display: block;
      padding: 0.1rem;
      color: #000;
      font-size: 0.12rem;
    }
  }
}
</style>
