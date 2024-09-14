import { ReactiveVar, makeVar } from "@apollo/client";

export enum MaintenanceView {
  listView = "listView",
  gridView = "gridView",
}

export const maintenanceViewVar: ReactiveVar<MaintenanceView> =
  makeVar<MaintenanceView>(MaintenanceView.listView);

export const showFilterVar: ReactiveVar<boolean> = makeVar<boolean>(
  false
);

export const showTimelIneCalenderVar: ReactiveVar<boolean> = makeVar<boolean>(
  false
);
