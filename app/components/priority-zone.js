import Component from '@ember/component';

export default Component.extend({
  classNames: [ 'draggableDropzone', 'priority'],
  course_list: Array(),
  model: null,

  dragLeave(event){
    event.preventDefault();
  },

  dragOver(event){
    event.preventDefault();
  },

  drop(event){
    var data = event.dataTransfer.getData('text/data');

    this.set('course_list', data);
    console.log(data);
  }
});
