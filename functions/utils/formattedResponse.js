module.exports = (statusCode, body) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body),
    }
}