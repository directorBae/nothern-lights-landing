export type Admit = {
  num: string;
  school: string;
  major: string;
  scholar: string;
  feature?: boolean;
};

export const ADMITS: Admit[] = [
  {
    num: "★ ADMIT 01",
    school: "Georgia Institute of Technology",
    major: "Material Science",
    scholar: "Admitted · 2025",
  },
  {
    num: "★ ADMIT 02",
    school: "UC San Francisco",
    major: "Biology",
    scholar: "Scholarship · $108,000",
  },
  {
    num: "★ ADMIT 03",
    school: "Purdue University",
    major: "Animal Science",
    scholar: "Admitted · 2025",
  },
  {
    num: "★ ADMIT 04",
    school: "UC Berkeley",
    major: "Business Administration",
    scholar: "Admitted · 2025",
  },
  {
    num: "★ ADMIT 05",
    school: "University of Wisconsin–Madison",
    major: "Mechanical Engineering",
    scholar: "Admitted · 2025",
  },
  {
    num: "★ ADMIT 06",
    school: "ESSEC Business School",
    major: "Business Administration",
    scholar: "Full Scholarship",
  },
  {
    num: "★ ADMIT 07",
    school: "New York University",
    major: "Economics",
    scholar: "Admitted · 2025",
  },
  {
    num: "★ ADMIT 08",
    school: "UIUC",
    major: "Business Administration",
    scholar: "Admitted · 2025",
  },
  {
    num: "★ ADMIT 09",
    school: "UC San Diego",
    major: "Biology",
    scholar: "Conditional Admit",
  },
  {
    num: "★ ADMIT 10",
    school: "University of Washington",
    major: "Computer Engineering",
    scholar: "Admitted · 2025",
  },
  {
    num: "★ ADMIT 11",
    school: "UIUC",
    major: "Linguistics",
    scholar: "Admitted · 2025",
  },
  {
    num: "+",
    school: "more",
    major: "",
    scholar: "→ Contact",
    feature: true,
  },
];
