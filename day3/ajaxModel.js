function sendAjax(url,options){
    var _default = {
        method:'GET',
        data:null,
        success:null
    }
    for(var i in options){
        _default[i] = options[i];
    }
    if(_default.method.toUpperCase() === 'GET'){
        var f = url.indexOf('?') > -1 ? '&' : '?';
        url += f + '_=' + Date.now();
        for(var j in _default.data){
            url += '&' + j + '=' + _default.data[j];
        }
        _default.data = null;
    }
    if(_default.method.touppercase === 'POST'){
        _default.data = JSON.stringify(_default.data);
    }
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method,url,true);
    xhr.send(_default.data);
    xhr.onreadystatechange = function(){
        if(xhr.readystate == 4 && xhr.status == 200){
            var result = xhr.responseText;
            result = JSON.parse(result);
            if(typeof success == 'function'){
                _default.success(result);
            }
        }
    }
}