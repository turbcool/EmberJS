import Component from '@ember/component';

export default Component.extend({
  course: null,
  attributeBindings: ['draggable'],
  draggable:true,

  dragStart(event){
    event.dataTransfer.setData('text/data', this.get('course'));
  }
});
