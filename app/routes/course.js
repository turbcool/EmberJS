import Route from '@ember/routing/route';

export default Route.extend({
    
    model() {
        return ['Теоретические основы информатики',
        'Дискретная математика',
        'Экономика',
        'Эконометрика',
        'Теория игр',
        'История',
        'Менеджмент'];
    }
});
