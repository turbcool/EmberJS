import Component from '@ember/component';

export default Component.extend({
  val_result: null,
  doc_input: null,
  valid_number: null,
  valid_action: null,
  actions: {
        validateNumber(doc_input) {
            //AAAAAA000-AA
            if (doc_input.match('[A-Z]{6}[0-9]{3}-[A-Z]{2}'))
            {
              this.set('val_result','');
              this.sendAction('valid_action',doc_input);
            }
            else
            {
              this.set('val_result','Номер документа введён неверно');
              this.set('valid_number', null);
            }
        }
    }
});
