import { useState } from "react";
import { siteConfig } from "../constants/site";

export function ProfilePhoto() {
  const [imageIndex, setImageIndex] = useState(0);
  const sources = ["profile.webp", "profile.jpg"];
  return (
    <div className="profile-photo">
      {imageIndex < sources.length ? (
        <img
          src={`${siteConfig.baseUrl}images/${sources[imageIndex]}`}
          alt="João Victor Alves de Abreu"
          width={288}
          height={288}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          onError={() => setImageIndex((index) => index + 1)}
        />
      ) : (
        <span
          role="img"
          aria-label="João Victor Alves de Abreu"
          className="text-5xl"
        >
          JV
        </span>
      )}
    </div>
  );
}
