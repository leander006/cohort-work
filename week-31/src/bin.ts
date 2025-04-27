import { WebSocketServer,WebSocket } from 'ws';
import { createClient } from 'redis';

const publishClient = createClient({});
publishClient.connect()
const subscribeClient = createClient({});
subscribeClient.connect()

const wss = new WebSocketServer({ port: 8080 });

const subscriptions : {[key:string]:{ 
    ws: WebSocket,
    rooms: String[]
}} ={

}

wss.on('connection', function connection(ws) {
  const id = random()
  subscriptions[id]={
    ws,
    rooms: []
  }


  

  ws.on('message', function message(data) {
    const parseMesaage = JSON.parse(data.toString())
    const { type, roomId ,userid } = parseMesaage

    
    if (type === "subscribe") {
        subscriptions[id].rooms.push(roomId);
        if (oneUserSubscribedTo(roomId)) {
            console.log("subscribing on the pub sub to room " + roomId);
            subscribeClient.subscribe(roomId, (message) => {
                const parsedMessage = JSON.parse(message);
                Object.keys(subscriptions).forEach((userId) => {
                    const {ws, rooms} = subscriptions[userId];
                    console.log(userId !== id.toString() ,"userId ",userid ,"id ",id.toString());
                    
                    if (rooms.includes(parsedMessage.roomId) && userid !== id.toString()) {
                        ws.send(parsedMessage.message);
                        
                    }
                })
            })
        }
    }
    
    if(type === 'unsubscribe'){
        subscriptions[id].rooms = subscriptions[id].rooms.filter((room) => room !== roomId)
        if (lastPersonLeftRoom(roomId)) {
            console.log("unsubscribing from pub sub on room" + roomId);
            subscribeClient.unsubscribe(roomId);
        }
    }

    if(parseMesaage.type = "sendMessage"){
        const { roomId, message } = parseMesaage
        const data = {
            type: "message",
            roomId,
            message,
            userid:id
        }
        publishClient.publish(roomId, JSON.stringify(data));
        console.log("Published in ",data.userid);
        
    }
  });
});

function oneUserSubscribedTo(roomId: string) {
    let totalInterestedPeople = 0;
    Object.keys(subscriptions).map(userId => {
        if (subscriptions[userId].rooms.includes(roomId)) {
            totalInterestedPeople++;
        }
    })
    if (totalInterestedPeople == 1) {
        return true;
    }
    return false;
}

function lastPersonLeftRoom(roomId: string) {
    let totalInterestedPeople = 0;
    Object.keys(subscriptions).map(userId => {
        if (subscriptions[userId].rooms.includes(roomId)) {
            totalInterestedPeople++;
        }
    })
    if (totalInterestedPeople == 0) {
        return true;
    }
    return false;
}

const random = () => {
    return Math.floor(Math.random() * 1000000);
}