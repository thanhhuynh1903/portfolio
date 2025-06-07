"use client";

import Image from "next/image";

export default function RoundedImageBox() {
  return (
    <div className="bg-black flex items-center">
      <div className="flex items-center">
        {/* Rounded pill-shaped image container */}
        <div className="rounded-full overflow-hidden h-[80px] w-[250px]">
          <Image
            src="/picture2.jpeg"
            alt="People in conversation"
            width={320}
            height={96}
            className="w-full h-full object-cover"
            style={{objectPosition:"top"}}
          />
        </div>
      </div>
    </div>
  );
}
