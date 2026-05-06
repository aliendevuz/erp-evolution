# 🟣 10-Dars: Odoo Modullari Batafsil

> **"Odoo — lego kabi. Kerakli bo'laklarni yig'ib, o'z biznesingizga moslashtirasiz."**

[← Oldingi: Odoo Platformasi](09-odoo-platformasi.md) | [Bosh sahifa](/) | [Keyingi: Scaling Jarayoni →](11-scaling-jarayoni.md)

---

## 📋 Dars Rejasi

Bu darsda Odoo ning eng muhim modullarini **amaliy misollar** bilan ko'rib chiqamiz. Har bir modul uchun: u nima qiladi, qanday ishlaydi va Anvar qanday foydalanadi.

---

## 🛒 Sotish Moduli (Sales)

### Modul tavsifi:
Mijozlarga taklif yuborish, buyurtmalarni boshqarish, hisob-faktura yaratish.

### Odoo da sotish jarayoni:

```
  1. KOTIROVKA (Quotation)
     └── Mijozga narx taklifi tayyorlanadi
         │
  2. TASDIQLASH
     └── Mijoz rozi → "Tasdiqlash" tugmasi bosiladi
         └── Kotirovka → Sotish Buyurtmasiga aylanadi
         │
  3. YETKAZISH
     └── Ombor moduliga avtomatik buyruq ketadi
         │
  4. HISOB-FAKTURA
     └── Buxgalteriya moduliga avtomatik hisob yaratiladi
         │
  5. TO'LOV
     └── Mijoz to'lov qiladi → Avtomatik yopiladi
```

### 🏪 Anvar amaliyotda:

```
  Anvar kompyuterda Odoo ni ochdi:
  
  Sotish → Yangi Kotirovka → 

  ┌─────────────────────────────────────────────┐
  │  Mijoz:  [Restoran "Milliy" ▼]              │
  │  Sana:   [2023-05-06]                       │
  │  Muddati: [2023-05-21] (15 kun kredit)      │
  │                                             │
  │  Mahsulotlar:                               │
  │  ┌─────────────┬──────┬────────┬──────────┐ │
  │  │ Mahsulot    │ Soni │ Narx   │ Summa    │ │
  │  ├─────────────┼──────┼────────┼──────────┤ │
  │  │ Oq non      │ 100  │ 2,700  │ 270,000  │ │
  │  │ Patir       │  50  │ 4,500  │ 225,000  │ │
  │  │ Somsa       │  30  │ 7,000  │ 210,000  │ │
  │  └─────────────┴──────┴────────┴──────────┘ │
  │                                             │
  │  Jami:    705,000                           │
  │  QQS 12%:  84,600                           │
  │  UMUMIY:  789,600                           │
  │                                             │
  │  [EMAIL YUBORISH] [TASDIQLASH] [BEKOR QILISH]│
  └─────────────────────────────────────────────┘
  
  Anvar "TASDIQLASH" bosdi → Hammasi avtomatik ishladi!
```

### Narx ro'yxatlari (Pricelists):

```
  Odoo da turli mijozlarga turli narxlar:
  
  📋 Oddiy narx       📋 VIP narx (-10%)    📋 Ulgurji (-20%)
  ┌──────┬───────┐    ┌──────┬───────┐     ┌──────┬───────┐
  │ Non  │ 3,000 │    │ Non  │ 2,700 │     │ Non  │ 2,400 │
  │Patir │ 5,000 │    │Patir │ 4,500 │     │Patir │ 4,000 │
  │Somsa │ 7,000 │    │Somsa │ 6,300 │     │Somsa │ 5,600 │
  └──────┴───────┘    └──────┴───────┘     └──────┴───────┘
  
  Mijozga narx ro'yxati biriktiriladi:
  Restoran "Milliy" → VIP narx (avtomatik 10% chegirma)
```

---

## 📦 Xarid Moduli (Purchase)

### Modul tavsifi:
Ta'minotchilardan xom ashyo va tovarlarni xarid qilish, narxlarni solishtirish, yetkazib berishni kuzatish.

