# ☁️ 5-Dars: Google Sheets va Bulutli Hamkorlik

> **"Bulut texnologiyasi — faylni emas, jarayonni ulashish demak."**

[← Oldingi: Excel Davri](04-excel-davri.md) | [Bosh sahifa](../index.md) | [Keyingi: CRM va Toollar →](06-crm-va-toollar.md)

---

## 📋 Dars Rejasi

Anvar va Nilufar Excel dagi **collaboration muammosidan** charchashdi. Bu darsda ular **Google Sheets** ga o'tishadi — bu yangi imkoniyatlar ochadi, lekin biznes yanada o'sganda yangi cheklovlar paydo bo'ladi.

---

## 🌐 Google Sheets Nima?

Google Sheets — bu **bulutda (cloud)** ishlaydigan jadval dasturi. Excel ga o'xshash, lekin muhim farqlari bor:

```
┌──────────────────────────────────────────────────────┐
│              GOOGLE SHEETS                            │
│                                                      │
│  ☁️ Internetda ishlaydi (brauzer orqali)             │
│  👥 Bir nechta kishi BIR VAQTDA ishlaydi             │
│  💾 Avtomatik saqlanadi (har bir o'zgarish)           │
│  📱 Telefon, planshet, kompyuter — hamma joyda        │
│  🆓 Bepul (Google hisobi bilan)                       │
│  📜 O'zgarishlar tarixi saqlanadi                     │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 🚀 Anvar va Nilufar Google Sheets ga O'tadi

### 2022-yil, fevral

Nilufar Google Sheets ni sozladi. Endi ular yangicha ishlaydi:

```
  OLDIN (Excel):                    KEYIN (Google Sheets):
  
  Anvar → savdo.xlsx               Anvar ──┐
         🔒 qulflangan                     ├──→ ☁️ Savdo Sheet
  Nilufar kutmoqda...              Nilufar ─┘    (bir vaqtda!)
  
  Natija: 1 ta kishi               Natija: 2+ kishi
  ishlaydi                         BIR VAQTDA ishlaydi
```

### Yangi tuzilma:

```
📁 Google Drive: "Anvar Non — Biznes"
│
├── 📊 Savdo va Daromad
│   ├── Sheet 1: Kunlik savdo
│   ├── Sheet 2: Oylik hisobot (avtomatik formulalar)
│   └── Sheet 3: Yillik trend
│
├── 📊 Xarajatlar
│   ├── Sheet 1: Kunlik xarajatlar
│   ├── Sheet 2: Kategoriya bo'yicha (Pivot)
│   └── Sheet 3: Oylik xulosa
│
├── 📊 Qarzlar va To'lovlar
│   ├── Sheet 1: Debitor qarzlar (bizga qarzdorlar)
│   ├── Sheet 2: Kreditor qarzlar (biz qarzdormiz)
│   └── Sheet 3: To'lov kalendari
│
├── 📊 Ombor Hisobi
│   ├── Sheet 1: Xom ashyo qoldiqlari
│   ├── Sheet 2: Kirim/Chiqim
│   └── Sheet 3: Minimum zaxira ogohlantirishlari
│
└── 📊 Xodimlar
    ├── Sheet 1: Xodimlar ro'yxati
    ├── Sheet 2: Ish grafigi
    └── Sheet 3: Oylik hisob-kitob
