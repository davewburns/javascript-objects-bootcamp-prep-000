var playlist = {
  Tool: "Sober",
  Slipknot: "Psycosocial",
  
}

function updatePlaylist([playist], artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
} 
  
