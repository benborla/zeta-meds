const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/zetameds-theme')
  .setPublicPath('/zetameds-theme')
  .addEntry('app', './themes/ZetaMeds/assets/app.js')
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.name = 'zetaMedsTheme';

module.exports = config;
