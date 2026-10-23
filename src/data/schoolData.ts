export interface Branch {
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  est: number;
  type: "Head Branch" | "Senior Sec." | "Secondary" | "Franchise" | "New Campus";
  students: number;
  capacity: number;
  teachers: number;
  classes: string;
  campus: string;
  facilities: string[];
}

export interface Territory {
  city: string;
  state: string;
  lat: number;
  lng: number;
  model: string;
  status: "open" | "talks";
}

export interface FranchiseModel {
  id: string;
  name: string;
  tagline: string;
  classes: string;
  area: string;
  builtUpArea?: string;
  franchiseFee: string;
  feeTiers?: { tier1: string; tier2: string; other: string };
  keyHighlights: string[];
  features: string[];
  curriculum: string;
  popular?: boolean;
}

export interface SupportService {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverables: string[];
  icon: string;
}

export interface ImplementationStep {
  dayRange: string;
  phase: string;
  title: string;
  description: string;
  tasks: string[];
}

export const INFRA_FACILITIES: Record<string, { label: string; icon: string }> = {
  SC: { label: "Smart Interactive Classrooms", icon: "MonitorPlay" },
  SL: { label: "Advanced Science Labs (Physics, Chem, Bio)", icon: "FlaskConical" },
  CL: { label: "Computer & AI Lab", icon: "Laptop" },
  RB: { label: "Robotics & Innovation Lab", icon: "Bot" },
  LB: { label: "Resource Library & Media Center", icon: "BookOpen" },
  AU: { label: "Air-Conditioned Auditorium", icon: "Presentation" },
  SP: { label: "Swimming Pool (Covered/Olympic)", icon: "Waves" },
  SX: { label: "Multi-Sport Complex & Grounds", icon: "Trophy" },
  MU: { label: "Music & Performing Arts Studio", icon: "Music" },
  PA: { label: "Child-Friendly Theme Play Area", icon: "Smile" },
  TR: { label: "GPS-Tracked Transportation Fleet", icon: "Bus" },
  HS: { label: "Boarding & Hostel Facilities", icon: "Building2" },
};

