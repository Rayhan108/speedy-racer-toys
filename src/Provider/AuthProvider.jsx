import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confiq";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile, } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader]=useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoader(false)
         
        });
        return () => {
          return unsubscribe();
        };
      }, []);
console.log(user);
      const createUser = (email, password) => {
        setLoader(true);
          return createUserWithEmailAndPassword(auth, email, password);
        };
        const updateUserData = (user, name,photo) => {
          updateProfile(user, {
            displayName: name,
            photoURL:photo,
          })
            .then(() => {
              alert("Successfull");
            })
            .catch((error) => {
              console.log(error.message);
            });
        };

    const authInfo={user,loader,createUser, updateUserData }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;