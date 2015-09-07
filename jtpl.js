/* ===========================================================
 * jtpl.js
 * ===========================================================
 * https://github.com/jy1989/jtpl
 * ========================================================== */
function tpl() {
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

				tpl = tpl.replace(eval('/{' + i + '}/g'), data[i]);
			}

		} else if (type == 'string') {

			for (var i = 2; i < arguments.length; i++) {
				tpl = tpl.replace(eval('/{v' + (i - 1) + '}/g'), arguments[i]);
			}

		}
		return tpl;
	}
