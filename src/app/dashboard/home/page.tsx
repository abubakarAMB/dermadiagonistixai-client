"use client";

import HomePageContainer from "@/containers/home";
import withAuth from "@/hoc/withAuth";

function HomePage() {
  return <HomePageContainer />;
}

export default withAuth(HomePage);