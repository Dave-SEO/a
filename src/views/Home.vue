<template>
    <div class="pages">
        <el-col :span="24" class="container">
            <el-container style="height:100%" >
            <el-aside width="199px"  class="leftView">
                <div class="logo">
                    <img src="../assets/images/nav_logo.png" alt="">
                </div>
                <div class="userCenter">
                    <img src="../assets/images/icon-header.png" alt="">
                    <h3>欢迎您,dave</h3>
                </div>
                <el-menu  @open="handleOpen"  @close="handleClose" :router='true'  :unique-opened='true' text-color='#ffff'  active-text-color='#64B0FF'  background-color="#0869CE" >
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>会议列表</template>
                        <el-menu-item-group>
                            <el-menu-item index="/MeetingAll" >全部会议</el-menu-item>
                            <el-menu-item index="/MeetingMy">我的会议</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="/MeetingCreate">
                        <i class="el-icon-menu"></i>
                        <span slot="title">创建会议</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
           <el-container class="sub-container">
               <router-view style="width:100%"></router-view>
           </el-container>
        </el-container>
        </el-col>
    </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang='less' coped>
.pages /deep/ .container,
.pages /deep/ .section {
  height: 100%;
}
.pages /deep/.el-menu{border:none;}
.leftView{
    background: url('../assets/images/nav_bg.png') no-repeat;
    background-size: 100% 100%;
}
.pages /deep/.el-header, .pages /deep/.el-footer {
    background-color: rgb(194, 195, 197);
    color: #333;
    line-height: 60px;
}
.pages /deep/ .sub-container{
    padding-left:30px;
}
.pages{
    background: #eff3f5;
    height: 100%;
    .logo{
      margin:20px 0 0 20px;
    }
    .userCenter{
        text-align: center;
        margin-top:42px;
        h3{
            margin-top:4px;
            font-size: 14px;
            color: #92C8FF;
            letter-spacing: -0.1px;
            text-align: center;
        }
    }
}
.fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
