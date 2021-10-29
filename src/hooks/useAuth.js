import { useContext } from 'react';
import { AuthContext } from '../Pages/Login/Login/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;