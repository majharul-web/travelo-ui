import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();

const UseFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // all state
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const singInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                console.log(error);
            })
    };

    // observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    return {
        singInUsingGoogle,
        logOut,
        user,
        setUser,
        isLoading,
        setIsLoading
    }
};

export default UseFirebase;