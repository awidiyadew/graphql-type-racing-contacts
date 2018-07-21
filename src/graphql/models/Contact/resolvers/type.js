const getTypeRacing = (contact, args, ctx) => {
  return ctx.models.TypeRacing.getTypeRacing(ctx, contact.email);
};

const typeResolvers = {
  Contact: {
    typeRacing: getTypeRacing,
  },
};

module.exports = typeResolvers;
