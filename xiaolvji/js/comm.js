function $(e){var t=document.getElementById(e)
return t}function trim(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function clearElements(e){for(var t=e.childNodes,n=t.length,r=n-1;r>=0;r--)"object"==typeof t[r]&&e.removeChild(t[r])}function clear_start_return(e){var t=e.replace(/^(\r\n)+/,""),n=t.replace(/^(\r)+/,""),r=n.replace(/^(\n)+/,"")
return r}function clear_end_return(e){var t=e.replace(/(\r\n)+$/,""),n=t.replace(/(\r)+$/,""),r=n.replace(/(\n)+$/,"")
return r}function clear_all_return(e){var t=e.replace(/\r\n/g,""),n=t.replace(/\r/g,""),r=n.replace(/\n/g,"")
return r}function clear_continuous_return(e){return e.replace(/(\n)+/g,"\r\n\r\n")}function getNodeText(e){for(var t=e.childNodes,n=t.length,r="",a=0;n>a;a++)3==t[a].nodeType&&(r+=t[a].nodeValue)
return r}function getNodeTextByTool(e){return window.ActiveXObject?e.innerText:e.textContent}function getInputRadioValue(e){for(var t=e.childNodes,n=0,r=t.length;r>n;n++)if("object"==typeof t[n]&&1===t[n].nodeType&&"INPUT"===t[n].tagName.toUpperCase()&&"RADIO"===t[n].type.toUpperCase()&&1==t[n].checked)return t[n].value}function htmlspecialchars_js(e,t){return str=""+e,str=str.replace(/&/g,"&amp;"),str=str.replace(/"/g,"&quot;"),str=str.replace(/'/g,"&#039;"),str=str.replace(/</g,"&lt;"),str=str.replace(/>/g,"&gt;"),"y"===t&&(str=str.replace(/ /g,"&nbsp;"),str=str.replace(/\r\n/g,"<br />"),str=str.replace(/\n/g,"<br />")),str}function convert_url_in_string(e,t){if("y"===t)var n=/((http|https|ftp|rtsp|mms|ed2k|magnet|thunder|qqdl|flashget|QVOD|BDHD|xigua|xfplay|jjvod):(\/\/|\?).+?)(?=([\.\!\?,\u3002\uff0c]*)($|(&nbsp;)+|(<\/?br\s?\/?>)+|http|https|ftp|rtsp|mms|ed2k|magnet|thunder|qqdl|flashget|QVOD|BDHD|xigua|xfplay|jjvod))/gi
else var n=/((http|https|ftp|rtsp|mms|ed2k|magnet|thunder|qqdl|flashget|QVOD|BDHD|xigua|xfplay|jjvod):(\/\/|\?).+?)(?=([\.\!\?,\u3002\uff0c]*)($|\s|http|https|ftp|rtsp|mms|ed2k|magnet|thunder|qqdl|flashget|QVOD|BDHD|xigua|xfplay|jjvod))/gi
return e.replace(n,"<a href='$1' target='_blank'>$1</a>")}function mark_keyword(e,t,n,r){for(var a=0,o=e.rows.length;o>a;a++){var i=e.rows[a].cells[n],s=RegExp(t,"ig"),c=getNodeTextByTool(i),l=c.split(s),u=c.match(s),d=l.length
if(d>1){clearElements(i)
for(var f=0,p=d-1;p>f;f++){var h=document.createElement("span")
h.className=r,h.appendChild(document.createTextNode(u[f])),i.appendChild(document.createTextNode(l[f])),i.appendChild(h)}i.appendChild(document.createTextNode(l[f]))}}}function removeDuplicates(e){for(var t,n=[],r={},a=0;null!=(t=e[a]);a++)r[t]||(n.push(t),r[t]=!0)
return n}function split_xls_value(e,t,n,r){var a=e.split(/\r?\n/)
if(1==t&&(a=removeDuplicates(a)),a.length>r)return"max_line"
for(var o=[],i=0;n>i;i++)""!==trim(a[i])&&o.push(a[i].split("	"))
return o}function check_bat_input(e,t){switch(e){case 0:if(t.length>=32||t.length<4)return"[\u578b\u53f7] \u662f\u5fc5\u586b\u9879;\u5e76\u4e14\u9700\u4e3a\u5927\u4e8e3\u4e14\u4e0d\u591a\u4e8e32\u4f4d\u7684\u5b57\u7b26!"
break
case 1:if(t&&t.length>32)return"[\u54c1\u724c] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u5fc5\u987b\u662f\u4e0d\u591a\u4e8e32\u4f4d\u7684\u5b57\u7b26!"
break
case 2:if(t&&!isPositiveIntegerOrZero(t))return"[\u6570\u91cf] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u5fc5\u987b\u662f\u4e00\u4e2a\u975e\u8d1f\u7684\u6574\u6570!"
break
case 3:if(t&&t.length>256)return"[\u5907\u6ce8] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u5fc5\u987b\u662f\u4e0d\u591a\u4e8e32\u4f4d\u7684\u5b57\u7b26!"}return!0}function create_table_input_type(e,t,n){for(var r=document.createElement("table"),a=document.createElement("tbody"),o=document.createElement("tr"),i=0,s=e.length;s>i;i++){var c=document.createElement("th")
c.appendChild(document.createTextNode(e[i])),c.className=t+i,o.appendChild(c)}a.appendChild(o)
for(var l=0,u=n.length;u>l;l++){var d=document.createElement("tr"),c=document.createElement("td")
c.appendChild(document.createTextNode(l+1)),d.appendChild(c)
for(var f=0,p=s-2;p>f;f++){var c=document.createElement("td"),h=document.createElement("input"),m=void 0===n[l][f]?"":trim(n[l][f])
h.value=m,h.style.width="100%",h.style.border="none"
var g=check_bat_input(f,m)
g!==!0&&(h.title=g,h.style.backgroundColor="yellow"),h.onblur=function(){var e=check_bat_input(this.parentNode.cellIndex-1,this.value)
e===!0?(this.style.backgroundColor="",this.title=""):(this.style.backgroundColor="yellow",this.title="check_res")},c.appendChild(h),d.appendChild(c)}var c=document.createElement("td"),_=document.createElement("button")
_.setAttribute("type","button"),_.appendChild(document.createTextNode("\u5220\u9664")),_.className="btn little btn_area",_.onclick=function(){if(void 0===n)return void window.alert("\u6570\u636e\u7f3a\u5931,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5!")
var r=this.parentNode.parentNode
n.splice(parseInt(r.cells[0].innerHTML)-1,1)
var a=$("pop_body_check"),o=create_table_input_type(e,t,n)
o.id="pop_body_parts_table",o.className="datat",o.rows[0].style.backgroundColor="#c0c0b0",clearElements(a),a.appendChild(o)},c.appendChild(_),d.appendChild(c),a.appendChild(d),addEvent(d,"click",selectToColor(d,"selectOnColor",1)),addEvent(d,"mouseover",mouserOverColor(d,"selectOnColor","mouserOverColor")),addEvent(d,"mouseout",mouserOutColor(d,"selectOnColor","mouserOutColor"))}return r.appendChild(a),r}function select_edit_default_val(e,t){for(var n=e.options,r=0,a=n.length;a>r;r++)n[r].value!==t?n[r].selected="":n[r].selected="selected"}function getInputValue(e){for(var t=e.childNodes,n=0,r=t.length;r>n;n++)if("object"==typeof t[n]&&1===t[n].nodeType&&"INPUT"===t[n].tagName.toUpperCase()&&"TEXT"===t[n].type.toUpperCase())return trim(t[n].value)}function getElementLeft(e){for(var t=e.offsetLeft;e.offsetParent;){var n=e.offsetParent
t+=n.offsetLeft+n.clientLeft,e=e.offsetParent}return t}function getElementTop(e){for(var t=e.offsetTop;e.offsetParent;){var n=e.offsetParent
t+=n.offsetTop+n.clientTop,e=e.offsetParent}return t}function getAjax(){var e=!1
if(window.XMLHttpRequest)e=new XMLHttpRequest,e.overrideMimeType&&e.overrideMimeType("text/xml")
else if(window.ActiveXObject)for(var t=["Microsoft.XMLHTTP","MSXML.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.7.0","Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],n=0;n<t.length;n++)try{if(e=new ActiveXObject(t[n]))return e}catch(r){}return e}function ajaxPost(e,t,n,r,a){return e?(e.onreadystatechange=r,e.open("post",t,a),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),void e.send(n)):void window.alert("\u6d4f\u89c8\u5668\u7248\u672c\u592a\u4f4e,\u6570\u636e\u4f20\u8f93\u5df2\u4e2d\u65ad.\u5efa\u8bae\u6362\u4e00\u4e2a\u9ad8\u7248\u672c\u7684\u6d4f\u89c8\u5668\u540e\u518d\u8bbf\u95ee")}function ajaxGet(e,t,n,r){return e?(e.onreadystatechange=n,e.open("GET",t,r),void e.send(null)):void window.alert("\u6d4f\u89c8\u5668\u7248\u672c\u592a\u4f4e,\u6570\u636e\u4f20\u8f93\u5df2\u4e2d\u65ad.\u5efa\u8bae\u6362\u4e00\u4e2a\u9ad8\u7248\u672c\u7684\u6d4f\u89c8\u5668\u540e\u518d\u8bbf\u95ee")}function change_string_order(e,t){return e.slice(-t)+""+(e.slice(0,-t)+"")}function word_c(e){for(var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n="",r=0;e>r;r++)n+=t.charAt(Math.round(1e3*Math.random())%t.length)+""
return n+""}function random_num(e,t){for(var n=[],r=e;t+1>r;r++)n.push(r)
return n[Math.round(1e3*Math.random())%n.length]}function crystring(e,t,n,r){return change_string_order(e+word_c(Math.round(t/1e3)%n+1),Math.round(t/100)%r+1)}function decrystring(e,t,n,r){var a=Math.round(t/100)%r+1
return(e.slice(a)+""+(e.slice(0,a)+"")).slice(0,-(Math.round(t/1e3)%n+1))}function existInputTextElement(e){for(var t=e.childNodes,n=!1,r=0,a=t.length;a>r;r++)if("object"==typeof t[r]&&1===t[r].nodeType&&"INPUT"===t[r].tagName.toUpperCase()&&"text"===t[r].type){n=!0
break}return n}function existSelectElement(e){for(var t=e.childNodes,n=!1,r=0,a=t.length;a>r;r++)if("object"==typeof t[r]&&1===t[r].nodeType&&"SELECT"===t[r].tagName.toUpperCase()){n=!0
break}return n}function selectOptions(e,t){var n=document.createElement("select"),r=!1
void 0!==e[1]&&e[0].length===e[1].length&&(r=!0)
var a=arguments[2]?arguments[2]:"",o=!1
""!==a&&e[0].length===a.length&&(o=!0)
for(var i=0,s=e[0].length;s>i;i++){var c=document.createElement("option")
r===!0&&(c.title=e[1][i]),o===!0&&(c.value=a[i]),c.appendChild(document.createTextNode(e[0][i])),e[0][i]===t&&(c.selected=!0),n.appendChild(c)}return n.style.width="100%",n.style.height="100%",n}function set_input_checked_available(e,t){for(var n=e.childNodes,r=0,a=n.length;a>r;r++)if("object"==typeof n[r]&&1===n[r].nodeType&&"INPUT"===n[r].tagName.toUpperCase()&&"CHECKBOX"===n[r].type.toUpperCase())return n[r].disabled=t,!0
return!1}function editInputCheckedValue(e,t){for(var n=e.childNodes,r=0,a=n.length;a>r;r++)"object"==typeof n[r]&&1===n[r].nodeType&&"INPUT"===n[r].tagName.toUpperCase()&&"CHECKBOX"===n[r].type.toUpperCase()&&(n[r].checked=t)}function get_element_edit_value(e,t){for(var n=e.childNodes,r=0,a=n.length;a>r;r++){if("object"==typeof n[r]&&1===n[r].nodeType&&"INPUT"===n[r].tagName.toUpperCase()&&"TEXT"===n[r].type.toUpperCase())return n[r].value
if("object"==typeof n[r]&&1===n[r].nodeType&&"SELECT"===n[r].tagName.toUpperCase()){if("text"===t)return n[r].options[n[r].selectedIndex].text
if("value"===t)return n[r].options[n[r].selectedIndex].value}}return null}function decide_week_day(e){var t=new Date(e),n=t.getDay(),r=""
switch(n){case 0:r="\u661f\u671f\u65e5"
break
case 1:r="\u661f\u671f\u4e00"
break
case 2:r="\u661f\u671f\u4e8c"
break
case 3:r="\u661f\u671f\u4e09"
break
case 4:r="\u661f\u671f\u56db"
break
case 5:r="\u661f\u671f\u4e94"
break
case 6:r="\u661f\u671f\u516d"}return r}function decide_date_in_week(e,t){var n=(new Date).getDay(),r=Date.UTC((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())/1e3+60*(new Date).getTimezoneOffset()
if(0===parseInt(t))var a=r-24*(n-1)*3600
else var a=r-24*n*3600
var o=a+691200,i=parseInt(e)
return i>=a&&o>i?new Date(1e3*i).getDay()===n?0:1:-1}function get_today_timestamp(){return Date.UTC((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())+60*(new Date).getTimezoneOffset()*1e3}function formatDate(e){if(parseInt(e)>0){var t=new Date(1e3*parseInt(e))
return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}return e}function formatDateTimeFull(e){if(parseInt(e)>0){var t=new Date(1e3*parseInt(e)),n=t.getHours(),r=10>n?"0"+n:n,a=t.getMinutes(),o=10>a?"0"+a:a,i=t.getSeconds(),s=10>i?"0"+i:i
return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+r+":"+o+":"+s}return e}function formatDateToPHPTimeStamp(e){var t=RegExp("\\-","gi")
return parseInt(new Date(e.replace(t,"/")).getTime())/1e3}function getphptimestampforjs(){return Math.ceil((new Date).getTime()/1e3)}function create_select_style_datetime(e,t,n){var r=arguments[2]?new Date(1e3*parseInt(n)):new Date,a=function(){this.style.display="none",this.nextSibling.style.display="",this.nextSibling.selectedIndex=-1},o=function(){var e=this,t=e.options[e.selectedIndex].text
e.previousSibling.innerHTML=t,e.style.display="none",e.previousSibling.style.display=""},i=parseInt(r.getFullYear()),s=document.createElement("span")
s.title="\u70b9\u51fb\u4fee\u6539",s.innerHTML=i,s.onclick=a
var c=document.createElement("select")
c.style.display="none"
for(var l=i-10,u=l+20;u>l;l++){var d=document.createElement("option")
d.innerHTML=l,i===l&&(d.selected=!0),c.appendChild(d)}c.onchange=o
var f=parseInt(r.getMonth())+1,p=document.createElement("span")
p.title="\u70b9\u51fb\u4fee\u6539",p.innerHTML=f,p.onclick=a
var h=document.createElement("select")
h.style.display="none"
for(var m=1,g=12;g>=m;m++){var _=document.createElement("option")
_.innerHTML=m,f===m&&(_.selected=!0),h.appendChild(_)}h.onchange=o
var v=parseInt(r.getDate()),y=document.createElement("span")
y.title="\u70b9\u51fb\u4fee\u6539",y.innerHTML=v,y.onclick=a
var b=document.createElement("select")
b.style.display="none"
for(var C=1,T=31;T>=C;C++){var x=document.createElement("option")
x.innerHTML=C,v===C&&(x.selected=!0),b.appendChild(x)}b.onchange=o
var w=parseInt(r.getHours()),N=document.createElement("span")
N.title="\u70b9\u51fb\u4fee\u6539",N.innerHTML=w,N.onclick=a
for(var k=document.createElement("select"),E=0,S=23;S>=E;E++){var A=document.createElement("option")
A.innerHTML=E,w===E&&(A.selected=!0),k.appendChild(A)}k.selectedIndex=-1,k.onchange=o
var M=parseInt(r.getMinutes()),j=document.createElement("span")
j.title="\u70b9\u51fb\u4fee\u6539",j.innerHTML=M,j.onclick=a
for(var I=document.createElement("select"),D=0,O=59;O>=D;D++){var L=document.createElement("option")
L.innerHTML=D,I.appendChild(L)}if(I.selectedIndex=-1,I.onchange=o,"edit"===t||"create"===t?(N.style.display="none",j.style.display="none",k.style.display="",I.style.display=""):(N.style.display="",j.style.display="",k.style.display="none",I.style.display="none"),"create"===t){var H=$("mynote_todo_new_area"),P=function(){$("mynote_todo_new_show").style.display="",H.onmouseout="",H.onmouseover=function(){var e=this.id.split("_")
e.pop()
var t=e.join("_"),n=$(t+"_input")
n.style.backgroundColor="white"
var r=n.value,a=$(t+"_input_clear"),o=$(t+"_show")
return""===r?(a.style.display="none",void(o.style.display="none")):(a.style.display="",o.style.display="",$(t+"_show_text").innerHTML=convert_url_in_string(htmlspecialchars_js(r,"y"),"y"),void(this.onmouseout=onmouseout_mynote_new("#f8ee52")))}}
c.onclick=P,h.onclick=P,b.onclick=P,k.onclick=P,I.onclick=P}e.appendChild(s),e.appendChild(c),e.appendChild(document.createTextNode("\u5e74")),e.appendChild(p),e.appendChild(h),e.appendChild(document.createTextNode("\u6708")),e.appendChild(y),e.appendChild(b),e.appendChild(document.createTextNode("\u65e5 ")),e.appendChild(N),e.appendChild(k),e.appendChild(document.createTextNode("\u70b9")),e.appendChild(j),e.appendChild(I),e.appendChild(document.createTextNode("\u5206"))}function get_select_style_datetime(e){for(var t=e.getElementsByTagName("span"),n=[],r=0,a=t.length;a>r;r++){if("none"===t[r].style.display)return"warning_input"
n.push(t[r].innerHTML)}return parseInt(Date.UTC(n[0],parseInt(n[1])-1,n[2],n[3],n[4]))/1e3+60*(new Date).getTimezoneOffset()}function isPositiveIntegerOrZero(e){var t=/^(0|[1-9]\d*)$/
return t.test(e)}function isPositiveInteger(e){var t=/^[1-9]\d*$/
return t.test(e)}function isNonnegative(e){if(""===e)return!1
var t=/^(0|[1-9]\d*)(\.\d+)?$/
return t.test(e)}function add_click_fun(e,t,n){for(var r=e.childNodes,a=0,o=r.length;o>a;a++)"object"==typeof r[a]&&1===r[a].nodeType&&r[a].tagName.toUpperCase()===t.toUpperCase()&&(r[a].onclick=n)}function add_mouseover_fun(e,t,n){for(var r=e.childNodes,a=0,o=r.length;o>a;a++)"object"==typeof r[a]&&1===r[a].nodeType&&r[a].tagName.toUpperCase()===t.toUpperCase()&&(r[a].onmouseover=n)}function add_mouseout_fun(e,t,n){for(var r=e.childNodes,a=0,o=r.length;o>a;a++)"object"==typeof r[a]&&1===r[a].nodeType&&r[a].tagName.toUpperCase()===t.toUpperCase()&&(r[a].onmouseout=n)}function cache_data_localtion_or_cookie(e,t){if(window.localStorage){var n=window.localStorage
n.setItem(e,t)}else{var r=(new Date).getTime(),a=getAjax(),o="/ajax/link_a.php?tx="+r,i="type="+e+"&v="+encodeURIComponent(t)+"&lcache="+word_c(r%32)
ajaxPost(a,o,i,function(){return function(){}}(),!0)}}function add_search_history_by_user(e,t,n){add_only_string_to_array(e,t,n),cache_data_localtion_or_cookie("search_history_cache",JSON.stringify(t))}function add_only_string_to_array(e,t,n){for(var r=t.length,a=r-1;a>=0;a--)if(e===t[a]){t.splice(a,1)
break}t.unshift(e),t.length>n&&t.pop()}function get_firstchild_by_element(e,t){for(var n=e.childNodes,r=0,a=n.length;a>r;r++)if("object"==typeof n[r]&&1===n[r].nodeType&&n[r].tagName.toUpperCase()===t.toUpperCase())return n[r]}function sortByTableHeader(e,t,n,r){switch(n){case 0:0==r&&e.sort(function(e,n){return e[t]-n[t]}),1==r&&e.sort(function(e,n){return n[t]-e[t]})
break
case 1:0==r&&e.sort(function(e,n){return e[t].localeCompare(n[t])}),1==r&&e.sort(function(e,n){return n[t].localeCompare(e[t])})
break
case 2:0==r&&e.sort(function(e,n){return formatDateToPHPTimeStamp(e[t])-formatDateToPHPTimeStamp(n[t])}),1==r&&e.sort(function(e,n){return formatDateToPHPTimeStamp(n[t])-formatDateToPHPTimeStamp(e[t])})
break
case 3:0==r&&e.sort(function(e,n){var r=parseFloat(e[t]),a=parseFloat(n[t])
return r||(r=0),a||(a=0),r-a}),1==r&&e.sort(function(e,n){var r=parseFloat(e[t]),a=parseFloat(n[t])
return r||(r=0),a||(a=0),a-r})}}function addEvent(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener?e.addEventListener(t,n,!1):window.alert("\u4e0d\u652f\u6301\u8be5\u6d4f\u89c8\u5668")}function selectToColor_n(e,t,n){for(var r,a=e.parentNode.parentNode,o=n,i=a.rows.length;i>o;o++)if(a.rows[o].className===t){a.rows[o].className="",r=a.rows[o]
break}e!==r&&(e.className=t)}function selectToColor(e,t,n){return function(){selectToColor_n(e,t,n)}}function selectToColorHold_n(e,t,n){for(var r=e.parentNode.parentNode,a=n,o=r.rows.length;o>a;a++)if(r.rows[a].className===t){r.rows[a].className=""
break}e.className=t}function selectToColorHold(e,t,n){return function(){selectToColorHold_n(e,t,n)}}function mouserOverColor(e,t,n){return function(){mouserOverColor_n(e,t,n)}}function mouserOverColor_n(e,t,n){e.className!==t&&(e.className=n)}function mouserOutColor(e,t,n){return function(){mouserOutColor_n(e,t,n)}}function mouserOutColor_n(e,t,n){e.className!==t&&(e.className=n)}function arr_count(e){var t=0
for(var n in e)t++
return t}function validity_check_demand(e){var t=""
return(""===e[0]||e[0].length>=32||e[0].length<4)&&(t+="[\u578b\u53f7] \u5fc5\u987b\u662f\u4e00\u4e2a\u5927\u4e8e3\u4e14\u4e0d\u591a\u4e8e32\u4f4d\u7684\u5b57\u7b26!\n"),e[1]&&e[1].length>32&&(t+="[\u54c1\u724c] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u5fc5\u987b\u662f\u4e0d\u591a\u4e8e32\u4f4d\u7684\u5b57\u7b26!\n"),e[2]?isPositiveIntegerOrZero(e[2])||(t+="[\u6570\u91cf] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u5fc5\u987b\u662f\u4e00\u4e2a\u975e\u8d1f\u7684\u6574\u6570!\n"):e[2]=0,e[3]&&e[3].length>256&&(t+="[\u5907\u6ce8] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u5fc5\u987b\u662f\u4e0d\u591a\u4e8e32\u4f4d\u7684\u5b57\u7b26!\n"),t}function validity_check_note(e){var t=""
return"\u5907\u5fd8"!==e[0]&&"\u5f85\u529e\u4e8b"!==e[0]&&(t+="[\u7c7b\u578b] \u5fc5\u987b\u4e3a\u5fc5\u9009\u9879!\n"),(""===e[1]||e[1].length>256)&&(t+="[\u5185\u5bb9] \u4e3a\u5fc5\u586b\u9879;\u4e14\u4e0d\u80fd\u591a\u4e8e256\u4e2a\u5b57\u7b26!\n"),isPositiveInteger(e[2])||(t+="\u53ea\u80fd\u9009\u62e9\u4e00\u4e2a\u9700\u6c42\u540e\u624d\u80fd\u63d0\u4ea4.\u5982\u95ee\u9898\u4f9d\u65e7,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5!\n"),t}function validity_check_quote(e){for(var t=["\u4f9b\u5e94\u5546\u7c7b\u578b","\u6765\u6e90","\u578b\u53f7","\u54c1\u724c","\u6570\u91cf","\u6279\u53f7","\u7269\u6599\u5907\u6ce8","\u62a5\u4ef7","\u5e01\u522b","\u4ea4\u8d27\u5730","\u4ea4\u671f","\u62a5\u4ef7\u5907\u6ce8","\u516c\u53f8","\u8054\u7cfb\u4eba","\u7535\u8bdd","IM","\u90ae\u7bb1","\u4f9b\u5e94\u5546\u5907\u6ce8"],n="",r=0,a=e.length;a>r;r++)r>1&&17>r&&4!==r&&6!==r&&7!==r&&8!==r&&11!==r&&12!==r&&e[r].length>32&&(n+="["+t[r]+"] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u4e0d\u80fd\u8d85\u8fc732\u4e2a\u5b57\u7b26!\n"),(6===r||11===r||17===r)&&e[r].length>128&&(n+="["+t[r]+"] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u4e0d\u80fd\u8d85\u8fc7128\u4e2a\u5b57\u7b26!\n"),0===r&&e[0].length>8&&(n+="[\u4f9b\u5e94\u5546\u7c7b\u578b] \u4e0d\u80fd\u8d85\u8fc78\u4e2a\u5b57\u7b26!\n"),1===r&&e[1].length>16&&(n+="[\u6765\u6e90] \u4e0d\u80fd\u8d85\u8fc716\u4e2a\u5b57\u7b26!\n"),2===r&&e[2].length<4&&(n+="[\u578b\u53f7] \u81f3\u5c11\u67094\u4e2a\u5b57\u7b26!\n"),4===r&&(e[4]?isPositiveIntegerOrZero(e[4])||(n+="[\u6570\u91cf] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u5fc5\u987b\u662f\u4e00\u4e2a\u975e\u8d1f\u7684\u6574\u6570!\n"):e[4]=0),7===r&&(e[7]?isNonnegative(e[7])||(n+="[\u62a5\u4ef7] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u5fc5\u987b\u662f\u4e00\u4e2a\u975e\u8d1f\u6570!\n"):e[7]=0),8===r&&e[8].length>3&&(n+="[\u5e01\u522b] \u4e0d\u80fd\u8d85\u8fc73\u4e2a\u5b57\u7b26!\n"),12===r&&e[12].length>64&&(n+="[\u5e01\u522b] \u53ef\u4ee5\u4e0d\u586b;\u5982\u679c\u586b\u5199,\u4e0d\u80fd\u8d85\u8fc764\u4e2a\u5b57\u7b26!\n"),16===r&&e[16]&&!checkEmail(e[16])&&(n+="[\u90ae\u7bb1] \u53ef\u4ee5\u4e0d\u586b;\n\n\u5982\u679c\u586b\u5199,\u5fc5\u987b\u5982abc@163.com\u683c\u5f0f,\u4e14\u4e0d\u80fd\u8d85\u8fc764\u4e2a\u5b57\u7b26!\n\n\u5f53\u4f60\u70b9\u51fb\u90ae\u4ef6\u5730\u5740\u65f6,\u53ef\u4ee5\u66f4\u4fbf\u6377\u5730\u8c03\u7528\u672c\u5730email\u5ba2\u6237\u7aef\u76f4\u63a5\u53d1\u9001\u90ae\u4ef6!\n")
return n}function check_chinese_in_string_length(e){var t=/[\u4e00-\u9fa5]/g,n=e.match(t)
return null===n?0:e.match(t).length}function td_fixed_width(e,t,n,r){var a=t.length,o=check_chinese_in_string_length(t),i=Math.floor(n/r)
if(a+o>i){e.title=t
var s=document.createElement("span")
if(s.style.fontFamily="arial",s.appendChild(document.createTextNode("...")),0===o)e.appendChild(document.createTextNode(t.slice(0,28)))
else{var c=Math.floor(i/2)-1
if(a-2*o>0){var l=i-2-2*o
l>c&&(c=now_len)}e.appendChild(document.createTextNode(t.slice(0,c)))}e.appendChild(s)}else e.appendChild(document.createTextNode(t))}function checkEmail(e){var t=/^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/
return t.test(e)?!0:!1}function check_network_protocol(e){var t=/^\w{3,10}\:\/\/.+$/
if(t.test(e))return!0
var n=/^magnet\:.+/
return n.test(e)?!0:!1}function element_display_disable(e,t){for(var n=e.childNodes,r=0,a=n.length;a>r;r++)"object"==typeof n[r]&&1===n[r].nodeType&&n[r].tagName.toUpperCase()===t.toUpperCase()&&(n[r].style.display="none")}function getScrollBarWidth(){var e=document.createElement("div")
return e.style.cssText="overflow:scroll;width:100px;height:100px;",document.body.appendChild(e),e&&(__scrollBarWidth={horizontal:e.offsetHeight-e.clientHeight,vertical:e.offsetWidth-e.clientWidth}),document.body.removeChild(e),__scrollBarWidth}function bdsug_location_data_clear(e){if(window.localStorage){var t=window.localStorage
if(void 0!==t.bd_sug_cache_time)if(void 0===t.bd_sug_cache)t.removeItem("bd_sug_cache_time")
else{var n=JSON.parse(t.bd_sug_cache_time),r=JSON.parse(t.bd_sug_cache),a=(new Date).getTime()
for(var o in n)a-parseInt(n[o])>24*e*60*60*1e3&&void 0!==r[o]&&(delete r[o],delete n[o])}else void 0!==t.bd_sug_cache&&t.removeItem("bd_sug_cache")}}function getIconByApi(e,t,n){var r=n+t,a=new Image
a.src=r,a.onload=function(){e.style.visibility="",e.src=r,e.parentNode.style.backgroundImage="",e.parentNode.style.backgroundPosition=""},a.onerror=function(){a&&(a=null),e.style.visibility="hidden",e.parentNode.style.backgroundImage="url(../img/comm.png)",e.parentNode.style.backgroundPosition="0px -96px"}}function get_icon_by_link(e,t){var n=e.split("://")
if("http"===n[0].toLowerCase()||"https"===n[0].toLowerCase()){n[0]="http"
var r=n[1].split("/")[0]
t.style.visibility="hidden",t.parentNode.style.backgroundImage="url(../img/comm.png)",t.parentNode.style.backgroundPosition="0px -96px"
var a=new Image,o=/^([A-z]|[0-9]|:|-|\.)+$/
if(!o.test(r))return
var i=n[0]+"://"+r+"/favicon.ico"
a.src=i,a.onload=function(){t.style.visibility="",t.src=i,t.parentNode.style.backgroundImage="",t.parentNode.style.backgroundPosition=""},a.onerror=function(){a&&(a=null),getIconByApi(t,r,"http://www.google.cn/s2/favicons?domain=")}}else"thunder"===n[0].toLowerCase()?(t.style.visibility="hidden",t.parentNode.style.backgroundImage="url(../img/comm.png)",t.parentNode.style.backgroundPosition="-48px -96px"):"qqdl"===n[0].toLowerCase()?(t.style.visibility="hidden",t.parentNode.style.backgroundImage="url(../img/comm.png)",t.parentNode.style.backgroundPosition="-64px -96px"):"ed2k"===n[0].toLowerCase()?(t.style.visibility="hidden",t.parentNode.style.backgroundImage="url(../img/comm.png)",t.parentNode.style.backgroundPosition="-80px -96px"):(t.style.visibility="hidden",t.parentNode.style.backgroundImage="url(../img/comm.png)",t.parentNode.style.backgroundPosition="-32px -96px")}function get_stylesheet_by_title(e){for(var t=document.styleSheets,n=0,r=t.length;r>n;n++)if(t[n].title===e)return t[n]}function clear_stylesheet(e){for(var t=e.cssRules||e.rules,n=t.length,r=n-1;r>=0;r--)"deleteRule"in e?e.deleteRule(r):"removeRule"in e&&e.removeRule(r)}function add_css_rule(e,t,n,r){"insertRule"in e?e.insertRule(t+"{"+n+"}",r):"addRule"in e&&e.addRule(t,n,r)}function del_css_rule(e,t){for(var n=e.cssRules||e.rules,r=n.length,a=r-1;a>=0;a--)if(n[a].selectorText===t){"deleteRule"in e?e.deleteRule(a):"removeRule"in e&&e.removeRule(a)
break}}function edit_css_rule(e,t,n){for(var r=e.cssRules||e.rules,a="",o=r.length,i=o-1;i>=0;i--)if(r[i].selectorText===t){a=i
break}return""===a?null:"deleteRule"in e?(e.deleteRule(a),!0):"removeRule"in e?(e.removeRule(a),!0):"insertRule"in e?(e.insertRule(t+"{"+n+"}",a),!0):"addRule"in e?(e.addRule(t,n,a),!0):!1}function edit_css_rule_child(e,t,n,r){for(var a=e.cssRules||e.rules,o=a.length,i=o-1;i>=0;i--)if(a[i].selectorText===t)return a[i].style[n]=r,!0
return!1}function clickripplestyle(e){var t=void 0!==arguments[1]?arguments[1]:750,n=function(n){!function(e,t,n){var r=function(e){var t=""
for(var n in e)e.hasOwnProperty(n)&&(t+=n+":"+e[n]+";")
return t},a=function(e){var t={top:0,left:0},n=document.documentElement
return void 0!==e.getBoundingClientRect&&(t=e.getBoundingClientRect()),{top:t.top+window.pageYOffset-n.clientTop,left:t.left+window.pageXOffset-n.clientLeft}},n=n,o=t,i=document.createElement("div")
o.appendChild(i)
var s=a(o),c=e.pageY-s.top,l=e.pageX-s.left,u="scale("+o.clientWidth/100*10+")",d={top:c+"px",left:l+"px"}
i.className=i.className+" waves-animation",i.setAttribute("style",r(d)),d["-webkit-transform"]=u,d["-moz-transform"]=u,d["-ms-transform"]=u,d["-o-transform"]=u,d.transform=u,d.opacity="1",d["-webkit-transition-duration"]=n+"ms",d["-moz-transition-duration"]=n+"ms",d["-o-transition-duration"]=n+"ms",d["transition-duration"]=n+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",i.setAttribute("style",r(d))
var f={opacity:0,"-webkit-transition-duration":n+"ms","-moz-transition-duration":n+"ms","-o-transition-duration":n+"ms","transition-duration":n+"ms","-webkit-transform":u,"-moz-transform":u,"-ms-transform":u,"-o-transform":u,top:c+"px",left:l+"px"}
setTimeout(function(){i.setAttribute("style",r(f)),setTimeout(function(){o.removeChild(i)},n)},100)}(n,e,t)}
e.attachEvent?e.attachEvent("onclick",n):e.addEventListener&&e.addEventListener("click",n,!1)}function load_js_exe(e,t,n,r){if(!e||0===e.length)throw Error('argument "path" is required !')
if(2!=t)for(var a=document.getElementsByTagName("script"),o=a.length,i=o-1;i>=0;i--)if(a[i].href===e){if(0==t)return
1==t&&a[i].parentNode.removeChild(a[i])}var s=document.createElement("script")
return s.setAttribute("type","text/javascript"),s.setAttribute("src",e),""!==n&&s.setAttribute("charset",n),document.body.appendChild(s),r&&(window.ActiveXObject?s.onreadystatechange=function(){("loaded"===this.readyState||4==this.readyState||"complete"===this.readyState)&&r()}:s.onload=function(){r()}),s}function del_js_path_code(e){for(var t=document.getElementsByTagName("script"),n=t.length,r=n-1;r>=0;r--){var a=RegExp(e,"i")
a.test(t[r].src)&&t[r].parentNode.removeChild(t[r])}}function base64encode(e){var t,n,r,a,o,i,e=utf16to8(e)
for(r=e.length,n=0,t="";r>n;){if(a=255&e.charCodeAt(n++),n==r){t+=base64EncodeChars.charAt(a>>2),t+=base64EncodeChars.charAt((3&a)<<4),t+="=="
break}if(o=e.charCodeAt(n++),n==r){t+=base64EncodeChars.charAt(a>>2),t+=base64EncodeChars.charAt((3&a)<<4|(240&o)>>4),t+=base64EncodeChars.charAt((15&o)<<2),t+="="
break}i=e.charCodeAt(n++),t+=base64EncodeChars.charAt(a>>2),t+=base64EncodeChars.charAt((3&a)<<4|(240&o)>>4),t+=base64EncodeChars.charAt((15&o)<<2|(192&i)>>6),t+=base64EncodeChars.charAt(63&i)}return t}function base64decode(e){var t,n,r,a,o,i,s
for(i=e.length,o=0,s="";i>o;){do t=base64DecodeChars[255&e.charCodeAt(o++)]
while(i>o&&-1==t)
if(-1==t)break
do n=base64DecodeChars[255&e.charCodeAt(o++)]
while(i>o&&-1==n)
if(-1==n)break
s+=String.fromCharCode(t<<2|(48&n)>>4)
do{if(r=255&e.charCodeAt(o++),61==r)return s
r=base64DecodeChars[r]}while(i>o&&-1==r)
if(-1==r)break
s+=String.fromCharCode((15&n)<<4|(60&r)>>2)
do{if(a=255&e.charCodeAt(o++),61==a)return s
a=base64DecodeChars[a]}while(i>o&&-1==a)
if(-1==a)break
s+=String.fromCharCode((3&r)<<6|a)}return utf8to16(s)}function utf16to8(e){var t,n,r,a
for(t="",r=e.length,n=0;r>n;n++)a=e.charCodeAt(n),a>=1&&127>=a?t+=e.charAt(n):a>2047?(t+=String.fromCharCode(224|a>>12&15),t+=String.fromCharCode(128|a>>6&63),t+=String.fromCharCode(128|a>>0&63)):(t+=String.fromCharCode(192|a>>6&31),t+=String.fromCharCode(128|a>>0&63))
return t}function utf8to16(e){var t,n,r,a,o,i
for(t="",r=e.length,n=0;r>n;)switch(a=e.charCodeAt(n++),a>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t+=e.charAt(n-1)
break
case 12:case 13:o=e.charCodeAt(n++),t+=String.fromCharCode((31&a)<<6|63&o)
break
case 14:o=e.charCodeAt(n++),i=e.charCodeAt(n++),t+=String.fromCharCode((15&a)<<12|(63&o)<<6|(63&i)<<0)}return t}function ProvCityCountySelect(e,t,n){function r(e){t.innerHTML=""
var r=document.createElement("option")
r.value=-1,r.innerHTML="\u5e02",t.appendChild(r)
for(var a in e){var r=document.createElement("option")
r.value=e[a][0],r.innerHTML=e[a][1],t.appendChild(r)}n.innerHTML='<option value="-1">\u53bf\u7ea7\u5e02\u3001\u53bf\u3001\u533a</option>'}function a(e){n.innerHTML=""
var t=document.createElement("option")
t.value=-1,t.innerHTML="\u53bf\u7ea7\u5e02\u3001\u53bf\u3001\u533a",n.appendChild(t)
for(var r in e){var t=document.createElement("option")
t.value=e[r][0],t.innerHTML=e[r][1],n.appendChild(t)}}function o(e,t,n){return function(){if(e&&4==e.readyState&&200==e.status){var o=e.responseText.replace(/\r\n/g,""),i=JSON.parse(o)
if("ok"===i.status){if("city"===t){var s=i.msg
r(s),"undefined"==typeof xlj_city_cache&&(xlj_city_cache={}),xlj_city_cache[n]=s}else if("county"===t){var c=i.msg
a(c),"undefined"==typeof xlj_county_cache&&(xlj_county_cache={}),xlj_county_cache[n]=c}}else"err"===i.status?i.code>=1e3&&i.code<1e4?window.alert("\u7cfb\u7edf\u6267\u884c\u65f6\u51fa\u9519,\u8bf7\u91cd\u8bd5!"):i.code>=1e4&&window.alert("\u83b7\u53d6\u6570\u636e\u51fa\u9519,\u8bf7\u91cd\u8bd5!"):window.alert("\u672a\u77e5\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5!")}}}function i(e,t){if("city"===e&&"undefined"!=typeof xlj_city_cache){if(void 0!==xlj_city_cache[t])return void r(xlj_city_cache[t])}else if("county"===e&&"undefined"!=typeof xlj_county_cache&&void 0!==xlj_county_cache[t])return void a(xlj_county_cache[t])
var n=(new Date).getTime(),i=getAjax(),s="/ajax/city_a.php?tx="+n,c="type="+e+"&pid="+t+"&ruby="+word_c(n%32)
ajaxPost(i,s,c,o(i,e,t),!0)}var s=[]
s[1]="\u5317\u4eac",s[2]="\u4e0a\u6d77",s[3]="\u5929\u6d25",s[4]="\u91cd\u5e86",s[50]="\u9ed1\u9f99\u6c5f",s[60]="\u5409\u6797",s[70]="\u8fbd\u5b81",s[80]="\u5185\u8499\u53e4",s[90]="\u6cb3\u5317",s[100]="\u5c71\u897f",s[110]="\u9655\u897f",s[120]="\u5c71\u4e1c",s[130]="\u65b0\u7586",s[140]="\u897f\u85cf",s[150]="\u9752\u6d77",s[160]="\u7518\u8083",s[170]="\u5b81\u590f",s[180]="\u6cb3\u5357",s[190]="\u6c5f\u82cf",s[200]="\u6e56\u5317",s[210]="\u6d59\u6c5f",s[220]="\u5b89\u5fbd",s[230]="\u798f\u5efa",s[240]="\u6c5f\u897f",s[250]="\u6e56\u5357",s[260]="\u8d35\u5dde",s[270]="\u56db\u5ddd",s[280]="\u5e7f\u4e1c",s[290]="\u4e91\u5357",s[300]="\u5e7f\u897f",s[310]="\u6d77\u5357",s[320]="\u9999\u6e2f",s[330]="\u6fb3\u95e8",s[340]="\u53f0\u6e7e",e.innerHTML=""
var c=document.createElement("option")
c.value=-1,c.innerHTML="\u7701\u3001\u76f4\u8f96\u5e02",e.appendChild(c)
for(var l in s){var c=document.createElement("option")
c.value=l,c.innerHTML=s[l],e.appendChild(c)}t.innerHTML='<option value="-1">\u5e02</option>',n.innerHTML='<option value="-1">\u53bf\u7ea7\u5e02\u3001\u53bf\u3001\u533a</option>',e.onchange=function(){var t=e.options[e.selectedIndex].value;-1!=t&&i("city",t)},t.onchange=function(){var n=e.options[e.selectedIndex].value
if(-1!=n){var r=t.options[t.selectedIndex].value;-1!=r&&i("county",r)}}}function hex_sha256(e){return rstr2hex(rstr_sha256(str2rstr_utf8(e)))}function b64_sha256(e){return rstr2b64(rstr_sha256(str2rstr_utf8(e)))}function any_sha256(e,t){return rstr2any(rstr_sha256(str2rstr_utf8(e)),t)}function hex_hmac_sha256(e,t){return rstr2hex(rstr_hmac_sha256(str2rstr_utf8(e),str2rstr_utf8(t)))}function b64_hmac_sha256(e,t){return rstr2b64(rstr_hmac_sha256(str2rstr_utf8(e),str2rstr_utf8(t)))}function any_hmac_sha256(e,t,n){return rstr2any(rstr_hmac_sha256(str2rstr_utf8(e),str2rstr_utf8(t)),n)}function sha256_vm_test(){return"ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"==hex_sha256("abc").toLowerCase()}function rstr_sha256(e){return binb2rstr(binb_sha256(rstr2binb(e),8*e.length))}function rstr_hmac_sha256(e,t){var n=rstr2binb(e)
n.length>16&&(n=binb_sha256(n,8*e.length))
for(var r=Array(16),a=Array(16),o=0;16>o;o++)r[o]=909522486^n[o],a[o]=1549556828^n[o]
var i=binb_sha256(r.concat(rstr2binb(t)),512+8*t.length)
return binb2rstr(binb_sha256(a.concat(i),768))}function rstr2hex(e){try{}catch(t){hexcase=0}for(var n,r=hexcase?"0123456789ABCDEF":"0123456789abcdef",a="",o=0;o<e.length;o++)n=e.charCodeAt(o),a+=r.charAt(n>>>4&15)+r.charAt(15&n)
return a}function rstr2b64(e){try{}catch(t){b64pad=""}for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="",a=e.length,o=0;a>o;o+=3)for(var i=e.charCodeAt(o)<<16|(a>o+1?e.charCodeAt(o+1)<<8:0)|(a>o+2?e.charCodeAt(o+2):0),s=0;4>s;s++)r+=8*o+6*s>8*e.length?b64pad:n.charAt(i>>>6*(3-s)&63)
return r}function rstr2any(e,t){var n,r,a,o,i=t.length,s=[],c=Array(Math.ceil(e.length/2))
for(n=0;n<c.length;n++)c[n]=e.charCodeAt(2*n)<<8|e.charCodeAt(2*n+1)
for(;c.length>0;){for(o=[],a=0,n=0;n<c.length;n++)a=(a<<16)+c[n],r=Math.floor(a/i),a-=r*i,(o.length>0||r>0)&&(o[o.length]=r)
s[s.length]=a,c=o}var l=""
for(n=s.length-1;n>=0;n--)l+=t.charAt(s[n])
var u=Math.ceil(8*e.length/(Math.log(t.length)/Math.log(2)))
for(n=l.length;u>n;n++)l=t[0]+l
return l}function str2rstr_utf8(e){for(var t,n,r="",a=-1;++a<e.length;)t=e.charCodeAt(a),n=a+1<e.length?e.charCodeAt(a+1):0,t>=55296&&56319>=t&&n>=56320&&57343>=n&&(t=65536+((1023&t)<<10)+(1023&n),a++),127>=t?r+=String.fromCharCode(t):2047>=t?r+=String.fromCharCode(192|t>>>6&31,128|63&t):65535>=t?r+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):2097151>=t&&(r+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t))
return r}function str2rstr_utf16le(e){for(var t="",n=0;n<e.length;n++)t+=String.fromCharCode(255&e.charCodeAt(n),e.charCodeAt(n)>>>8&255)
return t}function str2rstr_utf16be(e){for(var t="",n=0;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)>>>8&255,255&e.charCodeAt(n))
return t}function rstr2binb(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0
for(var n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<24-n%32
return t}function binb2rstr(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>24-n%32&255)
return t}function sha256_S(e,t){return e>>>t|e<<32-t}function sha256_R(e,t){return e>>>t}function sha256_Ch(e,t,n){return e&t^~e&n}function sha256_Maj(e,t,n){return e&t^e&n^t&n}function sha256_Sigma0256(e){return sha256_S(e,2)^sha256_S(e,13)^sha256_S(e,22)}function sha256_Sigma1256(e){return sha256_S(e,6)^sha256_S(e,11)^sha256_S(e,25)}function sha256_Gamma0256(e){return sha256_S(e,7)^sha256_S(e,18)^sha256_R(e,3)}function sha256_Gamma1256(e){return sha256_S(e,17)^sha256_S(e,19)^sha256_R(e,10)}function sha256_Sigma0512(e){return sha256_S(e,28)^sha256_S(e,34)^sha256_S(e,39)}function sha256_Sigma1512(e){return sha256_S(e,14)^sha256_S(e,18)^sha256_S(e,41)}function sha256_Gamma0512(e){return sha256_S(e,1)^sha256_S(e,8)^sha256_R(e,7)}function sha256_Gamma1512(e){return sha256_S(e,19)^sha256_S(e,61)^sha256_R(e,6)}function binb_sha256(e,t){var n,r,a,o,i,s,c,l,u,d,f,p,h=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],m=Array(64)
for(e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t,u=0;u<e.length;u+=16){for(n=h[0],r=h[1],a=h[2],o=h[3],i=h[4],s=h[5],c=h[6],l=h[7],d=0;64>d;d++)16>d?m[d]=e[d+u]:m[d]=safe_add(safe_add(safe_add(sha256_Gamma1256(m[d-2]),m[d-7]),sha256_Gamma0256(m[d-15])),m[d-16]),f=safe_add(safe_add(safe_add(safe_add(l,sha256_Sigma1256(i)),sha256_Ch(i,s,c)),sha256_K[d]),m[d]),p=safe_add(sha256_Sigma0256(n),sha256_Maj(n,r,a)),l=c,c=s,s=i,i=safe_add(o,f),o=a,a=r,r=n,n=safe_add(f,p)
h[0]=safe_add(n,h[0]),h[1]=safe_add(r,h[1]),h[2]=safe_add(a,h[2]),h[3]=safe_add(o,h[3]),h[4]=safe_add(i,h[4]),h[5]=safe_add(s,h[5]),h[6]=safe_add(c,h[6]),h[7]=safe_add(l,h[7])}return h}function safe_add(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16)
return r<<16|65535&n}var dynamicLoading={css:function(e){if(!e||0===e.length)throw Error('argument "path" is required !')
for(var t=document.getElementsByTagName("link"),n=0,r=t.length;r>n;n++)if("object"==typeof t[n]&&1===t[n].nodeType&&"LINK"===t[n].tagName.toUpperCase()&&t[n].href===e)return
var a=document.getElementsByTagName("head")[0],o=document.createElement("link")
return o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",e),a.appendChild(o),o},js:function(e){if(!e||0===e.length)throw Error('argument "path" is required !')
for(var t=document.getElementsByTagName("script"),n=0,r=t.length;r>n;n++)if("object"==typeof t[n]&&1===t[n].nodeType&&"LINK"===t[n].tagName.toUpperCase()&&t[n].href===e)return
var a=document.getElementsByTagName("head")[0],o=document.createElement("script")
return o.setAttribute("type","text/javascript"),o.setAttribute("defer",!0),o.setAttribute("src",e),a.appendChild(o),o}},base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64DecodeChars=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1]
"object"!=typeof JSON&&(JSON={}),function(){"use strict"
function f(e){return 10>e?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e]
return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,a,o,i,s=gap,c=t[e]
switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),typeof c){case"string":return quote(c)
case"number":return isFinite(c)?c+"":"null"
case"boolean":case"null":return c+""
case"object":if(!c)return"null"
if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(c)){for(o=c.length,n=0;o>n;n+=1)i[n]=str(n,c)||"null"
return a=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+s+"]":"["+i.join(",")+"]",gap=s,a}if(rep&&"object"==typeof rep)for(o=rep.length,n=0;o>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],a=str(r,c),a&&i.push(quote(r)+(gap?": ":":")+a))
else for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(a=str(r,c),a&&i.push(quote(r)+(gap?": ":":")+a))
return a=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+s+"}":"{"+i.join(",")+"}",gap=s,a}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value)
var cx,escapable,gap,indent,meta,rep
"function"!=typeof JSON.stringify&&(escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r
if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" "
else"string"==typeof n&&(indent=n)
if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw Error("JSON.stringify")
return str("",{"":e})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(e,t){var n,r,a=e[t]
if(a&&"object"==typeof a)for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(r=walk(a,n),void 0!==r?a[n]=r:delete a[n])
return reviver.call(e,t,a)}var j
if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j
throw new SyntaxError("JSON.parse")})}()
var hexcase=0,b64pad="",sha256_K=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998]
