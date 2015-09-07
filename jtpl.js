/* ===========================================================
 * jtpl.js
 * ===========================================================
 * https://github.com/jy1989/jtpl
 * ========================================================== */
function jtpl() {
	//var result=tpl;
	var argLen = arguments.length;
	if (argLen < 3) {
		return 'parameter < 3';
	}
	var tpl = arguments[0] || '{v1}';
	var type = arguments[1] || 'string';
	//

	if (type == 'object') {
		var i;
		var data = arguments[2];
		for (i in data) {
			console.log(typeof data[i], i, data[i]);
			if (typeof data[i] === 'object') {
				tpl = replaceDeep(tpl, data[i], i);
			} else {
				tpl = tpl.replace(eval('/{' + i + '}/g'), data[i]);
			}
		}

	} else if (type == 'string') {

		for (var i = 2; i < arguments.length; i++) {
			tpl = tpl.replace(eval('/{v' + (i - 1) + '}/g'), arguments[i]);
		}

	}
	return tpl;
}

function replaceDeep(tpl, data, fatherName) {
	for (i in data) {
		var prefix = fatherName + '.';
		if (typeof data[i] === 'object') {
			//console.log(prefix+'.'+i);
			tpl = replaceDeep(tpl, data[i], prefix + i);
		} else {

			tpl = tpl.replace(eval('/{' + prefix + i + '}/g'), data[i]);
		}
	}

	return tpl;

}
