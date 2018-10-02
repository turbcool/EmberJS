import Route from '@ember/routing/route';

export default Route.extend({

	model() {
    this.store.unloadAll();

    this.store.createRecord('document',{
      id: 0,
      numb:'AAAAAA000-AA',
      startdate:'2015-08-01',
      enddate:'2020-08-01',
      company:'ГК ИВС',
      university:'НИУ ВШЭ Пермь'
    });
    this.store.createRecord('document',{
      id: 1,
      numb:'HSEICS001-ST',
      startdate:'2017-01-01',
      enddate:'2019-06-01',
      company:'ГК ИВС',
      university:'НИУ ВШЭ Пермь'
    });
    this.store.createRecord('document',{
      id: 2,
      numb:'AAAAAA001-AA',
      startdate:'2016-05-15',
      enddate:'2018-10-15',
      company:'Smart Analytics',
      university:'ПГНИУ'
    });
    this.store.createRecord('document',{
      id: 3,
      numb:'ABCDEF123-ZZ',
      startdate:'2013-03-01',
      enddate:'2016-03-15',
      company:'Dom.RU',
      university:'НИУ ВШЭ Пермь'
    });

    return this.store.findAll('document');
  }
});
