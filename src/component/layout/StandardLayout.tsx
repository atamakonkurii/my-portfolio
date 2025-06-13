/* eslint-disable import-access/jsdoc */
import type { CustomLayout } from "next";
import { StandardFooter } from "src/component/layout/StandardFooter";
import { StandardHeader } from "src/component/layout/StandardHeader";

export const StandardLayout: CustomLayout = (page) => {
  return (
    <div className="flex flex-col min-h-screen">
      <StandardHeader />
      <main className="grow pt-16">{page}</main>
      <StandardFooter />
    </div>
  );
};
