<template>
  <div class="page-czr-home">
    <h1>{{ msg }} </h1>
    <br>
        <input type="file" id='userImport' enctype="multipart/form-data">
        <input type="button" value="import Account" @click='importAcc'>

    <br> <br>
    <h2>默认账号 {{mainAcc}}</h2>
    <br>
    <p>账号列表</p>
    <ul v-for="account in accounts">
       <li>
         <router-link :to="'/account/' + account">{{account}}</router-link>
        </li> 
    </ul>

    
    <br><br>
    <form action="">
      <div>
        <label for="">创建账号</label>
  <input v-model="password" type="password">
    <input type="button" value="Create" @click='createAcc'>
      </div>
    </form>



  </div>

</template>

<script>
// import web3 form '@'
import web3 from '@/global/web3.js'
const fs = require('fs')




export default {
  name: 'Bodyer',
  data () {
    return {
      msg: '欢迎来到CZR钱包的主界面',
      password:"",
      mainAcc:web3.eth.coinbase,
      accounts: web3.personal.listAccounts    
    }
  },
  computed:{
    test:function(){
      return [1,2,3,4,5]
    }
  },
  methods:{
    createAcc:function(){
      // alert("create")
      var account_three = web3.personal.newAccount(this.password);
      console.log(account_three);
      this.accounts = web3.personal.listAccounts
      alert('OK')
    },
    importAcc:function(){
      // alert("open")
      // web3.personal.importRawKey('0xff3d7ee787cE86641264920Baadff8DaaB735A2a')
      //{name: "UTC--2017-11-28T11-59-01.358663700Z--93fce2c3985beb2ab9df590382141479ff159759", path: "/Users/broszhu/Downloads/西溪地址/UTC--2017-11-28T11-5…663700Z--93fce2c3985beb2ab9df590382141479ff159759", lastModified: 1522665488000, lastModifiedDate: Mon Apr 02 2018 18:38:08 GMT+0800 (CST), webkitRelativePath: ""…}
      var userImport=document.getElementById("userImport").files[0];
      var userImportPath=userImport.path;
      console.log(userImportPath);

      fs.readFile(userImportPath,"utf8",function(err,data){
            // 读取文件失败/错误
            if (err) {
              throw err;
            }
            // 读取文件成功
            console.log('utf-8: ', data.toString());
      });

      // 同步读取
      // var data = fs.readFileSync(userImportPath,"utf-8");
      // console.log("同步读取: " + data.toString());
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
.page-czr-home{
  padding: 20px;
  text-align: left;
}
</style>
