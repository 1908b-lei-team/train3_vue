<template>
  <div class="note" :style ="note">
    <!--视频-->
      <div class="video-content" style="width: 700px;height: 500px;float: left;margin-left: 299px">
        <div class="video-player-content">

          <video-player class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions">
          </video-player>
        </div>
      </div>
    <!--日历-->
    <div  style="width: 500px;height: 100px;float: right">
        <el-calendar>
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template
            slot="dateCell"
            slot-scope="{date, data}">
            <p> <!--这里原本有动态绑定的class，去掉-->
              {{ data.day.split('-').slice(1).join('-') }}<br /> {{dealMyDate(data.day)}}
            </p>
          </template>
        </el-calendar>
      </div>
    <!--字体-->
    <div style="margin-right: 290px">
      <div class="textBox">
        <transition name="slide">
          <p class="text" :key="text.id"><font style="font-size: 22px">{{text.val}}</font></p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  //main.js 与 组件中都要引用
  import { videoPlayer } from 'vue-video-player'
  import 'video.js/dist/video-js.css'
    export default {
        name: "p2p_llk_video",
        components: {videoPlayer},
      data() {
        return {
          textArr: [
            '恒丰银行股份有限公司关于披露2020年上半年净稳定资金比例的公告',
            '恒丰银行股份有限公司关于披露2020年上半年资本构成相关信息的公告',
            '我行电子信贷合同专用章与我行的实物印章具有同等法律效力。',
            '贷款市场报价利率报价行应于每月20日（遇节假日顺延）9时前',
          ],
          number: 0,
          resDate: [
            {"date":"2020-8-18","content":"放假"},
            {"date":"2019-12-26","content":"去交电费"},
            {"date":"2019-11-26","content":"去学习vue"}
          ],
          note: {
             backgroundImage: "url(" + require("../../assets/b9034dce678bd10b97212608ec6d1f92.jpg") + ")",
            backgroundSize: "1600px auto",
            height:'99vh',
          },
          playerOptions: {
            playbackRates: [0, 5, 1.0, 1.5, 2.0],
            // 如果为true,浏览器准备好时开始回放。
            autoplay: false,
            // 默认情况下将会消除任何音频。
            muted: false,
            // 是否视频一结束就重新开始。
            loop: false,
            // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            preload: 'auto',
            language: 'zh-CN',
            // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            aspectRatio: '16:9',
            // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            fluid: true,
            sources: [{
              // type: "video/mp4", // 类型
              //src: 'https://video.pearvideo.com/mp4/short/20200209/cont-1650197-14888002-hd.mp4' // url地址
              src: 'https://video.pearvideo.com/mp4/third/20181112/cont-1474519-10854785-153448-hd.mp4' // url地址

            }],
            // 封面地址
            poster: '',
            // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            notSupportedMessage: '此视频暂无法播放，请稍后再试',
            controlBar: {
              timeDivider: true, // 当前时间和持续时间的分隔符
              durationDisplay: true, // 显示持续时间
              remainingTimeDisplay: false, // 是否显示剩余时间功能
              fullscreenToggle: true // 是否显示全屏按钮
            }
          }
        }
      },
      mounted () {
        this.startMove()
      },
      computed: {
        text () {
          return {
            id: this.number,
            val: this.textArr[this.number]
          }
        }
      },
      methods:{
        startMove () {
          // eslint-disable-next-line
          let timer = setTimeout(() => {
            if (this.number === 3) {
              this.number = 0;
            } else {
              this.number += 1;
            }
            this.startMove();
          }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
        },
        dealMyDate(v) {
          console.log(v)
          let len = this.resDate.length
          let res = ""
          for(let i=0; i<len; i++){
            if(this.resDate[i].date == v) {
              res = this.resDate[i].content
              break
            }
          }
          return res
        }
      }
    }
</script>

<style scoped>
  h2 {
    padding: 20px 0
  }
  .textBox {
    width: 100%;
    height: 70px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
</style>
