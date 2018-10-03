import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        name:'Теоретические основы информатики',
        description:'Описание'
      },
      {
        name:'Дискретная математика',
        description:'Описание'
      },
      {
        name:'Экономика',
        description:'Описание'
      },
      {
        name:'Эконометрика',
        description:'Описание'
      },
      {
        name:'Теория игр',
        description:'Описание'
      },
      {
        name:'История',
        description:'Описание'
      },
      {
        name:'Менеджмент',
        description:'Описание'
      }];
  }
});
