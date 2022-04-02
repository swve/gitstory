export interface SelectedDateInterface {
  day: number;
  month: number;
  year: number;
}

export const updateDate = (selectedDate: SelectedDateInterface) => ({
  type: "UPDATE_DATE",
  payload: selectedDate,
});
