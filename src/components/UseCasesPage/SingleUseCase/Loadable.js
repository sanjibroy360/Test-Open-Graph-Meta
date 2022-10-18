import lazyload from "utils/lazyload";

const SingleUseCase = lazyload(() => import("./index"));

export default SingleUseCase;
