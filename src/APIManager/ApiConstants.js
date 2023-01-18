export const WebViewLink = {
    webLoader : 'https://www1.nyc.gov/site/opportunity/portfolio/restaurant-revitalization-program.page'
}

export const apiBaseURL = {
    kBaseUrl : 'http://54.185.74.146:8080/acewise/'
    // development: "http://192.168.1.214:8020/api/v1/", // It is use localhost for API.
    // stage: "http://13.235.173.222:8024/api/v1/", //It is use hyperlink server for API.
    // production: ""//It is use live server for API.
}

// API end points

export const apiEndPoint = {
    login: "mobile/login",
    register: "mobile/register",
    logout : 'mobile/logout',
    viewProfile : 'mobile/view-profile'
}

// API methods
export const methodType = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE'
}

// API status code
export const statusCode = {
    invaildOrFail: "0",
    success: "1",
    successTeam: "7",
    emptyData: "2",
    emailNotVerify: "5",
    forceUpdateApp: "6",
    socialIdNotRegister: "11",
    userSessionExpire: "-1",
    unknown: "1000"
}

// API keys
export const apiKeys = {
    secretKey : "SHlwZXJsaW5rIEluZm9zeXN0ZW0gUHZ0",
    iv: "SGVtYW50IE1hZG5h",
}

// API Header key
export const apiHeaderKeyValue = {
    apiKey: "api-key",
    // apiKeyValue: "60b9b6cc5395301b00a1ddee8",
    apiKeyValue : 'EfRSFaH8SDr7z9qG2SA1p0DMqmKlQoD7knZmagrJ9Gk=',
    appKey: "app",
    appKeyValue: "UlkSXPxs8Gb9DZm4AyDaXQ==",
    tokenKey: "token",
    contentTypeKey: "content-type",
    contentTypeApplicationForm: "application/x-www-form-urlencoded",
    contentTypeApplicationTextPlain: "text/plain"
}

