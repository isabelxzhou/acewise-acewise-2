import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import GColor from './GColors';
import { CustomFont, FontSize } from './GConstant';




export const PickerModal = (props) => {
    return (
        <View>
            <Modal
                style={{ zIndex: 0 }}
                animationType='slide'
                transparent={true}
                visible={props.visible}
                animated={true}>
                <View style={{ flex: 1, zIndex: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View
                        style={styles.innerView}>
                        <View style={styles.mainWhiteView}>
                            <TouchableOpacity
                                onPress={props.galleryPress}
                                activeOpacity={1}
                                style={styles.cameraBtn}>
                                <Text style={[styles.modalText,{fontFamily : CustomFont.FontRegular}]}>Photo Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={props.cameraPress}
                                activeOpacity={1}
                                style={styles.photoGalleryBtn}>
                                <Text style={[styles.modalText,{fontFamily : CustomFont.FontRegular}]}>Camera</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={props.cancelPress}
                            activeOpacity={1}
                            style={styles.cancelBtn}>
                            <Text style={styles.modalText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    innerView: {
        marginTop: hp(65),
        flex: 1,
        bottom: 0,
        marginBottom: hp(5),
        opacity: 1.0,
        width: '100%',
    },
    mainWhiteView: { 
        backgroundColor: GColor.colorwhite, 
        borderRadius: 18, 
        marginHorizontal: wp(3) 
    },
    modalText: {
        color: '#007AFF',
        fontSize: FontSize.FontSize18,
        fontFamily: CustomFont.FontSemiBold
    },
    cameraBtn: { 
        height: hp(9), 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    photoGalleryBtn: { 
        height: hp(9), 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderTopColor: GColor.themeGray, 
        borderTopWidth: 0.2 
    },
    cancelBtn: { 
        height: hp(9), 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: hp(1.5), 
        borderRadius: 18, 
        marginHorizontal: wp(3), 
        backgroundColor: GColor.colorwhite
    },
})
