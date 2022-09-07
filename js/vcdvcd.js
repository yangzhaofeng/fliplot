import { readFileSync } from 'fs'
const _VALUE = new Set(['0', '1', 'x', 'X', 'z', 'Z'])
const _VECTOR_VALUE_CHANGE = new Set(['b', 'B', 'r', 'R'])

export class VCDVCD {
	constructor(
		vcd_path = null,
		vcd_content = null,
		only_sigs = false,
		print_deltas = false,
		print_dumps = false,
		print_dump_deltas = true,
		signals = [],
		store_tvs = true,
	)
	{
		this._data = {}
		this._endtime = 0
		this._signals = []
		this._store_tvs = store_tvs
		this._signal_changed = false;

		var all_sigs = (signals.length == 0)
		var cur_sig_vals = {}
		var hier = []
		var references_to_ids = {}
		var references_to_widths = {}
		var time = 0
		var print_dumps_refs = []

		if (typeof window === 'undefined'){
			if(!vcd_content && vcd_path){
				//console.log(vcd_path)
				vcd_content = readFileSync(vcd_path, 'utf-8')
				console.log(vcd_content)
			}
		}

		const vcd_lines = vcd_content.split('\n')
		//console.log(vcd_lines)
		for(var line of vcd_lines){
			if(line == ''){
				break
			}
			var line0 = line[0]
			line = line.trim()
			if(line == ''){
				continue
			}
			if(_VECTOR_VALUE_CHANGE.has(line0)){
				const [value, identifier_code] = line.substr(1).split(/\s+/)
				this._add_value_identifier_code(time, value, identifier_code, print_deltas, print_dumps, cur_sig_vals)
			}else if(_VALUE.has(line0)){
				const value = line0
				const identifier_code = line.substr(1)
				this._add_value_identifier_code(time, value, identifier_code, print_deltas, print_dumps, cur_sig_vals)
			}else if(line0 == '#'){
				if(print_dumps && (!print_dump_deltas || this._signal_changed)){
					ss = []
					ss.push(`${time}`)
					for(const [i, ref] of print_dumps_refs.entries()){
						const identifier_code = references_to_ids[ref]
						const value = cur_sig_vals[identifier_code]
						const value_hex = this._to_hex(value)
						ss.push(`${value_hex}`.padStart(references_to_widths[ref] + `${value_hex}`.length))
					}
					console.log(ss.join(' '))
				}
				time = parseInt(line.substr(1))
				this._endtime = time
				this._signal_changed = false
			}else if(line.includes('$enddefinitions')){
				if(only_sigs){
					break
				}
				if(print_dumps){
					console.log('0 time')
					if(signals){
						print_dumps_refs = signals
					}else{
						var pdr_to_sort = []
						for(var i of cur_sig_vals.keys()){
							pdr_to_sort.push(this._data[i]['references'][0])
						}
						pdr_to_sort.sort()
						print_dumps_refs = pdr_to_sort
					}
					var i
					var ref
					for([i, ref] of print_dumps_refs.slice(1).entries()){
						console.log([i, ref].join(' '))
						if(i == 0){
							i = 1
						}
						const identifier_code = references_to_ids[ref]
						const size = parseInt(this._data[identifier_code]['size'])
						const width = Math.max( Math.floor( size / 4 ), parseInt(Math.floor(Math.log10(i))) + 1 )
						references_to_widths[ref] = width
					}
					console.log()
					process.stdout.write('0 ') // print('0 '.format(i, ), end='')
					for([i, ref] of print_dumps_refs.slice(1).entries()){
						process.stdout.write(`${i}`.padStart(references_to_widths[ref]))
					}
					process.stdout.write('\r')
					console.log('='.repeat([...references_to_widths].reduce((s, a) => s + a, 0) + references_to_widths.length + 1))
				}
			}else if(line.includes('$scope')){
				hier.push(line.split(/\s+/)[2])
			}else if(line.includes('$upscope')){
				hier.pop()
			}else if(line.includes('$var')){
				var ls = line.split(/\s+/)
				var type = ls[1]
				var size = ls[2]
				const identifier_code = ls[3]
				const name = ls.slice(4, -1).join('')
				const path = hier.join('.')
				const reference = (path ? path : 'EXTERNAL') + '.' + name
				if(signals.includes(reference) || all_sigs){
					this._signals.push(reference)
					if(!(identifier_code in this._data)){
						this._data[identifier_code] = {
							'references': [],
							'size': size,
							'var_type': type,
						}
					}
					this._data[identifier_code]['references'].push(reference)
					references_to_ids[reference] = identifier_code
					if(print_dumps){
						cur_sig_vals[identifier_code] = 'x'
					}
				}
			}
		}
	}

	get_data(){
		/*
		 * Get the main parsed VCD data.
		 */
		return this._data
	}

	get_endtime(){
		/*
		 * Last timestamp present in the last parsed VCD.
		 *
		 * This can be extracted from the data, but we also cache while parsing.
		 *
		 * :rtype: int
		 */
		return this._endtime
	}

	get_signals(){
		/*
		 * Get the set of unique signal names from the parsed VCD,
		 * in the order they are defined in the file.
		 *
		 * This can be extracted from the data, but we also cache while parsing.
		 *
		 * :rtype: List[str]
		 */
		return this._signals
	}

	_add_value_identifier_code(
		time, value, identifier_code,
		print_deltas, print_dumps, cur_sig_vals
	){
		if(identifier_code in this._data){
			const entry = this._data[identifier_code]
			this._signal_changed = true
			if(this._store_tvs){
				if(!('tv' in entry)){
					entry['tv'] = []
				}
				entry['tv'].push([time, value]) // Should be tuple here
			}
			if(print_deltas){
				console.log([time, this._to_hex(value), entry['references'][0]].join(' '))
			}
		}
	}

	static _to_hex(s){
		for(const i = 0; i < s.length; i++){
			const c = s.charAt(i)
			if(!'01'.includes(c)){
				return c
			}
		}
		return parseInt(s, 2).toString(16)
	}
}

