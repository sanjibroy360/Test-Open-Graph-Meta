import MiruTimeTrackingScreenImage from "assets/miru-time-tracking-screen.svg";
import TimerIcon from "assets/blue-timer-icon.svg";
import { PATH } from "constants/routes";
import { PAGE_KEYWORDS } from "constants/common";

export const FEATURE_DETAILS = {
  featureTexts: {
    icon: TimerIcon,
    title: (
      <>
        Time&nbsp;
        <br className="lg:block hidden" />
        Tracking
      </>
    ),
    description: `Utilize our easy-to-use intuitive free time-tracking software to capture team efforts effortlessly.`,
    buttonText: "Get Started",
  },
  featureScreenImage: MiruTimeTrackingScreenImage,
  benefits: [
    {
      title: (
        <>
          Workload
          <br />
          management
        </>
      ),
      description: `Make the job of your HR team as easy as ever by tracking team PTOs, their overall working hours, & time distribution across several projects`,
    },
    {
      title: (
        <>
          Overview of
          <br />
          projects
        </>
      ),
      description: `Utilize our most intuitive tool to get a detailed representation of your employees' projects & the amount of time they invested in each project.`,
    },
    {
      title: (
        <>
          Automated
          <br />
          reminders
        </>
      ),
      description: `Initiate automatic reminders to regularly motivate your team to fill their timesheets.`,
    },
  ],
};

export const PAGE_META = {
  TITLE: "Miru | Time Tracking",
  DESCRIPTION: `Utilize our easy-to-use intuitive free time-tracking software to capture team efforts effortlessly.`,
  KEYWORDS: PAGE_KEYWORDS,
  CANONICAL_URL: `https://miru.so${PATH.TIME_TRACKING_FEATURE}`,
};
