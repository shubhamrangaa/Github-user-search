import React, { useEffect, useState } from "react";
import Newuser from "./users"

const Autocomplete = (props) => {
  const [state, setState] = useState({ data: [] });
  const [activity, setActivity] = useState({ act: [] });
  const user = props.data.username;
  let userinfo = 0;
  if(activity.act !== user){
    setActivity({act: user})
  }

  useEffect(() => {
     fetchData();
  }, [activity.act]); 
  
  const fetchData = async () => {
    
    try {
        const url = "https://api.github.com/search/users?q=" + user + "&per_page=100";
            const response = await fetch(url , {
              headers: {
                Accept: "application/vnd.github.v3+json",
              }
            });
            if (!response.ok) {
              throw Error(response.statusText);
            }
            userinfo = await response.json();
            setState({ data: userinfo });
            console.log(userinfo);

           
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
     <ul>
    { state.data.items !== undefined &&
        state.data.items.map((newuser) => (
          <li key={newuser}><Newuser url={newuser.url} name={newuser.login} /></li>
          
        ))
    }
      </ul>
    </div>
  );
};

export default Autocomplete;
