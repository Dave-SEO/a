<!-- 头部 -->
<template>
<header class='header'>
    <slot name="title"></slot>
</header>
</template>
<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      header: this.$router
    }
  },
  components: {},
  computed: {},
  mounted: {},
  methods: {}
}
</script>
<style lang='less' scoped>
    .header{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #ccc;
        .title{
            display: inline-block;
            height: 100%;
            font-size: 20px;
            color: #3D3D3D;
            box-sizing: border-box;
            border-bottom:3px solid #ccc;
            line-height: 80px;
            min-width: 84px;
        }
    }
</style>
