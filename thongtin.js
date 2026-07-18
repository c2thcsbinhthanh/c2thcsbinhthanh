
          function filterNews(category, currentButton) {
            const buttons = document.querySelectorAll('.btn-filter');
            buttons.forEach(btn => btn.classList.remove('active'));
            currentButton.classList.add('active');

            const items = document.querySelectorAll('.news-item');
            items.forEach(item => {
              item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
            });
          }
        