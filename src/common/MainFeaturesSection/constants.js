import TimerIcon from "assets/blue-timer-icon.svg";
import InvoiceIcon from "assets/blue-invoice-icon.svg";
import IntegrationIcon from "assets/blue-integration-icon.svg";
import MiruGenerateInvoiceScreenImage from "assets/miru-generate-invoice-screen.svg";
import MiruTimeTrackingScreenImage from "assets/miru-time-tracking-screen.svg";
import MiruSettingsScreenImage from "assets/miru-settings-screen.svg";
import { PATH } from "constants/routes";

export const CONTENT_TYPES = {
  TEXT: "text",
  IMAGE: "image",
};

export const BUTTON_TYPE = {
  LEARN_MORE: "Learn More",
  GET_STARTED: "Get Started",
};

export const MAIN_FEATURES = [
  {
    id: "Section: Start with effortless time tracking today",
    backgroundColor: "#F5F7F9",
    contents: [
      {
        type: CONTENT_TYPES.TEXT,
        icon: TimerIcon,
        texts: {
          title: "Start with effortless time tracking today",
          description: `Get a detailed report of your team's efforts & measure their time distribution across different projects. Identify team burnouts & underworked members for better decision-making.`,
        },
        buttonType: BUTTON_TYPE.LEARN_MORE,
        buttonText: "Learn More",
        redirectTo: PATH.TIME_TRACKING_FEATURE,
      },
      {
        id: "MiruTimeTrackingScreenImage",
        type: CONTENT_TYPES.IMAGE,
        image: MiruTimeTrackingScreenImage,
      },
    ],
  },
  {
    id: "Section: Increase profitability with instant invoices",
    backgroundColor: "#EBEFF2",
    contents: [
      {
        id: "MiruGenerateInvoiceScreenImage",
        type: CONTENT_TYPES.IMAGE,
        image: MiruGenerateInvoiceScreenImage,
      },
      {
        type: CONTENT_TYPES.TEXT,
        icon: InvoiceIcon,
        texts: {
          title: "Increase profitability with instant invoices",
          description: `Turn data into dollars with our intuitive invoicing solution. Analyze budget, time, and cost breakdowns and create automated invoices instantly.`,
        },
        buttonType: BUTTON_TYPE.LEARN_MORE,
        buttonText: "Learn More",
        redirectTo: PATH.PAYMENT_AND_INVOICES_FEATURE,
      },
    ],
  },
  {
    id: "Section: Seamless Integration for quick payments",
    backgroundColor: "#E1E6EC",
    contents: [
      {
        type: CONTENT_TYPES.TEXT,
        icon: IntegrationIcon,
        texts: {
          title: "Seamless Integration for quick payments",
          description: `Send and receive domestic and international payments as quickly as ever with your favorite apps - Stripe, Paypal, Wise and Razorpay.`,
        },
        buttonType: BUTTON_TYPE.LEARN_MORE,
        buttonText: "Learn More",
        redirectTo: PATH.PAYMENT_AND_INVOICES_FEATURE,
      },
      {
        id: "MiruSettingsScreenImage",
        type: CONTENT_TYPES.IMAGE,
        image: MiruSettingsScreenImage,
      },
    ],
  },
];
