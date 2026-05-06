# 🛠️ 12-Dars: ERP Joriy Etish

> **"ERP o'rnatish — bu dastur o'rnatish emas, bu biznesni qayta tashkil etish."**

[← Oldingi: Scaling Jarayoni](11-scaling-jarayoni.md) | [Bosh sahifa](../index.md) | [Keyingi: Xulosa →](13-xulosa.md)

---

## 📋 Dars Rejasi

ERP ni sotib olish yoki o'rnatish — ishning **faqat 20%**. Qolgan 80% — bu **joriy etish**: jarayonlarni tahlil qilish, ma'lumotlarni ko'chirish, xodimlarni o'qitish va tizimni sozlash. Bu darsda ERP ni kompaniyaga qanday to'g'ri kiritishni o'rganamiz.

---

## 📊 ERP Joriy Etish Bosqichlari

```
  ┌─────────────────────────────────────────────────────┐
  │         ERP JORIY ETISH — 6 BOSQICH                  │
  │                                                     │
  │  1️⃣ TAHLIL          → Biznes jarayonlarini o'rganish │
  │     (2-3 hafta)        Muammolarni aniqlash          │
  │         ↓                                            │
  │  2️⃣ REJALASHTIRISH   → Qaysi modullar? Qanday reja?  │
  │     (1-2 hafta)        Byudjet va muddat             │
  │         ↓                                            │
  │  3️⃣ SOZLASH          → Odoo ni o'rnatish va sozlash  │
  │     (2-4 hafta)        Biznesga moslashtirish        │
  │         ↓                                            │
  │  4️⃣ MA'LUMOT KO'CHIRISH → Eski tizimlardan import    │
  │     (1-2 hafta)          Excel, 1C, CRM dan          │
  │         ↓                                            │
  │  5️⃣ O'QITISH         → Xodimlarni o'rgatish         │
  │     (1-2 hafta)        Har bir bo'limga alohida      │
  │         ↓                                            │
  │  6️⃣ ISHGA TUSHIRISH  → Go Live!                      │
  │     (1 hafta)          Parallel ishlash + to'liq     │
  │                                                     │
  │  ⏱️ JAMI: 8-15 hafta (2-4 oy)                        │
  └─────────────────────────────────────────────────────┘
```

---

## 1️⃣ TAHLIL BOSQICHI

### Nima qilinadi?

Biznesning **hozirgi holatini** chuqur o'rganish:

```
  📋 TAHLIL SAVOLLARI:

  JARAYONLAR:
  ├── Buyurtma qanday qabul qilinadi?
  ├── Xom ashyo qanday xarid qilinadi?
  ├── Mahsulot qanday ishlab chiqariladi?
  ├── Hisobot qanday tayyorlanadi?
  └── Xodimlar qanday boshqariladi?

  MUAMMOLAR:
  ├── Eng ko'p vaqt oladigan jarayon?
  ├── Eng ko'p xatolik qayerda?
  ├── Qaysi ma'lumotlar yo'qolmoqda?
  └── Xodimlar nimadan shikoyat qilmoqda?

  MAQSADLAR:
  ├── ERP dan nima kutilmoqda?
  ├── Qaysi ko'rsatkichlar yaxshilanishi kerak?
  └── 1 yildan keyin qanday natija kutilmoqda?
```

### 🏪 Anvar misolida — Tahlil natijalari:

```
  ┌──────────────────────────────────────────────────┐
  │  📊 TAHLIL NATIJASI — "ANVAR NON"                │
  │                                                  │
  │  MUAMMOLAR REYTINGI:                             │
  │  ┌────┬───────────────────────────┬────────────┐ │
  │  │ #  │ Muammo                    │ Yo'qotish  │ │
  │  ├────┼───────────────────────────┼────────────┤ │
  │  │ 1  │ Ma'lumot qayta kiritish   │ 15 soat/haf│ │
  │  │ 2  │ Ombor nomuvofiqligi       │ 2M so'm/oy │ │
  │  │ 3  │ Hisobot tayyorlash        │ 9 soat/oy  │ │
  │  │ 4  │ Qarz kuzatuvi            │ 1.5M so'm  │ │
  │  │ 5  │ 5 ta dastur to'lovi      │ 4.25M/oy   │ │
  │  └────┴───────────────────────────┴────────────┘ │
  │                                                  │
  │  JAMI OYLIK YO'QOTISH: ~8-10 million so'm       │
  │                                                  │
  │  MAQSAD:                                         │
  │  ├── Yo'qotishni 80% ga kamaytirish              │
  │  ├── Hisobot vaqtini 90% ga qisqartirish          │
  │  └── 1 yilda investitsiyani qaytarish (ROI)       │
  └──────────────────────────────────────────────────┘
```

