<template>
  <div class="countdown">
    <div class="countdown__title">{{ title }}</div>

    <div class="countdown__elem">{{ hours }}</div>
    <span class="countdown__separator">:</span>
    <div class="countdown__elem">{{ minutes }}</div>
    <span class="countdown__separator">:</span>
    <div class="countdown__elem">{{ seconds }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountDown',
  props: {
    date: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      title: 'До окончания акции:',
      timer: null,
      utcTimer: null,
      dateNow: null,
    };
  },
  watch: {
    diffDate(time) {
      if (time < 1000) {
        this.stopTimer();
        this.setNewTimer();
      }
    },
  },
  computed: {
    dateTimer() {
      return new Date(this.utcTimer);
    },
    diffDate() {
      return this.dateTimer - this.dateNow;
    },
    hours() {
      const value = Math.floor(this.diffDate / 3600000);
      return (`0${value}`).slice(-2);
    },
    minutes() {
      const value = new Date(this.diffDate).getMinutes();
      return (`0${value}`).slice(-2);
    },
    seconds() {
      const value = new Date(this.diffDate).getSeconds();
      return (`0${value}`).slice(-2);
    },
  },
  methods: {
    getUtcTimer() {
      this.utcTimer = Date.parse(this.date);
    },
    getDateNow() {
      this.dateNow = new Date();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.utcTimer -= 1000;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
    getDateStr(date) {
      const day = (`0${date.getDate()}`).slice(-2);
      const month = (`0${date.getMonth() + 1}`).slice(-2);
      const year = date.getFullYear();
      const hours = date.getHours();

      return `${year}-${month}-${day}T${hours}:59:59`;
    },
    setNewTimer() {
      const dateTimer = new Date(this.utcTimer);
      // dateTimer.setDate(dateTimer.getDate() + 2);

      dateTimer.setHours(dateTimer.getHours() + 5);

      const dateTimerStr = this.getDateStr(dateTimer);

      const action = '/ajax/setTimer.php';
      const props = {
        timer: dateTimerStr,
      };

      axios
        .post(action, props);
    },
  },
  created() {
    this.getUtcTimer();
    this.getDateNow();
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
};
</script>

<style lang="scss" scoped>
  .countdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: linear-gradient(282.59deg, #D7E2FF -14.63%, #8FA4D9 57.38%);
    border-radius: 5px;
    color: #FFFFFF;
    padding: 15px;
    margin-bottom: 42px;
    max-width: 210px;

    &__title {
      width: 100%;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
    }

    &__elem {
      background: #FFFFFF;
      border-radius: 5px;
      width: 40px;
      height: 34px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      color: #275DE0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
    }

    &__separator {
      font-size: 32px;
      line-height: 32px;
      color: #FFFFFF;
    }
  }
</style>
