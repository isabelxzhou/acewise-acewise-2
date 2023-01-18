import {useContext} from 'react'
import { LoaderContext } from '../Context/LoaderContextProvider';
import { apiBaseURL, apiHeaderKeyValue, apiKeys, statusCode } from "./ApiConstants";
import { NativeModules } from "react-native"
// import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { toggleLoader } from '../common/GFunction';
import { asyncStorageKey, getData } from '../common/GConstant';

const axios = require('axios').default;
export default class APIManager{
    

    // Create a url for api
    static getURL = (endPoint) => {
        return apiBaseURL.kBaseUrl + endPoint
    }
    // Configure header
    static getHeader = () => {
        let header = {
            "Content-Type": "application/json",
            "api-key": apiHeaderKeyValue.apiKeyValue,
          //  "app": apiHeaderKeyValue.appKeyValue
        }
        return header
    }

    //Encrypt-Decrypt Text
    //----------------------------------------------------------------------------
    static encryptText = (strData, callback) => {
        NativeModules.NativeEncryption.encryptData(apiKeys.secretKey, apiKeys.iv, strData, (error, data) => {
            callback(data)
        })
    }

    static decryptText = (strData, callback) => {
        NativeModules.NativeEncryption.decryptData(apiKeys.secretKey, apiKeys.iv, JSON.stringify(strData), (error, data) => {
            callback(data)
        })
    }

    //API Calls
    //POST Api Without Token----------------------------------------------------------------------------
    static makeGetRequest = async (endpoint, props, callback, showLoader = true) => {
        var header = this.getHeader()

        if (showLoader){
            toggleLoader(true)
        }
        await getData(asyncStorageKey.userData,(userData) => {
            if(userData){
                let data = JSON.parse(userData)
                this.encryptText(data?.token, async (encryptedToken) => {
                    let headerToken = {
                        "token" : encryptedToken 
                    }
                    header = {...header,...headerToken}
                    console.log("\n==========Header==============\n", header)
                    console.log("\n==============URL=================\n", this.getURL(endpoint))

                    await axios.get(this.getURL(endpoint), { headers: header, timeout: 60000 }).then((response) => {
                        toggleLoader(false)
                        if (response.status == 200) {
                            this.decryptText(response.data, (data) => {
                                try {
                                    var data = JSON.parse(data)
                                    console.log("\n===============decryptData============\n", data)
                                    if (data?.code == statusCode.userSessionExpire){
                                        console.log("Hail hydra!!!")
                                        AsyncStorage.clear().then(() => {
                                            props.navigation.dispatch(
                                                CommonActions.reset({
                                                    index: 1,
                                                    routes: [{ name: "WelcomeScreen" }],
                                                })
                                            );
                                        });
                                    }else{
                                        callback(data, null)    
                                    }
                                } catch (e) {
                                    console.warn("\n===============Error============˜˜\n", e)
                                    callback(data, null)
                                }
                            })
                        } else {
                            callback(data, null)
                        }
                    }).catch((error) => {
                        console.log("error =====> ", error)
                        toggleLoader(false)
                        callback(error, null)
                        if (error.code === 'ECONNABORTED') {
                            // showError("Time out")
                        } else if (error.response.status == 401) {
                            AsyncStorage.clear().then(() => {
                                props.navigation.dispatch(
                                    CommonActions.reset({
                                        index: 1,
                                        routes: [{ name: "WelcomeScreen" }],
                                    })
                                );
                            });
                        }
                    });
                })
                
            }
        })
    }

