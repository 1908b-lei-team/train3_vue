<template>
    <div>
      <div style="margin-left: 40%;margin-top: 30px">
      <el-form :model="attestation" status-icon :rules="rules" ref="ruleForm" label-width="auto" class="demo-ruleForm">
        <el-form-item label="真实姓名" prop="realName" style="width:240px">
          <el-input v-model="attestation.realName" placeholder="请输入真实姓名" style="width:240px"></el-input>
        </el-form-item>

        <el-form-item label="身份证号码" prop="idNumber" style="width:240px">
          <el-input v-model="attestation.idNumber" autocomplete="off" placeholder="请输入身份证号码" style="width:240px"></el-input>
        </el-form-item>
        <el-form-item style="width:240px">
          <el-button type="primary" @click="playVideo">人脸注册</el-button>
        </el-form-item>
        <div v-show="flag1">
          <div id="face_login" class="body-bg">
            <div id="app">
              <div v-show="showContainer">
                <video ref="refVideo" id="video" width="800" height="400" preload autoplay loop muted></video>
                <canvas ref="refCanvas" id="canvas" width="800" height="400"></canvas>
              </div>
              <h2 class="scanTip">{{scanTip}}</h2>
              <img v-show="!showContainer" :src="imgUrl" width="800" height="400" class="imgpre"/>
            </div>
          </div>
        </div>

        <el-form-item style="width:240px">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
</template>

