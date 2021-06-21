<template>
  <div class="container">
    <div class="msg">
      <ul>
        <li v-for="(item, index) in msgList" :key="index">
          <p>{{ item.user }}</p>
          <p>{{ item.msg }}</p>
        </li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="msg" @keyup.enter="handleSendBtn" />
      <button @click="handleSendBtn" handleSendBtn>
        发送
      </button>
    </div>
  </div>
</template>

<script>
const ws = new WebSocket("ws://192.168.31.27:8000");
export default {
  data() {
    return {
      disabled: false,
      msgList: [],
      msg: "",
      user: ""
    };
  },
  created() {},
  mounted() {
    this.user = sessionStorage.getItem("user");
    console.log(this.user);
    ws.addEventListener("open", this.handleWsOpen.bind(this), false);
    ws.addEventListener("close", this.handleWsClose.bind(this), false);
    ws.addEventListener("error", this.handleWsError.bind(this), false);
    ws.addEventListener("message", this.handleWsMessage.bind(this), false);
  },

  methods: {
    handleSendBtn() {
      const msg = this.msg;
      if (!msg.trim().length) {
        return;
      }
      ws.send(
        JSON.stringify({
          id: new Date().getTime(),
          user: this.user,
          dateTime: new Date().getTime(),
          msg: this.msg
        })
      );
      this.msg = "";
    },
    handleWsOpen(e) {
      console.log("FE: WebSockey open", e);
    },
    handleWsClose(e) {
      console.log("FE: WebSockey close", e);
    },
    handleWsError(e) {
      console.log("FE: WebSockey error", e);
    },
    handleWsMessage(e) {
      console.log("FE: WebSockey message", e);
      const msg = JSON.parse(e.data);
      this.msgList.unshift(msg);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  .msg {
    width: 50%;
    background: #fff;
  }
}
</style>