---

## 2️⃣ REJALASHTIRISH BOSQICHI

### Modullar tanlash:

```
  Jasur tayyorlagan JORIY ETISH REJASI:

  ┌──────────────────────────────────────────────────┐
  │  📋 JORIY ETISH REJASI — "ANVAR NON"             │
  │                                                  │
  │  PLATFORMA: Odoo 17 Community                    │
  │  SERVER: Bulut (VPS — Ahost.uz)                   │
  │  BYUDJET: 15,000,000 so'm                        │
  │  MUDDAT: 2 oy                                    │
  │                                                  │
  │  BOSQICHMA-BOSQICH YOQISH:                       │
  │                                                  │
  │  1-HAFTA: Asosiy sozlash                         │
  │  ├── Odoo o'rnatish                               │
  │  ├── Kompaniya ma'lumotlari                       │
  │  ├── Foydalanuvchilar yaratish                    │
  │  └── Ruxsatlar sozlash                            │
  │                                                  │
  │  2-3 HAFTA: Sotish + CRM                         │
  │  ├── Mahsulotlar bazasi                           │
  │  ├── Mijozlar bazasi                              │
  │  ├── Narx ro'yxatlari                             │
  │  └── Savdo jarayoni sozlash                       │
  │                                                  │
  │  4-5 HAFTA: Ombor + Xarid                        │
  │  ├── Omborlar yaratish (2 ta filial)              │
  │  ├── Xom ashyo va tayyor mahsulotlar              │
  │  ├── Minimum zaxira qoidalari                     │
  │  └── Ta'minotchilar bazasi                        │
  │                                                  │
  │  6 HAFTA: Ishlab chiqarish                        │
  │  ├── BOM lar yaratish (barcha retseptlar)         │
  │  ├── Ish markazlari (tandir, xamir tsex)          │
  │  └── Ishlab chiqarish buyruqlari                  │
  │                                                  │
  │  7 HAFTA: Buxgalteriya + HR                      │
  │  ├── Hisob rejasi sozlash                         │
  │  ├── Soliq sozlamalari                            │
  │  ├── Xodimlar bazasi                              │
  │  └── Oylik shablonlari                            │
  │                                                  │
  │  8 HAFTA: Test + Ishga tushirish                  │
  │  ├── Barcha jarayonlarni test qilish              │
  │  ├── Xodimlarni o'qitish                          │
  │  └── GO LIVE! 🚀                                  │
  └──────────────────────────────────────────────────┘
```

### Byudjet taqsimoti:

```
  💰 BYUDJET — 15,000,000 so'm

  ┌──────────────────────────────┬───────────┬─────┐
  │ Band                         │ Summa     │  %  │
  ├──────────────────────────────┼───────────┼─────┤
  │ VPS server (1 yillik)        │ 3,000,000 │ 20% │
  │ Domen + SSL                  │   500,000 │  3% │
  │ Jasurga qo'shimcha to'lov   │ 5,000,000 │ 33% │
  │ Xodimlarni o'qitish         │ 2,000,000 │ 13% │
  │ Ma'lumot ko'chirish          │ 1,500,000 │ 10% │
  │ Kutilmagan xarajatlar       │ 3,000,000 │ 20% │
  ├──────────────────────────────┼───────────┼─────┤
  │ JAMI                         │15,000,000 │100% │
  └──────────────────────────────┴───────────┴─────┘
  
  💡 Odoo Community — BEPUL (litsenziya to'lovi yo'q!)
```

---

## 3️⃣ SOZLASH BOSQICHI

### Asosiy sozlash ishlari:

```
  Jasur qiladigan ishlar:

  1. SERVER SOZLASH:
     ├── Ubuntu 22.04 LTS o'rnatish
     ├── PostgreSQL 15 o'rnatish
     ├── Odoo 17 o'rnatish
     ├── Nginx reverse proxy
     ├── SSL sertifikat (Let's Encrypt)
     └── Domen ulash: erp.anvarnon.uz

  2. ODOO SOZLASH:
     ├── Kompaniya: "Anvar Non" MCHJ
     ├── Logo yuklash
     ├── Valyuta: UZS (so'm)
     ├── Soliq sozlamalari (O'zbekiston)
     ├── Til: O'zbek + Rus
     └── Vaqt mintaqasi: Asia/Tashkent

  3. FOYDALANUVCHILAR:
     ┌────────────┬─────────────┬──────────────┐
     │ Foydalanuvchi│ Rol          │ Ruxsatlar    │
     ├────────────┼─────────────┼──────────────┤
     │ Anvar      │ Administrator │ Hamma narsa  │
     │ Nilufar    │ Buxgalter    │ Moliya, HR   │
     │ Madina     │ Savdochi     │ Sotish, CRM  │
     │ Sardor     │ Ish.chiq.    │ Manufacturing│
     │ Farhod     │ Logist       │ Ombor, Yetk. │
     └────────────┴─────────────┴──────────────┘
```

