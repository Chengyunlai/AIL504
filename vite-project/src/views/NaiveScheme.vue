<template>
  <!--<p style="color: #34ceaa">你好</p>-->
  <div style="display: flex;justify-content: center;align-items: center;height: 100%">
    <FullCalendar style="width: 50%;" :options="calendarOptions" />
  </div>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import zhCnLocale from '@fullcalendar/core/locales/zh-cn'

export default {
  name: "NaiveScheme",
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        locale:zhCnLocale
      }
    }
  }

}
</script>

<style scoped>

</style>