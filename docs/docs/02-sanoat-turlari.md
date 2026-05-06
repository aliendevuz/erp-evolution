# 🏭 2-Dars: Sanoat Turlari va Biznes Modellari

> **"Har bir sanoat o'ziga xos jarayonlarga ega. ERP tizimi shu jarayonlarga moslashishi kerak."**

[← Oldingi: Biznes Asoslari](01-biznes-asoslari.md) | [Bosh sahifa](../index.md) | [Keyingi: Kichik Do'kon →](03-kichik-dokon.md)

---

## 📋 Dars Rejasi

Biznes — bu faqat "sotib ol va sot" emas. Dunyoda **minglab sanoat turlari** bor va har birining o'ziga xos jarayonlari, qoidalari va muammolari bor. Bu darsda biz asosiy sanoat turlarini va ularga mos biznes modellarini o'rganamiz.

---

## 🗂️ Asosiy Sanoat Turlari

Barcha bizneslarni **3 ta katta guruhga** bo'lish mumkin:

```
🏭 SANOAT TURLARI
│
├── �icing ISHLAB CHIQARISH (Manufacturing)
│   "Xom ashyodan tayyor mahsulot yaratish"
│   Misol: Non yopish, mebel yasash, avtomobil ishlab chiqarish
│
├── 🛒 SAVDO (Trading/Retail)
│   "Tayyor mahsulotni sotib olish va qayta sotish"
│   Misol: Oziq-ovqat do'koni, kiyim do'koni, ulgurji savdo
│
└── 🔧 XIZMAT KO'RSATISH (Service)
    "Bilim yoki mehnat sotish"
    Misol: Sartaroshxona, dasturlash, yuridik maslahat
```

---

## 🏭 1. Ishlab Chiqarish (Manufacturing)

### Tavsifi:
Xom ashyoni qayta ishlab, **yangi mahsulot** yaratadigan sanoat.

### Jarayon:

```
Xom ashyo → Ishlab chiqarish → Tayyor mahsulot → Sotish
   📦            🏭                 📦            💰
   Un         Non yopish           Non         3,000 so'm
```

### Hayotiy misollar:

| Kompaniya | Xom ashyo | Tayyor mahsulot | Sanoat |
|-----------|-----------|-----------------|--------|
| Anvarning novvoyi | Un, suv, xamirturush | Non, patir, somsa | Oziq-ovqat |
| "Artel" | Plastik, metal, elektronika | Televizor, muzlatgich | Elektronika |
| "Biokimyo" | Kimyoviy moddalar | Dori-darmonlar | Farmatsevtika |
| Mahalliy duradgor | Yog'och, mix, lak | Shkaf, stol, karavot | Mebelchilik |

### Ishlab chiqarishning o'ziga xos xususiyatlari:

1. **BOM (Bill of Materials)** — mahsulot retsepti
2. **Ishlab chiqarish rejasi** — qachon, qancha ishlab chiqarish
3. **Sifat nazorati** — mahsulot standartlarga mosmi?
4. **Xom ashyo boshqaruvi** — doimo yetarli bo'lishi kerak

### 🏪 Anvarning BOM misoli — Patir uchun:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📋 BOM: PATIR (1 dona)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Ingredientlar:
  ├── Un (1-navli)     — 300 g
  ├── Suv              — 150 ml
  ├── Xamirturush       — 5 g
  ├── Tuz              — 5 g
  ├── Yog' (o'simlik)  — 30 ml
  └── Tuxum (ustiga)   — 0.25 dona

  Mehnat:
  ├── Xamir qorish      — 10 daqiqa
  ├── Ko'tarish (dam)   — 60 daqiqa
  ├── Shakllantirish    — 5 daqiqa
  └── Pishirish (tandir) — 15 daqiqa

  Jami vaqt: ~90 daqiqa
  Tannarx: ~2,000 so'm
  Sotish narxi: 5,000 so'm
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🛒 2. Savdo (Trading / Retail)

### Tavsifi:
Mahsulotni **o'zi ishlab chiqarmaydi**, balki ta'minotchidan sotib oladi va **qayta sotadi**.

### Jarayon:

```
Ta'minotchidan xarid → Omborda saqlash → Mijozga sotish
       📦                    🏪                💰
  10,000 so'm/kg         Saqlash           15,000 so'm/kg
```

### Savdo turlari:

| Tur | Tavsifi | Misol |
|-----|---------|-------|
| **Chakana savdo (Retail)** | Oxirgi iste'molchiga sotish | Supermarket, kiyim do'koni |
| **Ulgurji savdo (Wholesale)** | Boshqa do'konlarga sotish | Xo'jalik mollari bazasi |
| **Onlayn savdo (E-commerce)** | Internet orqali sotish | Uzum, Wildberries |
| **Distribyutorlik** | Ishlab chiqaruvchidan do'konlarga yetkazish | Coca-Cola distribyutori |

### Savdoning o'ziga xos xususiyatlari:

