"use client";
import { Grid } from "@mui/material";
import { CasesEnum } from "../cases/constants";
import CasesCard from "./components/CasesCard";
import ClaimRelated from "./components/ClaimsRelated";
import LastViewedCase from "./components/LastViewedCase";
import MostVisitedCase from "./components/MostVisitedCase";
import RecentlyJoined from "./components/RecentlyJoined";
import { ArchiveIcon } from "./components/svg/ArchiveIcon";
import { CaseIcon } from "./components/svg/CaseIcon";
import { uploadModalVar } from "@/state/modal";

const CaseCardData = [
  {
    title: "Total Active Cases",
    icon: <CaseIcon />,
    buttonText: "View all",
    buttonLink: `/dashboard/cases/${CasesEnum.management}?referrer=home`,
    statNumber: "150",
    percentageChange: "55%",
  },
  {
    title: "Total Active Cases",
    icon: <CaseIcon />,
    buttonText: "Add new",
    buttonLink: `/dashboard/cases/${CasesEnum.management}?upload=true`,
    statNumber: "33",
    percentageChange: "98%",
    onclick: () => uploadModalVar(true),
  },
  {
    title: "Total Active Cases",
    icon: <ArchiveIcon />,
    buttonText: "Archived",
    buttonLink: "",
    statNumber: "19",
    percentageChange: "100%",
  },
];

export default function HomePageContainer() {
  return (
    <Grid container spacing={2}>
      <Grid item container md={9} sm={12} spacing={2}>
        {CaseCardData.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <CasesCard {...item} />
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <ClaimRelated />
        </Grid>
        <Grid item xs={12} md={8}>
          <MostVisitedCase />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentlyJoined />
        </Grid>
      </Grid>
      <Grid item md={3} sm={12}>
        <LastViewedCase />
      </Grid>
    </Grid>
  );
}
