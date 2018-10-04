import Controller from '@ember/controller';

export default Controller.extend({
  course_list:[],
  test_array:[],
  S1_P1:[],
  S1_P2:[],
  S1_P3:[],
  S2_P1:[],
  S2_P2:[],
  S2_P3:[],
  actions:{
    addToList(dragged, target){
    },
    S1_P1(dragged,target){
      this.get('model').removeObject(dragged);
      this.get('S1_P1').pushObject(dragged);
    },
    S1_P2(dragged,target){
      this.get('model').removeObject(dragged);
      this.get('S1_P2').pushObject(dragged);
    },
    S1_P3(dragged,target){
      this.get('model').removeObject(dragged);
      this.get('S1_P3').pushObject(dragged);
    },
    S2_P1(dragged,target){
      this.get('model').removeObject(dragged);
      this.get('S2_P1').pushObject(dragged);
    },
    S2_P2(dragged,target){
      this.get('model').removeObject(dragged);
      this.get('S2_P2').pushObject(dragged);
    },
    S2_P3(dragged,target){
      this.get('model').removeObject(dragged);
      this.get('S2_P3').pushObject(dragged);
    }
  }
});
