<template>
  <div class="head">
    <div class="container">
      <h3>Notes</h3>
      <div class="wrap-input">
        <input type="text" placeholder="Add note here ..." v-model="text" />
        <font-awesome-icon
          icon="fa-solid fa-file-circle-plus"
          class="icon"
          @click="addNote"
        />
      </div>
      <list-note />
    </div>
  </div>
</template>

<script>
import ListNote from "./ListNote.vue";
import { v4 } from "uuid";

export default {
  data() {
    return {
      text: "",
    };
  },
  components: {
    ListNote,
  },
  methods: {
    addNote() {
      if (this.text.length > 0)
        this.$emit("addNote", { text: this.text, status: "active", id: v4() });
    },
  },
};
</script>

<style scoped lang="scss">
.head {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background: linear-gradient(
    225deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  .container {
    padding-top: 50px;
    margin: 0 auto;
    width: 300px;
    h3 {
      font-size: 2rem;
      margin-bottom: 20px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #fff;
    }
    .wrap-input {
      width: 100%;
      display: flex;
      background: white;
      border-radius: 4px;
      border: 1px solid rgba(167, 167, 167, 0.5);
      align-items: center;
      margin-bottom: 20px;
      input {
        width: calc(100% - 30px);
        font-size: 13px;
        outline: 0;
        border: 0;
        padding: 10px;
      }
      .icon {
        padding: 0 5px;
        flex-basis: 30px;
        font-size: 20px;
        cursor: pointer;
        color: rgb(158, 158, 158);
        &:hover {
          color: #333;
        }
      }
    }
  }
}
</style>
