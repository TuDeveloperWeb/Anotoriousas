<template>
  <div>
   <div>
     <button class="show" @click="showModalT">Show Modal</button>
   </div>

    <div class="modalT" :class="{ 'show-modalT': isModalVisible }">
      
      <div id="osd-container" class="flex box">
        <div id="openseadragon1"></div>
      </div>



      <button @click="closeModalT">Close Me</button>
    </div>
  </div>
</template>

<script>

import OpenSeadragon from 'openseadragon';
import * as Annotorious from '@recogito/annotorious-openseadragon';
import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

export default {
  data() {
    return {
      isModalVisible: false,
      anno: null,
    };
  },
  methods: {
    showModalT() {
      console.log("Maria te espera");
      this.isModalVisible = true;

      this.initializeOpenSeadragon();

    },
    closeModalT() {
      this.isModalVisible = false;
    },

    initializeOpenSeadragon() {
      var viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: 'openseadragon/images/',
        tileSources: {
          type: "image",
          url: require("@/assets/paisaje.jpg")
        }
      });

      var options = {
        disableEditor: false // el editor predeterminado está deshabilitado para implementar un comportamiento personalizado
      };

      // Asigna 'anno' a la instancia de Annotorious
      this.anno = Annotorious(viewer, options);
    },

  },
};
</script>

<style scoped>


button.show {
  padding: 15px 20px;
  border: 0;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  z-index: 1;
  background: cornflowerblue;
}

.modalT {
  /* width: 500px; */
  text-align: center;
  background: cornflowerblue;
  padding: 20px;
  color: white;
  border-radius: 10px;
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -55%); */
  opacity: 0;
  transition: opacity ease-out 0.4s;
}

.show-modalT {
  opacity: 1;
  transition: opacity ease-in 0.4s;
  z-index: 2;
}

.modalT p {
  margin: 15px;
  padding: 20px;
}

.modalT button {
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px 15px;
  background: white;
  cursor: pointer;
}


.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.box {
  padding: 10px;
}

#osd-container,
#openseadragon1 {
  border: 1px solid #333;
}

#osd-container {
  background: #eee;
}

#openseadragon1 {
  width: 600px;
  height: 400px;
  background: #333;
}

.a9s-annotationlayer .a9s-formatter-el,
.a9s-annotationlayer .a9s-formatter-el foreignObject {
  overflow:visible;
  pointer-events:none;
}

.a9s-annotationlayer .a9s-formatter-el foreignObject .a9s-shape-label-wrapper {
  position:relative;
  transform:translateY(-100%);
  padding-bottom:4px;
}

.a9s-annotationlayer .a9s-formatter-el foreignObject .a9s-shape-label-wrapper .a9s-shape-label {
  display:table;
  padding:3px 5px;
  white-space:nowrap;
  background-color:rgba(255, 255, 255, 0.85);
  border-radius:3px;
  font-size:14px;
}


</style>
