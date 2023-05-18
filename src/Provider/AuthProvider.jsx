import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confiq";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";


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
//  register with email and pass
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
// login with email & pass
const login = (email, password) => {
  setLoader(true);
  return signInWithEmailAndPassword(auth, email, password);
};
// logOut
const logout = () => {
  setLoader(true);
  return signOut(auth);
};
    const authInfo={user,loader,createUser, updateUserData,login,logout }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;