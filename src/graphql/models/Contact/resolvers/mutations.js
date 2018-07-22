const createContact = (_, args, ctx) => {
  const { input: contact } = args;
  return ctx.models.Contact.createContact(contact, ctx);
};

module.exports = {
  createContact,
};
