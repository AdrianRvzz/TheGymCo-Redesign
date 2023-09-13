module.exports = function override(config, env) {
  // Busca las reglas relacionadas con archivos de imagen
  const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));

  // Agrega el formato WebP a las extensiones permitidas
  fileLoaderRule.test = /\.(png|jpe?g|gif|webp)$/;

  return config;
};
