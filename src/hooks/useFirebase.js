import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from './../components/Firebase/firebase.init'

initilizeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({ name: "sdfjksdfj" })
    const [loading, setLoading] = useState(true)

    const auth = getAuth();


    const signInUsingGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

            .finally(() => setLoading(false))


    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setUser(user)
            }
            else {
                setUser({})
            }

            setLoading(false)
        });
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false))
    }

    return {
        user,
        loading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;