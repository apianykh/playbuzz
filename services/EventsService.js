const EventModel = require('./../models/EventModel');

const getAggregationPipeline = (group) => {
  return [
    {
      $group : {
        ...group,
        views: { $sum: 1 }
      },
    },
    { $project: { _id: 0 } },
    { $sort: { views: -1 } }
  ];
}

class EventsService
{
 
  static async create(data) { 
    const event = new EventModel(data);
    event.save();
    return event.toObject();
  }

  static async getPageViews() {
    const pipeline = getAggregationPipeline({
      _id: '$page_id', 
      page_id: { $first: '$page_id' }, 
    });
    return await EventModel.aggregate(pipeline);
  }

  static async getPageViewsByBrowser() {
    const pipeline = getAggregationPipeline({
      _id: {
        page_id: '$page_id',
        user_agent: '$user_agent'
      }, 
      page_id: { $first: '$page_id' }, 
      user_agent: { $first: '$user_agent' }, 
    });
    return await EventModel.aggregate(pipeline);
  }

  static async getPageViewsByCountry() {
    const pipeline = getAggregationPipeline({
      _id: {
        page_id: '$page_id',
        user_country: '$user_country'
      }, 
      page_id: { $first: '$page_id' }, 
      user_country: { $first: '$user_country' }, 
    });
    return await EventModel.aggregate(pipeline);
  }

  static async getUsersRate() {
    const pipeline = getAggregationPipeline({
      _id: '$user_id', 
      user_id: { $first: '$user_id' }, 
    });
    return await EventModel.aggregate(pipeline);
  }
  
}

module.exports = EventsService;