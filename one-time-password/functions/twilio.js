const twilio=require('twilio');

const accountSid = 'ACceca4262e40df9249b9d815ae02336f5';

const authToken='4b9b0a5d57a506334a03184d087d8534';

module.exports = new twilio.Twilio(accountSid, authToken);
