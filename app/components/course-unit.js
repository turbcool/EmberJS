import Component from '@ember/component';

export default Component.extend({
  course: null,


  dragStart(event){
    event.dataTransfer.setData('text/data', this.get('course'));
  }
});
