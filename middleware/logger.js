const logger = (req, res, next) => {
const logger = (req, res, next) => {
res.on('finish', () => {
	console.log(`${req.method} ${req.url} - ${res.statusCode}`);
});
	next();
};

module.exports = logger;
}