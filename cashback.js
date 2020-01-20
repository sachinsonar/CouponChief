var jsonCount = 0, elemMouseEvent, storeDomain, directCashback, appVersion;

var CurrHost = window.location.host;
var CurrHref = window.location.href;

//////////////////////////////// Code for casback validation at tab change ///////////////
createCashback();
function createCashback() {

	chrome.storage.local.get(null, function (obj) {
		var storeObj = JSON.stringify(obj.identifier);
		storeObj = storeObj.replace(/['"]+/g, '');

		if ((storeObj == "200") || (storeObj == "0")) {
			chrome.storage.local.get(null, function (obj) {
				var check_Cashback = JSON.stringify(obj.Activated);

				if (document.getElementById('couponchiefiframe')) {
					if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('applycashback')) {
						document.getElementById('couponchiefiframe').contentWindow.document.getElementById('applycashback').style.display = 'none';
					}

					if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback')) {
						document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback').style.display = 'inline-block';
						document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback').innerHTML = 'Activate';
					}
					if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('linkMyWallet')) {
						document.getElementById('couponchiefiframe').contentWindow.document.getElementById('linkMyWallet').style.display = 'inline-block';
					}
					if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('linkLearnInfo')) {
						document.getElementById('couponchiefiframe').contentWindow.document.getElementById('linkLearnInfo').style.display = 'none';
					}
					setTimeout(function () {
					if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback')) {
						document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback').addEventListener('click', activeCashback);
					}
                    }, 1000);
					if (directCashback) {
						activeCashback();

						directCashback = "";
					}

					if (check_Cashback) {
						var myObj = JSON.parse(check_Cashback);
						var count = myObj.length;

						if (elemMouseEvent) {
							CurrHref = storeDomain;
						}

						for (var k = 0; k < count; k++) {
							if (CurrHref.indexOf(myObj[k]) > -1) {
								document.getElementById('couponchiefiframe').contentWindow.document.getElementById('checkCashback').style.display = 'inline-block';
								document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback').innerHTML = 'Activated';
							}
						}
					}
				}
			});
		} else {
			chrome.storage.local.remove(["Activated"], function () {});
			homepageJson = [];
			if (document.getElementById('couponchiefiframe')) {
				if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback')) {
					document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback').style.display = 'none';
				}

				if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('applycashback')) {
					document.getElementById('couponchiefiframe').contentWindow.document.getElementById('applycashback').style.display = 'inline-block';
				}
				if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('linkMyWallet')) {
					document.getElementById('couponchiefiframe').contentWindow.document.getElementById('linkMyWallet').style.display = 'none';
				}
				if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('linkLearnInfo')) {
					document.getElementById('couponchiefiframe').contentWindow.document.getElementById('linkLearnInfo').style.display = 'inline-block';
				}
				if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('checkCashback')) {
					document.getElementById('couponchiefiframe').contentWindow.document.getElementById('checkCashback').style.display = 'none';
				}
			}
		}
	});
	if (document.getElementById('couponchiefiframe')) {
		chrome.storage.local.get(null, function (obj) {
			var isFromExtension = JSON.stringify(obj.isFromExt);
			if (isFromExtension) {
				isFromExtension = isFromExtension.replace(/['"]+/g, '');
			}
			chrome.storage.local.get(["appVersion"], function (items) {
				appVersionObj = JSON.stringify(items.appVersion);
				if (appVersionObj) {
					appVersion = appVersionObj.replace(/['"]+/g, '');
				}
				if (isFromExtension == "false") {
					var isSavingDiv = document.getElementById('couponchiefiframe').contentWindow.document.getElementById('savingsDiv');
					if (isSavingDiv) {
						isSavingDiv.style.display = 'none'
					}
					var isdormantDiv = document.getElementById('couponchiefiframe').contentWindow.document.getElementById('dormantDiv');
					if (isdormantDiv) {
						isdormantDiv.style.display = 'block'
					}

					var isCashbackDiv = document.getElementById('couponchiefiframe').contentWindow.document.getElementById('cashbackDiv');
					if (isCashbackDiv) {
						isCashbackDiv.style.display = 'none'
					}
					var isapplysavings = document.getElementById('couponchiefiframe').contentWindow.document.getElementById('applysavings');
					if (isapplysavings) {
						isapplysavings.style.display = 'none'
					}

					Raven.captureMessage("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Other Affiliate", {
						level: 'info' // one of 'info', 'warning', or 'error'
					});
				}
			});
		});
	}
}

function activeCashback() {
	var change = iframe.contentWindow.document.getElementById('activeCashback').innerHTML;
	if (change == "Activate") {
		if (iframe.contentWindow.document.getElementById('checkCashback')) {
			iframe.contentWindow.document.getElementById('checkCashback').style.display = 'inline-block';
			iframe.contentWindow.document.getElementById('activeCashback').innerHTML = 'Activated';
		}

		if (elemMouseEvent) {
			CurrHost = storeDomain;
		} else {
			CurrHost = CurrHost.replace("www.", "");
		}

		var parameters = "installation_id=" + InstallObj + "&url=" + CurrHost + "";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var encryptResp = JSON.parse(this.responseText);

				var decryptResp = JSON.parse(CryptoJS.AES.decrypt(encryptResp, "MYUTPbxyqi2a2A6y", {
							format: CryptoJSAesJson
						}).toString(CryptoJS.enc.Utf8));
				//console.log(decryptResp);
				myObj = JSON.parse(decryptResp);
				if (myObj) {
					cashback_affiliate = myObj.cashback[0].cashback_affiliateLink;
					cashbackEndDate = myObj.cashback[0].endDate;

					var cashbackEnd = new Date(cashbackEndDate);

					chrome.storage.local.get(null, function (obj) {
						if (obj.Activated) {
							obj.Activated.push(CurrHost);
							chrome.storage.local.set({
								"Activated": obj.Activated
							}, function () {});
						} else {
							var homepageJson = [];
							homepageJson.push(CurrHost);
							chrome.storage.local.set({
								"Activated": homepageJson
							}, function () {});
						}

						chrome.storage.local.set({
							"cashback_affiliate": cashback_affiliate
						}, function () {});
						chrome.storage.local.set({
							"cashback_enddate": cashbackEndDate
						}, function () {});

						chrome.runtime.sendMessage({
							type: "CashbackAffiliate"
						}, function (response) {});

					});
				}
			}
		};

		xmlhttp.open("POST", baseApiUrl + "/getCoupons", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		xmlhttp.setRequestHeader("Client-Service", "cchief");
		xmlhttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
		xmlhttp.send(parameters);
	}
}

var CryptoJSAesJson = {
	stringify: function (cipherParams) {
		var j = {
			ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
		};
		if (cipherParams.iv)
			j.iv = cipherParams.iv.toString();
		if (cipherParams.salt)
			j.s = cipherParams.salt.toString();
		return JSON.stringify(j);
	},
	parse: function (jsonStr) {
		var j = JSON.parse(jsonStr);
		var cipherParams = CryptoJS.lib.CipherParams.create({
				ciphertext: CryptoJS.enc.Base64.parse(j.ct)
			});
		if (j.iv)
			cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
				if (j.s)
					cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
						return cipherParams;
	}
}
