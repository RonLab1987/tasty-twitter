import { ISODateTime } from "../domain";
import { DateTime } from "luxon";

export const toLocalDateTime = (date: ISODateTime): string =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);
