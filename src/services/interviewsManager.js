import InterviewModel from "../models/interview.js";


class InterviewManager {
    constructor() {}

    async createInterview(email, date) {
        try {
            const note = InterviewModel.create({
                email: email,
                date: date
            });
    
            if (!note) {
                return null;

            }
            return note;
        } catch (error) {
          console.log("Error creating interview");
          throw error;
        }
    }
  
}

export default InterviewManager;