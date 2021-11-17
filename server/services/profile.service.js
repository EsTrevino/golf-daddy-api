const db = require("../models");
const service = {};

service.findByEmail = email => {
  return db.Profile.findOne({ where: { email } });
};

service.create = profileInfo => {
  return db.Profile.create(profileInfo);
};

module.exports = service;