---

## 4️⃣ MA'LUMOT KO'CHIRISH

### Qayerdan qayerga?

```
  ESKI TIZIMLAR → ODOO

  📊 Google Sheets (Savdo)     → Odoo Sotish moduli
  📊 Google Sheets (Ombor)     → Odoo Ombor moduli
  💰 1C:Buxgalteriya           → Odoo Buxgalteriya
  👥 Bitrix24 (CRM)            → Odoo CRM
  📋 Trello (Vazifalar)        → Odoo Loyiha
  📱 Telegram Bot buyurtmalari → Odoo Sotish
```

### Import jarayoni:

```
  1. Eski tizimdan EKSPORT (CSV/Excel)
  2. Ma'lumotlarni TOZALASH
     ├── Dublikatlarni o'chirish
     ├── Nomlarni standartlashtirish
     └── Formatlarni to'g'rilash
  3. Odoo ga IMPORT
  4. TEKSHIRISH — ma'lumotlar to'g'rimi?
```

### 🏪 Anvar misolida:

```
  📦 KO'CHIRILGAN MA'LUMOTLAR:
  
  ┌─────────────────────┬──────────┬──────────┐
  │ Ma'lumot turi       │ Soni     │ Manbasi  │
  ├─────────────────────┼──────────┼──────────┤
  │ Mijozlar            │ 120 ta   │ Bitrix24 │
  │ Ta'minotchilar      │ 8 ta     │ G.Sheets │
  │ Mahsulotlar         │ 15 ta    │ G.Sheets │
  │ Xom ashyo turlari   │ 12 ta    │ G.Sheets │
  │ Xodimlar            │ 12 ta    │ 1C       │
  │ BOM (retseptlar)    │ 15 ta    │ Yangi    │
  │ Boshlang'ich qoldiq │ 25 pozitsiya│ G.Sheets│
  └─────────────────────┴──────────┴──────────┘
  
  ⏱️ Vaqt: 1 hafta
  ✅ Natija: Barcha ma'lumotlar Odoo da!
```

---

## 5️⃣ O'QITISH BOSQICHI

### Kim nimani o'rganadi?

```
  ┌────────────────────────────────────────────────────┐
  │  📚 O'QITISH REJASI                                │
  │                                                    │
  │  👨‍💼 ANVAR (Direktor) — 4 soat                      │
  │  ├── Dashboard va hisobotlar                       │
  │  ├── Buyurtmalarni tasdiqlash                      │
  │  └── Umumiy nazorat                                │
  │                                                    │
  │  💰 NILUFAR (Buxgalter) — 8 soat                   │
  │  ├── Buxgalteriya moduli to'liq                    │
  │  ├── Soliq hisobotlari                             │
  │  ├── Bank operatsiyalari                           │
  │  └── Oylik hisoblash                               │
  │                                                    │
  │  🛒 MADINA (Savdo menejer) — 6 soat                │
  │  ├── CRM — mijozlar boshqaruvi                     │
  │  ├── Kotirovka va buyurtma yaratish                │
  │  └── Hisob-faktura yaratish                        │
  │                                                    │
  │  🏭 SARDOR (Bosh novvoy) — 4 soat                  │
  │  ├── Ishlab chiqarish buyruqlari                   │
  │  ├── BOM dan foydalanish                           │
  │  └── Sifat nazorati                                │
  │                                                    │
  │  🚚 FARHOD (Haydovchi) — 2 soat                    │
  │  ├── Yetkazish buyruqlarini ko'rish                │
  │  └── Yetkazishni tasdiqlash (mobil)                │
  │                                                    │
  │  👨‍🍳 BARCHA NOVVOYLAR — 2 soat                      │
  │  └── Asosiy: kirim/chiqim, smena hisoboti          │
  └────────────────────────────────────────────────────┘
```

---

## 6️⃣ ISHGA TUSHIRISH (Go Live!)

### Strategiyalar:

