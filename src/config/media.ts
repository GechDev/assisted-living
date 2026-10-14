/**
 * Central image registry — property photos live in public/assets (never rename originals).
 * Public URLs: /assets/<filename> with spaces encoded as %20.
 */

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  label: string;
  category: string;
  /** Large tile in the editorial gallery grid */
  featured?: boolean;
  /** Full-resolution local asset (use native img in lightbox) */
  isPropertyPhoto?: boolean;
};

export function assetPath(filename: string): string {
  return `/assets/${encodeURIComponent(filename)}`;
}

/** Original filenames in public/assets */
export const propertyFiles = {
  livingStaged: "image.png",
  livingUnfurnished: "image copy.png",
  livingOpenConcept: "image copy 2.png",
  diningStaged: "image copy 3.png",
  diningEmpty: "image copy 4.png",
  kitchenLivingView: "image copy 5.png",
  kitchenMain: "image copy 6.png",
  kitchenToDining: "image copy 7.png",
  bedroomSuite: "image copy 8.png",
  bathroom: "image copy 9.png",
  mudroomStorage: "image copy 10.png",
  lowerLoungeStaged: "image copy 11.png",
  lowerLevelEmpty: "image copy 12.png",
  lowerLevelStove: "image copy 13.png",
  billiardsRoom: "image copy 14.png",
  lowerLevelOpen: "image copy 15.png",
  patioFirePit: "image copy 16.png",
  exteriorRear: "image copy 17.png",
  exteriorDriveway: "image copy 18.png",
  exteriorFront: "image copy 19.png",
  neighborhoodAerial: "image copy 20.png",
} as const;

function property(
  id: string,
  file: (typeof propertyFiles)[keyof typeof propertyFiles],
  alt: string,
  label: string,
  category: string,
  featured?: boolean
): GalleryImage {
  return {
    id,
    src: assetPath(file),
    alt,
    label,
    category,
    featured,
    isPropertyPhoto: true,
  };
}

/** Curated sequence: property photos first, then select reference stills for care/context */
export const GALLERY_IMAGES: GalleryImage[] = [
  property(
    "exterior-front",
    propertyFiles.exteriorFront,
    "Front exterior of Fresh Start House with mature landscaping",
    "Front Exterior",
    "Exterior",
    true
  ),
  property(
    "living-staged",
    propertyFiles.livingStaged,
    "Staged living room with fireplace, built-in shelving, and seating",
    "Living Room",
    "Living Spaces"
  ),
  property(
    "dining-staged",
    propertyFiles.diningStaged,
    "Dining area set for meals with view toward the kitchen",
    "Dining Area",
    "Dining"
  ),
  property(
    "kitchen-main",
    propertyFiles.kitchenMain,
    "Kitchen with wood cabinetry, granite counters, and stainless appliances",
    "Kitchen",
    "Dining"
  ),
  property(
    "patio-firepit",
    propertyFiles.patioFirePit,
    "Backyard patio with fire pit and green lawn",
    "Patio & Fire Pit",
    "Outdoors",
    true
  ),
  property(
    "exterior-rear",
    propertyFiles.exteriorRear,
    "Rear view of the home opening to the backyard",
    "Backyard View",
    "Exterior"
  ),
  property(
    "bedroom-suite",
    propertyFiles.bedroomSuite,
    "Bedroom with hardwood floors and built-in closet storage",
    "Bedroom Suite",
    "Bedrooms"
  ),
  property(
    "bathroom",
    propertyFiles.bathroom,
    "Bathroom with walk-in shower and vanity",
    "Bathroom",
    "Bedrooms"
  ),
  property(
    "lower-lounge",
    propertyFiles.lowerLoungeStaged,
    "Finished lower-level lounge with seating and wood stove",
    "Lower-Level Lounge",
    "Living Spaces"
  ),
  property(
    "billiards",
    propertyFiles.billiardsRoom,
    "Billiards and recreation room on the lower level",
    "Recreation Room",
    "Activities"
  ),
  property(
    "mudroom",
    propertyFiles.mudroomStorage,
    "Mudroom with built-in coat hooks and storage cubbies",
    "Entry & Storage",
    "Living Spaces"
  ),
  property(
    "living-open",
    propertyFiles.livingOpenConcept,
    "Open main-level living area with carpet and hardwood transition",
    "Main Living Area",
    "Living Spaces"
  ),
  property(
    "living-fireplace",
    propertyFiles.livingUnfurnished,
    "Living room with fireplace and built-in bookcases",
    "Fireplace & Built-ins",
    "Living Spaces"
  ),
  property(
    "kitchen-dining-view",
    propertyFiles.kitchenToDining,
    "View from the kitchen toward the dining area and living space",
    "Kitchen & Dining Flow",
    "Dining"
  ),
  property(
    "exterior-driveway",
    propertyFiles.exteriorDriveway,
    "Front driveway and garage approach",
    "Driveway & Garage",
    "Exterior"
  ),
  property(
    "neighborhood-aerial",
    propertyFiles.neighborhoodAerial,
    "Aerial view of the tree-lined Apple Valley neighborhood",
    "Neighborhood",
    "Exterior"
  ),
  property(
    "lower-level-open",
    propertyFiles.lowerLevelOpen,
    "Spacious finished lower level with sage green accents",
    "Lower Level",
    "Activities"
  ),
  {
    id: "ref-garden-lounge",
    src: "/images/facility/garden_lounge_staged_fireplace.png",
    alt: "Reference: comfortable lounge seating by a fireplace",
    label: "Lounge Seating",
    category: "Living Spaces",
  },
  {
    id: "ref-accessible-bath",
    src: "/images/facility/accessible_bathroom_walkin_shower.png",
    alt: "Reference: accessible walk-in shower bathroom",
    label: "Accessible Bath",
    category: "Care & Safety",
  },
  {
    id: "care-compassion",
    src: "/images/caregiver_1791526839656.jpg",
    alt: "Caregiver spending time with a resident",
    label: "Compassionate Care",
    category: "Care & Safety",
  },
];

