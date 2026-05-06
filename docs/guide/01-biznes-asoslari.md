# 📦 1-Dars: Biznes Asoslari

> **"Biznesni tushunmasdan ERP ni tushunib bo'lmaydi."**

[← Bosh sahifa](/) | [Keyingi: Sanoat Turlari →](02-sanoat-turlari.md)

---

## 📋 Dars Rejasi

Bu darsda biz biznesning **eng asosiy tushunchalarini** o'rganamiz. Har bir tushunchani **Anvarning non do'koni** misolida ko'rib chiqamiz.

---

## 🧑‍💼 Biznes Nima?

Oddiy qilib aytganda:

> **Biznes** — bu biror mahsulot yoki xizmatni yaratib, uni mijozlarga sotish orqali daromad olish jarayoni.

Anvar har kuni ertalab non yopadi va uni do'konida sotadi. Bu — biznes. McDonald's ham hamburger sotadi. Bu ham biznes. Farqi — **masshtab** (scale).

### Biznesning 3 ta asosiy elementi:

```
┌─────────────────────────────────────────────────┐
│                    BIZNES                        │
│                                                  │
│   1. MAHSULOT/XIZMAT  →  Nima sotasiz?          │
│   2. MIJOZ             →  Kimga sotasiz?         │
│   3. DAROMAD           →  Qancha pul topasiz?    │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## 🛍️ Mahsulot (Product)

**Mahsulot** — bu siz yaratgan yoki sotib olib qayta sotayotgan narsa.

### Mahsulot turlari:

| Tur | Misol | Xususiyat |
|-----|-------|-----------|
| **Jismoniy mahsulot** | Non, telefon, kiyim | Qo'l bilan ushlab ko'rish mumkin |
| **Raqamli mahsulot** | Dasturiy ta'minot, e-kitob | Yuklab olish mumkin |
| **Xizmat** | Sartaroshlik, konsalting | Bajariladi, lekin ushlab ko'rib bo'lmaydi |

### 🏪 Anvar misolida:

Anvar quyidagi mahsulotlarni sotadi:

| Mahsulot | Tannarx | Sotish narxi | Foyda |
|----------|---------|--------------|-------|
| Oq non | 1,500 so'm | 3,000 so'm | 1,500 so'm |
| Patir | 2,000 so'm | 5,000 so'm | 3,000 so'm |
| Somsa | 3,000 so'm | 7,000 so'm | 4,000 so'm |
| Shirin non | 2,500 so'm | 6,000 so'm | 3,500 so'm |

### Mahsulot bilan bog'liq muhim tushunchalar:

- **SKU (Stock Keeping Unit)** — har bir mahsulotning unikal kodi. Masalan: `NON-001`, `PATIR-002`
- **Kategoriya** — mahsulotlarni guruhlash: "Nonlar", "Pishiriqlar", "Ichimliklar"
- **Variant** — bitta mahsulotning turli ko'rinishlari: "Katta patir", "Kichik patir"

---

## 👤 Mijoz (Customer)

**Mijoz** — bu sizning mahsulotingizni sotib oluvchi shaxs yoki tashkilot.

### Mijoz turlari:

```
👤 Mijozlar
├── 🏠 B2C (Business to Consumer) — Oddiy xaridor
│   └── Misol: Do'konga kelib non oluvchi odam
│
├── 🏢 B2B (Business to Business) — Boshqa biznes
│   └── Misol: Restoranga non yetkazib berish
│
└── 🏛️ B2G (Business to Government) — Davlat tashkiloti
    └── Misol: Maktab oshxonasiga non yetkazish
```

### 🏪 Anvar misolida:

| Mijoz turi | Kim? | Xarid hajmi | To'lov usuli |
|------------|------|-------------|--------------|
| Oddiy xaridor | Mahalladan kelganlar | 2-5 ta non | Naqd |
| Restoran "Milliy" | B2B mijoz | Kuniga 100 ta non | Oylik hisob-kitob |
| 12-maktab oshxonasi | B2G mijoz | Kuniga 200 ta non | Bank o'tkazmasi |

### Nima uchun mijozni bilish muhim?

1. **Doimiy mijoz** ko'proq foyda keltiradi (qayta-qayta xarid qiladi)
2. **Mijoz ma'lumotlari** — eng qimmatli aktivingiz
3. **Segmentatsiya** — turli mijozlarga turli yondashuv kerak

> [!TIP]
> **80/20 qoidasi (Pareto prinsipi):** Ko'pincha daromadingizning 80% mijozlarning 20% dan keladi. O'sha 20% ni bilish — muvaffaqiyat kaliti.

---

## 📋 Buyurtma (Order)

**Buyurtma** — mijoz mahsulot yoki xizmat so'raganda yaratiladi.

### Buyurtma hayot sikli:

```
📝 Buyurtma yaratildi
    ↓
