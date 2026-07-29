const exhibition = {
  name: "INTERGEO 2026",
  date: "15-17 September 2026",
  venue: "Messe München",
  city: "Munich, Germany"
};

const site = {
  lines: {
    "3d-mapping": {
      number: "01",
      label: "3D Mapping",
      title: "3D Mapping",
      subtitle: "Digitize complex environments faster with SLAM, RTK and high-density point clouds.",
      copy: "Fast, flexible reality capture for construction, infrastructure, indoor spaces and digital twin workflows.",
      scenarios: [
        ["Construction & BIM", "Capture as-built conditions, track progress, calculate volumes and prepare reference data for BIM workflows."],
        ["Infrastructure & Corridors", "Map roads, bridges, tunnels and rail corridors with flexible mobile scanning workflows."],
        ["Indoor, Outdoor & Digital Twins", "Build continuous 3D context from open-sky GNSS areas to indoor and GNSS-challenged spaces."]
      ],
      products: ["sl9-slam-rtk", "cygnus3-slam-pro"]
    },
    surveying: {
      number: "02",
      label: "Surveying",
      title: "Surveying",
      subtitle: "Move from control points to one-person stakeout with connected GNSS and total station workflows.",
      copy: "Field-ready instruments for control survey, stakeout, cadastral work and daily construction measurement.",
      scenarios: [
        ["Control & Topographic Survey", "Combine GNSS and total station workflows to establish reliable site control and collect field detail."],
        ["Stakeout & As-Built", "Use AR, laser and CAD guidance to bring design information into the field with greater clarity."],
        ["One-Person Surveying", "Automatic tracking and Android-based field operation help smaller crews work more efficiently."]
      ],
      products: ["sl8", "ats1", "slt12-android-total-station"]
    },
    hydrographic: {
      number: "03",
      label: "Hydrographic",
      title: "Hydrographic",
      subtitle: "Capture underwater terrain safely and efficiently with a compact multibeam USV.",
      copy: "Integrated unmanned hydrographic survey for rivers, reservoirs, ports and near-shore infrastructure.",
      scenarios: [
        ["Rivers & Reservoirs", "Reduce operator exposure on the water while running repeatable bathymetric survey missions."],
        ["Ports & Structures", "Capture high-density data around quay walls, embankments and structures in shallow or confined water."],
        ["Dredging & Volumes", "Compare terrain before and after work to support dredging quantities and sediment monitoring."]
      ],
      products: ["hydroboat-1200mb"]
    },
    "machine-control": {
      number: "04",
      label: "Machine Control",
      title: "Machine Control",
      subtitle: "Connect design surfaces, positioning and heavy equipment for more accurate and productive construction.",
      copy: "A unified machine guidance and control workflow for excavators, dozers and motor graders.",
      scenarios: [
        ["Excavation", "Compare bucket position with the design surface to reduce overcutting and rework."],
        ["Grading & Earthworks", "Guide dozers and graders along 3D design data for consistent site execution."],
        ["Connected Construction", "Link machines, field teams and office data for a clearer view of site progress."]
      ],
      products: ["machine-control-solution"]
    }
  },
  products: {
    "sl9-slam-rtk": {
      line: "3d-mapping",
      name: "SL9 SLAM RTK",
      en: "SLAM-Enabled GNSS Receiver",
      intro: "Combine high-precision GNSS positioning and SLAM to survey outdoor, semi-indoor and enclosed environments in one workflow.",
      tag: "RTK + SLAM",
      points: [
        ["Survey Beyond Open Sky", "Move between RTK and SLAM to capture data in dense urban areas, forests, under bridges and inside tunnels."],
        ["See 3D Results in the Field", "Use Satsurv to preview point clouds, calculate volumes and review visual accuracy information on site."],
        ["From Point Cloud to Deliverable", "Use Sat-LiDAR for point-cloud processing, georeferencing and engineering outputs such as plans, elevations and sections."]
      ],
      applications: ["Tunnels & Underground Spaces", "Construction As-Builts", "Urban & Forest Survey"],
      specs: [
        ["Positioning & Mapping", "GNSS RTK / SLAM / RTK-SLAM workflow"],
        ["Field Software", "Satsurv"],
        ["Post-Processing", "Sat-LiDAR"],
        ["Data", "Georeferenced point clouds, imagery, trajectories, plans, elevations and sections"],
        ["Operation", "Handheld, pole-mounted and AR stakeout workflows"]
      ]
    },
    "cygnus3-slam-pro": {
      line: "3d-mapping",
      name: "Cygnus 3 Pro",
      en: "Engineering-Grade SLAM Scanner",
      intro: "An engineering-grade SLAM scanner with real-time quality checks, integrated RTK and multi-platform operation.",
      tag: "Engineering SLAM",
      points: [
        ["Know Data Quality on Site", "Use real-time point-cloud preview and an accuracy heatmap to reduce the risk of returning for a rescan."],
        ["Integrated RTK-SLAM", "Support RTK, PPK and GCP workflows for globally consistent, engineering-ready point clouds."],
        ["Multiple Deliverable Types", "Create point clouds, meshes, 3DGS, DEMs, contours, sections, profiles and volume calculations."]
      ],
      applications: ["Architecture & BIM", "Urban & Infrastructure Mapping", "Industrial Facilities & Digital Twins"],
      specs: [
        ["LiDAR", "32 channels / 640,000 pts/s"],
        ["Measurement Range", "Up to 300 m"],
        ["Accuracy", "1 cm relative / up to 2 cm absolute*"],
        ["Camera System", "2 x 48 MP + 1 x 5 MP"],
        ["Operating Time", "Up to 180 minutes"],
        ["Weight & Rating", "1.68 kg / IP54"],
        ["Operation Modes", "Handheld / backpack / vehicle / UAV"]
      ]
    },
    sl8: {
      line: "surveying",
      name: "SL8 Laser RTK",
      en: "Dual-Camera Laser GNSS Receiver",
      intro: "Combine dual cameras, laser measurement, GNSS and IMU for non-contact surveying and intuitive stakeout.",
      tag: "Laser GNSS",
      points: [
        ["Laser Non-Contact Survey", "See the laser point in live imagery and measure targets that are difficult or unsafe to reach."],
        ["CAD & AR Stakeout", "Overlay CAD information on the real scene to guide points, lines and structure boundaries."],
        ["Long-Range LoRa", "Use the integrated LoRa radio for correction data across large and challenging sites."]
      ],
      applications: ["Construction Stakeout", "Non-Contact Measurement", "Control & Topographic Survey"],
      specs: [
        ["GNSS", "1408 channels / multi-constellation"],
        ["RTK Accuracy", "H: 8 mm + 1 ppm / V: 15 mm + 1 ppm RMS"],
        ["Laser Accuracy", "≤3 cm @ 5 m / ≤5 cm @ 10 m"],
        ["Tilt Compensation", "0-60° IMU tilt compensation"],
        ["Radio", "Integrated LoRa UHF / up to 15-20 km*"],
        ["Weight & Rating", "≤0.8 kg / IP68"]
      ]
    },
    ats1: {
      line: "surveying",
      name: "Solo Surveying System",
      en: "ART1 + SP200 One-Person Surveying",
      intro: "A one-person surveying workflow combining the ART1 robotic total station with the SP200 SitePilot.",
      tag: "Robotic Surveying",
      points: [
        ["Survey with One Operator", "Automatic tracking and long-range communication support efficient stakeout, as-built and structural survey work."],
        ["Android Field Operation", "A touch interface with CAD and visual guidance simplifies common field measurement tasks."],
        ["ART1 + SP200", "Bring the robotic total station and SitePilot controller into one connected field workflow."]
      ],
      applications: ["One-Person Surveying", "Bridge & Dam Survey", "Stakeout & Machine Guidance"],
      specs: [
        ["System", "ART1 Robotic Total Station + SP200 SitePilot"],
        ["Automatic Tracking", "2-200 m"],
        ["Field Interface", "Android / CAD stakeout / visual guidance"],
        ["Communication", "Long-range wireless field workflow"],
        ["Applications", "Stakeout, engineering survey and machine guidance"]
      ],
      secondaryDocs: [
        ["ART1 brochure (Japanese)", "assets/art1-brochure-jp.pdf"],
        ["SP200 brochure (Japanese)", "assets/sp200-brochure-jp.pdf"]
      ]
    },
    "slt12-android-total-station": {
      line: "surveying",
      name: "SLT12 Pro",
      en: "Android Total Station",
      intro: "A next-generation total station combining onboard cameras, CAD stakeout and an Android field interface.",
      tag: "Android Total Station",
      points: [
        ["Dedicated Sighting Camera", "View the target on a large display for easier aiming in dark or visually complex environments."],
        ["CAD Stakeout", "Select points and lines directly from design data and bring them into the field with a clear workflow."],
        ["Built for Field Operation", "Combine a full keyboard, guide light and Android interface for rain, gloves and demanding site conditions."]
      ],
      applications: ["Roads, Bridges & Tunnels", "Construction Stakeout", "General Survey & As-Built"],
      specs: [
        ["Operating System", "Android"],
        ["Controls", "Touch display + full keyboard"],
        ["Cameras", "Dedicated sighting camera + off-axis camera"],
        ["Field Functions", "CAD stakeout, visual guidance and guide light"],
        ["Communication", "Bluetooth / Wi-Fi / Type-C"],
        ["Applications", "Road, bridge, tunnel, stakeout and angle-set survey"]
      ]
    },
    "hydroboat-1200mb": {
      line: "hydrographic",
      name: "HydroBoat 1200MB",
      en: "All-in-One Multibeam USV",
      intro: "A compact unmanned survey system integrating the vessel, multibeam sonar, INS, GNSS and software.",
      tag: "Multibeam USV",
      points: [
        ["Survey-Ready in Five Minutes", "Reduce field assembly and calibration so a small team can deploy quickly."],
        ["Real-Time 3D Data", "View point clouds, bathymetry and side-scan imagery on multiple devices for immediate field quality control."],
        ["SVP-Free Correction", "Use SPIN™ real-time sound-velocity correction to reduce the need for separate SVP equipment."]
      ],
      applications: ["Rivers & Reservoirs", "Ports, Quay Walls & Structures", "Dredging & Environmental Monitoring"],
      specs: [
        ["Hull Size & Weight", "1185 x 593 x 397 mm / 33 kg"],
        ["Multibeam Sonar", "512 beams / 30°-150° swath"],
        ["Depth Range", "0.2-200 m"],
        ["Maximum Speed", "5 m/s"],
        ["Endurance", "Approx. 12 km @ 1.5 m/s / battery"],
        ["Rating", "IP67"],
        ["Navigation", "Manual / autopilot / auto-return"]
      ]
    },
    "machine-control-solution": {
      line: "machine-control",
      name: "Machine Control Solution",
      en: "Unified 3D Construction Workflow",
      intro: "A 3D guidance and control portfolio for excavators, bulldozers and motor graders managed in one workflow.",
      tag: "Construction Technology",
      points: [
        ["Three Machine Categories", "Bring E10/E20/E50, D60/D60Pro and G60 into a portfolio matched to different construction tasks."],
        ["Bring Design Surfaces to the Cab", "Use GNSS, sensors and controllers to guide cut, fill, elevation and slope information."],
        ["Manage with SatMC", "Connect machine setup, construction data and field operation through a unified smart platform."]
      ],
      applications: ["Excavator Guidance", "Dozer Control", "Motor Grader Finishing"],
      specs: [
        ["Excavators", "E10 / E20 / E50 guidance systems"],
        ["Bulldozers", "D60 / D60Pro 3D control"],
        ["Motor Grader", "G60 3D control"],
        ["Platform", "SatMC"],
        ["Data", "3D design surfaces / positioning / machine sensors"],
        ["Value", "Productivity, quality and reduced rework"]
      ]
    }
  }
};

