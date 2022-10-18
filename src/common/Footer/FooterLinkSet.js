import React from "react";
import LinkSetHeader from "./LinkSetHeader";
import SingleFooterLink from "./SingleFooterLink";

function FooterLinkSet({ links = [] }) {
  return (
    <div className="lg:basis-1/4 basis-[49.77%]">
      {links.map((link) =>
        link.isLinkSetHeader ? (
          <LinkSetHeader key={link.text + link.text} text={link.text} />
        ) : (
          <SingleFooterLink
            key={link.text + link.redirectTo}
            text={link.text}
            redirectTo={link.redirectTo}
            sectionHeader={links[0].text}
          />
        )
      )}
    </div>
  );
}

export default React.memo(FooterLinkSet);
