import { fetchData } from 'next-auth/client/_utils';
import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null)
    useEffect(() => {
        const fetchData = async() => {
          try{
            const messageResponse = await fetch('http://127.0.0.1:5000/api/hello')
            const messageData = await messageResponse.json()
            setMessage(messageData.message)

            const userResponse = await fetch('http://127.0.0.1:5000/api/user');
            const userData = await userResponse.json();
            setUser(userData);
          }
          catch(error){
            console.log(`error found : ${error}`);

          }
        };
        fetchData()
    }, []);

    return (
        <div>
            <h1>{message || 'Loading...'}</h1>

            {user?(
              <div>
                <h2>User's data</h2>
                <p>Id:{user.id}</p>
                <p>Name:{user.name}</p>
                <p>Email:{user.email}</p>
              </div>
            ):(
              <p>Loading</p>
            )}
        </div>
    );
}

export default App;
