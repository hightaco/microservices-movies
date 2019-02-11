exports.seed = (knex, Promise) => {
  return knex('movies').del()
  .then(() => {
    return Promise.join(
      knex('movies').insert({
        user_id: 1,
        movie_id: 'tt0107290',
        title: 'Jurassic Park',
      })  // eslint-disable-line
    );
  })
  .catch((err) => { console.log(err); }); // eslint-disable-line
};
