<template>
  <div class="search-bar">
    <input class="text" placeholder="搜索问题" type="text">
    <div class="btn">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-bar{
  width: 100%;
  height: 0.44rem;
  background: #242424;
  padding: 0.08rem 0.1rem;
  display: -webkit-box;
  box-sizing: border-box;
  -webkit-box-align:center;
  input{
    display: block;
    -webkit-box-flex:1;
    height: 100%;
    background: #000;
    border: 0;
    color: #fff;
    padding-left: 0.1rem;
  }
  div{
    color: #fff;
    font-size: 0.14rem;
    padding-left: 0.1rem;
    height: 100%;
    line-height: 0.28rem;
  }
}
</style>