✅ Tasdiqlandi
    ↓
📦 Tayyorlanmoqda
    ↓
🚚 Yetkazildi
    ↓
💰 To'lov qilindi
    ↓
✔️  Yakunlandi
```

### Buyurtma tarkibi:

| Maydon | Misol | Nima uchun kerak? |
|--------|-------|-------------------|
| Buyurtma raqami | `#BUY-2026-0042` | Har bir buyurtmani unikal aniqlash |
| Mijoz | Restoran "Milliy" | Kim buyurtma berdi? |
| Sana | 2026-05-06 | Qachon buyurtma berildi? |
| Mahsulotlar | Oq non x100, Patir x50 | Nima buyurtma qilingan? |
| Jami summa | 400,000 so'm | Qancha to'lash kerak? |
| Status | Yetkazildi | Hozir qaysi bosqichda? |

### 🏪 Anvar misolida:

Restoran "Milliy" har kuni soat 6:00 da buyurtma beradi:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BUYURTMA #2026-05-06-001
  Mijoz: Restoran "Milliy"
  Sana: 2026-yil 6-may
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Oq non      x 100   =  300,000
  Patir       x  50   =  250,000
  Somsa       x  30   =  210,000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  JAMI:               =  760,000
  Status: ✅ Yetkazildi
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 💰 Daromad (Revenue)

**Daromad** — bu siz mahsulot yoki xizmat sotganingizda oladigan pul.

### Daromad formulasi:

```
💰 Daromad = Sotilgan birliklar soni × Sotish narxi

Misol: 100 ta non × 3,000 so'm = 300,000 so'm
```

### Daromad turlari:

| Tur | Misol | Xususiyat |
|-----|-------|-----------|
| **Asosiy daromad** | Non sotishdan tushgan pul | Doimiy, asosiy faoliyatdan |
| **Qo'shimcha daromad** | Yetkazib berish uchun to'lov | Asosiy mahsulotga qo'shimcha |
| **Passiv daromad** | Bino ijarasi | Doimiy harakat talab qilmaydi |

### 🏪 Anvar misolida — bir oylik daromad:

