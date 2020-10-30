(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(module,exports,__webpack_require__){module.exports={count:"Count__count___LmYr9",label:"Count__label___3k0pe",iconCountWrapper:"Count__iconCountWrapper___1HfV4",expandedIconCount:"Count__expandedIconCount___2x_nJ",number:"Count__number___1_hOq",horizontal:"Count__horizontal___1lbwj"}},1481:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(61),_clientLogger=__webpack_require__(37),_configFilename=__webpack_require__(1482);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1482:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));const parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1483:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(389).configure)([__webpack_require__(1484)],module,!1)}).call(this,__webpack_require__(106)(module))},1484:function(module,exports,__webpack_require__){var map={"./stories/Count.stories.js":1485,"./stories/Tally.stories.js":1491,"./stories/TallyLoader.stories.js":1492};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1484},1485:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"Horizontal",(function(){return Horizontal})),__webpack_require__.d(__webpack_exports__,"ShowLabels",(function(){return ShowLabels}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_exports__.default={title:"Count",component:_src__WEBPACK_IMPORTED_MODULE_1__.a};const Template=args=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,_extends({type:"supporting",count:5e3},args)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,_extends({type:"mentioning",count:50},args)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,_extends({type:"disputing",count:50},args)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,_extends({type:"notices",count:3},args))),Basic=Template.bind({}),Horizontal=Template.bind({});Horizontal.args={horizontal:!0};const ShowLabels=Template.bind({});ShowLabels.args={showLabels:!0}},1490:function(module,exports,__webpack_require__){},1491:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"Horizontal",(function(){return Horizontal})),__webpack_require__.d(__webpack_exports__,"ShowZero",(function(){return ShowZero})),__webpack_require__.d(__webpack_exports__,"ShowLabels",(function(){return ShowLabels}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_exports__.default={title:"Tally",component:_src__WEBPACK_IMPORTED_MODULE_1__.b};const tally={supporting:1,contradicting:2,mentioning:0},Template=args=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.b,_extends({tally:tally,notices:[{status:"retracted"}]},args)),Basic=Template.bind({}),Horizontal=Template.bind({});Horizontal.args={horizontal:!0};const ShowZero=Template.bind({});ShowZero.args={showZero:!0};const ShowLabels=Template.bind({});ShowLabels.args={showLabels:!0}},1492:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TallyLoaded",(function(){return TallyLoaded})),__webpack_require__.d(__webpack_exports__,"TallyLoadedRetractionNotice",(function(){return TallyLoadedRetractionNotice}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64);__webpack_exports__.default={title:"TallyLoader",component:_src__WEBPACK_IMPORTED_MODULE_1__.c};const Template=args=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.c,args,({tally:tally,notices:notices})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.b,{tally:tally,notices:notices})),TallyLoaded=Template.bind({});TallyLoaded.args={doi:"10.1016/j.biopsych.2005.08.012"};const TallyLoadedRetractionNotice=Template.bind({});TallyLoadedRetractionNotice.args={doi:"10.1038/nature10167"}},162:function(module,exports,__webpack_require__){module.exports={tally:"Tally__tally___VjpQu",horizontal:"Tally__horizontal___18XtK",show:"Tally__show___1Dr0M",logo:"Tally__logo___ajSQg"}},340:function(module,exports,__webpack_require__){module.exports={icon:"Icon__icon___1jkJ5",unclassified:"Icon__unclassified___1gAyb",disputing:"Icon__disputing___2_S87",mentioning:"Icon__mentioning___E0qaC",supporting:"Icon__supporting___1Lrez",notices:"Icon__notices___3in0O"}},522:function(module,exports,__webpack_require__){__webpack_require__(523),__webpack_require__(714),__webpack_require__(715),__webpack_require__(870),__webpack_require__(1426),__webpack_require__(1460),__webpack_require__(1465),__webpack_require__(1477),__webpack_require__(1479),__webpack_require__(1481),module.exports=__webpack_require__(1483)},596:function(module,exports){},629:function(module,exports){},64:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return components_Tally})),__webpack_require__.d(__webpack_exports__,"a",(function(){return components_Count})),__webpack_require__.d(__webpack_exports__,"c",(function(){return components_TallyLoader}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),query_string=__webpack_require__(521),query_string_default=__webpack_require__.n(query_string),classnames=__webpack_require__(119),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__(340),Icon_default=__webpack_require__.n(Icon);var components_Icon=({type:type})=>react_default.a.createElement("i",{className:classnames_default()(Icon_default.a.icon,Icon_default.a[type])}),Count=__webpack_require__(120),Count_default=__webpack_require__.n(Count);var components_Count=({className:className,horizontal:horizontal,type:type,count:count,showLabels:showLabels=!1})=>react_default.a.createElement("div",{className:classnames_default()(Count_default.a.count,className,{[Count_default.a.horizontal]:horizontal})},showLabels&&react_default.a.createElement("span",{className:Count_default.a.label},type),react_default.a.createElement("div",{className:classnames_default()(Count_default.a.iconCountWrapper,{[Count_default.a.expandedIconCount]:!showLabels})},react_default.a.createElement(components_Icon,{type:type}),react_default.a.createElement("span",{className:Count_default.a.number},count))),styles_Tally=__webpack_require__(162),Tally_default=__webpack_require__.n(styles_Tally);class Tally_Tally extends react.Component{constructor(props){super(props),this.handleClick=this.handleClick.bind(this)}get queryString(){const{source:source,isBadge:isBadge,campaign:campaign}=this.props,params={utm_medium:isBadge?"badge":"plugin",utm_source:source||"generic",utm_campaign:campaign||"badge_generic"};return query_string_default.a.stringify(params)}handleClick(){const{tally:{doi:doi}}=this.props;window.open(`https://scite.ai/reports/${doi}?${this.queryString}`)}render(){const{horizontal:horizontal,showZero:showZero,showLabels:showLabels,tally:tally,notices:notices}=this.props,classes={tally:classnames_default()("scite-tally",Tally_default.a.tally,{[Tally_default.a.horizontal]:horizontal,[Tally_default.a.show]:showZero?tally:tally&&tally.total>0})},supporting=tally&&tally.supporting&&tally.supporting.toLocaleString()||0,disputing=tally&&tally.contradicting&&tally.contradicting.toLocaleString()||0,mentioning=tally&&tally.mentioning&&tally.mentioning.toLocaleString()||0,noticeCount=notices&&notices.length&&notices.length.toLocaleString()||0;return react_default.a.createElement("div",{className:classes.tally,onClick:this.handleClick},!horizontal&&react_default.a.createElement("img",{className:Tally_default.a.logo,src:"https://cdn.scite.ai/assets/images/logo.svg"}),react_default.a.createElement(components_Count,{type:"supporting",count:supporting,horizontal:horizontal,showLabels:showLabels}),react_default.a.createElement(components_Count,{type:"mentioning",count:mentioning,horizontal:horizontal,showLabels:showLabels}),react_default.a.createElement(components_Count,{type:"disputing",count:disputing,horizontal:horizontal,showLabels:showLabels}),notices&&notices.length>0&&react_default.a.createElement(components_Count,{type:"notices",count:noticeCount,horizontal:horizontal,showLabels:showLabels}))}}Tally_Tally.defaultProps={horizontal:!1,isBadge:!1,showZero:!0};var components_Tally=Tally_Tally;__webpack_require__(1489);const{fetch:TallyLoader_fetch}=window,NOTICE_STATUSES=["retracted","has expression of concern","withdrawn","has erratum","has correction"];var components_TallyLoader=({doi:doi,children:children})=>{const[tally,setTally]=Object(react.useState)(null),[notices,setNotices]=Object(react.useState)(null),[error,setError]=Object(react.useState)(null);return Object(react.useEffect)(()=>{!function fetchTally({doi:doi,setTally:setTally,setError:setError,retry:retry=0,maxRetries:maxRetries=8}={}){const fetchFailed=new Error("Failed to get Tally");TallyLoader_fetch("https://api.scite.ai/tallies/"+doi).then(response=>{if(404===response.status)return setTally({doi:doi,total:0}),{};if(!response.ok)throw fetchFailed;return response.json()}).then(tally=>{"number"==typeof tally.total&&setTally(tally)}).catch(e=>{if(e===fetchFailed&&retry<maxRetries)return setTimeout(()=>fetchTally({retry:++retry,doi:doi,setTally:setTally,setError:setError,maxRetries:maxRetries}),1200);setError(e)})}({doi:doi,setTally:setTally,setError:setError}),function fetchNotices({doi:doi,setNotices:setNotices,setError:setError,retry:retry=0,maxRetries:maxRetries=8}={}){const fetchFailed=new Error("Failed to get notices");TallyLoader_fetch("https://api.scite.ai/papers/"+doi).then(response=>{if(404===response.status)return setNotices([]),{};if(!response.ok)throw fetchFailed;return response.json()}).then(({editorialNotices:editorialNotices})=>{const notices=[...new Set(editorialNotices.filter(({status:status})=>NOTICE_STATUSES.includes(status.toLowerCase())).map(({status:status})=>status))];setNotices(notices)}).catch(e=>{if(e===fetchFailed&&retry<maxRetries)return setTimeout(()=>fetchNotices({retry:++retry,doi:doi,maxRetries:maxRetries,setError:setError,setNotices:setNotices}),1200);setError(e)})}({doi:doi,setNotices:setNotices,setError:setError})},[doi]),children({tally:tally,notices:notices,error:error})};__webpack_require__(1490)},668:function(module,exports){},715:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(389)}},[[522,1,2]]]);
//# sourceMappingURL=main.924f56e58827692738da.bundle.js.map