import { jsPDF } from 'jspdf';
import { 
  FRANCHISE_MODELS, 
  FINANCIAL_METRICS, 
  SUPPORT_SERVICES, 
  IMPLEMENTATION_ROADMAP,
  CHAIRMAN_PROFILE 
} from '../data/schoolData';

export const generateBrochurePdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;

  // Royal Blue Theme Colors
  const primaryBlue = [19, 53, 104]; // #133568
  const primaryDarkBlue = [11, 29, 56]; // #0B1D38
  const gold = [212, 175, 55]; // #D4AF37
  const textDark = [30, 41, 59];
  const textMuted = [100, 116, 139];
  const bgLight = [248, 250, 252];

  // Helper: Header bar for inner pages
  const addPageHeader = (title: string, category: string) => {
    doc.setFillColor(primaryDarkBlue[0], primaryDarkBlue[1], primaryDarkBlue[2]);
    doc.rect(0, 0, pageWidth, 20, 'F');

    doc.setFillColor(gold[0], gold[1], gold[2]);
    doc.rect(0, 20, pageWidth, 1.5, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('THE INTERNATIONAL DELHI PUBLIC SCHOOL SOCIETY', margin, 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(gold[0], gold[1], gold[2]);
    doc.text(category.toUpperCase(), margin, 16);

    doc.setTextColor(255, 255, 255);
    doc.text(title, pageWidth - margin, 13, { align: 'right' });
  };

  // Helper: Footer bar for inner pages
  const addPageFooter = (pageNum: number, totalPages: number) => {
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageHeight - 14, pageWidth - margin, pageHeight - 14);

    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.text('Regd. Office: C-240/241, 3rd Floor, Pandav Nagar, New Delhi - 110092 | Helpline: +91 7004222833 / 9631910016', margin, pageHeight - 9);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 9, { align: 'right' });
  };

  // ================= PAGE 1: COVER PAGE =================
  // Background
  doc.setFillColor(primaryDarkBlue[0], primaryDarkBlue[1], primaryDarkBlue[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative border
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.8);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
  doc.setLineWidth(0.3);
  doc.rect(12, 12, pageWidth - 24, pageHeight - 24);

  // Institution title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('THE INTERNATIONAL DELHI PUBLIC SCHOOL', pageWidth / 2, 45, { align: 'center' });
  
  doc.setFontSize(13);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('SOCIETY, NEW DELHI', pageWidth / 2, 53, { align: 'center' });

  // Seal / Emblem representation
  doc.setFillColor(255, 255, 255);
  doc.circle(pageWidth / 2, 110, 32, 'F');
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(1.5);
  doc.circle(pageWidth / 2, 110, 32, 'S');

  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('IDPS', pageWidth / 2, 105, { align: 'center' });
  doc.setFontSize(7.5);
  doc.text('ESTD. 22 FEB 2012', pageWidth / 2, 112, { align: 'center' });
  doc.setFontSize(6.5);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('DISCIPLINE • DEDICATION • DUTY', pageWidth / 2, 120, { align: 'center' });
  doc.text('SELFLESS SERVICE', pageWidth / 2, 124, { align: 'center' });

  // Document Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('BUSINESS PROPOSAL &', pageWidth / 2, 175, { align: 'center' });
  doc.text('FRANCHISE BROCHURE', pageWidth / 2, 186, { align: 'center' });

  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Empowering Education • Inspiring Excellence • Building Futures', pageWidth / 2, 198, { align: 'center' });

  // Core philosophy box
  doc.setFillColor(0, 0, 0, 0.25);
  doc.roundedRect(margin + 5, 215, contentWidth - 10, 24, 3, 3, 'F');
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin + 5, 215, contentWidth - 10, 24, 3, 3, 'S');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.text('"Education is not merely preparation for examinations', pageWidth / 2, 225, { align: 'center' });
  doc.text('but preparation for life itself."', pageWidth / 2, 231, { align: 'center' });

  // Footer metadata
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(220, 220, 220);
  doc.text('Pan-India Network: 35+ Campuses across 15 States | 45,900+ Students', pageWidth / 2, 265, { align: 'center' });
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('www.idpssociety.com | info@idpssociety.com', pageWidth / 2, 272, { align: 'center' });

  // ================= PAGE 2: ABOUT IDPS & CHAIRMAN =================
  doc.addPage();
  addPageHeader('ORGANIZATION & LEADERSHIP', 'SECTION 01');

  let y = 32;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('ABOUT INTERNATIONAL DELHI PUBLIC SCHOOL SOCIETY', margin, y);

  y += 7;
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('The International Delhi Public School Society, founded on 22nd February 2012, is a premier not-for-profit', margin, y);
  y += 5;
  doc.text('non-governmental organization managed by a committed group of educational visionaries from different parts of India.', margin, y);
  y += 5;
  doc.text('The organization believes in creating a strong educational ecosystem based on brotherhood, mutual support,', margin, y);
  y += 5;
  doc.text('academic excellence, and holistic child development.', margin, y);

  // Equal access highlight
  y += 6;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.roundedRect(margin, y, contentWidth, 14, 2, 2, 'F');
  doc.setDrawColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, y, margin, y + 14);

  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('CORE BELIEF:', margin + 4, y + 5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text('Children are the future of every society, and every child deserves equal access to quality education, knowledge, and opportunities.', margin + 4, y + 10);

  // Dedications Grid
  y += 20;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('OUR INSTITUTION IS DEDICATED TO PROVIDING:', margin, y);

  y += 6;
  const dedications = [
    { title: 'Quality Education', desc: 'High standards of academic content delivery with modern pedagogy.' },
    { title: 'Syllabus-Oriented Learning', desc: 'Structured approach thoroughly aligned with CBSE and board patterns.' },
    { title: 'Co-Curricular & Sports', desc: 'Broad visual, athletic, performing arts, and rich cultural integration.' },
    { title: 'Personality Development', desc: 'Nurturing unshakeable character, public poise, and communicative confidence.' },
    { title: 'Value-Based Education', desc: 'Rooting global perspectives inside timeless ethics, empathy, and morality.' },
    { title: 'Leadership & Life Skills', desc: 'Building independent logic and proactive problem-solving frameworks.' }
  ];

  dedications.forEach((item, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const itemX = margin + col * (contentWidth / 2);
    const itemY = y + row * 13;

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(itemX, itemY, contentWidth / 2 - 3, 11, 1.5, 1.5, 'FD');

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(`• ${item.title}:`, itemX + 3, itemY + 4.5);

    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text(item.desc, itemX + 3, itemY + 8.5);
  });

  // Chairman's Corner Box
  y += 46;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.roundedRect(margin, y, contentWidth, 54, 3, 3, 'F');
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.6);
  doc.roundedRect(margin, y, contentWidth, 54, 3, 3, 'S');

  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text("FROM THE DESK OF THE CHAIRMAN", margin + 5, y + 8);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('"Education is not preparation for life; education is life itself."', margin + 5, y + 14);

  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFontSize(7.5);
  const bioLines = [
    'Since our founding on 22nd February 2012, our guiding principle has been unwavering: every child deserves equal access',
    'to world-class schooling, grounded values, and global opportunities. As we expand across 15 states with 35+ vibrant campuses',
    'and 45,900+ enthusiastic learners, we cordially invite passionate educators and visionary entrepreneurs to partner with us.',
    'Under our 360° support ecosystem, we ensure complete handholding from site selection and CBSE affiliation to academic launch.'
  ];
  bioLines.forEach((line, lIdx) => {
    doc.text(line, margin + 5, y + 21 + lIdx * 4.5);
  });

  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Dr. Arvind K. Sharma', margin + 5, y + 45);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text('Chairman & Founder President, The International Delhi Public School Society, New Delhi', margin + 5, y + 49);

  addPageFooter(2, 7);

  // ================= PAGE 3: VISION & MISSION =================
  doc.addPage();
  addPageHeader('MISSION & VISION', 'SECTION 02');

  y = 34;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('INSTITUTIONAL VISION & MISSION STATEMENTS', margin, y);

  y += 8;
  // Vision Box
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.roundedRect(margin, y, contentWidth / 2 - 3, 100, 2, 2, 'F');
  doc.setDrawColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, y, contentWidth / 2 - 3, 100, 2, 2, 'S');

  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('OUR VISION', margin + 5, y + 9);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('To provide a stimulating, inclusive, and inspiring environment where children:', margin + 5, y + 15, { maxWidth: contentWidth / 2 - 13 });

  const visionPoints = [
    'Enjoy Learning & Explore Concepts Passionately',
    'Discover Their True Hidden Potential & Talents',
    'Build Core Confidence & Dynamic Public Presence',
    'Develop Creativity, Analytical & Abstract Logic',
    'Learn Proactive Leadership & Teamwork Skills',
    'Embrace Modern Challenges Willingly',
    'Achieve Supreme Academic Excellence'
  ];

  visionPoints.forEach((p, i) => {
    doc.text(`✔  ${p}`, margin + 5, y + 28 + i * 9.5, { maxWidth: contentWidth / 2 - 14 });
  });

  // Mission Box
  const missionX = margin + contentWidth / 2 + 3;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.roundedRect(missionX, y, contentWidth / 2 - 3, 100, 2, 2, 'F');
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.5);
  doc.roundedRect(missionX, y, contentWidth / 2 - 3, 100, 2, 2, 'S');

  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('OUR MISSION', missionX + 5, y + 9);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('Explicit commitments shaping our everyday focus to achieve global learning parameters:', missionX + 5, y + 15, { maxWidth: contentWidth / 2 - 13 });

  const missionPoints = [
    'Develop high self-esteem & unshakeable confidence',
    'Create passionate lifelong learners ready for evolution',
    'Cultivate deep moral and ethical core human values',
    'Encourage robust cultural awareness & social responsibility',
    'Promote discipline, active compassion, and leadership',
    'Provide holistic and strictly inclusive education layout',
    'Prepare students completely for future global structural challenges'
  ];

  missionPoints.forEach((p, i) => {
    doc.text(`★  ${p}`, missionX + 5, y + 28 + i * 9.5, { maxWidth: contentWidth / 2 - 14 });
  });

  // Key Strategic Advantages (PDF 1 Page 4)
  y += 112;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('WHY CHOOSE IDPS: 4 STRATEGIC ADVANTAGES', margin, y);

  y += 6;
  const pillars = [
    { title: 'ACADEMIC EXCELLENCE', pts: ['Modern Teaching Methodologies', 'Qualified & Extensively Trained Faculty', 'Student-Centric Learning Approach', 'Continuous Evaluation & System Assessment'] },
    { title: 'MODERN INFRASTRUCTURE', pts: ['Smart Interactive Digital Classrooms', 'Advanced Science & Computer Laboratories', 'Resourceful Library Facilities', 'CCTV Surveillance & Advanced RO Systems'] },
    { title: 'HOLISTIC DEVELOPMENT', pts: ['Advanced Sports & Physical Training', 'Art, Vibrant Music & Dance Disciplines', 'Intense Personality Training Tracks', 'Leadership & Expressive Communication'] },
    { title: 'STRONG SUPPORT SYSTEM', pts: ['End-to-End Franchise Guidance', 'Meticulous Academic Planning Support', 'Strategic Marketing & Promotions', 'Streamlined Operational Manuals'] }
  ];

  pillars.forEach((p, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const boxX = margin + col * (contentWidth / 2);
    const boxY = y + row * 38;

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(boxX, boxY, contentWidth / 2 - 3, 34, 1.5, 1.5, 'FD');

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(p.title, boxX + 4, boxY + 6);

    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    p.pts.forEach((pt, pIdx) => {
      doc.text(`• ${pt}`, boxX + 4, boxY + 12 + pIdx * 5);
    });
  });

  addPageFooter(3, 7);

  // ================= PAGE 4: 7 FRANCHISE MODELS =================
  doc.addPage();
  addPageHeader('FRANCHISE MODELS & SETUP', 'SECTION 03');

  y = 32;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('7 TAILORED SCHOOL FRANCHISE FORMATS', margin, y);

  y += 5;
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('Standardized project models engineered for maximum educational impact and high capital efficiency.', margin, y);

  y += 6;
  // Models Table Header
  doc.setFillColor(primaryDarkBlue[0], primaryDarkBlue[1], primaryDarkBlue[2]);
  doc.rect(margin, y, contentWidth, 7, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text('MODEL FORMAT', margin + 3, y + 4.8);
  doc.text('CLASSES', margin + 48, y + 4.8);
  doc.text('AREA REQUIRED', margin + 92, y + 4.8);
  doc.text('FRANCHISE FEE', margin + 140, y + 4.8);

  y += 7;
  FRANCHISE_MODELS.forEach((m, idx) => {
    const isEven = idx % 2 === 0;
    doc.setFillColor(isEven ? 255 : 248, isEven ? 255 : 250, isEven ? 255 : 252);
    doc.rect(margin, y, contentWidth, 18, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(margin, y + 18, margin + contentWidth, y + 18);

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(m.name, margin + 3, y + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text(m.tagline, margin + 3, y + 9);
    doc.text(`Pedagogy: ${m.curriculum}`, margin + 3, y + 13, { maxWidth: 42 });

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFontSize(7.5);
    doc.text(m.classes, margin + 48, y + 6);

    doc.text(m.area, margin + 92, y + 6);

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.text(m.franchiseFee, margin + 140, y + 6);

    if (m.feeTiers) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
      doc.text(`T1: ${m.feeTiers.tier1} | T2: ${m.feeTiers.tier2} | Other: ${m.feeTiers.other}`, margin + 140, y + 11);
    }

    y += 18;
  });

  // Project Overview Metrics (PDF 1 Page 7)
  y += 5;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.roundedRect(margin, y, contentWidth, 36, 2, 2, 'F');
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, y, contentWidth, 36, 2, 2, 'S');

  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('PROJECT OVERVIEW: STANDARD K-12 FLAGSHIP PARAMETERS', margin + 4, y + 7);

  const metrics = [
    { label: 'Total Land Requirement', val: FINANCIAL_METRICS.projectOverview.totalLandRequirement },
    { label: 'Minimum Built-Up Area', val: FINANCIAL_METRICS.projectOverview.minimumBuiltUpArea },
    { label: 'Estimated ROI Payback', val: FINANCIAL_METRICS.projectOverview.estimatedROIPeriod },
    { label: 'Initial Core Base Investment', val: FINANCIAL_METRICS.projectOverview.initialCoreBaseInvestment }
  ];

  metrics.forEach((m, mIdx) => {
    const mX = margin + 4 + mIdx * (contentWidth / 4);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.setFontSize(7);
    doc.text(m.label, mX, y + 16);

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(m.val, mX, y + 23);
  });

  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.text('* Applicable prevailing Government taxes (GST) will be charged as per statutory guidelines.', margin + 4, y + 31);

  addPageFooter(4, 7);

  // ================= PAGE 5: 11 CORE SUPPORT & SERVICES (PDF 2) =================
  doc.addPage();
  addPageHeader('CENTRAL SUPPORT & SERVICES', 'SECTION 04');

  y = 32;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('11 CORE CENTRAL SERVICES (PDF 2 ATTACHMENT)', margin, y);

  y += 5;
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('Turnkey operational, academic, marketing and accreditation handholding from the Central Society.', margin, y);

  y += 6;
  SUPPORT_SERVICES.forEach((s) => {
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.roundedRect(margin, y, contentWidth, 16, 1.5, 1.5, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y, contentWidth, 16, 1.5, 1.5, 'S');

    // Number tag
    doc.setFillColor(primaryDarkBlue[0], primaryDarkBlue[1], primaryDarkBlue[2]);
    doc.circle(margin + 5, y + 8, 3.5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.text(String(s.id), margin + 5, y + 9.2, { align: 'center' });

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(s.title, margin + 11, y + 6);

    doc.setTextColor(gold[0], gold[1], gold[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text(`— ${s.subtitle}`, margin + 11 + doc.getTextWidth(s.title) + 2, y + 6);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFontSize(7);
    doc.text(s.description, margin + 11, y + 10.5, { maxWidth: contentWidth - 14 });

    y += 18.5;
  });

  addPageFooter(5, 7);

  // ================= PAGE 6: FINANCIAL PROJECTIONS & ANNEXURES =================
  doc.addPage();
  addPageHeader('FINANCIAL PROJECTIONS & NET PROFIT', 'SECTION 05');

  y = 32;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('3-YEAR FINANCIAL PROJECTIONS (PDF 1 PAGE 10)', margin, y);

  y += 5;
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('Conservative financial modelling based on standardized admissions intake and fee retention.', margin, y);

  y += 6;
  // Financial Table
  doc.setFillColor(primaryDarkBlue[0], primaryDarkBlue[1], primaryDarkBlue[2]);
  doc.rect(margin, y, contentWidth, 7, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text('OPERATING TIMELINE', margin + 4, y + 5);
  doc.text('STUDENTS', margin + 50, y + 5);
  doc.text('GROSS REVENUE', margin + 80, y + 5);
  doc.text('OPERATIONAL EXP.', margin + 120, y + 5);
  doc.text('FRANCHISEE TAKE-HOME', margin + 155, y + 5);

  y += 7;
  FINANCIAL_METRICS.projections.forEach((p, idx) => {
    const isEven = idx % 2 === 0;
    doc.setFillColor(isEven ? 255 : 248, isEven ? 255 : 250, isEven ? 255 : 252);
    doc.rect(margin, y, contentWidth, 12, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(margin, y + 12, margin + contentWidth, y + 12);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(p.year, margin + 4, y + 7.5);

    doc.setFont('helvetica', 'normal');
    doc.text(String(p.students), margin + 50, y + 7.5);
    doc.text(p.grossRevenue, margin + 80, y + 7.5);

    doc.setTextColor(185, 28, 28);
    doc.text(p.grossExpenses, margin + 120, y + 7.5);

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(p.netProfit, margin + 155, y + 7.5);

    y += 12;
  });

  // Annexure A: Fee Structure Table
  y += 10;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('ANNEXURE "A": FEE STRUCTURE & COLLECTIONS POOL', margin, y);

  y += 5;
  doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
  doc.rect(margin, y, contentWidth, 6, 'F');
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.text('COLLECTION HEAD DETAILS', margin + 4, y + 4.2);
  doc.text('1ST YEAR', margin + 90, y + 4.2);
  doc.text('2ND YEAR', margin + 125, y + 4.2);
  doc.text('3RD YEAR', margin + 160, y + 4.2);

  y += 6;
  FINANCIAL_METRICS.feeStructure.forEach((row, rIdx) => {
    const isSpecial = rIdx === 2 || rIdx === 3;
    doc.setFillColor(isSpecial ? 239 : 255, isSpecial ? 246 : 255, isSpecial ? 255 : 255);
    doc.rect(margin, y, contentWidth, 7, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y + 7, margin + contentWidth, y + 7);

    doc.setTextColor(isSpecial ? primaryBlue[0] : textDark[0], isSpecial ? primaryBlue[1] : textDark[1], isSpecial ? primaryBlue[2] : textDark[2]);
    doc.setFont('helvetica', isSpecial ? 'bold' : 'normal');
    doc.setFontSize(7);
    doc.text(row.head, margin + 4, y + 4.8);
    doc.text(row.y1, margin + 90, y + 4.8);
    doc.text(row.y2, margin + 125, y + 4.8);
    doc.text(row.y3, margin + 160, y + 4.8);

    y += 7;
  });

  // Annexure B: Staff Allocation Grid
  y += 8;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('ANNEXURE "B": CORE STAFF ALLOCATION GRID', margin, y);

  y += 4;
  FINANCIAL_METRICS.staffAllocationGrid.forEach((staff) => {
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.rect(margin, y, contentWidth, 6, 'F');
    doc.line(margin, y + 6, margin + contentWidth, y + 6);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.text(staff.role, margin + 4, y + 4.2);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text(staff.note, margin + 65, y + 4.2);

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.text(`${staff.count} Allocated`, margin + 165, y + 4.2);

    y += 6;
  });

  // Disclaimers note
  y += 6;
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(6.5);
  doc.text('Note: Financial projections are indicative for planning and depend on target city tiering and infrastructure scale.', margin, y);

  addPageFooter(6, 7);

  // ================= PAGE 7: 90-DAY IMPLEMENTATION & CONTACT =================
  doc.addPage();
  addPageHeader('IMPLEMENTATION ROADMAP & CONTACT', 'SECTION 06');

  y = 32;
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('PROPOSED 90-DAY IMPLEMENTATION JOURNEY', margin, y);

  y += 6;
  IMPLEMENTATION_ROADMAP.forEach((step) => {
    doc.setFillColor(bgLight[0], bgLight[1], bgLight[2]);
    doc.roundedRect(margin, y, contentWidth, 13, 1.5, 1.5, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(margin, y, contentWidth, 13, 1.5, 1.5, 'S');

    doc.setFillColor(primaryDarkBlue[0], primaryDarkBlue[1], primaryDarkBlue[2]);
    doc.roundedRect(margin + 2, y + 2, 22, 9, 1, 1, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.text(step.dayRange, margin + 13, y + 7.5, { align: 'center' });

    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(step.title, margin + 27, y + 5.5);

    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.text(step.description, margin + 27, y + 9.5, { maxWidth: contentWidth - 30 });

    y += 14.5;
  });

  // Ultimate Commitment Box
  y += 4;
  doc.setFillColor(primaryDarkBlue[0], primaryDarkBlue[1], primaryDarkBlue[2]);
  doc.roundedRect(margin, y, contentWidth, 38, 2, 2, 'F');
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.8);
  doc.roundedRect(margin, y, contentWidth, 38, 2, 2, 'S');

  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('CENTRAL CORPORATE FRANCHISE DESK & COMMUNICATIONS OFFICE', margin + 6, y + 7);

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('The International Delhi Public School Society, New Delhi', margin + 6, y + 13);
  doc.text('Registered Office: C-240/241, Third Floor, Pandav Nagar, New Delhi - 110092', margin + 6, y + 18);
  doc.text('Helpline Numbers: +91 7004222833 / +91 9631910016', margin + 6, y + 23);
  doc.text('Contact Email: info@idpssociety.com | franchise@idpssociety.com', margin + 6, y + 28);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('Official Web Portal: www.idpssociety.com', margin + 6, y + 33);

  addPageFooter(7, 7);

  return doc;
};
