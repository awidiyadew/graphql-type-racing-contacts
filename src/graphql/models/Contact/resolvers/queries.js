const getContacts = (_, args, ctx) => ctx.models.Contact.getContacts(ctx);

module.exports = {
  contacts: getContacts,
};
