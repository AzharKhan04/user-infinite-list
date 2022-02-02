import users from "../Constants/users";

const getUsers = (start = 0) => {

  return new Promise((resolve, rej) => {

    let newUsers: any = [...users];

    setTimeout(()=>{
        resolve(newUsers.splice(start,10))
        
    },1000);


  });
};

export default getUsers;
