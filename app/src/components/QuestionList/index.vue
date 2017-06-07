<template>
  <div class="question-list">
    <div class="question-item">
      <section>
        <h4>http状态码有哪些？</h4>
        <p>浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。</p>
      </section>
      <aside>
        <span><img src="https://sfault-avatar.b0.upaiyun.com/168/395/1683951604-58f63e75f3daa_big64" /> 1天前 </span>
        <span>100/1000</span>
      </aside>
    </div>

    <div class="question-item">
      <section>
        <h4>http状态码有哪些？</h4>
        <p>浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。</p>
      </section>
      <aside>
        <span><img src="https://sfault-avatar.b0.upaiyun.com/168/395/1683951604-58f63e75f3daa_big64" /> 1天前 </span>
        <span>100/1000</span>
      </aside>
    </div>

    <div class="question-item">
      <section>
        <h4>http状态码有哪些？</h4>
        <p>浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。</p>
      </section>
      <aside>
        <span><img src="https://sfault-avatar.b0.upaiyun.com/168/395/1683951604-58f63e75f3daa_big64" /> 1天前 </span>
        <span>100/1000</span>
      </aside>
    </div>
    <div class="question-item">
      <section>
        <h4>http状态码有哪些？</h4>
        <p>浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。</p>
      </section>
      <aside>
        <span><img src="https://sfault-avatar.b0.upaiyun.com/168/395/1683951604-58f63e75f3daa_big64" /> 1天前 </span>
        <span>100/1000</span>
      </aside>
    </div>
    <div class="question-item">
      <section>
        <h4>http状态码有哪些？</h4>
        <p>浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。</p>
      </section>
      <aside>
        <span><img src="https://sfault-avatar.b0.upaiyun.com/168/395/1683951604-58f63e75f3daa_big64" /> 1天前 </span>
        <span>100/1000</span>
      </aside>
    </div>


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
.question-list{
  .question-item{
    background: #fff;
    margin-top: 0.1rem;
    padding: 0.1rem;
    padding-bottom: 0;
    .user-infor{
      display: -webkit-box;
      -webkit-box-align: center;
      img{
        display: block;
        width: 0.3rem;
        border-radius: 100%;
      }
      span{
        display: block;
        font-size: 0.12rem;
        color: #f00;
        margin-left: 0.1rem;
      }
    }
    section{
      h4{
        font-size: 0.14rem;
        line-height: 0.3rem;
      }
      p{
        font-size: 0.12rem;
        color: #888;
        height: .36rem;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    aside{
      display: -webkit-box;
      -webkit-box-pack: justify;
      line-height: 0.3rem;
      color: #666;
      span{
        display: block;
        font-size: 0.12rem;
        img{
          width: 0.2rem;
          display: inline-block;
          vertical-align: middle;
          margin-top: -1px;
          border-radius: 100%;
        }
      }
    }
  }
}
</style>
