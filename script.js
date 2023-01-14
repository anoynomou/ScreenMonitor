/// DEFIGN BUTTONS INSTANCE
const _START = document.getElementById("start")
const _STOP = document.getElementById("stop")
var _VIDEO = document.getElementById("video") // <-- SCREEM REPLICATION
var _LOCAL_STREEM = null


/// Bind function with BUTTON
_START.addEventListener("click", start)
_STOP.addEventListener("click",stop)



// TURN / STUN SERVERS
const ICE_SERVERS = {
    config: {'iceServers': 
        [
            { url: 'stun:stun.l.google.com:19302' },
            {
            url: 'turn:numb.viagenie.ca',
            credential: 'muazkh',
            username: 'webrtc@live.com'
            },
            {
            url: 'turn:192.158.29.39:3478?transport=udp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808'
            },
            {
            url: 'turn:192.158.29.39:3478?transport=tcp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808'
            },
            {
            url: 'turn:turn.bistri.com:80',
            credential: 'homeo',
            username: 'homeo'
            }
        ]
    }
        
}

/// DEFIGN PEER 
var peer = new Peer(ICE_SERVERS)

peer.on("open",id=>{
    document.getElementById("uid").value = id
})










// START SCREEN STREEM
async function start(){

    _LOCAL_STREEM = await navigator.mediaDevices.getDisplayMedia({video:true,audio:false})


   _VIDEO.srcObject  = _LOCAL_STREEM
    

    peer.on("call",(call)=>{
        call.answer(_LOCAL_STREEM);
        call.on("stream",remoteStreem=>{
            //  REMOTE VIDEO STREEM 
        })
    })
   

   

}



// STOP SCREEN STREEM
function stop(){
    console.log("Stop")
     _LOCAL_STREEM.getTracks().forEach(function(track){
        track.stop();
     })
}



// COPY ID
document.getElementById("uid").addEventListener("click",()=>{
    var copyText = document.getElementById("uid");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
})









