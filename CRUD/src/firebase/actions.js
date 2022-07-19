import db from './firebaseconfig'
import { collection, getDocs, getDoc, addDoc, deleteDoc, updateDoc, query, doc } from 'firebase/firestore'

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

export const addDocument = async(coleccion, data) => {
    const result = {statusResponse : false, data : null, error: null}

    try {
        const response = await addDoc(collection(db, coleccion), data)

        result.data = { id: response.id}
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }

    return result
}

export const getDocument = async(coleccion, id) => {
    const result = {statusResponse : false, data : null, error: null}

    try {
        const response = await getDoc(collection(db, coleccion), id)
        result.data = {id:response.id, ...response.data()}
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }

    return result
}

export const updateDocument = async(coleccion, id, data) => {
    const result = {statusResponse : false, error: null}

    try {
        await updateDoc(doc(db, coleccion, id), data)
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }

    return result
}

export const deleteDocument = async(coleccion, id, data) => {
    const result = {statusResponse : false, error: null}

    try {
        await deleteDoc(doc(db, coleccion, id));
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }

    return result
}



