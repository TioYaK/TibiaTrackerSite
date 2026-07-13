import './style.css';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', async () => {
  initI18n();
  const versionText = document.getElementById('version-text');
  const downloadBtn = document.getElementById('download-btn');

  // Masked Direct Download Logic
  downloadBtn.href = '#';
  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Altere este nome quando tiver a versão oficial
    const installerFile = 'Tibia-Tracker-Web-Setup-2.0.9.exe';
    
    // Inicia o download diretamente do próprio servidor do site (esconde o link real no hover)
    const link = document.createElement('a');
    link.href = `download/${installerFile}`;
    link.download = installerFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
