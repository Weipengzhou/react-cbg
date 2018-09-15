export const js_eval = (js_str) => eval("(" + js_str + ")")

export const lpc_2_js = (lpc_str) => {
    var convert_dict = { "([": "{", "])": "}", ",])": "}", "({": "[", "})": "]", ",})": "]" };
    function convert($1) { 
        var match_str = $1.replace(/\s+/g, ''); 
        return convert_dict[match_str]; 
    }
    var parser = new RegExp("\\(\\[|,?\s*\\]\\)|\\({|,?\\s*}\\)", 'g');
     return lpc_str.replace(parser, convert);
}

export const trim = (str) => {
    if (str) {
        return str.trim ? str.trim() : str.toString().replace(/^\s+|\s+$/g, '');
    }
    return '';
}