const path = require('path')
var webpack = require('webpack')

module.exports = {
	outputDir: "../src/main/resources/static",
	transpileDependencies: [
		/\bvue-echarts\b/,
		/\bresize-detector\b/,
		/\bvue-c3\b/,
		/\bvue-masonry\b/,
		/\bvue-cropper\b/,
		/\bvuedraggable\b/
	],
	chainWebpack: config => {
		// Add "node_modules" alias
		config.resolve.alias
			.set('node_modules', path.join(__dirname, './node_modules'))

		config
			.plugin('jquery')
			.use(webpack.ProvidePlugin, [{
				$: "jquery",
				jQuery: "jquery",
			}])

		// Disable "prefetch" plugin since it's not properly working in some browsers
		config.plugins
			.delete('prefetch')

		// Do not remove whitespaces
		config.module.rule('vue')
			.use('vue-loader')
			.loader('vue-loader')
			.tap(options => {
				options.compilerOptions.preserveWhitespace = true
				return options
			})

		config.module.rules.delete('eslint');
	},

	configureWebpack: {
		resolve: {
			alias: {
				"@": path.join(__dirname, "src/")
			}
		},
		entry : ["babel-polyfill", "./src/main.js"]
	}
}
