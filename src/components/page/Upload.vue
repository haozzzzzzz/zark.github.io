<template>
  <div>
    <div class="container-header">
      <i class="el-icon-s-data pr10"></i> 文件上传
    </div>
    <div class="container">
      <h3 class="mb20">支持拖拽上传</h3>
      <el-upload
        class="upload-demo"
        drag
        :auto-upload="false"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <h3 class="mb20 mt20">支持裁剪上传</h3>
      <div class="crop-demo">
        <img :src="ShowIMG" class="pre-img" />
        <div class="crop-demo-btn">
          选择图片
          <input
            class="crop-input"
            type="file"
            name="image"
            accept="image/*"
            @change="setImage($event,1)"
          />
        </div>
      </div>

      <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
        <VueCropper ref="cropper" :src="imgSrc" style="width: 100%; height: 300px;" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" ></VueCropper>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelCrop">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs'
export default {
  components: {
    VueCropper
  },
  data() {
    return {
      ShowIMG: '',
      imgSrc: '',
      dialogVisible: false,
      default: require('../../assets/images/avatar.jpg'),
      option: {
        // outputSize: 1, // 裁剪生成图片的质量 0.1 - 1
        // outputType: 'jpg', // 裁剪生成图片的格式 jpeg || png || webp
        // canScale: true, // 图片是否允许滚轮缩放 默认true
        // autoCrop: false, // 是否默认生成截图框 默认false
        // canMove: true, // 上传图片是否可以移动 默认true
        // autoCropWidth: '300px', //  默认生成截图框宽度容器的80%0~max
        // autoCropHeight: '300px', //  默认生成截图框高度容器的80%0~max
        fixedBox: false, // 固定截图框大小不允许改变falsetrue | false
        original: false, // 上传图片按照原始比例渲染falsetrue | false
        // infoTrue: true, // 为展示真实输出图片宽高 false展示看到的截图框宽高falsetrue | false
        // centerBox: true, // 截图框是否被限制在图片里面falsetrue | false
        // canMoveBox: true, // 截图框能否拖动ruetrue|false
        fixed: false // 是否开启截图框宽高固定比例
        // fixedNumber: [750, 256] // 截图框的宽高比例 [宽度, 高度]
      },
      url: ''
    }
  },
  methods: {
    setImage(e, num) {
      const file = e.target.files[0]
      if (!file.type.includes('image/')) {
        return
      }
      const reader = new FileReader()
      reader.onload = event => {
        this.imgSrc = event.target.result
        this.$refs.cropper && this.$refs.cropper.replace(event.target.result)
      }
      reader.readAsDataURL(file)
      this.dialogVisible = true
      console.log(e, num)
    },
    cropImage() {
      this.ShowIMG = this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    cancelCrop() {
        this.ShowIMG = this.defaultSrc
      this.dialogVisible = false
      console.log('取消按钮')
    }
  },
  created() {
    this.ShowIMG = this.default
  }
}
</script>
<style lang="less" scoped>
#cropper {
  margin: 0 auto;
  height: 300px;
  width: 300px;
}
.mb20 {
  margin-bottom: 20px;
}
.mt20 {
  margin-top: 20px;
}
.pre-img {
  width: 100px;
  height: 100px;
  background: #f8f8f8;
  border: 1px solid #eee;
  border-radius: 5px;
}
.crop-demo {
  display: flex;
  align-items: flex-end;
}
.crop-demo-btn {
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
}
.crop-input {
  position: absolute;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
</style>
