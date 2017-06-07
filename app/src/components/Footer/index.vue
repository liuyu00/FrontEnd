<template>
  <footer class="footerNav">
    <router-link to="/home" active-class="active">
      <i>
        <img src="../../static/images/icons/home.png" class="icon" />
        <img src="../../static/images/icons/home-active.png" class="iconActive" />
      </i>
      <span>首页</span>
    </router-link>
    <router-link to="/share" active-class="active">
      <i>
        <img src="../../static/images/icons/share.png" class="icon" />
        <img src="../../static/images/icons/share-active.png" class="iconActive" />
      </i>
      <span>专题</span>
    </router-link>
    <router-link to="/zoom" active-class="active">
      <i>
        <img src="../../static/images/icons/zoom.png" class="icon" />
        <img src="../../static/images/icons/zoom-active.png" class="iconActive" />
      </i>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footerNav{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background: #fff;
  &:after{
    content:"";
    display: block;
    position: absolute;
    width: 200%;
    background: #ccc;
    height: 1px;
    top: 0;
    left: -50%;
    transform: scale(0.5);
  }
  a{
    display: block;
    padding: 5px 0;
    width: 0;
    -webkit-box-flex:1;
    text-align: center;
    color: #ccc;
    font-size: 12px;
    img{
      display: block;
      width: 20px;
      margin: 0 auto;
      &.iconActive{
        display: none;
      }
    }
    &.active{
      color: #000;
      img{
        display: none;
        &.iconActive{
          display: block;
        }
      }
    }

  }
}
</style>