    static makePostRequest = async (endpoint, dictParam, props, callback, showLoader = true) => {
        var header = this.getHeader()

        if (showLoader){
            toggleLoader(true)
        }
        await getData(asyncStorageKey.userData,(userData) => {
            if(userData){
                let data = JSON.parse(userData)
                this.encryptText(data?.token, async (encryptedToken) => {
                    let headerToken = {
                        "token" : encryptedToken 
                    }
                    header = {...header,...headerToken}
                })
            }
        })
        this.encryptText(JSON.stringify(dictParam), async (data) => {
            
            console.log("\n==========Header==============\n", header)
            console.log("\n===============Parameters============\n", dictParam)
            console.log("\n===============Encrpted Parameters============\n", data)
            console.log("\n==============URL=================\n", this.getURL(endpoint))

            await axios.post(this.getURL(endpoint), data, { headers: header, timeout: 60000 }).then((response) => {
                toggleLoader(false)
                if (response.status == 200) {
                    
                    this.decryptText(response.data, (data) => {
                        try {
                            var data = JSON.parse(data)
                            console.log("\n===============decryptData============\n", data)
                            if (data?.code == statusCode.userSessionExpire){
                                console.log("Hail hydra!!!")
                                AsyncStorage.clear().then(() => {
                                    props.navigation.dispatch(
                                        CommonActions.reset({
                                            index: 1,
                                            routes: [{ name: "WelcomeScreen" }],
                                        })
                                    );
                                });
                            }else{
                                callback(data, null)    
                            }
                            
                        } catch (e) {
                            console.warn("\n===============Error============˜˜\n", e)
                            callback(data, null)
                        }
                    })
                } else {
                    callback(data, null)
                }
            }).catch((error) => {
                console.log("error =====> ", error)
                toggleLoader(false)
                callback(error, null)
                if (error.code === 'ECONNABORTED') {
                    // showError("Time out")
                } else if (error.response.status == 401) {
                    AsyncStorage.clear().then(() => {
                        props.navigation.dispatch(
                            CommonActions.reset({
                                index: 1,
                                routes: [{ name: "WelcomeScreen" }],
                            })
                        );
                    });
                }
            });
        })
    }
}
// import {useContext} from 'react'
// import { LoaderContext } from '../Context/LoaderContextProvider';
// import { apiBaseURL, apiHeaderKeyValue, apiKeys, statusCode } from "./ApiConstants";
// import { NativeModules } from "react-native"
// // import NetInfo from "@react-native-community/netinfo";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CommonActions } from '@react-navigation/native';
// import { toggleLoader } from '../common/GFunction';
// import { asyncStorageKey, getData } from '../common/GConstant';
// import Aes from 'react-native-aes-crypto'
// import base64 from 'react-native-base64'
// const axios = require('axios').default;
// export default class APIManager{
    

//     // Create a url for api
//     static getURL = (endPoint) => {
//         return apiBaseURL.kBaseUrl + endPoint
//     }
//     // Configure header
//     static getHeader = () => {
//         let header = {
//             "Content-Type": "text/plain",
//             "api-key": apiHeaderKeyValue.apiKeyValue,
//             // 'accept-language' : 'en'
//           //  "app": apiHeaderKeyValue.appKeyValue
//         }
//         return header
//     }

//     //Encrypt-Decrypt Text
//     //----------------------------------------------------------------------------
//     static encryptText = (strData, callback) => {
//         NativeModules.NativeEncryption.encryptData(apiKeys.secretKey, apiKeys.iv, strData, (error, data) => {
//             console.log("Key",apiKeys.secretKey)
//             console.log("IV",apiKeys.iv)
//             callback(data)
//         })
//     }
//     static encryptData = (text, callback) => {
//         Aes.encrypt(text, apiKeys.secretKey, apiKeys.iv).then(cipher => {
//             callback(cipher)
//         })
//     }
    
//     static decryptData = (text, callback) => {
//         try {
//             Aes.decrypt(text, apiKeys.secretKey, apiKeys.iv).then(data => {
//                 callback(data)
//             })
//           } catch (e) {
//               console.error(e)
//           }
        
//     }
    
//     static decryptText = (strData, callback) => {
//         NativeModules.NativeEncryption.decryptData(apiKeys.secretKey, apiKeys.iv, JSON.stringify(strData), (error, data) => {
//             callback(data)
//         })
//     }

//     //API Calls
//     //POST Api Without Token----------------------------------------------------------------------------
//     static makeGetRequest = async (endpoint, props, callback, showLoader = true) => {
//         var header = this.getHeader()

//         if (showLoader){
//             toggleLoader(true)
//         }
//         await getData(asyncStorageKey.userData,(userData) => {
//             if(userData){
//                 let data = JSON.parse(userData)
//                 this.encryptText(data?.token, async (encryptedToken) => {
//                     let headerToken = {
//                         "token" : encryptedToken 
//                     }
//                     header = {...header,...headerToken}
//                     console.log("\n==========Header==============\n", header)
//                     console.log("\n==============URL=================\n", this.getURL(endpoint))

