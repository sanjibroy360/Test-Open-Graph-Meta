import MiruPaymentAndInvoicesScreenImage from "assets/payment-and-invoices-page/banner-image.svg";
import WalletIcon from "assets/blue-wallet-icon.svg";
import { PAGE_KEYWORDS } from "constants/common";
import { PATH } from "constants/routes";

export const FEATURE_DETAILS = {
  featureTexts: {
    icon: WalletIcon,
    title: (
      <>
        Payment &&nbsp;
        <br className="lg:block hidden" />
        Invoices&nbsp;
      </>
    ),
    description: `Create and send invoices instantly to clients, and accept payments in a seamless way with integrated online payment methods.`,
    buttonText: "Get Started",
  },
  featureScreenImage: MiruPaymentAndInvoicesScreenImage,
  benefits: [
    {
      title: (
        <>
          Instant
          <br />
          invoicing
        </>
      ),
      description: `Create and send accurate invoices to clients for the team's effort, and streamline the payment process by tracking payment status.`,
    },
    {
      title: (
        <>
          Get paid
          <br />
          fast
        </>
      ),
      description: `With the integration of your favorite tools such as Stripe & Paypal, Miru ensures instant and hassle-free payments by clients.`,
    },
    {
      title: (
        <>
          Flexible Salary
          <br />
          Payments
        </>
      ),
      description: `Turn your team’s efforts into invoices efficiently & pay employee salaries quickly with popular payment apps integrated into Miru.`,
    },
  ],
};

export const PAGE_META = {
  TITLE: "Miru | Payment & Invoices",
  DESCRIPTION: `Create and send invoices instantly to clients, and accept payments in a seamless way with integrated online payment methods.`,
  KEYWORDS: PAGE_KEYWORDS,
  CANONICAL_URL: `https://miru.so${PATH.PAYMENT_AND_INVOICES_FEATURE}`,
};