export const BRANCHES: Branch[] = [
  {
    "name": "Head Branch",
    "city": "New Delhi",
    "state": "Delhi",
    "lat": 28.61,
    "lng": 77.21,
    "est": 2008,
    "type": "Head Branch",
    "students": 2600,
    "capacity": 3000,
    "teachers": 130,
    "classes": "Nursery\u2013XII",
    "campus": "6 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SP",
      "SX",
      "MU",
      "TR",
      "HS"
    ]
  },
  {
    "name": "Dwarka",
    "city": "Dwarka",
    "state": "Delhi",
    "lat": 28.59,
    "lng": 77.05,
    "est": 2011,
    "type": "Senior Sec.",
    "students": 1900,
    "capacity": 2200,
    "teachers": 96,
    "classes": "Nursery\u2013XII",
    "campus": "4 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Rohini",
    "city": "Rohini",
    "state": "Delhi",
    "lat": 28.74,
    "lng": 77.07,
    "est": 2014,
    "type": "Secondary",
    "students": 1300,
    "capacity": 1600,
    "teachers": 68,
    "classes": "Nursery\u2013X",
    "campus": "3 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Gurugram",
    "city": "Gurugram",
    "state": "Haryana",
    "lat": 28.46,
    "lng": 77.03,
    "est": 2012,
    "type": "Senior Sec.",
    "students": 2100,
    "capacity": 2400,
    "teachers": 104,
    "classes": "Nursery\u2013XII",
    "campus": "5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SP",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Faridabad",
    "city": "Faridabad",
    "state": "Haryana",
    "lat": 28.41,
    "lng": 77.32,
    "est": 2017,
    "type": "Franchise",
    "students": 900,
    "capacity": 1300,
    "teachers": 48,
    "classes": "Nursery\u2013VIII",
    "campus": "2.5 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "SX",
      "PA",
      "TR"
    ]
  },
  {
    "name": "Noida",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "lat": 28.54,
    "lng": 77.39,
    "est": 2010,
    "type": "Senior Sec.",
    "students": 2200,
    "capacity": 2500,
    "teachers": 110,
    "classes": "Nursery\u2013XII",
    "campus": "5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SP",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.85,
    "lng": 80.95,
    "est": 2013,
    "type": "Senior Sec.",
    "students": 1750,
    "capacity": 2000,
    "teachers": 88,
    "classes": "Nursery\u2013XII",
    "campus": "4 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "AU",
      "SX",
      "MU",
      "TR",
      "HS"
    ]
  },
  {
    "name": "Kanpur",
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "lat": 26.45,
    "lng": 80.33,
    "est": 2018,
    "type": "Franchise",
    "students": 820,
    "capacity": 1200,
    "teachers": 44,
    "classes": "Nursery\u2013VIII",
    "campus": "2 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "SX",
      "PA",
      "TR"
    ]
  },
  {
    "name": "Varanasi",
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "lat": 25.32,
    "lng": 82.97,
    "est": 2021,
    "type": "New Campus",
    "students": 460,
    "capacity": 1000,
    "teachers": 28,
    "classes": "Nursery\u2013V",
    "campus": "2 acres",
    "facilities": [
      "SC",
      "LB",
      "PA",
      "TR"
    ]
  },
  {
    "name": "Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.91,
    "lng": 75.79,
    "est": 2012,
    "type": "Senior Sec.",
    "students": 1800,
    "capacity": 2100,
    "teachers": 92,
    "classes": "Nursery\u2013XII",
    "campus": "4.5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SX",
      "MU",
      "TR",
      "HS"
    ]
  },
  {
    "name": "Udaipur",
    "city": "Udaipur",
    "state": "Rajasthan",
    "lat": 24.59,
    "lng": 73.71,
    "est": 2019,
    "type": "Franchise",
    "students": 700,
    "capacity": 1100,
    "teachers": 38,
    "classes": "Nursery\u2013VIII",
    "campus": "2 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "SX",
      "TR"
    ]
  },
  {
    "name": "Ludhiana",
    "city": "Ludhiana",
    "state": "Punjab",
    "lat": 30.9,
    "lng": 75.86,
    "est": 2016,
    "type": "Secondary",
    "students": 1150,
    "capacity": 1500,
    "teachers": 60,
    "classes": "Nursery\u2013X",
    "campus": "3 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Ahmedabad",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "lat": 23.02,
    "lng": 72.57,
    "est": 2011,
    "type": "Senior Sec.",
    "students": 2000,
    "capacity": 2300,
    "teachers": 100,
    "classes": "Nursery\u2013XII",
    "campus": "5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SP",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Surat",
    "city": "Surat",
    "state": "Gujarat",
    "lat": 21.17,
    "lng": 72.83,
    "est": 2015,
    "type": "Secondary",
    "students": 1250,
    "capacity": 1600,
    "teachers": 64,
    "classes": "Nursery\u2013X",
    "campus": "3 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "TR"
    ]
  },
  {
    "name": "Vadodara",
    "city": "Vadodara",
    "state": "Gujarat",
    "lat": 22.31,
    "lng": 73.18,
    "est": 2020,
    "type": "Franchise",
    "students": 620,
    "capacity": 1000,
    "teachers": 34,
    "classes": "Nursery\u2013VII",
    "campus": "2 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "PA",
      "TR"
    ]
  },
  {
    "name": "Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.08,
    "lng": 72.88,
    "est": 2013,
    "type": "Senior Sec.",
    "students": 1950,
    "capacity": 2200,
    "teachers": 98,
    "classes": "Nursery\u2013XII",
    "campus": "3.5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Pune",
    "city": "Pune",
    "state": "Maharashtra",
    "lat": 18.52,
    "lng": 73.86,
    "est": 2012,
    "type": "Senior Sec.",
    "students": 1850,
    "capacity": 2100,
    "teachers": 94,
    "classes": "Nursery\u2013XII",
    "campus": "4 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SP",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Nagpur",
    "city": "Nagpur",
    "state": "Maharashtra",
    "lat": 21.15,
    "lng": 79.09,
    "est": 2017,
    "type": "Secondary",
    "students": 1050,
    "capacity": 1400,
    "teachers": 56,
    "classes": "Nursery\u2013X",
    "campus": "3 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "TR"
    ]
  },
  {
    "name": "Nashik",
    "city": "Nashik",
    "state": "Maharashtra",
    "lat": 20.0,
    "lng": 73.79,
    "est": 2022,
    "type": "New Campus",
    "students": 380,
    "capacity": 900,
    "teachers": 24,
    "classes": "Nursery\u2013V",
    "campus": "1.5 acres",
    "facilities": [
      "SC",
      "LB",
      "PA",
      "TR"
    ]
  },
  {
    "name": "Bhopal",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "lat": 23.26,
    "lng": 77.41,
    "est": 2014,
    "type": "Secondary",
    "students": 1200,
    "capacity": 1500,
    "teachers": 62,
    "classes": "Nursery\u2013X",
    "campus": "3 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Indore",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "lat": 22.72,
    "lng": 75.86,
    "est": 2013,
    "type": "Senior Sec.",
    "students": 1700,
    "capacity": 2000,
    "teachers": 86,
    "classes": "Nursery\u2013XII",
    "campus": "4 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "lat": 22.57,
    "lng": 88.36,
    "est": 2014,
    "type": "Senior Sec.",
    "students": 1650,
    "capacity": 2000,
    "teachers": 84,
    "classes": "Nursery\u2013XII",
    "campus": "3.5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "AU",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Patna",
    "city": "Patna",
    "state": "Bihar",
    "lat": 25.59,
    "lng": 85.14,
    "est": 2018,
    "type": "Franchise",
    "students": 880,
    "capacity": 1300,
    "teachers": 46,
    "classes": "Nursery\u2013VIII",
    "campus": "2.5 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "SX",
      "TR"
    ]
  },
  {
    "name": "Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "lat": 17.39,
    "lng": 78.49,
    "est": 2011,
    "type": "Senior Sec.",
    "students": 2150,
    "capacity": 2400,
    "teachers": 108,
    "classes": "Nursery\u2013XII",
    "campus": "5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SP",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Warangal",
    "city": "Warangal",
    "state": "Telangana",
    "lat": 17.97,
    "lng": 79.59,
    "est": 2020,
    "type": "Franchise",
    "students": 590,
    "capacity": 1000,
    "teachers": 32,
    "classes": "Nursery\u2013VII",
    "campus": "2 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "PA",
      "TR"
    ]
  },
  {
    "name": "Visakhapatnam",
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "lat": 17.69,
    "lng": 83.22,
    "est": 2016,
    "type": "Secondary",
    "students": 1100,
    "capacity": 1500,
    "teachers": 58,
    "classes": "Nursery\u2013X",
    "campus": "3 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "TR"
    ]
  },
  {
    "name": "Vijayawada",
    "city": "Vijayawada",
    "state": "Andhra Pradesh",
    "lat": 16.51,
    "lng": 80.65,
    "est": 2019,
    "type": "Franchise",
    "students": 740,
    "capacity": 1100,
    "teachers": 40,
    "classes": "Nursery\u2013VIII",
    "campus": "2 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "SX",
      "TR"
    ]
  },
  {
    "name": "Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.97,
    "lng": 77.59,
    "est": 2010,
    "type": "Senior Sec.",
    "students": 2300,
    "capacity": 2600,
    "teachers": 116,
    "classes": "Nursery\u2013XII",
    "campus": "5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SP",
      "SX",
      "MU",
      "TR",
      "HS"
    ]
  },
  {
    "name": "Mysuru",
    "city": "Mysuru",
    "state": "Karnataka",
    "lat": 12.3,
    "lng": 76.64,
    "est": 2015,
    "type": "Secondary",
    "students": 1150,
    "capacity": 1500,
    "teachers": 60,
    "classes": "Nursery\u2013X",
    "campus": "3 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Hubballi",
    "city": "Hubballi",
    "state": "Karnataka",
    "lat": 15.36,
    "lng": 75.12,
    "est": 2018,
    "type": "Franchise",
    "students": 800,
    "capacity": 1200,
    "teachers": 42,
    "classes": "Nursery\u2013VIII",
    "campus": "2.5 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "SX",
      "TR"
    ]
  },
  {
    "name": "Ballari",
    "city": "Ballari",
    "state": "Karnataka",
    "lat": 15.14,
    "lng": 76.92,
    "est": 2021,
    "type": "Franchise",
    "students": 560,
    "capacity": 1000,
    "teachers": 30,
    "classes": "Nursery\u2013VII",
    "campus": "2 acres",
    "facilities": [
      "SC",
      "CL",
      "LB",
      "PA",
      "TR"
    ]
  },
  {
    "name": "Mangaluru",
    "city": "Mangaluru",
    "state": "Karnataka",
    "lat": 12.91,
    "lng": 74.86,
    "est": 2023,
    "type": "New Campus",
    "students": 340,
    "capacity": 900,
    "teachers": 22,
    "classes": "Nursery\u2013V",
    "campus": "1.5 acres",
    "facilities": [
      "SC",
      "LB",
      "PA",
      "TR"
    ]
  },
  {
    "name": "Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "lat": 13.08,
    "lng": 80.27,
    "est": 2012,
    "type": "Senior Sec.",
    "students": 1900,
    "capacity": 2200,
    "teachers": 96,
    "classes": "Nursery\u2013XII",
    "campus": "4 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "RB",
      "LB",
      "AU",
      "SX",
      "MU",
      "TR"
    ]
  },
  {
    "name": "Coimbatore",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "lat": 11.02,
    "lng": 76.96,
    "est": 2017,
    "type": "Secondary",
    "students": 1000,
    "capacity": 1400,
    "teachers": 54,
    "classes": "Nursery\u2013X",
    "campus": "3 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "TR"
    ]
  },
  {
    "name": "Kochi",
    "city": "Kochi",
    "state": "Kerala",
    "lat": 9.93,
    "lng": 76.27,
    "est": 2016,
    "type": "Secondary",
    "students": 1080,
    "capacity": 1400,
    "teachers": 58,
    "classes": "Nursery\u2013X",
    "campus": "2.5 acres",
    "facilities": [
      "SC",
      "SL",
      "CL",
      "LB",
      "SX",
      "MU",
      "TR"
    ]
  }
];

