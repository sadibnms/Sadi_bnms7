// VPN Page Specific Functions
function initVPNDownloadTracking() {
  document.querySelectorAll('.tech-button').forEach(button => {
    button.addEventListener('click', function() {
      const vpnName = this.closest('.tech-card') ?
        this.closest('.tech-card').querySelector('h4').textContent :
        this.closest('.table-row').querySelector('.vpn-name span').textContent;
      console.log(`Download initiated: ${vpnName}`);
      // Add analytics here if needed
    });
  });
}

function updateCurrentDate() {
  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    dateElement.textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  updateCurrentDate();
  initVPNDownloadTracking();
  
  // Back to Top Button (if needed)
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.opacity = (window.scrollY > 300) ? '1' : '0';
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
