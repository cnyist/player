function generate(music_id){
    music = document.getElementById(music_id);
    index = Number(music_id.replace("song","")) - 1

    poster = document.getElementById("player").contentWindow.musicList[index]['poster']
    title = document.getElementById("player").contentWindow.musicList[index]['title']
    music_time = document.getElementById("player").contentWindow.musicList[index]
    artist = document.getElementById("player").contentWindow.musicList[index]['artist']

    innerHTML = "<li class=\"songlist__item\"><div class=\"songlist__item_box\" style=\"visibility: visible;\"><div class=\"songlist__link mod_cover\" onclick=\"$(\'#player\').contents().find(\'#" + 
    music_id + "\')[0].click(); $(\'#player\').contents().find(\'#btnfold\')[0].click();\"><img class=\"songlist__pic\" src=\"" + 
    poster + "\" style=\"display: block; visibility: visible;\"><i class=\"mod_cover__mask\"></i><i class=\"mod_cover__icon_play js_play\"></i></div><div class=\"songlist__cont\"><h3 class=\"songlist__song\"><div class=\"js_song\" title=\"" + 
    title + "\">" + title + "</div></h3><p class=\"songlist__author\" title=\"" + 
    artist + "\"></p><div title=\"" + artist + "\" class=\"c_tx_thin singer_name\">" + artist + "</div></div></div></li>";

    music.innerHTML = innerHTML;
}