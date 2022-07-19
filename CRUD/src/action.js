import {firebaseApp} from './firebase'
import { getFirestore } from 'firebase/firestore'

const db = getFirestore(firebaseApp)

export const getCollection = async(collection) => {
    const result = {statusResponse : false, data : null, error: null}
    try{
        const data = await db.collection(collection).get()
        console.log(data)
    }catch (error){
        result.error = error
    }

    return result
}

