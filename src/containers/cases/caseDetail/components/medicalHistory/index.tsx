import { useReactiveVar } from "@apollo/client";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { MapViewEnum } from "../../constants";
import { showFilterVar } from "../../state";
import TimeLineView from "./TimeLineView";
import IcdCodeDescription from "./codeDescription";
import Details from "./details";
import Filter from "./filter";

export default function MapView() {
  const searchParams = useSearchParams();
  const showFilter = useReactiveVar(showFilterVar);
  const view = searchParams.get("view") ?? MapViewEnum.mapView;

  const getView = () => {
    switch (view) {
      case MapViewEnum.mapView:
        return <IcdCodeDescription />;
      case MapViewEnum.detailsView:
        return <Details />;
      default:
        return <IcdCodeDescription />;
    }
  };

  return (
    <Stack>
      <Filter showFilter={showFilter} />
      {getView()}
      <TimeLineView view={view} />
    </Stack>
  );
}
