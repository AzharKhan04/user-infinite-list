import React from "react";
import isAuthenticated from "../Services/auth.service";
import UserList from "../UserList";

const Welcome = () => {

  if(!isAuthenticated()) {
      window.location.href = '/login'
    
  }

    return (
        <React.Fragment>
          <UserList></UserList>
        </React.Fragment>

    )

}


export default React.memo(Welcome);