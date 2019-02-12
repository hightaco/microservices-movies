const knex = require('./connection');

function getSavedMovies(userId) {
  return knex('movies').select().where('user_id', userId);
}

function addMovie(obj) {
  return knex('movies').insert({ user_id: obj.user_id, title: obj.title, movie_id: obj.movie_id });
}

module.exports = {
  getSavedMovies,
  addMovie,
};
