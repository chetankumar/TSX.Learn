(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b9d7f99"],{1276:function(t,a,s){"use strict";var i=s("d784"),e=s("44e7"),n=s("825a"),r=s("1d80"),l=s("4840"),o=s("8aa5"),c=s("50c4"),p=s("14c3"),d=s("9263"),m=s("d039"),u=[].push,v=Math.min,C=4294967295,g=!m((function(){return!RegExp(C,"y")}));i("split",2,(function(t,a,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(r(this)),n=void 0===s?C:s>>>0;if(0===n)return[];if(void 0===t)return[i];if(!e(t))return a.call(i,t,n);var l,o,c,p=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,m+"g");while(l=d.call(g,i)){if(o=g.lastIndex,o>v&&(p.push(i.slice(v,l.index)),l.length>1&&l.index<i.length&&u.apply(p,l.slice(1)),c=l[0].length,v=o,p.length>=n))break;g.lastIndex===l.index&&g.lastIndex++}return v===i.length?!c&&g.test("")||p.push(""):p.push(i.slice(v)),p.length>n?p.slice(0,n):p}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:a.call(this,t,s)}:a,[function(a,s){var e=r(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,e,s):i.call(String(e),a,s)},function(t,e){var r=s(i,t,this,e,i!==a);if(r.done)return r.value;var d=n(t),m=String(this),u=l(d,RegExp),h=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),f=new u(g?d:"^(?:"+d.source+")",b),_=void 0===e?C:e>>>0;if(0===_)return[];if(0===m.length)return null===p(f,m)?[m]:[];var w=0,k=0,x=[];while(k<m.length){f.lastIndex=g?k:0;var S,M=p(f,g?m:m.slice(k));if(null===M||(S=v(c(f.lastIndex+(g?0:k)),m.length))===w)k=o(m,k,h);else{if(x.push(m.slice(w,k)),x.length===_)return x;for(var P=1;P<=M.length-1;P++)if(x.push(M[P]),x.length===_)return x;k=w=S}}return x.push(m.slice(w)),x}]}),!g)},a993:function(t,a,s){t.exports=s.p+"img/logo-text.57f54f2a.png"},f579:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app-admin-wrap layout-sidebar-compact clearfix",class:[t.getCompactSideBarToggleProperties.isSideNavOpen?"sidenav-open":"",t.getcompactLeftSideBarBgColor]},[s("compactSidebar"),s("div",{staticClass:"main-content-wrap d-flex flex-column"},[s("compactTopbar"),s("transition",{attrs:{name:"page",mode:"out-in"}},[s("router-view")],1),s("appFooter")],1)],1)},e=[],n=s("5530"),r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"main-header"},[t._m(0),i("div",{staticClass:"menu-toggle",on:{click:t.compactSideBarToggle}},[i("div"),i("div"),i("div")]),i("div",{staticClass:"d-flex align-items-center"},[i("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeMegaMenu,expression:"closeMegaMenu"}],staticClass:"dropdown mega-menu d-none d-md-block",class:{show:t.isMegaMenuOpen}},[i("a",{staticClass:"btn text-muted dropdown-toggle mr-3",attrs:{href:"#",id:"dropdownMegaMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:t.toggleMegaMenu}},[t._v("Mega Menu")]),i("div",{staticClass:"dropdown-menu text-left",class:{show:t.isMegaMenuOpen},attrs:{"aria-labelledby":"dropdownMenuButton"}},[t._m(1)])]),i("div",{staticClass:"search-bar",on:{click:t.toggleSearch}},[i("input",{attrs:{type:"text",placeholder:"Search"}}),i("i",{staticClass:"search-icon text-muted i-Magnifi-Glass1"})])]),i("div",{staticStyle:{margin:"auto"}}),i("div",{staticClass:"header-part-right"},[i("i",{staticClass:"i-Full-Screen header-icon d-none d-sm-inline-block",on:{click:t.handleFullScreen}}),i("div",{staticClass:"dropdown"},[i("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown",text:"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[i("template",{slot:"button-content"},[i("i",{staticClass:"i-Safe-Box text-muted header-icon",attrs:{role:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}})]),i("div",{staticClass:"menu-icon-grid"},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"i-Shop-4"}),t._v(" Home ")]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"i-Library"}),t._v(" UI Kits ")]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"i-Drop"}),t._v(" Apps ")]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"i-File-Clipboard-File--Text"}),t._v(" Forms ")]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"i-Checked-User"}),t._v(" Sessions ")]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"i-Ambulance"}),t._v(" Support ")])])],2)],1),i("div",{staticClass:"dropdown"},[i("b-dropdown",{staticClass:"m-md-2 badge-top-container",attrs:{id:"dropdown-1",text:"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[i("template",{slot:"button-content"},[i("span",{staticClass:"badge badge-primary"},[t._v("3")]),i("i",{staticClass:"i-Bell text-muted header-icon"})]),i("vue-perfect-scrollbar",{ref:"myData",staticClass:"dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i("div",{staticClass:"dropdown-item d-flex"},[i("div",{staticClass:"notification-icon"},[i("i",{staticClass:"i-Speach-Bubble-6 text-primary mr-1"})]),i("div",{staticClass:"notification-details flex-grow-1"},[i("p",{staticClass:"m-0 d-flex align-items-center"},[i("span",[t._v("New message")]),i("span",{staticClass:"flex-grow-1"}),i("span",{staticClass:"text-small text-muted ml-auto"},[t._v("10 sec ago")])]),i("p",{staticClass:"text-small text-muted m-0"},[t._v(" James: Hey! are you busy? ")])])]),i("div",{staticClass:"dropdown-item d-flex"},[i("div",{staticClass:"notification-icon"},[i("i",{staticClass:"i-Receipt-3 text-success mr-1"})]),i("div",{staticClass:"notification-details flex-grow-1"},[i("p",{staticClass:"m-0 d-flex align-items-center"},[i("span",[t._v("New order received")]),i("span",{staticClass:"flex-grow-1"}),i("span",{staticClass:"text-small text-muted ml-auto"},[t._v("2 hours ago")])]),i("p",{staticClass:"text-small text-muted m-0"},[t._v("1 Headphone, 3 iPhone x")])])]),i("div",{staticClass:"dropdown-item d-flex"},[i("div",{staticClass:"notification-icon"},[i("i",{staticClass:"i-Empty-Box text-danger mr-1"})]),i("div",{staticClass:"notification-details flex-grow-1"},[i("p",{staticClass:"m-0 d-flex align-items-center"},[i("span",[t._v("Product out of stock")]),i("span",{staticClass:"flex-grow-1"}),i("span",{staticClass:"text-small text-muted ml-auto"},[t._v("10 hours ago")])]),i("p",{staticClass:"text-small text-muted m-0"},[t._v(" Headphone E67, R98, XL90, Q77 ")])])]),i("div",{staticClass:"dropdown-item d-flex"},[i("div",{staticClass:"notification-icon"},[i("i",{staticClass:"i-Data-Power text-success mr-1"})]),i("div",{staticClass:"notification-details flex-grow-1"},[i("p",{staticClass:"m-0 d-flex align-items-center"},[i("span",[t._v("Server Up!")]),i("span",{staticClass:"flex-grow-1"}),i("span",{staticClass:"text-small text-muted ml-auto"},[t._v("14 hours ago")])]),i("p",{staticClass:"text-small text-muted m-0"},[t._v(" Server rebooted successfully ")])])])])],2)],1),i("div",{staticClass:"dropdown"},[i("b-dropdown",{staticClass:"m-md-2 user col align-self-end",attrs:{id:"dropdown-1",text:"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[i("template",{slot:"button-content"},[i("img",{attrs:{src:s("6f92"),id:"userDropdown",alt:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}})]),i("div",{staticClass:"dropdown-menu-right",attrs:{"aria-labelledby":"userDropdown"}},[i("div",{staticClass:"dropdown-header"},[i("i",{staticClass:"i-Lock-User mr-1"}),t._v(" Timothy Carlson ")]),i("a",{staticClass:"dropdown-item"},[t._v("Account settings")]),i("a",{staticClass:"dropdown-item"},[t._v("Billing history")]),i("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.logoutUser(a)}}},[t._v("Sign out")])])],2)],1)]),i("search-component",{attrs:{isSearchOpen:t.isSearchOpen},on:{"update:isSearchOpen":function(a){t.isSearchOpen=a},"update:is-search-open":function(a){t.isSearchOpen=a},closeSearch:t.toggleSearch}})],1)},l=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:s("9d64"),alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-md-4 p-4 text-left bg-img"},[s("h2",{staticClass:"title"},[t._v(" Mega Menu "),s("br"),t._v("Sidebar ")]),s("p",[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur. ")]),s("p",{staticClass:" mb-30"},[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat. ")]),s("button",{staticClass:"btn btn-lg btn-rounded btn-outline-warning"},[t._v(" Learn More ")])]),s("div",{staticClass:"col-md-4 p-4 text-left"},[s("p",{staticClass:"text-primary text--cap border-bottom-primary d-inline-block"},[t._v(" Features ")]),s("div",{staticClass:"menu-icon-grid w-auto p-0"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"i-Shop-4"}),t._v(" Home ")]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"i-Library"}),t._v(" UI Kits ")]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"i-Drop"}),t._v(" Apps ")]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"i-File-Clipboard-File--Text"}),t._v(" Forms ")]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"i-Checked-User"}),t._v(" Sessions ")]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"i-Ambulance"}),t._v(" Support ")])])]),s("div",{staticClass:"col-md-4 p-4 text-left"},[s("p",{staticClass:"text-primary text--cap border-bottom-primary d-inline-block"},[t._v(" Components ")]),s("ul",{staticClass:"links"},[s("li",[s("a",{attrs:{href:"accordion.html"}},[t._v("Accordion")])]),s("li",[s("a",{attrs:{href:"alerts.html"}},[t._v("Alerts")])]),s("li",[s("a",{attrs:{href:"buttons.html"}},[t._v("Buttons")])]),s("li",[s("a",{attrs:{href:"badges.html"}},[t._v("Badges")])]),s("li",[s("a",{attrs:{href:"carousel.html"}},[t._v("Carousels")])]),s("li",[s("a",{attrs:{href:"lists.html"}},[t._v("Lists")])]),s("li",[s("a",{attrs:{href:"popover.html"}},[t._v("Popover")])]),s("li",[s("a",{attrs:{href:"tables.html"}},[t._v("Tables")])]),s("li",[s("a",{attrs:{href:"datatables.html"}},[t._v("Datatables")])]),s("li",[s("a",{attrs:{href:"modals.html"}},[t._v("Modals")])]),s("li",[s("a",{attrs:{href:"nouislider.html"}},[t._v("Sliders")])]),s("li",[s("a",{attrs:{href:"tabs.html"}},[t._v("Tabs")])])])])])}],o=s("ed08"),c=s("9ea9"),p=s("9029"),d=s("2f62"),m=s("c7db"),u={mixins:[m["mixin"]],components:{searchComponent:c["a"]},data:function(){return{isDisplay:!0,isStyle:!0,isSearchOpen:!1,isMouseOnMegaMenu:!0,isMegaMenuOpen:!1}},mounted:function(){},computed:Object(n["a"])({},Object(d["c"])(["getCompactSideBarToggleProperties"])),methods:Object(n["a"])(Object(n["a"])({},Object(d["b"])(["changeCompactSidebarProperties","changeThemeMode","signOut"])),{},{logoutUser:function(){this.signOut(),this.$router.push("/app/sessions/signIn")},handleFullScreen:function(){o["a"].toggleFullScreen()},closeMegaMenu:function(){this.isMegaMenuOpen=!1},toggleMegaMenu:function(){this.isMegaMenuOpen=!this.isMegaMenuOpen},toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen},compactSideBarToggle:function(t){this.getCompactSideBarToggleProperties.isSideNavOpen&&p["isMobile"]||this.getCompactSideBarToggleProperties.isSideNavOpen?this.changeCompactSidebarProperties():this.getCompactSideBarToggleProperties.isSideNavOpen||this.getCompactSideBarToggleProperties.isActiveSecondarySideNav?this.getCompactSideBarToggleProperties.isSideNavOpen||(this.changeCompactSidebarProperties(),console.log("4")):this.changeCompactSidebarProperties()}})},v=u,C=s("2877"),g=Object(C["a"])(v,r,l,!1,null,null,null),h=g.exports,b=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"side-content-wrap",on:{mouseenter:function(a){t.isMenuOver=!0},mouseleave:function(a){t.isMenuOver=!1},touchstart:function(a){t.isMenuOver=!0}}},[i("vue-perfect-scrollbar",{ref:"myData",staticClass:"sidebar-left rtl-ps-none ps",class:{open:t.getCompactSideBarToggleProperties.isSideNavOpen},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i("ul",{staticClass:"navigation-left"},[i("div",{staticClass:"logo"},[i("img",{attrs:{alt:"",src:s("9d64")}})]),i("li",{staticClass:"nav-item",class:{active:"dashboards"==t.selectedParentMenu},attrs:{"data-item":"dashboards","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Bar-Chart"}),i("span",{staticClass:"nav-text"},[t._v("Dashboards")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"ui-kits"==t.selectedParentMenu},attrs:{"data-item":"ui-kits","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Library"}),i("span",{staticClass:"nav-text"},[t._v("UI kits")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"extrakits"==t.selectedParentMenu},attrs:{"data-item":"extrakits","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Suitcase"}),i("span",{staticClass:"nav-text"},[t._v("Extra kits")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"apps"==t.selectedParentMenu},attrs:{"data-item":"apps","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Computer-Secure"}),i("span",{staticClass:"nav-text"},[t._v("Apps")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"charts"==t.selectedParentMenu},attrs:{"data-item":"charts","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Pie-Chart-2"}),i("span",{staticClass:"nav-text"},[t._v("Charts")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"widgets"==t.selectedParentMenu},attrs:{"data-item":"widgets","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Windows-2"}),i("span",{staticClass:"nav-text"},[t._v("Widgets")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"forms"==t.selectedParentMenu},attrs:{"data-item":"forms","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-File-Clipboard-File--Text"}),i("span",{staticClass:"nav-text"},[t._v("Forms")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"datatables"==t.selectedParentMenu},attrs:{"data-item":"datatables","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-File-Horizontal-Text"}),i("span",{staticClass:"nav-text"},[t._v("Datatables")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"sessions"==t.selectedParentMenu},attrs:{"data-item":"sessions","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Administrator"}),i("span",{staticClass:"nav-text"},[t._v("Sessions")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"pages"==t.selectedParentMenu},attrs:{"data-item":"pages","data-submenu":!0},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Double-Tap"}),i("span",{staticClass:"nav-text"},[t._v("Pages")])]),i("div",{staticClass:"triangle"})]),i("li",{staticClass:"nav-item",class:{active:"doc"==t.selectedParentMenu},attrs:{"data-submenu":!1},on:{mouseenter:t.toggleSubMenu}},[i("a",{staticClass:"nav-item-hold",attrs:{href:"http://demos.ui-lib.com/gull-vue-doc/",target:"_blank"}},[i("i",{staticClass:"nav-icon i-Safe-Box1"}),i("span",{staticClass:"nav-text"},[t._v("Doc")])]),i("div",{staticClass:"triangle"})])])]),i("vue-perfect-scrollbar",{staticClass:"sidebar-left-secondary ps rtl-ps-none",class:{open:t.getCompactSideBarToggleProperties.isSideNavOpen},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i("div",{ref:"sidebarChild"},[i("i",{staticClass:"sidebar-close i-Close",on:{click:t.compactSideBarToggle}}),i("header",[i("div",{staticClass:"logo"},[i("img",{attrs:{src:s("a993"),alt:""}})])]),i("div",{staticClass:"submenu-area",class:{"d-block":"dashboards"==t.selectedParentMenu},attrs:{"data-parent":"dashboards"}},[i("header",[i("h6",[t._v("Dashboards")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"dashboards"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/dashboards/dashboard.v1"}},[i("i",{staticClass:"nav-icon i-Clock-3"}),i("span",{staticClass:"item-name"},[t._v("Version 1")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/dashboards/dashboard.v2"}},[i("i",{staticClass:"nav-icon i-Clock-4"}),i("span",{staticClass:"item-name"},[t._v("Version 2")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/dashboards/dashboard.v3"}},[i("i",{staticClass:"nav-icon i-Over-Time"}),i("span",{staticClass:"item-name"},[t._v("Version 3")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/dashboards/dashboard.v4"}},[i("i",{staticClass:"nav-icon i-Clock"}),i("span",{staticClass:"item-name"},[t._v("Version 4")])])],1)])]),i("div",{staticClass:"submenu-area",class:{"d-block":"ui-kits"==t.selectedParentMenu},attrs:{"data-parent":"ui-kits"}},[i("header",[i("h6",[t._v("UI Kits")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"ui-kits"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/alerts"}},[i("i",{staticClass:"nav-icon i-Bell1"}),i("span",{staticClass:"item-name"},[t._v("Alerts")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/accordion"}},[i("i",{staticClass:"nav-icon i-Split-Horizontal-2-Window"}),i("span",{staticClass:"item-name"},[t._v("Accordion")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/badges"}},[i("i",{staticClass:"nav-icon i-Medal-2"}),i("span",{staticClass:"item-name"},[t._v("Badges")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/buttons"}},[i("i",{staticClass:"nav-icon i-Cursor-Click"}),i("span",{staticClass:"item-name"},[t._v("Buttons")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/cards"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Cards")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/carousel"}},[i("i",{staticClass:"nav-icon i-Video-Photographer"}),i("span",{staticClass:"item-name"},[t._v("Carousels")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/list"}},[i("i",{staticClass:"nav-icon i-Belt-3"}),i("span",{staticClass:"item-name"},[t._v("Lists")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/pagination"}},[i("i",{staticClass:"nav-icon i-Arrow-Next"}),i("span",{staticClass:"item-name"},[t._v("Paginations")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/popover"}},[i("i",{staticClass:"nav-icon i-Speach-Bubble-2"}),i("span",{staticClass:"item-name"},[t._v("Popover")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/progressbar"}},[i("i",{staticClass:"nav-icon i-Loading"}),i("span",{staticClass:"item-name"},[t._v("Progressbar")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/bootstrap-tab"}},[i("i",{staticClass:"nav-icon i-New-Tab"}),i("span",{staticClass:"item-name"},[t._v("Tabs")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/modals"}},[i("i",{staticClass:"nav-icon i-Duplicate-Window"}),i("span",{staticClass:"item-name"},[t._v("Modals")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/collapsible"}},[i("i",{staticClass:"nav-icon i-Width-Window"}),i("span",{staticClass:"item-name"},[t._v("Collapsible")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/ui-kits/typography"}},[i("i",{staticClass:"nav-icon i-Width-Window"}),i("span",{staticClass:"item-name"},[t._v("Typography")])])],1)])]),i("div",{staticClass:"submenu-area",class:{"d-block":"extrakits"==t.selectedParentMenu},attrs:{"data-parent":"extrakits"}},[i("header",[i("h6",[t._v("Extra Kits")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"extrakits"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/extraKits/dropdown"}},[i("i",{staticClass:"nav-icon i-Arrow-Down"}),i("span",{staticClass:"item-name"},[t._v("Dropdown")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/extraKits/imageCropper"}},[i("i",{staticClass:"nav-icon i-Crop-2"}),i("span",{staticClass:"item-name"},[t._v("Image Cropper")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/extraKits/loaders"}},[i("i",{staticClass:"nav-icon i-Loading-3"}),i("span",{staticClass:"item-name"},[t._v("Loaders")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/extraKits/vueDraggable"}},[i("i",{staticClass:"nav-icon i-Two-Windows"}),i("span",{staticClass:"item-name"},[t._v("Vue Draggable")]),i("span",{staticClass:"ml-2 badge badge-pill badge-danger"},[t._v("New")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/extraKits/vueTree"}},[i("i",{staticClass:"nav-icon i-Up---Down-3"}),i("span",{staticClass:"item-name"},[t._v("Vue Tree")]),i("span",{staticClass:"ml-2 badge badge-pill badge-danger"},[t._v("New")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/extraKits/toasts"}},[i("i",{staticClass:"nav-icon i-Bell"}),i("span",{staticClass:"item-name"},[t._v("Toastr")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/extraKits/sweetAlerts"}},[i("i",{staticClass:"nav-icon i-Approved-Window"}),i("span",{staticClass:"item-name"},[t._v("Sweet Alerts")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/extraKits/tour"}},[i("i",{staticClass:"nav-icon i-Plane"}),i("span",{staticClass:"item-name"},[t._v("User Tour")])])],1)])]),i("div",{staticClass:"submenu-area",class:{"d-block":"apps"==t.selectedParentMenu},attrs:{"data-parent":"apps"}},[i("header",[i("h6",[t._v("Apps")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"apps"}},[i("li",{staticClass:"nav-item dropdown-sidemenu",on:{click:function(a){return a.preventDefault(),t.toggleSidebarDropdwon(a)}}},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-File"}),i("span",{staticClass:"item-name"},[t._v("Invoice")]),i("i",{staticClass:"dd-arrow i-Arrow-Down"})]),i("ul",{staticClass:"submenu"},[i("li",[i("router-link",{attrs:{tag:"a",to:"/app/apps/invoice"}},[i("i",{staticClass:"nav-icon i-Files"}),i("span",{staticClass:"item-name"},[t._v("Invoice List")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/apps/createInvoice"}},[i("i",{staticClass:"nav-icon i-Add-File"}),i("span",{staticClass:"item-name"},[t._v("Create Invoice")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/apps/printInvoice"}},[i("i",{staticClass:"nav-icon i-File-JPG"}),i("span",{staticClass:"item-name"},[t._v("Print Invoice")])])],1)])]),i("li",{staticClass:"nav-item dropdown-sidemenu",on:{click:function(a){return a.preventDefault(),t.toggleSidebarDropdwon(a)}}},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-File-CSV"}),i("span",{staticClass:"item-name"},[t._v("Contacts"),i("span",{staticClass:" ml-2 badge badge-pill badge-danger"},[t._v("New")])]),i("i",{staticClass:"dd-arrow i-Arrow-Down"})]),i("ul",{staticClass:"submenu"},[i("li",[i("router-link",{attrs:{tag:"a",to:"/app/apps/contact-list"}},[i("i",{staticClass:"nav-icon i-File-CSV"}),i("span",{staticClass:"item-name"},[t._v("Contact Lists")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/apps/contact-grid"}},[i("i",{staticClass:"nav-icon i-File-CSV"}),i("span",{staticClass:"item-name"},[t._v("Contact Grid")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/apps/contact-details"}},[i("i",{staticClass:"nav-icon i-File-CSV"}),i("span",{staticClass:"item-name"},[t._v("Contact Details")])])],1)])]),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/apps/products"}},[i("i",{staticClass:"nav-icon i-Add-File"}),i("span",{staticClass:"item-name"},[t._v("eCommerce")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/apps/taskManager"}},[i("i",{staticClass:"nav-icon i-Add-File"}),i("span",{staticClass:"item-name"},[t._v("Task Manager")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/apps/todo-list"}},[i("i",{staticClass:"nav-icon i-File-JPG"}),i("span",{staticClass:"item-name"},[t._v("Todo List")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/apps/contact-list-table"}},[i("i",{staticClass:"nav-icon i-File-JPG"}),i("span",{staticClass:"item-name"},[t._v("Contact List")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/apps/calendar"}},[i("i",{staticClass:"nav-icon i-Calendar-3"}),i("span",{staticClass:"item-name"},[t._v("Calendar")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/apps/inbox"}},[i("i",{staticClass:"nav-icon i-Email"}),i("span",{staticClass:"item-name"},[t._v("Inbox")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/apps/chat"}},[i("i",{staticClass:"nav-icon i-Speach-Bubble-3"}),i("span",{staticClass:"item-name"},[t._v("Chat")])])],1)])]),i("div",{staticClass:"submenu-area",class:{"d-block":"charts"==t.selectedParentMenu},attrs:{"data-parent":"charts"}},[i("header",[i("h6",[t._v("Charts")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"charts"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/charts/eChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Echart")])])],1),i("li",{staticClass:"nav-item dropdown-sidemenu",on:{click:function(a){return a.preventDefault(),t.toggleSidebarDropdwon(a)}}},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"nav-icon i-Line-Chart"}),i("span",{staticClass:"item-name"},[t._v("Apex Charts")]),i("i",{staticClass:"dd-arrow i-Arrow-Down"})]),i("ul",{staticClass:"submenu"},[i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexAreaChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Area Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexBarChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Bar Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexLineChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Line Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexMixChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Mix Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexColumnChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Column Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexPieDonutsChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Pie Donut Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexRadarChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Radar Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexRadialBarChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Radial Bar Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexScatterChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Scatter Chart")])])],1),i("li",[i("router-link",{attrs:{tag:"a",to:"/app/charts/apexSparklineChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Sparkline Chart")])]),i("router-link",{attrs:{tag:"a",to:"/app/charts/apexAreaChart"}},[i("i",{staticClass:"nav-icon i-Line-Chart-2"}),i("span",{staticClass:"item-name"},[t._v("Apex Area Chart")])])],1)])])])]),i("div",{staticClass:"submenu-area",class:{"d-block":"widgets"==t.selectedParentMenu},attrs:{"data-parent":"widgets"}},[i("header",[i("h6",[t._v("Widgets")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"widgets"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/widgets/widgetCard"}},[i("i",{staticClass:"nav-icon i-Two-Windows"}),i("span",{staticClass:"item-name"},[t._v("Widget Card")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/widgets/widgetStatistics"}},[i("i",{staticClass:"nav-icon i-Windows-2"}),i("span",{staticClass:"item-name"},[t._v("Widget Statistics")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/widgets/weatherApp"}},[i("i",{staticClass:"nav-icon i-Windows-2"}),i("span",{staticClass:"item-name"},[t._v("Weather App")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/widgets/widgetApp"}},[i("i",{staticClass:"nav-icon i-Windows-2"}),i("span",{staticClass:"item-name"},[t._v("App Widgets")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/widgets/widgetList"}},[i("i",{staticClass:"nav-icon i-Windows-2"}),i("span",{staticClass:"item-name"},[t._v("Widget List")])])],1)])]),i("div",{staticClass:"submenu-area",class:{"d-block":"forms"==t.selectedParentMenu},attrs:{"data-parent":"forms"}},[i("header",[i("h6",[t._v("Forms")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"forms"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/forms/basicForms"}},[i("i",{staticClass:"nav-icon i-File-Clipboard-Text--Image"}),i("span",{staticClass:"item-name"},[t._v("Basic Elements")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/forms/formLayouts"}},[i("i",{staticClass:"nav-icon i-Split-Vertical"}),i("span",{staticClass:"item-name"},[t._v("Form Layouts")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/forms/basicActionBar"}},[i("i",{staticClass:"nav-icon i-Receipt-4"}),i("span",{staticClass:"item-name"},[t._v("Basic Action Bar")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/forms/formComponent"}},[i("i",{staticClass:"nav-icon i-Close-Window"}),i("span",{staticClass:"item-name"},[t._v("Form Validation")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/forms/formWizard"}},[i("i",{staticClass:"nav-icon i-Width-Window"}),i("span",{staticClass:"item-name"},[t._v("Form Wizard")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/forms/tagInput"}},[i("i",{staticClass:"nav-icon i-Tag-2"}),i("span",{staticClass:"item-name"},[t._v("Tag Input")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/forms/mask"}},[i("i",{staticClass:"nav-icon i-Pen-2"}),i("span",{staticClass:"item-name"},[t._v("Form Mask")])])],1)])]),i("div",{staticClass:"submenu-area",class:{"d-block":"datatables"==t.selectedParentMenu},attrs:{"data-parent":"datatables"}},[i("header",[i("h6",[t._v("Datatables")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"datatables"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/datatables/paging"}},[i("i",{staticClass:"nav-icon i-Split-Four-Square-Window"}),i("span",{staticClass:"item-name"},[t._v("Paging")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/datatables/filter"}},[i("i",{staticClass:"nav-icon i-Split-Vertical"}),i("span",{staticClass:"item-name"},[t._v("Filter")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/datatables/list"}},[i("i",{staticClass:"nav-icon i-Split-Vertical"}),i("span",{staticClass:"item-name"},[t._v("List")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/datatables/vue-good-table"}},[i("i",{staticClass:"nav-icon i-Split-Horizontal"}),i("span",{staticClass:"item-name"},[t._v("Vue Good Table")])])],1)])]),i("div",{staticClass:"submenu-area",class:{"d-block":"sessions"==t.selectedParentMenu},attrs:{"data-parent":"sessions"}},[i("header",[i("h6",[t._v("Sessions")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"sessions"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/sessions/signIn"}},[i("i",{staticClass:"nav-icon i-Checked-User"}),i("span",{staticClass:"item-name"},[t._v("Sign in")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/sessions/signUp"}},[i("i",{staticClass:"nav-icon i-Add-User"}),i("span",{staticClass:"item-name"},[t._v("Sign up")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/sessions/forgot"}},[i("i",{staticClass:"nav-icon i-Find-User"}),i("span",{staticClass:"item-name"},[t._v("Forgot")])])],1)])]),i("div",{staticClass:"submenu-area",class:{"d-block":"pages"==t.selectedParentMenu},attrs:{"data-parent":"pages"}},[i("header",[i("h6",[t._v("Pages")]),i("p",[t._v("Lorem ipsum dolor sit.")])]),i("ul",{staticClass:"childNav",attrs:{"data-parent":"pages"}},[i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/pages/error"}},[i("i",{staticClass:"nav-icon i-Error-404-Window"}),i("span",{staticClass:"item-name"},[t._v("Not Found")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/pages/profile"}},[i("i",{staticClass:"nav-icon i-Male"}),i("span",{staticClass:"item-name"},[t._v("User Profile")])])],1),i("li",{staticClass:"nav-item"},[i("router-link",{attrs:{tag:"a",to:"/app/pages/icons"}},[i("i",{staticClass:"nav-icon i-Male"}),i("span",{staticClass:"item-name"},[t._v("icons")])])],1)])])])]),i("div",{staticClass:"sidebar-overlay",class:{open:t.getCompactSideBarToggleProperties.isSideNavOpen&&t.windowWidth<=1200},on:{click:function(a){return t.removeOverlay()}}})],1)},f=[],_=(s("4de4"),s("4160"),s("ac1f"),s("1276"),s("159b"),{data:function(){return{isMenuOver:!1,selectedParentMenu:"",isMobile:p["isMobile"],windowWidth:window.innerWidth}},mounted:function(){this.toggleSelectedParentMenu(),window.addEventListener("resize",this.handleWindowResize),document.addEventListener("click",this.returnSelectedParentMenu),this.handleWindowResize()},beforeDestroy:function(){document.removeEventListener("click",this.returnSelectedParentMenu),window.removeEventListener("resize",this.handleWindowResize)},computed:Object(n["a"])({},Object(d["c"])(["getCompactSideBarToggleProperties"])),methods:Object(n["a"])(Object(n["a"])({},Object(d["b"])(["changeCompactSidebarProperties"])),{},{removeOverlay:function(){this.changeCompactSidebarProperties(),this.toggleSelectedParentMenu()},compactSideBarToggle:function(t){this.getCompactSideBarToggleProperties.isSideNavOpen&&this.changeCompactSidebarProperties()},handleWindowResize:function(){this.windowWidth=window.innerWidth,window.innerWidth<=1200?this.getCompactSideBarToggleProperties.isSideNavOpen&&this.changeCompactSidebarProperties():this.getCompactSideBarToggleProperties.isSideNavOpen||this.changeCompactSidebarProperties()},toggleSelectedParentMenu:function(){var t=this.$route.path.split("/").filter((function(t){return""!==t}))[1];this.selectedParentMenu=void 0!==t||null!==t?t.toLowerCase():"dashboards"},toggleSubMenu:function(t){var a=t.target.dataset.submenu,s=t.target.dataset.item;a?this.selectedParentMenu=s:this.toggleSelectedParentMenu()},returnSelectedParentMenu:function(){this.isMenuOver||this.toggleSelectedParentMenu()},toggleSidebarDropdwon:function(t){var a=this.$el.querySelectorAll(".dropdown-sidemenu.open");t.currentTarget.classList.toggle("open"),a.forEach((function(t){t.classList.remove("open")}))}})}),w=_,k=Object(C["a"])(w,b,f,!1,null,null,null),x=k.exports,S=s("1e5d"),M={components:{compactTopbar:h,compactSidebar:x,appFooter:S["a"]},data:function(){return{}},computed:Object(n["a"])({},Object(d["c"])(["getCompactSideBarToggleProperties","getcompactLeftSideBarBgColor"]))},P=M,L=Object(C["a"])(P,i,e,!1,null,null,null);a["default"]=L.exports}}]);