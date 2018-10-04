import Controller from '@ember/controller';

export default Controller.extend({
  course_list:[],
  actions:{
    addToList(dragged, target){
      this.get('model').removeObject(dragged);
      this.get('course_list').pushObject(dragged);
      target.target.set('test_array', [{name: "hello"}]);
      target.target.get('test_array').pushObject({name:"hello"});
    }
  }
});
