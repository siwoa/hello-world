<template>
<div class="wrap">
    <div id="app_from">
    <ul>
      <li>123</li>
      <li>123</li>
      <li>{{aaa.list[0].options.defaultValue}}</li>
      <li>123</li>
      <li @click="bbb">{{aaa.list[1].options.defaultValue}}</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
    <textarea rows="4" @focus="onFocus" @blur="onBlur"></textarea>
    <div class="footer">12312</div>
  </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            isIphoneX: false,
            aaa: {
                list:[
                    {
                        options: {
                            defaultValue: "qweqweqwe"
                        }
                    },
                    {
                        options: {
                            defaultValue: "btn"
                        }
                    }
                ]
            }
        }
    },
  methods: {
      bbb() {
          this.aaa.list[0].options.defaultValue = 'ewrwerwe'
      },
      // iPhoneX h5判断
    isIos() {
      let u = navigator.userAgent;
      return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    },
    _isIphoneX() {
      this.isIphoneX =
        /iphone/gi.test(navigator.userAgent) &&
        (screen.height === 812 && screen.width === 375);
    },
    onFocus() {
      if (this.isIos()) {
        let scrollH =
          document.getElementById("app_from").clientHeight +
          310 +
          parseFloat(this.styleObj);
        document.getElementById("app_from").style.height = scrollH + "px";
      }
    },
    onBlur() {
      if (this.isIos()) {
        this.setHeightAuto();
      }
    },
    setHeightAuto() {
      document.getElementById("app_from").style.height = "auto";
	},
  },
  computed: {
    styleObj() {
      return this.isIphoneX ? "34" : 0;
    }
  },
  mounted() {
      this._isIphoneX();
      this.setHeightAuto();
  }
};
</script>

<style>
.wrap {
    width: 100%;
    overflow: hidden;
}
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>
