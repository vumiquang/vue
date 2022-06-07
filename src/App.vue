<template>
  <div>
    <HeadNote
      @addNote="addNote"
      :notes="notes"
      @changeNoteStatus="changeNoteStatus"
      @deleteNote="deleteNote"
      @clearComplete="clearComplete"
      @deleteNoteSelected="deleteNoteSelected"
      @setSelectTedNote="setSelectTedNote"
    />
  </div>
</template>

<script>
import HeadNote from "./components/HeadNote.vue";

export default {
  name: "App",
  data() {
    return { notes: [], selectedNotes: [] };
  },
  components: {
    HeadNote,
  },

  methods: {
    addNote(note) {
      this.notes.push(note);
    },
    changeNoteStatus(id) {
      this.notes.forEach((note) => {
        if (note.id === id) {
          if (note.status == "complete") note.status = "active";
          else note.status = "complete";
        }
      });
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    clearComplete() {
      this.notes = this.notes.filter((note) => note.status == "active");
    },
    deleteNoteSelected() {
      this.notes = this.notes.filter((note) => {
        return !this.selectedNotes.some((id) => id == note.id);
      });
    },
    setSelectTedNote(listID) {
      this.selectedNotes = listID;
    },
  },
};
</script>
<style scoped></style>
