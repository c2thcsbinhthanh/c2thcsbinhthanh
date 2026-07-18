
    function showPage(id) {
      document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
      });

      document.getElementById(id).classList.add("active");

      document.querySelectorAll(".navbar button").forEach(function(btn) {
        btn.classList.remove("active-nav");
      });
      const currentBtn = document.getElementById("btn-" + id);
      if (currentBtn) {
        currentBtn.classList.add("active-nav");
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    function showYear(pageId, year) {
      const pageContainer = document.getElementById(pageId);
      
      pageContainer.querySelectorAll(".year-content").forEach(function(content) {
        content.classList.remove("active-year");
      });

      const selectedYearContent = document.getElementById(pageId + "-" + year);
      if (selectedYearContent) {
        selectedYearContent.classList.add("active-year");
      }

      pageContainer.querySelectorAll(".sub-navbar button").forEach(function(btn) {
        btn.classList.remove("active-sub");
      });

      const clickedBtn = pageContainer.querySelector(".btn-" + pageId + "-" + year);
      if (clickedBtn) {
        clickedBtn.classList.add("active-sub");
      }
    }
  