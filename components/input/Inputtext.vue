<template>
  <div id="input-warp">
    <div class="out-warp">
      <p class="input-text">{{ props.nametitle }}</p>
      <input class="inputbox" v-model="textinput" :type="ispwd" />
    </div>
  </div>
</template>

<script land="ts" setup>
import useInfoStore from "~/store/InfoStore";
const infostore = useInfoStore();
const props = defineProps({
  nametitle: {
    type: String,
    required: true,
  },
  typ: {
    type: String,
    required: true,
  },
});
const textinput = ref("");
const ispwd = computed(() => (props.typ === "pwd" ? "password" : null));
watch(textinput, (newval, oldval) => {
  if (props.typ === "pwd") infostore.setPwd(newval);
  if (props.typ === "acc") infostore.setAcc(newval);
});
</script>

<style lang="scss" scope>
#input-warp {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .out-warp {
    width: 90%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    .input-text {
      font-size: 14px;
      color: rgba(152, 96, 0);
      margin: 0.5rem;
    }
    .inputbox {
      background-color: #fff9ee;
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 2.125rem;
      border: 2.5px solid #fff;
    }
  }
}
</style>
