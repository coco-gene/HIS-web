(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-uparse-md-uparse-md"],{"0d39":function(e,t,n){(function(t){n("c975"),n("26e9"),n("fb6a"),n("a434"),n("d3b7"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("498a"),function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:f,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:f,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:f,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||w.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=d(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=d(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=d(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=d(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=d(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag",n._tag).getRegex(),n.blockquote=d(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=x({},n),n.gfm=x({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=d(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=x({},n.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=x({},n.normal,{html:d("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=n,r.lex=function(e,t){var n=new r(t);return n.lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){var r,s,a,i,l,o,h,p,d,u,c,g,f,x,w,k;e=e.replace(/^ +$/gm,"");while(e)if((a=this.rules.newline.exec(e))&&(e=e.substring(a[0].length),a[0].length>1&&this.tokens.push({type:"space"})),a=this.rules.code.exec(e))e=e.substring(a[0].length),a=a[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?a:b(a,"\n")});else if(a=this.rules.fences.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"code",lang:a[2],text:a[3]||""});else if(a=this.rules.heading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:a[1].length,text:a[2]});else if(t&&(a=this.rules.nptable.exec(e))&&(o={type:"table",header:m(a[1].replace(/^ *| *\| *$/g,"")),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3]?a[3].replace(/\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(a[0].length),c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=m(o.cells[c],o.header.length);this.tokens.push(o)}else if(a=this.rules.hr.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"hr"});else if(a=this.rules.blockquote.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"blockquote_start"}),a=a[0].replace(/^ *> ?/gm,""),this.token(a,t),this.tokens.push({type:"blockquote_end"});else if(a=this.rules.list.exec(e)){for(e=e.substring(a[0].length),i=a[2],x=i.length>1,h={type:"list_start",ordered:x,start:x?+i:"",loose:!1},this.tokens.push(h),a=a[0].match(this.rules.item),p=[],r=!1,f=a.length,c=0;c<f;c++)o=a[c],u=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(u-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&c!==f-1&&(l=n.bullet.exec(a[c+1])[0],i===l||i.length>1&&l.length>1||(e=a.slice(c+1).join("\n")+e,c=f-1)),s=r||/\n\n(?!\s*$)/.test(o),c!==f-1&&(r="\n"===o.charAt(o.length-1),s||(s=r)),s&&(h.loose=!0),w=/^\[[ xX]\] /.test(o),k=void 0,w&&(k=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),d={type:"list_item_start",task:w,checked:k,loose:s},p.push(d),this.tokens.push(d),this.token(o,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(f=p.length,c=0;c<f;c++)p[c].loose=!0;this.tokens.push({type:"list_end"})}else if(a=this.rules.html.exec(e))e=e.substring(a[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:a[0]});else if(t&&(a=this.rules.def.exec(e)))e=e.substring(a[0].length),a[3]&&(a[3]=a[3].substring(1,a[3].length-1)),g=a[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[g]||(this.tokens.links[g]={href:a[2],title:a[3]});else if(t&&(a=this.rules.table.exec(e))&&(o={type:"table",header:m(a[1].replace(/^ *| *\| *$/g,"")),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3]?a[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(a[0].length),c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=m(o.cells[c].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(a=this.rules.lheading.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"heading",depth:"="===a[2]?1:2,text:a[1]});else if(t&&(a=this.rules.paragraph.exec(e)))e=e.substring(a[0].length),this.tokens.push({type:"paragraph",text:"\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1]});else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),this.tokens.push({type:"text",text:a[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var s={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:f,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:f,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function a(e,t){if(this.options=t||w.defaults,this.links=e,this.rules=s.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.options.breaks?this.rules=s.breaks:this.rules=s.gfm)}function i(e){this.options=e||w.defaults}function l(){}function o(e){this.tokens=[],this.token=null,this.options=e||w.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}function h(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}function d(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=n.source||n,n=n.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function u(e,t){return c[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?c[" "+e]=e+"/":c[" "+e]=b(e,"/",!0)),e=c[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}s._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,s._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,s._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,s.autolink=d(s.autolink).replace("scheme",s._scheme).replace("email",s._email).getRegex(),s._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,s.tag=d(s.tag).replace("comment",n._comment).replace("attribute",s._attribute).getRegex(),s._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,s._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/,s._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,s.link=d(s.link).replace("label",s._label).replace("href",s._href).replace("title",s._title).getRegex(),s.reflink=d(s.reflink).replace("label",s._label).getRegex(),s.normal=x({},s),s.pedantic=x({},s.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",s._label).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",s._label).getRegex()}),s.gfm=x({},s.normal,{escape:d(s.escape).replace("])","~|])").getRegex(),url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",s._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:d(s.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),s.breaks=x({},s.gfm,{br:d(s.br).replace("{2,}","*").getRegex(),text:d(s.gfm.text).replace("{2,}","*").getRegex()}),a.rules=s,a.output=function(e,t,n){var r=new a(t,n);return r.output(e)},a.prototype.output=function(e){var t,n,r,s,i,l,o="";while(e)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),o+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=h(this.mangle(i[1])),r="mailto:"+n):(n=h(i[1]),r=n),o+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):h(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,r=i[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r),t?(r=t[1],s=t[3]):s=""):s=i[3]?i[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(i,{href:a.escapes(r),title:a.escapes(s)}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){o+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),o+=this.renderer.strong(this.output(i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),o+=this.renderer.em(this.output(i[6]||i[5]||i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),o+=this.renderer.codespan(h(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),o+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),o+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),o+=this.renderer.text(h(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{do{l=i[0],i[0]=this.rules._backpedal.exec(i[0])[0]}while(l!==i[0]);e=e.substring(i[0].length),"@"===i[2]?(n=h(i[0]),r="mailto:"+n):(n=h(i[0]),r="www."===i[1]?"http://"+n:n),o+=this.renderer.link(r,null,n)}return o},a.escapes=function(e){return e?e.replace(a.rules._escapes,"$1"):e},a.prototype.outputLink=function(e,t){var n=t.href,r=t.title?h(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,h(e[1]))},a.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},a.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},i.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+h(t,!0)+'">'+(n?e:h(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:h(e,!0))+"</code></pre>"},i.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},i.prototype.html=function(e){return e},i.prototype.heading=function(e,t,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},i.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},i.prototype.list=function(e,t,n){var r=t?"ol":"ul",s=t&&1!==n?' start="'+n+'"':"";return"<"+r+s+">\n"+e+"</"+r+">\n"},i.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},i.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},i.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},i.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},i.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},i.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' align="'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},i.prototype.strong=function(e){return"<strong>"+e+"</strong>"},i.prototype.em=function(e){return"<em>"+e+"</em>"},i.prototype.codespan=function(e){return"<code>"+e+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(e){return"<del>"+e+"</del>"},i.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(p(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(a){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!g.test(e)&&(e=u(this.options.baseUrl,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch(a){return n}var s='<a href="'+h(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s},i.prototype.image=function(e,t,n){this.options.baseUrl&&!g.test(e)&&(e=u(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r},i.prototype.text=function(e){return e},l.prototype.strong=l.prototype.em=l.prototype.codespan=l.prototype.del=l.prototype.text=function(e){return e},l.prototype.link=l.prototype.image=function(e,t,n){return""+n},l.prototype.br=function(){return""},o.parse=function(e,t){var n=new o(t);return n.parse(e)},o.prototype.parse=function(e){this.inline=new a(e.links,this.options),this.inlineText=new a(e.links,x({},this.options,{renderer:new l})),this.tokens=e.reverse();var t="";while(this.next())t+=this.tok();return t},o.prototype.next=function(){return this.token=this.tokens.pop()},o.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},o.prototype.parseText=function(){var e=this.token.text;while("text"===this.peek().type)e+="\n"+this.next().text;return this.inline.output(e)},o.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,p(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",a="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});a+=this.renderer.tablerow(n)}return this.renderer.table(s,a);case"blockquote_start":a="";while("blockquote_end"!==this.next().type)a+=this.tok();return this.renderer.blockquote(a);case"list_start":a="";var i=this.token.ordered,l=this.token.start;while("list_end"!==this.next().type)a+=this.tok();return this.renderer.list(a,i,l);case"list_item_start":a="";var o=this.token.loose;this.token.task&&(a+=this.renderer.checkbox(this.token.checked));while("list_item_end"!==this.next().type)a+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(a);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var c={},g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function f(){}function x(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function m(e,t){var n=e.replace(/\|/g,(function(e,t,n){var r=!1,s=t;while(--s>=0&&"\\"===n[s])r=!r;return r?"|":" |"})),r=n.split(/ \|/),s=0;if(r.length>t)r.splice(t);else while(r.length<t)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function b(e,t,n){if(0===e.length)return"";var r=0;while(r<e.length){var s=e.charAt(e.length-r-1);if(s!==t||n){if(s===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function w(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"===typeof t){n||(n=t,t=null),t=x({},w.defaults,t||{});var s,a,i=t.highlight,l=0;try{s=r.lex(e,t)}catch(d){return n(d)}a=s.length;var p=function(e){if(e)return t.highlight=i,n(e);var r;try{r=o.parse(s,t)}catch(d){e=d}return t.highlight=i,e?n(e):n(null,r)};if(!i||i.length<3)return p();if(delete t.highlight,!a)return p();for(;l<s.length;l++)(function(e){"code"!==e.type?--a||p():i(e.text,e.lang,(function(t,n){return t?p(t):null==n||n===e.text?--a||p():(e.text=n,e.escaped=!0,void(--a||p()))}))})(s[l])}else try{return t&&(t=x({},w.defaults,t)),o.parse(r.lex(e,t),t)}catch(d){if(d.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||w.defaults).silent)return"<p>An error occurred:</p><pre>"+h(d.message+"",!0)+"</pre>";throw d}}f.exec=f,w.options=w.setOptions=function(e){return x(w.defaults,e),w},w.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new i,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},w.defaults=w.getDefaults(),w.Parser=o,w.parser=o.parse,w.Renderer=i,w.TextRenderer=l,w.Lexer=r,w.lexer=r.lex,w.InlineLexer=a,w.inlineLexer=a.output,w.parse=w,e.exports=w}(this||"undefined"!==typeof window&&window)}).call(this,n("c8ba"))},"14f9":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("uParse",{attrs:{content:e.article},on:{preview:function(t){arguments[0]=t=e.$handleEvent(t),e.preview.apply(void 0,arguments)},navigate:function(t){arguments[0]=t=e.$handleEvent(t),e.navigate.apply(void 0,arguments)}}})],1)},a=[]},"359f":function(e,t,n){var r=n("8a64");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=n("4f06").default;s("15557b0e",r,!0,{sourceMap:!1,shadowMode:!1})},"6bac":function(e,t,n){e.exports=n("0d39")},7293:function(e,t,n){"use strict";n.r(t);var r=n("e587"),s=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=s.a},"8a64":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"/**\n * author: Di (微信小程序开发工程师)\n * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)\n *         垂直微信小程序开发交流社区\n *\n * github地址: https://github.com/icindy/wxParse\n *\n * for: 微信小程序富文本解析\n * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184\n */.wxParse[data-v-499d3e4e]{width:100%;font-family:Helvetica,sans-serif;font-size:%?30?%;color:#666;line-height:1.8}.wxParse uni-view[data-v-499d3e4e]{word-break:hyphenate}.wxParse .inline[data-v-499d3e4e]{display:inline;margin:0;padding:0}.wxParse .div[data-v-499d3e4e]{margin:0;padding:0}.wxParse .h1 .text[data-v-499d3e4e]{font-size:2em;margin:.67em 0}.wxParse .h2 .text[data-v-499d3e4e]{font-size:1.5em;margin:.83em 0}.wxParse .h3 .text[data-v-499d3e4e]{font-size:1.17em;margin:1em 0}.wxParse .h4 .text[data-v-499d3e4e]{margin:1.33em 0}.wxParse .h5 .text[data-v-499d3e4e]{font-size:.83em;margin:1.67em 0}.wxParse .h6 .text[data-v-499d3e4e]{font-size:.67em;margin:2.33em 0}.wxParse .h1 .text[data-v-499d3e4e],\n.wxParse .h2 .text[data-v-499d3e4e],\n.wxParse .h3 .text[data-v-499d3e4e],\n.wxParse .h4 .text[data-v-499d3e4e],\n.wxParse .h5 .text[data-v-499d3e4e],\n.wxParse .h6 .text[data-v-499d3e4e],\n.wxParse .b[data-v-499d3e4e],\n.wxParse .strong[data-v-499d3e4e]{font-weight:bolder}.wxParse .p[data-v-499d3e4e]{margin:1em 0}.wxParse .i[data-v-499d3e4e],\n.wxParse .cite[data-v-499d3e4e],\n.wxParse .em[data-v-499d3e4e],\n.wxParse .var[data-v-499d3e4e],\n.wxParse .address[data-v-499d3e4e]{font-style:italic}.wxParse .pre[data-v-499d3e4e],\n.wxParse .tt[data-v-499d3e4e],\n.wxParse .code[data-v-499d3e4e],\n.wxParse .kbd[data-v-499d3e4e],\n.wxParse .samp[data-v-499d3e4e]{font-family:monospace}.wxParse .pre[data-v-499d3e4e]{overflow:auto;background:#f5f5f5;padding:%?16?%;white-space:pre;margin:1em %?0?%}.wxParse .code[data-v-499d3e4e]{display:inline;background:#f5f5f5}.wxParse .big[data-v-499d3e4e]{font-size:1.17em}.wxParse .small[data-v-499d3e4e],\n.wxParse .sub[data-v-499d3e4e],\n.wxParse .sup[data-v-499d3e4e]{font-size:.83em}.wxParse .sub[data-v-499d3e4e]{vertical-align:sub}.wxParse .sup[data-v-499d3e4e]{vertical-align:super}.wxParse .s[data-v-499d3e4e],\n.wxParse .strike[data-v-499d3e4e],\n.wxParse .del[data-v-499d3e4e]{text-decoration:line-through}.wxParse .strong[data-v-499d3e4e],\n.wxParse .s[data-v-499d3e4e]{display:inline}.wxParse .a[data-v-499d3e4e]{color:#00bfff}.wxParse .video[data-v-499d3e4e]{text-align:center;margin:%?22?% 0}.wxParse .video-video[data-v-499d3e4e]{width:100%}.wxParse .img[data-v-499d3e4e]{display:inline-block;width:0;height:0;max-width:100%;overflow:hidden}.wxParse .blockquote[data-v-499d3e4e]{margin:%?10?% 0;padding:%?22?% 0 %?22?% %?22?%;font-family:Courier,Calibri,宋体;background:#f5f5f5;border-left:%?6?% solid #dbdbdb}.wxParse .blockquote .p[data-v-499d3e4e]{margin:0}.wxParse .ul[data-v-499d3e4e], .wxParse .ol[data-v-499d3e4e]{display:block;margin:1em 0;padding-left:%?33?%}.wxParse .ol[data-v-499d3e4e]{list-style-type:disc}.wxParse .ol[data-v-499d3e4e]{list-style-type:decimal}.wxParse .ol>weixin-parse-template[data-v-499d3e4e],.wxParse .ul>weixin-parse-template[data-v-499d3e4e]{display:list-item;align-items:baseline;text-align:match-parent}.wxParse .ol>.li[data-v-499d3e4e],.wxParse .ul>.li[data-v-499d3e4e]{display:list-item;align-items:baseline;text-align:match-parent}.wxParse .ul .ul[data-v-499d3e4e], .wxParse .ol .ul[data-v-499d3e4e]{list-style-type:circle}.wxParse .ol .ol .ul[data-v-499d3e4e], .wxParse .ol .ul .ul[data-v-499d3e4e], .wxParse .ul .ol .ul[data-v-499d3e4e], .wxParse .ul .ul .ul[data-v-499d3e4e]{list-style-type:square}.wxParse .u[data-v-499d3e4e]{text-decoration:underline}.wxParse .hide[data-v-499d3e4e]{display:none}.wxParse .del[data-v-499d3e4e]{display:inline}.wxParse .figure[data-v-499d3e4e]{overflow:hidden}.wxParse .table[data-v-499d3e4e]{width:100%}.wxParse .thead[data-v-499d3e4e], .wxParse .tfoot[data-v-499d3e4e], .wxParse .tr[data-v-499d3e4e]{display:flex;flex-direction:row}.wxParse .tr[data-v-499d3e4e]{width:100%;display:flex;border-right:%?2?% solid #e0e0e0;border-bottom:%?2?% solid #e0e0e0}.wxParse .th[data-v-499d3e4e],\n.wxParse .td[data-v-499d3e4e]{display:flex;width:%?1276?%;overflow:auto;flex:1;padding:%?11?%;border-left:%?2?% solid #e0e0e0}.wxParse .td[data-v-499d3e4e]:last{border-top:%?2?% solid #e0e0e0}.wxParse .th[data-v-499d3e4e]{background:#f0f0f0;border-top:%?2?% solid #e0e0e0}",""]),e.exports=t},abd0:function(e,t,n){"use strict";var r=n("359f"),s=n.n(r);s.a},e587:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n("6bac")),a=r(n("62d5")),i="很多资讯页面，服务端返回的数据都是 markdown 字符串或 html 字符串，使用本模板可直接解析 markdown 为符合 uni-app 规范的富文本界面。下文为示例：\r\n\r\nHBuilderX堪称markdown书写编辑的最佳工具，本文简单介绍HBuilderX里markdown的使用技巧。更多详情请在HBuilderX里点菜单帮助-markdown语法帮助。\r\n\r\nmarkdown的标题是行首以#号开头，空格分割的，不同级别的标题，在HX里着色也不同。如下：\r\n# 标题1\r\n## 标题2\r\n### 标题3\r\n#### 标题4\r\n##### 标题5\r\n\r\nHBuilderX标题编辑技巧：\r\n1. Emmet快速输入：敲h2+Tab即可生成二级标题【同HTML里的emmet写法，不止标题，HX里所有可对应tag的markdown语法均支持emmet写法】。仅行首生效\r\n2. 智能双击：双击#号可选中整个标题段落\r\n3. 智能回车：行尾回车或行中Ctrl+Enter强制换行后会自动在下一行补#\r\n4. 回车后再次按Tab可递进一层标题，再按Tab切换列表符\r\n5. 在# 后回车，可上插一个空标题行【同word】，任意位置按Ctrl+Shift+Enter也可以\r\n\r\n\r\n- 折叠：点标题前的-号可折叠该标题段落，快捷键是Alt+-（展开折叠是Alt+=）\r\n- 折叠：多层折叠时折叠或展开子节点，快捷键是Alt+Shift+-或=\r\n\r\n\r\n**加粗** 【快捷键：Ctrl+B，支持多光标；Emmet：b后敲Tab】\r\n\r\n_倾斜_【Emmet：i后敲Tab；前后包围：选中文字按Ctrl+\\是在选区两侧添加光标，可以继续输入_】\r\n\r\n~~删除线~~【前后包围：选中文字按Ctrl+\\是在选区两侧添加光标，可以继续输入~~，会在2侧同时输入】\r\n\r\n> 引用\r\n\r\n\r\n[超链接](https://dcloud.io)\r\n\r\n![logo](https://img-cdn-qiniu.dcloud.net.cn/newpage/images/logo4.png)\r\n\r\n\r\n=======================\r\n\r\n\r\n``` javascript\r\n\tvar a = document; //代码\r\n```\r\n",l={components:{uParse:a.default},data:function(){return{article:(0,s.default)(i)}},methods:{preview:function(e,t){console.log("src: "+e)},navigate:function(e,t){console.log("href: "+e),uni.showModal({content:"点击链接为："+e,showCancel:!1})}}};t.default=l},f8f7:function(e,t,n){"use strict";n.r(t);var r=n("14f9"),s=n("7293");for(var a in s)"default"!==a&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("abd0");var i,l=n("f0c5"),o=Object(l["a"])(s["default"],r["b"],r["c"],!1,null,"499d3e4e",null,!1,r["a"],i);t["default"]=o.exports}}]);