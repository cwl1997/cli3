<template>
  <div class="app">
    <el-container>
      <el-aside
        class="app-side app-side-left"
        style="background:#545c64"
        :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
      >
        <Sidebar :collapse="isCollapse" :routes="routes" />
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <div
            style="width: 60px; cursor: pointer;"
            @click.prevent="toggleSideBar"
          >
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>
          <!-- 我是样例菜单 -->
          <el-menu
            default-active="/"
            router
            class="el-menu-demo tab-page"
            mode="horizontal"
            @select="handleSelect"
            active-text-color="#409EFF"
          >
            <el-menu-item index="/">首页</el-menu-item>
          </el-menu>
          <!-- <div class="change-bg">
            换肤
          </div> -->
          <div class="app-header-userinfo">
            <el-dropdown trigger="hover" :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="app-body">
          <template>
            <router-view />
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "@/Container/Sidebar.vue";
export default {
  name: "Container",
  components: {
    Sidebar
  },
  data() {
    return {
      username: "",
      isCollapse: false,
      defaultActive: null,
      routes: []
    };
  },
  created() {
    let type = sessionStorage.getItem("usertype");
    let routerList = [];
    if (type == "admin") {
      routerList = this.$router.options.routes[1].children;
    } else if (type == "user") {
      routerList = this.$router.options.routes[1].children.filter(route => {
        return route.type == undefined;
      });
    }
    console.log("调用");
    this.routes = routerList;
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    },
    logout: function() {
      this.$confirm("确认退出?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted: function() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.username = user;
    }
  }
};
</script>

<style lang="scss" scoped>
// .change-bg {
//   display: flex;
// }
.app-body {
  background: #f0f2f5;
}
</style>
