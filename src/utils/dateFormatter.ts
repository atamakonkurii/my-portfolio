import { format } from "date-fns";

export const rawDateToYearMonthDay = (rawDate: string) => {
  return format(new Date(rawDate), "yyyy/MM/dd").toString();
};
