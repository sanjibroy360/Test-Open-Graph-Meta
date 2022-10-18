import MiruManagingEmployeesScreenImage from "assets/managing-employees/banner-image.svg";
import TeamIcon from "assets/blue-team-icon.svg";
import { PAGE_KEYWORDS } from "constants/common";
import { PATH } from "constants/routes";

export const FEATURE_DETAILS = {
  featureTexts: {
    icon: TeamIcon,
    title: (
      <>
        Managing&nbsp;
        <br className="lg:block hidden" />
        Employees
      </>
    ),
    description: `Store and manage employee details, track team contribution, and settle salary payments securely.`,
    buttonText: "Get Started",
  },
  featureScreenImage: MiruManagingEmployeesScreenImage,
  benefits: [
    {
      title: (
        <>
          Raise
          <br />
          invoices
        </>
      ),
      description: `Employees, Contractors, and Interns can raise and send instant invoices to the company for their effort put into projects.`,
    },
    {
      title: (
        <>
          Measure
          <br />
          employees
        </>
      ),
      description: `Manage employees’ PTOs, appraisals, reimbursements & payments through Wise.`,
    },
    {
      title: (
        <>
          Keep accounts up
          <br />
          to date
        </>
      ),
      description: `Track, analyze and manage your accounts effortlessly using our robust business reports.`,
    },
  ],
};

export const PAGE_META = {
  TITLE: "Miru | Managing Employees",
  DESCRIPTION: `Store and manage employee details, track team contribution, and settle salary payments securely.`,
  KEYWORDS: PAGE_KEYWORDS,
  CANONICAL_URL: `https://miru.so${PATH.MANAGING_EMPLOYEES_FEATURE}`,
};
