import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }){
    const [userSigned, setUserSigned] = useState(false);
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState(0);

    return (
        <UserContext.Provider
            value = {{
                userSigned,
                setUserSigned,
                userName,
                setUserName,
                userId,
                setUserId
            }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(){
    const context = useContext(UserContext);
    const { userSigned, setUserSigned, userName, setUserName, userId, setUserId } = context;
    return { userSigned, setUserSigned, userName, setUserName, userId, setUserId };
}

