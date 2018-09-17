const casual = require('casual')

export default fetchUsers = (usersArray, start, finish) => {
  createUsers();
  if (start && finish) {
    const length = finish - start;
    const newArray = usersArray.slice(start, length)
    return newArray
  }
  return usersArray
}

const usersArray = [];

casual.define('user', function () {
  return {
    email: casual.email,
    firstname: casual.first_name,
    lastname: casual.last_name,
    catch_phrase: casual.catch_phrase,
    card_type: casual.card_type,
    card_data: casual.card_data
  };
});

function createUsers() {
  for (let i = 0; i <= 100; i++) {
    const user = casual.user;
    usersArray.push(user)
  }
}