const db = require("./app/models");
db.sequelize.sync();

const countryCapital = db.countryCapital

async function getAllCapital() {
    let result = { statusCode: 200, isBase64Encoded: false}

    result.body = await countryCapital.findAll({
        where: {
            name: 'Viet Nam'
        }
    })

    console.log(JSON.stringify(result))
    return result
}

obj = {
    "resource": "/",
    "path": "/",
    "httpMethod": "POST",
    "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        "CloudFront-Forwarded-Proto": "https",
        "CloudFront-Is-Desktop-Viewer": "true",
        "CloudFront-Is-Mobile-Viewer": "false",
        "CloudFront-Is-SmartTV-Viewer": "false",
        "CloudFront-Is-Tablet-Viewer": "false",
        "CloudFront-Viewer-Country": "VN",
        "Content-Type": "application/json",
        "Host": "z581pgo7k9.execute-api.ap-southeast-1.amazonaws.com",
        "Postman-Token": "07e4abcf-81e5-4da1-bd74-4ed5db60a311",
        "User-Agent": "PostmanRuntime/7.28.0",
        "Via": "1.1 2787299048b9e6595220467d6c4ce280.cloudfront.net (CloudFront)",
        "X-Amz-Cf-Id": "9iMN8a5k8h3ht_hvjW0Cq8dQ9aWFyUzMM0ZofLbGC7uz1_KqbiUbIQ==",
        "X-Amzn-Trace-Id": "Root=1-60d3159e-612307504fce22957671608c",
        "X-Forwarded-For": "42.116.155.118, 130.176.25.92",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
        "Accept": [
            "*/*"
        ],
        "Accept-Encoding": [
            "gzip, deflate, br"
        ],
        "Cache-Control": [
            "no-cache"
        ],
        "CloudFront-Forwarded-Proto": [
            "https"
        ],
        "CloudFront-Is-Desktop-Viewer": [
            "true"
        ],
        "CloudFront-Is-Mobile-Viewer": [
            "false"
        ],
        "CloudFront-Is-SmartTV-Viewer": [
            "false"
        ],
        "CloudFront-Is-Tablet-Viewer": [
            "false"
        ],
        "CloudFront-Viewer-Country": [
            "VN"
        ],
        "Content-Type": [
            "application/json"
        ],
        "Host": [
            "z581pgo7k9.execute-api.ap-southeast-1.amazonaws.com"
        ],
        "Postman-Token": [
            "07e4abcf-81e5-4da1-bd74-4ed5db60a311"
        ],
        "User-Agent": [
            "PostmanRuntime/7.28.0"
        ],
        "Via": [
            "1.1 2787299048b9e6595220467d6c4ce280.cloudfront.net (CloudFront)"
        ],
        "X-Amz-Cf-Id": [
            "9iMN8a5k8h3ht_hvjW0Cq8dQ9aWFyUzMM0ZofLbGC7uz1_KqbiUbIQ=="
        ],
        "X-Amzn-Trace-Id": [
            "Root=1-60d3159e-612307504fce22957671608c"
        ],
        "X-Forwarded-For": [
            "42.116.155.118, 130.176.25.92"
        ],
        "X-Forwarded-Port": [
            "443"
        ],
        "X-Forwarded-Proto": [
            "https"
        ]
    },
    "queryStringParameters": null,
    "multiValueQueryStringParameters": null,
    "pathParameters": null,
    "stageVariables": null,
    "requestContext": {
        "resourceId": "1v081i0nwg",
        "resourcePath": "/",
        "httpMethod": "POST",
        "extendedRequestId": "BYBQuHiyyQ0FShw=",
        "requestTime": "23/Jun/2021:11:06:06 +0000",
        "path": "/test",
        "accountId": "207986101045",
        "protocol": "HTTP/1.1",
        "stage": "test",
        "domainPrefix": "z581pgo7k9",
        "requestTimeEpoch": 1624446366031,
        "requestId": "d604196c-4d0e-453a-b051-7a5e18857802",
        "identity": {
            "cognitoIdentityPoolId": null,
            "accountId": null,
            "cognitoIdentityId": null,
            "caller": null,
            "sourceIp": "42.116.155.118",
            "principalOrgId": null,
            "accessKey": null,
            "cognitoAuthenticationType": null,
            "cognitoAuthenticationProvider": null,
            "userArn": null,
            "userAgent": "PostmanRuntime/7.28.0",
            "user": null
        },
        "domainName": "z581pgo7k9.execute-api.ap-southeast-1.amazonaws.com",
        "apiId": "z581pgo7k9"
    },
    "body": "{\r\n    \"name\": \"America\",\r\n    \"capital\": \"Washington DC\"\r\n}",
    "isBase64Encoded": false
}

console.log(JSON.parse(obj.body))
// getAllCapital()