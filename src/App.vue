<template>
  <router-view />
</template>
<style lang="scss">
::-webkit-scrollbar {
  //全局修改滚动条
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 5px;
  background: #fff;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(64, 158, 255, 0.5);
}
</style>
