<script>
  function showPage(pageId) {
    // Hide all sections
    document.querySelectorAll('main section').forEach(sec => sec.classList.add('hidden'));
    // Show the clicked section
    document.getElementById(pageId).classList.remove('hidden');
  }

  // Show Home by default when the page loads
  window.onload = function() {
    showPage('home');
  };
</script>
