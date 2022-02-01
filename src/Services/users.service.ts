import users from "../Constants/users";

const getUsers = (start = 0) => {
  return new Promise((resolve, rej) => {
    let newUsers: any = [];

    if (start >= users.length) {
      resolve(newUsers);
    }

    for (let i = start; i < users.length; i++) {
      if (i > start + 9) {
        setTimeout(() => {
          resolve(newUsers);
        }, 1000);
      } else {
        newUsers.push(users[i]);
      }
    }
  });
};

export default getUsers;
