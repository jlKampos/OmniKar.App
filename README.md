# OmniKar — Documentação Completa / Complete Documentation

> Aplicação de gestão e manutenção automóvel com GPS tracking, backup cloud e multi-idioma.
> Vehicle maintenance management app with GPS tracking, cloud backup and multi-language.

---

## 🇵🇹 PORTUGUÊS

---

### 1. Visão Geral

O **OmniKar** é o teu assistente completo de manutenção automóvel. Gere todas as viaturas, manutenções, combustível, inspeções, seguros, impostos, pneus e muito mais num só lugar. Com rastreio GPS em tempo real, backup para o teu Google Drive pessoal e sincronização entre dispositivos.

---

### 2. Funcionalidades Principais

#### 🚗 Gestão de Viaturas

Adiciona todos os teus veículos com quilometragem, matrícula, VIN, marca, modelo e ano. O Dashboard mostra estado atual, alertas, custos mensais/anuais, consumo e manutenção recente.

#### 🔧 Manutenção

Regista revisões, reparações e peças trocadas com custos e documentos anexos. Cada registo pode ter fotos/PDFs (faturas, relatórios) associados.

#### 📅 Manutenção Programada

Define intervalos por quilómetros ou meses (ex: "óleo a cada 15.000 km" ou "revisão a cada 12 meses"). O OmniKar **alerta automaticamente** quando a intervenção se aproxima:

- Faltam **≤2.000 km** (para intervalo por km)
- Faltam **≤60 dias** (para intervalo por tempo)

**Fluxo completo:**

1. Crias um agendamento (ex: "pneus a cada 40.000 km")
2. O OmniKar alerta quando faltam ≤2.000 km ou ≤60 dias
3. Quando fazes a manutenção, registas-a **diretamente a partir do agendamento**
4. O alerta é **automaticamente desativado** (o agendamento antigo é apagado)
5. Opcionalmente, um **novo agendamento é criado** automaticamente com base no intervalo que definiste (NextMileage/NextDate recalculados)

→ Nunca mais te esqueces de uma revisão.

#### ⛽ Combustível

Regista abastecimentos com custo, litros e quilometragem. Monitoriza gastos mensais/anuais.

**Consumo real (litros/100km):**

- Basta marcar o switch **"Depósito Cheio"** nos abastecimentos
- O OmniKar calcula automaticamente o consumo **entre dois depósitos cheios**
- Sem a flag, o consumo fica vazio, mas os custos continuam a funcionar

#### 🔍 Inspeções

Mantém o histórico de inspeções obrigatórias (IPO) com datas de validade. Alerta quando faltam ≤60 dias para expirar.

#### 📄 Seguros e Impostos

Controla renovações de apólices e impostos de circulação (IUC). Alerta quando a apólice/expiração se aproxima (≤60 dias).

#### 🛞 Pneus

Gere conjuntos de pneus e histórico de instalações por viatura.

#### 👤 Histórico de Donos

Regista mudanças de propriedade ao longo do tempo.

#### 📊 Estatísticas

Gráficos interativos de custos, consumos e quilometragem:

- **Custo por km** — custo total (manutenção + combustível + seguro + IUC + inspeções) / km percorridos
- **Consumo médio** — litros/100km (depende da flag "Depósito Cheio")
- **Distribuição de custos** — % por categoria
- **Custos mensais** — gráfico por mês

#### 📄 Relatórios PDF

Gera relatórios completos da viatura para partilhar ou imprimir (PdfSharpCore).

---

### 3. Rastreio GPS em Tempo Real

O OmniKar regista automaticamente a localização do teu veículo:

- A cada **100 metros** percorridos
- Ou a cada **3 segundos** quando a velocidade ultrapassa os **100 km/h**

Cada ponto guarda:

- Coordenadas GPS (latitude/longitude)
- Velocidade (km/h)
- Rumo/orientação (heading)
- Timestamp

Os pontos são agrupados em **viagens** com início e fim automáticos:

- O ponto inicial é marcado com 🟢 (trip_start)
- O ponto final é marcado com 🔴 (trip_end)
- Pontos de estacionamento marcados com 🅿️ (parked)

**Como funciona o tracking (2 formas):**

