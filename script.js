/**
 * ==========================================================================
 * TTU IN FOCUS — Campus Event Hub Interactive Application Logic
 * Takoradi Technical University, Takoradi, Ghana
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ---------- 1. CURATED SEED EVENT DATASET ----------
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
    // Past Events
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

  // Faculty/Department metadata for Department Cards
  const DEPARTMENTS_DATA = [
    {
      name: "Faculty of Engineering",
      faculty: "Engineering & Technology",
      icon: '<i class="fa-solid fa-gears"></i>',
      code: "FOE",
      desc: "Mechanical, Electrical, Civil, and Petroleum Engineering innovations."
    },
    {
      name: "Faculty of Applied Sciences",
      faculty: "Applied Sciences",
      icon: '<i class="fa-solid fa-flask"></i>',
      code: "FAS",
      desc: "Computer Science, Mathematics & Statistics, and Laboratory Technology."
    },
    {
      name: "Faculty of Applied Arts & Design",
      faculty: "Applied Arts",
      icon: '<i class="fa-solid fa-palette"></i>',
      code: "FAAD",
      desc: "Graphic Design, Industrial Painting, Sculpture, and Fashion Technology."
    },
    {
      name: "Faculty of Business Studies",
      faculty: "Business & Management",
      icon: '<i class="fa-solid fa-chart-line"></i>',
      code: "FBS",
      desc: "Accounting, Marketing, Procurement, and Entrepreneurship."
    },
    {
      name: "Faculty of Built & Natural Environment",
      faculty: "Built Environment",
      icon: '<i class="fa-solid fa-landmark"></i>',
      code: "FBNE",
      desc: "Architecture, Building Technology, and Estate Management."
    },
    {
      name: "Directorate of Sports",
      faculty: "Student Affairs & Athletics",
      icon: '<i class="fa-solid fa-trophy"></i>',
      code: "SPORTS",
      desc: "Athletics, Football, Basketball, and Collegiate Tournaments."
    }
  ];

  // ---------- 2. PERSISTENCE HELPER & APP STATE ----------
  function loadPersistedEvents() {
    const raw = localStorage.getItem('ttu_events');
    if (!raw) {
      localStorage.setItem('ttu_events', JSON.stringify(DEFAULT_EVENTS));
      return [...DEFAULT_EVENTS];
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.warn('Corrupt ttu_events in localStorage, resetting to defaults.', e);
    }
    localStorage.setItem('ttu_events', JSON.stringify(DEFAULT_EVENTS));
    return [...DEFAULT_EVENTS];
  }

  const state = {
    events: loadPersistedEvents(),
    activeFilter: 'all',
    searchQuery: '',
    selectedDepartment: 'all',
    selectedDate: null,
    calendarDate: new Date(), // for calendar month view
    bookmarks: new Set(JSON.parse(localStorage.getItem('ttu_bookmarks') || '[]')),
    registrations: JSON.parse(localStorage.getItem('ttu_registrations') || '[]'),
    theme: localStorage.getItem('ttu_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    countdownInterval: null
  };

  // ---------- 3. DOM ELEMENTS ----------
  const DOM = {
    html: document.documentElement,
    siteHeader: document.getElementById('siteHeader'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    sunIcon: document.querySelector('.sun-icon'),
    moonIcon: document.querySelector('.moon-icon'),
    bookmarkToggleBtn: document.getElementById('bookmarkToggleBtn'),
    bookmarkCount: document.getElementById('bookmarkCount'),
    bookmarkSidebarBadge: document.getElementById('bookmarkSidebarBadge'),
    bookmarkList: document.getElementById('bookmarkList'),
    hamburgerBtn: document.getElementById('hamburgerBtn'),
    mainNav: document.getElementById('mainNav'),
    navCloseBtn: document.getElementById('navCloseBtn'),
    navOverlay: document.getElementById('navOverlay'),
    navLinks: document.querySelectorAll('.nav-link'),

    // Hero
    featuredTitle: document.getElementById('featuredTitle'),
    featuredDesc: document.getElementById('featuredDesc'),
    featuredDate: document.getElementById('featuredDate'),
    featuredVenue: document.getElementById('featuredVenue'),
    featuredRegisterBtn: document.getElementById('featuredRegisterBtn'),
    featuredDetailsBtn: document.getElementById('featuredDetailsBtn'),
    featuredStatusPill: document.getElementById('featuredStatusPill'),
    countdownEventName: document.getElementById('countdownEventName'),
    cdDays: document.getElementById('cd-days'),
    cdHours: document.getElementById('cd-hours'),
    cdMins: document.getElementById('cd-mins'),
    cdSecs: document.getElementById('cd-secs'),

    // Filters & Search
    filterChips: document.getElementById('filterChips'),
    resultsCount: document.getElementById('resultsCount'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    searchForm: document.getElementById('searchForm'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    categoryList: document.getElementById('categoryList'),
    departmentFilter: document.getElementById('departmentFilter'),
    deadlineList: document.getElementById('deadlineList'),

    // Grids
    upcomingGrid: document.getElementById('upcomingGrid'),
    academicGrid: document.getElementById('academicGrid'),
    socialGrid: document.getElementById('socialGrid'),
    sportsGrid: document.getElementById('sportsGrid'),
    deptGrid: document.getElementById('deptGrid'),
    pastGrid: document.getElementById('pastGrid'),

    // Calendar
    calPrev: document.getElementById('calPrev'),
    calNext: document.getElementById('calNext'),
    calTodayBtn: document.getElementById('calTodayBtn'),
    calMonthLabel: document.getElementById('calMonthLabel'),
    calendarGrid: document.getElementById('calendarGrid'),
    selectedDateInfo: document.getElementById('selectedDateInfo'),
    selectedDateTitle: document.getElementById('selectedDateTitle'),
    selectedDateList: document.getElementById('selectedDateList'),
    clearDateFilterBtn: document.getElementById('clearDateFilterBtn'),

    // Modals
    eventModal: document.getElementById('eventModal'),
    modalClose: document.getElementById('modalClose'),
    modalPoster: document.getElementById('modalPoster'),
    modalCategory: document.getElementById('modalCategory'),
    modalDept: document.getElementById('modalDept'),
    modalHotPill: document.getElementById('modalHotPill'),
    modalTitle: document.getElementById('modalTitle'),
    modalDate: document.getElementById('modalDate'),
    modalTime: document.getElementById('modalTime'),
    modalVenue: document.getElementById('modalVenue'),
    modalCapacityBar: document.getElementById('modalCapacityBar'),
    modalCapacityText: document.getElementById('modalCapacityText'),
    modalDesc: document.getElementById('modalDesc'),
    modalRegisterBtn: document.getElementById('modalRegisterBtn'),
    modalBookmarkBtn: document.getElementById('modalBookmarkBtn'),
    modalBookmarkText: document.getElementById('modalBookmarkText'),

    registerModal: document.getElementById('registerModal'),
    registerClose: document.getElementById('registerClose'),
    registerTitle: document.getElementById('registerTitle'),
    registerEventTarget: document.getElementById('registerEventTarget'),
    registerForm: document.getElementById('registerForm'),
    rName: document.getElementById('rName'),
    rIndex: document.getElementById('rIndex'),
    rEmail: document.getElementById('rEmail'),
    rDept: document.getElementById('rDept'),
    registerSuccess: document.getElementById('registerSuccess'),
    registerSuccessDoneBtn: document.getElementById('registerSuccessDoneBtn'),

    // Hot Ad & Toasts
    hotAd: document.getElementById('hotAd'),
    hotAdClose: document.getElementById('hotAdClose'),
    hotAdThumb: document.getElementById('hotAdThumb'),
    hotAdTitle: document.getElementById('hotAdTitle'),
    hotAdMeta: document.getElementById('hotAdMeta'),
    hotAdViewBtn: document.getElementById('hotAdViewBtn'),
    toast: document.getElementById('toast'),
    backToTopBtn: document.getElementById('backToTopBtn'),

    // Contact
    contactForm: document.getElementById('contactForm'),
    contactSuccess: document.getElementById('contactSuccess'),

    // Stats & Year
    statEventsCount: document.getElementById('statEventsCount'),
    statRegTotal: document.getElementById('statRegTotal'),
    year: document.getElementById('year')
  };

  // ---------- 4. INITIALIZATION ----------
  function init() {
    initTheme();
    updateYear();
    initFeaturedHero();
    populateDepartmentSelect();
    renderDepartmentCards();
    renderCategorySidebar();
    renderDeadlines();
    renderAllEvents();
    renderCalendar();
    updateBookmarkUI();
    updateRegistrationCountMetric();
    initHotAd();
    initScrollspyAndReveal();
    setupEventListeners();
  }

  // ---------- 5. THEME ENGINE ----------
  function initTheme() {
    applyTheme(state.theme);
  }

  function applyTheme(theme) {
    state.theme = theme;
    DOM.html.setAttribute('data-theme', theme);
    localStorage.setItem('ttu_theme', theme);

    if (DOM.sunIcon && DOM.moonIcon) {
      if (theme === 'dark') {
        DOM.sunIcon.style.display = 'none';
        DOM.moonIcon.style.display = 'block';
      } else {
        DOM.sunIcon.style.display = 'block';
        DOM.moonIcon.style.display = 'none';
      }
    }
  }

  function toggleTheme() {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
  }

  function updateYear() {
    if (DOM.year) {
      DOM.year.textContent = new Date().getFullYear();
    }
  }

  function updateRegistrationCountMetric() {
    if (DOM.statRegTotal) {
      const storedRegs = JSON.parse(localStorage.getItem('ttu_registrations') || '[]');
      const defaultTotal = state.events.reduce((sum, e) => sum + (e.taken || 0), 0);
      const combined = Math.max(defaultTotal, defaultTotal + storedRegs.length);
      DOM.statRegTotal.textContent = combined.toLocaleString() + '+';
    }
  }

  // ---------- 6. FEATURED HERO & LIVE COUNTDOWN ----------
  let currentFeaturedEvent = null;

  function initFeaturedHero() {
    const now = new Date();
    currentFeaturedEvent = state.events.find(e => e.featured && new Date(e.date) >= now) ||
      state.events.find(e => !e.past && new Date(e.date) >= now) ||
      state.events[0];

    if (!currentFeaturedEvent) return;

    if (DOM.featuredTitle) DOM.featuredTitle.textContent = currentFeaturedEvent.title;
    if (DOM.featuredDesc) DOM.featuredDesc.textContent = currentFeaturedEvent.desc;

    const eventDate = new Date(currentFeaturedEvent.date);
    if (DOM.featuredDate) {
      DOM.featuredDate.textContent = eventDate.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }) + ' · ' + formatTime(eventDate);
    }
    if (DOM.featuredVenue) DOM.featuredVenue.textContent = currentFeaturedEvent.venue;
    if (DOM.countdownEventName) DOM.countdownEventName.textContent = `Target: ${currentFeaturedEvent.title}`;

    startCountdown(eventDate);

    if (DOM.featuredRegisterBtn) {
      DOM.featuredRegisterBtn.onclick = () => openRegisterModal(currentFeaturedEvent);
    }
    if (DOM.featuredDetailsBtn) {
      DOM.featuredDetailsBtn.onclick = () => openEventModal(currentFeaturedEvent);
    }
  }

  function startCountdown(targetDate) {
    if (state.countdownInterval) clearInterval(state.countdownInterval);

    function update() {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        if (DOM.cdDays) DOM.cdDays.textContent = '00';
        if (DOM.cdHours) DOM.cdHours.textContent = '00';
        if (DOM.cdMins) DOM.cdMins.textContent = '00';
        if (DOM.cdSecs) DOM.cdSecs.textContent = '00';
        if (DOM.featuredStatusPill) DOM.featuredStatusPill.textContent = 'Event Concluded';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (DOM.cdDays) DOM.cdDays.textContent = String(days).padStart(2, '0');
      if (DOM.cdHours) DOM.cdHours.textContent = String(hours).padStart(2, '0');
      if (DOM.cdMins) DOM.cdMins.textContent = String(minutes).padStart(2, '0');
      if (DOM.cdSecs) DOM.cdSecs.textContent = String(seconds).padStart(2, '0');
    }

    update();
    state.countdownInterval = setInterval(update, 1000);
  }

  // ---------- 7. EVENT FILTERING & RENDERING ENGINE ----------
  function getFilteredEvents() {
    return state.events.filter(event => {
      // 1. Category Filter
      if (state.activeFilter === 'bookmarked') {
        if (!state.bookmarks.has(event.id)) return false;
      } else if (state.activeFilter !== 'all') {
        if (state.activeFilter === 'Academic' && event.category !== 'Academic') return false;
        if (state.activeFilter === 'Social & Cultural' && event.category !== 'Social & Cultural') return false;
        if (state.activeFilter === 'Sports' && event.category !== 'Sports') return false;
        if (state.activeFilter === 'Professional' && event.category !== 'Professional') return false;
        if (state.activeFilter === 'Tech & Innovation' && event.category !== 'Tech & Innovation') return false;
      }

      // 2. Department Filter
      if (state.selectedDepartment !== 'all') {
        const matchesDept = (event.dept && event.dept.toLowerCase().includes(state.selectedDepartment.toLowerCase())) ||
          (event.faculty && event.faculty.toLowerCase().includes(state.selectedDepartment.toLowerCase()));
        if (!matchesDept) return false;
      }

      // 3. Search Query
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase().trim();
        const inTitle = event.title && event.title.toLowerCase().includes(q);
        const inDesc = event.desc && event.desc.toLowerCase().includes(q);
        const inVenue = event.venue && event.venue.toLowerCase().includes(q);
        const inDept = event.dept && event.dept.toLowerCase().includes(q);
        const inTags = event.tags && event.tags.some(tag => tag.toLowerCase().includes(q));
        if (!inTitle && !inDesc && !inVenue && !inDept && !inTags) return false;
      }

      // 4. Calendar Date Filter
      if (state.selectedDate) {
        const eventDateStr = event.date.split('T')[0];
        if (eventDateStr !== state.selectedDate) return false;
      }

      return true;
    });
  }

  function renderAllEvents() {
    const filtered = getFilteredEvents();
    updateFilterStats(filtered.length);

    // If there's an active search or single-date filter or bookmark view, display unified results in upcomingGrid
    const isSpecialFilteredView = state.searchQuery.trim() !== '' ||
      state.selectedDate !== null ||
      state.activeFilter === 'bookmarked' ||
      state.selectedDepartment !== 'all';

    if (isSpecialFilteredView) {
      renderGrid(DOM.upcomingGrid, filtered, "No events match your current filter criteria.");
      renderEmptyPlaceholder(DOM.academicGrid, "Filtering active. See results above.");
      renderEmptyPlaceholder(DOM.socialGrid, "Filtering active. See results above.");
      renderEmptyPlaceholder(DOM.sportsGrid, "Filtering active. See results above.");
      renderEmptyPlaceholder(DOM.pastGrid, "Filtering active. See results above.");
      return;
    }

    // Default categorized rendering:
    const upcomingEvents = filtered.filter(e => !e.past);
    renderGrid(DOM.upcomingGrid, upcomingEvents, "No upcoming events scheduled right now.");

    const academicEvents = filtered.filter(e => e.category === 'Academic' && !e.past);
    renderGrid(DOM.academicGrid, academicEvents, "No academic colloquia or lectures found.");

    const socialEvents = filtered.filter(e => e.category === 'Social & Cultural' && !e.past);
    renderGrid(DOM.socialGrid, socialEvents, "No social gatherings found.");

    const sportsEvents = filtered.filter(e => e.category === 'Sports' && !e.past);
    renderGrid(DOM.sportsGrid, sportsEvents, "No sporting tournaments found.");

    const pastEvents = filtered.filter(e => e.past);
    renderGrid(DOM.pastGrid, pastEvents, "No archived events found.");
  }

  function renderGrid(container, eventsList, emptyMessage) {
    if (!container) return;
    container.innerHTML = '';

    if (eventsList.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card reveal in-view">
          <div class="empty-state-icon">🔍</div>
          <h3>No Events Found</h3>
          <p>${emptyMessage}</p>
          <button class="btn btn-outline btn-sm" onclick="window.resetAppFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    eventsList.forEach(event => {
      const card = createEventCard(event);
      container.appendChild(card);
    });
  }

  function renderEmptyPlaceholder(container, message) {
    if (!container) return;
    container.innerHTML = `
      <div class="empty-state-card reveal in-view" style="padding: 24px;">
        <p style="color: var(--text-muted); font-size: 0.88rem;">${message}</p>
      </div>
    `;
  }

  function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card reveal in-view';
    card.dataset.id = event.id;

    const eventDate = new Date(event.date);
    const dateFormatted = eventDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const timeFormatted = formatTime(eventDate);
    const isBookmarked = state.bookmarks.has(event.id);
    const capacityPercent = Math.min(100, Math.round((event.taken / event.capacity) * 100));

    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${event.img}" alt="${escapeHtml(event.title)}" loading="lazy">
        <div class="card-tags">
          <span class="card-category-tag">${event.category}</span>
          ${event.hot ? `<span class="card-hot-tag">🔥 HOT</span>` : ''}
        </div>
        <button class="card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${event.id}" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Event'}" aria-label="Bookmark">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <div class="card-dept">${escapeHtml(event.dept || '')}</div>
        <h3>${escapeHtml(event.title || '')}</h3>
        <div class="card-meta-list">
          <div class="card-meta-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>${dateFormatted} · ${timeFormatted}</span>
          </div>
          <div class="card-meta-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${escapeHtml(event.venue || '')}</span>
          </div>
        </div>
        <p class="card-desc">${escapeHtml(event.desc || '')}</p>
        <div class="card-capacity-box">
          <div class="capacity-labels">
            <span>Seat Capacity</span>
            <span>${(event.taken || 0).toLocaleString()} / ${(event.capacity || 0).toLocaleString()}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${capacityPercent}%;"></div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-gold btn-sm btn-register" data-id="${event.id}">Register</button>
          <button class="btn btn-outline btn-sm btn-details" data-id="${event.id}">Details</button>
        </div>
      </div>
    `;

    const bookmarkBtn = card.querySelector('.card-bookmark-btn');
    bookmarkBtn.onclick = (e) => {
      e.stopPropagation();
      toggleBookmark(event.id);
    };

    const registerBtn = card.querySelector('.btn-register');
    registerBtn.onclick = (e) => {
      e.stopPropagation();
      openRegisterModal(event);
    };

    const detailsBtn = card.querySelector('.btn-details');
    detailsBtn.onclick = (e) => {
      e.stopPropagation();
      openEventModal(event);
    };

    return card;
  }

  function updateFilterStats(count) {
    if (DOM.resultsCount) {
      if (state.activeFilter === 'bookmarked') {
        DOM.resultsCount.textContent = `Showing ${count} bookmarked event${count === 1 ? '' : 's'}`;
      } else if (state.searchQuery) {
        DOM.resultsCount.textContent = `Found ${count} result${count === 1 ? '' : 's'} for "${state.searchQuery}"`;
      } else if (state.selectedDate) {
        DOM.resultsCount.textContent = `Showing ${count} event${count === 1 ? '' : 's'} on ${state.selectedDate}`;
      } else if (state.activeFilter !== 'all') {
        DOM.resultsCount.textContent = `Showing ${count} ${state.activeFilter} event${count === 1 ? '' : 's'}`;
      } else {
        DOM.resultsCount.textContent = `Showing all ${count} campus events`;
      }
    }

    const isFiltered = state.activeFilter !== 'all' ||
      state.searchQuery !== '' ||
      state.selectedDepartment !== 'all' ||
      state.selectedDate !== null;

    if (DOM.resetFiltersBtn) {
      DOM.resetFiltersBtn.style.display = isFiltered ? 'inline-block' : 'none';
    }

    if (DOM.statEventsCount) {
      DOM.statEventsCount.textContent = state.events.length;
    }
  }

  // ---------- 8. INTERACTIVE CALENDAR ENGINE ----------
  function renderCalendar() {
    const year = state.calendarDate.getFullYear();
    const month = state.calendarDate.getMonth();

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    if (DOM.calMonthLabel) {
      DOM.calMonthLabel.textContent = `${monthNames[month]} ${year}`;
    }

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDaysInMonth = new Date(year, month, 0).getDate();

    if (!DOM.calendarGrid) return;
    DOM.calendarGrid.innerHTML = '';

    const todayStr = formatDateISO(new Date());

    // 1. Previous month padded days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = prevDaysInMonth - i;
      const dayCell = document.createElement('div');
      dayCell.className = 'cal-day other-month';
      dayCell.innerHTML = `<span class="cal-day-num">${dayNum}</span>`;
      DOM.calendarGrid.appendChild(dayCell);
    }

    // 2. Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = state.events.filter(e => e.date && e.date.startsWith(dateStr));
      const hasEvents = dayEvents.length > 0;
      const isToday = dateStr === todayStr;
      const isSelected = dateStr === state.selectedDate;

      const dayCell = document.createElement('div');
      dayCell.className = `cal-day ${hasEvents ? 'has-event' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`;
      dayCell.dataset.date = dateStr;
      dayCell.title = hasEvents ? `${dayEvents.length} event(s) scheduled` : dateStr;

      let dotsHtml = '';
      if (hasEvents) {
        dotsHtml = '<div class="cal-dots-wrap">';
        dayEvents.slice(0, 3).forEach(ev => {
          let dotClass = 'academic';
          if (ev.category && ev.category.includes('Social')) dotClass = 'social';
          if (ev.category && ev.category.includes('Sports')) dotClass = 'sports';
          dotsHtml += `<span class="cal-event-dot ${dotClass}"></span>`;
        });
        dotsHtml += '</div>';
      }

      dayCell.innerHTML = `
        <span class="cal-day-num">${day}</span>
        ${dotsHtml}
      `;

      dayCell.onclick = () => handleCalendarDateClick(dateStr, dayEvents);
      DOM.calendarGrid.appendChild(dayCell);
    }

    // 3. Next month trailing days to complete 7-column grid
    const totalCellsRendered = firstDayIndex + daysInMonth;
    const remainingCells = (7 - (totalCellsRendered % 7)) % 7;
    for (let nextDay = 1; nextDay <= remainingCells; nextDay++) {
      const dayCell = document.createElement('div');
      dayCell.className = 'cal-day other-month';
      dayCell.innerHTML = `<span class="cal-day-num">${nextDay}</span>`;
      DOM.calendarGrid.appendChild(dayCell);
    }
  }

  function handleCalendarDateClick(dateStr, dayEvents) {
    if (state.selectedDate === dateStr) {
      state.selectedDate = null;
      if (DOM.selectedDateInfo) DOM.selectedDateInfo.style.display = 'none';
      renderCalendar();
      renderAllEvents();
      showToast("Cleared date filter");
      return;
    }

    state.selectedDate = dateStr;
    renderCalendar();
    renderAllEvents();

    if (DOM.selectedDateInfo && DOM.selectedDateTitle && DOM.selectedDateList) {
      if (dayEvents.length > 0) {
        DOM.selectedDateTitle.textContent = `Events on ${dateStr} (${dayEvents.length})`;
        DOM.selectedDateList.innerHTML = dayEvents.map(ev => `
          <div class="date-event-item" onclick="window.viewEventFromId(${ev.id})">
            <div>
              <div class="date-event-title">${escapeHtml(ev.title)}</div>
              <div class="date-event-venue">📍 ${escapeHtml(ev.venue || '')} · ⏰ ${formatTime(new Date(ev.date))}</div>
            </div>
            <button class="btn btn-gold btn-sm">View &rarr;</button>
          </div>
        `).join('');
        DOM.selectedDateInfo.style.display = 'block';
      } else {
        DOM.selectedDateTitle.textContent = `No events scheduled for ${dateStr}`;
        DOM.selectedDateList.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted);">No campus events listed on this day.</p>`;
        DOM.selectedDateInfo.style.display = 'block';
      }
    }

    showToast(`Filtered events for ${dateStr}`);
  }

  // ---------- 9. DEPARTMENT CARDS & SIDEBAR POPULATION ----------
  function populateDepartmentSelect() {
    if (!DOM.departmentFilter) return;

    // Clear existing options except default
    DOM.departmentFilter.innerHTML = '<option value="all">All Departments</option>';

    const uniqueDepts = Array.from(new Set(state.events.map(e => e.dept).filter(Boolean))).sort();

    uniqueDepts.forEach(dept => {
      const opt = document.createElement('option');
      opt.value = dept;
      opt.textContent = dept;
      DOM.departmentFilter.appendChild(opt);
    });

    DOM.departmentFilter.onchange = (e) => {
      state.selectedDepartment = e.target.value;
      renderAllEvents();
      showToast(state.selectedDepartment === 'all' ? 'Showing all departments' : `Filtered: ${state.selectedDepartment}`);
    };
  }

  function renderDepartmentCards() {
    if (!DOM.deptGrid) return;
    DOM.deptGrid.innerHTML = '';

    DEPARTMENTS_DATA.forEach(dept => {
      const count = state.events.filter(e =>
        (e.dept && e.dept.toLowerCase().includes(dept.name.toLowerCase())) ||
        (e.faculty && e.faculty.toLowerCase().includes(dept.faculty.toLowerCase()))
      ).length;

      const card = document.createElement('div');
      card.className = 'dept-card reveal in-view';
      card.innerHTML = `
        <div>
          <div class="dept-card-top">
            <div class="dept-icon">${dept.icon}</div>
            <span class="dept-badge-count">${count} Event${count === 1 ? '' : 's'}</span>
          </div>
          <h3>${dept.name}</h3>
          <p class="dept-faculty">${dept.faculty}</p>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">${dept.desc}</p>
        </div>
        <div class="dept-link">
          <span>Explore Department Events</span>
          <span>&rarr;</span>
        </div>
      `;

      card.onclick = () => {
        state.selectedDepartment = dept.name;
        if (DOM.departmentFilter) DOM.departmentFilter.value = dept.name;
        renderAllEvents();
        const target = document.getElementById('upcoming');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        showToast(`Filtered events for ${dept.name}`);
      };

      DOM.deptGrid.appendChild(card);
    });
  }

  function renderCategorySidebar() {
    if (!DOM.categoryList) return;
    DOM.categoryList.innerHTML = '';

    const categories = [
      { key: 'all', label: 'All Events' },
      { key: 'Academic', label: 'Academic Programs' },
      { key: 'Social & Cultural', label: 'Social & Cultural' },
      { key: 'Sports', label: 'Sports Tournaments' },
      { key: 'Professional', label: 'Professional & Careers' },
      { key: 'Tech & Innovation', label: 'Tech & Innovation' }
    ];

    categories.forEach(cat => {
      const count = cat.key === 'all'
        ? state.events.length
        : state.events.filter(e => e.category === cat.key).length;

      const li = document.createElement('li');
      li.className = state.activeFilter === cat.key ? 'active' : '';
      li.innerHTML = `
        <span>${cat.label}</span>
        <span class="cat-count">${count}</span>
      `;

      li.onclick = () => {
        setCategoryFilter(cat.key);
      };

      DOM.categoryList.appendChild(li);
    });
  }

  function setCategoryFilter(filterKey) {
    state.activeFilter = filterKey;

    if (DOM.filterChips) {
      DOM.filterChips.querySelectorAll('.chip').forEach(chip => {
        const isMatch = chip.dataset.filter === filterKey;
        chip.classList.toggle('active', isMatch);
        chip.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });
    }

    if (DOM.categoryList) {
      const items = DOM.categoryList.querySelectorAll('li');
      const keys = ['all', 'Academic', 'Social & Cultural', 'Sports', 'Professional', 'Tech & Innovation'];
      items.forEach((item, idx) => {
        item.classList.toggle('active', keys[idx] === filterKey);
      });
    }

    renderAllEvents();
    showToast(`Filter: ${filterKey === 'all' ? 'All Events' : filterKey}`);
  }

  function renderDeadlines() {
    if (!DOM.deadlineList) return;
    DOM.deadlineList.innerHTML = '';

    const upcomingDeadlines = state.events
      .filter(e => e.deadline && new Date(e.deadline) > new Date())
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
      .slice(0, 4);

    if (upcomingDeadlines.length === 0) {
      DOM.deadlineList.innerHTML = `<li style="font-size:0.85rem; color:var(--text-muted);">No urgent registration deadlines.</li>`;
      return;
    }

    upcomingDeadlines.forEach(ev => {
      const deadlineDate = new Date(ev.deadline);
      const diffHours = Math.round((deadlineDate - new Date()) / (1000 * 60 * 60));
      let badgeClass = 'deadline-normal';
      let badgeText = `${Math.round(diffHours / 24)}d left`;

      if (diffHours <= 48) {
        badgeClass = 'deadline-urgent';
        badgeText = diffHours <= 24 ? 'Ends today' : '2 days left';
      }

      const li = document.createElement('li');
      li.innerHTML = `
        <div>
          <div class="deadline-title" style="cursor:pointer;" onclick="window.viewEventFromId(${ev.id})">${escapeHtml(ev.title)}</div>
          <span style="font-size:0.75rem; color:var(--text-muted);">Reg. closes ${deadlineDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
        </div>
        <span class="deadline-badge ${badgeClass}">${badgeText}</span>
      `;
      DOM.deadlineList.appendChild(li);
    });
  }

  // ---------- 10. BOOKMARKS ENGINE ----------
  function toggleBookmark(eventId) {
    const id = Number(eventId);
    if (state.bookmarks.has(id)) {
      state.bookmarks.delete(id);
      showToast("Event removed from bookmarks");
    } else {
      state.bookmarks.add(id);
      showToast("⭐ Event saved to bookmarks!");
    }

    localStorage.setItem('ttu_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
    updateBookmarkUI();
    renderAllEvents();
  }

  function updateBookmarkUI() {
    const count = state.bookmarks.size;
    if (DOM.bookmarkCount) DOM.bookmarkCount.textContent = count;
    if (DOM.bookmarkSidebarBadge) DOM.bookmarkSidebarBadge.textContent = count;

    if (DOM.bookmarkList) {
      if (count === 0) {
        DOM.bookmarkList.innerHTML = `<li class="empty-msg">No bookmarks saved yet. Click bookmark on any event!</li>`;
      } else {
        DOM.bookmarkList.innerHTML = '';
        state.bookmarks.forEach(id => {
          const ev = state.events.find(e => e.id === id);
          if (ev) {
            const li = document.createElement('li');
            li.className = 'bookmark-item';
            li.innerHTML = `
              <span class="bookmark-item-title" onclick="window.viewEventFromId(${ev.id})" title="${escapeHtml(ev.title)}">
                📌 ${escapeHtml(ev.title)}
              </span>
              <button class="bookmark-remove-btn" title="Remove bookmark" aria-label="Remove bookmark">&times;</button>
            `;
            li.querySelector('.bookmark-remove-btn').onclick = (e) => {
              e.stopPropagation();
              toggleBookmark(ev.id);
            };
            DOM.bookmarkList.appendChild(li);
          }
        });
      }
    }

    if (activeModalEvent && DOM.modalBookmarkBtn) {
      const isBookmarked = state.bookmarks.has(activeModalEvent.id);
      if (DOM.modalBookmarkText) {
        DOM.modalBookmarkText.textContent = isBookmarked ? 'Bookmarked' : 'Bookmark';
      }
      DOM.modalBookmarkBtn.classList.toggle('btn-gold', isBookmarked);
      DOM.modalBookmarkBtn.classList.toggle('btn-outline', !isBookmarked);
    }
  }

  // ---------- 11. MODALS & REGISTRATION ENGINE ----------
  let activeModalEvent = null;

  function openEventModal(event) {
    activeModalEvent = event;
    const eventDate = new Date(event.date);

    if (DOM.modalPoster) DOM.modalPoster.style.backgroundImage = `url('${event.img}')`;
    if (DOM.modalCategory) DOM.modalCategory.textContent = event.category || 'General';
    if (DOM.modalDept) DOM.modalDept.textContent = event.dept || 'Takoradi Technical University';
    if (DOM.modalTitle) DOM.modalTitle.textContent = event.title;
    if (DOM.modalDate) {
      DOM.modalDate.textContent = eventDate.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
    if (DOM.modalTime) {
      DOM.modalTime.textContent = formatTime(eventDate) + (event.endDate ? ` – ${formatTime(new Date(event.endDate))}` : '');
    }
    if (DOM.modalVenue) DOM.modalVenue.textContent = event.venue || 'Campus Venue';
    if (DOM.modalDesc) DOM.modalDesc.textContent = event.desc || '';
    if (DOM.modalHotPill) DOM.modalHotPill.style.display = event.hot ? 'inline-block' : 'none';

    // Capacity
    const capacity = event.capacity || 100;
    const taken = event.taken || 0;
    const capacityPercent = Math.min(100, Math.round((taken / capacity) * 100));
    if (DOM.modalCapacityBar) DOM.modalCapacityBar.style.width = `${capacityPercent}%`;
    if (DOM.modalCapacityText) {
      DOM.modalCapacityText.textContent = `${taken.toLocaleString()} / ${capacity.toLocaleString()} Seats Reserved (${capacityPercent}%)`;
    }

    if (DOM.modalRegisterBtn) {
      DOM.modalRegisterBtn.onclick = () => {
        closeModal(DOM.eventModal);
        setTimeout(() => openRegisterModal(event), 200);
      };
    }

    if (DOM.modalBookmarkBtn) {
      DOM.modalBookmarkBtn.onclick = () => {
        toggleBookmark(event.id);
      };
    }

    updateBookmarkUI();
    openModal(DOM.eventModal);
  }

  function openRegisterModal(event) {
    activeModalEvent = event;
    if (DOM.registerEventTarget) DOM.registerEventTarget.textContent = `Event: ${event.title}`;
    if (DOM.registerTitle) DOM.registerTitle.textContent = `Register for ${event.category || 'Event'}`;

    if (DOM.registerForm) {
      DOM.registerForm.reset();
      DOM.registerForm.style.display = 'flex';
    }
    if (DOM.registerSuccess) DOM.registerSuccess.hidden = true;

    openModal(DOM.registerModal);
  }

  function handleRegistrationSubmit(e) {
    e.preventDefault();
    if (!activeModalEvent) return;

    const registration = {
      id: 'REG-' + Date.now().toString(36).toUpperCase(),
      eventId: activeModalEvent.id,
      eventTitle: activeModalEvent.title,
      name: DOM.rName.value.trim(),
      indexNumber: DOM.rIndex.value.trim(),
      email: DOM.rEmail.value.trim(),
      dept: DOM.rDept.value.trim() || 'Not specified',
      timestamp: new Date().toISOString()
    };

    // 1. Save registration list
    const currentRegs = JSON.parse(localStorage.getItem('ttu_registrations') || '[]');
    currentRegs.push(registration);
    localStorage.setItem('ttu_registrations', JSON.stringify(currentRegs));
    state.registrations = currentRegs;

    // 2. Increment seat taken count in event
    activeModalEvent.taken = Math.min(activeModalEvent.capacity, (activeModalEvent.taken || 0) + 1);
    const eventIndex = state.events.findIndex(e => e.id === activeModalEvent.id);
    if (eventIndex !== -1) {
      state.events[eventIndex] = activeModalEvent;
      localStorage.setItem('ttu_events', JSON.stringify(state.events));
    }

    if (DOM.registerForm) DOM.registerForm.style.display = 'none';
    if (DOM.registerSuccess) DOM.registerSuccess.hidden = false;

    showToast("🎉 Seat pass confirmed! Your registration was saved.");
    updateRegistrationCountMetric();
    renderAllEvents();
  }

  function openModal(modalElem) {
    if (!modalElem) return;
    modalElem.classList.add('open');
    document.body.classList.add('modal-open');
    modalElem.focus();
  }

  function closeModal(modalElem) {
    if (!modalElem) return;
    modalElem.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  // ---------- 12. FLOATING HOT EVENT AD ----------
  function initHotAd() {
    const isDismissed = sessionStorage.getItem('ttu_hot_ad_dismissed');
    if (isDismissed) return;

    const hotEvent = state.events.find(e => e.hot && !e.past) || state.events[2];
    if (!hotEvent || !DOM.hotAd) return;

    if (DOM.hotAdThumb) DOM.hotAdThumb.style.backgroundImage = `url('${hotEvent.img}')`;
    if (DOM.hotAdTitle) DOM.hotAdTitle.textContent = hotEvent.title;
    if (DOM.hotAdMeta) {
      const d = new Date(hotEvent.date);
      DOM.hotAdMeta.textContent = `${d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} · ${hotEvent.venue}`;
    }

    if (DOM.hotAdViewBtn) {
      DOM.hotAdViewBtn.onclick = () => {
        openEventModal(hotEvent);
        DOM.hotAd.classList.remove('show');
      };
    }

    if (DOM.hotAdClose) {
      DOM.hotAdClose.onclick = () => {
        DOM.hotAd.classList.remove('show');
        sessionStorage.setItem('ttu_hot_ad_dismissed', 'true');
      };
    }

    setTimeout(() => {
      if (!sessionStorage.getItem('ttu_hot_ad_dismissed')) {
        DOM.hotAd.classList.add('show');
      }
    }, 2800);
  }

  // ---------- 13. TOAST & UTILITIES ----------
  let toastTimeout = null;

  function showToast(message) {
    if (!DOM.toast) return;
    DOM.toast.textContent = message;
    DOM.toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      DOM.toast.classList.remove('show');
    }, 3500);
  }

  function formatTime(dateObj) {
    return dateObj.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).toUpperCase();
  }

  function formatDateISO(dateObj) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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

  window.viewEventFromId = function (eventId) {
    const ev = state.events.find(e => e.id === Number(eventId));
    if (ev) openEventModal(ev);
  };

  window.resetAppFilters = function () {
    state.activeFilter = 'all';
    state.searchQuery = '';
    state.selectedDepartment = 'all';
    state.selectedDate = null;

    if (DOM.searchInput) DOM.searchInput.value = '';
    if (DOM.searchClearBtn) DOM.searchClearBtn.style.display = 'none';
    if (DOM.departmentFilter) DOM.departmentFilter.value = 'all';
    if (DOM.selectedDateInfo) DOM.selectedDateInfo.style.display = 'none';

    setCategoryFilter('all');
    renderCalendar();
    renderAllEvents();
    showToast("Filters reset to default");
  };

  // ---------- 14. SCROLLSPY & REVEAL ON SCROLL ----------
  function initScrollspyAndReveal() {
    const revealElems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElems.forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;

      if (DOM.siteHeader) {
        DOM.siteHeader.classList.toggle('scrolled', scrollPos > 30);
      }

      if (DOM.backToTopBtn) {
        DOM.backToTopBtn.classList.toggle('show', scrollPos > 400);
      }

      const sections = document.querySelectorAll('section[id], header[id]');
      let currentSection = '';

      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = sec.getAttribute('id');
        }
      });

      if (currentSection) {
        DOM.navLinks.forEach(link => {
          const href = link.getAttribute('href').replace('#', '');
          link.classList.toggle('active', href === currentSection);
        });
      }
    }, { passive: true });
  }

  // ---------- 15. EVENT LISTENERS SETUP ----------
  function setupEventListeners() {
    // Theme toggle
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.onclick = toggleTheme;
    }

    // Bookmark header toggle
    if (DOM.bookmarkToggleBtn) {
      DOM.bookmarkToggleBtn.onclick = () => {
        if (state.activeFilter === 'bookmarked') {
          setCategoryFilter('all');
        } else {
          setCategoryFilter('bookmarked');
          const upcomingSec = document.getElementById('upcoming');
          if (upcomingSec) upcomingSec.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }

    // Mobile Hamburger & Navigation Drawer
    if (DOM.hamburgerBtn) {
      DOM.hamburgerBtn.onclick = () => {
        const isOpen = DOM.mainNav.classList.contains('open');
        DOM.mainNav.classList.toggle('open', !isOpen);
        DOM.navOverlay.classList.toggle('open', !isOpen);
        DOM.hamburgerBtn.setAttribute('aria-expanded', !isOpen);
      };
    }

    const closeMobileNav = () => {
      DOM.mainNav.classList.remove('open');
      DOM.navOverlay.classList.remove('open');
      DOM.hamburgerBtn.setAttribute('aria-expanded', 'false');
    };

    if (DOM.navCloseBtn) DOM.navCloseBtn.onclick = closeMobileNav;
    if (DOM.navOverlay) DOM.navOverlay.onclick = closeMobileNav;
    DOM.navLinks.forEach(link => link.addEventListener('click', closeMobileNav));

    // Filter Chips
    if (DOM.filterChips) {
      DOM.filterChips.querySelectorAll('.chip').forEach(chip => {
        chip.onclick = () => {
          setCategoryFilter(chip.dataset.filter);
        };
      });
    }

    if (DOM.resetFiltersBtn) {
      DOM.resetFiltersBtn.onclick = window.resetAppFilters;
    }

    // Search Form & Real-time debounce
    if (DOM.searchForm) {
      DOM.searchForm.onsubmit = (e) => {
        e.preventDefault();
        state.searchQuery = DOM.searchInput.value.trim();
        renderAllEvents();
      };
    }

    if (DOM.searchInput) {
      DOM.searchInput.oninput = () => {
        state.searchQuery = DOM.searchInput.value;
        if (DOM.searchClearBtn) {
          DOM.searchClearBtn.style.display = DOM.searchInput.value ? 'block' : 'none';
        }
        renderAllEvents();
      };
    }

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.onclick = () => {
        DOM.searchInput.value = '';
        state.searchQuery = '';
        DOM.searchClearBtn.style.display = 'none';
        renderAllEvents();
      };
    }

    // Calendar Navigation
    if (DOM.calPrev) {
      DOM.calPrev.onclick = () => {
        state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
        renderCalendar();
      };
    }

    if (DOM.calNext) {
      DOM.calNext.onclick = () => {
        state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
        renderCalendar();
      };
    }

    if (DOM.calTodayBtn) {
      DOM.calTodayBtn.onclick = () => {
        state.calendarDate = new Date();
        renderCalendar();
      };
    }

    if (DOM.clearDateFilterBtn) {
      DOM.clearDateFilterBtn.onclick = () => {
        state.selectedDate = null;
        if (DOM.selectedDateInfo) DOM.selectedDateInfo.style.display = 'none';
        renderCalendar();
        renderAllEvents();
        showToast("Cleared date filter");
      };
    }

    // Modal Close buttons & Overlay clicks
    if (DOM.modalClose) {
      DOM.modalClose.onclick = () => closeModal(DOM.eventModal);
    }
    if (DOM.eventModal) {
      DOM.eventModal.onclick = (e) => {
        if (e.target === DOM.eventModal) closeModal(DOM.eventModal);
      };
    }

    if (DOM.registerClose) {
      DOM.registerClose.onclick = () => closeModal(DOM.registerModal);
    }
    if (DOM.registerModal) {
      DOM.registerModal.onclick = (e) => {
        if (e.target === DOM.registerModal) closeModal(DOM.registerModal);
      };
    }
    if (DOM.registerSuccessDoneBtn) {
      DOM.registerSuccessDoneBtn.onclick = () => closeModal(DOM.registerModal);
    }

    // Registration Form submit
    if (DOM.registerForm) {
      DOM.registerForm.onsubmit = handleRegistrationSubmit;
    }

    // Contact Form submit -> Save to ttu_inquiries
    if (DOM.contactForm) {
      DOM.contactForm.onsubmit = (e) => {
        e.preventDefault();

        const inquiry = {
          id: 'INQ-' + Date.now().toString(36).toUpperCase(),
          name: document.getElementById('cName').value.trim(),
          email: document.getElementById('cEmail').value.trim(),
          subject: document.getElementById('cSubject').value.trim(),
          message: document.getElementById('cMessage').value.trim(),
          status: 'unread',
          timestamp: new Date().toISOString()
        };

        const existingInquiries = JSON.parse(localStorage.getItem('ttu_inquiries') || '[]');
        existingInquiries.unshift(inquiry);
        localStorage.setItem('ttu_inquiries', JSON.stringify(existingInquiries));

        if (DOM.contactSuccess) DOM.contactSuccess.hidden = false;
        DOM.contactForm.reset();
        showToast("✉️ Inquiry submitted to TTU Events Secretariat!");
      };
    }

    // Back to top button
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }

    // Escape Key to close modals or mobile nav
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(DOM.eventModal);
        closeModal(DOM.registerModal);
        closeMobileNav();
      }
    });

    // Cross-tab storage synchronization
    window.addEventListener('storage', (e) => {
      if (e.key === 'ttu_events') {
        state.events = loadPersistedEvents();
        initFeaturedHero();
        populateDepartmentSelect();
        renderDepartmentCards();
        renderCategorySidebar();
        renderDeadlines();
        renderCalendar();
        renderAllEvents();
      } else if (e.key === 'ttu_theme') {
        applyTheme(e.newValue || 'light');
      } else if (e.key === 'ttu_registrations') {
        state.registrations = JSON.parse(e.newValue || '[]');
        updateRegistrationCountMetric();
      }
    });
  }

  // Run the application
  init();
});