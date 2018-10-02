import Component from '@ember/component';

export default Component.extend({
  val_result: null,
  doc_input: null,
  valid_action: null,
  actions: {
    validateNumber(doc_input) {
      //AAAAAA000-AA
      if (doc_input.match('[A-Z]{6}[0-9]{3}-[A-Z]{2}'))
      {
        this.set('val_result','');

        var docform_action = this.get('valid_action');
        if (docform_action)
          docform_action(doc_input);
      }
      else
      {
        this.set('val_result','Номер документа введён неверно');
      }
    }
  }
});
