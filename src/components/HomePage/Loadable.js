import lazyload from "utils/lazyload";

const HomePage = lazyload(() => import("./index"));

export default HomePage;
