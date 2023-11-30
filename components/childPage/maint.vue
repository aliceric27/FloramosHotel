<!-- 保養設定 -->
<template>
  <div>
    <div class="flex justify-center">
      <div class="w-[80vw]">
        <Childtitle-center :title="'保養設定'" />
        <maint-header />
        <maint-add />
        <maint-table />
        <maint-table
          :title="'B'"
          :cycletime="'10日'"
          :lasttime="'2023-03-01'"
          :nexttime="'2023-03-11'"
        />
        <maint-table
          :title="'C'"
          :cycletime="'3月'"
          :lasttime="'2023-03-01'"
          :nexttime="'2023-03-11'"
        />
        <maint-table
          :title="'D'"
          :cycletime="'3週'"
          :lasttime="'2023-03-01'"
          :nexttime="'2023-03-11'"
        />
      </div>
    </div>
  </div>
</template>
