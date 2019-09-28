const EventsService = require('./../services/EventsService');

exports.index = async (req, res) => 
{
  try {
    const result = await EventsService.getPageViews();
    res.status(200).send(result);
  } 
  catch (err) {
    console.log('err: ', err);
    res.status(500).send();
  }
}

exports.byBrowser = async (req, res) => 
{
  try {
    const result = await EventsService.getPageViewsByBrowser();
    res.status(200).send(result);
  } 
  catch (err) {
    console.log('err: ', err);
    res.status(500).send();
  }
}


exports.byCountry = async (req, res) => 
{
  try {
    const result = await EventsService.getPageViewsByCountry();
    res.status(200).send(result);
  } 
  catch (err) {
    console.log('err: ', err);
    res.status(500).send();
  }
}