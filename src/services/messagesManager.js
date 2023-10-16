import MessagesModel from "../models/messages.js";


class MessagesManager {
    constructor() {}

    async createMessage(email, message) {
        try {
            const note = MessagesModel.create({
                email: email,
                message: message
            });
    
            if (!note) {
                return null;

            }
            return note;
        } catch (error) {
          console.log("Error creating message");
          throw error;
        }
    }
  
}

export default MessagesManager;