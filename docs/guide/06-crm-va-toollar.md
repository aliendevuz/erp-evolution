# 🔧 6-Dars: CRM va Alohida Vositalar Davri

> **"Har bir muammo uchun alohida dastur — bu yechim emas, bu yangi muammo."**

[← Oldingi: Google Sheets](05-google-sheets.md) | [Bosh sahifa](/) | [Keyingi: ERP Nima? →](07-erp-nima.md)

---

## 📋 Dars Rejasi

Anvar va Nilufar tushundi: Google Sheets jadval — biznes boshqaruv vositasi emas. Endi ular **har bir muammo uchun alohida dasturiy ta'minot** qidira boshlaydi. Bu darsda turli biznes vositalarini, ularning imkoniyatlarini va **integratsiya muammosini** ko'rib chiqamiz.

---

## 🧩 Anvarning Yangi Vositalari

### 2023-yil boshi

Anvarning biznesi 2 ta filial, 12 ta xodim, 120+ doimiy mijozga o'sdi. Endi **professional vositalar** kerak:

```
┌──────────────────────────────────────────────────────┐
│          ANVAR TANLAGAN VOSITALAR — 2023              │
│                                                      │
│  👥 CRM          → Bitrix24 (Mijozlar bilan aloqa)   │
│  💰 Buxgalteriya → 1C:Buxgalteriya (Moliya + Soliq)  │
│  📦 Ombor        → Google Sheets (hali almashtirgani  │
│                     yo'q)                             │
│  📋 Vazifalar    → Trello (Jamoaga topshiriqlar)      │
│  📱 Buyurtma     → Telegram Bot                       │
│  📊 Hisobot      → Google Sheets + qo'lda             │
│  💬 Aloqa        → Telegram guruh                     │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 👥 CRM — Mijozlar Bilan Munosabatlar Boshqaruvi

### CRM Nima?

**CRM (Customer Relationship Management)** — mijozlar bilan munosabatlarni boshqarish tizimi.

```
CRM javob beradigan savollar:

  ❓ Mijoz kim? → Kontakt ma'lumotlari
  ❓ Oldin nima sotib olgan? → Xarid tarixi
  ❓ Qachon bog'lanishimiz kerak? → Eslatmalar
  ❓ Qaysi mijoz eng qimmatli? → Tahlil
  ❓ Savdo qanday bormoqda? → Pipeline
```

### Anvar Bitrix24 ni tanladi:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  👥 BITRIX24 — Anvarning CRM tizimi
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📇 MIJOZ KARTOCHKASI:
  ┌──────────────────────────────────┐
  │ 🏢 Restoran "Milliy"            │
  │ 👤 Mas'ul: Kamolov Bahrom       │
  │ 📞 +998 90 123-45-67            │
  │ 📧 milliy@restaurant.uz         │
  │ 📍 Samarqand, Amir Temur 42     │
  │                                  │
  │ 💰 Jami xaridlar: 45,600,000    │
  │ 📅 Oxirgi xarid: 2023-05-01     │
  │ ⭐ VIP mijoz                     │
  │                                  │
  │ 📝 Eslatmalar:                   │
  │    - Har dushanba 100 ta non     │
  │    - To'lov: oylik, 5-sanagacha  │
  │    - Patir o'rniga lavash xohladi│
  └──────────────────────────────────┘
```

### CRM ning afzalliklari:

| Imkoniyat | Oldin (Google Sheets) | Keyin (CRM) |
|-----------|----------------------|-------------|
| Mijoz izlash | Ctrl+F, qatorlarni ko'rish | Bir bosish, to'liq kartochka |
| Xarid tarixi | Alohida sheetdan qidirish | Kartochkada avtomatik |
| Eslatma | Qog'ozga yozib qo'yish | Avtomatik bildirishnoma |
| Savdo pipeline | Mavjud emas | Vizual board |
| Telefon qo'ng'iroq | Raqamni qo'lda terish | Bir bosishda qo'ng'iroq |

### Savdo Pipeline (Savdo Voronkasi):

