var AttApiClient = (function () {

	var _serverPath = "";
	var _serverUrl = "/speech/v3/";
	var _onFail = function () { };
	
	function buildParams(o, separator) {
		var sep = typeof separator == "undefined" ? "&" : separator;
		var r = [];
		for (var key in o) {
			var item = o[key];
			if (item != null && typeof item == "object") {
				item = buildParams(item, ",");
			}
			item = encodeURIComponent(item);
			r.push(key + "=" + item);
		}
		return r.join(sep);
	}

	function hasRequiredParams(data, reqParams, fail) {
		var errList = [];
		var lcKey = {};
		for (key in data) {
			lcKey[key.toLowerCase()] = key;
		}
		reqParams.forEach(function (n) {
			if (typeof lcKey[n.toLowerCase()] == "undefined") {
				errList.push("Expected Parameter: " + n);
			}
		});
		if (errList.length > 0) {
			fail(errList);
			return false;
		}
		return true;
	}

	function post(fn, data, requiredParams, success, fail) {
		if (hasRequiredParams(data, requiredParams, fail)) {
			jQuery.post(_serverPath + _serverUrl + fn + "?" + buildParams(data)).success(success).fail(typeof fail == "undefined" ? _onFail : fail);
		}
	}

	function postForm(fn, data, success, fail, opts) {
		
		var params = $.extend({
			type: "POST",
			url: _serverPath + _serverUrl + fn,
			data: data,
			processData: false,
			contentType: false
		}, opts);
		alert(JSON.stringify(params));
		jQuery.ajax(params).success(success).fail(typeof fail == "undefined" ? _onFail : fail);
	}

	function get(fn, data, success, fail, opts) {
		var params = $.extend({
			type: 'GET',
			url: _serverPath + _serverUrl + fn,
			data: data, processData: false,
			success: success
		}, opts);
		
		$.ajax().success(success).fail(typeof fail == "undefined" ? _onFail : fail);
	}

	return {

		setOnFail: function(fail) {
			_onFail = fail;
		},
		setServerPath: function (serverPath) {
			_serverPath = serverPath || "";
		},
		serverSpeechToText: function (data, success, fail) {
			post("speechToText", data, ['filename'], success, fail);
		},
		serverSpeechToTextCustom: function (data, success, fail) {
			post("speechToTextCustom", data, ['filename'], success, fail);
		},
		speechToText: function (audioBlob, success, fail) {
			var fd = new FormData();
			fd.append("speechaudio", audioBlob);
			postForm('speechToText', fd, success, fail);
		},
		textToSpeech: function (text, success, fail) {
			postForm("textToSpeech", { text: text }, success, fail, {responseType: 'arraybuffer'});
		}
	}

}());