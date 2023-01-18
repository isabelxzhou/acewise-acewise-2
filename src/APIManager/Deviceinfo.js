import React from 'react'
import { } from 'react-native'
import DeviceInfo from 'react-native-device-info';

export default class Deviceinfo {


    static apiLeval = DeviceInfo.getApiLevel()

    static getBrand = DeviceInfo.getBrand()

    static getApplicationName = DeviceInfo.getApplicationName()

    static getBuildNumber = DeviceInfo.getBuildNumber();

    static getBundleId = DeviceInfo.getBundleId();
    static getCarrier = (callback) => DeviceInfo.getCarrier().then(getCarrier => {
        callback(getCarrier)
    });
    static getDeviceToken = (callback) => DeviceInfo.getDeviceToken().then((deviceToken) => {
        callback(deviceToken)
    });
    static getDevice = (callback) => DeviceInfo.getDevice().then(device => {
        callback(device)
    });
    static getDeviceId = DeviceInfo.getDeviceId();
    
    static getFirstInstallTime = DeviceInfo.getFirstInstallTime();
    static getFontScale = DeviceInfo.getFontScale();
    static getFreeDiskStorage = DeviceInfo.getFreeDiskStorage();

    static getInstallReferrer = DeviceInfo.getInstallReferrer();

    static getLastUpdateTime = DeviceInfo.getLastUpdateTime();

    static getManufacturer = DeviceInfo.getManufacturer();
    static getMaxMemory = DeviceInfo.getMaxMemory();
    static getModel = DeviceInfo.getModel();
    static getPhoneNumber = DeviceInfo.getPhoneNumber();
    static getReadableVersion = DeviceInfo.getReadableVersion();
    static getSerialNumber = DeviceInfo.getSerialNumber();
    static getSystemName = DeviceInfo.getSystemName();
    static getSystemVersion = DeviceInfo.getSystemVersion();
    static getTotalDiskCapacity = DeviceInfo.getTotalDiskCapacity();
    static getTotalMemory = DeviceInfo.getTotalMemory();
    static getUniqueID = DeviceInfo.getUniqueId();
    static getUserAgent = DeviceInfo.getUserAgent();
    static getVersion = DeviceInfo.getVersion();
    static getBatteryLevel = (callback) => DeviceInfo.getBatteryLevel().then(batteryLevel => {
        callback(batteryLevel)
    });
    static getIPAddress = (callback) => DeviceInfo.getIpAddress().then(ip => {
        callback(ip)
    });
    static getMACAddress = (callback) => DeviceInfo.getMACAddress().then(mac => {
        callback(mac)
    });
    static isLocationEnabled = (callback) => DeviceInfo.isLocationEnabled().then(boolFlag => {
        callback(boolFlag)
    })
    static isLandscape = (callback) => DeviceInfo.isLandscape().then(isLandscape => {
        callback(isLandscape)
    });

    static getDeviceName = (callback) => DeviceInfo.getDeviceName().then(device_name => {
        callback(device_name)
    });
}