| Forma | Como | Requisitos |
| ------- | ------ | ----------- |
| **No telemóvel** | Abre a viatura na app e o rastreio começa automaticamente | Telemóvel com GPS + viatura em aberto |
| **No HeadUnit** | O rastreio ativo do carro é registado à distância | HeadUnit com internet + GPS |

**Consulta e visualização:**

- Mapa interativo (Mapsui) com filtros por viagem, estacionamento e histórico
- Modo **📍 Live** — o mapa segue a posição GPS em tempo real
- Filtro hierárquico: viatura → tipo de viagem → ponto individual
- **Cache offline** — os dados ficam disponíveis mesmo sem internet
- Toggle de tema (claro/escuro) no mapa
- Acesso cross-device com a mesma conta Google

**Armazenamento:**

- Os dados de localização são guardados no teu **Google Drive pessoal** (pasta privada `appDataFolder`)
- Organizados por mês (`locations-{vehicleId}.json` + `meta-{vehicleId}.json`)
- Sem servidores externos — os dados são teus

---

### 4. Quilometragem Automática via GPS

O OmniKar consegue acompanhar a quilometragem do teu veículo em tempo real usando o GPS, em duas modalidades:

| Modalidade | O que faz | Precisa do switch? |
| ------------ | ----------- | ------------------- |
| **HeadUnit (tempo real)** | Mostra o velocímetro, a distância percorrida e o KM atualizado em tempo real enquanto conduzes | ❌ Não |
| **Guardar automático na BD** | Grava o KM na base de dados da viatura a cada quilómetro percorrido | ✅ **Sim** |

**O switch "Atualizar KM via GPS" (Settings):**

Quando **ativado**:

1. O GPS passa a estar ativo ao abrir qualquer viatura (`VehicleTabbedPage`)
2. A cada **1 km percorrido**, a quilometragem da viatura é **atualizada automaticamente** na base de dados (`GpsSaveService`)
3. O novo KM aparece no **Dashboard**, no **HeadUnit** e em todas as estatísticas

Quando **desativado** (padrão):

- O GPS **não** guarda nada na base de dados
- O KM real aparece **apenas** no ecrã do **HeadUnit** (visualização em tempo real, sem persistência)
- O Dashboard não mostra os ícones GPS

**Como ativar:**

1. Abre as **Settings**
2. Liga o switch **"Atualizar KM via GPS"**
3. Abre uma viatura — o GPS começa a acompanhar automaticamente
4. A cada 1 km, o KM da viatura é atualizado na BD

> ⚠️ **Nota**: o GPS ativo consome mais bateria. Recomenda-se ligar apenas quando necessário (viagens longas, etc.).

---

### 5. Backup e Sincronização Cloud

Faz backup completo de **todos os dados** — viaturas, manutenção, combustível e localizações — para o teu **Google Drive pessoal**:

- **Backup to Cloud** — envia o backup para o Drive (pasta privada `appDataFolder`)
- **Update from Cloud** — restaura os dados do Drive
- **Delete backup** — remove o backup da nuvem
- **Backup automático** — a cada 6 horas, com a app aberta, o OmniKar verifica se os dados mudaram e faz backup automaticamente. Se nada mudou, não envia nada (hash skip). Podes ligar/desligar nas Settings (on por defeito)
- **Cross-device** — consulta os mesmos dados noutro dispositivo com a mesma conta Google

**Privacidade:**

- Os dados de localização ficam na **pasta privada da app** (`appDataFolder`) no teu Drive
- **Sem servidores externos** — nenhum terceiro tem acesso
- O login usa **Google Sign-In** com scope `drive.appdata` (só acede à pasta da própria app)

**Resiliência (automática):**

- **Token expirado → refresh automático**
- **Falha de rede → retry com backoff exponencial (máx. 5 tentativas)**
- **Sem internet → fila offline local + sincronização quando voltar**
- **Duplicados evitados por ID único de cada ponto**
- **401 → silent sign-in (renovação sem abrir diálogo)**
- **Sincronização de localizações** — os pontos de GPS são enviados para o Drive automaticamente a cada 3/10 segundos enquanto a viatura está aberta. Pontos offline são sincronizados a cada 60 segundos quando a ligação volta

---

### 6. Idioma, Tema e Design

- **Multi-idioma**: Português, Inglês e Espanhol
- **Tema escuro**: interface escura otimizada para uso noturno
- **Sem anúncios**
- **Ícones Phosphor** + fontes custom

---