const root = document.querySelector("#page-root");
const page = document.body.dataset.page;
const pathDepth = Number(document.body.dataset.depth || 0);
const prefix = pathDepth ? "../".repeat(pathDepth) : "";

function linkTo(path) {
  return `${prefix}${path}`;
}

function productUrl(id) {
  const product = site.products[id];
  return linkTo(`satlab/${product.line}/${id}/index.html`);
}

function productAssetUrl(id, file = "cover.png") {
  const product = site.products[id];
  return linkTo(`satlab/${product.line}/${id}/assets/${file}`);
}

function brochureUrl(id) {
  return productUrl(id).replace("index.html", "brochure.pdf");
}

function lineUrl(id) {
  return linkTo(`satlab/${id}/index.html`);
}

function button(label, href, modifier = "primary", attributes = "") {
  return `<a class="button button--${modifier}" href="${href}" ${attributes}>${label}</a>`;
}

function renderLineCards() {
  return Object.entries(site.lines).map(([id, line]) => `
    <article class="line-card">
      <div><span class="line-card__index">${line.number} / ${line.label}</span></div>
      <div>
        <h3>${line.title}</h3>
        <p>${line.subtitle}</p>
        ${button("Explore products", lineUrl(id), "ghost")}
      </div>
    </article>
  `).join("");
}

