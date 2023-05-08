const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const leaderboardSchema = new Schema({
    PlayerName: String,
    Points: Number
});

module.exports = model('Leaderboard', leaderboardSchema);