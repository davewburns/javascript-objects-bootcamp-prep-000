var playlist = {
  Tool: "Sober",
  
}

function updatePlaylist(playist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
} 
  
function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName
}
