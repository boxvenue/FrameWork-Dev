var isMSIE=(navigator.appName=="Microsoft Internet Explorer");var showModalDialog=false;var openerWindow=showModalDialog ? window.parent :window.opener;function openPop(url,width,height,scroll,resizable,window_name){var x=parseInt(screen.availWidth / 2.0) - (width / 2.0);var y=parseInt(screen.availHeight / 2.0) - (height / 2.0);if (typeof(scroll)=="undefined")scroll="no";if (typeof(resizable)=="undefined")resizable="yes";if (typeof(window_name)=="undefined")window_name="FileManagerPopup";if(width > screen.availWidth || width <=0 || typeof(width)=="undefined" || width >=screen.width) width=screen.availWidth;if(height > screen.height || height <=0 || typeof(height)=="undefined" || height >=screen.height) height=screen.availHeight;x=Math.round(x);y=Math.round(y);if(x < 0) x=0;if(y < 0) y=0;width=Math.round(width);height=Math.round(height);var win=null;if (showModalDialog){var features="resizable:"+resizable+";scroll:"+scroll+";status:no;center:yes;help:no;dialogWidth:" + width + "px;dialogHeight:" + height + "px;";win=window.showModalDialog(url,window,features);}else{if(isMSIE && resizable!="yes") resizable="yes";var features="left=" + x + ",top=" + y + ",width=" + width + ",height=" + height + ",toolbar=0,resizable="+ resizable +",status=no,scrollbars="+ scroll;win=window.open(url,window_name,features);}if(win){win.resizeTo(width,height);win.moveTo(x,y);win.focus();}};function switchClass(element_id,class_name){var element=document.getElementById(element_id);if (element!=null && !element.classLock){element.oldClassName=element.className;element.className=class_name;}};function restoreClass(element_id){var element=document.getElementById(element_id);if (element!=null && element.oldClassName && !element.classLock){element.className=element.oldClassName;element.oldClassName=null;}};function setClassLock(element_id,lock_state){var element=document.getElementById(element_id);if (element!=null)element.classLock=lock_state;};function fixImagesBug(){var isMSIE=(navigator.appName=="Microsoft Internet Explorer");if (isMSIE){var elements=document.getElementsByTagName("img");for (var i=0;i<elements.length;i++){if (!elements[i].complete)elements[i].src=elements[i].src;}}};function cleanFileName(filename){var outfile="";for (var i=0;i<filename.length;i++){var chr=filename.charAt(i).toLowerCase();if (chr==' ')chr="_";if (chr=='\xE5' || chr=='\xE4')chr="a";if (chr=='\xF6')chr="o";if (chr==' ')chr="_";if ((chr >='a' && chr <='z') || (chr >='0' && chr <='9') || chr=="_" || chr==".")outfile +=chr;}return outfile;};function updateFileName(elm){var fileName=elm.value;var pos=fileName.lastIndexOf('/');pos=pos==-1 ? fileName.lastIndexOf('\\') :pos;if (pos > 0)elm.value=cleanFileName(fileName.substring(pos+1));};function getForm(formName){return document.forms.namedItem(formName);};function cleanURLAttribute(query_string,tag){var index_begin,index_end,query_string_length,sub_query_string;do{index_begin=query_string.indexOf(tag);if(index_begin >=0){query_string_length=query_string.length;index_end=query_string.indexOf('&',index_begin+1);index_end=index_end==-1 ? query_string_length :index_end < query_string_length ? index_end+1 :index_end;sub_query_string=query_string.substring(index_begin,index_end);query_string=query_string.replace(sub_query_string,'');}}while(index_begin >=0);query_string=query_string.replace("&&","&");return query_string;};function cleanSearchedUrlVarsFromFilelistFormAction(extra_query_string){if (typeof(extra_query_string)=="undefined")extra_query_string="";var filelistForm=document.getElementById('filelistForm');var query_string=document.URL;if(query_string.length > 0){var index=query_string.indexOf("?");if(index >=0){var query_string_aux=query_string.substring(index+1);query_string_aux=cleanURLAttribute(query_string_aux,"search");query_string_aux=cleanURLAttribute(query_string_aux,"search_file_location");query_string_aux=cleanURLAttribute(query_string_aux,"search_file_name");query_string_aux=cleanURLAttribute(query_string_aux,"search_file_word");query_string_aux=cleanURLAttribute(query_string_aux,"case_sensitive");query_string_aux=cleanURLAttribute(query_string_aux,"search_subfolders");query_string=query_string.substring(0,index+1);query_string +=query_string_aux + "&" + extra_query_string;}else{query_string +="?" + extra_query_string;}filelistForm.setAttribute('action',query_string);filelistForm.selected_action.value='';filelistForm.x=false;}};function showLoadingBar(){var loadingbar=document.getElementById('loadingbar');if(loadingbar)loadingbar.style.display='block';};function hideLoadingBar(){var loadingbar=document.getElementById('loadingbar');if(loadingbar)loadingbar.style.display='none';};if (window.addEventListener){window.addEventListener("load",function(){var divs=document.getElementsByTagName("div");for (var i=0;i<divs.length;i++){divs[i].addEventListener('DOMMouseScroll',function(e){var st=e.currentTarget.scrollTop + (e.detail * 12);e.currentTarget.scrollTop=st < 0 ? 0 :st;e.preventDefault();},false);}},false);}