export function getGalleryIndex(id: string): number {
  const index = GALLERY_IMAGES.findIndex((img) => img.id === id);
  return index >= 0 ? index : 0;
}

export const HERO_SLIDES = [
  {
    src: assetPath(propertyFiles.exteriorFront),
    alt: "Fresh Start House front exterior nestled among mature trees",
  },
  {
    src: "/images/hero_1791526829125.jpg",
    alt: "Caregiver providing compassionate, personalized care at Fresh Start House",
  },
  {
    src: "/images/assisted_living_dining_1791538297610.jpg",
    alt: "Residents enjoying elegant, sociable restaurant-style dining",
  },
] as const;

export const HOME_SPACE_CARDS = [
  {
    id: "living-room",
    title: "Living Room",
    subtitle: "Cozy & Social",
    galleryId: "living-staged",
    image: assetPath(propertyFiles.livingStaged),
  },
  {
    id: "bedroom",
    title: "Bedroom",
    subtitle: "Restful Suites",
    galleryId: "bedroom-suite",
    image: assetPath(propertyFiles.bedroomSuite),
  },
  {
    id: "dining-room",
    title: "Dining Room",
    subtitle: "Chef-Prepared",
    galleryId: "dining-staged",
    image: assetPath(propertyFiles.diningStaged),
  },
  {
    id: "activity-room",
    title: "Activities",
    subtitle: "Recreation & Games",
    galleryId: "billiards",
    image: assetPath(propertyFiles.billiardsRoom),
  },
  {
    id: "outdoor",
    title: "Outdoor",
    subtitle: "Gardens & Patio",
    galleryId: "patio-firepit",
    image: assetPath(propertyFiles.patioFirePit),
  },
] as const;

export const PROPERTY_SPACES = [
  {
    id: "living-room",
    title: "Living Room",
    subtitle: "Cozy & Social",
    description:
      "A warm gathering space with fireplace, built-in shelving, and comfortable seating for conversation and relaxation.",
    galleryId: "living-staged",
    image: assetPath(propertyFiles.livingStaged),
  },
  {
    id: "bedroom",
    title: "Bedroom Suites",
    subtitle: "Restful & Private",
    description:
      "Private suites with hardwood floors, generous closet storage, and calm, home-like finishes.",
    galleryId: "bedroom-suite",
    image: assetPath(propertyFiles.bedroomSuite),
  },
  {
    id: "dining-room",
    title: "Dining Room",
    subtitle: "Shared Meals",
    description:
      "A bright dining area connected to the kitchen — ideal for chef-prepared meals and family-style gatherings.",
    galleryId: "dining-staged",
    image: assetPath(propertyFiles.diningStaged),
  },
  {
    id: "kitchen",
    title: "Kitchen",
    subtitle: "Chef-Prepared Meals",
    description:
      "A full kitchen with granite counters, stainless appliances, and pantry storage to support nutritious daily dining.",
    galleryId: "kitchen-main",
    image: assetPath(propertyFiles.kitchenMain),
  },
  {
    id: "activity-room",
    title: "Recreation Room",
    subtitle: "Games & Social Time",
    description:
      "A finished lower level with room for billiards, conversation, and structured activities.",
    galleryId: "billiards",
    image: assetPath(propertyFiles.billiardsRoom),
  },
  {
    id: "outdoor",
    title: "Outdoor Spaces",
    subtitle: "Patio & Lawn",
    description:
      "A fenced backyard with patio pavers, fire pit, and mature trees for fresh air and peaceful afternoons.",
    galleryId: "patio-firepit",
    image: assetPath(propertyFiles.patioFirePit),
  },
] as const;

export const FEATURED_BANNER_IMAGE = assetPath(propertyFiles.lowerLoungeStaged);

export const LIFE_AT_HERO_IMAGE = assetPath(propertyFiles.exteriorFront);
