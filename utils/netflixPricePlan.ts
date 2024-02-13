import { NetflixPlans } from "./typings";

export const chooseNetflixPlan: NetflixPlans[] = [
  {
    title: "Premium",
    res: "4K + HDR",
    gradient: "to-red-500",
    offers: [
      { feature: "Monthly price", value: "₦4,400" },
      { feature: "Video and sound quality", value: "Best" },
      {
        feature: "Resolution",
        value: "4K (Ultra HD) + HDR",
      },
      {
        feature: "Spatial audio (immersive sound)",
        value: "Included",
      },
      {
        feature: "Supported devices",
        value: "TV, computer, mobile phone, tablet",
      },
      { feature: "Simultaneous streams", value: "4" },
      { feature: "Downloaded devices", value: "6" },
    ],
  },
  {
    title: "Standard",
    res: "1080p",
    gradient: "to-red-600",
    offers: [
      { feature: "Monthly price", value: "₦3,600" },
      { feature: "Video and sound quality", value: "Best" },
      {
        feature: "Resolution",
        value: "4K (Ultra HD) + HDR",
      },
      {
        feature: "Spatial audio (immersive sound)",
        value: "Included",
      },
      {
        feature: "Supported devices",
        value: "TV, computer, mobile phone, tablet",
      },
      { feature: "Simultaneous streams", value: "4" },
      { feature: "Downloaded devices", value: "6" },
    ],
  },
  {
    title: "Basic",
    res: "720p",
    gradient: "to-purple-400",
    offers: [
      { feature: "Monthly price", value: "₦2,900" },
      { feature: "Video and sound quality", value: "Good" },
      { feature: "Resolution", value: "720p(HD)" },
      {
        feature: "Spatial audio (immersive sound)",
        value: "Included",
      },
      {
        feature: "Supported devices",
        value: "TV, computer, mobile phone, tablet",
      },
      {
        feature:
          "Devices your household can watch at the same time",
        value: "1",
      },
      { feature: "Downloaded devices", value: "1" },
    ],
  },
  {
    title: "Mobile",
    res: "480p",
    gradient: "to-blue-600",
    offers: [
      { feature: "Monthly price", value: "₦1,200" },
      { feature: "Video and sound quality", value: "Fair" },
      { feature: "Resolution", value: "480p" },
      {
        feature: "Spatial audio (immersive sound)",
        value: "Included",
      },
      {
        feature: "Supported devices",
        value: "Mobile phone, tablet",
      },
      { feature: "Simultaneous streams", value: "1" },
      { feature: "Downloaded devices", value: "1" },
    ],
  },
];
