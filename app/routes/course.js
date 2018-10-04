import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.unloadAll();

    this.store.createRecord('course',{
      id:0,
      name:'ТОИ',
      description:'Описание'
    });
    this.store.createRecord('course',{
      id:1,
      name:'Дискретная математика',
      description:'Описание'
    });
    this.store.createRecord('course',{
      id:2,
      name:'Экономика',
      description:'Описание'
    });
    this.store.createRecord('course',{
      id:3,
      name:'Эконометрика',
      description:'Описание'
    });
    this.store.createRecord('course',{
      id:4,
      name:'Теория игр',
      description:'Описание'
    });
    this.store.createRecord('course',{
      id:5,
      name:'История',
      description:'Описание'
    });
    this.store.createRecord('course',{
      id:6,
      name:'Менеджмент',
      description:'Описание'
    });

    return this.store.findAll('course');
  }
});
