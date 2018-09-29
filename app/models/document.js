import DS from 'ember-data';

export default DS.Model.extend({
    numb: DS.attr(),
    startdate: DS.attr(),
    enddate: DS.attr(),
    company: DS.attr(),
    university: DS.attr()
});
