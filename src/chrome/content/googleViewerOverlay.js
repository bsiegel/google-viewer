/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is the Google Viewer extension.
 *
 * The Initial Developer of the Original Code is
 * Brandon Siegel <brandon@smartercode.net>.
 * Portions created by the Initial Developer are Copyright (C) 2008, 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
if (!com) var com={};
if (!com.bsiegel) com.bsiegel={};
if (!com.bsiegel.googleviewer) com.bsiegel.googleviewer={};

com.bsiegel.googleviewer = {
    // Driver
    gv_doViewer: function(aEvent) {
        var doc = aEvent.originalTarget;
        var links = doc.getElementsByTagName('a');
        for (i=0; i<links.length; i++) {
            var scheme = links[i].href.substr(0, links[i].href.indexOf(':'));
            if ((scheme=="http"||scheme=="https")&&(links[i].href.indexOf('.doc')!=-1||links[i].href.indexOf('.xls')!=-1||links[i].href.indexOf('.ppt')!=-1||links[i].href.indexOf('.pdf')!=-1||links[i].href.indexOf('.pages')!=-1||links[i].href.indexOf('.ai')!=-1||links[i].href.indexOf('.tif')!=-1||links[i].href.indexOf('.dxf')!=-1||links[i].href.indexOf('.svg')!=-1||links[i].href.indexOf('.eps')!=-1||links[i].href.indexOf('.ps')!=-1||links[i].href.indexOf('.ttf')!=-1||links[i].href.indexOf('.xps')!=-1)) {
                links[i].setAttribute("onclick","if(!confirm('Open this file with Google Docs?'))return true;window.location='"+scheme+"://docs.google.com/gview?url='+this.href;return false;");
            }
        }
    }
}