### 7. Detalhes Técnicos

**Tecnologias:**

- .NET MAUI (Android + Windows)
- SQLite local (`sqlite-net-pcl`)
- Google Sign-In + Google Drive API
- Mapsui (mapas)
- LiveCharts (gráficos)
- PdfSharpCore (PDF)
- CommunityToolkit.Mvvm (MVVM)

**Serviços principais:**

| Serviço | Descrição |
| --------- | ----------- |
| `GpsService` | Recolhe posição GPS contínua |
| `GpsSaveService` | Guarda KM acumulado a cada 1 km na BD (se switch ativo) |
| `CloudLocationService` | Upload de pontos GPS para Drive (100m/3s) |
| `AutoBackupService` | Backup automático a cada 6h para Drive (hash-skip se nada mudou) |
| `CloudBackupService` | Backup/restore completo para Drive |
| `CloudService` | Google Sign-In + autenticação |
| `AlertService` | Alerta de manutenção programada, inspeções, seguros |
| `StatisticsService` | Cálculo de custos e consumo |
| `PdfService` | Relatórios PDF |

---

## 🇬🇧 ENGLISH

---

### 1. Overview

**OmniKar** is your complete vehicle maintenance assistant. Manage all your vehicles, maintenance, fuel, inspections, insurance, taxes, tires and much more in one place. With real-time GPS tracking, backup to your personal Google Drive and sync between devices.

---

### 2. Key Features

#### 🚗 Vehicle Management

Add all your vehicles with mileage, license plate, VIN, brand, model and year. The Dashboard shows current status, alerts, monthly/yearly costs, consumption and recent maintenance.

#### 🔧 Maintenance

Track repairs, services and part replacements with costs and attached documents. Each record can have photos/PDFs (invoices, reports) attached.

#### 📅 Scheduled Maintenance

Set intervals by kilometers or months (e.g. "oil every 15,000 km" or "service every 12 months"). OmniKar **alerts automatically** when the intervention approaches:

- **≤2,000 km left** (for km intervals)
- **≤60 days left** (for time intervals)

**Full flow:**

1. Create a schedule (e.g. "tires every 40,000 km")
2. OmniKar alerts when ≤2,000 km or ≤60 days remain
3. When the service is done, log it **directly from the schedule**
4. The alert is **automatically cleared** (the old schedule is deleted)
5. Optionally, a **new schedule is created automatically** based on your set interval (NextMileage/NextDate recalculated)

→ You'll never miss a service again.

#### ⛽ Fuel

Log fill-ups with cost, liters and mileage. Track monthly/yearly spending.

**Real consumption (liters/100km):**

- Just mark the **"Full Tank"** switch on fill-ups
- OmniKar automatically calculates consumption **between two full tanks**
- Without the flag, consumption stays empty, but costs still work

#### 🔍 Inspections

Keep mandatory inspection history with expiry dates. Alerts when ≤60 days to expiry.

#### 📄 Insurance & Tax

Track policy renewals and road tax (IUC). Alerts when policy/expiry approaches (≤60 days).

#### 🛞 Tires

Manage tire sets and installation history per vehicle.

#### 👤 Ownership History

Record ownership changes over time.

#### 📊 Statistics

Interactive charts for costs, fuel consumption and mileage:

- **Cost per km** — total cost (maintenance + fuel + insurance + tax + inspections) / km driven
- **Average consumption** — liters/100km (depends on "Full Tank" flag)
- **Cost distribution** — % by category
- **Monthly costs** — chart by month

#### 📄 PDF Reports

Generate complete vehicle reports to share or print (PdfSharpCore).

---

### 3. Real-Time GPS Tracking

OmniKar automatically records your vehicle's location:

- Every **100 meters** traveled
- Or every **3 seconds** when speed exceeds **100 km/h**

Each point stores:

- GPS coordinates (latitude/longitude)
- Speed (km/h)
- Heading/direction
- Timestamp

Points are grouped into **trips** with automatic start/end:

- Start point marked 🟢 (trip_start)
- End point marked 🔴 (trip_end)
- Parking points marked 🅿️ (parked)

**How tracking works (2 ways):**

| Way | How | Requirements |
|-----|-----|--------------|
| **On your phone** | Open the vehicle in the app and tracking starts automatically | Phone with GPS + vehicle open |
| **On HeadUnit** | Your car's active tracking is recorded remotely | HeadUnit with internet + GPS |