1. **Narxlash strategiyasi** — qancha ustama qo'yish?
2. **Inventar boshqaruvi** — qaysi tovar tez sotiladi?
3. **Mijoz tajribasi** — xaridor do'konga qaytib keladimi?
4. **Logistika** — tovar qanday yetkaziladi?

### Hayotiy misol — Savdo do'koni:

Toshkentda Bekzod aka oziq-ovqat do'koni ochdi:

| Mahsulot | Xarid narxi | Sotish narxi | Margin |
|----------|-------------|--------------|--------|
| Guruch (1 kg) | 12,000 | 15,000 | 25% |
| Shakar (1 kg) | 10,000 | 13,000 | 30% |
| Coca-Cola (1.5L) | 8,000 | 10,000 | 25% |
| Sut (1L) | 9,000 | 12,000 | 33% |

> **Savdo margin** odatda 15-40% atrofida bo'ladi. Oziq-ovqatda pastroq, kiyimda yuqoriroq.

---

## 🔧 3. Xizmat Ko'rsatish (Service)

### Tavsifi:
**Jismoniy mahsulot ishlab chiqarilmaydi.** Bilim, ko'nikma yoki mehnat sotiladi.

### Jarayon:

```
Mijoz murojaat → Xizmat ko'rsatish → Hisob-faktura → To'lov
     👤               🔧                 📄            💰
```

### Xizmat ko'rsatish turlari:

| Tur | Misollar | Xususiyat |
|-----|----------|-----------|
| **Professional xizmatlar** | Advokat, buxgalter, konsultant | Yuqori narx, chuqur bilim |
| **Texnik xizmatlar** | Dasturlash, ta'mirlash, IT support | Texnik ko'nikma kerak |
| **Shaxsiy xizmatlar** | Sartaroshlik, kosmetolog, fitnes | Bevosita mijoz bilan aloqa |
| **Moliyaviy xizmatlar** | Bank, sug'urta, kredit | Litsenziya kerak |
| **Ta'lim xizmatlari** | O'quv markaz, repetitor | Bilim uzatish |

### Xizmat ko'rsatishning o'ziga xos xususiyatlari:

1. **Vaqt = Pul** — xizmat soatlik, kunlik yoki loyiha asosida narxlanadi
2. **Sifatni o'lchash qiyin** — jismoniy mahsulotdan farqli
3. **Mijoz munosabati** — eng muhim omil
4. **Kadrlar** — asosiy aktiv odamlar

### Hayotiy misol — IT kompaniyasi:

Toshkentda "TechSolutions" IT kompaniyasi:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  "TechSolutions" — Xizmatlar ro'yxati
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Xizmat                    Narx
  ─────────────────────────────────────────
  Veb-sayt yaratish         5,000,000 so'm
  Mobil ilova               15,000,000 so'm
  ERP joriy etish           30,000,000 so'm
  IT qo'llab-quvvatlash     2,000,000 so'm/oy
  Konsultatsiya (soatlik)   200,000 so'm/soat
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔀 Aralash Biznes Modellari

Ko'pchilik kompaniyalar **bir nechta modelni birlashtiradi**:

### Misol 1: Anvarning novvoyi (Ishlab chiqarish + Savdo)
```
🏭 Non yopadi (Ishlab chiqarish)
    +
🛒 O'zi sotadi (Chakana savdo)
    +
🚚 Restoranga yetkazadi (B2B savdo)
```

### Misol 2: Samsung
```
🏭 Telefon ishlab chiqaradi (Ishlab chiqarish)
    +
🛒 O'z do'konlarida sotadi (Retail)
    +
🔧 Kafolat xizmati ko'rsatadi (Xizmat)
    +
🌐 Onlayn sotadi (E-commerce)
```

### Misol 3: Yandex
```
🔧 Taksi xizmati (Xizmat — platforma)
    +
🛒 Yandex Market (E-commerce)
    +
🍔 Yandex Eda (Yetkazib berish xizmati)
    +
💰 Yandex Pay (Moliyaviy xizmat)
```

---

## 🏢 Sanoatlar Bo'yicha ERP Ehtiyojlari

Har bir sanoat turining **o'ziga xos ERP ehtiyojlari** bor:

| Sanoat | Eng muhim modullar | Nima uchun? |
|--------|-------------------|-------------|
| **Ishlab chiqarish** | Ishlab chiqarish, Ombor, Sifat nazorati | Xom ashyo → mahsulot jarayonini boshqarish |
| **Chakana savdo** | Sotish (POS), Inventar, CRM | Tez savdo, tovar aylanmasi |
| **Ulgurji savdo** | Xarid, Ombor, Logistika | Katta hajmdagi tovarlar boshqaruvi |
| **Xizmat ko'rsatish** | Loyiha boshqaruvi, CRM, HR | Hodimlar va loyihalar hisobi |
| **E-commerce** | Veb-sayt, Inventar, Yetkazish | Onlayn savdo va logistika |
| **Qurilish** | Loyiha, Xarid, Buxgalteriya | Uzoq muddatli loyihalar boshqaruvi |
| **Restoran/Kafe** | POS, Inventar, Retseptlar | Tez xizmat, oziq-ovqat boshqaruvi |
| **Ta'lim** | Talabalar, O'qituvchilar, Moliya | O'quv jarayonini boshqarish |
| **Tibbiyot** | Bemorlar, Dorilar, Hisob-kitob | Tibbiy yozuvlar, farmatsevtika |