### Avtomatik xarid qoidalari:

```
  Odoo da Anvar qoida o'rnatdi:
  
  📦 AVTOMATIK QAYTA BUYURTMA QOIDALARI:
  
  ┌──────────────┬────────┬────────┬─────────────────┐
  │ Mahsulot     │Minimum │ Qayta  │ Ta'minotchi      │
  │              │zaxira  │buyurtma│                  │
  ├──────────────┼────────┼────────┼─────────────────┤
  │ Un (1-navli) │ 100 kg │ 500 kg │ Oltin Bug'doy   │
  │ Xamirturush   │   2 kg │  10 kg │ Oltin Bug'doy   │
  │ Tuz          │   3 kg │  25 kg │ Bozor (Karim)   │
  │ Yog'         │   5 lt │  20 lt │ Bozor (Karim)   │
  │ Tuxum        │  30 ta │ 120 ta │ Fermer Rustam   │
  └──────────────┴────────┴────────┴─────────────────┘
  
  QOIDA: Agar qoldiq < Minimum → Avtomatik PO yaratilsin
  
  🤖 Odoo: "Un qoldig'i 95 kg — minimumdan kam!
            PO-2023-0313 yaratildi: 500 kg un, Oltin Bug'doy"
  
  Anvar faqat TASDIQLAYDI — qolganini Odoo qildi!
```

---

## 🏭 Ishlab Chiqarish Moduli (Manufacturing)

### Modul tavsifi:
Xom ashyodan tayyor mahsulot ishlab chiqarish — retseptlar, buyruqlar, ish markazlari.

### BOM (Mahsulot retsepti) Odoo da:

```
  ┌─────────────────────────────────────────────────┐
  │  📋 BOM: Somsa (1 dona)                         │
  │                                                 │
  │  Komponentlar:                                  │
  │  ┌──────────────┬────────┬──────────┐           │
  │  │ Ingredientlar │ Miqdor │ Birlik   │           │
  │  ├──────────────┼────────┼──────────┤           │
  │  │ Un (1-navli) │ 150    │ gramm    │           │
  │  │ Go'sht       │ 100    │ gramm    │           │
  │  │ Piyoz        │  50    │ gramm    │           │
  │  │ Yog'         │  20    │ ml       │           │
  │  │ Tuz          │   3    │ gramm    │           │
  │  │ Zira         │   2    │ gramm    │           │
  │  └──────────────┴────────┴──────────┘           │
  │                                                 │
  │  Operatsiyalar:                                 │
  │  ┌──────────────────┬──────────┬──────────┐     │
  │  │ Bosqich          │ Vaqt     │ Ish markazi│    │
  │  ├──────────────────┼──────────┼──────────┤     │
  │  │ Xamir tayyorlash  │ 15 min   │ Xamir tsex│    │
  │  │ Ichki tayyorlash │ 10 min   │ Xamir tsex│    │
  │  │ Shakllantirish   │  5 min   │ Xamir tsex│    │
  │  │ Pishirish        │ 20 min   │ Tandir    │    │
  │  └──────────────────┴──────────┴──────────┘     │
  │                                                 │
  │  Jami vaqt: 50 daqiqa                           │
  │  Tannarx: ~3,000 so'm                           │
  └─────────────────────────────────────────────────┘
```

### Ishlab chiqarish buyrug'i:

```
  Sotish moduli: "30 ta somsa kerak!" 
       ↓ avtomatik
  
  🏭 ISHLAB CHIQARISH BUYRUG'I: MO-2023-0142
  
  Mahsulot: Somsa
  Miqdor: 30 dona
  BOM: Somsa retsepti
  
  Kerakli xom ashyo (avtomatik hisoblangan):
  ├── Un:    30 × 150g = 4,500 g (4.5 kg)  ✅ Bor: 330 kg
  ├── Go'sht: 30 × 100g = 3,000 g (3 kg)   ✅ Bor: 15 kg
  ├── Piyoz:  30 ×  50g = 1,500 g (1.5 kg)  ✅ Bor: 8 kg
  ├── Yog':   30 ×  20ml = 600 ml            ✅ Bor: 12 lt
  └── Tuz:    30 ×   3g  = 90 g              ✅ Bor: 4.5 kg
  
  Status: ✅ Barcha xom ashyo yetarli — BOSHLASH MUMKIN
  
  [BOSHLASH] → Novvoy ishni boshlaydi
  [TUGATISH] → Tayyor! 30 ta somsa omborga kirim qilindi
```

