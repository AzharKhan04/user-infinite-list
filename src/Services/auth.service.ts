
class AuthService {

    authenticated : boolean = false

    isAuthenticated() {

        let user:any = localStorage.getItem('user');

        if(user) {
            try {
                user = JSON.parse(user);
                this.authenticated = user.token ? true:false; 
            } catch(err) {
            }
        }

        return this.authenticated;

    }

    logout() {
        
        localStorage.removeItem("user");          
    }

}



export default AuthService ;