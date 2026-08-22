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
      'nav.guide': 'Como funciona',
      'nav.privacy': 'Privacidade',

      'hero.title': 'O teu assistente de <span>manutenção automóvel</span>',
      'hero.sub': 'Gere todas as tuas viaturas, manutenções, combustível, inspeções e muito mais. Com GPS tracking, backup na cloud e relatórios PDF.',
      'hero.cta': 'Descarregar APK',
      'home.playNote': 'ℹ️ O OmniKar está disponível na <a href="https://play.google.com/store/apps/details?id=com.companyname.OmniKar" target="_blank" rel="noopener">Google Play</a> (método recomendado). O download do APK destina-se apenas a dispositivos filtrados pela Play Store.',
      'home.guide.title': '📘 Aprende a usar o OmniKar',
      'home.guide.desc': 'Guia completo: agendamentos, manutenção programada, GPS tracking, reparações e toda a configuração da app, explicada passo a passo.',
      'home.guide.cta': 'Ver guia',

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
      'dl.playNote': 'ℹ️ O OmniKar está disponível na <a href="https://play.google.com/store/apps/details?id=com.companyname.OmniKar" target="_blank" rel="noopener">Google Play</a> (método recomendado). Este APK destina-se apenas a <strong>dispositivos filtrados ou não suportados</strong> pela Play Store.',
      'dl.guideLink': '📘 Consultar o guia <strong>Como funciona</strong> para aprenderes a usar o OmniKar →',

      'changelog.title': 'Novidades',

      'guide.title': 'Como funciona — OmniKar',
      'guide.hero': 'Como funciona',
      'guide.heroSub': 'Tudo o que precisas saber para usar o OmniKar no dia a dia.',
      'guide.s1.title': 'Escolher uma viatura',
      'guide.s1.p1': 'Ao abrir o OmniKar vês a <strong>lista de viaturas</strong>. Toca numa viatura para abrir o ecrã completo com todos os separadores: Dashboard, Manutenção, Agendamentos, Combustível, Reparações, GPS e muito mais.',
      'guide.s1.p2': '<strong>Tudo no OmniKar funciona sobre a viatura que está aberta.</strong> Agendamentos, manutenções, combustível, GPS — tudo fica associado a essa viatura.',
      'guide.s1.tip': '💡 Dica — Viatura de arranque:',
      'guide.s1.tipText': 'Nas Definições, ativa "Viatura de arranque" e escolhe a viatura + ecrã (Dashboard ou HeadUnit). A app abre direto nessa viatura sem passares pela lista.',
      'guide.s2.title': 'Manutenção programada',
      'guide.s2.p1': 'Cria regras para manutenções periódicas como "óleo a cada 15.000 km" ou "revisão a cada 12 meses". O OmniKar alerta-te automaticamente quando se aproxima a data ou quilometragem.',
      'guide.s2.warn': '⚠️ Aviso: faltam ≤ 2.000 km ou ≤ 60 dias',
      'guide.s2.urgent': '🚨 Urgente: faltam ≤ 500 km ou ≤ 15 dias',
      'guide.s2.flow': 'Fluxo completo',
      'guide.s2.step1': 'Vai ao separador <strong>Agendamentos</strong> e toca em <strong>"+ Adicionar Agendamento"</strong>. Escolhe o tipo (óleo, pneus, travões…) e define o intervalo em km ou meses.',
      'guide.s2.step2': 'O OmniKar <strong>alerta automaticamente</strong> no Dashboard quando a intervenção se aproxima (≤ 2.000 km ou ≤ 60 dias).',
      'guide.s2.step3': 'Quando fizeres a manutenção, toca no botão <strong>"Registar"</strong> no cartão do agendamento. Abre o formulário de manutenção já pré-preenchido com o tipo e quilometragem.',
      'guide.s2.step4': 'Preenche os detalhes (custo, oficina, notas, documentos) e grava.',
      'guide.s2.step5': '<strong>O agendamento antigo é automaticamente apagado</strong> e, com o switch "Agendar próxima manutenção" ligado, <strong>é criado um novo agendamento</strong> com o próximo intervalo.',
      'guide.s3.title': 'Manutenção vs Reparação',
      'guide.s3.p1': 'O OmniKar distingue dois tipos de registo:',
      'guide.s3.maint': '🔧 Manutenção',
      'guide.s3.m1': '<strong>Registos periódicos</strong> baseados em agendamentos',
      'guide.s3.m2': 'Campos: tipo, data, km, custo, oficina, notas',
      'guide.s3.m3': 'Podes anexar <strong>documentos e fotos</strong> (faturas, relatórios)',
      'guide.s3.repair': '🛠️ Reparação',
      'guide.s3.r1': '<strong>Avarias e intervenções</strong> pontuais no veículo',
      'guide.s3.r2': 'Campos: tipo, data, km, custo, oficina, notas <strong>+ peças trocadas</strong>',
      'guide.s3.r3': 'Check/follow-up opcional: define um <strong>lembrete de verificação</strong> (data ou km) para confirmar que a reparação ficou bem',
      'guide.s4.title': 'GPS Tracking',
      'guide.s4.p1': 'O GPS começa a registar <strong>automaticamente</strong> assim que abres uma viatura. Não precisas de fazer nada — os pontos vão sendo guardados no teu Google Drive.',
      'guide.s4.recording': '📡 Registo de pontos',
      'guide.s4.r1': 'Um ponto GPS é registado a cada <strong>100 metros</strong> percorridos',
      'guide.s4.r2': 'Cada ponto guarda: coordenadas, velocidade (km/h), rumo e hora',
      'guide.s4.r3': 'Upload automático para a nuvem a cada <strong>3 segundos (≤ 100 km/h)</strong> ou <strong>10 segundos (> 100 km/h)</strong>',
      'guide.s4.trips': '🗺️ Viagens',
      'guide.s4.t1': 'Os pontos são agrupados em <strong>viagens</strong> com início e fim automáticos',
      'guide.s4.t2': '🟢 Ponto inicial | 🔴 Ponto final | 🟠 Estacionamento (botão "Park here" no HeadUnit)',
      'guide.s4.t3': 'Se reabrires a viatura em <strong>menos de 30 minutos</strong>, a viagem continua (não começa uma nova)',
      'guide.s4.viewing': '👁️ Visualizar no mapa',
      'guide.s4.v1': 'Vai ao separador <strong>Tracking</strong> (tab do fundo da app, ícone 📍)',
      'guide.s4.v2': 'Escolhe a viatura e filtra por <strong>Live</strong> (tempo real), <strong>viagens</strong>, <strong>estacionamento</strong> ou <strong>antigos</strong>',
      'guide.s4.v3': 'Modo <strong>Live</strong> segue a posição atual no mapa',
      'guide.s4.tip': '💡 Privacidade:',
      'guide.s4.tipText': 'Os dados de localização são guardados na <strong>pasta privada da app</strong> no teu Google Drive. Só tu tens acesso. Sem servidores externos.',
      'guide.s4.endTitle': '🏁 Como termina uma viagem:',
      'guide.s4.endText': 'A viagem termina de duas formas — <strong>botão 🅿️ Park here</strong> (responsabilidade do utilizador) ou <strong>automaticamente após X min imóvel</strong> (configurável nas Definições: 3, 5 ou 10 min). Semáforos e trânsito não contam — o contador só avança com o veículo parado sem qualquer movimento.',
      'guide.s5.title': 'Switch "Atualizar KM via GPS"',
      'guide.s5.p1': 'Nas <strong>Definições</strong>, encontras o switch <strong>"Atualizar KM via GPS"</strong>. Ele controla se o kilometragem da viatura é guardada automaticamente na base de dados enquanto conduzes.',
      'guide.s5.on': '🟢 Ligado',
      'guide.s5.on1': 'A cada <strong>1 km</strong> percorrido, o KM da viatura é <strong>atualizado na base de dados</strong>',
      'guide.s5.on2': 'O novo KM aparece no Dashboard, no HeadUnit, nas estatísticas e nos PDFs',
      'guide.s5.on3': 'Consome mais bateria — recomendado para viagens longas',
      'guide.s5.off': '⚫ Desligado (padrão)',
      'guide.s5.off1': 'O GPS <strong>não guarda</strong> nada na base de dados',
      'guide.s5.off2': 'O KM real aparece <strong>apenas no ecrã HeadUnit</strong> (tempo real, sem persistência)',
      'guide.s5.note': 'ℹ️ Os pontos GPS para a nuvem (Google Drive) <strong>funcionam sempre</strong>, com ou sem o switch. O switch controla apenas se o KM é guardado na base de dados local.',
      'guide.s6.title': 'Fluxo rápido (resumo)',
      'guide.s6.step1': '<strong>Abre uma viatura</strong> — toca nela na lista principal (ou configura a viatura de arranque nas Definições)',
      'guide.s6.step2': '<strong>Cria agendamentos</strong> — define intervalos para manutenções periódicas e deixa os alertas trabalhar por ti',
      'guide.s6.step3': '<strong>Regista manutenções e reparações</strong> — a partir dos agendamentos (botão "Registar") ou manualmente',
      'guide.s6.step4': '<strong>Ativa o GPS</strong> — liga o switch "Atualizar KM via GPS" se quiseres quilometragem automática; o tracking no mapa funciona sempre',
      'guide.s6.step5': '<strong>Consulta o histórico</strong> — vê o mapa de viagens no Tracking, os custos nas Estatísticas, e gera relatórios PDF',

      'privacy.title': 'Privacidade — OmniKar',
      'privacy.hero': 'Privacidade',
      'privacy.heroSub': 'Os teus dados são teus. Sempre.',
      'privacy.s1.title': 'Onde ficam os teus dados',
      'privacy.s1.p1': 'O OmniKar guarda os dados em <strong>dois locais</strong> — nenhum deles é um servidor externo gerido pelo desenvolvedor:',
      'privacy.s1.li1': '<strong>No teu dispositivo</strong> — todos os dados da app (viaturas, manutenções, combustível, inspeções, seguros, impostos, pneus, donos, agendamentos) são guardados numa base de dados <strong>SQLite local</strong>. Só tu, com o teu telemóvel, tens acesso.',
      'privacy.s1.li2': '<strong>No teu Google Drive pessoal</strong> — quando fazes login com a tua conta Google, o OmniKar guarda uma cópia de segurança (backup) e as localizações GPS na <strong>pasta privada da app (<code>appDataFolder</code>)</strong> do teu próprio Drive. Esta pasta é invisível na interface normal do Google Drive — só a própria app OmniKar (com a tua conta) lhe acede.',
      'privacy.s2.title': 'Sem servidores externos',
      'privacy.s2.p1': '<strong>O OmniKar não usa servidores externos.</strong> Não há uma base de dados na cloud gerida por mim. Não há logs de utilização, análises de tracking ou partilha de dados com terceiros.',
      'privacy.s2.p2': 'O único acesso remoto que a app faz é à <strong>tua própria</strong> conta Google Drive — e apenas à pasta privada da app (<code>drive.appdata</code>).',
      'privacy.s2.p3': '<strong>Eu, como desenvolvedor, não tenho acesso aos teus dados.</strong> Não os vejo, não os recolho e não faço gestão dos mesmos. Tu és o único proprietário e responsável pelos teus dados.',
      'privacy.s3.title': 'Não visível no Google Drive',
      'privacy.s3.p1': 'Os ficheiros do OmniKar na nuvem estão na <strong>pasta privada da app</strong> (<code>appDataFolder</code>). Esta pasta:',
      'privacy.s3.li1': 'Não aparece quando abres o Google Drive no browser ou na app',
      'privacy.s3.li2': 'Só é acedida pela app OmniKar com a tua conta Google',
      'privacy.s3.li3': 'Não conta para o espaço de armazenamento do teu Drive',
      'privacy.s4.title': 'Como apagar os teus dados',
      'privacy.s4.cloud': '☁️ Apagar os dados da nuvem',
      'privacy.s4.p1': 'Vai às <strong>Definições → Nuvem → "Apagar dados da nuvem"</strong>. Isto remove <strong>tudo</strong> o que está no Google Drive:',
      'privacy.s4.li1': 'O ficheiro de backup completo',
      'privacy.s4.li2': '<strong>Todas as localizações GPS</strong> de todas as viaturas',
      'privacy.s4.p2': '<strong>Nada fica para trás.</strong> Esta ação não pode ser desfeita.',
      'privacy.s4.local': '📱 Apagar os dados do dispositivo',
      'privacy.s4.p3': 'Para remover os dados locais (app), <strong>desinstala o OmniKar</strong> do teu dispositivo Android. Isto apaga a base de dados SQLite e todos os ficheiros da app no telemóvel.',
      'privacy.s4.note': '⚠️ <strong>Importante:</strong> apagar a nuvem <strong>não</strong> apaga os dados locais (viaturas, manutenções, etc.). Desinstalar a app <strong>não</strong> apaga os dados que estão no Google Drive. Se quiseres remover <strong>tudo</strong>, faz as duas ações: apaga da nuvem pela app e depois desinstala.',
      'privacy.s5.title': 'Resumo',
      'privacy.s5.p1': 'O OmniKar foi construído com o princípio de que <strong>os teus dados são teus</strong>:',
      'privacy.s5.li1': '✅ Sem servidores externos — tudo no teu dispositivo ou no teu Google Drive',
      'privacy.s5.li2': '✅ Sem anúncios — a app não recolhe nem partilha dados para publicidade',
      'privacy.s5.li3': '✅ Sem tracking — a app não monitoriza o teu comportamento nem envia análises',
      'privacy.s5.li4': '✅ Tu controlas — podes apagar os teus dados a qualquer momento',
      'privacy.s5.li5': '✅ O desenvolvedor não vê nem gere os teus dados',

      'footer.text': 'OmniKar — O teu assistente de manutenção automóvel. Sem anúncios. Os teus dados são teus.'
    },

    en: {
      'nav.home': 'Home',
      'nav.download': 'Download',
      'nav.changelog': 'Changelog',
      'nav.guide': 'How it works',
      'nav.privacy': 'Privacy',

      'hero.title': 'Your <span>vehicle maintenance</span> assistant',
      'hero.sub': 'Manage all your vehicles, maintenance, fuel, inspections and more. With GPS tracking, cloud backup and PDF reports.',
      'hero.cta': 'Download APK',
      'home.playNote': 'ℹ️ OmniKar is available on <a href="https://play.google.com/store/apps/details?id=com.companyname.OmniKar" target="_blank" rel="noopener">Google Play</a> (recommended). The APK download is only for devices filtered by the Play Store.',
      'home.guide.title': '📘 Learn how to use OmniKar',
      'home.guide.desc': 'Complete guide: schedules, maintenance, GPS tracking, repairs and all app settings, explained step by step.',
      'home.guide.cta': 'View guide',

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
      'dl.playNote': 'ℹ️ OmniKar is available on <a href="https://play.google.com/store/apps/details?id=com.companyname.OmniKar" target="_blank" rel="noopener">Google Play</a> (recommended). This APK is only for <strong>filtered or unsupported devices</strong> on the Play Store.',
      'dl.guideLink': '📘 Check the <strong>How it works</strong> guide to learn how to use OmniKar →',

      'changelog.title': 'Changelog',

      'guide.title': 'How it works — OmniKar',
      'guide.hero': 'How it works',
      'guide.heroSub': 'Everything you need to know to use OmniKar every day.',
      'guide.s1.title': 'Select a vehicle',
      'guide.s1.p1': 'When you open OmniKar you see the <strong>vehicle list</strong>. Tap a vehicle to open the full screen with all tabs: Dashboard, Maintenance, Schedules, Fuel, Repairs, GPS and much more.',
      'guide.s1.p2': '<strong>Everything in OmniKar works on the currently open vehicle.</strong> Schedules, maintenance, fuel, GPS — everything is tied to that vehicle.',
      'guide.s1.tip': '💡 Tip — Startup vehicle:',
      'guide.s1.tipText': 'In Settings, enable "Startup vehicle" and choose the vehicle + screen (Dashboard or HeadUnit). The app opens directly on that vehicle without going through the list.',
      'guide.s2.title': 'Scheduled maintenance',
      'guide.s2.p1': 'Create rules for periodic maintenance like "oil every 15,000 km" or "service every 12 months". OmniKar automatically alerts you when the date or mileage approaches.',
      'guide.s2.warn': '⚠️ Warning: ≤ 2,000 km or ≤ 60 days remaining',
      'guide.s2.urgent': '🚨 Urgent: ≤ 500 km or ≤ 15 days remaining',
      'guide.s2.flow': 'Full flow',
      'guide.s2.step1': 'Go to the <strong>Schedules</strong> tab and tap <strong>"+ Add Schedule"</strong>. Choose the type (oil, tires, brakes…) and set the interval in km or months.',
      'guide.s2.step2': 'OmniKar <strong>automatically alerts</strong> you on the Dashboard when the service approaches (≤ 2,000 km or ≤ 60 days).',
      'guide.s2.step3': 'When the service is done, tap the <strong>"Register"</strong> button on the schedule card. A pre-filled maintenance form opens with the type and mileage.',
      'guide.s2.step4': 'Fill in the details (cost, workshop, notes, documents) and save.',
      'guide.s2.step5': '<strong>The old schedule is automatically deleted</strong> and, with the "Schedule next maintenance" switch on, <strong>a new schedule is created</strong> with the next interval.',
      'guide.s3.title': 'Maintenance vs Repair',
      'guide.s3.p1': 'OmniKar distinguishes two types of records:',
      'guide.s3.maint': '🔧 Maintenance',
      'guide.s3.m1': '<strong>Periodic records</strong> based on schedules',
      'guide.s3.m2': 'Fields: type, date, mileage, cost, workshop, notes',
      'guide.s3.m3': 'You can attach <strong>documents and photos</strong> (invoices, reports)',
      'guide.s3.repair': '🛠️ Repair',
      'guide.s3.r1': '<strong>Breakdowns and interventions</strong> on the vehicle',
      'guide.s3.r2': 'Fields: type, date, mileage, cost, workshop, notes <strong>+ replaced parts</strong>',
      'guide.s3.r3': 'Optional check/follow-up: set a <strong>verification reminder</strong> (date or km) to confirm the repair was done right',
      'guide.s4.title': 'GPS Tracking',
      'guide.s4.p1': 'GPS starts recording <strong>automatically</strong> as soon as you open a vehicle. You don\'t need to do anything — points are saved to your Google Drive.',
      'guide.s4.recording': '📡 Point recording',
      'guide.s4.r1': 'A GPS point is recorded every <strong>100 meters</strong> traveled',
      'guide.s4.r2': 'Each point stores: coordinates, speed (km/h), heading and timestamp',
      'guide.s4.r3': 'Automatic cloud upload every <strong>3 seconds (≤ 100 km/h)</strong> or <strong>10 seconds (> 100 km/h)</strong>',
      'guide.s4.trips': '🗺️ Trips',
      'guide.s4.t1': 'Points are grouped into <strong>trips</strong> with automatic start and end',
      'guide.s4.t2': '🟢 Start point | 🔴 End point | 🟠 Parking ("Park here" button on HeadUnit)',
      'guide.s4.t3': 'If you reopen the vehicle within <strong>30 minutes</strong>, the trip continues (no new trip starts)',
      'guide.s4.viewing': '👁️ View on the map',
      'guide.s4.v1': 'Go to the <strong>Tracking</strong> tab (bottom tab bar, 📍 icon)',
      'guide.s4.v2': 'Choose the vehicle and filter by <strong>Live</strong> (real-time), <strong>trips</strong>, <strong>parking</strong> or <strong>older</strong>',
      'guide.s4.v3': '<strong>Live</strong> mode follows the current position on the map',
      'guide.s4.tip': '💡 Privacy:',
      'guide.s4.tipText': 'Location data is stored in the <strong>app\'s private folder</strong> on your Google Drive. Only you have access. No external servers.',
      'guide.s4.endTitle': '🏁 How a trip ends:',
      'guide.s4.endText': 'A trip ends in two ways — <strong>🅿️ Park here button</strong> (user responsibility) or <strong>automatically after X min stationary</strong> (configurable in Settings: 3, 5 or 10 min). Traffic lights and jams do not count — the timer only advances when the vehicle is stopped without any movement.',
      'guide.s5.title': '"Update KM via GPS" switch',
      'guide.s5.p1': 'In <strong>Settings</strong>, you\'ll find the <strong>"Update KM via GPS"</strong> switch. It controls whether the vehicle\'s mileage is automatically saved to the database while driving.',
      'guide.s5.on': '🟢 On',
      'guide.s5.on1': 'Every <strong>1 km</strong> traveled, the vehicle mileage is <strong>updated in the database</strong>',
      'guide.s5.on2': 'The new mileage appears in Dashboard, HeadUnit, statistics and PDFs',
      'guide.s5.on3': 'Uses more battery — recommended for long trips',
      'guide.s5.off': '⚫ Off (default)',
      'guide.s5.off1': 'GPS <strong>does not save</strong> anything to the database',
      'guide.s5.off2': 'Real mileage appears <strong>only on the HeadUnit screen</strong> (real-time, no persistence)',
      'guide.s5.note': 'ℹ️ GPS points to the cloud (Google Drive) <strong>always work</strong>, with or without the switch. The switch only controls whether the mileage is saved to the local database.',
      'guide.s6.title': 'Quick flow (summary)',
      'guide.s6.step1': '<strong>Open a vehicle</strong> — tap it in the main list (or configure the startup vehicle in Settings)',
      'guide.s6.step2': '<strong>Create schedules</strong> — define intervals for periodic maintenance and let the alerts work for you',
      'guide.s6.step3': '<strong>Record maintenance and repairs</strong> — from schedules ("Register" button) or manually',
      'guide.s6.step4': '<strong>Enable GPS</strong> — toggle "Update KM via GPS" if you want automatic mileage; map tracking always works',
      'guide.s6.step5': '<strong>Review history</strong> — view trip map in Tracking, costs in Statistics, and generate PDF reports',

      'privacy.title': 'Privacy — OmniKar',
      'privacy.hero': 'Privacy',
      'privacy.heroSub': 'Your data is yours. Always.',
      'privacy.s1.title': 'Where your data lives',
      'privacy.s1.p1': 'OmniKar stores data in <strong>two places</strong> — neither of them is an external server managed by the developer:',
      'privacy.s1.li1': '<strong>On your device</strong> — all app data (vehicles, maintenance, fuel, inspections, insurance, taxes, tires, owners, schedules) is stored in a <strong>local SQLite database</strong>. Only you, with your phone, have access.',
      'privacy.s1.li2': '<strong>In your personal Google Drive</strong> — when you sign in with your Google account, OmniKar stores a backup copy and GPS locations in the <strong>app\'s private folder (<code>appDataFolder</code>)</strong> on your own Drive. This folder is invisible in the normal Google Drive interface — only the OmniKar app itself (with your account) can access it.',
      'privacy.s2.title': 'No external servers',
      'privacy.s2.p1': '<strong>OmniKar does not use external servers.</strong> There is no cloud database managed by me. There are no usage logs, tracking analytics or data sharing with third parties.',
      'privacy.s2.p2': 'The only remote access the app makes is to <strong>your own</strong> Google Drive account — and only to the app\'s private folder (<code>drive.appdata</code>).',
      'privacy.s2.p3': '<strong>I, as the developer, do not have access to your data.</strong> I don\'t see it, I don\'t collect it, and I don\'t manage it. You are the sole owner and responsible for your data.',
      'privacy.s3.title': 'Not visible in Google Drive',
      'privacy.s3.p1': 'OmniKar\'s cloud files are in the <strong>app\'s private folder</strong> (<code>appDataFolder</code>). This folder:',
      'privacy.s3.li1': 'Does not appear when you open Google Drive in the browser or app',
      'privacy.s3.li2': 'Is only accessed by the OmniKar app with your Google account',
      'privacy.s3.li3': 'Does not count against your Drive storage quota',
      'privacy.s4.title': 'How to delete your data',
      'privacy.s4.cloud': '☁️ Delete cloud data',
      'privacy.s4.p1': 'Go to <strong>Settings → Cloud → "Delete cloud data"</strong>. This removes <strong>everything</strong> stored on Google Drive:',
      'privacy.s4.li1': 'The full backup file',
      'privacy.s4.li2': '<strong>All GPS locations</strong> for all vehicles',
      'privacy.s4.p2': '<strong>Nothing is left behind.</strong> This action cannot be undone.',
      'privacy.s4.local': '📱 Delete device data',
      'privacy.s4.p3': 'To remove local (app) data, <strong>uninstall OmniKar</strong> from your Android device. This deletes the SQLite database and all app files on your phone.',
      'privacy.s4.note': '⚠️ <strong>Important:</strong> deleting the cloud does <strong>not</strong> delete local data (vehicles, maintenance, etc.). Uninstalling the app does <strong>not</strong> delete data on Google Drive. If you want to remove <strong>everything</strong>, do both: delete the cloud via the app and then uninstall.',
      'privacy.s5.title': 'Summary',
      'privacy.s5.p1': 'OmniKar was built on the principle that <strong>your data is yours</strong>:',
      'privacy.s5.li1': '✅ No external servers — everything on your device or your Google Drive',
      'privacy.s5.li2': '✅ No ads — the app does not collect or share data for advertising',
      'privacy.s5.li3': '✅ No tracking — the app does not monitor your behavior or send analytics',
      'privacy.s5.li4': '✅ You are in control — you can delete your data at any time',
      'privacy.s5.li5': '✅ The developer does not see or manage your data',

      'footer.text': 'OmniKar — Your vehicle maintenance assistant. No ads. Your data is yours.'
    },

    es: {
      'nav.home': 'Inicio',
      'nav.download': 'Descargar',
      'nav.changelog': 'Novedades',
      'nav.guide': 'Cómo funciona',
      'nav.privacy': 'Privacidad',

      'hero.title': 'Tu asistente de <span>mantenimiento automóvil</span>',
      'hero.sub': 'Gestiona todos tus vehículos, mantenimiento, combustible, inspecciones y mucho más. Con GPS tracking, backup en la nube e informes PDF.',
      'hero.cta': 'Descargar APK',
      'home.playNote': 'ℹ️ OmniKar está disponible en <a href="https://play.google.com/store/apps/details?id=com.companyname.OmniKar" target="_blank" rel="noopener">Google Play</a> (método recomendado). La descarga del APK es solo para dispositivos filtrados por la Play Store.',
      'home.guide.title': '📘 Aprende a usar OmniKar',
      'home.guide.desc': 'Guía completa: agendamientos, mantenimiento, GPS tracking, reparaciones y toda la configuración de la app, explicada paso a paso.',
      'home.guide.cta': 'Ver guía',

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
      'dl.playNote': 'ℹ️ OmniKar está disponible en <a href="https://play.google.com/store/apps/details?id=com.companyname.OmniKar" target="_blank" rel="noopener">Google Play</a> (método recomendado). Este APK es solo para <strong>dispositivos filtrados o no soportados</strong> por la Play Store.',
      'dl.guideLink': '📘 Consulta la guía <strong>Cómo funciona</strong> para aprender a usar OmniKar →',

      'changelog.title': 'Novedades',

      'guide.title': 'Cómo funciona — OmniKar',
      'guide.hero': 'Cómo funciona',
      'guide.heroSub': 'Todo lo que necesitas saber para usar OmniKar a diario.',
      'guide.s1.title': 'Elegir un vehículo',
      'guide.s1.p1': 'Al abrir OmniKar ves la <strong>lista de vehículos</strong>. Toca un vehículo para abrir la pantalla completa con todas las pestañas: Dashboard, Mantenimiento, Agendamientos, Combustible, Reparaciones, GPS y mucho más.',
      'guide.s1.p2': '<strong>Todo en OmniKar funciona sobre el vehículo abierto.</strong> Agendamientos, mantenimiento, combustible, GPS — todo está asociado a ese vehículo.',
      'guide.s1.tip': '💡 Consejo — Vehículo de inicio:',
      'guide.s1.tipText': 'En Ajustes, activa "Vehículo de inicio" y elige el vehículo + pantalla (Dashboard o HeadUnit). La app abre directo en ese vehículo sin pasar por la lista.',
      'guide.s2.title': 'Mantenimiento programado',
      'guide.s2.p1': 'Crea reglas para mantenimientos periódicos como "aceite cada 15.000 km" o "revisión cada 12 meses". OmniKar te avisa automáticamente cuando se acerca la fecha o kilometraje.',
      'guide.s2.warn': '⚠️ Aviso: faltan ≤ 2.000 km o ≤ 60 días',
      'guide.s2.urgent': '🚨 Urgente: faltan ≤ 500 km o ≤ 15 días',
      'guide.s2.flow': 'Flujo completo',
      'guide.s2.step1': 'Ve a la pestaña <strong>Agendamientos</strong> y toca <strong>"+ Añadir Agendamiento"</strong>. Elige el tipo (aceite, neumáticos, frenos…) y define el intervalo en km o meses.',
      'guide.s2.step2': 'OmniKar <strong>avisa automáticamente</strong> en el Dashboard cuando la intervención se acerca (≤ 2.000 km o ≤ 60 días).',
      'guide.s2.step3': 'Cuando hagas el mantenimiento, toca el botón <strong>"Registrar"</strong> en la tarjeta del agendamiento. Se abre un formulario pre-rellenado con el tipo y kilometraje.',
      'guide.s2.step4': 'Rellena los detalles (coste, taller, notas, documentos) y guarda.',
      'guide.s2.step5': '<strong>El agendamiento antiguo se elimina automáticamente</strong> y, con el switch "Agendar próximo mantenimiento" activado, <strong>se crea un nuevo agendamiento</strong> con el próximo intervalo.',
      'guide.s3.title': 'Mantenimiento vs Reparación',
      'guide.s3.p1': 'OmniKar distingue dos tipos de registro:',
      'guide.s3.maint': '🔧 Mantenimiento',
      'guide.s3.m1': '<strong>Registros periódicos</strong> basados en agendamientos',
      'guide.s3.m2': 'Campos: tipo, fecha, km, coste, taller, notas',
      'guide.s3.m3': 'Puedes adjuntar <strong>documentos y fotos</strong> (facturas, informes)',
      'guide.s3.repair': '🛠️ Reparación',
      'guide.s3.r1': '<strong>Averías e intervenciones</strong> puntuales en el vehículo',
      'guide.s3.r2': 'Campos: tipo, fecha, km, coste, taller, notas <strong>+ piezas sustituidas</strong>',
      'guide.s3.r3': 'Check/seguimiento opcional: define un <strong>recordatorio de verificación</strong> (fecha o km) para confirmar que la reparación quedó bien',
      'guide.s4.title': 'GPS Tracking',
      'guide.s4.p1': 'El GPS empieza a registrar <strong>automáticamente</strong> en cuanto abres un vehículo. No necesitas hacer nada — los puntos se guardan en tu Google Drive.',
      'guide.s4.recording': '📡 Registro de puntos',
      'guide.s4.r1': 'Se registra un punto GPS cada <strong>100 metros</strong> recorridos',
      'guide.s4.r2': 'Cada punto guarda: coordenadas, velocidad (km/h), rumbo y hora',
      'guide.s4.r3': 'Subida automática a la nube cada <strong>3 segundos (≤ 100 km/h)</strong> o <strong>10 segundos (> 100 km/h)</strong>',
      'guide.s4.trips': '🗺️ Viajes',
      'guide.s4.t1': 'Los puntos se agrupan en <strong>viajes</strong> con inicio y fin automáticos',
      'guide.s4.t2': '🟢 Punto inicial | 🔴 Punto final | 🟠 Estacionamiento (botón "Park here" en HeadUnit)',
      'guide.s4.t3': 'Si reabres el vehículo en <strong>menos de 30 minutos</strong>, el viaje continúa (no empieza uno nuevo)',
      'guide.s4.viewing': '👁️ Ver en el mapa',
      'guide.s4.v1': 'Ve a la pestaña <strong>Tracking</strong> (barra de pestañas inferior, icono 📍)',
      'guide.s4.v2': 'Elige el vehículo y filtra por <strong>Live</strong> (tiempo real), <strong>viajes</strong>, <strong>estacionamiento</strong> o <strong>antiguos</strong>',
      'guide.s4.v3': 'El modo <strong>Live</strong> sigue la posición actual en el mapa',
      'guide.s4.tip': '💡 Privacidad:',
      'guide.s4.tipText': 'Los datos de ubicación se guardan en la <strong>carpeta privada de la app</strong> en tu Google Drive. Solo tú tienes acceso. Sin servidores externos.',
      'guide.s4.endTitle': '🏁 Cómo termina un viaje:',
      'guide.s4.endText': 'Un viaje termina de dos formas — <strong>botón 🅿️ Park here</strong> (responsabilidad del usuario) o <strong>automáticamente tras X min inmóvil</strong> (configurable en Ajustes: 3, 5 o 10 min). Los semáforos y el tráfico no cuentan — el contador solo avanza con el vehículo parado sin ningún movimiento.',
      'guide.s5.title': 'Switch "Actualizar KM vía GPS"',
      'guide.s5.p1': 'En <strong>Ajustes</strong>, encuentras el switch <strong>"Actualizar KM vía GPS"</strong>. Controla si el kilometraje del vehículo se guarda automáticamente en la base de datos mientras conduces.',
      'guide.s5.on': '🟢 Activado',
      'guide.s5.on1': 'Cada <strong>1 km</strong> recorrido, el KM del vehículo se <strong>actualiza en la base de datos</strong>',
      'guide.s5.on2': 'El nuevo KM aparece en Dashboard, HeadUnit, estadísticas y PDFs',
      'guide.s5.on3': 'Consume más batería — recomendado para viajes largos',
      'guide.s5.off': '⚫ Desactivado (por defecto)',
      'guide.s5.off1': 'El GPS <strong>no guarda</strong> nada en la base de datos',
      'guide.s5.off2': 'El KM real aparece <strong>solo en la pantalla HeadUnit</strong> (tiempo real, sin persistencia)',
      'guide.s5.note': 'ℹ️ Los puntos GPS para la nube (Google Drive) <strong>funcionan siempre</strong>, con o sin el switch. El switch solo controla si el KM se guarda en la base de datos local.',
      'guide.s6.title': 'Flujo rápido (resumen)',
      'guide.s6.step1': '<strong>Abre un vehículo</strong> — tócalo en la lista principal (o configura el vehículo de inicio en Ajustes)',
      'guide.s6.step2': '<strong>Crea agendamientos</strong> — define intervalos para mantenimientos periódicos y deja que las alertas trabajen por ti',
      'guide.s6.step3': '<strong>Registra mantenimientos y reparaciones</strong> — desde los agendamientos (botón "Registrar") o manualmente',
      'guide.s6.step4': '<strong>Activa el GPS</strong> — activa el switch "Actualizar KM vía GPS" si quieres kilometraje automático; el tracking en el mapa funciona siempre',
      'guide.s6.step5': '<strong>Consulta el historial</strong> — ve el mapa de viajes en Tracking, los costes en Estadísticas, y genera informes PDF',

      'privacy.title': 'Privacidad — OmniKar',
      'privacy.hero': 'Privacidad',
      'privacy.heroSub': 'Tus datos son tuyos. Siempre.',
      'privacy.s1.title': 'Dónde están tus datos',
      'privacy.s1.p1': 'OmniKar guarda los datos en <strong>dos lugares</strong> — ninguno de ellos es un servidor externo gestionado por el desarrollador:',
      'privacy.s1.li1': '<strong>En tu dispositivo</strong> — todos los datos de la app (vehículos, mantenimiento, combustible, inspecciones, seguros, impuestos, neumáticos, propietarios, agendamientos) se guardan en una base de datos <strong>SQLite local</strong>. Solo tú, con tu teléfono, tienes acceso.',
      'privacy.s1.li2': '<strong>En tu Google Drive personal</strong> — al iniciar sesión con tu cuenta de Google, OmniKar guarda una copia de seguridad y las ubicaciones GPS en la <strong>carpeta privada de la app (<code>appDataFolder</code>)</strong> de tu propio Drive. Esta carpeta es invisible en la interfaz normal de Google Drive — solo la propia app OmniKar (con tu cuenta) puede acceder.',
      'privacy.s2.title': 'Sin servidores externos',
      'privacy.s2.p1': '<strong>OmniKar no utiliza servidores externos.</strong> No hay una base de datos en la nube gestionada por mí. No hay registros de uso, análisis de tracking ni uso compartido de datos con terceros.',
      'privacy.s2.p2': 'El único acceso remoto que hace la app es a <strong>tu propia</strong> cuenta de Google Drive — y solo a la carpeta privada de la app (<code>drive.appdata</code>).',
      'privacy.s2.p3': '<strong>Yo, como desarrollador, no tengo acceso a tus datos.</strong> No los veo, no los recojo y no los gestiono. Tú eres el único propietario y responsable de tus datos.',
      'privacy.s3.title': 'No visible en Google Drive',
      'privacy.s3.p1': 'Los archivos de OmniKar en la nube están en la <strong>carpeta privada de la app</strong> (<code>appDataFolder</code>). Esta carpeta:',
      'privacy.s3.li1': 'No aparece al abrir Google Drive en el navegador o en la app',
      'privacy.s3.li2': 'Solo es accedida por la app OmniKar con tu cuenta de Google',
      'privacy.s3.li3': 'No cuenta para el espacio de almacenamiento de tu Drive',
      'privacy.s4.title': 'Cómo eliminar tus datos',
      'privacy.s4.cloud': '☁️ Eliminar datos de la nube',
      'privacy.s4.p1': 'Ve a <strong>Ajustes → Nube → "Eliminar datos de la nube"</strong>. Esto elimina <strong>todo</strong> lo almacenado en Google Drive:',
      'privacy.s4.li1': 'El archivo de backup completo',
      'privacy.s4.li2': '<strong>Todas las ubicaciones GPS</strong> de todos los vehículos',
      'privacy.s4.p2': '<strong>Nada queda atrás.</strong> Esta acción no se puede deshacer.',
      'privacy.s4.local': '📱 Eliminar datos del dispositivo',
      'privacy.s4.p3': 'Para eliminar los datos locales (app), <strong>desinstala OmniKar</strong> de tu dispositivo Android. Esto elimina la base de datos SQLite y todos los archivos de la app en el teléfono.',
      'privacy.s4.note': '⚠️ <strong>Importante:</strong> eliminar la nube <strong>no</strong> elimina los datos locales (vehículos, mantenimiento, etc.). Desinstalar la app <strong>no</strong> elimina los datos que están en Google Drive. Si quieres eliminar <strong>todo</strong>, haz las dos cosas: elimina la nube desde la app y luego desinstala.',
      'privacy.s5.title': 'Resumen',
      'privacy.s5.p1': 'OmniKar se construyó bajo el principio de que <strong>tus datos son tuyos</strong>:',
      'privacy.s5.li1': '✅ Sin servidores externos — todo en tu dispositivo o en tu Google Drive',
      'privacy.s5.li2': '✅ Sin anuncios — la app no recopila ni comparte datos para publicidad',
      'privacy.s5.li3': '✅ Sin tracking — la app no monitoriza tu comportamiento ni envía análisis',
      'privacy.s5.li4': '✅ Tú controlas — puedes eliminar tus datos en cualquier momento',
      'privacy.s5.li5': '✅ El desarrollador no ve ni gestiona tus datos',

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
