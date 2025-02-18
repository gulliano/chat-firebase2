import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

const googleProvider : GoogleAuthProvider = new GoogleAuthProvider() ;

class AuthClass {
   
    authFire ;
    dbFire ; 
       
    constructor (){
        this.authFire =  auth ;
        this.dbFire = db ;
        
    }

    connexionGoogle = async () => { 
        
        const result = await signInWithPopup(this.authFire , googleProvider) ;
        console.log("user" , result ) ; 

        if(result !=null) { // si l'utilisateur est connecté 
                // préparation de la query 
                const docRefUser = doc(this.dbFire, "users" , result.user.uid)
                // lancement de la query
                const snapUser = await getDoc(docRefUser) ;


                if(!snapUser.exists()){ //

                    await setDoc(docRefUser ,{
                        name : result.user.displayName 

                    })

                }

            
                
        }

     }


}

export default AuthClass ;