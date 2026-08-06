/* ============================================================
   OmniKar Site — Multi-language (PT / EN / ES)
   ============================================================ */

var I18N = (function () {
  'use strict';

  var translations = {
    pt: {
      'nav.home': 'Início',
      'nav.download': 'Descarregar',
      'nav.changelog': 'Novidades',

      'hero.title': 'O teu assistente de <span>manutenção automóvel</span>',
      'hero.sub': 'Gere todas as tuas viaturas, manutenções, combustível, inspeções e muito mais. Com GPS tracking, backup na cloud e relatórios PDF.',
      'hero.cta': 'Descarregar APK',

      'features.title': 'Funcionalidades',
      'features.sub': 'Tudo o que precisas para manter o teu carro em dia.',

      'feat.vehicles.title': 'Gestão de Viaturas',
      'feat.vehicles.desc': 'Adiciona todos os teus veículos com quilometragem, matrícula, VIN, marca, modelo e ano.',

      'feat.maintenance.title': 'Manutenção Programada',
      'feat.maintenance.desc': 'Define intervalos por km ou meses. O OmniKar alerta-te automaticamente quando se aproxima a próxima intervenção.',

      'feat.fuel.title': 'Registo de Combustível',
      'feat.fuel.desc': 'Regista abastecimentos com custo e litros. Cálculo automático de consumo real entre depósitos cheios.',

      'feat.gps.title': 'GPS Tracking em Tempo Real',
      'feat.gps.desc': 'Regista a localização do veículo a cada 100m. Visualiza viagens, estacionamentos e histórico no mapa interativo.',

      'feat.cloud.title': 'Backup na Cloud',
      'feat.cloud.desc': 'Faz backup de todos os dados para o teu Google Drive pessoal. Sincroniza entre dispositivos com a mesma conta Google.',

      'feat.stats.title': 'Estatísticas e Relatórios',
      'feat.stats.desc': 'Gráficos interativos de custos por km, consumo médio e distribuição de despesas. Gera relatórios PDF completos.',

      'feat.alerts.title': 'Alertas Inteligentes',
      'feat.alerts.desc': 'Alertas de manutenção programada, inspeções (IPO), seguros e impostos (IUC). Nunca mais te esqueces de uma renovação.',

      'feat.tires.title': 'Gestão de Pneus',
      'feat.tires.desc': 'Gere conjuntos de pneus e histórico de instalações por viatura.',

      'feat.multi.title': 'Multi-idioma e Tema Escuro',
      'feat.multi.desc': 'Interface em Português, Inglês e Espanhol com tema escuro otimizado para uso noturno.',

      'dl.title': 'Descarregar OmniKar',
      'dl.latest': 'Última versão',
      'dl.btn': 'Descarregar APK',
      'dl.version': 'Versão',
      'dl.size': 'Tamanho',
      'dl.released': 'Publicado em',
      'dl.requirements': 'Requisitos',
      'dl.req.android': 'Android 8.0 (API 23) ou superior',
      'dl.req.storage': '~100 MB de espaço livre',
      'dl.req.gps': 'GPS (opcional, para tracking)',
      'dl.install': 'Como instalar',
      'dl.install.1': 'Descarrega o ficheiro <strong>.apk</strong> acima',
      'dl.install.2': 'No teu Android, vai a <strong>Definições > Segurança</strong> e ativa <strong>"Origens desconhecidas"</strong>',
      'dl.install.3': 'Abre o ficheiro APK e segue as instruções de instalação',
      'dl.install.4': 'Abre o OmniKar e faz login com a tua conta Google para ativar a sincronização',
      'dl.filename': 'Nome do ficheiro',
      'dl.sha': 'SHA-256',

      'changelog.title': 'Novidades',

      'footer.text': 'OmniKar — O teu assistente de manutenção automóvel. Sem anúncios. Os teus dados são teus.'
    },

    en: {
      'nav.home': 'Home',
      'nav.download': 'Download',
      'nav.changelog': 'Changelog',

      'hero.title': 'Your <span>vehicle maintenance</span> assistant',
      'hero.sub': 'Manage all your vehicles, maintenance, fuel, inspections and more. With GPS tracking, cloud backup and PDF reports.',
      'hero.cta': 'Download APK',

      'features.title': 'Features',
      'features.sub': 'Everything you need to keep your car in shape.',

      'feat.vehicles.title': 'Vehicle Management',
      'feat.vehicles.desc': 'Add all your vehicles with mileage, license plate, VIN, brand, model and year.',

      'feat.maintenance.title': 'Scheduled Maintenance',
      'feat.maintenance.desc': 'Set intervals by km or months. OmniKar automatically alerts you when the next service approaches.',

      'feat.fuel.title': 'Fuel Tracking',
      'feat.fuel.desc': 'Log fill-ups with cost and liters. Automatic real consumption calculation between full tanks.',

      'feat.gps.title': 'Real-Time GPS Tracking',
      'feat.gps.desc': 'Records vehicle location every 100m. View trips, parking and history on the interactive map.',

      'feat.cloud.title': 'Cloud Backup',
      'feat.cloud.desc': 'Back up all data to your personal Google Drive. Sync between devices with the same Google account.',

      'feat.stats.title': 'Statistics & Reports',
      'feat.stats.desc': 'Interactive charts for cost per km, average consumption and expense distribution. Generate complete PDF reports.',

      'feat.alerts.title': 'Smart Alerts',
      'feat.alerts.desc': 'Alerts for scheduled maintenance, inspections, insurance and road tax. Never miss a renewal again.',

      'feat.tires.title': 'Tire Management',
      'feat.tires.desc': 'Manage tire sets and installation history per vehicle.',

      'feat.multi.title': 'Multi-language & Dark Theme',
      'feat.multi.desc': 'Interface in English, Portuguese and Spanish with a dark theme optimized for night use.',

      'dl.title': 'Download OmniKar',
      'dl.latest': 'Latest version',
      'dl.btn': 'Download APK',
      'dl.version': 'Version',
      'dl.size': 'Size',
      'dl.released': 'Released',
      'dl.requirements': 'Requirements',
      'dl.req.android': 'Android 8.0 (API 23) or higher',
      'dl.req.storage': '~100 MB free space',
      'dl.req.gps': 'GPS (optional, for tracking)',
      'dl.install': 'How to install',
      'dl.install.1': 'Download the <strong>.apk</strong> file above',
      'dl.install.2': 'On your Android, go to <strong>Settings > Security</strong> and enable <strong>"Unknown sources"</strong>',
      'dl.install.3': 'Open the APK file and follow the installation instructions',
      'dl.install.4': 'Open OmniKar and sign in with your Google account to enable sync',
      'dl.filename': 'Filename',
      'dl.sha': 'SHA-256',

      'changelog.title': 'Changelog',

      'footer.text': 'OmniKar — Your vehicle maintenance assistant. No ads. Your data is yours.'
    },

    es: {
      'nav.home': 'Inicio',
      'nav.download': 'Descargar',
      'nav.changelog': 'Novedades',

      'hero.title': 'Tu asistente de <span>mantenimiento automóvil</span>',
      'hero.sub': 'Gestiona todos tus vehículos, mantenimiento, combustible, inspecciones y mucho más. Con GPS tracking, backup en la nube e informes PDF.',
      'hero.cta': 'Descargar APK',

      'features.title': 'Funcionalidades',
      'features.sub': 'Todo lo que necesitas para mantener tu coche al día.',

      'feat.vehicles.title': 'Gestión de Vehículos',
      'feat.vehicles.desc': 'Añade todos tus vehículos con kilometraje, matrícula, VIN, marca, modelo y año.',

      'feat.maintenance.title': 'Mantenimiento Programado',
      'feat.maintenance.desc': 'Define intervalos por km o meses. OmniKar te avisa automáticamente cuando se acerca la próxima intervención.',

      'feat.fuel.title': 'Registro de Combustible',
      'feat.fuel.desc': 'Registra repostajes con coste y litros. Cálculo automático del consumo real entre depósitos llenos.',

      'feat.gps.title': 'GPS Tracking en Tiempo Real',
      'feat.gps.desc': 'Registra la ubicación del vehículo cada 100m. Visualiza viajes, estacionamientos e historial en el mapa interactivo.',

      'feat.cloud.title': 'Backup en la Nube',
      'feat.cloud.desc': 'Haz backup de todos los datos en tu Google Drive personal. Sincroniza entre dispositivos con la misma cuenta de Google.',

      'feat.stats.title': 'Estadísticas e Informes',
      'feat.stats.desc': 'Gráficos interactivos de coste por km, consumo medio y distribución de gastos. Genera informes PDF completos.',

      'feat.alerts.title': 'Alertas Inteligentes',
      'feat.alerts.desc': 'Alertas de mantenimiento programado, inspecciones, seguros e impuestos. Nunca más olvides una renovación.',

      'feat.tires.title': 'Gestión de Neumáticos',
      'feat.tires.desc': 'Gestiona conjuntos de neumáticos e historial de instalaciones por vehículo.',

      'feat.multi.title': 'Multi-idioma y Tema Oscuro',
      'feat.multi.desc': 'Interfaz en Español, Inglés y Portugués con tema oscuro optimizado para uso nocturno.',

      'dl.title': 'Descargar OmniKar',
      'dl.latest': 'Última versión',
      'dl.btn': 'Descargar APK',
      'dl.version': 'Versión',
      'dl.size': 'Tamaño',
      'dl.released': 'Publicado',
      'dl.requirements': 'Requisitos',
      'dl.req.android': 'Android 8.0 (API 23) o superior',
      'dl.req.storage': '~100 MB de espacio libre',
      'dl.req.gps': 'GPS (opcional, para tracking)',
      'dl.install': 'Cómo instalar',
      'dl.install.1': 'Descarga el archivo <strong>.apk</strong> de arriba',
      'dl.install.2': 'En tu Android, ve a <strong>Ajustes > Seguridad</strong> y activa <strong>"Orígenes desconocidos"</strong>',
      'dl.install.3': 'Abre el archivo APK y sigue las instrucciones de instalación',
      'dl.install.4': 'Abre OmniKar e inicia sesión con tu cuenta de Google para activar la sincronización',
      'dl.filename': 'Nombre del archivo',
      'dl.sha': 'SHA-256',

      'changelog.title': 'Novedades',

      'footer.text': 'OmniKar — Tu asistente de mantenimiento automóvil. Sin anuncios. Tus datos son tuyos.'
    }
  };

  var _lang = localStorage.getItem('omnikar-lang') || 'pt';

  function getLang() { return _lang; }

  function setLang(lang) {
    _lang = lang;
    localStorage.setItem('omnikar-lang', lang);
    apply();
    updateSwitcher();
    if (typeof renderHeader === 'function') renderHeader();
    if (typeof renderFooter === 'function') renderFooter();
  }

  function t(key) {
    return (translations[_lang] && translations[_lang][key]) || translations['pt'][key] || key;
  }

  var _switcherCallback = null;

  function onSwitcherUpdate(fn) { _switcherCallback = fn; }

  function updateSwitcher() {
    if (_switcherCallback) _switcherCallback(_lang);
  }

  function apply() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      var value = translations[_lang][key] || translations['pt'][key] || key;
      // If value contains HTML tags like <span>, use innerHTML; otherwise textContent
      if (value.indexOf('<') !== -1 && value.indexOf('>') !== -1) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }

    // data-i18n-placeholder
    var phs = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < phs.length; j++) {
      var pe = phs[j];
      var pk = pe.getAttribute('data-i18n-placeholder');
      pe.setAttribute('placeholder', translations[_lang][pk] || pk);
    }

    // data-i18n-attr="attrName"
    var attrs = document.querySelectorAll('[data-i18n-attr]');
    for (var k = 0; k < attrs.length; k++) {
      var ae = attrs[k];
      var attrName = ae.getAttribute('data-i18n-attr');
      var attrKey = ae.getAttribute('data-i18n');
      if (attrName && attrKey) {
        ae.setAttribute(attrName, translations[_lang][attrKey] || attrKey);
      }
    }

    document.documentElement.lang = _lang;
  }

  return {
    get: getLang,
    set: setLang,
    t: t,
    apply: apply,
    onSwitcherUpdate: onSwitcherUpdate,
    updateSwitcher: updateSwitcher,
    langs: Object.keys(translations)
  };
})();
