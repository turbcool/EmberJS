import Controller from '@ember/controller';

export default Controller.extend({
  docNumber: null,
  currentObj: null,
  actions: {
    generateRecords(){
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
        numb:'HSEICS001-ST',
        startdate:'2017-01-01',
        enddate:'2019-06-01',
        company:'ГК ИВС',
        university:'НИУ ВШЭ Пермь'
      });
      this.store.createRecord('document',{
        numb:'AAAAAA001-AA',
        startdate:'2016-05-15',
        enddate:'2018-10-15',
        company:'Smart Analytics',
        university:'ПГНИУ'
      });
      this.store.createRecord('document',{
        numb:'ABCDEF123-ZZ',
        startdate:'2013-03-01',
        enddate:'2016-03-15',
        company:'Dom.RU',
        university:'НИУ ВШЭ Пермь'
      });
    },

    getDocument(number){
      var peekAll = this.store.peekAll('document');

      var array = peekAll.toArray();
      var id=0;
      array.forEach(function(item, i, array){
        if (item.numb==number)
          id=i;
      });

      var peekId = this.store.peekRecord('document', id);

      this.set('currentObj', peekId);
    },

    getNumber(number){
      this._super(...arguments); //Выполнится родительский/дочерний action
      this.getDocument(this.get('docNumber'));
    }
  }
});
