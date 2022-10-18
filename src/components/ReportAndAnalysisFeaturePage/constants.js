import MiruReportAndAnalysisScreenImage from "assets/report-and-analysis-page/banner-image.svg";
import ChartIcon from "assets/blue-chart-icon.svg";
import { PATH } from "constants/routes";
import { PAGE_KEYWORDS } from "constants/common";

export const FEATURE_DETAILS = {
  featureTexts: {
    icon: ChartIcon,
    title: (
      <>
        Powerful&nbsp;
        <br className="lg:block hidden" />
        Reporting &&nbsp;
        <br className="lg:block hidden" />
        Analysis&nbsp;
      </>
    ),
    description: `Get a wide range of business reports with accurate insights and data into your business profitability, sales revenue, and operational efficiency.`,
    buttonText: "Get Started",
  },
  featureScreenImage: MiruReportAndAnalysisScreenImage,
  benefits: [
    {
      title: (
        <>
          Manage
          <br />
          budgets
        </>
      ),
      description: `Identity outstanding payments and poorly-performing projects, and send reminders for pending invoices`,
    },
    {
      title: (
        <>
          Data-driven
          <br />
          insights
        </>
      ),
      description: `Make data-driven decisions based on powerful filters and accurate information about your business operations`,
    },
    {
      title: (
        <>
          Analyze team
          <br />
          performance
        </>
      ),
      description: `Get complete visibility of time spent by each team member on multiple projects and the impact made by them`,
    },
  ],
};

export const PAGE_META = {
  TITLE: "Miru | Powerful Reporting & Analysis",
  DESCRIPTION: `Get a wide range of business reports with accurate insights and data into your business profitability, sales revenue, and operational efficiency.`,
  KEYWORDS: PAGE_KEYWORDS,
  CANONICAL_URL: `https://miru.so${PATH.REPORTING_AND_ANALYSIS_FEATURE}`,
};
