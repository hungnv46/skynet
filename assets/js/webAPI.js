if (!window.webAPI) {
    window.webAPI = {};
};

var appConfig = {
    square: {
        width: 1366
    },
    rectangle: {
        _9x19: {
            width: 1280
        },
        _9x16: {
            width: 1366
        },
        _height: 600
    },
    height: 1024,
    deviceRatio: window.innerHeight / window.innerWidth,
    imageSuffix: 1,
    cdnAPI: {
        upload: 'File/Upload',
        getLink: 'uploaded/',
        originFolder: 'original/'
    }
};
var pageState = {
    online: 'online',
    offline: 'offline'
};
var currentViewport = {
    width: window.innerWidth,
    height: window.innerHeight,
};

webAPI = {

    dom: {
        selector: function (strElm) {

            return document.querySelectorAll(strElm);

        },
        addClass: function (strElm, strClassName) {

            var elm = webAPI.dom.selector(strElm);

            for (var i = 0; i < elm.length; i++) {

                elm[i].classList.add(strClassName);

            }

        },
        removeClass: function (strElm, strClassName) {
            var elm = webAPI.dom.selector(strElm);

            for (var i = 0; i < elm.length; i++) {

                elm[i].classList.remove(strClassName);

            }
        },
        setAttribute: function (strElm, strAttributeName, strValue) {
            var elm = webAPI.dom.selector(strElm);

            for (var i = 0; i < elm.length; i++) {

                elm[i].setAttribute(strAttributeName, strValue);

            }
        },
        removeAttribute: function (strElm, strAttributeName) {
            var elm = webAPI.dom.selector(strElm);

            for (var i = 0; i < elm.length; i++) {

                elm[i].removeAttribute(strAttributeName);

            }
        },
        events: {
            addClick: function (strElm, func) {

                var elm = webAPI.dom.selector(strElm);

                for (var i = 0; i < elm.length; i++) {

                    var tempEvent = null;

                    elm[i].addEventListener('click', function (event) {

                        event.preventDefault();

                        func(event);

                    });

                }
            },
            addDblClick: function (strElm, func) {

                var elm = webAPI.dom.selector(strElm);

                for (var i = 0; i < elm.length; i++) {

                    var tempEvent = null;

                    elm[i].addEventListener('dblclick', function (event) {

                        event.preventDefault();

                        func(event);

                    });

                }
            },
        }
    },

    graphic: {
        scaleFIT: function (strImgElm) {

            var elm = webAPI.dom.selector(strImgElm);
            var parentElm = null;
            var parentElmWidth = null;
            var parentElmHeight = null;
            var imgRatio = null;

            for (var i = 0; i < elm.length; i++) {

                var elmClone = document.createElement("img");
                elmClone.src = elm[i].src;

                parentElm = elm[i].parentElement;
                parentElmWidth = parentElm.clientWidth;
                parentElmHeight = parentElm.clientHeight;

                // Detect image is landscape or portrait
                imgRatio = elmClone.width / elmClone.height;

                if (imgRatio < 1) {

                    elm[i].classList.add('portrait');

                } else if (imgRatio > 1) {

                    elm[i].classList.add('landscape');

                    parentElm.style.height = elm[i].height + 'px';

                } else {

                    elm[i].classList.add('square');

                }

            }

        },
        viewportToPixels: function (value) {
            var n = 0;
            var side = window.innerHeight;
            if (value.indexOf("vh") > -1) {
                n = value.replace("vh", "");
            } else {
                n = value.replace("vw", "");
                side = window.innerWidth;
            }
            n = n * side / 100;
            return n + 'px';
        },

        calcPosition: function (strElm, xPos, yPos) { // strImgElm, xPos, yPos, isScalePos		

            //alert(currentViewport.width);
            //alert(currentViewport.height);

            var elm = null;

            if (typeof (strElm) === 'string') {

                elm = webAPI.dom.selector(strElm)[0];

            } else if (typeof (strElm) === 'object') {

                elm = strElm;
            }

            if (!elm) {
                console.log(strElm);
                return false;
            }

            var cloneImg = new Image();
            cloneImg.src = elm.src;

            cloneImg.onload = function (event) {

                var parentElm = elm.parentElement;

                if (parentElm.parentElement.className.indexOf('group') > -1) {
                    parentElm = parentElm.parentElement;
                }

                parentElm.style.left = xPos + 'px';
                parentElm.style.top = yPos + 'px';

                if (appConfig.deviceRatio < 0.6) {

                    // Almost Rectangle

                    elm.style.width = 'auto';
                    elm.style.height = webAPI.graphic.viewportToPixels((event.target.height * 100 / appConfig.height) + 'vh');

                    if (parentElm.className.indexOf('group') > -1) {

                        var btnSpin = webAPI.dom.selector('.btn-spin img')[0];
                        var btnArrow = webAPI.dom.selector('.arrow img')[0];

                        btnSpin.style.height = webAPI.graphic.viewportToPixels((btnSpin.height * 100 / appConfig.height) + 'vh');
                        btnArrow.style.height = webAPI.graphic.viewportToPixels((btnArrow.height * 100 / appConfig.height) + 'vh');

                        btnSpin.parentElement.style.left = (elm.clientWidth - btnSpin.width) / 2 + 'px';
                        btnSpin.parentElement.style.top = (elm.clientHeight - btnSpin.height) / 2 + 'px';

                        btnArrow.parentElement.style.left = (elm.clientWidth - btnArrow.width) / 2 + 'px';
                        btnArrow.parentElement.style.top = 0 + 'px';

                    }

                    if (currentViewport.width <= 736) {

                        parentElm.style.left = webAPI.graphic.viewportToPixels((xPos * 100 / appConfig.rectangle._9x16.width) + 'vw');

                        if (parentElm.className.indexOf('group') > -1) {
                            parentElm.style.left = (parseInt(parentElm.style.left) * (window.innerWidth / window.innerHeight) / 100) + parseInt(parentElm.style.left) + 'px';
                        }

                    } else {


                        parentElm.style.left = webAPI.graphic.viewportToPixels((xPos * 100 / appConfig.rectangle._9x19.width) + 'vw');

                        // Temp Fix for tab 3 lite
                        if (currentViewport.height > 483 && currentViewport.height < appConfig.rectangle._height) {

                            if (currentViewport.width === 1024) {

                                parentElm.style.left = webAPI.graphic.viewportToPixels((xPos * 100 / appConfig.rectangle._9x16.width) + 'vw');

                                if (parentElm.className.indexOf('group') > -1) {
                                    parentElm.style.left = parseInt(parentElm.style.left) + (appConfig.rectangle._height - currentViewport.height) - (currentViewport.height * appConfig.deviceRatio / 100) * 2 + 'px';
                                }

                            }

                        }

                    }

                } else {


                    // Almost Square

                    elm.style.width = webAPI.graphic.viewportToPixels((event.target.width * 100 / appConfig.square.width) + 'vw');
                    elm.style.height = webAPI.graphic.viewportToPixels((event.target.height * 100 / appConfig.height) + 'vh');

                    var tempImgWidth = null;

                    if (parentElm.className.indexOf('group') > -1) {

                        if (appConfig.deviceRatio <= 0.66) {

                            tempImgWidth = parseInt(elm.style.width);
                            elm.style.width = 'auto';

                        }


                        var btnSpin = webAPI.dom.selector('.btn-spin img')[0];
                        var btnArrow = webAPI.dom.selector('.arrow img')[0];

                        btnSpin.style.width = webAPI.graphic.viewportToPixels((btnSpin.width * 100 / appConfig.square.width) + 'vw');
                        btnArrow.style.width = webAPI.graphic.viewportToPixels((btnArrow.width * 100 / appConfig.square.width) + 'vw');

                        btnSpin.parentElement.style.left = (elm.clientWidth - btnSpin.width) / 2 + 'px';
                        btnSpin.parentElement.style.top = (elm.clientHeight - btnSpin.height) / 2 + 'px';

                        btnArrow.parentElement.style.left = (elm.clientWidth - btnArrow.width) / 2 + 'px';
                        btnArrow.parentElement.style.top = 0 + 'px';

                    }

                    parentElm.style.left = webAPI.graphic.viewportToPixels((xPos * 100 / appConfig.square.width) + 'vw');

                    if (appConfig.deviceRatio <= 0.66 && tempImgWidth !== null) {

                        parentElm.style.left = parseInt(parentElm.style.left) + ((tempImgWidth - elm.clientWidth) / 2) + 'px';

                    }

                }

                parentElm.style.top = webAPI.graphic.viewportToPixels((yPos * 100 / appConfig.height) + 'vh');

            }

        }
    },
	
	social: {
		
		initFBComponents: function(fbInitComplete) {
			window.fbAsyncInit = function() {
				FB.init({
				  appId      : '1701132369920968',
				  cookie     : true,
				  xfbml      : true,
				  status     : true,
				  version    : 'v2.8'
				});
				
				// Call this function before submit anything.
				//checkUserStatus();
				fbInitComplete(FB);		
			};
		}
		
	},
	
    storage: {

        setupLocalMasterData: function () {

            // Master Data For Search
            var data = webAPI.xmlHttpRequest.data({
                "PageIndex": 1,
                "PageSize": 100,
                "Status": "A",
                "Deleted": "false",
                "POSM": "true",
                "SalesRegionL4": "HDQ",
                "CompanyCode": "VNM",
                "CustomerCode": "VNM",
                "SecondaryCustomerCode": "AA0800",
                "OrderDate": "2017-08-08",
            });

            webAPI.xmlHttpRequest.request(appConfig.domain + appConfig.apiPath.getAllProduct, data, 'POST', function (response) {

                console.log('Search Local Data: ');
                console.log(response);

                localStorage.setItem('dwsearchdata', JSON.stringify(response));


            }, function (xhr, status) {

                console.log(xhr);
            });
            //End Data Product
            // data for Customer
            var dataCustomer = webAPI.xmlHttpRequest.data({
                "PageIndex": 1,
                "PageSize": 100,
                "Status": "A",
                "Deleted": "false",
                "CompanyCode": "VNM",
                "CustomerCode": "VNM",
            });

            webAPI.xmlHttpRequest.request(appConfig.domain + appConfig.apiPath.getCustomerInfo, dataCustomer, 'POST', function (response) {

                console.log('Search Local Customer Data: ');
                console.log(response);

                localStorage.setItem('dwsearchCustomer', JSON.stringify(response));


            }, function (xhr, status) {

                console.log(xhr);
            });
            //End Data Customer
            // data for PromotionLine
            var dataPromotion = webAPI.xmlHttpRequest.data({
                "PageIndex": 1,
                "PageSize": 100,
                "Status": "A",
                "Deleted": "false",
                "PromotionType": "Line",
                "CompanyCode": "VNM",
                "CustomerCode": "VNM",
            });

            webAPI.xmlHttpRequest.request(appConfig.domain + appConfig.apiPath.PromotionLine, dataPromotion, 'POST', function (response) {

                console.log('Search Local Promotion Data: ');
                console.log(response);

                localStorage.setItem('dwsearchPromotion', JSON.stringify(response));


            }, function (xhr, status) {

                console.log(xhr);
            });
            //End Data PromotionLine
            // data for PromotionDatail
            var dataPromotionDetail = webAPI.xmlHttpRequest.data({
                "PageIndex": 1,
                "PageSize": 100,
                "Status": "A",
                "Deleted": "false",
                "CompanyCode": "VNM",
                "CustomerCode": "VNM",
            });

            webAPI.xmlHttpRequest.request(appConfig.domain + appConfig.apiPath.PromotionDetail, dataPromotionDetail, 'POST', function (response) {

                console.log('Search Local Promotion Detail Data: ');
                console.log(response);
                localStorage.setItem('dwsearchPromotionDetail', JSON.stringify(response));


            }, function (xhr, status) {

                console.log(xhr);
            });
            //End Data PromotionDatail
            // data for PromotionLineLoyalty
            var dataPromotion = webAPI.xmlHttpRequest.data({
                "PageIndex": 1,
                "PageSize": 100,
                "Status": "A",
                "Deleted": "false",
                "PromotionType": "Loyalty",
                "CompanyCode": "VNM",
                "CustomerCode": "VNM",
            });

            webAPI.xmlHttpRequest.request(appConfig.domain + appConfig.apiPath.PromotionLine, dataPromotion, 'POST', function (response) {               
                localStorage.setItem('dwsearchPromotionLoyalty', JSON.stringify(response));
            }, function (xhr, status) {

                console.log(xhr);
            });
            //End Data PromotionLineLoyalty
            
            // data for ApplyFor
            var dataApplyFor = webAPI.xmlHttpRequest.data({
                "PageIndex": 1,
                "PageSize": 100,
                "Deleted": "false",
                "CompanyCode": "VNM",
                "CustomerCode": "VNM",
            });

            webAPI.xmlHttpRequest.request(appConfig.domain + appConfig.apiPath.ApplyFor, dataApplyFor, 'POST', function (response) {
                localStorage.setItem('dwsearchApplyFor', JSON.stringify(response));
            }, function (xhr, status) {

                console.log(xhr);
            });
            //End Data ApplyFor
        }

    },

    utils: {

        pageVisibility: function (callback) {

            (function () {
                var visibilityChange = (function (window) {
                    var inView = false;
                    return function (fn) {
                        window.onfocus = window.onblur = window.onpageshow = window.onpagehide = function (e) {
                            if ({ focus: 1, pageshow: 1 }[e.type]) {
                                if (inView) return;
                                fn("visible");
                                inView = true;
                                return;
                            } else if (inView) {
                                fn("hidden");
                                inView = false;
                                return;
                            }
                        };
                    };
                }(this));

                visibilityChange(function (state) {

                    callback(state);

                });
            })();
        },
		
		pageRedirect: function(pageLink) {
			
			var targetLink = location.href.substring(0, location.href.lastIndexOf("/")+1) + pageLink;
			location.replace(targetLink);
			
		},
		
        getQueryStringKey: function (name, url) {

            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));

        },

        createCookie: function (name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        },

        readCookie: function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },

        eraseCookie: function (name) {
            createCookie(name, "", -1);
        },

        /********* Define click event name for multiple platforms *********/
        isTouchDevices: function () {
            if ('ontouchstart' in window || navigator.msMaxTouchPoints)
                return true;
            else
                return false;
        },
        /********* End Define click event name for multiple platforms *********/
        lazyLoadImage: function (group, i, imageLoadComplete) {
            try {
                webAPI.dom.selector('.contentOverlay')[0].innerHTML = Math.round((i / group.length) * 100) + "%";
                if (i === group.length) {
                    imageLoadComplete();
                } else {
                    if (typeof (group[i]) !== 'undefined') {
                        group[i].setAttribute('src', eval(group[i].getAttribute("data-src")));
                        group[i].onerror = function (evt) {
                            console.log("Can't load this image ! ");
                            i++;
                            webAPI.utils.lazyLoadImage(group, i, imageLoadComplete);
                        };
                        group[i].onload = function (evt) {

                            i++;
                            webAPI.utils.lazyLoadImage(group, i, imageLoadComplete);
                        };
                    }
                }
            }
            catch (ex) { }
        },

        getAllStorage: function () {

            var archive = [],
                keys = Object.keys(localStorage),
                i = 0, key;

            for (; key = keys[i]; i++) {
                archive.push(key + '=' + localStorage.getItem(key));
            }

            return archive;
        },

        saveLocalData: function (objData) {

            var headerData = JSON.stringify({
                'SalesOrderCode': objData.SalesOrderCode,
                'Source': objData.Source,
                'orderNotes': objData.orderNotes,
                'CustomerCode': objData.CustomerCode,
                'CompanyCode': objData.CompanyCode,
                'SecondaryCustomerCode': objData.SecondaryCustomerCode,
                'SubTotalAmount': objData.SubTotalAmount,
                'TotalAmount': objData.TotalAmount,
                'GrossTotalAmount': objData.GrossTotalAmount
            });

            var bodyData = JSON.stringify(objData.SalesOrderDetails);

			/*if(listLocalOrders.length > 0) {
				
				for (var i = 0; i < listLocalOrders.length; i++) {
					
					if(listLocalOrders[i].split('_')[0].toString() === headerData.SalesOrderCode.toString()) {						
						localStorage.setItem(objData.SalesOrderCode + '_header', headerData);
						localStorage.setItem(objData.SalesOrderCode + '_body', bodyData);
						
					} else {
						
						// Put the object into storage
						localStorage.setItem(objData.SalesOrderCode + '_header', headerData);
						localStorage.setItem(objData.SalesOrderCode + '_body', bodyData);
						
					}
					
				}
				
			}*/
            localStorage.setItem(objData.SalesOrderCode + '_dworder', headerData + '||' + bodyData);

            // Add total offline orders to layout
            var listLocalOrders = webAPI.utils.getAllStorage();
            var totalOfflineOrders = 0;

            if (listLocalOrders.length > 0) {

                for (var i = 0; i < listLocalOrders.length; i++) {

                    if (listLocalOrders[i].toString().indexOf('_dworder') > -1) {

                        totalOfflineOrders = totalOfflineOrders + 1;

                    }

                }

            }

            webAPI.dom.selector('.sidebar .counter')[0].innerText = totalOfflineOrders;


        },

        deleteLocalData: function (key) {

            if (key === '') {

                localStorage.removeItem(key);
                localStorage.removeItem(key);

            } else {

                var listLocalOrders = webAPI.utils.getAllStorage();

                if (listLocalOrders.length > 0) {

                    for (var i = 0; i < listLocalOrders.length; i++) {

                        localStorage.removeItem(listLocalOrders[i].split('_')[0].toString() + '_dworder');

                    }

                    webAPI.dom.selector('.sidebar .counter')[0].innerText = 0;

                }

            }
        }

    },

    xmlHttpRequest: {

        data: function (strData) {
            try {
                return JSON.parse(strData);
            } catch (e) {
                return strData;
            }
        },
        request: function (url, body, method, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

            if (body !== null) {

                //Add Hmac
                xhr.setRequestHeader("Authorization", appConfig.token);

            }
            
            xhr.onreadystatechange = function () {                
                if (this.readyState == 4) {
                    if (xhr.status === 200) {
                        try {
                            success(JSON.parse(xhr.responseText));
                        } catch (ex) {
                            //window.location.replace("login.html");
                        }

                    } else {
                        error(xhr, xhr.status);

                    } 
                } 
            };

            if (method.toUpperCase() === 'POST') {

                try {
                    body = JSON.parse(body);
                } catch (e) { }

                xhr.send(JSON.stringify(body));

            } else if (method.toUpperCase() === 'GET') {

                xhr.send(null);

            }
        }
    }
}