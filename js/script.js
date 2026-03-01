function showPage(pageId) {
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}