---

## 🛍️ Ombor Moduli (Inventory)

### Modul tavsifi:
Barcha tovarlar va xom ashyolarning joylashuvi, harakati va qoldiqlarini real-time nazorat qilish.

### Ombor operatsiyalari:

```
  📦 TOVAR HARAKATLARI:

  KIRIM (Receipts):
  ├── Ta'minotchidan tovar keldi
  ├── Ishlab chiqarishdan tayyor mahsulot
  └── Boshqa filialdan o'tkazma

  CHIQIM (Deliveries):
  ├── Mijozga yetkazish
  ├── Ishlab chiqarishga xom ashyo berish
  └── Boshqa filialga o'tkazma

  ICHKI (Internal Transfers):
  └── 1-filialdan 2-filialga o'tkazish
```

### Multi-Warehouse (Ko'p ombor):

```
  Anvarning 2 ta filiali = 2 ta ombor:

  ┌─────────────────────┐    ┌─────────────────────┐
  │ 📍 1-OMBOR          │    │ 📍 2-OMBOR          │
  │ (Registon filial)   │    │ (Markaz filial)     │
  │                     │    │                     │
  │ Un:    330 kg  ✅    │    │ Un:    200 kg  ✅    │
  │ Tuxum:  15 ta  🔴   │    │ Tuxum:  45 ta  ✅    │
  │ Non:    50 ta  ✅    │    │ Non:    30 ta  ✅    │
  │ Somsa:  20 ta  ✅    │    │ Somsa:  10 ta  ⚠️   │
  │                     │    │                     │
  │  [O'TKAZMA YARATISH]│    │  [O'TKAZMA YARATISH]│
  └─────────────────────┘    └─────────────────────┘
  
  Anvar ko'rdi: 1-filialda tuxum kam.
  → "O'tkazma" tugmasi → 2-filialdan 20 ta tuxum o'tkazildi
  → Ikkala ombor qoldig'i AVTOMATIK yangilandi!
```

---

## 💰 Buxgalteriya Moduli (Accounting)

### Modul tavsifi:
Barcha moliyaviy operatsiyalarni boshqarish — daromad, xarajat, soliq, hisobotlar.

### Odoo Buxgalteriya Dashboard:

```
  ┌──────────────────────────────────────────────────┐
  │  💰 BUXGALTERIYA DASHBOARD — May 2023            │
  │                                                  │
  │  BANK HISOBI:                                    │
  │  ┌─────────────────────────────────┐             │
  │  │ 💳 "Kapitalbank" — Asosiy       │             │
  │  │    Qoldiq: 25,340,000 so'm      │             │
  │  │    Oxirgi kirim: +789,600 (bugun)│            │
  │  └─────────────────────────────────┘             │
  │                                                  │
  │  DEBITOR QARZLAR (bizga qarzdorlar):              │
  │  ┌──────────────────┬───────────┬───────┐        │
  │  │ Mijoz            │ Summa     │ Muddat│        │
  │  ├──────────────────┼───────────┼───────┤        │
  │  │ 12-maktab        │ 600,000   │ 5 kun │        │
  │  │ "Olmos" kafe     │ 450,000   │ 12 kun│        │
  │  │ To'ra aka        │  35,000   │ 45 kun│ 🔴     │
  │  └──────────────────┴───────────┴───────┘        │
  │  Jami debitor: 1,085,000                         │
  │                                                  │
  │  KREDITOR QARZLAR (biz qarzdormiz):               │
  │  ┌──────────────────┬───────────┬───────┐        │
  │  │ Ta'minotchi      │ Summa     │ Muddat│        │
  │  ├──────────────────┼───────────┼───────┤        │
  │  │ Oltin Bug'doy    │ 4,250,000 │ 10 kun│        │
  │  │ Fermer Rustam    │   350,000 │ 3 kun │        │
  │  └──────────────────┴───────────┴───────┘        │
  │  Jami kreditor: 4,600,000                        │
  │                                                  │
  │  📊 FOYDA VA ZARAR (May):                        │
  │  Daromad:   78,500,000                           │
  │  Xarajat:  -52,300,000                           │
  │  FOYDA:     26,200,000 ▲                         │
  └──────────────────────────────────────────────────┘
```

