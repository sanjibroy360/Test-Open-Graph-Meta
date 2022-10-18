import React from "react";
import { SOCIAL_MEDIA_LINKS } from "./constants";

function SocialMediaLinks() {
  return (
    <div className="flex gap-x-5 items-center pb-6">
      {SOCIAL_MEDIA_LINKS?.map((link) => (
        <div key={link.name}>
          <a
            href={link?.redirectTo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            {link.icon}
          </a>
        </div>
      ))}
    </div>
  );
}

export default React.memo(SocialMediaLinks);
