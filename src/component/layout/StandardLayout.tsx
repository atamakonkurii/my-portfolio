/* eslint-disable import-access/jsdoc */
import type { CustomLayout } from "next";
import { StandardFooter } from "src/component/layout/StandardFooter";
import { StandardHeader } from "src/component/layout/StandardHeader";

export const StandardLayout: CustomLayout = (page) => {
  return (
    <div className="min-h-screen flex flex-col">
      <StandardHeader />
      <main className="flex-grow pt-16">{page}</main>
      <StandardFooter />
    </div>
  );
};