| Manba | Kunlik | Oylik (26 ish kuni) |
|-------|--------|---------------------|
| Oddiy savdo (do'kon) | 500,000 | 13,000,000 |
| Restoran "Milliy" | 760,000 | 19,760,000 |
| 12-maktab | 600,000 | 15,600,000 |
| **JAMI DAROMAD** | **1,860,000** | **48,360,000** |

---

## 💸 Xarajat (Expense)

**Xarajat** — bu biznesni yuritish uchun sarflanadigan pul.

### Xarajat turlari:

```
💸 Xarajatlar
├── 📌 DOIMIY XARAJATLAR (har oy bir xil)
│   ├── Ijara: 3,000,000 so'm/oy
│   ├── Oylik (4 ishchi): 8,000,000 so'm/oy
│   ├── Elektr/gaz: 2,000,000 so'm/oy
│   └── Kredit to'lovi: 1,500,000 so'm/oy
│
└── 📊 O'ZGARUVCHAN XARAJATLAR (sotishga bog'liq)
    ├── Un: 15,000,000 so'm/oy
    ├── Yog', tuz, qand: 3,000,000 so'm/oy
    ├── Qadoqlash: 500,000 so'm/oy
    └── Yetkazib berish (benzin): 1,000,000 so'm/oy
```

### 🏪 Anvar misolida — bir oylik xarajatlar:

| Xarajat turi | Summa | Kategoriya |
|--------------|-------|------------|
| Un (xom ashyo) | 15,000,000 | O'zgaruvchan |
| Boshqa ingredientlar | 3,000,000 | O'zgaruvchan |
| Ishchilar oyligi | 8,000,000 | Doimiy |
| Ijara | 3,000,000 | Doimiy |
| Kommunal to'lovlar | 2,000,000 | Doimiy |
| Yetkazib berish | 1,000,000 | O'zgaruvchan |
| Kredit | 1,500,000 | Doimiy |
| Qadoqlash | 500,000 | O'zgaruvchan |
| **JAMI XARAJAT** | **34,000,000** | — |

---

## 📊 Foyda (Profit)

**Foyda** — bu daromaddan xarajatlarni ayirgandan keyin qoladigan pul.

### Foyda formulasi:

```
📊 Foyda = Daromad - Xarajat

Anvar uchun: 48,360,000 - 34,000,000 = 14,360,000 so'm/oy

Foyda margin: (14,360,000 / 48,360,000) × 100 = 29.7%
```

### Foyda turlari:

| Tur | Formula | Misol |
|-----|---------|-------|
| **Yalpi foyda** | Daromad - Xom ashyo xarajati | 48.36M - 19.5M = 28.86M |
| **Operatsion foyda** | Yalpi foyda - Operatsion xarajatlar | 28.86M - 14.5M = 14.36M |
| **Sof foyda** | Operatsion foyda - Soliqlar | 14.36M - 1.72M = 12.64M |

> [!IMPORTANT]
> **Daromad ≠ Foyda!** Ko'p biznesmenlar daromadni foyda deb o'ylaydi. 48 million so'm tushdi degani 48 million so'm qoldi degani emas. Xarajatlarni hisobga olmaslik — eng keng tarqalgan xato.

---

## 🏛️ Soliq (Tax)

**Soliq** — bu davlatga to'lanadigan majburiy to'lov.

### O'zbekistonda asosiy soliq turlari:

| Soliq turi | Stavka | Kimga? | Misol |
|------------|--------|--------|-------|
| **QQS (VAT)** | 12% | Davlatga | Har bir sotilgan mahsulotdan |
| **Foyda solig'i** | 15% | Davlatga | Sof foydadan |
| **JSHSHS** | 12% | Davlatga | Ishchilar oyligidan |
| **Aylanma soliq** | 4% | Kichik biznes uchun | Jami daromaddan |

### 🏪 Anvar misolida:

Anvar kichik tadbirkor sifatida **aylanma soliq** to'laydi:

```
Oylik daromad:    48,360,000 so'm
Aylanma soliq:    48,360,000 × 4% = 1,934,400 so'm
JSHSHS (4 ishchi): 8,000,000 × 12% = 960,000 so'm

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Jami soliq yuki:  2,894,400 so'm/oy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

> [!WARNING]
> Soliqni to'g'ri hisoblash va o'z vaqtida to'lash juda muhim. Kechikish — jarima, noto'g'ri hisoblash — tekshiruv. ERP tizimi bu ishni avtomatlashtiradi.

---

## 🚚 Ta'minotchi (Supplier/Vendor)

**Ta'minotchi** — bu sizga xom ashyo, mahsulot yoki xizmat yetkazib beruvchi tashkilot yoki shaxs.

### Ta'minotchi bilan ishlash jarayoni:

```
1. 🔍 Ta'minotchini topish
       ↓
2. 💬 Narx va shartlarni kelishish
       ↓
3. 📝 Buyurtma berish (Purchase Order)
       ↓
4. 📦 Tovarni qabul qilish
       ↓
5. ✅ Sifatni tekshirish
       ↓
6. 💳 To'lovni amalga oshirish
```

### 🏪 Anvar misolida:

| Ta'minotchi | Nima yetkazadi? | Narx | To'lov sharti |
|-------------|-----------------|------|---------------|
| "Oltin Bug'doy" tegirmoni | Un (1-navli) | 8,000 so'm/kg | 15 kunlik kredit |
| Bozordan Karim aka | Yog', tuz, qand | Bozor narxi | Naqd |
| "Sifat Pack" | Qadoqlash materiallari | 200 so'm/dona | Oldindan to'lov |
| Mahalliy fermer | Tuxum, sut | Kelishilgan narx | Haftalik hisob |

### Ta'minotchini tanlashda muhim mezonlar:

1. **Narx** — eng arzon degani eng yaxshi degani emas
2. **Sifat** — xom ashyo sifati = mahsulot sifati
3. **Ishonchlilik** — o'z vaqtida yetkazib bera oladimi?
4. **To'lov shartlari** — kredit beradimi yoki oldindan to'lov talab qiladimi?
5. **Joylashuv** — yaqin bo'lsa yetkazish arzon

---

## 📦 Ombor va Inventar (Inventory)

**Inventar** — bu sizda mavjud bo'lgan tovarlar va xom ashyolar zaxirasi.

### Inventar boshqaruvining muhim tushunchalari:

| Tushuncha | Tavsifi | Misol |
|-----------|---------|-------|
| **Qoldiq (Stock)** | Hozir omborda qancha bor | Un: 500 kg |
| **Minimum zaxira** | Kamida shuncha bo'lishi kerak | Un: 100 kg |
| **Qayta buyurtma nuqtasi** | Shu darajaga tushganda buyurtma berish kerak | Un: 150 kg |
| **Yaroqlilik muddati** | Mahsulot qachongacha yaroqli | Non: 1 kun, Un: 6 oy |

### 🏪 Anvar misolida:

```
━━━━━━━ OMBOR HOLATI: 2026-yil 6-may ━━━━━━━

Xom ashyo        Qoldiq    Min.zaxira    Status
─────────────────────────────────────────────────
Un (1-navli)     350 kg    100 kg        ✅ Yetarli
Yog'             15 litr   5 litr        ✅ Yetarli
Tuz              8 kg      3 kg          ✅ Yetarli
Qand             4 kg      5 kg          ⚠️ Kam!
Tuxum            20 dona   30 dona       🔴 Buyurtma!
─────────────────────────────────────────────────
```

> [!CAUTION]
> **Overstock** (ortiqcha zaxira) ham, **Stockout** (tovar tugashi) ham biznesga zarar. Overstock — pul muzlab qoladi. Stockout — mijoz ketadi. Muvozanat kerak!

---

## 🔄 Biznes Jarayoni (Business Process)

Barcha yuqoridagi tushunchalar alohida emas — ular **bir-biriga bog'liq zanjir** hosil qiladi:

```
┌──────────────────────────────────────────────────────────────┐
│                    BIZNES JARAYONI                            │
│                                                              │
│  Ta'minotchi → Xarid → Ombor → Ishlab chiqarish → Sotish    │
│       ↑                                              ↓       │
│       │         ┌─────────────────────┐              │       │
│       └─────────│    BUXGALTERIYA     │←─────────────┘       │
│                 │  Daromad - Xarajat   │                      │
│                 │  Soliq hisob-kitob   │                      │
│                 └─────────────────────┘                       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Anvarning bir kunlik jarayoni:

| Vaqt | Jarayon | Tushuncha |
|------|---------|-----------|
| 04:00 | Un va boshqa xom ashyo olib kelinadi | **Xarid, Ta'minotchi** |
| 04:30 | Non yopish boshlanadi | **Ishlab chiqarish** |
| 06:00 | Tayyor nonlar do'konga chiqariladi | **Ombor, Inventar** |
| 06:00 | Restoranga buyurtma yetkaziladi | **Buyurtma, Yetkazish** |
| 06:00-20:00 | Do'konda savdo | **Sotish, Mijoz** |
| 20:00 | Kunlik hisobot — qancha sotildi, qancha pul tushdi | **Daromad, Buxgalteriya** |
| Oy oxiri | Soliq hisoboti | **Soliq** |

---

## ✅ Tekshirish Savollari

1. **Daromad va foyda o'rtasidagi farq nima?**
2. **B2B va B2C mijoz o'rtasidagi farq nima?**
3. **Nima uchun overstock ham, stockout ham yomon?**
4. **Ta'minotchini tanlashda eng muhim 3 ta mezon nimalar?**
5. **Anvarning oylik sof foydasi qancha? (soliqni hisobga oling)**

---

## 💡 Asosiy Xulosalar

| Tushuncha | Bir gapda |
|-----------|-----------|
| Mahsulot | Siz yaratgan yoki sotayotgan narsa |
| Mijoz | Sizdan sotib oluvchi |
| Buyurtma | Mijozning so'rovi — barcha ma'lumotlar bir joyda |
| Daromad | Kirgan pul |
| Xarajat | Chiqqan pul |
| Foyda | Daromad minus xarajat |
| Soliq | Davlatga to'lov |
| Ta'minotchi | Sizga xom ashyo/tovar beruvchi |
| Inventar | Omboringizdagi zahira |

---

[← Bosh sahifa](/) | [Keyingi: Sanoat Turlari →](02-sanoat-turlari.md)
