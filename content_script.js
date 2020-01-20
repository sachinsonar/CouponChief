
// var baseUrl = "https://couponchief.demo.brainvire.com";
// var baseApiUrl = "https://couponchief.demo.brainvire.com/api";
// var ccLoginUrl = "https://couponchief.demo.brainvire.com/?type=login";
// var learnMore = "https://couponchief.demo.brainvire.com/browse";
// var walletLink = "https://couponchief.demo.brainvire.com/";
// var storeLogoUrl = "https://th.couponchief.net/images/logos/";
 
// var baseUrl = "https://629554-app1.couponchief.com";
//var baseApiUrl = "https://629554-app1.couponchief.com/api";
// var ccLoginUrl = "https://629554-app1.couponchief.com/?type=login";
// var learnMore = "https://629554-app1.couponchief.com/browse";
// var walletLink = "https://629554-app1.couponchief.com";

//var baseApiUrl = "https://www.couponchief.com/api";

var baseUrl = "https://www.couponchief.com";
var baseApiUrl = "https://s.couponchief.net/api";
var ccLoginUrl = "https://www.couponchief.com/?type=login";
var learnMore = "https://www.couponchief.com/browse";
var walletLink = "https://www.couponchief.com/myreward";

var storeLogoUrl = "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/260/";
var imagePath = "https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/extension/images/";
var imagePathLoc = "chrome-extension://"+chrome.runtime.id+"/images/";
var fontApi = "<link href='https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i' rel='stylesheet'>";

var codeObj, myObj, iframe, popupHtml, storeListObj, finalCode, finalAmount, cashbackTitle, codeCount, couponCode, storeValue, storeTitle, style, InstallObj, cashbackValue, cashback_affiliate, popupHeight, popupWidth, homepageUrl, cartpageUrl, kohlsWalletApi, officedepotWalletApi, storesObj, store_affiliate, cashbackEndDate, getStoreDomain, storeDomain, elemMouseEvent, redirectsTo, storeCookies, directCashback, coupon_affiliate, bathandbodyCouponApi, bathandbodyWalletApi, bathandbodyRemoveApi, aeCouponApi, aeWalletApi, totalSavings, barnesWalletApi, footlockerWalletApi, macysCouponApi, macysCoupRemoveApi, forever21CouponApi, forever21CoupRemoveApi, shoecarWalletApi, shoecarCouponApi, steinmartCouponApi, steinmartWalletApi, carterWalletApi, officeCouponApi, officeCoupRemoveApi, walgreenCouponApi, walgreenCartIdApi, advanceautoWalletApi, searsCouponApi, searsWalletApi, cabelasWalletApi, cabelasRemCouponApi, lordWalletApi, wallCartId, wallObj, partyCouponApi, partyWalletApi, aeroCouponApi, aeroWalletApi, shuttCouponApi, dressCouponApi, vitaCouponApi, vitaparams, brookCouponApi, brookWalletApi, dollarCouponApi, dollarWalletApi, puritanCouponApi, fromyouCouponApi, eddieCouponApi, eddieWalletApi, tomsCouponApi, mathRand, straightCouponApi, shoeCouponApi, shopbopCouponApi, harryCouponApi, michaelsCouponApi, michaelsWalletApi, monopriceCouponApi, avenueCouponApi, lenovoCouponApi, totalHPpriceNumber, dellCouponApi, reebokCouponApi, reebokWalletApi, dermCouponApi, cheapArrayIndex, cheapoairTempCoupon, jcrewCouponApi, appVersion, bodybuildingCouponApi, bodybuildingParms, sierraCouponApi, sierroriginalShipping, sierrorderSubtotal, victoCouponApi, restCouponApi, pepboysCouponApi, ebagsCouponApi, snapfishCouponApi, michaelsCouponRemApi, yankeeCouponApi, yankeeCouponRemApi, guitarCouponApi, juicyCouponApi, nyandcompanyCouponApi, nyandcompanyWalletApi, nyandcompanyCouponRemApi, dunkinCouponApi, tireCouponApi, cottononCouponApi, blairCouponApi, speckCouponApi, specksavings, orientalCouponApi, eyebuyCouponApi, ashfordCouponApi, ashfordCouponRemApi, rockbottomgolfCouponApi, shopkoCouponApi, shoescrewsCouponApi, bhcosmeticsCouponApi, destinCouponApi, destinRemCouponApi, christoCouponApi, christoRemCouponApi, alibrisCouponApi, clarisonicCouponApi, clarisonicRCouponApi, cafepressCouponApi, catherinesCouponApi, contacts1800CouponApi, pillowCouponApi, barenCouponApi, naturalCouponApi, musicianCouponApi, musicianRemCouponApi, scrubCouponApi, scrubNetAmmount, avedaCouponApi, backCouponApi, zaggCouponApi, kedsCouponApi, renttheCouponApi, somaCouponApi, spiritCouponApi, spiritWalletApi, clairesCouponApi, clairesRemCouponApi, ashleyCouponApi, buildCouponApi, mixbookCouponApi, belkCouponApi, fragCouponApi, landCouponApi, fetchPinN, fredCouponApi, fredWalletApi, perfuCouponApi, travelCouponApi, travelrmvCouponApi, revolveCouponApi, keurigCouponApi, keurigCouponRemApi, newbalanceCouponApi, orvisCouponApi, newbalanceRemApi;

var pTime = 1500;
var indexSupportedSite = 0;
var indexAllSupportSite = 0;

var kohlsDiscArr = [];
var kohlsCoupArr = [];
var macysCoupArr = [];
var macysDiscArr = [];
var footDiscArr = [];
var footCoupArr = [];
var steinCoupArr = [];
var paylessCoupArr = [];
var paylessDisArr = [];
var cartersArr = [];
var brookDiscArr = [];
var brookCoupArr = [];
var dollarCoupArr = [];
var dollarDiscArr = [];
var quillCoupArr = [];
var quillDiscArr = [];
var HPCoupArr = [];
var edibleCoupArr = [];
var edibleDiscArr = [];
var dermstoreCoupArr = [];
var dermstoreDiscArr = [];
var cheapairCoupArr = [];
var cheapairAllCoupArr = [];
var cheapairDisArr = [];
var jcrewCoupArr = [];
var bassuniQueArr = [];
var victoCoupArr = [];
var sierratCoupArr = [];
var branCoupArr = [];
var barnSaveArr = [];
var harryCoupArr = [];
var harryDisArr = [];
var tirebuyCouponArr = [];
var tirebuyDiscArr = [];
var newbalanceCoupArr = [];
var newbalanceDiscArr = [];
var orientalProCoupArr = [];
var orientalDisArr = [];
var bodybuildingCoupArr = [];
var bodybuildingDisArr = [];
var snapfishAmtArr = [];
var sanpfishCouponArr = [];
var michDiscArr = [];
var michCoupArr = [];
var shoecarnArr = [];
var bebeCoupArr = [];
var bebeDiscArr = [];
var tomsCoupArr = [];
var tomspriceArr = [];
var crocsDiscArr = [];
var crocsCoupArr = [];
var orvisCoupArr = [];
var orvisDiscArr = [];
var crocspriceArr = [];
var avenueCoupArr = [];
var avenueDiscArr = [];
var aeropostCoupArr = [];
var yankDiscArr = [];
var yankCoupArr = [];
var guitarCoupArr = [];
var guitarDiscArr = [];
var juicyCoupArr = [];
var juicyDiscArr = [];
var nyandcompanyCoupArr = [];
var nyandcompanyDiscArr = [];
var dunkDiscArr = [];
var dunkCoupArr = [];
var blairDiscArr = [];
var blairCoupArr = [];
var speckCoupArr = [];
var jimmyCoupArr = [];
var jimmyDiscArr = [];
var eyebuyCoupArr = [];
var eyebuyDiscArr = [];
var ashfordCoupArr = [];
var ashfordDiscArr = [];
var rockbottomgolfCoupArr = [];
var rockbottomgolfDiscArr = [];
var shopkoDiscArr = [];
var shopkoCoupArr = [];
var crewsDiscArr = [];
var crewsCoupArr = [];
var bhcoDiscArr = [];
var bhcoCoupArr = [];
var destiCoupArr = [];
var destiDiscArr = [];
var christoCoupArr = [];
var christoDiscArr = [];
var alibrisCoupArr = [];
var alibrisDiscArr = [];
var clarisonicCoupArr = [];
var clarisonicDiscArr = [];
var cafepressCoupArr = [];
var cafepressDiscArr = [];
var catherinesCoupArr = [];
var catherinesDiscArr = [];
var contactsDiscArr = [];
var contactsCoupArr = [];
var pillowCoupArr = [];
var pillowDiscArr = [];
var barenCoupArr = [];
var barenDiscArr = [];
var naturalCoupArr = [];
var naturalDiscArr = [];
var bodenusaCoupArr = [];
var bodenusaDiscArr = [];
var musicianCoupArr = [];
var musicianDiscArr = [];
var scrubCoupArr = [];
var scrubDiscArr = [];
var avedaCoupArr = [];
var avedaDiscArr = [];
var backCoupArr = [];
var backDiscArr = [];
var zaggCoupArr = [];
var zaggDiscArr = [];
var kedsCoupArr = [];
var kedsDiscArr = [];
var rentCoupArr = [];
var rentDiscArr = [];
var kennethCoupArr = [];
var kennethDiscArr = [];
var somaCoupArr = [];
var somaDiscArr = [];
var spiritCoupArr = [];
var spiritDiscArr = [];
var clairesCoupArr = [];
var clairesDiscArr = [];
var ashleyCoupArr = [];
var ashleyDiscArr = [];
var partycityCoupArr = [];
var partycityDiscArr = [];
var buildCoupArr = [];
var buildDiscArr = [];
var mixbookCoupArr = [];
var mixbookDiscArr = [];
var belkCoupArr = [];
var belkDiscArr = [];
var kateDiscArr = [];
var kateCoupArr = [];
var shoesCoupArr = [];
var shoesDiscArr = [];
var fragCoupArr = [];
var fragDiscArr = [];
var landCoupArr = [];
var landDiscArr = [];
var fredericksCoupArr = [];
var fredericksDiscArr = [];
var ctshirtsCoupArr = [];
var ctshirtsDiscArr = [];
var perfuCoupArr = [];
var perfuDiscArr = [];
var traveloCoupArr = [];
var traveloDiscArr = [];
var revolveCoupArr = [];
var revolveDiscArr = [];
var walCoupArr = [];
var walDiscArr = [];
var keurigCouponArr = [];
var keurigDiscArr = [];
var cabelasCoupArr = [];
var cabelasDiscArr = [];
var kmartCoupArr = [];
var kmartDiscArr = [];
var michaelDiscArr = [];
var michaelCoupArr = [];
var cottononDiscArr = [];
var cottononCoupArr = [];
var hanesDiscArr = [];
var hanesCoupArr = [];
var finishDiscArr = [];
var finishCoupArr = [];
var lenovoDiscArr = [];
var lenovoCoupArr = [];
var forever21DiscArr = [];
var forever21CoupArr = [];

var CurrHref = window.location.href;
var CurrHost = window.location.host;

Raven.config('https://2e80314b11464fa2bd530ca9a3b2be36@sentry.io/678996').install();

var partners = {
	SupportedSites: [{
			domain: "kohls.com",
			cart: ["www.kohls.com/checkout"],
			kohlsWalletUrl: "https://www.kohls.com/cnc/checkout/applykccoupons"
		}, {
			domain: "macys.com",
			cart: ["www.macys.com/my-bag", "www.macys.com/rbag/index"]
		}, {
			domain: "forever21.com",
			cart: ["www.forever21.com/us/shop/CheckOut/Basket", "www.forever21.com/us/shop/checkout/basket"],
			forever21CouponUrl: "https://www.forever21.com/us/shop/Checkout/ApplyDiscount",
			foreverRemCouponUrl: "https://www.forever21.com/us/shop/Checkout/RemoveCouponCode"
		}, {
			domain: "walgreens.com",
			cart: ["www.walgreens.com/store/checkout/cart.jsp"],
			walgreenCartIdUrl: "https://www.walgreens.com/svc/header?v=1523004249778&instart_disable_injection=true"
		}, {
			domain: "officedepot.com",
			cart: ["www.officedepot.com/cart/shoppingCart.do"],
			officedepotCouponUrl: "https://www.officedepot.com/mobile/addCouponAjax.do",
			officeCoupRemoveUrl: "https://www.officedepot.com/mobile/removeCoupon.do?couponCode="
		}, {
			domain: "famousfootwear.com",
			cart: ["www.famousfootwear.com/Checkout/Cart"]
		}, {
			domain: "sears.com",
			cart: ["www.sears.com/crsp/mx/cart#/cart", "http://www.sears.com/crsp/mx/cart#/cart"],
			searsCouponUrl: "https://www.sears.com/crsp/api/cart/v1/coupon/add",
			searsWalletUrl: "https://www.sears.com/crsp/api/cart/v1/view"
		}, {
			domain: "payless.com",
			cart: ["www.payless.com/on/demandware.store/Sites-payless-Site/default/COSinglePage-Cart"]
		}, {
			domain: "finishline.com",
			cart: ["www.finishline.com/store"]
		}, {
			domain: "footlocker.com",
			cart: ["www.footlocker.com/cart"],
			footlockerWalletUrl: "https://www.footlocker.com/cartTotalEstimator/cartTotalEstimator"
		}, {
			domain: "advanceautoparts.com",
			cart: ["shop.advanceautoparts.com/web/OrderItemDisplay"],
			advanceautoWalletUrl: "https://shop.advanceautoparts.com/wcs/resources/store/10151/cart/@self/assigned_promotion_code"
		}, {
			domain: "bathandbodyworks.com",
			cart: ["www.bathandbodyworks.com/cart"],
			bathandbodyCouponUrl: "https://www.bathandbodyworks.com/on/demandware.store/Sites-BathAndBodyWorks-Site/en_US/Cart-AddCouponJson?format=ajax&couponCode=",
			bathandbodyWalletUrl: "https://www.bathandbodyworks.com/on/demandware.store/Sites-BathAndBodyWorks-Site/en_US/COBilling-UpdateSummary?",
			bathandbodyRemoveUrl: "https://www.bathandbodyworks.com/on/demandware.store/Sites-BathAndBodyWorks-Site/en_US/Cart-RemoveCouponCode"
		}, {
			domain: "ae.com",
			cart: ["www.ae.com/cart", "www.ae.com/checkout", "www.ae.com/aerie/cart"],
			aeCouponUrl: "https://www.ae.com/api/2.0/cart/discount",
			aeWalletUrl: "https://www.ae.com/cart"
		}, {
			domain: "barnesandnoble.com",
			cart: ["www.barnesandnoble.com/checkout"],
			barnesWalletUrl: "https://www.barnesandnoble.com/xhr/handler.jsp?_DARGS=/checkout/includes/coupon-form.jsp.frmApplyCoupon"
		}, {
			domain: "steinmart.com",
			cart: ["www.steinmart.com/basket.do"],
			steinmartCouponUrl: "https://www.steinmart.com/basket.do?r=0.12491002889354208&method=applySourceCode",
			steinmartWalletUrl: "https://www.steinmart.com/basket.do"
		}, {
			domain: "lanebryant.com",
			cart: ["www.lanebryant.com/cart/cart.jsp"]
		}, {
			domain: "keurig.com",
			cart: ["www.keurig.com/cart"],
			keurigCouponUrl: "https://www.keurig.com/coupons/applyCoupon",
			keurigCouponRemUrl: "https://www.keurig.com/coupons/removeCoupon"
		}, {
			domain: "carters.com",
			cart: ["www.carters.com/cart"]
		}, {
			domain: "cabelas.com",
			cart: ["www.cabelas.com/shop/checkout/basket/view"],
			cabelasWalletUrl: "https://www.cabelas.com/shop/checkout/basket/discount/promo/new",
			cabelasRemCouponUrl: "https://www.cabelas.com/shop/checkout/basket/discount/promo/remove"
		}, {
			domain: "lordandtaylor.com",
			cart: ["www.lordandtaylor.com/checkout"],
			lordWalletUrl: "https://www.lordandtaylor.com/checkout/checkout.jsp"
		}, {
			domain: "partycity.com",
			cart: ["www.partycity.com/cart"],
			partyCouponUrl: "https://www.partycity.com/on/demandware.store/Sites-partycity_us2-Site/en_US/Cart-SubmitForm",
			partyWalletUrl: "https://www.partycity.com/on/demandware.store/Sites-partycity_us-Site/en_US/COBilling-UpdateSummary?format=ajax"
		}, {
			domain: "aeropostale.com",
			cart: ["www.aeropostale.com/cart", "www.aeropostale.com/billing"],
			aeroCouponUrl: "https://www.aeropostale.com/on/demandware.store/Sites-aeropostale-Site/en_US/Cart-AddCouponJson?format=ajax&couponCode=",
			aeroWalletUrl: "https://www.aeropostale.com/on/demandware.store/Sites-aeropostale-Site/en_US/COBilling-UpdateSummary?"
		}, {
			domain: "shutterfly.com",
			cart: ["www.shutterfly.com/cart"],
			shuttCouponUrl: "https://www.shutterfly.com/rest/ecom/user/022017776454/discount/"
		}, {
			domain: "snapfish.com",
			cart: ["www.snapfish.com/cart/shoppingcart"],
			snapfishCouponUrl: "https://www.snapfish.com/cart/postcoupon"
		}, {
			domain: "dressbarn.com",
			cart: ["www.dressbarn.com/cart/cart.jsp"],
			dressCouponUrl: "https://www.dressbarn.com/dressbarn/baseAjaxServlet?pageId=UpdateCart"
		}, {
			domain: "nastygal.com",
			cart: ["www.nastygal.com/billing-continue"]
		}, {
			domain: "hanes.com",
			cart: ["www.hanes.com/shop/AjaxOrderItemDisplayView"]
		}, {
			domain: "vitacost.com",
			cart: ["www.vitacost.com/Checkout/ShoppingCart.aspx", "www.vitacost.com/checkout.aspx"],
			vitaCouponUrl: "https://www.vitacost.com/Checkout.aspx"
		}, {
			domain: "bebe.com",
			cart: ["www.bebe.com/checkout/basket.jsp", "www.bebe.com/checkout/update_items"],
			bebeWalletUrl: "https://www.bebe.com/checkout/panels/order_summary.jsp?time=1524658725618&activeStepId=paymentBilling&onePageMode=0"
		}, {
			domain: "brookstone.com",
			cart: ["www.brookstone.com/cart", "www.brookstone.com/billing", "www.brookstone.com/checkout"]
		}, {
			domain: "newbalance.com",
			cart: ["www.newbalance.com/on/demandware.store/Sites-newbalance_us2-Site/en_US/Cart-Show"],
			newbalanceCouponUrl: "https://www.newbalance.com/on/demandware.store/Sites-newbalance_us2-Site/en_US/COBilling-ApplyCoupon?couponCode=",
			newbalanceRemUrl: "https://www.newbalance.com/on/demandware.store/Sites-newbalance_us2-Site/en_US/COBilling-RemovePromoCode?promoCode="
		}, {
			domain: "dollargeneral.com",
			cart: ["www.dollargeneral.com/checkout"],
			dollarWalletUrl: "https://www.dollargeneral.com/rest/default/V1/carts/mine/totals"
		}, {
			domain: "bluenile.com",
			cart: ["secure.bluenile.com/basket.html", "secure.bluenile.com/billing-address"]
		}, {
			domain: "puritan.com",
			cart: ["www.puritan.com/shoppingcart"],
			puritanCouponUrl: "https://www.puritan.com/shoppingcart/applyCoupon"
		}, {
			domain: "fromyouflowers.com",
			cart: ["www.fromyouflowers.com/cart.htm"],
			fromyouCouponUrl: "https://www.fromyouflowers.com/cart.htm"
		}, {
			domain: "davidsbridal.com",
			cart: ["www.davidsbridal.com/AjaxOrderItemDisplayView"]
		}, {
			domain: "herbergers.com",
			cart: ["www.herbergers.com/checkout"]
		}, {
			domain: "eddiebauer.com",
			cart: ["www.eddiebauer.com/checkout/bag.jsp"],
			eddieCouponUrl: "https://www.eddiebauer.com/xhr/submit.jsp?_=",
			eddieWalletUrl: "https://www.eddiebauer.com/checkout/gadgets/bag/bag-order-summary.jsp?_="
		}, {
			domain: "toms.com",
			cart: ["www.toms.com/checkout"],
			tomsCouponUrl: "https://www.toms.com/checkout/ship/shipping_method.jsp?_DARGS=/checkout/common/checkoutPromoCode.jsp.couponForm2"
		}, {
			domain: "younkers.com",
			cart: ["www.younkers.com/checkout"]
		}, {
			domain: "straighttalk.com",
			cart: ["shop.straighttalk.com/webapp/wcs/stores/servlet"],
			straightCouponUrl: "https://shop.straighttalk.com/webapp/wcs/stores/servlet/AjaxPromotionCodeManage"
		}, {
			domain: "fossil.com",
			cart: ["www.fossil.com/us/en/shopping-bag.html"]
		}, {
			domain: "shoecarnival.com",
			cart: ["www.shoecarnival.com/cart"],
			shoeCouponUrl: "https://www.shoecarnival.com/on/demandware.store/Sites-shoecarnival-Site/default/Cart-SubmitForm"
		}, {
			domain: "shopbop.com",
			cart: ["www.shopbop.com/s/cart", "www.shopbop.com/actions/viewShoppingCartPageAction.action"],
			shopbopCouponUrl: "https://www.shopbop.com/s/cart/promotioncode"
		}, {
			domain: "harryanddavid.com",
			cart: ["www.harryanddavid.com/webapp/wcs/stores/servlet/FDPlaceOrderDisplayCmd"],
			harryCouponUrl: "https://www.harryanddavid.com/webapp/wcs/stores/servlet/ApplyPromotion"
		}, {
			domain: "columbia.com",
			cart: ["www.columbia.com/cart"]
		}, {
			domain: "torrid.com",
			cart: ["www.torrid.com/cart"]
		}, {
			domain: "michaels.com",
			cart: ["www.michaels.com/cart"],
			michaelsCouponUrl: "https://www.michaels.com/cart?dwcont="
		}, {
			domain: "avenue.com",
			cart: ["www.avenue.com/en_US/cart"],
			avenueCouponUrl: "https://www.avenue.com/en_US/cart"
		}, {
			domain: "crocs.com",
			cart: ["www.crocs.com/on/demandware.store/Sites-crocs_us-Site/default/Cart-Show"]
		}, {
			domain: "quill.com",
			cart: ["www.quill.com/Checkout/Checkout"]
		}, {
			domain: "lenovo.com",
			cart: ["lenovo.com/us/en/cart"],
			lenovoCouponUrl: "https://www.lenovo.com/us/en/cart/voucherRedeem"
		}, {
			domain: "bloomingdales.com",
			cart: ["www.bloomingdales.com/bag"]
		}, {
			domain: "hp.com",
			cart: ["store.hp.com/webapp/wcs/stores/servlet/AjaxOrderItemDisplayView"]
		}, {
			domain: "dell.com",
			cart: ["www.dell.com/en-us/cart"],
			dellCouponUrl: "https://www.dell.com/csbapi/en-us/cart/coupon"
		}, {
			domain: "kmart.com",
			cart: ["www.kmart.com/crsp/mx/cart", "http://www.kmart.com/crsp/mx/cart"],
			kmartCouponUrl: "https://www.kmart.com/crsp/api/cart/v1/coupon/add"
		}, {
			domain: "ediblearrangements.com",
			cart: ["www.ediblearrangements.com/Fruit-Cart.aspx"]
		}, {
			domain: "reebok.com",
			cart: ["www.reebok.com/on/demandware.store/Sites-Reebok-US-Site/en_US/Cart-Show"],
			reebokCouponUrl: "https://www.reebok.com/on/demandware.store/Sites-Reebok-US-Site/en_US/Cart-Submits",
			reebokWalletUrl: "https://www.reebok.com/on/demandware.store/Sites-Reebok-US-Site/en_US/Cart-Show"
		}, {
			domain: "ralphlauren.com",
			cart: ["www.ralphlauren.com/cart"]
		}, {
			domain: "dermstore.com",
			cart: ["www.dermstore.com/cart/1_shopping_cart.php"],
			dermCouponUrl: "https://www.dermstore.com/cart/ajax/cart.php"
		}, {
			domain: "cheapoair.com",
			cart: ["www.cheapoair.com/fpnext/Payment/Air", "www.cheapoair.com/FPNextHotel/Payment"]
		}, {
			domain: "jcrew.com",
			cart: ["www.jcrew.com/checkout"],
			jcrewCouponUrl: "https://www.jcrew.com/checkout2/shoppingbag.jsp"
		}, {
			domain: "bodybuilding.com",
			cart: ["www.bodybuilding.com/store/commerce/cart.jsp"],
			bodybuildingCouponUrl: "https://www.bodybuilding.com/store/commerce/cart.jsp?_DARGS=/store/commerce/cart/cart-container.jsp.cartForm"
		}, {
			domain: "sierratradingpost.com",
			cart: ["www.sierratradingpost.com/cart"],
			sierraCouponUrl: "https://www.sierratradingpost.com/cart/applykeycode"
		}, {
			domain: "victoriassecret.com",
			cart: ["www.victoriassecret.com/commerce2/checkout#/payment"],
			victoCouponUrl: "https://www.victoriassecret.com/commerce2/continue/offers"
		}, {
			domain: "restaurant.com",
			cart: ["www.restaurant.com/cart"],
			restCouponUrl: "https://www.restaurant.com/Shared/Shared/ApplyPromoCode"
		}, {
			domain: "bookit.com",
			cart: ["from.bookit.com/review.php", "from.bookit.com/confirm.php"]
		}, {
			domain: "pepboys.com",
			cart: ["www.pepboys.com/cart"],
			pepboysCouponUrl: "https://www.pepboys.com/cart/ajax/applyPromo"
		}, {
			domain: "ebags.com",
			cart: ["www.ebags.com/cart"],
			ebagsCouponUrl: "https://www.ebags.com/cart/SetSourceCode"
		}, {
			domain: "orientaltrading.com",
			cart: ["www.orientaltrading.com/web/shoppingcart", "secure.checkout.orientaltrading.com/checkout"],
			orientalCouponUrl: "https://secure.checkout.orientaltrading.com/checkout/rest/promocode/"
		}, {
			domain: "orvis.com",
			cart: ["www.orvis.com/store/basket.aspx"],
			orvisCouponUrl: "https://www.orvis.com/services/OrvisOrderService.asmx/setSpecialOffer"
		}, {
			domain: "yankeecandle.com",
			cart: ["www.yankeecandle.com/cart"],
			yankeeCouponUrl: "https://www.yankeecandle.com/cart/bag.jsp?_DARGS=/cart/includes/promotion-code.jsp.applyCouponform",
			yankeeCouponRemUrl: "https://www.yankeecandle.com/cart/bag.jsp?_DARGS=/cart/includes/promotion-code.jsp.removeCouponform"
		}, {
			domain: "guitarcenter.com",
			cart: ["www.guitarcenter.com/cart", "www.guitarcenter.com/checkout"],
			guitarCouponUrl: "https://www.guitarcenter.com/checkout/shipping?_DARGS=/cko/shipping.jsp.couponForm"
		}, {
			domain: "juicycouture.com",
			cart: ["www.juicycouture.com/Checkout", "www.juicycouture.com/Cart"],
			juicyCouponUrl: "https://www.juicycouture.com/Cart/ApplyPromoCode"
		}, {
			domain: "nyandcompany.com",
			cart: ["www.nyandcompany.com/checkout/checkout.jsp", "www.nyandcompany.com/shopping-bag"],
			nyandcompanyCouponUrl: "https://www.nyandcompany.com/checkout/gadgets/checkoutCouponErrorMessage.jsp?_DARGS=/checkout/gadgets/billingForm.jsp.apply_coupon",
			nyandcompanyCouponRemUrl: "https://www.nyandcompany.com/checkout/gadgets/checkoutCouponErrorMessage.jsp?_DARGS=/checkout/gadgets/getAvailableCoupons.jsp.billingRemoveCouponForm_1",
			nyandcompanyWalletUrl: "https://www.nyandcompany.com/checkout/checkoutOrderSummary.jsp?_=1527663986806"
		}, {
			domain: "dunkindonuts.com",
			cart: ["shop.dunkindonuts.com/cart"],
			dunkinCouponUrl: "https://shop.dunkindonuts.com/store/ajaxSubmitPromoCode"
		}, {
			domain: "tirebuyer.com",
			cart: ["www.tirebuyer.com/tirebuyer/checkout"],
			tireCouponUrl: "https://www.tirebuyer.com/tirebuyer/cart/ajax/coupon"
		}, {
			domain: "cottonon.com",
			cart: ["cottonon.com/US/bag/", "cottonon.com/on/demandware.store/Sites-cog-us-Site/en_US/Cart-SubmitForm"],
			cottononCouponUrl: "https://cottonon.com/on/demandware.store/Sites-cog-us-Site/en_US/Cart-AddPromoCode",
			cottononWalletUrl: "https://cottonon.com/on/demandware.store/Sites-cog-us-Site/en_US/Cart-GetOrderTotalAndDiscounts"
		}, {
			domain: "blair.com",
			cart: ["blair.com/checkout"],
			blairCouponUrl: "https://checkout.blair.com/checkout/update_promo_code_ajax.cmd?time=1527841978541"
		}, {
			domain: "speckproducts.com",
			cart: ["www.speckproducts.com/cart"],
			speckCouponUrl: "https://www.speckproducts.com/on/demandware.store/Sites-speck-Site/default/Cart-AddCouponJson?couponCode=",
		}, {
			domain: "jimmyjazz.com",
			cart: ["www.jimmyjazz.com/cart"],
		}, {
			domain: "ashford.com",
			cart: ["www.ashford.com/us/cart"],
			ashfordCouponUrl: "https://www.ashford.com/us/cart/json/cartContents_new.jsp?_DARGS=/cart/gadgets/shoppingCartForms.jsp.applyCouponForm",
			ashfordCouponRemUrl: "https://www.ashford.com/us/cart/json/cartContents_new.jsp?_DARGS=/cart/gadgets/shoppingCartForms.jsp.removeCouponForm"
		}, {
			domain: "rockbottomgolf.com",
			cart: ["www.rockbottomgolf.com/cart.php"],
			rockbottomgolfCouponUrl: "https://www.rockbottomgolf.com/remote/v1/apply-code"
		}, {
			domain: "eyebuydirect.com",
			cart: ["www.eyebuydirect.com/cart", "www.eyebuydirect.com/checkout"],
			eyebuyCouponUrl: "https://www.eyebuydirect.com/cart?action=redeem_coupon"
		}, {
			domain: "shopko.com",
			cart: ["www.shopko.com/checkout"],
			shopkoCouponUrl: "https://www.shopko.com/checkout/update_promo_code_ajax.cmd"
		}, {
			domain: "shoesforcrews.com",
			cart: ["shoesforcrews.com/sfc3/index.cfm?changeWebsite=US_en&route=c_store.viewShoppingCartContents"],
			shoescrewsCouponUrl: "https://www.shoesforcrews.com/cfc/SFCAjaxUtils.cfc"
		}, {
			domain: "bhcosmetics.com",
			cart: ["www.bhcosmetics.com"],
			bhcosmeticsCouponUrl: "https://www.bhcosmetics.com/checkout/cart/couponPost/"
		}, {
			domain: "destinationmaternity.com",
			cart: ["www.destinationmaternity.com/cart"],
			destinCouponUrl: "https://www.destinationmaternity.com/on/demandware.store/Sites-dmat-us-Site/default/Cart-AddCouponJson?format=ajax&couponCode=",
			destinRemCouponUrl: "https://www.destinationmaternity.com/cart/?dwcont="
		}, {
			domain: "christopherandbanks.com",
			cart: ["www.christopherandbanks.com/cart", "www.christopherandbanks.com/checkout"],
			christoCouponUrl: "https://www.christopherandbanks.com/on/demandware.store/Sites-CBKB2C-Site/default/Cart-AddCouponJson?format=ajax&couponCode=",
			christoRemCouponUrl: "https://www.christopherandbanks.com/cart?dwcont="
		}, {
			domain: "alibris.com",
			cart: ["www.alibris.com/cart"],
			alibrisCouponUrl: "https://www.alibris.com/cart.processCoupon"
		}, {
			domain: "clarisonic.com",
			cart: ["www.clarisonic.com/cart"],
			clarisonicCouponUrl: "https://www.clarisonic.com/on/demandware.store/Sites-Clarisonic-US-Site/default/Cart-AddRemoveCoupon?type=add&couponCode=",
			clarisonicRCouponUrl: "https://www.clarisonic.com/on/demandware.store/Sites-Clarisonic-US-Site/default/Cart-AddRemoveCoupon?type=remove&couponCode="
		}, {
			domain: "cafepress.com",
			cart: ["www.cafepress.com/checkout"],
			cafepressCouponUrl: "https://www.cafepress.com/cp/checkout/checkout_form_mobile.aspx"
		}, {
			domain: "catherines.com",
			cart: ["www.catherines.com/catherines/cart"],
			catherinesCouponUrl: "https://www.catherines.com/catherines/baseAjaxServlet?pageId=UpdateCart"
		}, {
			domain: "carsons.com",
			cart: ["www.carsons.com/checkout"]
		}, {
			domain: "1800contacts.com",
			cart: ["www.1800contacts.com/cart"],
			contacts1800CouponUrl: "https://www.1800contacts.com/on/demandware.store/Sites-1800contacts-Site/default/cart-setCouponCode"
		}, {
			domain: "mypillow.com",
			cart: ["www.mypillow.com/checkout/cart/"],
			pillowCouponUrl: "https://www.mypillow.com/checkout/cart/couponPost/"
		}, {
			domain: "barenecessities.com",
			cart: ["www.barenecessities.com/secure/shoppingbag.aspx"],
			barenCouponUrl: "https://www.barenecessities.com/secure/AjaxBagService.aspx"
		}, {
			domain: "naturalizer.com",
			cart: ["www.naturalizer.com/Checkout/Cart"],
			naturalCouponUrl: "https://www.naturalizer.com/Checkout/Cart/AddPromoCode"
		}, {
			domain: "bodenusa.com",
			cart: ["checkout.bodenusa.com/en-US"]
		}, {
			domain: "musiciansfriend.com",
			cart: ["www.musiciansfriend.com/cart"],
			musicianCouponUrl: "https://www.musiciansfriend.com/cart?_DARGS=/crt/includes/forms/applyCoupon.jsp.couponForm",
			musicianRemCouponUrl: "https://www.musiciansfriend.com/cart?_DARGS=/crt/includes/forms/removeCoupon.jsp.removeCouponForm"
		}, {
			domain: "scrubsandbeyond.com",
			cart: ["www.scrubsandbeyond.com/checkout/cart"],
			scrubCouponUrl: "https://www.scrubsandbeyond.com/checkout/cart/couponPost/"
		}, {
			domain: "aveda.com",
			cart: ["www.aveda.com/checkout/viewcart"],
			avedaCouponUrl: "https://www.aveda.com/rpc/jsonrpc.tmpl?dbgmethod=logic.checkout--viewcart"
		}, {
			domain: "ctshirts.com",
			cart: ["www.ctshirts.com/intl/cart"]
		}, {
			domain: "backcountry.com",
			cart: ["www.backcountry.com/Store/checkout/checkout.jsp"],
			backCouponUrl: "https://www.backcountry.com/Store/checkout/checkout.jsp?_DARGS=/Store/checkout/includes/checkoutAjaxForms.jsp.ajaxform-redeemCoupon"
		}, {
			domain: "elder-beerman.com",
			cart: ["www.elder-beerman.com/checkout"]
		}, {
			domain: "zagg.com",
			cart: ["www.zagg.com/us/en_us/checkout/cart/"],
			zaggCouponUrl: "https://www.zagg.com/us/en_us/checkout/cart/couponPost"
		}, {
			domain: "keds.com",
			cart: ["www.keds.com/en/cart"],
			kedsCouponUrl: "https://www.keds.com/on/demandware.store/Sites-keds_us-Site/default/Cart-AddCoupon?couponCode="
		}, {
			domain: "renttherunway.com",
			cart: ["www.renttherunway.com/order"],
			renttheCouponUrl: "https://www.renttherunway.com/order/cart/adjusted?inStorePickup=false&show_checked_terms=false&promoOrGiftcard="
		}, {
			domain: "bonton.com",
			cart: ["www.bonton.com/checkout"]
		}, {
			domain: "kennethcole.com",
			cart: ["www.kennethcole.com/cart"]
		}, {
			domain: "soma.com",
			cart: ["www.soma.com/store/checkout/cart.jsp"],
			somaCouponUrl: "https://www.soma.com/store/common/json/cart.jsp?_DARGS=/store/common/checkout/cart.jsp.couponForm&isCartPage=-1&reprice=true"
		}, {
			domain: "spirithalloween.com",
			cart: ["www.spirithalloween.com/checkout"],
			spiritCouponUrl: "https://www.spirithalloween.com/checkout/update_promo_code_ajax.cmd",
			spiritWalletUrl: "https://www.spirithalloween.com/checkout/data/order_summary_data.jsp"
		}, {
			domain: "claires.com",
			cart: ["www.claires.com/us/shopping-cart"],
			clairesCoupUrl: "https://www.claires.com/on/demandware.store/Sites-clairesNA-Site/en_US/Cart-AddCouponJson?format=ajax&couponCode=",
			clairesRemUrl: "https://www.claires.com/us/shopping-cart-coupon/"
		}, {
			domain: "ashleystewart.com",
			cart: ["www.ashleystewart.com/cart"],
			ashleyCouponUrl: "https://www.ashleystewart.com/cart/?dwcont=",
		}, {
			domain: "build.com",
			cart: ["www.build.com/checkout/cart"],
			buildCouponUrl: "https://www.build.com/app/api/cart/coupon/"
		}, {
			domain: "mixbook.com",
			cart: ["www.mixbook.com/checkout"],
			mixbookCouponUrl: "https://www.mixbook.com/checkout/cart?sections%5B%5D=summary&sections%5B%5D=content&target=coupon&feature_offer_carousel=false"
		}, {
			domain: "belk.com",
			cart: ["www.belk.com/shopping-bag"],
			belkCouponUrl: "https://www.belk.com/missing-coupon/"
		}, {
			domain: "katespade.com",
			cart: ["www.katespade.com/shopping-bag"]
		}, {
			domain: "shoes.com",
			cart: ["www.shoes.com/cart/cart"]
		}, {
			domain: "fragrancenet.com",
			cart: ["www.fragrancenet.com/f/net/ord/basket.html"],
			fragCouponUrl: "https://www.fragrancenet.com/f/net/ord/basket.html"
		}, {
			domain: "landsend.com",
			cart: ["www.landsend.com/co/checkout/shopping-bag"],
			landCouponUrl: "https://www.landsend.com/co/checkout/applyPromotion"
		}, {
			domain: "fredericks.com",
			cart: ["www.fredericks.com/cart"],
			fredCouponUrl: "https://www.fredericks.com/api/v3/carts/29759108/coupon",
			fredWalletUrl: "https://www.fredericks.com/api/v3/carts/?timestamp="
		}, {
			domain: "perfumania.com",
			cart: ["www.perfumania.com/checkout/my-cart.html"]
		}, {
			domain: "travelocity.com",
			cart: ["www.travelocity.com"],
			travelCouponUrl: "https://www.travelocity.com/Checkout/applyCoupon",
			travelrmvCouponUrl: "https://www.travelocity.com/Checkout/removeCoupon"
		}, {
			domain: "revolve.com",
			cart: ["www.revolve.com/r/PaymentOptions.jsp"],
			revolveCouponUrl: "https://www.revolve.com/r/ajax/ApplyPromoCode.jsp",
		}
	]
}

 ///////////////////// Code for get coupons from api at onload event of extension poup //////////
 ////// Code for cashback found screen, Search stores screen and coupons found screen ////////////////
var elem;
var version;
onload(getStoreDomain, elem);
function onload(getStoreDomain, elem) {
	chrome.storage.local.get(["appVersion"], function (items) {
		appVersionObj = JSON.stringify(items.appVersion);
		if (appVersionObj) {
			appVersion = appVersionObj.replace(/['"]+/g, '');
		}
		var popup = document.getElementById('__genieContainer');
		if (popup) {
			document.getElementById('__genieContainer').style.position = 'absolute';
			document.getElementById('__genieContainer').style.zIndex = '100';
		}
		chrome.storage.local.get(null, function (obje) {
			storeListObj = obje.storelist_json;
			var storesCount = storeListObj.stores.length;
			if (elem) {
				CurrHref = getStoreDomain;
			}
			for (site in storeListObj.stores) {
				if (CurrHref.indexOf(storeListObj.stores[site].store_domain) > -1) {
					after1Hour();
					storeCookies = storeListObj.stores[site].id;
					strCookies = storeListObj.stores[site].store_title;
					//chrome.extension.sendRequest("enableicon");
					var storage = chrome.storage.local;
					var time_now = (new Date()).getTime();
					storage.get(strCookies, function (result) {
						var lastclear = result[strCookies];
						if (!lastclear) {
							lastclear = null;
						}
						if (!elem) {
							elemMouseEvent = "";
							getStoreDomain = storeListObj.stores[site].store_domain;
							getStoreDomain = getStoreDomain.replace("www.", "");
						}
						
						//.getTime() returns milliseconds so 1000 * 60 * 60 * 1 = 1 hours
						if ((time_now - lastclear) > 1000 * 60 * 60 * 1) {
							chrome.storage.local.get(["installId"], function (items) {
								InstallObj = JSON.stringify(items.installId);
								if(InstallObj)
								{
								InstallObj = InstallObj.replace(/['"]+/g, '');
								var parameters = "installation_id=" + InstallObj + "&url=" + getStoreDomain + "";
								try {
									var xmlhttp = new XMLHttpRequest();
									xmlhttp.onreadystatechange = function () {
										if (this.readyState == 4 && this.status == 200) {
											try {
												var encryptResp = JSON.parse(this.responseText);
												var decryptResp = JSON.parse(CryptoJS.AES.decrypt(encryptResp, "MYUTPbxyqi2a2A6y", {
															format: CryptoJSAesJson
														}).toString(CryptoJS.enc.Utf8));
														// console.log(decryptResp);
												var getCouponsObj = JSON.parse(decryptResp);
												if (getCouponsObj) {
													storage.set({
														[storeCookies]: getCouponsObj
													});
													chrome.storage.local.remove([strCookies], function () {});
													storage.set({
														[strCookies]: time_now
													});
													CouponPopup(elem, getStoreDomain);
												}
											} catch (e) {
												Raven.captureException("AppVersion:" + appVersion + ", GetCoupons Invalid JSON, " + e);
											}
										}
									};
									xmlhttp.open("POST", baseApiUrl + "/getCoupons", false);
									xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
									xmlhttp.setRequestHeader("Client-Service", "cchief");
									xmlhttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
									xmlhttp.send(parameters);
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ",GetCoupons Api Error, " + e);
								}
								}
							});
						} else {
							CouponPopup(elem, getStoreDomain);
						}
					});
					return;
				} else {
					if (site == storesCount - 1) {
						if ((document.getElementById('couponchiefiframe')) && (!iframe.contentWindow.document.getElementById('searchData'))) {
							closeframe();
						} else {
							addstores();
						}
					}
				}
			}
		});
	});
}

function CouponPopup(elem, getStoreDomain) {
	chrome.storage.local.get(storeCookies, function (result) {
		myObj = result[storeCookies];
		if (myObj) {
			codeCount = myObj.codesCount;
			storeValue = myObj.storeValue;
			storeTitle = myObj.title;
			store_affiliate = myObj.affiliateLink;
			chrome.storage.local.set({
				"coupon_affiliate": store_affiliate
			}, function () {});
			if ((myObj.cashback.length == 0) && (myObj.coupons.length == 0)) {
				searchStorelist(elem);
				iframe.contentWindow.document.getElementById('NoCouponsMessage').style.display = "block";
				iframe.contentWindow.document.getElementById('appendSearchedStores').style.display = "none";
				iframe.contentWindow.document.getElementById('appendStores').style.display = "none";
				Raven.captureMessage("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", No Coupons for this store", {
					level: 'warning'
				});
				chrome.runtime.sendMessage({
					type: "NoStoreCoupons",
					message: "AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", No Coupons for this store"
				}, function (response) {});
			} else {
				popupHeight = "548px";
				backgroungClr = "#F4F4F4";
				style = "<style>*{box-sizing:border-box}.container{font-size:13px;font-family:'Lato', sans-serif;margin:0 auto;text-align:center;color:#505050}.logo{float:left}.logo img{width:45px}header{box-shadow:0 0 4.8px .3px rgba(0,0,0,.05);padding:13px 10px;width:100%;float:left;background:#fff;border:1px solid #f6f6f6}h3{font-size:13px;font-weight:600;line-height: 1.38;}.content{background:#fff;width:348px;padding-bottom: 15px;float:left;border-radius:5px;margin-bottom:4px;box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1)}.mg-4{margin:4px}.sbtbtn{width:150px;cursor:pointer;border:1px solid #FD601C;background:#FD601C;border-radius:20px;padding:8px 8px;margin-top:10px;color:#fff;font-size:14px;font-family:'Lato', sans-serif;font-weight: bold;}.couponsBlock{float:left;width:100%;margin-top:15px;margin-bottom:15px;}.leftsideC{float:left;width:38%;border-right:1px solid #d8d8d8;margin-left: 29px;}.leftsideC span {margin-top: 0px;}.rightsideC{width:48%;float:left;text-align:left;padding-left:25px}.couponsBlock img{display:inline-block;vertical-align:middle}.couponsBlock span{padding-left:5px;display:inline-block;vertical-align:middle;font-weight: 600;margin-top:0px}.offerData{float:left;width:98.5%;background:#fff;padding:2px 0;border-radius:5px;margin-bottom:4px;box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1)}.leftSecOffer{float:left;width:20%;padding-left:5px}.rightSecOffer{float:left;width:80%;text-align:left;padding:4px 5px}span.statusOffer{font-size:20px;font-weight:500;font-style:normal;WORD-WRAP: BREAK-WORD;letter-spacing:4px;text-align:center;color:#2fbcc1;text-transform:uppercase;display:block}.offerPer{font-size:26px;WORD-WRAP: BREAK-WORD;font-weight:800;font-style:normal;font-stretch:normal;letter-spacing:.7px;text-align:center;color:#2fbcc1;display:block;font-family:Lato}.btnCoupon{border-radius:3px;background-color:#eee;border:solid 1px #b1b1b1; cursor:pointer;font-size: 13px;padding:4px 6px;font-family:Lato;font-weight: bold;display:inline-block;margin-right:5px;margin-top: 2px;}.copyIcon{color:#2fbcc1;font-weight: 550;visibility:hidden;padding: 10px;}.offerCodeBlock{margin-bottom:5px}.daysStatus span{color:#ff894e;vertical-align:middle;padding-left: 6px;display:inline-block}.daysStatus img{vertical-align:middle;display:inline-block}.offerTitle a{color:#2fbcc1;text-transform:lowercase;text-decoration:none;font-weight:400}.search{float:left;text-align:center;width:50%;padding:11px 15px;cursor: pointer;}.heading {color: #8A0030;font-weight: 700;font-size: 22px;text-align: center;display: inline-block;line-height: 18px;margin-right: 10px;}.mTop0{margin-top:0}.mTop10{margin-top:7px}#searchData .content{min-width:354px;min-height: 438px;margin:auto;float:left;box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1);padding:0;background:#f4f4f4}.mg-4{margin:4px}#lActivate{display:none}.actbtn{width:150px;display:none;border:1px solid #28c6c5;background-color:#28c6c5;border-radius:20px;padding:8px 30px;margin-top:10px;color:#fff;font-size:14px;font-family: Lato;font-weight: bold;}#activated{display:inline-block;position:relative}.moreInfo{color:#00aab4;margin-top:13px;display:inline-block;text-decoration:underline;text-transform:capitalize;font-size:14px;font-family:Lato}#linkMyWallet {display: none;}#learnMore{display:inline-block}.mg-4{margin:4px}.close {float: right;cursor: pointer; margin-right: 0px; margin-top: 5px;}.close img {width: 10px;}.cancel{display:none;float:right;color:#C2C2C2;font-size:14px;line-height:19px;cursor:pointer;text-decoration: underline;}.box{float:left;width:48%;background:#fff;margin:2%;margin-left:0px;height:135px;margin-top:0}.box img{padding-top:10px;height:100px;width: 110px;}footer{padding:0 0;width:100%;float:left;background:#fff;border:2px solid #f6f6f6}.home{float:left;text-align:center;width:50%;border-top:3px solid #0fb2b7;padding:11px 15px;cursor: pointer; }.completeBlock{overflow:scroll;float:left;max-height:438px;overflow-x:hidden;margin-top:3px;margin-bottom:5px;margin-right:-4px; padding-left:8px;}.scroll1::-webkit-scrollbar{width:4px}.scroll1::-webkit-scrollbar-track{background:#e1e1e1}.scroll1::-webkit-scrollbar-thumb{background:#929292}.searchBox{width:60%;float:left;margin:auto;margin-left:10px;color:#a3a1a1;display:none}.searchArea{width:100%;color:#a3a1a1;border:none;margin-top: 1px; font-family: Lato;}p{margin:8px}#searchData{display:none}#searchData span{text-transform:capitalize;display:inline-block;color:#505050;line-height:13px;padding:0 7px;font-size:13px;font-family:Lato}span.border-right{border-right:1px solid #505050;cursor:pointer;}.imageBox{height:95px}.mRight1half{margin-right:2%}.mLeft1half{margin-left:1.5%}.pBtm50{padding-bottom:0px}.mTop10{margin-top:5px}input.searchArea:focus{outline:-webkit-focus-ring-color auto 0}footer img{cursor:pointer}#emptyMessage{display:none;font-size: 16px;    color: #9c9898;}#NoCouponsMessage{display:none;font-size: 16px;text-align: justify;margin: 10px;    color: #9c9898;}.offerHeading{position:relative}.offerHeading a{color:#2fbcc1;text-transform:lowercase;text-decoration:none;font-weight:550;cursor:pointer;display:none}.offerTitle{font-size:13px;font-weight:600;font-style:normal;letter-spacing:.3px;color:#7c7c7d;margin-bottom:4px;font-family:Lato;margin-top:0px;margin-left: 0px;word-wrap:break-word}:focus{outline:none}button{cursor:pointer}button img{cursor:auto}.sbtbtn:hover{background:#f5a972;border:1px solid #f5a972;}.actbtn:hover{background:#99dff2;border:1px solid #99dff2;}.searchData{font-size: 12px;display:inline-block;float:left;}.listContent{display:none;}.searchResult{box-shadow: 0.7px 0.7px 9.5px 0.5px rgba(0, 0, 0, 0.1);cursor:pointer;padding: 13px 10px;width: 98%;float: left;background: #fff;border: 1px solid #f6f6f6;}.gIcon{display: inline-block;float: left;margin-left: 3px;}.rightArrow {display: inline-block;float: right;}span.offerPerZero {font-size: 17px;WORD-WRAP: BREAK-WORD;font-weight: 800;font-style: normal;font-stretch: normal;text-align: center;color: #2fbcc1;display: block;font-family: Lato;}span.statusOfferZero {font-size: 15px;font-weight: 500;font-style: normal;WORD-WRAP: BREAK-WORD;text-align: center;color: #2fbcc1; text-transform: uppercase;display: block;}body {margin: 0px;}.mgB-0{margin-bottom: 0px;}#appendDiv{height:auto;}</style>";
				popupHtml = style + fontApi + "<div class='container'> <header> <div class='logo'> <img src='"+imagePathLoc+"logo_49x21.png'></div><div class='heading'>" + storeTitle + "</div><div class='searchBox' id='searchBox'> <input type='text' placeholder='Search Stores' id='mySearchInput' class='searchArea'> </div><div class='close' id='closeiframe'><img src='" + imagePathLoc + "cross.png' /></div><div class='cancel' id='cancelIframe'>Cancel</div></header><div id='home' style='width:365px' class='completeBlock scroll1 mTop10'><div id='dormantDiv'  style='height: 155px;text-align: center;position: relative;top: 45px;font-weight: bold;display: none;padding: 0 48px;letter-spacing: 0.5px;line-height: 20px;' >Apply Savings and Cashback are disabled for this store because you clicked on a link from a coupon website.</div><div id='savingsDiv'></div><div id='cashbackDiv'></div> <div id='appendDiv'></div></div> <div id='searchData' class='completeBlock scroll1 pBtm50 mTop10'><div class='content' id='mySearchContent'><h1 id='emptyMessage'>No supported stores found.</h1><p id='NoCouponsMessage'>Sorry, we currently don’t have any active offers for this store. We add new offers daily, so please check back soon!</p><div class='content contentBg' id='appendStores'></div><div class='content listContent' id='appendSearchedStores'></div></div></div><footer> <div class='home' id='homeData'> <img style='width:20px;' id='homeImage1' src='" + imagePathLoc + "home.png'/> <img id='homeImage2' style='display:none;width:20px;' src='" + imagePathLoc + "home_2.png'> </div><div class='search' id='search'> <img style='width:20px;' id='searchImage1'  src='" + imagePathLoc + "search.png'/> <img id='searchImage2' style='display:none;width:20px;' src='" + imagePathLoc + "search_2.png'> </div></footer> </div>";
				if ((document.getElementById('couponchiefiframe')) && (!elem)) {
					closeframe();
				} else {
					createIframe(popupHtml, myObj, getStoreDomain);
				}
			}
		}
	});
}

/////////////////  Code for add store popup ///////////
function addstores() {
	popupHeight = "256px";
	backgroungClr = "#F4F4F4";
	style = "<style>*{box-sizing:border-box}.container{font-family:Lato;text-align:center;position:relative;background:#F4F4F4;color:#505050; }.logo{ float: left;width: 72%;margin-left: 49px;}.logo img{width:180px}header{box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1);padding:8px 8px 2px;width:100%;float:left;background:#fff;border:1px solid #f6f6f6}h3{font-weight:400;}.content{background:#fff;width:350px;height:197px;margin-left: 9px;padding:4px 14px;float:left;margin-top:8px;box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1)}.mg-4{margin:10px;font-size:18px;}.actbtn {width: 150px; border: 1px solid #28c6c5;background-color:#28c6c5;border-radius: 20px;padding: 6px 0px;color: #fff;font-size: 14px;cursor:pointer;font-family:Lato; font-weight:bold;}:focus{outline:none}.actbtn:hover{background:#99dff2;;border:1px solid #99dff2;}.close{float:right;color:#C2C2C2;font-size:24px;line-height:15px;cursor:pointer}a{text-decoration:none;color:#27a7da}p{font-size:13px;text-align:justify;}body {margin: 0px;}</style>";
	popupHtml = style + fontApi + "<div class='container'> <header> <div class='logo'> <img src='" + imagePathLoc + "scout_logo.png'/></div><div class='close' id='closeiframe' ><img style='width:10px;margin-top:7px; margin-right: 2px;' src='" + imagePathLoc + "cross.png' /></div><div class='iconsearch' id='iconsearch'><img style='width: 15px;width: 15px;margin-top: 5px;margin-right: 18px;cursor:pointer;' id='searchImage' src='" + imagePathLoc + "search.png'></div></header> <div class='content'> <h3 class='mg-4'><span style='color:#28c6c5' >Whoops! </span>Scout doesn’t support this website yet!</h3> <p>The good news is we’re always growing and looking for more amazing sites to include. Until we add this one, why not head over to <a style='text-decoration:underline' target='_blank' href='" + baseUrl + "'>our website</a> to catch more deals before they go away!</p><div> <button class='actbtn' id='addStoreId' >Request this Store</button> </div></div></div>";
	addStoreIframe(popupHtml);
}

function addStoreIframe(popupHtml) {
	closeframe();
	var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
	if (!location.ancestorOrigins.contains(extensionOrigin)) {
		var iframeExists = false;
		if (iframe)
			if (iframe.parentNode)
				iframeExists = true;
		if (!iframeExists) {
			iframe = document.createElement('iframe');
			iframe.setAttribute("id", "couponchiefiframe");
			iframe.setAttribute("frameBorder", "0");
			iframe.setAttribute("style", "position:fixed;top:10px;border:0.8px solid #e8dfdf;padding:0; z-index: 9999999999;right:10px;display:inline-block;width:370px;height:" + popupHeight + ";z-index:9999999999;opacity:1;background-color:" + backgroungClr + ";");
			document.body.appendChild(iframe);
		}
		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write(popupHtml);
		if (iframe.contentWindow.document.getElementById('closeiframe')) {
			iframe.contentWindow.document.getElementById('closeiframe').addEventListener('click', closeframe);
		}
		if (iframe.contentWindow.document.getElementById('addStoreId')) {
			iframe.contentWindow.document.getElementById('addStoreId').addEventListener('click', AddStore);
		}
		if (iframe.contentWindow.document.getElementById('iconsearch')) {
			iframe.contentWindow.document.getElementById('iconsearch').addEventListener('click', searchStorelist);
		}
	}
}

function searchStorelist(elem) {
	style = "<style>*{box-sizing:border-box}.container{font-size:13px;font-family:'Lato', sans-serif;margin:0 auto;text-align:center;color:#505050}.logo{float:left}.logo img{width:45px}header{box-shadow:0 0 4.8px .3px rgba(0,0,0,.05);padding:13px 10px;width:100%;float:left;background:#fff;border:1px solid #f6f6f6}h3{font-size:13px;font-weight:600;line-height: 1.38;}.content{background:#fff;width:348px;padding-bottom: 15px;float:left;border-radius:5px;margin-bottom:4px;box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1)}.mg-4{margin:4px}.sbtbtn{width:150px;cursor:pointer;border:1px solid #FD601C;background:#FD601C;border-radius:20px;padding:8px 8px;margin-top:10px;color:#fff;font-size:14px;font-family:'Lato', sans-serif;font-weight: bold;}.couponsBlock{float:left;width:100%;margin-top:15px;margin-bottom:15px;}.leftsideC{float:left;width:38%;border-right:1px solid #d8d8d8;margin-left: 29px;}.leftsideC span {margin-top: 0px;}.rightsideC{width:48%;float:left;text-align:left;padding-left:25px}.couponsBlock img{display:inline-block;vertical-align:middle}.couponsBlock span{padding-left:5px;display:inline-block;vertical-align:middle;font-weight: 600;margin-top:0px}.offerData{float:left;width:98.5%;background:#fff;padding:2px 0;border-radius:5px;margin-bottom:4px;box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1)}.leftSecOffer{float:left;width:20%;padding-left:5px}.rightSecOffer{float:left;width:80%;text-align:left;padding:4px 5px}span.statusOffer{font-size:20px;font-weight:500;font-style:normal;WORD-WRAP: BREAK-WORD;letter-spacing:4px;text-align:center;color:#2fbcc1;text-transform:uppercase;display:block}.offerPer{font-size:26px;WORD-WRAP: BREAK-WORD;font-weight:800;font-style:normal;font-stretch:normal;letter-spacing:.7px;text-align:center;color:#2fbcc1;display:block;font-family:Lato}.btnCoupon{border-radius:3px;background-color:#eee;border:solid 1px #b1b1b1; cursor:pointer;font-size: 13px;padding:4px 6px;font-family:Lato;font-weight: bold;display:inline-block;margin-right:5px;margin-top: 2px;}.copyIcon{color:#2fbcc1;font-weight: 550;visibility:hidden;padding: 10px;}.offerCodeBlock{margin-bottom:5px}.daysStatus span{color:#ff894e;vertical-align:middle;padding-left: 6px;display:inline-block}.daysStatus img{vertical-align:middle;display:inline-block}.offerTitle a{color:#2fbcc1;text-transform:lowercase;text-decoration:none;font-weight:400}.search{float:left;text-align:center;width:50%;padding:11px 15px;cursor: pointer;}.heading {color: #8A0030;font-weight: 700;font-size: 24px;text-align: center;display: inline-block;margin-right: 20px;line-height: 18px;}.mTop0{margin-top:0}.mTop10{margin-top:7px}#searchData .content{min-width:354px;min-height: 438px;margin:auto;float:left;box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1);padding:0;background:#f4f4f4}.mg-4{margin:4px}#lActivate{display:none}.actbtn{width:150px;display:none;border:1px solid #28c6c5;background-color:#28c6c5;border-radius:20px;padding:8px 30px;margin-top:10px;color:#fff;font-size:14px;font-family: Lato;font-weight: bold;}#activated{display:inline-block;position:relative}.moreInfo{color:#00aab4;margin-top:13px;display:inline-block;text-decoration:underline;text-transform:capitalize;font-size:14px;font-family:Lato}#linkMyWallet {display: none;}#learnMore{display:inline-block}.mg-4{margin:4px}.close {float: right;cursor: pointer; margin-right: 0px; margin-top: 5px;}.close img {width: 10px;}.cancel{display:none;float:right;color:#C2C2C2;font-size:14px;line-height:19px;cursor:pointer;text-decoration: underline;}.box{float:left;width:48%;background:#fff;margin:2%;margin-left:0px;height:135px;margin-top:0}.box img{padding-top:10px;height:100px;width: 110px;}footer{padding:0 0;width:100%;float:left;background:#fff;border:2px solid #f6f6f6}.home{float:left;text-align:center;width:50%;border-top:3px solid #0fb2b7;padding:11px 15px;cursor: pointer;}.completeBlock{overflow:scroll;float:left;max-height:438px;overflow-x:hidden;margin-top:3px;margin-bottom:5px;margin-right:-4px; padding-left:8px;}.scroll1::-webkit-scrollbar{width:4px}.scroll1::-webkit-scrollbar-track{background:#e1e1e1}.scroll1::-webkit-scrollbar-thumb{background:#929292}.searchBox{width:60%;float:left;margin:auto;margin-left:10px;color:#a3a1a1;display:none}.searchArea{width:100%;color:#a3a1a1;border:none;margin-top: 1px; font-family: Lato;}p{margin:8px}#searchData{display:none}#searchData span{text-transform:capitalize;display:inline-block;color:#505050;line-height:13px;padding:0 7px;font-size:13px;font-family:Lato}span.border-right{border-right:1px solid #505050;cursor:pointer;}.imageBox{height:95px}.mRight1half{margin-right:2%}.mLeft1half{margin-left:1.5%}.pBtm50{padding-bottom:0px}.mTop10{margin-top:5px}input.searchArea:focus{outline:-webkit-focus-ring-color auto 0}footer img{cursor:pointer}#emptyMessage{display:none;font-size: 16px;    color: #9c9898;}#NoCouponsMessage{display:none;font-size: 16px;text-align: justify;margin: 10px;    color: #9c9898;}.offerHeading{position:relative}.offerHeading a{color:#2fbcc1;text-transform:lowercase;text-decoration:none;font-weight:550;cursor:pointer;display:none}.offerTitle{font-size:13px;font-weight:600;font-style:normal;letter-spacing:.3px;color:#7c7c7d;margin-bottom:4px;font-family:Lato;margin-top:0px;margin-left: 0px;word-wrap:break-word}:focus{outline:none}button{cursor:pointer}button img{cursor:auto}.sbtbtn:hover{background:#f5a972;border:1px solid #f5a972;}.actbtn:hover{background:#99dff2;border:1px solid #99dff2;}.searchData{font-size: 12px;display:inline-block;float:left;}.listContent{display:none;}.searchResult{box-shadow: 0.7px 0.7px 9.5px 0.5px rgba(0, 0, 0, 0.1);cursor:pointer;padding: 13px 10px;width: 98%;float: left;background: #fff;border: 1px solid #f6f6f6;}.gIcon{display: inline-block;float: left;margin-left: 3px;}.rightArrow {display: inline-block;float: right;}span.offerPerZero {font-size: 17px;WORD-WRAP: BREAK-WORD;font-weight: 800;font-style: normal;font-stretch: normal;text-align: center;color: #2fbcc1;display: block;font-family: Lato;}span.statusOfferZero {font-size: 15px;font-weight: 500;font-style: normal;WORD-WRAP: BREAK-WORD;text-align: center;color: #2fbcc1; text-transform: uppercase;display: block;}body {margin: 0px;}.mgB-0{margin-bottom: 0px;}</style>";
	popupHeight = "547px";
	backgroungClr = "#F4F4F4";
	popupHtml = style + fontApi + "<div class='container'> <header> <div class='logo'> <img src='" + imagePathLoc + "logo_49x21.png'></div><div class='heading'>" + storeTitle + "</div><div class='searchBox' id='searchBox'> <input type='text' placeholder='Search Stores' id='mySearchInput' class='searchArea'> </div><div class='close' id='closeiframe'><img src='" + imagePathLoc + "cross.png' /></div><div class='cancel' id='cancelIframe'>Cancel</div></header><div id='home' style='width:365px' class='completeBlock scroll1 mTop10'><div id='dormantDiv'  style='height: 155px;text-align: center;position: relative;top: 45px;font-weight: bold;display: none;padding: 0 48px;letter-spacing: 0.5px;line-height: 20px;' >Apply Savings and Cashback are disabled for this store because you clicked on a link from a coupon website.</div> <div id='savingsDiv'></div><div id='cashbackDiv'></div> <div id='appendDiv'></div></div> <div id='searchData' class='completeBlock scroll1 pBtm50 mTop10'><div class='content' id='mySearchContent'><h1 id='emptyMessage'>No supported stores found.</h1><p id='NoCouponsMessage'>Sorry, we currently don’t have any active offers for this store. We add new offers daily, so please check back soon!</p><div class='content contentBg' id='appendStores'></div><div class='content listContent' id='appendSearchedStores'></div></div></div><footer> <div class='home' id='homeData'> <img style='width:20px;' id='homeImage1' src='" + imagePathLoc + "home.png'/> <img id='homeImage2' style='display:none;width:20px;' src='" + imagePathLoc + "home_2.png'> </div><div class='search' id='search'> <img style='width:20px;' id='searchImage1'  src='" + imagePathLoc + "search.png'/> <img id='searchImage2' style='display:none;width:20px;' src='" + imagePathLoc + "search_2.png'> </div></footer> </div>";
	if ((document.getElementById('couponchiefiframe')) && (!elem)) {
		closeframe();
	} else {
		closeframe();
		var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
		if (!location.ancestorOrigins.contains(extensionOrigin)) {
			var iframeExists = false;
			if (iframe)
				if (iframe.parentNode)
					iframeExists = true;
			if (!iframeExists) {
				iframe = document.createElement('iframe');
				iframe.setAttribute("id", "couponchiefiframe");
				iframe.setAttribute("frameBorder", "0");
				iframe.setAttribute("style", "position:fixed;top:10px;border:0.8px solid #e8dfdf;padding:0;z-index: 9999999999;right:10px;display:inline-block;width:370px;height:" + popupHeight + ";opacity:1;background-color:" + backgroungClr + ";");
				document.body.appendChild(iframe);
			}
			iframe.contentWindow.document.open();
			iframe.contentWindow.document.write(popupHtml);
			searchData();
			if (iframe.contentWindow.document.getElementById('closeiframe')) {
				iframe.contentWindow.document.getElementById('closeiframe').addEventListener('click', closeframe);
			}
			if (iframe.contentWindow.document.getElementById('homeData')) {
				iframe.contentWindow.document.getElementById('homeData').addEventListener('click', homeData);
				iframe.contentWindow.document.getElementById('homeData').style.borderTop = '3px solid transparent';
			}
			if (iframe.contentWindow.document.getElementById('search')) {
				iframe.contentWindow.document.getElementById('search').addEventListener('click', searchData);
				iframe.contentWindow.document.getElementById('search').style.borderTop = '3px solid #0fb2b7';
			}
		}
	}
}

function resizeIframe(obj) {
		var couponBody = obj.contentWindow.document.getElementsByClassName('offerData');
		let couponHeight = 114;
		setTimeout(function () {
			for (let i = 0; i < couponBody.length; i++) {
				couponHeight += couponBody[i].offsetHeight + 4;
			}
			if(obj.contentWindow)
	       {
				if (obj.contentWindow.document.getElementById('appendCashback')) {
					let cashbackDiv = obj.contentWindow.document.getElementsByClassName('content');
					couponHeight += cashbackDiv[0].offsetHeight + 3;
				}
				if (obj.contentWindow.document.getElementById('appendSavings')) {
					let savingDiv = obj.contentWindow.document.getElementsByClassName('content');
					couponHeight += savingDiv[0].offsetHeight + 3;
				}
		   }
			if (couponHeight > 547) {
				couponHeight = 547
			}
			obj.style.height = couponHeight + 'px';
		}, 10);
}

///////////////////// Create iframe popup for shows all coupons, cashback ////////////////////
var jsonObj;
function createIframe(popupHtml, jsonObj, getStoreDomain) {
	closeframe();
	var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
	if (!location.ancestorOrigins.contains(extensionOrigin)) {
		var iframeExists = false;
		if (iframe)
			if (iframe.parentNode)
				iframeExists = true;
		if (!iframeExists) {
			iframe = document.createElement('iframe');
			iframe.setAttribute("id", "couponchiefiframe");
			iframe.setAttribute("frameBorder", "0");
			iframe.setAttribute("style", "position:fixed;top:10px;border:0.8px solid #e8dfdf;padding:0;z-index: 9999999999;right:10px;display:inline-block;width:370px;opacity:1;background-color:" + backgroungClr + ";");
			document.body.appendChild(iframe);
			iframe.setAttribute("onload", resizeIframe(iframe));
		}
		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write(popupHtml);
		indexSupportedSite = isInSupportedSites(getStoreDomain);
		if (indexSupportedSite) {
			cartpageUrl = partners.SupportedSites[indexSupportedSite - 1].cart;
			var CurrHref = window.location.href;
			
			if (CurrHref.indexOf("www.kohls.com") > -1) {
				kohlsWalletApi = partners.SupportedSites[indexSupportedSite - 1].kohlsWalletUrl;
			}
			if (CurrHref.indexOf("www.walgreens.com") > -1) {
				walgreenCartIdApi = partners.SupportedSites[indexSupportedSite - 1].walgreenCartIdUrl
					var walhttp = new XMLHttpRequest();
				walhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						wallObj = JSON.parse(this.responseText);
						wallCartId = wallObj.cartInfo.cartId;
					}
				};
				walhttp.open("GET", walgreenCartIdApi, false);
				walhttp.send();
			}
			if (CurrHref.indexOf("www.forever21.com") > -1) {
				forever21CouponApi = partners.SupportedSites[indexSupportedSite - 1].forever21CouponUrl;
				forever21CoupRemoveApi = partners.SupportedSites[indexSupportedSite - 1].foreverRemCouponUrl;
				pTime = 5000;
			}
			if (CurrHref.indexOf("www.macys.com") > -1) {
				pTime = 5000;
			}
			if (CurrHref.indexOf("www.officedepot.com") > -1) {
				officeCouponApi = partners.SupportedSites[indexSupportedSite - 1].officedepotCouponUrl;
				officeCoupRemoveApi = partners.SupportedSites[indexSupportedSite - 1].officeCoupRemoveUrl;
			}
			if (CurrHref.indexOf("www.sears.com") > -1) {
				searsCouponApi = partners.SupportedSites[indexSupportedSite - 1].searsCouponUrl;
				searsWalletApi = partners.SupportedSites[indexSupportedSite - 1].searsWalletUrl;
			}
			if (CurrHref.indexOf("www.finishline.com") > -1) {
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.bathandbodyworks.com") > -1) {
				bathandbodyCouponApi = partners.SupportedSites[indexSupportedSite - 1].bathandbodyCouponUrl;
				bathandbodyWalletApi = partners.SupportedSites[indexSupportedSite - 1].bathandbodyWalletUrl;
			}
			if (CurrHref.indexOf("www.ae.com") > -1) {
				aeCouponApi = partners.SupportedSites[indexSupportedSite - 1].aeCouponUrl;
				aeWalletApi = partners.SupportedSites[indexSupportedSite - 1].aeWalletUrl;
			}
			if (CurrHref.indexOf("www.barnesandnoble.com") > -1) {
				barnesWalletApi = partners.SupportedSites[indexSupportedSite - 1].barnesWalletUrl;
			}
			if (CurrHref.indexOf("www.footlocker.com") > -1) {
				footlockerWalletApi = partners.SupportedSites[indexSupportedSite - 1].footlockerWalletUrl;
			}
			if (CurrHref.indexOf("shop.advanceautoparts.com") > -1) {
				advanceautoWalletApi = partners.SupportedSites[indexSupportedSite - 1].advanceautoWalletUrl;
			}
			if (CurrHref.indexOf("www.steinmart.com") > -1) {
				steinmartCouponApi = partners.SupportedSites[indexSupportedSite - 1].steinmartCouponUrl
					steinmartWalletApi = partners.SupportedSites[indexSupportedSite - 1].steinmartWalletUrl;
			}
			if (CurrHref.indexOf("www.keurig.com") > -1) {
				keurigCouponApi = partners.SupportedSites[indexSupportedSite - 1].keurigCouponUrl;
				keurigCouponRemApi = partners.SupportedSites[indexSupportedSite - 1].keurigCouponRemUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.cabelas.com") > -1) {
				cabelasWalletApi = partners.SupportedSites[indexSupportedSite - 1].cabelasWalletUrl;
				cabelasRemCouponApi = partners.SupportedSites[indexSupportedSite - 1].cabelasRemCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.lordandtaylor.com") > -1) {
				lordWalletApi = partners.SupportedSites[indexSupportedSite - 1].lordWalletUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("www.partycity.com") > -1) {
				partyCouponApi = partners.SupportedSites[indexSupportedSite - 1].partyCouponUrl;
				partyWalletApi = partners.SupportedSites[indexSupportedSite - 1].partyWalletUrl;
				pTime = 5000;
			}
			if (CurrHref.indexOf("www.carters.com") > -1) {
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.aeropostale.com") > -1) {
				aeroCouponApi = partners.SupportedSites[indexSupportedSite - 1].aeroCouponUrl;
				aeroWalletApi = partners.SupportedSites[indexSupportedSite - 1].aeroWalletUrl;
			}
			if (CurrHref.indexOf("www.shutterfly.com") > -1) {
				shuttCouponApi = partners.SupportedSites[indexSupportedSite - 1].shuttCouponUrl;
			}
			if (CurrHref.indexOf("www.dressbarn.com") > -1) {
				dressCouponApi = partners.SupportedSites[indexSupportedSite - 1].dressCouponUrl;
			}
			if (CurrHref.indexOf("www.vitacost.com") > -1) {
				vitaCouponApi = partners.SupportedSites[indexSupportedSite - 1].vitaCouponUrl;
			}
			if (CurrHref.indexOf("www.hanes.com/") > -1) {
				pTime = 5000;
			}
			if (CurrHref.indexOf("www.dollargeneral.com") > -1) {
				dollarWalletApi = partners.SupportedSites[indexSupportedSite - 1].dollarWalletUrl;
				dollarCouponApi = "https://www.dollargeneral.com/rest/default/V1/carts/mine/coupons/";
				pTime = 2500;
			}
			if (CurrHref.indexOf("www.puritan.com") > -1) {
				puritanCouponApi = partners.SupportedSites[indexSupportedSite - 1].puritanCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.fromyouflowers.com") > -1) {
				fromyouCouponApi = partners.SupportedSites[indexSupportedSite - 1].fromyouCouponUrl;
			}
			if (CurrHref.indexOf("www.eddiebauer.com") > -1) {
				mathRand = Math.random();
				eddieCouponApi = partners.SupportedSites[indexSupportedSite - 1].eddieCouponUrl + mathRand;
				eddieWalletApi = partners.SupportedSites[indexSupportedSite - 1].eddieWalletUrl + mathRand;
			}
			if (CurrHref.indexOf("www.toms.com") > -1) {
				tomsCouponApi = partners.SupportedSites[indexSupportedSite - 1].tomsCouponUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("shop.straighttalk.com") > -1) {
				straightCouponApi = partners.SupportedSites[indexSupportedSite - 1].straightCouponUrl;
			}
			if (CurrHref.indexOf("www.shoecarnival.com") > -1) {
				shoeCouponApi = partners.SupportedSites[indexSupportedSite - 1].shoeCouponUrl;
			}
			if (CurrHref.indexOf("www.shopbop.com") > -1) {
				shopbopCouponApi = partners.SupportedSites[indexSupportedSite - 1].shopbopCouponUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("www.harryanddavid.com") > -1) {
				harryCouponApi = partners.SupportedSites[indexSupportedSite - 1].harryCouponUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("www.michaels.com") > -1) {
				michaelsCouponApi = partners.SupportedSites[indexSupportedSite - 1].michaelsCouponUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("www.quill.com") > -1) {
				pTime = 10000;
			}
			if (CurrHref.indexOf("www.avenue.com") > -1) {
				avenueCouponApi = partners.SupportedSites[indexSupportedSite - 1].avenueCouponUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("lenovo.com") > -1) {
				lenovoCouponApi = partners.SupportedSites[indexSupportedSite - 1].lenovoCouponUrl;
			}
			if (CurrHref.indexOf("kmart.com") > -1) {
				kmartCouponApi = partners.SupportedSites[indexSupportedSite - 1].kmartCouponUrl;
			}
			if (CurrHref.indexOf("www.dell.com") > -1) {
				dellCouponApi = partners.SupportedSites[indexSupportedSite - 1].dellCouponUrl;
			}
			if (CurrHref.indexOf("www.reebok.com") > -1) {
				reebokCouponApi = partners.SupportedSites[indexSupportedSite - 1].reebokCouponUrl;
				reebokWalletApi = partners.SupportedSites[indexSupportedSite - 1].reebokWalletUrl;
			}
			if (CurrHref.indexOf("www.dermstore.com") > -1) {
				dermCouponApi = partners.SupportedSites[indexSupportedSite - 1].dermCouponUrl;
			}
			if (CurrHref.indexOf("www.jcrew.com") > -1) {
				jcrewCouponApi = partners.SupportedSites[indexSupportedSite - 1].jcrewCouponUrl;
			}
			if (CurrHref.indexOf("www.bodybuilding.com") > -1) {
				bodybuildingCouponApi = partners.SupportedSites[indexSupportedSite - 1].bodybuildingCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.sierratradingpost.com") > -1) {
				sierraCouponApi = partners.SupportedSites[indexSupportedSite - 1].sierraCouponUrl;
				pTime = 3000;
			}
			if (CurrHref.indexOf("www.victoriassecret.com") > -1) {
				victoCouponApi = partners.SupportedSites[indexSupportedSite - 1].victoCouponUrl;
			}
			if (CurrHref.indexOf("www.restaurant.com/") > -1) {
				restCouponApi = partners.SupportedSites[indexSupportedSite - 1].restCouponUrl;
			}
			if (CurrHref.indexOf("www.pepboys.com") > -1) {
				pepboysCouponApi = partners.SupportedSites[indexSupportedSite - 1].pepboysCouponUrl;
			}
			if (CurrHref.indexOf("www.ebags.com") > -1) {
				ebagsCouponApi = partners.SupportedSites[indexSupportedSite - 1].ebagsCouponUrl;
			}
			if (CurrHref.indexOf("www.orientaltrading.com") > -1) {
				orientalCouponApi = partners.SupportedSites[indexSupportedSite - 1].orientalCouponUrl;
			}
			if (CurrHref.indexOf("www.crocs.com") > -1) {
				pTime = 3000;
			}
			if (CurrHref.indexOf("www.snapfish.com") > -1) {
				snapfishCouponApi = partners.SupportedSites[indexSupportedSite - 1].snapfishCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.yankeecandle.com") > -1) {
				yankeeCouponApi = partners.SupportedSites[indexSupportedSite - 1].yankeeCouponUrl;
				yankeeCouponRemApi = partners.SupportedSites[indexSupportedSite - 1].yankeeCouponRemUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.guitarcenter.com") > -1) {
				guitarCouponApi = partners.SupportedSites[indexSupportedSite - 1].guitarCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.juicycouture.com") > -1) {
				juicyCouponApi = partners.SupportedSites[indexSupportedSite - 1].juicyCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.nyandcompany.com") > -1) {
				nyandcompanyCouponApi = partners.SupportedSites[indexSupportedSite - 1].nyandcompanyCouponUrl;
				nyandcompanyWalletApi = partners.SupportedSites[indexSupportedSite - 1].nyandcompanyWalletUrl;
				nyandcompanyCouponRemApi = partners.SupportedSites[indexSupportedSite - 1].nyandcompanyCouponRemUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("dunkindonuts.com") > -1) {
				dunkinCouponApi = partners.SupportedSites[indexSupportedSite - 1].dunkinCouponUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("www.orvis.com") > -1) {
				orvisCouponApi = partners.SupportedSites[indexSupportedSite - 1].orvisCouponUrl;
			}
			if (CurrHref.indexOf("www.tirebuyer.com") > -1) {
				tireCouponApi = partners.SupportedSites[indexSupportedSite - 1].tireCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("cottonon.com") > -1) {
				cottononCouponApi = partners.SupportedSites[indexSupportedSite - 1].cottononCouponUrl;
				cottononWalletApi = partners.SupportedSites[indexSupportedSite - 1].cottononWalletUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("blair.com") > -1) {
				blairCouponApi = partners.SupportedSites[indexSupportedSite - 1].blairCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.speckproducts.com") > -1) {
				speckCouponApi = partners.SupportedSites[indexSupportedSite - 1].speckCouponUrl;
			}
			if (CurrHref.indexOf("www.eyebuydirect.com") > -1) {
				eyebuyCouponApi = partners.SupportedSites[indexSupportedSite - 1].eyebuyCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.ashford.com") > -1) {
				ashfordCouponApi = partners.SupportedSites[indexSupportedSite - 1].ashfordCouponUrl;
				ashfordCouponRemApi = partners.SupportedSites[indexSupportedSite - 1].ashfordCouponRemUrl;
			}
			if (CurrHref.indexOf("www.rockbottomgolf.com") > -1) {
				rockbottomgolfCouponApi = partners.SupportedSites[indexSupportedSite - 1].rockbottomgolfCouponUrl;
			}
			if (CurrHref.indexOf("www.shopko.com") > -1) {
				shopkoCouponApi = partners.SupportedSites[indexSupportedSite - 1].shopkoCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.shoesforcrews.com") > -1) {
				shoescrewsCouponApi = partners.SupportedSites[indexSupportedSite - 1].shoescrewsCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.bhcosmetics.com") > -1) {
				bhcosmeticsCouponApi = partners.SupportedSites[indexSupportedSite - 1].bhcosmeticsCouponUrl;
				pTime = 3000;
			}
			if (CurrHref.indexOf("www.destinationmaternity.com") > -1) {
				destinCouponApi = partners.SupportedSites[indexSupportedSite - 1].destinCouponUrl;
				destinRemCouponApi = partners.SupportedSites[indexSupportedSite - 1].destinRemCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.newbalance.com") > -1) {
				newbalanceCouponApi = partners.SupportedSites[indexSupportedSite - 1].newbalanceCouponUrl;
				newbalanceRemApi = partners.SupportedSites[indexSupportedSite - 1].newbalanceRemUrl;
				pTime = 2500;
			}
			if (CurrHref.indexOf("www.christopherandbanks.com") > -1) {
				christoCouponApi = partners.SupportedSites[indexSupportedSite - 1].christoCouponUrl;
				christoRemCouponApi = partners.SupportedSites[indexSupportedSite - 1].christoRemCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.alibris.com") > -1) {
				alibrisCouponApi = partners.SupportedSites[indexSupportedSite - 1].alibrisCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.clarisonic.com") > -1) {
				clarisonicCouponApi = partners.SupportedSites[indexSupportedSite - 1].clarisonicCouponUrl;
				clarisonicRCouponApi = partners.SupportedSites[indexSupportedSite - 1].clarisonicRCouponUrl;
			}
			if (CurrHref.indexOf("www.cafepress.com") > -1) {
				cafepressCouponApi = partners.SupportedSites[indexSupportedSite - 1].cafepressCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.catherines.com") > -1) {
				catherinesCouponApi = partners.SupportedSites[indexSupportedSite - 1].catherinesCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("carsons.com") > -1) {
				pTime = 3000;
			}
			if (CurrHref.indexOf("www.1800contacts.com") > -1) {
				contacts1800CouponApi = partners.SupportedSites[indexSupportedSite - 1].contacts1800CouponUrl;
			}
			if (CurrHref.indexOf("www.mypillow.com") > -1) {
				pillowCouponApi = partners.SupportedSites[indexSupportedSite - 1].pillowCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.barenecessities.com") > -1) {
				barenCouponApi = partners.SupportedSites[indexSupportedSite - 1].barenCouponUrl;
				pTime = 1000;
			}
			if (CurrHref.indexOf("www.naturalizer.com") > -1) {
				naturalCouponApi = partners.SupportedSites[indexSupportedSite - 1].naturalCouponUrl;
				pTime = 1000;
			}
			if (CurrHref.indexOf("www.musiciansfriend.com") > -1) {
				musicianCouponApi = partners.SupportedSites[indexSupportedSite - 1].musicianCouponUrl;
				musicianRemCouponApi = partners.SupportedSites[indexSupportedSite - 1].musicianRemCouponUrl
					pTime = 2000;
			}
			if (CurrHref.indexOf("www.scrubsandbeyond.com") > -1) {
				scrubCouponApi = partners.SupportedSites[indexSupportedSite - 1].scrubCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.aveda.com") > -1) {
				avedaCouponApi = partners.SupportedSites[indexSupportedSite - 1].avedaCouponUrl;
			}
			if (CurrHref.indexOf("www.backcountry.com") > -1) {
				backCouponApi = partners.SupportedSites[indexSupportedSite - 1].backCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.zagg.com") > -1) {
				zaggCouponApi = partners.SupportedSites[indexSupportedSite - 1].zaggCouponUrl;
			}
			if (CurrHref.indexOf("www.keds.com") > -1) {
				kedsCouponApi = partners.SupportedSites[indexSupportedSite - 1].kedsCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.renttherunway.com") > -1) {
				renttheCouponApi = partners.SupportedSites[indexSupportedSite - 1].renttheCouponUrl;
			}
			if (CurrHref.indexOf("elder-bonton.com") > -1) {
				pTime = 3000;
			}
			if (CurrHref.indexOf("www.soma.com") > -1) {
				somaCouponApi = partners.SupportedSites[indexSupportedSite - 1].somaCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.spirithalloween.com") > -1) {
				spiritCouponApi = partners.SupportedSites[indexSupportedSite - 1].spiritCouponUrl;
				spiritWalletApi = partners.SupportedSites[indexSupportedSite - 1].spiritWalletUrl;
			}
			if (CurrHref.indexOf("www.claires.com") > -1) {
				clairesCouponApi = partners.SupportedSites[indexSupportedSite - 1].clairesCoupUrl;
				clairesRemCouponApi = partners.SupportedSites[indexSupportedSite - 1].clairesRemUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.ashleystewart.com") > -1) {
				ashleyCouponApi = partners.SupportedSites[indexSupportedSite - 1].ashleyCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.build.com") > -1) {
				buildCouponApi = partners.SupportedSites[indexSupportedSite - 1].buildCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.belk.com") > -1) {
				belkCouponApi = partners.SupportedSites[indexSupportedSite - 1].belkCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.mixbook.com") > -1) {
				mixbookCouponApi = partners.SupportedSites[indexSupportedSite - 1].mixbookCouponUrl;
				pTime = 2000;
			}
			if (CurrHref.indexOf("www.shoes.com") > -1) {
				pTime = 3000;
			}
			if (CurrHref.indexOf("www.fragrancenet.com") > -1) {
				fragCouponApi = partners.SupportedSites[indexSupportedSite - 1].fragCouponUrl;
			}
			if (CurrHref.indexOf("www.landsend.com") > -1) {
				landCouponApi = partners.SupportedSites[indexSupportedSite - 1].landCouponUrl;
			}
			if (CurrHref.indexOf("www.fredericks.com") > -1) {
				fredCouponApi = partners.SupportedSites[indexSupportedSite - 1].fredCouponUrl;
				fredWalletApi = partners.SupportedSites[indexSupportedSite - 1].fredWalletUrl;
			}
			if (CurrHref.indexOf("www.travelocity.com") > -1) {
				travelCouponApi = partners.SupportedSites[indexSupportedSite - 1].travelCouponUrl;
				travelrmvCouponApi = partners.SupportedSites[indexSupportedSite - 1].travelrmvCouponUrl;
				pTime = 3000;
			}
			if (CurrHref.indexOf("www.revolve.com") > -1) {
				revolveCouponApi = partners.SupportedSites[indexSupportedSite - 1].revolveCouponUrl;
			}
			for (var g = 0; g < cartpageUrl.length; g++) {
				if (CurrHref.indexOf(cartpageUrl[g]) > -1) {
					if (jsonObj) {
						if (jsonObj.coupons.length > 0) {
							var savingsDivId = iframe.contentWindow.document.getElementById('savingsDiv');
							var savingsHtml = fontApi + "<div class='content'>  <div class='couponsBlock'> <div class='leftsideC'> <img src='" + imagePathLoc + "percent.png' ><span>" + codeCount + " Coupons</span> </div><div class='rightsideC'> <img src='" + imagePathLoc + "dollar.png' ><span>" + storeValue + "</span> </div></div><h3 class='mg-4'>We’ll test & apply codes for you. Our only</h3> <h3 class='mg-4'>wish is to help you save.</h3> <div> <button class='sbtbtn' id='applysavings' >Apply Savings</button></div></div>";
							if (savingsDivId) {
								var eleme = document.createElement("div");
								eleme.setAttribute("id", "appendSavings");
								eleme.innerHTML = savingsHtml;
								savingsDivId.appendChild(eleme);
							}
						}
					}
				}
			}
		}
		if (jsonObj) {
			if (jsonObj.cashback.length > 0) {
				cashbackTitle = jsonObj.cashback[0].title;
				cashback_affiliate = jsonObj.cashback[0].cashback_affiliateLink;
				cashbackValue = jsonObj.cashback[0].cashback_value;
				cashbackEndDate = jsonObj.cashback[0].endDate;
				chrome.storage.local.set({
					"cashback_enddate": cashbackEndDate
				}, function () {});
				if (cashbackValue) {
					var cashbackDivId = iframe.contentWindow.document.getElementById('cashbackDiv');
					var cashbackHtml = fontApi + "<div class='content' ><h3 class='mg-10 mgB-0'>" + cashbackTitle + "</h3><div style='position:relative'><button class='sbtbtn' id='applycashback' type='submit'>Log In & Activate</button><button class='actbtn' id='activeCashback' >Activate</button><span id='checkCashback' style='color: rgb(40, 198, 197);display: none;font-size: 20px;position:absolute;top: 10px;right: 70px;'>✓</span></div><div><a target='_blank' href='" + learnMore + "' class='moreInfo' id='linkLearnInfo' >learn more</a><a target='_blank' href='" + walletLink + "' class='moreInfo' id='linkMyWallet'>Check My Rewards</a></div></div>";
					if (cashbackDivId) {
						var elem = document.createElement("div");
						elem.setAttribute("id", "appendCashback");
						elem.innerHTML = cashbackHtml;
						cashbackDivId.appendChild(elem);
					}
				}
			}
		}
		if (iframe.contentWindow.document.getElementById('closeiframe')) {
			iframe.contentWindow.document.getElementById('closeiframe').addEventListener('click', closeframe);
		}
		if (iframe.contentWindow.document.getElementById('applysavings')) {
			iframe.contentWindow.document.getElementById('applysavings').addEventListener('click', clickSavings);
		}
		if (iframe.contentWindow.document.getElementById('expandPopup')) {
			iframe.contentWindow.document.getElementById('expandPopup').addEventListener('click', ExpandPopup);
		}
		if (iframe.contentWindow.document.getElementById('applycashback')) {
			iframe.contentWindow.document.getElementById('applycashback').addEventListener('click', CashBack);
		}
		if (iframe.contentWindow.document.getElementById('homeData')) {
			iframe.contentWindow.document.getElementById('homeData').addEventListener('click', homeData);
			iframe.contentWindow.document.getElementById('homeData').style.borderTop = '3px solid #0fb2b7';
		}
		if (iframe.contentWindow.document.getElementById('search')) {
			iframe.contentWindow.document.getElementById('search').addEventListener('click', searchData);
			iframe.contentWindow.document.getElementById('search').style.borderTop = '3px solid transparent';
		}
		var output = iframe.contentWindow.document.getElementById('appendDiv');
		var i = 0;
		codeCount = jsonObj.codesCount;
		if (jsonObj.coupons.length > 0) {
			while (i < codeCount) {
				var couponsCode = jsonObj.coupons[i].code;
				var couponsTitle = jsonObj.coupons[i].title;
				var couponsdiscount = jsonObj.coupons[i].discount;
				if (couponsdiscount) {
					var[disCont = "", disText = ""] = couponsdiscount.split(" ");
					var couponClass = 'offerPer',
					codeClass = 'statusOffer';
					if (couponsdiscount.toLowerCase().includes('free') || couponsdiscount.toLowerCase().includes('discount')) {
						var disCont = "Coupon";
						var disText = "Code";
						var couponClass = 'offerPerZero',
						codeClass = 'statusOfferZero';
					}
					if ((couponsdiscount.toLowerCase().includes('up-to')) || (couponsdiscount.toLowerCase().includes('upto'))) {
						couponsdiscount = couponsdiscount.toLowerCase().replace('up-to ', '');
						couponsdiscount = couponsdiscount.toLowerCase().replace('upto ', '');
						var[disCont = "", disText = ""] = couponsdiscount.split(" ");
						var couponClass = 'offerPer',
						codeClass = 'statusOffer';
					}
				} else {
					var disCont = "Coupon";
					var disText = "Code";
					var couponClass = 'offerPerZero',
					codeClass = 'statusOfferZero';
				}
				var couponsPUsed = jsonObj.coupons[i].previousUsed;
				var couponsDiscript = jsonObj.coupons[i].description;
				if (couponsDiscript == null) {
					couponsDiscript = "";
				}
				var couponHtml = fontApi + "<div class='offerData'> <div class='leftSecOffer'> <span class='" + couponClass + "'>" + disCont + "</span> <span class='" + codeClass + "'>" + disText.toUpperCase() + "</span> </div><div class='rightSecOffer'> <div class='offerHeading' ><p id='checkLetter" + i + "' class='offerTitle'>" + couponsTitle + "</p></div><div class='offerCodeBlock'><span class='btnCoupon' id='btnCoupon" + i + "' >" + couponsCode + "</span><span class='copyIcon'>&#10003 Copied</span></div><div id='smileStatus" + i + "' class='daysStatus'><img  src='" + imagePathLoc + "smiley.png' ><span>" + couponsPUsed + "</span></div></div></div>";
				if ((!iframe.contentWindow.document.getElementById('appendCoupon' + i)) && (output)) {
					var ele = iframe.contentWindow.document.createElement("div");
					ele.setAttribute("id", "appendCoupon" + i);
					ele.innerHTML = couponHtml;
					output.appendChild(ele);
					if (couponsPUsed == "") {
						if (iframe.contentWindow.document.getElementById('smileStatus' + i)) {
							iframe.contentWindow.document.getElementById('smileStatus' + i).style.display = 'none';
						}
					}
				}
				i++;
			}
			checkLetter(jsonObj);
		}
		if (iframe.contentWindow.document.getElementsByClassName('btnCoupon')) {
			var btnCount = iframe.contentWindow.document.getElementsByClassName('btnCoupon');
			for (var i = 0; i < btnCount.length; i++) {
				btnCount[i].addEventListener('click', copyCoupon);
			}
		}
	}
	createCashback();
}

////////////////////////  Code for addstore Api //////////////
function AddStore() {
	chrome.storage.local.get(["installId"], function (items) {
		InstallObj = JSON.stringify(items.installId);
		InstallObj = InstallObj.replace(/['"]+/g, '');
		var paramStore = "iid=" + InstallObj + "&domain=" + CurrHost + "";
		var storehttp = new XMLHttpRequest();
		storehttp.onreadystatechange = function () {
			closeframe();
		};
		storehttp.open("POST", baseApiUrl + "/addstore", false);
		storehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		storehttp.setRequestHeader("Client-Service", "cchief");
		storehttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
		storehttp.send(paramStore);
	});
}

//////////////////////////// Code for close Iframe popup and overlay effect ////////////////////////
function closeframe() {
	var iframe = document.getElementById("couponchiefiframe");
	if (iframe != null) {
		iframe.parentNode.removeChild(iframe);
	}
	var frame_Overlay = document.getElementById("Coupon_Overlay");
	if (frame_Overlay != null) {
		frame_Overlay.parentNode.removeChild(frame_Overlay);
	}
}

/////////////////// Redirect for cashback /////////////
function CashBack() {
	if (elemMouseEvent) {
		CurrHost = storeDomain;
	} else {
		CurrHost = CurrHost.replace("www.", "");
	}
	var parameters = "installation_id=" + InstallObj + "&url=" + CurrHost + "";
	chrome.storage.local.get(storeCookies, function (result) {
		myObj = result[storeCookies];
		if (myObj) {
			cashbackEndDate = myObj.cashback[0].endDate;
			var cashbackEnd = new Date(cashbackEndDate);
			var dtToday = new Date();
			
			//if("2017-02-28" >= dtToday)
			if (cashbackEnd >= dtToday) {
				window.open(ccLoginUrl);
				directCashback = "directCashback";
			} else {
				popupHeight = "210px";
				backgroungClr = "#F4F4F4";
				style = "<style>*{box-sizing:border-box}.container{font-family:Lato;text-align:center;position:relative;background:#F4F4F4;color:#505050;font-size:13px}.logo{float:left;width:92%}.logo img{width:180px}header{box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1);padding:8px 8px 2px;width:100%;float:left;background:#fff;border:1px solid #f6f6f6}h3{font-weight:400;}.content{background:#fff;width:352px;height:153px;margin-left: 9px;padding:0px 14px;float:left;margin-top:8px;box-shadow:.7px .7px 9.5px .5px rgba(0,0,0,.1)}.mg-4{margin:10px;font-size:18px;}.actbtn {width: 115px; border: 1px solid #28c6c5;background-color:#28c6c5;border-radius: 20px;padding: 6px 0px;color: #fff;font-size: 14px;cursor:pointer;}:focus{outline:none}.actbtn:hover{background:#99dff2;;border:1px solid #99dff2;}.actbtn{font-family:Lato}.close{float:right;color:#C2C2C2;font-size:24px;line-height:15px;cursor:pointer}a{text-decoration:none;color:#27a7da}p{font-size:14px;}body {margin: 0px;}</style>";
				popupHtml = style + fontApi + "<div class='container'> <header> <div class='logo'> <img src='" + imagePathLoc + "scout_logo.png'/> </div><div class='close' id='closeiframe' ><img style='width:10px;margin-top:7px; margin-right: 2px;' src='" + imagePathLoc + "cross.png' /></div></header> <div class='content'><p><span style='color:#28c6c5;font-size:16px ;padding-bottom: 6px;display: inline-block;'>Sorry!</span><br>Unfortunately this cash back offer is no longer available. Please check back soon, as new offers are added daily.</p><div> <button class='actbtn' id='closeApologies' >Close</button> </div></div></div>";
				createIframe(popupHtml, myObj, CurrHost);
			}
		}
	});
}

//////////// Code for apply Savings at checkout Page /////////////////
function clickSavings() {
	applyProgressBar();
	chrome.runtime.sendMessage({
		type: "CouponAffiliate"
	}, function (response) {});
}

////////////////////////////////// Code for progressbar screen ////////////////
function applyProgressBar() {
	closeframe();
	DomainHtml = fontApi + "<div class='container'><div class='content'><div class='leftSection'> <p>Code found : <span class='numberCode'>" + codeCount + "</span></p><h2>Checking Codes</h2> <p>Couponchief is automatically trying the best coupon codes for you</p><span id='closeiframe' class='close' ><img style='cursor:pointer;width:10px;' src='" + imagePathLoc + "cross.png' /></span><div id='myProgress'> <div id='myProgBar'></div></div><p id='myCoupon'></p></div><div class='rightSection'><img style='margin-top: 100px;position:  absolute;width: 386px;right:0px;' src='" + imagePathLoc + "scoout4.gif' alt=''></div></div></div>";
	var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
	if (!location.ancestorOrigins.contains(extensionOrigin)) {
		var iframeExists = false;
		if (iframe)
			if (iframe.parentNode)
				iframeExists = true;
		if (!iframeExists) {
			iframe = document.createElement('iframe');
			iframe.setAttribute("id", "couponchiefiframe");
			iframe.setAttribute("frameBorder", "0");
			iframe.setAttribute("style", "position:fixed;top:15%;left:50%;border:0.8px solid #e8dfdf;padding:0;transform: translate(-50%,0);display:block;width:700px;height:400px;z-index:9999999999;opacity:1;background:#fff;");
			document.body.appendChild(iframe);
		}
		var ApplySavingsHtml = "<style>*{box-sizing:border-box}.container{margin:0 auto;text-align:center;position:relative;padding:2px;font-family:Lato;color:#333132;letter-spacing:.6px}.content{background:#fff;height:382px;position:relative;float:left;width:100%;border-radius:3px;background-color:#D6E8E8;box-shadow:0 0 4.8px .3px rgba(0,0,0,.05)}.leftSection{float:left;width:50%;height:100%;padding:65px 50px}.rightSection{float:left;width:50%;height:100%;}.close{position:absolute;top:13px;right:8px;width: 25px;height: 25px;text-align: center;padding-bottom: 15px;color:#C2C2C2;font-size:24px;line-height:19px;border:none;background: transparent;}.rightSection img{display:block;margin-top:130px}.numberCode{font-weight:700;font-size:20px;word-wrap: break-word;}.leftSection h2{text-transform:uppercase}.leftSection p{margin:0;font-size:14px}span.codeData{border:solid 1px #849191;padding:8px 10px;display:inline-block;margin-top:30px;font-weight:700}#myProgress{width:100%;background-color:#B7CFD1;;border-radius:4px;margin-top:30px}#myProgBar{width:1%;height:8px;border-radius: 4px;background-color: #f76609;}</style><body>" + DomainHtml + "</body>";
		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write(ApplySavingsHtml);
		if (iframe.contentWindow.document.getElementById('closeiframe')) {
			iframe.contentWindow.document.getElementById('closeiframe').addEventListener('click', closeframe);
		}
	}
	setOverlay();
	progressBar();
}

function progressBar() {
	chrome.storage.local.get(storeCookies, function (result) {
		myObj = result[storeCookies];
		if ((myObj) && (iframe.contentWindow)) {
			var width = 0;
			var num = 0;
			var id = setInterval(Pframe, pTime);
			function Pframe() {
				if (width >= 100) {
					clearInterval(id);
					if (iframe.contentWindow.document.getElementById('myProgress')) {
						savingsGenerate();
					}
				} else {
					width = width + 100 / codeCount;
					if (iframe.contentWindow) {
						var elem = iframe.contentWindow.document.getElementById("myProgBar");
						if(elem)
						{
							elem.style.width = width + '%';
							var cOut = num++;
							if (cOut < myObj.coupons.length) {
								couponCode = myObj.coupons[cOut].code;
								if (iframe.contentWindow.document.getElementById('myCoupon')) {
									iframe.contentWindow.document.getElementById("myCoupon").innerHTML = '<span class="codeData" >' + couponCode + '</span>';
								}
								applyCodes(couponCode);
							}
						}
					}
				}
			}
		}
	});
}

function applyCodes(couponCode) {
	
	/////////////////// kohls.com ////////////////
	if (CurrHref.indexOf("www.kohls.com") > -1) {
		var params = '{"couponType":"promo","promoCode":"' + couponCode + '"}';
		try {
			var kohlhttp = new XMLHttpRequest();
			kohlhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var kohlObj = JSON.parse(this.responseText);
					if(kohlObj.appliedDiscounts)
					{
						if (kohlObj.appliedDiscounts.qualifiedItems[0].code) {
							var kohlMaxAmount = kohlObj.appliedDiscounts.qualifiedItems[0].amount.replace(/[-$,]/g, '');
							kohlMaxAmount = Number(kohlMaxAmount);
							kohlsDiscArr.push(kohlMaxAmount);
							var kohlApplyCode = kohlObj.appliedDiscounts.qualifiedItems[0].code;
							kohlsCoupArr.push(kohlApplyCode);
						}
						if (kohlObj.appliedDiscounts.qualifiedItems[1].code) {
							var kohlMaxAmount = kohlObj.appliedDiscounts.qualifiedItems[1].amount.replace(/[-$,]/g, '');
							kohlMaxAmount = Number(kohlMaxAmount);
							kohlsDiscArr.push(kohlMaxAmount);
							var kohlApplyCode = kohlObj.appliedDiscounts.qualifiedItems[1].code;
							kohlsCoupArr.push(kohlApplyCode);
						}
					}
				}
			};
			kohlhttp.open("POST", kohlsWalletApi, false);
			kohlhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
			kohlhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", NetWork Error, " + e);
		}
	}
	
	/////////////////// macys.com ////////////////
	if (CurrHref.indexOf("www.macys.com") > -1) {
		try {
			document.getElementById("promo-apply-input").value = couponCode;
			document.getElementsByClassName("promo-apply-button")[0].click();
			
				setTimeout(function () {
				if (document.getElementById('cx-at-YOU_SAVED-value')) {
					var savings = document.getElementById('cx-at-YOU_SAVED-value').innerText.replace(/[$,-]/g, '').trim();
					savings = Number(savings);
					macysDiscArr.push(savings);
					macysCoupArr.push(couponCode);
					if(document.getElementById("promo-remove-button"))
					{
						document.getElementById("promo-remove-button").click();
					}
				}
			}, 2000);
			
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// forever21.com ////////////////
	if (CurrHref.indexOf("www.forever21.com") > -1) {
		try {
			document.getElementById("txt_promoCode").value = couponCode;
			document.getElementById("btnPromoApply").click();
			setTimeout(function () {
				if (document.getElementById("discountAmount")) {
					var savings = document.getElementById("discountAmount").innerText.replace(/[$,-]/g, '').trim();
					savings = Number(savings);
					forever21DiscArr.push(savings);
					forever21CoupArr.push(couponCode);
				}
			}, 2000);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// walgreens.com ////////////////
	if (CurrHref.indexOf("www.walgreens.com") > -1) {
		var params = '{"code":"' + couponCode + '"}';
		var walgreenhttp = new XMLHttpRequest();
		walgreenhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				codeObj = JSON.parse(this.responseText);
				if (codeObj.promotionInfo.applied) {
					var finalCode = codeObj.promotionInfo.applied[0].code;
					walCoupArr.push(finalCode);
					var saving = Number(codeObj.promotionInfo.applied[0].savings);
					walDiscArr.push(saving);
				}
				var params = "instart_disable_injection=true";
				var walgreeRhttp = new XMLHttpRequest();
				walgreeRhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {}
				};
				walgreeRhttp.open("DELETE", "https://www.walgreens.com/svc/carts/" + wallCartId + "/promotions/" + couponCode + "?instart_disable_injection=true", false);
				walgreeRhttp.setRequestHeader("Accept", "application/json, text/plain, */*");
				walgreeRhttp.send(params);
			}
		};
		walgreenhttp.open("POST", "https://www.walgreens.com/svc/carts/" + wallCartId + "/(promotions)?instart_disable_injection=true", false);
		walgreenhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
		walgreenhttp.send(params);
	}
	
	/////////////////// officedepot.com ////////////////
	if (CurrHref.indexOf("www.officedepot.com") > -1) {
		var params = "cpnreferrer=checkout&currentStep=cart&referralCode=" + couponCode + "";
		var carthttp = new XMLHttpRequest();
		carthttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var officeObj = JSON.parse(this.responseText);
					if (officeObj.coupons) {
						totalSavings = officeObj.coupons[0].resultants[0].dollarAmount;
						localStorage.setItem("officedepot", "$" + totalSavings);
						finalCode = couponCode;
					}
					var cartRemhttp = new XMLHttpRequest();
					cartRemhttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					};
					cartRemhttp.open("GET", officeCoupRemoveApi + couponCode, false)
					cartRemhttp.send();
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		carthttp.open("POST", officeCouponApi, false);
		carthttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		carthttp.send(params);
	}
	
	/////////////////// famousfootwear.com ////////////////
	if (CurrHref.indexOf("www.famousfootwear.com/Checkout/Cart") > -1) {
		try {
			document.getElementById("PromoCode").value = couponCode;
			document.getElementById("submitPromoCode").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// sears.com ////////////////
	if (CurrHref.indexOf("www.sears.com/crsp/mx/cart#/cart") > -1) {
		var params = '{"couponRequest":{"couponCode":"' + couponCode + '"}}';
		var searshttp = new XMLHttpRequest();
		searshttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {}
		};
		searshttp.open("POST", searsCouponApi, false);
		searshttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
		searshttp.send(params);
	}
	
	/////////////////// payless.com ////////////////
	if (CurrHref.indexOf("www.payless.com") > -1) {
		var discountPrice,
		discountPriceNum,
		totalPrice,
		totalPriceNum,
		saving;
		var paylesshttp = new XMLHttpRequest();
		paylesshttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var payless2http = new XMLHttpRequest();
				payless2http.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						try {
							totalPrice = document.getElementsByClassName('order-subtotal')[0].getElementsByTagName('td')[1].innerText.replace(/[$,-]/g, '');
							totalPriceNum = Number(totalPrice);
							var parser = new DOMParser();
							var doc = parser.parseFromString(this.responseText, "text/html");
							var checkDis = doc.getElementsByClassName('order-subtotal')[0];
							if (checkDis) {
								discountPrice = checkDis.getElementsByTagName('td')[1].innerText.replace(/[$,-]/g, '');
								discountPriceNum = Number(discountPrice);
								saving = totalPriceNum - discountPriceNum;
								paylessDisArr.push(saving);
								paylessCoupArr.push(couponCode);
							}
						} catch (e) {
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				payless2http.open("GET", CurrHref, false);
				payless2http.send();
				var params = "couponCode=" + couponCode
					var paylessRhttp = new XMLHttpRequest();
				paylessRhttp.onreadystatechange = function () {}
				paylessRhttp.open("POST", "https://www.payless.com/on/demandware.store/Sites-payless-Site/default/COSinglePage-RemoveCouponSmry", false);
				paylessRhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
				paylessRhttp.send(params);
			}
		};
		paylesshttp.open("GET", "https://www.payless.com/on/demandware.store/Sites-payless-Site/default/Cart-AddCoupon?couponCode=" + couponCode + "&format=ajax&couponLoyaltyEmail=", false);
		paylesshttp.send();
	}
	
	/////////////////// shop.advanceautoparts.com ////////////////
	if (CurrHref.indexOf("shop.advanceautoparts.com/web/OrderItemDisplay") > -1) {
		try {
			var orderrid = document.getElementsByName("orderId")[0].value;
			var params = '{"orderId":"' + orderrid + '","promoCode":"' + couponCode + '"}';
			var autopartshttp = new XMLHttpRequest();
			autopartshttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 201) {}
			};
			autopartshttp.open("POST", advanceautoWalletApi, false);
			autopartshttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
			autopartshttp.setRequestHeader("wcauthtoken", "875630039%2Cz6MV79znik3l8owuLWE5CkKpU7Q%3D");
			autopartshttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// finishline.com ////////////////
	if (CurrHref.indexOf("www.finishline.com") > -1) {
		try {
			document.getElementsByClassName("input-group-field couponCodeInput")[0].value = couponCode;
			document.getElementsByClassName("button hollow applyCouponCode")[0].click();
			var x = document.getElementsByClassName("row");
			for (var h = 0; h < x.length; h++) {
				if (x[h].getElementsByTagName("span")[0]) {
					if (x[h].getElementsByTagName("span")[0].innerText.includes("Coupon:")) {
						finalCode = x[h].getElementsByTagName("span")[0].innerText.replace("Coupon:", "");
						totalSavings = x[h].getElementsByClassName("column shrink text-right")[0].innerText.replace(/[-$,]/g, '');
						totalSavings = Number(totalSavings);
						finishDiscArr.push(totalSavings);
						finishCoupArr.push(finalCode);
					}
				}
			}
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// footlocker.com ////////////////
	if (CurrHref.indexOf("www.footlocker.com") > -1) {
		try {
			var par = document.getElementById("estimator_subtotal");
			var subtotal = par.getElementsByTagName("td")[0].innerText;
			subtotal = subtotal.replace(/[$,]/g, '');
			var params = "estimateTotal=true&subtotal=" + subtotal + "&country=US&zipcode=10001&shipping=Z&sourcecode=" + couponCode + "&formSubmitProof=";
			var foothttp = new XMLHttpRequest();
			foothttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var x = doc.getElementById('estimator_savings');
						var discVal = x.getElementsByTagName("td")[0].innerText.replace(/[$,]/g, '');
						var discountPrice = Number(discVal);
						var maxNum = 0;
						if (!isNaN(discountPrice)) {
							footDiscArr.push(discountPrice);
							var appliedCode = doc.getElementById('estimator_sourcecode').value;
							footCoupArr.push(appliedCode);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			foothttp.open("POST", footlockerWalletApi, false);
			foothttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			foothttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			foothttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// bathandbodyworks.com ////////////////
	if (CurrHref.indexOf("www.bathandbodyworks.com/cart") > -1) {
		var bathttp = new XMLHttpRequest();
		bathttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var bathObj = JSON.parse(this.responseText);
					if (bathObj.status == "OK") {
						var bath2http = new XMLHttpRequest();
						bath2http.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								try {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									var checkDis = doc.getElementsByClassName('order-discount discount')[0];
									if (checkDis) {
										finalCode = couponCode;
									}
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
								}
							}
						};
						bath2http.open("GET", CurrHref, false);
						bath2http.send();
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		bathttp.open("GET", bathandbodyCouponApi + couponCode, false);
		bathttp.send();
	}
	
	/////////////////// ae.com ////////////////
	if (CurrHref.indexOf("www.ae.com") > -1) {
		var params = {
			discountCode: couponCode
		}
		params = JSON.stringify(params)
			var aehttp = new XMLHttpRequest();
		aehttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var aeObj = JSON.parse(this.responseText);
					if (aeObj.discountCodes.isQualified == true) {
						finalCode = aeObj.discountCodes.id;
						totalSavings = aeObj.discountAmount.value;
					}
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		aehttp.open("POST", aeCouponApi, false);
		aehttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
		aehttp.send(params);
	}
	
	/////////////////// barnesandnoble.com ////////////////
	if (CurrHref.indexOf("www.barnesandnoble.com") > -1) {
		var params = "_dyncharset=UTF-8&_dynSessConf=-622816806718912118&couponCode=" + couponCode + "&_D%3AcouponCode=+&amplifiHandler=%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon&xhrRedirect=%2Fcheckout%2F&getData=voucher-discount&_DARGS=%2Fcheckout%2Fincludes%2Fcoupon-form.jsp.frmApplyCoupon";
		var barhttp = new XMLHttpRequest();
		barhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var barObj = JSON.parse(this.responseText);
					if (barObj.success == true) {
						var saving = barObj.data.voucherDiscount;
						barnSaveArr.push(saving);
						branCoupArr.push(couponCode);
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		barhttp.open("POST", barnesWalletApi, false);
		barhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		barhttp.setRequestHeader("Accept", "*/*");
		barhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		barhttp.send(params);
	}
	
	/////////////////// steinmart.com ////////////////
	if (CurrHref.indexOf("www.steinmart.com") > -1) {
		var params = "sourceCode=" + couponCode + ""
			var steinhttp = new XMLHttpRequest();
		steinhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {}
		};
		steinhttp.open("POST", steinmartCouponApi, false);
		steinhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		steinhttp.send(params);
	}
	
	/////////////////// lanebryant.com ////////////////
	if (CurrHref.indexOf("www.lanebryant.com") > -1) {
		try {
			document.getElementById("mar-cart-promo-code").value = couponCode;
			document.getElementById("mar-cart-promo-apply").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// keurig.com ////////////////
	if (CurrHref.indexOf("www.keurig.com") > -1) {
		try {
			var csToken = document.getElementsByName('CSRFToken')[0].value;
			var params = "CSRFToken=" + csToken + "&couponCode=" + couponCode + "";
			var keurighttp = new XMLHttpRequest();
			keurighttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					let condition = doc.getElementsByClassName('coupon-applied')[0];
					if (condition) {
						let code = condition.getElementsByTagName('span')[1].innerText.split('(')[1].split(')')[0];
						let saving = doc.getElementsByClassName('right discount')[0].innerText.replace(/[-$,]/g, '');
						saving = Number(saving);
						keurigCouponArr.push(code);
						keurigDiscArr.push(saving);
						var remparams = "CSRFToken=" + csToken + "&couponCode=" + couponCode + ""
							var keurighttp2 = new XMLHttpRequest();
						keurighttp2.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						keurighttp2.open("POST", keurigCouponRemApi, true);
						keurighttp2.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
						keurighttp2.send(remparams);
					}
				}
			}
			keurighttp.open("POST", keurigCouponApi, true);
			keurighttp.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			keurighttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// carters.com ////////////////
	if (CurrHref.indexOf("www.carters.com") > -1) {
		try {
			var carterWalletClass = document.getElementsByClassName("paypalcheckout")[0];
			if(carterWalletClass)
			{
				var carterWalletApi = carterWalletClass.getAttribute("action");
				var params = "dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_securekey=1950109550&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
				var carthttp = new XMLHttpRequest();
				carthttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {}
				};
				carthttp.open("POST", carterWalletApi, false);
				carthttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				carthttp.send(params);
			}
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// cabelas.com ////////////////
	if (CurrHref.indexOf("www.cabelas.com") > -1) {
		var params = "promoCode=" + couponCode + "&supportMovingToRebate=true";
		var cabelashttp = new XMLHttpRequest();
		cabelashttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var cabelasObj = JSON.parse(this.responseText);
				let condition = cabelasObj.payments.hasPromo;
				if (condition == true) {
					let code = cabelasObj.payments.promoCode;
					let saving = cabelasObj.summary.grandShippingTotal.fmt;
					saving = Number(saving.replace(/[-$,]/g, ''));
					cabelasCoupArr.push(code);
					cabelasDiscArr.push(saving);
					var cabelashttp2 = new XMLHttpRequest();
					cabelashttp2.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					};
					cabelashttp2.open("GET", cabelasRemCouponApi, true);
					cabelashttp2.send();
				}
			}
		};
		cabelashttp.open("POST", cabelasWalletApi, false);
		cabelashttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		cabelashttp.send(params);
	}
	
	/////////////////// lordandtaylor.com ////////////////
	if (CurrHref.indexOf("www.lordandtaylor.com") > -1) {
		var params = "bmForm=applyPromoSaksBag&promoCode=" + couponCode + "";
		var lordhttp = new XMLHttpRequest();
		lordhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var lordObj = JSON.parse(this.responseText);
					if (lordObj.cartItems) {
						var str = lordObj.cartSummary.promotionalSaving;
						totalSavings = str.split(";").pop();
						localStorage.setItem("lordandtaylor", "$" + totalSavings);
						finalCode = couponCode;
					}
					if (lordObj.errors) {
						var params = "bmForm=remove_promo_code_saks_bag_service&promoCode=" + couponCode + "";
						var lordhttp = new XMLHttpRequest();
						lordhttp.onreadystatechange = function () {
							if (this.readyState == 4) {}
						};
						lordhttp.open("POST", lordWalletApi, false);
						lordhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
						lordhttp.setRequestHeader("Cache-Control", "no-cache");
						lordhttp.send(params);
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		lordhttp.open("POST", lordWalletApi, false);
		lordhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		lordhttp.setRequestHeader("Cache-Control", "no-cache");
		lordhttp.send(params);
	}
	
	/////////////////// partycity.com ////////////////
	if (CurrHref.indexOf("www.partycity.com") > -1) {
		try {
			var totalSaving = document.getElementsByClassName("order-total")[0].getElementsByTagName("span")[1].innerText.replace(/[-$,]/g, '');
			totalSaving = Number(totalSaving);
			let pid = document.getElementsByName('pid')[0].value;
			let csrfToken = document.getElementsByName('csrf_token')[0].value;
			var params = "delivery_option_7f317c72a4f6d19fac23d4cb7e=home&dwfrm_cart_shipments_i0_items_i0_quantity=4&pid=" + pid + "&quantity-814252=4&delivery_option_08d1fb13d0cb4a1223768a7b91=home&dwfrm_cart_shipments_i0_items_i1_quantity=5&pid=" + pid + "&quantity-814255=5&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon&csrf_token=" + csrfToken;
			var partyhttp = new XMLHttpRequest();
			partyhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						let code = doc.getElementById('dwfrm_cart_couponCode').value;
						var discSavings = doc.getElementsByClassName("order-total")[0].getElementsByTagName("span")[1].innerText.replace(/[-$,]/g, '');
						discSavings = Number(discSavings);
						saving = totalSaving - discSavings;
						if (saving > 0) {
							partycityCoupArr.push(code);
							partycityDiscArr.push(saving);
						}
						var paramR = "delivery_option_7f317c72a4f6d19fac23d4cb7e=home&dwfrm_cart_shipments_i0_items_i0_quantity=4&pid=" + pid + "&quantity-814252=4&delivery_option_08d1fb13d0cb4a1223768a7b91=home&dwfrm_cart_shipments_i0_items_i1_quantity=5&pid=" + pid + "&quantity-814255=5&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_coupons_i0_deleteCoupon=Remove&csrf_token=" + csrfToken;
						var partycityhttp2 = new XMLHttpRequest();
						partycityhttp2.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						partycityhttp2.open("POST", partyCouponApi, true);
						partycityhttp2.setRequestHeader("content-type", "application/x-www-form-urlencoded");
						partycityhttp2.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
						partycityhttp2.send(paramR);
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			partyhttp.open("POST", partyCouponApi, true);
			partyhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			partyhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			partyhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
		}
	}
	
	/////////////////// aeropostale.com ////////////////
	if (CurrHref.indexOf("www.aeropostale.com") > -1) {
		var aerohttp = new XMLHttpRequest();
		aerohttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {}
		};
		aerohttp.open("GET", aeroCouponApi + couponCode, false);
		aerohttp.send();
	}
	
	/////////////////// shutterfly.com ////////////////
	if (CurrHref.indexOf("www.shutterfly.com") > -1) {
		var params = "{'promoCode':'" + couponCode + "'}";
		var shutthttp = new XMLHttpRequest();
		shutthttp.onreadystatechange = function () {
			try {
				var shuttObj = JSON.parse(this.responseText);
				var msg = shuttObj.message;
				if (msg.includes("This special offer")) {
					finalCode = couponCode;
				}
			} catch (e) {
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
			}
		};
		shutthttp.open("POST", shuttCouponApi + couponCode, false);
		shutthttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		shutthttp.send(params);
	}
	
	/////////////////// snapfish.com ////////////////
	if (CurrHref.indexOf("www.snapfish.com") > -1) {
		try {
			var CSRFToken = document.getElementsByTagName('meta')[1].getAttribute('content');
			var ordersId = document.getElementById('orders').value;
			var params = "promotionName=" + couponCode + "&order_id=" + ordersId + "";
			var snaphttp = new XMLHttpRequest();
			snaphttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var snapfishObj = JSON.parse(this.responseText);
						var condition = snapfishObj[0].resource.productDiscount.totalDiscount;
						if (condition > 0) {
							finalCode = snapfishObj[0].resource.productDiscount.details[0].promotionName;
							totalSavings = snapfishObj[0].resource.productDiscount.details[0].discountAmount;
							sanpfishCouponArr.push(finalCode);
							snapfishAmtArr.push(totalSavings);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			snaphttp.open("POST", snapfishCouponApi, false);
			snaphttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			snaphttp.setRequestHeader("X-CSRF-Token", CSRFToken);
			snaphttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// dressbarn.com ////////////////
	if (CurrHref.indexOf("www.dressbarn.com") > -1) {
		var params = "Action=Cart.validatePromo&sessionConfirmationNumber=7512911085531293020&promoCode=" + couponCode + "";
		var dresshttp = new XMLHttpRequest();
		dresshttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var dressObj = JSON.parse(this.responseText);
					var check = dressObj.data.promoCode;
					var codePath = dressObj.data;
					if (check.successMessage) {
						finalCode = codePath.cartSummary.savingsNew[0].CouponId;
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		dresshttp.open("POST", dressCouponApi, false);
		dresshttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		dresshttp.send(params);
	}
	
	/////////////////// nastygal.com ////////////////
	if (CurrHref.indexOf("www.nastygal.com") > -1) {
		try {
			document.getElementById("dwfrm_billing_couponCode").value = couponCode;
			document.getElementById("add-coupon").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// hanes.com ////////////////
	if (CurrHref.indexOf("www.hanes.com") > -1) {
		try {
			document.getElementById("promoCode").value = couponCode;
			document.getElementById('WC_PromotionCodeDisplay_links_1').click();
			setTimeout(function () {
				if (document.getElementsByClassName("each-discount-detail-amount")[0]) {
					totalSavings = document.getElementsByClassName('each-discount-detail-amount')[0].innerText.replace(/[-$,]/g, '');
					totalSavings = Number(totalSavings);
					hanesDiscArr.push(totalSavings);
					finalCode = couponCode;
					hanesCoupArr.push(finalCode);
				}
				if (document.getElementById("promotion_1")) {
					document.getElementById("promotion_1").click();
				}
			}, 2500);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// vitacost.com ////////////////
	if (CurrHref.indexOf("www.vitacost.com") > -1) {
		var vitaparams = "spcFrmPrmCde=" + couponCode + "";
		var vitahttp = new XMLHttpRequest();
		vitahttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var finalCodeClass = doc.getElementsByClassName("spcPromoCodes spcBlind_Summary_PU spcBlind_Summary_PR_Loader")[0];
					if (finalCodeClass) {
						finalCode = couponCode;
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		vitahttp.open("POST", vitaCouponApi, false);
		vitahttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		vitahttp.send(vitaparams);
	}
	
	/////////////////// bebe.com ////////////////
	if (CurrHref.indexOf("www.bebe.com") > -1) {
		var bebehttp = new XMLHttpRequest();
		bebehttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var bebeObj = JSON.parse(this.responseText);
					var msg = bebeObj.applied;
					if (msg == "true") {
						finalCode = couponCode;
						bebeCoupArr.push(finalCode);
						var bebeshttp = new XMLHttpRequest();
						bebeshttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								try {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									var savingsStr = doc.getElementById("GRAND_ORDERS_DISCOUNT_TOTAL-value").innerText.split('-')[1].replace(/[$,]/gi, '');
									var totalSaving = Number(savingsStr);
									bebeDiscArr.push(totalSaving);
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
								}
							}
						};
						bebeshttp.open("GET", "https://www.bebe.com/checkout/basket.jsp", false);
						bebeshttp.send();
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		bebehttp.open("GET", "https://www.bebe.com/checkout/update_promo_code_ajax.cmd?promoCode=" + couponCode + "&delete=false&form_state=updatePromoCodeForm&removePromoCode=", false);
		bebehttp.send();
	}
	
	/////////////////// brookstone.com ////////////////
	if (CurrHref.indexOf("www.brookstone.com") > -1) {
		try {
			var brookCouponApi = document.getElementById('cart-items-form').action;
			if (!couponCode.includes("SHIP")) {
				var params = "dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
				var brookhttp = new XMLHttpRequest();
				brookhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						try {
							var parser = new DOMParser();
							var doc = parser.parseFromString(this.responseText, "text/html");
							var x = doc.getElementsByClassName("order-totals-row order-discount discount")[0];
							if (x) {
								var discountPrice = x.getElementsByTagName("span")[1].innerText.split('-')[1];
								discountPrice = discountPrice.replace("$", "");
								discountPrice = discountPrice.replace(",", "");
								totalSavings = Number(discountPrice);
								if (!isNaN(totalSavings)) {
									brookCoupArr.push(couponCode);
									brookDiscArr.push(totalSavings);
								}
							} else {
								var paramss = "dwfrm_cart_couponCode=&dwfrm_cart_coupons_i0_deleteCoupon=Remove";
								var brookshttp = new XMLHttpRequest();
								brookshttp.onreadystatechange = function () {
									if (this.readyState == 4 && this.status == 200) {}
								};
								brookshttp.open("POST", brookCouponApi, false);
								brookshttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
								brookshttp.send(paramss);
							}
						} catch (e) {
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				brookhttp.open("POST", brookCouponApi, false);
				brookhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				brookhttp.send(params);
			}
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// newbalance.com ////////////////
	if (CurrHref.indexOf("www.newbalance.com") > -1) {
		try {
			var oldValue = document.getElementsByClassName('total-value')[0].innerText.replace(/[-$,]/g, '');
			oldValue = Number(oldValue);
			var newbalhttp = new XMLHttpRequest();
			newbalhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var newbalObj = JSON.parse(this.responseText);
					var condition1 = newbalObj.redemptionErrorMsg;
					if (!condition1) {
						var condition2 = newbalObj.redemption.applied;
						if (condition2 == true) {
							var newbalhttp2 = new XMLHttpRequest();
							newbalhttp2.onreadystatechange = function () {
								if (this.readyState == 4) {
									try {
										var parser = new DOMParser();
										var doc = parser.parseFromString(this.responseText, "text/html");
										var applycondition = doc.getElementsByClassName('product-line price-adjustments compact  promo')[0];
										if (applycondition != undefined) {
											let code = newbalObj.redemption.couponCode;
											newbalanceCoupArr.push(code);
											var newValue = doc.getElementsByClassName('total-value')[4].innerText.replace(/[-$,]/g, '');
											newValue = Number(newValue);
											let saving = oldValue - newValue;
											newbalanceDiscArr.push(saving);
										}
									} catch (e) {
										Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
									}
								}
							};
							newbalhttp2.open("GET", CurrHref, false);
							newbalhttp2.send();
						}
						var newbalhttp3 = new XMLHttpRequest();
						newbalhttp3.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						newbalhttp3.open("POST", newbalanceRemApi + couponCode, false);
						newbalhttp3.send();
					}
				}
			};
			newbalhttp.open("GET", newbalanceCouponApi + couponCode, false);
			newbalhttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// dollargeneral.com ////////////////
	if (CurrHref.indexOf("www.dollargeneral.com") > -1) {
		var dollarhttp = new XMLHttpRequest();
		dollarhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var dollarhttp = new XMLHttpRequest();
				dollarhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						try {
							var dollarObj = JSON.parse(this.responseText);
							totalSavings = dollarObj.discount_amount;
							totalSavings = totalSavings.toString().replace('-', '');
							totalSavings = Number(totalSavings);
							var couponCodes = dollarObj.coupon_code;
							if (couponCodes) {
								dollarCoupArr.push(couponCodes);
								dollarDiscArr.push(totalSavings);
							}
						} catch (e) {
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
						}
					}
				};
				dollarhttp.open("GET", dollarWalletApi, false);
				dollarhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
				dollarhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
				dollarhttp.send();
			}
		};
		dollarhttp.open("PUT", dollarCouponApi + couponCode, false);
		dollarhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
		dollarhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		dollarhttp.send();
	}
	
	/////////////////// secure.bluenile.com ////////////////
	if (CurrHref.indexOf("secure.bluenile.com") > -1) {
		try {
			document.getElementsByClassName('promo-code-input')[0].getElementsByTagName('input')[0].value = couponCode;
			document.getElementsByClassName('blue-nile-button gray-alternative processable right apply')[0].click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// puritan.com ////////////////
	if (CurrHref.indexOf("www.puritan.com") > -1) {
		var params = "CouponCode=" + couponCode + "";
		var purihttp = new XMLHttpRequest();
		purihttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var x = doc.getElementsByClassName("pull-right text-red")[0];
					if (x) {
						finalCode = couponCode;
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		purihttp.open("POST", puritanCouponApi, false);
		purihttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		purihttp.send(params);
	}
	
	/////////////////// fromyouflowers.com ////////////////
	if (CurrHref.indexOf("www.fromyouflowers.com") > -1) {
		var params = "disc_code=" + couponCode + "&cmd=Apply+Discount";
		var fromyouhttp = new XMLHttpRequest();
		fromyouhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {}
		};
		fromyouhttp.open("POST", fromyouCouponApi, false);
		fromyouhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
		fromyouhttp.setRequestHeader("Accept", "*/*");
		fromyouhttp.send(params);
	}
	
	/////////////////// davidsbridal.com ////////////////
	if (CurrHref.indexOf("www.davidsbridal.com") > -1) {
		try {
			document.getElementById("promoCode").value = couponCode;
			document.getElementById("WC_PromotionCodeDisplay_links_1").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// herbergers.com ////////////////
	if (CurrHref.indexOf("www.herbergers.com") > -1) {
		try {
			document.getElementById("promoCode").value = couponCode;
			document.getElementById("applyPromo").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// eddiebauer.com ////////////////
	if (CurrHref.indexOf("www.eddiebauer.com") > -1) {
		try {
			var dynamicSesion = document.getElementsByName("_dynSessConf")[0];
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSesion + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + couponCode + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&beanName=%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler&claimCoupon=true&_D%3AclaimCoupon=+&couponCancelCard=false&_D%3AcouponCancelCard=+&_DARGS=%2Fcheckout%2Fgadgets%2Fapply-promotion-code-accordion.jsp.apply-promo-code";
			var eddihttp = new XMLHttpRequest();
			eddihttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {}
			};
			eddihttp.open("POST", eddieCouponApi, false);
			eddihttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			eddihttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
			eddihttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			eddihttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// toms.com ////////////////
	if (CurrHref.indexOf("www.toms.com") > -1) {
		try {
			var session = document.getElementsByName('_dynSessConf')[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + session + "&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponCode=" + couponCode + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponCode=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.stage=shippingMethod&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.stage=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.multiStage=&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.multiStage=+&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fcheckout%2Fcommon%2FcheckoutPromoCode.jsp.couponForm2&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=Apply";
			var tomshttp = new XMLHttpRequest();
			tomshttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var total = doc.getElementsByClassName('ln-amt')[2];
						var condition = doc.getElementsByClassName("ln-item")[2];
						if (condition.innerText == "Discount") {
							var money = Number(total.innerText.split("$")[1]);
							tomspriceArr.push(money);
							finalCode = couponCode;
							tomsCoupArr.push(finalCode);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			tomshttp.open("POST", tomsCouponApi, false);
			tomshttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			tomshttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			tomshttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// younkers.com ////////////////
	if (CurrHref.indexOf("www.younkers.com") > -1) {
		try {
			document.getElementById("promoCode").value = couponCode;
			document.getElementById("applyPromo").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// shop.straighttalk.com ////////////////
	if (CurrHref.indexOf("shop.straighttalk.com") > -1) {
		try {
			var OrderId = document.getElementById('currentOrderId').value;
			var params = "orderId=" + OrderId + "&taskType=A&URL=&storeId=10154&catalogId=13551&langId=-1&finalView=AjaxOrderItemDisplayView&promoCode=" + couponCode + "&requesttype=ajax";
			var strahttp = new XMLHttpRequest();
			strahttp.onreadystatechange = function () {
				if (this.readyState == 4) {}
			};
			strahttp.open("POST", straightCouponApi, false);
			strahttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			strahttp.setRequestHeader("Accept", "*/*");
			strahttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// fossil.com ////////////////
	if (CurrHref.indexOf("www.fossil.com") > -1) {
		try {
			document.getElementById("discount_code_applied").value = couponCode;
			document.getElementsByClassName("btn btn-primary btn-apply-discount")[0].click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// shoecarnival.com ////////////////
	if (CurrHref.indexOf("www.shoecarnival.com") > -1) {
		try {
			var tokenId = document.getElementsByName("csrf_token")[0].value;
			var params = "delivery_option_d4af1a04e2aa078ba30fb5a3ec=home&delivery_option_0f440660b51afb66b4e2d7c5be=home&delivery_option_e2b97f79295ad76c1e7cc63487=home&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon&csrf_token=" + tokenId + "";
			var shoehttp = new XMLHttpRequest();
			shoehttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {}
			};
			shoehttp.open("POST", shoeCouponApi, false);
			shoehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			shoehttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// shopbop.com ////////////////
	if (CurrHref.indexOf("www.shopbop.com") > -1) {
		try {
			var session = document.getElementById('spfCsrf').value;
			var params = "_csrf=" + session + "&promotionCode=" + couponCode + "";
			var shopbophttp = new XMLHttpRequest();
			shopbophttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var x = doc.getElementsByClassName('applied')[0];
						if (x) {
							if (x.innerText == "code applied") {
								finalCode = couponCode;
							}
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			shopbophttp.open("POST", shopbopCouponApi, false);
			shopbophttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			shopbophttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// harryanddavid.com ////////////////
	if (CurrHref.indexOf("www.harryanddavid.com") > -1) {
		try {
			var OrderId = document.getElementById('currentOrderId').value;
			var params = "PiId=&storeccno=&storeccname=&ccExpMonth=&ccExpYear=&plccstoreccno=%2F&plccstoreccname=%2F&chkFlw=Y&selectedType=promotion&storeId=21051&langId=-1&orderId=" + OrderId + "&catalogId=16802&taskType=A&existingPromoCode=&existingCouponId=&existingCouponBalance=&addGiftRewardFlag=&appliedPromoCode=" + couponCode + "&currentPayment=creditcard&isPromoValid=true&previousPayment=&removeExistingPromo=&excludedPromoCode=&promoZipCodeID=&PaymentTypePromotion=PaymentTypePromotionCallBack%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&PaymentTypePromotionCmd=PaymentTypePromotion%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&RemovePromotionView=RemovePromotionView%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&PlaceOrderDisplayCmdURL=FDPlaceOrderDisplayCmd%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802&AskSuggestionPromotionView=AskSuggestionPromotionView%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&AddOrRemovePromotionOrEGCView=AddOrRemovePromotionOrEGCView%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&promoCode=" + couponCode + "&membershipPromo=";
			var harryhttp = new XMLHttpRequest();
			harryhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var appliedCode = doc.getElementsByClassName('appliedPromoDetails')[0].innerText.split(" ")[2];
						var appliedDis = doc.getElementsByClassName('BP-PaddingSpace BP-col2')[1].innerText.split("-")[1].replace(/[$,]/g, '');
						var appliedDisNumber = Number(appliedDis);
						if (couponCode == appliedCode) {
							harryCoupArr.push(couponCode);
							harryDisArr.push(appliedDisNumber);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			harryhttp.open("POST", harryCouponApi, false);
			harryhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			harryhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
		}
	}
	
	/////////////////// columbia.com ////////////////
	if (CurrHref.indexOf("www.columbia.com") > -1) {
		try {
			document.getElementById("dwfrm_cart_couponCode").value = couponCode;
			document.getElementById("add-coupon").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// torrid.com ////////////////
	if (CurrHref.indexOf("www.torrid.com") > -1) {
		try {
			var session = document.getElementById('cart-items-form').action.split('=')[1];
			var params = "dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var torridhttp = new XMLHttpRequest();
			torridhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {}
			};
			torridhttp.open("POST", "https://www.torrid.com/cart?dwcont=" + session + " ", false);
			torridhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			torridhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// michaels.com ////////////////
	if (CurrHref.indexOf("www.michaels.com") > -1) {
		try {
			var session = document.getElementById('cart-items-form').action.split('=')[1];
			var params = "dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var oldPrice = document.getElementsByClassName('order-total-value clearfix')[0].getElementsByClassName('value')[0].innerText.replace(/[-$,]/g, '');
			oldPrice = Number(oldPrice);
			var michaelshttp = new XMLHttpRequest();
			michaelshttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var newPrice = doc.getElementsByClassName('order-total-value clearfix')[0].getElementsByClassName('value')[0].innerText.replace(/[-$,]/g, '');
						newPrice = Number(newPrice);
						if (oldPrice > newPrice) {
							let saving = oldPrice - newPrice;
							michaelDiscArr.push(saving);
							let code = couponCode;
							michaelCoupArr.push(code);
						}
						var paramR = "dwfrm_cart_couponCode=&dwfrm_cart_coupons_i0_deleteCoupon=Remove";
						var michaelshttp2 = new XMLHttpRequest();
						michaelshttp2.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						michaelshttp2.open("POST", michaelsCouponApi + session, true);
						michaelshttp2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
						michaelshttp2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
						michaelshttp2.send(paramR);
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			michaelshttp.open("POST", michaelsCouponApi + session, false);
			michaelshttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			michaelshttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			michaelshttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// avenue.com ////////////////
	if (CurrHref.indexOf("www.avenue.com") > -1) {
		try {
			var session = "";
			var sessionClass = document.getElementsByClassName('cart-action-continue-shopping')[0];
			if (sessionClass) {
				session = "?dwcont=" + sessionClass.action.split('=')[1];
			}
			var params = "dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=Apply";
			var avenuehttp = new XMLHttpRequest();
			avenuehttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var finalCodeClass = doc.getElementsByClassName('coupon-discount-success clearfix')[0];
					if (finalCodeClass) {
						finalCode = finalCodeClass.innerText.split('APPLIED')[0];
						avenueCoupArr.push(finalCode);
						var totalSave = doc.getElementsByClassName("order-discount discount")[0].getElementsByTagName('ins')[0].innerText.replace(/[-$,]/g, '');
						totalSavings = Number(totalSave);
						avenueDiscArr.push(totalSavings);
					}
					var params2 = "dwfrm_cart_coupons_i0_deleteCoupon=Remove";
					var avenue2http = new XMLHttpRequest();
					avenue2http.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					};
					avenue2http.open("POST", avenueCouponApi + session + "", false);
					avenue2http.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
					avenue2http.send(params2);
				}
			};
			avenuehttp.open("POST", avenueCouponApi + session + "", false);
			avenuehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			avenuehttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// crocs.com ////////////////
	if (CurrHref.indexOf("www.crocs.com") > -1) {
		try {
			crocspriceArr.push(Number(document.getElementById("estimatedTotal").innerText.replace(/[$,]/g, '')));
			document.getElementById('couponFld').value = couponCode;
			document.getElementById('addcoup').click();
			setTimeout(function () {
				var child = document.getElementsByClassName("cost redText")[0];
				if (child) {
					var discammount = document.getElementById("orderSubTotal");
					if (discammount) {
						discammount = Number(discammount.innerText.replace(/[$,]/g, ''));
						if (discammount != crocspriceArr[0]) {
							finalCode = couponCode;
							crocsCoupArr.push(finalCode);
							var savingsamount = (crocspriceArr[0] - discammount).toFixed(2);
							crocsDiscArr.push(savingsamount);
						}
					}
				}
				if (document.getElementsByClassName('removecoup')[0]) {
					document.getElementsByClassName('removecoup')[0].click();
				}
			}, 2000);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// quill.com ////////////////
	if (CurrHref.indexOf("www.quill.com") > -1) {
		try {
			document.getElementById('CouponInput').value = couponCode;
			document.getElementsByClassName('applyBtn button scTrack cta couponStackableBtn')[0].click();
			setTimeout(function () {
				if (document.getElementsByClassName("clear savingPriceColor")[0]) {
					totalSavings = document.getElementsByClassName("clear savingPriceColor")[0].innerText.replace("You Saved: $", "");
					totalSavings = Number(totalSavings);
					if (totalSavings) {
						quillDiscArr.push(totalSavings);
						quillCoupArr.push(couponCode);
					}
				}
				if(document.getElementsByClassName("removeLnkCouponStackble scTrack")[1])
				{
				  document.getElementsByClassName("removeLnkCouponStackble scTrack")[1].click();
				}
			}, 4000)
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// lenovo.com ////////////////
	if (CurrHref.indexOf("lenovo.com") > -1) {
		try {
			var TokenId = document.getElementsByName("CSRFToken")[0].value;
			var params = "avoid_enter_submit=&CSRFToken=" + TokenId + "&couponCode=" + couponCode + "&voucherCode=" + couponCode + "";
			var lenovohttp = new XMLHttpRequest();
			lenovohttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var finalCodeClass = doc.getElementsByClassName('price-calculator-cart-summary-couponCode')[0];
						if (finalCodeClass) {
							finalCode = finalCodeClass.innerText;
							totalSavings = doc.getElementsByClassName("price-calculator-cart-summary-couponSaved")[0].innerText.replace(/[-$,]/g, '');
							totalSavings = Number(totalSavings);
							lenovoDiscArr.push(totalSavings);
							lenovoCoupArr.push(finalCode);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			lenovohttp.open("POST", lenovoCouponApi, false);
			lenovohttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			lenovohttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
		}
	}
	
	/////////////////// bloomingdales.com ////////////////
	if (CurrHref.indexOf("www.bloomingdales.com") > -1) {
		try {
			document.getElementById("lnkApplyPromos").disabled = false;
			document.getElementById('promoCode').value = couponCode;
			document.getElementById('lnkApplyPromos').click();
			var finalcodeClass = document.getElementById('PromoCodeOneContainer').getElementsByClassName('promoLabel')[1];
			if (finalcodeClass) {
				finalCode = finalcodeClass.innerText;
			}
			var checktotalSavings = document.getElementById('PromoCodeOneContainer').getElementsByClassName('IShipSign')[0];
			if (checktotalSavings) {
				totalSavings = checktotalSavings.innerText.split('-')[1];
				localStorage.setItem("bloomingdales", totalSavings);
			}
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// store.hp.com ////////////////
	if (CurrHref.indexOf("store.hp.com") > -1) {
		try {
			var cartTotal = document.getElementById('cartSubtotal');
			if (cartTotal) {
				var totalHPpriceData = cartTotal.innerText.replace(/[$,]/g, '');
				HPCoupArr.push(totalHPpriceData);
				totalHPpriceNumber = Number(HPCoupArr[0]);
			}
			document.getElementById('cpnCode').value = couponCode;
			document.getElementsByClassName('applyCoupon apply ')[0].click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// dell.com ////////////////
	if (CurrHref.indexOf("www.dell.com/en-us") > -1) {
		var params = "{'CouponCode':'" + couponCode + "'}";
		var dellhttp = new XMLHttpRequest();
		dellhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 201) {
				try {
					var totalResponse = this.responseText;
					var totalResponseobj = JSON.parse(totalResponse);
						if (totalResponseobj.Coupons[0]) {
							finalCode = totalResponseobj.Coupons[0].CouponCode;
						}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		dellhttp.open("POST", dellCouponApi, false);
		dellhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8", "Accept", "application/json, text/plain, */*");
		dellhttp.send(params);
	}
	
	/////////////////// kmart.com ////////////////
	if (CurrHref.indexOf("www.kmart.com") > -1) {
		var params = '{"couponRequest":{"couponCode":"' + couponCode + '"}}';
		try {
			var kmarthttp = new XMLHttpRequest();
			kmarthttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var kmartObj = JSON.parse(this.responseText);
					if (kmartObj.response.applicableCoupon[0].isApplied == "true") {
						var kmartMaxAmount = kmartObj.response.applicableCoupon[0].dollarValue;
						kmartMaxAmount = Number(kmartMaxAmount);
						kmartDiscArr.push(kmartMaxAmount);
						var kmartApplyCode = kmartObj.response.applicableCoupon[0].offerId;
						kmartCoupArr.push(kmartApplyCode);
					}
				}
			};
			kmarthttp.open("POST", kmartCouponApi, false);
			kmarthttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
			kmarthttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", NetWork Error, " + e);
		}
	}
	
	/////////////////// ediblearrangements.com ////////////////
	if (CurrHref.indexOf("www.ediblearrangements.com") > -1) {
		try {
			var TotalDisc = document.getElementById("ctl00_cpBody_rptSale_ctl00_Tr1");
			if (TotalDisc) {
				finalCodeVal = document.getElementById('ctl00_cpBody_rptSale_ctl00_txtCoupon').value;
				totalSavings = Number(TotalDisc.getElementsByClassName("boldText tRight")[0].innerText.replace(/\(|\$|\)/g, ''));
				edibleCoupArr.push(finalCodeVal);
				edibleDiscArr.push(totalSavings);
			}
			document.getElementById('ctl00_cpBody_rptSale_ctl00_txtCoupon').value = couponCode;
			document.getElementById('ctl00_cpBody_rptSale_ctl00_btnApplyCoupon').click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// reebok.com ////////////////
	if (CurrHref.indexOf("www.reebok.com") > -1) {
		var params = "dwfrm_cart_couponCode=" + couponCode + "&referer=Cart-Show&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
		var reebokhttp = new XMLHttpRequest();
		reebokhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {}
				catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		reebokhttp.open("POST", reebokCouponApi, false);
		reebokhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		reebokhttp.send(params);
	}
	
	/////////////////// ralphlauren.com ////////////////
	if (CurrHref.indexOf("www.ralphlauren.com") > -1) {
		try {
			document.getElementById("add-coupon").disabled = false;
			var oldsaving = document.getElementsByClassName('order-subtotal')[0].getElementsByTagName('td')[1].innerText.replace(/[$,]/g, '');
			var oldsaveNum = Number(oldsaving);
			document.getElementById("dwfrm_billing_couponCode").value = couponCode;
			document.getElementById("add-coupon").click();
			var newsaving = document.getElementsByClassName('order-subtotal')[0].getElementsByTagName('td')[1].innerText.replace(/[$,]/g, '');
			var newsaveNum = Number(newsaving);
			totalsave = oldsaveNum - newsaveNum;
			if (totalsave > 0) {
				totalsavefinal = oldsaveNum - newsaveNum;
			}
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// dermstore.com ////////////////
	if (CurrHref.indexOf("www.dermstore.com") > -1) {
		var params = "promo=" + couponCode + "";
		var dermhttp = new XMLHttpRequest();
		dermhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var totalResponseobj = JSON.parse(this.responseText);
					if (totalResponseobj.order.order_discount_code) {
						finalCode = totalResponseobj.order.order_discount_code;
						totalSavings = totalResponseobj.order.order_total_discount;
						dermstoreCoupArr.push(finalCode);
						dermstoreDiscArr.push(Number(totalSavings));
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		dermhttp.open("POST", dermCouponApi, false);
		dermhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		dermhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
		dermhttp.setRequestHeader("x-distil-ajax", "dtyqytwbbuedtbrzwctsetyxbrvacc");
		dermhttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
		dermhttp.send(params);
	}
	
	/////////////////// cheapoair.com ////////////////
	if (CurrHref.indexOf("www.cheapoair.com") > -1) {
		try {
			var cheapoairDis,
			cheapoairDisNum;
			document.getElementById('PromoCode').value = couponCode;
			document.getElementById('promodiv').getElementsByClassName('price-itinerary__item')[2].getElementsByTagName('a')[0].click();
			setTimeout(function () {
				cheapoairTempCoupon = couponCode;
			}, 500)
			var discountClass = document.getElementsByClassName('totdiscount')[0].getElementsByClassName('price-itinerary__item')[1];
			if (discountClass) {
				cheapairCoupArr.push(cheapoairTempCoupon);
				cheapoairDis = discountClass.innerText.replace(/[$,-\s]/g, ''); ;
				cheapoairDisNum = Number(cheapoairDis);
				cheapairDisArr.push(cheapoairDisNum);
			}
			var arrayIndexFunction = function indexOfMax(cheapairDisArr) {
				if (cheapairDisArr.length === 0) {
					return -1;
				}
				var max = cheapairDisArr[0];
				var maxIndex = 0;
				for (var i = 1; i < cheapairDisArr.length; i++) {
					if (cheapairDisArr[i] > max) {
						maxIndex = i;
						max = cheapairDisArr[i];
					}
				}
				return maxIndex;
			}
			cheapArrayIndex = arrayIndexFunction(cheapairDisArr);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// jcrew.com ////////////////
	if (CurrHref.indexOf("www.jcrew.com") > -1) {
		var params = "bmForm=frm_shopping_cart_continue&bmFormID=mdbZclM%2F1634f16f9c0&bmUID=mdbZclN&bmIsForm=true&bmPrevTemplate=%2Fcheckout2%2Fshoppingbag.jsp&bmEditable=bmAction&bmArch=bmAction&bmAction=add_promo_code&bmEditable=bmSubmit&bmArch=bmSubmit&bmSubmit=add_promo_code&bmEditable=isPayPalExpress&bmHidden=isPayPalExpress&isPayPalExpress=&bmEditable=continueFromBag&bmHidden=continueFromBag&continueFromBag=&bmEditable=continueFromBagProductIDs&bmHidden=continueFromBagProductIDs&continueFromBagProductIDs=&bmEditable=checkoutVersion&bmHidden=checkoutVersion&checkoutVersion=2&bmEditable=isMasterPassExpress&bmHidden=isMasterPassExpress&isMasterPassExpress=&bmSingle=temp_quantity&temp_quantity=4&bmSingle=temp_quantity&temp_quantity=3&bmEditable=jc_country&bmHidden=jc_country&jc_country=US&bmText=GENERIC%3C%3Etax_postal&GENERIC%3C%3Etax_postal=&bmText=promotionCode1&promotionCode1=" + couponCode + "&bmEditable=delete_card_id&bmHidden=delete_card_id&delete_card_id=&bmText=ACCOUNT%3C%3EaccountNumber&ACCOUNT%3C%3EaccountNumber=&bmText=ACCOUNT%3C%3EpinNumber&ACCOUNT%3C%3EpinNumber=&bmFields=bmText%2CbmEditable%2CbmPrevTemplate%2CbmForm%2CbmIsForm%2CbmUID%2CbmHidden%2CbmArch%2CbmFormID%2CbmSingle&bmHash=352594f4f23c56be0af03c183c6115b35db7ba5f";
		var jcrewhttp = new XMLHttpRequest();
		jcrewhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var checkDis = doc.getElementsByClassName('section--first')[0];
					if (checkDis) {
						jcrewCoupArr.push(couponCode);
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		jcrewhttp.open("POST", jcrewCouponApi, false);
		jcrewhttp.send(params);
	}
	
	/////////////////// bodybuilding.com ////////////////
	if (CurrHref.indexOf("www.bodybuilding.com") > -1) {
		try {
			var session = document.getElementsByName("_dynSessConf")[0].value;
			var charset = document.getElementsByName("_dyncharset")[0].value;
			var looplength = document.getElementsByClassName("quantity-select__control ").length;
			for (var i = 0; i < looplength; i++) {
				bodybuildingParms = bodybuildingParms + "&" + document.getElementsByClassName("quantity-select__control")[i].name + "=" +
					document.getElementsByClassName("quantity-select__control ")[i].value;
			}
			var finalproductcoount = bodybuildingParms.substring(1);
			var params = "_dyncharset=" + charset + "&_dynSessConf=" + session + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.checkout=+&" + finalproductcoount + "&updateCartButton=submit&_D%3AupdateCartButton=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.updateSuccessURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.updateSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.updateErrorURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.updateErrorURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.removeItemFromOrderSuccessURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.removeItemFromOrderSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.removeItemFromOrderErrorURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.removeItemFromOrderErrorURL=+&promoCode=" + couponCode + "&_D%3ApromoCode=+&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.checkout=+&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.payPalExpressCheckoutFromCart=+&access_token=&_D%3Aaccess_token=+&token_type=&_D%3Atoken_type=+&expires_in=&_D%3Aexpires_in=+&scope=&_D%3Ascope=+&billingAgreementId=&_D%3AbillingAgreementId=+&orderReferenceId=&_D%3AorderReferenceId=+&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.amazonPayCheckoutFromCart=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.moveToPurchaseInfoErrorURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.moveToPurchaseInfoErrorURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.qualifiedFreeGiftsUrl=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fqualified-freegifts.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.qualifiedFreeGiftsUrl=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.billingInfoUrl=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fbilling.jsp%3FallowLogin%3Dtrue&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.billingInfoUrl=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.loginDuringCheckoutURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fqualified-freegifts.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.loginDuringCheckoutURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.confirmationURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fqualified-freegifts.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.confirmationURL=+&_DARGS=%2Fstore%2Fcommerce%2Fcart%2Fcart-container.jsp.cartForm";
			var bodybuildinghttp = new XMLHttpRequest();
			bodybuildinghttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var codeapplyClass = doc.getElementsByClassName("coupon-item-line")[0];
						if (codeapplyClass) {
							finalCode = couponCode;
							bodybuildingCoupArr.push(finalCode);
							var x = doc.getElementsByClassName("order-total");
							for (var j = 0; j < x.length; j++) {
								if (x[j].getElementsByTagName("label")[0]) {
									if (x[j].getElementsByTagName("label")[0].innerText == "Coupon Discount:") {
										var savings = x[j].getElementsByTagName("span")[0].innerText.split("-")[1];
										var totalearnings = Number(savings.replace(/[$,]/g, ''));
										bodybuildingDisArr.push(totalearnings);
									}
								}
							}
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			bodybuildinghttp.open("POST", bodybuildingCouponApi, false);
			bodybuildinghttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			bodybuildinghttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			bodybuildinghttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// sierratradingpost.com ////////////////
	if (CurrHref.indexOf("www.sierratradingpost.com") > -1) {
		try {
			sierrorderSubtotal = Number(document.getElementById("orderSubtotal").innerText.replace(/[$,]/g, ''));
			sierroriginalShipping = Number(document.getElementById("shippingEstimate").innerText.replace(/[$,]/g, ''));
			if (sierroriginalShipping) {
				localStorage.setItem("sierratradingpost", sierroriginalShipping);
			}
			var params = "KeyCode=" + couponCode;
			var paramsRem = "KeyCode=REMOVE_ME";
			var sierrRemhttp = new XMLHttpRequest();
			sierrRemhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var sierrahttp = new XMLHttpRequest();
					sierrahttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							try {
								var sierrobj = JSON.parse(this.responseText);
								var orderTotal = sierrobj.orderTotal;
								var savings = Number(orderTotal.replace(/[$,]/g, ''));
								if (savings == sierrorderSubtotal) {
									finalCode = couponCode;
								}
							} catch (e) {
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
							}
						}
					};
					sierrahttp.open("POST", sierraCouponApi, false);
					sierrahttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
					sierrahttp.setRequestHeader("accept", "*/*");
					sierrahttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					sierrahttp.send(params);
				}
			};
			sierrRemhttp.open("POST", sierraCouponApi, false);
			sierrRemhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			sierrRemhttp.setRequestHeader("accept", "*/*");
			sierrRemhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			sierrRemhttp.send(paramsRem);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
		}
	}
	
	/////////////////// victoriassecret.com ////////////////
	if (CurrHref.indexOf("www.victoriassecret.com") > -1) {
		var params = "dataSaveType=flow&offerModel%5B0%5D.index=0&offerModel%5B0%5D.offerCode=" + couponCode + "&offerModel%5B1%5D.index=1&offerModel%5B1%5D.offerCode=&offerModel%5B2%5D.index=2&offerModel%5B2%5D.offerCode=";
		var victohttp = new XMLHttpRequest();
		victohttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var totalResponseobj = JSON.parse(this.responseText);
					if (totalResponseobj.offersModel[0].code2) {
						victoCoupArr.push(couponCode);
						finalCode = totalResponseobj.offersModel[0].offerCode;
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		victohttp.open("POST", victoCouponApi, false);
		victohttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		victohttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
		victohttp.send(params);
	}
	
	/////////////////// restaurant.com ////////////////
	if (CurrHref.indexOf("www.restaurant.com") > -1) {
		var params = "promoCode=" + couponCode + "&AffiliateId=1647&trackingLocation=Cart+Page";
		var resthttp = new XMLHttpRequest();
		resthttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var totalResponseobj = JSON.parse(this.responseText);
					var promocode = totalResponseobj.JsonObject.Data.PromoApplied;
					if (promocode == true) {
						finalCode = totalResponseobj.JsonObject.Data.PromoCode;
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		resthttp.open("POST", restCouponApi, false);
		resthttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		resthttp.send(params);
	}
	
	/////////////////// from.bookit.com ////////////////
	if (CurrHref.indexOf("from.bookit.com") > -1) {
		try {
			document.getElementById("at-ts-coupon-input").value = couponCode;
			document.getElementById("at-ts-apply-coupon").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// pepboys.com ////////////////
	if (CurrHref.indexOf("www.pepboys.com") > -1) {
		var params = "promoCode=" + couponCode + "";
		var resthttp = new XMLHttpRequest();
		resthttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {}
		};
		resthttp.open("POST", pepboysCouponApi, false);
		resthttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		resthttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		resthttp.send(params);
	}
	
	/////////////////// ebags.com ////////////////
	if (CurrHref.indexOf("www.ebags.com") > -1) {
		var params = "SourceCode=" + couponCode;
		var ebagshttp = new XMLHttpRequest();
		ebagshttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {}
		};
		ebagshttp.open("POST", ebagsCouponApi, false);
		ebagshttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ebagshttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
		ebagshttp.send(params);
	}
	
	/////////////////// orientaltrading.com ////////////////
	if (CurrHref.indexOf("www.orientaltrading.com") > -1) {
		var orientalhttp = new XMLHttpRequest();
		orientalhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var orientObj = JSON.parse(this.responseText);
					var msg = orientObj.statusCode;
					if (msg == "success") {
						if ((orientObj.discount != 0) && (orientObj.shippingDiscount == 0)) {
							var svaings = orientObj.discount
								orientalDisArr.push(svaings);
						} else {
							var svaings = orientObj.shippingDiscount;
							orientalDisArr.push(svaings);
						}
						finalCode = couponCode;
						orientalProCoupArr.push(finalCode)
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		orientalhttp.open("GET", orientalCouponApi + couponCode, false);
		orientalhttp.send();
	}
	
	/////////////////// orvis.com ////////////////
	if (CurrHref.indexOf("www.orvis.com") > -1) {
		try {
			var params = "{'specialOfferCode':'" + couponCode + "'}";
			var orvishttp = new XMLHttpRequest();
			orvishttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var orvisObj = JSON.parse(this.responseText);
					var condition = orvisObj.d.result;
					if (condition == true) {
						let code = orvisObj.d.orderTotals.special_offer_code;
						orvisCoupArr.push(code);
						let saving = orvisObj.d.orderTotals.order_allowance_total.replace(/[-$,]/g, '');
						saving = Number(saving);
						orvisDiscArr.push(saving);
					}
				}
			};
			orvishttp.open("POST", orvisCouponApi, true);
			orvishttp.setRequestHeader("content-type", "application/json");
			orvishttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
			orvishttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
		}
	}
	
	/////////////////// yankeecandle.com ////////////////
	if (CurrHref.indexOf("www.yankeecandle.com") > -1) {
		try {
			var dynSessConf = document.getElementsByName("_dynSessConf")[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynSessConf + "&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponClaimCode=" + couponCode + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=Apply&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCouponSuccessURL=%2Fcart%2Fbag.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCouponSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCouponErrorURL=%2Fcart%2Fbag.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCouponErrorURL=+&_DARGS=%2Fcart%2Fincludes%2Fpromotion-code.jsp.applyCouponform";
			var paramsRem = "_dyncharset=UTF-8&_dynSessConf=" + dynSessConf + "&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.removeCouponCode=" + couponCode + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.removeCouponCode=+&removeCoupon=Remove&_D%3AremoveCoupon=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.removeCouponSuccessURL=%2Fcart%2Fbag.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.removeCouponSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.removeCouponErrorURL=%2Fcart%2Fbag.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.removeCouponErrorURL=+&_DARGS=%2Fcart%2Fincludes%2Fpromotion-code.jsp.removeCouponform";
			var yankhttp = new XMLHttpRequest();
			yankhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var checkDis = doc.getElementsByClassName("mrchnt-dscs")[1].getElementsByClassName("amt")[0].innerText.replace(/[-$,]/g, '');
						var checkDiscValue = Number(checkDis);
						if (checkDiscValue > 0) {
							yankDiscArr.push(checkDiscValue);
							yankCoupArr.push(couponCode);
						}
						var yankRemhttp = new XMLHttpRequest();
						yankRemhttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						yankRemhttp.open("POST", yankeeCouponRemApi, false);
						yankRemhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
						yankRemhttp.setRequestHeader("Accept", "*/*");
						yankRemhttp.send(paramsRem);
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			yankhttp.open("POST", yankeeCouponApi, false);
			yankhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			yankhttp.setRequestHeader("Accept", "*/*");
			yankhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
		}
	}
	
	/////////////////// guitarcenter.com ////////////////
	if (CurrHref.indexOf("www.guitarcenter.com") > -1) {
		try {
			var dynSession = document.getElementsByName('_dynSessConf')[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynSession + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + couponCode.toLowerCase() + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=%2Fcart&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=%2Fcart&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.filterShippingPromotion=true&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.filterShippingPromotion=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=true&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fcrt%2Fincludes%2FcartBody.jsp.couponForm";
			var guitarhttp = new XMLHttpRequest();
			guitarhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						finalCode = doc.getElementsByClassName('coupon')[0].getElementsByTagName('dd')[0].innerText.split('X')[1];
						guitarCoupArr.push(finalCode);
						let totalSave = doc.getElementsByClassName('coupon')[0].getElementsByTagName('dt')[0].innerText.replace(/[()$]/g, '');
						totalSave = Number(totalSave);
						guitarDiscArr.push(totalSave);
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			guitarhttp.open("POST", guitarCouponApi, false);
			guitarhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			guitarhttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			guitarhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// juicycouture.com ////////////////
	if (CurrHref.indexOf("www.juicycouture.com") > -1) {
		try {
			var reqToken = document.getElementsByName('__RequestVerificationToken')[0].value;
			var params = "PromoCode=" + couponCode + "&__RequestVerificationToken=" + reqToken + "";
			var juicyhttp = new XMLHttpRequest();
			juicyhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var juicyObj = JSON.parse(this.responseText);
						var condition = juicyObj.Success;
						if (condition == true) {
							finalCode = juicyObj.PromoCodeInfo.PromoCode;
							juicyCoupArr.push(finalCode);
							let totalSave = juicyObj.PromoCodeInfo.Discount;
							juicyDiscArr.push(totalSave);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			juicyhttp.open("POST", juicyCouponApi, false);
			juicyhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
			juicyhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
		}
	}
	
	/////////////////// nyandcompany.com ////////////////
	if (CurrHref.indexOf("www.nyandcompany.com") > -1) {
		try {
			var dynamicSession = document.getElementById('miniCheckout').getElementsByTagName("input")._dynSessConf.value;
			var saving;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=%2Fcheckout%2Fgadgets%2FcheckoutCouponErrorMessage.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + couponCode + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fcheckout%2Fgadgets%2FbillingForm.jsp.apply_coupon";
			var nyandcompanyhttp = new XMLHttpRequest();
			nyandcompanyhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var nySavinghttp = new XMLHttpRequest();
					nySavinghttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							try {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								savingClass = doc.getElementsByClassName("t-cell line-value discounted")[0];
								if (savingClass) {
									saving = Number(savingClass.innerText.replace(/[-$,]/g, ''));
									if (saving > 0) {
										nyandcompanyCoupArr.push(couponCode);
										nyandcompanyDiscArr.push(saving);
									}
								}
							} catch (e) {
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
							}
						}
					}
					nySavinghttp.open("GET", CurrHref, false);
					nySavinghttp.send();
					var removeParams = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=%2Fcheckout%2Fgadgets%2FcheckoutCouponErrorMessage.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=%2Fcheckout%2Fgadgets%2FcheckoutCouponErrorMessage.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + couponCode + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.removeCoupon=Submit&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.removeCoupon=+&_DARGS=%2Fcheckout%2Fgadgets%2FgetAvailableCoupons.jsp.billingRemoveCouponForm_1";
					var nyRemovehttp = new XMLHttpRequest();
					nyRemovehttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					}
					nyRemovehttp.open("POST", nyandcompanyCouponRemApi, false);
					nyRemovehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					nyRemovehttp.send(removeParams);
				}
			}
			nyandcompanyhttp.open("POST", nyandcompanyCouponApi, false);
			nyandcompanyhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			nyandcompanyhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// dunkindonuts.com ////////////////
	if (CurrHref.indexOf("dunkindonuts.com") > -1) {
		try {
			var storeId = document.getElementById("storeId").value;
			var storeUrl = document.getElementById("storeUrl").value;
			var storeCurrency = document.getElementById("storeCurrency").value;
			var storeCurrencyCount = document.getElementById("storeCurrencyCount").value;
			var storeLanguage = document.getElementById("storeLanguage").value;
			var params = "storeLanguage=" + storeLanguage + "&storeCurrency=" + storeCurrency + "&storeCurrencyCount=" + storeCurrencyCount + "&storeId=" + storeId + "&storeUrl=" + storeUrl + "&preview=false&pageTypePath=cart&orderId=&promoCode=" + couponCode + "";
			var dunkhttp = new XMLHttpRequest();
			dunkhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var checkDis = doc.getElementsByClassName("CartTotalDiscountPrice")[0].innerText.replace(/[-$,]/g, '');
						var checkDiscValue = Number(checkDis);
						if (checkDiscValue > 0) {
							dunkDiscArr.push(checkDiscValue);
							dunkCoupArr.push(couponCode);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			dunkhttp.open("POST", dunkinCouponApi, false);
			dunkhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			dunkhttp.setRequestHeader("Accept", "*/*");
			dunkhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// tirebuyer.com ////////////////
	if (CurrHref.indexOf("www.tirebuyer.com") > -1) {
		try {
			var totalAfterPromotions = document.getElementsByName("totalAfterPromotions")[0].value;
			var haspromo = document.getElementsByName("hasPromotions")[0].value;
			var hascompatible = document.getElementsByName("hasCompatibleVoucher")[0].value;
			var params = "hasPromotions=true&totalAfterPromotions=" + totalAfterPromotions + "&hasCompatibleVoucher=" + hascompatible + "&totalVouchers=0.0&couponcode=" + couponCode;
			var tirehttp = new XMLHttpRequest();
			tirehttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var tireObj = JSON.parse(this.responseText);
						var condition = tireObj.canCombineWithPromotions;
						if (condition == true) {
							let code = tireObj.couponCode
								tirebuyCouponArr.push(code);
							let saving = tireObj.couponCodeAmount;
							tirebuyDiscArr.push(saving);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			tirehttp.open("POST", tireCouponApi, false);
			tirehttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			tirehttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// cottonon.com ////////////////
	if (CurrHref.indexOf("cottonon.com") > -1) {
		try {
			var token = document.getElementsByName("csrf_token")[1].value;
			var params = "promoCode=" + couponCode + "&csrf_token=" + token + "";
			var cottononhttp = new XMLHttpRequest();
			cottononhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var cottObj = JSON.parse(this.responseText);
					var successmsg = cottObj.success;
					if (successmsg == true) {
						var cotthttp = new XMLHttpRequest();
						cotthttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								var cottObj1 = JSON.parse(this.responseText);
								var orderTotal = cottObj1.orderTotal;
								orderTotal = orderTotal.replace("US$", "");
								orderTotal = Number(orderTotal);
								cottononCoupArr.push(couponCode);
								cottononDiscArr.push(orderTotal);
							}
						};
						cotthttp.open("GET", cottononWalletApi, false);
						cotthttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
						cotthttp.send();
					}
				}
			};
			cottononhttp.open("POST", cottononCouponApi, false);
			cottononhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			cottononhttp.setRequestHeader("accept", "*/*");
			cottononhttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
			cottononhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// blair.com ////////////////
	if (CurrHref.indexOf("www.blair.com") > -1) {
		try {
			var grandTotalId = document.getElementById("estimated-grand-total").innerText.replace(/[$,]/g, '');
			var grandTotal = Number(grandTotalId);
			var params = "form_state=updatePromoCodeForm&delete=false&promoCode=" + couponCode + "";
			var blairhttp = new XMLHttpRequest();
			blairhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var blairObj = JSON.parse(this.responseText);
					var successmsg = blairObj.applied;
					if (successmsg == "true") {
						var blair1http = new XMLHttpRequest();
						blair1http.onreadystatechange = function () {
							if (this.readyState == 4) {
								try {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									var grandTotalId1 = doc.getElementById("estimated-grand-total").innerText.replace(/[$,]/g, '');
									var grandTotal1 = Number(grandTotalId1);
									var totalSave = grandTotal - grandTotal1;
									blairDiscArr.push(totalSave);
									blairCoupArr.push(couponCode);
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
								}
							}
						};
						blair1http.open("GET", CurrHref, false);
						blair1http.send(params);
					}
				}
			};
			blairhttp.open("POST", blairCouponApi, false);
			blairhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			blairhttp.setRequestHeader("accept", "text/html, */*; q=0.01");
			blairhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			blairhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// speckproducts.com ////////////////
	if (CurrHref.indexOf("www.speckproducts.com") > -1) {
		try {
			var speckhttp = new XMLHttpRequest();
			speckhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var speckObj = JSON.parse(this.responseText);
						var statusmsg = speckObj.status;
						var successmsg = speckObj.success;
						if ((successmsg == true) && (statusmsg == "OK")) {
							var applycoupons = speckObj.CouponCode;
							speckCoupArr.push(applycoupons);
							finalCode = speckCoupArr.join(", ");
							var savings = Number(document.getElementsByClassName("order-subtotal")[0].innerText.replace(/[ORDER SUBTOTAL $,]/g, ''));
							specksavings = (savings) - (speckObj.baskettotal);
							localStorage.setItem("specksavings", savings);
						}
						try {
							if (statusmsg == "COUPON_CODE_ALREADY_IN_BASKET") {
								var applycoupons = speckObj.CouponCode;
								speckCoupArr.push(applycoupons);
								finalCode = speckCoupArr.join(", ");
								var storagesavings = localStorage.getItem("specksavings");
								specksavings = (storagesavings) - (speckObj.baskettotal);
							}
						} catch (e) {
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			speckhttp.open("GET", speckCouponApi + couponCode + "&format=ajax", false);
			speckhttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// jimmyjazz.com ////////////////
	if (CurrHref.indexOf("jimmyjazz.com") > -1) {
		var jimmyhttp = new XMLHttpRequest();
		jimmyhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var jimmyObj = JSON.parse(this.responseText);
					var check = jimmyObj.promotion;
					if (check) {
						let totalSave = jimmyObj.totals.promotion;
						totalSave = Number(totalSave);
						if (totalSave > 0) {
							finalCode = jimmyObj.promotion.code;
							jimmyCoupArr.push(finalCode);
							jimmyDiscArr.push(totalSave);
						}
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		jimmyhttp.open("GET", "http://www.jimmyjazz.com/cart-request/cart/option?promotion_code=" + couponCode + "&toggle=1&option=promotion", false);
		jimmyhttp.send();
	}
	
	/////////////////// eyebuydirect.com ////////////////
	if (CurrHref.indexOf("www.eyebuydirect.com") > -1) {
		var params = "redeem_coupon=" + couponCode + "";
		var eyebuyhttp = new XMLHttpRequest();
		eyebuyhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var eyebuyObj = JSON.parse(this.responseText);
					let condition = eyebuyObj.status;
					if (condition == 'right') {
						let TotalSave = eyebuyObj.msg;
						let check = TotalSave.split(' ')[0];
						if (check == 'The') {
							TotalSave = TotalSave.split('for')[1].split('$')[1].split('.')[0];
							TotalSave = Number(TotalSave);
							if (TotalSave > 0) {
								finalCode = eyebuyObj.data.inputField.usingCoupon;
								eyebuyCoupArr.push(finalCode);
								eyebuyDiscArr.push(TotalSave);
							}
						}
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		eyebuyhttp.open("POST", eyebuyCouponApi, false);
		eyebuyhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		eyebuyhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
		eyebuyhttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
		eyebuyhttp.send(params);
	}
	
	/////////////////// ashford.com ////////////////
	if (CurrHref.indexOf("www.ashford.com") > -1) {
		try {
			var dynamicSession = document.getElementById('continueShoppingForm').getElementsByTagName("input")._dynSessConf.value;
			var saving;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.useForwards=true&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.useForwards=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.applyCouponSuccessURL=%2Fcart%2Fjson%2FcartContents_new.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.applyCouponSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.applyCouponErrorURL=%2Fcart%2Fjson%2FcartContents_new.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.applyCouponErrorURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponCode=" + couponCode + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponCode=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fcart%2Fgadgets%2FshoppingCartForms.jsp.applyCouponForm";
			var ashfordhttp = new XMLHttpRequest();
			ashfordhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var ashfordSavinghttp = new XMLHttpRequest();
					ashfordSavinghttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							try {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								savingClass = doc.getElementsByClassName("checkout_text_color_red")[4];
								if (savingClass) {
									saving = Number(savingClass.innerText.replace(/[-$,]/g, ""));
									if (saving > 0) {
										ashfordCoupArr.push(couponCode);
										ashfordDiscArr.push(saving);
									}
								}
							} catch (e) {
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
							}
						}
					}
					ashfordSavinghttp.open("GET", CurrHref, false);
					ashfordSavinghttp.send();
					var removeParams = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.useForwards=true&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.useForwards=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.removeCoupon=&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.removeCoupon=+&_DARGS=%2Fcart%2Fgadgets%2FshoppingCartForms.jsp.removeCouponForm";
					var ashfordRemovehttp = new XMLHttpRequest();
					ashfordRemovehttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					}
					ashfordRemovehttp.open("POST", ashfordCouponRemApi, false);
					ashfordRemovehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
					ashfordRemovehttp.send(removeParams);
				}
			}
			ashfordhttp.open("POST", ashfordCouponApi, false);
			ashfordhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			ashfordhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// rockbottomgolf.com ////////////////
	if (CurrHref.indexOf("www.rockbottomgolf.com") > -1) {
		var params = "couponcode=&action=applycoupon&code=" + couponCode,
		saving,
		savingLength;
		var rockbottomgolfhttp = new XMLHttpRequest();
		rockbottomgolfhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var rockObj = JSON.parse(this.response);
					if (rockObj.data.status == "success") {
						var rockSavinghttp = new XMLHttpRequest();
						rockSavinghttp.onreadystatechange = function () {
							if (this.readyState == 4) {
								try {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									savingLength = doc.getElementsByClassName("cart-total-value").length;
									if (savingLength > 3) {
										saving = Number(doc.getElementsByClassName("cart-total-value")[1].innerText.replace(/[-$,]/g, ""));
										if (saving > 0) {
											rockbottomgolfCoupArr.push(couponCode);
											rockbottomgolfDiscArr.push(saving);
										}
									}
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
								}
							}
						}
						rockSavinghttp.open("GET", CurrHref, false);
						rockSavinghttp.send();
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		rockbottomgolfhttp.open("POST", rockbottomgolfCouponApi, false);
		rockbottomgolfhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		rockbottomgolfhttp.send(params);
	}
	
	/////////////////// shopko.com ////////////////
	if (CurrHref.indexOf("www.shopko.com") > -1) {
		try {
			var grandTotalId = document.getElementById("estimated-grand-total").innerText.replace(/[$,]/g, '');
			var grandTotal = Number(grandTotalId);
			var params = "form_state=updatePromoCodeForm&promoCode=" + couponCode + "&delete=false";
			var shopkohttp = new XMLHttpRequest();
			shopkohttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var shopkoObj = JSON.parse(this.responseText);
					var successmsg = shopkoObj.applied;
					if (successmsg == "true") {
						var shop1http = new XMLHttpRequest();
						shop1http.onreadystatechange = function () {
							if (this.readyState == 4) {
								try {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									var grandTotalId1 = doc.getElementById("estimated-grand-total").innerText.replace(/[$,]/g, '');
									var grandTotal1 = Number(grandTotalId1);
									var totalSave = grandTotal - grandTotal1;
									shopkoDiscArr.push(totalSave);
									shopkoCoupArr.push(couponCode);
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
								}
							}
						};
						shop1http.open("GET", CurrHref, false);
						shop1http.send(params);
					}
				}
			};
			shopkohttp.open("POST", shopkoCouponApi, false);
			shopkohttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			shopkohttp.setRequestHeader("accept", "*/*");
			shopkohttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			shopkohttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// shoesforcrews.com ////////////////
	if (CurrHref.indexOf("www.shoesforcrews.com") > -1) {
		try {
			var params = "method=setKeyCode&KeyCode=" + couponCode + "";
			var crewshttp = new XMLHttpRequest();
			crewshttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var crews1http = new XMLHttpRequest();
					crews1http.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							try {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								var x = doc.getElementById("ordersummary").getElementsByTagName("tr");
								for (var i = 0; i < x.length; i++) {
									if (x[i].innerText.includes("Promotion")) {
										var totalSave = x[i].getElementsByTagName("td")[1].innerText.replace(/[-$,]/g, '');
										totalSave = Number(totalSave);
										crewsDiscArr.push(totalSave);
										crewsCoupArr.push(couponCode);
									}
								}
							} catch (e) {
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
							}
						}
					};
					crews1http.open("GET", CurrHref, false);
					crews1http.send(params);
				}
			};
			crewshttp.open("POST", shoescrewsCouponApi, false);
			crewshttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			crewshttp.setRequestHeader("accept", "*/*");
			crewshttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			crewshttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// bhcosmetics.com ////////////////
	if (CurrHref.indexOf("www.bhcosmetics.com") > -1) {
		try {
			if (document.getElementsByClassName("field__input-btn btn btn--disabled")[0]) {
				document.getElementsByClassName("field__input-btn btn btn--disabled")[0].disabled = false;
			}
			document.getElementById("checkout_reduction_code").value = couponCode;
			setTimeout(function () {
				document.getElementsByClassName("field__input-btn btn")[0].click();
			}, 500)
			if (document.getElementsByClassName("applied-reduction-code__information")[0]) {
				couponCode = document.getElementsByClassName("applied-reduction-code__information")[0].innerText;
				totalSave = document.getElementsByClassName("total-line total-line--reduction ")[0].getElementsByClassName("order-summary__emphasis")[0].innerText.replace(/[-$,]/g, '').trim();
				totalSave = Number(totalSave);
				if (totalSave) {
					bhcoCoupArr.push(couponCode);
					bhcoDiscArr.push(totalSave);
				}
			}
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// destinationmaternity.com ////////////////
	if (CurrHref.indexOf("destinationmaternity.com") > -1) {
		try {
			var session = document.getElementById('continue-shopping').action.split('=')[1];
			var destihttp = new XMLHttpRequest();
			destihttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var destiObj = JSON.parse(this.responseText);
						var check = destiObj.status;
						if (check == 'OK') {
							var destihttp1 = new XMLHttpRequest();
							destihttp1.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {
									try {
										var parser = new DOMParser();
										var doc = parser.parseFromString(this.responseText, "text/html");
										let TotalSave = doc.getElementsByClassName('value bfx-price')[0].innerText.replace(/[-$,()]/g, '');
										TotalSave = Number(TotalSave);
										destiDiscArr.push(TotalSave);
										destiCoupArr.push(couponCode);
									} catch (e) {
										Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
									}
								}
							};
							destihttp1.open("GET", CurrHref, false);
							destihttp1.send();
							var params1 = "dwfrm_cart_shipments_i0_items_i0_quantity=2&dwfrm_cart_coupons_i0_deleteCoupon=Remove&dwfrm_cart_couponCode=&dwfrm_cart_updateCart=dwfrm_cart_updateCart"
								var destihttp2 = new XMLHttpRequest();
							destihttp2.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {}
							};
							destihttp2.open("POST", destinRemCouponApi + session, false);
							destihttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
							destihttp2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
							destihttp2.send(params1);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			destihttp.open("GET", destinCouponApi + couponCode, false);
			destihttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// christopherandbanks.com ////////////////
	if (CurrHref.indexOf("www.christopherandbanks.com") > -1) {
		try {
			var session = document.getElementById('continue-shopping').action.split('=')[1];
			var christohttp = new XMLHttpRequest();
			christohttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var christoObj = JSON.parse(this.responseText);
						var check = christoObj.status;
						if (check == 'OK') {
							var christohttp1 = new XMLHttpRequest();
							christohttp1.onreadystatechange = function () {
								if (this.readyState == 4) {
									try {
										var parser = new DOMParser();
										var doc = parser.parseFromString(this.responseText, "text/html");
										let TotalSave = doc.getElementsByClassName('rowcoupons')[0].getElementsByClassName('value')[1].innerText.replace(/[-$,()]/g, '');
										TotalSave = Number(TotalSave);
										christoDiscArr.push(TotalSave);
										christoCoupArr.push(couponCode);
									} catch (e) {
										Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
									}
								}
							};
							christohttp1.open("GET", CurrHref, false);
							christohttp1.send();
							var params1 = "dwfrm_cart_shipments_i0_items_i0_quantity=4&dwfrm_cart_coupons_i0_deleteCoupon=delete&dwfrm_cart_updateCart=dwfrm_cart_updateCart"
								var christohttp2 = new XMLHttpRequest();
							christohttp2.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {}
							};
							christohttp2.open("POST", christoRemCouponApi + session, false);
							christohttp2.setRequestHeader("content-type", "application/x-www-form-urlencoded");
							christohttp2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
							christohttp2.send(params1);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			christohttp.open("GET", christoCouponApi + couponCode, false);
			christohttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// alibris.com ////////////////
	if (CurrHref.indexOf("www.alibris.com") > -1) {
		try {
			var rmvparams = "deleteCoupon=true";
			var alibrisrmvhttp = new XMLHttpRequest();
			alibrisrmvhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var params = "applyCoupon=true&couponCode=" + couponCode;
						var alibrishttp = new XMLHttpRequest();
						alibrishttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								try {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									var applycode = doc.getElementsByClassName("coupon-applied")[0];
									if (applycode) {
										finalCode = couponCode;
										alibrisCoupArr.push(finalCode);
										var discammount = Number(doc.getElementsByClassName("subtotal-price")[0].innerText.replace(/[$,"]/g, ''));
										alibrisDiscArr.push(discammount);
									}
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
								}
							}
						};
						alibrishttp.open("POST", alibrisCouponApi, false);
						alibrishttp.setRequestHeader("content-type", " application/x-www-form-urlencoded");
						alibrishttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
						alibrishttp.send(params);
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			}
			alibrisrmvhttp.open("POST", alibrisCouponApi, false);
			alibrisrmvhttp.setRequestHeader("content-type", " application/x-www-form-urlencoded");
			alibrisrmvhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			alibrisrmvhttp.send(rmvparams);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// clarisonic.com ////////////////
	if (CurrHref.indexOf("www.clarisonic.com") > -1) {
		try {
			var disPrice,
			saving;
			var currentSavingClass = document.getElementsByClassName('m-cart__total-price')[0].innerText.replace(/[-$,]/g, '');
			var currentPrice = Number(currentSavingClass);
			var clarisonichttp = new XMLHttpRequest();
			clarisonichttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var disPriceClass = doc.getElementsByClassName('m-cart__total-price')[0].innerText.replace(/[-$,]/g, '');
						var disPrice = Number(disPriceClass);
						if (doc.getElementsByClassName("value m-cart__promo-code-cartcoupon-value")) {
							saving = currentPrice - disPrice;
							if (saving > 0) {
								clarisonicCoupArr.push(couponCode);
								clarisonicDiscArr.push(saving);
							}
						}
						var clarisoniRchttp = new XMLHttpRequest();
						clarisonichttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						clarisoniRchttp.open("GET", clarisonicRCouponApi + couponCode + "&format=ajax", false);
						clarisoniRchttp.send();
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			clarisonichttp.open("GET", clarisonicCouponApi + couponCode + "&format=ajax", false);
			clarisonichttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// cafepress.com ////////////////
	if (CurrHref.indexOf("www.cafepress.com") > -1) {
		try {
			var viewState = document.getElementById("__VIEWSTATE").value;
			var viewStateGenerator = document.getElementById("__VIEWSTATEGENERATOR").value;
			var eventValidation = document.getElementById("__EVENTVALIDATION").value;
			var cafeCashValue = document.getElementById("cafeCashValue").value;
			var cafeCashL10nValue = document.getElementById("cafeCashL10nValue").value;
			var gcValue = document.getElementById("gcValue").value;
			var gcL10nValue = document.getElementById("gcL10nValue").value;
			var minShippingId = document.getElementById("minShippingId").value;
			var pmChecked = document.getElementById("pmChecked").value;
			var BillCountry = document.getElementById("BillCountry").value;
			var ShipCountry = document.getElementById("ShipCountry").value;
			var countdown = document.getElementsByName("countdown")[0].value;
			var shippingradio = document.getElementsByName("shipping-radio")[0].value;
			var ShippingTableOption = document.getElementById("ShippingTableOption").value;
			var PayPageId = document.getElementsByName("LitlePayPage$requestPayPageId")[0].value;
			var ReportGroupId = document.getElementsByName("LitlePayPage$requestReportGroupId")[0].value;
			var MerchantTxnId = document.getElementsByName("LitlePayPage$requestMerchantTxnId")[0].value;
			var PayPageUrl = document.getElementsByName("LitlePayPage$requestPayPageUrl")[0].value;
			var params = "__VIEWSTATE=" + viewState + "&__VIEWSTATEGENERATOR=" + viewStateGenerator + "&__EVENTVALIDATION=%2FwEdAOkBjkzdio2E5DppIt0oT3cZU9qyhxJlcBXzwNkBlvLgMQ56XW5A8jViXnzBiORLsvq7TmzENSEY9CcpUuJ%2FkKbQWg7UmKwx9NH68HbI2TVBfrt7tANCH4hkc%2BufGN3MXQZIC8UaUa5rRwG0LWq8TQ0AX5laWHzWMHsEpGBa4NGdwUwTrRPlQhJse%2Bo2BAQxMaogl2Ogwuqm%2FvKVqIWaJqVO%2FTH2z7gY7m7pKKZfLTF8R1nL2fqrqz4rMxXZJ0s1ZGzjJPus0G%2BTTA%2FH2RhKUs%2F2FMxHahCzXucjtKpNDzxN4l7nhpceRTZL0wcw7JUVXCOGdrizS5aW4Snsxo1%2BZPApuKt%2BlgOZspypcDRsS4nGPvaAk6G%2F2Z6Imv2GFFY5O9LUld3hNo8runvVnAkfJ4n9hkuSnY866wI6WqWbiBXdf9diyvGjDgXf0JclmZaIkLcEtyZ6fKhxXnvpAhtiSuiTxxUE77kpQ66lizqiMLBK14ZXzLGkFQGssVcLbtyHeZ6n6YaYEv8ElwnmdImml1Qwi4qL4KrDGq64t4jXGJPzhbXL3CS5CMK9xxygSU4V23%2BWsDRXHegUwm28rKxo1RIAMMlmrk1weh4TbEQuvkkBOfnR0M6JByBU0uw%2Bh%2FhH8wX6TOGRz6DlPpi51NBnYnL1i1R8R7WuPMTeSp%2BMECpH9%2BGw00iXLNLTdl6PxlQ7I%2B%2FZZ%2BQCBvzb0c%2FlasxvsyxvLVPQyUAN%2B6lXFoMPeVH6riQ0DIs%2BqbklaQUL7Rhs%2BNqTLL0iPX5zQIbN6rqeInDMX%2FQqqR5EMOu7ifC4PAAExCaE%2BEyZq5RyT4yrimwDZbR%2FDAdngBukfPeKY2t9kkEvsqXkTIU9GZEMS9YTNHiaMNe435v%2FXM0ei8RWiWn9ZdZdPiLYTP1vGL3Z1vEcRhj5RA6De77sj%2FRhL6E%2FxNiTNoDUb07h87AK%2Baj72PespnM2EQqqYJFLJmnLJn9%2FJUPfHhsr1xzBinkMPzGutJ%2BM%2FXET9bLVjMu5Vv0cGE%2BT4r92rhfPS%2BzJZnOMsIZK0ntUNlZFnysKSbxW0Uaj%2Bzgv7vZtVC5fu2l3Wf718fvpE34%2FKcRdyW1YxaWmxjI0DeKgPPDz1j3AzGX2MpWg1M9MInrPkRYQI6EvHcbjrhShVMMFfxZ24%2BP1iHqvd2DCVsGath%2Fw548u%2F0u9ZpC2swnFAuoyDsmZCjxy3TcdFfYeRxwzxbzqBHSdojAhnfYY6e16Lb0H2aZ9IzqQJVlxEZiJwf0hcdJyYeqplnl3rWuGQfw6CUMnoDnzGGJ%2BwfPP9YdPOXqukZVPL3ZWFhi4hcHz5x0pmUO2SqdyCKdOjeXOD%2FouL8%2F5J5w1AzBqGjspmGRfdsUHsamHN6XgshxUg%2BbfTVY9NHFOLUE%2FRXlKgC%2FptF9WgZeVdY5EDe%2B8yqGxiGpIcG37aj4tUd%2F10gSWGnllEdrgByv4IpfkGQ4tcCnH%2F%2BsCCcBUCITkUQAS31lxJwevzRa%2FJ6yvk7e3Suvsgf2waNg6kDDaMicgZJokEpuF3crzr3DJhdne08lAuAIOKFHOTfiERy4ZAkd8PCX5SiozUmIEzuDrmY9SqXAE1z6HypI22tc9BswgseFGDgCnbhlpNgoqCvzSwZwL4fB0S7CsP%2BgXOaPW2Ss330xuyt%2BruK2fsRWN0OMaiqb42jRhcaLQ%2FS7edz%2BILZDxdwcZ30w71r%2B1pQt6CpHmS%2FfQ%2Bx4YzxAPMysfMGJoLejKqRk%2FzARsGC0%2BAw0c%2FwCCE0kkdKfQQW6k0RGNi9UEIGQZ7D5T2nF1tISiZw4y5fVbCzOT0eg6rfBGZ00As0106DENJelI8vgX%2BcR308mNk9QGsYYQLBqjrz8F93XQC%2FBHeYWyVsVHHnchh16zx9evt7dZ%2FcCrvWhClwUpSdSxJUMMkWsJ5W6URuB2W2Cc%2FXL6Rry1o2PTw4axE6%2BWSqSBWONsqXwSyBxzNFBUvENsxsdx693xACbzLGTInBJtlzPXui6bnc8l2RhPglfAZUAQcFZ9LY9MZ9pFyH0SKRlDNxoXJyc%2B%2Bk8x%2Bu1wJdtvEIK4yW9O0qcOfSvj3q52C8Nfxkc8hw%2FoLnKm%2FVKrsS9VRss5QhDsAyKxzyo%2BYb6YKLnJeCZtqxLxR2WX%2BzMjaQKx2rr3gxuCE5jWVKgNvpOgXl6XcQyaKdzUa7%2Fdg9PhyEb2PP8zXJL5dxIltTCgTso9mFM5p9s%2FR0Y2fpbVrEGoD0fg9GFGf8l9heCG7ZgBiwJI2l7ZgnCQj7YMwWZiVW%2BYuf9b7wmWhJXMCiuGppFemUnEPBqLds3mUtiLVVLj9eEtxTGl8hSgYwLBqxRlqG2DS6SRyfXS9TkNMjtsZPhEvF7h2Lhwg61wIKV4nZbIbbBBxUMk%2FR0Y4%2FPiFUu%2FKkdPXWgog2%2BAkYoZIG3hn0osb%2F%2B8lkdxPe9Wf4JPFl5YdM7fmsESILAsUaiChbO%2FcNfM4OwwxLFIjDcpPu4OkUblDVZlZKo8tDJu%2BIl0IhsEaVUEwqmIWxcGUlZ%2F57%2BtyY2KGWnAWm9Njat9RKsYoVxKwV3K%2BTgFVZtBsiUFv1m0Vj4ROnrc%2FtcqGU%2B0ZNgP5GEO4NdfkTlDjXvQ4Si4Xl1Ti2ENVOkbDm3m4LBRWblqtbDBle57m%2Foc%2FGdhI9pSajARNW9BXOeaRSZfH8ZR28K8qzvUwmlpMx3zHvdMescXKn%2BuIYrjvMHwUkZnTRYMAUob12ehxkW6pwWsGm8VyDixqTwbojo1m5aQMR5F0DFvDdqUgy%2FpViCXXXXJBAiJnM%2B3lwWmR6dITrIa4r7oxWSTfXcZfB1evWohKgGiXQmCGrCrbGF7807%2BBRsz2TDlgrfHsiR9sfp7u0%2Fnn2D6CvBLHMtY1veoOj%2BWlTHrZJNPtzZ4lb75%2Bz55mU5fIekyHKAf4AcRHZ%2BiyKEbal3jlo1C00TteePKaATfRG%2FH%2Bp0oun7PEPrQr%2FrQHGb2Pejo4i7cHtYJI4Rhlkdzxem%2FpKbYAkqxTi4pKMstf1nNXs9dQgP6NrHBh%2F%2B325BpmbH2pQ%2FLaBO8BJZlFThp%2FRQgNssIEUahF631bs%2B2BJhXFxm5t4YRBT%2BO%2F8kvUL1HtUfIefz8n6mwBDb5ZZ8Xo3moB7fIOdUI5EqFz68NYH9%2BmG5lRhc302egijPr08syVUqOP5FOLuQSsmIvyGmXBI12YlRwgFnRIqp0xrkqIUV22RttVp5w5H%2FlmyCVWV2afKP71d%2B%2BzVbDPukXi6DHCMwddjA9%2FfDtzvbDfD57EFLn0pOUAmPrp8hASGiRvbvvx31SnDkDLinOTYolU%2Fk%2FwZD27VXtnYRdieHUQ%2BZrQzxCYMaMlzJlgmRjKSrbRjGGtodnbxnk5mTafbnJsIM3dpepF9b6sowANoeNmtJcCv6v9bZaRU349hGujHdOlvoYAiM2WSAiLayH8hYjGnCiu2sWX3QZqG455sLNK4chuNO%2FyyANTRm9gThMLUc5mzFP67CTO6f0aEZEpm6YIQ1zL9dR66yM9eFIR%2F%2BXPa%2BjWHcHmqu30NU1Di5CEckHtNKdw411HvuP3K2m8hRApdKSeYrCJ5wvax7a%2Blucmj8gJrdk91LvsrIi4L6Nn0g3pQS1ypAUN2X%2Bwd8%2FPdMrjKTKQzHP%2BW2aGr2a9DnAIUbQDKc7si7L81AMnQkxVdB9C9WNendRoAHp24ViCQEVXdb%2F7XwPBlu%2Bpr1yGkknEF4ym7%2BmcAyPNnIyV7mwVGiiLO00wTdrPJlvHfarCLi3gdIVrO9grklxRuyZrBy28deIQ0K44ZwJ6K3OLAOXIAht7wZYlHHCX8lZsvzGd8Mw%2FqOzN0GXV9GUOjDST0hM8C8TAl4nXA8T2sKIO745ndidrsvfdAUMSNJAIW6PEzpiSwJLbc%2FRF9bCgWiR81B%2BUK4NfZzt8fEdXlofucp7UFgfiZYB%2FJ6gp23gzApL5YHe5u9VEySMqGX6HAsWvpx3Q3seyuv4aU8y0ssUy32L8BCsbJSFIm266srhLMfUkGE1%2FIKCXpTNA8wcFwND4y3j2M831VesTYfEYgTuEtM9z039tGj9Iia%2FfqiuHTfILla5bPV2leYISkUk8aUD%2BRUDHZnQIPDFN7Q0s1CN5UFSzjOBo90ZJwATveA9ZMaHzl59322GJiZ%2FAzIURn3ozvI9sW6GDLB6XJNtJkCxpA8IWXvdc60q8kcMTlv9UlTWJpQ6rtV85Idy%2F9Mde975gDkqsETGNHA8WZDkHvEFQ2OTXG4pcxKBK6dHKKFtHb0v1Mnzx1O%2BR%2BVV%2FpwLmL1LpxQmKvihnUkK6AZvfC4Uzcz%2Fuu8GeqsmgiwvwUky7%2F6Mwb%2BUVFZ2mcDgW3T3IrpLa9brBAecyPjPgyolKC6Mb03p5QMy70YZrG9MWJqQYSWYtandVEbI2edyHdX9ARmSIMiJoV8YxyoimtE2PDfB70jYCIampsMpqzxriTspHmodJiveCtGVP4%2B7XscVwUU84eI%2FNSVyWlw6%2FfXEYUybCv3%2FI2iweAdY6ybBtO3Zz7W2OVIqY7A5cuySdxh7VcGUV2iek7SE2owdsb%2BI3x8Mip%2FzuilwKG7Q5xtS7Dr7hrEztNaYX0bcXSNz87NtbuH4AH0N9%2BD3WkxwdZUh6v6pDbQ36WPbnl4OFCEPkzwa2xIhsX5bATPs85%2BZrlVTIOcvc9wPA%2FPBx0EwjW7WRtS%2BYRMbrRF2xl5vCBcLHywwuHxZreaPbLoT5ia5VhQT3wf%2F9N5L1mdceKWw3ocNbaAxbyEE%2B%2B8TUc9aUi2A0LsTK2DQ4ELRx4R9y%2BLrNJNJjrPZj3JgDDKdKbBiaO5w7KO6OEHY6UwQnoXY65S3Do%2FFAEGTA%2FrQqgjowATkR%2BSyfArLgDJc%2FwCfaadKUoloyfPTkbJuvFLS%2BVqMEA89FZdCjmV40xKdQqOqWb912sIfsi7hN4hiKMfk5hTBN8PK8oLglx2EAYhxNCwJ3tGIu2P0xH68VMteywqFBCwVBLJU0FICBHQ0RpkgSZA3Jw%3D%3D&IsEdit=&cafeCashValue=" + cafeCashValue + "&cafeCashL10nValue=" + cafeCashL10nValue + "&gcValue=" + gcValue + "&gcL10nValue=" + gcL10nValue + "&minShippingId=" + minShippingId + "&pmChecked=" + pmChecked + "&BillName=&BillingCompanyName=&BillCountry=" + BillCountry + "&BillStreet1=&BillStreet2=&hfCurrentRedoClassification=&BillCity=&BillState=&BillZip=&BillPhone=&BillEmail=&cbStoreSpecial=on&ShipDestination=billaddress&ShipName=&ShippingCompanyName=&ShipCountry=" + ShipCountry + "&ShipStreet1=&ShipStreet2=&ShipCity=&ShipState=&ShipZip=&GiftMessage=&countdown=" + countdown + "&shipping-radio=" + shippingradio + "&ShippingTableOption=" + ShippingTableOption + "&PaymentMethod=PayByCC&maskedCreditCard=&ccExp%24MonthDrop=06+%28June%29&ccExp%24YearDrop=2018&txtCoupon=" + couponCode + "&LitlePayPage%24requestPayPageId=" + PayPageId + "&LitlePayPage%24requestReportGroupId=" + ReportGroupId + "&LitlePayPage%24requestMerchantTxnId=" + MerchantTxnId + "&LitlePayPage%24requestPayPageUrl=" + PayPageUrl + "&LitlePayPage%24responsePayPageRegistrationId=&LitlePayPage%24responseBin=&LitlePayPage%24responseCode=&LitlePayPage%24responseMessage=&LitlePayPage%24responseTime=&LitlePayPage%24responseType=&LitlePayPage%24responseTransactionId=&LitlePayPage%24payPageResponseTime=&LitlePayPage%24payPageSubmit=false&btnApplyCoupon=Apply";
			var cafehttp = new XMLHttpRequest();
			cafehttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var couponamountId = doc.getElementById('couponamount');
						if (couponamountId) {
							var saving = couponamountId.innerText.replace(/[-$,]/g, '');
							saving = Number(saving);
							if (saving > 0) {
								cafepressCoupArr.push(couponCode);
								cafepressDiscArr.push(saving);
							}
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			cafehttp.open("POST", cafepressCouponApi, false);
			cafehttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			cafehttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			cafehttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// catherines.com ////////////////
	if (CurrHref.indexOf("www.catherines.com") > -1) {
		try {
			var dynamicSesion = document.getElementById('checkout-form').getElementsByTagName('input')[1].value;
			var params = "Action=Cart.validatePromo&sessionConfirmationNumber=" + dynamicSesion + "&promoCode=" + couponCode;
			var catherineshttp = new XMLHttpRequest();
			catherineshttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var jsonObj = JSON.parse(this.response);
					if (!jsonObj.data.promoCode.errorMessage) {
						var saving = jsonObj.data.cartSummary.totalSavings;
						savingNum = Number(saving);
						if (savingNum > 0) {
							catherinesDiscArr.push(savingNum);
							catherinesCoupArr.push(couponCode);
						}
					}
				}
			};
			catherineshttp.open("POST", catherinesCouponApi, false);
			catherineshttp.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			catherineshttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// carsons.com ////////////////
	if (CurrHref.indexOf("www.carsons.com") > -1) {
		try {
			document.getElementById("promoCode").value = couponCode;
			document.getElementById("applyPromo").click();
			if (document.getElementsByClassName("allPromotion appliedPromotion")[0]) {
				finalCode = document.getElementsByClassName("allPromotion appliedPromotion")[0].innerText.replace(/[Coupon has been applied   Remove,]/g, ''); ;
			}
			document.getElementById("WC_OrderSubmitForm_CouponCode_Link").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// 1800contacts.com ////////////////
	if (CurrHref.indexOf("www.1800contacts.com") > -1) {
		var params = '{"couponCode":"' + couponCode + '"}';
		var contactshttp = new XMLHttpRequest();
		contactshttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var jsonObj = JSON.parse(this.response);
				var couponCodeVal = jsonObj.result.cart.coupons.couponCode;
				if (couponCodeVal) {
					var saving = jsonObj.result.cart.coupons.priceOff.replace(/[-$,]/g, '');
					var savingNum = Number(saving);
					if (savingNum > 0) {
						contactsDiscArr.push(savingNum);
						contactsCoupArr.push(couponCode);
					}
				}
			}
		};
		contactshttp.open("POST", contacts1800CouponApi, false);
		contactshttp.setRequestHeader("accept", "application/json, text/plain, */*");
		contactshttp.setRequestHeader("content-type", "application/json;charset=UTF-8");
		contactshttp.send(params);
	}
	
	/////////////////// mypillow.com ////////////////
	if (CurrHref.indexOf("www.mypillow.com") > -1) {
		var params = "remove=0&coupon_code=" + couponCode + "";
		var pillowhttp = new XMLHttpRequest();
		pillowhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var checkCondition = doc.getElementsByClassName('action cancel primary')[0];
					if (checkCondition) {
						var params1 = '{"addressInformation":{"address":{"countryId":"US","regionId":null,"postcode":null,"extension_attributes":{"advanced_conditions":{"payment_method":null,"billing_address_country":null}}}}}';
						var pillowhttp1 = new XMLHttpRequest();
						pillowhttp1.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								try {
									var pillowObj = JSON.parse(this.responseText);
									var code = pillowObj.coupon_code;
									if (code) {
										pillowCoupArr.push(code);
										var totalSave = pillowObj.discount_amount;
										totalSave = totalSave.toString().replace(/[-$,]/g, '');
										totalSave = Number(totalSave);
										pillowDiscArr.push(totalSave);
									}
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
								}
							}
						};
						pillowhttp1.open("POST", "https://www.mypillow.com/rest/default/V1/guest-carts/2da6a23998c08df82430278ca2426f69/totals-information", false);
						pillowhttp1.setRequestHeader("content-type", "application/json");
						pillowhttp1.setRequestHeader("accept", "*/*");
						pillowhttp1.setRequestHeader("x-requested-with", "XMLHttpRequest");
						pillowhttp1.send(params1);
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		pillowhttp.open("POST", pillowCouponApi, false);
		pillowhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		pillowhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
		pillowhttp.send(params);
	}
	
	/////////////////// barenecessities.com ////////////////
	if (CurrHref.indexOf("www.barenecessities.com") > -1) {
		var params = "action=applyPromo&code=" + couponCode + "";
		var barenhttp = new XMLHttpRequest();
		barenhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var barenObj = JSON.parse(this.responseText);
					var couponCondition = barenObj.status.StatusCode;
					if (couponCondition == 'Success') {
						var discCondition = barenObj.bagModel.Summary.PromoDetails[0];
						if (discCondition) {
							let Code = discCondition.promoCode;
							barenCoupArr.push(Code);
							let Save = discCondition.promoSavings.replace(/[-' '$,]/g, '');
							Save = Number(Save);
							barenDiscArr.push(Save);
						}
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		barenhttp.open("POST", barenCouponApi, false);
		barenhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		barenhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
		barenhttp.setRequestHeader("x_csrf_token", "18b3d02c-ab58-4153-87bf-b19f1df5c472");
		barenhttp.send(params);
	}
	
	/////////////////// naturalizer.com ////////////////
	if (CurrHref.indexOf("www.naturalizer.com") > -1) {
		var params = "RewardsNumber=&X-Requested-With=XMLHttpRequest&PromoCode=" + couponCode + "";
		var naturalhttp = new XMLHttpRequest();
		naturalhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var checkCondition = doc.getElementsByClassName('summary-item').length;
					if (checkCondition == 3) {
						let Code = couponCode;
						naturalCoupArr.push(Code);
						let totalSave = doc.getElementsByClassName('right discount-text')[0].innerText.replace(/[()$,]/g, '');
						totalSave = Number(totalSave);
						naturalDiscArr.push(totalSave);
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		naturalhttp.open("POST", naturalCouponApi, false);
		naturalhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		naturalhttp.send(params);
	}
	
	/////////////////// bodenusa.com ////////////////
	if (CurrHref.indexOf("bodenusa.com") > -1) {
		try {
			var totalPrice = document.getElementById("shoppingBagTotalPrice").innerText.replace(/[-$,]/g, '');
			totalPrice = Number(totalPrice);
			var bodenuhttp = new XMLHttpRequest();
			bodenuhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var bodenusahttp = new XMLHttpRequest();
					bodenusahttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							try {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								var disPriceClass = doc.getElementById("shoppingBagTotalPrice").innerText.replace(/[-$,]/g, '');
								var disPrice = Number(disPriceClass);
								var saving = totalPrice - disPrice;
								if (saving > 0) {
									bodenusaCoupArr.push(couponCode);
									bodenusaDiscArr.push(saving);
								}
							} catch (e) {
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
							}
						}
					};
					bodenusahttp.open("GET", CurrHref, false);
					bodenusahttp.send();
				}
			};
			bodenuhttp.open("GET", "https://checkout.bodenusa.com/en-US/Offer-Code?code=" + couponCode + "&emptyCodeInvalid=true&_=1528275924404", false);
			bodenuhttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// musiciansfriend.com ////////////////
	if (CurrHref.indexOf("www.musiciansfriend.com") > -1) {
		try {
			var dynamicSession = document.getElementsByName('_dynSessConf')[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + couponCode.toLowerCase() + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=true&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponrSuccessURL=%2Fcart&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponrSuccessURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=%2Fcart&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&_DARGS=%2Fcrt%2Fincludes%2Fforms%2FapplyCoupon.jsp.couponForm";
			var musicianhttp = new XMLHttpRequest();
			musicianhttp.onreadystatechange = function () {
				try {
					if (this.readyState == 4 && this.status == 200) {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var checkCondition = doc.getElementsByClassName('coupon').length;
						if (checkCondition > 0) {
							var Code = doc.getElementsByClassName('coupon')[0].getElementsByClassName('coupon')[0].getAttribute('rel');
							musicianCoupArr.push(Code);
							let totalSave = doc.getElementsByClassName('coupon')[0].innerText.split(' ')[1].replace(/[-"$,]/g, '');
							totalSave = Number(totalSave);
							musicianDiscArr.push(totalSave);
						}
						var removeparams = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + Code + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.removeCoupon=true&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.removeCoupon=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.removeCouponSuccessURL=%2Fcko%2Fpayment.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.removeCouponSuccessURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.removeCouponErrorURL=%2Fcko%2Fpayment.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.removeCouponErrorURL=+&_DARGS=%2Fcrt%2Fincludes%2Fforms%2FremoveCoupon.jsp.removeCouponForm"
							var removehttp = new XMLHttpRequest();
						removehttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						removehttp.open("POST", musicianRemCouponApi, false);
						removehttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
						removehttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
						removehttp.send(removeparams);
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			};
			musicianhttp.open("POST", musicianCouponApi, false);
			musicianhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			musicianhttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			musicianhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// scrubsandbeyond.com ////////////////
	if (CurrHref.indexOf("www.scrubsandbeyond.com") > -1) {
		try {
			setTimeout(function () {
				if (document.getElementsByClassName("code-applied")[0]) {
					var removecoupon = document.getElementsByClassName("code-applied")[0].getElementsByTagName("strong")[0].innerText;
				}
				var rmvparams = "remove=1&x=" + removecoupon + "&coupon_code=" + removecoupon;
				var scrubrmvhttp = new XMLHttpRequest();
				scrubrmvhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						netammount = Number(doc.getElementById("shopping-cart-totals-table").getElementsByTagName("tfoot")[0].getElementsByTagName("td")[1].getElementsByClassName("price")[0].innerText.replace(/[$,]/g, ''));
						try {
							var params = "remove=0&x=" + couponCode + "&coupon_code=" + couponCode;
							var scrubhttp = new XMLHttpRequest();
							scrubhttp.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									if (doc.getElementsByClassName("code-applied")[0]) {
										scrubCoupArr.push(couponCode);
										var discammount = Number(doc.getElementById("shopping-cart-totals-table").getElementsByTagName("tfoot")[0].getElementsByTagName("td")[1].getElementsByClassName("price")[0].innerText.replace(/[$,]/g, ''));
										scrubDiscArr.push(discammount);
									}
								}
							}
							scrubhttp.open("POST", scrubCouponApi, false);
							scrubhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
							scrubhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
							scrubhttp.send(params);
						} catch (e) {
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				}
				scrubrmvhttp.open("POST", scrubCouponApi, false);
				scrubrmvhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
				scrubrmvhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
				scrubrmvhttp.send(rmvparams);
			}, 2000);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// aveda.com ////////////////
	if (CurrHref.indexOf("www.aveda.com") > -1) {
		var params = "JSONRPC=%5B%7B%22method%22%3A%22logic.checkout--viewcart%22%2C%22id%22%3A1%2C%22params%22%3A%5B%7B%22_SUBMIT%22%3A%22offer_code%22%2C%22OFFER_CODE%22%3A%22" + couponCode + "%22%7D%5D%7D%5D";
		var avedahttp = new XMLHttpRequest();
		avedahttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var jsonObj = JSON.parse(this.responseText);
					if (jsonObj[0].result.data.dataLayer.datalayer_events.offerSuccessful.event_data) {
						avedaCoupArr.push(couponCode);
						var saving = jsonObj[0].result.value.transaction.order.samples[0].discountedPrice;
						avedaDiscArr.push(saving);
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		avedahttp.open("POST", avedaCouponApi, false);
		avedahttp.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
		avedahttp.send(params);
	}
	
	/////////////////// ctshirts.com ////////////////
	if (CurrHref.indexOf("www.ctshirts.com") > -1) {
		try {
			var ctshirtsCouponApi = document.getElementById("checkout-form").action;
			var params = "dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var ctshhttp = new XMLHttpRequest();
			ctshhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var CouponClass = doc.getElementsByClassName("item-list__coupon");
						if (CouponClass) {
							let code = doc.getElementsByClassName("coupon-radio")[0].innerText;
							let savings = doc.getElementsByClassName("flex-row hide-scrolled")[5].getElementsByTagName('div')[1].innerText.replace(/[-$,]/g, '');
							savings = Number(savings);
							if (savings > 0) {
								ctshirtsDiscArr.push(savings);
								ctshirtsCoupArr.push(code);
							}
						}
						var params1 = "dwfrm_cart_shipments_i0_items_i0_quantity=4&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=&dwfrm_cart_coupons_i0_deleteCoupon=Remove";
						var ctshhttp2 = new XMLHttpRequest();
						ctshhttp2.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						ctshhttp2.open("POST", ctshirtsCouponApi, false);
						ctshhttp2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
						ctshhttp2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
						ctshhttp2.send(params1);
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			ctshhttp.open("POST", ctshirtsCouponApi, false);
			ctshhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			ctshhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			ctshhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// backcountry.com ////////////////
	if (CurrHref.indexOf("www.backcountry.com") > -1) {
		try {
			var session = document.getElementsByName("_dynSessConf")[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + session + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + couponCode + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=https%3A%2F%2Fwww.backcountry.com%2FStore%2Fcheckout%2Fincludes%2Fcoupon%2FcouponSuccess.json.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=https%3A%2F%2Fwww.backcountry.com%2FStore%2Fcheckout%2Fincludes%2Fcoupon%2FcouponError.json.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&_DARGS=%2FStore%2Fcheckout%2Fincludes%2FcheckoutAjaxForms.jsp.ajaxform-redeemCoupon&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=";
			var backhttp = new XMLHttpRequest();
			backhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var backjsonObj = JSON.parse(this.responseText);
						if (backjsonObj.success == "true") {
							var backgethttp = new XMLHttpRequest();
							backgethttp.onreadystatechange = function () {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								if (doc.getElementById("saved-total")) {
									var savings = Number(doc.getElementById("saved-total").innerText.replace(/[$,]/g, ''));
									finalCode = couponCode;
									backCoupArr.push(finalCode);
									backDiscArr.push(savings);
								}
							}
							backgethttp.open("GET", CurrHref, false);
							backgethttp.send();
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			backhttp.open("POST", backCouponApi, false);
			backhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
			backhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			backhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// elder-beerman.com ////////////////
	if (CurrHref.indexOf("www.elder-beerman.com") > -1) {
		try {
			document.getElementById("promoCode").value = couponCode;
			document.getElementById("applyPromo").click();
			if (document.getElementsByClassName("allPromotion appliedPromotion")[0]) {
				finalCode = document.getElementsByClassName("allPromotion appliedPromotion")[0].innerText.split(' ')[1];
			}
			document.getElementById("WC_OrderSubmitForm_CouponCode_Link").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// zagg.com ////////////////
	if (CurrHref.indexOf("www.zagg.com") > -1) {
		var params = "remove=0&coupon_code=" + couponCode;
		var zagghttp = new XMLHttpRequest();
		zagghttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var disCondition = doc.getElementById('shopping-cart-totals-table').getElementsByClassName('price').length;
					if (disCondition == 3) {
						var saving = Number(doc.getElementById('shopping-cart-totals-table').getElementsByClassName('price')[2].innerText.replace(/[-$,]/g, ''));
						if (saving > 0) {
							zaggCoupArr.push(couponCode);
							zaggDiscArr.push(saving);
						}
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		zagghttp.open("POST", zaggCouponApi, false);
		zagghttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		zagghttp.send(params);
	}
	
	/////////////////// keds.com ////////////////
	if (CurrHref.indexOf("www.keds.com") > -1) {
		try {
			var kedsRCouponApi = document.getElementById("continue-shopping").action;
			paramsR = "dwfrm_cart_coupons_i0_deleteCoupon=Remove&dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_couponPopup=";
			var kedshttp = new XMLHttpRequest();
			kedshttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var jsonData = JSON.parse(this.responseText);
					if (jsonData.status == "OK") {
						var kcouponCode = jsonData.couponCode;
						var kbasketTotal = jsonData.basketTotal;
						kedsCoupArr.push(kcouponCode);
						kedsDiscArr.push(kbasketTotal);
					}
					var kedsRhttp = new XMLHttpRequest();
					kedsRhttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					};
					kedsRhttp.open("POST", kedsRCouponApi, false);
					kedsRhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
					kedsRhttp.send(paramsR);
				}
			};
			kedshttp.open("GET", kedsCouponApi + couponCode + "&format=ajax", false);
			kedshttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// renttherunway.com ////////////////
	if (CurrHref.indexOf("www.renttherunway.com") > -1) {
		var renthttp = new XMLHttpRequest();
		renthttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var rentObj = JSON.parse(this.responseText);
					var saving = rentObj.cart.promoAmount;
					saving = Number(saving);
					if (saving > 0) {
						rentCoupArr.push(couponCode);
						rentDiscArr.push(saving);
					}
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		renthttp.open("GET", renttheCouponApi + couponCode, false);
		renthttp.send();
	}
	
	/////////////////// bonton.com ////////////////
	if (CurrHref.indexOf("www.bonton.com") > -1) {
		try {
			document.getElementById("promoCode").value = couponCode;
			document.getElementById("applyPromo").click();
			if (document.getElementsByClassName("allPromotion appliedPromotion")[0]) {
				finalCode = document.getElementsByClassName("allPromotion appliedPromotion")[0].innerText.replace(/[Coupon has been applied   Remove,]/g, '');
			}
			document.getElementById("WC_OrderSubmitForm_CouponCode_Link").click();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// kennethcole.com ////////////////
	if (CurrHref.indexOf("www.kennethcole.com") > -1) {
		try {
			var dynamicAPI = document.getElementById('cart-items-form').action;
			var params = "dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var paramsR = "dwfrm_cart_coupons_i0_deleteCoupon=Remove&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=";
			var kennethcolehttp = new XMLHttpRequest();
			kennethcolehttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var savingClass = doc.getElementsByClassName("discount")[0].getElementsByClassName('sale-color')[0];
						if (savingClass) {
							var saving = Number(savingClass.innerText.replace(/[-$,]/g, ''))
								if (saving > 0) {
									kennethCoupArr.push(couponCode);
									kennethDiscArr.push(saving);
								}
								var kennethRemovehttp = new XMLHttpRequest();
							kennethRemovehttp.onreadystatechange = function () {
								if (this.readyState == 4) {}
							};
							kennethRemovehttp.open("Post", dynamicAPI, false);
							kennethRemovehttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
							kennethRemovehttp.send(paramsR);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			kennethcolehttp.open("Post", dynamicAPI, false);
			kennethcolehttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			kennethcolehttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// soma.com ////////////////
	if (CurrHref.indexOf("www.soma.com") > -1) {
		try {
			var dynSessConf = document.getElementsByName("_dynSessConf")[0].value; ;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynSessConf + "&claimCodeField=" + couponCode + "&_D%3AclaimCodeField=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=Claim+it&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=Apply&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fstore%2Fcommon%2Fcheckout%2Fcart.jsp.couponForm";
			var somahttp = new XMLHttpRequest();
			somahttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var jsonObj = JSON.parse(this.responseText);
						if ((jsonObj.formErrors.coupon.length == 0) || (jsonObj.formErrors.coupon[0].message == "You have already applied this discount code.")) {
							var promoDiscounts = Number(jsonObj.promoDiscounts[0].discountAmount.replace(/[-$,]/g, ''));
							if (promoDiscounts > 0) {
								finalCode = couponCode
									somaCoupArr.push(finalCode);
								somaDiscArr.push(promoDiscounts);
							}
							var somaRhttp = new XMLHttpRequest();
							somaRhttp.onreadystatechange = function () {
								if (this.readyState == 4) {}
							}
							somaRhttp.open("GET", "https://www.soma.com/store/common/json/cart.jsp?_DARGS=/store/common/checkout/cart.jsp_A&_DAV=" + finalCode + "&_dynSessConf=" + dynSessConf + "&task=remPromo&reprice=true&_=1528456812887", false);
							somaRhttp.send(params);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			somahttp.open("POST", somaCouponApi, false);
			somahttp.setRequestHeader("accept", "application/json, text/javascript, */*");
			somahttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			somahttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// spirithalloween.com ////////////////
	if (CurrHref.indexOf("www.spirithalloween.com") > -1) {
		try {
			var grandTotal = document.getElementsByClassName("orderSummary")[0].getElementsByClassName("value")[0].innerText.replace(/[-$,A-Z]/g, '');
			grandTotal = Number(grandTotal);
			params = "promoCode=" + couponCode + "&delete=false";
			var spirithttp = new XMLHttpRequest();
			spirithttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var jsonObj = JSON.parse(this.responseText);
					var checked = jsonObj.applied;
					if (checked == "true") {
						var spirhttp = new XMLHttpRequest();
						spirhttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								var spirObj = JSON.parse(this.responseText);
								var grandSaveTotal = spirObj.amountCoverableByRewards.replace(/[-$,A-Z]/g, '');
								grandSaveTotal = Number(grandSaveTotal);
								if (grandTotal > grandSaveTotal) {
									var totalSave = grandTotal - grandSaveTotal;
									spiritDiscArr.push(totalSave);
									spiritCoupArr.push(couponCode);
								}
							}
						};
						spirhttp.open("GET", spiritWalletApi, false);
						spirhttp.send();
					}
				}
			};
			spirithttp.open("Post", spiritCouponApi, false);
			spirithttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			spirithttp.setRequestHeader("accept", "*/*");
			spirithttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// claires.com ////////////////
	if (CurrHref.indexOf("www.claires.com") > -1) {
		try {
			var csrfToken = document.getElementsByName('csrf_token')[0].value;
			var beforeSaving = document.getElementsByClassName('order-value')[0].innerText.replace(/[-$,]/g, '');
			beforeSaving = Number(beforeSaving);
			var claireshttp = new XMLHttpRequest();
			claireshttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var clairesObj = JSON.parse(this.responseText);
					var condition = clairesObj.status;
					if (condition == 'APPLIED') {
						let code = clairesObj.CouponCode;
						clairesCoupArr.push(code);
						var claireshttp1 = new XMLHttpRequest();
						claireshttp1.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								try {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									let afterSaving = doc.getElementsByClassName('order-value')[0].innerText.replace(/[-$,]/g, '');
									afterSaving = Number(afterSaving);
									let totalSave = beforeSaving - afterSaving;
									clairesDiscArr.push(totalSave);
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
								}
							}
						};
						claireshttp1.open("GET", CurrHref, true);
						claireshttp1.send();
					}
					var params1 = "dwfrm_cart_shipments_i0_items_i0_quantity=1&dwfrm_cart_shipments_i0_items_i1_quantity=1&dwfrm_cart_coupons_i0_deleteCoupon=Remove&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=&csrf_token=" + csrfToken + "";
					var claireshttp2 = new XMLHttpRequest();
					claireshttp2.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					};
					claireshttp2.open("POST", clairesRemCouponApi, false);
					claireshttp2.setRequestHeader("content-type", "application/x-www-form-urlencoded");
					claireshttp2.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
					claireshttp2.send(params1);
				}
			};
			claireshttp.open("GET", clairesCouponApi + couponCode, false);
			claireshttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// ashleystewart.com ////////////////
	if (CurrHref.indexOf("www.ashleystewart.com") > -1) {
		try {
			var session = document.getElementById('car-top-login-form').action.split('=')[1];
			var params = "dwfrm_cart_shipments_i0_items_i0_quantity=4&dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var ashleyhttp = new XMLHttpRequest();
			ashleyhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var condition = doc.getElementsByClassName('discount')[0];
					if (condition) {
						let code = doc.getElementsByClassName('cartcoupon')[0].getElementsByClassName('value')[0].innerText.split('\n')[1];
						ashleyCoupArr.push(code);
						let savings = doc.getElementsByClassName('discount')[0].getElementsByClassName('value')[0].innerText.replace(/[-$,()]/g, '');
						savings = Number(savings);
						ashleyDiscArr.push(savings);
					}
					var params1 = "dwfrm_cart_shipments_i0_items_i0_quantity=4&dwfrm_cart_coupons_i0_deleteCoupon=Remove";
					var ashleyhttp2 = new XMLHttpRequest();
					ashleyhttp2.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					};
					ashleyhttp2.open("POST", ashleyCouponApi + session, true);
					ashleyhttp2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					ashleyhttp2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
					ashleyhttp2.send(params1);
				}
			};
			ashleyhttp.open("POST", ashleyCouponApi + session, true);
			ashleyhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ashleyhttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			ashleyhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// build.com ////////////////
	if (CurrHref.indexOf("www.build.com") > -1) {
		try {
			var buildhttp = new XMLHttpRequest();
			buildhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var buildObj = JSON.parse(this.responseText);
						var condition = buildObj.status;
						if (condition == 1) {
							var buildhttp1 = new XMLHttpRequest();
							buildhttp1.onreadystatechange = function () {
								if (this.readyState == 4) {
									try {
										var parser = new DOMParser();
										var doc = parser.parseFromString(this.responseText, "text/html");
										let Save = doc.getElementById('cart-coupon-total').innerText.replace(/[-$,]/g, '');
										Save = Number(Save);
										buildDiscArr.push(Save);
										buildCoupArr.push(couponCode);
									} catch (e) {
										Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
									}
								}
							};
							buildhttp1.open("GET", CurrHref, false);
							buildhttp1.send();
							var buildhttp2 = new XMLHttpRequest();
							buildhttp2.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {}
							};
							buildhttp2.open("DELETE", buildCouponApi + couponCode, true);
							buildhttp2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
							buildhttp2.send();
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			buildhttp.open("PUT", buildCouponApi + couponCode, true);
			buildhttp.setRequestHeader("content-type", "application/json");
			buildhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
			buildhttp.send();
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// belk.com ////////////////
	if (CurrHref.indexOf("www.belk.com") > -1) {
		try {
			var csrf_token = document.getElementsByName("csrf_token")[0].value;
			var skuChange = document.getElementById("skuChange").value;
			var params = "selected_quantity=&previous_quantity=&selected_sku=&skuChange=" + skuChange + "&dwfrm_cart_shipments_i0_items_i0_quantity=&dwfrm_cart_shipments_i0_items_i0_giftmessagetext=&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_updateGiftBox=dwfrm_cart_updateGiftBox&uppdateGiftBoxpliUUID=&dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon&csrf_token=" + csrf_token;
			var belkhttp = new XMLHttpRequest();
			belkhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var condition = Number(doc.getElementsByClassName("order-discount discount")[0].getElementsByTagName("td")[1].innerText.replace(/[-$,]/g, ''));
						if (condition > 0) {
							finalCode = couponCode;
							belkCoupArr.push(finalCode);
							belkDiscArr.push(condition);
							var rmvparams = "selected_quantity=&previous_quantity=&selected_sku=&skuChange=" + skuChange + "&dwfrm_cart_shipments_i0_items_i0_quantity=&dwfrm_cart_shipments_i0_items_i0_giftmessagetext=&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_updateGiftBox=dwfrm_cart_updateGiftBox&uppdateGiftBoxpliUUID=&dwfrm_cart_couponCode=Remove&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon&csrf_token=" + csrf_token;
							var belkRmvhttp = new XMLHttpRequest();
							belkRmvhttp.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {}
							}
							belkRmvhttp.open("POST", belkCouponApi, false);
							belkRmvhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
							belkRmvhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
							belkRmvhttp.send(params);
						}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			belkhttp.open("POST", belkCouponApi, false);
			belkhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			belkhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			belkhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// mixbook.com ////////////////
	if (CurrHref.indexOf("www.mixbook.com") > -1) {
		try {
			var authenticity_token = document.getElementsByName("authenticity_token")[0].value;
			var params = "utf8=%E2%9C%93&_method=put&authenticity_token=" + authenticity_token + "&quantities%5B18038172%5D%5B69%5D=1&country=United+States&postal_code=&shipping_option_id=1&coupon_code=" + couponCode;
			var mixbookhttp = new XMLHttpRequest();
			mixbookhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var onlyhtml = JSON.parse(this.responseText);
						var htmaldata = onlyhtml.html.summary;
						var parser = new DOMParser();
						var doc1 = parser.parseFromString(htmaldata, "text/html");
						var jsonObj = JSON.parse(this.responseText);
						var condition = jsonObj.errors.coupon
							if (condition == null) {
								var codelist = jsonObj.coupon;
								mixbookCoupArr.push(codelist);
								var savings = Number(doc1.getElementsByClassName("c-cart-summary--savings")[0].getElementsByTagName("strong")[0].innerText.replace(/[$,]/g, ''))
									mixbookDiscArr.push(savings);
							}
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			mixbookhttp.open("PUT", mixbookCouponApi, false);
			mixbookhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			mixbookhttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
			mixbookhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// katespade.com ////////////////
	if (CurrHref.indexOf("www.katespade.com") > -1) {
		try {
			var grandTotal = document.getElementsByClassName("order-value")[1].innerText.replace(/[-$,]/g, '');
			grandTotal = Number(grandTotal);
			var csrf_token = document.getElementsByName("csrf_token")[0].value;
			var kateCouponApi = document.getElementById("cart-items-form").action;
			var params = "dwfrm_cart_couponCode=" + couponCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon&csrf_token=" + csrf_token + "";
			var katehttp = new XMLHttpRequest();
			katehttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var checked = doc.getElementsByClassName("bonus-item")[0];
					if (checked) {
						var grandSaveTotal = doc.getElementsByClassName("order-value")[1].innerText.replace(/[-$,]/g, '');
						grandSaveTotal = Number(grandSaveTotal);
						if (grandTotal > grandSaveTotal) {
							var totalSave = grandTotal - grandSaveTotal;
							kateDiscArr.push(totalSave);
							kateCoupArr.push(couponCode);
						}
						var paramR = "dwfrm_cart_coupons_i0_deleteCoupon=Remove&dwfrm_cart_couponCode=&csrf_token=" + csrf_token + "";
						var katehttp2 = new XMLHttpRequest();
						katehttp2.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {}
						};
						katehttp2.open("POST", kateCouponApi, true);
						katehttp2.setRequestHeader("content-type", "application/x-www-form-urlencoded");
						katehttp2.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
						katehttp2.send(paramR);
					}
				}
			};
			katehttp.open("Post", kateCouponApi, false);
			katehttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			katehttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			katehttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// shoes.com ////////////////
	if (CurrHref.indexOf("www.shoes.com") > -1) {
		try {
			document.getElementById("crt-promoCode").value = couponCode;
			document.getElementsByClassName('right crt-submit-promo crt-update')[0].click();
			setTimeout(() => {
				var condition = document.getElementsByClassName('crt-promo-code-summary')[0];
				if (condition) {
					let Code = document.getElementsByClassName('crt-body-p')[0].getElementsByTagName('span')[0].innerText;
					let Savings = document.getElementsByClassName('crt-summary-val crt-summary-val--dis')[0].innerText.replace(/[-$,]/g, '');
					Savings = Number(Savings);
					shoesCoupArr.push(Code);
					shoesDiscArr.push(Savings);
				}
				document.getElementsByClassName("crt-remove-promo")[0].click();
			}, 2000);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// fragrancenet.com ////////////////
	if (CurrHref.indexOf("www.fragrancenet.com") > -1) {
		params = "activeCoupon=&gc_coupon_id=" + couponCode;
		var fraghttp = new XMLHttpRequest();
		fraghttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					var initalPrice = Number(document.getElementsByClassName("grand subtotalPrice")[0].innerText.replace("$", ''));
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var discountedPrice = Number(doc.getElementsByClassName("grand subtotalPrice")[0].innerText.replace("$", ''));
					var saving = initalPrice - discountedPrice;
					fragCoupArr.push(couponCode);
					fragDiscArr.push(saving);
				} catch (e) {
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			};
		}
		fraghttp.open("Post", fragCouponApi, false);
		fraghttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		fraghttp.send(params);
	}
	
	/////////////////// landsend.com ////////////////
	if (CurrHref.indexOf("www.landsend.com") > -1) {
		try {
			var fetchPin = couponCode.match(/\d+/g);
			if (fetchPin) {
				fetchPin = fetchPin.map(Number);
				fetchPinN = fetchPin[0];
				var fetchCode = couponCode.split(" ")[0];
				var params = "promoCode=" + fetchCode + "&promoPIN=" + fetchPinN + "&functionName=applyPromotion&isEditOrderMode=N&debug=false";
				var landhttp = new XMLHttpRequest();
				landhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						try {
							var dataObj = JSON.parse(this.responseText);
							var saving = dataObj.promoSavingsAmt;
							var savingNum = Number(saving);
							var exactSaving = savingNum / 100;
							landDiscArr.push(exactSaving);
							var code = dataObj.promoCode;
							landCoupArr.push(code);
						} catch (e) {
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				landhttp.open("POST", landCouponApi, false);
				landhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				landhttp.send(params);
			}
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// fredericks.com ////////////////
	if (CurrHref.indexOf("www.fredericks.com") > -1) {
		params = '{"couponCode":"' + couponCode + '"}';
		var frederickshttp = new XMLHttpRequest();
		frederickshttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status != 500) {
				var fredeSavehttp = new XMLHttpRequest();
				fredeSavehttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						try {
							var parser = new DOMParser();
							var doc = parser.parseFromString(this.response, "text/html");
							var saving = doc.getElementsByTagName("financial")[0].getElementsByTagName("totaldiscount")[0].innerText;
							var savingNum = Number(saving);
							if (savingNum > 0) {
								var exactSaving = savingNum / 100;
								fredericksDiscArr.push(exactSaving);
								fredericksCoupArr.push(couponCode);
							}
						} catch (e) {
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				fredeSavehttp.open("GET", fredWalletApi, false);
				fredeSavehttp.send();
			}
		};
		frederickshttp.open("PUT", fredCouponApi, false);
		frederickshttp.setRequestHeader("content-type", "application/json;charset=UTF-8");
		frederickshttp.send(params);
	}
	
	/////////////////// perfumania.com ////////////////
	if (CurrHref.indexOf("www.perfumania.com") > -1) {
		try {
			var orderId = document.getElementById('ShopCartForm').getElementsByTagName('input')[8].value;
			var catalogId = document.getElementById('headerSearchForm').getElementsByTagName('input')[0].value;
			var storeId = document.getElementById('headerSearchForm').getElementsByTagName('input')[1].value;
			var langId = document.getElementById('headerSearchForm').getElementsByTagName('input')[2].value;
			var params = "orderId=" + orderId + "&URL=%2FOrderCalculate%3FstoreId%3D" + storeId + "%26catalogId%3D" + catalogId + "%26langId%3D-1%26orderId%3D" + orderId + "%26updatePrices%3D1%26calculationUsageId%3D-1%26calculationUsageId%3D-2%26calculationUsageId%3D-3%26calculationUsageId%3D-4%26calculationUsageId%3D-7%26URL%3D%252fCheckoutSignInView%253fstoreId%253d" + storeId + "%2526catalogId%253d" + catalogId + "%2526langId%253d-1%2526URL%253dOrderAddressUpdateView%2526checkout%253dtrue&updateURL=%2FOrderCalculate%3FstoreId%3D" + storeId + "%26catalogId%3D" + catalogId + "%26langId%3D-1%26orderId%3D" + orderId + "%26updatePrices%3D1%26calculationUsageId%3D-1%26calculationUsageId%3D-2%26calculationUsageId%3D-3%26calculationUsageId%3D-4%26calculationUsageId%3D-7%26URL%3DOrderItemDisplay&promoURL=%2FOrderCalculate%3FURL%3DOrderItemDisplay%26orderId%3D" + orderId + "%26updatePrices%3D1%26calculationUsageId%3D-1%26calculationUsageId%3D-2%26calculationUsageId%3D-3%26calculationUsageId%3D-4%26calculationUsageId%3D-7&taskType=A&promoCode=" + couponCode;
			var perfuhttp = new XMLHttpRequest();
			perfuhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var perfu2http = new XMLHttpRequest();
					perfu2http.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							try {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								var initialPrice = document.getElementById('orderTotals').getElementsByClassName('totalAmount')[0].innerText.replace(/[$,-]/g, '');
								var initalPriceNum = Number(initialPrice);
								var disPrice = doc.getElementById('orderTotals').getElementsByClassName('totalAmount')[0].innerText.replace(/[$,-]/g, '');
								var disPriceNum = Number(disPrice);
								var discount = initalPriceNum - disPriceNum;
								var couponClass = doc.getElementsByClassName("applied-promos")[0];
								if (couponClass) {
									if (discount > 0) {
										perfuCoupArr.push(couponCode);
										perfuDiscArr.push(discount);
									}
								}
							} catch (e) {
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
							}
						}
					}
					perfu2http.open("GET", CurrHref, false);
					perfu2http.send();
					var removeApi = "https://www.perfumania.com/OrderItemUpdate?langId=" + langId + "&storeId=" + storeId + "&catalogId=" + catalogId + "&taskType=R&orderId=" + orderId + "&promoCode=" + couponCode + "&URL=%2fOrderCalculate%3fURL%3dOrderItemDisplay%26orderId%3d" + orderId + "%26updatePrices%3d1%26calculationUsageId%3d-1%26calculationUsageId%3d-2%26calculationUsageId%3d-3%26calculationUsageId%3d-4%26calculationUsageId%3d-7&isShopCartSection=true&giftMsgText=&giftFlag=true";
					var perfuRhttp = new XMLHttpRequest();
					perfuRhttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {}
					}
					perfuRhttp.open("GET", removeApi, false);
					perfuRhttp.send();
				}
			}
			perfuhttp.open("POST", "https://www.perfumania.com/OrderItemUpdate?catalogId=" + catalogId + "&storeId=" + storeId + "&langId=-1&query=Search+entire+site", false);
			perfuhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			perfuhttp.send(params);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// travelocity.com ////////////////
	if (CurrHref.indexOf("www.travelocity.com") > -1) {
		try {
			var tripid = document.getElementsByTagName("body")[0].getAttribute("data-tripid");
			var rmvcode = document.getElementById("coupons").getAttribute("data-coupon-code");
			var rmvparams = "tripid=" + tripid + "&tlCouponRemove=1&tlCouponCode=" + rmvcode + "&productType=hotel&binPrefix="
				var travelrmvhttp = new XMLHttpRequest();
			travelrmvhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var params = "couponCode=" + couponCode + "&tripid=" + tripid + "&tlCouponAttach=1&tlCouponCode=" + couponCode + "&productType=hotel&binPrefix="
							var travelhttp = new XMLHttpRequest();
						travelhttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								var parser = new DOMParser();
								var doc = JSON.parse(this.responseText);
								if (doc.couponModel) {
									var savings = doc.couponModel.couponDiscount.value;
									var total = Number(savings.replace(/[$,]/g, ''))
										if (total > 0) {
											traveloDiscArr.push(total);
											finalCode = doc.couponModel.couponCode
												traveloCoupArr.push(finalCode);
										}
								}
							}
						};
						travelhttp.open("POST", travelCouponApi, false);
						travelhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
						travelhttp.setRequestHeader("accept", "*/*");
						travelhttp.send(params);
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			}
			travelrmvhttp.open("POST", travelrmvCouponApi, false);
			travelrmvhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			travelrmvhttp.setRequestHeader("accept", "*/*");
			travelrmvhttp.send(rmvparams);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	
	/////////////////// revolve.com ////////////////
	if (CurrHref.indexOf("www.revolve.com") > -1) {
		try {
			var rmvparams = "promo=&scope="
				var params = "promo=" + couponCode + "&scope=";
			var revolvermvhttp = new XMLHttpRequest();
			revolvermvhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var revolvehttp = new XMLHttpRequest();
						revolvehttp.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								try {
									var parser = new DOMParser();
									var docObj = JSON.parse(this.responseText);
									var discamount = Number(docObj.msg2.replace(/[-$,]/g, ''));
									if ((docObj.success == true) && (discamount > 0)) {
										finalCode = couponCode;
										revolveCoupArr.push(finalCode);
										revolveDiscArr.push(discamount);
									}
								} catch (e) {
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
								}
							}
						};
						revolvehttp.open("POST", revolveCouponApi, false);
						revolvehttp.setRequestHeader("Accept", "*/*");
						revolvehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
						revolvehttp.send(params);
					} catch (e) {
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			}
			revolvermvhttp.open("POST", revolveCouponApi, false);
			revolvermvhttp.setRequestHeader("Accept", "*/*");
			revolvermvhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			revolvermvhttp.send(rmvparams);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
}

////////// Apply coupons with progressbar and Submit reports API code ////////////////
function savingsGenerate() {
	var CurrHref = window.location.href;
	if (myObj.cashback.length > 0) {
		cashbackValue = myObj.cashback[0].cashback_value;
	}
	if (CurrHref.indexOf("www.kohls.com") > -1) {
		try {
			var maxIndex = kohlsDiscArr.indexOf(Math.max.apply(null, kohlsDiscArr));
			finalCode = kohlsCoupArr[maxIndex];
			var savings = kohlsDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
				SavingsPopup(finalCode, totalSavings);
			} else {
				SavingsPopup(finalCode, totalSavings);
			}
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.macys.com") > -1) {
		try {
		var maxIndex = macysDiscArr.indexOf(Math.max.apply(null, macysDiscArr));
			finalCode = macysCoupArr[maxIndex];
			var savings = macysDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			SavingsPopup(finalCode, totalSavings);
			document.getElementById("promo-apply-input").value = finalCode;
			document.getElementsByClassName("promo-apply-button")[0].click();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.forever21.com") > -1) {
		try {
			var maxIndex = forever21DiscArr.indexOf(Math.max.apply(null, forever21DiscArr));
			finalCode = forever21CoupArr[maxIndex];
			var savings = forever21DiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			SavingsPopup(finalCode, totalSavings);
			document.getElementById("txt_promoCode").value = finalCode;
			document.getElementById("btnPromoApply").click();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.walgreens.com") > -1) {
		var maxIndex = walDiscArr.indexOf(Math.max.apply(null, walDiscArr));
		finalCode = walCoupArr[maxIndex];
		var params = '{"code":"' + finalCode + '"}';
		var carthttp = new XMLHttpRequest();
		carthttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					codeObj = JSON.parse(this.responseText);
					if (codeObj.promotionInfo.applied) {
						var saving = walDiscArr[maxIndex];
						if (saving > 0) {
							saving = saving.toFixed(2);
							totalSavings = '$' + saving;
						}
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		carthttp.open("POST", "https://www.walgreens.com/svc/carts/" + wallCartId + "/(promotions)?instart_disable_injection=true", false);
		carthttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
		carthttp.send(params);
	}
	if (CurrHref.indexOf("www.officedepot.com") > -1) {
		var cartSavehttp = new XMLHttpRequest();
		var initalPrice,
		disPrice;
		cartSavehttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var finalCodeClass = doc.getElementsByClassName("cart_applied_coupon")[2];
					if (finalCodeClass) {
						finalCode = finalCodeClass.getAttribute("data-coupon-code");
						initalPrice = Number(document.getElementById('cartV3Summary').getElementsByTagName('tr')[0].getElementsByTagName('td')[0].innerText.replace(/[$,]/g, ''));
						disPrice = Number(doc.getElementById('cartV3Summary').getElementsByTagName('tr')[0].getElementsByTagName('td')[0].innerText.replace(/[$,]/g, ''));
						var saving = initalPrice - disPrice;
						if (saving > 0) {
							var savingFixed = saving.toFixed(2);
							totalSavings = "$" + savingFixed;
						}
						SavingsPopup(finalCode, totalSavings);
					}
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		cartSavehttp.open("GET", CurrHref, false)
		cartSavehttp.send();
	}
	if (CurrHref.indexOf("www.famousfootwear.com/Checkout/Cart") > -1) {
		setTimeout(function () {
			try {
				if (document.getElementsByClassName('right discount-text')[0]) {
					var x = document.getElementsByClassName("summary-item");
					for (var k = 0; k < x.length; k++) {
						if (x[k].innerText.includes("Promo")) {
							var totalSavings = x[k].getElementsByClassName('right discount-text')[0].innerText;
							totalSavings = totalSavings.replace("(", "");
							totalSavings = totalSavings.replace(")", "");
							finalCode = x[k].getElementsByClassName("left")[0].innerText;
							finalCode = finalCode.replace("Promo ", "");
							finalCode = finalCode.replace(" Applied", "");
						}
					}
				}
				SavingsPopup(finalCode, totalSavings);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 1000);
	}
	if (CurrHref.indexOf("www.sears.com") > -1) {
		var searhttp = new XMLHttpRequest();
		searhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var searObj = JSON.parse(this.responseText);
					if (searObj.response.cartSummary) {
						var searDiscount = searObj.response.cartSummary.totalSavings.items;
						for (var m = 0; m < searDiscount.length; m++) {
							if (searObj.response.cartSummary.totalSavings.items[m].name.includes("Use code")) {
								totalSavings = searObj.response.cartSummary.totalSavings.items[m].amt.split('-')[1];
								finalCode = searObj.response.cartSummary.totalSavings.items[m].name.split(" ").pop();
							}
						}
					}
					SavingsPopup(finalCode, "$" + totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		searhttp.open("GET", searsWalletApi, false);
		searhttp.send();
	}
	if (CurrHref.indexOf("www.payless.com") > -1) {
		var maxIndex = paylessDisArr.indexOf(Math.max.apply(null, paylessDisArr));
		finalCode = paylessCoupArr[maxIndex];
		var paylesshttp = new XMLHttpRequest();
		paylesshttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var payless2http = new XMLHttpRequest();
				var saving = paylessDisArr[maxIndex];
				if (saving > 0) {
					var fixedSaving = saving.toFixed(2);
					totalSavings = "$" + fixedSaving;
				}
				SavingsPopup(finalCode, totalSavings);
			}
		};
		paylesshttp.open("GET", "https://www.payless.com/on/demandware.store/Sites-payless-Site/default/Cart-AddCoupon?couponCode=" + finalCode + "&format=ajax&couponLoyaltyEmail=", false);
		paylesshttp.send();
	}
	if (CurrHref.indexOf("www.finishline.com") > -1) {
		setTimeout(function () {
			try {
				var maxIndex = finishDiscArr.indexOf(Math.max.apply(null, finishDiscArr));
				finalCode = finishCoupArr[maxIndex];
				var saving = finishDiscArr[maxIndex];
				if (saving > 0) {
					var fixedSaving = saving.toFixed(2);
					totalSavings = "$" + fixedSaving;
				}
				document.getElementsByClassName("input-group-field couponCodeInput")[0].value = finalCode;
				document.getElementsByClassName("button hollow applyCouponCode")[0].click();
				SavingsPopup(finalCode, totalSavings);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 800);
	}
	if (CurrHref.indexOf("www.footlocker.com") > -1) {
		setTimeout(function () {
			try {
				var i = footDiscArr.indexOf(Math.max.apply(null, footDiscArr));
				finalCode = footCoupArr[i];
				var savings = footDiscArr[i];
				if (savings > 0) {
					totalSavings = "$" + savings.toFixed(2);
				}
				var par = document.getElementById("estimator_subtotal");
				var subtotal = par.getElementsByTagName("td")[0].innerText;
				subtotal = subtotal.replace(/[$,]/g, '');
				var params = "estimateTotal=true&subtotal=" + subtotal + "&country=US&zipcode=10001&shipping=Z&sourcecode=" + finalCode + "&formSubmitProof=";
				var foothttp = new XMLHttpRequest();
				foothttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						try {
							document.getElementById('estimator_sourcecode').value = finalCode;
							document.getElementById('estimator_submit').getElementsByTagName('a')[0].click();
							SavingsPopup(finalCode, totalSavings);
						} catch (e) {
							SavingsPopup(finalCode, totalSavings);
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				foothttp.open("POST", footlockerWalletApi, false);
				foothttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				foothttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
				foothttp.send(params);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 1000);
	}
	if (CurrHref.indexOf("shop.advanceautoparts.com/web/OrderItemDisplay") > -1) {
		localStorage.setItem("autoparts", "true");
		location.reload();
	}
	if (CurrHref.indexOf("www.bathandbodyworks.com") > -1) {
		setTimeout(function () {
			var bathttp = new XMLHttpRequest();
			bathttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var bathObj = JSON.parse(this.responseText);
						if (bathObj.status == "OK") {
							var bath2http = new XMLHttpRequest();
							bath2http.onreadystatechange = function () {
								if (this.readyState == 4 && this.status == 200) {
									try {
										var parser = new DOMParser();
										var doc = parser.parseFromString(this.responseText, "text/html");
										var checkDis = doc.getElementsByClassName('order-discount discount')[0];
										if (checkDis) {
											totalSavings = checkDis.getElementsByTagName('td')[1].innerText.split('-')[1];
											SavingsPopup(finalCode, totalSavings);
										}
									} catch (e) {
										SavingsPopup(finalCode, totalSavings);
										Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
									}
								}
							};
							bath2http.open("GET", CurrHref, true);
							bath2http.send();
						}
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			bathttp.open("GET", bathandbodyCouponApi + finalCode, false);
			bathttp.send();
		}, 6000);
	}
	if (CurrHref.indexOf("www.ae.com") > -1) {
		SavingsPopup(finalCode, totalSavings);
	}
	if (CurrHref.indexOf("www.barnesandnoble.com") > -1) {
		setTimeout(function () {
			var i = barnSaveArr.indexOf(Math.max.apply(null, barnSaveArr));
			finalCode = branCoupArr[i];
			var params = "_dyncharset=UTF-8&_dynSessConf=-622816806718912118&couponCode=" + finalCode + "&_D%3AcouponCode=+&amplifiHandler=%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon&xhrRedirect=%2Fcheckout%2F&getData=voucher-discount&_DARGS=%2Fcheckout%2Fincludes%2Fcoupon-form.jsp.frmApplyCoupon";
			var barhttp = new XMLHttpRequest();
			barhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var barObj = JSON.parse(this.responseText);
						totalSavings = barObj.data.voucherDiscount;
						SavingsPopup(finalCode, "$" + totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			barhttp.open("POST", barnesWalletApi, false);
			barhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			barhttp.setRequestHeader("Accept", "*/*");
			barhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			barhttp.send(params);
		}, 1000);
	}
	if (CurrHref.indexOf("www.steinmart.com") > -1) {
		var steinhttp = new XMLHttpRequest();
		steinhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					for (var t = 0; t < doc.getElementsByClassName("ml-basket-input-wrapper").length; t++) {
						if ((t != 0) && (t < 4)) {
							var x = doc.getElementsByClassName("ml-basket-input-wrapper")[t];
							var CouponCodes = x.querySelectorAll("span.messagediscount")[0].innerText;
							steinCoupArr.push(CouponCodes);
						}
					}
					finalCode = steinCoupArr.join(", ");
					if (doc.getElementsByClassName("ml-basket-column ml-basket-total-value ml-basket-you-saved-value").length > 0) {
						var totalSavings = doc.getElementsByClassName("ml-basket-column ml-basket-total-value ml-basket-you-saved-value")[0].innerText;
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		steinhttp.open("GET", steinmartWalletApi, false);
		steinhttp.send();
	}
	if (CurrHref.indexOf("www.lanebryant.com") > -1) {
		try {
			var x = document.getElementsByClassName("asc-discount-message");
			for (var j = 0; j < x.length; j++) {
				if (x[j].innerHTML.includes("[")) {
					finalCode = x[j].innerText.substring(x[j].innerText.lastIndexOf("[") + 1, x[j].innerText.lastIndexOf("]"));
					var testElem = x[j].parentElement.nextSibling.nextSibling.innerHTML;
					totalSavings = testElem.substring(testElem.lastIndexOf("(") + 1, testElem.lastIndexOf(")"));
				}
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.keurig.com") > -1) {
		try {
			var maxIndex = keurigDiscArr.indexOf(Math.max.apply(null, keurigDiscArr));
			finalCode = keurigCouponArr[maxIndex];
			var savings = keurigDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var csToken = document.getElementsByName('CSRFToken')[0].value;
			var params = "CSRFToken=" + csToken + "&couponCode=" + finalCode;
			var keurighttp = new XMLHttpRequest();
			keurighttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			keurighttp.open("POST", keurigCouponApi, true);
			keurighttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			keurighttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.carters.com") > -1) {
		try {
			var carterWalletClass = document.getElementsByClassName("paypalcheckout")[0];
			if(carterWalletClass)
			{
					var carterWalletApi = carterWalletClass.getAttribute("action");
					var carthttp = new XMLHttpRequest();
					carthttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						try {
							var parser = new DOMParser();
							var doc = parser.parseFromString(this.responseText, "text/html");
							var x = doc.getElementsByClassName("promoTitle");
							if (x.length > 0) {
								for (var j = 0; j < x.length; j++) {
									cartersArr.push(x[j].innerText.replace("Promo Code: ", ""));
									finalCode = cartersArr.join(", ");
									if(doc.getElementsByClassName("order-discount discount")[0])
									{
										totalSavings = doc.getElementsByClassName("order-discount discount")[0].childNodes[3].innerText.split('-')[1];
									}
								}
							}
							SavingsPopup(finalCode, totalSavings);
						} catch (e) {
							SavingsPopup(finalCode, totalSavings);
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				carthttp.open("GET", carterWalletApi, false);
				carthttp.send();
			}
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.cabelas.com") > -1) {
		try {
			var maxIndex = cabelasDiscArr.indexOf(Math.max.apply(null, cabelasDiscArr));
			finalCode = cabelasCoupArr[maxIndex];
			var savings = cabelasDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var params = "promoCode=" + finalCode + "&supportMovingToRebate=true";
			var cabelashttp = new XMLHttpRequest();
			cabelashttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			cabelashttp.open("POST", cabelasWalletApi, true);
			cabelashttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			cabelashttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.lordandtaylor.com") > -1) {
		totalSavings = localStorage.getItem("lordandtaylor");
		SavingsPopup(finalCode, totalSavings);
	}
	if (CurrHref.indexOf("www.partycity.com") > -1) {
		try {
			var maxIndex = partycityDiscArr.indexOf(Math.max.apply(null, partycityDiscArr));
			finalCode = partycityCoupArr[maxIndex];
			var savings = partycityDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			let pid = document.getElementsByName('pid')[0].value;
			let csrfToken = document.getElementsByName('csrf_token')[0].value;
			var params = "delivery_option_7f317c72a4f6d19fac23d4cb7e=home&dwfrm_cart_shipments_i0_items_i0_quantity=4&pid=" + pid + "&quantity-814252=4&delivery_option_08d1fb13d0cb4a1223768a7b91=home&dwfrm_cart_shipments_i0_items_i1_quantity=5&pid=" + pid + "&quantity-814255=5&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon&csrf_token=" + csrfToken;
			var partyhttp = new XMLHttpRequest();
			partyhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			partyhttp.open("POST", partyCouponApi, true);
			partyhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			partyhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			partyhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.aeropostale.com") > -1) {
		var aeropohttp = new XMLHttpRequest();
		aeropohttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var oldSave = document.getElementsByClassName('order-value')[0].innerText.replace(/[$,-]/g, '');
					oldSave = Number(oldSave);
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var CouponRow = doc.getElementsByClassName("rowcoupons");
					for (var i = 0; i < CouponRow.length; i++) {
						var newSave = doc.getElementsByClassName('order-value')[0].innerText.replace(/[$,-]/g, '');
						newSave = Number(newSave);
						var savings = oldSave - newSave;
						if (savings > 0) {
							totalSavings = "$" + savings.toFixed(2);
						}
						if (CouponRow[i].getElementsByClassName("bonus-item")[0].innerText == "Applied") {
							testCode = CouponRow[i].getElementsByClassName("value")[0].innerText;
							aeropostCoupArr.push(testCode);
							finalCode = aeropostCoupArr.join(',');
						}
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		aeropohttp.open("GET", CurrHref, false);
		aeropohttp.send();
	}
	if (CurrHref.indexOf("www.shutterfly.com") > -1) {
		try {
			var totalSavings = document.getElementsByClassName("table-cell-currency")[2].innerText;
			totalSavings = totalSavings.replace("-", "").trim();
			totalSavings = Number(totalSavings);
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.snapfish.com") > -1) {
		try {
			var i = snapfishAmtArr.indexOf(Math.max.apply(null, snapfishAmtArr));
			finalCode = sanpfishCouponArr[i];
			var CSRFToken = document.getElementsByTagName('meta')[1].getAttribute('content');
			var ordersId = document.getElementById('orders').value;
			var params = "promotionName=" + finalCode + "&order_id=" + ordersId + "";
			var snaphttp = new XMLHttpRequest();
			snaphttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					var savings = snapfishAmtArr[i];
					if (savings > 0) {
						totalSavings = "$" + savings.toFixed(2);
					}
					SavingsPopup(finalCode, totalSavings);
				}
			};
			snaphttp.open("POST", snapfishCouponApi, false);
			snaphttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			snaphttp.setRequestHeader("X-CSRF-Token", CSRFToken);
			snaphttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.dressbarn.com") > -1) {
		var params = "Action=Cart.validatePromo&sessionConfirmationNumber=7512911085531293020&promoCode=" + finalCode + "";
		var dresshttp = new XMLHttpRequest();
		dresshttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var dressObj = JSON.parse(this.responseText);
					var check = dressObj.data.promoCode;
					var codePath = dressObj.data;
					if (check.successMessage) {
						finalCode = codePath.cartSummary.savingsNew[0].CouponId;
						totalSavings = dressObj.data.cartSummary.savingsNew[0].value;
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		dresshttp.open("POST", dressCouponApi, false);
		dresshttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		dresshttp.send(params);
	}
	if (CurrHref.indexOf("www.nastygal.com") > -1) {
		try {
			var x = document.getElementById("remove-coupon");
			finalCode = x.getAttribute("data-coupon");
			var j = document.getElementsByClassName("order-discount discount")[0];
			totalSavings = j.getElementsByTagName("td")[1].innerText.split('-')[1];
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.hanes.com") > -1) {
		setTimeout(function () {
			try {
				var i = hanesDiscArr.indexOf(Math.max.apply(null, hanesDiscArr));
				document.getElementById("promoCode").value = hanesCoupArr[i];
				document.getElementById('WC_PromotionCodeDisplay_links_1').click();
				setTimeout(function () {
					finalCode = hanesCoupArr[i];
					var savings = hanesDiscArr[i];
					if (savings > 0) {
						totalSavings = "$" + savings.toFixed(2);
					}
					SavingsPopup(finalCode, totalSavings);
				}, 1000);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 2000);
	}
	if (CurrHref.indexOf("www.vitacost.com") > -1) {
		setTimeout(function () {
			try {
				var initalPrice,
				disPrice,
				saving;
				if (document.getElementsByClassName("spcSR spcSTtl")[0]) {
					var initialVal = document.getElementsByClassName("spcSR spcSTtl")[0].getElementsByClassName('spcSFld')[0].innerText.replace(/[$,]/g, '');
					initalPrice = Number(initialVal);
				} else {
					var initialVal = document.getElementById('orderSummary').getElementsByTagName('dd')[0].innerText.replace(/[$,]/g, '');
					initalPrice = Number(initialVal);
				}
				var vitaparams = "spcFrmPrmCde=" + finalCode + "";
				var vitahttp = new XMLHttpRequest();
				vitahttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						try {
							var parser = new DOMParser();
							var doc = parser.parseFromString(this.responseText, "text/html");
							if (document.getElementsByClassName("spcSR spcSTtl")[0]) {
								var finalCodeClass = doc.getElementsByClassName("spcPromoCodes spcBlind_Summary_PU spcBlind_Summary_PR_Loader")[0];
								var finalCodeList = finalCodeClass.getElementsByTagName('li');
								finalCodeArray = [];
								for (var i = 0; i < finalCodeList.length; i++) {
									var fetchFinalCode = finalCodeClass.getElementsByTagName('li')[i].getElementsByTagName('span')[0].innerText;
									finalCodeArray.push(fetchFinalCode);
								}
								disPriceClass = doc.getElementsByClassName("spcSR spcSTtl")[0];
								if (disPriceClass) {
									finalCode = finalCodeArray.join(", ");
									disPrice = Number(doc.getElementsByClassName("spcSR spcSTtl")[0].getElementsByClassName('spcSFld')[0].innerText.replace(/[$,]/g, ''));
									saving = initalPrice - disPrice;
									if (saving > 0) {
										var fixedSaving = saving.toFixed(2);
										totalSavings = "$" + fixedSaving;
									}
									SavingsPopup(finalCode, totalSavings);
								}
							} else {
								var vitachttp = new XMLHttpRequest();
								vitachttp.onreadystatechange = function () {
									if (this.readyState == 4) {
										var parser = new DOMParser();
										var doc1 = parser.parseFromString(this.responseText, "text/html");
										var finalCodeClass = doc1.getElementsByClassName("promoCodes");
										finalCodeArray = [];
										for (var i = 0; i < finalCodeClass.length; i++) {
											var fetchFinalCode = finalCodeClass[i].getElementsByTagName('span')[0].innerText.split(" ")[1];
											finalCodeArray.push(fetchFinalCode);
										}
										finalCode = finalCodeArray.join(", ");
										disPrice = Number(doc1.getElementById('orderSummary').getElementsByClassName('total')[1].innerText.replace(/[$,]/g, ''));
										saving = initalPrice - disPrice;
										if (saving > 0) {
											var fixedSaving = saving.toFixed(2);
											totalSavings = "$" + fixedSaving;
										}
										SavingsPopup(finalCode, totalSavings);
									}
								};
								vitachttp.open("GET", CurrHref, false);
								vitachttp.send();
							}
						} catch (e) {
							SavingsPopup(finalCode, totalSavings);
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				vitahttp.open("POST", vitaCouponApi, false);
				vitahttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				vitahttp.send(vitaparams);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 2000);
	}
	if (CurrHref.indexOf("www.bebe.com") > -1) {
		var i = bebeDiscArr.indexOf(Math.max.apply(null, bebeDiscArr));
		finalCode = bebeCoupArr[i];
		var savings = bebeDiscArr[i];
		if (savings > 0) {
			totalSavings = "$" + savings.toFixed(2);
		}
		var bebehttp = new XMLHttpRequest();
		bebehttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				SavingsPopup(finalCode, totalSavings);
			}
		};
		bebehttp.open("GET", "https://www.bebe.com/checkout/update_promo_code_ajax.cmd?promoCode=" + finalCode + "&delete=false&form_state=updatePromoCodeForm&removePromoCode=", false);
		bebehttp.send();
	}
	if (CurrHref.indexOf("www.brookstone.com") > -1) {
		try {
			var brookCouponApi = document.getElementById('cart-items-form').action;
			var paramss = "dwfrm_cart_couponCode=&dwfrm_cart_coupons_i0_deleteCoupon=Remove";
			var brookshttp = new XMLHttpRequest();
			brookshttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					var i = brookDiscArr.indexOf(Math.max.apply(null, brookDiscArr));
					finalCode = brookCoupArr[i];
					var params = "dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
					var brookhttp = new XMLHttpRequest();
					brookhttp.onreadystatechange = function () {
						if (this.readyState == 4) {
							try {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								var totalSavings = doc.getElementsByClassName("order-totals-row order-discount discount")[0].getElementsByTagName("span")[1].innerText.split('-')[1];
								SavingsPopup(finalCode, totalSavings);
							} catch (e) {
								SavingsPopup(finalCode, totalSavings);
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
							}
						}
					};
					brookhttp.open("POST", brookCouponApi, false);
					brookhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
					brookhttp.send(params);
				}
			};
			brookshttp.open("POST", brookCouponApi, false);
			brookshttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			brookshttp.send(paramss);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.newbalance.com") > -1) {
		try {
			var maxIndex = newbalanceDiscArr.indexOf(Math.max.apply(null, newbalanceDiscArr));
			finalCode = newbalanceCoupArr[maxIndex];
			var savings = newbalanceDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var newbalancehttp = new XMLHttpRequest();
			newbalancehttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			newbalancehttp.open("GET", newbalanceCouponApi + finalCode, true);
			newbalancehttp.send();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.dollargeneral.com") > -1) {
		setTimeout(function () {
			var i = dollarDiscArr.indexOf(Math.max.apply(null, dollarDiscArr));
			finalCode = dollarCoupArr[i];
			var dollarhttp = new XMLHttpRequest();
			dollarhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					var dollarhttp = new XMLHttpRequest();
					dollarhttp.onreadystatechange = function () {
						if (this.readyState == 4) {
							try {
								var dollarObj = JSON.parse(this.responseText);
								totalSavings = dollarObj.discount_amount;
								totalSavings = totalSavings.toString().replace('-', '');
								finalCode = finalCode.replace(/,/g, ', ');
								SavingsPopup(finalCode, "$" + totalSavings);
							} catch (e) {
								SavingsPopup(finalCode, totalSavings);
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
							}
						}
					};
					dollarhttp.open("GET", dollarWalletApi, false);
					dollarhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
					dollarhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					dollarhttp.send();
				}
			};
			dollarhttp.open("PUT", dollarCouponApi + finalCode, false);
			dollarhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
			dollarhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			dollarhttp.send();
		}, 5000);
	}
	if (CurrHref.indexOf("secure.bluenile.com") > -1) {
		try {
			var saving = document.getElementsByClassName('promo-code')[0].getElementsByClassName('right')[0].innerText.split("-")[1].replace(/[$,]/g, '');
			totalSavingsNum = Number(saving);
			if (totalSavingsNum > 0) {
				totalSavings = document.getElementsByClassName('promo-code')[0].getElementsByClassName('right')[0].innerText.split("-")[1];
				finalCode = document.getElementsByClassName('promo-code')[0].getElementsByTagName('b')[0].innerText;
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.puritan.com") > -1) {
		var params = "CouponCode=" + finalCode + "";
		var purihttp = new XMLHttpRequest();
		purihttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					totalSavings = doc.getElementsByClassName("pull-right text-red")[0].innerText.split('-')[1];
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		purihttp.open("POST", puritanCouponApi, false);
		purihttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		purihttp.send(params);
	}
	if (CurrHref.indexOf("www.fromyouflowers.com") > -1) {
		var fromyouhttp = new XMLHttpRequest();
		fromyouhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					totalSavings = doc.getElementsByClassName("creditText")[1].innerHTML;
					finalCode = doc.getElementById("refcode").value;
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		fromyouhttp.open("GET", fromyouCouponApi, false);
		fromyouhttp.send();
	}
	if (CurrHref.indexOf("www.davidsbridal.com") > -1) {
		setTimeout(function () {
			try {
				var totalSavingsId = document.getElementById("total_breakdown");
				finalCode = document.getElementsByClassName("promotion_used")[0].getElementsByTagName('div')[0].childNodes[0].nodeValue.split('-')[0];
				totalSavings = totalSavingsId.childNodes[1].getElementsByTagName('tr')[1].getElementsByClassName('total_figures discounts')[0].innerText.split('-')[1];
				SavingsPopup(finalCode, totalSavings);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 5000);
	}
	if (CurrHref.indexOf("www.herbergers.com") > -1) {
		setTimeout(function () {
			try {
				var checkVal = document.getElementsByClassName('lineCharge discount shippingDiscount')[0];
				finalCode = checkVal.getElementsByTagName('span')[0].innerText;
				totalSavings = checkVal.getElementsByTagName('span')[1].innerText.split('-')[1];
				SavingsPopup(finalCode, totalSavings);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 2000);
	}
	if (CurrHref.indexOf("www.eddiebauer.com") > -1) {
		var eddiehttp = new XMLHttpRequest();
		eddiehttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				var parser = new DOMParser();
				var doc = parser.parseFromString(this.responseText, "text/html");
				try {
					totalSavings = doc.getElementsByClassName('right bos-amountlbl')[0].innerText.split("-")[1];
					finalCode = doc.getElementsByClassName('success-pro-code')[0].innerText;
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
				SavingsPopup(finalCode, totalSavings);
			}
		};
		eddiehttp.open("GET", eddieWalletApi, false);
		eddiehttp.send();
	}
	if (CurrHref.indexOf("www.toms.com") > -1) {
		setTimeout(function () {
			try {
				var session = document.getElementsByName('_dynSessConf')[0].value;
				var i = tomspriceArr.indexOf(Math.max.apply(null, tomspriceArr));
				finalCode = tomsCoupArr[i];
				var params = "_dyncharset=UTF-8&_dynSessConf=" + session + "&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponCode=" + finalCode + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponCode=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.stage=shippingMethod&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.stage=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.multiStage=&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.multiStage=+&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fcheckout%2Fcommon%2FcheckoutPromoCode.jsp.couponForm2&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=Apply";
				var tomshttp = new XMLHttpRequest();
				tomshttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						try {
							var parser = new DOMParser();
							var doc = parser.parseFromString(this.responseText, "text/html");
							var total = doc.getElementsByClassName('ln-amt')[2];
							totalSavings = total.innerText.trim().replace(/–/g, "");
							SavingsPopup(finalCode, totalSavings);
						} catch (e) {
							SavingsPopup(finalCode, totalSavings);
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				tomshttp.open("POST", tomsCouponApi, false);
				tomshttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				tomshttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
				tomshttp.send(params);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 2500);
	}
	if (CurrHref.indexOf("www.younkers.com") > -1) {
		setTimeout(function () {
			try {
				var check = document.getElementsByClassName('lineCharge discount shippingDiscount')[0];
				if(check)
				{
					finalCode = check.getElementsByTagName('span')[0].innerText;
					totalSavings = check.getElementsByTagName('span')[1].innerText.split('-')[1];
				}
				SavingsPopup(finalCode, totalSavings);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 2000);
	}
	if (CurrHref.indexOf("shop.straighttalk.com") > -1) {
		var strahttp = new XMLHttpRequest();
		strahttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var check = doc.getElementsByClassName("discount-promo column")[0];
					if(check)
					{
						finalCode = check.innerText.replace("DISCOUNT", "");
						finalCode = finalCode.replace(/\(|\)/g, '');
						totalSavings = doc.getElementsByClassName("discount-amount column")[0].innerText.split('-')[1];
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		strahttp.open("GET", CurrHref, false);
		strahttp.send();
	}
	if (CurrHref.indexOf("www.fossil.com") > -1) {
		var strahttp = new XMLHttpRequest();
		strahttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					finalCode = doc.getElementsByClassName("order-summary-item promo-code")[0].getAttribute("data-ref");
					totalSavings = doc.getElementsByClassName('order-summary-item promo-code')[0].getElementsByTagName('span')[2].innerText.split('-')[1];
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		strahttp.open("GET", CurrHref, false);
		strahttp.send();
	}
	if (CurrHref.indexOf("www.shoecarnival.com") > -1) {
		var shoehttp = new XMLHttpRequest();
		shoehttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var beforeTotal = document.getElementsByClassName('order-value')[0].innerText.replace(/[$,]/g, '');
					beforeTotal = Number(beforeTotal);
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var CouponClass = doc.getElementsByClassName("rowcoupons cart-row");
					for (var i = 0; i < CouponClass.length; i++) {
						if (CouponClass[i].getElementsByClassName("bonus-item")[0].innerText == "Applied") {
							testCode = CouponClass[i].getElementsByClassName("value")[0].innerText;
							shoecarnArr.push(testCode);
							finalCode = shoecarnArr;
							var afterTotal = doc.getElementsByClassName('order-value')[0].innerText.replace(/[$,]/g, '');
							afterTotal = Number(afterTotal);
							var savings = beforeTotal - afterTotal;
							if (savings > 0) {
								totalSavings = "$" + savings.toFixed(2);
							}
						}
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		shoehttp.open("GET", CurrHref, false);
		shoehttp.send();
	}
	if (CurrHref.indexOf("www.shopbop.com") > -1) {
		setTimeout(function () {
			try {
				var totalPriceClass = document.getElementById('productTotal').getElementsByClassName('toggleOff')[0];
				var totalPrice = totalPriceClass.innerText.replace(/[$,]/g, '');
				var totalPriceNumber = Number(totalPrice);
				var session = "";
				var sessionId = document.getElementById('spfCsrf');
				if (sessionId) {
					session = sessionId.value;
				}
				var params = "_csrf=" + session + "&promotionCode=" + finalCode + "";
				var shopbophttp = new XMLHttpRequest();
				shopbophttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						try {
							if (totalPriceClass) {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								var discountPrice = doc.getElementById('productTotal').getElementsByClassName('toggleOff')[0].innerText.replace(/[$,]/g, '');
								var discountPriceNumber = Number(discountPrice);
								var totalSavingsNumber = totalPriceNumber - discountPriceNumber;
								if (totalSavingsNumber > 0) {
									var totalSavingsNumberInt = Math.ceil(totalSavingsNumber);
									totalSavings = "$" + totalSavingsNumberInt.toString();
								}
							}
							SavingsPopup(finalCode, totalSavings);
						} catch (e) {
							SavingsPopup(finalCode, totalSavings);
							Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
						}
					}
				};
				shopbophttp.open("POST", shopbopCouponApi, false);
				shopbophttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				shopbophttp.send(params);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 1000);
	}
	if (CurrHref.indexOf("www.harryanddavid.com") > -1) {
		setTimeout(function () {
			try {
				var i = harryDisArr.indexOf(Math.max.apply(null, harryDisArr));
				finalCode = harryCoupArr[i];
				var OrderId = document.getElementById('currentOrderId').value;
				var params = "PiId=&storeccno=&storeccname=&ccExpMonth=&ccExpYear=&plccstoreccno=%2F&plccstoreccname=%2F&chkFlw=Y&selectedType=promotion&storeId=21051&langId=-1&orderId=" + OrderId + "&catalogId=16802&taskType=A&existingPromoCode=&existingCouponId=&existingCouponBalance=&addGiftRewardFlag=&appliedPromoCode=" + finalCode + "&currentPayment=creditcard&isPromoValid=true&previousPayment=&removeExistingPromo=&excludedPromoCode=&promoZipCodeID=&PaymentTypePromotion=PaymentTypePromotionCallBack%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&PaymentTypePromotionCmd=PaymentTypePromotion%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&RemovePromotionView=RemovePromotionView%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&PlaceOrderDisplayCmdURL=FDPlaceOrderDisplayCmd%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802&AskSuggestionPromotionView=AskSuggestionPromotionView%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&AddOrRemovePromotionOrEGCView=AddOrRemovePromotionOrEGCView%3FlangId%3D-1%26storeId%3D21051%26catalogId%3D16802%26orderId%3D" + OrderId + "&promoCode=" + finalCode + "&membershipPromo=";
				var harryhttp = new XMLHttpRequest();
				harryhttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						var savings = harryDisArr[i];
						if (savings > 0) {
							totalSavings = "$" + savings.toFixed(2);
						}
						SavingsPopup(finalCode, totalSavings);
					}
				};
				harryhttp.open("POST", harryCouponApi, false);
				harryhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				harryhttp.send(params);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 5000);
	}
	if (CurrHref.indexOf("www.columbia.com") > -1) {
		try {
			totalSavings = document.getElementsByClassName("cart-order-totals")[0].getElementsByTagName('span')[1].innerText;
			finalCode = document.getElementsByClassName("coupon-number")[0].getElementsByTagName('span')[1].innerText;
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.torrid.com") > -1) {
		var torrhttp = new XMLHttpRequest();
		torrhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					totalSavings = doc.getElementsByClassName('odisc')[0].innerText.split('-')[1];
					var CouponClass = doc.getElementsByClassName("rowcoupons");
					for (var i = 0; i < CouponClass.length; i++) {
						if (CouponClass[i].getElementsByClassName("bonus-item")[0].innerText == "Applied") {
							finalCode = CouponClass[i].getElementsByClassName("value")[0].innerText;
						}
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		torrhttp.open("GET", CurrHref, false);
		torrhttp.send();
	}
	if (CurrHref.indexOf("www.michaels.com") > -1) {
		try {
			var maxIndex = michaelDiscArr.indexOf(Math.max.apply(null, michaelDiscArr));
			finalCode = michaelCoupArr[maxIndex];
			var savings = michaelDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var session = document.getElementById('cart-items-form').action.split('=')[1];
			var params = "dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var michaelshttp = new XMLHttpRequest();
			michaelshttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			michaelshttp.open("POST", michaelsCouponApi + session, false);
			michaelshttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			michaelshttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			michaelshttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.avenue.com") > -1) {
		try {
			var session = "";
			var sessionClass = document.getElementsByClassName('cart-action-continue-shopping')[0];
			if (sessionClass) {
				session = "?dwcont=" + sessionClass.action.split('=')[1];
			}
			var i = avenueDiscArr.indexOf(Math.max.apply(null, avenueDiscArr));
			finalCode = avenueCoupArr[i];
			var saving = avenueDiscArr[i];
			if (saving > 0) {
				totalSavings = "$" + saving.toFixed(2);
			}
			var params = "dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=Apply";
			var avenuehttp = new XMLHttpRequest();
			avenuehttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						SavingsPopup(finalCode, totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			avenuehttp.open("POST", avenueCouponApi + session, false);
			avenuehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			avenuehttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.crocs.com") > -1) {
		setTimeout(function () {
			try {
				var i = crocsDiscArr.indexOf(Math.max.apply(null, crocsDiscArr));
				finalCode = crocsCoupArr[i];
				document.getElementById('couponFld').value = finalCode;
				document.getElementById('addcoup').click();
				var saving = crocsDiscArr[i];
				if (saving > 0) {
					totalSavings = "$" + saving.toFixed(2);
				}
				SavingsPopup(finalCode, totalSavings);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 1000);
	}
	if (CurrHref.indexOf("www.quill.com") > -1) {
		try {
			var i = quillDiscArr.indexOf(Math.max.apply(null, quillDiscArr));
			finalCode = quillCoupArr[i];
			var saving = quillDiscArr[i];
			if (saving > 0) {
				totalSavings = "$" + saving.toFixed(2);
			}
			SavingsPopup(finalCode, totalSavings);
			document.getElementById('CouponInput').value = finalCode;
			document.getElementsByClassName('applyBtn button scTrack cta couponStackableBtn')[0].click();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("lenovo.com") > -1) {
		try {
			var i = lenovoDiscArr.indexOf(Math.max.apply(null, lenovoDiscArr));
			finalCode = lenovoCoupArr[i];
			var TokenId = document.getElementsByName("CSRFToken")[0].value;
			var params = "couponCode=" + finalCode + "&avoid_enter_submit=&voucherCode=" + finalCode + "&CSRFToken=" + TokenId + "";
			var lenovohttp = new XMLHttpRequest();
			lenovohttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						finalCode = doc.getElementsByClassName('price-calculator-cart-summary-couponCode')[0].innerText;
						totalSavings = doc.getElementsByClassName("price-calculator-cart-summary-couponSaved")[0].innerText;
						SavingsPopup(finalCode, totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			lenovohttp.open("POST", lenovoCouponApi, false);
			lenovohttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			lenovohttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.bloomingdales.com") > -1) {
		try {
			document.getElementById("lnkApplyPromos").disabled = false;
			var inputField = document.getElementById('promoCode');
			inputField.value = finalCode;
			document.getElementById('lnkApplyPromos').click();
			totalSavings = localStorage.getItem("bloomingdales");
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("store.hp.com") > -1) {
		setTimeout(function () {
			try {
				var cartSubTot = document.getElementById('cartSubtotal');
				var disHPprice = cartSubTot.innerText.replace(/[$,]/g, '');
				var disHPpriceNumber = Number(disHPprice);
				var finalcodeClass = document.getElementsByClassName('couponAppliedText mcprodprice')[0];
				if (finalcodeClass) {
					finalCode = finalcodeClass.innerText.split(' ')[1]
						var totalSavingsNumber = totalHPpriceNumber - disHPpriceNumber;
					if (totalSavingsNumber > 0) {
						totalSavings = '$' + totalSavingsNumber;
					}
				}
				SavingsPopup(finalCode, totalSavings);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 1000);
	}
	if (CurrHref.indexOf("www.dell.com") > -1) {
		var params = "{'CouponCode':'" + finalCode + "'}";
		var dellhttp = new XMLHttpRequest();
		dellhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 201) {
				try {
					var totalResponse = this.responseText;
					var totalResponseobj = JSON.parse(totalResponse)
						if (totalResponseobj.Coupons[0]) {
							finalCode = totalResponseobj.Coupons[0].CouponCode;
							totalSavings = totalResponseobj.Coupons[0].Amount.split('-')[1];
						}
						SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		dellhttp.open("POST", dellCouponApi, false);
		dellhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8", "Accept", "application/json, text/plain, */*");
		dellhttp.send(params);
	}
	if (CurrHref.indexOf("www.kmart.com") > -1) {
		try {
			var maxIndex = kmartDiscArr.indexOf(Math.max.apply(null, kmartDiscArr));
			finalCode = kmartCoupArr[maxIndex];
			var savings = kmartDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
				SavingsPopup(finalCode, totalSavings);
			} else {
				SavingsPopup(finalCode, totalSavings);
			}
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.ediblearrangements.com") > -1) {
		try {
			var i = edibleDiscArr.indexOf(Math.max.apply(null, edibleDiscArr));
			finalCode = edibleCoupArr[i];
			var inputField = document.getElementById('ctl00_cpBody_rptSale_ctl00_txtCoupon');
			inputField.value = finalCode;
			document.getElementById('ctl00_cpBody_rptSale_ctl00_btnApplyCoupon').click();
			var torrhttp = new XMLHttpRequest();
			torrhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						totalSavings = doc.getElementById("ctl00_cpBody_rptSale_ctl00_Tr1").getElementsByClassName("boldText tRight")[0].innerText.replace(/\(|\)/g, '');
						SavingsPopup(finalCode, totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			torrhttp.open("GET", CurrHref, false);
			torrhttp.send();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.reebok.com") > -1) {
		var reebokhttp = new XMLHttpRequest();
		reebokhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					finalCode = doc.getElementsByClassName("accepted-coupon-holder clearfix")[0].nextElementSibling.value.replace("Remove ", "");
					var savings = doc.getElementsByClassName("totalsaving")[0].getElementsByClassName("value")[0].getAttribute("data-amount");
					savings = Number(savings);
					if (savings > 0) {
						totalSavings = "$" + savings.toFixed(2);
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		reebokhttp.open("GET", reebokWalletApi, false);
		reebokhttp.setRequestHeader("accept", "ext/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
		reebokhttp.send();
	}
	if (CurrHref.indexOf("www.ralphlauren.com") > -1) {
		try {
			var check = document.getElementsByClassName('apply-promo-code-summary')[0];
			finalCode = document.getElementsByClassName('success')[0].getElementsByTagName('strong')[0].innerText;
			totalSavings = ("$" + totalsavefinal);
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.dermstore.com") > -1) {
		var i = dermstoreDiscArr.indexOf(Math.max.apply(null, dermstoreDiscArr));
		finalCode = dermstoreCoupArr[i];
		var params = "promo=" + finalCode + "";
		var dermhttp = new XMLHttpRequest();
		dermhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var totalResponseobj = JSON.parse(this.responseText);
					var check = totalResponseobj.message;
					if (check == "ok") {
						finalCode = totalResponseobj.order.order_discount_code;
						var saving = Number(totalResponseobj.order.order_total_discount);
						if (saving > 0) {
							totalSavings = "$" + totalResponseobj.order.order_total_discount;
						}
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
				}
			}
		};
		dermhttp.open("POST", dermCouponApi, false);
		dermhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		dermhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
		dermhttp.setRequestHeader("x-distil-ajax", "dtyqytwbbuedtbrzwctsetyxbrvacc");
		dermhttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
		dermhttp.send(params);
	}
	if (CurrHref.indexOf("www.cheapoair.com") > -1) {
		setTimeout(function () {
			try {
				var inputField = document.getElementById('PromoCode');
				finalCode = cheapairCoupArr[cheapArrayIndex];
				inputField.value = finalCode;
				document.getElementById('promodiv').getElementsByClassName('price-itinerary__item')[2].getElementsByTagName('a')[0].click();
				var savings = cheapairDisArr[cheapArrayIndex];
				if (savings > 0) {
					totalSavings = "$" + savings.toFixed(2);
				}
				SavingsPopup(finalCode, totalSavings);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 3000);
	}
	if (CurrHref.indexOf("www.jcrew.com") > -1) {
		setTimeout(function () {
			finalCode = jcrewCoupArr[0];
			var params = "bmForm=frm_shopping_cart_continue&bmFormID=mdbZclM%2F1634f16f9c0&bmUID=mdbZclN&bmIsForm=true&bmPrevTemplate=%2Fcheckout2%2Fshoppingbag.jsp&bmEditable=bmAction&bmArch=bmAction&bmAction=add_promo_code&bmEditable=bmSubmit&bmArch=bmSubmit&bmSubmit=add_promo_code&bmEditable=isPayPalExpress&bmHidden=isPayPalExpress&isPayPalExpress=&bmEditable=continueFromBag&bmHidden=continueFromBag&continueFromBag=&bmEditable=continueFromBagProductIDs&bmHidden=continueFromBagProductIDs&continueFromBagProductIDs=&bmEditable=checkoutVersion&bmHidden=checkoutVersion&checkoutVersion=2&bmEditable=isMasterPassExpress&bmHidden=isMasterPassExpress&isMasterPassExpress=&bmSingle=temp_quantity&temp_quantity=4&bmSingle=temp_quantity&temp_quantity=3&bmEditable=jc_country&bmHidden=jc_country&jc_country=US&bmText=GENERIC%3C%3Etax_postal&GENERIC%3C%3Etax_postal=&bmText=promotionCode1&promotionCode1=" + finalCode + "&bmEditable=delete_card_id&bmHidden=delete_card_id&delete_card_id=&bmText=ACCOUNT%3C%3EaccountNumber&ACCOUNT%3C%3EaccountNumber=&bmText=ACCOUNT%3C%3EpinNumber&ACCOUNT%3C%3EpinNumber=&bmFields=bmText%2CbmEditable%2CbmPrevTemplate%2CbmForm%2CbmIsForm%2CbmUID%2CbmHidden%2CbmArch%2CbmFormID%2CbmSingle&bmHash=352594f4f23c56be0af03c183c6115b35db7ba5f";
			var jcrewhttp = new XMLHttpRequest();
			jcrewhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var totalCost,
						totalCostNum;
						var totalCostClass = document.getElementsByClassName('summary-item summary-subtotal')[0].getElementsByClassName('summary-value notranslate')[0];
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var numberFinder = /\d+/;
						var afterDisCost = doc.getElementsByClassName('summary-item summary-subtotal')[0].getElementsByClassName('summary-value notranslate')[0].innerText;
						var afterDisCostWithoutCurrArray = afterDisCost.match(numberFinder);
						var afterDisCostDigit = afterDisCostWithoutCurrArray[0];
						var currencyWithDigit = afterDisCostWithoutCurrArray.input;
						var currency = currencyWithDigit[0];
						var afterDisCostNum = Number(afterDisCostDigit);
						if (totalCostClass) {
							totalCost = totalCostClass.innerText;
							totalCostWithoutCurrArray = totalCost.match(numberFinder);
							totalCostDigit = totalCostWithoutCurrArray[0];
							totalCostNum = Number(totalCostDigit);
						}
						var totalSavingsNum = totalCostNum - afterDisCostNum;
						if (totalSavingsNum > 0) {
							totalSavings = "$" + totalSavingsNum.toFixed(2);
						}
						SavingsPopup(finalCode, totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			jcrewhttp.open("POST", jcrewCouponApi, false);
			jcrewhttp.send(params);
		}, 2000);
	}
	if (CurrHref.indexOf("www.bodybuilding.com") > -1) {
		try {
			var session = document.getElementsByName("_dynSessConf")[0].value;
			var charset = document.getElementsByName("_dyncharset")[0].value;
			var looplength = document.getElementsByClassName("quantity-select__control").length;
			var finalproductcoount = bodybuildingParms.substring(1);
			var i = bodybuildingDisArr.indexOf(Math.max.apply(null, bodybuildingDisArr));
			finalCode = bodybuildingCoupArr[i];
			var savings = bodybuildingDisArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var params = "_dyncharset=" + charset + "&_dynSessConf=" + session + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.checkout=+&" + finalproductcoount + "&updateCartButton=submit&_D%3AupdateCartButton=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.updateSuccessURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.updateSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.updateErrorURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.updateErrorURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.removeItemFromOrderSuccessURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.removeItemFromOrderSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.removeItemFromOrderErrorURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.removeItemFromOrderErrorURL=+&promoCode=" + finalCode + "&_D%3ApromoCode=+&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.checkout=+&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.payPalExpressCheckoutFromCart=+&access_token=&_D%3Aaccess_token=+&token_type=&_D%3Atoken_type=+&expires_in=&_D%3Aexpires_in=+&scope=&_D%3Ascope=+&billingAgreementId=&_D%3AbillingAgreementId=+&orderReferenceId=&_D%3AorderReferenceId=+&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.amazonPayCheckoutFromCart=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.moveToPurchaseInfoErrorURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fcart.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.moveToPurchaseInfoErrorURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.qualifiedFreeGiftsUrl=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fqualified-freegifts.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.qualifiedFreeGiftsUrl=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.billingInfoUrl=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fbilling.jsp%3FallowLogin%3Dtrue&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.billingInfoUrl=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.loginDuringCheckoutURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fqualified-freegifts.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.loginDuringCheckoutURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.confirmationURL=https%3A%2F%2Fwww.bodybuilding.com%2Fstore%2Fcommerce%2Fqualified-freegifts.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCartFormHandler.confirmationURL=+&_DARGS=%2Fstore%2Fcommerce%2Fcart%2Fcart-container.jsp.cartForm";
			var bodybuildinghttp = new XMLHttpRequest();
			bodybuildinghttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			bodybuildinghttp.open("POST", bodybuildingCouponApi, false);
			bodybuildinghttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			bodybuildinghttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			bodybuildinghttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.sierratradingpost.com") > -1) {
		var params = "KeyCode=" + finalCode;
		var paramsRem = "KeyCode=REMOVE_ME";
		var sierrRemhttp = new XMLHttpRequest();
		sierrRemhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				var sierrahttp = new XMLHttpRequest();
				sierrahttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						var sierrobj = JSON.parse(this.responseText);
						var orderTotal = sierrobj.orderTotal;
						var totalSavingsVal = Number(orderTotal.replace(/[$,]/g, ''));
						if (totalSavingsVal == sierrorderSubtotal) {
							totalSavings = localStorage.getItem("sierratradingpost");
							totalSavings = "$" + totalSavings;
						}
						SavingsPopup(finalCode, totalSavings);
					}
				};
				sierrahttp.open("POST", sierraCouponApi, false);
				sierrahttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				sierrahttp.setRequestHeader("accept", "*/*");
				sierrahttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
				sierrahttp.send(params);
			}
		};
		sierrRemhttp.open("POST", sierraCouponApi, false);
		sierrRemhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		sierrRemhttp.setRequestHeader("accept", "*/*");
		sierrRemhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		sierrRemhttp.send(paramsRem);
	}
	if (CurrHref.indexOf("www.victoriassecret.com") > -1) {
		try {
			var oldTotal = document.getElementsByClassName('totalSection')[0].getElementsByTagName('b')[0].innerText.replace(/[$,]/g, '');
			var oldTotalNum = Number(oldTotal);
			var params = "dataSaveType=flow&offerModel%5B0%5D.index=0&offerModel%5B0%5D.offerCode=" + finalCode + "&offerModel%5B1%5D.index=1&offerModel%5B1%5D.offerCode=&offerModel%5B2%5D.index=2&offerModel%5B2%5D.offerCode=";
			var victohttp = new XMLHttpRequest();
			victohttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var totalResponseobj = JSON.parse(this.responseText);
						if (totalResponseobj.offersModel[0].code2) {
							var newTotal = totalResponseobj.orderModel.inStockTotal.ordrTotal;
							var newTotalNum = Number(newTotal);
							var savings = oldTotalNum - newTotalNum;
							if (savings > 0) {
								totalSavings = "$" + savings.toFixed(2);
							}
						}
						SavingsPopup(finalCode, totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid JSON, " + e);
					}
				}
			};
			victohttp.open("POST", victoCouponApi, false);
			victohttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
			victohttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
			victohttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.restaurant.com") > -1) {
		var resthttp = new XMLHttpRequest();
		resthttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var savings = Number(doc.getElementsByClassName('discount')[0].getElementsByTagName('span')[0].innerText.replace(/[()]/g, ''));
					if (savings > 0) {
						totalSavings = "$" + savings.toFixed(2);
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		resthttp.open("GET", "https://www.restaurant.com/cart", false);
		resthttp.send();
	}
	if (CurrHref.indexOf("from.bookit.com") > -1) {
		try {
			var savings = Number(document.getElementsByClassName("csb-amount")[0].innerText.replace(/[$,-]/g, ''));
			finalCode = document.getElementsByClassName("l csb-headers position-relative")[0].getElementsByTagName("P")[0].innerText.split(" ")[2]
				if (savings > 0) {
					totalSavings = "$" + savings.toFixed(2);
				}
				SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.pepboys.com") > -1) {
		var resthttp = new XMLHttpRequest();
		resthttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					var savings = Number(doc.getElementsByClassName('cart table')[0].getElementsByTagName('tr')[3].getElementsByClassName('row-fluid')[1].getElementsByClassName('ftDiscount')[0].innerText);
					finalCode = doc.getElementsByClassName('cart table')[0].getElementsByTagName('tr')[3].getElementsByTagName('div')[0].getElementsByTagName('strong')[0].innerText;
					if (savings > 0) {
						totalSavings = "$" + savings.toFixed(2);
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		resthttp.open("GET", CurrHref, false);
		resthttp.send();
	}
	if (CurrHref.indexOf("www.ebags.com") > -1) {
		var params = "SourceCode=" + couponCode;
		var ebagshttp = new XMLHttpRequest();
		ebagshttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var parser = new DOMParser();
					var doc = parser.parseFromString(this.responseText, "text/html");
					finalCode = doc.getElementById("enterMeCode").value;
					totalSavings = doc.getElementById("discountsavingstotal").innerText;
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		ebagshttp.open("POST", ebagsCouponApi, false);
		ebagshttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ebagshttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
		ebagshttp.send(params);
	}
	if (CurrHref.indexOf("www.orientaltrading.com") > -1) {
		var i = orientalDisArr.indexOf(Math.max.apply(null, orientalDisArr));
		finalCode = orientalProCoupArr[i];
		var savings = orientalDisArr[i];
		if (savings > 0) {
			totalSavings = "$" + savings.toFixed(2);
		}
		var orientalhttp = new XMLHttpRequest();
		orientalhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				SavingsPopup(finalCode, totalSavings);
			}
		};
		orientalhttp.open("GET", orientalCouponApi + finalCode, false);
		orientalhttp.send();
	}
	if (CurrHref.indexOf("www.orvis.com") > -1) {
		try {
			var maxIndex = orvisDiscArr.indexOf(Math.max.apply(null, orvisDiscArr));
			finalCode = orvisCoupArr[maxIndex];
			var saving = orvisDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = "$" + saving.toFixed(2);
			}
			var params = "{'specialOfferCode':'" + finalCode + "'}";
			var orvishttp = new XMLHttpRequest();
			orvishttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			orvishttp.open("POST", orvisCouponApi, true);
			orvishttp.setRequestHeader("content-type", "application/json");
			orvishttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
			orvishttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.yankeecandle.com") > -1) {
		try {
			var i = yankDiscArr.indexOf(Math.max.apply(null, yankDiscArr));
			finalCode = yankCoupArr[i];
			var savings = yankDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var dynSessConf = document.getElementsByName("_dynSessConf")[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynSessConf + "&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponClaimCode=" + finalCode + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=Apply&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCouponSuccessURL=%2Fcart%2Fbag.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCouponSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCouponErrorURL=%2Fcart%2Fbag.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCouponErrorURL=+&_DARGS=%2Fcart%2Fincludes%2Fpromotion-code.jsp.applyCouponform";
			var yankhttp = new XMLHttpRequest();
			yankhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			yankhttp.open("POST", yankeeCouponApi, false);
			yankhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			yankhttp.setRequestHeader("Accept", "*/*");
			yankhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.guitarcenter.com") > -1) {
		try {
			var i = guitarDiscArr.indexOf(Math.max.apply(null, guitarDiscArr));
			finalCode = guitarCoupArr[i];
			var savings = guitarDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var dynSession = document.getElementsByName('_dynSessConf')[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynSession + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + couponCode.toLowerCase() + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=%2Fcart&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=%2Fcart&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.filterShippingPromotion=true&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.filterShippingPromotion=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=true&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fcrt%2Fincludes%2FcartBody.jsp.couponForm";
			var guitarhttp = new XMLHttpRequest();
			guitarhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			guitarhttp.open("POST", guitarCouponApi, false);
			guitarhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			guitarhttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			guitarhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.juicycouture.com") > -1) {
		try {
			var i = juicyDiscArr.indexOf(Math.max.apply(null, juicyDiscArr));
			finalCode = juicyCoupArr[i];
			var savings = juicyDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var reqToken = document.getElementsByName('__RequestVerificationToken')[0].value;
			var params = "PromoCode=" + couponCode + "&__RequestVerificationToken=" + reqToken + "";
			var juicyhttp = new XMLHttpRequest();
			juicyhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			juicyhttp.open("POST", juicyCouponApi, false);
			juicyhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
			juicyhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.nyandcompany.com") > -1) {
		setTimeout(function () {
			try {
				var maxIndex = nyandcompanyDiscArr.indexOf(Math.max.apply(null, nyandcompanyDiscArr));
				finalCode = nyandcompanyCoupArr[maxIndex];
				var dynamicSession = document.getElementById('miniCheckout').getElementsByTagName("input")._dynSessConf.value;
				var params = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=%2Fcheckout%2Fgadgets%2FcheckoutCouponErrorMessage.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + finalCode + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fcheckout%2Fgadgets%2FbillingForm.jsp.apply_coupon";
				var nyandcompanyhttp = new XMLHttpRequest();
				nyandcompanyhttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						var nySavinghttp = new XMLHttpRequest();
						nySavinghttp.onreadystatechange = function () {
							if (this.readyState == 4) {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								var savings = Number(doc.getElementsByClassName("t-cell line-value discounted")[0].innerText.replace(/[-$,]/g, ''));
								if (savings > 0) {
									totalSavings = "$" + savings.toFixed(2);
								}
								SavingsPopup(finalCode, totalSavings);
							}
						}
						nySavinghttp.open("GET", CurrHref, false);
						nySavinghttp.send();
					}
				}
				nyandcompanyhttp.open("POST", nyandcompanyCouponApi, false);
				nyandcompanyhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				nyandcompanyhttp.send(params);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 2000);
	}
	if (CurrHref.indexOf("dunkindonuts.com") > -1) {
		try {
			var maxIndex = dunkDiscArr.indexOf(Math.max.apply(null, dunkDiscArr));
			finalCode = dunkCoupArr[maxIndex];
			var savings = dunkDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.tirebuyer.com") > -1) {
		try {
			var maxIndex = tirebuyDiscArr.indexOf(Math.max.apply(null, tirebuyDiscArr));
			finalCode = tirebuyCouponArr[maxIndex];
			var savings = tirebuyDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var totalAfterPromotions = document.getElementsByName("totalAfterPromotions")[0].value;
			var haspromo = document.getElementsByName("hasPromotions")[0].value;
			var hascompatible = document.getElementsByName("hasCompatibleVoucher")[0].value;
			var params = "hasPromotions=true&totalAfterPromotions=" + totalAfterPromotions + "&hasCompatibleVoucher=" + hascompatible + "&totalVouchers=0.0&couponcode=" + couponCode;
			var tirebuyerhttp = new XMLHttpRequest();
			tirebuyerhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			tirebuyerhttp.open("POST", tireCouponApi, false);
			tirebuyerhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			tirebuyerhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("cottonon.com") > -1) {
		try {
			var savings = Number(document.getElementsByClassName("small-6 small-text-right column")[0].innerText.replace(/[-US$,]/g, ''));
			var minIndex = cottononDiscArr.indexOf(Math.min.apply(null, cottononDiscArr));
			finalCode = cottononCoupArr.join(", ");
			var couponssavings = cottononDiscArr[minIndex];
			var totSaving = savings - couponssavings;
			if (totSaving > 0) {
				totalSavings = "$" + totSaving.toFixed(2);
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.blair.com") > -1) {
		try {
			var i = blairDiscArr.indexOf(Math.max.apply(null, blairDiscArr));
			finalCode = blairCoupArr[i];
			var savings = blairDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var params = "form_state=updatePromoCodeForm&delete=false&promoCode=" + finalCode + "";
			var blairhttp = new XMLHttpRequest();
			blairhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					var blairObj = JSON.parse(this.responseText);
					var successmsg = blairObj.applied;
					if (successmsg == "true") {
						SavingsPopup(finalCode, totalSavings);
					}
				}
			};
			blairhttp.open("POST", blairCouponApi, false);
			blairhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			blairhttp.setRequestHeader("accept", "text/html, */*; q=0.01");
			blairhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			blairhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.speckproducts.com") > -1) {
		try {
			if (specksavings) {
				totalSavings = "$" + specksavings.toFixed(2);
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.jimmyjazz.com") > -1) {
		try {
			var i = jimmyDiscArr.indexOf(Math.max.apply(null, jimmyDiscArr));
			finalCode = jimmyCoupArr[i];
			var savings = jimmyDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var jimmyhttp = new XMLHttpRequest();
			jimmyhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			jimmyhttp.open("GET", "http://www.jimmyjazz.com/cart-request/cart/option?promotion_code=" + finalCode + "&toggle=1&option=promotion", false);
			jimmyhttp.send();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.eyebuydirect.com") > -1) {
		try {
			var i = eyebuyDiscArr.indexOf(Math.max.apply(null, eyebuyDiscArr));
			finalCode = eyebuyCoupArr[i];
			var savings = eyebuyDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var params = "redeem_coupon=" + finalCode + "";
			var eyebuyhttp = new XMLHttpRequest();
			eyebuyhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			eyebuyhttp.open("POST", eyebuyCouponApi, false);
			eyebuyhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			eyebuyhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
			eyebuyhttp.setRequestHeader("x-requested-with", "XMLHttpRequest");
			eyebuyhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.ashford.com") > -1) {
		setTimeout(function () {
			try {
				var maxIndex = ashfordDiscArr.indexOf(Math.max.apply(null, ashfordDiscArr));
				finalCode = ashfordCoupArr[maxIndex];
				var dynamicSession = document.getElementById('continueShoppingForm').getElementsByTagName("input")._dynSessConf.value;
				var params = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.useForwards=true&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.useForwards=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.applyCouponSuccessURL=%2Fcart%2Fjson%2FcartContents_new.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.applyCouponSuccessURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.applyCouponErrorURL=%2Fcart%2Fjson%2FcartContents_new.jsp&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.applyCouponErrorURL=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponCode=" + finalCode + "&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.couponCode=+&%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=&_D%3A%2Fatg%2Fstore%2Forder%2Fpurchase%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fcart%2Fgadgets%2FshoppingCartForms.jsp.applyCouponForm";
				var ashfordhttp = new XMLHttpRequest();
				ashfordhttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						var ashfordSavinghttp = new XMLHttpRequest();
						ashfordSavinghttp.onreadystatechange = function () {
							if (this.readyState == 4) {
								try {
									var parser = new DOMParser();
									var doc = parser.parseFromString(this.responseText, "text/html");
									savingClass = doc.getElementsByClassName("checkout_text_color_red")[4];
									if (savingClass) {
										var saving = Number(savingClass.innerText.replace(/[-$,]/g, ""));
										if (saving > 0) {
											totalSavings = "$" + saving.toFixed(2);
										}
									}
									SavingsPopup(finalCode, totalSavings);
								} catch (e) {
									SavingsPopup(finalCode, totalSavings);
									Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
								}
							}
						}
						ashfordSavinghttp.open("GET", CurrHref, false);
						ashfordSavinghttp.send();
					}
				}
				ashfordhttp.open("POST", ashfordCouponApi, false);
				ashfordhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				ashfordhttp.send(params);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 2000);
	}
	if (CurrHref.indexOf("www.rockbottomgolf.com") > -1) {
		var maxIndex = rockbottomgolfDiscArr.indexOf(Math.max.apply(null, rockbottomgolfDiscArr));
		finalCode = rockbottomgolfCoupArr[maxIndex];
		var params = "couponcode=&action=applycoupon&code=" + finalCode;
		var rockbottomgolfhttp = new XMLHttpRequest();
		rockbottomgolfhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var rockSavinghttp = new XMLHttpRequest();
					rockSavinghttp.onreadystatechange = function () {
						if (this.readyState == 4) {
							try {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								var savingLength = doc.getElementsByClassName("cart-total-value").length;
								if (savingLength > 3) {
									totalSavings = doc.getElementsByClassName("cart-total-value")[1].innerText.split("-")[1];
								}
								SavingsPopup(finalCode, totalSavings);
							} catch (e) {
								SavingsPopup(finalCode, totalSavings);
								Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
							}
						}
					}
					rockSavinghttp.open("GET", CurrHref, false);
					rockSavinghttp.send();
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		rockbottomgolfhttp.open("POST", rockbottomgolfCouponApi, false);
		rockbottomgolfhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		rockbottomgolfhttp.send(params);
	}
	if (CurrHref.indexOf("www.shopko.com") > -1) {
		try {
			var i = shopkoDiscArr.indexOf(Math.max.apply(null, shopkoDiscArr));
			finalCode = shopkoCoupArr[i];
			var savings = shopkoDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var params = "form_state=updatePromoCodeForm&promoCode=" + finalCode + "&delete=false";
			var shopkohttp = new XMLHttpRequest();
			shopkohttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					var shopkoObj = JSON.parse(this.responseText);
					var successmsg = shopkoObj.applied;
					if (successmsg == "true") {
						SavingsPopup(finalCode, totalSavings);
					}
				}
			};
			shopkohttp.open("POST", shopkoCouponApi, false);
			shopkohttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			shopkohttp.setRequestHeader("accept", "*/*");
			shopkohttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			shopkohttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.shoesforcrews.com") > -1) {
		try {
			var i = crewsDiscArr.indexOf(Math.max.apply(null, crewsDiscArr));
			finalCode = crewsCoupArr[i];
			var savings = crewsDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var params = "method=setKeyCode&KeyCode=" + finalCode + "";
			var crewshttp = new XMLHttpRequest();
			crewshttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			crewshttp.open("POST", shoescrewsCouponApi, false);
			crewshttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			crewshttp.setRequestHeader("accept", "*/*");
			crewshttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			crewshttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.bhcosmetics.com") > -1) {
		try {
			var i = bhcoDiscArr.indexOf(Math.max.apply(null, bhcoDiscArr));
			finalCode = bhcoCoupArr[i];
			var savings = bhcoDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			SavingsPopup(finalCode, totalSavings);
			if (document.getElementsByClassName("field__input-btn btn btn--disabled")[0]) {
				document.getElementsByClassName("field__input-btn btn btn--disabled")[0].disabled = false;
			}
			document.getElementById("checkout_reduction_code").value = finalCode;
			setTimeout(function () {
				document.getElementsByClassName("field__input-btn btn")[0].click();
			}, 500)
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.destinationmaternity.com") > -1) {
		try {
			var i = destiDiscArr.indexOf(Math.max.apply(null, destiDiscArr));
			finalCode = destiCoupArr[i];
			var savings = destiDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var destihttp = new XMLHttpRequest();
			destihttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			destihttp.open("GET", destinCouponApi + finalCode, false);
			destihttp.send();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.christopherandbanks.com") > -1) {
		try {
			var i = christoDiscArr.indexOf(Math.max.apply(null, christoDiscArr));
			finalCode = christoCoupArr[i];
			var savings = christoDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var christohttp = new XMLHttpRequest();
			christohttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			christohttp.open("GET", christoCouponApi + finalCode, false);
			christohttp.send();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.alibris.com") > -1) {
		try {
			var i = alibrisDiscArr.indexOf(Math.min.apply(null, alibrisDiscArr));
			finalCode = alibrisCoupArr[i];
			var params = "applyCoupon=true&couponCode=" + finalCode;
			var alibrishttp = new XMLHttpRequest();
			alibrishttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var applycode = doc.getElementsByClassName("coupon-applied")[0];
						if (applycode) {
							var discammount = Number(doc.getElementsByClassName("subtotal-price")[0].innerText.replace(/[$,"]/g, ''));
							var netamount = Number(doc.getElementsByClassName("amount")[0].getElementsByTagName("strike")[0].innerText.replace(/[$,"]/g, ''));
							var savings = netamount - discammount;
							if (savings > 0) {
								totalSavings = "$" + savings.toFixed(2);
							}
						}
						SavingsPopup(finalCode, totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			alibrishttp.open("POST", alibrisCouponApi, false);
			alibrishttp.setRequestHeader("content-type", " application/x-www-form-urlencoded");
			alibrishttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			alibrishttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.clarisonic.com") > -1) {
		var maxIndex = clarisonicDiscArr.indexOf(Math.max.apply(null, clarisonicDiscArr));
		finalCode = clarisonicCoupArr[maxIndex];
		var savings = clarisonicDiscArr[maxIndex];
		if (savings > 0) {
			totalSavings = "$" + savings.toFixed(2);
		}
		var clarisonichttp = new XMLHttpRequest();
		clarisonichttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				SavingsPopup(finalCode, totalSavings);
			}
		};
		clarisonichttp.open("GET", clarisonicCouponApi + finalCode + "&format=ajax", false);
		clarisonichttp.send();
	}
	if (CurrHref.indexOf("www.cafepress.com") > -1) {
		try {
			var i = cafepressDiscArr.indexOf(Math.max.apply(null, cafepressDiscArr));
			finalCode = cafepressCoupArr[i];
			var savings = cafepressDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var viewState = document.getElementById("__VIEWSTATE").value;
			var viewStateGenerator = document.getElementById("__VIEWSTATEGENERATOR").value;
			var eventValidation = document.getElementById("__EVENTVALIDATION").value;
			var cafeCashValue = document.getElementById("cafeCashValue").value;
			var cafeCashL10nValue = document.getElementById("cafeCashL10nValue").value;
			var gcValue = document.getElementById("gcValue").value;
			var gcL10nValue = document.getElementById("gcL10nValue").value;
			var minShippingId = document.getElementById("minShippingId").value;
			var pmChecked = document.getElementById("pmChecked").value;
			var BillCountry = document.getElementById("BillCountry").value;
			var ShipCountry = document.getElementById("ShipCountry").value;
			var countdown = document.getElementsByName("countdown")[0].value;
			var shippingradio = document.getElementsByName("shipping-radio")[0].value;
			var ShippingTableOption = document.getElementById("ShippingTableOption").value;
			var PayPageId = document.getElementsByName("LitlePayPage$requestPayPageId")[0].value;
			var ReportGroupId = document.getElementsByName("LitlePayPage$requestReportGroupId")[0].value;
			var MerchantTxnId = document.getElementsByName("LitlePayPage$requestMerchantTxnId")[0].value;
			var PayPageUrl = document.getElementsByName("LitlePayPage$requestPayPageUrl")[0].value;
			var params = "__VIEWSTATE=" + viewState + "&__VIEWSTATEGENERATOR=" + viewStateGenerator + "&__EVENTVALIDATION=%2FwEdAOkBjkzdio2E5DppIt0oT3cZU9qyhxJlcBXzwNkBlvLgMQ56XW5A8jViXnzBiORLsvq7TmzENSEY9CcpUuJ%2FkKbQWg7UmKwx9NH68HbI2TVBfrt7tANCH4hkc%2BufGN3MXQZIC8UaUa5rRwG0LWq8TQ0AX5laWHzWMHsEpGBa4NGdwUwTrRPlQhJse%2Bo2BAQxMaogl2Ogwuqm%2FvKVqIWaJqVO%2FTH2z7gY7m7pKKZfLTF8R1nL2fqrqz4rMxXZJ0s1ZGzjJPus0G%2BTTA%2FH2RhKUs%2F2FMxHahCzXucjtKpNDzxN4l7nhpceRTZL0wcw7JUVXCOGdrizS5aW4Snsxo1%2BZPApuKt%2BlgOZspypcDRsS4nGPvaAk6G%2F2Z6Imv2GFFY5O9LUld3hNo8runvVnAkfJ4n9hkuSnY866wI6WqWbiBXdf9diyvGjDgXf0JclmZaIkLcEtyZ6fKhxXnvpAhtiSuiTxxUE77kpQ66lizqiMLBK14ZXzLGkFQGssVcLbtyHeZ6n6YaYEv8ElwnmdImml1Qwi4qL4KrDGq64t4jXGJPzhbXL3CS5CMK9xxygSU4V23%2BWsDRXHegUwm28rKxo1RIAMMlmrk1weh4TbEQuvkkBOfnR0M6JByBU0uw%2Bh%2FhH8wX6TOGRz6DlPpi51NBnYnL1i1R8R7WuPMTeSp%2BMECpH9%2BGw00iXLNLTdl6PxlQ7I%2B%2FZZ%2BQCBvzb0c%2FlasxvsyxvLVPQyUAN%2B6lXFoMPeVH6riQ0DIs%2BqbklaQUL7Rhs%2BNqTLL0iPX5zQIbN6rqeInDMX%2FQqqR5EMOu7ifC4PAAExCaE%2BEyZq5RyT4yrimwDZbR%2FDAdngBukfPeKY2t9kkEvsqXkTIU9GZEMS9YTNHiaMNe435v%2FXM0ei8RWiWn9ZdZdPiLYTP1vGL3Z1vEcRhj5RA6De77sj%2FRhL6E%2FxNiTNoDUb07h87AK%2Baj72PespnM2EQqqYJFLJmnLJn9%2FJUPfHhsr1xzBinkMPzGutJ%2BM%2FXET9bLVjMu5Vv0cGE%2BT4r92rhfPS%2BzJZnOMsIZK0ntUNlZFnysKSbxW0Uaj%2Bzgv7vZtVC5fu2l3Wf718fvpE34%2FKcRdyW1YxaWmxjI0DeKgPPDz1j3AzGX2MpWg1M9MInrPkRYQI6EvHcbjrhShVMMFfxZ24%2BP1iHqvd2DCVsGath%2Fw548u%2F0u9ZpC2swnFAuoyDsmZCjxy3TcdFfYeRxwzxbzqBHSdojAhnfYY6e16Lb0H2aZ9IzqQJVlxEZiJwf0hcdJyYeqplnl3rWuGQfw6CUMnoDnzGGJ%2BwfPP9YdPOXqukZVPL3ZWFhi4hcHz5x0pmUO2SqdyCKdOjeXOD%2FouL8%2F5J5w1AzBqGjspmGRfdsUHsamHN6XgshxUg%2BbfTVY9NHFOLUE%2FRXlKgC%2FptF9WgZeVdY5EDe%2B8yqGxiGpIcG37aj4tUd%2F10gSWGnllEdrgByv4IpfkGQ4tcCnH%2F%2BsCCcBUCITkUQAS31lxJwevzRa%2FJ6yvk7e3Suvsgf2waNg6kDDaMicgZJokEpuF3crzr3DJhdne08lAuAIOKFHOTfiERy4ZAkd8PCX5SiozUmIEzuDrmY9SqXAE1z6HypI22tc9BswgseFGDgCnbhlpNgoqCvzSwZwL4fB0S7CsP%2BgXOaPW2Ss330xuyt%2BruK2fsRWN0OMaiqb42jRhcaLQ%2FS7edz%2BILZDxdwcZ30w71r%2B1pQt6CpHmS%2FfQ%2Bx4YzxAPMysfMGJoLejKqRk%2FzARsGC0%2BAw0c%2FwCCE0kkdKfQQW6k0RGNi9UEIGQZ7D5T2nF1tISiZw4y5fVbCzOT0eg6rfBGZ00As0106DENJelI8vgX%2BcR308mNk9QGsYYQLBqjrz8F93XQC%2FBHeYWyVsVHHnchh16zx9evt7dZ%2FcCrvWhClwUpSdSxJUMMkWsJ5W6URuB2W2Cc%2FXL6Rry1o2PTw4axE6%2BWSqSBWONsqXwSyBxzNFBUvENsxsdx693xACbzLGTInBJtlzPXui6bnc8l2RhPglfAZUAQcFZ9LY9MZ9pFyH0SKRlDNxoXJyc%2B%2Bk8x%2Bu1wJdtvEIK4yW9O0qcOfSvj3q52C8Nfxkc8hw%2FoLnKm%2FVKrsS9VRss5QhDsAyKxzyo%2BYb6YKLnJeCZtqxLxR2WX%2BzMjaQKx2rr3gxuCE5jWVKgNvpOgXl6XcQyaKdzUa7%2Fdg9PhyEb2PP8zXJL5dxIltTCgTso9mFM5p9s%2FR0Y2fpbVrEGoD0fg9GFGf8l9heCG7ZgBiwJI2l7ZgnCQj7YMwWZiVW%2BYuf9b7wmWhJXMCiuGppFemUnEPBqLds3mUtiLVVLj9eEtxTGl8hSgYwLBqxRlqG2DS6SRyfXS9TkNMjtsZPhEvF7h2Lhwg61wIKV4nZbIbbBBxUMk%2FR0Y4%2FPiFUu%2FKkdPXWgog2%2BAkYoZIG3hn0osb%2F%2B8lkdxPe9Wf4JPFl5YdM7fmsESILAsUaiChbO%2FcNfM4OwwxLFIjDcpPu4OkUblDVZlZKo8tDJu%2BIl0IhsEaVUEwqmIWxcGUlZ%2F57%2BtyY2KGWnAWm9Njat9RKsYoVxKwV3K%2BTgFVZtBsiUFv1m0Vj4ROnrc%2FtcqGU%2B0ZNgP5GEO4NdfkTlDjXvQ4Si4Xl1Ti2ENVOkbDm3m4LBRWblqtbDBle57m%2Foc%2FGdhI9pSajARNW9BXOeaRSZfH8ZR28K8qzvUwmlpMx3zHvdMescXKn%2BuIYrjvMHwUkZnTRYMAUob12ehxkW6pwWsGm8VyDixqTwbojo1m5aQMR5F0DFvDdqUgy%2FpViCXXXXJBAiJnM%2B3lwWmR6dITrIa4r7oxWSTfXcZfB1evWohKgGiXQmCGrCrbGF7807%2BBRsz2TDlgrfHsiR9sfp7u0%2Fnn2D6CvBLHMtY1veoOj%2BWlTHrZJNPtzZ4lb75%2Bz55mU5fIekyHKAf4AcRHZ%2BiyKEbal3jlo1C00TteePKaATfRG%2FH%2Bp0oun7PEPrQr%2FrQHGb2Pejo4i7cHtYJI4Rhlkdzxem%2FpKbYAkqxTi4pKMstf1nNXs9dQgP6NrHBh%2F%2B325BpmbH2pQ%2FLaBO8BJZlFThp%2FRQgNssIEUahF631bs%2B2BJhXFxm5t4YRBT%2BO%2F8kvUL1HtUfIefz8n6mwBDb5ZZ8Xo3moB7fIOdUI5EqFz68NYH9%2BmG5lRhc302egijPr08syVUqOP5FOLuQSsmIvyGmXBI12YlRwgFnRIqp0xrkqIUV22RttVp5w5H%2FlmyCVWV2afKP71d%2B%2BzVbDPukXi6DHCMwddjA9%2FfDtzvbDfD57EFLn0pOUAmPrp8hASGiRvbvvx31SnDkDLinOTYolU%2Fk%2FwZD27VXtnYRdieHUQ%2BZrQzxCYMaMlzJlgmRjKSrbRjGGtodnbxnk5mTafbnJsIM3dpepF9b6sowANoeNmtJcCv6v9bZaRU349hGujHdOlvoYAiM2WSAiLayH8hYjGnCiu2sWX3QZqG455sLNK4chuNO%2FyyANTRm9gThMLUc5mzFP67CTO6f0aEZEpm6YIQ1zL9dR66yM9eFIR%2F%2BXPa%2BjWHcHmqu30NU1Di5CEckHtNKdw411HvuP3K2m8hRApdKSeYrCJ5wvax7a%2Blucmj8gJrdk91LvsrIi4L6Nn0g3pQS1ypAUN2X%2Bwd8%2FPdMrjKTKQzHP%2BW2aGr2a9DnAIUbQDKc7si7L81AMnQkxVdB9C9WNendRoAHp24ViCQEVXdb%2F7XwPBlu%2Bpr1yGkknEF4ym7%2BmcAyPNnIyV7mwVGiiLO00wTdrPJlvHfarCLi3gdIVrO9grklxRuyZrBy28deIQ0K44ZwJ6K3OLAOXIAht7wZYlHHCX8lZsvzGd8Mw%2FqOzN0GXV9GUOjDST0hM8C8TAl4nXA8T2sKIO745ndidrsvfdAUMSNJAIW6PEzpiSwJLbc%2FRF9bCgWiR81B%2BUK4NfZzt8fEdXlofucp7UFgfiZYB%2FJ6gp23gzApL5YHe5u9VEySMqGX6HAsWvpx3Q3seyuv4aU8y0ssUy32L8BCsbJSFIm266srhLMfUkGE1%2FIKCXpTNA8wcFwND4y3j2M831VesTYfEYgTuEtM9z039tGj9Iia%2FfqiuHTfILla5bPV2leYISkUk8aUD%2BRUDHZnQIPDFN7Q0s1CN5UFSzjOBo90ZJwATveA9ZMaHzl59322GJiZ%2FAzIURn3ozvI9sW6GDLB6XJNtJkCxpA8IWXvdc60q8kcMTlv9UlTWJpQ6rtV85Idy%2F9Mde975gDkqsETGNHA8WZDkHvEFQ2OTXG4pcxKBK6dHKKFtHb0v1Mnzx1O%2BR%2BVV%2FpwLmL1LpxQmKvihnUkK6AZvfC4Uzcz%2Fuu8GeqsmgiwvwUky7%2F6Mwb%2BUVFZ2mcDgW3T3IrpLa9brBAecyPjPgyolKC6Mb03p5QMy70YZrG9MWJqQYSWYtandVEbI2edyHdX9ARmSIMiJoV8YxyoimtE2PDfB70jYCIampsMpqzxriTspHmodJiveCtGVP4%2B7XscVwUU84eI%2FNSVyWlw6%2FfXEYUybCv3%2FI2iweAdY6ybBtO3Zz7W2OVIqY7A5cuySdxh7VcGUV2iek7SE2owdsb%2BI3x8Mip%2FzuilwKG7Q5xtS7Dr7hrEztNaYX0bcXSNz87NtbuH4AH0N9%2BD3WkxwdZUh6v6pDbQ36WPbnl4OFCEPkzwa2xIhsX5bATPs85%2BZrlVTIOcvc9wPA%2FPBx0EwjW7WRtS%2BYRMbrRF2xl5vCBcLHywwuHxZreaPbLoT5ia5VhQT3wf%2F9N5L1mdceKWw3ocNbaAxbyEE%2B%2B8TUc9aUi2A0LsTK2DQ4ELRx4R9y%2BLrNJNJjrPZj3JgDDKdKbBiaO5w7KO6OEHY6UwQnoXY65S3Do%2FFAEGTA%2FrQqgjowATkR%2BSyfArLgDJc%2FwCfaadKUoloyfPTkbJuvFLS%2BVqMEA89FZdCjmV40xKdQqOqWb912sIfsi7hN4hiKMfk5hTBN8PK8oLglx2EAYhxNCwJ3tGIu2P0xH68VMteywqFBCwVBLJU0FICBHQ0RpkgSZA3Jw%3D%3D&IsEdit=&cafeCashValue=" + cafeCashValue + "&cafeCashL10nValue=" + cafeCashL10nValue + "&gcValue=" + gcValue + "&gcL10nValue=" + gcL10nValue + "&minShippingId=" + minShippingId + "&pmChecked=" + pmChecked + "&BillName=&BillingCompanyName=&BillCountry=" + BillCountry + "&BillStreet1=&BillStreet2=&hfCurrentRedoClassification=&BillCity=&BillState=&BillZip=&BillPhone=&BillEmail=&cbStoreSpecial=on&ShipDestination=billaddress&ShipName=&ShippingCompanyName=&ShipCountry=" + ShipCountry + "&ShipStreet1=&ShipStreet2=&ShipCity=&ShipState=&ShipZip=&GiftMessage=&countdown=" + countdown + "&shipping-radio=" + shippingradio + "&ShippingTableOption=" + ShippingTableOption + "&PaymentMethod=PayByCC&maskedCreditCard=&ccExp%24MonthDrop=06+%28June%29&ccExp%24YearDrop=2018&txtCoupon=" + finalCode + "&LitlePayPage%24requestPayPageId=" + PayPageId + "&LitlePayPage%24requestReportGroupId=" + ReportGroupId + "&LitlePayPage%24requestMerchantTxnId=" + MerchantTxnId + "&LitlePayPage%24requestPayPageUrl=" + PayPageUrl + "&LitlePayPage%24responsePayPageRegistrationId=&LitlePayPage%24responseBin=&LitlePayPage%24responseCode=&LitlePayPage%24responseMessage=&LitlePayPage%24responseTime=&LitlePayPage%24responseType=&LitlePayPage%24responseTransactionId=&LitlePayPage%24payPageResponseTime=&LitlePayPage%24payPageSubmit=false&btnApplyCoupon=Apply";
			var cafehttp = new XMLHttpRequest();
			cafehttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			cafehttp.open("POST", cafepressCouponApi, false);
			cafehttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			cafehttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			cafehttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.catherines.com") > -1) {
		try {
			var maxIndex = catherinesDiscArr.indexOf(Math.max.apply(null, catherinesDiscArr));
			finalCode = catherinesCoupArr[maxIndex];
			var savings = catherinesDiscArr[maxIndex];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.carsons.com") > -1) {
		try {
			if (document.getElementsByClassName("allPromotion appliedPromotion")[0]) {
				var finalsavings = document.getElementsByClassName("lineCharge discount shippingDiscount")[0].getElementsByClassName("amount")[0].innerText.replace(/[-,]/g, '');
				var savings = Number(finalsavings);
				if (savings > 0) {
					totalSavings = "$" + savings.toFixed(2);
				}
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.1800contacts.com") > -1) {
		var i = contactsDiscArr.indexOf(Math.max.apply(null, contactsDiscArr));
		finalCode = contactsCoupArr[i];
		var savings = contactsDiscArr[i];
		if (savings > 0) {
			totalSavings = "$" + savings.toFixed(2);
		}
		var params = '{"couponCode":"' + finalCode + '"}';
		var contactshttp = new XMLHttpRequest();
		contactshttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				SavingsPopup(finalCode, totalSavings);
			}
		};
		contactshttp.open("POST", contacts1800CouponApi, false);
		contactshttp.setRequestHeader("accept", "application/json, text/plain, */*");
		contactshttp.setRequestHeader("content-type", "application/json;charset=UTF-8");
		contactshttp.send(params);
	}
	if (CurrHref.indexOf("www.mypillow.com") > -1) {
		var i = pillowDiscArr.indexOf(Math.max.apply(null, pillowDiscArr));
		finalCode = pillowCoupArr[i];
		var savings = pillowDiscArr[i];
		if (savings > 0) {
			totalSavings = "$" + savings.toFixed(2);
		}
		var params = "remove=0&coupon_code=" + finalCode + "";
		var pillowhttp = new XMLHttpRequest();
		pillowhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				SavingsPopup(finalCode, totalSavings);
			}
		};
		pillowhttp.open("POST", pillowCouponApi, false);
		pillowhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		pillowhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
		pillowhttp.send(params);
	}
	if (CurrHref.indexOf("www.barenecessities.com") > -1) {
		var i = barenDiscArr.indexOf(Math.max.apply(null, barenDiscArr));
		finalCode = barenCoupArr[i]
			var savings = barenDiscArr[i];
		if (savings > 0) {
			totalSavings = "$" + savings.toFixed(2);
		}
		var params = "action=applyPromo&code=" + finalCode + "";
		var barenhttp = new XMLHttpRequest();
		barenhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				SavingsPopup(finalCode, totalSavings);
			}
		};
		barenhttp.open("POST", barenCouponApi, false);
		barenhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		barenhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
		barenhttp.setRequestHeader("x_csrf_token", "18b3d02c-ab58-4153-87bf-b19f1df5c472");
		barenhttp.send(params);
	}
	if (CurrHref.indexOf("www.naturalizer.com") > -1) {
		var i = naturalDiscArr.indexOf(Math.max.apply(null, naturalDiscArr));
		finalCode = naturalCoupArr[i];
		var savings = naturalDiscArr[i];
		if (savings > 0) {
			totalSavings = "$" + savings.toFixed(2);
		}
		var params = "RewardsNumber=&X-Requested-With=XMLHttpRequest&PromoCode=" + finalCode + "";
		var naturalhttp = new XMLHttpRequest();
		naturalhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				SavingsPopup(finalCode, totalSavings);
			}
		};
		naturalhttp.open("POST", naturalCouponApi, false);
		naturalhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		naturalhttp.send(params);
	}
	if (CurrHref.indexOf("bodenusa.com") > -1) {
		var i = bodenusaDiscArr.indexOf(Math.max.apply(null, bodenusaDiscArr));
		finalCode = bodenusaCoupArr[i];
		var savings = bodenusaDiscArr[i];
		if (savings > 0) {
			totalSavings = "$" + savings.toFixed(2);
		}
		var bodenuhttp = new XMLHttpRequest();
		bodenuhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				SavingsPopup(finalCode, totalSavings);
			}
		};
		bodenuhttp.open("GET", "https://checkout.bodenusa.com/en-US/Offer-Code?code=" + finalCode + "&emptyCodeInvalid=true&_=1528275924404", false);
		bodenuhttp.send();
	}
	if (CurrHref.indexOf("www.musiciansfriend.com") > -1) {
		try {
			var i = musicianDiscArr.indexOf(Math.max.apply(null, musicianDiscArr));
			finalCode = musicianCoupArr[i];
			var savings = musicianDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var dynamicSession = document.getElementsByName('_dynSessConf')[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynamicSession + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + finalCode + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=true&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponrSuccessURL=%2Fcart&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponrSuccessURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=%2Fcart&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&_DARGS=%2Fcrt%2Fincludes%2Fforms%2FapplyCoupon.jsp.couponForm";
			var musicianhttp = new XMLHttpRequest();
			musicianhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			musicianhttp.open("POST", musicianCouponApi, false);
			musicianhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			musicianhttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			musicianhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.scrubsandbeyond.com") > -1) {
		try {
			setTimeout(function () {
				var i = scrubDiscArr.indexOf(Math.min.apply(null, scrubDiscArr));
				finalCode = scrubCoupArr[i];
				var params = "remove=0&x=" + finalCode + "&coupon_code=" + finalCode;
				var scrubhttp = new XMLHttpRequest();
				scrubhttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						if (doc.getElementsByClassName("code-applied")[0]) {
							finalCode = doc.getElementsByClassName("code-applied")[0].getElementsByTagName("strong")[0].innerText;
							var discammount = Number(doc.getElementById("shopping-cart-totals-table").getElementsByTagName("tfoot")[0].getElementsByTagName("td")[1].getElementsByClassName("price")[0].innerText.replace(/[$,]/g, ''));
							var savings = netammount - discammount;
							if (savings > 0) {
								totalSavings = "$" + savings.toFixed(2);
							}
						}
						SavingsPopup(finalCode, totalSavings);
					}
				}
				scrubhttp.open("POST", scrubCouponApi, false);
				scrubhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
				scrubhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
				scrubhttp.send(params);
			}, 2000);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.aveda.com") > -1) {
		var maxIndex = avedaDiscArr.indexOf(Math.max.apply(null, avedaDiscArr));
		finalCode = avedaCoupArr[maxIndex];
		var params = "JSONRPC=%5B%7B%22method%22%3A%22logic.checkout--viewcart%22%2C%22id%22%3A1%2C%22params%22%3A%5B%7B%22_SUBMIT%22%3A%22offer_code%22%2C%22OFFER_CODE%22%3A%22" + finalCode + "%22%7D%5D%7D%5D";
		var avedahttp = new XMLHttpRequest();
		avedahttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				try {
					var jsonObj = JSON.parse(this.response);
					var saving = document.getElementsByClassName("shipping value order-summary-content__value order-summary-content__value--shipping pc-hidden")[0].innerText.replace(/[-$,]/g, '');
					var savingNum = Number(saving);
					if (savingNum > 0) {
						totalSavings = "$" + savingNum.toFixed(2);
					}
					SavingsPopup(finalCode, totalSavings);
				} catch (e) {
					SavingsPopup(finalCode, totalSavings);
					Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
				}
			}
		};
		avedahttp.open("POST", avedaCouponApi, false);
		avedahttp.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
		avedahttp.send(params);
	}
	if (CurrHref.indexOf("www.ctshirts.com") > -1) {
		try {
			var maxIndex = ctshirtsDiscArr.indexOf(Math.max.apply(null, ctshirtsDiscArr));
			finalCode = ctshirtsCoupArr[maxIndex];
			let saving = ctshirtsDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			var ctshirtsCouponApi = document.getElementById("checkout-form").action;
			var params = "dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var ctshhttp = new XMLHttpRequest();
			ctshhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			ctshhttp.open("POST", ctshirtsCouponApi, false);
			ctshhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			ctshhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			ctshhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.backcountry.com") > -1) {
		try {
			var maxIndex = backDiscArr.indexOf(Math.max.apply(null, backDiscArr));
			finalCode = backCoupArr[maxIndex];
			var session = document.getElementsByName("_dynSessConf")[0].value;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + session + "&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=" + finalCode + "&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.couponClaimCode=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=https%3A%2F%2Fwww.backcountry.com%2FStore%2Fcheckout%2Fincludes%2Fcoupon%2FcouponSuccess.json.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponSuccessURL=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=https%3A%2F%2Fwww.backcountry.com%2FStore%2Fcheckout%2Fincludes%2Fcoupon%2FcouponError.json.jsp&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCouponErrorURL=+&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&_DARGS=%2FStore%2Fcheckout%2Fincludes%2FcheckoutAjaxForms.jsp.ajaxform-redeemCoupon&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=";
			var backhttp = new XMLHttpRequest();
			backhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var backjsonObj = JSON.parse(this.responseText);
						if (backjsonObj.success == "true") {
							var backgethttp = new XMLHttpRequest();
							backgethttp.onreadystatechange = function () {
								var parser = new DOMParser();
								var doc = parser.parseFromString(this.responseText, "text/html");
								if (doc.getElementById("saved-total")) {
									var mysavings = Number(doc.getElementById("saved-total").innerText.replace(/[$,]/g, ''));
									if (mysavings > 0) {
										totalSavings = '$' + mysavings.toFixed(2);
									}
								}
								SavingsPopup(finalCode, totalSavings);
							}
							backgethttp.open("GET", CurrHref, false);
							backgethttp.send();
						}
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			backhttp.open("POST", backCouponApi, false);
			backhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
			backhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			backhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.elder-beerman.com") > -1) {
		try {
			if (document.getElementsByClassName("allPromotion appliedPromotion")[0]) {
				var finalsavings = document.getElementsByClassName("lineCharge discount shippingDiscount")[0].getElementsByClassName("amount")[0].innerText.replace(/[-,]/g, '');
				var saving = Number(finalsavings);
				if (saving > 0) {
					totalSavings = '$' + saving.toFixed(2);
				}
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.zagg.com") > -1) {
		var maxIndex = zaggDiscArr.indexOf(Math.max.apply(null, zaggDiscArr));
		finalCode = zaggCoupArr[maxIndex];
		var params = "remove=0&coupon_code=" + finalCode;
		var zagghttp = new XMLHttpRequest();
		zagghttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				var saving = zaggDiscArr[maxIndex];
				if (saving > 0) {
					totalSavings = '$' + saving.toFixed(2);
				}
				SavingsPopup(finalCode, totalSavings);
			}
		}
		zagghttp.open("POST", zaggCouponApi, false);
		zagghttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		zagghttp.send(params);
	}
	if (CurrHref.indexOf("www.keds.com") > -1) {
		var maxIndex = kedsDiscArr.indexOf(Math.min.apply(null, kedsDiscArr));
		finalCode = kedsCoupArr[maxIndex];
		var kedshttp = new XMLHttpRequest();
		kedshttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				var actualCost = document.getElementsByClassName("order-subtotal")[0];
				actualCost = actualCost.getElementsByTagName("td")[1].innerText.replace(/[$,]/g, '');
				actualCost = Number(actualCost);
				var saving = actualCost - Number(kedsDiscArr[maxIndex]);
				if (saving > 0) {
					totalSavings = '$' + saving.toFixed(2);
				}
				SavingsPopup(finalCode, totalSavings);
			}
		};
		kedshttp.open("GET", kedsCouponApi + finalCode + "&format=ajax", false);
		kedshttp.send();
	}
	if (CurrHref.indexOf("www.renttherunway.com") > -1) {
		setTimeout(function () {
			try {
				var maxIndex = rentDiscArr.indexOf(Math.max.apply(null, rentDiscArr));
				finalCode = rentCoupArr[maxIndex];
				var saving = rentDiscArr[maxIndex];
				if (saving > 0) {
					totalSavings = '$' + saving.toFixed(2);
				}
				var params = "promoCode=" + finalCode + "";
				var applyCouponApi = document.getElementById("checkout-submit").action;
				var renthttp = new XMLHttpRequest();
				renthttp.onreadystatechange = function () {
					if (this.readyState == 4) {
						SavingsPopup(finalCode, totalSavings);
					}
				};
				renthttp.open("PATCH", applyCouponApi + "/promoCode", false);
				renthttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				renthttp.setRequestHeader("accept", "*/*");
				renthttp.send(params);
			} catch (e) {
				SavingsPopup(finalCode, totalSavings);
				Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
			}
		}, 2500);
	}
	if (CurrHref.indexOf("www.bonton.com") > -1) {
		try {
			if (document.getElementsByClassName("allPromotion appliedPromotion")[0]) {
				var finalsavings = document.getElementsByClassName("lineCharge discount shippingDiscount")[0].getElementsByClassName("amount")[0].innerText.replace(/[-,]/g, '');
				var saving = Number(finalsavings);
				if (saving > 0) {
					totalSavings = '$' + saving.toFixed(2);
				}
			}
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.kennethcole.com") > -1) {
		try {
			var maxIndex = kennethDiscArr.indexOf(Math.max.apply(null, kennethDiscArr));
			finalCode = kennethCoupArr[maxIndex];
			var dynamicAPI = document.getElementById('cart-items-form').action;
			var params = "dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var paramsR = "dwfrm_cart_coupons_i1_deleteCoupon=Remove&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_couponCode=";
			var kennethcolehttp = new XMLHttpRequest();
			kennethcolehttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					var saving = kennethDiscArr[maxIndex];
					if (saving > 0) {
						totalSavings = '$' + saving.toFixed(2);
					}
					SavingsPopup(finalCode, totalSavings);
				}
			};
			kennethcolehttp.open("Post", dynamicAPI, false);
			kennethcolehttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			kennethcolehttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.soma.com") > -1) {
		try {
			var maxIndex = somaDiscArr.indexOf(Math.max.apply(null, somaDiscArr));
			finalCode = somaCoupArr[maxIndex];
			var dynSessConf = document.getElementsByName("_dynSessConf")[0].value; ;
			var params = "_dyncharset=UTF-8&_dynSessConf=" + dynSessConf + "&claimCodeField=" + finalCode + "&_D%3AclaimCodeField=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=Claim+it&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=Apply&_D%3A%2Fatg%2Fcommerce%2Fpromotion%2FCouponFormHandler.claimCoupon=+&_DARGS=%2Fstore%2Fcommon%2Fcheckout%2Fcart.jsp.couponForm";
			var somahttp = new XMLHttpRequest();
			somahttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					try {
						var jsonObj = JSON.parse(this.responseText);
						if ((jsonObj.formErrors.coupon.length == 0)) {
							var savings = Number(jsonObj.promoDiscounts[0].discountAmount.replace(/[-$,]/g, ''));
							if (savings > 0) {
								totalSavings = "$" + savings.toFixed(2);
							}
						}
						SavingsPopup(finalCode, totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			somahttp.open("POST", somaCouponApi, false);
			somahttp.setRequestHeader("accept", "application/json, text/javascript, */*");
			somahttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			somahttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.spirithalloween.com") > -1) {
		try {
			var i = spiritDiscArr.indexOf(Math.max.apply(null, spiritDiscArr));
			finalCode = spiritCoupArr[i];
			var savings = spiritDiscArr[i];
			if (savings > 0) {
				totalSavings = "$" + savings.toFixed(2);
			}
			var params = "promoCode=" + finalCode + "&delete=false";
			var spirithttp = new XMLHttpRequest();
			spirithttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			spirithttp.open("Post", spiritCouponApi, false);
			spirithttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			spirithttp.setRequestHeader("accept", "*/*");
			spirithttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.claires.com") > -1) {
		try {
			var maxIndex = clairesDiscArr.indexOf(Math.max.apply(null, clairesDiscArr));
			finalCode = clairesCoupArr[maxIndex];
			var saving = clairesDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			var claireshttp = new XMLHttpRequest();
			claireshttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			claireshttp.open("GET", clairesCouponApi + finalCode, false);
			claireshttp.send();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.ashleystewart.com") > -1) {
		try {
			var maxIndex = ashleyDiscArr.indexOf(Math.max.apply(null, ashleyDiscArr));
			finalCode = ashleyCoupArr[maxIndex];
			var saving = ashleyDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			var session = document.getElementById('car-top-login-form').action.split('=')[1];
			var params = "dwfrm_cart_shipments_i0_items_i0_quantity=4&dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon";
			var ashleyhttp = new XMLHttpRequest();
			ashleyhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			ashleyhttp.open("POST", ashleyCouponApi + session, true);
			ashleyhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ashleyhttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			ashleyhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.build.com") > -1) {
		try {
			var maxIndex = buildDiscArr.indexOf(Math.max.apply(null, buildDiscArr));
			finalCode = buildCoupArr[maxIndex];
			var saving = buildDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			var buildhttp = new XMLHttpRequest();
			buildhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			buildhttp.open("PUT", buildCouponApi + finalCode, false);
			buildhttp.setRequestHeader("content-type", "application/json");
			buildhttp.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
			buildhttp.send();
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.belk.com") > -1) {
		try {
			var maxIndex = belkDiscArr.indexOf(Math.max.apply(null, belkDiscArr));
			finalCode = belkCoupArr[maxIndex];
			var csrf_token = document.getElementsByName("csrf_token")[0].value;
			var skuChange = document.getElementById("skuChange").value;
			var params = "selected_quantity=&previous_quantity=&selected_sku=&skuChange=" + skuChange + "&dwfrm_cart_shipments_i0_items_i0_quantity=&dwfrm_cart_shipments_i0_items_i0_giftmessagetext=&dwfrm_cart_updateCart=dwfrm_cart_updateCart&dwfrm_cart_updateGiftBox=dwfrm_cart_updateGiftBox&uppdateGiftBoxpliUUID=&dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon&csrf_token=" + csrf_token;
			var belkhttp = new XMLHttpRequest();
			belkhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					try {
						var parser = new DOMParser();
						var doc = parser.parseFromString(this.responseText, "text/html");
						var condition = Number(doc.getElementsByClassName("order-discount discount")[0].getElementsByTagName("td")[1].innerText.replace(/[-$,]/g, ''));
						if (condition > 0) {
							totalSavings = '$' + condition.toFixed(2);
						}
						SavingsPopup(finalCode, totalSavings);
					} catch (e) {
						SavingsPopup(finalCode, totalSavings);
						Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
					}
				}
			};
			belkhttp.open("POST", belkCouponApi, false);
			belkhttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			belkhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			belkhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.mixbook.com") > -1) {
		try {
			var maxIndex = mixbookDiscArr.indexOf(Math.max.apply(null, mixbookDiscArr));
			finalCode = mixbookCoupArr[maxIndex];
			var saving = mixbookDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			var authenticity_token = document.getElementsByName("authenticity_token")[0].value;
			var params = "utf8=%E2%9C%93&_method=put&authenticity_token=" + authenticity_token + "&quantities%5B18038172%5D%5B69%5D=1&country=United+States&postal_code=&shipping_option_id=1&coupon_code=" + finalCode;
			var mixbookhttp = new XMLHttpRequest();
			mixbookhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			mixbookhttp.open("PUT", mixbookCouponApi, false);
			mixbookhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			mixbookhttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
			mixbookhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.katespade.com") > -1) {
		try {
			var maxIndex = kateDiscArr.indexOf(Math.max.apply(null, kateDiscArr));
			finalCode = kateCoupArr[maxIndex];
			var saving = kateDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			var csrf_token = document.getElementsByName("csrf_token")[0].value;
			var kateCouponApi = document.getElementById("cart-items-form").action;
			var params = "dwfrm_cart_couponCode=" + finalCode + "&dwfrm_cart_addCoupon=dwfrm_cart_addCoupon&csrf_token=" + csrf_token + "";
			var katehttp = new XMLHttpRequest();
			katehttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			katehttp.open("Post", kateCouponApi, false);
			katehttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			katehttp.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
			katehttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.shoes.com") > -1) {
		try {
			var maxIndex = shoesDiscArr.indexOf(Math.max.apply(null, shoesDiscArr));
			finalCode = shoesCoupArr[maxIndex];
			var saving = shoesDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			document.getElementById("crt-promoCode").value = finalCode;
			document.getElementsByClassName('right crt-submit-promo crt-update')[0].click();
			SavingsPopup(finalCode, totalSavings);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.fragrancenet.com") > -1) {
		var maxIndex = fragDiscArr.indexOf(Math.max.apply(null, fragDiscArr));
		finalCode = fragCoupArr[maxIndex];
		var params = "activeCoupon=&gc_coupon_id=" + finalCode + "";
		var fraghttp = new XMLHttpRequest();
		fraghttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				var saving = fragDiscArr[maxIndex];
				if (saving > 0) {
					totalSavings = '$' + saving.toFixed(2);
				}
				SavingsPopup(finalCode, totalSavings);
			}
		};
		fraghttp.open("Post", fragCouponApi, false);
		fraghttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		fraghttp.send(params);
	}
	if (CurrHref.indexOf("www.landsend.com") > -1) {
		var maxIndex = landDiscArr.indexOf(Math.max.apply(null, landDiscArr));
		finalCode = landCoupArr[maxIndex];
		var params = "promoCode=" + finalCode + "&promoPIN=" + fetchPinN + "&functionName=applyPromotion&isEditOrderMode=N&debug=false";
		var landhttp = new XMLHttpRequest();
		landhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				var saving = landDiscArr[maxIndex];
				if (saving > 0) {
					totalSavings = '$' + saving.toFixed(2);
				}
				SavingsPopup(finalCode, totalSavings);
			}
		};
		landhttp.open("POST", landCouponApi, false);
		landhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		landhttp.send(params);
	}
	if (CurrHref.indexOf("www.fredericks.com") > -1) {
		var maxIndex = fredericksDiscArr.indexOf(Math.max.apply(null, fredericksDiscArr));
		finalCode = fredericksCoupArr[maxIndex];
		params = '{"couponCode":"' + finalCode + '"}';
		var frederickshttp = new XMLHttpRequest();
		frederickshttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				var saving = fredericksDiscArr[maxIndex];
				if (saving > 0) {
					totalSavings = '$' + saving.toFixed(2);
				}
				SavingsPopup(finalCode, totalSavings);
			}
		};
		frederickshttp.open("PUT", fredCouponApi, false);
		frederickshttp.setRequestHeader("content-type", "application/json;charset=UTF-8");
		frederickshttp.send(params);
	}
	if (CurrHref.indexOf("www.perfumania.com") > -1) {
		try {
			var maxIndex = perfuDiscArr.indexOf(Math.max.apply(null, perfuDiscArr));
			finalCode = perfuCoupArr[maxIndex];
			var orderId = document.getElementById('ShopCartForm').getElementsByTagName('input')[8].value;
			var catalogId = document.getElementById('headerSearchForm').getElementsByTagName('input')[0].value;
			var storeId = document.getElementById('headerSearchForm').getElementsByTagName('input')[1].value;
			var params = "orderId=" + orderId + "&URL=%2FOrderCalculate%3FstoreId%3D" + storeId + "%26catalogId%3D" + catalogId + "%26langId%3D-1%26orderId%3D" + orderId + "%26updatePrices%3D1%26calculationUsageId%3D-1%26calculationUsageId%3D-2%26calculationUsageId%3D-3%26calculationUsageId%3D-4%26calculationUsageId%3D-7%26URL%3D%252fCheckoutSignInView%253fstoreId%253d" + storeId + "%2526catalogId%253d" + catalogId + "%2526langId%253d-1%2526URL%253dOrderAddressUpdateView%2526checkout%253dtrue&updateURL=%2FOrderCalculate%3FstoreId%3D" + storeId + "%26catalogId%3D" + catalogId + "%26langId%3D-1%26orderId%3D" + orderId + "%26updatePrices%3D1%26calculationUsageId%3D-1%26calculationUsageId%3D-2%26calculationUsageId%3D-3%26calculationUsageId%3D-4%26calculationUsageId%3D-7%26URL%3DOrderItemDisplay&promoURL=%2FOrderCalculate%3FURL%3DOrderItemDisplay%26orderId%3D" + orderId + "%26updatePrices%3D1%26calculationUsageId%3D-1%26calculationUsageId%3D-2%26calculationUsageId%3D-3%26calculationUsageId%3D-4%26calculationUsageId%3D-7&taskType=A&promoCode=" + finalCode;
			var perfuhttp = new XMLHttpRequest();
			perfuhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					var saving = perfuDiscArr[maxIndex];
					if (saving) {
						totalSavings = '$' + saving.toFixed(2);
					}
					SavingsPopup(finalCode, totalSavings);
				}
			};
			perfuhttp.open("POST", "https://www.perfumania.com/OrderItemUpdate?catalogId=" + catalogId + "&storeId=" + storeId + "&langId=-1&query=Search+entire+site", false);
			perfuhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			perfuhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.travelocity.com") > -1) {
		try {
			var maxIndex = traveloDiscArr.indexOf(Math.max.apply(null, traveloDiscArr));
			finalCode = traveloCoupArr[maxIndex];
			var saving = traveloDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			var tripid = document.getElementsByTagName("body")[0].getAttribute("data-tripid");
			var params = "couponCode=" + finalCode + "&tripid=" + tripid + "&tlCouponAttach=1&tlCouponCode=" + finalCode + "&productType=hotel&binPrefix="
				var travelhttp = new XMLHttpRequest();
			travelhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			travelhttp.open("POST", travelCouponApi, false);
			travelhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			travelhttp.setRequestHeader("accept", "*/*");
			travelhttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
	if (CurrHref.indexOf("www.revolve.com") > -1) {
		try {
			var maxIndex = revolveDiscArr.indexOf(Math.max.apply(null, revolveDiscArr));
			finalCode = revolveCoupArr[maxIndex];
			var saving = revolveDiscArr[maxIndex];
			if (saving > 0) {
				totalSavings = '$' + saving.toFixed(2);
			}
			var params = "promo=" + finalCode + "&scope=";
			var revolvehttp = new XMLHttpRequest();
			revolvehttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					SavingsPopup(finalCode, totalSavings);
				}
			};
			revolvehttp.open("POST", revolveCouponApi, false);
			revolvehttp.setRequestHeader("Accept", "*/*");
			revolvehttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			revolvehttp.send(params);
		} catch (e) {
			SavingsPopup(finalCode, totalSavings);
			Raven.captureException("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", Invalid Element, " + e);
		}
	}
}

////////////////////////// Code for Copy coupon when click on coupon button /////////////
function copyCoupon() {
	if (iframe.contentWindow.document.selection) {
		var range = iframe.contentWindow.document.body.createTextRange();
		range.moveToElementText(iframe.contentWindow.document.getElementById(this.id));
		range.select().createTextRange();
		iframe.contentWindow.document.execCommand("copy");
	} else if (window.getSelection) {
		var range = iframe.contentWindow.document.createRange();
		range.selectNode(iframe.contentWindow.document.getElementById(this.id));
		iframe.contentWindow.window.getSelection().empty();
		iframe.contentWindow.window.getSelection().addRange(range);
		iframe.contentWindow.document.execCommand("copy");
		var classIcon = iframe.contentWindow.document.getElementsByClassName("copyIcon");
		for (var h = 0; h < classIcon.length; h++) {
			classIcon[h].style.visibility = "hidden";
		}
		iframe.contentWindow.document.getElementById(this.id).nextSibling.style.visibility = "visible";
	}
}

///////////////////////// Code for hide and show home and search screen ///////////
function searchData() {
	iframe.style.height = "547px";
	iframe.contentWindow.document.getElementById('appendStores').innerHTML = "";
	iframe.contentWindow.document.getElementById('appendSearchedStores').innerHTML = "";
	iframe.contentWindow.document.getElementById('searchData').style.display = 'block';
	iframe.contentWindow.document.getElementById('home').style.display = 'none';
	iframe.contentWindow.document.getElementById('homeImage1').style.display = 'none';
	iframe.contentWindow.document.getElementById('homeImage2').style.display = 'inline-block';
	iframe.contentWindow.document.getElementById('searchImage1').style.display = 'none';
	iframe.contentWindow.document.getElementById('searchImage2').style.display = 'inline-block';
	iframe.contentWindow.document.getElementById('search').style.borderTop = '3px solid #0fb2b7';
	iframe.contentWindow.document.getElementById('homeData').style.borderTop = '3px solid transparent';
	iframe.contentWindow.document.getElementById('searchBox').style.display = 'block';
	iframe.contentWindow.document.getElementsByClassName('heading')[0].style.display = 'none';
	iframe.contentWindow.document.getElementById('appendStores').style.display = 'block';
	iframe.contentWindow.document.getElementById('mySearchInput').value = "";
	iframe.contentWindow.document.getElementById('NoCouponsMessage').style.display = 'none';
	iframe.contentWindow.document.getElementById('emptyMessage').style.display = 'none';
	iframe.contentWindow.document.getElementById('cancelIframe').style.display = 'none';
	iframe.contentWindow.document.getElementById('closeiframe').style.display = 'block';
	var appendSearch = iframe.contentWindow.document.getElementById('appendStores');
	chrome.storage.local.get(null, function (obj) {
		storesObj = obj.storelist_json;
		var storesCount = storesObj.stores.length;
		if (storesObj) {
			var i = 0;
			if (iframe.contentWindow.document.getElementById("appendStores")) {
				iframe.contentWindow.document.getElementById("appendStores").innerHTML = "";
			}
			while (i < storesCount) {
				if ((!iframe.contentWindow.document.getElementById('appendSearch' + i)) && (appendSearch)) {
					var storesUrl = storesObj.stores[i].store_url;
					storesUrl = storesUrl.replace("www.", "");
					var storesLogo = storesObj.stores[i].store_logo;
					var storesTitle = storesObj.stores[i].store_title;
					var searchDataHtml = fontApi + "<div class='box mRight1half'> <div class='imageBox'> <img src='" + storesLogo + "'></div><p><span class='border-right' id='storeOffers" + i + "'>offers</span><span><a style='text-decoration: none;color:#505050;' target='_blank' href='https://www." + storesUrl + "'>Shop</a></span><span style='display:none;'>" + storesTitle + "</span></p></div>";
					var ele = iframe.contentWindow.document.createElement("div");
					ele.setAttribute("id", "appendSearch" + i);
					ele.innerHTML = searchDataHtml;
					appendSearch.appendChild(ele);
					var appendSearchList = iframe.contentWindow.document.getElementById('appendSearchedStores');
					var searchStoreHtml = fontApi + "<div class='searchResult' id='storeListOffers" + i + "'> <span class='searchData' >" + storesTitle + "</span> <img src='" + imagePathLoc + "gIcon.png' class='gIcon'><img src='" + imagePathLoc + "rightArrow.png'  class='rightArrow' alt='arrow'></div>";
					var elel = iframe.contentWindow.document.createElement("div");
					elel.setAttribute("id", "appendSearchList" + i);
					elel.innerHTML = searchStoreHtml;
					appendSearchList.appendChild(elel);
				}
				i++;
			}
			if (iframe.contentWindow.document.getElementsByClassName('border-right')) {
				var storeCounter = iframe.contentWindow.document.getElementsByClassName('border-right');
				for (var i = 0; i < storeCounter.length; i++) {
					storeCounter[i].addEventListener('click', storeOffers);
				}
			}
			if (iframe.contentWindow.document.getElementsByClassName('searchResult')) {
				var storeCounter = iframe.contentWindow.document.getElementsByClassName('searchResult');
				for (var i = 0; i < storeCounter.length; i++) {
					storeCounter[i].addEventListener('click', storeListOffers);
				}
			}
			if (iframe.contentWindow.document.getElementById('mySearchInput')) {
				iframe.contentWindow.document.getElementById('mySearchInput').addEventListener('keyup', mySearchStore);
			}
			if (iframe.contentWindow.document.getElementById('cancelIframe')) {
				iframe.contentWindow.document.getElementById('cancelIframe').addEventListener('click', cancelSearch);
			}
		}
	});
}

///////////////////  Code for search store from search box //////////////
function mySearchStore() {
	
	iframe.contentWindow.document.getElementById('appendStores').style.display = "none";
	iframe.contentWindow.document.getElementById('appendSearchedStores').style.display = "block";
	iframe.contentWindow.document.getElementById('cancelIframe').style.display = "block";
	iframe.contentWindow.document.getElementById('closeiframe').style.display = "none";
	var input,
	filter,
	content,
	box,
	spanItem,
	counter = 0;
	input = iframe.contentWindow.document.getElementById("mySearchInput");
	filter = input.value.toUpperCase();
	content = iframe.contentWindow.document.getElementById("mySearchContent");
	box = content.getElementsByClassName("searchResult");
	for (i = 0; i < box.length; i++) {
		spanItem = box[i].getElementsByTagName("span");
		if (spanItem) {
			if (spanItem[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
				box[i].style.display = "";
				counter++;
			} else {
				box[i].style.display = "none";
			}
		}
	}
	if (counter == 0) {
		iframe.contentWindow.document.getElementById('emptyMessage').style.display = "block";
		iframe.contentWindow.document.getElementById('appendSearchedStores').style.display = "none";
		iframe.contentWindow.document.getElementById('NoCouponsMessage').style.display = "none";
	} else {
		iframe.contentWindow.document.getElementById('emptyMessage').style.display = "none";
		iframe.contentWindow.document.getElementById('appendSearchedStores').style.display = "block";
		iframe.contentWindow.document.getElementById('NoCouponsMessage').style.display = "none";
	}
}

///////////////  Code for display coupons-cashback for store from search screen ////////////
function storeOffers(elem) {
	var lastChar = elem.path[0].id.replace("storeOffers", "");
	storeDomain = storesObj.stores[lastChar].store_domain;
	elemMouseEvent = elem;
	onload(storeDomain, elem);
}

function storeListOffers(elem) {
	var lastChar = elem.currentTarget.id.replace("storeListOffers", "");
	storeDomain = storesObj.stores[lastChar].store_domain;
	elemMouseEvent = elem;
	onload(storeDomain, elem);
}

function cancelSearch() {
	iframe.contentWindow.document.getElementById('appendStores').style.display = "block";
	iframe.contentWindow.document.getElementById('appendSearchedStores').style.display = "none";
	iframe.contentWindow.document.getElementById('cancelIframe').style.display = "none";
	iframe.contentWindow.document.getElementById('closeiframe').style.display = "block";
	iframe.contentWindow.document.getElementById('mySearchInput').value = "";
	iframe.contentWindow.document.getElementById('emptyMessage').style.display = "none";
	iframe.contentWindow.document.getElementById('NoCouponsMessage').style.display = "none";
}

function homeData(elem) {
	CurrHost = CurrHost.replace("www.", "");
	onload(CurrHost, elem);
}

///////////////////////// Code for expand coupon title when click on more button ///////////
var checkLetterText, jsObj;
function checkLetter(jsObj) {
	var i = 0;
	var iCount = jsObj.codesCount;
	while (i < iCount) {
		checkLetterText = iframe.contentWindow.document.getElementById('checkLetter' + i).textContent;
		if (checkLetterText.length >= 65) {
			var startingLetters = checkLetterText.slice(0, 55);
			iframe.contentWindow.document.getElementById('checkLetter' + i).innerHTML = startingLetters + " ... " + '<a id="showData' + i + '">more</a>';
			iframe.contentWindow.document.getElementById('showData' + i).style.display = "inline-block";
		}
		i++;
	}
	if (iframe.contentWindow.document.getElementsByClassName('completeBlock')) {
		var anchortag = iframe.contentWindow.document.querySelectorAll('.offerHeading a');
		for (var i = 0; i < anchortag.length; i++) {
			var obj = anchortag[i];
			obj.addEventListener("click", showCouponTitle, false);
		}
	}
}

function showCouponTitle(elem) {
	resizeIframe(iframe);
	var thisAnchor = elem.path[0];
	var lastChar = elem.path[0].id.replace("showData", "");
	var couponsTitle = myObj.coupons[lastChar].title;
	iframe.contentWindow.document.getElementById('checkLetter' + lastChar).innerHTML = couponsTitle;
}

function continueToCheckout() {
	location.reload();
}

//////////// Code for savings generated popup ///////////////
function SavingsPopup(finalCode, totalSavings) {
	if ((finalCode != "") && (finalCode != undefined) && (totalSavings != undefined)) {
		closeframe();
		popupHeight = "400px";
		popupWidth = "700px";
		backgroungClr = "#FFFFFF";
		style = "<style>*{box-sizing:border-box}.container{margin:0 auto;text-align:center;position:relative;padding:10px;background-color:#fff;color:#333132;font-family:Lato;font-size:13px}.content{background:#fff;height:381px;position:relative;float:left;width:100%;border-radius:3px;background-color:#D6E8E8;box-shadow:0 0 4.8px .3px rgba(0,0,0,.05)}.leftSection{float:left;width:50%;height:100%;padding:40px 23px}.rightSection{float:left;width:50%;height:100%}.rightSection img{display:block;margin-top:150px}.numberCode{font-weight:700;font-size:15px;color:#00aab4;font-family:Lato;word-wrap: break-word;}.leftSection p{margin:0;font-size:16px;font-family:Lato}span.codeData{border:solid 1px #849191;padding:8px 10px;display:inline-block;margin-top:30px;font-weight:700}.applybtn{width:165px;cursor:pointer;border:1px solid #FD601C;background:#FD601C;border-radius:20px;padding:8px 8px;margin-top:20px;color:#fff;font-size:14px;font-family:Lato}.checkout{margin-top:16px!important}.checkout a{cursor:pointer;color:#00aab4;font-size:14px;text-decoration: underline;}.close{float:right;color:#C2C2C2;font-size:24px;line-height:19px;cursor:pointer; top: 13px;right: 8px;width: 25px;height: 25px;}.closePos{position:absolute;}h2{font-family:Lato;font-size:20px}.image-group{display:inline-block}.open-eyes{position:absolute;top:-24px;right:130px}.blink-eyes{position:absolute;top:-24px;right:130px;opacity:0;animation:blinkEyes 2s linear infinite}@keyframes blinkEyes{0%{opacity:0;display:none;visibility:hidden}10%{opacity:1;display:none;visibility:hidden}20%{opacity:0;display:none;visibility:hidden}30%{opacity:1;display:none;visibility:hidden}40%{opacity:0;display:none;visibility:hidden}50%{opacity:1;display:none;visibility:hidden}60%{opacity:0;display:none;visibility:hidden}70%{opacity:1;display:none;visibility:hidden}80%{opacity:0;display:none;visibility:hidden}90%{opacity:1;display:none;visibility:hidden}100%{opacity:1;display:block;visibility:visible}}.actbtn{width:150px;display:none;border:1px solid #28c6c5;background-color:#28c6c5;border-radius:20px;padding:8px 30px;margin-top:15px;color:#fff;font-size:14px;font-family: Lato;font-weight:bold;}button{cursor:pointer}button img{cursor:auto}.sbtbtn:hover{background:#f5a972;;border:1px solid #f5a972;}.actbtn:hover{background:#99dff2;border:1px solid #99dff2;}.sbtbtn{width:150px;cursor:pointer;border:1px solid #FD601C;background:#FD601C;border-radius:20px;padding:8px 8px;margin-top:20px;color:#fff;font-size:14px;font-family:Lato;font-weight:bold;}:focus{outline:none}body {margin: 0px;}</style>";
		DomainHtml = fontApi + "<div class='container'> <div class='content'> <div class='close closePos' id='closeiframe' > <img style='width:10px' src='" + imagePathLoc + "cross.png'> </div><div class='leftSection'> <h2>Your deal has been granted!</h2> <p>We found the best code : <span class='numberCode'>" + finalCode + "</span></p><p style='margin-top: 24px;'>That saves you</p><p><span class='numberCode' style='font-size: 22px;'>" + totalSavings + "</span></p><div id='cashbackDivId' ></div><p class='checkout' id='continueCheckout' ><a>Continue to Checkout</a></p></div><div class='rightSection'> <div class='image-group'> <img src='" + imagePathLoc + "layer2.png' alt=''> <img class='open-eyes' src='" + imagePathLoc + "open_eyes.png' alt=''> <img class='blink-eyes' src='" + imagePathLoc + "blink_eyes.png' alt=''> </div></div></div></div>";
		createCashback();
		chrome.storage.local.get(["installId"], function (items) {
			InstallObj = JSON.stringify(items.installId);
			InstallObj = InstallObj.replace(/['"]+/g, '');
			var paramReport = "installation_id=" + InstallObj + "&url=" + CurrHost + "&coupon=" + finalCode + "&savings=" + totalSavings + "";
			var jshttp = new XMLHttpRequest();
			jshttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {}
			};
			jshttp.open("POST", baseApiUrl + "/submitReports", false);
			jshttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			jshttp.setRequestHeader("Client-Service", "cchief");
			jshttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
			jshttp.send(paramReport);
		});
		var frame_Overlay = document.getElementById("Coupon_Overlay");
		if (!frame_Overlay) {
			setOverlay();
		}
		chrome.runtime.sendMessage({
			type: "TotalSavings",
			message: "AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", TotalSavings: " + totalSavings + ", CouponCode :" + finalCode
		}, function (response) {});
		Raven.captureMessage("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", TotalSavings: " + totalSavings + ", CouponCode :" + finalCode, {
			level: 'info'
		});
	} else {
		closeframe();
		popupHeight = "353px";
		popupWidth = "500px";
		backgroungClr = "#F6F6F6";
		style = "<style>*{box-sizing:border-box}.container{margin:0 auto;text-align:center;position:relative;color:#616161;padding:10PX;background:#F4F4F4;font-family:Lato;font-size:14px}.content{background:#fff;width:100%;margin:auto;float:left;padding:20px}.content p{margin:5px}.sorryImage{margin-bottom:30px}.closebtn{width:115px;border:1px solid #28c6c5;background-color:#28c6c5;border-radius:20px;padding:8px 30px;margin-top:20px;color:#fff;font-size:14px;font-family:Lato;font-weight:bold;}.closebtn:hover{background:#99dff2;;border:1px solid #99dff2;}.yourFeedback{color:#00aab4;margin-top:13px;cursor:pointer;display:inline-block;text-decoration:underline;text-transform:capitalize;font-size:14px}.close{float:right;color:#C2C2C2;line-height:19px;cursor:pointer}.closePos{position:absolute;right:25px;top:20px}.drop-image{position:relative;display:inline-block;margin-bottom:108px}:focus{outline:none}button{cursor:pointer}button img{cursor:auto}.sorry-image{position:absolute;right:19px;bottom:-32px}.water-image{position:absolute;left:0;top:125px}.big-drop{position:absolute;top:36px;left:54px;animation:bigDrop 1.5s linear infinite}.new-drop{position:absolute;top:36px;left:70px;animation:newDrop 1.5s linear .5s infinite}@keyframes newDrop{0%{top:36px}100%{top:110px}}.small-drop{position:absolute;top:35px;left:73px;opacity:0;animation:smallDrop 1.5s linear .5s infinite}@keyframes bigDrop{0%{top:36px}100%{top:110px}}@keyframes smallDrop{0%{top:36px;opacity:0}10%{opacity:1}100%{top:115px;opacity:1}}body {margin: 0px;}</style>";
		DomainHtml = fontApi + "<div class='container'> <div class='content'> <div class='close closePos' id='closeiframe'> <img style='width:10px' src='" + imagePathLoc + "cross.png'/> </div><div class='drop-image'> <img src='" + imagePathLoc + "baseImage.png' class='base-image' alt=''> <img src='" + imagePathLoc + "SorrySmall.png' class='sorry-image' alt=''> <img src='" + imagePathLoc + "water.png' class='water-image' alt=''> <img src='" + imagePathLoc + "bigDrop.png' class='big-drop' alt=''> <img src='" + imagePathLoc + "smallDrop.png' class='new-drop' alt=''> </div><p>We're unable to find the applicable codes for the items in your cart.</p><p>Please click the Scout extension when you’re ready to try again.</p><div> <button id='closeApologies' class='closebtn'>Close</button><span></span> </div><div><a class='yourFeedback' id='expandFeedback'>Your Feedback</a></div></div></div>";
		var frame_Overlay = document.getElementById("Coupon_Overlay");
		if (!frame_Overlay) {
			setOverlay();
		}
		Raven.captureMessage("AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", No Valid Coupons", {
			level: 'info'
		});
		chrome.runtime.sendMessage({
			type: "NoValidCoupons",
			message: "AppVersion:" + appVersion + ", StoreName: " + CurrHost + ", No Valid Coupons"
		}, function (response) {});
	}
	var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
	if (!location.ancestorOrigins.contains(extensionOrigin)) {
		var iframeExists = false;
		if (iframe)
			if (iframe.parentNode)
				iframeExists = true;
		if (!iframeExists) {
			iframe = document.createElement('iframe');
			iframe.setAttribute("id", "couponchiefiframe");
			iframe.setAttribute("frameBorder", "0");
			iframe.setAttribute("style", "position:fixed;top:15%;left:50%;border:0.8px solid #e8dfdf;padding:0;transform: translate(-50%,0);display:block;width:" + popupWidth + ";height:" + popupHeight + ";z-index:9999999999;opacity:1;background:" + backgroungClr + "");
			document.body.appendChild(iframe);
		}
		var ApplySavingsHtml = style + "<body>" + DomainHtml + "</body>";
		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write(ApplySavingsHtml);
		var cashbackDiv = iframe.contentWindow.document.getElementById('cashbackDivId');
		if ((cashbackValue) && (cashbackDiv)) {
			var cashbackHtmlCode = fontApi + "<p style='margin-top: 20px;'>Cash Back saves you an additional</p><p><span class='numberCode' style='font-size: 20px;'>" + cashbackValue + "</span></p><div style='position:relative'><button class='sbtbtn' id='applycashback' >Log In & Activate</button><button class='actbtn' id='activeCashback' >Activate</button><span id='checkCashback' style='color: rgb(40, 198, 197);display: none;font-size: 20px;position:absolute;top: 15px;right: 35px;'>✓</span></div>";
			var el = document.createElement("div");
			el.setAttribute("id", "appendCashbackDiv");
			el.innerHTML = cashbackHtmlCode;
			cashbackDiv.appendChild(el);
		} else if (iframe.contentWindow.document.getElementsByClassName('leftSection')[0]) {
			iframe.contentWindow.document.getElementsByClassName('leftSection')[0].style.padding = "65px 23px";
		}
		if (iframe.contentWindow.document.getElementById('closeiframe')) {
			iframe.contentWindow.document.getElementById('closeiframe').addEventListener('click', closeframe);
		}
		if (iframe.contentWindow.document.getElementById('closeApologies')) {
			iframe.contentWindow.document.getElementById('closeApologies').addEventListener('click', closeframe);
		}
		if (iframe.contentWindow.document.getElementById('continueCheckout')) {
			iframe.contentWindow.document.getElementById('continueCheckout').addEventListener('click', continueToCheckout);
		}
		if (iframe.contentWindow.document.getElementById('applycashback')) {
			iframe.contentWindow.document.getElementById('applycashback').addEventListener('click', CashBack);
		}
		if (iframe.contentWindow.document.getElementById('expandFeedback')) {
			iframe.contentWindow.document.getElementById('expandFeedback').addEventListener('click', ExpandFeedback);
		}
	}
}

////////////////////////////// Feedback screen code ///////////////////
function ExpandFeedback() {
	style = "<style>*{box-sizing:border-box}.logo{width: 180px; margin-top: 5px;}.container{margin:0 auto;text-align:center;position:relative;padding:12px;background-color:#F6F5F3;font-family:Lato;color:#505050;font-size:14px}.content{background:#F9F9F9;height:405px;position:relative;float:left;width:100%;box-shadow:0 0 4.8px .3px rgba(0,0,0,.05)}.close{position:absolute;top:10px;right:4px;width: 25px;height: 25px;text-align: center;padding-bottom: 15px;color:#C2C2C2;font-size:24px;line-height:19px;border:none;background: transparent;}p{margin:0}.leftSection,h2{margin-top:0px;margin-bottom:10px;}.leftSection{float:left;width:200px;text-align:left;height:253px;}span{vertical-align:middle}input[type=radio]{display:inline-block;vertical-align:middle;margin:0 8px 0 0}.rightSection{float:left;width:445px;margin-top:25px;}input.email,textarea{width:420px;color:#9b9b9b;font-size:14px;padding:10px}textarea{background:#f0f0f0;border-radius:5px;border:1px solid #e5e5e5;height:149px;resize:none; font-family: Lato;}input.email{height:35px;border-radius:5px;background-color:#f0f0f0;border:1px solid #e5e5e5;margin-top:10px;margin-bottom:8px;font-family: Lato;}.sbtbtn{float:right;border:1px solid #ff6214;padding:10px;margin-top:3px;color:#fff;margin-right:20px;width:160px;border-radius:19px;background-color:#ff6214;font-weight:bold;}ul{list-style:none;padding:0;margin:0; border-right: 1px solid #e2e2e2;}li{padding:8px 10px}:focus{outline:none}button{cursor:pointer}button img{cursor:auto}.sbtbtn:hover{background:#f5a972;border:1px solid #f5a972;}.radio-box{display:block;position:relative;padding-left:22px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio-box input{position:absolute;opacity:0;cursor:pointer}.checkmark{position:absolute;top:2px;left:2px;height:14px;width:14px;background-color:#fff;border-radius:50%;border:1px solid silver}.radio-box:hover input~.checkmark{background-color:#ccc}.radio-box input:checked~.checkmark{background-color:#fff}.checkmark:after{content:'';position:absolute;display:none}.radio-box input:checked~.checkmark:after{display:block}.radio-box .checkmark:after{top:3px;left:3px;width:6px;height:6px;border-radius:50%;background:#00aab4}body {margin: 0px;}</style>";
	DomainHtml = fontApi + "<div class='container'><div class='content'> <div class='logo'> <img style='width: 180px;' src='" + imagePathLoc + "scout_logo.png'/></div><span  id='closeiframe' class='close' ><img style='cursor:pointer;width: 10px;' src='" + imagePathLoc + "cross.png' /></span> <h2>Tell us what went wrong</h2> <p>We’re committed to provide you the best coupons available wherever you shop. </p><p>Help your fellow shoppers by letting us know what happened.</p><div class='leftSection' style='margin-top:25px;'>    <ul class='pLeft20'> <li style='padding-top:0px;'> <label class='radio-box'> <span>No savings found</span> <input type='radio' checked='checked' name='listDetail' value='No savings found'> <span class='checkmark'></span> </label> </li><li> <label class='radio-box'> <span>Something is broken</span> <input type='radio' checked='checked' name='listDetail' value='Something is broken'> <span class='checkmark'></span> </label> </li><li> <label class='radio-box'> <span>Poor user experience</span> <input type='radio' checked='checked' name='listDetail' value='Poor user experience'> <span class='checkmark'></span> </label> </li><li> <label class='radio-box'> <span>Issues with Cash Back</span> <input type='radio' checked='checked' name='listDetail' value='Issues with Cash Back'> <span class='checkmark'></span> </label> </li><li style='padding-bottom:0'> <label class='radio-box'> <span>Other</span> <input type='radio' checked='checked' name='listDetail' value='Other'> <span class='checkmark'></span> </label> </li></ul>    <div id='OptionAlert' style='color:red; text-align:left; margin-top: 20px;margin-left: 15px;'></div>  </div><div class='rightSection'><textarea id = 'feedbackText' placeholder='Your comments'></textarea> <input id='feedbackEmail' type='email' class='email' placeholder='Your email address (optional)'/> <div id='feedbackAlert' style='color:red; text-align:left;height: 12px;margin-left: 15px;'></div> <button class='sbtbtn' type='submit'>Submit</button> </div></div></div>";
	createIFeedback(DomainHtml, myObj);
}

function createIFeedback(DomainHtml, jsonObj) {
	closeframe();
	var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
	if (!location.ancestorOrigins.contains(extensionOrigin)) {
		var iframeExists = false;
		if (iframe)
			if (iframe.parentNode)
				iframeExists = true;
		if (!iframeExists) {
			iframe = document.createElement('iframe');
			iframe.setAttribute("id", "couponchiefiframe");
			iframe.setAttribute("frameBorder", "0");
			iframe.setAttribute("style", "position:fixed;top:10%;left:50%;border:0.8px solid #e8dfdf;padding:0;transform: translate(-50%,0);display:block;width:695px;height:427px;z-index:9999999999;opacity:1;background-color:#F6F5F3;");
			document.body.appendChild(iframe);
		}
		var ApplyFeedbackHtml = style + "<body>" + DomainHtml + "</body>";
		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write(ApplyFeedbackHtml);
		if (iframe.contentWindow.document.getElementById('closeiframe')) {
			iframe.contentWindow.document.getElementById('closeiframe').addEventListener('click', closeframe);
		}
		if (iframe.contentWindow.document.getElementsByClassName('sbtbtn')[0]) {
			iframe.contentWindow.document.getElementsByClassName('sbtbtn')[0].addEventListener('click', submitFeedback);
		}
		if (iframe.contentWindow.document.getElementById('feedbackText')) {
			iframe.contentWindow.document.getElementById('feedbackText').addEventListener('click', feedbackText);
		}
		if (iframe.contentWindow.document.getElementById('feedbackEmail')) {
			iframe.contentWindow.document.getElementById('feedbackEmail').addEventListener('click', feedbackEmail);
		}
		var radios = iframe.contentWindow.document.getElementsByName('listDetail')
			if (radios) {
				for (var i = 0, length = radios.length; i < length; i++) {
					iframe.contentWindow.document.getElementsByName('listDetail')[i].addEventListener('click', clickOptions);
				}
			}
			setOverlay();
	}
}

function feedbackEmail() {
	iframe.contentWindow.document.getElementById('feedbackAlert').innerText = '';
	iframe.contentWindow.document.getElementById('feedbackEmail').style.borderColor = "#e5e5e5";
}

function feedbackText() {
	iframe.contentWindow.document.getElementById('feedbackAlert').innerText = '';
	iframe.contentWindow.document.getElementById('feedbackText').style.borderColor = "#e5e5e5";
}

function clickOptions() {
	iframe.contentWindow.document.getElementById('feedbackAlert').innerText = '';
	iframe.contentWindow.document.getElementById('OptionAlert').innerText = '';
}

/////////////// Submit feedback api code//////////////////////////////
function submitFeedback() {
	var radios = iframe.contentWindow.document.getElementsByName('listDetail');
	var checktrue = false;
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			checktrue = true;
			break;
		} else {
			checktrue = false;
		}
	}
	if (checktrue) {
		iframe.contentWindow.document.getElementById('feedbackAlert').innerText = '';
		var feedbackText = iframe.contentWindow.document.getElementById('feedbackText').value;
		feedbackText = feedbackText.replace(/^\s+/g, '');
		if (!feedbackText) {
			iframe.contentWindow.document.getElementById('feedbackAlert').innerText = 'Please provide your feedback.';
			iframe.contentWindow.document.getElementById('feedbackText').style.borderColor = "#e4b9a3";
		} else {
			var feedbackEmailText = iframe.contentWindow.document.getElementById('feedbackEmail').value;
			var feedbackEmail = "";
			if (feedbackEmailText != "") {
				feedbackEmail = ValidateEmail(feedbackEmailText);
			}
			var feedOption = radios[i].value;
			CurrHost = CurrHost.replace("www.", "");
			if ((feedbackEmailText == "") || (feedbackEmail == true)) {
				var feedParams = "installation_id=" + InstallObj + "&store_url=" + CurrHost + "&feedback=" + feedbackText + "&email=" + feedbackEmail + "&reason=" + feedOption + "";
				var feedHttp = new XMLHttpRequest();
				feedHttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						closeframe();
					}
				};
				feedHttp.open("POST", baseApiUrl + "/submitFeedback", false);
				feedHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
				feedHttp.setRequestHeader("Client-Service", "cchief");
				feedHttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
				feedHttp.send(feedParams);
			}
		}
	} else {
		iframe.contentWindow.document.getElementById('OptionAlert').innerText = 'Please select any option.';
	}
}

////////////////////////////////// Code for Feedback email Validation ////////////////
var mail;
function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return (true)
	}
	iframe.contentWindow.document.getElementById('feedbackAlert').innerText = 'Please enter a valid email address!';
	iframe.contentWindow.document.getElementById('feedbackEmail').style.borderColor = "#e4b9a3";
	return (false)
}

//////////////////////////////// Code for Casback Validation when click on extension icon ///////////////
function createCashback() {
	chrome.storage.local.get(null, function (obj) {
		var storeObj = JSON.stringify(obj.identifier);
		storeObj = storeObj.replace(/['"]+/g, '');
		chrome.storage.local.get(null, function (obj) {
			var cashbakEnd = JSON.stringify(obj.cashback_enddate);
			if (cashbakEnd) {
				cashbakEnd = cashbakEnd.replace(/['"]+/g, '');
				cashbakEnd = cashbakEnd.replace(/\s/g, '')
			}
			cashbakEnd = new Date(cashbakEnd);
			var dtToday = new Date();
			if (((storeObj == "200") || (storeObj == "0")) && (cashbakEnd >= dtToday)) {
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
						if (document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback')) {
							document.getElementById('couponchiefiframe').contentWindow.document.getElementById('activeCashback').addEventListener('click', activeCashback);
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
				else{
					chrome.extension.sendRequest("enableicon");
				}
			});
		});
	}
	
	});
}

////////////////////////////// code for open url of cashback in new window and close ///////////////
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
					var dtToday = new Date();
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
		xmlhttp.open("POST", baseApiUrl + "/getCoupons", false);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
		xmlhttp.setRequestHeader("Client-Service", "cchief");
		xmlhttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
		xmlhttp.send(parameters);
	}
}

//////////////////////////////// GetCookies Code /////////////////////
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
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

//////////////////// Code for set overlay effect ////////////////////////
function setOverlay() {
	var tads = document.getElementsByTagName("BODY")[0];
	var overlayElement = document.createElement('div');
	overlayElement.setAttribute('id', 'Coupon_Overlay');
	overlayElement.setAttribute("style", "background:#000;opacity:0.7;width:100%;height:100%;left: 0;top: 0;z-index: 9999999;position: fixed;");
	tads.appendChild(overlayElement);
}

////////////////////////  Code for check current url is present in storelist or not //////////
var storeListObj;
function isInAllSupportSites(CurrHref) {
	chrome.storage.local.get(null, function (obj) {
		storeListObj = obj.storelist_json;
		var storesCount = storeListObj.stores.length;
		for (site in storeListObj.stores) {
			if (CurrHref.indexOf(storeListObj.stores[site].store_domain) > -1) {
				return 1;
			}
		}
		return 0;
	});
}

///////////////// StoreList will update after 1 hour //////////
function after1Hour() {
	var storage = chrome.storage.local;
	var time_now = (new Date()).getTime();
	storage.get("after1Hour", function (result) {
		var lastclear = result["after1Hour"];
		if (!lastclear) {
			lastclear = null;
		}
		
		 // .getTime() returns milliseconds so 1000 * 60 * 60 * 1 = 1 hours
		if ((time_now - lastclear) > 1000 * 60 * 60 * 1) {
			var parameters = "installation_id=" + InstallObj;
			var strxmlhttp = new XMLHttpRequest();
			strxmlhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var encryptResp = JSON.parse(this.responseText);
					var decryptResp = JSON.parse(CryptoJS.AES.decrypt(encryptResp, "MYUTPbxyqi2a2A6y", {
								format: CryptoJSAesJson
							}).toString(CryptoJS.enc.Utf8));
							//console.log(decryptResp);
					storesObj = JSON.parse(decryptResp);
					chrome.storage.local.set({
						"storelist_json": storesObj
					}, function () {});
				}
			};
			strxmlhttp.open("GET", baseApiUrl + "/storelist", true);
			strxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
			strxmlhttp.setRequestHeader("Client-Service", "cchief");
			strxmlhttp.setRequestHeader("Auth-Key", "0BC0EAF2470D001FF31370AEE8282EBD");
			strxmlhttp.send(parameters);
			chrome.storage.local.remove(["after1Hour"], function () {});
			storage.set({
				["after1Hour"]: time_now
			});
		}
	});
}

////////  Code for check current url is present in automatically coupons apply storelist or not //////////
function isInSupportedSites(CurrHost) {
	CurrHost = CurrHost.replace("www.", "");
	for (site in partners.SupportedSites) {
		if (CurrHost == partners.SupportedSites[site].domain) {
			return parseInt(site) + 1;
		}
	}
	return 0;
}

 //////////////// Code for find current index //////////
var contains = function (needle) {
	var findNaN = needle !== needle;
	var indexOf;
	if (!findNaN && typeof Array.prototype.indexOf === 'function') {
		indexOf = Array.prototype.indexOf;
	} else {
		indexOf = function (needle) {
			var i = -1,
			index = -1;
			for (i = 0; i < this.length; i++) {
				var item = this[i];
				if ((findNaN && item !== item) || item === needle) {
					index = i;
					break;
				}
			}
			return index;
		};
	}
	return indexOf.call(this, needle) > -1;
};