//                     await axios.get(this.getURL(endpoint), { headers: header, timeout: 60000 }).then((response) => {
//                         toggleLoader(false)
//                         if (response.status == 200) {
//                             this.decryptText(response.data, (data) => {
//                                 try {
//                                     var data = JSON.parse(data)
//                                     console.log("\n===============decryptData============\n", data)
//                                     if (data?.code == statusCode.userSessionExpire){
//                                         console.log("Hail hydra!!!")
//                                         AsyncStorage.clear().then(() => {
//                                             props.navigation.dispatch(
//                                                 CommonActions.reset({
//                                                     index: 1,
//                                                     routes: [{ name: "WelcomeScreen" }],
//                                                 })
//                                             );
//                                         });
//                                     }else{
//                                         callback(data, null)    
//                                     }
//                                 } catch (e) {
//                                     console.warn("\n===============Error============˜˜\n", e)
//                                     callback(data, null)
//                                 }
//                             })
//                         } else {
//                             callback(data, null)
//                         }
//                     }).catch((error) => {
//                         console.log("error =====> ", error)
//                         toggleLoader(false)
//                         callback(error, null)
//                         if (error.code === 'ECONNABORTED') {
//                             // showError("Time out")
//                         } else if (error.response.status == 401) {
//                             AsyncStorage.clear().then(() => {
//                                 props.navigation.dispatch(
//                                     CommonActions.reset({
//                                         index: 1,
//                                         routes: [{ name: "WelcomeScreen" }],
//                                     })
//                                 );
//                             });
//                         }
//                     });
//                 })
                
//             }
//         })
//     }

//     static makePostRequest = async (endpoint, dictParam, props, callback, showLoader = true) => {
//         var header = this.getHeader()

//         if (showLoader){
//             toggleLoader(true)
//         }
//         await getData(asyncStorageKey.userData,(userData) => {
//             if(userData){
//                 let data = JSON.parse(userData)
//                 this.encryptText(data?.token, async (encryptedToken) => {
//                     let headerToken = {
//                         "token" : encryptedToken 
//                     }
//                     header = {...header,...headerToken}
//                 })
//             }
//         })
//         this.encryptData(JSON.stringify(dictParam), (data) => {
//             console.log("Encrypted data are : ", data)
//             setTimeout(() => {
//                 // var utf8 = require('utf8');
//                 // var binaryToBase64 = require('binaryToBase64');

//                 // var text = data;
//                 // var bytes = utf8.encode(text);
//                 // var encoded = binaryToBase64(bytes);
//                 var encoded = base64.encode(data);
//                 console.log("Encoded data are :",encoded);
//                 console.log("Decryption ",Aes.decrypt(encoded, apiKeys.secretKey, apiKeys.iv))
//             }, 3000);
            
//         })
//         return
//         this.encryptText(JSON.stringify(dictParam), async (data) => {
            
//             console.log("\n==========Header==============\n", header)
//             console.log("\n===============Parameters============\n", dictParam)
//             console.log("\n===============Encrpted Parameters============\n", data)
//             console.log("\n==============URL=================\n", this.getURL(endpoint))
//             await axios.post(this.getURL(endpoint), data, { headers: header, timeout: 60000 }).then((response) => {
//                 console.log("response" , response)
//                 toggleLoader(false)
//                 if (response.status == 200) {
                    
//                     this.decryptText(response.data, (data) => {
//                         try {
//                             var data = JSON.parse(data)
//                             console.log("\n===============decryptData============\n", data)
//                             if (data?.code == statusCode.userSessionExpire){
//                                 console.log("Hail hydra!!!")
//                                 AsyncStorage.clear().then(() => {
//                                     props.navigation.dispatch(
//                                         CommonActions.reset({
//                                             index: 1,
//                                             routes: [{ name: "WelcomeScreen" }],
//                                         })
//                                     );
//                                 });
//                             }else{
//                                 callback(data, null)    
//                             }
                            
//                         } catch (e) {
//                             console.warn("\n===============Error============˜˜\n", e)
//                             callback(data, null)
//                         }
//                     })
//                 } else {
//                     callback(data, null)
//                 }
//             }).catch((error) => {
//                 console.log("error =====> ", error)
//                 // toggleLoader(false)
//                 // callback(error, null)
//                 // if (error.code === 'ECONNABORTED') {
//                 //     // showError("Time out")
//                 // } else if (error.response.status == 401) {
//                 //     AsyncStorage.clear().then(() => {
//                 //         props.navigation.dispatch(
//                 //             CommonActions.reset({
//                 //                 index: 1,
//                 //                 routes: [{ name: "WelcomeScreen" }],
//                 //             })
//                 //         );
//                 //     });
//                 // }
//             });
//         })
//     }
// }