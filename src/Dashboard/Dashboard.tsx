import React from "react";
import UserList from "../UserList";

const Dashboard : React.FunctionComponent<any> = () => {

    return (
        <React.Fragment>
          <UserList></UserList>
        </React.Fragment>
    )

}


export default React.memo(Dashboard);