export const TERRITORIES: Territory[] = [
  { city: "Agra", state: "Uttar Pradesh", lat: 27.18, lng: 78.01, model: "K–8 School", status: "open" },
  { city: "Prayagraj", state: "Uttar Pradesh", lat: 25.44, lng: 81.85, model: "K–12 School", status: "open" },
  { city: "Dehradun", state: "Uttarakhand", lat: 30.32, lng: 78.03, model: "K–12 School", status: "open" },
  { city: "Chandigarh", state: "Chandigarh", lat: 30.73, lng: 76.78, model: "K–8 School", status: "talks" },
  { city: "Jodhpur", state: "Rajasthan", lat: 26.24, lng: 73.02, model: "Pre-School", status: "open" },
  { city: "Rajkot", state: "Gujarat", lat: 22.3, lng: 70.8, model: "K–8 School", status: "open" },
  { city: "Aurangabad", state: "Maharashtra", lat: 19.88, lng: 75.34, model: "K–8 School", status: "open" },
  { city: "Raipur", state: "Chhattisgarh", lat: 21.25, lng: 81.63, model: "K–12 School", status: "open" },
  { city: "Ranchi", state: "Jharkhand", lat: 23.34, lng: 85.31, model: "K–8 School", status: "open" },
  { city: "Bhubaneswar", state: "Odisha", lat: 20.3, lng: 85.82, model: "K–12 School", status: "talks" },
  { city: "Guwahati", state: "Assam", lat: 26.14, lng: 91.74, model: "K–8 School", status: "open" },
  { city: "Davanagere", state: "Karnataka", lat: 14.46, lng: 75.92, model: "Pre-School", status: "open" },
  { city: "Madurai", state: "Tamil Nadu", lat: 9.93, lng: 78.12, model: "K–8 School", status: "open" },
  { city: "Thiruvananthapuram", state: "Kerala", lat: 8.52, lng: 76.94, model: "Pre-School", status: "talks" },
];

