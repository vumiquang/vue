<template>
  <div>
    <Head @addNote="addNote" />
  </div>
</template>
<script>
import Head from "./components/HeadNote.vue";

export default {
  name: "App",
  data() {
    return { notes: [] };
  },
  components: {
    Head,
  },
  methods: {
    addNote(note) {
      console.log(note);
      this.notes.push(note);
    },
  },
};
</script>
<style scoped></style>
