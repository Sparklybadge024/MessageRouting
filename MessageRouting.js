// Answer 1:- Flooding is inefficient when it comes to send message to only one specific node is because what flooding does is that it make sure that every node in the network gets the message but when it comes to sending message to one specific node there is scaling that we don't need for message propogation and the whole network sees the message.
// Answer 2:- It will still be considered semi-flooding because to a node the only network it knows is it's immediate neighbours and to them their neighbours and so on.
// Answer 3:- What will happen is that every node now will able to think before sending and it will send it in a way that the message propogation stays on path and don't go here or there.
// Answer 4:- If a node is added or removed from the network then flooding connection need to happen again so that the network gets the updated network.
// Answer 5:- If nodes do not compare old and new connection data then it mignt never know which are new connections added or which connections are removed.
// Answer 6:- It is because of the fact that findRoute enables nodes to understand about their surrounding only and not beyond that.
// Answer 7:- Then i think they will miss out on newer connections that could be more efficient and the nodes will end up using the old connection that they remember.
// Answer 8:- There are multiple reasons to it and i think one such reason is to keep the message as private as possible and to get to the destination with the most efficient route.
// Answer 9:- It's been quite a time since i last studied findroute function but i can say that the possibility of getting a null is when it couldn't able to find the node of some nodes gets deleted from the network.
// Answer 10:- I am not sure about it maybe it will; flood the whole network
// Answer 11:- Because flooding has only one simple principle to deliver message to all but in routing efficiency matter, and most importantly logic matter.
// Answer 12:- There is possibility that the message could become unreachable if a node try to do so because maybe the node is nop longer there.
// Answer 13:- Because what i know about findRoute is that it first checks the neighbours and if one of the neighbours is the target then it's fine but if it's not then it will send the message to all the neighbours.
// Answer 14:- I can't think of a condition that will lead it to fail even though the connection is there.
// Answer 15:- What i know in that scenario only the route that is the shortest will be chosen.
// Answer 16:- Hey i think this question is not right i mean if a message can find it's way to the destination during flooding so as through routing until unless the connection is broken or disturbed.
// Answer 17:- In that case it is like a broken connection network and won't be able to foreward the messages.
// Answer 18:- It is better because it keeps the privacy on the flip side it's worse if it's not able to find a route to the target.
// Answer 19:- It is possible and i guess it's a feature.
// Answer 20:- Okay so the real internet requires transmission devices like:Cell towers, Routers etc.,that further transmitt the signal upto their reach and if they have any other reciever device upto their reach they will do the same and the signal will be delivered to the recieving devices.

// Task 1:-
function createNode(nod){
    // This function is made to create node for our environment.
    return {name:nod,neighbors:[],seenMessages:[],connections:new Map()}
}

let n1=createNode("Nest1");
console.log(n1);
let n2= createNode("Nest2");
let n3= createNode("Nest3");
let n4= createNode("Nest4");

// Task 2:- 
function connect(x,y){
    // This function is used to connect 2 nodes.
    if(!x.neighbors.includes(y)){
       x.neighbors.push(y);
    }
    if(!y.neighbors.includes(x)){
        y.neighbors.push(x);
    }
}

connect(n1,n2);
connect(n2,n3);
connect(n3,n4);

// Task 3:-
function initConnections(node){
    // This function is used to populate the maps or the connections property of the nodes.
    node.connections.set(node.name,node.neighbors)
}
initConnections(n1);
initConnections(n2);
initConnections(n3);
initConnections(n4);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);



// Task 4:-
function knownNodes(node){
    // This function is used to store node.connections keys into an array
let arr=[];
    for(let key of node.connections.keys()){
         
        arr.push(key)
         
    }
    return arr;
}


// console.log(knownNodes(n2)); //['Nest2']

// Concept understood keys are reffered to as the properties of map just like the properties of object however in map keys are not stored in Arrays unlike objects



// Task 5:- 
// console.log(n1);
// console.log(n2);

// Copying connections means that 2 nodes learns about each others surroundings.

// Task 6:-

function shareConnection(reciever,sender){
    // This function shares the connections of nodes with each other.
    for(let key of sender.connections.keys()){
        if(!reciever.connections.has(key)){
           let arr=[];
                for(let i of sender.connections.get(key)){
                    // This loop is specifically meant to copy the elements instead of referencing it.
                    arr.push(i)
                }
                reciever.connections.set(key,arr)
        }    
    }
}






// Task 7:-
function broadcastConnections(node,exceptFor=null){
    for(let i of node.neighbors){
        if(i===exceptFor) continue;
        shareConnection(i,node);
    }
}

// Task 8:-
function floodConnections(startNode){
       broadcastConnections(startNode);

       for(let i of startNode.neighbors){
            broadcastConnections(i,startNode)
        }
        for(let j of startNode.neighbors){
            floodConnections(j)
        }
    }

floodConnections(n1);
console.log(n1);











