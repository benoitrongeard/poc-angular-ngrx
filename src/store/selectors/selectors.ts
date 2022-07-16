import { createSelector } from "@ngrx/store";
import { AppState, RootState } from "../reducers/root-reducer";

const selectRoot = (state: RootState) => state.root;

export const getUser = createSelector(
  selectRoot,
  (state: AppState) => state.user
);
