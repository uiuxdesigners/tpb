var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=cookies[i];var eqPos=cookie.indexOf("=");var name=eqPos>-1?cookie.substr(0,eqPos):cookie;document.cookie=name+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";}
var server='https://mercury.apibay.gq';var static_server='https://torrindex.net';function jswarnclear(){document.getElementById("jscrwarn").innerHTML='';document.getElementById("jscrwarn2").innerHTML='';}
function Get(yourUrl){var Httpreq=new XMLHttpRequest();Httpreq.open("GET",yourUrl,false);Httpreq.send(null);return Httpreq.responseText;}
function print_magnet(ih,name){return '<a href="magnet:?xt=urn:btih:'+ih+'&dn='+encodeURIComponent(name)+print_trackers()+'"><img src="'+static_server+'/images/icon-magnet.gif" /></a>';}
function print_download(ih,name){return '<a href="magnet:?xt=urn:btih:'+ih+'&dn='+encodeURIComponent(name)+print_trackers()+'"><img src="'+static_server+'/images/icon-magnet.gif" /> Get This Torrent</a>';}
function print_trackers(){var tr='&tr='+encodeURIComponent('udp://tracker.coppersurfer.tk:6969/announce');tr+='&tr='+encodeURIComponent('udp://9.rarbg.to:2920/announce');tr+='&tr='+encodeURIComponent('udp://tracker.opentrackr.org:1337');tr+='&tr='+encodeURIComponent('udp://tracker.internetwarriors.net:1337/announce');tr+='&tr='+encodeURIComponent('udp://tracker.leechers-paradise.org:6969/announce');tr+='&tr='+encodeURIComponent('udp://tracker.coppersurfer.tk:6969/announce');tr+='&tr='+encodeURIComponent('udp://tracker.pirateparty.gr:6969/announce');tr+='&tr='+encodeURIComponent('udp://tracker.cyberia.is:6969/announce');return tr;}
function print_status(status){if(status=='trusted')return '&nbsp;<img src="'+static_server+'/images/trusted.png" alt="Trusted"/>';if(status=='vip')return '&nbsp;<img src="'+static_server+'/images/vip.gif" alt="VIP"/>';if(status=='helper')return '&nbsp;<img src="'+static_server+'/images/helper.png" alt="Helper"/>';if(status=='moderator')return '&nbsp;<img src="'+static_server+'/images/moderator.gif" alt="Moderator"/>';if(status=='supermod')return '&nbsp;<img src="'+static_server+'/images/supermod.png" alt="Super Mod"/>';if(status=='admin')return '&nbsp;<img src="'+static_server+'/images/admin.gif" alt="Admin"/>';return '&nbsp;';}
function print_category(cat){var main;var cc=cat.toString();if(cat==0)return '';if(cc[0]==1)main='Audio';if(cc[0]==2)main='Video';if(cc[0]==3)main='Applications';if(cc[0]==4)main='Games';if(cc[0]==5)main='Porn';if(cc[0]==6)main='Other';var maintxt='<a href="/search/?q=category:'+cc[0]+'00">'+main+'</a> > <a href="/search/?q=category:'+cat+'">';if(cat==101)return maintxt+'Music'+'</a>';if(cat==102)return maintxt+'Audio Books'+'</a>';if(cat==103)return maintxt+'Sound clips'+'</a>';if(cat==104)return maintxt+'FLAC'+'</a>';if(cat==199)return maintxt+'Other'+'</a>';if(cat==201)return maintxt+'Movies'+'</a>';if(cat==202)return maintxt+'Movies DVDR'+'</a>';if(cat==203)return maintxt+'Music videos'+'</a>';if(cat==204)return maintxt+'Movie Clips'+'</a>';if(cat==205)return maintxt+'TV-Shows'+'</a>';if(cat==206)return maintxt+'Handheld'+'</a>';if(cat==207)return maintxt+'HD Movies'+'</a>';if(cat==208)return maintxt+'HD TV-Shows'+'</a>';if(cat==209)return maintxt+'3D'+'</a>';if(cat==299)return maintxt+'Other'+'</a>';if(cat==301)return maintxt+'Windows'+'</a>';if(cat==302)return maintxt+'Mac/Apple'+'</a>';if(cat==303)return maintxt+'UNIX'+'</a>';if(cat==304)return maintxt+'Handheld'+'</a>';if(cat==305)return maintxt+'IOS(iPad/iPhone)'+'</a>';if(cat==306)return maintxt+'Android'+'</a>';if(cat==399)return maintxt+'Other OS'+'</a>';if(cat==401)return maintxt+'PC'+'</a>';if(cat==402)return maintxt+'Mac/Apple'+'</a>';if(cat==403)return maintxt+'PSx'+'</a>';if(cat==404)return maintxt+'XBOX360'+'</a>';if(cat==405)return maintxt+'Wii'+'</a>';if(cat==406)return maintxt+'Handheld'+'</a>';if(cat==407)return maintxt+'IOS(iPad/iPhone)'+'</a>';if(cat==408)return maintxt+'Android'+'</a>';if(cat==499)return maintxt+'Other OS'+'</a>';if(cat==501)return maintxt+'Movies'+'</a>';if(cat==502)return maintxt+'Movies DVDR'+'</a>';if(cat==503)return maintxt+'Pictures'+'</a>';if(cat==504)return maintxt+'Games'+'</a>';if(cat==505)return maintxt+'HD-Movies'+'</a>';if(cat==506)return maintxt+'Movie Clips'+'</a>';if(cat==599)return maintxt+'Other'+'</a>';if(cat==601)return maintxt+'E-books'+'</a>';if(cat==602)return maintxt+'Comics'+'</a>';if(cat==603)return maintxt+'Pictures'+'</a>';if(cat==604)return maintxt+'Covers'+'</a>';if(cat==605)return maintxt+'Physibles'+'</a>';if(cat==699)return maintxt+'Other'+'</a>';return main;}
function print_size(size,f){var e='';if(f){e='&nbsp;('+size+' Bytes)';}
if(size>=1125899906842624)return round_to_precision(size/1125899906842624,0.01)+'&nbsp;PiB'+e;if(size>=1099511627776)return round_to_precision(size/1099511627776,0.01)+'&nbsp;TiB'+e;if(size>=1073741824)return round_to_precision(size/1073741824,0.01)+'&nbsp;GiB'+e;if(size>=1048576)return round_to_precision(size/1048576,0.01)+'&nbsp;MiB'+e;if(size>=1024)return round_to_precision(size/1024,0.01)+'&nbsp;KiB'+e;return size+'&nbsp;B';}
function round_to_precision(x,precision){var y=+x+(precision===undefined?0.5:precision/2);var sz=y-(y%(precision===undefined?1:+precision))+'';if(sz.indexOf('.')==-1)return sz;else return sz.substring(0,sz.indexOf('.')+3);}
function print_date(date){var dateObj=new Date(date*1000);var month=dateObj.getUTCMonth()+1;var day=dateObj.getUTCDate();var year=dateObj.getUTCFullYear();var m=dateObj.getUTCMonth()+1;var mm;if(m<10)mm='0'+m
else mm=m;var d=dateObj.getUTCDate();var dd;if(d<10)dd='0'+d
else dd=d;return dateObj.getUTCFullYear()+'-'+mm+'-'+dd;}
function getParameterByName(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,'\\$&');var regex=new RegExp('[?&]'+name+'(=([^&#]*)|&|#|$)'),results=regex.exec(url);if(!results)return null;if(!results[2])return '';return decodeURIComponent(results[2].replace(/\+/g,' '));}
function print_username(user){if(user=="Anonymous")return "Anonymous";var u;u=encodeURIComponent(user);return '<a href="/search/?q=user:'+u+'">'+user+'</a>';}
function make_details(){var json_obj=JSON.parse(Get(server+'/t.php?id='+encodeURIComponent(getParameterByName('id'))));var elements=json_obj;document.getElementById("tlt").innerHTML=elements['name'];document.getElementById("name").innerHTML=elements['name'];document.getElementById("cat").innerHTML=print_category(elements['category']);document.getElementById("size").innerHTML=print_size(elements['size'],1);document.getElementById("user").innerHTML=print_username(elements['username'])+'&nbsp;'+print_status(elements['status']);document.getElementById("ih").innerHTML=elements['info_hash'];document.getElementById("s").innerHTML=elements['seeders'];document.getElementById("l").innerHTML=elements['leechers'];document.getElementById("d").innerHTML=print_download(elements['info_hash'],elements['name']);document.getElementById("d2").innerHTML=print_download(elements['info_hash'],elements['name']);document.getElementById("uld").innerHTML=print_date(elements['added']);document.getElementById("descr").innerHTML=elements['descr'];}
function make_filelist(){var json_obj=JSON.parse(Get(server+'/f.php?id='+encodeURIComponent(getParameterByName('id'))));var elements=json_obj;var i=0;for(element in elements){if(i==1){document.write('\n<li class="alt">');i=0;}else{document.write('\n<li>');i=1;}
document.write('<span class="file-name">'+elements[element]['name'][0]+'</span><span class="file-size">'+print_size(elements[element]['size'][0],0)+'</span></li>\n');}}
function make_search(){var cats='';if(getParameterByName('cat'))cats=cats+getParameterByName('cat');if(getParameterByName('audio'))cats=cats+',100';if(getParameterByName('video'))cats=cats+',200';if(getParameterByName('apps'))cats=cats+',300';if(getParameterByName('games'))cats=cats+',400';if(getParameterByName('porn'))cats=cats+',500';if(getParameterByName('other'))cats=cats+',600';if(cats[0]==',')cats=cats.substring(1);var qu=getParameterByName('q');if(qu.substring(0,7)=='top100:'){var json_obj=JSON.parse(Get(server+'/precompiled/data_top100_'+qu.substring(7)+'.json'));if(qu=='top100:recent'){document.getElementById("tlt").innerHTML='Recent torrents';}else{document.getElementById("tlt").innerHTML='Top 100: '+print_category(qu.substring(7));}}else if(qu.substring(0,9)=='category:'){var json_obj=JSON.parse(Get(server+'/q.php?q='+encodeURIComponent(qu)));document.getElementById("tlt").innerHTML='Browse '+print_category(qu.substring(9));}else if(qu.substring(0,5)=='user:'){var json_obj=JSON.parse(Get(server+'/q.php?q='+encodeURIComponent(qu)));document.getElementById("tlt").innerHTML='User: '+htmlEntities(qu.substring(5));}else{var json_obj=JSON.parse(Get(server+'/q.php?q='+encodeURIComponent(qu)+'&cat='+cats));document.getElementById("tlt").innerHTML='Results for: '+htmlEntities(qu);}
var i=0;var elements=json_obj;for(element in elements){if(i==1){document.write('\n<li class="list-entry alt" id="st">\n');i=0;}else{document.write('\n<li class="list-entry" id="st">\n');i=1;}
document.write('<span class="list-item item-type">'+print_category(elements[element]['category'])+'</span>');document.write('<span class="list-item item-name item-title"><a href="/description/?id='+elements[element]['id']+'">'+elements[element]['name']+'</a></span>');document.write('<span class="list-item item-uploaded">'+print_date(elements[element]['added'])+'</span>');document.write('<span class="item-icons">'+print_magnet(elements[element]['info_hash'],elements[element]['name'])+print_status(elements[element]['status'])+'</span>');document.write('<span class="list-item item-size">'+print_size(elements[element]['size'],0)+'<input type="hidden" name="size" value="'+elements[element]['size']+'"/></span>');document.write('<span class="list-item item-seed">'+elements[element]['seeders']+'</span>');document.write('<span class="list-item item-leech">'+elements[element]['leechers']+'&nbsp;</span>');document.write('<span class="list-item item-user">'+print_username(elements[element]['username'])+'</span>\n</li>\n');}}
function setAll(){document.forms['q'].elements['audio'].checked=false;document.forms['q'].elements['video'].checked=false;document.forms['q'].elements['apps'].checked=false;document.forms['q'].elements['games'].checked=false;document.forms['q'].elements['porn'].checked=false;document.forms['q'].elements['other'].checked=false;}
function rmAll(){document.forms['q'].elements['all'].checked=false;}
var sort_o=new Array(10);sort_o[1]=1;sort_o[2]=1;sort_o[3]=0;sort_o[5]=0;sort_o[6]=0;sort_o[7]=0;sort_o[8]=1;function sortlist(sr){if(sort_o[sr]==1){tinysort.defaults.order='asc';sort_o[sr]=0;}else{tinysort.defaults.order='desc';sort_o[sr]=1;}
if(sr==5){tinysort('li#st',{selector:'input',attr:'value'});return;}
tinysort('li#st','span:nth-child('+sr+')');}
function htmlEntities(str){return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
