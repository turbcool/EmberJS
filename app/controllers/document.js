import Controller from '@ember/controller';

export default Controller.extend({
  docNumber: null,
  doc_unit_result: null,
  error_text: null,
  show_all:false,
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

      //Search for id:
      var array = peekAll.toArray();
      var id=-1;
      array.forEach(function(item, i, array){
        if (item.numb==number)
          id=i;
      });

      //Peek id если он был найден:
      if (id==-1){
        this.set('doc_unit_result', null);
        this.set('error_text', "Такого документа не существует");
      }
      else
      {
        this.set('error_text', "");
        var peekId = this.store.peekRecord('document', id);
        this.set('doc_unit_result', peekId);
      }
    },

    showAll(){
      this.set("show_all",true);
    }
  }
});
