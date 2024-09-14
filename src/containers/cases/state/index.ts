import { ReactiveVar, makeVar } from "@apollo/client";

export const showFilterVar: ReactiveVar<boolean> = makeVar<boolean>(
  false
);
