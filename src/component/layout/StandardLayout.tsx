/* eslint-disable import-access/jsdoc */
import type { CustomLayout } from "next";
import { StandardFooter } from "src/component/layout/StandardFooter";

export const StandardLayout: CustomLayout = (page) => {
  return (
    <div>
      <main>{page}</main>
      <StandardFooter />
    </div>
  );
};
