<template>
  <div>
    <div class="w-full">
      <div
        class="grid grid-cols-10 my-4 bg-white border-b-2 border-b-[rgba(74, 164, 82, 0.35)] border-solid"
      >
        <div class="flex items-center date">{{ props.mainsys }}</div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.604897 0.101684C0.638064 0.0694515 0.677465 0.0438787 0.720844 0.0264301C0.764222 0.00898154 0.810725 0 0.85769 0C0.904654 0 0.951158 0.00898154 0.994536 0.0264301C1.03791 0.0438787 1.07732 0.0694515 1.11048 0.101684L5.3951 4.25504C5.42835 4.28719 5.45473 4.32539 5.47273 4.36744C5.49073 4.40949 5.5 4.45456 5.5 4.50009C5.5 4.54562 5.49073 4.59069 5.47273 4.63274C5.45473 4.67479 5.42835 4.71299 5.3951 4.74514L1.11048 8.8985C1.04344 8.96349 0.952505 9 0.85769 9C0.762874 9 0.671942 8.96349 0.604897 8.8985C0.537852 8.83351 0.500187 8.74536 0.500187 8.65345C0.500187 8.56154 0.537852 8.47339 0.604897 8.4084L4.63744 4.50009L0.604897 0.59178C0.571646 0.559629 0.545265 0.521435 0.527265 0.479386C0.509265 0.437337 0.5 0.392258 0.5 0.346732C0.5 0.301206 0.509265 0.256128 0.527265 0.214078C0.545265 0.172029 0.571646 0.133835 0.604897 0.101684Z"
              fill="#B4B4B4"
            />
          </svg>
          <p class="date">{{ props.altsys }}</p>
        </div>
        <div class="p-2 bg-white">
          <div class="flex items-center gap-2 border-r-2 border-[#E2E2E2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.604897 0.101684C0.638064 0.0694515 0.677465 0.0438787 0.720844 0.0264301C0.764222 0.00898154 0.810725 0 0.85769 0C0.904654 0 0.951158 0.00898154 0.994536 0.0264301C1.03791 0.0438787 1.07732 0.0694515 1.11048 0.101684L5.3951 4.25504C5.42835 4.28719 5.45473 4.32539 5.47273 4.36744C5.49073 4.40949 5.5 4.45456 5.5 4.50009C5.5 4.54562 5.49073 4.59069 5.47273 4.63274C5.45473 4.67479 5.42835 4.71299 5.3951 4.74514L1.11048 8.8985C1.04344 8.96349 0.952505 9 0.85769 9C0.762874 9 0.671942 8.96349 0.604897 8.8985C0.537852 8.83351 0.500187 8.74536 0.500187 8.65345C0.500187 8.56154 0.537852 8.47339 0.604897 8.4084L4.63744 4.50009L0.604897 0.59178C0.571646 0.559629 0.545265 0.521435 0.527265 0.479386C0.509265 0.437337 0.5 0.392258 0.5 0.346732C0.5 0.301206 0.509265 0.256128 0.527265 0.214078C0.545265 0.172029 0.571646 0.133835 0.604897 0.101684Z"
                fill="#B4B4B4"
              />
            </svg>
            <p class="date">{{ props.device }}</p>
          </div>
        </div>
        <div>
          <p class="date">{{ props.alertTime }}</p>
          <p class="time">MON, 16:04 PM</p>
        </div>
        <div class="col-span-2 p-2">
          <div class="flex items-center date">{{ props.alertmsg }}</div>
        </div>
        <div>
          <p class="date">{{ props.resloveTime }}</p>
          <p class="time">MON, 16:04 PM</p>
        </div>
        <div class="col-span-2 p-2">
          <div class="flex items-center date border-r-2 border-[#E2E2E2]">
            {{ props.resloveMsg }}
          </div>
        </div>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="45"
              viewBox="0 0 56 45"
              fill="none"
            >
              <path
                d="M17.6154 25.5C16.7891 25.5 15.9967 25.1839 15.4125 24.6213C14.8282 24.0587 14.5 23.2956 14.5 22.5C14.5 21.7044 14.8282 20.9413 15.4125 20.3787C15.9967 19.8161 16.7891 19.5 17.6154 19.5C18.4416 19.5 19.234 19.8161 19.8183 20.3787C20.4025 20.9413 20.7308 21.7044 20.7308 22.5C20.7308 23.2956 20.4025 24.0587 19.8183 24.6213C19.234 25.1839 18.4416 25.5 17.6154 25.5ZM28 25.5C27.1737 25.5 26.3813 25.1839 25.7971 24.6213C25.2128 24.0587 24.8846 23.2956 24.8846 22.5C24.8846 21.7044 25.2128 20.9413 25.7971 20.3787C26.3813 19.8161 27.1737 19.5 28 19.5C28.8263 19.5 29.6187 19.8161 30.2029 20.3787C30.7872 20.9413 31.1154 21.7044 31.1154 22.5C31.1154 23.2956 30.7872 24.0587 30.2029 24.6213C29.6187 25.1839 28.8263 25.5 28 25.5ZM38.3846 25.5C37.5584 25.5 36.766 25.1839 36.1817 24.6213C35.5975 24.0587 35.2692 23.2956 35.2692 22.5C35.2692 21.7044 35.5975 20.9413 36.1817 20.3787C36.766 19.8161 37.5584 19.5 38.3846 19.5C39.2109 19.5 40.0033 19.8161 40.5875 20.3787C41.1718 20.9413 41.5 21.7044 41.5 22.5C41.5 23.2956 41.1718 24.0587 40.5875 24.6213C40.0033 25.1839 39.2109 25.5 38.3846 25.5Z"
                fill="#717171"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  mainsys: {
    type: String,
    default: "",
  },
  altsys: {
    type: String,
    default: "",
  },
  device: {
    type: String,
    default: "",
  },
  alertTime: {
    type: String,
    default: "",
  },
  alertmsg: {
    type: String,
    default: "",
  },
  resloveTime: {
    type: String,
    default: "",
  },
  resloveMsg: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
.date {
  color: #717171;

  font-family: Microsoft JhengHei UI;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
}
.time {
  color: #b4b4b4;
  font-family: Microsoft JhengHei UI;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.65px;
}
</style>
