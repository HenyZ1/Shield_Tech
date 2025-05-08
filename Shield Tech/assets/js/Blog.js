// Sample blog post data
const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      category: "Technology",
      date: "June 10, 2023",
      image: "assets/img/Blogs/Blog_2.jpg",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      views: 189,
    },
    {
      id: 2,
      title: "10 Must-Visit Destinations in 2023",
      category: "Chambers",
      date: "June 8, 2023",
      image: "assets/img/Blogs/Blog_3.jpg",
      excerpt: "Discover the top travel destinations that should be on your bucket list this year.",
      views: 156,
    },
    {
      id: 3,
      title: "Healthy Eating Habits for Busy People",
      category: "Food",
      date: "June 5, 2023",
      image: "assets/img/",
      excerpt: "Simple and effective ways to maintain a healthy diet despite a busy schedule.",
      views: 132,
    },
    {
      id: 4,
      title: "Minimalist Living: Less is More",
      category: "Lifestyle",
      date: "June 2, 2023",
      image: "assets/img/",
      excerpt: "How embracing minimalism can lead to a more fulfilling and stress-free life.",
      views: 118,
    },
  ]
  
  // Function to display blog posts
  function displayBlogPosts() {
    const blogPostsContainer = document.getElementById("blogPosts")
  
    blogPosts.forEach((post) => {
      const postElement = document.createElement("div")
      postElement.className = "col-md-6 mb-4"
      postElement.innerHTML = `
              <div class="card h-100 shadow-sm">
                  <img src="${post.image}" class="card-img-top" alt="${post.title}">
                  <div class="card-body">
                      <div class="d-flex justify-content-between mb-2">
                          <span class="badge bg-primary">${post.category}</span>
                          <small class="text-muted">${post.date}</small>
                      </div>
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">${post.excerpt}</p>
                  </div>
                  <div class="card-footer bg-transparent d-flex justify-content-between align-items-center">
                      <a href="#" class="btn btn-sm btn-outline-primary">Read More</a>
                      <small class="text-muted"><i class="bi bi-eye"></i> ${post.views} views</small>
                  </div>
              </div>
          `
      blogPostsContainer.appendChild(postElement)
    })
  }
  
  // Newsletter form submission
  document.getElementById("newsletterForm")?.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.getElementById("emailInput").value
  
    // Simulate form submission
    alert(`Thank you for subscribing with: ${email}`)
    document.getElementById("emailInput").value = ""
  })
  
  // Search functionality
  document.getElementById("searchButton")?.addEventListener("click", () => {
    const searchInput = document.querySelector('input[type="text"]').value.toLowerCase()
  
    if (searchInput.trim() === "") {
      alert("Please enter a search term")
      return
    }
  
    // Filter posts based on search term (for demonstration)
    const filteredPosts = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchInput) ||
        post.excerpt.toLowerCase().includes(searchInput) ||
        post.category.toLowerCase().includes(searchInput),
    )
  
    if (filteredPosts.length === 0) {
      alert("No posts found matching your search")
    } else {
      alert(`Found ${filteredPosts.length} posts matching "${searchInput}"`)
      // In a real application, you would display the filtered posts
    }
  })
  
  // Dark mode toggle functionality
  function addDarkModeToggle() {
    // Create the toggle button
    const toggleButton = document.createElement("button")
    toggleButton.className = "btn btn-sm btn-outline-light position-fixed"
    toggleButton.style.bottom = "20px"
    toggleButton.style.right = "20px"
    toggleButton.style.zIndex = "1000"
    toggleButton.innerHTML = '<i class="bi bi-moon-stars"></i>'
    toggleButton.title = "Toggle Dark Mode"
  
    // Add the button to the body
    document.body.appendChild(toggleButton)
  
    // Add event listener
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode")
  
      // Update button icon
      if (document.body.classList.contains("dark-mode")) {
        toggleButton.innerHTML = '<i class="bi bi-sun"></i>'
      } else {
        toggleButton.innerHTML = '<i class="bi bi-moon-stars"></i>'
      }
    })
  }
  
  // Initialize the blog
  document.addEventListener("DOMContentLoaded", () => {
    displayBlogPosts()
    addDarkModeToggle()
  })
  
  /**
* Template Name: EasyFolio
* Template URL: https://bootstrapmade.com/easyfolio-bootstrap-portfolio-template/
* Updated: Feb 21 2025 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);



  const logoCard = document.getElementById("logo-card");

if (logoCard) {
  logoCard.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = logoCard.getBoundingClientRect();
    const x = ((e.clientX - (left + width / 2)) / width) * 30;
    const y = ((e.clientY - (top + height / 2)) / height) * 30;
    logoCard.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });

  logoCard.addEventListener("mouseleave", () => {
    logoCard.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}



  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', (e) => {
      if (document.querySelector('.mobile-nav-active')) {
        // Eğer tıklanan öğe bir dropdown menü değilse menüyü kapat
        if (!navmenu.parentNode.classList.contains('dropdown')) {
          mobileNavToogle();
        }
      }
    });
  });
  /**
 * Mobil cihazlarda dropdown menülerin açılıp kapanmasını sağla
 */
  document.querySelectorAll('.navmenu .dropdown > a').forEach(dropdownLink => {
    dropdownLink.addEventListener('click', function (e) {
      if (document.body.classList.contains('mobile-nav-active')) {
        e.preventDefault();
  
        const dropdown = this.parentNode;
        dropdown.classList.toggle('dropdown-active');
  
        // Icon dönüşü
        const icon = this.querySelector('.toggle-dropdown');
        if (icon) {
          icon.style.transform = dropdown.classList.contains('dropdown-active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
  
        // İçindeki UL'yi göster/gizle
        const submenu = dropdown.querySelector('ul');
        if (submenu) {
          submenu.style.display = dropdown.classList.contains('dropdown-active') ? 'block' : 'none';
        }
      }
    });
  });
  


  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// DÜZELTİLMİŞ
if (typeof PureCounter !== 'undefined') {
  new PureCounter();
}

/*Email Js*/

            window.onload = function () {
                emailjs.init(process.env.bGNfspajOuOVYcwKr); // EmailJS kullanıcı kimliği

                var form = document.getElementById("contact-form1");
                var loading = document.querySelector(".loading");
                var successMessage = document.querySelector(".sent-message");
                var errorMessage = document.querySelector(".error-message");

                // Eğer başarı mesajı div'i bulunamazsa, hata vermemesi için kontrol 
                if (!successMessage) {
                    console.error("Başarı mesajı bulunamadı! HTML içinde .sent-message öğesini kontrol edin.");
                    return;
                }

                if (!form) {
                    console.error("Form bulunamadı! ID'yi kontrol edin.");
                    return;
                }

                form.addEventListener("submit", function (event) {
                    event.preventDefault(); // Sayfanın yenilenmesini engelle

                    console.log("Form gönderiliyor...");

                    // "Yükleniyor" mesajını göster, diğerlerini gizle
                    loading?.classList.remove("d-none");
                    successMessage?.classList.add("d-none");
                    errorMessage?.classList.add("d-none");

                    emailjs.sendForm("Emitel_Contact", "template_7ibf1yf", this)
                        .then(function (response) {
                            console.log("Mesaj başarıyla gönderildi:", response);
                            
                            loading.classList.add("d-none"); // "Yükleniyor" mesajını gizle
                            successMessage.classList.remove("d-none"); // Başarı mesajını göster
                            successMessage.style.display = "block"; // **Öğe görünür hale gelsin**
                            successMessage.innerHTML = "Mesajınız başarıyla gönderildi!"; 
                        })
                        .catch(function (error) {
                            console.error("Mesaj gönderme başarısız:", error);

                            loading.classList.add("d-none"); // "Yükleniyor" mesajını gizle
                            errorMessage.classList.remove("d-none"); // Hata mesajını göster
                            errorMessage.innerHTML = "Mesaj gönderme başarısız oldu: " + error.text;
                        });


                    // Formu temizle
                    this.reset();
                });
            };

            document.getElementById('currentYear').textContent = new Date().getFullYear();
      
            // Animate counters when they come into view
            function animateCounters() {
                const counters = {
                    yearsCounter: { target: 15, suffix: '+' },
                    projectsCounter: { target: 1500, suffix: '+' },
                    countriesCounter: { target: 38, suffix: '+' },
                    satisfactionCounter: { target: 100, suffix: '%' }
                };
                
                const options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.5
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const statsSection = entry.target;
                            
                            for (const [id, data] of Object.entries(counters)) {
                                const element = document.getElementById(id);
                                const { target, suffix } = data;
                                
                                let current = 0;
                                const increment = Math.ceil(target / 30); // Divide animation into 30 steps
                                const timer = setInterval(() => {
                                    current += increment;
                                    if (current >= target) {
                                        current = target;
                                        clearInterval(timer);
                                    }
                                    element.textContent = current + suffix;
                                }, 50);
                            }
                            
                            // Stop observing after animation
                            observer.unobserve(statsSection);
                        }
                    });
                }, options);
                
                // Start observing the stats section
                const statsSection = document.querySelector('.stats-item').parentElement.parentElement.parentElement;
                observer.observe(statsSection);
            }
            
            // Initialize animations when page is loaded
            document.addEventListener('DOMContentLoaded', () => {
                animateCounters();
            });
            
            // Add active class to navbar items on click
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.addEventListener('click', function() {
                    document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
                        item.classList.remove('active');
                    });
                    this.classList.add('active');
                });
            });
            
            window.addEventListener("load", function () {
          AOS.init();
          });
      

          document.addEventListener('DOMContentLoaded', () => {
            AOS.init();
        });
          //Products Page //
          
              
       
