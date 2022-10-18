import { MIRU_APP_SIGN_UP_PAGE } from "constants/routes";

const BUTTON_TYPE = {
  LEARN_MORE: "Learn More",
  GET_STARTED: "Get Started",
};

export const SECTION_CONTENT = {
  id: "Section: Start tracking time today",
  backgroundColor: "#FFFFFF",
  icon: null,
  texts: {
    title: "Start tracking time today",
    description: `Track your time anytime, anywhere using Miru. Add PTOs, clients, and projects with our easy-to-use free time tracking software.`,
  },
  buttonType: BUTTON_TYPE.GET_STARTED,
  buttonText: "Get Started",
  onButtonClickRedirectTo: MIRU_APP_SIGN_UP_PAGE,
};
