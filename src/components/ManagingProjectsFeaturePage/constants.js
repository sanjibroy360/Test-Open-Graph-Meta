import MiruManagingProjectsScreenImage from "assets/managing-projects/banner-image.svg";
import BriefcaseIcon from "assets/blue-briefcase-icon.svg";
import { PAGE_KEYWORDS } from "constants/common";
import { PATH } from "constants/routes";

export const FEATURE_DETAILS = {
  featureTexts: {
    icon: BriefcaseIcon,
    title: (
      <>
        Managing&nbsp;
        <br className="lg:block hidden" />
        Projects
      </>
    ),
    description: `Get comprehensive and in-depth reports on all projects handled by your teams and monitor team contributions in individual projects.`,
    buttonText: "Get Started",
  },
  featureScreenImage: MiruManagingProjectsScreenImage,
  benefits: [
    {
      title: (
        <>
          Measure project
          <br />
          profitability
        </>
      ),
      description: `Get accurate reports on projects and payments, and identify how profitable they are for your business.`,
    },
    {
      title: (
        <>
          Track project
          <br />
          efforts
        </>
      ),
      description: `Measure time spent on each project by your team members and optimize project management.`,
    },
    {
      title: (
        <>
          Visualize project
          <br />
          activities
        </>
      ),
      description: `Get a quick glance at project activities in real-time, and keep track of overworked and underworked team members.`,
    },
  ],
};

export const PAGE_META = {
  TITLE: "Miru | Managing Projects",
  DESCRIPTION: `Get comprehensive and in-depth reports on all projects handled by your teams and monitor team contributions in individual projects.`,
  KEYWORDS: PAGE_KEYWORDS,
  CANONICAL_URL: `https://miru.so${PATH.MANAGING_PROJECTS_FEATURE}`,
};
