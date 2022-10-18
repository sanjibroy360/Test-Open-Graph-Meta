import FreelancersAndAgencies from "assets/use-cases/freelancers-and-agencies.svg";
import BusinessesWithContractEmployees from "assets/use-cases/businesses-with-contract-employees.svg";
import SelfEmployedProfessionals from "assets/use-cases/self-employed-professionals.svg";
import SmallToMidScaleBusinesses from "assets/use-cases/small-to-mid-scale-businesses.svg";
import LargeSizeCompany from "assets/use-cases/large-size-company.svg";
import { PAGE_KEYWORDS } from "constants/common";
import { PATH } from "constants/routes";

export const USE_CASES_PAGE_CONTENT = [
  {
    useCaseHeroTexts: {
      title: "Freelancers & agencies",
      description: `Stay connected with your clients, organize your projects and get real-time updates.`,
      buttonText: "Get Started",
    },
    id: "FreelancersAndAgenciesSection",
    image: FreelancersAndAgencies,
    flexDirection: "lg:flex-row",
    backgroundColor: "#F5F7F9",
    benefits: [
      {
        title: <>Streamline Projects</>,
        description: `Get an overview of all projects in one place, add/edit project tasks, and track task completion timings.`,
        classNames: "lg:m-auto",
      },
      {
        title: (
          <>
            Easier <br className="lg:block hidden" />
            Invoicing
          </>
        ),
        description: `Create and send invoices instantly. Track invoice status.`,
        classNames: "lg:mb-6",
      },
      {
        title: (
          <>
            Faster <br className="lg:block hidden" />
            Payments
          </>
        ),
        description: `Transform your business by switching to the professional mode of payment acceptance. Get paid faster through Stripe checkout.`,
        classNames: "lg:m-0",
      },
    ],
  },
  {
    useCaseHeroTexts: {
      title: "Businesses with contract employees",
      description: `Manage your contractors, freelancers, and interns, track their logging hours, and identify overworked/underworked individuals.`,
      buttonText: "Get Started",
    },
    id: "BusinessesWithContractEmployeesSection",
    image: BusinessesWithContractEmployees,
    flexDirection: "lg:flex-row-reverse gap-r-16",
    backgroundColor: "#EBEFF2",
    benefits: [
      {
        title: (
          <>
            Project <br className="lg:block hidden" />
            Overview
          </>
        ),
        description: `Get an overview of your team members’ projects and the amount of time they invested in each project.`,
        classNames: "lg:m-0",
      },
      {
        title: <>Automated Reminders</>,
        description: `Initiate automatic reminders to regularly motivate your team to fill their timesheets.`,
        classNames: "lg:mb-6",
      },
      {
        title: (
          <>
            Raise <br className="lg:block hidden" />
            Invoices
          </>
        ),
        description: `Contractors, Freelancers and Interns can raise and send instant invoices to the company for their effort put into projects. `,
        classNames: "lg:m-0",
      },
    ],
  },
  {
    useCaseHeroTexts: {
      title: "Self-employed professionals",
      description: `Get a complete overview of your business health, profit-making, identifying dormant projects, and your work efforts, all on Miru.`,
      buttonText: "Get Started",
    },
    id: "SelfEmployedProfessionalsSection",
    image: SelfEmployedProfessionals,
    flexDirection: "lg:flex-row",
    backgroundColor: "#E1E6EC",
    benefits: [
      {
        title: <>Keep track of your Budget</>,
        description: `Identity outstanding payments and poorly-performing projects, and ensure a profitable business.`,
        classNames: "lg:m-auto",
      },
      {
        title: <>Actionable Insights</>,
        description: `Turn data into dollars with powerful filters and get all the information you want in the most accurate way possible.`,
        classNames: "lg:m-auto",
      },
      {
        title: <>Streamline Collaboration</>,
        description: `Analyze your team efforts on each client, identify overdue payments and get actionable insights on every client.`,
        classNames: "lg:m-auto",
      },
    ],
  },
  {
    useCaseHeroTexts: {
      title: "Small to mid scale businesses",
      description: `Make your small business more organized, effective and profitable with our advanced time-tracking and invoicing software.`,
      buttonText: "Get Started",
    },
    id: "SmallToMidScaleBusinessesSection",
    image: SmallToMidScaleBusinesses,
    flexDirection: "lg:flex-row-reverse gap-r-16",
    backgroundColor: "#F5F7F9",
    benefits: [
      {
        title: <>Manage Employee hours</>,
        description: `Manage employees PTO’s, reimbursements , billable and non-billable hours through Miru.`,
        classNames: "lg:mb-6",
      },
      {
        title: (
          <>
            Send <br className="lg:block hidden" />
            Invoices
          </>
        ),
        description: `Get instant reports on client overdue payments and raise invoices for team efforts effectively.`,
        classNames: "lg:m-0",
      },
      {
        title: <>Lightning Fast Payments</>,
        description: `With the integration of tools like Stripe & Paypal, receive instant and hassle-free payments by clients.`,
        classNames: "lg:m-0",
      },
    ],
  },
  {
    useCaseHeroTexts: {
      title: "Large size company",
      description: `Track and manage clients effectively, gauge your team efforts on every client and ensure effective decision-making.`,
      buttonText: "Get Started",
    },
    id: "LargeSizeCompanySection",
    image: LargeSizeCompany,
    flexDirection: "lg:flex-row",
    backgroundColor: "#EBEFF2",
    benefits: [
      {
        title: <>Data Driven Reports</>,
        description: `Acces to wide range of data driven reports like accounts aging to keep track of your payments.`,
        classNames: "lg:m-0",
      },
      {
        title: <>Project Management</>,
        description: `Find in-depth reports on all projects handled by your teams and track team members involved in individual projects.`,
        classNames: "lg:m-0",
      },
      {
        title: (
          <>
            Smart <br className="lg:block hidden" />
            Invoicing
          </>
        ),
        description: `Create and send invoices to clients in a seamless way with integrated online payment methods. `,
        classNames: "lg:m-0",
      },
    ],
  },
];

export const PAGE_META = {
  TITLE: "Miru | Use Cases",
  DESCRIPTION: `Manage your contractors, freelancers, and interns, track their logging hours, and identify overworked/underworked individuals.`,
  KEYWORDS: PAGE_KEYWORDS,
  CANONICAL_URL: `https://miru.so${PATH.USE_CASES_PAGE}`,
};

