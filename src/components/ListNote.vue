<template>
  <div class="wrap-notes">
    <div>
      <input type="checkbox" />
      <p>Learing vuejs</p>
      <font-awesome-icon icon="fa-solid fa-trash-can" class="icon" />
    </div>
    <div>
      <input type="checkbox" />
      <p>Learing vuejs</p>
      <font-awesome-icon icon="fa-solid fa-trash-can" class="icon" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.wrap-notes {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  > div:not(:first-child) {
    border-top: 1px solid #b4b4b4;
  }
  > div {
    display: flex;
    align-items: center;
    padding: 10px;

    p {
      flex-grow: 1;
      padding-left: 10px;
      font-size: 13px;
    }
  }
}
.icon {
  cursor: pointer;
  font-size: 15px;
  color: rgb(158, 158, 158);

  &:hover {
    color: #333;
  }
}
</style>
