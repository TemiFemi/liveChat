import React from 'react'

function Chat(socket, username, room) {
    return (
        <div>
            <div className="chat-header"> </div>
            <p> Live Chat </p>
            <div className="chat-body"> </div>
            <div className="chat-footer"> </div>
            <input type="text" placeholder="Hey.." />
            <button>&#9658</button>
        </div>
    )
}

export default Chat