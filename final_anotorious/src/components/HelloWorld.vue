<template>
  <div>

      <b-button class="btn btn-success" @click="showModal">Abrir Modal</b-button>

      <b-modal v-model="showModalState" title="Mi Modal" size="lg">
      <!-- Contenido del modal aquí -->
        <div id="osd-container" class="flex box">
          <div id="openseadragon1">
          </div>
        </div>

       </b-modal>

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
      showModalState: false,
    };
  },

  mounted() {

  
  },

  methods: {
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

    showModal() {
      this.showModalState = true;

      setTimeout(() => {
      this.initializeOpenSeadragon();
    }, 10);
      
    },
    hideModal() {
      this.showModalState = false;
    },

  },
};
</script>

<style scoped>

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