function renderProductCard(id) {
  const product = site.products[id];
  const line = site.lines[product.line];
  return `
    <article class="product-card">
      <a class="product-card__visual" href="${productUrl(id)}" aria-label="View ${product.name}">
        <img src="${productAssetUrl(id)}" alt="${product.name} brochure cover" loading="lazy">
      </a>
      <div class="product-card__body">
        <div>
          <span class="product-card__line">${line.label}</span>
          <h3>${product.name}</h3>
          <p>${product.intro}</p>
          <ul>${product.points.slice(0, 3).map(([title]) => `<li>${title}</li>`).join("")}</ul>
        </div>
        <div class="card-actions">
          ${button("Product details", productUrl(id), "dark")}
          ${button("PDF", brochureUrl(id), "line", 'target="_blank" rel="noopener"')}
        </div>
      </div>
    </article>
  `;
}

function renderScenarioCards(items) {
  return items.map(([title, copy]) => `
    <article class="scenario-card">
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `).join("");
}

function renderHome() {
  root.innerHTML = `
    <section class="hero">
      <div class="hero__inner">
        <div>
          <p class="eyebrow">SATLAB AT INTERGEO 2026 / MUNICH</p>
          <h1>Map today.<span>Build next.</span></h1>
          <p class="hero__copy">
            Surveying, 3D mapping, hydrographic systems and machine control.
            Discover SatLab field technologies built to turn data into confident decisions.
          </p>
          <div class="hero__actions">
            ${button("Explore product library", linkTo("satlab/index.html"), "primary")}
            ${button("Explore 3D Mapping", lineUrl("3d-mapping"), "ghost")}
          </div>
        </div>
        <aside class="event-card" aria-label="INTERGEO 2026 event information">
          <p class="event-card__label">Save the date</p>
          <strong>15-17<br>SEP 2026</strong>
          <p>Messe München<br>Munich, Germany</p>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Solution portfolio</p>
          <h2>Four product lines</h2>
        </div>
        <p>Built for booth presentations, iPad browsing, QR access and fast brochure downloads.</p>
      </div>
      <div class="line-grid">${renderLineCards()}</div>
    </section>

    <section class="section section--dark">
      <div class="section-heading">
        <div>
          <p class="eyebrow">INTERGEO 2026</p>
          <h2>The global geospatial community meets in Munich</h2>
        </div>
        <p>Three days of surveying, GIS, BIM, drones, smart cities and digital transformation.</p>
      </div>
      <div class="fact-grid">
        <article class="fact-card"><strong>530+</strong><p>Exhibitors</p></article>
        <article class="fact-card"><strong>18,500+</strong><p>Visitors</p></article>
        <article class="fact-card"><strong>119</strong><p>Countries</p></article>
      </div>
    </section>
  `;
}

