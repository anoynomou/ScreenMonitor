
// DEFIGN BUTTONS INSTANCE
var _VIDEO = document.getElementById("video")
var _INPUT = document.getElementById("input")
var _Call = document.getElementById("call")


//BIND FUNCTION WITH BUTTON
_Call.addEventListener("click",callRemoteStreemer)



// LOCAL AND REMOTE STREEMS 
var REMOTE_STREEM = null
var LOCA_STREEM = null




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


//DEFIGN PEER
var peer = new Peer(ICE_SERVERS)








async function callRemoteStreemer(){

    LOCA_STREEM = await navigator.mediaDevices.getUserMedia({audio:false,video:true})



    let RemotePeerId = _INPUT.value
    if(RemotePeerId !== ""){
        console.log(RemotePeerId)
     let call = peer.call(RemotePeerId,LOCA_STREEM)
     call.on("stream",(remoteStreem)=>{
        _VIDEO.srcObject = remoteStreem
     })
    }else{
        alert("Remote Peer Id not Defign")
    }
}