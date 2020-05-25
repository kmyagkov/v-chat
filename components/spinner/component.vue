<template>
  <div class="spinner"></div>
</template>

<style>
.spinner {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.spinner:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #409EFF;
  border-color: #409EFF transparent #409EFF transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
