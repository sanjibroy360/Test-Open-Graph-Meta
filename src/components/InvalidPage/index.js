import { PATH } from "constants/routes";
import { SmileyXEyes } from "phosphor-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { PAGE_META } from "./constants";

function InvalidPage() {
  const navigate = useNavigate();

  const handleRedirectToHomePage = () => {
    navigate(PATH.HOME);
  };

  return (
    <section style={{ background: "#F5F7F9" }}>
      <Helmet>
        <title>{PAGE_META.TITLE}</title>
        <meta name="description" content={PAGE_META.DESCRIPTION} />
        <meta name="keywords" content={PAGE_META.KEYWORDS} />
        <link rel="canonical" href={PAGE_META.CANONICAL_URL} />
        <meta name="og:title" content={PAGE_META.TITLE} />
        <meta name="og:description" content={PAGE_META.DESCRIPTION} />
        <meta name="og:url" content={PAGE_META.CANONICAL_URL} />
        <meta name="og:type" content="article" />
        <meta name="og:site_name" content="Miru" />
      </Helmet>

      <div className="container text-center lg:min-h-[70vh] min-h-[50vh] ">
        <div className="h-[100%] py-24 flex flex-col items-center gap-y-6">
          <div className="">
            <SmileyXEyes size={96} className="text-center text-[#4A485A]" />
          </div>
          <p className="font-manrope md:text-4xl text-2xl text-[#4A485A] font-bold">
            404, Page not found!
          </p>
          <p className="font-manrope md:text-base text-sm font-medium tracking-wide text-[#4A485A]">
            The page you are looking for is either moved or does not exist.
          </p>
          <button
            className="font-manrope md:text-sm font-semibold p-3 text-[#4A485A] rounded-lg bg-slate-200 text-sm cursor-pointer hover:text-[#5B34EA] shadow hover:shadow-sm tracking-[-0.25px]"
            onClick={handleRedirectToHomePage}
          >
            Back to Home page
          </button>
        </div>
      </div>
    </section>
  );
}

export default React.memo(InvalidPage);
