import Component from '@ember/component';

export default Component.extend({
  course: null,
  //course дополнительно содержит номер контейнера, внутри которого находится course-unit
  //По умолчанию всё лежит внутри модели.
});