function renderBrand() {
  const ids = Object.keys(site.products);
  root.innerHTML = `
    <section class="page-title">
      <div class="page-title__inner">
        <p class="eyebrow">SATLAB / PRODUCT LIBRARY</p>
        <h1>Product Library</h1>
        <p class="page-title__copy">
          Explore the SatLab technologies featured for INTERGEO 2026 across four solution areas.
          <span>Browse product highlights, applications, specifications and downloadable brochures.</span>
        </p>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">All products</p>
          <h2>Explore the portfolio</h2>
        </div>
        <p>Open a product page for highlights and specifications, or go directly to its PDF brochure.</p>
      </div>
      <div class="product-grid">${ids.map(renderProductCard).join("")}</div>
    </section>
  `;
}

function renderLine() {
  const id = document.body.dataset.line;
  const line = site.lines[id];
  if (!line) return;

  root.innerHTML = `
    <section class="page-title">
      <div class="page-title__inner">
        <p class="eyebrow">SATLAB / ${line.label}</p>
        <h1>${line.title}</h1>
        <p class="page-title__copy">${line.subtitle}<span>${line.copy}</span></p>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Products</p>
          <h2>Product lineup</h2>
        </div>
        <p>Review ${line.label} highlights, key specifications and downloadable product materials.</p>
      </div>
      <div class="product-grid">${line.products.map(renderProductCard).join("")}</div>
    </section>
    <section class="section section--compact">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Applications</p>
          <h2>Where it works</h2>
        </div>
      </div>
      <div class="scenario-grid">${renderScenarioCards(line.scenarios)}</div>
    </section>
  `;
}