```
  BITRIX24 SAVDO PIPELINE — Anvarning yangi B2B mijozlari

  📥 YANGI        🤝 MUZOKARADA    📋 TAKLIF      ✅ KELISHILDI    💰 TO'LANDI
  MUROJAAT         (Gaplashildi)    YUBORILDI      (Shartnoma)     
  ─────────       ──────────────    ──────────     ───────────     ──────────
  "Tong" kafe     "Sayyoh" hotel   12-maktab      Rest."Milliy"   15-bog'cha
  "Darvoza" rest  "Grand" oshxona                  "Olmos" kafe    
  18-maktab                                                        
  
  3 ta            2 ta             1 ta            2 ta            1 ta
  ─────────────────────────────────────────────────────────────────────────
  Potensial daromad: 8,500,000 so'm/oy
```

---

## 💰 Buxgalteriya Dasturi — 1C

### Nima uchun kerak bo'ldi?

```
  Nilufar: "Anvar aka, men soliq hisobotini qo'lda 
            tayyorlayapman. 12 ta xodim, 2 ta filial, 
            150+ tranzaksiya/kun — bu juda ko'p.
            
            Soliq inspeksiyasi endi ELEKTRON hisobot 
            talab qilyapti. 1C kerak."
```

### 1C:Buxgalteriya qanday ishlaydi:

```
┌──────────────────────────────────────────────────┐
│            1C:BUXGALTERIYA                        │
│                                                  │
│  📋 Asosiy funksiyalar:                           │
│  ├── Buxgalteriya hisobi (debet/kredit)           │
│  ├── Hisob-fakturalar (schyot-faktura)            │
│  ├── Oylik hisoblash (ish haqi)                   │
│  ├── Soliq hisobotlari (avtomatik)                │
│  ├── Bank ko'chirmalari                           │
│  └── Moliyaviy hisobotlar                         │
│                                                  │
│  📊 Hisobotlar:                                   │
│  ├── Balans                                       │
│  ├── Foyda va zarar hisobi                        │
│  ├── Pul oqimi (Cash flow)                        │
│  ├── Soliq deklaratsiyasi                         │
│  └── Xodimlar hisobi                              │
│                                                  │
└──────────────────────────────────────────────────┘
```

### 1C ning afzalliklari:

| Muammo | Oldin | 1C bilan |
|--------|-------|----------|
| Soliq hisoboti | 2 kun qo'lda hisoblash | 10 daqiqada avtomatik |
| Oylik hisoblash | Kalkulyatorda hisoblash | Avtomatik (soliq bilan) |
| Hisob-faktura | Word da yozish | Bir tugmada chiqarish |
| Balans | Nilufar qo'lda tuzadi | Avtomatik generatsiya |
| Soliq to'lovi | Qo'lda hisoblash | Tizim o'zi hisoblaydi |

---

## 📋 Loyiha/Vazifa Boshqaruvi — Trello

### Nima uchun kerak?

12 ta xodim, 2 ta filial — endi **"kim nima qilmoqda"** ni bilish kerak:

```
┌──────────────────────────────────────────────────────┐
│  📋 TRELLO — Anvar Non Vazifalari                     │
├──────────────┬──────────────┬────────────────────────┤
│  📥 QILISH   │ 🔄 JARAYONDA │ ✅ BAJARILDI            │
│  KERAK       │              │                        │
├──────────────┼──────────────┼────────────────────────┤
│ 🎂 VIP tort  │ 📦 Un xaridi │ ✅ Lavash retsepti      │
│   buyurtmasi │   (Anvar)    │    tasdiqlandi          │
│   (Jasur)    │              │                        │
│              │ 🚚 12-maktab │ ✅ 2-filial jihozlari   │
│ 📊 Oylik     │   yetkazish  │    o'rnatildi           │
│   hisobot    │   (Haydovchi)│                        │
│   (Nilufar)  │              │ ✅ Yangi novvoy         │
│              │ 🧹 1-filial  │    o'qitildi            │
│ 📞 "Grand"   │   tozalash   │                        │
│   hotel bilan│   (Sardor)   │                        │
│   gaplashish │              │                        │
│   (Madina)   │              │                        │
└──────────────┴──────────────┴────────────────────────┘
```

---

## 📱 Telegram Bot — Buyurtma Qabul Qilish

IT-chi Jasur Telegram bot yaratdi:

```
  📱 @AnvarNonBot

  Mijoz: /buyurtma
  
  Bot: Assalomu alaykum! Nima buyurtma qilasiz?
       1. 🍞 Oq non — 3,000 so'm
       2. 🫓 Patir — 5,000 so'm  
       3. 🥟 Somsa — 7,000 so'm
       4. 🫓 Lavash — 4,000 so'm
       5. 🎂 Tort (buyurtma) — narx kelishiladi
  
  Mijoz: 1
  Bot: Oq non — nechta?
  Mijoz: 50
  Bot: 50 ta oq non = 150,000 so'm
       Yetkazish manzili?
  Mijoz: Registon 15
  Bot: ✅ Buyurtma qabul qilindi! #BUY-2023-0547
       Yetkazish vaqti: 2 soat ichida
```

