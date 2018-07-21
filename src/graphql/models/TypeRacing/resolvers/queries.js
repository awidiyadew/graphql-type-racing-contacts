const getTypeRacing = (_, args, ctx) => {
  const email = args.id;
  return ctx.models.TypeRacing.getTypeRacing(ctx, email);
};

module.exports = {
  typeRacing: getTypeRacing,
};
