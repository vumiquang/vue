<template>
  <div class="wrap-notes">
    <div v-for="note in handleFilterNote" :key="note.id">
      <input type="checkbox" v-model="selectedNotes" :value="note.id" />
      <p
        @click="changeNoteStatus(note.id)"
        :class="{ complete: note.status === 'complete' }"
      >
        {{ note.text }}
      </p>
      <font-awesome-icon
        icon="fa-solid fa-trash-can"
        class="icon"
        @click="deleteNote(note.id)"
      />
    </div>
    <div class="bottom-btn">
      <span @click="deleteNoteSelected">Delete selected</span>
      <p>
        <span @click="status = 'all'" :class="{ active: status == 'all' }"
          >All</span
        ><span
          @click="status = 'active'"
          :class="{ active: status == 'active' }"
          >Active</span
        ><span
          @click="status = 'complete'"
          :class="{ active: status == 'complete' }"
          >Complete</span
        >
      </p>
      <span @click="clearComplete">Clear complete</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      status: "all",
      selectedNotes: [],
    };
  },
  methods: {
    changeNoteStatus(id) {
      this.$emit("changeNoteStatus", id);
    },
    deleteNote(id) {
      this.$emit("deleteNote", id);
    },
    clearComplete() {
      this.$emit("clearComplete");
    },
    deleteNoteSelected() {
      this.$emit("deleteNoteSelected");
    },
  },
  watch: {
    selectedNotes() {
      this.$emit("setSelectTedNote", this.selectedNotes);
    },
  },
  computed: {
    handleFilterNote() {
      return this.notes.filter((note) => {
        if (this.status == "all") return true;
        else return note.status == this.status;
      });
    },
  },
};
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
  .complete {
    text-decoration: line-through;
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
.bottom-btn {
  display: flex;
  p {
    display: flex;
    justify-content: center;
    span {
      margin: 0 10px;
      &.active {
        color: rgb(0, 247, 255);
      }
    }
  }
  span {
    font-size: 13px;
    cursor: pointer;
  }
}
</style>