---

## 🚨 KATTA MUAMMO: Integratsiya

### Hamma narsa alohida-alohida ishlaydi!

Anvarning barcha vositalari **bir-birini bilmaydi**:

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  Bitrix24│  │    1C    │  │  Trello  │  │ Telegram │
│   CRM    │  │Buxgalter.│  │ Vazifalar│  │   Bot    │
│          │  │          │  │          │  │          │
│ Mijozlar │  │ Moliya   │  │ Topshiriq│  │ Buyurtma │
└────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘
     │             │             │              │
     ╳             ╳             ╳              ╳
     │             │             │              │
     └─────────────┴─────────────┴──────────────┘
              ❌ BOG'LANISH YO'Q!
```

### Real hayotdagi oqibatlari:

#### Muammo 1: Ma'lumotni qayta-qayta kiritish

```
  Yangi mijoz "Grand Hotel" keldi:
  
  1️⃣ Bitrix24 ga kiritish kerak     → Madina kiritdi
  2️⃣ 1C ga kiritish kerak           → Nilufar kiritdi
  3️⃣ Google Sheets ga kiritish kerak → Anvar kiritdi
  4️⃣ Telegram bot ga qo'shish kerak → Jasur kiritdi
  
  ⏱️ 4 marta bir xil ma'lumot kiritildi!
  🐛 Bitrix24 da "Grand Hotel", 1C da "Гранд Отель" — nomlar farq!
```

#### Muammo 2: Ma'lumotlar sinxronlashmasligi

```
  Vaziyat:
  Mijoz Telegram bot orqali 200,000 so'mlik buyurtma berdi.
  
  ❌ Bitrix24 da bu buyurtma ko'rinmaydi
  ❌ 1C da bu tranzaksiya yo'q
  ❌ Google Sheets dagi ombor qoldig'i yangilanmadi
  ❌ Trello da haydovchiga vazifa berilmadi
  
  Natija: Nilufar axir QAYERDA pul tushganini bilmayapti.
  Madina CRM da bu mijozning xarid tarixini ko'rmayapti.
```

#### Muammo 3: Hisobot — dahshat

```
  Anvar savollariga javob olish uchun:
  
  "Bu oy qancha foyda qildik?"
  → 1C dan daromad olish
  → Google Sheets dan qo'shimcha ma'lumot
  → Bitrix24 dan sotilmagan buyurtmalar
  → Qo'lda birlashtirish
  ⏱️ Vaqt: 4-5 soat

  "Eng foydali mijoz kim?"
  → Bitrix24 dan mijozlar ro'yxati
  → 1C dan to'lov ma'lumotlari
  → Google Sheets dan buyurtma tarixi
  → Qo'lda tahlil
  ⏱️ Vaqt: 2-3 soat
