import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorageKeys = {
    currentuser: "currentuser",
    isuserLogin: 'isuserLogin',
    userToken: 'userToken',
    email : 'email',
    password : 'password',
    firstName : 'Firstname',
    lastName : 'LastName',
    fullName : 'Fullname',
    membershipType : 'membershipType',
    memberNumber : 'memberNumber',
}

export const storeAsyncData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data)
        console.log("AsyncStorage=======Success>>>>>")
    } catch (e) {
        // saving error
        console.log("AsyncStorage(ERROR)=======>>>>>", e)
    }
}

export const getAsyncData = async (key, callback) => {
    try {
        const value = await AsyncStorage.getItem(key)
        // value previously stored
        callback(value)
        console.log("AsyncStorage====GET===>>>>>")

    } catch (e) {
        // error reading value
        console.log("AsyncStorage(ERROR)=======>>>>>", e)
    }
}
export const clearAllAsyncData = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }
}

export const clearDefaultsKeys = async () => {
    try {
        await AsyncStorage.removeItem(asyncStorageKeys.currentuser);
        await AsyncStorage.removeItem(asyncStorageKeys.isuserLogin);
        await AsyncStorage.removeItem(asyncStorageKeys.userToken);

    } catch (e) {
        // clear error
    }
}

export const removeItemValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}
