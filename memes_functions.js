/*
	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function click(num) {
  chrome.tabs.executeScript(null,
      {code:"paste_emote('"+num+"')"});
  window.close();
}

function getMemes() {
	var get_memes;
	
	try{
		get_memes=JSON.parse(localStorage.memes);
	} catch(ex)	{
		get_memes=['171108522930776','164413893600463','218595638164996','189637151067601','129627277060203','227644903931785','100002752520227','105387672833401','100002727365206'];
		localStorage.memes=JSON.stringify(get_memes);
	}
	
	return get_memes;
}

function drawMemes(){
	var memes=getMemes();
	
	for(meme in memes){
		document.write('<img src="http://graph.facebook.com/'+memes[meme]+'/picture" onClick="click('+memes[meme]+')">');
	}
}