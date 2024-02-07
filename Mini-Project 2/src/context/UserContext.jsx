import React from "react";
import { useContext, useState } from "react";
// Context to manage User Information in react App.
const UserContext = React.createContext();

// User related data will be shared and managed across diff components in react app.
export const UserProvider = (props) => {
    // store the current user in state at the top level
    const [currentUser, setCurrentUser] = useState({});


    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }
    // The Provider component of any context (UserContext.Provider)
    // sends data via its value prop to all children at every level.
    // We are sending both the current user and an update function
    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

// This custom hook allows easy access of this particular context from any child component
export const useUserContext = () => {
    return useContext(UserContext);
}

// Save as UserContext.jsx in a separate 'context' folder