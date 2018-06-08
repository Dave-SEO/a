<template>
  <div class="block">
    <!-- <el-tree :data="data1"  show-checkbox  node-key="id"  default-expand-all :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button type="text" size="mini" @click="() => append(data)">
            Append
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree> -->
    <!-- <Tree :data="data1"></Tree> -->
      <ul id="treeDemo" class="ztree"></ul>
  </div>
</template>

<script>
// import { tree } from "@/server/tree.js"
let id = 1000

export default {
  data () {
    // const data = [
    //   { id: 1,
    //     label: '一级 1',
    //     children: [
    //       {
    //         id: 4, label: '二级 1-1'
    //       },
    //       {id: 6,
    //         label: '二级 2-2',
    //         children: [
    //           {id: 9, label: '三级 1-1-1'},
    //           {id: 10, label: '三级 1-1-2'}
    //         ]
    //       }]
    //   }
    // ]
    return {
      data1: []
    //   data: JSON.parse(JSON.stringify(this.data1))
    }
  },
  mounted () {
    this.$nextTick(() => {
      let that = this
      fetch('http://127.0.0.1:8888', {
        headers: new Headers({
          'Accept': 'application/js'
        })

      }).then(function (res) {
        res.json().then(function (data) {
          //   var zTreeObj = null
          // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
          var setting = {}
          // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
          // zTreeObj =
          $.fn.zTree.init($('#treeDemo'), setting, that.getTrees(JSON.parse(data), 0))
          console.log($('#treeDemo'))
          that.data1 = that.getTrees(JSON.parse(data), 0)
        })
      })
    })
  },
  methods: {
    append (data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    getTrees (list, parentId) {
      /**
         * 树状的算法
         * @params list     代转化数组
         * @params parentId 起始节点
         */
      let items = {}
      // 获取每个节点的直属子节点，*记住是直属，不是所有子节点
      for (let i = 0; i < list.length; i++) {
        let key = list[i].parent_id
        if (items[key]) {
          items[key].push(list[i])
        } else {
          items[key] = []
          items[key].push(list[i])
        }
        // console.log(items)
      }
      // console.log(items)
      return this.formatTree(items, parentId)
    },
    formatTree (items, parentId) {
      /**
         * 利用递归格式化每个节点
         */
      let result = []
      if (!items[parentId]) {
        return result
      }
      for (let t of items[parentId]) {
        // console.log(t)
        // console.log(t.id)
        t.children = this.formatTree(items, t.id)
        result.push(t)
      }
      // console.log(result)
      return result
    },
    remove (node, data) {
      console.log('node', node)
      console.log('data', data)
      const parent = node.parent
      console.log('parent', parent)
      const children = parent.data.children || parent.data
      console.log('parent.data.children', parent.data.children)
      console.log('parent.data', parent.data)
      const index = children.findIndex(d => d.id === data.id)
      //   function (d){
      //       return  d.id === data.id
      //   }
      console.log('index', index)
      // children.splice(index, 1);
    }
  }
}
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