export const FRANCHISE_MODELS: FranchiseModel[] = [
  {
    id: "idps-junior",
    name: "1. IDPS Junior",
    tagline: "Exclusive Play & Early Childhood Wing",
    classes: "Pre-Nursery to Class II",
    area: "3,000 Sq. Ft. – 5,000 Sq. Ft.",
    franchiseFee: "₹3 Lakhs – ₹10 Lakhs (Location Wise)",
    curriculum: "Activity-Based Foundational Learning & Montessori Hybrid",
    keyHighlights: [
      "Activity-based modules & sensory learning corners",
      "Safe child-friendly interiors and splash/play zones",
      "Smart pre-primary infrastructure with audio-visual immersion",
      "Comprehensive parent engagement & developmental milestones"
    ],
    features: [
      "Pre-Primary theme classrooms",
      "Foundational literacy and numeracy kits",
      "Interactive digital tablets and smart display",
      "Teacher training and daily syllabus planners"
    ]
  },
  {
    id: "idps-primary",
    name: "2. IDPS Primary",
    tagline: "Exclusive Primary Tier Education",
    classes: "Pre-Nursery to Class V",
    area: "5,000 Sq. Ft. – 10,000 Sq. Ft.",
    franchiseFee: "₹5 Lakhs – ₹12 Lakhs (Location Wise)",
    curriculum: "Foundational & Preparatory CBSE / Integrated Pedagogy",
    keyHighlights: [
      "Balanced focus on academics and creative expressions",
      "Physical discipline, martial arts, and team sports basics",
      "Early linguistic fluency and expressive communication",
      "Seamless digital progress tracking and report cards"
    ],
    features: [
      "Dedicated primary science exploration center",
      "Junior computer and coding laboratory",
      "Library corner with 1,500+ curated titles",
      "Regular parent-teacher academic review protocols"
    ]
  },
  {
    id: "idps-elementary",
    name: "3. IDPS Elementary",
    tagline: "Exclusive Middle Foundation Setup",
    classes: "Pre-Nursery to Class VIII",
    area: "10,000 Sq. Ft. – 15,000 Sq. Ft.",
    franchiseFee: "₹10 Lakhs – ₹15 Lakhs (Location Wise)",
    curriculum: "CBSE Middle School Framework with Career Foundations",
    keyHighlights: [
      "Advanced academic modules with experiential science",
      "Integrated early leadership and public speaking clubs",
      "Complete physics, chemistry, and biology demo labs",
      "Olympiad, NTSE, and competitive exam foundation tracks"
    ],
    features: [
      "Full digital smart class setup across all divisions",
      "Robotics and AI foundational tinker lab",
      "Spacious dance, vocal music, and fine arts hall",
      "Faculty recruitment and annual certification by Central Office"
    ]
  },
  {
    id: "idps-k12",
    name: "4. IDPS K-12 Flagship",
    tagline: "Complete 10+2 Senior Secondary Campus",
    classes: "Pre-Nursery to Class XII",
    area: "2 Acres",
    builtUpArea: "30,000 Sq. Ft. minimum",
    franchiseFee: "₹25 Lakhs – ₹50 Lakhs (+ GST)",
    feeTiers: {
      tier1: "₹50 Lakhs",
      tier2: "₹40 Lakhs",
      other: "₹25 Lakhs"
    },
    popular: true,
    curriculum: "CBSE Board Affiliated (Science, Commerce & Humanities)",
    keyHighlights: [
      "Premier landmark campus serving up to 2,500+ students",
      "Exhaustive CBSE board exam preparation and university counselling",
      "Advanced STEM, Composite Sciences & Computer Laboratories",
      "Multi-acre sports infrastructure (Cricket, Basketball, Swimming)"
    ],
    features: [
      "Centralized ERP, admissions portal and parent mobile app",
      "Comprehensive affiliation guidance and documentation support",
      "High return on capital with estimated 4-5 year break-even",
      "Exclusive territory rights across your designated city sector"
    ]
  },
  {
    id: "idps-girls",
    name: "5. IDPS Girls",
    tagline: "Exclusive K-12 Girls Empowerment School",
    classes: "Pre-Nursery to Class XII",
    area: "2 Acres",
    franchiseFee: "₹15 Lakhs – ₹25 Lakhs (+ GST)",
    feeTiers: {
      tier1: "₹25 Lakhs",
      tier2: "₹20 Lakhs",
      other: "₹15 Lakhs"
    },
    curriculum: "CBSE Academic Framework with Girl-Centric Leadership Tracks",
    keyHighlights: [
      "Specially curated safe, secured, and empowering environment",
      "High-density CCTV security perimeter with biometric access",
      "Self-defense, wellness, sports, and STEM leadership modules",
      "Digital workspaces and future career readiness programs"
    ],
    features: [
      "All-women mentorship circle and guest lectures from female pioneers",
      "Custom sports coaching: archery, martial arts, badminton, football",
      "Healthcare clinic with full-time registered nursing staff",
      "Special scholarship programs for meritorious girl students"
    ]
  },
  {
    id: "idps-premium",
    name: "6. IDPS Premium",
    tagline: "For Tier-1 Metropolitan Hubs (Cambridge & IB)",
    classes: "Pre-Nursery to Class XII (International)",
    area: "5 Acres",
    franchiseFee: "₹35 Lakhs – ₹75 Lakhs (+ GST)",
    feeTiers: {
      tier1: "₹75 Lakhs",
      tier2: "₹50 Lakhs",
      other: "₹35 Lakhs"
    },
    curriculum: "Collaboration with Cambridge Assessment International & IB Board",
    keyHighlights: [
      "Ultra-modern green campus with world-standard architectural aesthetics",
      "Dual curriculum options: CBSE & Cambridge / International Baccalaureate",
      "Global university placement cell with SAT/IELTS and Ivy League guidance",
      "High fee yield potential and elite community positioning"
    ],
    features: [
      "Full climate-controlled academic blocks & Olympic-dimension facilities",
      "World-class maker spaces, artificial intelligence labs & amphitheatre",
      "International exchange programs with partner schools worldwide",
      "Dedicated residential/day-boarding boarding wing options"
    ]
  },
  {
    id: "idps-excellence",
    name: "7. IDPS of Excellence",
    tagline: "For Tier-2 Cities Seeking World-Class Education",
    classes: "Pre-Nursery to Class XII (International Track)",
    area: "2 – 5 Acres",
    franchiseFee: "₹25 Lakhs – ₹50 Lakhs (+ GST)",
    feeTiers: {
      tier1: "₹50 Lakhs",
      tier2: "₹40 Lakhs",
      other: "₹25 Lakhs"
    },
    curriculum: "Premium IB & Cambridge Frameworks with Deep Global Pedagogy",
    keyHighlights: [
      "Designed specifically to deliver world-class infrastructure in Tier-2 hubs",
      "Advanced research & innovation pedagogy for young scientists",
      "International exposure tournaments, MUN, and coding hackathons",
      "Complete university guidance systems matching Tier-1 metros"
    ],
    features: [
      "High prestige brand footprint in growing Tier-2 regional capitals",
      "Turnkey architectural blueprints provided by Central Society",
      "Continuous faculty mentoring from international pedagogical experts",
      "Accelerated enrollment curves driven by unsatisfied regional demand"
    ]
  }
];

