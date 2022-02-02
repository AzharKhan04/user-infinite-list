import React from 'react';
import {IProps} from './types' 

const UserItem:React.FC<IProps>= ({data}) => {

    let {name,email,address,image_url,backgroundColor , profilePicName,id} = data


    return (
        <React.Fragment>
          <div  className="no-border card">
            <div className="card-body no-padding">
              <div style={{ alignItems: "center"}} className="row">
                <div className="col-2" style={{ marginTop: "12px" }}>
                  {image_url && (
                    <img
                      style={{ objectFit: "cover", borderRadius: "50%" }}
                      height="50"
                      width="50"
                      src={image_url}
                    />
                  )}
                  {!image_url && (
                    <div
                      style={{ backgroundColor: backgroundColor }}
                      className="defaultProfileSmall"
                    >
                      {profilePicName}
                    </div>
                  )}
                </div>
                <div className="col-7 text-truncate">
                  <div
                    style={{
                        
                      paddingTop: "20px",
                      color: "royalblue",
                    }}
                  >
                    {
                      <h5
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        {name}
                      </h5>
                    }
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    {<span>{email}</span>}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    {<span>{address}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </React.Fragment>
      );



}
export default UserItem;