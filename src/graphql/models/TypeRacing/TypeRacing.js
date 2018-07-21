class TypeRacing {
  static getTypeRacing(ctx, email) {
    return ctx.connectors.typeRacingConnector.getTypeRacing(email);
  }
}

module.exports = TypeRacing;
