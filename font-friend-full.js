/*!
 * Soma FontFriend 3.2
 * http://somadesign.ca/projects/fontfriend
 *
 * Copyright (c) 2009-12 Matt Wiebe
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Uses some code (c) 2009-10 Ryan Seddon from
 * http://labs.thecssninja.com/font_dragr/
 * Licensed under the MIT license
 *
*/

// closurfy it
(function(window, document){

	// moving along
	var $, body, jqInterval,
	undef = 'undefined',
	fontFriend = {
		version: "3.2",
		// style info
		css: "#font-friend{overflow:hidden;position:fixed;bottom:0;left:30px;background-color:#fff;background-color:rgba(255,255,255,0.93);width:600px;color:#222;-webkit-box-shadow:1px 1px 5px rgba(0,0,0,.3);-moz-box-shadow:1px 1px 5px rgba(0,0,0,.3);box-shadow:1px 1px 5px rgba(0,0,0,.3);z-index:10000;text-align:left;height:100px}#font-friend,#ff-drop h6,#ff-drop li{line-height:1.5!important}#ff-drop{padding:12px 12px 12px 36px}#ff-toggle{background-color:#900;color:#eee;display:block;width:14px;height:14px;padding:0;position:absolute;top:0;left:0;font-size:8px;text-align:center;line-height:1!important;cursor:pointer;z-index:10001;-moz-transition:.25s all ease-in-out;-webkit-transition:.25s all ease-in-out;-o-transition:.25s all ease-in-out;transition:.25s all ease-in-out}#ff-toggle sup{font-size:13px;line-height:1!important;vertical-align:super;display:none}.open #ff-toggle sup{display:inline}#ff-toggle:hover{color:#fff;background-color:#c00}#ff-drop form{background:0;color:inherit;float:none}#ff-drop h6{font-size:13px;border-bottom:1px solid #dedede;margin:0 0 6px!important;padding:0!important;text-indent:0!important;float:none!important;height:1.5em!important;white-space:nowrap}#ff-drop>div{float:left;width:120px;padding-right:20px;margin:0!important;position:relative}#ff-drop>div.wrap>div{margin-bottom:12px;font-size:11px!important;position:relative}#ff-drop div#ff-selector{width:130px}#ff-drop div#ff-font-family{width:240px}#ff-selector p{font-size:9px!important;line-height:1.2!important;margin:1em 0 0!important;padding:0!important}#ff-controls{position:absolute!important;bottom:60px;left:65px;width:55px!important;height:60px;margin:0!important;padding:0!important}#ff-controls div{position:absolute;font-size:20px;width:1em;height:1em;color:#555;min-width:inherit!important;min-height:inherit!important;padding:0;margin:0;float:none;text-align:center}#ff-controls>div,.ff-toggler>span,#family-custom-add{font-family:sans-serif!important;font-weight:normal!important;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}#ff-controls div:hover{color:#000}#ff-controls .up{left:1em;top:0}#ff-controls .down{left:1em;bottom:0}#ff-controls .left{left:0;top:1em}#ff-controls .right{right:-.25em;top:1em}#ff-drop #ff-font-family ul{float:left;width:110px;padding-right:5px}#ff-drop #ff-font-family ul#ff-font-family-sans{padding-right:10px;width:115px}#ff-drop ol li{list-style:none outside}#ff-drop ol,#ff-drop ul{margin:0;padding:0}#ff-drop li{font-size:11px!important;\ margin:0!important;padding:0!important;list-style:none outside none!important;text-indent:0!important;height:auto!important}#ff-drop li.core{margin-bottom:4px!important;padding:0!important}#ff-drop ul li:hover{cursor:pointer;background-color:#e6e6e6!important}#ff-drop ul li.family-custom{margin:12px 0 0!important}#ff-drop ul li.family-custom:hover{cursor:default;background:none!important}#family-custom-add{display:inline-block;color:#aaa;line-height:1!important;font-size:15px!important;color:#666!important;vertical-align:top;padding:1px 3px 3px}#family-custom-add:hover,#family-custom-add:focus{background-color:#555!important;color:#fff!important}#family-custom{width:85px}#ff-drop ol input[type=radio]{margin-left:-5px;width:auto!important}#ff-blah{width:100px;margin-left:5px}#ff-drop ol label{margin-left:5px;display:inline!important}#ff-drop>#ff-credit{position:absolute;bottom:21px;left:32px;font-size:9px;margin:0!important}#font-friend a{color:#4c0003!important;text-decoration:underline!important;border:0!important}#font-friend a:hover{color:#a60007!important}#ff-drop>#ff-clear{position:absolute;bottom:0;right:0;padding:5px 5px 0!important;text-decoration:line-through;opacity:.1;font-size:21px;margin:0!important;width:auto!important}#ff-clear:hover{opacity:1;cursor:pointer}#ff-font-drop{-webkit-border-horizontal-spacing:0;-webkit-border-vertical-spacing:0;-webkit-user-select:none;background-color:#d14836;background-image:-webkit-linear-gradient(top,#dd4b39,#d14836);border-bottom-color:transparent;border-bottom-left-radius:2px;border-bottom-right-radius:2px;border-bottom-style:solid;border-bottom-width:1px;border-collapse:separate;border-left-color:transparent;border-left-style:solid;border-left-width:1px;border-right-color:transparent;border-right-style:solid;border-right-width:1px;border-top-color:transparent;border-top-left-radius:2px;border-top-right-radius:2px;border-top-style:solid;border-top-width:1px;color:white;cursor:default;display:inline-block;font-family:arial,sans-serif;font-size:11px;font-weight:bold;height:50px;line-height:27px;margin-right:1px;min-height:0;min-width:54px;outline-color:white;outline-style:none;outline-width:0;overflow-x:visible;overflow-y:visible;padding-bottom:0;padding-left:8px;padding-right:8px;padding-top:0;position:relative;text-align:center;text-shadow:rgba(0,0,0,0.0976563) 0 1px 0;text-transform:uppercase;vertical-align:top;width:100px}#ff-font-drop.dropzone{background-color:red;border-color:#111}#ff-drop select{width:105px!important;margin-left:15px!important}#ff-google-webfonts select{width:99%!important;margin:0!important}#ff-drop select option{font-size:10px!important}#ff-drop .ff-hidden{display:none}#ff-drop .ff-clickable{cursor:pointer;position:relative;z-index:2}#ff-font-family h6 span{text-transform:uppercase!important;font-size:75%;font-weight:normal!important;color:#111!important;letter-spacing:.02em;line-height:1;display:inline-block}#ff-font-family h6 .ff-active{color:#aaa!important}#ff-font-family .ff-custom{padding:0 6px;border-right:1px solid #bbb;margin-right:6px}#ff-badges{position:absolute;right:14px;top:0;z-index:14px}#ff-badges>img{padding:0 4px 0 0!important;margin:0!important;border:0!important;width:16px!important;height:16px!important}#ff-drop #ff-font-family #ff-font-family-custom{width:100%;-webkit-column-count:2;-moz-column-count:2;column-count:2;-webkit-column-gap:12px;-moz-column-gap:12px;column-gap:12px}.ff-toggler{position:absolute;height:20px;top:27px;left:-4px}.ff-toggler span{position:absolute;display:block;left:0;top:0;height:8px;width:8px;line-height:1!important;font-size:8px!important;text-align:center;color:#aaa!important;padding:2px 4px!important}.ff-toggler span:hover{color:#333!important}.ff-toggler span.ff-down{top:auto;bottom:0}#ff-drop [data-ff=fontFamily] li{height:1.5em!important;overflow:hidden;text-overflow:ellipsis}",
		// inserted html. see font-friend.html for understandable version
		html: '<div id="ff-drop">    <span id="ff-toggle">_</span><div id="ff-selector" style="display:none"><h6>Selector</h6><form action="" method="get"><ol><li><input type="radio" name="jq-select" checked="checked" id="jq1"><label for="jq1">*</label></li></ol></form></div><div id="ff-font-family"><h6>Change Fonts To</h6><ul id="ff-font-family-sans" data-ff="fontFamily"><li>Arial</li><li>Droid Arabic Naskh</li></ul></div><div class="wrap"><div id="ff-google-webfonts"><h6>Google Web Fonts</h6><div>Loading…</div></div>    <div id="ff-credit">Based on <a href="http://somadesign.ca/projects/fontfriend/" title="Soma FontFriend homepage">FontFriend</a></div></div><div class="wrap"><div id="ff-font-face"><h6>From Your Harddisk</h6><div id="ff-font-drop">Drag a font here</div><ul data-ff="fontFamily"></ul></div></div></div>',
		// do we have custom families?
		// used for Typekit-style font stacks
		customFamiles: false,
		// custom family map for above's case
		customFamilyMap: [],
		// map of imported Google Web Fonts.
		googleFamilies: {},
		// store Google Web Fonts already existing on page
		existingGoogleFamilies: []
	};

	function maybeInit() {
		if ( typeof(window.jQuery) === undef ) {
			var jq = document.createElement("script");
			jq.src = '//ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
			document.getElementsByTagName('head')[0].appendChild(jq);
			jqInterval = setInterval(jqCheck, 100);
		}
		else {
			init();
		}
	}
	maybeInit();

	function jqCheck() {
		if ( typeof(window.jQuery) !== undef ) {
			clearInterval(jqInterval);
			init();
		}
	}

	function init() {
		$ = window.jQuery;

		// check if it's already been added. saves against weirdness if clicked again.
		if ( $('#font-friend').size() !== 0 ) {
			return false;
		}

		body = $("body");
		$("head").append('<style id="font-friend-stylesheet" type="text/css" media="screen">'+fontFriend.css+'</style>');
		body.append("<div id='font-friend'></div>");
		$("#font-friend").html(fontFriend.html).addClass("open");
//		$("#ff-credit").append("<span> "+fontFriend.version+"</span>");

		addBehaviours();
		customFamilyDefinitionsCheck();
		addIncrementors();
		buildFamilies();
		webfontSpecimenCheck();
		maybeAddEmbeddedFonts();
		getGoogleFonts();
// DC: This is a hack that doesn't work, so commented out, and rolled my own
//      addGoogleFont('Roboto');
//        addGlobalLink('http://fonts.googleapis.com/css?family=Droid+Arabic+Naskh&subset=arabic');
	}

    function addGlobalLink(linkUrl) {
        var head, link;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet'; 
        link.href = linkUrl;
        head.appendChild(link);
    }

	function getGoogleFonts() {
		var api = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBUK3PeqSEzwPNIyg94dBQpziFOPvm7-aA',
		gFontList = [],
		success = function(data){
			if ( data.kind === "webfonts#webfontList") {
				$.each(data.items, function(index, value) {
					if ( $.inArray(value.family, fontFriend.existingGoogleFamilies) !== -1 ) {
						value.family = '- '+value.family;
					}
					else {
						fontFriend.googleFamilies[value.family] = value.variants;
					}
					gFontList.push(value.family);
				});
				makeGFontDrop(gFontList);
			}
			else {
				onError()
			}
		},
		onError = function() {
			$("#ff-google-webfonts > div").html("Error loading webfonts. :(");
			setTimeout(function(){
				$("#ff-google-webfonts").fadeOut();
			}, 3500);
		};
		$.ajax({
			url: api,
			type: "GET",
			dataType: "jsonp",
			success: success,
			error: onError
		});
	}

	function makeGFontDrop(list) {
		var listy = ['<option value="0">Choose:</option>'],
		list;
		$.each(list, function(i,v){
			listy.push("<option>"+v+"</option>");
		});
		list = $("<select>" + listy.join('') + "</select>");
		list.change(addGoogleFont);
		$("#ff-google-webfonts > div").html(list);
	}

	function addGoogleFont() {
		var self = $(this),
			val = self.val(),
			apiName = val.replace(/ /g, '+'),
			base = "http://fonts.googleapis.com/css?family=",
			suffix, url;

			if ( val === '0' || ! fontFriend.googleFamilies[val] ) {
				return;
			}

			suffix = ':' + fontFriend.googleFamilies[val].join(',');
			url = base + apiName + suffix;

			$('<link rel="stylesheet" type="text/css" href="'+url+'" >').appendTo("head");
			addCustomFontList([val], 'www.google.com');
			self.find(":selected").text('- '+val);
			$("#ff-font-family-custom").find("li:last").click();
			
			// so we don't add it again later
			delete fontFriend.googleFamilies[val];
	}

	function maybeAddEmbeddedFonts() {
		populateDeclaredFontFaceRules();
		maybeAddTypekit();
		maybeAddGoogle();
		maybeAddTypotheque();
	}

	function populateDeclaredFontFaceRules() {
		var css = document.styleSheets || [],
		fontFamilies = [];

		$.each( css, function(i,val){
			// try/catch because xdomain security prevents me from reading external stylesheets
			try {
				$.each( val.cssRules, function(index,value) {
					if ( value.type === CSSRule.FONT_FACE_RULE ) {
						var fontFamily = value.style.getPropertyValue('font-family');
						if ( fontFamily ) {
							// Firefox sometimes adds quotes to font name;
							fontFamily = fontFamily.replace(/^"|'/, "").replace(/"|'$/, "");
							if ( fontFamily !== "testfont" ) // Modernizr uses testfont
								fontFamilies.push(fontFamily);
						}
					}
				} );
			}
			catch(e) {
				// security prevents us from accessing other-domain stylesheets
			}
		} );

		if ( fontFamilies.length > 0 ) {
			addCustomFontList(arrayUnique(fontFamilies));
		}
	}

	function customFamilyDefinitionsCheck() {
		/**
		 * We can define a custom family list with the fontFriendFamilies JS array/object
		 * or with the data-ff-families attribute on the <body> element (comma separated).
		 *
		 */
		if ( typeof(fontFriendFamilies) !== undef ) {
			fontFriend.customFamilies = fontFriendFamilies;
			// not an array. It must be an object
			if ( ! $.isArray(fontFriend.customFamilies)) {
				var fffTemp = [];
				$.each( fontFriend.customFamilies, function(index, value) {
					fffTemp.push(index);
				});
				fontFriend.customFamilies = fffTemp;
				fontFriend.customFamilyMap = fontFriendFamilies;
			}
		}
		else if ( body.attr("data-ff-families") ) {
			fontFriend.customFamilies = body.attr("data-ff-families").split(',');
		}
	}

	function webfontSpecimenCheck() {
		// on Web Font Specimen?
		fontFriend.wfs = ( window.location.href == "http://webfontspecimen.com/demo/" );
		fontFriend.wfsName = ( fontFriend.wfs ) ? $("h1, .bodysize tr:first-child th:first-child") : false;
		// or, on Soma Web Font Specimen?
		if ( ! fontFriend.wfs && $("body").attr("id") == 'soma-web-font-specimen' ) {
			fontFriend.wfs = true;
			fontFriend.wfsName = $("h1, .bodysize tr:first-child th.base");
		}
		if ( fontFriend.wfs ) {
			fontFriend.wfsOriginalName = $("h1").text();
			fontFriend.wfsTitle = $("title").text();
		}
	}

	function addIncrementors() {
		$("#font-friend").find("select").each(function(index) {
			var html = $('<span class="ff-toggler"><span class="ff-up" title="Increase">&#9650;</span><span class="ff-down" title="Decrease">&#9660;</span></span>');
			html.insertBefore(this);
		});
		$(".ff-toggler span").click(incrementDropdown);
	}

	function incrementDropdown(event) {
		var self = $(this),
		increase = event.target.className == 'ff-up',
		dropdown = self.parent().next(),
		current = dropdown.find(":selected"),
		changeTo;

		changeTo = ( increase ) ? current.next() : current.prev();
		if ( changeTo.size() == 0 ) {
			changeTo = ( increase ) ? dropdown.find(":first") : dropdown.find(":last");
		}
		changeTo.attr("selected", "selected");
		dropdown.trigger("change");
	}

	function maybeAddTypotheque() {
		var key = findTypothequeLink(), data;
		if ( ! key ) return;

		$.getJSON("http://www.typotheque.com/ajax/webfont_api.php?key=" + key, function(data) {
			console.log(data);
		});
	}

	function findTypothequeLink() {
		var link = false;
		$('link[href*="wf.typotheque.com"]').each(function() {
			link = $(this).attr("href").split("/").pop();
			return false;
		});
		return link;
	}

	function maybeAddGoogle() {
		var gApi = findGoogleLink(),
			queryString,
			families = [];
		if ( ! gApi ) return;

		queryString = gApi.split("family=").pop();
		$.each(queryString.split("|"), function(i,v) {
			families.push( v.split(":")[0].replace("+"," ") );
		});
		if ( families.length > 0 ) {
			addCustomFontList(families, 'www.google.com');
			fontFriend.existingGoogleFamilies = families;
		}
	}

	function findGoogleLink() {
		var link = false;
		$('link[href*="fonts.googleapis.com"]').each(function() {
			link = $(this).attr("href");
			return false;
		});
		return link;
	}

	// Searches the html page for a script loaded from use.typekit.
	// Returns the kit ID as a string.
	function findKitId(){
		var kitId = null;
		$('script').each(function(index){
			var m = this.src.match(/use\.typekit\.com\/(.+)\.js/);
			if (m) {
				kitId = m[1];
				return false;
			}
		});
		return kitId;
	}

	function maybeAddTypekit() {
		var kitId = findKitId();
		if ( ! kitId ) {
			return false;
		}

		$.getJSON("https://typekit.com/api/v1/json/kits/" + kitId + "/published?callback=?", function(data){

		if( ! data.errors ) {
			var fontList = [];
			$.each(data.kit.families, function(i,family){
				fontFriend.customFamilyMap[family.name] = family.css_names.join(',');
				fontList.push(family.name);
			});
			addCustomFontList(fontList, "typekit.com");
		}
	});
	}

	function doBadge(badge) {
		var src = "//"+badge+"/favicon.ico",
			badges = $("#ff-badges"),
			exist = badges.find("[src='"+src+"']");
		if ( ! exist.length ) {
			$("<img />", {src:src}).appendTo(badges);
		}
	}

	function addCustomFontList(list, badge){
		var existingUl = $("#ff-font-family-custom"),
		ul = $('<ul id="ff-font-family-custom" data-ff="fontFamily"></ul>'),
		html = "",
		h6Title = 'Click to toggle between custom & stock font families',
		toggler = ': <span class="ff-custom ff-active">Custom</span><span class="ff-stock">Stock</span>';

		$.each(list, function(index, value){
			html += "<li>" + value + "</li>";
		});

		if ( typeof(badge) !== undef ) {
			doBadge(badge);
		}

		// exit early if we already have a list
		if ( existingUl.size() === 1 ) {
			existingUl.append(html);
			return buildFamilies();
		}

		html = ul.append(html);

		$("#ff-font-family").append(html);
		$("#ff-font-family > h6")
//			.addClass('ff-clickable').attr("title", h6Title)
//			.append(toggler)
			// click handlers for the custom/stock toggler
			.click(function() {
				var self = $(this),
				isCustom = self.hasClass("ff-custom") ? true : false,
				customList = $("#ff-font-family-sans"),
				stockList = $("#ff-font-family-sans, #ff-font-family-sans"),
				isCustom = ! customList.is(":visible"),
				togglers = self.children(),
				speed = 100,
				toHide, toShow;

				if ( isCustom ) {
					toHide = stockList;
					toShow = customList;
				}
				else {
					toHide = customList;
					toShow = stockList;
				}

				togglers.toggleClass('ff-active');

				toHide.fadeOut(speed, function() {
					toShow.fadeIn(speed);
				});
			});
		buildFamilies();
		$("#ff-font-family > h6").click();
	}

	// Do we have a custom family list?
	if ( fontFriend.customFamilies ) {
		addCustomFontList(fontFriend.customFamilies);
	}

	function changeFontName(name) {
		// not webfont specimen? leave.
		if ( ! fontFriend.wfs )
			return false;

		// empty call = reset
		if ( ! name ) {
			fontFriend.wfsName.text(fontFriend.wfsOriginalName);
			$("title").text(fontFriend.wfsTitle);
		}
		else {
			fontFriend.wfsName.text(name);
			$("title").text( fontFriend.wfsTitle.replace('Font name', name) );
		}
	}


	function maybeFontStack(fontFamily) {
		// is it in our map?
		if ( typeof(fontFriend.customFamilyMap[fontFamily]) !== undef ) {
			fontFamily = fontFriend.customFamilyMap[fontFamily];
		}
		// add monospace as a fallback in the stack
		return fontFamily + ",monospace";
	}

	// add inline font-family styles
	function buildFamilies() {
		$("#ff-font-family li, #ff-font-face li").each(function() {
			var self = $(this);
			self.css('fontFamily', maybeFontStack(self.text()));
		});
		$("#ff-font-style li, #ff-text-transform li, #ff-font-variant li").each(function() {
			var self = $(this),
				attr = self.parent().data("ff"),
				val = self.text();
			self.css(attr, val);
		});
	}

	function processData(file, name) {
		var reader = new FileReader();
			reader.name = name;

		reader.onloadend = function(event) {
			buildFontList(event);
		};

		reader.readAsDataURL(file);
	}

	function fontNameCleaner(name) {
		name = name
			.replace(/\..+$/,"") // Removes file extension from name
			.replace(/\W+/, "-").replace(/-|_/, " ") // Replace any non alpha numeric characters with a space.
			.replace(/^([a-z])|\s+([a-z])/g, function (word) {
				return word.toUpperCase();
			}); // uppercase it
		return unCamelCase(name);
	}
	
	function unCamelCase (str){
		return str
			// insert a space between lower & upper
			.replace(/([a-z])([A-Z])/g, '$1 $2')
			// space before last upper in a sequence followed by lower
			.replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
			// uppercase the first character
			.replace(/^./, function(str){ return str.toUpperCase(); })
	}

	// drop functions
	function handleDrop(event) {

		var dt = event.originalEvent.dataTransfer,
			files = dt.files,
			count = files.length,
			acceptedFileExtensions = /^.*\.(ttf|otf|woff)$/i;

		preventActions(event);

		for (var i = 0; i < count; i++) {
			var file = files[i],
				droppedFullFileName = file.name,
				droppedFileName;

			if(droppedFullFileName.match(acceptedFileExtensions)) {
				droppedFileName = fontNameCleaner(droppedFullFileName);
				processData(file, droppedFileName);

			} else {
				alert("Invalid file extension. Will only accept ttf, otf, or woff font files");
			}
		} // end for

	};

	function buildFontList(event) {
		var name = event.target.name,
			data = event.target.result;

		// Dodgy fork because Chrome 6 dev doesn't add media type to base64 string when a dropped file(s) type isn't known
		// http://code.google.com/p/chromium/issues/detail?id=48368
		var dataURL = data.split("base64");
		if(dataURL[0].indexOf("application/octet-stream") == -1) {
			dataURL[0] = "data:application/octet-stream;base64";
			data = dataURL[0] + dataURL[1];
		}

		// Get font file and prepend it to stylsheet using @font-face rule
		$("<style type='text/css'>@font-face{font-family: "+name+"; src:url("+data+");}</style> ").appendTo("head");
		addCustomFontList([name]);
		$("#ff-font-family-custom").find("li:last").click();
	};

	function preventActions(event) {
		event.stopPropagation();
		event.preventDefault();
	}

	// http://www.shamasis.net/2009/09/fast-algorithm-to-find-unique-items-in-javascript-array/
	function arrayUnique(array) {
		var l = array.length,
			o = {}, r = [], i;
		for (i=0; i<l; i+=1) o[array[i]] = array[i];
		for (i in o) r.push(o[i]);
		return r;
	}

	function addBehaviours() {
		// reuse later
		var ff = $("#font-friend");

		fontFriend.width = ff.outerWidth();
		fontFriend.height = ff.outerHeight();

		// open and close animations
		$("#ff-toggle").toggle(function() {
			ff.removeClass("open").animate({height:16, width:16},100);
		}, function() {
			ff.addClass("open").animate({height:fontFriend.height, width:fontFriend.width},100);
		});

		// the main attraction: change that font
		$("#ff-drop ul > li").live("click", function() {
			// don't do anything if we clicked on an input inside an li
			if ( $(this).children("input").length ) {
				return false;
			}

			// set variables
			var self = $(this),
			theAttribute = self.parent().attr("data-ff"),
			theValue = self.text(),
			theSelector = getTheSelector();

			// font-family-specific
			if ( theAttribute == 'fontFamily' ) {
				changeFontFamily(theValue, theSelector);
			}
			else {
				// apply that css
				$(theSelector).css(theAttribute, theValue);
			}
		});
		
		function getTheSelector() {
			var target = $("#ff-drop ol input:checked").next(),
				selector = target.text() || target.val();
			return selector;
		}
		
		function changeFontFamily(theValue, theSelector) {
			theSelector = theSelector || getTheSelector();
			changeFontName(theValue);
			theValue = maybeFontStack(theValue);
			$(theSelector).css('fontFamily', theValue);
		}
		
		$("#ff-drop select").change(function() {
			// set variables
			var theAttribute = $(this).attr("data-ff"),
			theValue = parseFloat( $(this).find("option:selected").val() ),
			theSelector = getTheSelector();
			
			// apply that css
			$(theSelector).css(theAttribute, theValue);
		});

		// unbind the click on the custom font family input (it's in a <li> element)
		$("#ff-drop li.family-custom").unbind();

		// just type and change that custom font
		$("#family-custom").keyup(function(event) {

			// variables
			var theValue = $("#family-custom").attr("value"),
				theSelector = getTheSelector();

			if ( event.keyCode == 13 ) { // did we hit enter?
				$("#family-custom-add").click();
			}
			else {
				// apply that custom font
				changeFontFamily(theValue, theSelector);
			}

			preventActions(event);
		});

		//move the box around
		$("#ff-controls div").click(function() {
			if ($(this).hasClass("left") ) {
				$("#font-friend").css({left:30, right:"auto"});
			}
			if ($(this).hasClass("right") ) {
					$("#font-friend").css({right:30, left:"auto"});
			}
			if ($(this).hasClass("up") ) {
				$("#font-friend").css({top:0, bottom:"auto"});
			}
			if ($(this).hasClass("down") ) {
				$("#font-friend").css({bottom:0, top:"auto"});
			}
		});

		//clearout the text input onclick
		$("#ff-blah, #family-custom").each(function(index) {
			$(this).attr('data-ff', $(this).attr("value") );
		}).click(function() {

			$(this).prev().attr("checked", "checked");

			if ($(this).attr("value") == $(this).attr("data-ff") ) {
				$(this).removeAttr("value");
			} else {
				$(this).select();
			}

		});

		// clear all inline styles -> might crash large pages!
		$("#ff-clear").click(function() {
			$("*").not("[data-ff=fontFamily]").removeAttr("style");
			buildFamilies();
			changeFontName(); //empty call resets
		});

		$("#family-custom-add").click(function() {
			var input = $(this).prev(),
			fontName = input.val();
			if (fontName !== "your font family" && fontName !== "") {
				addCustomFontList([fontName]);
				input.val("").select();
			}
		});

		// add event listeners for dropper
		$("#ff-font-drop")
			.bind("dragover", preventActions)
			.bind("dragenter dragleave", function(event){$(this).toggleClass("dropzone"); preventActions(event); })
			.bind("drop", handleDrop);
	}

}(this, this.document));