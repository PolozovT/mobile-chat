import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat'

export default function Chat() {

    const [messages, setMessages] = useState([
        {
          _id: 1,
          text: 'Hello Timosha',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Sychka',
          },
        },
      ],);

    const send = (message) => {
        setMessages(GiftedChat.append(messages, message));
    }

    return (  
        <GiftedChat 
            messages={messages}
            onSend={message => send(message)}
            user={{
              _id: 1,
            }} 
        />
    )
}