export const SUPPORT_SERVICES: SupportService[] = [
  {
    id: 1,
    title: "Website Development",
    subtitle: "Custom Digital Campus & Portal",
    description: "End-to-end bespoke website design and deployment for your campus with online admission enquiry forms, virtual campus tour, fee gateway readiness, and mobile responsiveness.",
    keyDeliverables: ["Dynamic SEO-optimized school website", "Integrated admission inquiry CRM", "Fast cloud hosting & custom domain setup", "Parent notification board"],
    icon: "Globe"
  },
  {
    id: 2,
    title: "Social Media Account Development",
    subtitle: "Brand Presence Across Meta & LinkedIn",
    description: "Creation, verification, and professional setup of campus handles across Facebook, Instagram, YouTube, and LinkedIn, adhering to national IDPS brand standards.",
    keyDeliverables: ["Official brand badge setup", "Custom cover art & profile branding", "Launch countdown campaign templates", "Content calendar for the academic year"],
    icon: "Share2"
  },
  {
    id: 3,
    title: "Google Mapping and Listing",
    subtitle: "Local SEO & Parent Discovery",
    description: "Complete Google Business Profile verification, precise geo-tagging, Google Maps pin listing, and reputation management protocols to ensure top search ranking in your city.",
    keyDeliverables: ["Google Verified Business Profile", "Campus 360° photo upload support", "Local area search optimization", "Parent review monitoring framework"],
    icon: "MapPin"
  },
  {
    id: 4,
    title: "Digital Marketing",
    subtitle: "Targeted High-Conversion Campaigns",
    description: "Centralized marketing campaigns across Google Ads, Meta Ads, and YouTube targeted directly at parents with school-aged children within your campus catchment radius.",
    keyDeliverables: ["Hyper-local geo-fenced ad targeting", "Admission season lead generation", "Optimized ad copy and video reels", "Real-time cost-per-lead tracking reports"],
    icon: "Megaphone"
  },
  {
    id: 5,
    title: "Staff Hiring Support",
    subtitle: "Qualified Educator & Executive Recruitment",
    description: "Assistance in sourcing, screening, panel interviewing, and shortlisting Principal, Academic Coordinators, subject teachers, and administrative personnel.",
    keyDeliverables: ["National job portal advertisements", "Rigorous teacher screening assessments", "Central interview board participation", "Standardized employment contracts & SOPs"],
    icon: "UserCheck"
  },
  {
    id: 6,
    title: "Staff Training & Faculty Academy",
    subtitle: "Continuous Professional Development",
    description: "Comprehensive pre-launch faculty workshops and ongoing training modules covering modern pedagogical methodologies, classroom discipline, and student psychology.",
    keyDeliverables: ["5-Day intensive pre-launch faculty boot camp", "Quarterly teacher skill upgrade workshops", "Central Faculty Academy certification", "Annual teacher assessment matrices"],
    icon: "GraduationCap"
  },
  {
    id: 7,
    title: "Creative and Designs",
    subtitle: "Complete Brand & Print Collaterals",
    description: "High-resolution print and digital artwork including admission brochures, prospectus, outdoor hoardings, uniforms, identity cards, report cards, and event backdrops.",
    keyDeliverables: ["Official IDPS green & gold brand manual", "Ready-to-print prospectus & flyers", "Glow signboards & wayfinding signage", "School diary, student ID & calendar templates"],
    icon: "Palette"
  },
  {
    id: 8,
    title: "Help in Day-to-Day Operations",
    subtitle: "Operational SOPs & School Management",
    description: "Turnkey manuals, operational blueprints, daily timetables, security SOPs, and administrative guidance to run the school smoothly from Day 1.",
    keyDeliverables: ["School Operations Master Manual", "Academic calendar & examination schedules", "Fee collection & accounting guidelines", "Bus transport & security protocols"],
    icon: "Settings"
  },
  {
    id: 9,
    title: "Affiliation Guidance",
    subtitle: "CBSE, ICSE, State & International Accreditations",
    description: "Meticulous guidance through the entire affiliation documentation pipeline, land inspection norms, fire and safety NOCs, society bylaws, and board liaison.",
    keyDeliverables: ["Affiliation checklist and timeline roadmap", "DPR (Detailed Project Report) assistance", "Mock inspection & regulatory compliance audit", "Affiliation dossier preparation support"],
    icon: "Award"
  },
  {
    id: 10,
    title: "Curriculum & Syllabus",
    subtitle: "Standardized Academic Content Delivery",
    description: "Centrally structured curriculum thoroughly aligned with CBSE and international standards, accompanied by detailed lesson plans, worksheets, and teacher resource guides.",
    keyDeliverables: ["Structured syllabus books & workbooks", "Daily lesson plans & pedagogical guides", "Formative & summative examination papers", "STEM & co-curricular activity modules"],
    icon: "BookCheck"
  },
  {
    id: 11,
    title: "Regular Visits & Quality Audits",
    subtitle: "In-Person Quality Assurance & Mentorship",
    description: "Scheduled and surprise inspections by Central Academic Directors and Infrastructure Auditors to review educational delivery, audit safety, and mentor staff.",
    keyDeliverables: ["Quarterly academic audit visits", "Infrastructure and hygiene checks", "Direct parent feedback sessions", "Actionable improvement scorecards"],
    icon: "ShieldCheck"
  }
];

