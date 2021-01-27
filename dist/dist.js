function Events(t){var i,n,e,a={},s=Array;(t=t||this).on=function(t,i,n){a[t]||(a[t]=[]),a[t].push({f:i,c:n})},t.off=function(t,e){for(n=a[t]||[],i=n.length=e?n.length:0;~--i<0;)e==n[i].f&&n.splice(i,1)},t.emit=function(){for(e=s.apply([],arguments),n=a[e.shift()]||[],e=e[0]instanceof s&&e[0]||e,i=n.length;~--i<0;)n[i].f.apply(n[i].c,e)}}function QuatRotation(t,i){this._target=t||window,this._isMouseDown=!1,this.diffX=0,this.diffY=0,this._currDiffX=0,this._currDiffY=0,this._easing=void 0===i?.1:i,this._offset=.004,this._zAxis=new THREE.Vector3(0,0,-1),this._isTouchDevice=!1,this._rotation=new THREE.Quaternion(0,0,0,1),this._invertRotation=new THREE.Quaternion(0,0,0,1),this._tempRotation=new THREE.Quaternion(0,0,0,1),this._matrix=new THREE.Matrix4,this._isLocked=!1,this._init()}var resizeEvents=[],NavBarFix,NavBarUnfix,pageLoadEvents=[],scrollEvents=[],scrollEventsRun=function(){},prePageLoadEvent=function(){},homeurl=jQuery("head base").attr("href");!function(){function t(){$("#content").addClass("notransition");for(var t=0;t<resizeEvents.length;t++)resizeEvents[t]();$("#content").removeClass("notransition")}function i(){$(".video-controls span").on("click",function(){$("video",$(this).parent().parent()).get(0).play()})}var n,$=jQuery;"undefined"!=typeof vc_js&&pageLoadEvents.push(vc_js);var a=function(e){clearTimeout(n),n=setTimeout(t,100)};$(window).resize(a),window.addEventListener("resize",a),$(".navbar-toggle").click(function(){"false"==$(this).attr("aria-expanded")||void 0==$(this).attr("aria-expanded")?$("body").addClass("menu-expanded"):$("body").removeClass("menu-expanded")});scrollEvents.push(function(){$(".wpb_wrapper > div > div").each(function(t){var i=$(this).outerHeight();i>400&&(i*=.35);for(var n=$(this).offset().top+i,a=$(window).scrollTop()+$(window).height(),s=["inview-animate","opacity","bg-opacity"],o=!1,t=0;t<s.length;t++)if($(this).hasClass(s[t])){o=!0;break}a>n&&!o&&($(this).addClass("inview-animate"),$(this).animate({opacity:"1"},500))})});scrollEventsRun=function(){for(var t=0;t<resizeEvents.length;t++)resizeEvents[t]()},i(),pageLoadEvents.push(i)}(),function(){var $=jQuery;NavBarFix=function(){$("body .header nav.navbar").addClass("scrolled")},NavBarUnfix=function(){$("body .header nav.navbar").removeClass("scrolled")},$(window).scroll(function(){$(window).scrollTop()>=500?NavBarFix():NavBarUnfix()})}(),function(){var $=jQuery,t=function(){$(".carousel").bind("slide.bs.carousel",function(e){setTimeout(function(){var t="#"+$(e.target).attr("id");$(t+" .carousel.bgs .bg.active").fadeOut().removeClass("active");var i=$(t+" .carousel-inner .item").index($(t+" .carousel-inner .item.next,"+t+" .carousel-inner .item.prev"));$($(t+" .carousel.bgs .bg")[i]).fadeIn().addClass("active")},20)}),setTimeout(function(){$(".carousel.bgs .bg:not(.active)").fadeOut(),$(".carousel.bgs .bg.active").fadeIn()},200),$(".carousel").swiperight(function(){$(this).carousel("prev")}),$(".carousel").swipeleft(function(){$(this).carousel("next")})};t(),pageLoadEvents.push(t)}(),jQuery,function(){var t,i,$=jQuery,n=90,a=[],s=function(){if($(".rotate-text")[0]){t=$(".all-words .word").length,$(".all-words").append($(".all-words > .word").eq(0).clone());for(var s=0;s<t;s++)a.push({value:-n*s-n,delay:400,duration:600,elasticity:0,easing:"easeInOutQuart"});i=anime({targets:".page-about .rotate-text .all-words",translateY:a,loop:!0})}},o=function(){for(var a=0;a<t;a++)i.animations[0].tweens[a].from.numbers[0]=-n*a,i.animations[0].tweens[a].to.numbers[0]=-n*a-n,i.animations[0].tweens[a].value=-n*a-n},r=function(){$(".rotate-text")[0]&&(n=$(".page-about .rotate-text .word").outerHeight(),$(".page-about .rotate-text").css("height",n),i&&(o(),i.restart()))};resizeEvents.push(r),pageLoadEvents.push(s),r(),s()}();var mejsL10n={language:"en-US",strings:{"mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/","mejs.fullscreen-off":"Turn off Fullscreen","mejs.fullscreen-on":"Go Fullscreen","mejs.download-video":"Download Video","mejs.fullscreen":"Fullscreen","mejs.time-jump-forward":["Jump forward 1 second","Jump forward %1 seconds"],"mejs.loop":"Toggle Loop","mejs.play":"Play","mejs.pause":"Pause","mejs.close":"Close","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.","mejs.time-skip-back":["Skip back 1 second","Skip back %1 seconds"],"mejs.captions-subtitles":"Captions/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.mute-toggle":"Mute Toggle","mejs.volume-help-text":"Use Up/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.ad-skip":"Skip ad","mejs.ad-skip-info":["Skip in 1 second","Skip in %1 seconds"],"mejs.source-chooser":"Source Chooser","mejs.stop":"Stop","mejs.speed-rate":"Speed Rate","mejs.live-broadcast":"Live Broadcast","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}},_wpmejsSettings={pluginPath:"/public/miewsite/wp-includes/js/mediaelement/",classPrefix:"mejs-",stretching:"responsive"},historyInfo={},globalResetNav;jQuery(document).ready(function(t){function i(){historyInfo[location.pathname]={color:$(".loadInfo .color").text(),img:$(".loadInfo .image").text()}}function n(t){var i=["current-menu-item","current_page_item","active"];for(var n in i)$(".nav ."+i[n]).removeClass(i[n]),$(t).addClass(i[n])}function a(t,e){if(t.preventDefault(),!y){y=!0;var i=$(e).attr("href");try{window.mixpanel&&mixpanel.track("navigate from <"+document.title+"> to <"+$(e).attr("href")+">")}catch(t){}if(h=setTimeout(function(){1==y&&(window.location=i)},4e4),0==$(".reveal-block").length&&$("body").append('<div class="reveal-block"></div>'),prePageLoadEvent&&0!=$(".reveal-block").length){f=!0;var n="";"language-link"==$(e).attr("id")?($(".reveal-block").attr("data-bgclass",$(".loadInfo .color").text()),$(".reveal-block .block").attr("class","block "+$(".loadInfo .color").text()),n=$(".loadInfo .image").text()):($(".reveal-block").attr("data-bgclass",$(e).attr("data-class")),$(".reveal-block .block").attr("class","block "+$(e).attr("data-class")),n=""!=$(e).attr("data-img")?$(e).attr("data-img"):$(".loadInfo .image").text());var a=void 0!=(n=s(n))?'<div class="bg bg-img" style="background-image: url('+n+');"></div>':"";0==$("#content-move").length&&$("body").append('<div id="content-move"></div>'),$("hr.progress").length,$("#content-move").html(a),prePageLoadEvent(),anime1start(),r(i,!0)}else f=!1,r(i,!0);m=!0}}function s(t){return void 0===t?t:("https:"==location.protocol&&0!==t.indexOf("https://")?t=t.replace("http:","https:"):"http:"==location.protocol&&0!==t.indexOf("http://")&&(t=t.replace("https:","http:")),t)}function o(e){e.preventDefault(),o=!0;var t=historyInfo[location.pathname];if(void 0!=t){$(".reveal-block").attr("data-bgclass",t.color),$(".reveal-block .block").attr("class","block "+t.color);var i=t.img,n=void 0!=i?'<div class="bg bg-img" style="background-image: url('+i+');"></div>':"";0==$("#content-move").length&&$("body").append('<div id="content-move"></div>'),$("hr.progress").length,$("#content-move").html(n)}prePageLoadEvent(),anime1start(),r(location.pathname,!1),m=!0}function r(t,i){d=!0,f?u()||(c(t,i),p=t):animationReady=!0}function c(t,i){b=void 0;var n="cd-"+t.replace(".html",""),a=$('<div class="cd-main-content '+n+'"></div>');v(!0),x=t,a.load(t,function(t){b=a,changeNewContent(0),y=!1,clearTimeout(h)})}function l(){$("#content a").off(),$("#content a").on("click",function(t){"#"!=$(this).attr("href")[0]&&"_blank"!=$(this).attr("target")&&(t.preventDefault(),$(this).attr("href")!=document.URL&&(t.stopPropagation(),a(t,this)))})}function u(){return $("html").hasClass("csstransitions")}window.mixpanel&&mixpanel.track("navigate from outside to <"+document.title+">");var h,$=jQuery,v=function(t){var i=$("button.navbar-toggle").first().hasClass("collapsed"),n="true"===$("ul.nav.navbar-nav").attr("aria-expanded");i?$("body").addClass("menu-toogled"):$("body").removeClass("menu-toogled"),!0===t&&($(".navbar-toggle").removeClass("collapse").addClass("collapsed"),$("body").removeClass("menu-toogled"),n&&($("ul.nav.navbar-nav").addClass("collapse").removeClass("in"),$("ul.nav.navbar-nav").attr("aria-expanded","false")))},d=!1,p="",m=!1,f=!1,g=function(){$("nav a").off(),$("nav a").click(function(t){var i=this;if(!($(i).attr("href")&&"#"==$(i).attr("href")||"_blank"==$(i).attr("target")))return t.preventDefault&&t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!($(i).attr("href")==document.URL||(a(t,i),n($(i).parent()),"true"==$(".navbar-toggle").attr("aria-expanded")&&$(".navbar-toggle").click(),1))})};g(),globalResetNav=g,$(window).on("popstate",o),$(window).on("pushstate",o);var w,o=!1,y=!1,b=void 0,x="";changeNewContent=function(t){if(void 0!=b&&0!=animationReady&&0!=b[0].children.length){var n=b,a=($("#header-menu-container",n),$("#content > div",n)),s=void 0!=jQuery(".bodyClass",n).html()?jQuery(".bodyClass",n).html().replace('class="',"").replace('"',""):jQuery("body").attr("class"),r=void 0!=jQuery(".navClass",n).html()?jQuery(".navClass",n).html().replace('class="',"").replace('"',""):jQuery("nav.navbar").attr("class"),c=void 0!=jQuery("div.header",n).attr("class")?jQuery("div.header",n).attr("class"):jQuery("div.header").attr("class"),l=void 0!=jQuery("#content",n).attr("class")?jQuery("#content",n).attr("class"):jQuery("#content").attr("class"),h=jQuery('[data-type="vc_shortcodes-custom-css"]',n),v=jQuery("title",n).text();jQuery("title").html(v),h.attr("id",h.attr("id")+"_"+jQuery.now()),jQuery("body").attr("class",s),jQuery("body").addClass("miewtheme"),jQuery("#menu-header.nav.in").removeClass("collapsing").removeClass("collapse").removeClass("in").addClass("collapsed"),jQuery("nav.navbar").attr("class",r),jQuery("div.header").attr("class",c),jQuery("#content").attr("class",l),$("#navheader").html($("#navheader",n).html()),$("#content").html(a),$("#content").append(h),jQuery(window).trigger("resize"),clearTimeout(p);var p=setTimeout(function(){$(window).scrollTop(0)},50);w=setTimeout(function(){g(),u()||(d=!1),y=!1;for(var t=0;t<pageLoadEvents.length;t++)pageLoadEvents[t]();var n=jQuery("#content > .cd-main-content").attr("class");n=""==(n=(n=n.substr(n.indexOf("color-"),12)).replace("color-","").trim())||"black"==n?"#000421":"#"+n,document.querySelector('meta[name="theme-color"]').setAttribute("content",n),document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content",n),document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content",n),i(),scrollEventsRun()},100),f&&contentChangedAnim(),o||x==window.location||window.history.pushState({path:x},"",x),o=!1,b=void 0,anime2start()}},l(),pageLoadEvents.push(l),function(){function t(){setTimeout(function(){jQuery("img[data-lazy-src]").each(function(){i(this)})},10)}var i=function(t){var i=jQuery(t),n=i.attr("data-lazy-src"),a=i.attr("data-lazy-srcset"),s=i.attr("data-lazy-sizes");n&&void 0!==n&&(i.unbind("scrollin").hide().removeAttr("data-lazy-src").removeAttr("data-lazy-srcset").attr("data-lazy-loaded","true"),t.src=n,i.attr("srcset",a),i.attr("sizes",s),i.fadeIn())};pageLoadEvents.push(t),t()}();var E=function(){if(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0){var t=document.createEvent("UIEvents");t.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(t)}else window.dispatchEvent(new Event("resize"))};!function(){var t=function(){E(),wp.mediaelement.initialize(),setTimeout(function(){E()},1500)};pageLoadEvents.push(t),t()}(),l(),function(){function t(){var t=$('<svg version="1.1" id="aurora-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 900 868" fill="none"> <g> <g> <path class="st0" d="M605.7,437.7c-22.3,82.1-69,154.1-154.1,154.1s-101.2-87.4-154.1-154.1c-51.6-65,76.4-188.8,154.1-154.1 C565.4,334.6,630.4,346.6,605.7,437.7z"/> </g> <g> <path class="st1" d="M635.1,438.3c-26.5,97.5-81.9,182.9-182.9,182.9S332.1,517.4,269.3,438.3c-61.2-77.2,90.7-224.1,182.9-182.9 C587.3,315.8,664.5,330.1,635.1,438.3z"/> </g> <g> <path class="st2" d="M664.6,438.9C634,551.8,569.8,650.6,452.9,650.6S313.8,530.5,241.1,438.9c-70.9-89.4,105-259.5,211.7-211.7 C609.2,297.1,698.6,313.6,664.6,438.9z"/> </g> <g> <path class="st3" d="M694.1,439.4C659.3,567.7,586.4,680,453.5,680s-158-136.5-240.6-240.6c-80.6-101.5,119.3-294.8,240.6-240.6 C631.2,278.3,732.7,297.1,694.1,439.4z"/> </g> <g> <path class="st4" d="M723.5,440c-39,143.6-120.6,269.4-269.4,269.4S277.2,556.6,184.7,440C94.5,326.3,318.3,109.8,454.1,170.6 C653.1,259.6,766.8,280.6,723.5,440z"/> </g> <g> <path class="st5" d="M753,440.6c-43.1,159-133.5,298.3-298.3,298.3S258.9,569.6,156.5,440.6C56.6,314.7,304.4,75.1,454.8,142.3 C675,240.8,800.9,264.1,753,440.6z"/> </g> <g> <path class="st6" d="M782.5,441.1C735.2,615.5,636,768.2,455.4,768.2S240.5,582.7,128.3,441.1C18.7,303.1,290.4,40.3,455.4,114 C697,222.1,835,247.6,782.5,441.1z"/> </g> <g> <path class="st7" d="M811.9,441.7c-51.5,189.7-159.4,356-356,356s-233.8-202-356-356c-119.2-150.2,176.5-436.2,356-356 C718.9,203.3,869.1,231.1,811.9,441.7z"/> </g> <g> <path class="st8" d="M841.4,442.3c-55.6,205.1-172.3,384.8-384.8,384.8S203.9,608.7,71.8,442.3C-57,279.9,262.6-29.3,456.6,57.5 C740.8,184.6,903.2,214.6,841.4,442.3z"/> </g> <g> <path class="st9" d="M870.9,442.8c-59.8,220.5-185.2,413.6-413.6,413.6S185.6,621.8,43.6,442.8C-94.9,268.3,248.7-64.1,457.2,29.2 C762.7,165.8,937.3,198.1,870.9,442.8z"/> </g> </g> </svg>');$(".back-aurora svg")[0]||($(".back-aurora").append(t.clone()),$("#aurora-svg g g path").addClass("st-hide")),anime({targets:"#aurora-svg path",duration:2e3,easing:"easeInOutSine",strokeWidth:{value:[1,3],easing:"easeInOutSine",duration:300,delay:function(t,i){return 250*i}},direction:"alternate",loop:!0,autoplay:!0})}t(),pageLoadEvents.push(t)}()}),jQuery(function(){function t(e){if($(".intro")[0]){var t=$(window).scrollTop()+$(window).height(),i=$(".intro").offset().top+.3*$(window).height(),n=$(".intro").offset().top+.7*$(window).height();if(i<=t){var a=parseInt(t/n*100);if($(".intro").css("width",(a>=100?100:a)+"%"),$("#aurora-svg")[0])for(var o=$("#aurora-svg g g"),r=parseInt((t-i)/(n-i)*10),c=0;c<o.length;c++)r<=c+1?o.eq(c).find("path").addClass("st-hide"):o.eq(c).find("path").removeClass("st-hide")}}return s(!0,e),!0}function i(){v||(v=!0,setTimeout(function(){p=1,d=0!=$(h+" .navigation-horizontal").length,sliderPositionMax=$(h+" > div").length;for(var i=["wheel","mousewheel","DOMMouseScroll"],s=["mousewheel","wheel"],o=0;o<i.length;o++)$(h).unbind(i[o],t);for(o=0;o<s.length;o++)window.removeEventListener(s[o],t);$(h).off({touchstart:n}),$(h).off({touchmove:a});for(o=0;o<i.length;o++)$(h).bind(i[o],t);for(o=0;o<s.length;o++)window.addEventListener(s[o],t);$(h).on({touchstart:n}),$(h).on({touchmove:a}),$(window).scroll(t),v=!1},300))}function n(e){startY=e.originalEvent.touches[0].clientY,m=!0}function a(e){void 0!=e.preventDefault&&(e.preventDefault=e.preventDefault),startY-e.originalEvent.touches[0].clientY>10?(startY=e.originalEvent.touches[0].clientY,e.originalEvent.wheelDelta=-1,t(e)):startY-e.originalEvent.touches[0].clientY<-10&&(startY=e.originalEvent.touches[0].clientY,e.originalEvent.wheelDelta=1,t(e))}function s(t,e){if(!l){theTarget=e,t=0!=t;var i=0;if(e.originalEvent)i=e.originalEvent.wheelDelta?e.originalEvent.wheelDelta:-1*e.originalEvent.detail;else{if(!e.wheelDeltaY)return;i=e.wheelDeltaY}var n=i<0,a=0!=$(e.target).parents(".navigation-horizontal").length;if(0!=$(e.target).parents(".navigation-vertical").length){var s=$(">div",$(e.target).parents(".navigation-vertical")).scrollTop(),r=$(">div>div",$(e.target).parents(".navigation-vertical")).height()-window.screenHeight;u=!(!n&&s<=0||n&&s>=r),o($(">div",$(e.target).parents(".navigation-vertical")),s)}if(a&&!u){var c=!1,h=0,v=Math.abs(Number($(e.target).parents(".navigation-horizontal").css("margin-left").replace("px",""))),d=($("> div > div",$(e.target).parents(".navigation-horizontal")).length-1)*window.innerWidth;(h=n?window.innerWidth+v:v-window.innerWidth)<0?(h=0,c=!0):h>d&&(h=d,c=!0),p=Math.abs(h/window.screenWidth),c||(l=!0,$(e.target).parents(".navigation-horizontal").animate({marginLeft:-1*h},{duration:t?300:5,complete:function(){o(),l=!1,NavBarUnfix()}},"linear"))}}}function o(e,t){var i=c?$("body").scrollTop():window.innerHeight-250;0!=$("html").scrollTop()&&(i=$("html").scrollTop(),$("html"));window.innerHeight;var n=$(".fadein:not(.visible), .wp-video:not(.visible)");$(window).scrollTop()+$(window).height()>$(document).height()-100&&($(n).removeClass("not-visible"),$(n).addClass("visible"));for(var a=0;a<n.length;a++){var s=n[a];$(s).offset().top,r(s)?($(s).removeClass("not-visible"),$(s).addClass("visible"),$(s).hasClass("wp-video")&&window.dispatchEvent(new Event("resize")),$(s).hasClass("carousel")&&$(s).carousel(0)):$(s).hasClass("visible")||$(s).addClass("not-visible")}}function r(t){return"function"==typeof jQuery&&t instanceof jQuery&&(t=t[0]),t.getBoundingClientRect().top-(window.innerHeight||document.documentElement.clientHeight)<=0}var c=navigator.userAgent.indexOf("Safari")>-1;c&&setInterval(o,100),document.querySelector("body").scrollTop=100,history.scrollRestoration="manual",$("body").scrollTop(0),window.scrollTo(0,0);var l=!1,u=!1;$=jQuery;var h="#content",v=!1,d=!1,p=1,m=!1;pageLoadEvents.push(i),pageLoadEvents.push(o),resizeEvents.push(o),i(),resizeEvents.push(function(){if(d){var t=$(h+" .navigation-horizontal"),i=p*window.screenWidth*-1;t.css("margin-left",i)}}),o()}),function(){var t,$=jQuery,i=[],n=0,a=function(){if(0!=$(".contact-page").length){var t=n%2;++n==i.length&&(n=0),$(".contact-page .content .city").html(""),bubbleText({element:$(".contact-page .content .city"),newText:i[n].cityText,letterSpeed:50});var a=n%2;$(".contact-page .bg-img"+t).fadeOut("slow"),$(".contact-page .bg-img"+a).css("background-image","url("+i[n].cityBg+")"),$(".contact-page .bg-img"+a).fadeIn("slow")}else o()},s=function(){if(clearInterval(t),0!=$(".contact-page").length){n=0;var s=$(".contact-cities .city");i=[];for(var o=0;o<s.length;o++){var r={};r.cityText=$(".city-name",$(".contact-cities .city")[o]).text(),r.cityBg=$(".city-bg",$(".contact-cities .city")[o]).text(),i.push(r)}t=setInterval(a,3e3)}};pageLoadEvents.push(s),s();var o=function(){clearInterval(t)},r=function(){$("span[validator]").on("input",function(e){var t=$(this).attr("validator"),i=$(this).text();"required"==t?i.length<5?($(this).addClass("error"),$(this).removeClass("valid")):($(this).removeClass("error"),$(this).addClass("valid")):"email"==t&&(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i)?($(this).removeClass("error"),$(this).addClass("valid")):($(this).addClass("error"),$(this).removeClass("valid")));var n=$(this).attr("data-target");$(n).val(i)})};r(),pageLoadEvents.push(r)}();var contentChangedAnim=function(){},animationReady=!1,anime1start=function(){},loadNewContent=function(){},anime2start=function(){},changeNewContent=function(){},anime3start=function(){};jQuery(document).ready(function($){var t=function(t){var i=t,a=i.find(".block"),s=i.find(".reveal-content"),o=window.innerWidth;i.css("display","block"),a.css("transform-origin",n("right").initial);var r={targets:a[0],elasticity:0,easing:"easeInOutQuint",duration:1e3,delay:200},c={targets:r.targets,elasticity:r.elasticity,easing:r.easing,duration:r.duration},l={targets:"#content-move",translateX:[o/2,0],opacity:[1,1],elasticity:0,easing:"easeInOutQuint",duration:750,delay:100};r.scaleX=[0,1],c.scaleX=[1,0],r.complete=function(){a.css("transform-origin",n("right").final),s.css("opacity",1),$("#content").css("transition","unset"),$("#content-move").show(),$("#content-move").css("display","block"),animationReady=!0,changeNewContent(1)},c.complete=function(){i.css("display","none")},l.complete=function(){animationReady=!0,$("#content").css("opacity",1),$("#content").css("transition",""),$("#content").fadeIn("slow",function(){}),setTimeout(function(){$("body").css("overflow-x","initial")},1e3),$("#content-move").fadeOut("slow"),$(window).resize()},anime1start=function(){anime(r)},anime2start=function(){$("#content").hide(),$("#content-move").show(),anime(c),anime3start()},anime3start=function(){anime(l)}},i=function(i){t(i),$("body").css("overflow-x","hidden"),$("#content-move").attr("style"," "),contentChangedAnim=function(){}},n=function(t){var i={initial:"0 0",final:"0 100%"};switch(t){case"bottom":i.initial="0 100%",i.final="0 0";break;case"left":i.final="100% 0";break;case"right":i.initial="100% 0",i.final="0 0"}return i};prePageLoadEvent=function(){animationReady=!1,0!=$(".reveal-block").length&&$(".reveal-block").each(function(e){var t,n=$(this);0===n.find(".reveal-content").length&&(t=n.html(),n.html("").append($('<span class="reveal-content">').html(t))),0===n.find(".block").length?n.append($('<span class="block">').attr("class","block "+n.data("bgclass"))):$(".block",n).attr("class","block "+n.attr("data-bgclass")),i(n)})}}),THREE.BubbleShader={uniforms:{time:{type:"f",value:0},noiseStrength:{type:"f",value:1},range:{type:"f",value:0},noiseOffset:{type:"f",value:0},exportNormal:{type:"f",value:1},numSeg:{type:"f",value:[]},rippleCenter:{type:"v3v",value:[]},waveHeight:{type:"fv1",value:[]},waveFront:{type:"fv1",value:[]},waveLength:{type:"fv1",value:[]},scale:{type:"f",value:[]}},vertexShader:["#define GLSLIFY 1","vec4 permute(vec4 x) {","return mod(((x*34.0)+1.0)*x, 289.0);","}","vec4 taylorInvSqrt(vec4 r) {","return 1.79284291400159 - 0.85373472095314 * r;","}","float snoise(vec3 v) {","const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;","const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);","vec3 i  = floor(v + dot(v, C.yyy) );","vec3 x0 = v - i + dot(i, C.xxx) ;","vec3 g = step(x0.yzx, x0.xyz);","vec3 l = 1.0 - g;","vec3 i1 = min( g.xyz, l.zxy );","vec3 i2 = max( g.xyz, l.zxy );","vec3 x1 = x0 - i1 + 1.0 * C.xxx;","vec3 x2 = x0 - i2 + 2.0 * C.xxx;","vec3 x3 = x0 - 1. + 3.0 * C.xxx;","i = mod(i, 289.0 );","vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));","float n_ = 1.0/7.0;","vec3  ns = n_ * D.wyz - D.xzx;","vec4 j = p - 49.0 * floor(p * ns.z *ns.z);","vec4 x_ = floor(j * ns.z);","vec4 y_ = floor(j - 7.0 * x_ );","vec4 x = x_ *ns.x + ns.yyyy;","vec4 y = y_ *ns.x + ns.yyyy;","vec4 h = 1.0 - abs(x) - abs(y);","vec4 b0 = vec4( x.xy, y.xy );","vec4 b1 = vec4( x.zw, y.zw );","vec4 s0 = floor(b0)*2.0 + 1.0;","vec4 s1 = floor(b1)*2.0 + 1.0;","vec4 sh = -step(h, vec4(0.0));","vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;","vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;","vec3 p0 = vec3(a0.xy,h.x);","vec3 p1 = vec3(a0.zw,h.y);","vec3 p2 = vec3(a1.xy,h.z);","vec3 p3 = vec3(a1.zw,h.w);","vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));","p0 *= norm.x;","p1 *= norm.y;","p2 *= norm.z;","p3 *= norm.w;","vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);","m = m * m;","return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );","}","float snoise(float x, float y, float z) {","return snoise(vec3(x, y, z));","}","uniform float time;","uniform float noiseStrength;","uniform float noiseOffset;","uniform float numSeg;","uniform float range;","uniform float scale;","uniform vec3 viewPosition;","varying vec3 vNormal;","varying vec3 eye;","const float PI = 3.141592653;","//FOR INTERACTION","uniform vec3 rippleCenter[4];","uniform float waveHeight[4];","uniform float waveFront[4];","uniform float waveLength[4];","mat4 rotationMatrix(vec3 axis, float angle) {","axis = normalize(axis);","float s = sin(angle);","float c = cos(angle);","float oc = 1.0 - c;","return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s,  0.0, oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);","}","const vec3 YAXIS = vec3(0.0, 1.0, 0.0);","vec3 getPosition(vec3 values) {","float rx = values.y / numSeg * PI - PI;","float ry = values.x / numSeg * PI * 2.0;","vec3 pos = vec3(0.0);","pos.y = cos(rx) * values.z;","float r = sin(rx) * values.z;","pos.x = cos(ry) * r;","pos.z = sin(ry) * r;","return pos;","}","vec3 getPosition(float i, float j, float r) {","return getPosition(vec3(i, j, r*scale));","}","vec3 getWaveHeight(vec3 pos, vec3 rCenter, float wH, float wF, float wL) {","float dist = distance(pos, rCenter);","float distWave = distance(dist, wF);","float rOffset = 0.0;","if(distWave < wL) {","float t = (dist - wF + wL)/wL; // 0 ~ waveLength * 2.0;","rOffset = -cos(t*PI) + 1.0;","}","// rOffset = smoothstep(0.0, 1.0, rOffset);","vec3 tmpPos = normalize(pos) * noiseStrength;","return tmpPos * rOffset * wH;","}","vec3 getFinalPos(vec3 pos) {","vec3 touchRipple = vec3(0.0);","for(int i=0; i<4; i++) {","touchRipple += getWaveHeight(pos, rippleCenter[i], waveHeight[i], waveFront[i], waveLength[i]);","}","vec3 noisePos = pos * noiseOffset;","vec3 tmpPos = normalize(pos) * noiseStrength;","vec3 posOffset = tmpPos * snoise(noisePos.x + time, noisePos.y + time, noisePos.z + time);","return pos + posOffset*range + touchRipple;","}","void main() {","vec3 pos = getPosition(position.x, position.y, position.z);","vec3 p0  = getPosition(position.x+1.0, position.y, position.z);","vec3 p1  = getPosition(position.x, position.y+1.0, position.z);","// vec3 posRippleCenter = rippleCenter;","vec3 finalPos  = getFinalPos(pos);","vec3 finalPos0 = getFinalPos(p0);","vec3 finalPos1 = getFinalPos(p1);","vec3 v0 = finalPos0 - finalPos;","vec3 v1 = finalPos1 - finalPos;","if(length(v0) == 0.0) {","float gap = .01;","if(position.y < 1.0) {","pos = getPosition(position.x, position.y+gap, position.z);","p0  = getPosition(position.x+1.0, position.y+gap, position.z);","} else {","pos = getPosition(position.x, position.y-gap, position.z);","p0  = getPosition(position.x+1.0, position.y-gap, position.z);","}","vec3 newP = getFinalPos(pos);","vec3 newP0 = getFinalPos(p0);","v0 = newP0 - newP;","}","vec3 vCross = cross(v1, v0);","//mat3 nMtx = normalMatrix;","vec4 mvPosition = modelViewMatrix * vec4( finalPos, 1.0);","gl_Position = projectionMatrix * mvPosition;","vNormal = normalize(vCross); //normalize( normalMatrix * vCross );","eye = normalize( mvPosition.rgb );","// gl_Position = projectionMatrix * modelViewMatrix * vec4( finalPos, 1.0 );","}"].join("\n"),fragmentShader:["#define GLSLIFY 1","varying vec3 vNormal;","varying vec3 eye;","uniform sampler2D tLight;","void main() {","vec3 color = vNormal;// + vec3(.5);","//vec3 r = reflect( eye, vNormal );","//float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );","//vec2 vN = r.xy / m + .5;","//vec3 baseLight = texture2D( tLight, vN ).rgb;","//gl_FragColor = vec4( baseLight, 1.0 );","color = vNormal * .5 + vec3(.4);","gl_FragColor = vec4( color, 0.2 );","}"].join("\n")};var p=QuatRotation.prototype,getMouse=function(e){return e.touches?{x:e.touches[0].pageX,y:e.touches[0].pageY}:{x:e.clientX,y:e.clientY}};p._init=function(){this._target.addEventListener("mousedown",this._onMouseDown.bind(this)),this._target.addEventListener("touchstart",this._onMouseDown.bind(this)),this._target.addEventListener("mouseup",this._onMouseUp.bind(this)),this._target.addEventListener("touchend",this._onMouseUp.bind(this)),this._target.addEventListener("mousemove",this._onMouseMove.bind(this)),this._target.addEventListener("touchmove",this._onMouseMove.bind(this))},p._onMouseDown=function(e){this._isLocked||(e.touches&&(this._isTouchDevice=!0),this._isMouseDown=!0,this._mouse=getMouse(e),this._preMouse=getMouse(e),this._rotation.copy(this._tempRotation),this._currDiffX=this.diffX=0,this._currDiffY=this.diffY=0)},p._onMouseMove=function(e){this._isLocked||this._isMouseDown&&(this._mouse=getMouse(e))},p._onMouseUp=function(){this._isLocked||(this._isMouseDown=!1)},p._updateRotation=function(t){if(this._isMouseDown&&!this._isLocked){var i=1.5;this._isTouchDevice&&(i*=2),this.diffX=(this._mouse.x-this._preMouse.x)*i,this.diffY=(this._mouse.y-this._preMouse.y)*i,this._isInvert&&(this.diffX=-this.diffX),this._isInvert&&(this.diffY=-this.diffY)}this._currDiffX+=(this.diffX-this._currDiffX)*this._easing,this._currDiffY+=(this.diffY-this._currDiffY)*this._easing;var n=new THREE.Vector3(this._currDiffX,this._currDiffY,0);if(0!==n.length()){var a=new THREE.Vector3;if(a.crossVectors(n,this._zAxis),a.normalize(),0!==a.length()){var s=n.length()*this._offset,o=new THREE.Quaternion(Math.sin(-s)*a.x,Math.sin(s)*a.y,Math.sin(s)*a.z,Math.cos(s));o.multiply(t),t.copy(o)}}},p.update=function(){this._matrix.identity(),this._tempRotation.copy(this._rotation),this._updateRotation(this._tempRotation),this._matrix.makeRotationFromQuaternion(this._tempRotation)},p.lock=function(t){this._isLocked=t},p.getQuat=function(){return this._tempRotation},p.getInvertQuat=function(){return this._invertRotation.copy(this._rotation),this._invertRotation.inverse(),this._invertRotation},p.getMatrix=function(){return this._matrix};var bubble,pause,raycaster,mouse,scene,camera,renderer,events=new Events,ppo={},composer,sceneObjects=[],supportWebGL=function(){try{var t=document.createElement("canvas");return!!window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch(t){return!1}};!function(){function t(){if(document.querySelector(".bg03")){if(pause=!1,!supportWebGL())return document.querySelector(".bg03").classList.add("no-webgl"),void(pause=!0);if((renderer=new THREE.WebGLRenderer({antialias:!1})).setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,window.innerHeight),document.querySelector(".bg03").appendChild(renderer.domElement),scene=new THREE.Scene,scene.background=new THREE.Color(1052),camera=new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,1,1e4),camera.position.z=300,bubble){for(var t=0;t<sceneObjects.length;t++)scene.add(sceneObjects[t].mesh);n()}else bubble=new o(scene,new THREE.Vector3(0,0,-50),100,5,.01),sceneObjects.push(bubble),window.addEventListener("mousemove",bubble.onMouseMove,!1),window.addEventListener("touchmove",bubble.onMouseMove,!1),window.addEventListener("mouseup",bubble.onMouseUp),window.addEventListener("touchstart",bubble.onMouseMove,!1),i(),raycaster=new THREE.Raycaster,mouse=new THREE.Vector2,window.addEventListener("resize",n,!1);a()}else pause=!0}function i(){ppo.renderPass=new THREE.RenderPass(scene,camera),ppo.effectCopy=new THREE.ShaderPass(THREE.CopyShader),ppo.barrelBlur=new THREE.ShaderPass(THREE.BarrelBlurShader),ppo.glow=new THREE.ShaderPass(THREE.GlowShader),(composer=new THREE.EffectComposer(renderer)).addPass(ppo.renderPass);for(var t=0;t<sceneObjects.length;t++)if(sceneObjects[t].ppoAttributes){var i=sceneObjects[t].ppoAttributes;void 0!==i.barrelBlurAmount&&composer.addPass(ppo.barrelBlur),void 0!==i.glowAmount&&composer.addPass(ppo.glow)}composer.addPass(ppo.effectCopy),ppo.effectCopy.renderToScreen=!0,n()}function n(){screenWidth=window.innerWidth,screenHeight=window.innerHeight,camera.aspect=screenWidth/screenHeight,camera.updateProjectionMatrix(),renderer.setSize(screenWidth,screenHeight),events.emit("resize")}function a(){pause||(requestAnimationFrame(a),s(),events.emit("update"),TWEEN.update(),renderer.clear(),renderer.render(scene,camera),composer.render())}function s(){l+=.1}function o(t,i,n,a,s){var o,h=this,v=THREE.BubbleShader;this.size=n,this.position=i,this.range=a,this.noise=s,this.easing=c(.005,.01),this.rotation=new QuatRotation(window,this.easing),this.waves=[],this.tweenPostprocessing,this.ppoAttributes={glowAmount:0},this.touchMesh,this.init=function(){o=new THREE.Group,t.add(o),this.geometry=new THREE.BufferGeometry,this.scale=1,this.time=255*Math.random(),this.speed=.5*c(.001,.01),this.targetSpeed=this.speed;var i=0,a=[],i=0;for(i=0;i<60;i++)for(var s=0;s<60;s++)a.push([i+1,s+1,n]),a.push([i+1,s,n]),a.push([i,s,n]),a.push([i,s+1,n]),a.push([i+1,s+1,n]),a.push([i,s,n]);var r=new Float32Array(3*a.length);for(i=0;i<a.length;i++)r[3*i+0]=a[i][0],r[3*i+1]=a[i][1],r[3*i+2]=a[i][2];this.geometry.addAttribute("position",new THREE.BufferAttribute(r,3));for(var l=[],u=[],i=0;i<10;i++)u.push(new THREE.Vector3),l.push(0);v.uniforms.time.value=this.time,v.uniforms.range.value=this.range,v.uniforms.noiseOffset.value=this.noise,v.uniforms.numSeg.value=60,v.uniforms.rippleCenter.value=u,v.uniforms.waveHeight.value=l,v.uniforms.waveFront.value=l,v.uniforms.waveLength.value=l,v.uniforms.scale.value=this.scale,this.material=new THREE.ShaderMaterial({fragmentShader:v.fragmentShader,vertexShader:v.vertexShader,uniforms:v.uniforms}),this.mesh=new THREE.Mesh(this.geometry,this.material),this.mesh.position.copy(this.position),this.uniforms=v.uniforms;var h=new THREE.SphereGeometry(this.size,32,32),d=new THREE.MeshBasicMaterial({color:0});this.touchMesh=new THREE.Mesh(h,d),this.touchMesh.position.copy(this.position),this.touchMesh.bubble=this,o.add(this.mesh),events.on("update",this.update),events.on("resize",this.resize)},this.update=function(){h.updateUniforms(),h.updatePostProcessingAttributes()},this.resize=function(){},this.updateUniforms=function(){this.mesh.position.copy(this.position),this.mesh.rotation.setFromQuaternion(this.rotation.getQuat()),this.touchMesh.position.copy(this.position),this.touchMesh.rotation.setFromQuaternion(this.rotation.getQuat());for(var t=[],i=[],n=[],a=[],s=0;s<4;s++)if(this.waves[s]){var o=this.waves[s];t.push(o.center),i.push(o.waveHeight),n.push(o.waveFront),a.push(o.waveLength)}else t.push(new THREE.Vector3(0,0,0)),i.push(0),n.push(0),a.push(0);this.uniforms.rippleCenter.value=t,this.uniforms.waveHeight.value=i,this.uniforms.waveFront.value=n,this.uniforms.waveLength.value=a,this.uniforms.time.value=this.getTime(),this.uniforms.noiseOffset.value=.8*this.noise,this.uniforms.range.value=3*this.range,this.uniforms.scale.value=this.scale,this.material.needUpdate=!0},this.updatePostProcessingAttributes=function(){ppo.glow.uniforms.amount.value=this.ppoAttributes.glowAmount},this.getTime=function(){return this.speed+=(this.targetSpeed-this.speed)*this.easing*2,this.time+=this.speed,1.5*this.time},this.touch=function(t){var i=t.face,n=t.object.geometry.vertices,a=new THREE.Vector3;a.x=(n[i.a].x+n[i.b].x+n[i.c].x)/3,a.y=(n[i.a].y+n[i.b].y+n[i.c].y)/3,a.z=(n[i.a].z+n[i.b].z+n[i.c].z)/3;var s;this.waves.length<4?s=new r(a,Math.min(.025*this.size,30),1.5*this.size,.35*this.size,this.size):(s=this.waves.shift()).reset(a,Math.min(.025*this.size,30),1.5*this.size,.35*this.size,this.size),this.waves.push(s)},this.onMouseMove=function(t){if(mouse&&raycaster){var i,n=9999;mouse.x=(t.touches?t.touches[0].pageX:t.pageX)/window.innerWidth*2-1,mouse.y=-(t.touches?t.touches[0].pageY:t.pageY)/window.innerHeight*2+1,raycaster.setFromCamera(mouse,camera);var a=raycaster.intersectObject(h.touchMesh);if(a.length>0){var s=a[0];s.distance<n&&(n=s.distance,i=s)}if(!i||i!=this.touchedObject){this.touchedObject=i;var o=l-u;this.touchedObject?o>.4&&(this.touchedObject.object.bubble.touch(this.touchedObject),u=l,this.tweenPostprocessing=new TWEEN.Tween(h.ppoAttributes).to({glowAmount:.3},4e3).easing(TWEEN.Easing.Exponential.Out).start()):(this.tweenPostprocessing&&TWEEN.remove(this.tweenPostprocessing),this.tweenPostprocessing=new TWEEN.Tween(h.ppoAttributes).to({glowAmount:0},2e3).easing(TWEEN.Easing.Exponential.Out).start())}}},this.onMouseUp=function(t){this.touchedObject&&this.touchedObject.object.bubble.touch(this.touchedObject)},this.init()}function r(t,i,n,a,s){this.init=function(){this.reset(t,i,n,a,s),this.launch()},this.reset=function(t,i,n,a,s){this.center=t,this.waveHeight=i,this.waveFront=0,this.targetWaveFront=n,this.waveLength=.2*s,this.targetWaveLength=a,this.launch()},this.launch=function(){this.tweenWave&&TWEEN.remove(this.tweenWave);this.tweenWave=new TWEEN.Tween(this).to({waveHeight:0,waveFront:this.targetWaveFront,waveLength:this.targetWaveLength},4e3).easing(TWEEN.Easing.Exponential.Out).start()},this.init()}var c=function(t,i){return t+Math.random()*(i-t)},l=0,u=0;t(),pageLoadEvents&&pageLoadEvents.push(t)}();