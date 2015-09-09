;(function(jy, undefined) {

    jy.jtpl = function() {
        var argLen = arguments.length;
        var tpl = arguments[0] || '{v1}';
        var type = typeof arguments[1];
        var i;
        var re;
        if (type === 'object') {
           
            var data = arguments[1];
            for (i in data) {
                if (typeof data[i] === 'object') {
                    tpl = replaceDeep(tpl, data[i], i);
                } else {
                	re= new RegExp('{'+i+'}', "gi");
                    //tpl = tpl.replace(eval('/{' + i + '}/g'), data[i]);
                    tpl = tpl.replace(re, data[i]);
                }
            }

        } else if (type === 'string' || type === 'number' || type === 'boolean') {
            for ( i = 1; i < arguments.length; i++) {
            	re= new RegExp('{v'+i+'}', "gi");
                //tpl = tpl.replace(eval('/{v' + (i) + '}/g'), arguments[i] + '');
                tpl = tpl.replace(re, arguments[i] + '');
            }

        }
        return tpl;
    };

    function replaceDeep(tpl, data, fatherName) {
    	var i;
    	var reg;
        for (i in data) {
            var prefix = fatherName + '.';
            if (typeof data[i] === 'object') {
                tpl = replaceDeep(tpl, data[i], prefix + i);
            } else {
				reg= new RegExp('{'+prefix + i+'}', "gi");
                //tpl = tpl.replace(eval('/{' + prefix + i + '}/g'), data[i]);
                tpl = tpl.replace(reg, data[i]);
            }
        }
        return tpl;

    }
}(window.jy = window.jy || {}));