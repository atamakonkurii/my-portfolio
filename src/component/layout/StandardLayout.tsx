/* eslint-disable import-access/jsdoc */
import type { CustomLayout } from "next";
import { StandardFooter } from "src/component/layout/StandardFooter";
import { StandardHeader } from "src/component/layout/StandardHeader";

export const StandardLayout: CustomLayout = (page) => {
  return (
    <div>
      <StandardHeader />
      <main>{page}</main>
      <StandardFooter />
    </div>
  );
};
