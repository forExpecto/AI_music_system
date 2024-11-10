<template>
    <div class="chat-app">
        <div class="chat-sidebar">
            <div v-for="contact in contacts" :key="contact.name" class="contact-item">
                <img :src="contact.avatar" alt="avatar" class="avatar">
                <div>
                    <div class="contact-name">{{ contact.name }}</div>
                    <div class="contact-message">{{ contact.lastMessage }}</div>
                </div>
            </div>
        </div>
        <div class="chat-window">
            <div class="messages">
                <div v-for="message in messages" :key="message.id" :class="['message', message.sender]">
                    <div class="avatar"></div>
                    <div class="content">{{ message.text }}</div>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" v-model="newMessage" placeholder="输入消息..." @keyup.enter="sendMessage">
                <button @click="sendMessage">发送</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contacts: [
                { name: 'Lisa', avatar: 'avatar1.png', lastMessage: '嘿，好久没有联系了...' },
                { name: 'Alen', avatar: 'avatar2.png', lastMessage: '听说你最近在准备一件...' },
                // 更多联系人...
            ],
            messages: [
                { id: 1, text: '嘿，好久没有联系了，你还好吗', sender: 'received' },
                { id: 2, text: '挺好的', sender: 'sent' },
                // 更多消息...
            ],
            newMessage: ''
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim()) {
                this.messages.push({ id: Date.now(), text: this.newMessage, sender: 'sent' });
                this.newMessage = '';
            }
        }
    }
};
</script>

<style scoped>
.chat-app {
    display: flex;
    height: 100vh;
}

.chat-sidebar {
    width: 200px;
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
    overflow-y: auto;
}

.contact-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.avatar {
    width: 40px;
    height: 40px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
}

.contact-name {
    font-weight: bold;
}

.contact-message {
    color: #666;
}

.chat-window {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #eef2f5;
}

.messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.message {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
}

.message.received .content {
    background-color: #f0f0f0;
}

.message.sent .content {
    background-color: #cfe9ba;
    align-self: flex-end;
}

.content {
    max-width: 60%;
    padding: 10px;
    border-radius: 10px;
    margin-left: 10px;
}

.chat-input {
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #ddd;
}

.chat-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
}

.chat-input button {
    padding: 10px 20px;
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>