**Viewing:**

- Interactive map (Mapsui) with filters by trip, parking and history
- **📍 Live** mode — map follows GPS position in real time
- Hierarchical filter: vehicle → trip type → individual point
- **Offline cache** — data available even without internet
- Map theme toggle (light/dark)
- Cross-device access with the same Google account

**Storage:**

- Location data stored in your **personal Google Drive** (private `appDataFolder`)
- Organized by month (`locations-{vehicleId}.json` + `meta-{vehicleId}.json`)
- No external servers — your data stays yours

---

### 4. Automatic GPS Mileage

OmniKar can track your vehicle's mileage in real time using GPS, in two modes:

| Mode | What it does | Needs the switch? |
|------|--------------|-------------------|
| **HeadUnit (real-time)** | Shows speedometer, distance traveled and updated mileage in real time while driving | ❌ No |
| **Auto-save to database** | Writes mileage to the vehicle's database every kilometer traveled | ✅ **Yes** |

**The "Update KM via GPS" switch (Settings):**

When **enabled**:

1. GPS becomes active when opening any vehicle (`VehicleTabbedPage`)
2. Every **1 km traveled**, the vehicle's mileage is **automatically updated** in the database (`GpsSaveService`)
3. The new mileage appears on the **Dashboard**, **HeadUnit** and all statistics

When **disabled** (default):

- GPS does **not** save anything to the database
- Real-time mileage appears **only** on the **HeadUnit** screen (live view, no persistence)
- Dashboard does not show GPS icons

**How to enable:**

1. Open **Settings**
2. Toggle **"Update KM via GPS"** on
3. Open a vehicle — GPS starts tracking automatically
4. Every 1 km, the vehicle's mileage is updated in the database

> ⚠️ **Note**: active GPS consumes more battery. Recommended to enable only when needed (long trips, etc.).

---

### 5. Cloud Backup & Sync

Back up **all data** — vehicles, maintenance, fuel and locations — to your **personal Google Drive**:

- **Backup to Cloud** — uploads backup to Drive (private `appDataFolder`)
- **Update from Cloud** — restores data from Drive
- **Delete backup** — removes cloud backup
- **Auto-backup** — every 6 hours, while the app is open, OmniKar checks if data has changed and backs up automatically. If nothing changed, nothing is sent (hash skip). Toggle on/off in Settings (on by default)
- **Cross-device** — access the same data on another device with the same Google account

**Privacy:**

- Location data stays in the **app's private folder** (`appDataFolder`) in your Drive
- **No external servers** — no third party has access
- Login uses **Google Sign-In** with `drive.appdata` scope (only accesses the app's own folder)

**Resilience (automatic):**

- **Expired token → auto refresh**
- **Network failure → exponential backoff retry (max 5 attempts)**
- **No internet → local offline queue + sync when back**
- **Duplicates avoided by unique point ID**
- **401 → silent sign-in (renewal without dialog)**
- **Location sync** — GPS points are uploaded to Drive automatically every 3/10s while the vehicle is open. Offline points sync every 60s when connectivity returns

---

### 6. Language, Theme & Design

- **Multi-language**: English, Portuguese and Spanish
- **Dark theme**: dark interface optimized for night use
- **No ads**
- **Phosphor icons** + custom fonts

---

### 7. Technical Details

**Technologies:**

- .NET MAUI (Android + Windows)
- Local SQLite (`sqlite-net-pcl`)
- Google Sign-In + Google Drive API
- Mapsui (maps)
- LiveCharts (charts)
- PdfSharpCore (PDF)
- CommunityToolkit.Mvvm (MVVM)

**Main services:**

| Service | Description |
| --------- | ------------- |
| `GpsService` | Collects continuous GPS position |
| `GpsSaveService` | Saves accumulated KM every 1 km to DB (if switch on) |
| `CloudLocationService` | Uploads GPS points to Drive (100m/3s) |
| `AutoBackupService` | Auto-backup every 6h to Drive (hash-skip if unchanged) |
| `CloudBackupService` | Full backup/restore to Drive |
| `CloudService` | Google Sign-In + authentication |
| `AlertService` | Scheduled maintenance, inspection, insurance alerts |
| `StatisticsService` | Cost and consumption calculation |
| `PdfService` | PDF reports |


---
