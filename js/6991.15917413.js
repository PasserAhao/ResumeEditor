"use strict";(self["webpackChunkresume"]=self["webpackChunkresume"]||[]).push([[6991],{76991:function(t,e,n){var r;function u(t,e){return r=e,t}function a(t,e){var n=t.next();if("<"!=n||!t.eat("!")){if("<"==n&&t.eat("?"))return e.tokenize=c("meta","?>"),u("meta",n);if("#"==n&&t.eatWhile(/[\w]/))return u("atom","tag");if("|"==n)return u("keyword","separator");if(n.match(/[\(\)\[\]\-\.,\+\?>]/))return u(null,n);if(n.match(/[\[\]]/))return u("rule",n);if('"'==n||"'"==n)return e.tokenize=l(n),e.tokenize(t,e);if(t.eatWhile(/[a-zA-Z\?\+\d]/)){var r=t.current();return null!==r.substr(r.length-1,r.length).match(/\?|\+/)&&t.backUp(1),u("tag","tag")}return"%"==n||"*"==n?u("number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),u(null,null))}return t.eatWhile(/[\-]/)?(e.tokenize=i,i(t,e)):t.eatWhile(/[\w]/)?u("keyword","doindent"):void 0}function i(t,e){var n,r=0;while(null!=(n=t.next())){if(r>=2&&">"==n){e.tokenize=a;break}r="-"==n?r+1:0}return u("comment","comment")}function l(t){return function(e,n){var r,i=!1;while(null!=(r=e.next())){if(r==t&&!i){n.tokenize=a;break}i=!i&&"\\"==r}return u("string","tag")}}function c(t,e){return function(n,r){while(!n.eol()){if(n.match(e)){r.tokenize=a;break}n.next()}return t}}n.r(e),n.d(e,{dtd:function(){return s}});const s={name:"dtd",startState:function(){return{tokenize:a,baseIndent:0,stack:[]}},token:function(t,e){if(t.eatSpace())return null;var n=e.tokenize(t,e),u=e.stack[e.stack.length-1];return"["==t.current()||"doindent"===r||"["==r?e.stack.push("rule"):"endtag"===r?e.stack[e.stack.length-1]="endtag":"]"==t.current()||"]"==r||">"==r&&"rule"==u?e.stack.pop():"["==r&&e.stack.push("["),n},indent:function(t,e,n){var u=t.stack.length;return"]"===e.charAt(0)?u--:">"===e.substr(e.length-1,e.length)&&("<"===e.substr(0,1)||"doindent"==r&&e.length>1||("doindent"==r?u--:">"==r&&e.length>1||"tag"==r&&">"!==e||("tag"==r&&"rule"==t.stack[t.stack.length-1]?u--:"tag"==r?u++:">"===e&&"rule"==t.stack[t.stack.length-1]&&">"===r?u--:">"===e&&"rule"==t.stack[t.stack.length-1]||("<"!==e.substr(0,1)&&">"===e.substr(0,1)?u-=1:">"===e||(u-=1)))),null!=r&&"]"!=r||u--),t.baseIndent+u*n.unit},languageData:{indentOnInput:/^\s*[\]>]$/}}}}]);
//# sourceMappingURL=6991.15917413.js.map