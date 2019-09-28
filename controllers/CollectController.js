const GeoIPLookupService = require('./../services/GeoIPLookupService');
const EventsService = require('./../services/EventsService');

exports.index = async (req, res) => 
{
  try {
    const user_country = await GeoIPLookupService(req);
    
    const data = {
      page_id: req.body['page-id'] || null,
      user_id: req.body['user-id'] || null,
      timestamp: req.body['timestamp'] || Date.now() / 1000 | 0,
      user_agent: req.headers['user-agent'] || null,
      user_country: user_country,
    };

    await EventsService.create(data)
    
    res.status(201).send();
  } 
  catch (err) {
    console.log('err: ', err);
    res.status(500).send();
  }
}