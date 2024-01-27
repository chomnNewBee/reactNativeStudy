// storage.js
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true, 
  sync: null
});
/**
 * this function is a simple version of storage.load,easy to use
 */
export async function ReadStorage(key){
    //console.log(key)
    let result = await storage.load({
        key:key
    })
    return result
}
export function WriteStorage(key,data){
    storage.save({key:key,data:data})
}
export default storage;