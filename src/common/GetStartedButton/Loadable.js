import lazyload from "utils/lazyload";

const GetStartedButton = lazyload(() => import("./index"));

export default GetStartedButton;
