"use strict";(self["webpackChunkresume"]=self["webpackChunkresume"]||[]).push([[4212],{44212:function(e,t,n){n.r(t),n.d(t,{vb:function(){return j}});var r="error";function a(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var i=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),o=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),c=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),u=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),s=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),l=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),d=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],m=["else","elseif","case","catch","finally"],h=["next","loop"],f=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],p=a(f),b=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],g=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],k=a(b),v=a(g),w='"',y=a(d),x=a(m),I=a(h),z=a(["end"]),L=a(["do"]),E=null;function C(e,t){t.currentIndent++}function R(e,t){t.currentIndent--}function F(e,t){if(e.eatSpace())return null;var n=e.peek();if("'"===n)return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var a=!1;if((e.match(/^\d*\.\d+F?/i)||e.match(/^\d+\.\d*F?/)||e.match(/^\.\d+F?/))&&(a=!0),a)return e.eat(/J/i),"number";var d=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?d=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),d=!0):e.match(/^0(?![\dx])/i)&&(d=!0),d)return e.eat(/L/i),"number"}return e.match(w)?(t.tokenize=O(e.current()),t.tokenize(e,t)):e.match(s)||e.match(u)?null:e.match(c)||e.match(i)||e.match(p)?"operator":e.match(o)?null:e.match(L)?(C(e,t),t.doInCurrentLine=!0,"keyword"):e.match(y)?(t.doInCurrentLine?t.doInCurrentLine=!1:C(e,t),"keyword"):e.match(x)?"keyword":e.match(z)?(R(e,t),R(e,t),"keyword"):e.match(I)?(R(e,t),"keyword"):e.match(v)||e.match(k)?"keyword":e.match(l)?"variable":(e.next(),r)}function O(e){var t=1==e.length,n="string";return function(r,a){while(!r.eol()){if(r.eatWhile(/[^'"]/),r.match(e))return a.tokenize=F,n;r.eat(/['"]/)}return t&&(a.tokenize=F),n}}function T(e,t){var n=t.tokenize(e,t),a=e.current();if("."===a)return n=t.tokenize(e,t),"variable"===n?"variable":r;var i="[({".indexOf(a);return-1!==i&&C(e,t),"dedent"===E&&R(e,t)?r:(i="])}".indexOf(a),-1!==i&&R(e,t)?r:n)}const j={name:"vb",startState:function(){return{tokenize:F,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=T(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(I)||r.match(z)||r.match(x)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:"'"},autocomplete:d.concat(m).concat(h).concat(f).concat(b).concat(g)}}}}]);
//# sourceMappingURL=4212.d1c53575.js.map