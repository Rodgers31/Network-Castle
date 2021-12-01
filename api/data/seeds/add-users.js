exports.seed = async function (knex) {
  // Deletes ALL existing entries AND reset the primary keys
  // this will help our primary keys to start at 1 and after the last item removed
  await knex('users').truncate();
  return knex('users').insert([
    {
      user_name: 'Rodgers31',
      name: 'Rodgers otieno',
      email: 'rodgerthegreat1@gmail.com',
      password: '1234',
      admin: 'false',
    },
  ]);
};
