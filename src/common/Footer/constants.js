import { InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import { MIRU_APP_BLOG_PAGE, PATH } from "constants/routes";

export const MIRU_APP_SUPPORT_EMAIL_ID = "mailto:mirusupport@saeloun.com";
export const USE_CASES_SECTION_HEADER = "Use Cases";

export const FOOTER_LINK_SETS = [
  [
    { text: "Features", isLinkSetHeader: true },
    { text: "Time Tracking", redirectTo: PATH.TIME_TRACKING_FEATURE },
    { text: "Invoicing", redirectTo: PATH.PAYMENT_AND_INVOICES_FEATURE },
    { text: "Clients", redirectTo: PATH.MANAGING_CLIENTS_FEATURE },
    { text: "Projects", redirectTo: PATH.MANAGING_PROJECTS_FEATURE },
    { text: "Payments", redirectTo: PATH.PAYMENT_AND_INVOICES_FEATURE },
    {
      text: "Reports & Dashboards",
      redirectTo: PATH.REPORTING_AND_ANALYSIS_FEATURE,
    },
    {
      text: "Employee management",
      redirectTo: PATH.MANAGING_EMPLOYEES_FEATURE,
    },
  ],
  [
    { text: USE_CASES_SECTION_HEADER, isLinkSetHeader: true },
    {
      text: "Freelancers/Agencies",
      redirectTo: `${PATH.USE_CASES_PAGE}#FreelancersAndAgenciesSection`,
    },
    {
      text: "Businesses with Contract Employees",
      redirectTo: `${PATH.USE_CASES_PAGE}#BusinessesWithContractEmployeesSection`,
    },
    {
      text: "Self-employed Professionals ",
      redirectTo: `${PATH.USE_CASES_PAGE}#SelfEmployedProfessionalsSection`,
    },
    {
      text: "Small to Mid Scale Businesses",
      redirectTo: `${PATH.USE_CASES_PAGE}#SmallToMidScaleBusinessesSection`,
    },
    {
      text: "Large size company",
      redirectTo: `${PATH.USE_CASES_PAGE}#LargeSizeCompanySection`,
    },
  ],
  [
    { text: "Company", isLinkSetHeader: true },
    // { text: "About Us", redirectTo: "#" },
    // { text: "Our Story", redirectTo: "#" },
    { text: "Contact", redirectTo: MIRU_APP_SUPPORT_EMAIL_ID },
    { text: "Blog", redirectTo: MIRU_APP_BLOG_PAGE },
  ],
  // [
  //   { text: "Helpful Links", isLinkSetHeader: true },
  //   { text: "FAQs", redirectTo: "#" },
  //   { text: "Terms of Use", redirectTo: "#" },
  //   { text: "Privacy Policy", redirectTo: "#" },
  // ],
];

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "Twitter Logo",
    redirectTo: "https://twitter.com/getmiru",
    icon: <TwitterLogo size={24} />,
  },
  {
    name: "LinkedIn Logo",
    redirectTo: "https://www.linkedin.com/showcase/getmiru/",
    icon: <LinkedinLogo size={24} />,
  },
  {
    name: "Instagram Logo",
    redirectTo: "https://www.instagram.com/getmiru/",
    icon: <InstagramLogo size={24} />,
  },
];
