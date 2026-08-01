/* Shared residence catalogue — used by the home page and the full-collection page */
  window.HOTC_PROJECTS = [
    {
      id: 'veil', lot: '01', name: 'Muraba Veil', art: 'veil-tower',
      tagline: 'Seen and not seen',
      taglineRu: 'Видно и не видно',
      arch: "RCR Arquitectes — Pritzker '17 · Their first skyscraper",
      archRu: 'RCR Arquitectes — Pritzker 2017 · Их первый небоскрёб',
      cats: ['edition','icons','art'],
      size: 'l', height: 'mid', ratio: 'tall',
      gallery: [
        'assets/projects/muraba-veil/01-hero-tower.jpg',
        'assets/projects/muraba-veil/02-living-sunset-view.jpg',
        'assets/projects/muraba-veil/06-pool-burj.jpg',
        'assets/projects/muraba-veil/03-lily-pond-living.jpg',
        'assets/projects/muraba-veil/04-bedroom-garden.jpg',
        'assets/projects/muraba-veil/07-interior.jpg',
        'assets/projects/muraba-veil/08-tea-room.jpg',
        'assets/projects/muraba-veil/05-night-pool-city.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: '131 of 131',         vRu: '131 из 131', score: 5 },
        { k: 'Architect', v: "RCR · Pritzker '17", vRu: 'RCR · Pritzker 2017', score: 5 },
        { k: 'Developer', v: 'Muraba',             vRu: 'Muraba', score: 4 },
        { k: 'Location',  v: 'Al Wasl · Canal',    vRu: 'Аль-Васл · Канал', score: 5 },
        { k: 'Execution', v: 'Q4 2029',            vRu: 'Q4 2029', score: 3, pending: true }
      ],
      facts: {
        'Tower': '380 m · 73 floors',
        'Edition': '131 dual-aspect residences',
        'Sizes': '3,838 — 15,333 sq ft total',
        'Ceilings': '3.2 — 4.2 m',
        'Service charge': 'AED 38 / sq ft p.a.',
        'Completion': 'Q4 2029'
      },
      factsRu: {
        'Башня': '380 м · 73 этажа',
        'Серия': '131 двухсторонняя резиденция',
        'Размеры': '3 838 — 15 333 кв. фт. общая',
        'Высота потолка': '3,2 — 4,2 м',
        'Service charge': 'AED 38 / кв. фт. в год',
        'Сдача': 'Q4 2029'
      },
      pricing: {
        bands: [
          { type: '2 BR Residence',        typeRu: 'Резиденция 2 спальни', size: '3,838 sq ft',  sizeRu: '3 838 кв. фт.', price: 'AED 12 – 18 M', priceRu: 'AED 12 – 18 млн' },
          { type: '3 BR Residence',        typeRu: 'Резиденция 3 спальни', size: '4,940 sq ft',  sizeRu: '4 940 кв. фт.', price: 'AED 15 – 24 M', priceRu: 'AED 15 – 24 млн' },
          { type: '3 BR Pool Residence',   typeRu: 'Резиденция 3 спальни с бассейном', size: '4,940 sq ft',  sizeRu: '4 940 кв. фт.', price: 'AED 30 – 37 M', priceRu: 'AED 30 – 37 млн' },
          { type: '4 BR Pool Residence',   typeRu: 'Резиденция 4 спальни с бассейном', size: '9,903 sq ft',  sizeRu: '9 903 кв. фт.', price: 'AED 56 – 77 M', priceRu: 'AED 56 – 77 млн' },
          { type: '4 BR XL · Duplex',      typeRu: '4 спальни XL · Дуплекс', size: '15,000+ sq ft', sizeRu: '15 000+ кв. фт.', price: 'POA', priceRu: 'По запросу' }
        ],
        plan: '10% + AED 5,000 admin fee on booking · 15% + 4% DLD within 30 days of SPA · 15% Sep 2026 · 10% Sep 2027 · 50% on completion · No рассрочка после сдачи',
        planRu: '10% + AED 5 000 административный сбор при бронировании · 15% + 4% DLD в течение 30 дней после SPA · 15% сентябрь 2026 · 10% сентябрь 2027 · 50% при сдаче · Без рассрочки после сдачи'
      },
      amenities: ['Dune subterranean wellness club','Experiential pools, sauna, steam','Rooftop swimming pool','Rooftop fine dining','Cinema room','Padel tennis','Concierge & valet','Majlis Lounge (serviced)','Housekeeping on demand','Cafe & gallery'],
      amenitiesRu: ['Подземный wellness-клуб Dune','Эмпирические бассейны, сауна, парная','Бассейн на крыше','Ресторан fine dining на крыше','Кинозал','Падел-теннис','Консьерж и валет','Majlis Lounge (сервисный)','Housekeeping по запросу','Кафе и галерея'],
      brief: "Muraba Veil is the most important architectural object launching in Dubai this decade — and the first time a Pritzker laureate puts their name on a UAE skyscraper. RCR Arquitectes are not a fashion brand; they are a Catalan studio working with stone, water, light, and time. 131 dual-aspect residences, most with private pools and gardens hanging in the air, set at the geographic centre of the city — between Downtown, Sheikh Zayed Road, and the Canal.",
      briefRu: 'Muraba Veil — самый важный архитектурный объект, выходящий в Дубае за это десятилетие, и первый случай, когда лауреат Притцкера ставит имя на небоскрёбе в ОАЭ. RCR Arquitectes — это не fashion-бренд, а каталонская студия, работающая с камнем, водой, светом и временем. 131 двухсторонняя резиденция, большинство — с приватными бассейнами и садами, висящими в воздухе, в географическом центре города — между Downtown, Шейх-Зайед-роуд и Каналом.',
      why: 'Pritzker-level provenance · dual-aspect logic never done at this scale in Dubai · by-invitation gallery viewing only · full alignment with our boutique model.',
      whyRu: 'Происхождение уровня Pritzker · двухсторонняя логика, не реализованная в Дубае в таком масштабе · показы только по приглашению в галерее · полная стыковка с нашей бутиковой моделью.',
      risk: 'Long horizon (Dec 2028), ~45% of price paid before handover. Not a flip — a 7–10 year hold.',
      riskRu: 'Длинный горизонт (декабрь 2028), ~45% цены выплачивается до сдачи. Не для перепродажи — удержание 7–10 лет.',
      location: { area: 'Al Wasl, Dubai', areaRu: 'Аль-Васл, Дубай', address: '58 B Street, Al Wasl · Dubai Water Canal', addressRu: '58 B Street, Аль-Васл · Dubai Water Canal', coords: '25.1869,55.2537' },
      price: 'AED 13.5M – 73M · 3,838–9,903 sq ft · Q4 2029 · 38 AED/ft² service',
      note: 'Tower 380m, 73 floors. By-invitation Muraba Gallery viewing only.',
      noteRu: 'Башня 380 м, 73 этажа. Показ только по приглашению в Muraba Gallery.'
    },
    {
      id: 'dia', lot: '02', name: 'Muraba Dia', art: 'dia-facade',
      tagline: 'Success is in the details',
      taglineRu: 'Успех в деталях',
      arch: 'RCR Arquitectes · Eastern Crescent · Palm Jumeirah',
      archRu: 'RCR Arquitectes · Восточный Crescent · Palm Jumeirah',
      cats: ['art','soul','icons'],
      size: 'm', height: 'up', ratio: 'portrait',
      gallery: [
        'assets/projects/muraba-dia/01-hero-facade.jpg',
        'assets/projects/muraba-dia/02-burj-texture.jpg',
        'assets/projects/muraba-dia/04-pool-deck.jpg',
        'assets/projects/muraba-dia/03-dining-veil-sea.jpg',
        'assets/projects/muraba-dia/05-kitchen-burj-view.jpg',
        'assets/projects/muraba-dia/06-interior.jpg',
        'assets/projects/muraba-dia/07-interior.jpg',
        'assets/projects/muraba-dia/08-context.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: '50 (46 apt + 4 pent)', score: 5 },
        { k: 'Architect', v: "RCR · Pritzker '17",   score: 5 },
        { k: 'Developer', v: 'Muraba',               score: 4 },
        { k: 'Location',  v: 'Palm · East Crescent', score: 5 },
        { k: 'Execution', v: 'Ready · fully furnished', score: 5 }
      ],
      facts: {
        'Edition': '46 apartments + 4 penthouses',
        'Configuration': 'G + 9',
        'Sizes': '4,792 — 6,745 sq ft',
        'Service charge': 'AED 30 / sq ft p.a.',
        'Status': 'Ready · fully furnished',
        'Resale': 'Allowed after 100%'
      },
      pricing: {
        bands: [
          { type: 'Apartments (resale)',  size: '4,792 – 6,745 sq ft', price: 'AED 23 – 30 M' },
          { type: 'Penthouses',           size: 'POA',                  price: 'POA' }
        ],
        plan: 'No payment plan — full payment on transfer (Ready stock). 4% DLD fee.'
      },
      amenities: ['Fully furnished (Sky-Frame, Vola, Rimadesio)','Frameless sliding window walls','RCR-collaboration Lagares bath','Gaggenau kitchen','Lutron wireless lighting','Kartell by Laufen sanitaryware','Private beach access · Eastern Crescent','Pool deck · landscaped gardens','Shared gym & SPA · steam · jacuzzi'],
      amenitiesRu: ['Полностью меблирован (Sky-Frame, Vola, Rimadesio)','Безрамные раздвижные оконные стены','Сантехника Lagares (коллаборация с RCR)','Кухня Gaggenau','Беспроводное освещение Lutron','Сантехника Kartell by Laufen','Прямой выход к пляжу · Восточный Crescent','Pool deck · ландшафтные сады','Общий gym и SPA · парная · джакузи'],
      brief: 'Muraba Dia is the rarest object in our index — a Pritzker-laureate building that is already standing, already lived-in, and changing hands only through resale. 50 residences on the Eastern Crescent of Palm Jumeirah, conceived not as a tower but as a horizontal field of dwelling. Translucent crinkled glass that reads like frozen water, frameless Sky-Frame walls, solid Lagares stone in the baths.',
      briefRu: 'Muraba Dia — самый редкий объект в нашем индексе: здание лауреата Pritzker, уже построенное, уже обжитое, и меняющее владельцев только через перепродажу. 50 резиденций на Восточном Crescent Palm Jumeirah, задуманные не как башня, а как горизонтальное поле жилья. Полупрозрачное «гофрированное» стекло, читающееся как замёрзшая вода, безрамные стены Sky-Frame, цельный камень Lagares в санузлах.',
      why: 'Available only through curated resale channels. Pritzker provenance + complete. No off-plan risk.',
      whyRu: 'Доступен только через закрытые каналы перепродажи. Происхождение Pritzker + готовый объект. Без риска стройки.',
      risk: 'Ready property — full transfer immediately. Resale liquidity is private channel only.',
      riskRu: 'Готовый объект — полная оплата сразу при передаче. Ликвидность на перепродаже — только через приватные каналы.',
      location: { area: 'Palm Jumeirah, Dubai', areaRu: 'Palm Jumeirah, Дубай', address: 'Eastern Crescent', addressRu: 'Восточный Crescent', coords: '25.1259,55.1543' },
      price: 'Resale AED 23M – 30M · AED 4,400–4,800/sq ft',
      note: 'Only on private resale. Sky-Frame, Vola, Rimadesio, Gaggenau.',
      noteRu: 'Только закрытая перепродажа. Sky-Frame, Vola, Rimadesio, Gaggenau.'
    },
    {
      id: 'mamsha', lot: '03', name: 'Mamsha Palm', art: 'mamsha-hero',
      tagline: 'A Living Statement',
      taglineRu: 'Живое высказывание',
      arch: 'Koichi Takada × Aldar · Saadiyat Cultural District',
      archRu: 'Koichi Takada × Aldar · Культурный квартал Saadiyat',
      cats: ['art','gardens'],
      size: 'l', height: 'low', ratio: 'wide',
      gallery: [
        'assets/projects/mamsha-palm/01-hero-tree-pool.jpg',
        'assets/projects/mamsha-palm/02-aerial-saadiyat.jpg',
        'assets/projects/mamsha-palm/03-lobby-mushroom.jpg',
        'assets/projects/mamsha-palm/04-bathhouse-sauna.jpg',
        'assets/projects/mamsha-palm/05-tea-room.jpg',
        'assets/projects/mamsha-palm/06-amenity.jpg',
        'assets/projects/mamsha-palm/07-amenity.jpg',
        'assets/projects/mamsha-palm/08-context.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: '44 units',            score: 4 },
        { k: 'Architect', v: 'Koichi Takada',       score: 5 },
        { k: 'Developer', v: 'Aldar',               score: 5 },
        { k: 'Location',  v: 'Saadiyat · Soul Beach', score: 5 },
        { k: 'Execution', v: 'Q1 2028',             score: 4, pending: true }
      ],
      facts: {
        'Edition': '44 units total',
        'Mix': '1BR · 2BR+study · 3BR+maid · 4BR sky villas',
        'Sizes': '104 m² — 649 m² (incl. balcony)',
        'Certifications': '3 Pearl Estidama PBRS · 2-star Fitwel',
        'Completion': 'Q1 2028'
      },
      pricing: {
        bands: [
          { type: '1 BR',                size: '~104 m²',  price: 'From AED 3.7 M' },
          { type: '2 BR + study',        size: '~150 m²',  price: 'POA' },
          { type: '3 BR + maid',         size: '~250 m²',  price: 'POA' },
          { type: '4 BR Sky Villa',      size: '~649 m²',  price: 'POA' }
        ],
        plan: '65/35 plan · 10% on booking · 55% on construction milestones · 35% on handover Q1 2028',
        planRu: '65/35 · 10% при бронировании · 55% по этапам стройки · 35% при сдаче Q1 2028'
      },
      amenities: ['Double-height lobby lounge (Japanese vocabulary)','Bathhouse · sauna · ice bath','Tea room','Rooftop infinity pool with tree-canopy','Gym & wellness','BBQ deck','Concierge & valet','Activated ground-floor retail','Pet sitting · housekeeping · cooking services'],
      amenitiesRu: ['Лобби-лаунж с двойной высотой потолка (японский язык)','Баня · сауна · ice bath','Чайная комната','Бесконечный бассейн на крыше под деревом','Тренажёрный зал и wellness','BBQ-зона','Консьерж и валет','Активный ритейл первого этажа','Pet sitting · клининг · кулинария'],
      brief: "Mamsha Palm is small and serious: 44 residences on the edge of Saadiyat Cultural District, three minutes from Louvre Abu Dhabi, eight from the Zayed National Museum. The architect is Koichi Takada — known globally for the wooden Crown Sydney lobby and the National Museum of Qatar pavilions, but here working in Aldar's first architect-led residential. The building reads Japanese: shoji-like timber screens, tatami-proportioned plans, a residents' bathhouse with sauna and ice plunge. Prices start at AED 48.3M for a 6,347 sq ft residence. Handover Q1 2028. Buyer pool is small: people who want a museum-grade neighbourhood and a small community.",
      briefRu: 'Mamsha Palm — маленький и серьёзный проект: 44 резиденции на краю Культурного квартала Saadiyat, три минуты до Louvre Abu Dhabi, восемь — до Музея Зайеда. Архитектор — Koichi Takada, известный по деревянному лобби Crown Sydney и павильонам Национального музея Катара, но здесь это первый архитектор-led residential от Aldar. Здание читается по-японски: деревянные ширмы-сёдзи, планировки пропорций татами, общая баня с сауной и ice plunge. Цены — от AED 48.3 млн за резиденцию 6 347 кв. фт. Сдача Q1 2028. Узкий круг покупателей: те, кому нужен музейный квартал и маленькое сообщество.',
      why: 'Architect-led project (rare in Aldar portfolio). Real cultural neighbours (Louvre is open). 44-unit edition keeps community small.',
      whyRu: 'Авторский проект (редкость в портфеле Aldar). Реальные культурные соседи (Louvre уже работает). Серия из 44 резиденций оставляет сообщество маленьким.',
      risk: 'Saadiyat liquidity historically thinner than Dubai. Hold horizon 5–7 years for cultural-district thesis.',
      riskRu: 'Ликвидность Saadiyat исторически ниже, чем в Дубае. Горизонт удержания 5–7 лет под тезис культурного квартала.',
      location: { area: 'Saadiyat Island, Abu Dhabi', areaRu: 'Остров Саадият, Абу-Даби', address: 'Saadiyat Cultural District', addressRu: 'Культурный квартал Saadiyat', coords: '24.5386,54.4078' },
      price: 'AED 48.3M – 49.9M · 6,347–8,071 sq ft · Q1 2028 · 36 AED/ft² service',
      note: 'Steps from Louvre Abu Dhabi. Japanese bathhouse, tea room, biomimicry tree-canopy pool.',
      noteRu: 'В нескольких шагах от Louvre Abu Dhabi. Японская баня, чайная комната, биомимикрия — бассейн под кроной дерева.'
    },
    {
      id: 'passo', lot: '04', name: 'PASSO by Beyond', art: 'passo-brand',
      // Geniemap: Q3/2029, 4.93-98.3M AED, 960-12646 sqft, sc 23 AED/sqft
      tagline: 'Inspired by tides. Shaped by wind.',
      taglineRu: 'Вдохновлено приливами. Форма — от ветра.',
      arch: 'Beyond / Omniyat · West Crescent Palm · 250m beachfront',
      archRu: 'Beyond / Omniyat · Западный Crescent Palm · 250 м первой линии',
      cats: ['capital','icons','experience'],
      size: 'm', height: 'mid', ratio: 'portrait',
      gallery: [
        'assets/projects/passo/01-hero-passo-brand.jpg',
        'assets/projects/passo/02-pool-deck-atlantis.jpg',
        'assets/projects/passo/03-terrace-burj-skyline.jpg',
        'assets/projects/passo/04-fluid-texture.jpg',
        'assets/projects/passo/05-master-plan.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: 'Two-tower composition', score: 4 },
        { k: 'Architect', v: 'Beyond design studio',  score: 4 },
        { k: 'Developer', v: 'Omniyat / Beyond',      score: 5 },
        { k: 'Location',  v: 'Palm · West Crescent',  score: 5 },
        { k: 'Execution', v: 'Q3 2029',               vRu: 'Q3 2029', score: 4, pending: true }
      ],
      facts: {
        'Composition': 'Two towers — Avita (Wellness) + Bella',
        'Beachfront': '250 m private beach',
        'Sightlines': 'Burj Al Arab · Atlantis Royal · Burj Khalifa',
        'Equidistant': '35 min to DXB and DWC',
        'Status': 'Active sales — by appointment'
      },
      pricing: {
        bands: [
          { type: 'Avita Wellness Collection', size: 'Multiple types', price: 'POA · By appointment' },
          { type: 'Bella Collection',          size: 'Multiple types', price: 'POA · By appointment' },
          { type: 'Beach Mansions',            size: 'Premium tier',   price: 'POA' },
          { type: 'Penthouses',                size: 'Top tier',       price: 'POA' }
        ],
        plan: 'Construction-linked plan · 5% booking · 15% on SPA + 4% DLD · phased 60% on construction · 20% on completion Q3 2029',
        planRu: 'Construction-linked · 5% бронь · 15% SPA + 4% DLD · поэтапные 60% по стройке · 20% при сдаче Q3 2029'
      },
      amenities: ['Wellness Pavilion','Glass Boxes pavilions','Aquascape & multi-pools','Sky Pool & Sky Garden','Social Deck','Spa & Deck','Kids Pavilion','250m private beachfront — residents only','Yoga studio','Cinema','Library','Lounge'],
      amenitiesRu: ['Wellness Pavilion','Стеклянные павильоны Glass Boxes','Aquascape и многоуровневые бассейны','Sky Pool и Sky Garden','Social Deck','Spa & Deck','Детский павильон','250 м приватного пляжа — только для резидентов','Студия йоги','Кинозал','Библиотека','Лаунж'],
      brief: "PASSO is Beyond's most ambitious play on the Palm — a paired tower composition on the West Crescent, 250 metres of private beach. Beyond was created as Omniyat's contemporary residential line, less rigid than its commercial parent, more interested in atmosphere and ritual than in floor plates. Fluid biomimetic facades, Glass Box pavilions threaded through a landscaped podium, a sky pool that reads like a horizon line.",
      briefRu: 'PASSO — самый амбициозный заход Beyond на Palm: парная башенная композиция на Западном Crescent, 250 метров приватного пляжа. Beyond создан Omniyat как современная резидентская линия — менее жёсткая, чем материнская коммерческая, и больше про атмосферу и ритуал, чем про планировки. Плавные биомиметические фасады, павильоны Glass Box на ландшафтном подиуме, sky pool, читающийся как линия горизонта.',
      why: "Beyond's design instinct is closer to a fashion house than a typical Dubai developer. PASSO's beachfront scarcity is a structural advantage for the next decade.",
      whyRu: 'Дизайн-инстинкт Beyond ближе к fashion-дому, чем к типичному дубайскому девелоперу. Дефицит первой линии на Crescent — структурное преимущество на ближайшее десятилетие.',
      risk: 'Pricing at top of West Crescent band. For pure capital play, East Crescent (Muraba) trades lower per sq ft today.',
      riskRu: 'Цены в верхней полосе Западного Crescent. Для чистой capital-игры Восточный Crescent (Muraba) сегодня дешевле за фут.',
      location: { area: 'Palm Jumeirah, Dubai', areaRu: 'Palm Jumeirah, Дубай', address: 'West Crescent', addressRu: 'Западный Crescent', coords: '25.1104,55.1092' },
      price: 'AED 4.93M – 98.29M · 960–12,646 sq ft · Q3 2029 · 23 AED/ft² service · Avita + Bella 2B+G+14+R',
      note: 'Avita (Wellness Collection) + Bella towers. Views: Burj Al Arab, Atlantis Royal.',
      noteRu: 'Башни Avita (Wellness Collection) + Bella. Виды: Burj Al Arab, Atlantis Royal.'
    },
    {
      id: 'mrc', lot: '05', name: 'Mr. C Residences', art: 'mrc-hero',
      tagline: 'Quintessential Italian flair',
      taglineRu: 'Безусловный итальянский стиль',
      arch: 'Cipriani × ALTA × Arquitectonica · City Walk Dubai',
      archRu: 'Cipriani × ALTA × Arquitectonica · City Walk Дубай',
      cats: ['experience','soul'],
      size: 'm', height: 'up', ratio: 'tall',
      gallery: [
        'assets/projects/mr-c/06-tower-exterior.jpg',
        'assets/projects/mr-c/01-hero-penthouse-burj.jpg',
        'assets/projects/mr-c/02-living-dining.jpg',
        'assets/projects/mr-c/03-kitchen-calacatta.jpg',
        'assets/projects/mr-c/04-bath-calacatta-brass.jpg',
        'assets/projects/mr-c/07-bedroom-venice.jpg',
        'assets/projects/mr-c/05-spa-pool-travertine.jpg',
        'assets/projects/mr-c/08-detail.jpg',
        'assets/projects/mr-c/09-detail2.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: '162 + penthouses',       score: 4 },
        { k: 'Architect', v: 'Arquitectonica',         score: 4 },
        { k: 'Developer', v: 'ALTA × Cipriani',        score: 4 },
        { k: 'Location',  v: 'City Walk · Dubai',      score: 5 },
        { k: 'Execution', v: 'Q1 2027',                score: 4, pending: true }
      ],
      facts: {
        'Tower': '71 storeys · cascading glass façade',
        'Edition': '162 residences + remarkable penthouses',
        'Collections': 'Signature (2-3BR) · Nobile (4BR half-floor)',
        'Ceilings': '3.0 m (Signature)',
        'Mall access': 'Air-conditioned walkway to Dubai Mall',
        'Completion': 'Dec 2026'
      },
      pricing: {
        bands: [
          { type: 'Signature · 2 BR', size: '2,225 — 2,415 sq ft', price: 'POA' },
          { type: 'Signature · 3 BR', size: '3,015 — 3,211 sq ft', price: 'POA' },
          { type: 'Nobile · 4 BR (half floor)', size: '5,278 — 5,615 sq ft', price: 'POA · Limited collection' }
        ],
        plan: '5% on booking · 15% + 4% DLD on SPA · 10% September 2026 · 70% on completion · No рассрочка после сдачи',
        planRu: '5% при бронировании · 15% + 4% DLD при подписании SPA · 10% сентябрь 2026 · 70% при сдаче · Без рассрочки после сдачи'
      },
      amenities: ['Lobby Lounge with curated art','Outdoor + indoor pools','Holistic Spa: steam, sauna, salt room, oxygen room','Technogym fitness centre','Yoga + Pilates room','Golf simulator','Dedicated 57th-floor events space','Private cinema · Library · Billiards · Podcast room','Little C\'s Kids Club','Director of Residences · Butler · Mr. C Private Global Office','In-Residence Private Dining by Bellini Chef'],
      amenitiesRu: ['Лобби-лаунж с кураторской арт-коллекцией','Открытый и крытый бассейны','Holistic Spa: парная, сауна, соляная комната, кислородная','Тренажёрный зал Technogym','Студия йоги и пилатеса','Гольф-симулятор','Эвент-пространство на 57-м этаже','Кинозал · Библиотека · Бильярдная · Подкаст-комната','Little C\'s — детский клуб','Director of Residences · Дворецкий · Mr. C Private Global Office','Приватный ужин в резиденции от Bellini-шефа'],
      brief: "Mr. C is the rarest type of branded residence — not a fashion house extending into property, but a 90-year-old family hospitality dynasty translating its service code into a home. The Cipriani name means something specific: a small bar in Venice that became the destination for European intellectual life mid-century. Mr. C Residences Downtown is the brothers' first UAE residential.",
      briefRu: 'Mr. C — самый редкий тип брендовой резиденции: не fashion-дом, расширяющийся в недвижимость, а 90-летняя семейная hospitality-династия, переводящая свой кодекс сервиса в формат дома. Имя Cipriani означает конкретное: маленький бар в Венеции, ставший точкой европейской интеллектуальной жизни середины XX века. Mr. C Residences Downtown — первая резиденция братьев в ОАЭ.',
      why: 'Cipriani lineage is unforgeable. 60% back-end payment structure protects the buyer.',
      whyRu: 'Происхождение Cipriani невозможно подделать. Структура оплаты с 60% на конце защищает покупателя.',
      risk: 'Downtown Dubai is densely supplied. Brand premium pays back over 5-7 year hold, not on flip. Tower itself is not a Pritzker architectural object.',
      riskRu: 'Downtown Dubai перенасыщен предложением. Премия за бренд отбивается на горизонте 5–7 лет, а не на флипе. Сама башня — не Pritzker-уровня архитектура.',
      location: { area: 'City Walk, Dubai', areaRu: 'City Walk, Дубай', address: 'City Walk · Dubai', addressRu: 'City Walk · Дубай', coords: '25.2076,55.2615' },
      price: 'AED 8.1M · 2,225 sq ft · Q1 2027 · 35 AED/ft² service',
      note: 'Cipriani lineage from Harry\'s Bar Venice (1931). Bellini Chef in-residence.',
      noteRu: 'Линия Cipriani от Harry\'s Bar в Венеции (1931). Bellini-шеф в резиденции.'
    },

    {
      id: 'row', lot: '06', name: 'The Row Saadiyat', art: 'row-hero',
      tagline: 'Live front row',
      taglineRu: 'Жить в первом ряду',
      arch: 'Aldar · Saadiyat Cultural District · Architect-led',
      archRu: 'Aldar · Культурный квартал Saadiyat · Авторский проект',
      cats: ['experience','soul'],
      size: 'l', height: 'low', ratio: 'wide',
      gallery: [
        'assets/projects/the-row-saadiyat/01.jpg',
        'assets/projects/the-row-saadiyat/02.jpg',
        'assets/projects/the-row-saadiyat/03.jpg',
        'assets/projects/the-row-saadiyat/04.jpg',
        'assets/projects/the-row-saadiyat/05.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: '201 units',              score: 3 },
        { k: 'Architect', v: 'Architect-led',          score: 4 },
        { k: 'Developer', v: 'Aldar',                  score: 5 },
        { k: 'Location',  v: 'Saadiyat Cultural Dist.', score: 5 },
        { k: 'Execution', v: 'Q1 2030',                score: 3, pending: true }
      ],
      facts: {
        'Edition': '201 residences',
        'Unit mix': '1–3 bed with maid + study options',
        'Sizes': '89 — 446 m²',
        'Payment plan': '65/35',
        'Completion': 'Q1 2030',
        'Direct neighbours': 'Louvre, future Guggenheim, Zayed National Museum'
      },
      pricing: {
        bands: [
          { type: '1 Bed',                       size: '89 m²',  price: 'From AED 3.7 M' },
          { type: '2 Bed',                       size: '~140 m²', price: 'From AED 5.8 M' },
          { type: '2 Bed + Maid',                size: '~160 m²', price: 'From AED 7.8 M' },
          { type: '2 Bed + Maid + Study',        size: '~180 m²', price: 'From AED 8.5 M' },
          { type: '3 Bed + Maid + Study',        size: '~250 m²', price: 'From AED 11.5 M' },
          { type: '3 Bed Large + Maid + Study',  size: '~446 m²', price: 'From AED 16.0 M' }
        ],
        plan: '10% + 2% admin + AED 3,150 on booking · 10% Jan 2027 · 5% Aug 2027 · 5% Apr 2028 · 10% Nov 2028 · 60% on handover Q1 2030 · No рассрочка после сдачи',
        planRu: '10% + 2% admin + AED 3 150 при бронировании · 10% янв 2027 · 5% авг 2027 · 5% апр 2028 · 10% ноя 2028 · 60% при сдаче Q1 2030 · Без рассрочки после сдачи'
      },
      amenities: ['Pet Spa and Grooming','Gourmet Cafés and Restaurants','Co-working Lounges + Members Club','Gourmet Supermarket','Boutique Fitness Studios','Boutique Retail Stores','Saadiyat Cultural District access'],
      amenitiesRu: ['Спа и груминг для питомцев','Gourmet-кафе и рестораны','Ко-воркинг лаунжи + Members Club','Gourmet-супермаркет','Бутиковые фитнес-студии','Бутиковый ритейл','Доступ к Saadiyat Cultural District'],
      brief: "The Row Saadiyat is Aldar's most culturally-positioned residential — 201 units placed inside the Saadiyat Cultural District, steps from Louvre Abu Dhabi and the future Guggenheim. The architectural language frames a central courtyard with the Zayed National Museum as the visual anchor. The project is curated for buyers who want their daily commute to be a museum quarter.",
      briefRu: 'The Row Saadiyat — самый культурно-ориентированный жилой проект Aldar: 201 резиденция внутри Культурного квартала Saadiyat, в нескольких шагах от Louvre Abu Dhabi и будущего Guggenheim. Архитектура обрамляет внутренний двор с Национальным музеем Зайеда в качестве визуального якоря. Подбор для покупателей, которые хотят, чтобы их ежедневный путь шёл через музейный квартал.',
      why: 'Most culturally anchored Aldar product · institutional neighbours · Q1 2030 horizon allows the district to mature before handover.',
      whyRu: 'Самый культурно укоренённый продукт Aldar · институциональные соседи · горизонт Q1 2030 даёт кварталу созреть до сдачи.',
      risk: 'Long horizon and Saadiyat resale liquidity. Best held 5+ years.',
      riskRu: 'Длинный горизонт и ограниченная ликвидность на перепродаже на Saadiyat. Лучше удерживать от 5 лет.',
      location: { area: 'Saadiyat Island, Abu Dhabi', areaRu: 'Остров Саадият, Абу-Даби', address: 'Saadiyat Cultural District · next to Louvre', addressRu: 'Культурный квартал Saadiyat · рядом с Louvre', coords: '24.5410,54.4290' },
      price: 'AED 8.3M – 11.3M · 2,243–3,049 sq ft · Q1 2030',
      note: 'Steps from Louvre Abu Dhabi and the future Guggenheim.',
      noteRu: 'В нескольких шагах от Louvre Abu Dhabi и будущего Guggenheim.'
    },

    {
      id: 'time', lot: '07', name: 'Time by Jacob & Co Beachfront', art: 'time-hero',
      tagline: 'Where time crystallizes',
      taglineRu: 'Где время кристаллизуется',
      arch: 'Ohana × Jacob & Co · Beachfront mansions',
      archRu: 'Ohana × Jacob & Co · Особняки первой линии',
      cats: ['edition','experience','gardens'],
      size: 'm', height: 'mid', ratio: 'wide',
      gallery: [
        'assets/projects/time-jacob/01.jpg',
        'assets/projects/time-jacob/02.jpg',
        'assets/projects/time-jacob/03.jpg',
        'assets/projects/time-jacob/04.jpg',
        'assets/projects/time-jacob/05.jpg',
        'assets/projects/time-jacob/06.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: 'Beachfront mansions',  score: 5 },
        { k: 'Brand',     v: 'Jacob & Co',           score: 5 },
        { k: 'Developer', v: 'Ohana Development',    score: 4 },
        { k: 'Location',  v: 'Ghantout · Beachfront', score: 4 },
        { k: 'Execution', v: 'Q4 2028',              vRu: 'Q4 2028', score: 4, pending: true }
      ],
      facts: {
        'Brand partnership': 'Jacob & Co — high jewelry house',
        'Type': 'Beachfront mansions + Beachfront apartments',
        'Location feature': 'Direct private beach + public gardens walk',
        'Driving': '25 min Abu Dhabi airport · 30 min Dubai Marina',
        'Adjacencies': 'Ghantout Racing & Polo Club',
        'Sales': 'By private appointment via Ohana'
      },
      pricing: {
        bands: [
          { type: 'Beachfront Mansion', size: 'Premium tier', price: 'POA' },
          { type: 'Beachfront Apartment', size: 'Multi-bedroom', price: 'POA' }
        ],
        plan: 'Apartments: 5% + 2% ADM + admin on booking · 20% on SPA · 75% over 3 years (6.25% every 3 months) · Villas/Mansions: similar tiered plan · No рассрочка после сдачи',
        planRu: 'Квартиры: 5% + 2% ADM + админ при бронировании · 20% при SPA · 75% в течение 3 лет (6.25% каждые 3 мес) · Виллы/Особняки: аналогичная ступенчатая схема · Без рассрочки после сдачи'
      },
      amenities: ['Private beachfront access','Walking distance to public gardens','Adjacent to Ghantout Racing & Polo Club','Direct Sheikh Zayed Road access','Jacob & Co branded interiors','Concierge by Ohana'],
      amenitiesRu: ['Приватный выход к пляжу','Пешая доступность до публичных садов','Соседство с Ghantout Racing & Polo Club','Прямой выезд на Sheikh Zayed Road','Интерьеры под брендом Jacob & Co','Консьерж от Ohana'],
      brief: 'Time by Jacob & Co is the most jewellery-coded residence in the UAE — a one-of-a-kind partnership between Ohana Development and the New York–Italian high jewelry house Jacob & Co (the maker that pioneered Billionaire Astronomia movements). The site sits between Abu Dhabi and Dubai near Ghantout, with mansions and apartments behind a private beach. The interiors carry Jacob & Co\'s signature lapidary palette — fluted glass, hand-set lighting, lapis-style colour notes.',
      briefRu: 'Time by Jacob & Co — самая ювелирно-кодированная резиденция в ОАЭ: уникальное партнёрство Ohana Development и нью-йоркско-итальянского высокого ювелирного дома Jacob & Co (создатели механизмов Billionaire Astronomia). Площадка между Абу-Даби и Дубаем у Ghantout: особняки и квартиры за приватным пляжем. Интерьеры — фирменная лапидарная палитра Jacob & Co: рифлёное стекло, ручная подсветка, лазурные ноты.',
      why: 'Branded residence where the brand actually shapes the interior — not a wordmark on a tower.',
      whyRu: 'Брендовая резиденция, где бренд реально формирует интерьер, а не просто словесный знак на башне.',
      risk: 'Location between two cities — not the prime Palm or Saadiyat liquidity pool. Best as a personal-use second home.',
      riskRu: 'Между двумя городами — не prime-ликвидность Palm или Saadiyat. Лучше всего как второе жильё для личного пользования.',
      location: { area: 'Al Jurf Gardens, UAE', areaRu: 'Al Jurf Gardens, ОАЭ', address: 'Al Jurf Gardens · Between AD & Dubai', addressRu: 'Al Jurf Gardens · между Абу-Даби и Дубаем', coords: '24.8831,54.8913' },
      price: 'AED 3.1M – 25.85M · 1,098–7,749 sq ft · Q4 2028 · 8 AED/ft² service · Villas + Mansions + Apartments',
      note: 'Jacob & Co branded interiors, private beach, mansion + apartment tiers.',
      noteRu: 'Интерьеры под брендом Jacob & Co, приватный пляж, особняки + квартиры.'
    },

    {
      id: 'akala', lot: '08', name: 'Akala Hotel & Residences', art: 'akala-hero',
      tagline: 'Precision wellness, beyond time',
      taglineRu: 'Точный wellness, вне времени',
      arch: 'Arada Properties · DIFC · Precision Wellness · 48 floors',
      archRu: 'Arada Properties · DIFC · Precision Wellness · 48 этажей',
      cats: ['experience','soul'],
      size: 'm', height: 'up', ratio: 'portrait',
      gallery: [
        'assets/projects/akala/01.jpg',
        'assets/projects/akala/02.jpg',
        'assets/projects/akala/03.jpg',
        'assets/projects/akala/04.jpg',
        'assets/projects/akala/05.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: 'Wellness collection', score: 4 },
        { k: 'Concept',   v: 'Precision Wellness',  score: 5 },
        { k: 'Developer', v: 'Arada',               score: 4 },
        { k: 'Location',  v: "Za'abeel 2 · DIFC",   score: 5 },
        { k: 'Execution', v: 'Q4 2029',             vRu: 'Q4 2029', score: 4, pending: true }
      ],
      facts: {
        'Concept': "World's first 'Precision Wellness Environment'",
        'Components': 'Akala Spa · Everwell · Nourish and Refine',
        'Philosophy': 'Architecture as a Sensory Journey',
        'Wellness': 'Mind + Body Wellness Studios on premises',
        'Service model': 'Hotel-branded residences'
      },
      pricing: {
        bands: [
          { type: 'Wellness apartments', size: 'Multiple types', price: 'POA' },
          { type: 'Penthouses',          size: 'Top floors',     price: 'POA' }
        ],
        plan: '4% DLD Waiver · 10% + AED 3,000 admin on booking · 10% +180d · 5% +360d · 5% +540d · 5% +720d · 5% +900d · 60% on completion · No рассрочка после сдачи',
        planRu: '4% DLD оплачивает девелопер · 10% + AED 3 000 при бронировании · 10% +180д · 5% +360д · 5% +540д · 5% +720д · 5% +900д · 60% при сдаче · Без рассрочки после сдачи'
      },
      amenities: ['Akala Spa · multi-discipline','Everwell wellness clinic','Mind + Body Wellness Studios','Nourish and Refine (curated culinary)','Hotel-grade resident services','Precision Wellness data tracking'],
      amenitiesRu: ['Akala Spa · мультидисциплинарный','Everwell — клинический wellness','Студии Mind + Body Wellness','Nourish and Refine — кураторская кухня','Hotel-grade сервис для резидентов','Precision Wellness · трекинг данных'],
      brief: "Akala is Arada's bet on wellness-as-real-estate — billed as the world's first 'Precision Wellness Environment'. The premise: integrated spa, clinical wellness (Everwell), nutrition (Nourish and Refine), and movement studios as part of the residence stack, not amenities you visit. For buyers who want the residence to actively look after them rather than just stay out of the way.",
      briefRu: 'Akala — ставка Arada на wellness-как-недвижимость, заявленная как первый в мире «Precision Wellness Environment». Идея: интегрированный спа, клинический wellness (Everwell), питание (Nourish and Refine) и движение — как часть резидентского стека, а не amenity, к которому ходишь. Для тех, кому резиденция должна активно заботиться о владельце, а не просто не мешать.',
      why: 'First mover on the precision-wellness narrative in the UAE, on a prime plot between DIFC and Downtown. Arada is one of the more design-forward UAE developers.',
      whyRu: 'First mover на нарративе «точного wellness» в ОАЭ, на сильном участке между DIFC и Downtown. Arada — один из более дизайн-ориентированных девелоперов ОАЭ.',
      risk: 'Wellness category is still being defined — execution will determine value. Branded-residence premium depends on the operator holding its standard.',
      riskRu: 'Категория wellness ещё формируется — стоимость определит исполнение. Премия брендовой резиденции зависит от того, удержит ли оператор стандарт.',
      location: { area: "Za'abeel 2, Dubai", areaRu: "Za'abeel 2, Дубай", address: "Za'abeel 2 · next to DIFC", addressRu: "Za'abeel 2 · рядом с DIFC", coords: '25.2213,55.2867' },
      price: 'AED 3.8M – 88M · 1,036–14,628 sq ft · Q4 2029 · 35 AED/ft² service',
      note: "World's first Precision Wellness residence.",
      noteRu: 'Первая в мире резиденция Precision Wellness.'
    },

    {
      id: 'solaya', lot: '09', name: 'Solaya', art: 'solaya-hero',
      tagline: 'Your exclusive beachfront enclave',
      taglineRu: 'Ваш закрытый beachfront-анклав',
      arch: 'Meraas · Private collection · Jumeirah beachfront',
      archRu: 'Meraas · Private Collection · Береговая линия Jumeirah',
      cats: ['soul','gardens'],
      size: 'm', height: 'high', ratio: 'wide',
      gallery: [
        'assets/projects/solaya/01-aerial.jpg',
        'assets/projects/solaya/02-beachfront.jpg',
        'assets/projects/solaya/03-lobby.jpg',
        'assets/projects/solaya/022.jpg',
        'assets/projects/solaya/028.jpg',
        'assets/projects/solaya/038.jpg',
        'assets/projects/solaya/050.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: 'A Private Collection', score: 5 },
        { k: 'Architect', v: 'Meraas atelier',       score: 4 },
        { k: 'Developer', v: 'Meraas',               score: 5 },
        { k: 'Location',  v: 'La Mer · Jumeirah',    vRu: 'La Mer · Джумейра', score: 5 },
        { k: 'Execution', v: 'Q4 2029',              vRu: 'Q4 2029', score: 4, pending: true }
      ],
      facts: {
        'Composition': '9 buildings (Solaya 1–9) — beachfront enclave',
        'Key features': 'Sunset Pool · Gardens · Beach Pool · Yoga Deck · Wellness · Fitness',
        'Arrival': 'Private gated, separate beach park arrival',
        'Setting': 'Cultured coastal community next to renowned hotels'
      },
      pricing: {
        bands: [
          { type: 'Residences (Solaya 1–9)', size: 'Multiple types', price: 'POA · Private collection' }
        ],
        plan: '20% + 4% DLD + AED 3,150 OQOOD on booking · 10% Dec 2026 · 10% Jun 2027 · 10% Dec 2027 · 10% Jun 2028 · 40% on completion Q4 2029 · No рассрочка после сдачи',
        planRu: '20% + 4% DLD + AED 3 150 OQOOD при бронировании · 10% дек 2026 · 10% июнь 2027 · 10% дек 2027 · 10% июнь 2028 · 40% при сдаче Q4 2029 · Без рассрочки после сдачи'
      },
      amenities: ['Sunset Pool','Curated gardens connecting buildings','Beach Pool with park access','Kids Pool + Kids Play Area','Yoga Deck','Wellness Centre','Fitness Lounge','Private gated arrival','Beach Park arrival point'],
      amenitiesRu: ['Sunset Pool — закатный бассейн','Сады, соединяющие здания','Beach Pool с выходом к парку','Детский бассейн + игровая зона','Yoga Deck','Wellness-центр','Fitness Lounge','Приватный gated-въезд','Точка входа в Beach Park'],
      brief: 'Solaya is Meraas at its most boutique — a 9-building beachfront enclave on Jumeirah, billed as a Private Collection. The composition reads as a small coastal village: pools fold into gardens, gardens fold into a central beach park, beach park folds into a private shoreline. The renderings hold back on the bling — clean off-white facades, palm canopies, sunset palette. For buyers who treat the beach as a daily practice.',
      briefRu: 'Solaya — самый бутиковый Meraas: beachfront-анклав из 9 зданий на Jumeirah, заявленный как Private Collection. Композиция читается как маленькая прибрежная деревня: бассейны переходят в сады, сады — в центральный пляжный парк, пляжный парк — в приватную береговую линию. В рендерах нет глянца: чистые молочные фасады, пальмовые навесы, закатная палитра. Для покупателей, у которых пляж — ежедневная практика.',
      why: 'Meraas Private Collections trade differently from standard Meraas — tighter community, hand-selected buyers. Beachfront Jumeirah has thinnest supply pipeline.',
      whyRu: 'Meraas Private Collections отыгрываются иначе, чем обычный Meraas — более тесное сообщество, отобранные покупатели. Beachfront на Jumeirah — самая тонкая полоса предложения.',
      risk: 'Limited public information at this stage — pricing and unit details surfaced only at private gallery viewings.',
      riskRu: 'Публичной информации мало — цены и детали квартир раскрываются только на закрытых показах в галерее.',
      location: { area: 'La Mer, Jumeirah', areaRu: 'La Mer, Jumeirah', address: 'Solaya · La Mer · Jumeirah', addressRu: 'Solaya · La Mer · Jumeirah', coords: '25.2271,55.2563' },
      price: 'NEW LAUNCH · EOI AED 1M · Q4 2029 · 44 AED/ft² service · Sales Q2 2026',
      note: '9-building beachfront enclave on Jumeirah.',
      noteRu: 'Beachfront-анклав из 9 зданий на Jumeirah.'
    },

    {
      id: 'hado', lot: '11', name: 'Hado by Beyond', art: 'hado-hero',
      tagline: 'Stillness moves',
      taglineRu: 'Тишина движется',
      arch: 'Beyond / Omniyat · Three towers A/B/C · Dubai Islands',
      archRu: 'Beyond / Omniyat · Три башни A/B/C · Dubai Islands',
      cats: ['soul','capital'],
      size: 'm', height: 'up', ratio: 'wide',
      gallery: ['assets/projects/hado/01.jpg','assets/projects/hado/02.jpg','assets/projects/hado/03.jpg','assets/projects/hado/04.jpg','assets/projects/hado/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Three-tower composition', score: 4 },
        { k: 'Architect', v: 'Beyond design studio',     score: 4 },
        { k: 'Developer', v: 'Omniyat / Beyond',         score: 5 },
        { k: 'Location',  v: 'Sea-facing waterfront',    score: 5 },
        { k: 'Execution', v: 'Q3 2029',                  vRu: 'Q3 2029', score: 4, pending: true }
      ],
      facts: { 'Composition':'Three towers in quiet harmony','Orientation':'Opens toward water — light + expansive views','Architecture':'Glass corners dissolve interior/exterior boundaries','Theme':'"Energy" — subtle, fluid, alive','Sales':'By Beyond gallery appointment' },
      pricing: { bands: [{ type:'Residences', size:'Multiple types', price:'POA' }], plan:'10% + 4% DLD + AED 1,040 fees on booking · 10% Jul 2026 · 5% Jan 2027 · 5% May 2027 · 5% Oct 2027 · 5% Mar 2028 · 5% Jul 2028 · 5% Nov 2028 · 50% on completion Q3 2029', planRu:'10% + 4% DLD + AED 1 040 при бронировании · 10% июль 2026 · 5% янв 2027 · 5% май 2027 · 5% окт 2027 · 5% мар 2028 · 5% июль 2028 · 5% ноя 2028 · 50% при сдаче Q3 2029' },
      amenities: ['Sea-facing orientation','Three-tower waterfront design','Glass-cornered residences','Beyond signature interior package','Curated wellness amenities'],
      amenitiesRu: ['Ориентация к морю','Дизайн трёх waterfront-башен','Резиденции со стеклянными углами','Фирменный интерьерный пакет Beyond','Кураторские wellness-amenities'],
      brief: "Hado is Beyond's quieter sibling to PASSO — three towers reading as a single composition, oriented toward water, glass corners that dissolve interior boundaries. The name borrows from Japanese 'hadō' (wave/vibration) — the project's narrative is energy as architecture. For buyers who want Beyond's atelier-grade design language without the centre-stage PASSO position.",
      briefRu: 'Hado — более тихая сестра PASSO от Beyond: три башни, читающиеся как единая композиция, ориентированные на воду, стеклянные углы, растворяющие границы интерьера. Имя — от японского hadō (волна, вибрация); нарратив — энергия как архитектура. Для тех, кому нужен ателье-уровень дизайна Beyond без центральной позиции PASSO.',
      why: "Same Beyond design DNA, calmer entry point. Three-tower composition trades cleanly between units.",
      whyRu: 'Тот же почерк Beyond, более спокойный вход. Трёхбашенная композиция легко торгуется между квартирами.',
      risk: 'Less prime than PASSO West Crescent — pricing should reflect that.',
      riskRu: 'Менее prime, чем PASSO на Западном Crescent — цена должна это отражать.',
      location: { area: 'Dubai Islands', areaRu: 'Dubai Islands', address: 'Three towers A/B/C · B+G+21', addressRu: 'Три башни A/B/C · B+G+21', coords: '25.2790,55.3320' },
      price: 'AED 2.82M – 8.32M · 904–2,675 sq ft · Q3 2029 · 18 AED/ft² service',
      note: '"Stillness moves" — three towers on Dubai Islands.',
      noteRu: '«Тишина движется» — три башни на Dubai Islands.'
    },

    {
      id: 'soulever', lot: '12', name: 'Soulever by Beyond', art: 'soulever-hero',
      tagline: "Dubai's next power couple",
      taglineRu: 'Следующая power-пара Дубая',
      arch: 'Beyond / Omniyat · Two-tower duet · Dubai Maritime City',
      archRu: 'Beyond / Omniyat · Дуэт двух башен · Dubai Maritime City',
      cats: ['soul','capital'],
      size: 's', height: 'mid', ratio: 'portrait',
      gallery: ['assets/projects/soulever/01.jpg','assets/projects/soulever/02.jpg','assets/projects/soulever/03.jpg','assets/projects/soulever/04.jpg','assets/projects/soulever/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Two-tower duet',          score: 4 },
        { k: 'Architect', v: 'Beyond design studio',     score: 4 },
        { k: 'Developer', v: 'Omniyat / Beyond',         score: 5 },
        { k: 'Location',  v: 'Dubai Maritime City',      score: 4 },
        { k: 'Execution', v: 'Q1 2029',                  vRu: 'Q1 2029', score: 4, pending: true }
      ],
      facts: { 'Composition':"Two towers — Dubai's next 'power couple'",'Location':'Dubai Maritime City — seafront × urban','Mood':'Seafront bliss meets urban energy','Sales':'By Beyond gallery appointment' },
      pricing: { bands: [{ type:'Residences', size:'Multiple types', price:'POA' }], plan:'10% + 4% DLD + AED 1,040 fees on booking · 10% Jul 2026 · 5% Jan 2027 · 5% May 2027 · 5% Sep 2027 · 5% Jan 2028 · 5% May 2028 · 5% Sep 2028 · 50% on completion Q1 2029', planRu:'10% + 4% DLD + AED 1 040 при бронировании · 10% июль 2026 · 5% янв 2027 · 5% май 2027 · 5% сен 2027 · 5% янв 2028 · 5% май 2028 · 5% сен 2028 · 50% при сдаче Q1 2029' },
      amenities: ['Seafront promenade access','Twin-tower amenity sharing','Beyond design package','Dubai Maritime City landmarks'],
      amenitiesRu: ['Доступ к набережной','Общие amenities двух башен','Дизайн-пакет Beyond','Лэндмарки Dubai Maritime City'],
      brief: "Soulever is Beyond's seafront duet in Dubai Maritime City — two towers positioned as a brand 'couple'. The brochure is written in love-letter prose. The product underneath: Beyond's atelier-grade interior package at a different price point and a different shoreline than PASSO. For buyers who want a Beyond residence at a softer entry.",
      briefRu: 'Soulever — seafront-дуэт Beyond в Dubai Maritime City: две башни как «пара» бренда. Брошюра написана как любовное письмо. Внутри — тот же ателье-уровень интерьеров Beyond, но другая ценовая точка и другая береговая линия. Для тех, кому нужен Beyond с мягким входом.',
      why: 'Beyond brand consistency, lower entry than PASSO. Dubai Maritime City is an emerging seafront submarket.',
      whyRu: 'Та же консистентность бренда Beyond, более низкий вход, чем PASSO. Dubai Maritime City — растущий seafront-субрынок.',
      risk: 'Maritime City liquidity is less established than the Palm. Best held by buyers who intend to occupy.',
      riskRu: 'Ликвидность Maritime City менее зрелая, чем Palm. Лучше всего держать покупателям, планирующим жить.',
      location: { area: 'Dubai Maritime City', areaRu: 'Dubai Maritime City', address: 'Dubai Maritime City — seafront', addressRu: 'Dubai Maritime City — seafront', coords: '25.2496,55.2762' },
      price: 'AED 2.6M – 40.87M · 842–15,990 sq ft · Q1 2029 · 20 AED/ft² service · Tower A G+3P+31, Tower B G+3P+44',
      note: 'Two-tower duet in Dubai Maritime City.',
      noteRu: 'Дуэт двух башен в Dubai Maritime City.'
    },

    {
      id: 'alba', lot: '13', name: 'The Alba by OMNIYAT', art: 'alba-hero',
      tagline: 'Where presence rewrites time',
      taglineRu: 'Где присутствие переписывает время',
      arch: 'OMNIYAT · Zaha Hadid Architects · Dorchester service',
      archRu: 'OMNIYAT · Zaha Hadid Architects · Сервис Dorchester',
      cats: ['art','soul','experience'],
      size: 'l', height: 'low', ratio: 'wide',
      gallery: ['assets/projects/alba/01.jpg','assets/projects/alba/02.jpg','assets/projects/alba/03.jpg','assets/projects/alba/04.jpg','assets/projects/alba/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Wellness collection',  score: 5 },
        { k: 'Architect', v: 'Zaha Hadid Architects', score: 5 },
        { k: 'Developer', v: 'OMNIYAT',               score: 5 },
        { k: 'Location',  v: 'Palm Jumeirah',          score: 5 },
        { k: 'Execution', v: 'Q4 2028',               vRu: 'Q4 2028', score: 4, pending: true }
      ],
      facts: { 'Architect':'Zaha Hadid Architects (ZHA) — curved spatial language','Landscape':'Vladimir Djurovic — 26,000 m² of gardens, terraces, water','Service':'Dorchester Collection (same as The Lana)','Position':'Palm Jumeirah','Concept':'Wellbeing as architecture — light, materials, service composed for longevity','OMNIYAT siblings':'The Opus · One at Palm Jumeirah · AVA at Palm · The Lana Dorchester' },
      pricing: { bands: [{ type:'Residences', size:'Multiple types', price:'POA' }, { type:'Penthouses', size:'Top floors', price:'POA' }], plan:'5% on booking · 20% + 4% DLD + AED 1,090 on SPA (30 days) · 10% on enabling works · 5% on ground floor · 10% on super-structure · 10% on glazing · 40% on completion Q4 2028', planRu:'5% при бронировании · 20% + 4% DLD + AED 1 090 при SPA (30 дней) · 10% при подготовительных работах · 5% при готовом первом этаже · 10% при готовой надземной части · 10% при остеклении · 40% при сдаче Q4 2028' },
      amenities: ['26,000 m² gardens & water features by Vladimir Djurovic','Dorchester Collection resident service','ZHA curved architecture and interiors','Wellness-focused programming','Palm Jumeirah location'],
      amenitiesRu: ['26 000 м² садов и водных партеров (Vladimir Djurovic)','Резидентский сервис Dorchester Collection','Изгибная архитектура и интерьеры ZHA','Программа с акцентом на wellness','Локация Palm Jumeirah'],
      brief: "The Alba is OMNIYAT's most ambitious wellness statement — Zaha Hadid Architects curating the building, Vladimir Djurovic laying down 26,000 m² of gardens, and Dorchester Collection running the service (same operator as The Lana). The pitch is wellbeing as architecture: how light moves through a room, how materials meet skin, how recovery is supported through the day. For collectors of OMNIYAT (Opus, One, AVA, Lana) this is the next chapter — inward and slower.",
      briefRu: 'The Alba — самое амбициозное wellness-высказывание OMNIYAT: Zaha Hadid Architects ведут здание, Владимир Джурович закладывает 26 000 м² садов, а Dorchester Collection держит сервис (тот же оператор, что в The Lana). Тезис — благополучие как архитектура: как свет движется по комнате, как материалы касаются кожи, как восстановление поддерживается в течение дня. Для коллекционеров OMNIYAT (Opus, One, AVA, Lana) — следующая глава: внутрь и медленнее.',
      why: "ZHA + Dorchester + OMNIYAT triumvirate — same constellation as The Lana. Tightest wellness narrative in Dubai prime.",
      whyRu: 'Триумвират ZHA + Dorchester + OMNIYAT — то же созвездие, что у The Lana. Самый цельный wellness-нарратив в Dubai prime.',
      risk: 'Pricing reflects ZHA/Dorchester pairing — premium entry.',
      riskRu: 'Цена отражает пару ZHA/Dorchester — премиум-вход.',
      location: { area: 'Palm Jumeirah, Dubai', areaRu: 'Palm Jumeirah, Дубай', address: 'Palm Jumeirah · OMNIYAT frond', addressRu: 'Palm Jumeirah · «лист» OMNIYAT', coords: '25.1401,55.1395' },
      price: 'AED 18.2M – 77.1M · 1,592–7,383 sq ft · Q4 2028 · 45 AED/ft² service · Furnished + Unfurnished 2B+G+11',
      note: 'Zaha Hadid + Dorchester service · 26,000 m² of gardens.',
      noteRu: 'Zaha Hadid + сервис Dorchester · 26 000 м² садов.'
    },

    {
      id: 'four-seasons-saadiyat', lot: '14', name: 'Four Seasons Private Residences Saadiyat', art: 'fs-hero',
      tagline: 'A living masterpiece, composed by nature',
      taglineRu: 'Живой шедевр, написанный природой',
      arch: 'ALAIN × Four Seasons · Al Saadiyat Island · Villas + Mansions',
      archRu: 'ALAIN × Four Seasons · остров Саадият · виллы + особняки',
      cats: ['experience','gardens'],
      size: 'l', height: 'mid', ratio: 'wide',
      gallery: ['assets/projects/four-seasons-saadiyat/01.jpg','assets/projects/four-seasons-saadiyat/02.jpg','assets/projects/four-seasons-saadiyat/03.jpg','assets/projects/four-seasons-saadiyat/04.jpg','assets/projects/four-seasons-saadiyat/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Branded residences',     score: 5 },
        { k: 'Architect', v: 'Nature-led design',      score: 4 },
        { k: 'Developer', v: 'ALAIN × Four Seasons',   score: 5 },
        { k: 'Location',  v: 'Saadiyat Beach · AD',    score: 5 },
        { k: 'Execution', v: 'Q2 2029',                vRu: 'Q2 2029', score: 4, pending: true }
      ],
      facts: { 'Brand':'Four Seasons — branded residential operation','Setting':'Saadiyat Beach — sea-turtle nesting beach','Design':'Architecture + landscape + interiors composed in nature\'s rhythm','Position':'Sanctuary sculpted by the sea — coastal elegance' },
      pricing: { bands: [{ type:'Residences', size:'Multiple types', price:'POA' }, { type:'Penthouses', size:'Top floors', price:'POA' }], plan:'5% booking · 5% + 2% ADM + AED 5,250 on SPA · 5% every 6 months × 6 milestones (36 months) · 60% on completion Q4 2029 · No рассрочка после сдачи', planRu:'5% бронь · 5% + 2% ADM + AED 5 250 при SPA · 5% каждые 6 мес × 6 раз (36 мес) · 60% при сдаче Q4 2029 · Без рассрочки после сдачи' },
      amenities: ['Four Seasons resident service','Saadiyat Beach (turtle-nesting protected shoreline)','Curated nature-led landscaping','Private spa + concierge','Saadiyat Cultural District proximity'],
      amenitiesRu: ['Резидентский сервис Four Seasons','Пляж Saadiyat (защищённая зона гнездования черепах)','Природный ландшафт','Приватный спа + консьерж','Близость к Saadiyat Cultural District'],
      brief: "Four Seasons Private Residences at Saadiyat Beach is Mubadala's most service-coded coastal product — a Four Seasons branded operation set on a sea-turtle-nesting beach, with architecture and landscape composed to disappear into nature. Four Seasons as branded residential is rare in UAE — most Four Seasons here are hotels, not homes you buy. For collectors who treat hospitality service as the asset.",
      briefRu: 'Four Seasons Private Residences на Saadiyat Beach — самый сервис-ориентированный береговой продукт Mubadala: брендированная Four Seasons-операция на пляже гнездования морских черепах, с архитектурой и ландшафтом, спрятанными в природу. Four Seasons как brand residential редко встречается в ОАЭ — здесь Four Seasons это в основном отели, а не дома для покупки. Для коллекционеров, для которых сервис hospitality — это сам актив.',
      why: 'Four Seasons branded residential is a small global cohort. Mubadala sovereign developer underwrites Saadiyat as a destination.',
      whyRu: 'Резиденции под брендом Four Seasons — узкий круг объектов в мире. Mubadala как государственный застройщик делает ставку на Saadiyat.',
      risk: 'Saadiyat liquidity is thinner than Dubai prime. Hold horizon 5-7 years.',
      riskRu: 'Ликвидность Saadiyat ниже, чем у Dubai prime. Горизонт удержания 5–7 лет.',
      location: { area: 'Al Saadiyat Island, Abu Dhabi', areaRu: 'Остров Саадият, Абу-Даби', address: 'Al Saadiyat Island', addressRu: 'Остров Саадият', coords: '24.5300,54.4080' },
      price: 'AED 69.9M – 143.6M · 17,451–22,718 sq ft · Q4 2029 · 24 AED/ft² service',
      note: 'Four Seasons branded residences on Saadiyat Beach.',
      noteRu: 'Резиденции под брендом Four Seasons на Saadiyat Beach.'
    },

    {
      id: 'cheval', lot: '15', name: 'Cheval Residences Dubai Islands', art: 'cheval-hero',
      tagline: 'A promise, shaped through design',
      taglineRu: 'Обещание, форма которого — дизайн',
      arch: 'AVENEW Development · Cheval Collection serviced · G+7+R',
      archRu: 'AVENEW Development · Сервисные резиденции Cheval Collection · G+7+R',
      cats: ['experience'],
      size: 'm', height: 'up', ratio: 'wide',
      gallery: ['assets/projects/cheval/01.jpg','assets/projects/cheval/02.jpg','assets/projects/cheval/03.jpg','assets/projects/cheval/04.jpg','assets/projects/cheval/05.jpg'],
      attrs: [
        { k: 'Edition',   v: '99 units · G+7',          score: 4 },
        { k: 'Architect', v: 'Layered horizontal',      score: 4 },
        { k: 'Developer', v: 'Avenew × Wadeen',         score: 4 },
        { k: 'Location',  v: 'Dubai Islands',           score: 4 },
        { k: 'Execution', v: 'Q1 2029',                 score: 4, pending: true }
      ],
      facts: { 'Brand':'Cheval Collection — international luxury serviced hospitality','Edition':'99 exclusive units · G+7 building','Unit mix':'1BD (60) · 2BD (31) · 3BD (8)','Completion':'Q1 2029','Architecture':'Layered horizontal planes — clarity, proportion, rhythm','Greenery':'Integrated across terraces and pathways' },
      pricing: { bands: [{ type:'1 BD', size:'763 – 1,205 sq ft', price:'POA · 60 units' }, { type:'2 BD', size:'1,156 – 1,890 sq ft', price:'POA · 31 units' }, { type:'3 BD', size:'1,874 – 4,322 sq ft', price:'POA · 8 units' }], plan:'10% + 5% VAT + 4% DLD + AED 3,500 OQOOD on booking · 10% Jun 2026 · 5% Nov 2026 · 5% May 2027 · 5% Nov 2027 · 5% May 2028 · 10% Nov 2028 · 50% on handover Q1 2029 · 5% VAT on each milestone', planRu:'10% + 5% НДС + 4% DLD + AED 3 500 OQOOD при бронировании · 10% июнь 2026 · 5% ноя 2026 · 5% май 2027 · 5% ноя 2027 · 5% май 2028 · 10% ноя 2028 · 50% при сдаче Q1 2029 · 5% НДС на каждый платёж' },
      amenities: ['Cheval Collection serviced hospitality','Integrated greenery on terraces','Private home + 5-star hotel experience','Discreet concierge','Panoramic views (each unit)'],
      amenitiesRu: ['Cheval Collection serviced hospitality','Зелень, интегрированная в террасы','Приватный дом + 5-звёздочный hotel-сервис','Дискретный консьерж','Панорамные виды (каждый юнит)'],
      brief: "Cheval Residences Dubai Islands is the brand's first serviced-residential entry in the UAE — Cheval Collection runs serviced residences across London, Edinburgh, Geneva, with a reputation for understated five-star service-in-the-home. Dubai Islands is a newer prime location with fewer name-brand operators present. 99 units total, very small editions in the upper tiers (only 8 three-bedroom units).",
      briefRu: 'Cheval Residences Dubai Islands — первый проект сервисных резиденций бренда в ОАЭ. У Cheval Collection есть сервисные резиденции в Лондоне, Эдинбурге, Женеве — с репутацией ненавязчивого пятизвёздочного сервиса дома. Dubai Islands — новый престижный адрес, где сильных брендов пока мало. Всего 99 резиденций, в верхних линиях очень малые серии (всего 8 трёхспальных).',
      why: 'European serviced-residential brand entering UAE at the right cycle. 99-unit edition stays manageable. 3BD edition (8 units) is collectible.',
      whyRu: 'Европейский бренд сервисных резиденций входит в ОАЭ в правильном цикле. Серия из 99 резиденций остаётся компактной. Линия из трёх спален (8 резиденций) — коллекционная.',
      risk: 'Dubai Islands resale market is still maturing — brand premium does the heavy lifting.',
      riskRu: 'Вторичный рынок Dubai Islands ещё созревает — надбавка за бренд держит на себе основную нагрузку.',
      location: { area: 'Dubai Islands, Dubai', areaRu: 'Dubai Islands, Дубай', address: 'Dubai Islands', addressRu: 'Dubai Islands', coords: '25.2780,55.3290' },
      price: 'AED 2.95M – 13.4M · 763–4,322 sq ft · Q1 2029 · 38 AED/ft² service',
      note: 'Cheval Collection serviced residential · 99 units · Q1 2029.',
      noteRu: 'Сервисные резиденции Cheval Collection · 99 резиденций · Q1 2029.'
    },

    {
      id: 'jumeirah-et', lot: '16', name: 'Jumeirah Residences Emirates Towers', art: 'jet-hero',
      tagline: 'A realm of luxury in living spaces',
      taglineRu: 'Сфера роскоши в жилом пространстве',
      arch: 'Meraas × Jumeirah Hotels & Resorts · DIFC',
      archRu: 'Meraas × Jumeirah Hotels & Resorts · DIFC',
      cats: ['experience'],
      size: 'l', height: 'mid', ratio: 'wide',
      gallery: ['assets/projects/jumeirah-et/01.jpg','assets/projects/jumeirah-et/02.jpg','assets/projects/jumeirah-et/03.jpg','assets/projects/jumeirah-et/04.jpg','assets/projects/jumeirah-et/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Branded residences', score: 5 },
        { k: 'Brand',     v: 'Jumeirah Hotels',   score: 5 },
        { k: 'Developer', v: 'Meraas × Jumeirah', score: 5 },
        { k: 'Location',  v: 'Emirates Towers',   score: 5 },
        { k: 'Execution', v: 'Q3 2030',           vRu: 'Q3 2030', score: 4, pending: true }
      ],
      facts: { 'Operator':'Jumeirah Hotels & Resorts','Sister properties':'Burj Al Arab · Marsa Al Arab · Olhahali Maldives · Capri Palace Italy','Location':'Emirates Towers / DIFC adjacency','Type':'Ultra-luxury serviced residential' },
      pricing: { bands: [{ type:'Residences', size:'Multiple types', price:'POA' }], plan:'20% + 4% DLD + AED 3,150 OQOOD on booking · 5% Nov 2026 · 5% Apr 2027 · 10% Sep 2027 · 10% Feb 2028 · 50% on completion Q3 2030 · No рассрочка после сдачи', planRu:'20% + 4% DLD + AED 3 150 OQOOD при бронировании · 5% ноя 2026 · 5% апр 2027 · 10% сен 2027 · 10% фев 2028 · 50% при сдаче Q3 2030 · Без рассрочки после сдачи' },
      amenities: ['Jumeirah hospitality service','DIFC walking access','Concierge by Jumeirah','Curated experiences package','Emirates Towers landmark address'],
      amenitiesRu: ['Hospitality-сервис Jumeirah','Пешая доступность до DIFC','Консьерж от Jumeirah','Кураторский пакет experiences','Лэндмарк-адрес Emirates Towers'],
      brief: "Jumeirah Residences Emirates Towers is the brand's second UAE serviced residential play with Meraas (after Marsa Al Arab). Jumeirah operates Burj Al Arab, Marsa Al Arab, Olhahali Maldives, Capri Palace Italy — they know how to run service at a quiet level. The Emirates Towers address sits in the original DIFC business spine. For buyers who want walk-to-DIFC + hotel-grade service.",
      briefRu: 'Jumeirah Residences Emirates Towers — второй serviced-residential проект бренда с Meraas в ОАЭ (после Marsa Al Arab). Jumeirah управляет Burj Al Arab, Marsa Al Arab, Olhahali Maldives, Capri Palace Italy — они умеют держать сервис на тихом уровне. Адрес Emirates Towers — это исторический бизнес-хребет DIFC. Для тех, кому нужен walk-to-DIFC + hotel-grade сервис.',
      why: 'Jumeirah-Meraas pairing has the Marsa Al Arab playbook to draw on. DIFC walking adjacency is increasingly scarce.',
      whyRu: 'Связка Jumeirah-Meraas опирается на playbook Marsa Al Arab. Walk-to-DIFC всё более дефицитен.',
      risk: 'Emirates Towers cluster is older Dubai prime — service brand carries the long-term value.',
      riskRu: 'Кластер Emirates Towers — более старый Dubai prime, долгосрочную стоимость держит бренд сервиса.',
      location: { area: 'Trade Center 2, Dubai', areaRu: 'Trade Center 2, Дубай', address: 'Emirates Towers · Tower A & B · 59 floors', addressRu: 'Emirates Towers · Tower A и B · 59 этажей', coords: '25.2174,55.2818' },
      price: 'AED 36.16M · 3,468 sq ft · Q3 2030 · 40 AED/ft² service',
      note: 'Jumeirah Hotels & Resorts branded residential by Meraas.',
      noteRu: 'Резиденции под брендом Jumeirah Hotels & Resorts от Meraas.'
    },

    {
      id: 'enara', lot: '17', name: 'ENARA by OMNIYAT', art: 'enara-hero',
      tagline: 'Work. Life. Mastered.',
      taglineRu: 'Работа. Жизнь. Освоено.',
      arch: 'OMNIYAT · Dubai Water Canal · Marasi Bay',
      archRu: 'OMNIYAT · Dubai Water Canal · Marasi Bay',
      cats: ['icons','capital'],
      size: 's', height: 'up', ratio: 'tall',
      gallery: ['assets/projects/enara/01.jpg','assets/projects/enara/02.jpg','assets/projects/enara/03.jpg','assets/projects/enara/04.jpg','assets/projects/enara/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Mixed-use tower',    score: 4 },
        { k: 'Concept',   v: '"Lighthouse" form',  score: 4 },
        { k: 'Developer', v: 'OMNIYAT',            score: 5 },
        { k: 'Location',  v: 'Dubai Canal × Marasi', score: 5 },
        { k: 'Execution', v: 'Q4 2028',            vRu: 'Q4 2028', score: 4, pending: true }
      ],
      facts: { 'Total office':'317,939 sq ft','Crown offices':'143,337 sq ft','Members\' Club (L1–L4)':'68,488 sq ft','Retail':'12,189 sq ft','Landscaping':'193,750 sq ft','Office elevators':'12','Parking':'595 spaces','Walking':'10 min Dubai Mall · 15 min Burj Khalifa','Position':'Apex of Dubai Canal overlooking Marasi Bay' },
      pricing: { bands: [{ type:'Crown offices', size:'Premium tier', price:'POA' }, { type:'Office floors', size:'Multiple sizes', price:'POA' }, { type:'Members\' Club', size:'L1–L4', price:'Invitation' }], plan:'5% on booking · 20% + 4% DLD + AED 1,090 + 5% VAT on SPA (30 days) · 5% on piling · 5% on excavation · 10% on sub-structure · 10% on structure · 10% on façade · 5% on MEP · 30% on completion Q4 2028', planRu:'5% при бронировании · 20% + 4% DLD + AED 1 090 + 5% НДС при SPA (30 дней) · 5% при начале свайных работ · 5% при готовом основании · 10% при готовой подструктуре · 10% при готовой структуре · 10% при готовом фасаде · 5% при MEP · 30% при сдаче Q4 2028' },
      amenities: ['Private Members\' Club (4 floors, 68,488 sq ft)','Canal-side landscaping','Crown Offices at top','Concierge + valet','12 office elevators','595 parking spaces','Direct Marasi Bay frontage'],
      amenitiesRu: ['Приватный Members\' Club (4 этажа, 68 488 кв. фт.)','Ландшафт вдоль канала','Crown Offices наверху','Консьерж + валет','12 офисных лифтов','595 парковочных мест','Прямой выход к Marasi Bay'],
      brief: "ENARA is OMNIYAT's commercial-coded landmark on the Dubai Canal — a 'lighthouse' tower at the canal apex, overlooking Marasi Bay. The mix is office-led (300K+ sq ft) with a four-floor private members' club and Crown Offices at the top. Inspired by the Arabic word for enlightenment. For founders and partners who want a workplace that carries brand weight, with the same OMNIYAT DNA that runs The Opus and The Lana.",
      briefRu: 'ENARA — коммерческий лэндмарк OMNIYAT на Dubai Canal: «маяк»-башня на изгибе канала с видом на Marasi Bay. Микс — офис-led (300K+ кв. фт.), четырёхэтажный приватный members\' club и Crown Offices наверху. Имя — от арабского «просвещение». Для фаундеров и партнёров, которым нужно рабочее место с брендовым весом, на той же OMNIYAT-ДНК что и The Opus, The Lana.',
      why: "OMNIYAT commercial product trades on the same design strength as their residential. Crown floors are limited and collectible.",
      whyRu: 'Коммерческий продукт OMNIYAT торгуется на той же дизайн-силе, что и их residential. Crown-этажи ограничены и коллекционны.',
      risk: 'Primarily commercial — different liquidity dynamics than residential. Members\' club access requires invitation/qualification.',
      riskRu: 'В основном коммерческий — иная динамика ликвидности, чем у residential. Доступ к members\' club — по приглашению/квалификации.',
      location: { area: 'Business Bay, Dubai', areaRu: 'Business Bay, Дубай', address: 'Marasi Drive · Marasi Bay · Business Bay', addressRu: 'Marasi Drive · Marasi Bay · Business Bay', coords: '25.1862,55.2655' },
      price: 'AED 78.2M – 108.3M · 12,264–15,478 sq ft per unit · Q4 2028 · 26 AED/ft² service · 21-storey · Commercial',
      note: 'Office-led OMNIYAT landmark on Dubai Canal.',
      noteRu: 'Офисный лэндмарк OMNIYAT на Dubai Canal.'
    },

    {
      id: 'arista', lot: '18', name: 'Arista Wadi Villas', art: 'aw-hero',
      tagline: 'A secluded oasis in Meydan',
      taglineRu: 'Уединённый оазис в Meydan',
      arch: 'Arista Properties (PBG) · District 11 Meydan',
      archRu: 'Arista Properties (PBG) · District 11 Meydan',
      cats: ['gardens','capital'],
      size: 'm', height: 'low', ratio: 'wide',
      gallery: ['assets/projects/arista-wadi/01.jpg','assets/projects/arista-wadi/02.jpg','assets/projects/arista-wadi/03.jpg','assets/projects/arista-wadi/04.jpg','assets/projects/arista-wadi/05.jpg'],
      attrs: [
        { k: 'Edition',   v: '30 villas',          score: 4 },
        { k: 'Unit mix',  v: '4 / 5 / 6 BR',       score: 4 },
        { k: 'Developer', v: 'Arista Properties',  score: 4 },
        { k: 'Location',  v: 'District 11 Meydan', score: 4 },
        { k: 'Execution', v: 'Q4 2026',            score: 4, pending: true }
      ],
      facts: { 'Edition':'30 exclusive villas','Unit mix':'4BR (6,545 sq ft) · 5BR (8,020 sq ft) · 6BR Mansion (16,085 sq ft)','Layout':'Internal courtyards · secluded gardens · internal water-scape','Completion':'Q4 2026','Plan':'60% booking · 40% handover','Location':'Meydan District 11 — premier lifestyle community' },
      pricing: { bands: [
        { type:'4 BR Villa',     size:'6,545 sq ft',  price:'From AED 14 M' },
        { type:'5 BR Villa',     size:'8,020 sq ft',  price:'POA' },
        { type:'6 BR Mansion',   size:'16,085 sq ft', price:'POA' }
      ], plan:'10% + 4% DLD + AED 5,250 + OQOOD on booking · 10% on SPA (30 days) · 10% +5 months SPA · 10% +10 months SPA · 60% on handover Q4 2026 · No рассрочка после сдачи', planRu:'10% + 4% DLD + AED 5 250 + OQOOD при бронировании · 10% при SPA (30 дней) · 10% +5 мес SPA · 10% +10 мес SPA · 60% при сдаче Q4 2026 · Без рассрочки после сдачи' },
      amenities: ['Co-working lounge','Multi-purpose lounge','Concierge','Café','Gated community','24/7 Security','CCTV surveillance','Visitor driver lounge','Elevator in every villa','Rainforest boardwalk','Private parking','Clubhouse with infinity lap pool','Private pool in every villa','Fitness centre','Kids play area (indoor + outdoor)','Game room','Library','Patio BBQ terrace'],
      amenitiesRu: ['Ко-воркинг лаунж','Многофункциональный лаунж','Консьерж','Кафе','Gated-сообщество','Охрана 24/7','Видеонаблюдение','Лаунж для водителей гостей','Лифт в каждой вилле','Тропический променад','Приватная парковка','Клубный дом с infinity lap pool','Приватный бассейн в каждой вилле','Фитнес-центр','Игровая зона для детей (внутри + снаружи)','Игровая комната','Библиотека','BBQ-терраса на патио'],
      brief: "Arista Wadi Villas is the boutique edge of District 11 Meydan — 30 villas, internal courtyards and water-scape, mansion tier at the top. The compound is built around the privacy logic of a wadi (river valley): you enter, you disappear, you emerge into the garden. Includes Wadi Mansions (6BR top tier) and Lush Collection within the wider Arista catalogue.",
      briefRu: 'Arista Wadi Villas — бутиковая грань District 11 Meydan: 30 вилл, внутренние дворы и водные сцены, mansion-уровень на верхушке. Комплекс построен вокруг логики приватности «вади» (русла): вы входите, исчезаете, выходите в сад. Включает Wadi Mansions (6BR верхний tier) и Lush Collection.',
      why: 'Genuine 30-villa edition is the right size for collector compound. Meydan is consistently liquid in the villa market.',
      whyRu: 'Серия из 30 вилл — правильный размер для коллекционного комплекса. Meydan стабильно ликвиден на вилла-рынке.',
      risk: 'Meydan resale market has wider variation than Palm / Saadiyat. Hold horizon 3-5 years for compound to mature.',
      riskRu: 'Вторичный рынок Meydan волатильнее, чем Palm / Saadiyat. Горизонт 3–5 лет на созревание комплекса.',
      location: { area: 'MBR District 11, Meydan', areaRu: 'MBR District 11, Meydan', address: 'Wadi Villas · MBR District 11', addressRu: 'Wadi Villas · MBR District 11', coords: '25.1480,55.3060' },
      price: 'Mansion AED 36M · 16,085 sq ft · Q4 2026 · 8 AED/ft² service',
      note: '30 villas including 6BR Mansion tier. Q4 2026.',
      noteRu: '30 вилл, включая 6-спальный mansion. Q4 2026.'
    },

    {
      id: 'eden-park', lot: '19', name: 'Eden House The Park', art: 'ep-hero',
      tagline: 'Where you come home',
      taglineRu: 'Куда возвращаешься домой',
      arch: 'H&H Development · Al Wasl · 7 low-rise buildings',
      archRu: 'H&H Development · Аль-Васл · 7 малоэтажных корпусов',
      cats: ['experience','gardens'],
      size: 'l', height: 'mid', ratio: 'wide',
      gallery: ['assets/projects/eden-park/01.jpg','assets/projects/eden-park/02.jpg','assets/projects/eden-park/03.jpg','assets/projects/eden-park/04.jpg','assets/projects/eden-park/05.jpg'],
      attrs: [
        { k: 'Edition',   v: '7 low-rise buildings',  score: 4 },
        { k: 'Concept',   v: 'Hospitality community', score: 4 },
        { k: 'Developer', v: 'H&H Development',       score: 4 },
        { k: 'Location',  v: 'Dubai Water Canal',     score: 5 },
        { k: 'Execution', v: 'Q1 2027',               vRu: 'Q1 2027', score: 4, pending: true }
      ],
      facts: { 'Composition':'7 low-rise buildings · walkable leafy community','Concept':'Waterfront living + curated hospitality','Sister project':'Adjacent to Eden House The Canal','Location':'Along Dubai Water Canal','Atmosphere':'Beautifully landscaped acres with native trees + grasses' },
      pricing: { bands: [{ type:'Residences', size:'Multiple types', price:'POA' }], plan:'10% on booking · 4% DLD + AED 1,155 on SPA · 10% within 6m SPA · 10% within 12m SPA · 70% on completion Q1 2027 · No рассрочка после сдачи', planRu:'10% при бронировании · 4% DLD + AED 1 155 при SPA · 10% в 6 мес · 10% в 12 мес · 70% при сдаче Q1 2027 · Без рассрочки после сдачи' },
      amenities: ['7 low-rise buildings (low density)','High-end wellness facilities','Beautifully landscaped gardens','Acres of green spaces','Waterfront promenade','Hospitality services','Curated community programming','Walking community to Eden House The Canal'],
      amenitiesRu: ['7 малоэтажных корпусов (низкая плотность)','High-end wellness-объекты','Прекрасно ландшафтированные сады','Акры зелёных пространств','Набережная','Hospitality-сервис','Кураторская программа сообщества','Пешая связь с Eden House The Canal'],
      brief: "Eden House The Park is H&H's quieter expansion of the Eden House line — 7 low-rise buildings strung along the Dubai Water Canal, designed as a walkable, leafy community rather than a tower. The pitch: the hospitality service of Eden House Za'abeel, but with lawn space, low height, and a softer rhythm. For buyers who want H&H's service but not a high-floor view.",
      briefRu: 'Eden House The Park — более тихое продолжение линии Eden House от H&H: 7 малоэтажных корпусов вдоль Dubai Water Canal, спроектированных как пешеходное зелёное сообщество, а не башня. Подача — сервис hospitality уровня Eden House Za\'abeel, но с газонами, низкой высотой и более мягким ритмом. Для тех, кто хочет H&H-сервис, но не вид с верхнего этажа.',
      why: 'Eden House line consistently rated for service. Low-density on the Canal is structurally scarce.',
      whyRu: 'Линию Eden House стабильно высоко оценивают за сервис. Низкоплотная застройка на Канале — структурный дефицит.',
      risk: 'Project is part of a broader Eden House master — pricing reads relative to Eden House Za\'abeel and The Canal.',
      riskRu: 'Проект — часть более широкого мастер-плана Eden House. Цены читаются относительно Eden House Za\'abeel и The Canal.',
      location: { area: 'Al Wasl, Dubai', areaRu: 'Аль-Васл, Дубай', address: 'Eden House The Park · Al Wasl', addressRu: 'Eden House The Park · Аль-Васл', coords: '25.1850,55.2620' },
      price: 'AED 7M – 35M · 1,916–6,857 sq ft · Q1 2027 · 35 AED/ft² service',
      note: '7 low-rise buildings along Dubai Water Canal.',
      noteRu: '7 малоэтажных корпусов вдоль Dubai Water Canal.'
    },

    {
      id: 'zuha', lot: '20', name: 'Zuha Island · Villa 26', art: 'zu-hero',
      tagline: 'The Crown Jewel — sold at launch',
      taglineRu: 'Корона коллекции — продано на старте',
      arch: 'Zaya (Lunaya) · The World Islands · Villa',
      archRu: 'Zaya (Lunaya) · The World Islands · Вилла',
      cats: ['edition','gardens'],
      size: 's', height: 'up', ratio: 'portrait',
      gallery: ['assets/projects/zuha/01.jpg','assets/projects/zuha/02.jpg','assets/projects/zuha/03.jpg','assets/projects/zuha/04.jpg','assets/projects/zuha/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Crown Jewel · Villa 26', score: 5 },
        { k: 'Status',    v: 'Sold at launch',         score: 5 },
        { k: 'Developer', v: 'Zaya',                   score: 4 },
        { k: 'Location',  v: 'Zuha Island',            score: 5 },
        { k: 'Execution', v: '90-day completion',      score: 5 }
      ],
      facts: { 'Edition':'The Crown Jewel — largest plot on Zuha Island','Access':'Direct berth access from the villa','View':'Commanding view of Dubai skyline','Track record':'Zaya (developer of Nurai Island, Al Barari)','Completion':'90 days from contract','Status':'Sold at launch — for resale tracking only' },
      pricing: { bands: [{ type:'Villa 26 — Crown Jewel', size:'Largest plot', price:'Resale (private)' }], plan:'100% + 4% DLD · Full payment · No рассрочка после сдачи', planRu:'100% + 4% DLD · Полная оплата · Без рассрочки после сдачи' },
      amenities: ['Direct berth access (private mooring)','Largest plot on Zuha Island','Dubai skyline view from villa','Island-level concierge by Zaya','Private island infrastructure'],
      amenitiesRu: ['Прямой причал (private mooring)','Самый большой участок на острове Zuha','Вид на скайлайн Дубая с виллы','Островной консьерж от Zaya','Инфраструктура частного острова'],
      brief: "Villa 26 is the Crown Jewel of Zaya's Zuha Island — the largest plot, the direct berth, and the cleanest Dubai skyline view from the island. It sold at launch because there is no second one. We track it for our clients in case it returns to the market in private resale. Zaya's reference points — Nurai Island, Al Barari — are some of the strongest island/garden products in UAE history.",
      briefRu: 'Villa 26 — корона острова Zuha от Zaya: самый большой участок, прямой причал и самый чистый вид на скайлайн Дубая с острова. Продано на старте, потому что второй такой нет. Мы отслеживаем её для клиентов на случай возврата на закрытый вторичный рынок. Референсы Zaya — Nurai Island, Al Barari — одни из самых сильных островных/садовых продуктов в истории ОАЭ.',
      why: 'A single villa cannot be reissued. Zaya track record (Nurai, Al Barari) is best-in-class for private islands.',
      whyRu: 'Одна вилла не повторяется. Track-record Zaya (Nurai, Al Barari) — лучший в классе на частных островах.',
      risk: 'Already sold — only accessible via private resale, which may take years to emerge.',
      riskRu: 'Уже продано — доступно только через приватную перепродажу, которая может появиться через годы.',
      location: { area: 'The World Islands, Dubai', areaRu: 'The World Islands, Дубай', address: 'Zuha Island · The World', addressRu: 'Остров Zuha · The World', coords: '25.2050,55.1900' },
      price: 'AED 75M – 89M · 19,663 sq ft · Q4 2029 · 7 AED/ft² service',
      note: 'Sold at launch. Edition of One — Crown Jewel.',
      noteRu: 'Продано на старте. Единственная в серии — корона коллекции.'
    },

    {
      id: 'talea', lot: '21', name: 'Talea by Beyond', art: 'talea-hero',
      tagline: 'Nature transforms into a state of mind',
      taglineRu: 'Природа превращается в состояние ума',
      arch: 'Beyond / Omniyat · Dubai Maritime City · G+3P+M+39',
      archRu: 'Beyond / Omniyat · Dubai Maritime City · G+3P+M+39',
      cats: ['soul','gardens'],
      size: 'm', height: 'low', ratio: 'wide',
      gallery: ['assets/projects/talea/01.jpg','assets/projects/talea/02.jpg','assets/projects/talea/03.jpg','assets/projects/talea/04.jpg','assets/projects/talea/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Curated collection',  score: 4 },
        { k: 'Architect', v: 'Beyond atelier',      score: 4 },
        { k: 'Developer', v: 'Omniyat / Beyond',    score: 5 },
        { k: 'Location',  v: 'Dubai',               score: 4 },
        { k: 'Execution', v: 'Q1 2029',             vRu: 'Q1 2029', score: 4, pending: true }
      ],
      facts: { 'Concept':"Nature + design + 'sense of infinite freedom'",'Structure':'5 chapters: Location, Project, Interiors, Amenities, Developer','Brand':'Beyond — atelier line within Omniyat','Position':'Soulful design-led residence' },
      pricing: { bands: [{ type:'Residences', size:'Multiple types', price:'POA' }], plan:'10% + 4% DLD + AED 1,040 fees on booking · 10% Jul 2026 · 5% Jan 2027 · 5% May 2027 · 5% Sep 2027 · 5% Jan 2028 · 5% May 2028 · 5% Sep 2028 · 50% on completion Q1 2029 · No рассрочка после сдачи', planRu:'10% + 4% DLD + AED 1 040 при бронировании · 10% июль 2026 · 5% янв 2027 · 5% май 2027 · 5% сен 2027 · 5% янв 2028 · 5% май 2028 · 5% сен 2028 · 50% при сдаче Q1 2029 · Без рассрочки после сдачи' },
      amenities: ['Nature-led landscaping','Beyond signature interior package','Curated wellness amenities','Sensory programmed gardens','Concierge'],
      amenitiesRu: ['Природный ландшафт','Фирменный интерьерный пакет Beyond','Кураторские wellness-amenities','Сенсорно-программируемые сады','Консьерж'],
      brief: "Talea is Beyond's softest expression — less city-facing than PASSO, more anchored in the 'state of mind' end of the brand vocabulary. The brochure prose runs into philosophy. The product underneath: Beyond's atelier-grade interior package set against curated landscaping. For buyers in the Beyond brand who want a smaller, quieter address.",
      briefRu: 'Talea — самая мягкая интонация Beyond: меньше city-фронта, чем у PASSO, ближе к лексикону «состояния ума». Брошюра уходит в философию. Продукт под этим: ателье-уровень интерьеров Beyond на фоне курируемого ландшафта. Для покупателей бренда Beyond, которым нужен меньший и более тихий адрес.',
      why: 'Beyond brand consistency. Talea positions softer than PASSO — better for occupier than for capital play.',
      whyRu: 'Консистентность бренда Beyond. Talea позиционируется мягче PASSO — лучше для проживания, чем для capital play.',
      risk: 'Limited public spec at this stage. Best understood after a private gallery visit.',
      riskRu: 'Публичной спецификации мало. Лучше всего понятен после приватного визита в галерею.',
      location: { area: 'Dubai Maritime City', areaRu: 'Dubai Maritime City', address: 'Forest District · Maritime City · between Port Rashid & DIFC', addressRu: 'Forest District · Maritime City · между Port Rashid и DIFC', coords: '25.2540,55.2867' },
      price: 'AED 3.83M – 23.78M · 1,317–4,462 sq ft · Q1 2029',
      note: '"Nature transforms into a state of mind."',
      noteRu: '«Природа превращается в состояние ума.»'
    },

    {
      id: 'rings', lot: '22', name: 'The Rings by PMR', art: 'tr-hero',
      tagline: 'Sculptural architecture · Q3 2026',
      taglineRu: 'Скульптурная архитектура · Q3 2026',
      arch: 'PMR Property · Jumeirah Second · Two buildings A/B',
      archRu: 'PMR Property · Jumeirah Second · Два корпуса A/B',
      cats: ['icons','capital'],
      size: 's', height: 'up', ratio: 'tall',
      gallery: ['assets/projects/the-rings/01.jpg','assets/projects/the-rings/02.jpg','assets/projects/the-rings/03.jpg','assets/projects/the-rings/04.jpg','assets/projects/the-rings/05.jpg'],
      attrs: [
        { k: 'Edition',   v: 'Sculptural building', score: 4 },
        { k: 'Architect', v: 'Sculptural design',   score: 4 },
        { k: 'Developer', v: 'PMR',                  score: 3 },
        { k: 'Location',  v: 'Dubai',               score: 4 },
        { k: 'Execution', v: 'Q3 2026',             vRu: 'Q3 2026', score: 4, pending: true }
      ],
      facts: { 'Brand':'PMR (boutique developer)','Concept':'Sculptural identity — rings-as-form','Completion':'Q3 2026','Features':'Outdoor dining experience · resort-style amenities' },
      pricing: { bands: [{ type:'Residences', size:'Multiple types', price:'POA' }], plan:'AED 30,000 on booking · 80% + 4% DLD on SPA · 20% within 1 month from completion Q3 2026 · Alternative plan: 20% discount for 1-month рассрочка после сдачи · Or 1-year рассрочка после сдачи option', planRu:'AED 30 000 при бронировании · 80% + 4% DLD при SPA · 20% в течение 1 мес после сдачи Q3 2026 · Альтернатива: 20% скидка за месячную рассрочку после сдачи · Или опция годовой рассрочки после сдачи' },
      amenities: ['Outdoor dining experience','Sculptural building identity','Resort-style amenity package','Curated landscape'],
      amenitiesRu: ['Outdoor dining experience','Скульптурная архитектурная айдентика','Resort-style amenity-пакет','Кураторский ландшафт'],
      brief: "The Rings by PMR is a sculptural newcomer — the brand identity is built around interlocking ring forms, the facade reads as architectural typography. Smaller developer than the OMNIYAT/Aldar tier, but the design ambition is real. For buyers who want a smaller-name purchase with strong design signal.",
      briefRu: 'The Rings by PMR — скульптурный новичок: айдентика бренда построена вокруг переплетённых кольцевых форм, фасад читается как архитектурная типографика. Меньше OMNIYAT/Aldar по масштабу, но дизайн-амбиция реальна. Для покупателей, которым нужен less-name бренд с сильным дизайн-сигналом.',
      why: 'Boutique scale + strong sculptural identity. Entry point softer than blue-chip developers.',
      whyRu: 'Бутиковый масштаб + сильная скульптурная айдентика. Вход мягче, чем у blue-chip-девелоперов.',
      risk: 'PMR is a boutique developer — track record is shorter than majors. Best for buyers comfortable with newer brand risk.',
      riskRu: 'PMR — бутиковый девелопер с более коротким track-record, чем у мейджоров. Для покупателей, готовых к риску нового бренда.',
      location: { area: 'Jumeirah Second, Dubai', areaRu: 'Jumeirah Second, Дубай', address: 'The Rings · Jumeirah Second', addressRu: 'The Rings · Jumeirah Second', coords: '25.2273,55.2549' },
      price: 'AED 87M – 145M · 9,870–15,123 sq ft · Q3 2026 · 19 AED/ft² service · 5/6/7 BR duplexes & triplexes',
      note: 'Sculptural ring-form architecture · Q4 2026.',
      noteRu: 'Скульптурная архитектура колец · Q4 2026.'
    },

    {
      id: 'eden', lot: '10', name: 'Eden House Za\'abeel', art: 'eden-hero',
      tagline: 'A rare perspective',
      taglineRu: 'Редкая перспектива',
      arch: 'H&H Development · DIFC · G+45',
      archRu: 'H&H Development · DIFC · G+45',
      cats: ['experience','capital'],
      size: 'm', height: 'mid', ratio: 'portrait',
      gallery: [
        'assets/projects/eden-zaabeel/01.jpg',
        'assets/projects/eden-zaabeel/02.jpg',
        'assets/projects/eden-zaabeel/03.jpg',
        'assets/projects/eden-zaabeel/04.jpg',
        'assets/projects/eden-zaabeel/05.jpg'
      ],
      attrs: [
        { k: 'Edition',   v: 'Curated collection',  score: 4 },
        { k: 'Architect', v: 'Sculptural concrete', score: 4 },
        { k: 'Developer', v: 'H&H Development',     score: 4 },
        { k: 'Location',  v: 'Za\'abeel × DIFC',    score: 5 },
        { k: 'Execution', v: 'Q4 2028',             vRu: 'Q4 2028', score: 4, pending: true }
      ],
      facts: {
        'Architecture': 'Sculptural concrete form with warmth',
        'Position': 'Between DIFC dynamism and Za\'abeel serenity',
        'Brand': 'Eden House — H&H signature serviced residential',
        'Services': 'Curated hospitality + concierge'
      },
      pricing: {
        bands: [
          { type: 'Residences', size: 'Multiple types', price: 'POA' },
          { type: 'Penthouses', size: 'Top floors',     price: 'POA' }
        ],
        plan: '10% + 5% DIFC registration on booking · 5% +3m SPA · 5% +6m SPA · 10% +12m SPA · 10% +18m SPA · 60% on completion Q4 2028 · No рассрочка после сдачи',
        planRu: '10% + 5% регистрация DIFC при бронировании · 5% +3 мес SPA · 5% +6 мес · 10% +12 мес · 10% +18 мес · 60% при сдаче Q4 2028 · Без рассрочки после сдачи'
      },
      amenities: ['Curated hospitality services','24-hour concierge','Eden House services suite','DIFC walking distance','Za\'abeel parks adjacency','Resident lounges','Wellness amenities'],
      amenitiesRu: ['Кураторские hospitality-сервисы','Консьерж 24/7','Сервисный пакет Eden House','Пешая доступность до DIFC','Соседство с парками Za\'abeel','Резидентские лаунжи','Wellness-amenities'],
      brief: "Eden House Za'abeel is H&H's signature serviced residential, positioned in the seam between DIFC's energy and Za'abeel's parks. The architecture leans into sculptural concrete — heavy, contemplative — but the lifestyle is hospitality-led. H&H has built a small reputation around delivering services with the discretion of a private club rather than the routine of a hotel.",
      briefRu: 'Eden House Za\'abeel — флагманские сервисные резиденции H&H, на стыке энергетики DIFC и парков Za\'abeel. Архитектура — скульптурный бетон: тяжёлая, созерцательная — а образ жизни ведёт hospitality. H&H заработали репутацию на сервисе, который держится как закрытый клуб, а не как отельная рутина.',
      why: "H&H's Eden House line is consistently rated for service quality. DIFC adjacency makes it a strong walk-to-work residence for finance professionals.",
      whyRu: 'Линию Eden House от H&H стабильно высоко оценивают за качество сервиса. Близость к DIFC делает это сильным walk-to-work выбором для финансистов.',
      risk: 'Concrete-heavy architecture is a love-or-leave aesthetic. Service charge premium reflects the hospitality model.',
      riskRu: 'Бетонная эстетика — на любителя. Премия в service charge отражает hospitality-модель.',
      location: { area: 'DIFC, Dubai', areaRu: 'DIFC, Дубай', address: "Eden House Za'abeel · DIFC", addressRu: "Eden House Za'abeel · DIFC", coords: '25.2120,55.2810' },
      price: 'AED 4.7M – 12.3M · 1,130–2,460 sq ft · Q4 2028 · 35 AED/ft² service',
      note: 'H&H signature serviced residential between DIFC and Za\'abeel.',
      noteRu: 'Флагманские сервисные резиденции H&H между DIFC и Za\'abeel.'
    },

    // ===== NDA / OFF-MARKET =====
    {
      id: 'nda-shore', lot: '23',
      nda: true,
      cats: ['edition','experience','soul'],
      art: 'art-nda-shore',
      size: 'l', height: 'mid', ratio: 'wide',
      name: 'Lot 23 · Under NDA',
      nameRu: 'Лот 23 · Под NDA',
      tagline: 'A globally revered ultra-luxe wellness house — first GCC beachfront residences.',
      taglineRu: 'Всемирно почитаемый ультра-люкс wellness-бренд — первые beachfront-резиденции в GCC.',
      arch: 'Architect under NDA · disclosed after introduction',
      archRu: 'Архитектор под NDA · раскрываем после знакомства',
      attrs: [
        { k: 'Edition',    v: 'Limited release · pre-allocation list', vRu: 'Ограниченный тираж · pre-allocation list', score: 5 },
        { k: 'Architect',  v: 'Under NDA', vRu: 'Под NDA', score: 5 },
        { k: 'Developer',  v: 'Under NDA', vRu: 'Под NDA', score: 5 },
        { k: 'Location',   v: 'Dubai · beachfront',  vRu: 'Дубай · береговая линия', score: 5 },
        { k: 'Execution',  v: 'Pre-launch', vRu: 'Pre-launch', score: 4, pending: true }
      ],
      facts: {
        'Atmosphere': 'Silence-led. The brand is recognised for the absence of noise as much as for its design.',
        'Service model': 'Hotel-grade service across the entire residential floor — concierge, wellness, culinary.',
        'Wellness': 'The brand\'s spa programme is widely cited as the global reference point in ultra-luxe wellness.',
        'Setting': 'Beachfront. Few neighbours. Designed for a long horizon, not a flip.'
      },
      factsRu: {
        'Атмосфера': 'Тишина как принцип. Бренд узнаётся по отсутствию шума не меньше, чем по дизайну.',
        'Модель сервиса': 'Hotel-grade сервис на всём резидентском этаже — консьерж, wellness, кухня.',
        'Wellness': 'Спа-программа бренда — глобальный референс в ультра-люкс wellness.',
        'Окружение': 'Береговая линия. Минимум соседей. Длинный горизонт, не флип.'
      },
      pricing: {
        bands: [
          { type: 'Residences', size: 'Disclosed under NDA', sizeRu: 'Раскрывается под NDA', price: 'POA · NDA', priceRu: 'POA · под NDA' }
        ],
        plan: 'Allocation by introduction only. Pricing and floor plates disclosed after a 30-minute call and a signed NDA.',
        planRu: 'Распределение только по знакомству. Цены и поэтажные планы — после 30-минутного созвона и подписанного NDA.'
      },
      amenities: ['Hospitality-led service','Wellness sanctuary','Culinary by the brand','Beachfront access','Concierge'],
      amenitiesRu: ['Сервис hospitality-уровня','Wellness-святилище','Кухня от бренда','Прямой выход к морю','Консьерж'],
      brief: "An ultra-luxe wellness hospitality house with a global cult around silence, service and spa is bringing its first GCC beachfront residences to Dubai. We do not publish the brand, the architect or the address on this page — the brief is shared under NDA after a brief introduction. If you have lived in this brand's hotels, you already know the standard.",
      briefRu: "Ультра-люкс wellness-бренд с глобальным культом тишины, сервиса и спа выводит первые beachfront-резиденции в GCC. Бренд, архитектора и адрес мы не публикуем здесь — материалы под NDA после краткого знакомства. Если вы жили в отелях этого бренда — стандарт вы уже знаете.",
      why: "We are on the pre-allocation list. Inventory at this end of the market is rarely public — by the time the brand opens a website, the curated edition is allocated.",
      whyRu: "Мы в pre-allocation list. Лоты такого уровня редко выходят в открытую продажу — к моменту публичного сайта серия уже распределена.",
      risk: "Long-horizon hold. Liquidity is by introduction, not by listing.",
      riskRu: "Длинный горизонт удержания. Ликвидность — по представлению, не по листингу.",
      location: { area: 'Dubai · beachfront', areaRu: 'Дубай · береговая линия', address: 'Address disclosed under NDA', addressRu: 'Адрес — под NDA', coords: '' },
      gallery: [],
      price: 'POA · NDA',
      note: 'Off-market · brand and details disclosed after introduction.',
      noteRu: 'Off-market · бренд и детали раскрываем после знакомства.'
    },
    {
      id: 'nda-difc', lot: '24',
      nda: true,
      cats: ['capital','experience'],
      art: 'art-nda-difc',
      size: 'm', height: 'up', ratio: 'tall',
      name: 'Lot 24 · Under NDA',
      nameRu: 'Лот 24 · Под NDA',
      tagline: "A younger sister of a revered Asian luxury house — first residence in Dubai's financial district.",
      taglineRu: 'Молодая сестра почитаемого азиатского люкс-бренда — первая резиденция в финансовом районе Дубая.',
      arch: 'Architect under NDA · disclosed after introduction',
      archRu: 'Архитектор под NDA · раскрываем после знакомства',
      attrs: [
        { k: 'Edition',    v: 'Pre-launch · curated allocation', vRu: 'Pre-launch · кураторское распределение', score: 5 },
        { k: 'Architect',  v: 'Under NDA', vRu: 'Под NDA', score: 5 },
        { k: 'Developer',  v: 'Under NDA', vRu: 'Под NDA', score: 5 },
        { k: 'Location',   v: 'DIFC · Dubai', vRu: 'DIFC · Дубай', score: 5 },
        { k: 'Execution',  v: 'Pre-launch', vRu: 'Pre-launch', score: 4, pending: true }
      ],
      facts: {
        'Position': "Dubai International Financial Centre — walk-to-work for trading floors, family offices and law firms.",
        'Brand lineage': "Sister brand of one of the most respected Asian hospitality houses; a more social, social-architecture-led format.",
        'Service model': "Hotel-grade residential service — concierge, F&B, wellness, business support.",
        'Setting': 'Urban tower. Designed for executives who want hotel comfort with a private front door.'
      },
      factsRu: {
        'Положение': 'Dubai International Financial Centre — пешком до торговых этажей, family offices и юр.фирм.',
        'Линия бренда': 'Сестра одного из самых уважаемых азиатских hospitality-брендов; более социальный формат, акцент на архитектуре общих пространств.',
        'Модель сервиса': 'Hotel-grade сервис — консьерж, F&B, wellness, business support.',
        'Окружение': 'Городская башня. Для топ-менеджмента, которому нужен hotel-комфорт с приватной дверью.'
      },
      pricing: {
        bands: [
          { type: 'Residences', size: 'Disclosed under NDA', sizeRu: 'Раскрывается под NDA', price: 'POA · NDA', priceRu: 'POA · под NDA' }
        ],
        plan: 'Pre-allocation list. Floor plates, pricing and payment plan shared after an introduction call and a signed NDA.',
        planRu: 'Pre-allocation list. Этажи, цены и план оплаты — после звонка-знакомства и подписанного NDA.'
      },
      amenities: ['Hotel-grade concierge','Wellness floor','Resident F&B','Business support','Member-style social spaces'],
      amenitiesRu: ['Консьерж hotel-уровня','Wellness-этаж','Резидентский F&B','Business support','Социальные пространства в club-формате'],
      brief: "A youthful sister of one of Asia's most respected ultra-luxe hospitality houses is opening its first residence in Dubai's financial district. The format is more social than its parent brand — designed around shared spaces and walk-to-work geometry. We do not publish the brand name, architect or floor plates here. Materials are shared after an introduction.",
      briefRu: "Молодая сестра одного из самых уважаемых ультра-люкс hospitality-брендов Азии открывает первую резиденцию в финансовом районе Дубая. Формат более социальный, чем у материнского бренда — общие пространства и пешая доступность до офиса. Бренд, архитектора и поэтажные планы здесь не публикуем. Материалы — после знакомства.",
      why: "DIFC residential supply at this brand level is structurally scarce. We are on the curated allocation list before the public marketing window.",
      whyRu: "В DIFC резидентского предложения этого уровня структурно мало. Мы в кураторском листе распределения до запуска публичного маркетинга.",
      risk: "Pricing in DIFC is on the higher band per sqft. The brand premium pays back on hold, not on resale within 24 months.",
      riskRu: "DIFC по цене за фут — в верхней полосе. Премия за бренд отбивается на удержании, не на перепродаже в 24 месяца.",
      location: { area: 'DIFC · Dubai', areaRu: 'DIFC · Дубай', address: 'Tower address disclosed under NDA', addressRu: 'Адрес башни — под NDA', coords: '' },
      gallery: [],
      price: 'POA · NDA',
      note: "First residence in Dubai's financial district from a respected Asian hospitality house.",
      noteRu: 'Первая резиденция в финансовом районе Дубая от уважаемого азиатского hospitality-бренда.'
    }
  ];
