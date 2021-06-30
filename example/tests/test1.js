const {gen, genCustom} = require('../../index.js')
async function generate() {
    var custom = await genCustom(1, false, false, true, false)
    console.log(custom)
}
generate()