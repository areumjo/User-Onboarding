import React from 'react';

const User = (props) => {
    //console.log(props);
    return(
        <div>
            <p>testing child compo</p>
             <p>{props.user}</p>
        </div>
    )
}

export default User;