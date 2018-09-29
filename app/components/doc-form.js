import Component from '@ember/component';

export default Component.extend({
    actions: {
        sendNumber(doc_number) {
            //AAAAAA000-AA
            if (doc_number.match('[A-Z]{6}[0-9]{3}-[A-Z]{2}')) 
                this.set('val_result','');
            else this.set('val_result','Номер документа введён неверно');
        }
    }
});
