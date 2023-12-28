<template>
  <div>
    <div class="w-full">
      <div
        class="grid grid-cols-7 header-text border-b-2 border-b-[rgba(74, 164, 82, 0.35)] py-2"
      >
        <div class="flex items-center justify-center col-span-1 title">
          {{ props.title }}
        </div>
        <div class="flex items-center justify-center col-span-1 title">
          {{ props.cycletime }}
        </div>
        <div class="flex items-center justify-center col-span-1 title">
          {{ props.lasttime }}
        </div>
        <div class="flex items-center justify-center col-span-1 title">
          {{ props.nexttime }}
        </div>
        <div
          class="flex items-center justify-start col-span-3 pl-20 cursor-pointer title"
        >
          <div @click="switchmaintConfirm(props.data)">
            <img src="@/assets/images/maint/confirm.png" />
          </div>
          <div @click="switchmaintEdit(props.data)">
            <img src="@/assets/images/maint/Edit.png" />
          </div>
          <div v-if="props.deleteFlag === 1" @click="DelDevice(props.data)">
            <img src="@/assets/images/maint/delete.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
import useDeviceStore from "~/store/DeviceStore";
const { $swal } = useNuxtApp();
const PopupStore = usePopupStore();
const DeviceStore = useDeviceStore();
const switchmaintConfirm = PopupStore.switchmaintConfirm;
const switchmaintEdit = PopupStore.switchmaintEdit;
const DelDevice = async (da: any) => {
  const result = await DeviceStore.DelDevice(da);
  if (result.status === "success") {
    $swal.fire({
      title: "成功",
      text: `設備刪除完成`,
      icon: "success",
      confirmButtonText: "確認",
    });
  } else {
    $swal.fire({
      title: "失敗",
      text: `設備刪除失敗`,
      icon: "error",
      confirmButtonText: "確認",
    });
  }
};

const props = defineProps({
  title: {
    type: String,
  },
  cycletime: {
    type: String,
  },
  lasttime: {
    type: String,
  },
  nexttime: {
    type: String,
  },
  deleteFlag: {
    type: Number,
  },
  data: {},
});
</script>
<style lang="scss" scoped>
.title {
  color: #717171;
  text-align: center;
  font-family: Microsoft JhengHei UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;
}
</style>
