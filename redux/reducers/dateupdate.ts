const ls = require("localStorage");

const TodayDate = new Date();

const LocalStorageDate = ls.getItem("selectedDate");
let StateDate = LocalStorageDate != null ? JSON.parse(LocalStorageDate) : { day: TodayDate.getDate(), month: TodayDate.getMonth(), year: TodayDate.getFullYear() };

export const dateUpdate = (state = StateDate, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
        ls.setItem("selectedDate", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};
