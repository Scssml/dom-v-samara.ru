<template>
  <div class='sk-fading-circle'>
    <div class='sk-circle sk-circle-1'></div>
    <div class='sk-circle sk-circle-2'></div>
    <div class='sk-circle sk-circle-3'></div>
    <div class='sk-circle sk-circle-4'></div>
    <div class='sk-circle sk-circle-5'></div>
    <div class='sk-circle sk-circle-6'></div>
    <div class='sk-circle sk-circle-7'></div>
    <div class='sk-circle sk-circle-8'></div>
    <div class='sk-circle sk-circle-9'></div>
    <div class='sk-circle sk-circle-10'></div>
    <div class='sk-circle sk-circle-11'></div>
    <div class='sk-circle sk-circle-12'></div>
  </div>
</template>

<style lang="scss">
  .sk-fading-circle {
    $spinkit-size: 54px !default;
    $spinkit-spinner-color: #275DE0 !default;
    $circleCount: 12;
    $animationDuration: 1.2s;

    width: $spinkit-size;
    height: $spinkit-size;
    position: relative;
    margin: auto;

    .sk-circle {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .sk-circle:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: $spinkit-spinner-color;
      border-radius: 100%;
      animation: sk-fading-circle-delay $animationDuration infinite ease-in-out both;
    }

    @for $i from 2 through $circleCount {
      .sk-circle-#{$i} {
        transform: rotate((360deg / $circleCount * ($i - 1)));
      }
    }

    @for $i from 2 through $circleCount {
      .sk-circle-#{$i}:before {
        animation-delay: (-$animationDuration + $animationDuration / $circleCount * ($i - 1));
      }
    }

  }

  @keyframes sk-fading-circle-delay {
    0%, 39%, 100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
</style>
