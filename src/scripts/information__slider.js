import Vue from "vue";
import Flickity from 'vue-flickity';
new Vue({
  el: "#information-container",
  components: {
    Flickity
  },
  
  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        groupCells: 2,
        cellAlign: 'left'
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
});