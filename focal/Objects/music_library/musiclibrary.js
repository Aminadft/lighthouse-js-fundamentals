const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};
//print a list of all playlists
// p01 has 2 tracks[t01/02] and p02 has 1[t03] track

const PrintPlaylist = function(list){
       for (const playNum in list) {
              let trackCount = 0;
              for (const trackNum in list[playNum].tracks) {
                     trackCount +=1;
                     continue;
              } console.log(`${list[playNum].id}: ${list[playNum].name}) -${trackCount}tracks`);

              };
              printPlaylists(library.playlists);

              const printTracks = function(trackList) {

              };//printTracks(library.tracks);
              //t02
              const printPlaylist = function(playlistId) {

              };//generate unique ID
              const generateUId = funciton(){
                     return Math.floor(( 1+ Math.random()) * 0x10000).toString(16).substring(1);
              };
              //adds a track to library
              const addTrack = function (name, artist, album) {
                     library.tracks.| = {};
                     console.log(library.tracks)
              };
              add track("Back Burner", "August Burns Red", "Messengers")
              //add playlist to library
              const addPlaylist = function(name) {}
              }

              }

       }


}