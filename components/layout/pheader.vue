<!-- 頂部共用layout -->
<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        <div class="div-4">
          <img src="@/assets/images/ibms-logo.svg" alt="" />
        </div>
        <div class="div-5"></div>
        <div class="div-6">
          <div class="cursor-pointer div-7" @click="() => navigateTo('/')">
            <img
              loading="lazy"
              src="@/assets/images/header/home.png"
              class="img"
            />
            <div class="div-8">首頁</div>
          </div>
          <div class="div-9">
            <img
              loading="lazy"
              src="@/assets/images/header/logout.png"
              class="img-2"
            />
            <div class="cursor-pointer div-10" @click="logout">登出</div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="@/assets/images/header/Floramos-LOGO.png"
        class="img-3"
      />
      <div class="div-11">
        <div class="div-12">
          <img
            loading="lazy"
            src="@/assets/images/header/clock.png"
            class="img-4"
          />
          <div class="div-13" @click="() => navigateTo('/history')">
            歷史事件
          </div>
        </div>
        <div class="div-14" @click="() => navigateTo('/maint')">
          <img
            loading="lazy"
            src="@/assets/images/header/setting.png"
            class="img-5"
          />
          <div class="div-15">保養設定</div>
        </div>
        <div class="div-16">
          <div class="div-17">
            <img
              loading="lazy"
              src="@/assets/images/header/alarm.png"
              class="img-6"
            />
            <div
              class="relative cursor-pointer div-18"
              @click="switchNoticeBox"
            >
              即時訊息
              <div
                v-if="rdata?.length"
                class="absolute w-[20px] h-[20px] bg-[#FF5B5B] rounded-[50%] text-center text-white -top-4 -right-4"
              >
                {{ rdata?.length }}
              </div>
              <div
                v-if="noticeBox"
                class="bg-white min-w-[360px] h-[360px] absolute right-0 shadow-[-1px_7px_18px_-2px_rgba(0,0,0,0.56)] rounded-[7px] z-50"
              >
                <div class="flex flex-col w-full h-full p-4 overflow-y-auto">
                  <notiebox />
                </div>
                <!--  -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import useLoginStore from "~/store/LoginStore";
import usePageStore from "~/store/PageStore";
import usePopupStore from "~/store/PopupStore";
import useInfoStore from "~/store/InfoStore";
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const rdata = computed(() => socketStore.data?.Events);
const router = useRouter();
const PageStore = usePageStore();
const PopupStore = usePopupStore();
const LoginStore = useLoginStore();
const infoStore = useInfoStore();
const noticeBox = computed(() => PopupStore.noticeBox);
const switchNoticeBox = PopupStore.switchNoticeBox;
const changepage = PageStore.turnpage;
const logout = () => {
  sessionStorage.removeItem("token");
  LoginStore.logout();
  infoStore.cleartext();
  navigateTo("/login");
};
</script>
<style scoped>
.div {
  display: flex;
  flex-direction: column;
}
.div-2 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(
    --nav-bar,
    linear-gradient(
      180deg,
      #fff 32.81%,
      #f3f3f3 75.52%,
      #e0dfdf 99.99%,
      #cfcece 100%
    )
  );
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 91px 12px 45px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
.div-3 {
  justify-content: space-between;
  align-self: center;
  display: flex;
  gap: 20px;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-3 {
    justify-content: center;
  }
}
.div-4 {
  color: #232323;
  letter-spacing: 3.6px;
  align-self: center;
  margin: auto 0;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
.div-5 {
  background-color: #a7a7a7;
  width: 1px;
  height: 74px;
}
.div-6 {
  align-self: center;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
  padding: 2px 0;
}
.div-7 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 18px;
}
.img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  fill: #838383;
  stroke-width: 0.2px;
  stroke: #838383;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-8 {
  color: #838383;
  letter-spacing: 3.6px;
  align-self: stretch;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    white-space: initial;
  }
}
.div-9 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 19px;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  fill: #838383;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-10 {
  color: #838383;
  letter-spacing: 7.2px;
  align-self: stretch;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-10 {
    white-space: initial;
  }
}
.img-3 {
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 87px;
  overflow: hidden;
  max-width: 100%;
}
.div-11 {
  align-self: center;
  display: flex;
  padding-left: 5px;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-11 {
    justify-content: center;
  }
}
.div-12 {
  align-self: center;
  display: flex;
  gap: 18px;
  margin: auto 0;
}
.img-4 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  fill: #838383;
  stroke-width: 0.6px;
  stroke: #838383;
  overflow: hidden;
  max-width: 100%;
}
.div-13 {
  cursor: pointer;
  justify-content: center;
  color: #838383;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-13 {
    white-space: initial;
  }
}
.div-14 {
  cursor: pointer;
  align-self: center;
  display: flex;
  gap: 17px;
  margin: auto 0;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  fill: #838383;
  stroke-width: 0.5px;
  stroke: #838383;
  overflow: hidden;
  max-width: 100%;
}
.div-15 {
  justify-content: center;
  color: #838383;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-15 {
    white-space: initial;
  }
}
.div-16 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 1px 0;
}
.div-17 {
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 16px;
}
.img-6 {
  aspect-ratio: 1.41;
  object-fit: contain;
  object-position: center;
  width: 24px;
  fill: #838383;
  stroke-width: 0.1px;
  stroke: #838383;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-18 {
  display: relative;
  color: #838383;
  align-self: stretch;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-18 {
    white-space: initial;
  }
}
</style>