export const FINANCIAL_METRICS = {
  projectOverview: {
    totalLandRequirement: "2 Acres",
    minimumBuiltUpArea: "30,000 Sq. Feet",
    estimatedROIPeriod: "4 – 5 Years",
    initialCoreBaseInvestment: "₹25,00,000"
  },
  projections: [
    {
      year: "1st Year",
      students: 300,
      grossRevenue: "₹1,74,60,000",
      grossRevenueNumber: 17460000,
      grossExpenses: "₹41,28,000",
      grossExpensesNumber: 4128000,
      netProfit: "₹1,33,32,000",
      netProfitNumber: 13332000,
      margin: "76.4%"
    },
    {
      year: "2nd Year",
      students: 500,
      grossRevenue: "₹3,20,10,000",
      grossRevenueNumber: 32010000,
      grossExpenses: "₹42,98,000",
      grossExpensesNumber: 4298000,
      netProfit: "₹2,77,12,000",
      netProfitNumber: 27712000,
      margin: "86.6%"
    },
    {
      year: "3rd Year",
      students: 700,
      grossRevenue: "₹4,92,95,400",
      grossRevenueNumber: 49295400,
      grossExpenses: "₹42,69,760",
      grossExpensesNumber: 4269760,
      netProfit: "₹4,50,25,640",
      netProfitNumber: 45025640,
      margin: "91.3%"
    }
  ],
  feeStructure: [
    {
      head: "Tuition Fee Structure",
      y1: "₹36,000",
      y2: "₹39,600",
      y3: "₹43,560"
    },
    {
      head: "Annual Charges Consolidated",
      y1: "₹24,000",
      y2: "₹26,400",
      y3: "₹29,040"
    },
    {
      head: "Total Annual Fee Pool Per Student",
      y1: "₹60,000",
      y2: "₹66,000",
      y3: "₹72,600"
    },
    {
      head: "Franchisee Allocation Share (%)",
      y1: "95% Share",
      y2: "92% Share",
      y3: "92% Share"
    }
  ],
  staffAllocationGrid: [
    { role: "Administrative Officer", count: 1, note: "Overall campus operations & admissions lead" },
    { role: "Head Mistress / Vice Principal", count: 1, note: "Academic leadership & curriculum execution" },
    { role: "Academic Faculty & Subject Teachers", count: 14, note: "Primary and middle school certified educators" },
    { role: "Dedicated Support Staff / Maids", count: 4, note: "Hygiene, child-care and sanitation crew" },
    { role: "Campus Security Officer", count: 1, note: "24/7 gate security & visitor management" }
  ]
};

