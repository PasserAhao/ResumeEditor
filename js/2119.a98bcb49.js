"use strict";(self["webpackChunkresume"]=self["webpackChunkresume"]||[]).push([[2119],{52119:function(e,t,n){function i(e){var t=e.statementIndentUnit,n=e.dontAlignCalls,i=e.noIndentKeywords||[],r=e.multiLineStrings,a=e.hooks||{};function o(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}var l,s,c=o("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),u=/[\+\-\*\/!~&|^%=?:]/,d=/[\[\]{}()]/,m=/\d[0-9_]*/,f=/\d*\s*'s?d\s*\d[0-9_]*/i,p=/\d*\s*'s?b\s*[xz01][xz01_]*/i,v=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,h=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,g=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,k=/^((\w+)|[)}\]])/,y=/[)}\]]/,w=o("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),b={};for(var _ in w)b[_]="end"+_;for(var x in b["begin"]="end",b["casex"]="endcase",b["casez"]="endcase",b["do"]="while",b["fork"]="join;join_any;join_none",b["covergroup"]="endgroup",i){_=i[x];b[_]&&(b[_]=void 0)}var C=o("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");function I(e,t){var n,i=e.peek();if(a[i]&&0!=(n=a[i](e,t)))return n;if(a.tokenBase&&0!=(n=a.tokenBase(e,t)))return n;if(/[,;:\.]/.test(i))return l=e.next(),null;if(d.test(i))return l=e.next(),"bracket";if("`"==i)return e.next(),e.eatWhile(/[\w\$_]/)?"def":null;if("$"==i)return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null;if("#"==i)return e.next(),e.eatWhile(/[\d_.]/),"def";if('"'==i)return e.next(),t.tokenize=z(i),t.tokenize(e,t);if("/"==i){if(e.next(),e.eat("*"))return t.tokenize=S,S(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(g)||e.match(f)||e.match(p)||e.match(v)||e.match(h)||e.match(m)||e.match(g))return"number";if(e.eatWhile(u))return"meta";if(e.eatWhile(/[\w\$_]/)){var r=e.current();return c[r]?(b[r]&&(l="newblock"),C[r]&&(l="newstatement"),s=r,"keyword"):"variable"}return e.next(),null}function z(e){return function(t,n){var i,a=!1,o=!1;while(null!=(i=t.next())){if(i==e&&!a){o=!0;break}a=!a&&"\\"==i}return(o||!a&&!r)&&(n.tokenize=I),"string"}}function S(e,t){var n,i=!1;while(n=e.next()){if("/"==n&&i){t.tokenize=I;break}i="*"==n}return"comment"}function j(e,t,n,i,r){this.indented=e,this.column=t,this.type=n,this.align=i,this.prev=r}function N(e,t,n){var i=e.indented,r=new j(i,t,n,null,e.context);return e.context=r}function $(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function B(e,t){if(e==t)return!0;var n=t.split(";");for(var i in n)if(e==n[i])return!0;return!1}function q(){var e=[];for(var t in b)if(b[t]){var n=b[t].split(";");for(var i in n)e.push(n[i])}var r=new RegExp("[{}()\\[\\]]|("+e.join("|")+")$");return r}return{name:"verilog",startState:function(e){var t={tokenize:null,context:new j(-e,0,"top",!1),indented:0,startOfLine:!0};return a.startState&&a.startState(t),t},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),a.token){var i=a.token(e,t);if(void 0!==i)return i}if(e.eatSpace())return null;l=null,s=null;i=(t.tokenize||I)(e,t);if("comment"==i||"meta"==i||"variable"==i)return i;if(null==n.align&&(n.align=!0),l==n.type)$(t);else if(";"==l&&"statement"==n.type||n.type&&B(s,n.type)){n=$(t);while(n&&"statement"==n.type)n=$(t)}else if("{"==l)N(t,e.column(),"}");else if("["==l)N(t,e.column(),"]");else if("("==l)N(t,e.column(),")");else if(n&&"endcase"==n.type&&":"==l)N(t,e.column(),"statement");else if("newstatement"==l)N(t,e.column(),"statement");else if("newblock"==l)if("function"!=s||!n||"statement"!=n.type&&"endgroup"!=n.type)if("task"==s&&n&&"statement"==n.type);else{var r=b[s];N(t,e.column(),r)}else;return t.startOfLine=!1,i},indent:function(e,i,r){if(e.tokenize!=I&&null!=e.tokenize)return null;if(a.indent){var o=a.indent(e);if(o>=0)return o}var l=e.context,s=i&&i.charAt(0);"statement"==l.type&&"}"==s&&(l=l.prev);var c=!1,u=i.match(k);return u&&(c=B(u[0],l.type)),"statement"==l.type?l.indented+("{"==s?0:t||r.unit):y.test(l.type)&&l.align&&!n?l.column+(c?0:1):")"!=l.type||c?l.indented+(c?0:r.unit):l.indented+(t||r.unit)},languageData:{indentOnInput:q(),commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}n.r(t),n.d(t,{tlv:function(){return m},verilog:function(){return r}});const r=i({});var a={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"contentSeparator","/":"property","/-":"property","@":"variableName.special","@-":"variableName.special","@++":"variableName.special","@+=":"variableName.special","@+=-":"variableName.special","@--":"variableName.special","@-=":"variableName.special","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable","**":"variable","\\":"keyword",'"':"comment"},o={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},l=3,s=!1,c=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,u=/^[! ] */,d=/^\/[\/\*]/;const m=i({hooks:{electricInput:!1,token:function(e,t){var n=void 0;if(e.sol()&&!t.tlvInBlockComment){"\\"==e.peek()&&(n="def",e.skipToEnd(),e.string.match(/\\SV/)?t.tlvCodeActive=!1:e.string.match(/\\TLV/)&&(t.tlvCodeActive=!0)),t.tlvCodeActive&&0==e.pos&&0==t.indented&&(h=e.match(u,!1))&&(t.indented=h[0].length);var i=t.indented,r=i/l;if(r<=t.tlvIndentationStyle.length){var m=e.string.length==i,f=r*l;if(f<e.string.length){var p=e.string.slice(f),v=p[0];o[v]&&(h=p.match(c))&&a[h[1]]&&(i+=l,"\\"==v&&f>0||(t.tlvIndentationStyle[r]=o[v],s&&(t.statementComment=!1),r++))}if(!m)while(t.tlvIndentationStyle.length>r)t.tlvIndentationStyle.pop()}t.tlvNextIndent=i}if(t.tlvCodeActive){var h,g=!1;if(s&&(g=" "!=e.peek()&&void 0===n&&!t.tlvInBlockComment&&
//!stream.match(tlvCommentMatch, false) && // not comment start
e.column()==t.tlvIndentationStyle.length*l,g&&(t.statementComment&&(g=!1),t.statementComment=e.match(d,!1))),void 0!==n);else if(t.tlvInBlockComment)e.match(/^.*?\*\//)?(t.tlvInBlockComment=!1,s&&!e.eol()&&(t.statementComment=!1)):e.skipToEnd(),n="comment";else if((h=e.match(d))&&!t.tlvInBlockComment)"//"==h[0]?e.skipToEnd():t.tlvInBlockComment=!0,n="comment";else if(h=e.match(c)){var k=h[1],y=h[2];a.hasOwnProperty(k)&&(y.length>0||e.eol())?n=a[k]:e.backUp(e.current().length-1)}else e.match(/^\t+/)?n="invalid":e.match(/^[\[\]{}\(\);\:]+/)?n="meta":(h=e.match(/^[mM]4([\+_])?[\w\d_]*/))?n="+"==h[1]?"keyword.special":"keyword":e.match(/^ +/)?e.eol()&&(n="error"):e.match(/^[\w\d_]+/)?n="number":e.next()}else e.match(/^[mM]4([\w\d_]*)/)&&(n="keyword");return n},indent:function(e){return 1==e.tlvCodeActive?e.tlvNextIndent:-1},startState:function(e){e.tlvIndentationStyle=[],e.tlvCodeActive=!0,e.tlvNextIndent=-1,e.tlvInBlockComment=!1,s&&(e.statementComment=!1)}}})}}]);
//# sourceMappingURL=2119.a98bcb49.js.map