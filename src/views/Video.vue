<template>
  <div class="about">
    <h1>Video Player</h1>
    <section id="player">
      <video id="media" width="720" height="400">
        <source src="/video/school.webm"/>
      </video>
      <nav>
        <div id="buttons">
          <input type="button" id="play" @click="push" v-model="pushed"/>
          <input type="button" id="mute" @click="sound" v-model="sounded">
        </div>
        <div id="bar" @click="move">
          <div id="progress"></div>
        </div>
        <div id="control">
          <input type="range" id="volume" min="0" max="1" step="0.1" @change="level" v-model="volumed">
        </div>
        <div class="clear"></div>
      </nav>
    </section>
  </div>
</template>
<script>
import {ref, onMounted} from "vue";

export default {
  name: 'Video',
  data() {
    const mmedia = ref();
    const progress = ref();
    const bar = ref();
    const loop = ref();
    const mute = ref();
    onMounted(async () => {
      mmedia.value = document.getElementById('media');
      progress.value = document.getElementById('progress');
      mute.value = document.getElementById('mute');
      bar.value = document.getElementById('bar');
    });
    return {
      mmedia: mmedia,
      progress: progress,
      mute: mute,
      loop: loop,
      maxim: 400,
      bar: bar,
      pushed: 'Play',
      sounded: 'Mute',
      volumed: 0.6
    }
  },
  methods: {
    push() {
      if (!this.mmedia.paused && !this.mmedia.ended) {
        this.mmedia.pause();
        this.pushed = 'Play';
      } else {
        this.mmedia.play();
        this.pushed = 'Pause';
        this.loop = setInterval(this.status, 1000);
      }
    },
    status() {
      if (!this.mmedia.ended) {
        var size = parseInt(this.mmedia.currentTime * this.maxim / this.mmedia.duration);
        this.progress.style.width = size + 'px';
      } else {
        this.progress.style.width = '0px';
        this.play.value = 'Play';
        clearInterval(this.loop);
      }
    },
    move(e){
      if(!this.mmedia.paused && !this.mmedia.ended){
        let mouseX = e.pageX - this.bar.offsetLeft;
        let newtime = mouseX * this.mmedia.duration / this.maxim;
        this.mmedia.currentTime = newtime;
        this.progress.style.width = mouseX + 'px';
      }
    },
    sound() {
      if(this.mute.value == 'Mute'){
        this.mmedia.muted = true;
        this.sounded = 'Sound';
      }else{
        this.mmedia.muted = false;
        this.sounded = 'Mute';
      }
    },
    level(){
      this.mmedia.volume = this.volumed;
    }
  }
}
</script>
<style>
#player {
  width: 720px;
  margin: 20px auto;
  padding: 10px 5px 5px 5px;
  background: #999999;
  border: 1px solid #666666;
  border-radius: 10px;
}

#play, #mute {
  padding: 2px 10px;
  width: 65px;
  border: 1px solid #000000;
  background: #DDDDDD;
  font-weight: bold;
  border-radius: 10px;
}

nav {
  margin: 5px 0px;
}

#buttons {
  float: left;
  width: 135px;
  height: 20px;
  padding-left: 5px;
}

#bar {
  float: left;
  width: 400px;
  height: 16px;
  padding: 2px;
  margin: 2px 5px;
  border: 1px solid #CCCCCC;
  background: #EEEEEE;
}

#progress {
  width: 0px;
  height: 16px;
  background: rgba(0, 0, 150, .2);
}

.clear {
  clear: both;
}
</style>
