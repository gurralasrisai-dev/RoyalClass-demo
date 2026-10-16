export const SITE = {
  name: "Royal Class Group",
  tagline: "Building Value. Creating Opportunities.",
  description:
    "A premier Dubai-based corporate portal offering integrated business consultancy, luxury office solutions, and exclusive real estate investment opportunities for global investors.",
  logo: "https://media.base44.com/images/public/69aa803e3e7f04cf85d0eb74/aa32a636d_royalclass-logo.webp",
  emails: {
    info: "info@royalclass.ae",
    bc: "bc@royalclass.ae",
    invest: "invest@royalclass.ae",
  },
  phone: "+97140000000",
  phoneDisplay: "+971 4 000 0000",
  address:
    "Arjumand Offices and Retail, Dubai Investment Park First, Green Community Village, Dubai, UAE",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/business-center", label: "Business Centres" },
  { href: "/properties", label: "Properties" },
  { href: "/investments", label: "Investments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const IMAGES = {
  homeHero:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
  businessCentre:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
  commercial:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  residential:
    "https://media.base44.com/images/public/69aa803e3e7f04cf85d0eb74/28202b372_image.png",
  offplan:
    "https://media.base44.com/images/public/69aa803e3e7f04cf85d0eb74/0c44516c7_image.png",
  venture:
    "https://media.base44.com/images/public/69aa803e3e7f04cf85d0eb74/1a6fb0dea_image.png",
  ai: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=800&q=80",
  tech: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  realEstateVenture:
    "https://media.base44.com/images/public/69aa803e3e7f04cf85d0eb74/df5fb2ede_image.png",
  contactHero:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
  contactLocation:
    "https://media.base44.com/images/public/69aa803e3e7f04cf85d0eb74/8adfdf465_image.png",
  contact:
    "https://media.base44.com/images/public/69aa803e3e7f04cf85d0eb74/8adfdf465_image.png",
  office1:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  office2:
    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&q=80",
  office3:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  privateOffice:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  propertiesHero:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80",
  homes: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  offplanWide:
    "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80",
  aboutHero:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
  aboutWho:
    "https://images.unsplash.com/photo-1517157680090-94f8d3c1b7a5?w=1200&q=80",
  aboutArch:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  aboutVision:
    "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&q=80",
  aboutInterior:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
  investmentsHero:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80",
  investmentVertical:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
} as const;

export const HOME_PROPERTY_CARDS = [
  {
    id: "business-centres",
    label: "Business Centres",
    description:
      "Royal Class Business Centres provide serviced offices, private offices, virtual offices, meeting rooms, coworking spaces, and business support services, giving businesses the flexibility to establish and grow with confidence.",
    image: IMAGES.businessCentre,
    href: "/business-center",
    cta: "Explore Business Centres",
    contain: false,
  },
  {
    id: "commercial",
    label: "Commercial Properties",
    description:
      "Purpose-built commercial spaces designed to support businesses with modern offices, strategic locations, and flexible environments across Dubai's key business districts.",
    image: IMAGES.commercial,
    href: "/properties",
    cta: "Explore Commercial",
    contain: false,
  },
  {
    id: "residential",
    label: "Residential Properties",
    description:
      "Residential developments designed for comfortable living, quality communities, and long-term value for homeowners and investors alike.",
    image: IMAGES.residential,
    href: "/properties",
    cta: "Explore Residential",
    contain: true,
  },
  {
    id: "off-plan",
    label: "Off-Plan Developments",
    description:
      "Discover carefully selected off-plan developments offering future growth opportunities and premium locations across Dubai.",
    image: IMAGES.offplan,
    href: "/properties",
    cta: "View Developments",
    contain: false,
  },
] as const;

export const HOME_INVESTMENT_CARDS = [
  {
    number: "01",
    title: "Venture Capital",
    description:
      "Supporting startups and emerging businesses with investment, strategic guidance, and long-term partnership.",
    image: IMAGES.venture,
    cta: "Present Your Business",
  },
  {
    number: "02",
    title: "Artificial Intelligence",
    description:
      "Backing AI-driven companies developing innovative technologies with real-world commercial impact.",
    image: IMAGES.ai,
    cta: "Explore Opportunities",
  },
  {
    number: "03",
    title: "Technology",
    description:
      "Partnering with technology companies building scalable products, digital platforms, and future-ready solutions.",
    image: IMAGES.tech,
    cta: "Partner With Royal Class",
  },
  {
    number: "04",
    title: "Real Estate Ventures",
    description:
      "Investing alongside developers and property-focused businesses that align with our long-term investment strategy.",
    image: IMAGES.realEstateVenture,
    cta: "Discuss an Opportunity",
  },
] as const;

export const CONTACT_FAQS = [
  {
    q: "How can I enquire about a property?",
    a: "You can submit an enquiry through our contact form, selecting the relevant property type — Commercial, Residential, or Off-Plan Developments. A member of our properties team will respond within 24 hours to discuss available options.",
  },
  {
    q: "How do I schedule a Business Centre tour?",
    a: "Contact our Business Centre team directly via phone or email, or submit an enquiry through the form selecting 'Business Centre' as your interest. We'll arrange a scheduled tour of our facilities at a time that suits you.",
  },
  {
    q: "How can I submit a business for investment?",
    a: "Select 'Strategic Investments' or 'Partnership Opportunity' in the enquiry form and provide details about your business in the message field. Our investment team will review your submission and reach out to discuss potential alignment.",
  },
  {
    q: "How long does it take to receive a response?",
    a: "Our team typically responds to all enquiries within 24 hours during office hours, Monday through Saturday. For urgent matters, we recommend calling our office directly.",
  },
  {
    q: "Can I schedule a meeting with the Royal Class team?",
    a: "Yes. We welcome scheduled meetings at our Dubai Investment Park office. Please contact us in advance to arrange an appointment, and our team will coordinate a suitable time for your visit.",
  },
] as const;

export const CONTACT_LOCATION_AMENITIES = [
  { icon: "bus" as const, text: "Near to bus stop and metro" },
  {
    icon: "landmark" as const,
    text: "Easy access to Expo City, Al Maktoum Airport and major highways",
  },
  { icon: "coffee" as const, text: "Near to cafes & restaurants" },
] as const;

export const BC_STATS = [
  { target: 50, label: "Offices" },
  { target: 500, label: "Satisfied Clients" },
  { target: 10, label: "Years of experience" },
] as const;

export const BC_OFFERS = [
  {
    name: "Serviced Office",
    description:
      "Our luxury serviced offices can provide everything your company needs, no matter what your requirements.",
    image: IMAGES.office1,
    comingSoon: false,
  },
  {
    name: "Meeting Rooms",
    description:
      "We specialise in providing the perfect space you need for your meeting at an affordable cost",
    image: IMAGES.office2,
    comingSoon: false,
  },
  {
    name: "Co-Working Space",
    description:
      "Co-working is a highly practical solution, where you can enjoy all of our facilities, but only pay for the space you use.",
    image: IMAGES.office3,
    comingSoon: false,
  },
  {
    name: "Virtual office",
    description:
      "If you're looking for an address to run your business, you're in right place. Rent your virtual office right now!",
    image: IMAGES.privateOffice,
    comingSoon: false,
  },
  {
    name: "Private office",
    description: "Coming Soon",
    image: IMAGES.office1,
    comingSoon: true,
  },
  {
    name: "Flexi desk",
    description: "Enjoy your Flexi Desk in our Premium offices.",
    image: IMAGES.businessCentre,
    comingSoon: false,
  },
] as const;

export const BC_REASONS = [
  {
    icon: "01",
    title: "Prime Location",
    description:
      "Our center is strategically situated in the heart of Dubai, providing you with a prestigious address and easy access to key business districts.",
  },
  {
    icon: "02",
    title: "Luxurious Facilities",
    description:
      "Experience a workspace designed for success, featuring high-quality, modern furnishings and cutting-edge technology.",
  },
  {
    icon: "03",
    title: "Flexible Solutions",
    description:
      "Tailor your office space to your exact needs, whether it's a private office, meeting room, virtual office, or coworking space.",
  },
  {
    icon: "04",
    title: "Professional Support",
    description:
      "Benefit from our dedicated support staff who are ready to assist with administrative tasks, ensuring your focus remains on your business.",
  },
  {
    icon: "05",
    title: "Networking Opportunities",
    description:
      "Connect with a dynamic community of like-minded professionals, fostering collaboration and growth.",
  },
  {
    icon: "06",
    title: "Cost-Efficiency",
    description:
      "Choose us for cost-effective solutions that provide you with top-tier amenities and services without the need for long-term commitments.",
  },
  {
    icon: "07",
    title: "Reputation",
    description:
      "Join a business center with a reputation for excellence and client satisfaction, enhancing your own business image.",
  },
] as const;

export const BC_FAQS = [
  {
    q: "Where is your business center located in Dubai?",
    a: "Arjumand Offices and Retail, Dubai Investment Park First, Green Community Village, Dubai.",
  },
  {
    q: "What types of office spaces do you offer?",
    a: "Serviced offices, private offices, virtual offices, meeting rooms, coworking spaces, and flexible desk options.",
  },
  {
    q: "What are the amenities provided in your office spaces?",
    a: "Our office spaces feature floor-to-ceiling windows with stunning views, high-quality modern furnishings, cutting-edge technology, an open pantry, and all bills included with the package.",
  },
  {
    q: "Can I book meeting rooms for client presentations?",
    a: "Yes, we specialise in providing the perfect space you need for your meeting at an affordable cost. Contact us to book meeting rooms for your client presentations and conferences.",
  },
  {
    q: "Do you offer virtual office services?",
    a: "Yes, if you're looking for an address to run your business, you're in the right place. Rent your virtual office with us right now.",
  },
  {
    q: "Is parking available at your business center?",
    a: "Parking is available at our business center. Please contact us for more details on parking arrangements.",
  },
] as const;

export const PROPERTY_COMMERCIAL = [
  {
    icon: "building" as const,
    label: "Commercial Properties",
    description:
      "Prime office, retail and commercial spaces across Dubai's key districts.",
  },
  {
    icon: "globe" as const,
    label: "International Real Estate",
    description: "Cross-border property opportunities in global markets.",
  },
  {
    icon: "trending" as const,
    label: "Investment Consultation",
    description:
      "Tailored strategies to grow your commercial property portfolio.",
  },
  {
    icon: "clipboard" as const,
    label: "Property Management",
    description: "Comprehensive management for your commercial assets.",
  },
  {
    icon: "search" as const,
    label: "Customized Searches",
    description:
      "Bespoke property searches matched to your exact requirements.",
  },
] as const;

export const PROPERTY_RESIDENTIAL = [
  {
    icon: "house" as const,
    label: "Residential Sales",
    description:
      "Expert guidance for buying and selling residential properties across Dubai.",
  },
  {
    icon: "trending" as const,
    label: "Consultation & Investment",
    description:
      "Strategic advice to maximise your residential property investments.",
  },
  {
    icon: "chart" as const,
    label: "Market Insights",
    description:
      "In-depth analysis of Dubai's residential market trends and opportunities.",
  },
  {
    icon: "key" as const,
    label: "Residential Rentals",
    description:
      "Find the perfect rental home in Dubai's most sought-after communities.",
  },
  {
    icon: "building" as const,
    label: "New Developments",
    description:
      "Early access to the latest residential launches from leading developers.",
  },
  {
    icon: "calculator" as const,
    label: "Property Valuation",
    description:
      "Accurate valuations to help you make informed property decisions.",
  },
] as const;

export const PROPERTY_OFFPLAN = [
  {
    icon: "sparkles" as const,
    label: "New Launches",
    description:
      "Be among the first to access the latest off-plan releases from leading developers.",
  },
  {
    icon: "trending" as const,
    label: "Investment Opportunities",
    description:
      "Carefully selected projects with strong capital appreciation potential.",
  },
  {
    icon: "mappin" as const,
    label: "Future Communities",
    description:
      "Premium locations in Dubai's most anticipated master-planned developments.",
  },
  {
    icon: "card" as const,
    label: "Flexible Payment Plans",
    description:
      "Structured payment options designed to make property investment accessible.",
  },
] as const;

export const WHY_DUBAI = [
  {
    icon: "shield" as const,
    title: "Safety & Security",
    description:
      "Dubai is one of the safest cities in the world, offering peace of mind for residents and investors alike.",
  },
  {
    icon: "badge" as const,
    title: "UAE Property Visa",
    description:
      "Property ownership in Dubai can qualify you for a UAE residency visa.",
  },
  {
    icon: "percent" as const,
    title: "No Property Tax",
    description:
      "Enjoy property ownership without annual property taxes on your real estate.",
  },
  {
    icon: "smile" as const,
    title: "Ministry of Happiness",
    description:
      "A government committed to the wellbeing and quality of life of its residents.",
  },
  {
    icon: "gem" as const,
    title: "Premium Lifestyle",
    description:
      "World-class amenities, dining and leisure in a vibrant cosmopolitan city.",
  },
  {
    icon: "lightbulb" as const,
    title: "Development and Innovation",
    description:
      "A forward-thinking city with continuous infrastructure growth and innovation.",
  },
] as const;

export const INVESTMENT_VERTICALS = [
  {
    id: "venture-capital",
    eyebrow: "Investment Vertical 01",
    title: "Venture Capital",
    image: IMAGES.investmentVertical,
    imageAlt: "Venture Capital Investment Dubai",
    imageSide: "left" as const,
    paragraphs: [
      "Royal Class partners with startups and emerging businesses that demonstrate innovation, strong leadership and scalable business models.",
      "We invest in founders solving real-world challenges while providing strategic guidance, industry expertise and long-term support beyond capital.",
      "We believe successful businesses are built through collaboration, shared vision and sustainable growth.",
    ],
    cta: "Present Your Business",
    ctaPath: "/contact#enquiry",
  },
  {
    id: "strategic-investments",
    eyebrow: "Investment Vertical 02",
    title: "Strategic Investments",
    image: IMAGES.investmentVertical,
    imageAlt: "Strategic Investments UAE",
    imageSide: "right" as const,
    intro:
      "Royal Class actively invests in innovative businesses shaping the future through technology, digital transformation and emerging industries.",
    focusAreas: [
      {
        icon: "cpu" as const,
        title: "Artificial Intelligence",
        description:
          "Support businesses developing practical AI solutions that improve industries, automate operations and solve complex business challenges.",
      },
      {
        icon: "code" as const,
        title: "Technology",
        description:
          "Partner with companies building innovative software, enterprise platforms, digital products, PropTech solutions and scalable technology businesses driving future growth.",
      },
    ],
    cta: "Discuss Your Business",
    ctaPath: "/contact#enquiry",
  },
  {
    id: "real-estate-ventures",
    eyebrow: "Investment Vertical 03",
    title: "Real Estate Ventures",
    image: IMAGES.investmentVertical,
    imageAlt: "Real Estate Ventures UAE",
    imageSide: "left" as const,
    paragraphs: [
      "Royal Class partners with developers, PropTech companies and innovative real estate ventures creating the next generation of property experiences.",
      "We invest in businesses transforming how people develop, manage and experience real estate through innovation, strategic thinking and sustainable growth.",
    ],
    cta: "Share Your Project",
    ctaPath: "/contact#enquiry",
  },
] as const;

export const PARTNER_REASONS = [
  {
    icon: "handshake" as const,
    title: "Strategic Partnership",
    description:
      "We work alongside founders as long-term partners, supporting sustainable business growth beyond financial investment.",
  },
  {
    icon: "eye" as const,
    title: "Long-Term Vision",
    description:
      "We focus on businesses with clear vision, measurable value and long-term growth potential.",
  },
  {
    icon: "briefcase" as const,
    title: "Industry Expertise",
    description:
      "Our diversified business experience enables us to provide strategic insight across multiple industries.",
  },
  {
    icon: "users" as const,
    title: "Collaborative Growth",
    description:
      "We believe successful partnerships are built through trust, transparency and shared success.",
  },
] as const;

export const INVESTMENT_PROCESS = [
  {
    number: "01",
    title: "Submit Your Business",
    description: "Share your business, startup or investment opportunity.",
  },
  {
    number: "02",
    title: "Evaluation",
    description:
      "Our investment team reviews your business model, market opportunity and growth potential.",
  },
  {
    number: "03",
    title: "Strategic Discussion",
    description:
      "We meet with founders and leadership teams to understand the opportunity and explore long-term alignment.",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "Together we build sustainable businesses through strategic investment, collaboration and shared growth.",
  },
] as const;

export const VALUES = [
  {
    icon: "clock" as const,
    title: "Long-Term Thinking",
    description:
      "We make decisions that create sustainable value rather than short-term success.",
  },
  {
    icon: "shield" as const,
    title: "Integrity",
    description:
      "We build every relationship on honesty, transparency and accountability.",
  },
  {
    icon: "handshake" as const,
    title: "Partnership",
    description:
      "We believe collaboration creates stronger businesses and better outcomes.",
  },
  {
    icon: "award" as const,
    title: "Excellence",
    description:
      "We maintain high standards across every project, investment and customer experience.",
  },
  {
    icon: "lightbulb" as const,
    title: "Innovation",
    description:
      "We embrace new ideas, technologies and opportunities that drive sustainable growth.",
  },
  {
    icon: "leaf" as const,
    title: "Responsibility",
    description:
      "We invest, develop and operate with a long-term commitment to people, businesses and the communities we serve.",
  },
] as const;

export const ENQUIRY_TOPICS = [
  "Commercial Properties",
  "Residential Properties",
  "Off-Plan Developments",
  "Business Centre",
  "Strategic Investments",
  "Venture Capital",
  "Partnership Opportunity",
  "General Enquiry",
] as const;