---

## 💼 Biznes Modeli Canvas

Har qanday biznesni tushunish uchun **Business Model Canvas** ishlatiladi:

```
┌──────────────────────────────────────────────────────────────────┐
│                     BIZNES MODELI CANVAS                         │
├──────────┬──────────┬──────────┬──────────┬─────────────────────┤
│ HAMKORLAR│ ASOSIY   │ QIYMAT   │ MIJOZ    │ MIJOZ               │
│          │ FAOLIYAT │ TAKLIFI  │ MUNOSABATI│ SEGMENTLARI        │
│Ta'minot- │          │          │          │                     │
│chilar,   │Non yopish│Yangi,issiq│Doimiy    │Mahalla aholi-      │
│tegirmon, │yetkazish,│sifatli   │xaridorlarga│si, restoranlar,  │
│fermerlar │sotish    │non       │chegirmalar│maktab oshxonalari  │
│          │          │          │          │                     │
├──────────┴──────────┤          ├──────────┴─────────────────────┤
│ ASOSIY RESURSLAR    │          │ KANALLAR                       │
│                     │          │                                │
│ Tandir, ustalar,    │          │ Do'kon, yetkazib berish,       │
│ retseptlar, bino    │          │ Telegram kanal                 │
├─────────────────────┴──────────┴────────────────────────────────┤
│ XARAJATLAR TUZILMASI          │ DAROMAD OQIMLARI               │
│                                │                                │
│ Un, ingredientlar, oylik,      │ Chakana savdo, B2B yetkazish,  │
│ ijara, kommunal, soliqlar      │ buyurtma asosida pishirish     │
└────────────────────────────────┴────────────────────────────────┘
```

---

## 📊 Sanoatlar Solishtirmasi

| Mezon | Ishlab chiqarish | Savdo | Xizmat |
|-------|-----------------|-------|--------|
| **Asosiy aktiv** | Uskunalar, xom ashyo | Tovarlar, do'kon | Odamlar, bilim |
| **Foyda margini** | 20-40% | 15-35% | 30-70% |
| **Xarajat tuzilmasi** | Xom ashyo + mehnat | Tovar xaridi + logistika | Oylik + loyiha |
| **O'sish usuli** | Yangi tsex, avtomatlashtirish | Yangi do'konlar, onlayn | Yangi xodimlar, filiallar |
| **Asosiy risk** | Xom ashyo narxi, sifat | Raqobat, inventar | Kadrlar ketishi |
| **ERP muhimligi** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 🏪 Anvar Misolida — Sanoat Tahlili

Anvarning novvoyi — bu **aralash model**:

```
┌────────────────────────────────────────────┐
│         ANVARNING BIZNES MODELI            │
│                                            │
│   🏭 Ishlab chiqarish (70%)               │
│      Non yopish — asosiy faoliyat          │
│                                            │
│   🛒 Chakana savdo (20%)                   │
│      Do'konda xaridorlarga sotish          │
│                                            │
│   🚚 B2B savdo (10%)                       │
│      Restoran va maktablarga yetkazish     │
│                                            │
└────────────────────────────────────────────┘
```

Shu sababli Anvarga **ishlab chiqarish + savdo + yetkazish** modullariga ega ERP kerak bo'ladi.

---

## ✅ Tekshirish Savollari

1. **Ishlab chiqarish va savdo o'rtasidagi asosiy farq nima?**
2. **BOM nima va nima uchun kerak?**
3. **Xizmat ko'rsatish biznesida asosiy aktiv nima?**
4. **Nima uchun ko'p kompaniyalar aralash modelda ishlaydi?**
5. **Anvarning novvoyiga qaysi ERP modullari kerak bo'ladi?**

---

## 💡 Asosiy Xulosalar

| Sanoat turi | Asosiy jarayon | ERP da kerak |
|-------------|---------------|--------------|
| Ishlab chiqarish | Xom ashyo → Mahsulot | BOM, Ishlab chiqarish, Sifat |
| Savdo | Xarid → Saqlash → Sotish | Inventar, POS, Logistika |
| Xizmat | Mijoz → Xizmat → Hisob | CRM, Loyiha, HR |

> [!NOTE]
> Keyingi darsda biz **Anvarning non do'koni** hikoyasini boshlaymiz — u o'z biznesini **daftar** bilan boshqaradi. Qanday muammolarga duch kelishini ko'ramiz va shu muammolar bizni keyingi bosqichga — Excelga olib boradi.

---

[← Oldingi: Biznes Asoslari](01-biznes-asoslari.md) | [Bosh sahifa](../index.md) | [Keyingi: Kichik Do'kon →](03-kichik-dokon.md)
