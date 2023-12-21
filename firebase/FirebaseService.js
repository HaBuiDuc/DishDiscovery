import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "./FirebaseConfig"
import { Alert } from "react-native"
import { addDoc, collection, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore"

const auth = FIREBASE_AUTH

const firebaseSignIn = async (email, password, setLoading) => {
    console.log('sign in')
    setLoading(true)
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        Alert.alert('Error', error.message)
    } finally {
        setLoading(false)
    }
}

const firebaseSignUp = async (email, password, setLoading) => {
    console.log('sign up')
    setLoading(true)
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        Alert.alert('Success', 'Account created successfully')
    } catch (error) {
        console.log(error);
        Alert.alert('Error', error.message)
    } finally {
        setLoading(false)
    }
}

const firebaseSignOut = () => {
    auth.signOut()
}

const addUserToFirestore = async (userData) => {
    try {
        const docRef = await addDoc(collection(FIREBASE_FIRESTORE, "users"), userData)
            .then(() => {
                console.log("Document successfully written!");
            })

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const getUserFromFirestore = async (onGetInfoSuccess) => {
    try {
        const q = query(collection(FIREBASE_FIRESTORE, "users"), where("id", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            onGetInfoSuccess(doc.data())
            // console.log(`${doc.id} => ${doc.data().fullName}`);
        });
    } catch (e) {
        console.error("Error retrieving user data: ", e);
    }
};

const checkUserExistsInFirestore = async () => {
    try {
        const q = query(collection(FIREBASE_FIRESTORE, "users"), where("id", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    } catch (e) {
        console.error("Error checking user existence: ", e);
        return false;
    }
};

const addFavoriteDish = async (dishId) => {
    try {
        const docRef = await addDoc(collection(FIREBASE_FIRESTORE, "favorite_dishes"), dishId)
            .then(() => {
                console.log("Document successfully written!");
            })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// const getFavoriteDishes = async (onGetDishesSuccess) => {
//     try {
//         const q = query(collection(FIREBASE_FIRESTORE, "favorite_dishes"))
//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//             console.log(doc.data());
//             onGetDishesSuccess(doc.data())
//             // console.log(`${doc.id} => ${doc.data().fullName}`);
//         });
//     } catch (e) {
//         console.error("Error retrieving user data: ", e);
//     }
// }

const getFavoriteDishes = (onGetDishesSuccess, onListenDishesChange) => {
    try {
      const q = query(collection(FIREBASE_FIRESTORE, "favorite_dishes"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const dishes = [];
        querySnapshot.forEach((doc) => {
          dishes.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        onGetDishesSuccess(dishes);
      });
  
      // To listen to data changes
    //   onListenDishesChange(unsubscribe);
    } catch (e) {
      console.error("Error retrieving user data: ", e);
    }
  };

export {
    firebaseSignIn,
    firebaseSignUp,
    addUserToFirestore,
    firebaseSignOut,
    getUserFromFirestore,
    checkUserExistsInFirestore,
    addFavoriteDish,
    getFavoriteDishes
}
