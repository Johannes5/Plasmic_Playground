

const CLIENT_ID = "429268482166-4mh3potnmvum3aeo6gnhsnra6kjbv09b.apps.googleusercontent.com"


const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const CLIENT_SECRET= {"web":{"client_id":"429268482166-4mh3potnmvum3aeo6gnhsnra6kjbv09b.apps.googleusercontent.com","project_id":"youtube-public-playlists","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"ygFjVKZBUGGqitTFWw48T4pd","javascript_origins":["http://localhost:63342"]}}

let connected = false

// Load auth2 library
function handleClientLoad() {
    // eslint-disable-next-line no-undef
    gapi.load('client:auth2', initClient);
    console.log("handleClientLoad",)
}

// Init API client library and set up sign in listeners
function initClient() {
    // eslint-disable-next-line no-undef
    gapi.client
        .init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT_ID,
            scope: SCOPES,

        })
        .then(() => {
            // Listen for sign in state changes
            //gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            // Handle initial sign in state
            connected = true
            console.log("connected", connected)
        });

}

function isConnected () {return connected}

//login
function handleAuthClick (){
    // eslint-disable-next-line no-undef
    gapi.auth2.getAuthInstance().signIn();
}

function checkSignInStatus () {
    console.log("connected", connected)
}

//logout
function handleSignoutClick (){
    connected = false;
    console.log("handleSignoutClick" , "connected", connected);

    // eslint-disable-next-line no-undef
    gapi.auth2.getAuthInstance().signOut();
}

function getPlaylist(playlistId){
    console.log("getPlaylist", getPlaylist)
    let playlistArray = [];
    const requestOptions = {
        playlistId: playlistId,
        part: 'snippet,contentDetails',
        maxResults: 6

    };

    // eslint-disable-next-line no-undef
    return gapi.client.youtube.playlistItems.list(requestOptions).then(async function(response) {

        const playListItems = response.result.items
        console.log("playlist response.result ", response)

        if (playListItems) {
            // Loop through videos and append output
            for (let i = 0, len = playListItems.length; i < len; i++ ) {
                const item = playListItems[i];

                const  videoObj = {
                    playlistId: playlistId,
                    thumbnail:  item.snippet.thumbnails.medium?.url || "",
                    title:  item.snippet.title,
                    publishedAt: item.snippet.publishedAt,
                    videoId: item.snippet.resourceId.videoId,
                    //duration: videoDetails.duration,
                    //channelName: videoDetails.channelName
                };

                playlistArray.push(videoObj);
            }

        } else {
            console.log('No Uploaded Videos');
        }
        return playlistArray;
    });
}


export {isConnected, handleClientLoad, handleAuthClick, getPlaylist, handleSignoutClick, checkSignInStatus}