```

#### Muammo 4: Xarajat — ko'p

```
  💸 OYLIK DASTURIY TA'MINOT XARAJATLARI

  Dastur              Oylik to'lov      Yillik
  ────────────────────────────────────────────────
  Bitrix24 (CRM)      500,000 so'm      6,000,000
  1C:Buxgalteriya     300,000 so'm      3,600,000
  Trello (Premium)    150,000 so'm      1,800,000
  Google Workspace    100,000 so'm      1,200,000
  Telegram Bot        200,000 so'm      2,400,000
  (hosting + support)
  ────────────────────────────────────────────────
  JAMI:              1,250,000 so'm     15,000,000
  
  + Jasur ning oyligi (IT qo'llab-quvvatlash):
                     3,000,000 so'm     36,000,000
  
  UMUMIY IT XARAJAT: 4,250,000 so'm/oy
```

---

## 😤 Anvarning Kundalik Azoblari

Tipik ish kuni:

```
  06:00 — Telegram botdan buyurtmalarni tekshirish
  06:15 — Buyurtmalarni Google Sheets ga qo'lda yozish
  06:30 — Trello da haydovchilar uchun vazifalar yaratish
  07:00 — Bitrix24 da yangi murojatlarni ko'rish
  08:00 — 1C da kechagi tranzaksiyalarni tekshirish
  09:00 — Google Sheets da ombor qoldig'ini yangilash
  10:00 — Yana Telegram — yangi buyurtmalar...
  
  😤 Kunning yarmi DASTURLAR O'RTASIDA SAKRASH bilan o'tadi!
```

```
  Anvar: "Men NOVVOY bo'lishim kerak edi, 
          lekin kunning yarmi KOMPYUTER OLDIDA o'tmoqda!
          
          5 ta dastur, 5 ta login, 5 ta interface.
          Bir joyda yozganim boshqa joyda ko'rinmaydi.
          
          BITTA dastur bo'lsa — hammasi bir joyda bo'lsa —
          shuni xohlayman!"
```

---

## 📊 Vositalar Evolyutsiyasi — Xulosa Jadvali

| Bosqich | Vosita | Hal qilgan muammo | Yangi muammo |
|---------|--------|-------------------|--------------|
| 1 | 📓 Daftar | Hech narsa yo'q edi | Xatoliklar, sekinlik |
| 2 | 📊 Excel | Avtomatik hisoblash | Collaboration yo'q |
| 3 | ☁️ Google Sheets | Hamkorlik, bulut | Murakkab logika, tezlik |
| 4 | 🔧 CRM + Toollar | Har bir muammo hal | **Integratsiya yo'q!** |
| 5 | 🏗️ **ERP** | **Hamma narsa BIR JOYDA** | — |

```
📓 → 📊 → ☁️ → 🔧🔧🔧🔧 → 🏗️ ERP
                   ↑              ↑
              Hozir shu yerdamiz   Keyingi qadam!
```

---

## 💡 Anvarning To'rtinchi "Aha!" Momenti

Anvar yana Toshkentdagi biznes forumiga bordi. Bu safar **ERP** haqida eshitdi:

```
  Ma'ruzachi: "Sizlardan kim 3 tadan ortiq dastur 
               ishlatadi biznesida?"
  
  (Zalning yarmi qo'l ko'tardi, Anvar ham)
  
  Ma'ruzachi: "Sizlar bilasizmi — bu dasturlarning 
               ma'lumotlari bir-biriga bog'lanmaganligining
               o'zi sizga OYIGA MILLIONLAB so'm zarar 
               keltirmoqda?
               
               Tasavvur qiling — BITTA dastur:
               • Mijozlarni boshqaradi
               • Buyurtmalarni qabul qiladi
               • Omborni nazorat qiladi
               • Buxgalteriyanmi yuritadi
               • Soliq hisobotini avtomatik qiladi
               • Xodimlarga oylik hisoblaydi
               • Hisobot — bir tugmada
               
               Bu — ERP tizimi.
               Va eng yaxshisi — Odoo degan 
               BEPUL variant ham bor!"
  
  Anvar: 😮 "BEPUL?! Tushuntiring!"
```

---

## ✅ Tekshirish Savollari

1. **CRM nima va qanday muammoni hal qiladi?**
2. **Nima uchun har bir muammo uchun alohida dastur — bu yechim emas?**
3. **"Ma'lumotni qayta-qayta kiritish" muammosi nimaga olib keladi?**
4. **Integratsiya muammosining biznesga ta'siri qanday?**
5. **Anvar 5 ta dastur uchun qancha xarajat qilmoqda?**

---

## 💡 Asosiy Xulosalar

| Xulosa | Tushuntirish |
|--------|-------------|
| CRM — mijoz munosabatlarini boshqaradi | Lekin faqat mijoz tomoni, buxgalteriya yo'q |
| Har bir tool o'z muammosini hal qiladi | Lekin yangi muammo yaratadi — integratsiya |
| Ma'lumotlar tarqoqligi = vaqt yo'qotish | 4-5 ta dastur o'rtasida sakrash — samarasiz |
| Jami xarajat ko'p bo'lib ketadi | 5 ta dastur alohida-alohida to'lash = qimmat |
| Yechim: BITTA tizim — ERP | Barcha jarayonlar bitta platformada |

> **Keyingi darsda** biz nihoyat **ERP** tushunchasini to'liq o'rganamiz. ERP nima? Qachon paydo bo'lgan? Qanday ishlaydi? Va nima uchun u biznes uchun **inqilob**?

---

[← Oldingi: Google Sheets](05-google-sheets.md) | [Bosh sahifa](/) | [Keyingi: ERP Nima? →](07-erp-nima.md)
