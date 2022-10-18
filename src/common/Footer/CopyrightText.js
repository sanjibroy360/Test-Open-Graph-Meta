import React, { useEffect, useState } from "react";

function CopyrightText() {
  const [currentYear, setCurrentYear] = useState(2022);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();

    if (year?.toString()?.length === 4) {
      setCurrentYear(year);
    }
  }, []);

  return (
    <p className="font-manrope font-normal not-italic text-sm text-[#9D85F2]">
      &#169; {currentYear} Miru, Inc.
    </p>
  );
}

export default CopyrightText;
