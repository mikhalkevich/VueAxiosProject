<template>
  <div>
    <h2>Drag & Drop</h2>
    <section id="dropbox" v-on:dragenter="dragenter" v-on:dragover="dragover" v-on:drop="dropped">
    </section>
    <section id="picturesbox">
      <img class="image" v-for="p in pictures" :key="p.id" :id="'v_'+p.id" :src="'/img/'+p.path" v-on:dragstart="dragged"/>
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
    const pictures = [
      {id:1, name: 'Memory', path:'memory.png'},
      {id:2, name: 'Arts', path:'arts.png'},
      {id:3, name: 'Star', path:'star.png'},
      {id:4, name: 'Heart', path:'heart.png'},
    ];
    onMounted(async () => {
      source.value = document.getElementById("image");
      drop.value = document.getElementById("dropbox");
    });
    return {
      source,
      drop,
      pictures
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
      let id = event.dataTransfer.getData("Text");
      let src = document.getElementById(id).src;
      this.drop.innerHTML += '<img src="' + src + '">';
    },
    dragged(event) {
      let element = event.target;
      event.dataTransfer.setData("Text", element.id);
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
