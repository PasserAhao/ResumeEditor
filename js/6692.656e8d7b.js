"use strict";(self["webpackChunkresume"]=self["webpackChunkresume"]||[]).push([[6692],{26692:function(e,t,r){function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}r.r(t),r.d(t,{webIDL:function(){return T}});var a=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"],i=n(a),c=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"],o=n(c),l=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"],m=n(l),u=["true","false","Infinity","NaN","null"],s=n(u),f=["callback","dictionary","enum","interface"],d=n(f),y=["typedef"],b=n(y),p=/^[:<=>?]/,h=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,A=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,g=/^_?[A-Za-z][0-9A-Z_a-z-]*/,k=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,D=/^"[^"]*"/,C=/^\/\*.*?\*\//,E=/^\/\*.*/,w=/^.*?\*\//;function N(e,t){if(e.eatSpace())return null;if(t.inComment)return e.match(w)?(t.inComment=!1,"comment"):(e.skipToEnd(),"comment");if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(C))return"comment";if(e.match(E))return t.inComment=!0,"comment";if(e.match(/^-?[0-9\.]/,!1)&&(e.match(h)||e.match(A)))return"number";if(e.match(D))return"string";if(t.startDef&&e.match(g))return"def";if(t.endDef&&e.match(k))return t.endDef=!1,"def";if(e.match(m))return"keyword";if(e.match(o)){var r=t.lastToken,n=(e.match(/^\s*(.+?)\b/,!1)||[])[1];return":"===r||"implements"===r||"implements"===n||"="===n?"builtin":"type"}return e.match(i)?"builtin":e.match(s)?"atom":e.match(g)?"variable":e.match(p)?"operator":(e.next(),null)}const T={name:"webidl",startState:function(){return{inComment:!1,lastToken:"",startDef:!1,endDef:!1}},token:function(e,t){var r=N(e,t);if(r){var n=e.current();t.lastToken=n,"keyword"===r?(t.startDef=d.test(n),t.endDef=t.endDef||b.test(n)):t.startDef=!1}return r},languageData:{autocomplete:a.concat(c).concat(l).concat(u)}}}}]);
//# sourceMappingURL=6692.656e8d7b.js.map