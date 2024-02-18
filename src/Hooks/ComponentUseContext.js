import React, { useState, createContext } from 'react';
import Card from '../componentsForUseContext/Card';

export const UserContext = createContext(null);

export default function ComponentUseContext() {
    const [userOne, setUserOne] = useState('Louhab');
    const user = { userOne };
    return (
        <UserContext.Provider value={user}>
            <Card />
        </UserContext.Provider>
    );
}