```

---

## ✅ Google Sheets ning Afzalliklari

### 1. 👥 Real-time Collaboration

```
  Anvar (do'konda, kompyuterda):
  → Savdo ma'lumotlarini kiritmoqda...
  
  Nilufar (uyda, noutbukda):
  → Xarajat hisobini tekshirmoqda...
  
  Anvarning telefoni:
  → Bildirishnoma: "Nilufar xarajat jadvaliga yozuv qo'shdi"
  
  ✅ Ikkalasi BIR VAQTDA, BIR FAYLDA ishlayapti!
  ✅ Bir-birining kursorini ko'rib turibdi (rangli kursorlar)
```

### 2. 📜 Versiya Tarixi (Version History)

```
  Muammo bo'lganda:
  
  Fayl → Versiya tarixi → Versiya tarixini ko'rish
  
  ┌──────────────────────────────────────────┐
  │  VERSIYA TARIXI                          │
  │                                          │
  │  📅 Bugun, 14:30 — Anvar                 │
  │     "Savdo yozuvlarini qo'shdi"          │
  │                                          │
  │  📅 Bugun, 13:15 — Nilufar               │
  │     "Xarajat formulasini tuzatdi"        │
  │                                          │
  │  📅 Kecha, 20:00 — Anvar                 │
  │     "Yangi mahsulot qo'shdi"             │
  │                                          │
  │  [Shu versiyaga qaytarish] tugmasi       │
  └──────────────────────────────────────────┘
  
  ✅ Kim, qachon, nima o'zgartirganini ko'rish mumkin
  ✅ Istalgan versiyaga qaytarish mumkin
```

### 3. 📱 Hamma Joyda Kirish

```
  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │ 💻       │  │ 📱       │  │ 📱       │
  │Kompyuter │  │ Telefon  │  │ Planshet │
  │ Do'konda │  │  Yo'lda  │  │  Uyda    │
  └────┬─────┘  └────┬─────┘  └────┬─────┘
       │              │              │
       └──────────────┼──────────────┘
                      │
                 ☁️ Google Cloud
                 Bitta fayl, hamma joyda
```

### 4. 🔗 Google Forms Bilan Integratsiya

Nilufar aqlli ish qildi — **Google Form** yaratdi:

```
  📝 BUYURTMA FORMASI (Google Form)
  ─────────────────────────────────
  Mijoz nomi:     [____________]
  Mahsulot:       [▼ Tanlang   ]
  Soni:           [____________]
  Yetkazish sana: [📅 Tanlang  ]
  Telefon:        [____________]
  
  [YUBORISH]
  
  ↓ Avtomatik ↓
  
  📊 Google Sheets ga tushadigan qator:
  | Sana | Mijoz | Mahsulot | Soni | Yetkazish | Telefon |
```

### 5. 📧 Bildirishnoma va Avtomatlashtirish

```
  Google Apps Script bilan:
  
  ┌────────────────────────────────────────┐
  │  🔔 AVTOMATIK OGOHLANTIRISHLAR         │
  │                                        │
  │  • Un qoldig'i 100 kg dan kam bo'lsa   │
  │    → Anvarga email yuboriladi           │
  │                                        │
  │  • Qarz muddati o'tsa                  │
  │    → Nilufarning telefoniga xabar      │
  │                                        │
  │  • Yangi buyurtma kelsa (Form orqali)  │
  │    → Ikkalasiga bildirishnoma          │
  └────────────────────────────────────────┘
```

---

## 📈 Biznes Yanada O'sdi — 2022-yil

Google Sheets tufayli Anvar va Nilufar samaraliroq ishladi. Biznes o'sishda davom etdi:

```
📈 2022-YIL NATIJALARI

  Ko'rsatkich        2021          2022         O'sish
  ──────────────────────────────────────────────────────
  Oylik daromad      40M so'm      75M so'm     +87.5%
  Xodimlar           5 kishi       12 kishi     +140%
  Mahsulot turlari   8 ta          15 ta        +87.5%
  Doimiy mijozlar    45 ta         120 ta       +167%
  Filiallar          1 ta          2 ta         +100%
  Yetkazish          1 mashina     3 mashina    +200%
  ──────────────────────────────────────────────────────
```

Anvar endi:
- 🏪 **2-chi filial** ochdi (Samarqand markazida)
- 🚚 **3 ta mashina** bilan yetkazib berish
- 👨‍🍳 **12 ta xodim** — novvoylar, haydovchilar, sotuvchilar
- 📱 **Telegram bot** orqali buyurtma qabul qilish
- 🎂 **Buyurtma asosida tort** tayyorlash xizmati

---

## 🚨 Google Sheets ning Cheklovlari

Biznes o'sdi — va Google Sheets ham **yetmay qoldi**:

### 🔴 Muammo #1: Ma'lumotlar Hajmi va Tezlik

```
  2022-yil oxiriga kelib:
  
  📊 Savdo jadvali:      25,000+ qator → SEKIN!
  📊 Xarajat jadvali:    8,000+ qator  → Sekinlashmoqda
  📊 Mijozlar ro'yxati:  120 ta → Hali yetarli
  
  Muammo:
  Sahifani ochish — 15-20 soniya kutish
  Formula qayta hisoblash — 5-10 soniya
  Filtr qo'yish — 8 soniya
  
  🐢 "Tez-tez qotib qoladi" — Anvar shikoyati
```

### 🔴 Muammo #2: Murakkab Biznes Logikasi

```
  Anvar endi shunday savollarga javob kerak:
  
  ❓ "Qaysi mahsulot eng ko'p foyda keltiradi?"
     → 3 ta sheet dan ma'lumot yig'ib hisoblash kerak
  
  ❓ "Oy oxirida qancha un kerak bo'ladi?"
     → Savdo prognozi + BOM + ombor qoldig'i = ???
  
  ❓ "Qaysi mijoz eng ko'p xarid qiladi va 
      qaysi mijoz eng ko'p qarz qoldiryapti?"
     → Savdo + Qarz sheet larni bog'lash kerak
  
  ❓ "2-filialning alohida hisoboti?"
     → Barcha sheet larga "Filial" ustuni qo'shish kerak
  
  Google Sheets buni qila OLADI... lekin:
  ⏱️ 100+ ta murakkab formula
  🐛 Formulalarni tuzatish — dasturlashga aylandi
  😵 Nilufar ham tushunmay qoldi
```

### 🔴 Muammo #3: Jarayonlar Avtomatlashmagan

```
  Buyurtma jarayoni — hali ham QO'LDA:
  
  1. Mijoz Telegram da yozadi         → Qo'lda
  2. Anvar buyurtmani o'qiydi          → Qo'lda
  3. Savdo sheet ga yozadi             → Qo'lda
  4. Novvoyga aytadi                   → Og'zaki
  5. Tayyor bo'lganda haydovchiga aytadi → Telefon
  6. Haydovchi yetkazadi               → Qo'lda
  7. To'lovni tekshiradi               → Qo'lda
  8. Qarz sheet ga yozadi              → Qo'lda
  
  📝 8 ta qo'lda qadam — har bir buyurtma uchun!
  
  Kuniga 50+ buyurtma × 8 qadam = 400 ta qo'lda amal!
  😩 Bu juda ko'p!
```

### 🔴 Muammo #4: Xavfsizlik va Ruxsatlar

```
  Muammo:
  12 ta xodimning hammasi BARCHA ma'lumotlarni ko'radi!
  
  ❌ Haydovchi — oylik hisobni ko'radi
  ❌ Sotuvchi — xom ashyo narxlarini ko'radi  
  ❌ Novvoy — boshqa xodimlar oyligini ko'radi
  
  Google Sheets da:
  ✅ Sheet darajasida ruxsat berish mumkin
  ❌ Lekin qator/ustun darajasida — MUMKIN EMAS
  ❌ "Faqat o'z filialini ko'rsin" — QIYIN
```

### 🔴 Muammo #5: Hisobot va Tahlil Cheklangan

```
  Anvar xohlaydi:
  
  📊 "Dashboard" — bir qarashda barcha ko'rsatkichlar
  📊 Haftalik/oylik/yillik solishtirma
  📊 Mahsulot rentabelligi tahlili
  📊 Mijoz segmentatsiyasi
  📊 Xodim samaradorligi
  📊 Filiallar solishtirmasi
  
  Google Sheets:
  ❌ Dashboard yo'q
  ❌ Har bir hisobot uchun yangi formulalar yozish kerak
  ❌ Grafik yaratish murakkab va cheklangan
  ❌ Real-time dashboard — deyarli imkonsiz
```

---

## 📊 Excel vs Google Sheets — Solishtirma

| Mezon | 📊 Excel | ☁️ Google Sheets |
|-------|----------|-----------------|
| Narx | Pullik | Bepul |
| Collaboration | ❌ Yo'q | ✅ Real-time |
| Versiya boshqaruvi | ❌ Yo'q | ✅ Avtomatik |
| Mobil kirish | ❌ Qiyin | ✅ Oson |
| Ma'lumot hajmi | 1M qator | ~10M katak (sekin) |
| Formulalar quvvati | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Offline ishlash | ✅ Ha | ⚠️ Cheklangan |
| Integratsiya | ⚠️ Qiyin | ✅ Google ecosystem |
| Xavfsizlik | ⚠️ Fayl darajasida | ⚠️ Sheet darajasida |
| Biznes logikasi | ❌ Cheklangan | ❌ Cheklangan |

---

## 💡 Anvarning Uchinchi "Aha!" Momenti

Anvar Toshkentda biznes forumiga bordi. U yerda boshqa tadbirkorlar bilan gaplashdi:

```
  Tadbirkor #1: "Men Bitrix24 ishlataman — mijozlar bilan 
                 aloqani boshqaradi. CRM deyiladi."
  
  Tadbirkor #2: "Menga 1C:Buxgalteriya kerak bo'ldi — soliq 
                 hisobotini avtomatik qiladi."
  
  Tadbirkor #3: "Men Trello ishlataman — jamoaga vazifalar 
                 berib, nazorat qilaman."
  
  Anvar: "Bizga ham shunday narsalar kerak! Google Sheets 
          bilan hamma narsani qo'lda qilishdan charchadik!"
  
  Nilufar: "To'g'ri. Har bir muammo uchun alohida dastur 
            bor ekan. Keling, keraklilarini topamiz!"
```

---

## ✅ Tekshirish Savollari

1. **Google Sheets ning Excel dan asosiy afzalligi nima?**
2. **Real-time collaboration nima va nima uchun muhim?**
3. **25,000 qatorli jadvalda qanday muammolar paydo bo'ladi?**
4. **Nima uchun Google Sheets murakkab biznes logikasi uchun yetarli emas?**
5. **Google Forms qanday yordam berdi va cheklovlari nima?**

---

## 💡 Asosiy Xulosalar

| Xulosa | Tushuntirish |
|--------|-------------|
| Google Sheets — collaboration muammosini hal qildi | Bir vaqtda ishlash, versiya tarixi, mobil kirish |
| Lekin Google Sheets — jadval, ERP emas | Biznes jarayonlarini boshqarish uchun mo'ljallanmagan |
| Biznes o'sganda jadvallar yetmaydi | Murakkab logika, xavfsizlik, avtomatlashtirish kerak |
| Har bir muammo uchun alohida dastur kerak | CRM, buxgalteriya, ombor — har biri uchun maxsus tool |

> **Keyingi darsda** Anvar va Nilufar **CRM, buxgalteriya dasturi, loyiha boshqaruvi** va boshqa vositalar bilan tanishadi. Har bir vosita o'z muammosini hal qiladi — lekin yangi muammo tug'iladi: **ularni qanday birlashtirish kerak?**

---

[← Oldingi: Excel Davri](04-excel-davri.md) | [Bosh sahifa](../index.md) | [Keyingi: CRM va Toollar →](06-crm-va-toollar.md)
