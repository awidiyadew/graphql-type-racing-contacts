const getTypeRacing = (_, args, ctx) => ctx.models.TypeRacing.getTypeRacing(ctx, args.email);

module.exports = {
  typeRacing: getTypeRacing,
};
