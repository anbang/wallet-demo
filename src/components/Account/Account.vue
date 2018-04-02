<template>
  <div class="hello">
    <h1>当前账号 {{ currentAcc }} <a href="#">发起转账</a></h1>
    <h2>余额：{{accBalance}} Eth</h2>
    <ul>
      <li>交易记</li>
    </ul>
    <!-- <p>{{balaceVal}}</p> -->

  </div>
</template>

<script>
import web3 from '@/global/web3.js'

export default {
  name: 'Account',
  data () {
    return {
      msg: '账号',
      currentAcc:this.$route.params.id,
      balaceVal:web3.eth.getBalance(this.$route.params.id).toNumber()
    }
  },
  computed:{
    accBalance:function(){
      var balaceWei = web3.eth.getBalance(this.currentAcc).toNumber();
      var balaceVal = web3.fromWei(balaceWei, 'ether')
      return balaceVal;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
