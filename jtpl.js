/* ===========================================================
 * jtpl.js
 * ===========================================================
 * https://github.com/jy1989/jtpl
 * ========================================================== */
;
(function(jy, undefined) {

    jy.jtpl = function() {
        var argLen = arguments.length;
        var tpl = arguments[0] || '{v1}';
        var type = typeof arguments[1];
        if (type === 'object') {
            var i;
            var data = arguments[1];
            for (i in data) {
                if (typeof data[i] === 'object') {
                    tpl = replaceDeep(tpl, data[i], i);
                } else {
                    tpl = tpl.replace(eval('/{' + i + '}/g'), data[i]);
                }
            }

        } else if (type === 'string' || type === 'number' || type === 'boolean') {
            for (var i = 1; i < arguments.length; i++) {
                tpl = tpl.replace(eval('/{v' + (i) + '}/g'), arguments[i] + '');
            }

        }
        return tpl;
    }

    function replaceDeep(tpl, data, fatherName) {
        for (i in data) {
            var prefix = fatherName + '.';
            if (typeof data[i] === 'object') {
                tpl = replaceDeep(tpl, data[i], prefix + i);
            } else {

                tpl = tpl.replace(eval('/{' + prefix + i + '}/g'), data[i]);
            }
        }
        return tpl;

    }
}(window.jy = window.jy || {}));