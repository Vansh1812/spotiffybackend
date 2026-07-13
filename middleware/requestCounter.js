let requestCount = 0;

const requestCounter = (req, res, next) => {

    requestCount++;

    console.log(`Request #${requestCount}`);

    next();

};

module.exports = requestCounter;