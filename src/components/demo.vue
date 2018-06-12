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
      <a id="addParent" href="#" title="增加父节点" onclick="return false;" @click="add(true)">增加父节点</a>
  </div>
</template>

<script>
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
      data1: [],
      newCount: 1
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

      }).then((res) => {
        res.json().then((data) => {
          //   var zTreeObj = null
          // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
          var setting = {
            data: {
              parent: true
            },
            check: {
              enable: true
            },
            view: {
              showLine: true, // 显示节点之间的连线。
              selectedMulti: false // 允许同时选中多个节点。
            },
            callback: {
              onCheck: this.onCheck,
              beforeClick: this.beforeClick,
              onClick: this.onClick,
              beforeCheck: this.zTreeBeforeCheck
            }
          }
          // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
          // zTreeObj =
          /* eslint-disable */
          $.fn.zTree.init($('#treeDemo'), setting, that.getTrees(JSON.parse(data), 0))
          // console.log($('#treeDemo'))
          that.data1 = that.getTrees(JSON.parse(data), 0)
        })
      })
    })
  },
  methods: {
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
    onCheck(){
       var treeObj = $.fn.zTree.getZTreeObj("treeDemo");  //获取树对象
       var nodes = treeObj.getChangeCheckedNodes();       //获取勾选状态改变的节点
      //  console.log(nodes)
       let designIds = []
       $.each(nodes, function (i, item) {
                designIds.push(item.id);                       //将状态改变的节点id输出到数组
                   item.checkedOld = item.checked;                //这句话很关键，将节点的初始状态置为当前状态。否则每次勾选操作获取状态改变节点时只会跟树初始化的状态相比较。
        })
        // console.log(designIds)
    },
    beforeClick (treeId, treeNode) {
      var zTree = $.fn.zTree.getZTreeObj("treeDemo");
			zTree.checkNode(treeNode, !treeNode.checked, null, true);
			return false;
    },
    onClick(e, treeId, treeNode){
      console.log('treeNode.name',treeNode.name);   //获取当前结点上的相关属性数据，执行相关逻辑
    },
    zTreeBeforeCheck(treeId, treeNode){
      var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
      treeObj.checkAllNodes(false);
      console.log(treeId)
      console.log(treeNode)
    },
     add(Parent) {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			isParent = Parent,
			nodes = zTree.getSelectedNodes(),
			treeNode = nodes[0];
			// alert(isParent)
			if (treeNode) {
				treeNode = zTree.addNodes(treeNode, {id:(100 + this.newCount), pId:treeNode.id, isParent:isParent, name:"new node" + (this.newCount++)});
			} else {
				treeNode = zTree.addNodes(null, {id:(100 + this.newCount), pId:0, isParent:isParent, name:"new node" + (this.newCount++)});
			}
			if (treeNode) {
				zTree.editName(treeNode[0]);
			} else {
				alert("叶子节点被锁定，无法增加子节点");
			}
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
  #addParent{
    color: #25a4bb;
    text-decoration: none;
    position: absolute;
    top: 30px;
    left: 100px;
  }
     
</style>
