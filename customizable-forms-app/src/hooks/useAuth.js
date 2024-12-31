import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
    const { user, login, signup, logout } = useContext(AuthContext);

    return {
        user,
        login,
        signup,
        logout,
    };
};

export default useAuth;