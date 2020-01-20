
// var baseUrl = "https://couponchief.demo.brainvire.com";
// var baseApiUrl = "https://couponchief.demo.brainvire.com/api";

//var baseUrl = "https://629554-app1.couponchief.com";
//var baseApiUrl = "https://629554-app1.couponchief.com/api";

//var baseApiUrl = "https://www.couponchief.com/api";

var baseUrl = "https://www.couponchief.com";
var baseApiUrl = "https://s.couponchief.net/api";

var refidUrl = "https://www.couponchief.com/landing?refid=";
var refidRedirectUrl = "https://www.couponchief.com/?type=join&refid=";

var url, res, InstallObj, appVersion, storeListObj;
var isTrue = false;

var indexSupportedSite = 0;
var indexPopularSite = 0;
var indexAffiliateDomains = 0;

var tabToUrl = {};
var _AnalyticsCode = 'UA-122976175-1';
var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);

(function () {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

 ///////////////////// Popular sites where extension will not work ///////////////////
var popular = {
	domain: ["google.com", "youtube.com", "facebook.com", "baidu.com", "wikipedia.org", "reddit.com", "yahoo.com", "google.co.in", "qq.com", "taobao.com", "twitter.com", "tmall.com", "google.co.jp", "vk.com", "instagram.com", "live.com", "sohu.com", "sina.com.cn", "jd.com", "weibo.com", "360.cn", "google.de", "google.co.uk", "google.com.br", "google.fr", "google.ru", "yandex.ru", "netflix.com", "linkedin.com", "twitch.tv", "google.it", "list.tmall.com", "google.com.hk", "pornhub.com", "google.es", "alipay.com", "xvideos.com", "google.ca", "yahoo.co.jp", "ebay.com", "google.com.mx", "microsoft.com", "bing.com", "ok.ru", "imgur.com", "bongacams.com", "hao123.com", "aliexpress.com", "mail.ru", "google.com.tr", "google.com.au", "whatsapp.com", "google.pl", "google.co.id", "xhamster.com", "google.com.ar", "xnxx.com", "google.co.th", "naver.com", "sogou.com", "samsung.com", "accuweather.com", "goo.gl", "sm.cn", "googleweblight.com", "mail.google.com", "couponchief"]
}

 ///////////  Inject content script js which works on click on extension icon //////////
// var isAffiliateDomains = {
	// domain: ["www.anrdoezrs.net", "www.commission-junction.com", "www.dpbolvw.net", "www.apmebf.com", "www.jdoqocy.com", "www.kqzyfj.com", "www.qksrv.net", "www.tkqlhce.com", "www.qksz.net", "www.emjcd.com", "www.afcyhf.com", "www.awltovhc.com", "www.ftjcfx.com", "www.lduhtrp.net", "www.tqlkg.com", "www.awxibrm.com", "www.cualbr.com", "www.rnsfpw.net", "www.vofzpwh.com", "www.yceml.net", "cj.dotomi.com", "cj.mplxtms.com", "affiliate.rakuten.com", "click.linksynergy.com"]
// }

function logURL(requestDetails) {
  //console.log("Loading: " + requestDetails.url);

  if (requestDetails.url) {
		
		indexAffiliateDomains = inAffiliateDomains(requestDetails.url);
		if (indexAffiliateDomains) { 
			chrome.storage.local.set({
				"isFromExt": "false"
			}, function () {});
			chrome.tabs.executeScript({
				file: "cashback.js"
			});
		}
	} else {
		chrome.tabs.query({
			active: true,
			lastFocusedWindow: true
		}, function (array_of_Tabs) {
			var tab = array_of_Tabs[0];
			if (tab) {
				var url = tab.url;
				indexAffiliateDomains = inAffiliateDomains(url);
				if (indexAffiliateDomains) {
					chrome.storage.local.set({
						"isFromExt": "false"
					}, function () {});
				}
			}
		});
	}
}

chrome.webRequest.onBeforeRequest.addListener(
  logURL,{urls: ["<all_urls>"]}
);

function isAffiliateDomains()
{
		var parameters = "installation_id=" + InstallObj;
		var affhttp = new XMLHttpRequest();
		affhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {

				 var encryptResp = JSON.parse(this.responseText);
				 var decryptResp = JSON.parse(CryptoJS.AES.decrypt(encryptResp, "MYUTPbxyqi2a2A6y", {
							 format: CryptoJSAesJson
						 }).toString(CryptoJS.enc.Utf8));
						//console.log(decryptResp);
				 var affObj = JSON.parse(decryptResp);
				chrome.storage.local.set({"AffiliateDomains": affObj}, function () {});
			}
		};
		affhttp.open("POST", baseApiUrl + "/affiliatedomains", true);
		affhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	    affhttp.setRequestHeader("Client-Service", "cchief");
	    affhttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
		affhttp.send(parameters);
}

function injectScript() {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		chrome.tabs.executeScript({
			file: "raven.min.js"
		});
		chrome.tabs.executeScript({
			file: "content_script.js"
		});
		chrome.tabs.executeScript({
			file: "aes.js"
		});
	});
}

