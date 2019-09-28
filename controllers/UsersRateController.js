const EventsService = require('./../services/EventsService');

exports.index = async (req, res) => 
{
  try {
    const result = await EventsService.getUsersRate();
    res.status(200).send(result);
  } 
  catch (err) {
    console.log('err: ', err);
    res.status(500).send();
  }
}