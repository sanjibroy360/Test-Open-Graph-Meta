import MiruManagingClientsScreenImage from "assets/managing-clients/banner-image.png";
import BuildingIcon from "assets/blue-buildings-icon.svg";
import { PAGE_KEYWORDS } from "constants/common";
import { PATH } from "constants/routes";

export const FEATURE_DETAILS = {
  featureTexts: {
    icon: BuildingIcon,
    title: (
      <>
        Managing &nbsp;
        <br className="lg:block hidden" />
        Clients&nbsp;
      </>
    ),
    description: `Analyze and manage clients effectively, gauge your team efforts on every client, and track budgets, cost constraints, and profitability`,
    buttonText: "Get Started",
  },
  featureScreenImage: MiruManagingClientsScreenImage,
  benefits: [
    {
      title: (
        <>
          Increase
          <br />
          productivity
        </>
      ),
      description: `Get complete visibility into client payments and project profitability without complex calculations, so that your operations team can focus on more important aspects of your business.`,
    },
    {
      title: (
        <>
          Streamlined
          <br />
          collaboration
        </>
      ),
      description: `Track your team efforts on each client, identify overdue payments and get actionable insights around client profitability.`,
    },
    {
      title: (
        <>
          Send
          <br />
          invoices
        </>
      ),
      description: `Get instant reports on client overdue payments and raise invoices for team efforts effectively.`,
    },
  ],
};

export const PAGE_META = {
  TITLE: "Miru | Managing Clients",
  DESCRIPTION: `Analyze and manage clients effectively, gauge your team efforts on every client, and track budgets, cost constraints, and profitability.`,
  KEYWORDS: PAGE_KEYWORDS,
  CANONICAL_URL: `https://miru.so${PATH.MANAGING_CLIENTS_FEATURE}`,
};