chrome.extension.onRequest.addListener(function (request) {
	if (request == "enableicon") {
		chrome.browserAction.setIcon({
			path: "images/icons/enable38x38.png"
		});
	}
})

/////////// Extension icon change on tab change and check current url is in our network or not//////////////
function enableIcon() {
	if (indexSupportedSite) {
		chrome.browserAction.setIcon({
			path: "images/icons/enable38x38.png"
		});
	}
}

function disableIcon() {
	if (!indexSupportedSite) {
		chrome.browserAction.setIcon({
			path: "images/icons/disable38x38.png"
		});
	}
}

function removeA(arr) {
	var what,
	a = arguments,
	L = a.length,
	ax;
	while (L > 1 && arr.length) {
		what = a[--L];
		while ((ax = arr.indexOf(what)) !== -1) {
			arr.splice(ax, 1);
		}
	}
	return arr;
}

chrome.tabs.onRemoved.addListener(function (tabid, removed) {
	
	// chrome.storage.local.set({
		// "isFromExt": "true"
	// }, function () {});
	 isTrue = false;
	
	var currentHost = tabToUrl[tabid];
	delete tabToUrl[tabid];
	chrome.storage.local.get(null, function (obj) {
		if (obj.isFromCurrHost) {
			removeA(obj.isFromCurrHost, currentHost);
			chrome.storage.local.set({
				"isFromCurrHost": obj.isFromCurrHost
			}, function () {});
		}
	});
});

// chrome.windows.onRemoved.addListener(function (windowid) {
	
	// // chrome.storage.local.set({
		// // "isFromExt": "true"
	// // }, function () {});
	 // isTrue = false;
	
	// var currentHost = tabToUrl[tabid];
	// delete tabToUrl[tabid];
	// chrome.storage.local.get(null, function (obj) {
		// if (obj.isFromCurrHost) {
			// removeA(obj.isFromCurrHost, currentHost);
			// chrome.storage.local.set({
				// "isFromCurrHost": obj.isFromCurrHost
			// }, function () {});
		// }
	// });
// });

var urls = [];
chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {

	chrome.storage.local.set({
		"isFromExt": "true"
	}, function () {});

});

