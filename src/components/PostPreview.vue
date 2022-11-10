<template>
  <div class="container">
    <title>줍깅모임타이틀</title>
    <content>
      글 세부 내용 글자수 제한 얼마로 할까글 세부 내용 글자수 제한 얼마로
      할까요~요~글 세부 내용 글자수 제한 얼마로 할까요~
    </content>
    <div class="info">
      <info>
        <font-awesome-icon icon="fa-solid fa-children" class="icon" />
        4/6
      </info>
      <info>
        <font-awesome-icon icon="fa-solid fa-map-location-dot" class="icon" />
        반포한강공원
      </info>
    </div>
    <date>2022/11/02</date>
  </div>
</template>

<script>
export default {
  created() {},
};
</script>

<style>
.container {
  border: solid 1px #416a59;
  border-radius: 12px;
  background-color: #f5f5f5;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  font-family: "NanumBarunGothic";
  color: #18181e;
}
title {
  font-size: 24px;
  display: block;
  padding-bottom: 10px;
}
content {
  font-size: 16px;
}
.icon {
  font-size: 20px;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px;
  height: 50px;
  justify-content: space-between;
}
date {
  align-self: flex-end;
  padding-right: 5px;
}
</style>
