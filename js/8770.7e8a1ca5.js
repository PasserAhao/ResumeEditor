"use strict";(self["webpackChunkresume"]=self["webpackChunkresume"]||[]).push([[8770],{28770:function(e,t,n){function r(e,t,n){return t(n),n(e,t)}n.r(t),n.d(t,{elm:function(){return v}});var i=/[a-z]/,u=/[A-Z]/,a=/[a-zA-Z0-9_]/,o=/[0-9]/,f=/[0-9A-Fa-f]/,s=/[-&*+.\\/<>=?^|:]/,l=/[(),[\]{}]/,c=/[ \v\f]/;function h(){return function(e,t){if(e.eatWhile(c))return null;var n=e.next();if(l.test(n))return"{"===n&&e.eat("-")?r(e,t,m(1)):"["===n&&e.match("glsl|")?r(e,t,x):"builtin";if("'"===n)return r(e,t,w);if('"'===n)return e.eat('"')?e.eat('"')?r(e,t,p):"string":r(e,t,k);if(u.test(n))return e.eatWhile(a),"type";if(i.test(n)){var h=1===e.pos;return e.eatWhile(a),h?"def":"variable"}if(o.test(n)){if("0"===n){if(e.eat(/[xX]/))return e.eatWhile(f),"number"}else e.eatWhile(o);return e.eat(".")&&e.eatWhile(o),e.eat(/[eE]/)&&(e.eat(/[-+]/),e.eatWhile(o)),"number"}return s.test(n)?"-"===n&&e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(s),"keyword"):"_"===n?"keyword":"error"}}function m(e){return 0==e?h():function(t,n){while(!t.eol()){var r=t.next();if("{"==r&&t.eat("-"))++e;else if("-"==r&&t.eat("}")&&(--e,0===e))return n(h()),"comment"}return n(m(e)),"comment"}}function p(e,t){while(!e.eol()){var n=e.next();if('"'===n&&e.eat('"')&&e.eat('"'))return t(h()),"string"}return"string"}function k(e,t){while(e.skipTo('\\"'))e.next(),e.next();return e.skipTo('"')?(e.next(),t(h()),"string"):(e.skipToEnd(),t(h()),"error")}function w(e,t){while(e.skipTo("\\'"))e.next(),e.next();return e.skipTo("'")?(e.next(),t(h()),"string"):(e.skipToEnd(),t(h()),"error")}function x(e,t){while(!e.eol()){var n=e.next();if("|"===n&&e.eat("]"))return t(h()),"string"}return"string"}var g={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};const v={name:"elm",startState:function(){return{f:h()}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,(function(e){t.f=e})),r=e.current();return g.hasOwnProperty(r)?"keyword":n},languageData:{commentTokens:{line:"--"}}}}}]);
//# sourceMappingURL=8770.7e8a1ca5.js.map