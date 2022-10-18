import HomePage from "components/HomePage/Loadable";
import ManagingClientsFeaturePage from "components/ManagingClientsFeaturePage/Loadable";
import ManagingEmployeesFeaturePage from "components/ManagingEmployeesFeaturePage/Loadable";
import ManagingProjectsFeaturePage from "components/ManagingProjectsFeaturePage/Loadable";
import PaymentAndInvoicesFeaturePage from "components/PaymentAndInvoicesFeaturePage/Loadable";
import ReportAndAnalysisFeaturePage from "components/ReportAndAnalysisFeaturePage/Loadable";
import TimeTrackingFeaturePage from "components/TimeTrackingFeaturePage/Loadable";
import MiruForYouPage from "components/MiruForYouPage/Loadable";
import UseCasesPage from "components/UseCasesPage/Loadable";

export const MIRU_APP_SIGN_UP_PAGE = "https://app.miru.so/users/sign_up";
export const MIRU_APP_SIGN_IN_PAGE = "https://app.miru.so/users/sign_in";
export const MIRU_APP_BLOG_PAGE = "https://blog.getmiru.com/";
export const OFFICE_LOCATION_IN_GOOGLE_MAP =
  "https://goo.gl/maps/S3FKwCdigHgXRNzi7";

export const PATH = {
  HOME: "/",
  MIRU_FOR_YOU: "/miru-for-you",
  TIME_TRACKING_FEATURE: "/features/time-tracking",
  REPORTING_AND_ANALYSIS_FEATURE: "/features/reporting-and-analysis",
  PAYMENT_AND_INVOICES_FEATURE: "/features/payment-and-invoices",
  MANAGING_CLIENTS_FEATURE: "/features/managing-clients",
  MANAGING_EMPLOYEES_FEATURE: "/features/managing-employees",
  MANAGING_PROJECTS_FEATURE: "/features/managing-projects",
  USE_CASES_PAGE: "/use-cases",
};

export const ROUTES = [
  {
    path: PATH.HOME,
    Component: HomePage,
  },
  {
    path: PATH.MIRU_FOR_YOU,
    Component: MiruForYouPage,
  },
  {
    path: PATH.TIME_TRACKING_FEATURE,
    Component: TimeTrackingFeaturePage,
  },
  {
    path: PATH.REPORTING_AND_ANALYSIS_FEATURE,
    Component: ReportAndAnalysisFeaturePage,
  },
  {
    path: PATH.PAYMENT_AND_INVOICES_FEATURE,
    Component: PaymentAndInvoicesFeaturePage,
  },
  {
    path: PATH.MANAGING_CLIENTS_FEATURE,
    Component: ManagingClientsFeaturePage,
  },
  {
    path: PATH.MANAGING_EMPLOYEES_FEATURE,
    Component: ManagingEmployeesFeaturePage,
  },
  {
    path: PATH.MANAGING_PROJECTS_FEATURE,
    Component: ManagingProjectsFeaturePage,
  },
  {
    path: PATH.USE_CASES_PAGE,
    Component: UseCasesPage,
  },
];
