import { db } from "../firebase";


class DbClass {

        dbFire ;

        constructor(){

            this.dbFire = db ;
            
        }

        sendMessage = async (message : string ) => {
            console.log("message" , message) ;


        }

}

export default DbClass ;