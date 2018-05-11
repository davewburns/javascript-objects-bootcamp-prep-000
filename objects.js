var playlist = {
  Tool: "Sober",
  
}

function updatePlaylist(playist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
} 
  
function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName
}
