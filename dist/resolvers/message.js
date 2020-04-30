"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

var _default = {
  Query: {
    messages: async (_, {
      chatId,
      offset
    }, {
      models
    }) => {
      return await models.message.findAll({
        where: {
          chatId
        },
        order: [["created_at", "DESC"]],
        limit: 20,
        offset
      }, {
        raw: true
      });
    }
  },
  Mutation: {
    createMessage: async (_, args, {
      models,
      user,
      pubsub
    }) => await models.message.create({ ...args,
      userId: user.id
    }, {
      raw: true
    }).then(async newMessage => {
      pubsub.publish(_constants.subTypes.NEW_MESSAGE, {
        newMessage
      });
      return true;
    }).catch(() => false),
    deleteMessage: async (_, {
      id
    }, {
      models,
      pubsub
    }) => await models.message.findByPk(id).then(deleteMessage => {
      return models.message.destroy({
        where: {
          id
        }
      }).then(() => {
        pubsub.publish(_constants.subTypes.DELETE_MESSAGE, {
          deleteMessage
        });
        return true;
      }).catch(() => false);
    }),
    readMessage: async (_, {
      id
    }, {
      models,
      pubsub
    }) => await models.message.update({
      unread: false
    }, {
      where: {
        id
      },
      returning: true,
      plain: true
    }).then(message => {
      return id;
    }),
    userTyping: async (_, {
      chatId,
      username
    }, {
      pubsub
    }) => {
      pubsub.publish(_constants.subTypes.USER_TYPING, {
        chatId,
        userTyping: username
      });
      return true;
    }
  }
};
exports.default = _default;