```
  3 ta yondashuv mavjud:

  1. 🔄 PARALLEL (Ikkalasi birga) — TAVSIYA ETILADI
     Eski tizim + Odoo — 2 hafta birga ishlaydi
     ✅ Xavfsiz, xatoliklar erta aniqlanadi
     ❌ Ikki marta ish qilish kerak
  
  2. ⚡ BIG BANG (Bir kunda o'tish)
     Dushanba kuni eski tizim o'chadi, Odoo yoqiladi
     ✅ Tez, bir martalik
     ❌ Xavfli, muammo bo'lsa qaytish qiyin
  
  3. 📊 BOSQICHMA-BOSQICH (Modul-modul)
     Avval Sotish, keyin Ombor, keyin Buxgalteriya
     ✅ Xavf kam, osonroq
     ❌ Uzoq vaqt, integratsiya kechroq ishlaydi
```

### 🏪 Anvar uchun: PARALLEL + BOSQICHMA-BOSQICH

```
  Jasur tanlagan strategiya:
  
  1-2 hafta: Sotish + CRM → Parallel ishlash
  3-4 hafta: Ombor + Xarid → Parallel ishlash
  5-6 hafta: Buxgalteriya + HR → Parallel ishlash
  7 hafta:   ESKI TIZIMLAR O'CHIRILADI
  8 hafta:   TO'LIQ ODOO DA ISHLASH
  
  ✅ Eng xavfsiz yondashuv
```

---

## ⚠️ Eng Ko'p Yo'l Qo'yiladigan Xatolar

### 🔴 TOP-7 XATO:

| # | Xato | Oqibati | Qanday oldini olish |
|---|------|---------|---------------------|
| 1 | **Tahlilsiz boshlash** | Noto'g'ri modullar tanlanadi | Avval 2 hafta tahlil |
| 2 | **Hammani bir vaqtda o'qitish** | Hech kim o'rganmaydi | Bo'limlar bo'yicha alohida |
| 3 | **Eski jarayonlarni saqlash** | ERP dan foyda kam | Jarayonlarni optimizatsiya qilish |
| 4 | **Ma'lumot tozalamasdan ko'chirish** | Noto'g'ri ma'lumotlar | Avval tozalash, keyin import |
| 5 | **Rahbar qo'llab-quvvatlamasligi** | Xodimlar qarshilik ko'rsatadi | Anvar o'zi ishlatishi kerak |
| 6 | **Bir kunda hammani yoqish** | Xaos | Bosqichma-bosqich |
| 7 | **O'qitishni tashlab qo'yish** | Xodimlar eski usulga qaytadi | Doimiy qo'llab-quvvatlash |

---

## 📊 ROI — Investitsiya Qaytimi

### Anvar uchun hisob-kitob:

```
  💰 INVESTITSIYA: 15,000,000 so'm (bir martalik)
  💰 Oylik xarajat: 500,000 so'm (server + domain)

  📈 OYLIK TEJAMKORLIK:
  ├── 5 ta dastur o'rniga 1 ta:     1,250,000 so'm
  ├── Vaqt tejash (15 soat/hafta):  2,000,000 so'm
  ├── Xatoliklar kamayishi:           500,000 so'm
  ├── Ombor optimallashtirish:      1,000,000 so'm
  └── Qarz yo'qotish kamayishi:     1,000,000 so'm
  ─────────────────────────────────────────────────
  JAMI OYLIK TEJASH:                5,750,000 so'm

  📊 QAYTISH MUDDATI:
  15,000,000 ÷ 5,750,000 = 2.6 oy
  
  ✅ 3 OYDA investitsiya qaytadi!
  ✅ 1 yilda: 5,750,000 × 12 - 15,000,000 = 54,000,000 so'm SOFF FOYDA
```

---

## ✅ Tekshirish Savollari

1. **ERP joriy etishning 6 bosqichini sanab bering.**
2. **Ma'lumot ko'chirishda eng muhim qadam qaysi?**
3. **"Parallel" ishga tushirish strategiyasi nima?**
4. **Eng ko'p yo'l qo'yiladigan xato qaysi va nima uchun?**
5. **Anvarning ERP investitsiyasi qancha muddatda qaytadi?**

---

## 💡 Asosiy Xulosalar

| Xulosa | Tushuntirish |
|--------|-------------|
| ERP joriy etish = loyiha | Rejasiz boshlash — muvaffaqiyatsizlik |
| Tahlil — eng muhim bosqich | Muammolarni bilmasdan yechim topa olmaysiz |
| Ma'lumot tozalash — zarur | "Garbage in = garbage out" |
| O'qitish — uzluksiz | Bir martalik trening yetarli emas |
| Bosqichma-bosqich — eng xavfsiz | Katta portlash (big bang) — xavfli |

---

[← Oldingi: Scaling Jarayoni](11-scaling-jarayoni.md) | [Bosh sahifa](../index.md) | [Keyingi: Xulosa →](13-xulosa.md)
