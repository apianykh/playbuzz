module.exports = (req, res, next) => 
{
  if(req.headers.authorization === process.env.AUTH_TOKEN) {
    return next();
  }
  res.status(401).send('Unauthorized');
}