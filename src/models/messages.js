import mongoose from 'mongoose';
import db from './db.js';

const collection = 'messages';
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  email: String,
  message: String,
});

const MessagesModel = db.model(collection, messagesSchema);

export default MessagesModel;