export const IMPLEMENTATION_ROADMAP: ImplementationStep[] = [
  {
    dayRange: "Day 1",
    phase: "Phase 1: Initiation",
    title: "Application Submission & Registration Formality",
    description: "Initial registration, submission of profile, proposed location details, and intent document to the Central Franchise Desk.",
    tasks: ["Online / physical application submission", "Verification of proposed site credentials", "Issuance of initial acknowledgment docket"]
  },
  {
    dayRange: "Day 3 – 7",
    phase: "Phase 2: Evaluation",
    title: "Initial Core Executive Discussions & Intent Approval",
    description: "In-depth consultation with IDPS leadership board, demographic feasibility review, and formal intent approval.",
    tasks: ["Catchment territory feasibility audit", "One-on-one session with Central Director", "Mutual signing of Letter of Intent (LOI)"]
  },
  {
    dayRange: "Day 7 – 15",
    phase: "Phase 3: Legal",
    title: "Legal Documentation Processing & Agreement Execution",
    description: "Finalization of legal documentation, territorial exclusivity confirmation, and formal signing of franchise agreement.",
    tasks: ["Franchise agreement execution", "Payment of initial franchise fee tranche", "Territory lock-in confirmation"]
  },
  {
    dayRange: "Day 15 – 30",
    phase: "Phase 4: Architecture",
    title: "Infrastructure Architecture Planning & Interior Blueprint",
    description: "Architectural layouts, 2D/3D campus renders, classroom schematics, and color swatches matching official IDPS green aesthetics.",
    tasks: ["Architectural zoning & room blueprints", "Vendor specifications & material lists", "BOQ (Bill of Quantities) alignment"]
  },
  {
    dayRange: "Day 30 – 45",
    phase: "Phase 5: Fabrication",
    title: "On-Site Branding, Structural Setup & Interior Fabrication",
    description: "Civil completion, interior fabrication, ergonomic furniture installation, glow signboards, and CCTV/network deployment.",
    tasks: ["Classroom woodwork & digital smart boards", "Safety compliance & CCTV installation", "Facade elevation branding & signboards"]
  },
  {
    dayRange: "Day 45 – 60",
    phase: "Phase 6: Recruitment",
    title: "Human Resource Recruitment & Faculty Training Cycles",
    description: "Recruitment of Principal, teachers, and support staff followed by the intensive 5-day Central Faculty Academy training.",
    tasks: ["National recruitment panel interviews", "Central Faculty Academy induction", "Curriculum alignment & demo class audits"]
  },
  {
    dayRange: "Day 60 – 75",
    phase: "Phase 7: Inventory",
    title: "Academic Inventory Dispatch & Operational Alignment",
    description: "Dispatch of branded books, school kits, uniforms, science lab equipment, library sets, and operational manuals.",
    tasks: ["Inventory reception and cataloging", "ERP & parent app configuration", "Pre-launch dry run of school systems"]
  },
  {
    dayRange: "Day 75 – 90",
    phase: "Phase 8: Launch",
    title: "Hyper-Local Marketing & Admissions Window Open",
    description: "Launch of aggressive local print & digital marketing, hoarding rollout, open-house orientation, and active parent admissions.",
    tasks: ["Billboard, newspaper & social ads live", "Parent counseling sessions & campus tours", "Early bird admission enrollments"]
  },
  {
    dayRange: "Day 90",
    phase: "Celebration",
    title: "Grand Official Campus Launch Celebration",
    description: "Ribbon cutting ceremony attended by distinguished guests, IDPS central leadership dignitaries, parents, and local leaders.",
    tasks: ["Grand opening inauguration", "First batch orientation", "Official commencement of academic session"]
  }
];

