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
      <SelectInput placeholder="Chọn tỉnh thành">
        <template v-slot:option="{ isOpen, onToggle }">
          <div v-if="isOpen" class="select_menu_container">
            <Checkbox title="Hà Nội" />
            <Checkbox title="Hưng Yên" />
            <Checkbox title="Tp HCM" />
            <div class="group_button">
              <Button disable>Đồng ý</Button>
              <Button text textPrimary>Huỷ</Button>
            </div>
          </div>
        </template>
      </SelectInput>
      <div class="group_chip_container">
        <Chip title="Hà Nội" />
        <Chip title="Hưng Yên" />
        <Chip title="Tp HCM" />
        <Chip title="Hưng Yên" />
        <Chip title="Tp HCM" />
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script>
  import SelectInput from './components/common/SelectInput/index.vue';
  import Checkbox from './components/common/Checkbox/index.vue';
  import Button from './components/common/Button/index.vue';
  import Chip from './components/common/Chip/index.vue';
  export default {
    components: {
      SelectInput,
      Checkbox,
      Button,
      Chip
    },
  }
</script>


<style lang="scss" scoped>@import "@/assets/base.css";
.group_button {
  display: flex;
  gap: 10px;
  padding: 16px;
}
.select_menu_container {
  padding-top: 8px;
}
.wrapper {
  width: 450px;
}
.group_chip_container {
  display: flex;
  flex-wrap: wrap;
  width: inherit;
  gap: 4px;
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid #999999;
  border-radius: 4px;
  cursor: pointer;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
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

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
