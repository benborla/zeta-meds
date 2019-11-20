const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/zetameds-theme')
  .setPublicPath('/zetameds-theme')
  .addEntry('app', './themes/ZetaMedsTheme/assets/app.js')
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.name = 'zetaMedsTheme';

module.exports = config;