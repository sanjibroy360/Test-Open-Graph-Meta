import {
  Timer,
  ChartLine,
  Wallet,
  Buildings,
  UsersThree,
  Briefcase,
} from "phosphor-react";

import {
  MIRU_APP_SIGN_IN_PAGE,
  MIRU_APP_SIGN_UP_PAGE,
  PATH,
} from "constants/routes";

export const FEATURES = [
  {
    icon: <Timer weight="bold" size={16} />,
    text: "Time Tracking",
    redirectTo: PATH.TIME_TRACKING_FEATURE,
  },
  {
    icon: <ChartLine weight="bold" size={16} />,
    text: "Powerful Reporting & Analysis ",
    redirectTo: PATH.REPORTING_AND_ANALYSIS_FEATURE,
  },
  {
    icon: <Wallet weight="bold" size={16} />,
    text: "Payment & Invoices ",
    redirectTo: PATH.PAYMENT_AND_INVOICES_FEATURE,
  },
  {
    icon: <Buildings weight="bold" size={16} />,
    text: "Managing Clients",
    redirectTo: PATH.MANAGING_CLIENTS_FEATURE,
  },
  {
    icon: <UsersThree weight="bold" size={16} />,
    text: "Managing Employees",
    redirectTo: PATH.MANAGING_EMPLOYEES_FEATURE,
  },
  {
    icon: <Briefcase weight="bold" size={16} />,
    text: "Project Management ",
    redirectTo: PATH.MANAGING_PROJECTS_FEATURE,
  },
];

export const NAVBAR_ITEMS = [
  {
    name: "Miru for you",
    redirectTo: PATH.MIRU_FOR_YOU,
    type: "link",
  },
  {
    name: "Features",
    redirectTo: "#",
    type: "dropdown",
    menuItems: FEATURES,
  },
  {
    name: "Use cases",
    redirectTo: PATH.USE_CASES_PAGE,
    type: "link",
  },
  {
    name: "Pricing",
    redirectTo: "#",
    type: "link",
  },
];

export const NAVBAR_BUTTONS = {
  SIGN_IN: {
    name: "Sign In",
    redirectTo: MIRU_APP_SIGN_IN_PAGE,
  },
  TRY_MIRU: {
    name: "Try Miru",
    redirectTo: MIRU_APP_SIGN_UP_PAGE,
  },
};

export const TEMPORARILY_HIDE = ["PRICING"];
