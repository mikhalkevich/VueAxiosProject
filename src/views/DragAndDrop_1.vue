<template>
  <div>
    <h2>Drag & Drop</h2>
    <section id="dropbox" v-on:dragenter="dragenter" v-on:dragover="dragover" v-on:drop="dropped">
      Drag and drop the image here
    </section>
    <section id="picturesbox">
      <img id="image" src="/img/memory_7640.png" v-on:dragstart="dragged"/>
    </section>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";

export default {
  name: "DragAndDrop",
  data() {
    const source = ref();
    const drop = ref();
    onMounted(async () => {
      source.value = document.getElementById("image");
      drop.value = document.getElementById("dropbox");
    });
    return {
      source,
      drop
    }
  },
  methods: {
    dragenter(event) {
      event.preventDefault();
    },
    dragover(event) {
      event.preventDefault();
    },
    dropped(event) {
      event.preventDefault();
      this.drop.innerHTML = event.dataTransfer.getData("Text");
    },
    dragged(event) {
      var code = '<img src="' + this.source.src + '">';
      event.dataTransfer.setData("Text", code);
    }
  }
}
</script>

<style scoped>
#dropbox {
  float: left;
  width: 500px;
  height: 300px;
  margin: 10px;
  border: 1px solid #999999;
}

#picturesbox {
  float: left;
  width: 320px;
  margin: 10px;
  border: 1px solid #999999;
}

#picturesbox > img {
  float: left;
  padding: 5px;
}
</style>
