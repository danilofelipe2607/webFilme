import React from "react";
import { MDBRow } from "mdbreact";
import AdminCardSection1 from "../../layout/admin/components/sections/AdminCardSection1";
import AdminCardSection2 from "../../layout/admin/components/sections/AdminCardSection2";
import TableSection from "../../layout/admin/components/sections/TableSection";
import BreadcrumSection from "../../layout/admin/components/sections/BreadcrumSection";
import ChartSection1 from "../../layout/admin/components/sections/ChartSection1";
import ChartSection2 from "../../layout/admin/components/sections/ChartSection2";
import MapSection from "../../layout/admin/components/sections/MapSection";
import ModalSection from "../../layout/admin/components/sections/ModalSection";

export default function AdminIndex() {
  return (
    <React.Fragment>
      <BreadcrumSection />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
    </React.Fragment>
  );
}
