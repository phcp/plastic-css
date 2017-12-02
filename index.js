const util = require('util');
const sass = require('node-sass')
const sassRender = util.promisify(sass.render)

sassRender.render({
    file: 'sass/plastic.sass'
}).then((errors, result) => {

})

