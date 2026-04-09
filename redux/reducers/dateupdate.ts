const isServer = typeof window === "undefined";

const TodayDate = new Date();

function getInitialDate() {
  if (isServer) {
    return { day: TodayDate.getDate(), month: TodayDate.getMonth(), year: TodayDate.getFullYear() };
  }
  const stored = window.localStorage.getItem("selectedDate");
  return stored ? JSON.parse(stored) : { day: TodayDate.getDate(), month: TodayDate.getMonth(), year: TodayDate.getFullYear() };
}

const StateDate = getInitialDate();

export const dateUpdate = (state = StateDate, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      if (!isServer) {
        window.localStorage.setItem("selectedDate", JSON.stringify(action.payload));
      }
      return action.payload;
    default:
      return state;
  }
};
