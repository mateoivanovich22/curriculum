import mongoose from 'mongoose';
import db from './db.js';

const collection = 'interviews';
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  date: String,
  email: String
});

const InterviewModel = db.model(collection, interviewSchema);

export default InterviewModel;