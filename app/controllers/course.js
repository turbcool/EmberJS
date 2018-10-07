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
    Drop(dragged, target){
      //Ищем id контейнера, откуда перетащили объект:
      var sourceContainerId = dragged.container;
      if (sourceContainerId == null)
      sourceContainerId = 'model'; 

      //Удаляем объект из того контейнера:
      this.get(sourceContainerId).removeObject(dragged);

      //Добавляем объект вместе с id нового контейнера:
      var targetContainerId = target.target.id;
      dragged.container = targetContainerId;
      this.get(target.target.id).pushObject(dragged);
    }
  }
});
