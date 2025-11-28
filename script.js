const calendar = document.querySelector('#calendar');
const modal = document.querySelector('#entry-modal');
const modalDate = modal.querySelector('.modal__date');
const modalTitle = modal.querySelector('.modal__title');
const modalBody = modal.querySelector('.modal__body');
const modalClose = modal.querySelector('.modal__close');
const cardTemplate = document.querySelector('#day-card');

const entries = Array.from({ length: 25 }, (_, index) => {
  const day = index + 1;
  return {
    day,
    title: `Day ${day}`,
    message: `A warm wish for December ${day}. Take a break, enjoy a treat, or share gratitude with someone today.`,
  };
});

function isUnlocked(day) {
  const now = new Date();
  // Unlock when current month is December 2025 and the day has been reached (inclusive).
  const unlockDate = new Date(2025, 11, day); // months are zero-indexed
  return now >= unlockDate;
}

function renderCalendar() {
  const fragment = document.createDocumentFragment();

  entries.forEach((entry) => {
    const card = cardTemplate.content.cloneNode(true).firstElementChild;
    card.dataset.day = entry.day;
    card.querySelector('.card__label').textContent = 'Open';
    card.querySelector('.card__day').textContent = entry.day;

    const unlocked = isUnlocked(entry.day);
    card.classList.toggle('is-locked', !unlocked);
    card.querySelector('.card__status').textContent = unlocked ? 'Ready to open' : 'Locked until the day arrives';

    card.addEventListener('click', () => openEntry(entry, unlocked));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openEntry(entry, unlocked);
      }
    });

    fragment.appendChild(card);
  });

  calendar.appendChild(fragment);
}

function openEntry(entry, unlocked) {
  if (!unlocked) return;

  modalDate.textContent = `December ${entry.day}, 2025`;
  modalTitle.textContent = entry.title;
  modalBody.textContent = entry.message;
  modal.showModal();
}

function closeModal() {
  if (modal.open) {
    modal.close();
  }
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  // Close when clicking the backdrop (dialog element itself)
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

renderCalendar();
