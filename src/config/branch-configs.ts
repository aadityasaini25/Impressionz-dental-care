export type DoctorConfig = {
  name: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
  footer: string;
};

export type BranchConfig = {
  slug: 'borivali' | 'andheri';
  name: string;
  doctors: DoctorConfig[];
  clinicImages: { src: string; alt: string }[];
  contact: {
    phones: string[];
    timings: string;
    address: string;
    email: string;
    googleMapEmbed: string;
    googleMapsLink: string;
  };
  usps: string[];
  pricing: {
    implant: string;
  };
  heroTitle: string;
  heroVideo: string;
  reviews: { name: string; initials: string; date: string; review: string }[];
};

export const branches: Record<string, BranchConfig> = {
  borivali: {
    slug: 'borivali',
    name: 'Borivali West',
    doctors: [{
      name: "Dr. Sandeep Singh",
      title: "B.D.S., M.D.S., Certified Invisalign Specialist, Ph.D. (p.u)",
      image: "/images/doctor/sandeep singh.jpg",
      description: "Dr. Sandeep Singh graduated from MGM Dental College Mumbai in 2008 and completed his MDS in Orthodontics from Dr. DY Patil University in 2011. A reader at Terna Dental College and convener of the Bombay Orthodontic Study Group, he is currently pursuing his Ph.D. in Orthodontics.",
      highlights: [
        "MDS Orthodontics & Ph.D. Scholar",
        "Certified Invisalign Specialist",
        "Convener, Bombay Orthodontic Study Group",
        "Consultant to 25+ clinics across Mumbai"
      ],
      footer: "He delivers functional aesthetics through advanced braces and Invisalign, tackling even the most challenging cases for people of all age groups."
    }],
    clinicImages: [
      { src: "/images/clinic/boravli/clinic1.webp", alt: "Modern Reception" },
      { src: "/images/clinic/boravli/clinic2.webp", alt: "Treatment Room" },
      { src: "/images/clinic/boravli/clinc3.webp", alt: "Digital X-Ray Area" },
      { src: "/images/clinic/boravli/clinc4.jpg", alt: "Modern Treatment Room" }
    ],
    contact: {
      phones: ["+91 9821528338", "+91 8451060010"],
      timings: "Monday–Saturday, 10:00 AM – 9:00 PM",
      address: "Shop No. 103, 1st Floor, Avyukta Rajhauns | Opp. Veg Treat Royale, Next to Wagh Bakri Tea Lounge | Eksar Road, Borivali West, Mumbai - 400091",
      email: "drankitanagrani@gmail.com",
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7715194.759279158!2d63.61907958984375!3d19.230770079948247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b16190254ba3%3A0xa2133d544a334dce!2sImpressionz%20Dental%20Care%20-%20Borivali%20West!5e0!3m2!1sen!2sin!4v1776940948435!5m2!1sen!2sin",
      googleMapsLink: "https://maps.app.goo.gl/vdMJAR4nR1Ged1cu5"
    },
    usps: [
      "Specialized expertise",
      "Affordable & painless treatment",
      "Advanced technology",
      "Hygiene-focused",
      "All services under one roof"
    ],
    pricing: {
      implant: "₹27,000 onwards*"
    },
    heroTitle: "Premium Painless Dentistry in Borivali West",
    heroVideo: "/videos/bravli/StorySaver.net-impressionzdentalcare-Video-1776941719341.mp4",
    reviews: [
      {
        name: "Sayma Mahatre",
        initials: "SM",
        date: "Recent",
        review: "Loved their services, clinic is very clean and hygiene has been maintained well thank you doctor Priya."
      },
      {
        name: "Chetna Poojary",
        initials: "CP",
        date: "Recent",
        review: "Dr. Priya and Dr.Bhumi are incredibly professional and made me feel at ease throughout the entire process. The clinic is clean, modern, and equipped with the latest technology. My treatment was painless and efficient, and I am thrilled with the results."
      },
      {
        name: "Akanksha Patwa",
        initials: "AP",
        date: "Recent",
        review: "I recently had a dental cleanup at Impressionz Dental Care and I couldn't be happier with the experience. The staff was friendly and professional, and the procedure was completely pain-free."
      },
      {
        name: "Riya Patel",
        initials: "RP",
        date: "Recent",
        review: "Dr Sandeep and Dr Bhoomi are hands down the best. Visited them to start my Braces treatment… Dr Sandeep explained the entire process really well. They have the latest scanners and in house X ray machines."
      }
    ]
  },
  andheri: {
    slug: 'andheri',
    name: 'Andheri West',
    doctors: [
      {
        name: "Dr. Priya Singh",
        title: "Cosmetic Dental Surgeon",
        image: "/images/doctor/dr-priya-singh.webp",
        description: "Dr. Priya Singh earned her BDS from MGM Dental College in 2008 and holds an international merit certificate in cosmetic dentistry from the prestigious New York University. She specializes in full-mouth rehabilitation with an artistic eye for minimal invasive techniques.",
        highlights: [
          "NYU Certified Cosmetic Dentist",
          "Full-Mouth Rehabilitation Specialist",
          "Expert in Minimal Invasive Techniques",
          "Online Dental Educator for upcoming dentists"
        ],
        footer: "Dedicated to understanding patient needs, she goes the extra mile to deliver healthy, beautiful smiles using the latest advances in dentistry."
      },
      {
        name: "Dr. Akbar Ingaria",
        title: "Dental Surgeon and Implantologist",
        image: "/images/doctor/dr-akbar-ingaria.webp",
        description: "He completed his bachelors in dental surgery from MA Rangoonwala Dental College Pune in 2009. He is a certified implantologist and is a specialist in single to full mouth implant restoration. He believes in perfection and treats his patients with immense care and compassion. He also specializes in Rootcanal treatments and has expertise in retreatment of teeth. Always staying current with the latest concepts in dentistry, he prides himself on delivering painless dentistry to patients and has treated countless patients successfully.",
        highlights: [
          "Specialist in Single to Full Mouth Implant Restoration",
          "Certified Implantologist (BDS Pune 2009)",
          "Expertise in Root Canal & Retreatments",
          "Dedicated to Painless Patient Care"
        ],
        footer: "Staying at the forefront of modern dentistry, he ensures every patient receives compassionate, perfection-driven treatment for lasting oral health."
      }
    ],
    clinicImages: [
      { src: "/images/clinic/andheri/clinic1.JPEG", alt: "Luxury Reception" },
      { src: "/images/clinic/andheri/clinic2.JPEG", alt: "Tech-Enabled Treatment" },
      { src: "/images/clinic/andheri/clinic3.JPEG", alt: "Consultation Suite" },
      { src: "/images/clinic/andheri/clinic4.JPEG", alt: "Clinical Excellence" }
    ],
    contact: {
      phones: ["+91 9821584504", "+91 9773261716"],
      timings: "Monday–Sunday, 10:00 AM – 9:00 PM",
      address: "Shop No. 2, Excellency Building | Near Versova Telephone Exchange, MHADA | 4 Bungalows, Andheri West, Mumbai - 400053",
      email: "drankitanagrani@gmail.com",
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.386127770629!2d72.81850598752499!3d19.134568095191113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b619842290fb%3A0x1c2c9e7071356ba1!2sImpressionz%20Dental%20Care!5e0!3m2!1sen!2sin!4v1776941020337!5m2!1sen!2sin",
      googleMapsLink: "https://maps.app.goo.gl/HcHzHDgKcorPzgzX6"
    },
    usps: [
      "Advanced Aligners & Braces",
      "Painless treatment",
      "Affordable pricing",
      "Predictable results",
      "All treatments under one roof"
    ],
    pricing: {
      implant: "₹27,000 onwards*"
    },
    heroTitle: "Advanced Painless Dentistry in Andheri West",
    heroVideo: "/videos/andherii/StorySaver.net-impressionzdentalcare-Video-1776941816077.mp4",
    reviews: [
      {
        name: "Divya Inkepalli",
        initials: "DI",
        date: "Recent",
        review: "The clinic is very clean and professional. Excellent service and very professional dentist. my treatment was painless and handled with great care. The staffs were awesome and so polite. ❤️"
      },
      {
        name: "Harit Dattani",
        initials: "HD",
        date: "Recent",
        review: "Priya is a great dentist. I would happily recommend her to anyone looking for a good dentist. She’s skilled, gentle and will invest the time needed to address all your doubts and queries."
      },
      {
        name: "Neetu Ojha",
        initials: "NO",
        date: "Recent",
        review: "I have been going to Impressionz Dental Care for over a decade now. Dr. Priya Singh is highly skilled, professional and knowledgeable. The clinic is clean and equipped with modern facilities."
      },
      {
        name: "SATYA NARAYAN Dubey",
        initials: "SD",
        date: "Recent",
        review: "Nice clinic for smile design. I was worried for my daughter's teeth problem but Dr. Priya Singh treated her so well with great patience. Thanks a lot Dr. Priya!"
      }
    ]
  }
};