### Soliq hisoboti (Avtomatik):

```
  Nilufar endi soliq hisobotini 10 daqiqada tayyorlaydi:
  
  Buxgalteriya → Hisobotlar → Soliq hisoboti → [YARATISH]
  
  ┌──────────────────────────────────────────┐
  │  📊 SOLIQ HISOBOTI — May 2023            │
  │                                          │
  │  Aylanma soliq (4%):                     │
  │  Daromad: 78,500,000 × 4% = 3,140,000   │
  │                                          │
  │  JSHSHS (12%):                           │
  │  Oylik fondi: 18,000,000 × 12% = 2,160,000│
  │                                          │
  │  Jami soliq: 5,300,000                   │
  │  To'lov muddati: 2023-06-25              │
  │                                          │
  │  [EKSPORT] [SOLIQ TIZIMIGA YUBORISH]     │
  └──────────────────────────────────────────┘
```

---

## 👥 HR Moduli (Inson Resurslari)

### Odoo HR imkoniyatlari:

```
  👥 HR BOSHQARUV PANELI
  
  ┌────────────────────────────────────────────────┐
  │  XODIMLAR — 12 kishi                           │
  │                                                │
  │  Bo'limlar:                                    │
  │  ├── 🏭 Ishlab chiqarish: 6 kishi              │
  │  │   ├── Sardor (Bosh novvoy) — 1-filial       │
  │  │   ├── Bobur (Novvoy) — 1-filial              │
  │  │   ├── Dilshod (Novvoy) — 2-filial            │
  │  │   ├── Aziz (Novvoy) — 2-filial               │
  │  │   ├── Malika (Somsa ustasi) — 1-filial       │
  │  │   └── Nodira (Tort ustasi) — 2-filial        │
  │  │                                              │
  │  ├── 🛒 Savdo: 2 kishi                          │
  │  │   ├── Madina (Savdo menejeri)                │
  │  │   └── Kamola (Sotuvchi) — 1-filial           │
  │  │                                              │
  │  ├── 🚚 Logistika: 2 kishi                      │
  │  │   ├── Farhod (Haydovchi) — 1-filial          │
  │  │   └── Otabek (Haydovchi) — 2-filial          │
  │  │                                              │
  │  ├── 💰 Moliya: 1 kishi                          │
  │  │   └── Nilufar (Buxgalter)                    │
  │  │                                              │
  │  └── 💻 IT: 1 kishi                              │
  │      └── Jasur (IT mutaxassisi)                 │
  │                                                │
  │  📊 Bu oy:                                      │
  │  ├── Ta'tilda: 0 kishi                          │
  │  ├── Kasallik: 1 kishi (Bobur — 2 kun)          │
  │  └── Yangi xodim: 0                             │
  └────────────────────────────────────────────────┘
```

---

## 🌐 Veb-sayt va E-commerce Moduli

### Odoo da onlayn do'kon:

