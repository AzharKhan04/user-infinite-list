
class LoginService {

    login(username:string,password:string) {

        return new Promise((resolve,reject)=>{

        if (!username || !password) {
            reject("username and password required");
        }
      
        if (username === "foo" && password === "bar") {
            localStorage.setItem(
              "user",
              JSON.stringify({
                token: "_token__",
              })
            );

            resolve({user:{username:username}})
        } else {
            reject('Invalid credentials')
        }
        })
    }

}

export default LoginService;