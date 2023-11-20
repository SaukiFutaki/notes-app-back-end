const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHAndler, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  }, {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  }, {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  }, {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHAndler,
  }, {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  }
];

module.exports = routes;
