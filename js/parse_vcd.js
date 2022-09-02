import { VCDVCD } from "./vcdvcd.js"

function renameKey(dictionary, oldkey, newkey){
	if(newkey != oldkey){
		dictionary[newkey] = dictionary[oldkey]
		delete dictionary[oldkey]
	}
}

function format_vcdvcd(data){
	var now = [0]

	for(const vcdID of Object.keys(data)){
		const signal = data[vcdID]

		try{
			renameKey(signal, 'var_type', 'type')
			renameKey(signal, 'size', 'width')

			try{
				signal['wave'] = []
				for(const item of signal['tv']){
					signal['wave'].push({'time': item[0], 'bin': item[1]})
				}
				delete signal['tv']
				now[0] = Math.max(signal['wave'][signal['wave'].length - 1]['time'], now[0]) // [signal['wave'].length - 1] can be replaced by .at(-1) since ES2022
			}catch(e){
				if(e instanceof TypeError){
					signal['wave'] = []
				}
				//console.error(e.message)
			}

			signal['vcdid'] = vcdID
			const hierarcy = signal['references'][0].split('.')
			signal['name'] = hierarcy[hierarcy.length - 1] // = hierarcy.at(-1)
		}catch(e){
			console.error("Error at: ", vcdID)
			throw e
		}
	}

	const children = Object.keys(data).map(function(key){ return data[key] })
	return {
		'children': children,
		"name": "dduummyy",
		"now": now[0],
		"type": "struct"
	}
}

export function parseWith_vcdvcd(fname=null, content=null){
	if(content){
		fname = null
	}
	const vcd = new VCDVCD(fname, content)
	const data = vcd.get_data()
	return format_vcdvcd(data)
}
