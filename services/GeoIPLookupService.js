const path = require('path');
const Geoip2Reader = require('@maxmind/geoip2-node').Reader;
const DB = path.resolve(__dirname, './../geoip_db/GeoLite2-Country.mmdb');

module.exports = async (req) => 
{
  const client_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  const reader = await Geoip2Reader.open(DB);
  try {
    const { country: { isoCode } } = reader.country(client_ip);
    return isoCode;
  } 
  catch (err) {
    switch(err.name) {
      case 'AddressNotFoundError':
        return null; 
      default:
        throw err;
    }
  }
}