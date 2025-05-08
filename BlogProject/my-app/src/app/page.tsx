import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
  <header id="header" className="header d-flex align-items-center sticky-top ">
    <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <a
        href="Anasayfa.html"
        className="logo d-flex align-items-center me-auto me-xl-0"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.webp" alt=""> */}
        <h1 className="sitename" style={{ color: "#db0226" }}>
          <strong>Shield Tech</strong>
        </h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="Anasayfa.html" className="active">
              Anasayfa
            </a>
          </li>
          <li id="about" className="dropdown">
            <a href="#">
              <span>Kurumsal</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown" />
            </a>
            <ul>
              <li>
                <a href="Hakkımızda.html">Hakkımızda</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="EMC_Yankısız_Odalar.html">
              <span>EMC Yankısız Odalar</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown" />
            </a>
            <ul>
              <li>
                <a href="Tam_Yarı_Yansımasız_Odalar.html">
                  Tam/Yarı Yansımasız Odalar
                </a>
              </li>
              <li>
                <a href="Askeri_Standart_Odalar.html">Askeri Standart Odalar</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Ekranlı Odalar</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="Güvenli_Sessiz_Odalar.html">
                      Güvenli - Sessiz Odalar
                    </a>
                  </li>
                  <li>
                    <a href="Kontrol_ve_Yükseltici_Odaları.html">
                      Kontrol ve Yükseltici Odaları
                    </a>
                  </li>
                  <li>
                    <a href="Siber_Güvenlik_Odaları.html">
                      Siber Güvenlik Odaları
                    </a>
                  </li>
                  <li>
                    <a href="Medikal_Ekranlama_EEG.html">
                      Medikal Ekranlama - EEG
                    </a>
                  </li>
                  <li>
                    <a href="Yüksek_Gerilimli_Lab_Ekranlama.html">
                      Yüksek Gerilimli Lab. Ekranlama
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Test Ölçüm</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown" />
            </a>
            <ul>
              <li>
                <a href="RF_Mikrodalga_Test_Cihazları.html">
                  RF, Mikrodalga, Test Cihazları
                </a>
              </li>
              <li>
                <a href="EMC_Test_Aksesuarları.html">EMC Test Aksesuarları</a>
              </li>
              <li>
                <a href="Bakım_Tamir_Modifikasyon.html">
                  Bakım - Tamir - Modifikasyon
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#services">
              <span>Hizmetlerimiz</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown" />
            </a>
            <ul>
              <li>
                <a href="Dizayn_Kurulum_Hizmetleri.html">
                  Dizayn - Kurulum Hizmetleri
                </a>
              </li>
              <li>
                <a href="Oda_Lokasyon_Değiştirme.html">
                  Oda Lokasyon Değiştirme
                </a>
              </li>
              <li>
                <a href="Bakım_Tamir_Modifikasyon.html">
                  Bakım - Tamir - Modifikasyon
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Ürünler.html">Ürünler</a>
          </li>
          <li>
            <a href="Blog.html">Blog</a>
          </li>
          <li>
            <a href="İletişim.html">İletişim</a>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
      <div id="Language_Selector" className="dropdown">
        <button
          style={{ backgroundColor: "rgba(25,64,135,0.1)", borderRadius: 30 }}
          className="btn btn-primary-subtle dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          🌐 Dil Seçimi
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              <span>
                <img className="p-1" src="tr.png" alt="" />
              </span>{" "}
              Türkçe
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span>
                <img className="p-1" src="en.png" alt="" />
              </span>
              English
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span>
                <img className="p-1" src="deu.png" alt="" />
              </span>
              Deutsch
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span>
                <img className="p-1" src="fr.png" alt="" />
              </span>
              Français
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span>
                <img className="p-1" src="ru.png" alt="" />
              </span>
              Русский
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span>
                <img className="p-1" src="pt-br.png" alt="" />
              </span>
              Português
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <span>
                <img className="p-1" src="uae.png" alt="" />
              </span>{" "}
              العربية
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center content">
          <h2 style={{ marginTop: "-60px" }} className=" mb-1 p-2">
            Profesyonel EMC Chamber Montaj ve Kurulum Hizmetleri
          </h2>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <p className="lead text-center">
              EMC odası montajından test ve sertifikalandırmaya kadar tüm
              süreçlerde yanınızdayız.
            </p>
            {/*<p>Gelecegi insa ediyoruz</p>
          <p>Installation For Future</p>*/}
            <div className="text-center">
              <h3 className="mb-3" data-aos="fade-right" data-aos-delay={550}>
                {" "}
                <i className="bi bi-check-circle p-2 text-primary" />
                EMC Yankısız Odalar
              </h3>
              <h3 className="mb-3" data-aos="fade-right" data-aos-delay={650}>
                {" "}
                <i className="bi bi-check-circle p-2 text-primary" />
                Yankısız Test Odaları
              </h3>
              <h3 className="mb-3" data-aos="fade-right" data-aos-delay={750}>
                {" "}
                <i className="bi bi-check-circle p-2 text-primary" />
                Yankısız Test Kabinleri
              </h3>
            </div>
            {/*<div class="mt-5">
        <div class="cta-buttons " data-aos="fade-up" data-aos-delay="400">
          <a href="#contact" class="btn btn-outline">Birlikte Çalışalım</a>
        </div>
      </div>
      <!--Customers*/}
            <div className="container d-flex justify-content-center gap-4 ">
              <div className="box">
                <i className="fas fa-briefcase stat-icon" />
                <h3>30+</h3>
                <p>Yıllık Tecrübe</p>
              </div>
              <div className="box">
                <i className="fas fa-project-diagram stat-icon" />
                <h3>150+</h3>
                <p>Proje</p>
              </div>
              <div className="box">
                <i className="fas fa-globe stat-icon" />
                <h3>38+</h3>
                <p>Ülke</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="hero-image bg-light" id="logo-card">
              <Image
                src="/Shield-Tech.png"
                alt="Logo Image"
                className="img-fluid"
                width={500} // Resmin genişliği (pixel cinsinden)
                height={300} // Resmin yüksekliği (pixel cinsinden)
                data-aos="zoom-in"
                data-aos-delay={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Hero Section */}
    {/* About Section */}
    <section id="about" className="about section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Hakkımızda</h2>
        <div className="hr_abaout">
          <hr />
        </div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center">
          <div
            className="col-lg-6 position-relative"
            data-aos="fade-right"
            data-aos-delay={200}
          >
            <div className="about-image">
              <img
                src="/Chamber.png"
                alt="Profile Image"
                className="img-fluid rounded-4"
              />
              {/*Emc Chamberdan Foto Gelicek*/}
            </div>
          </div>
          <div className="col-lg-6" data-aos="slide-up" data-aos-delay={300}>
            <div className="about-content">
              <h2>
                <span style={{ color: "#db0226" }}>Shield Tech </span>&amp;
                Elektromanyetik Güvenlik, Profesyonel Montaj"
              </h2>
              <p className="mb-4">
                Kemar Emc Ltd. alanında uzman personeli ile 2011 yılından beri
                kesintisiz hizmet vermektedir. Tüm ihtiyaçlarınızı
                karşılayabilecek bilgi ve donanıma sahiptir. Dünyanın çeşitli
                ülkelerinde sayısız işi profesyonel bir şekilde tamamlayıp
                teslim etmiştir.
              </p>
              {/*<div class="personal-info">
          <div class="row g-4">
            <div class="col-6">
              <div class="info-item">
                <span class="label">Name</span>
                <span class="value">Eliot Johnson</span>
              </div>
            </div>

            <div class="col-6">
              <div class="info-item">
                <span class="label">Phone</span>
                <span class="value">+123 456 7890</span>
              </div>
            </div>

            <div class="col-6">
              <div class="info-item">
                <span class="label">Age</span>
                <span class="value">26 Years</span>
              </div>
            </div>

            <div class="col-6">
              <div class="info-item">
                <span class="label">Email</span>
                <span class="value">email@example.com</span>
              </div>
            </div>

            <div class="col-6">
              <div class="info-item">
                <span class="label">Occupation</span>
                <span class="value">Lorem Engineer</span>
              </div>
            </div>

            <div class="col-6">
              <div class="info-item">
                <span class="label">Nationality</span>
                <span class="value">Ipsum</span>
              </div>
            </div>
          </div>
        </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /About Section */}
    {/* Skills Section */}
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4 skills-animation">
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="skill-box">
              <h3>Güvenilir EMC Çözümleri</h3>
              <p>
                EMC test odalarımız elektromanyetik girişime karşı mükemmel
                izolasyon sağlar.
              </p>
              <span className="text-end d-block">100%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="skill-box">
              <h3>Kaliteli Deneyim</h3>
              <p>
                EMC test odalarında yılların deneyimiyle yüksek kalite ve
                güvenilir çözümler sunuyoruz.
              </p>
              <span className="text-end d-block">100%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="skill-box">
              <h3>Uzman Personel</h3>
              <p>
                EMC odaları için uzman mühendislerimizle profesyonel çözümler
                sağlıyoruz.
              </p>
              <span className="text-end d-block">100%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="skill-box">
              <h3>Uzun Süreli Garanti</h3>
              <p>
                Uzun ömürlü ve dayanıklı EMC test odalarıyla güvenilir
                performans sunuyoruz.
              </p>
              <span className="text-end d-block">100%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Skills Section */}
    {/* Resume Section */}
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        {/*<h2>Hakkımızda</h2> <div class="title-shape"> <svg viewBox="0 0 200 20"
  xmlns="http://www.w3.org/2000/svg"> <path d="M 0,10 C 40,0 60,20 100,10 C 140,0
  160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path> </svg>
  </div> <!--<p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit
  esse quam nihil molestiae consequatur vel illum qui dolorem</p>*/}
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-12">
            <div className="resume-wrapper">
              <div className="resume-block" data-aos="fade-up">
                <h2 className="text-center">Yolculuğumuz</h2>
                <div className="hr_abaout">
                  <hr />
                </div>
                <div className="timeline">
                  <div
                    className="timeline-item"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="timeline-left">
                      <h4 className="company">Kuruluş</h4>
                      <span className="period">2011 – Kuruluş</span>
                    </div>
                    <div className="timeline-dot" />
                    <div className="timeline-right">
                      <h3 className="position">Shield Tech</h3>
                      <p className="description">
                        Kemar EMC, elektrik-elektronik alanında profesyonel
                        hizmet sunmak amacıyla Türkiye’de kuruldu.
                      </p>
                    </div>
                  </div>
                  <div
                    className="timeline-item"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="timeline-left">
                      <h4 className="company">Uluslararası Açılım</h4>
                      <span className="period">2013</span>
                    </div>
                    <div className="timeline-dot" />
                    <div className="timeline-right">
                      <h3 className="position">Shield Tech</h3>
                      <p className="description">
                        Avrupa ve Orta Doğu’da ilk EMC test odası projeleri
                        tamamlandı, global pazara giriş yapıldı.
                      </p>
                      {/*<ul> <li>Lead in the design, development, and implementation of the graphic,
                                  layout, and production communication materials</li> <li>Delegate tasks to the 7
                                  members of the design team and provide counsel on all aspects of the project.
                                  </li> <li>Supervise the assessment of all graphic materials in order to ensure
                                  quality and accuracy of the design</li> <li>Oversee the efficient use of
                                  production project budgets ranging from $2,000 - $25,000</li> </ul>*/}
                    </div>
                  </div>
                  <div
                    className="timeline-item"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="timeline-left">
                      <h4 className="company">
                        İngiltere ve ABD Pazarına Giriş
                      </h4>
                      <span className="period">2015</span>
                    </div>
                    <div className="timeline-dot" />
                    <div className="timeline-right">
                      <h3 className="position">Shield Tech</h3>
                      <p className="description">
                        Güney Amerika ve Asya’daki projelerle dünya çapında daha
                        geniş bir müşteri ağı oluşturuldu.
                      </p>
                    </div>
                  </div>
                  <div className="timeline">
                    <div
                      className="timeline-item"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="timeline-left">
                        <h4 className="company">
                          Ar-Ge ve Teknolojik Yatırımlar
                        </h4>
                        <span className="period">2019</span>
                      </div>
                      <div className="timeline-dot" />
                      <div className="timeline-right">
                        <h3 className="position">Shield Tech</h3>
                        <p className="description">
                          Daha yenilikçi ve ileri teknolojiye sahip EMC
                          çözümleri geliştirilerek sektörde öncü adımlar atıldı.
                        </p>
                      </div>
                    </div>
                    <div className="timeline">
                      <div
                        className="timeline-item"
                        data-aos="fade-up"
                        data-aos-delay={200}
                      >
                        <div className="timeline-left">
                          <h4 className="company">
                            7/24 Destek ve Online Hizmetler
                          </h4>
                          <span className="period">2021</span>
                        </div>
                        <div className="timeline-dot" />
                        <div className="timeline-right">
                          <h3 className="position">Shield Tech</h3>
                          <p className="description">
                            Müşterilere kesintisiz destek sağlamak amacıyla
                            online iletişim ve teknik destek sistemi kuruldu.
                          </p>
                        </div>
                      </div>
                      <div className="timeline">
                        <div
                          className="timeline-item"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          <div className="timeline-left">
                            <h4 className="company">
                              Sektörde Lider Konuma Yükseliş
                            </h4>
                            <span className="period">2023</span>
                          </div>
                          <div className="timeline-dot" />
                          <div className="timeline-right">
                            <h3 className="position">Shield Tech</h3>
                            <p className="description">
                              Avrupa ve Amerika’da büyük projeler tamamlanarak
                              Kemar EMC, global ölçekte tanınan bir marka haline
                              geldi.
                            </p>
                          </div>
                        </div>
                        <div className="timeline">
                          <div
                            className="timeline-item"
                            data-aos="fade-up"
                            data-aos-delay={200}
                          >
                            <div className="timeline-left">
                              <h4 className="company">Geleceğe Güvenle</h4>
                              <span className="period">2025</span>
                            </div>
                            <div className="timeline-dot" />
                            <div className="timeline-right">
                              <h3 className="position">Shield Tech</h3>
                              <p className="description">
                                Dünya çapında inovatif EMC çözümleri sunmaya
                                devam eden Kemar EMC, sektörün öncüsü olmayı
                                sürdürüyor.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Resume Section */}
    {/* Portfolio Section */}
    <section id="portfolio" className="portfolio section ">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Galeri-EMC Portotiplerimiz</h2>
        <div className="hr_abaout">
          <hr />
        </div>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="portfolio-filters-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <ul className="portfolio-filters isotope-filters">
              <li data-filter="*" className="filter-active">
                Hepsi
              </li>
              <li data-filter=".filter-web">EMC</li>
              <li data-filter=".filter-graphics">Yankılı Oda</li>
              <li data-filter=".filter-motion">Askeri Odalar</li>
            </ul>
          </div>
          <div
            className="row g-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    src="/Lab.jpeg"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a
                        href="/Lab.jpeg"
                        className="glightbox preview-link"
                        data-gallery="portfolio-gallery-web"
                      >
                        <i className="bi bi-eye" />
                      </a>
                      <a href="portfolio-details.html" className="details-link">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">EMC</span>
                  <h3>--------</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    excepturi impedit consequuntur voluptate ab amet libero ad
                    exercitationem maxime perspiciatis, culpa quidem vitae
                    dolores. Repellendus sunt id ab inventore! Expedita!
                  </p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    src="/Lab2 (1).jpeg"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a
                        href="/Lab2 (1).jpeg"
                        className="glightbox preview-link"
                        data-gallery="portfolio-gallery-graphics"
                      >
                        <i className="bi bi-eye" />
                      </a>
                      <a href="portfolio-details.html" className="details-link">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category"> Yankılı Oda</span>
                  <h3>Yankılı</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita iure inventore, odit saepe maiores magni neque nisi
                    nobis necessitatibus, iste accusamus qui aspernatur impedit
                    ducimus eum sequi unde natus minima!
                  </p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-motion">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    src="/Lab3 (1).jpeg"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a
                        href="/Lab3 (1).jpeg"
                        className="glightbox preview-link"
                        data-gallery="portfolio-gallery-motion"
                      >
                        <i className="bi bi-eye" />
                      </a>
                      <a href="portfolio-details.html" className="details-link">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Askeri Odalar</span>
                  <h3>Askeri</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus obcaecati odit aut officia sequi provident
                    officiis non dolor ullam quidem dolore nemo laboriosam
                    debitis a quaerat repudiandae impedit, enim nostrum!
                  </p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-brand">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    src="/Lab4.jpeg"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a
                        href="/Lab4.jpeg"
                        className="glightbox preview-link"
                        data-gallery="portfolio-gallery-brand"
                      >
                        <i className="bi bi-eye" />
                      </a>
                      <a href="portfolio-details.html" className="details-link">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Yankılı Oda</span>
                  <h3>Yankılı Odalar</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Libero ad aliquam possimus, fugit facilis eligendi nisi quos
                    maiores. Sequi laudantium, quas quis commodi debitis iusto
                    aliquid error ad quam qui!
                  </p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    src="/Car (1).png"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a
                        href="/Car (1).png"
                        className="glightbox preview-link"
                        data-gallery="portfolio-gallery-web"
                      >
                        <i className="bi bi-eye" />
                      </a>
                      <a href="portfolio-details.html" className="details-link">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">EMC</span>
                  <h3>EMC Chamber</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio repudiandae eligendi, tempore quas doloribus deleniti
                    aperiam consequatur officia eveniet cumque exercitationem
                    quaerat nihil. Odit debitis facere, nihil porro facilis in?
                  </p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img
                    src="/Car3 (1).jpeg"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a
                        href="/Car3 (1).jpeg"
                        className="glightbox preview-link"
                        data-gallery="portfolio-gallery-graphics"
                      >
                        <i className="bi bi-eye" />
                      </a>
                      <a href="portfolio-details.html" className="details-link">
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">Yankılı Oda</span>
                  <h3>Yankılı Oda</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam magni minus corrupti reiciendis debitis commodi esse
                    mollitia eum voluptatibus. Voluptas beatae eos voluptates
                    optio maiores deserunt consequuntur eaque deleniti
                    provident!
                  </p>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
    {/* /Portfolio Section */}
    {/* Services Section */}
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Hizmetlerimiz</h2>
        <div className="hr_abaout">
          <hr />
        </div>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item">
                  <i className="bi bi-activity icon" />
                  <h3>
                    <a href="service-details.html">Yankısız Odalar</a>
                  </h3>
                  <p>
                    Shield Tech olarak, yankısız odalar EMC testlerinde
                    kullanılan, dış elektromanyetik girişimlerden izole edilmiş
                    ve RF yansımalarını önleyen alanlardır. Cihazların EMI ve
                    bağışıklık testlerini hassas şekilde gerçekleştirerek
                    uluslararası standartlara uygunluk sağlar.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item">
                  <i className="bi bi-activity icon" />
                  <h3>
                    <a href="service-details.html">Ekranlı Odalar</a>
                  </h3>
                  <p>
                    Shield Tech olarak, ekranlı odalar EMC testlerinde dış
                    elektromanyetik girişimleri engelleyerek cihazların EMI ve
                    bağışıklık testlerini hassas şekilde gerçekleştirir, askeri
                    ve endüstriyel standartlara uygunluğu doğrular.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-item">
                  <i className="bi bi-activity icon" />
                  <h3>
                    <a href="service-details.html">Askeri Standartlar</a>
                  </h3>
                  <p>
                    Shield Tech olarak, yankısız odalar EMC test ve ölçümlerinde
                    askeri standartlara uygun cihazların EMI ve bağışıklığını
                    değerlendirerek güvenilirlik ve performans doğrulaması
                    sağlar.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-item">
                  <i className="bi bi-easel icon" />
                  <h3>
                    <a href="service-details.html">Dizayn-Kurulum Hizmetleri</a>
                  </h3>
                  <p>
                    Shield Tech olarak, ekranlı ve yankısız odaların dizayn,
                    kurulum ve entegrasyon hizmetlerini sunarak EMC test
                    ortamlarını uluslararası standartlara uygun şekilde
                    tasarlıyor ve uyguluyoruz.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={400}>
                <div className="service-item">
                  <i className="bi bi-broadcast icon" />
                  <h3>
                    <a href="service-details.html">Oda Lokasyon Değiştirme</a>
                  </h3>
                  <p>
                    Shield Tech olarak, ekranlı ve yankısız odaların lokasyon
                    değiştirme hizmetini sunarak söküm, taşıma ve yeniden
                    kurulum süreçlerini uluslararası EMC standartlarına uygun
                    şekilde gerçekleştiriyoruz.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={500}>
                <div className="service-item">
                  <i className="bi bi-bounding-box-circles icon" />
                  <h3>
                    <a href="service-details.html">
                      Bakım-Tamir-Modifikayson Hizmetleri
                    </a>
                  </h3>
                  <p>
                    Shield Tech olarak, ekranlı ve yankısız odalar için bakım,
                    tamir ve modifikasyon hizmetleri sunarak EMC test
                    ortamlarının performansını ve uluslararası standartlara
                    uygunluğunu koruyoruz.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Services Section */}
    {/* Faq Section */}
    <section id="faq" className="faq section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Sıkça Sorulan Sorular</h2>
        <div className="hr_abaout">
          <hr />
        </div>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3>EMC Yankısız Odalar nedir ve ne amaçla kullanılır?</h3>
                <div className="faq-content">
                  <p>
                    EMC Yankısız Odalar, elektromanyetik dalgaların yansımasını
                    en aza indirmek için özel olarak tasarlanmış odalardır. Bu
                    odalar, elektromanyetik uyumluluk (EMC) testleri ve
                    ölçümleri için kullanılır.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>Tam/Yarı Yansımasız Odalar arasındaki fark nedir?</h3>
                <div className="faq-content">
                  <p>
                    Tam yansımasız odalar, duvar, tavan ve zemin kaplamalarının
                    tamamında emici malzeme kullanılarak elektromanyetik
                    yansımanın tamamen önlendiği odalardır. Yarı yansımasız
                    odalar ise genellikle zeminde yansıma bırakılarak yapılır ve
                    belirli testler için kullanılır.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>Askeri Standart Odalar hangi testler için uygundur?</h3>
                <div className="faq-content">
                  <p>
                    Askeri standart odalar, askeri cihaz ve sistemlerin
                    elektromanyetik uyumluluk ve bağışıklık testlerini yapmak
                    üzere tasarlanmış özel odalardır.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>Siber Güvenlik Odaları nedir?</h3>
                <div className="faq-content">
                  <p>
                    Siber güvenlik odaları, hassas veri güvenliği sağlamak için
                    elektromanyetik kaçakları önleyen özel ekranlamalarla
                    donatılmış odalardır.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>Medikal Ekranlama - EEG Odaları ne işe yarar?</h3>
                <div className="faq-content">
                  <p>
                    Medikal ekranlama odaları, özellikle EEG ve diğer nörolojik
                    testlerin elektromanyetik parazitlerden etkilenmeden
                    yapılabilmesi için kullanılır.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>Oda Lokasyon Değiştirme Hizmeti nedir?</h3>
                <div className="faq-content">
                  <p>
                    Mevcut EMC odalarınızın farklı bir konuma taşınmasını
                    sağlıyoruz. Bu süreçte söküm, nakliye ve yeniden kurulum
                    işlemlerini profesyonelce yönetiyoruz.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>Bakım, Tamir ve Modifikasyon Hizmetleri neleri kapsar?</h3>
                <div className="faq-content">
                  <p>
                    EMC odalarının bakım, onarım ve güncelleme işlemlerini
                    kapsar. Zamanla yıpranmış veya eskimiş bileşenlerin
                    değiştirilmesi ve performans optimizasyonu yapılır.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
              <div className="faq-item">
                <h3>
                  RF, Mikrodalga ve Test Cihazları ile ilgili destek veriyor
                  musunuz?
                </h3>
                <div className="faq-content">
                  <p>
                    Evet, RF ve mikrodalga test cihazlarının tedariki, kurulumu
                    ve bakımı konusunda destek sağlıyoruz.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>
              {/* End Faq item*/}
            </div>
          </div>
          {/* End Faq Column*/}
        </div>
      </div>
    </section>
    {/* /Faq Section */}
    {/* Contact Section */}
    <section id="contact" className="contact section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay={200}>
              <div className="contact-info mt-2">
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-envelope-at me-3" />
                  <a href="mailto:info@kemaremc.com">
                    <span style={{ color: "#db0226" }}>info@kemaremc.com</span>
                  </a>
                </div>
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone me-3" />
                  <span>
                    <span className="fw-bold">+90 </span>(216) 706 1762
                  </span>
                </div>
                <div className="info-item d-flex mb-4">
                  <i className="bi bi-geo-alt me-3" />
                  <span>
                    Ostim mahallesi İvedik Arı Sanayi Sitesi, 1481. Sk. No:4,
                    06374 Yenimahalle/ANKARA
                  </span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2161.3886715813196!2d32.74638646062351!3d39.99358727714742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6daf79760ea5%3A0x6184f1f067b8f66c!2sKemar%20Emc%20Elektrik%20Elektronik%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1741558004237!5m2!1str!2str"
                  width={600}
                  height={400}
                  style={{ border: 20 }}
                  allowFullScreen // Düzeltildi: "" yerine tek başına allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <form
              id="contact-form1"
              className="contact_form1"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row gy-4 p-5">
                {/*Title*/}
                <h5 className="text-center fw-bold">İletişim Kutusu</h5>
                <div className="col-md-12">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="form-control"
                  placeholder="Adınız"
                  required // Düzeltildi: "" yerine tek başına required
                />
                </div>
                <div className="col-md-12">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="form-control"
                  placeholder="Adınız"
                  required // Düzeltildi: "" yerine tek başına required
                />
                </div>
                <div className="col-md-12">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Konu"
                  required // Düzeltildi: "" yerine tek başına required
                />
                </div>
                <div className="col-md-12">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="form-control"
                  placeholder="Mesaj"
                  required // Düzeltildi: "" yerine tek başına required
                  defaultValue={""}
                />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading d-none">Yükleniyor...</div>
                  <div className="error-message d-none text-danger" />
                  <div
                    style={{ color: "#000" }}
                    className="sent-message d-none bg-success"
                  >
                    Mesajınız Gönderildi, Teşekkür ederiz!
                  </div>
                  <button
                    id="Mesaj_Gonder"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Mesaj Gönder
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* /Contact Section */}
  </main>
  <section className="container">
    <div className=" custom-solution" data-aos="fade-up" data-aos-delay={200}>
      <h2>Özel Çözüm mü Arıyorsunuz?</h2>
      <p>
        İhtiyaçlarınıza özel EMC çözümleri için bizimle iletişime geçin. Uzman
        ekibimiz size en uygun çözümü sunmak için hazır.
      </p>
      <button className=" consultation-btn">Ücretsiz Danışmanlık Alın</button>
    </div>
  </section>
  <footer id="footer" className="footer">
    <div className="container " data-aos="fade-up" data-aos-delay={200}>
      <div className="row">
        <div className="col-lg-6">
          <img
            style={{ width: 450, height: 170 }}
            src="/Shield-Tech.png"
            alt=""
          />
          <p className="mt-4 p-1">
            2011 yılında kurulmuş ve EMC Odaları konusunda global bir kurulum
            şirketidir. Türkiye merkezli olmakla birlikte; İngiltere, ABD, Güney
            Amerika, Ortadoğu, Asya ve Avrupa'da kurulum projeleri
            sağlamaktadır.
          </p>
          <div className="social-links d-flex justify-content-center">
            <a href="">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="">
              <i className="bi bi-facebook" />
            </a>
            <a href="">
              <i className="bi bi-instagram" />
            </a>
            <a href="">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <p
            className="text-center fw-bold"
            style={{ fontSize: 20, color: "black" }}
          >
            İlgilenebileceğiniz Diğer Sayfalar
          </p>
          <hr />
          <div className="row">
            <div className="others_page col-lg-6">
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                Hakkımızda
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                Yankısız Odalar
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                Ekranlı Odalar
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                Yansımasız Odalar
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                3 Metre
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                10 Metre
              </a>
            </div>
            <div className="others_page col-lg-6">
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                Haberler
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                Askeri Odalar
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                Ürünler
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                Kurulum Hizmetleri
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                5 Metre
              </a>
              <a href="#">
                <span className="m-2">
                  <i className="bi bi-arrow-right" />
                </span>
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 ">
        <div className="copyright">
          <p style={{ fontSize: 15 }}>
            © <span>Copyright</span>{" "}
            <strong style={{ color: "#db0226" }} className="px-1 sitename ">
              Shield Tech
            </strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </div>
    {/*<div class="container">
<div class="copyright text-center ">
  <p>© <span>Copyright</span> <strong class="px-1 sitename">Shield Tech</strong> <span>All Rights Reserved</span></p>
</div>
<div class="social-links d-flex justify-content-center">
  <a href=""><i class="bi bi-twitter-x"></i></a>
  <a href=""><i class="bi bi-facebook"></i></a>
  <a href=""><i class="bi bi-instagram"></i></a>
  <a href=""><i class="bi bi-linkedin"></i></a>
</div>
<div class="credits">
  <!-- All the links in the footer should remain intact. */}
    {/* You can delete the links only if you've purchased the pro version. */}
    {/* Licensing information: https://bootstrapmade.com/license/ */}
    {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
    {/*Designed by <a href="#">Dev</a>
</div>
    </div>*/}
  </footer>
  {/* Scroll Top */}
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Main JS File */}
</>

  
  );
}
