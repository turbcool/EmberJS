import Controller from '@ember/controller';

export default Controller.extend({
  docNumber: null,
  doc_unit_result: null,
  error_text: null,
  show_all:false,
  actions: {
    getDocument(number){
      var peekAll = this.store.peekAll('document');

      //Search for id:
      var array = peekAll.toArray();
      var id=-1;
      array.forEach(function(item, i, array){
        if (item.numb==number)
          id=i;
        array.toArray();
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

    showAllTrigger(){
      if (this.get('show_all')==true)
        this.set("show_all", false);
      else
        this.set("show_all", true);
    }
  }
});
