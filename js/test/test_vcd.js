import { parseWith_vcdvcd } from "../parse_vcd.js"
//import { readFileSync } from 'fs'

//const vcd_path = '../../test/AxiRegTC_test_write.vcd'
const vcd_path = '../../test/wiki.vcd'

//console.log(path)

//var new_vcd = new VCDVCD(vcd_path, null)

//var test_data = new_vcd.get_data()

var final_data = parseWith_vcdvcd(vcd_path, null)

console.dir(final_data, { depth: null })

