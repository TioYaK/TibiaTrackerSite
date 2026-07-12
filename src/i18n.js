const translations = {
  pt: {
    nav_resources: "Recursos",
    nav_showcase: "Galeria",
    nav_premium: "Assinar Premium",
    hero_badge: "Versão Oficial Windows",
    hero_title_1: "Evolua sua gameplay.",
    hero_title_2: "Domine sua Economia.",
    hero_subtitle: "O software definitivo para rastrear sua progressão no Tibia. Automação de Loot Split, gráficos detalhados e overlay inteligente para a sua tela de jogo.",
    hero_btn_main: "Baixar para Windows",
    hero_btn_sub: "Buscando versão...",
    hero_trust: "Seguro e leve. Nenhuma injeção de código.",
    showcase_title: "Design Incrível para suas Hunts",
    showcase_desc: "Exporte seus dados do Hunt Analyser diretamente para cards estilizados. Compartilhe no Discord com um visual impecável.",
    feat_title: "Ferramentas de Elite",
    feat_desc: "Construído do zero para maximizar sua eficiência dentro e fora do jogo.",
    feat_1_title: "Loot Splitter Integrado",
    feat_1_desc: "Cole o log da party e deixe o sistema calcular os pagamentos do banco de cada membro instantaneamente.",
    feat_2_title: "Dashboard Analítico",
    feat_2_desc: "Acompanhe seus gráficos de XP/hora, lucro mensal e histórico de suprimentos na nuvem.",
    feat_3_title: "Temas Dinâmicos",
    feat_3_desc: "Exporte seus cards em diversos temas profissionais como Cyberpunk, Abyssal ou Clássico.",
    footer_tag: "Elevando a experiência de jogadores e times.",
    footer_legal: "Legal e Suporte",
    footer_terms: "Termos e Privacidade",
    footer_copy: "© 2026 TibiaTracker. Não afiliado à CipSoft GmbH."
  },
  en: {
    nav_resources: "Features",
    nav_showcase: "Showcase",
    nav_premium: "Get Premium",
    hero_badge: "Official Windows Version",
    hero_title_1: "Evolve your gameplay.",
    hero_title_2: "Master your Economy.",
    hero_subtitle: "The ultimate software to track your Tibia progression. Loot Split automation, detailed charts, and smart overlay for your game screen.",
    hero_btn_main: "Download for Windows",
    hero_btn_sub: "Fetching version...",
    hero_trust: "Safe and lightweight. No code injection.",
    showcase_title: "Stunning Design for your Hunts",
    showcase_desc: "Export your Hunt Analyser data directly to stylized cards. Share on Discord with flawless visuals.",
    feat_title: "Elite Tools",
    feat_desc: "Built from scratch to maximize your efficiency inside and outside the game.",
    feat_1_title: "Integrated Loot Splitter",
    feat_1_desc: "Paste the party log and let the system calculate each member's bank payments instantly.",
    feat_2_title: "Analytical Dashboard",
    feat_2_desc: "Track your EXP/hour charts, monthly profit, and supply history in the cloud.",
    feat_3_title: "Dynamic Themes",
    feat_3_desc: "Export your cards in several professional themes like Cyberpunk, Abyssal, or Classic.",
    footer_tag: "Elevating the experience of players and teams.",
    footer_legal: "Legal & Support",
    footer_terms: "Terms & Privacy",
    footer_copy: "© 2026 TibiaTracker. Not affiliated with CipSoft GmbH."
  },
  pl: {
    nav_resources: "Funkcje",
    nav_showcase: "Galeria",
    nav_premium: "Kup Premium",
    hero_badge: "Oficjalna Wersja Windows",
    hero_title_1: "Rozwiń swoją rozgrywkę.",
    hero_title_2: "Opanuj swoją Ekonomię.",
    hero_subtitle: "Najlepsze oprogramowanie do śledzenia postępów w Tibii. Automatyzacja Loot Split, szczegółowe wykresy i inteligentna nakładka na ekran gry.",
    hero_btn_main: "Pobierz dla Windows",
    hero_btn_sub: "Pobieranie wersji...",
    hero_trust: "Bezpieczny i lekki. Brak wstrzykiwania kodu.",
    showcase_title: "Niesamowity Design dla twoich Huntów",
    showcase_desc: "Eksportuj dane z Hunt Analysera bezpośrednio do stylizowanych kart. Udostępniaj na Discordzie z nienagannym wyglądem.",
    feat_title: "Elitarne Narzędzia",
    feat_desc: "Zbudowany od podstaw, aby zmaksymalizować twoją wydajność w grze i poza nią.",
    feat_1_title: "Zintegrowany Loot Splitter",
    feat_1_desc: "Wklej log party i pozwól systemowi natychmiast obliczyć płatności bankowe każdego członka.",
    feat_2_title: "Analityczny Dashboard",
    feat_2_desc: "Śledź wykresy EXP/godzinę, miesięczne zyski i historię zapasów w chmurze.",
    feat_3_title: "Dynamiczne Motywy",
    feat_3_desc: "Eksportuj swoje karty w wielu profesjonalnych motywach, takich jak Cyberpunk, Abyssal lub Classic.",
    footer_tag: "Podnoszenie doświadczeń graczy i drużyn.",
    footer_legal: "Kwestie Prawne i Wsparcie",
    footer_terms: "Regulamin i Prywatność",
    footer_copy: "© 2026 TibiaTracker. Niepowiązany z CipSoft GmbH."
  }
};

export function setLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem('lang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Check if element has child nodes that aren't text (like SVG or SPAN) we want to preserve
      // For simplicity in this landing page, we can set innerHTML safely if there are no complex structures,
      // but for the hero title which has a span, we need to be careful.
      if (key === 'hero_title_1' || key === 'hero_title_2') {
         el.innerHTML = translations[lang][key];
      } else if(el.tagName === 'A' && el.querySelector('svg')) {
         const svg = el.querySelector('svg').outerHTML;
         el.innerHTML = svg + ' ' + translations[lang][key];
      } else {
         el.textContent = translations[lang][key];
      }
    }
  });

  // Update active flag state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

export function initI18n() {
  const savedLang = localStorage.getItem('lang') || 'pt';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
}
