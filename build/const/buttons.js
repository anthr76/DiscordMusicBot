"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUTTONS = void 0;
const Discord = __importStar(require("discord.js"));
exports.BUTTONS = {
    nextButton: new Discord.MessageButton({
        style: "SECONDARY",
        emoji: "⏭",
        customId: "tracknext"
    }),
    backButton: new Discord.MessageButton({
        style: "SECONDARY",
        emoji: "⏮️",
        customId: "trackback"
    }),
    playPauseButton: new Discord.MessageButton({
        style: "SECONDARY",
        emoji: "⏯️",
        customId: "playpause"
    }),
    stopButton: new Discord.MessageButton({
        style: "SECONDARY",
        emoji: "⏹",
        customId: "stop"
    }),
    lowerVolumeButton: new Discord.MessageButton({
        style: "SECONDARY",
        emoji: "🔉",
        customId: "lower_volume"
    }),
    raiseVolumeButton: new Discord.MessageButton({
        style: "SECONDARY",
        emoji: "🔊",
        customId: "raise_volume"
    }),
    seekForwardButton: new Discord.MessageButton({
        style: "SECONDARY",
        emoji: "▶️",
        customId: "seek_forward"
    }),
    seekBackwardButton: new Discord.MessageButton({
        style: "SECONDARY",
        emoji: "◀️",
        customId: "seek_backward"
    })
};
