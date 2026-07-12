import './style.css';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', async () => {
  initI18n();
  const versionText = document.getElementById('version-text');
  const downloadBtn = document.getElementById('download-btn');

  try {
    // Fetch latest release from GitHub API
    const response = await fetch('https://api.github.com/repos/TioYaK/TibiaTracker-Releases/releases/latest');
    
    if (!response.ok) {
      throw new Error('Failed to fetch latest release');
    }

    const data = await response.json();
    
    // Find the Windows installer asset (.exe)
    const exeAsset = data.assets.find(asset => asset.name.endsWith('.exe'));
    
    if (exeAsset) {
      // Update button link and version text
      downloadBtn.href = exeAsset.browser_download_url;
      versionText.textContent = `Versão ${data.tag_name} (Automático)`;
    } else {
      versionText.textContent = 'Versão não encontrada.';
      downloadBtn.style.pointerEvents = 'none';
      downloadBtn.style.opacity = '0.5';
    }
  } catch (error) {
    // Silencia o erro no console para repositórios não encontrados ou rate limit excedido
    versionText.textContent = 'Versão 1.0 (Beta)';
    downloadBtn.href = '#';
  }
});
