import AuthContext from "./AuthContext";
import auth from './../firebase/firebase.init';
import { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import axios from "axios";
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const GoogleProvider = new GoogleAuthProvider();


    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const signUpUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userProfileInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };


    const loginUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }




    const handleSignOut = () => {

        return signOut(auth)
    }


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    // if (currentUser) {
    //     setUser(currentUser)
    // } else {
    //     setUser(null)
    // }
    // setLoading(false)
    //     });

    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
            setLoading(false)

            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://edu-linker-server.vercel.app/jwt', user, {
                    withCredentials: true
                })
                    .then(data => {
                        setLoading(false)
                    })

            }
            else {
                axios.post('https://edu-linker-server.vercel.app/logout', {}, { withCredentials: true })
                    .then(data => {
                        console.log(data.data, 'logout')
                        setLoading(false)
                    })
            }
        })
        return () => unsubscribe()
    }, [])




    const authInfo = {
        googleLogin,
        user,
        setUser,
        handleSignOut,
        signUpUser,
        userProfileInfo,
        loginUser,
        loading
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;