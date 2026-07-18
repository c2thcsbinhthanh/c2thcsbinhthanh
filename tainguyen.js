
          function filterGrade(className, currentButton) {
            const buttons = document.querySelectorAll('.btn-grade');
            buttons.forEach(btn => {
              btn.style.background = 'white';
              btn.style.color = '#1565C0';
            });
            currentButton.style.background = '#1565C0';
            currentButton.style.color = 'white';

            const items = document.querySelectorAll('.resource-item');
            items.forEach(item => {
              item.style.display = (className === 'all' || item.classList.contains(className)) ? 'block' : 'none';
            });
          }
        