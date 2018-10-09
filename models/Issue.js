const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IssueSchema = new Schema({
  ticket: { type: String},
  user: { type: Schema.Types.ObjectId, ref: 'users'},
  title: { type: String, required: true},
  description: { type: String, required: true},
  assignto: { type: String},
  projects:{ type: String},
  status: { type: String},
  priority: { type: String },
  department: { type: String},
  date: { type: Date, default: Date.now },
  datecompleted:{ type: Date }
});

module.exports = Issue = mongoose.model('issues', IssueSchema);