function TabChange() {
	chrome.tabs.getSelected(null, function (tab) {
		var url = new URL(tab.url);
		if (url) {
			var CurrHost = url.hostname;
			CurrHost = CurrHost.replace("www.", "");
			var CurrHref = url.href;
			chrome.storage.local.get(null, function (obj) {
				var isFromExtension = JSON.stringify(obj.isFromExt);
				if (isFromExtension) {
					isFromExtension = isFromExtension.replace(/['"]+/g, '');
				}
				indexSupportedSite = isInAllSupportedSites(CurrHref);
				if (indexSupportedSite) {
					// chrome.browserAction.onClicked.addListener(enableIcon);
					// enableIcon();
					chrome.storage.local.get(null, function (obj) {
						var check_CurrHost = JSON.stringify(obj.isFromCurrHost);
						if (check_CurrHost) {
							var myObj = JSON.parse(check_CurrHost);
							var count = myObj.length;
							for (var k = 0; k < count; k++) {
								if (CurrHref.indexOf(myObj[k]) > -1) {
									chrome.browserAction.setIcon({
										path: "images/icons/disable38x38.png"
									});
									chrome.tabs.executeScript({
										file: "cashback.js"
									});
								}
							}
						}
					});
				} else {
					chrome.browserAction.onClicked.addListener(disableIcon);
					disableIcon();
				}
			});
		}
	});
}

var urlss = [];
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	var url = new URL(tab.url);
	if (url) {
		var CurrHost = url.hostname;
		CurrHost = CurrHost.replace("www.", "");
		var CurrHref = url.href;
		tabToUrl[tabId] = CurrHost;
		if (changeInfo.status == 'complete') {
			indexSupportedSite = isInAllSupportedSites(CurrHref);
			if (indexSupportedSite) {
				chrome.storage.local.get(null, function (obj) {
					var isFromExtension = JSON.stringify(obj.isFromExt);
					if (isFromExtension) {
						isFromExtension = isFromExtension.replace(/['"]+/g, '');
					}
					if (!isFromExtension || isFromExtension == "true") {
						chrome.browserAction.setIcon({
							path: "images/icons/enable38x38.png"
						});
					} else {
						chrome.browserAction.setIcon({
							path: "images/icons/disable38x38.png"
						});
					}
					if (isFromExtension == "false") {
						chrome.storage.local.get(null, function (obj) {
							var isFromCurrHost = JSON.stringify(obj.isFromCurrHost);
							if (isFromCurrHost) {
								isFromCurrHost = isFromCurrHost.replace(/['"]+/g, '');
							}
							chrome.storage.local.get(null, function (obj) {
								if (obj.isFromCurrHost) {
									obj.isFromCurrHost.push(CurrHost);
									chrome.storage.local.set({
										"isFromCurrHost": obj.isFromCurrHost
									}, function () {});
								} else {
									var affiliateWebJson = [];
									affiliateWebJson.push(CurrHost);
									chrome.storage.local.set({
										"isFromCurrHost": affiliateWebJson
									}, function () {});
								}
							});
							chrome.storage.local.get(null, function (obj) {
								var check_CurrHost = JSON.stringify(obj.isFromCurrHost);
								if (check_CurrHost) {
									var myObj = JSON.parse(check_CurrHost);
									var count = myObj.length;
									for (var k = 0; k < count; k++) {
										if (CurrHref.indexOf(myObj[k]) > -1) {
											chrome.browserAction.setIcon({
												path: "images/icons/disable38x38.png"
											});
										}
									}
								}
							});
						});
					}
				});
			}
		}
	}
	if (changeInfo.status == 'loading') {
		chrome.browserAction.setIcon({
			path: "images/icons/disable38x38.png"
		});
	}
});

///////////// Inject cashback.js which check user login or not in couponchief website /////////////
function cashBackChange() {
	chrome.tabs.getSelected(null, function (tab) {
		var url = new URL(tab.url)
			if (url) {
				var CurrHost = url.hostname;
				var CurrHref = url.href;
				indexSupportedSite = isInAllSupportedSites(CurrHref);
				if (indexSupportedSite) {
					chrome.tabs.query({
						active: true,
						currentWindow: true
					}, function (tabs) {
						chrome.tabs.executeScript({
							file: "cashback.js"
						});
					});
				}
			}
	});
}

//////////  code for tab change event ///////////////
chrome.tabs.onSelectionChanged.addListener(function () {
	TabChange();
	getCookies();
	cashBackChange();
});

/////////// Install and update extension event /////////////
chrome.runtime.onInstalled.addListener(function (details) {
	if (details.reason == "install") {
		chrome.storage.local.clear();
		localStorage.clear();
		var first_run = false;
		if (!localStorage['ran_before']) {
			first_run = true;
			localStorage['ran_before'] = '1';
		}
		if (first_run) {
			installStoreList();
		}
		installReports();
	} else if (details.reason == "update") {
		//installStoreList();
		 isTrue = false;
	}
});

////////////// Submit install and uninstall reports API code ///////////////
function installReports() {
	appVersion = chrome.app.getDetails().version;
	Raven.config('https://2e80314b11464fa2bd530ca9a3b2be36@sentry.io/678996').install();
	Raven.captureMessage("AppVersion:" + appVersion + ", Extension Installed", {
		level: 'info'
	});
	_gaq.push(['_trackEvent', "Extension Installed", 'Install']);
	
	isAffiliateDomains();

	var params = "channel=1";
	var insthttp = new XMLHttpRequest();
	insthttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			var strGUID = myObj.installation_id;
			chrome.storage.local.set({
				"installId": strGUID,
				"appVersion": appVersion
			}, function () {});
			chrome.storage.local.get(["installId"], function (items) {
				InstallObj = JSON.stringify(items.installId);
				InstallObj = InstallObj.replace(/['"]+/g, '');
				checkRefid(InstallObj);
				chrome.runtime.setUninstallURL(baseApiUrl + "/uninstallExtension/" + InstallObj);
			});
		}
	};
	insthttp.open("POST", baseApiUrl + "/storeInstallReport", true);
	insthttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	insthttp.setRequestHeader("Client-Service", "cchief");
	insthttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
	insthttp.send(params);
}

////////////// checkRefid and redirect on new tab after extension installed ///////////////
var InstalledObj;
function checkRefid(InstalledObj) {

	chrome.cookies.get({url: refidUrl, name: 'refid'}, function(cookie) {
		if(cookie){
		  window.open(refidRedirectUrl + cookie.value + "&installation_id=" + InstalledObj);
		}
	});
}
///////// on click event on extension icon //////////////////
chrome.browserAction.onClicked.addListener(function (tab) {

	chrome.tabs.getSelected(null, function (tab) {
		var url = new URL(tab.url);
		if (url) {
			var CurrHost = url.hostname;
			var CurrHref = url.href;
			if (tab.status == 'complete') {
				indexPopularSite = isPopulerSites(CurrHref);
				if (!indexPopularSite) {
					injectScript();
				}
				getCookies();
			}
		}
		if (tab.status == 'loading') {
			chrome.browserAction.setIcon({
				path: "images/icons/disable38x38.png"
			});
		}
	});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendTotSavingsResp) {
	if (request.type == "TotalSavings") {
		_gaq.push(['_trackEvent', request.message, 'TotalSavings']);
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendNoCouponResponse) {
	if (request.type == "NoValidCoupons") {
		_gaq.push(['_trackEvent', request.message, 'NoValidCoupons']);
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendNoCouponResponse) {
	if (request.type == "NoStoreCoupons") {
		_gaq.push(['_trackEvent', request.message, 'NoStoreCoupons']);
	}
});

 ////////// Code for open coupon affiliate link in background tab /////////////////
chrome.runtime.onMessage.addListener(function (request, sender, sendCouponResponse) {
	if (request.type == "CouponAffiliate") {
		sendCouponResponse(CouponAffiliateTab(request.type));
	}
});

function CouponAffiliateTab() {
	Raven.config('https://2e80314b11464fa2bd530ca9a3b2be36@sentry.io/678996').install();
	appVersion = chrome.app.getDetails().version;
	chrome.tabs.getSelected(null, function (tab) {
		var url = new URL(tab.url)
			var CurrHost = url.hostname;
		chrome.storage.local.get(null, function (obj) {
			var coupon_affiliate = JSON.stringify(obj.coupon_affiliate);
			coupon_affiliate = coupon_affiliate.replace(/['"]+/g, '');
			coupon_affiliate = coupon_affiliate.replace("https://", "");
			if (coupon_affiliate != "null") {
				Raven.captureMessage("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Coupon Affiliate", {
					level: 'info'
				});
				_gaq.push(['_trackEvent', "AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Coupon Affiliate", 'Coupon Affiliate']);
				chrome.tabs.create({
					url: "https://" + coupon_affiliate,
					selected: false,
					pinned: false
				}, function (tab) {
					tabsToClose[tab.id] = 1;
				});
				chrome.storage.local.set({
					"isFromExt": "true"
				}, function () {});
				isTrue = true;
			}
		});
	});
}

 ////////// Code for open cashback affiliate link in background tab /////////////////
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.type == "CashbackAffiliate") {
		sendResponse(CashbackAffiliateTab(request.type));
	}
});

function CashbackAffiliateTab() {
	Raven.config('https://2e80314b11464fa2bd530ca9a3b2be36@sentry.io/678996').install();
	appVersion = chrome.app.getDetails().version;
	chrome.tabs.getSelected(null, function (tab) {
		var url = new URL(tab.url)
			var CurrHost = url.hostname;
		chrome.storage.local.get(null, function (obj) {
			var cash_affiliate = JSON.stringify(obj.cashback_affiliate);
			cash_affiliate = cash_affiliate.replace(/['"]+/g, '');
			if (cash_affiliate != "null") {
				Raven.captureMessage("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Cashback Affiliate", {
					level: 'info'
				});
				_gaq.push(['_trackEvent', "AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Cashback Affiliate", 'Cashback Affiliate']);
				chrome.tabs.create({
					url: cash_affiliate,
					selected: false,
					pinned: false
				}, function (tab) {
					tabsToClose[tab.id] = 1;
				});
			}
		});
	});
}

//////////////////////  Get cookie when user is login in couponchief website ///////////// 
function getCookies() {
	chrome.cookies.get({
		url: baseUrl,
		name: 'lgi'
	}, function (cookie) {
		if (cookie) {
			var param = "installation_id=" + InstallObj + "&username=" + cookie.value + "";
			var jsonhttp = new XMLHttpRequest();
			jsonhttp.onreadystatechange = function () {
				chrome.storage.local.set({
					"identifier": this.status
				}, function () {});
				if (this.readyState == 4 && this.status == 200) {}
			};
			jsonhttp.open("POST", baseApiUrl + "/isLogin", false);
			jsonhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			jsonhttp.setRequestHeader("Client-Service", "cchief");
			jsonhttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
			jsonhttp.send(param);
		} else {
			chrome.storage.local.set({
				"identifier": ""
			}, function () {});
		}
	});
}

////////////////  Store all storelist in local storage ///////////////////
function installStoreList() {
	Raven.config('https://2e80314b11464fa2bd530ca9a3b2be36@sentry.io/678996').install();
	appVersion = chrome.app.getDetails().version;
	var parameters = "installation_id=" + InstallObj;
	try {
		var strxmlhttp = new XMLHttpRequest();
		strxmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var encryptResp = JSON.parse(this.responseText);
					var decryptResp = JSON.parse(CryptoJS.AES.decrypt(encryptResp, "MYUTPbxyqi2a2A6y", {
								format: CryptoJSAesJson
							}).toString(CryptoJS.enc.Utf8));
					storesObj = JSON.parse(decryptResp);
					chrome.storage.local.set({
						"storelist_json": storesObj
					}, function () {});
					chrome.storage.local.set({
						"isFromExt": "true"
					}, function () {});
					chrome.storage.local.get(null, function (obj) {
						storeListObj = obj.storelist_json;
						TabChange();
					});
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreList Invalid JSON, " + e);
				}
			}
		};
		strxmlhttp.open("GET", baseApiUrl + "/storelist", true);
		strxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		strxmlhttp.setRequestHeader("Client-Service", "cchief");
		strxmlhttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
		strxmlhttp.send(parameters);
	} catch (e) {
		Raven.captureException("AppVersion:" + appVersion + ", StoreList Api Error, " + e);
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

var tabsToClose = {};
chrome.webNavigation.onCompleted.addListener(function (details) {
	if (details.frameId !== 0)
		return;
	var tabId = details.tabId;
	if (tabsToClose[tabId]) {
		delete tabsToClose[tabId];
		chrome.tabs.remove(tabId);
	}
});

////////////  Check current url is present in storelist or not ////////////
function isInAllSupportedSites(CurrHref) {
	chrome.storage.local.get(null, function (obj) {
		storeListObj = obj.storelist_json;
	});
	if (storeListObj) {
		for (site in storeListObj.stores) {
			if ((CurrHref.indexOf(storeListObj.stores[site].store_domain) > -1) && (storeListObj.stores[site].allow_scout != "never") && (!CurrHref.includes("chrome-extension"))) {
				return 1;
			}
		}
		return 0;
	}
}

function isPopulerSites(CurrHref) {
	for (var pSite in popular.domain) {
		if ((CurrHref.indexOf(popular.domain[pSite]) > -1) && (!CurrHref.includes("chrome-extension"))) {
			return 1;
		}
	}
	return 0;
}

var affilObj;
function inAffiliateDomains(CurrHref) {

         if(!isTrue)
		{	
			chrome.storage.local.get(null, function (obj) {
			 affilObj = obj.AffiliateDomains;
			   });
			if (affilObj) {
			for (var pDomain in affilObj.domain) {
				if ((CurrHref.indexOf(affilObj.domain[pDomain]) > -1) && (!CurrHref.includes("chrome-extension"))) {
					return 1;
				}
			}
		   }
		}

	return 0;
}