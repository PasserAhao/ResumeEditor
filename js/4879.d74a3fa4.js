"use strict";(self["webpackChunkresume"]=self["webpackChunkresume"]||[]).push([[4879],{44879:function(t,e,n){n.r(e),n.d(e,{shell:function(){return p}});var r={};function s(t,e){for(var n=0;n<e.length;n++)r[e[n]]=t}var i=["true","false"],o=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],u=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function a(t,e){if(t.eatSpace())return null;var n=t.sol(),s=t.next();if("\\"===s)return t.next(),null;if("'"===s||'"'===s||"`"===s)return e.tokens.unshift(c(s,"`"===s?"quote":"string")),h(t,e);if("#"===s)return n&&t.eat("!")?(t.skipToEnd(),"meta"):(t.skipToEnd(),"comment");if("$"===s)return e.tokens.unshift(l),h(t,e);if("+"===s||"="===s)return"operator";if("-"===s)return t.eat("-"),t.eatWhile(/\w/),"attribute";if("<"==s){if(t.match("<<"))return"operator";var i=t.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);if(i)return e.tokens.unshift(k(i[1]||i[2])),"string.special"}if(/\d/.test(s)&&(t.eatWhile(/\d/),t.eol()||!/\w/.test(t.peek())))return"number";t.eatWhile(/[\w-]/);var o=t.current();return"="===t.peek()&&/\w+/.test(o)?"def":r.hasOwnProperty(o)?r[o]:null}function c(t,e){var n="("==t?")":"{"==t?"}":t;return function(r,s){var i,o=!1;while(null!=(i=r.next())){if(i===n&&!o){s.tokens.shift();break}if("$"===i&&!o&&"'"!==t&&r.peek()!=n){o=!0,r.backUp(1),s.tokens.unshift(l);break}if(!o&&t!==n&&i===t)return s.tokens.unshift(c(t,e)),h(r,s);if(!o&&/['"]/.test(i)&&!/['"]/.test(t)){s.tokens.unshift(f(i,"string")),r.backUp(1);break}o=!o&&"\\"===i}return e}}function f(t,e){return function(n,r){return r.tokens[0]=c(t,e),n.next(),h(n,r)}}s("atom",i),s("keyword",o),s("builtin",u);var l=function(t,e){e.tokens.length>1&&t.eat("$");var n=t.next();return/['"({]/.test(n)?(e.tokens[0]=c(n,"("==n?"quote":"{"==n?"def":"string"),h(t,e)):(/\d/.test(n)||t.eatWhile(/\w/),e.tokens.shift(),"def")};function k(t){return function(e,n){return e.sol()&&e.string==t&&n.tokens.shift(),e.skipToEnd(),"string.special"}}function h(t,e){return(e.tokens[0]||a)(t,e)}const p={name:"shell",startState:function(){return{tokens:[]}},token:function(t,e){return h(t,e)},languageData:{autocomplete:i.concat(o,u),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=4879.d74a3fa4.js.map