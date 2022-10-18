import lazyload from "utils/lazyload";

const PaymentAndInvoicesFeaturePage = lazyload(() => import("./index"));

export default PaymentAndInvoicesFeaturePage;
