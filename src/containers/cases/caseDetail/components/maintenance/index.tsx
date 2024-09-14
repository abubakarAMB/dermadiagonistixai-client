import { useReactiveVar } from "@apollo/client";
import { MaintenanceView, maintenanceViewVar } from "../../state";
import MaintenanceGridView from "./grid";
import MaintenanceTable from "./table";
import { maintenanceData } from "./table/constants";

export default function Maintenance() {
  const maintenanceView = useReactiveVar(maintenanceViewVar);
  return (
    <>
      {maintenanceView === MaintenanceView.listView && (
        <MaintenanceTable maintenanceData={maintenanceData} />
      )}
      {maintenanceView === MaintenanceView.gridView && <MaintenanceGridView />}
    </>
  );
}