```
  Jasur Anvar uchun Odoo Veb-sayt modulini yoqdi:
  
  🌐 www.anvarnon.uz
  
  ┌──────────────────────────────────────────────┐
  │  🍞 ANVAR NON — Onlayn Buyurtma              │
  │                                              │
  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
  │  │ 🍞   │ │ 🫓   │ │ 🥟   │ │ 🎂   │       │
  │  │ Non  │ │Patir │ │Somsa │ │ Tort │       │
  │  │3,000 │ │5,000 │ │7,000 │ │Narx: │       │
  │  │[OLISH]│ │[OLISH]│ │[OLISH]│ │so'rov│       │
  │  └──────┘ └──────┘ └──────┘ └──────┘       │
  │                                              │
  │  🛒 Savatcha: 3 ta mahsulot — 15,000 so'm   │
  │  [BUYURTMA BERISH]                           │
  └──────────────────────────────────────────────┘
  
  Mijoz onlayn buyurtma berdi:
  → Sotish modulida avtomatik SO yaratildi
  → Omborda zaxira tekshirildi
  → Haydovchiga yetkazish vazifasi berildi
  → Buxgalteriyada hisob-faktura yaratildi
  
  HAMMA NARSA AVTOMATIK! 🤖
```

---

## 📊 Hisobot va Tahlil

### Odoo ning hisobot imkoniyatlari:

```
  Anvar endi BIR TUGMADA ko'radi:

  📊 Eng ko'p sotilgan mahsulot → Somsa (38%)
  📊 Eng foydali mijoz → Rest. "Milliy" (25% daromad)
  📊 Eng samarali filial → 1-filial (58%)
  📊 Ombor aylanmasi → Un: 15 kun, Tuxum: 3 kun
  📊 Oylik trend → Daromad +12%, Foyda +28%
  📊 Xodim samaradorligi → Sardor eng ko'p ishlab chiqargan
  
  ⏱️ Bu hisobotlar oldin: 1-2 KUN qo'lda tayyorlash
  ⏱️ Odoo bilan: REAL-TIME, har soniyada yangilanadi
```

---

## 🔄 Modullarning Birgalikdagi Ishlashi

### To'liq tsikl — buyurtmadan to'lovgacha:

```
  QADAM 1: Mijoz buyurtma berdi (Veb-sayt yoki Sotish)
     │
  QADAM 2: Ombor zaxira tekshirdi (Ombor)
     │
     ├── Yetarli → QADAM 4 ga o'tish
     │
     └── Kam → QADAM 3
     │
  QADAM 3: Ishlab chiqarish buyrug'i (Ishlab chiqarish)
     │        └── Xom ashyo kam → Xarid buyurtmasi (Xarid)
     │
  QADAM 4: Yetkazish (Ombor → Mijoz)
     │
  QADAM 5: Hisob-faktura (Buxgalteriya)
     │
  QADAM 6: To'lov qabul qilish (Buxgalteriya)
     │
  QADAM 7: Hisobot yangilanadi (Hisobot)

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  7 ta QADAM — lekin Anvar faqat 1-2 ta TUGMA bosadi!
  Qolgani — Odoo AVTOMATIK bajaradi! 🤖
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ✅ Tekshirish Savollari

1. **Odoo da kotirovka va sotish buyurtmasi o'rtasidagi farq nima?**
2. **Avtomatik xarid qoidasi qanday ishlaydi?**
3. **BOM da "operatsiyalar" nima uchun kerak?**
4. **Multi-warehouse imkoniyati Anvarga qanday yordam beradi?**
5. **Veb-sayt moduli qanday boshqa modullar bilan bog'langan?**

---

## 💡 Asosiy Xulosalar

| Modul | Anvar uchun qiymati |
|-------|-------------------|
| Sotish | Buyurtmalar 2 daqiqada, VIP narxlar avtomatik |
| Xarid | Xom ashyo tugamasdan oldin avtomatik buyurtma |
| Ishlab chiqarish | Retseptlar bazasi, xom ashyo avtomatik hisoblanadi |
| Ombor | 2 filial — real-time nazorat, o'tkazmalar |
| Buxgalteriya | Soliq 10 daqiqada, qarzlar avtomatik kuzatiladi |
| HR | 12 xodim — oylik, ta'til, grafik barchasi bir joyda |
| Veb-sayt | Onlayn buyurtma — yangi mijozlar kanali |
| Hisobot | Real-time dashboard — hamma narsa bir qarashda |

---

[← Oldingi: Odoo Platformasi](09-odoo-platformasi.md) | [Bosh sahifa](/) | [Keyingi: Scaling Jarayoni →](11-scaling-jarayoni.md)
