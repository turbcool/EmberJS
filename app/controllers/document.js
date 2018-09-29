import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        getDocument(number){
            var query = this.store.query('document', {numb: number});
            this.set('test', query);
        },

        getAll(){
            var result = this.store.findAll('document');
            this.set('test', result);
        }
    }
});
