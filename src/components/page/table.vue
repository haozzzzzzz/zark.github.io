<template>
  <div>
    <div class="container-header">
      <i class="el-icon-edit-outline pr10"></i>基础表格
    </div>
    <div class="container">
      <div class="Header-Box">
        <el-button type="primary" class="mr20" icon="el-icon-delete">批量删除</el-button>
        <el-select
          v-model="value"
          filterable
          placeholder="请选择"
          style="width:120px"
          class="mr20"
          clearable
        >
          <el-option
            v-for="item in tableData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input
          suffix-icon="el-icon-search"
          style="width:300px"
          class="mr20"
          v-model="searchValue"
          clearable
        ></el-input>
        <el-button class="el-icon-search" type="primary">搜索</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%" @selection-change='handleSelectionChange'>
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" width="55"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="money" label="账户余额">
          <template slot-scope="scope">
            <span>￥{{scope.row.money}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="thumb" label="头像" align="center" width="55">
          <template slot-scope="scope">
            <el-image :src="scope.row.thumb" :preview-src-list="[scope.row.thumb]"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" width="180px"></el-table-column>
        <el-table-column prop="state" label="状态" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.state=='成功'" type="success">{{scope.row.state}}</el-tag>
            <el-tag v-else type="danger">{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="注册时间" align="center"></el-table-column>
        <el-table-column prop="state" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              class="el-icon-edit"
              @click="handleEdit(scope.$index,scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              class="el-icon-delete"
              style="color:red"
              @click="handleDelete(scope.$index,scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="修改信息" :visible.sync="dialogShow" width="30%">
        <el-form ref="form" :data="from" :model="from" label-width="70px">
          <el-form-item label="用户名">
            <el-input style="width:300px" v-model="from.name" />
          </el-form-item>
          <el-form-item label="地址">
            <el-input style="width:300px" v-model="from.address" />
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogShow = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit">确定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: {
        name: '',
        address: ''
      },
      tableData: [],
      options: [
        {
          value: 'index1',
          label: '湖南'
        },
        {
          value: 'index2',
          label: '湖北'
        },
        {
          value: 'index3',
          label: '广东'
        }
      ],
      value: '',
      searchValue: '',
      idindex: -1,
      dialogShow: false
    }
  },
  methods: {
    // 获取表格信息
    queryTableList() {
      this.$http.get('/table/tableInfo').then(res => {
        if (res.status === 200) {
          this.tableData = res.data.list
          console.log(this.tableData)
        }
      })
    },
    // 编辑表格信息
    handleEdit(index, row) {
      console.log(index, '===', row)
      this.from = row
      this.idindex = index
      this.dialogShow = true
    },
    // 保存编辑
    saveEdit() {
      this.dialogShow = false
      this.$set(this.tableData, this.idindex, this.from)
      this.$message.success(`第${this.idindex + 1}行修改成功`)
    },
    // 删除表格的某一项
    handleDelete(index, row) {
      this.$confirm('确定要进行删除操作吗?', '提示', {
        type: 'warning'
      })
        .then(() => {
          this.tableData.splice(index, 1)
          this.$message.success('删除成功');
          console.log(index, row)
        })
        .catch(() => {
          console.log('取消的操作')
        })
    },
    // 表格前勾选时,触发的事件
    handleSelectionChange(val) {
        console.log(val)
    }
  },
  created() {
    this.queryTableList()
  }
}
</script>
<style lang="less" scoped>
.Header-Box {
  display: flex;
  margin-bottom: 10px;
}
</style>