export const CHAIRMAN_PROFILE = {
  name: "Dr. Arvind K. Sharma", // Dignified leader name
  title: "Chairman & Founder President",
  organization: "The International Delhi Public School Society, New Delhi",
  photo: "./assets/chairman.jpeg",
  motto: "Education is not preparation for life; education is life itself.",
  bio: `Founded on 22nd February 2012, The International Delhi Public School Society was envisioned as a beacon of academic excellence, ethical grounding, and nation-building. Under the visionary stewardship of the Chairman, IDPS has grown into a prestigious Pan-India network spanning 35+ premier campuses, 2,300+ trained educators, and over 45,000 passionate students across 15 states.

With over two decades of transformative leadership in school education, our Chairman has consistently advocated for a learner-centric model where modern digital innovation, robotics, and scientific inquiry harmoniously co-exist with timeless moral virtues, physical discipline, and emotional intelligence.`,
  visionStatement: "At IDPS, our mission is to illuminate every young mind with unshakeable confidence, supreme academic excellence, and selfless compassion so they rise as responsible global leaders who will build the future of our nation.",
  tenets: [
    { title: "Academic Rigour & Innovation", text: "Blending CBSE syllabus discipline with futuristic STEM, robotics, and critical logic." },
    { title: "Empowerment & Inclusivity", text: "Ensuring high-quality schooling is accessible across Tier-1, Tier-2, and developing regional hubs." },
    { title: "Ethical Leadership", text: "Cultivating honesty, civic duty, active compassion, and selfless national service." },
    { title: "Entrepreneurial Partnership", text: "Backing every franchise partner with 360° support, operational transparency, and lifelong collaboration." }
  ]
};

export const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    category: "Campus",
    title: "State-of-the-Art Academic Campus",
    location: "New Delhi Flagship"
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    category: "Academics",
    title: "Smart Interactive Classrooms",
    location: "Bengaluru Campus"
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    category: "STEM",
    title: "Advanced Science & Innovation Lab",
    location: "Hyderabad Campus"
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    category: "Sports",
    title: "Annual National Sports Meet",
    location: "Noida Campus"
  },
  {
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
    category: "Culture",
    title: "Vibrant Music & Performing Arts",
    location: "Gurugram Campus"
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    category: "Arts",
    title: "Creative Arts & Clay Modeling Studio",
    location: "Pune Campus"
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
    category: "Library",
    title: "Central Resource & Digital Library",
    location: "Chennai Campus"
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    category: "Celebrations",
    title: "Convocation & Annual Day Honours",
    location: "Dwarka Campus"
  }
];

export const FAQS = [
  {
    q: "What is the history and credential of International Delhi Public School Society?",
    a: "The International Delhi Public School Society, New Delhi, was founded on 22nd February 2012 by eminent educationists and visionaries. Today, it steers a distinguished national network of 35+ campuses across 15 Indian states with 45,000+ students and 2,300+ trained faculty members."
  },
  {
    q: "How does IDPS support new franchise partners from site selection to opening?",
    a: "IDPS provides 360° support encompassing: architectural blueprints & interior fabrication guides, CBSE/board affiliation assistance, faculty recruitment & Central Academy training, digital marketing & admissions campaigns, standardized curriculum, and ERP management systems across an intensive 90-day roadmap."
  },
  {
    q: "What are the different franchise school models available?",
    a: "We offer 7 tailored formats: IDPS Junior (Play School, 3,000-5,000 sq ft), IDPS Primary (Pre-Nursery to V, 5,000-10,000 sq ft), IDPS Elementary (Pre-Nursery to VIII, 10,000-15,000 sq ft), IDPS K-12 Flagship (2 Acres), IDPS Girls (2 Acres), IDPS Premium Tier-1 (5 Acres with Cambridge/IB), and IDPS of Excellence Tier-2 (2-5 Acres with International tracks)."
  },
  {
    q: "What is the expected Return on Investment (ROI) and fee retention?",
    a: "As outlined in our official financial matrix, our standard K-12 model projects break-even within 4 to 5 years, with the franchise partner retaining 95% of fee collections in Year 1 and 92% in subsequent years. Projected franchisee net take-home margins grow from ₹1.33 Cr (Year 1) to ₹4.50 Cr (Year 3)."
  },
  {
    q: "How does IDPS maintain academic excellence across all campuses?",
    a: "Through our Central Academic Council, every branch follows a standardized syllabus, common term examinations, quarterly in-person quality audits, and annual teacher certification via the IDPS Faculty Academy."
  }
];
