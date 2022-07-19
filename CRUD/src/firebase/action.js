import db from './firebaseconfig'
import { collection, getDocs } from 'firebase/firestore'

export const getCollection = async(coleccion) => {
    const result = {statusResponse : false, data : null, error: null}
    try{
            const datos = await getDocs(collection(db, coleccion))
            const listaDatos = datos.docs.map(doc => ({id: doc.id, ...doc.data()}))
            result.statusResponse = true
            result.data = listaDatos
        
    }catch (error){
        result.error = error
    }

    return result
}