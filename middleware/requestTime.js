const requestTime = (req, res, next) => {

    console.log(`Time: ${new Date().toISOString()}`);

    next();

};

module.exports = requestTime;