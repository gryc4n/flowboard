const checklistBtn = document.getElementById('checklist-btn');
const notesBtn = document.getElementById('notes-btn');
const calendarBtn = document.getElementById('calendar-btn');

const checklistView = document.querySelector('.checklist-view');
const notesView = document.querySelector('.notes-view');
const calendarView = document.querySelector('.calendar-view');

checklistBtn.addEventListener('click', () => {
    checklistView.style.display = 'flex';
    notesView.style.display = 'none';
    calendarView.style.display = 'none';
})

notesBtn.addEventListener('click', () => {
    checklistView.style.display = 'none';
    notesView.style.display = 'flex';
    calendarView.style.display = 'none';
})

calendarBtn.addEventListener('click', () => {
    checklistView.style.display = 'none';
    notesView.style.display = 'none';
    calendarView.style.display = 'flex';
})