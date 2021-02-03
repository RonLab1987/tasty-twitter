"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocalDateTime = void 0;
const luxon_1 = require("luxon");
exports.toLocalDateTime = (date) => luxon_1.DateTime.fromISO(date).toLocaleString(luxon_1.DateTime.DATETIME_MED);
