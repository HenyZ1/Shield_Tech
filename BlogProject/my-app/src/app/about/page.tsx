import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <>
    <header id="header" className="header d-flex align-items-center sticky-top ">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a
          href="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.webp" alt=""> */}
          <h1
            className="sitename"
            style={{ color: "#db0226", textDecoration: "none" }}
          >
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
                  <img className="p-1" src="/tr.png" alt="" />
                </span>{" "}
                Türkçe
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span>
                  <img className="p-1" src="/en.png" alt="" />
                </span>
                English
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span>
                  <img className="p-1" src="/deu.png" alt="" />
                </span>
                Deutsch
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span>
                  <img className="p-1" src="/fr.png" alt="" />
                </span>
                Français
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span>
                  <img className="p-1" src="/ru.png" alt="" />
                </span>
                Русский
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span>
                  <img className="p-1" src="/pt-br.png" alt="" />
                </span>
                Português
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span>
                  <img className="p-1" src="/uae.png" alt="" />
                </span>{" "}
                العربية
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    {/* Navbar */}
    {/*<nav class="navbar navbar-expand-lg navbar-custom sticky-top">
    <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="#">Shield Tech</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Anasayfa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Kurumsal</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">EMC Yankısız Odalar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Test Ölçüm</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Hizmetlerimiz</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ürünler</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">İletişim</a>
                </li>
            </ul>
            <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-globe me-1"></i> Dil Seçimi
                </button>
                <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                    <li><a class="dropdown-item" href="#">Türkçe</a></li>
                    <li><a class="dropdown-item" href="#">English</a></li>
                </ul>
            </div>
        </div>
    </div>
      </nav>
  
      <!-- Hero Section */}
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-once="true"
          >
            <h1 style={{ color: "white" }} className="display-5 fw-bold mb-4">
              Hakkımızda
            </h1>
            <p className="lead opacity-90">
              Shield Tech olarak, 2011 yılından bu yana EMC çözümleri ve test
              sistemleri alanında global standartlarda hizmet sunuyoruz.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/Shield-Tech.png"
              alt="Shield Tech Logo"
              className="img-fluid"
              style={{ maxWidth: 300 }}
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-once="true"
            />
          </div>
        </div>
      </div>
    </section>
    {/* Main Content */}
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-lg-8"
            data-aos="slide-right"
            data-aos-delay={100}
            data-aos-once="true"
          >
            <h2 className="fw-bold text-dark mb-4">Biz Kimiz?</h2>
            <p>
              Shield Tech, 2011 yılında kurulmuş ve EMC Odaları konusunda global
              bir kuruluş olarak hizmet vermektedir. Türkiye merkezi olmakla
              birlikte, ABD, Güney Amerika, Ortadoğu, Asya ve Avrupa'da kurulum
              projeleri sağlamaktadır.
            </p>
            <p>
              Firmamız, elektromanyetik uyumluluk (EMC) test odaları, RF korumalı
              odalar, yankısız odalar ve semi-yankısız odalar gibi özel test
              ortamları tasarlamakta ve üretmektedir. Müşterilerimizin
              ihtiyaçlarına özel çözümler sunarak, en yüksek kalite
              standartlarında hizmet vermeyi amaçlıyoruz.
            </p>
            <p>
              Shield Tech olarak, müşterilerimize sadece ürün değil, aynı zamanda
              kapsamlı danışmanlık ve teknik destek hizmetleri de sunuyoruz.
              Deneyimli mühendis kadromuz, projenin ilk aşamasından kurulum
              sonrası desteğe kadar tüm süreçlerde yanınızda yer almaktadır.
            </p>
            <h3 className="fw-bold text-dark mt-5 mb-3">Misyonumuz</h3>
            <p>
              Elektromanyetik uyumluluk alanında yenilikçi ve güvenilir çözümler
              sunarak, müşterilerimizin ürün geliştirme süreçlerini hızlandırmak
              ve test kalitesini artırmaktır.
            </p>
            <h3 className="fw-bold text-dark mt-5 mb-3">Vizyonumuz</h3>
            <p>
              EMC test sistemleri alanında global bir lider olarak, sürekli
              inovasyon ve mükemmellik ile sektöre yön vermek ve müşterilerimize
              en yüksek değeri sunmaktır.
            </p>
          </div>
          <div
            className="col-lg-4"
            data-aos="slide-left"
            data-aos-delay={100}
            data-aos-once="true"
          >
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="fw-bold text-dark mb-4">Neden Biz?</h3>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="bi bi-check" />
                </div>
                <div className="feature-text">Global deneyim ve uzmanlık</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="bi bi-check" />
                </div>
                <div className="feature-text">Özel tasarım çözümler</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="bi bi-check" />
                </div>
                <div className="feature-text">Yüksek kalite standartları</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="bi bi-check" />
                </div>
                <div className="feature-text">Kapsamlı teknik destek</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="bi bi-check" />
                </div>
                <div className="feature-text">
                  Uluslararası standartlara uygunluk
                </div>
              </div>
              <div className="mt-5">
                <h3 className="fw-bold text-dark mb-3">İletişime Geçin</h3>
                <a href="#" className="btn btn-primary">
                  Bize Ulaşın
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Stats Section */}
    <section className="py-5 bg-light">
      <div className="container">
        <h2
          className="fw-bold text-center text-dark mb-5"
          data-aos="flip-left"
          data-aos-delay={300}
          data-aos-once="true"
        >
          {" "}
          <span style={{ color: "#db0226" }}>Shield Tech</span>
        </h2>
        <hr />
        <div
          className="row"
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-once="true"
        >
          <div className="col-6 col-md-3">
            <div className="stats-item">
              <div className="stats-number" id="yearsCounter">
                0+
              </div>
              <div className="stats-label">Yıllık Deneyim</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stats-item">
              <div className="stats-number" id="projectsCounter">
                0+
              </div>
              <div className="stats-label">Tamamlanan Proje</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stats-item">
              <div className="stats-number" id="countriesCounter">
                0+
              </div>
              <div className="stats-label">Ülke</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stats-item">
              <div className="stats-number" id="satisfactionCounter">
                0+
              </div>
              <div className="stats-label">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Related Pages */}
    <section className="py-5">
      <div className="container">
        <h2
          className="fw-bold text-dark mb-4"
          data-aos="slide-right"
          data-aos-delay={500}
          data-aos-once="true"
        >
          İlgilenebileceğiniz Diğer Sayfalar
        </h2>
        <div
          className="row g-4"
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-once="true"
        >
          <div className="col-md-6 col-lg-4">
            <a href="#" className="text-decoration-none">
              <div className="related-page-card">
                <div className="related-page-title">
                  <i className="bi bi-chevron-right" />
                  <span>Hakkımızda</span>
                </div>
                <div className="related-page-desc">
                  Firmamız hakkında daha fazla bilgi edinin.
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a href="#" className="text-decoration-none">
              <div className="related-page-card">
                <div className="related-page-title">
                  <i className="bi bi-chevron-right" />
                  <span>Haberler</span>
                </div>
                <div className="related-page-desc">
                  En son gelişmeler ve duyurular.
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a href="#" className="text-decoration-none">
              <div className="related-page-card">
                <div className="related-page-title">
                  <i className="bi bi-chevron-right" />
                  <span>Yankısız Odalar</span>
                </div>
                <div className="related-page-desc">
                  EMC test odaları ve çözümlerimiz.
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a href="#" className="text-decoration-none">
              <div className="related-page-card">
                <div className="related-page-title">
                  <i className="bi bi-chevron-right" />
                  <span>Askeri Odalar</span>
                </div>
                <div className="related-page-desc">
                  Askeri standartlara uygun test odaları.
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a href="#" className="text-decoration-none">
              <div className="related-page-card">
                <div className="related-page-title">
                  <i className="bi bi-chevron-right" />
                  <span>Ekranlı Odalar</span>
                </div>
                <div className="related-page-desc">
                  RF korumalı ekranlı oda çözümlerimiz.
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a href="#" className="text-decoration-none">
              <div className="related-page-card">
                <div className="related-page-title">
                  <i className="bi bi-chevron-right" />
                  <span>Ürünler</span>
                </div>
                <div className="related-page-desc">
                  Ürün ve çözüm kataloğumuz.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Footer */}
    <footer data-aos="fade-up" data-aos-delay={400} data-aos-once="true">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <img
              src="assets/Shield-Tech.png"
              alt="Shield Tech Logo"
              className="img-fluid mb-4"
              style={{ maxWidth: 200 }}
            />
            <p className="mb-4">
              2011 yılında kurulmuş ve EMC Odaları konusunda global bir kuruluş
              olarak hizmet vermektedir.
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Hızlı Erişim</h5>
            <ul>
              <li>
                <a href="#">Hakkımızda</a>
              </li>
              <li>
                <a href="#">Yankısız Odalar</a>
              </li>
              <li>
                <a href="#">Ekranlı Odalar</a>
              </li>
              <li>
                <a href="#">Yansımasız Odalar</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Ürünler</h5>
            <ul>
              <li>
                <a href="#">3 Metre</a>
              </li>
              <li>
                <a href="#">5 Metre</a>
              </li>
              <li>
                <a href="#">10 Metre</a>
              </li>
              <li>
                <a href="#">Tüm Ürünler</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>İletişim</h5>
            <address>
              <p>Merkez Ofis</p>
              <p>İstanbul, Türkiye</p>
              <p className="mt-2">Email: info@shieldtech.com</p>
              <p>Tel: +90 212 123 45 67</p>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © <span id="currentYear" />{" "}
            <span style={{ color: "#db0226" }}>Shield Tech.</span> Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  </>
  
  );
}
