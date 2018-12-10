
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name:'sparrow', isNice: true},
        {id: 2, name:'lyric', isNice: true},
        {id: 3, name:'keene', isNice: true},
        {id: 4, name:'tucker', isNice: false}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )
    })
}
