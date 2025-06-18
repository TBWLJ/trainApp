import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EmojiSelector from 'react-native-emoji-selector';


export default function ChatPageScreen({ navigation }) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hey there!',
      sender: 'other',
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: '2',
      text: 'Hi! How can I help you?',
      sender: 'me',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);


  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [newMessage, ...prev]);
      setInputText('');
      simulateTypingResponse();
    }
  };

  const simulateTypingResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply = {
        id: Date.now().toString(),
        text: 'Okay, noted!',
        sender: 'other',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [reply, ...prev]);
    }, 2000);
  };

  const renderItem = ({ item }) => {
  const isMe = item.sender === 'me';
  return (
    <View
      style={[
        styles.messageRow,
        { justifyContent: isMe ? 'flex-end' : 'flex-start' },
      ]}
    >
      {!isMe && (
        <Image
          source={{ uri: 'https://i.pravatar.cc/40?img=5' }}
          style={styles.avatar}
        />
      )}
      <View
        style={[
          styles.messageBubble,
          isMe ? styles.myMessage : styles.theirMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      {isMe && (
        <Image
          source={{ uri: 'https://i.pravatar.cc/40?img=12' }}
          style={styles.avatar}
        />
      )}
    </View>
  );
};


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Customer Support</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="call-outline" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="videocam-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatArea}
        inverted
      />

      {/* Typing Indicator */}
      {isTyping && (
        <View style={styles.typingContainer}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/40?img=5' }}
            style={styles.avatar}
          />
          <Text style={styles.typingText}>Typing...</Text>
        </View>
      )}

      {/* Input */}
      {showEmojiPicker && (
        <EmojiSelector
          onEmojiSelected={(emoji) => setInputText((prev) => prev + emoji)}
          showSearchBar={false}
          showTabs={true}
          category={EmojiSelector.categories.all}
          columns={8}
          style={{ height: 250 }}
        />
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
        style={styles.inputContainer}
      >
        <TouchableOpacity
          style={styles.inputIcon}
          onPress={() => setShowEmojiPicker((prev) => !prev)}
        >
          <Ionicons name="happy-outline" size={24} color="#888" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.inputIcon}>
          <Ionicons name="attach-outline" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={20} color="#000080" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: {
    backgroundColor: '#ffa500',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  headerText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  headerActions: { flexDirection: 'row' },
  headerIcon: { marginLeft: 20 },
  chatArea: {
    padding: 12,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 12,
    maxWidth: '70%',
  },
  myMessage: {
    backgroundColor: '#dcf8c6',
    marginLeft: 6,
  },
  theirMessage: {
    backgroundColor: '#fff',
    marginRight: 6,
  },
  messageText: { fontSize: 16 },
  timestamp: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#ffa500',
    padding: 10,
    borderRadius: 20,
  },
  avatar: { width: 30, height: 30, borderRadius: 15 },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
  typingText: { marginLeft: 8, fontStyle: 'italic', color: '#444' },
  inputIcon: { marginHorizontal: 6 },
});