function renderProduct() {
  const id = document.body.dataset.product;
  const product = site.products[id];
  if (!product) return;
  const line = site.lines[product.line];

  root.innerHTML = `
    <section class="product-hero">
      <div class="product-hero__inner">
        <div>
          <p class="eyebrow">${line.label} / ${product.tag}</p>
          <h1>${product.name}</h1>
          <p class="product-hero__copy">${product.intro}<span>${product.en}</span></p>
          <div class="hero__actions">
            ${button("Open PDF brochure", "brochure.pdf", "primary", 'target="_blank" rel="noopener"')}
            ${button("Back to product line", "../index.html", "ghost")}
          </div>
        </div>
        <figure class="product-visual">
          <img src="assets/cover.png" alt="${product.name} brochure cover">
        </figure>
      </div>
    </section>

    <section class="product-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Key benefits</p>
          <h2>Product highlights</h2>
        </div>
      </div>
      <div class="feature-grid">
        ${product.points.map(([title, copy], index) => `
          <article class="feature-card">
            <span class="feature-card__number">0${index + 1}</span>
            <h3>${title}</h3>
            <p>${copy}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="product-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Applications</p>
          <h2>Built for the field</h2>
        </div>
      </div>
      <div class="scenario-grid">
        ${product.applications.map((item) => `
          <article class="scenario-card">
            <h3>${item}</h3>
            <p>Apply ${product.name} to streamline field data capture, quality control and project decisions.</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="product-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Key specifications</p>
          <h2>At a glance</h2>
        </div>
        <p>See the PDF brochure for detailed conditions, notes and the latest specifications.</p>
      </div>
      <table class="spec-table">
        <tbody>
          ${product.specs.map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`).join("")}
        </tbody>
      </table>
      <div class="download-panel">
        <div>
          <h3>Product brochure</h3>
          <p>Open on an iPad, access by QR code, or save the brochure for offline review.</p>
        </div>
        <div class="product-actions">
          ${button("Download PDF", "brochure.pdf", "primary", "download")}
          ${button("Back to product line", "../index.html", "ghost")}
        </div>
      </div>
      ${product.secondaryDocs ? `
        <div class="product-actions" style="margin-top: 18px;">
          ${product.secondaryDocs.map(([label, path]) => button(label, path, "line", 'target="_blank" rel="noopener"')).join("")}
        </div>
      ` : ""}
    </section>
  `;
}

if (root) {
  if (page === "home") renderHome();
  if (page === "brand") renderBrand();
  if (page === "line") renderLine();
  if (page === "product") renderProduct();
}

const navLinks = [...document.querySelectorAll(".site-nav a")];
if (page === "brand" && navLinks[0]) {
  navLinks[0].setAttribute("aria-current", "page");
}
if (page === "line") {
  const currentLine = document.body.dataset.line;
  navLinks.find((link) => link.getAttribute("href")?.includes(`${currentLine}/index.html`) || link.getAttribute("href") === "index.html")
    ?.setAttribute("aria-current", "page");
}
if (page === "product") {
  const currentProduct = site.products[document.body.dataset.product];
  navLinks.find((link) => link.getAttribute("href")?.includes(`${currentProduct?.line}/index.html`) || link.getAttribute("href") === "../index.html")
    ?.setAttribute("aria-current", "page");
}
