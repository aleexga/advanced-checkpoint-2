// @FIXME: Remove disabling of rules
/* eslint-disable no-unused-vars*/

const TestController = {
  // List view for events
  list: (request, response, next) => {
    return response.json("List works");
  },
  // Test view for events
  show: (request, response, next) => {
    return response.json("Show works");
  },
  // Test view for events
  delete: (request, response, next) => {
    return response.json("Delete works");
  },
  // Test view for events
  update: (request, response, next) => {
    return response.json("Update works");
  },
  create: (request, response, next) => {
    return response.json("Create works");
  }
};

export default TestController;
