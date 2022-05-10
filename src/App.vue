<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <h1>Default</h1>
      <Default />
      <h1>Vuex</h1>
      <UsingVuex />
    </div>
  </header>
</template>

<script>
import Default from "./views/Default/index.vue";
import UsingVuex from "./views/UsingVuex/index.vue";
export default {
  components: {
    Default,
    UsingVuex
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.css";
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
.wrapper {
  width: 400px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}

.logo {
  display: block;
}
</style>
