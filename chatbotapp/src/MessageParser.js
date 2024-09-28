class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        // You can add parsing logic here
        this.actionProvider.handleBotResponse();
    }
}

export default MessageParser;
