import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

export const dateConvertToUser = (date: Date) => {
  const newDate = dayjs(date).format("DD MMMM YYYY");
  return newDate;
};
