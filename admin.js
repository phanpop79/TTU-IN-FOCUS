/**
 * ==========================================================================
 * TTU IN FOCUS — Administrative Dashboard Interactive Logic
 * Takoradi Technical University, Takoradi, Ghana
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ---------- 1. SEED DATASETS ----------
  const DEFAULT_EVENTS = [
    {
      id: 1,
      title: "31st Annual Matriculation Ceremony",
      category: "Academic",
      dept: "Office of the Registrar",
      faculty: "Central Administration",
      date: "2026-08-25T09:00",
      endDate: "2026-08-25T12:30",
      venue: "J.S. Addo Auditorium, Main Campus",
      desc: "Formal induction of newly admitted undergraduate, diploma, and postgraduate students into Takoradi Technical University. The ceremony features the official matriculation oath administration by the Registrar and the Vice-Chancellor's inaugural address.",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 1800,
      taken: 1540,
      featured: true,
      hot: false,
      deadline: "2026-08-24T17:00",
      tags: ["matriculation", "freshers", "ceremony", "administration"]
    },
    {
      id: 2,
      title: "Engineering Innovation & Research Colloquium",
      category: "Academic",
      dept: "Faculty of Engineering",
      faculty: "Engineering & Technology",
      date: "2026-09-04T10:00",
      endDate: "2026-09-04T16:00",
      venue: "Block C Conference Hall & Innovation Bay",
      desc: "Annual symposium where final-year engineering scholars and faculty members showcase cutting-edge renewable energy prototypes, automated industrial systems, and AI-assisted manufacturing projects to industry leaders.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 350,
      taken: 215,
      featured: false,
      hot: false,
      deadline: "2026-09-01T23:59",
      tags: ["engineering", "research", "robotics", "renewable energy"]
    },
    {
      id: 3,
      title: "Code4Ghana Campus Hackathon 2026",
      category: "Tech & Innovation",
      dept: "Computer Science & ICT",
      faculty: "Applied Sciences",
      date: "2026-09-19T08:00",
      endDate: "2026-09-20T12:00",
      venue: "Ultra-Modern ICT Centre & Tech Lab 2",
      desc: "A thrilling 28-hour continuous hackathon bringing together software engineers, UI/UX designers, and data scientists across Western Region tertiary institutions to build resilient civic tech and agricultural FinTech solutions.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 150,
      taken: 138,
      featured: false,
      hot: true,
      deadline: "2026-09-12T23:59",
      tags: ["hackathon", "coding", "software", "innovation", "tech"]
    },
    {
      id: 4,
      title: "Grand Cultural Durbar & Traditional Fashion Gala",
      category: "Social & Cultural",
      dept: "SRC Cultural Committee",
      faculty: "Student Affairs",
      date: "2026-08-29T14:00",
      endDate: "2026-08-29T21:00",
      venue: "University Central Quadrangle",
      desc: "An electric celebration of Ghana's rich ethnic heritage, featuring royal chieftaincy processions, traditional drum rhythms, folklore poetry, kente and fugu runway shows, and regional culinary exhibitions.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 2500,
      taken: 1980,
      featured: false,
      hot: true,
      deadline: "2026-08-28T12:00",
      tags: ["culture", "fashion", "durbar", "tradition", "music", "src"]
    },
    {
      id: 5,
      title: "TTU Choral Symphony & Spoken Word Night",
      category: "Social & Cultural",
      dept: "Department of Creative Arts",
      faculty: "Applied Arts & Design",
      date: "2026-10-09T18:00",
      endDate: "2026-10-09T22:00",
      venue: "Open-Air Campus Amphitheatre",
      desc: "An enchanting evening featuring harmonious classical choral anthems, contemporary gospel melodies, orchestral performances, and thought-provoking spoken word poetry by the TTU Mass Choir and guest artists.",
      img: "https://images.unsplash.com/photo-1507120410856-1f35574c3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 600,
      taken: 420,
      featured: false,
      hot: false,
      deadline: "2026-10-08T18:00",
      tags: ["music", "choir", "poetry", "arts", "entertainment"]
    },
    {
      id: 6,
      title: "Vice-Chancellor's Inter-Hall Football Cup Finals",
      category: "Sports",
      dept: "Sports & Physical Education Directorate",
      faculty: "University Sports",
      date: "2026-09-12T15:30",
      endDate: "2026-09-12T18:30",
      venue: "TTU Sports Stadium Arena",
      desc: "The pinnacle of campus sporting rivalry as Ahanta Hall battles Western Hall in the championship final of the 2026 Inter-Hall Football League. Includes live half-time brass band performances and trophy presentations.",
      img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 3500,
      taken: 3120,
      featured: false,
      hot: true,
      deadline: "2026-09-12T14:00",
      tags: ["sports", "football", "finals", "inter-hall", "tournament"]
    },
    {
      id: 7,
      title: "Annual Western Region Track & Field Invitational",
      category: "Sports",
      dept: "Sports Directorate",
      faculty: "University Sports",
      date: "2026-10-17T07:30",
      endDate: "2026-10-17T17:00",
      venue: "TTU Athletics Oval & Stadium",
      desc: "Premier track and field championship hosting collegiate athletic teams competing in 100m/200m/400m sprints, 4x100m relays, high jump, javelin, and long jump qualifiers.",
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 2000,
      taken: 1240,
      featured: false,
      hot: false,
      deadline: "2026-10-14T23:59",
      tags: ["athletics", "track", "field", "sprint", "fitness"]
    },
    {
      id: 8,
      title: "National Hospitality & Culinary Arts Expo",
      category: "Academic",
      dept: "Hospitality & Tourism Management",
      faculty: "Applied Arts & Design",
      date: "2026-09-25T09:30",
      endDate: "2026-09-25T16:30",
      venue: "BU Campus Hospitality Training Complex",
      desc: "Live masterclasses, cocktail mixology displays, hotel management seminars, and culinary contests with executive chefs from top Ghanaian resorts judging student creations.",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 400,
      taken: 310,
      featured: false,
      hot: false,
      deadline: "2026-09-23T18:00",
      tags: ["culinary", "hospitality", "food", "tourism", "exhibition"]
    },
    {
      id: 9,
      title: "Oil, Gas & Maritime Career Fair 2026",
      category: "Professional",
      dept: "Faculty of Engineering & Maritime Studies",
      faculty: "Engineering & Technology",
      date: "2026-10-23T08:30",
      endDate: "2026-10-23T16:00",
      venue: "J.S. Addo Auditorium & Foyer",
      desc: "Connect directly with multinational petroleum corporations, Takoradi Port authorities, logistics giants, and engineering firms for graduate internships, management trainee roles, and on-the-spot interviews.",
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 1200,
      taken: 980,
      featured: false,
      hot: true,
      deadline: "2026-10-20T23:59",
      tags: ["career", "oil and gas", "maritime", "jobs", "internship"]
    },
    {
      id: 10,
      title: "Graphic Design & Digital Media Showcase",
      category: "Academic",
      dept: "Department of Graphic Design",
      faculty: "Applied Arts & Design",
      date: "2026-11-06T10:00",
      endDate: "2026-11-06T17:00",
      venue: "Fine Arts Exhibition Gallery",
      desc: "An immersive visual arts exhibition featuring 3D animation screenings, VR experiences, brand identity systems, UI/UX case studies, and photography portfolios from graduating creative seniors.",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 350,
      taken: 190,
      featured: false,
      hot: false,
      deadline: "2026-11-04T18:00",
      tags: ["graphic design", "animation", "visual arts", "exhibition"]
    },
    {
      id: 11,
      title: "Inter-Faculty Basketball Championship",
      category: "Sports",
      dept: "Sports Directorate",
      faculty: "University Sports",
      date: "2026-11-14T16:00",
      endDate: "2026-11-14T20:30",
      venue: "Campus Basketball Courts, Main Campus",
      desc: "Fast-paced, high-energy 5v5 basketball tournament featuring 8 faculty teams vying for the 2026 TTU Chancellor's Shield, with DJ music and three-point shootout challenges.",
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 800,
      taken: 520,
      featured: false,
      hot: false,
      deadline: "2026-11-13T12:00",
      tags: ["basketball", "tournament", "sports", "faculty games"]
    },
    {
      id: 12,
      title: "Applied Sciences International Conference (ASIC 2026)",
      category: "Academic",
      dept: "Faculty of Applied Sciences",
      faculty: "Applied Sciences",
      date: "2026-11-26T08:30",
      endDate: "2026-11-27T17:00",
      venue: "J.S. Addo Auditorium & Syndicate Rooms",
      desc: "Two-day multidisciplinary international research conference on 'Technical Education, Green Chemistry & Sustainable Development in West Africa' featuring keynote scholars from Africa and Europe.",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 700,
      taken: 480,
      featured: false,
      hot: false,
      deadline: "2026-11-20T23:59",
      tags: ["conference", "research", "sciences", "colloquium", "papers"]
    },
    {
      id: 13,
      title: "24th Congregation & Graduation Ceremony",
      category: "Academic",
      dept: "Office of the Vice-Chancellor",
      faculty: "Central Administration",
      date: "2026-06-20T08:30",
      endDate: "2026-06-20T14:00",
      venue: "TTU Sports Stadium",
      desc: "Conferment of Master of Technology, BTech, and Higher National Diplomas on the graduating class of 2026 with honours and special awards.",
      img: "https://images.unsplash.com/photo-1523050854058-8df9019b0c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 5000,
      taken: 5000,
      featured: false,
      hot: false,
      past: true,
      deadline: "2026-06-18T18:00",
      tags: ["graduation", "congregation", "alumni", "degrees"]
    },
    {
      id: 14,
      title: "SRC Akwaaba Freshers' Welcome Concert",
      category: "Social & Cultural",
      dept: "SRC Entertainment Committee",
      faculty: "Student Affairs",
      date: "2026-07-11T19:00",
      endDate: "2026-07-12T01:00",
      venue: "University Quadrangle",
      desc: "Unforgettable musical bash featuring top Ghanaian hitmakers, student dance groups, and campus DJs welcoming all new students to the Oil City campus.",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 4000,
      taken: 4000,
      featured: false,
      hot: false,
      past: true,
      deadline: "2026-07-11T16:00",
      tags: ["concert", "akwaaba", "music", "nightlife", "src"]
    }
  ];

  const SAMPLE_REGISTRATIONS = [
    {
      id: "REG-MK789A",
      eventId: 1,
      eventTitle: "31st Annual Matriculation Ceremony",
      name: "Kwesi Appiah Boateng",
      indexNumber: "TTU/ENG/24/0012",
      email: "k.boateng@ttu.edu.gh",
      dept: "Mechanical Engineering",
      timestamp: "2026-08-15T10:30:00.000Z"
    },
    {
      id: "REG-PL452B",
      eventId: 3,
      eventTitle: "Code4Ghana Campus Hackathon 2026",
      name: "Abena Serwaa Manso",
      indexNumber: "TTU/CS/23/0481",
      email: "abena.manso@ttu.edu.gh",
      dept: "Computer Science & ICT",
      timestamp: "2026-08-16T14:22:00.000Z"
    },
    {
      id: "REG-TR891C",
      eventId: 4,
      eventTitle: "Grand Cultural Durbar & Traditional Fashion Gala",
      name: "Emmanuel Kojo Eshun",
      indexNumber: "TTU/ARTS/25/0199",
      email: "e.eshun@ttu.edu.gh",
      dept: "Fashion & Textile Technology",
      timestamp: "2026-08-17T09:15:00.000Z"
    },
    {
      id: "REG-QW672D",
      eventId: 6,
      eventTitle: "Vice-Chancellor's Inter-Hall Football Cup Finals",
      name: "Kofi Owusu Ansah",
      indexNumber: "TTU/BUILT/24/0523",
      email: "k.ansah@ttu.edu.gh",
      dept: "Building Technology",
      timestamp: "2026-08-17T16:45:00.000Z"
    }
  ];

  const SAMPLE_INQUIRIES = [
    {
      id: "INQ-991A",
      name: "Priscilla Naana Darko",
      email: "p.darko@st.ttu.edu.gh",
      subject: "J.S. Addo Auditorium Booking for SRC Summit",
      message: "Good day Secretariat. We would like to request permission to use the main auditorium for the upcoming Western Region Tertiary Women Leadership Summit on October 14th. Please provide the booking guidelines.",
      status: "unread",
      timestamp: "2026-08-18T08:30:00.000Z"
    },
    {
      id: "INQ-992B",
      name: "Dr. Isaac Mensah (Faculty Sponsor)",
      email: "i.mensah@ttu.edu.gh",
      subject: "ASIC 2026 Paper Submission Deadlines Extension",
      message: "Kindly confirm if the deadline for the Applied Sciences colloquium abstract submission will be extended by 2 weeks as requested by international participants.",
      status: "read",
      timestamp: "2026-08-17T11:20:00.000Z"
    }
  ];

  const DEPARTMENTS_DATA = [
    {
      name: "Faculty of Engineering",
      faculty: "Engineering & Technology",
      lead: "Prof. Victor K. Bondzie (Dean)",
      venues: "Engineering Hall C, Automation Lab, Fluid Mechanics Bay"
    },
    {
      name: "Faculty of Applied Sciences",
      faculty: "Applied Sciences",
      lead: "Dr. Evelyn G. Quarshie (Dean)",
      venues: "ICT Innovation Centre, Science Complex Lab 1 & 2"
    },
    {
      name: "Faculty of Applied Arts & Design",
      faculty: "Applied Arts & Design",
      lead: "Prof. Nana Kobina Baidoo (Dean)",
      venues: "Fine Arts Exhibition Gallery, BU Fashion Studios"
    },
    {
      name: "Faculty of Business Studies",
      faculty: "Business & Management",
      lead: "Dr. Anthony Cudjoe (Dean)",
      venues: "Business Block B, Executive Syndicate Rooms"
    },
    {
      name: "Faculty of Built & Natural Environment",
      faculty: "Built & Natural Environment",
      lead: "Ing. Samuel K. Arthur (Dean)",
      venues: "Surveying Hall, Architecture Design Studio"
    },
    {
      name: "Directorate of University Sports",
      faculty: "Student Affairs & Athletics",
      lead: "Coach Prince A. Mensah (Sports Director)",
      venues: "TTU Sports Stadium, Athletics Oval, Basketball Arena"
    }
  ];

  const VENUES_DATA = [
    { name: "J.S. Addo Auditorium", capacity: "1,800 seats", location: "Main Campus Central", desc: "Premier hall for matriculation, convocations, and international conferences." },
    { name: "University Quadrangle", capacity: "3,500 open-air", location: "Administration Grounds", desc: "Traditional durbar grounds, music festivals, and student rallies." },
    { name: "TTU Sports Stadium Arena", capacity: "5,000 stands", location: "Main Sports Complex", desc: "Collegiate football, track & field events, and inter-hall finals." },
    { name: "ICT Innovation Centre", capacity: "250 workstations", location: "Technology Block A", desc: "Hackathons, civic tech bootcamps, and coding seminars." },
    { name: "BU Campus Hospitality Complex", capacity: "400 delegates", location: "BU Annex Campus", desc: "Culinary arts masterclasses, banquet hall, and hotel training suites." },
    { name: "Open-Air Campus Amphitheatre", capacity: "800 seats", location: "Beside Ahanta Hall", desc: "Choral concerts, spoken word evenings, and theatre performances." }
  ];

  // ---------- 2. PERSISTENCE ENGINE ----------
  function loadEvents() {
    const raw = localStorage.getItem('ttu_events');
    if (!raw) {
      localStorage.setItem('ttu_events', JSON.stringify(DEFAULT_EVENTS));
      return [...DEFAULT_EVENTS];
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      console.warn('Error parsing ttu_events, fallback to default', e);
    }
    localStorage.setItem('ttu_events', JSON.stringify(DEFAULT_EVENTS));
    return [...DEFAULT_EVENTS];
  }

  function loadRegistrations() {
    const raw = localStorage.getItem('ttu_registrations');
    if (!raw) {
      localStorage.setItem('ttu_registrations', JSON.stringify(SAMPLE_REGISTRATIONS));
      return [...SAMPLE_REGISTRATIONS];
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Error parsing ttu_registrations', e);
    }
    return [];
  }

  function loadInquiries() {
    const raw = localStorage.getItem('ttu_inquiries');
    if (!raw) {
      localStorage.setItem('ttu_inquiries', JSON.stringify(SAMPLE_INQUIRIES));
      return [...SAMPLE_INQUIRIES];
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Error parsing ttu_inquiries', e);
    }
    return [];
  }

  // ---------- 3. ADMIN APP STATE ----------
  const adminState = {
    events: loadEvents(),
    registrations: loadRegistrations(),
    inquiries: loadInquiries(),
    bookmarksCount: (JSON.parse(localStorage.getItem('ttu_bookmarks') || '[]')).length,
    activeTab: 'dashboard',
    theme: localStorage.getItem('ttu_theme') || 'light',
    deleteTargetEvent: null,
    editingEventId: null
  };

  // ---------- 4. INITIALIZE APP ----------
  function init() {
    initTheme();
    initNavigation();
    initGlobalSearch();
    renderAllViews();
    setupEventListeners();
  }

  // ---------- 5. THEME SYSTEM ----------
  function initTheme() {
    applyTheme(adminState.theme);
  }

  function applyTheme(theme) {
    adminState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ttu_theme', theme);

    const sun = document.querySelector('.sun-icon');
    const moon = document.querySelector('.moon-icon');
    if (sun && moon) {
      sun.style.display = theme === 'dark' ? 'none' : 'block';
      moon.style.display = theme === 'dark' ? 'block' : 'none';
    }
  }

  function toggleTheme() {
    applyTheme(adminState.theme === 'dark' ? 'light' : 'dark');
    showToast(`Theme switched to ${adminState.theme === 'dark' ? 'Dark' : 'Light'} Mode`);
  }

  // ---------- 6. NAVIGATION & TABS ----------
  function initNavigation() {
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const sectionTitle = document.getElementById('topbarSectionTitle');
    const sectionSub = document.getElementById('topbarSectionSub');

    const meta = {
      dashboard: { title: "Dashboard Overview", sub: "Campus fixtures, analytics, and operational metrics" },
      events: { title: "Campus Events Management", sub: "Create, edit, archive, and publish campus events" },
      registrations: { title: "Attendee Registrations", sub: "Student seat passes, attendance tracking, and CSV exports" },
      inquiries: { title: "Secretariat Inquiries Inbox", sub: "Student and faculty communication inquiries" },
      departments: { title: "Faculties & Venues Directory", sub: "Academic organizational overview and facilities" },
      settings: { title: "System Data & Backup", sub: "Data exports, snapshot restores, and administration" }
    };

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.dataset.tab;
        if (!tab) return;
        switchTab(tab);
      });
    });

    function switchTab(tabKey) {
      adminState.activeTab = tabKey;

      navItems.forEach(i => i.classList.toggle('active', i.dataset.tab === tabKey));
      tabPanes.forEach(pane => pane.classList.toggle('active', pane.id === `tab-${tabKey}`));

      if (meta[tabKey]) {
        sectionTitle.textContent = meta[tabKey].title;
        sectionSub.textContent = meta[tabKey].sub;
      }

      // Close mobile sidebar if open
      closeSidebar();
    }

    // Direct tab linking from dashboard buttons
    document.getElementById('dashViewAllEventsBtn').onclick = () => switchTab('events');
    document.getElementById('dashViewAllRegBtn').onclick = () => switchTab('registrations');
    document.getElementById('dashViewAllInqBtn').onclick = () => switchTab('inquiries');

    // Mobile sidebar toggle
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.getElementById('adminSidebar');
    const overlay = document.getElementById('sidebarOverlay');

    sidebarToggleBtn.onclick = () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    };

    overlay.onclick = closeSidebar;

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    }
  }

  // ---------- 7. RENDER ALL VIEWS ----------
  function renderAllViews() {
    renderDashboard();
    renderEventsTable();
    renderRegistrationsTable();
    renderInquiriesTable();
    renderFacultiesAndVenues();
    updateBadges();
  }

  function updateBadges() {
    const unreadInq = adminState.inquiries.filter(i => i.status === 'unread').length;
    document.getElementById('badgeEventsCount').textContent = adminState.events.length;
    document.getElementById('badgeRegCount').textContent = adminState.registrations.length;
    document.getElementById('badgeInqCount').textContent = unreadInq;
    document.getElementById('topbarNotifBadge').textContent = unreadInq;
  }

  // ---------- 8. DASHBOARD RENDERER ----------
  function renderDashboard() {
    const now = new Date();
    const upcomingEvents = adminState.events.filter(e => !e.past && new Date(e.date) >= now);
    const pastEvents = adminState.events.filter(e => e.past || new Date(e.date) < now);

    // KPI Metrics
    document.getElementById('kpiTotalEvents').textContent = adminState.events.length;
    document.getElementById('kpiUpcomingCount').textContent = upcomingEvents.length;
    document.getElementById('kpiPastCount').textContent = pastEvents.length;

    // Total registrations
    document.getElementById('kpiTotalRegs').textContent = adminState.registrations.length.toLocaleString();

    // Average Fill Rate
    let totalCapacity = 0;
    let totalTaken = 0;
    upcomingEvents.forEach(e => {
      totalCapacity += (e.capacity || 0);
      totalTaken += (e.taken || 0);
    });
    const fillRate = totalCapacity > 0 ? Math.round((totalTaken / totalCapacity) * 100) : 0;
    document.getElementById('kpiFillRate').textContent = `${fillRate}%`;

    // Unread Inquiries
    const unreadCount = adminState.inquiries.filter(i => i.status === 'unread').length;
    document.getElementById('kpiUnreadInq').textContent = unreadCount;

    // Active Bookmarks
    document.getElementById('kpiBookmarks').textContent = adminState.bookmarksCount;

    // 1. Capacity Monitor List (Top 4 highest fill rate upcoming)
    const monitorContainer = document.getElementById('capacityMonitorList');
    monitorContainer.innerHTML = '';
    const sortedByFill = [...upcomingEvents].sort((a, b) => {
      const rateA = a.capacity ? a.taken / a.capacity : 0;
      const rateB = b.capacity ? b.taken / b.capacity : 0;
      return rateB - rateA;
    }).slice(0, 5);

    if (sortedByFill.length === 0) {
      monitorContainer.innerHTML = `<p style="font-size: 0.85rem; color: var(--admin-text-muted);">No upcoming fixtures with active seat caps.</p>`;
    } else {
      sortedByFill.forEach(ev => {
        const percent = Math.min(100, Math.round(((ev.taken || 0) / (ev.capacity || 100)) * 100));
        const isHighAlert = percent >= 80;

        const item = document.createElement('div');
        item.className = 'cap-item';
        item.innerHTML = `
          <div class="cap-item-header">
            <span class="cap-item-title" title="${escapeHtml(ev.title)}">${escapeHtml(ev.title)}</span>
            <span class="cap-item-numbers">${(ev.taken || 0).toLocaleString()} / ${(ev.capacity || 0).toLocaleString()} (${percent}%)</span>
          </div>
          <div class="cap-progress-track">
            <div class="cap-progress-bar ${isHighAlert ? 'high-alert' : ''}" style="width: ${percent}%;"></div>
          </div>
        `;
        monitorContainer.appendChild(item);
      });
    }

    // 2. Recent Registrations Table (Latest 5)
    const regBody = document.getElementById('dashRecentRegBody');
    regBody.innerHTML = '';
    const latestRegs = [...adminState.registrations].reverse().slice(0, 5);

    if (latestRegs.length === 0) {
      regBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--admin-text-muted);">No attendee registrations recorded yet.</td></tr>`;
    } else {
      latestRegs.forEach(reg => {
        const tr = document.createElement('tr');
        const regDate = reg.timestamp ? new Date(reg.timestamp).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : '--';
        tr.innerHTML = `
          <td><strong>${escapeHtml(reg.name)}</strong></td>
          <td><code style="font-size: 0.78rem;">${escapeHtml(reg.indexNumber)}</code></td>
          <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(reg.eventTitle || 'Campus Event')}</td>
          <td>${regDate}</td>
        `;
        regBody.appendChild(tr);
      });
    }

    // 3. Upcoming Deadlines
    const deadlineList = document.getElementById('dashDeadlinesList');
    deadlineList.innerHTML = '';
    const upcomingDeadlines = adminState.events
      .filter(e => e.deadline && new Date(e.deadline) > now)
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
      .slice(0, 4);

    if (upcomingDeadlines.length === 0) {
      deadlineList.innerHTML = `<p style="font-size: 0.85rem; color: var(--admin-text-muted);">No urgent registration closing dates.</p>`;
    } else {
      upcomingDeadlines.forEach(ev => {
        const d = new Date(ev.deadline);
        const item = document.createElement('div');
        item.className = 'dash-deadline-item';
        item.innerHTML = `
          <div>
            <div class="dash-dl-title">${escapeHtml(ev.title)}</div>
            <div class="dash-dl-date">Closes ${d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} at ${formatTime(d)}</div>
          </div>
          <button class="admin-btn admin-btn-sm admin-btn-outline" onclick="window.adminEditEvent(${ev.id})">Edit</button>
        `;
        deadlineList.appendChild(item);
      });
    }

    // 4. Recent Inquiries (Latest 2)
    const inqContainer = document.getElementById('dashRecentInqBody');
    inqContainer.innerHTML = '';
    const recentInqs = [...adminState.inquiries].slice(0, 2);

    if (recentInqs.length === 0) {
      inqContainer.innerHTML = `<p style="font-size: 0.85rem; color: var(--admin-text-muted);">No student inquiries received.</p>`;
    } else {
      recentInqs.forEach(inq => {
        const item = document.createElement('div');
        item.style.padding = '10px 0';
        item.style.borderBottom = '1px solid var(--admin-border)';
        item.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <strong style="font-size: 0.85rem;">${escapeHtml(inq.name)}</strong>
            <span class="admin-badge ${inq.status === 'unread' ? 'badge-unread' : 'badge-replied'}">${inq.status}</span>
          </div>
          <div style="font-size: 0.8rem; color: var(--admin-text-muted); line-height: 1.3;">${escapeHtml(inq.subject)}</div>
        `;
        inqContainer.appendChild(item);
      });
    }

    // 5. Category Distribution Pills
    const catContainer = document.getElementById('dashCategoryPills');
    catContainer.innerHTML = '';
    const categories = ['Academic', 'Social & Cultural', 'Sports', 'Professional', 'Tech & Innovation'];
    categories.forEach(cat => {
      const count = adminState.events.filter(e => e.category === cat).length;
      const pill = document.createElement('div');
      pill.className = 'cat-pill-stat';
      pill.innerHTML = `<span>${cat}</span> <strong>${count}</strong>`;
      catContainer.appendChild(pill);
    });
  }

  // ---------- 9. EVENTS MANAGEMENT (CRUD) ----------
  function renderEventsTable() {
    const tbody = document.getElementById('eventsTableBody');
    const searchVal = document.getElementById('eventTableSearch').value.toLowerCase().trim();
    const categoryVal = document.getElementById('eventCategoryFilter').value;
    const statusVal = document.getElementById('eventStatusFilter').value;
    const now = new Date();

    const filtered = adminState.events.filter(e => {
      // Search
      if (searchVal) {
        const titleMatch = e.title && e.title.toLowerCase().includes(searchVal);
        const venueMatch = e.venue && e.venue.toLowerCase().includes(searchVal);
        const deptMatch = e.dept && e.dept.toLowerCase().includes(searchVal);
        if (!titleMatch && !venueMatch && !deptMatch) return false;
      }

      // Category
      if (categoryVal !== 'all' && e.category !== categoryVal) return false;

      // Status
      if (statusVal === 'upcoming') {
        if (e.past || new Date(e.date) < now) return false;
      } else if (statusVal === 'past') {
        if (!e.past && new Date(e.date) >= now) return false;
      } else if (statusVal === 'featured') {
        if (!e.featured) return false;
      } else if (statusVal === 'hot') {
        if (!e.hot) return false;
      }

      return true;
    });

    document.getElementById('eventsFilteredCount').textContent = `Showing ${filtered.length} of ${adminState.events.length} events`;
    tbody.innerHTML = '';

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 40px 16px; color: var(--admin-text-muted);">
            No campus events match your active filters.
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach(ev => {
      const tr = document.createElement('tr');
      const eventDate = new Date(ev.date);
      const isPast = ev.past || eventDate < now;
      const capacityPercent = Math.min(100, Math.round(((ev.taken || 0) / (ev.capacity || 100)) * 100));

      tr.innerHTML = `
        <td><span style="font-family: var(--font-mono); font-weight: 700; color: var(--admin-text-muted); font-size: 0.8rem;">#${ev.id}</span></td>
        <td>
          <div class="table-event-cell">
            <div class="table-thumb" style="background-image: url('${ev.img}');"></div>
            <div class="table-event-info">
              <span class="table-event-title">${escapeHtml(ev.title)}</span>
              <span class="table-event-venue">📍 ${escapeHtml(ev.venue || 'Campus Venue')}</span>
            </div>
          </div>
        </td>
        <td><span class="admin-badge" style="background: var(--admin-surface-alt);">${ev.category || 'General'}</span></td>
        <td>
          <div style="font-size: 0.82rem; font-weight: 600;">${escapeHtml(ev.dept || '')}</div>
          <div style="font-size: 0.72rem; color: var(--admin-text-muted);">${escapeHtml(ev.faculty || '')}</div>
        </td>
        <td>
          <div style="font-weight: 600;">${eventDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
          <div style="font-size: 0.75rem; color: var(--admin-text-muted);">${formatTime(eventDate)}</div>
        </td>
        <td>
          <div style="font-size: 0.8rem; margin-bottom: 4px;"><strong>${(ev.taken || 0).toLocaleString()}</strong> / ${(ev.capacity || 0).toLocaleString()}</div>
          <div class="cap-progress-track" style="width: 100px;">
            <div class="cap-progress-bar" style="width: ${capacityPercent}%;"></div>
          </div>
        </td>
        <td>
          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
            ${ev.featured ? '<span class="admin-badge badge-featured">Spotlight</span>' : ''}
            ${ev.hot ? '<span class="admin-badge badge-hot">🔥 Hot</span>' : ''}
            ${isPast ? '<span class="admin-badge badge-past">Concluded</span>' : '<span class="admin-badge badge-upcoming">Upcoming</span>'}
          </div>
        </td>
        <td style="text-align: right;">
          <div class="table-actions" style="justify-content: flex-end;">
            <button class="btn-action-icon" title="Toggle Spotlight Hero" onclick="window.adminToggleFeatured(${ev.id})">
              ${ev.featured ? '🌟' : '⭐'}
            </button>
            <button class="btn-action-icon" title="Toggle Hot Event" onclick="window.adminToggleHot(${ev.id})">
              🔥
            </button>
            <button class="btn-action-icon" title="Edit Event" onclick="window.adminEditEvent(${ev.id})">
              ✏️
            </button>
            <button class="btn-action-icon danger" title="Delete Event" onclick="window.adminConfirmDelete(${ev.id})">
              🗑️
            </button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Also populate event dropdown in Registrations tab and manual modal
    populateEventSelects();
  }

  function populateEventSelects() {
    const regFilter = document.getElementById('regEventFilter');
    const manualSelect = document.getElementById('mRegEventSelect');

    const selectedFilter = regFilter.value;
    regFilter.innerHTML = '<option value="all">All Events</option>';
    manualSelect.innerHTML = '';

    adminState.events.forEach(e => {
      const opt = document.createElement('option');
      opt.value = e.id;
      opt.textContent = `#${e.id} — ${e.title}`;
      regFilter.appendChild(opt.cloneNode(true));
      manualSelect.appendChild(opt);
    });

    regFilter.value = selectedFilter || 'all';
  }

  // Add / Edit Modal Controls
  const eventModal = document.getElementById('eventFormModal');
  const eventForm = document.getElementById('adminEventForm');

  document.getElementById('btnOpenAddEventModal').onclick = () => {
    adminState.editingEventId = null;
    document.getElementById('eventFormModalTitle').textContent = "Add New Campus Event";
    eventForm.reset();
    document.getElementById('formEventId').value = '';

    // Set default datetime to tomorrow 10:00 AM
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    tomorrow.setHours(10, 0, 0, 0);
    document.getElementById('fEventStartDate').value = tomorrow.toISOString().slice(0, 16);

    openModal(eventModal);
  };

  document.getElementById('eventFormCloseBtn').onclick = () => closeModal(eventModal);
  document.getElementById('eventFormCancelBtn').onclick = () => closeModal(eventModal);

  // Preset image chips
  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.onclick = () => {
      document.getElementById('fEventImg').value = chip.dataset.url;
      showToast("Preset image URL populated");
    };
  });

  // Save Event (Create or Update)
  eventForm.onsubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById('fEventTitle').value.trim();
    const category = document.getElementById('fEventCategory').value;
    const dept = document.getElementById('fEventDept').value.trim();
    const faculty = document.getElementById('fEventFaculty').value;
    const venue = document.getElementById('fEventVenue').value.trim();
    const startDate = document.getElementById('fEventStartDate').value;
    const endDate = document.getElementById('fEventEndDate').value || null;
    const capacity = parseInt(document.getElementById('fEventCapacity').value, 10) || 100;
    const taken = parseInt(document.getElementById('fEventTaken').value, 10) || 0;
    const deadline = document.getElementById('fEventDeadline').value || null;
    const desc = document.getElementById('fEventDesc').value.trim();
    const img = document.getElementById('fEventImg').value.trim();
    const tags = document.getElementById('fEventTags').value.split(',').map(t => t.trim()).filter(Boolean);
    const featured = document.getElementById('fEventFeatured').checked;
    const hot = document.getElementById('fEventHot').checked;

    if (featured) {
      // Un-feature others if setting this one as featured spotlight
      adminState.events.forEach(ev => ev.featured = false);
    }

    if (adminState.editingEventId) {
      // UPDATE
      const target = adminState.events.find(ev => ev.id === adminState.editingEventId);
      if (target) {
        target.title = title;
        target.category = category;
        target.dept = dept;
        target.faculty = faculty;
        target.venue = venue;
        target.date = startDate;
        target.endDate = endDate;
        target.capacity = capacity;
        target.taken = taken;
        target.deadline = deadline;
        target.desc = desc;
        target.img = img;
        target.tags = tags;
        target.featured = featured;
        target.hot = hot;
        target.past = new Date(startDate) < new Date();
      }
      showToast(`Event #${adminState.editingEventId} updated successfully`);
    } else {
      // CREATE
      const nextId = adminState.events.length > 0 ? Math.max(...adminState.events.map(ev => ev.id)) + 1 : 1;
      const newEvent = {
        id: nextId,
        title,
        category,
        dept,
        faculty,
        venue,
        date: startDate,
        endDate,
        capacity,
        taken,
        deadline,
        desc,
        img,
        tags,
        featured,
        hot,
        past: new Date(startDate) < new Date()
      };
      adminState.events.unshift(newEvent);
      showToast(`🎉 New event "${title}" added to campus hub!`);
    }

    // Save to LocalStorage
    saveEventsToStorage();
    closeModal(eventModal);
    renderAllViews();
  };

  window.adminEditEvent = function (id) {
    const ev = adminState.events.find(e => e.id === Number(id));
    if (!ev) return;

    adminState.editingEventId = ev.id;
    document.getElementById('eventFormModalTitle').textContent = `Edit Event #${ev.id}`;
    document.getElementById('formEventId').value = ev.id;
    document.getElementById('fEventTitle').value = ev.title || '';
    document.getElementById('fEventCategory').value = ev.category || 'Academic';
    document.getElementById('fEventDept').value = ev.dept || '';
    document.getElementById('fEventFaculty').value = ev.faculty || 'Central Administration';
    document.getElementById('fEventVenue').value = ev.venue || '';
    document.getElementById('fEventStartDate').value = ev.date ? ev.date.slice(0, 16) : '';
    document.getElementById('fEventEndDate').value = ev.endDate ? ev.endDate.slice(0, 16) : '';
    document.getElementById('fEventCapacity').value = ev.capacity || 100;
    document.getElementById('fEventTaken').value = ev.taken || 0;
    document.getElementById('fEventDeadline').value = ev.deadline ? ev.deadline.slice(0, 16) : '';
    document.getElementById('fEventDesc').value = ev.desc || '';
    document.getElementById('fEventImg').value = ev.img || '';
    document.getElementById('fEventTags').value = ev.tags ? ev.tags.join(', ') : '';
    document.getElementById('fEventFeatured').checked = !!ev.featured;
    document.getElementById('fEventHot').checked = !!ev.hot;

    openModal(eventModal);
  };

  window.adminToggleFeatured = function (id) {
    const ev = adminState.events.find(e => e.id === Number(id));
    if (!ev) return;

    const willBeFeatured = !ev.featured;
    if (willBeFeatured) {
      adminState.events.forEach(e => e.featured = false);
    }
    ev.featured = willBeFeatured;
    saveEventsToStorage();
    renderAllViews();
    showToast(willBeFeatured ? `🌟 "${ev.title}" is now Homepage Hero Spotlight` : "Removed from Hero Spotlight");
  };

  window.adminToggleHot = function (id) {
    const ev = adminState.events.find(e => e.id === Number(id));
    if (!ev) return;
    ev.hot = !ev.hot;
    saveEventsToStorage();
    renderAllViews();
    showToast(ev.hot ? `🔥 Marked "${ev.title}" as HOT trending` : "Removed HOT status");
  };

  // Delete event confirmation
  const deleteModal = document.getElementById('deleteConfirmModal');
  window.adminConfirmDelete = function (id) {
    const ev = adminState.events.find(e => e.id === Number(id));
    if (!ev) return;
    adminState.deleteTargetEvent = ev;
    document.getElementById('deleteTargetTitle').textContent = `"${ev.title}"`;
    openModal(deleteModal);
  };

  document.getElementById('deleteModalCloseBtn').onclick = () => closeModal(deleteModal);
  document.getElementById('deleteModalCancelBtn').onclick = () => closeModal(deleteModal);
  document.getElementById('deleteModalConfirmBtn').onclick = () => {
    if (adminState.deleteTargetEvent) {
      adminState.events = adminState.events.filter(e => e.id !== adminState.deleteTargetEvent.id);
      saveEventsToStorage();
      closeModal(deleteModal);
      renderAllViews();
      showToast("Event successfully removed from portal");
    }
  };

  // Reset to default sample events
  document.getElementById('btnResetEventsDefault').onclick = () => {
    if (confirm("Reset events catalog to default 14 curated fixtures?")) {
      adminState.events = [...DEFAULT_EVENTS];
      saveEventsToStorage();
      renderAllViews();
      showToast("Reset events to default catalog");
    }
  };

  function saveEventsToStorage() {
    localStorage.setItem('ttu_events', JSON.stringify(adminState.events));
  }

  // Event table filters change
  document.getElementById('eventTableSearch').oninput = renderEventsTable;
  document.getElementById('eventCategoryFilter').onchange = renderEventsTable;
  document.getElementById('eventStatusFilter').onchange = renderEventsTable;

  // ---------- 10. ATTENDEES & REGISTRATIONS MANAGEMENT ----------
  function renderRegistrationsTable() {
    const tbody = document.getElementById('registrationsTableBody');
    const searchVal = document.getElementById('regTableSearch').value.toLowerCase().trim();
    const eventFilter = document.getElementById('regEventFilter').value;

    const filtered = adminState.registrations.filter(r => {
      if (searchVal) {
        const nameMatch = r.name && r.name.toLowerCase().includes(searchVal);
        const indexMatch = r.indexNumber && r.indexNumber.toLowerCase().includes(searchVal);
        const emailMatch = r.email && r.email.toLowerCase().includes(searchVal);
        const deptMatch = r.dept && r.dept.toLowerCase().includes(searchVal);
        if (!nameMatch && !indexMatch && !emailMatch && !deptMatch) return false;
      }

      if (eventFilter !== 'all') {
        if (String(r.eventId) !== String(eventFilter)) return false;
      }

      return true;
    });

    document.getElementById('regFilteredCount').textContent = `${filtered.length} Registrations Listed`;
    tbody.innerHTML = '';

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 40px 16px; color: var(--admin-text-muted);">
            No attendee records found.
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach(reg => {
      const tr = document.createElement('tr');
      const dateStr = reg.timestamp ? new Date(reg.timestamp).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '--';

      tr.innerHTML = `
        <td><code style="font-family: var(--font-mono); font-weight: 700; color: var(--gold);">${escapeHtml(reg.id)}</code></td>
        <td><strong>${escapeHtml(reg.name)}</strong></td>
        <td><code>${escapeHtml(reg.indexNumber)}</code></td>
        <td><a href="mailto:${escapeHtml(reg.email)}" style="color: var(--gold); text-decoration: underline;">${escapeHtml(reg.email)}</a></td>
        <td><span style="font-size: 0.8rem;">${escapeHtml(reg.dept || 'General')}</span></td>
        <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><strong>${escapeHtml(reg.eventTitle || 'Campus Event')}</strong></td>
        <td>${dateStr}</td>
        <td style="text-align: right;">
          <div class="table-actions" style="justify-content: flex-end;">
            <button class="btn-action-icon" title="View Entry Pass" onclick="window.adminViewTicket('${reg.id}')">
              🎫
            </button>
            <button class="btn-action-icon danger" title="Cancel Booking" onclick="window.adminCancelReg('${reg.id}')">
              ❌
            </button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  document.getElementById('regTableSearch').oninput = renderRegistrationsTable;
  document.getElementById('regEventFilter').onchange = renderRegistrationsTable;

  // View Ticket Pass
  const ticketModal = document.getElementById('ticketModal');
  window.adminViewTicket = function (regId) {
    const reg = adminState.registrations.find(r => r.id === regId);
    if (!reg) return;

    document.getElementById('tPassId').textContent = reg.id;
    document.getElementById('tName').textContent = reg.name;
    document.getElementById('tIndex').textContent = reg.indexNumber;
    document.getElementById('tEvent').textContent = reg.eventTitle;
    document.getElementById('tEmail').textContent = reg.email;
    document.getElementById('tDept').textContent = reg.dept || 'Not specified';
    document.getElementById('tTimestamp').textContent = reg.timestamp ? new Date(reg.timestamp).toLocaleString('en-GB') : '--';

    openModal(ticketModal);
  };

  document.getElementById('ticketModalCloseBtn').onclick = () => closeModal(ticketModal);
  document.getElementById('ticketModalDoneBtn').onclick = () => closeModal(ticketModal);

  // Cancel / Delete Registration
  window.adminCancelReg = function (regId) {
    if (confirm(`Cancel and delete registration ticket ${regId}?`)) {
      adminState.registrations = adminState.registrations.filter(r => r.id !== regId);
      localStorage.setItem('ttu_registrations', JSON.stringify(adminState.registrations));
      renderAllViews();
      showToast(`Registration ${regId} removed.`);
    }
  };

  // Export Attendees to CSV File
  document.getElementById('btnExportCSV').onclick = () => {
    if (adminState.registrations.length === 0) {
      showToast("No registrations available to export.");
      return;
    }

    const headers = ["Ticket ID", "Full Name", "Student/Staff ID", "Email", "Department", "Event ID", "Event Title", "Registration Date"];
    const rows = adminState.registrations.map(r => [
      `"${r.id || ''}"`,
      `"${(r.name || '').replace(/"/g, '""')}"`,
      `"${(r.indexNumber || '').replace(/"/g, '""')}"`,
      `"${(r.email || '').replace(/"/g, '""')}"`,
      `"${(r.dept || '').replace(/"/g, '""')}"`,
      `"${r.eventId || ''}"`,
      `"${(r.eventTitle || '').replace(/"/g, '""')}"`,
      `"${r.timestamp || ''}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map(row => row.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `TTU_Event_Attendees_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("📊 Downloaded attendee roster CSV file!");
  };

  // Manual Walk-in Registration Modal
  const manualRegModal = document.getElementById('manualRegModal');
  document.getElementById('btnManualReg').onclick = () => {
    document.getElementById('manualRegForm').reset();
    openModal(manualRegModal);
  };
  document.getElementById('manualRegCloseBtn').onclick = () => closeModal(manualRegModal);
  document.getElementById('manualRegCancelBtn').onclick = () => closeModal(manualRegModal);

  document.getElementById('manualRegForm').onsubmit = (e) => {
    e.preventDefault();
    const eventId = parseInt(document.getElementById('mRegEventSelect').value, 10);
    const ev = adminState.events.find(e => e.id === eventId);
    if (!ev) return;

    const newReg = {
      id: 'WALK-' + Date.now().toString(36).toUpperCase(),
      eventId: ev.id,
      eventTitle: ev.title,
      name: document.getElementById('mRegName').value.trim(),
      indexNumber: document.getElementById('mRegIndex').value.trim(),
      email: document.getElementById('mRegEmail').value.trim(),
      dept: document.getElementById('mRegDept').value.trim() || 'Walk-in',
      timestamp: new Date().toISOString()
    };

    adminState.registrations.unshift(newReg);
    localStorage.setItem('ttu_registrations', JSON.stringify(adminState.registrations));

    ev.taken = Math.min(ev.capacity, (ev.taken || 0) + 1);
    saveEventsToStorage();

    closeModal(manualRegModal);
    renderAllViews();
    showToast(`Issued walk-in entry pass ${newReg.id}!`);
  };

  // ---------- 11. INQUIRIES & COMMUNICATIONS ----------
  function renderInquiriesTable() {
    const tbody = document.getElementById('inquiriesTableBody');
    const searchVal = document.getElementById('inqTableSearch').value.toLowerCase().trim();
    const statusVal = document.getElementById('inqStatusFilter').value;

    const filtered = adminState.inquiries.filter(i => {
      if (searchVal) {
        const nameMatch = i.name && i.name.toLowerCase().includes(searchVal);
        const emailMatch = i.email && i.email.toLowerCase().includes(searchVal);
        const subMatch = i.subject && i.subject.toLowerCase().includes(searchVal);
        if (!nameMatch && !emailMatch && !subMatch) return false;
      }
      if (statusVal !== 'all' && i.status !== statusVal) return false;
      return true;
    });

    document.getElementById('inqFilteredCount').textContent = `${filtered.length} Messages`;
    tbody.innerHTML = '';

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 40px 16px; color: var(--admin-text-muted);">No messages found.</td></tr>`;
      return;
    }

    filtered.forEach(inq => {
      const tr = document.createElement('tr');
      const dateStr = inq.timestamp ? new Date(inq.timestamp).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : '--';

      let statusBadge = '<span class="admin-badge badge-unread">Unread</span>';
      if (inq.status === 'read') statusBadge = '<span class="admin-badge" style="background: var(--admin-surface-alt);">Read</span>';
      if (inq.status === 'replied') statusBadge = '<span class="admin-badge badge-replied">Replied</span>';

      tr.innerHTML = `
        <td><strong>${escapeHtml(inq.name)}</strong></td>
        <td><a href="mailto:${escapeHtml(inq.email)}" style="color: var(--gold);">${escapeHtml(inq.email)}</a></td>
        <td><span style="font-weight: 600;">${escapeHtml(inq.subject)}</span></td>
        <td>${dateStr}</td>
        <td>${statusBadge}</td>
        <td style="text-align: right;">
          <div class="table-actions" style="justify-content: flex-end;">
            <button class="btn-action-icon" title="View Message" onclick="window.adminViewInquiry('${inq.id}')">
              👁️
            </button>
            <button class="btn-action-icon danger" title="Delete Message" onclick="window.adminDeleteInquiry('${inq.id}')">
              🗑️
            </button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  document.getElementById('inqTableSearch').oninput = renderInquiriesTable;
  document.getElementById('inqStatusFilter').onchange = renderInquiriesTable;

  // View Inquiry Modal
  const inquiryModal = document.getElementById('inquiryModal');
  let activeInquiry = null;

  window.adminViewInquiry = function (inqId) {
    activeInquiry = adminState.inquiries.find(i => i.id === inqId);
    if (!activeInquiry) return;

    document.getElementById('inqSenderName').textContent = activeInquiry.name;
    document.getElementById('inqSenderEmail').textContent = activeInquiry.email;
    document.getElementById('inqSubject').textContent = activeInquiry.subject;
    document.getElementById('inqMessageText').textContent = activeInquiry.message;
    document.getElementById('inqStatusSelect').value = activeInquiry.status || 'read';

    if (activeInquiry.status === 'unread') {
      activeInquiry.status = 'read';
      localStorage.setItem('ttu_inquiries', JSON.stringify(adminState.inquiries));
      updateBadges();
      renderInquiriesTable();
    }

    openModal(inquiryModal);
  };

  document.getElementById('inquiryModalCloseBtn').onclick = () => closeModal(inquiryModal);
  document.getElementById('inquiryModalCloseActionBtn').onclick = () => closeModal(inquiryModal);
  document.getElementById('inquiryModalSaveStatusBtn').onclick = () => {
    if (activeInquiry) {
      activeInquiry.status = document.getElementById('inqStatusSelect').value;
      localStorage.setItem('ttu_inquiries', JSON.stringify(adminState.inquiries));
      closeModal(inquiryModal);
      renderAllViews();
      showToast("Inquiry status updated.");
    }
  };

  window.adminDeleteInquiry = function (inqId) {
    if (confirm("Delete this inquiry from records?")) {
      adminState.inquiries = adminState.inquiries.filter(i => i.id !== inqId);
      localStorage.setItem('ttu_inquiries', JSON.stringify(adminState.inquiries));
      renderAllViews();
      showToast("Message deleted.");
    }
  };

  document.getElementById('btnMarkAllInquiriesRead').onclick = () => {
    adminState.inquiries.forEach(i => i.status = 'read');
    localStorage.setItem('ttu_inquiries', JSON.stringify(adminState.inquiries));
    renderAllViews();
    showToast("All inquiries marked as read.");
  };

  // ---------- 12. FACULTIES & VENUES DIRECTORY ----------
  function renderFacultiesAndVenues() {
    const facGrid = document.getElementById('facultiesAdminGrid');
    facGrid.innerHTML = '';
    DEPARTMENTS_DATA.forEach(fac => {
      const eventCount = adminState.events.filter(e =>
        (e.faculty && e.faculty.toLowerCase().includes(fac.faculty.toLowerCase())) ||
        (e.dept && e.dept.toLowerCase().includes(fac.name.toLowerCase()))
      ).length;

      const card = document.createElement('div');
      card.className = 'faculty-admin-card';
      card.innerHTML = `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <h5 style="font-family: var(--font-display); font-size: 1.1rem;">${fac.name}</h5>
            <span class="admin-badge badge-featured">${eventCount} Fixtures</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin-bottom: 6px;">${fac.lead}</p>
          <p style="font-size: 0.78rem; color: var(--admin-text-muted);">Dedicated Venues: ${fac.venues}</p>
        </div>
      `;
      facGrid.appendChild(card);
    });

    const venueGrid = document.getElementById('venuesAdminGrid');
    venueGrid.innerHTML = '';
    VENUES_DATA.forEach(v => {
      const count = adminState.events.filter(e => e.venue && e.venue.toLowerCase().includes(v.name.toLowerCase())).length;

      const box = document.createElement('div');
      box.className = 'venue-box';
      box.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h5>📍 ${v.name}</h5>
          <span class="admin-badge badge-upcoming">${count} Bookings</span>
        </div>
        <p><strong>Capacity:</strong> ${v.capacity}</p>
        <p><strong>Zone:</strong> ${v.location}</p>
        <p style="margin-top: 6px;">${v.desc}</p>
      `;
      venueGrid.appendChild(box);
    });
  }

  // ---------- 13. SYSTEM SETTINGS, BACKUP & RESTORE ----------
  // Download JSON Backup
  document.getElementById('btnDownloadBackup').onclick = () => {
    const backupData = {
      system: "TTU IN FOCUS EVENT HUB",
      exportedAt: new Date().toISOString(),
      version: "2.0",
      events: adminState.events,
      registrations: adminState.registrations,
      inquiries: adminState.inquiries
    };

    const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const a = document.createElement('a');
    a.href = jsonString;
    a.download = `TTU_EventHub_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("📦 System snapshot exported as JSON!");
  };

  // Restore from JSON
  const importFileInput = document.getElementById('importJsonInput');
  document.getElementById('btnTriggerImport').onclick = () => importFileInput.click();

  importFileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById('importFileName').textContent = file.name;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported.events)) {
          adminState.events = imported.events;
          localStorage.setItem('ttu_events', JSON.stringify(imported.events));
        }
        if (Array.isArray(imported.registrations)) {
          adminState.registrations = imported.registrations;
          localStorage.setItem('ttu_registrations', JSON.stringify(imported.registrations));
        }
        if (Array.isArray(imported.inquiries)) {
          adminState.inquiries = imported.inquiries;
          localStorage.setItem('ttu_inquiries', JSON.stringify(imported.inquiries));
        }

        renderAllViews();
        showToast("✅ Backup successfully restored into local database!");
      } catch (err) {
        alert("Invalid JSON backup file format.");
      }
    };
    reader.readAsText(file);
  };

  // Factory Reset
  document.getElementById('btnFactoryReset').onclick = () => {
    const confirmed = prompt("Type 'RESET' to restore factory demo data and clear custom bookings:");
    if (confirmed === 'RESET') {
      localStorage.setItem('ttu_events', JSON.stringify(DEFAULT_EVENTS));
      localStorage.setItem('ttu_registrations', JSON.stringify(SAMPLE_REGISTRATIONS));
      localStorage.setItem('ttu_inquiries', JSON.stringify(SAMPLE_INQUIRIES));

      adminState.events = [...DEFAULT_EVENTS];
      adminState.registrations = [...SAMPLE_REGISTRATIONS];
      adminState.inquiries = [...SAMPLE_INQUIRIES];

      renderAllViews();
      showToast("System restored to factory demo state.");
    }
  };

  // Admin Session Guard & Logout
  function checkSession() {
    const rawSession = sessionStorage.getItem('ttu_admin_session') || localStorage.getItem('ttu_admin_session');
    if (!rawSession) {
      window.location.replace('login.html');
      return null;
    }
    try {
      const session = JSON.parse(rawSession);
      const userElem = document.getElementById('adminSessionUser');
      if (userElem && session.user) userElem.textContent = session.user;
      const userNameElem = document.querySelector('.user-name');
      if (userNameElem && session.name) userNameElem.textContent = session.name;
      return session;
    } catch (e) {
      window.location.replace('login.html');
      return null;
    }
  }
  checkSession();

  function performLogout() {
    sessionStorage.removeItem('ttu_admin_session');
    localStorage.removeItem('ttu_admin_session');
    window.location.href = 'login.html?logout=true';
  }

  document.getElementById('btnAdminLogout').onclick = performLogout;

  document.getElementById('adminProfileBtn').onclick = () => {
    const logout = confirm("You are logged in as admin@ttu.edu.gh. Do you want to sign out?");
    if (logout) {
      performLogout();
    }
  };

  // Global search input
  function initGlobalSearch() {
    const search = document.getElementById('globalAdminSearch');
    search.oninput = () => {
      const q = search.value.toLowerCase().trim();
      if (!q) return;

      // Filter events table and switch to events tab if not already on it
      const eventSearch = document.getElementById('eventTableSearch');
      if (eventSearch) {
        eventSearch.value = q;
        renderEventsTable();
      }

      const regSearch = document.getElementById('regTableSearch');
      if (regSearch) {
        regSearch.value = q;
        renderRegistrationsTable();
      }
    };
  }

  // ---------- 14. MODAL UTILITIES ----------
  function openModal(modalElem) {
    if (!modalElem) return;
    modalElem.classList.add('open');
    modalElem.focus();
  }

  function closeModal(modalElem) {
    if (!modalElem) return;
    modalElem.classList.remove('open');
  }

  // ---------- 15. TOAST & NOTIFICATIONS ----------
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('adminToast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  function formatTime(dateObj) {
    return dateObj.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).toUpperCase();
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ---------- 16. EVENT LISTENERS & CROSS-TAB SYNC ----------
  function setupEventListeners() {
    // Theme toggle
    document.getElementById('adminThemeToggle').onclick = toggleTheme;

    // Notifications button
    document.getElementById('adminNotifBtn').onclick = () => {
      const unread = adminState.inquiries.filter(i => i.status === 'unread').length;
      showToast(`You have ${unread} unread contact inquiry${unread === 1 ? '' : 's'}.`);
    };

    // Close modals on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(eventModal);
        closeModal(deleteModal);
        closeModal(ticketModal);
        closeModal(inquiryModal);
        closeModal(manualRegModal);
      }
    });

    // Cross-tab synchronization with public portal
    window.addEventListener('storage', (e) => {
      if (e.key === 'ttu_events') {
        adminState.events = loadEvents();
        renderAllViews();
      } else if (e.key === 'ttu_registrations') {
        adminState.registrations = loadRegistrations();
        renderAllViews();
      } else if (e.key === 'ttu_inquiries') {
        adminState.inquiries = loadInquiries();
        renderAllViews();
      } else if (e.key === 'ttu_theme') {
        applyTheme(e.newValue || 'light');
      }
    });
  }
  const btnUploadByUrl = document.getElementById('btnUploadByUrl');
const fEventImg = document.getElementById('fEventImg');

if (btnUploadByUrl && fEventImg) {
  btnUploadByUrl.addEventListener('click', () => {
    const url = fEventImg.value.trim();
    if (!url) {
      showToast('Please enter an image URL first');
      return;
    }
    
    // Quick URL validation check
    try {
      new URL(url);
      showToast('Image URL uploaded successfully!');
    } catch (_) {
      showToast('Please enter a valid image URL');
    }
  });
}

  // Run the admin console
  init();
});