<script>
    export default {
          name: "RealName",

      data() {
        /*
          var checkName = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入真实姓名'));
            } else {
              if (this.attestation.realName !== '') {
                var self = this;
                this.$axios.post("http://localhost:8085/attestation/checkRealName",this.$qs.stringify({"realName":this.attestation.realName})).then(function (res) {
                  if (res.data.code == 200) {
                    callback();
                  }else {
                    callback(new Error(''));
                  }
                })
              }
            }
         };
        */

        var checkIdNumber = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入身份证号'));
          } else {
            if (this.attestation.idNumber !== '') {
              var self = this;
              this.$axios.post("/api/accountApi/attestation/checkIdNumber2",this.$qs.stringify({"idNumber":this.attestation.idNumber})).then(function (res) {
                if (res.data.code == 1000) {
                  callback();
                }else {
                  callback(new Error('此身份证已绑定其他用户'));
                }
              })
            }
          }
        };

        return {
          showContainer: true,   // 显示
          flag1: false,   // 显示
          tracker: null,
          tipFlag: false,         // 提示用户已经检测到
          flag: false,            // 判断是否已经拍照
          context: null,          // canvas上下文
          removePhotoID: null,    // 停止转换图片
          scanTip: '人脸识别中...', // 提示文字
          imgUrl: '',              // base64格式图片
          canvas: null,
          video: null,
          streamIns: null,        // 视频流
          attestation: {
            realName: '',
            idNumber: '',
          },

          rules: {
            realName: [
              { required: true, message: '请输入真实姓名', trigger: 'blur' }
            ],
            idNumber: [
              { validator: checkIdNumber, trigger: 'blur' }
            ]
          }


        }
      },
      methods: {
        getUserMedia(constrains, success, error) {
          if (navigator.mediaDevices.getUserMedia) {
            // 最新标准API
            navigator.mediaDevices.getUserMedia(constrains).then(success).catch(error);
          } else if (navigator.webkitGetUserMedia) {
            // webkit内核浏览器
            navigator.webkitGetUserMedia(constrains).then(success).catch(error);
          } else if (navigator.mozGetUserMedia) {
            // Firefox浏览器
            navagator.mozGetUserMedia(constrains).then(success).catch(error);
          } else if (navigator.getUserMedia) {
            // 旧版API
            navigator.getUserMedia(constrains).then(success).catch(error);
          } else {
            this.scanTip = "你的浏览器不支持访问用户媒体设备"
          }
        },
        success(stream) {
          this.streamIns = stream
          // webkit内核浏览器
          this.URL = window.URL || window.webkitURL
          if ("srcObject" in this.$refs.refVideo) {
            this.$refs.refVideo.srcObject = stream
          } else {
            this.$refs.refVideo.src = this.URL.createObjectURL(stream)
          }
          this.$refs.refVideo.onloadedmetadata = e => {
            this.$refs.refVideo.play()
          }
        },
        playVideo () {
          this.flag1 = true;
          this.getUserMedia({
            video: {
              width: 800, height: 400, facingMode: "user"
            }     /* 前置优先 */
          }, this.success, this.error)

          this.video = document.getElementById('video')
          this.canvas = document.getElementById('canvas')
          this.context = this.canvas.getContext('2d')
          this.tracker = new tracking.ObjectTracker('face')
          this.tracker.setInitialScale(4)
          this.tracker.setStepSize(2)
          this.tracker.setEdgesDensity(0.1)

          tracking.track('#video', this.tracker, {camera: true})

          this.tracker.on('track', this.handleTracked)
        },

        handleTracked (event) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
          if (event.data.length === 0) {
            this.scanTip = '未识别到人脸'
          } else {
            if (!this.tipFlag) {
              this.scanTip = '识别成功，正在拍照，请勿乱动~'
            }
            // 1秒后拍照，仅拍一次
            if (!this.flag) {
              this.scanTip = '拍照中...'
              this.flag = true
              this.removePhotoID = setTimeout(() => {
                  this.tackPhoto()
                  this.tipFlag = true
                },
                2000
              )
            }
            event.data.forEach(this.plot)
          }
        },

        plot (rect) {
          this.context.strokeStyle = '#eb652e'
          this.context.strokeRect(rect.x, rect.y, rect.width, rect.height)
          this.context.font = '11px Helvetica'
          this.context.fillStyle = '#fff'
          this.context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11)
          this.context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22)
        },

        // 拍照
        tackPhoto () {
          this.context.drawImage(this.$refs.refVideo, 0, 0, 800, 400)
          // 保存为base64格式
          this.imgUrl = this.saveAsPNG(this.$refs.refCanvas)
          var formData = new FormData()
          formData.append('file', this.imgUrl)
          formData.append("groupId", "101");
          formData.append("name", this.attestation.realName);
          this.scanTip = '登录中，请稍等~'
          alert('开始')
          //axios.post(`http://localhost:8091/faceSearch`, formData)
          this.$axios.post(`api/face/face/faceAdd`, formData)
            .then(res => {
              console.log(res.data)
              if(res.data.code == 1000){
                alert("添加成功")
              }else{
                alert(res.data.message)
              }
              this.flag1 = false;
            }).catch(function (error) {
            console.log(error)
          })

          this.close()
        },

        // 保存为png,base64格式图片
        saveAsPNG (c) {
          return c.toDataURL('image/png', 0.3)
        },

        // 关闭并清理资源
        close () {
          this.video.srcObject.getTracks()[0].stop()
          this.flag = false
          this.tipFlag = false
          this.showContainer = false
          this.tracker && this.tracker.removeListener('track', this.handleTracked) && tracking.track('#video', this.tracker, {camera: false})
          this.tracker = null
          this.context = null
          this.scanTip = ''
          clearTimeout(this.removePhotoID)
          if (this.streamIns) {
            this.streamIns.enabled = false
            this.streamIns.getTracks()[0].stop()
            this.streamIns.getVideoTracks()[0].stop()
          }
          this.streamIns = null
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var self = this;
              this.$axios.post("/api/accountApi/attestation/realNameAuthentication",this.$qs.stringify(this.attestation)).then(function (res) {
                if (res.data.code == 1000) {
                  self.$router.push("/account")
                }else {
                  console.log(res.data.data);
                }
              })
            } else {
              console.log('error submit!!');
              alert(valid)
              return false;
            }
          });
          ;

        },


      }


    }
</script>

<style scoped>
  @import "../assets/css/face.css";

  video, canvas {
    margin: 200px auto;
    position: absolute;
    left: 0;
    right: 0;
  }

  .scanTip {
    text-align: center;
    color: white;
    margin: 0px auto;
    font-size: 18px;
  }
</style>
