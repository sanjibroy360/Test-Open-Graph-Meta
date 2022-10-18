import lazyload from "utils/lazyload";

const HeroSection = lazyload(() => import("./index"));

export default HeroSection;
