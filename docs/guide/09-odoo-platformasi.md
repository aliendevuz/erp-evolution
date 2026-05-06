# 🟣 9-Dars: Odoo Platformasi

> **"Odoo — bu faqat ERP emas, bu butun biznes ekotizimi."**

[← Oldingi: ERP Modullari](08-erp-modullari.md) | [Bosh sahifa](/) | [Keyingi: Odoo Modullari →](10-odoo-modullari.md)

---

## 📋 Dars Rejasi

Bu darsda biz **Odoo** platformasini chuqur o'rganamiz: u nima, qanday paydo bo'lgan, nima uchun uni tanlash kerak va boshqa ERP tizimlaridan farqi nima.

---

## 🟣 Odoo Nima?

### Rasmiy ta'rif:

> **Odoo** — dunyo bo'ylab eng mashhur **ochiq kodli (open-source)** biznes dasturiy ta'minot platformasi. U ERP, CRM, e-commerce, veb-sayt yaratish va boshqa 80+ biznes ilovasini o'z ichiga oladi.

### Raqamlarda:

```
┌──────────────────────────────────────────┐
│          🟣 ODOO RAQAMLARDA              │
│                                          │
│  📅 Asos solingan: 2005-yil              │
│  🏢 Kompaniya: Odoo S.A. (Belgiya)       │
│  👨‍💻 Asoschisi: Fabien Pinckaers          │
│  🌍 Foydalanuvchilar: 12,000,000+        │
│  🏢 Kompaniyalar: 300,000+               │
│  🌐 Mamlakatlar: 120+                    │
│  📦 Ilovalar soni: 82 (rasmiy)           │
│  🧩 Hamjamiyat ilovalari: 46,000+        │
│  💻 Dasturchilar: 2,500+ (kompaniyada)   │
│  🗣️ Tillar: 50+                          │
│                                          │
└──────────────────────────────────────────┘
```

---

## 📜 Odoo Tarixi

```
  2005 — Fabien Pinckaers "TinyERP" ni yaratdi
         Maqsad: Kichik bizneslar uchun bepul ERP
         │
  2009 — Nomi o'zgartirildi: "OpenERP"
         Dunyo bo'ylab mashhur bo'la boshladi
         │
  2014 — Yana nom o'zgardi: "Odoo"
         ERP dan ko'proq — to'liq biznes platformasi
         │
  2017 — Odoo 11: Yangi zamonaviy interfeys
         │
  2019 — Odoo 13: E-commerce, Marketing qo'shildi
         │
  2021 — Odoo 15: IoT, Bilim bazasi
         │
  2023 — Odoo 17: AI integratsiya, yangilangan UX
         │
  2024 — Odoo 18: Yanada kuchli AI, yangi modullar
```

---

## ⚖️ Community vs Enterprise

Odoo **ikki versiyada** mavjud:

```
┌─────────────────────┬─────────────────────────────┐
│  🆓 COMMUNITY       │  💎 ENTERPRISE               │
│  (Bepul, ochiq kod)  │  (Pullik, to'liq funksional)│
├─────────────────────┼─────────────────────────────┤
│                     │                             │
│ ✅ Asosiy modullar   │ ✅ Barcha modullar           │
│ ✅ CRM              │ ✅ Marketing avtomatlashtirish│
│ ✅ Sotish            │ ✅ Studio (vizual sozlash)    │
│ ✅ Xarid             │ ✅ Odoo.sh (bulut hosting)    │
│ ✅ Ombor             │ ✅ VoIP (internet telefon)    │
│ ✅ Buxgalteriya      │ ✅ Full-text qidirish         │
│ ✅ HR (asosiy)       │ ✅ Multi-kompaniya            │
│ ✅ Veb-sayt (asosiy) │ ✅ Rasmiy qo'llab-quvvatlash  │
│                     │ ✅ Avtomatik yangilanish       │
│ ❌ Studio yo'q       │                             │
│ ❌ Marketing cheklangan│                            │
│ ❌ Rasmiy support yo'q │                            │
│                     │                             │
│ 💰 Narx: $0         │ 💰 Narx: ~$25/user/oy       │
│                     │  (yillik shartnomada arzonroq)│
└─────────────────────┴─────────────────────────────┘
```

### Qaysi birini tanlash kerak?

| Siz | Tavsiya |
|-----|---------|
| Kichik biznes, byudjet cheklangan | 🆓 Community |
| O'rta biznes, o'sish rejasi bor | 💎 Enterprise |
| Startup, sinab ko'rmoqchi | 🆓 Community → keyin Enterprise |
| Yirik kompaniya | 💎 Enterprise (albatta) |
| Dasturchi, o'rganmoqchi | 🆓 Community |

### 🏪 Anvar uchun tavsiya:

```
  Anvar holati:
  ├── 2 ta filial
  ├── 12 ta xodim
  ├── 120+ mijoz
  ├── Byudjet: cheklangan
  └── IT tajribasi: past

  Tavsiya: 🆓 Community dan boshlash!
  
  Sabab:
  ├── Bepul — byudjetga mos
  ├── Asosiy modullar yetarli
  ├── Keyin Enterprise ga o'tish oson
  └── Jasur (IT-chi) o'zi o'rnatishi mumkin
```

---

## 🏗️ Odoo Arxitekturasi

### Texnik tuzilma:

```
┌──────────────────────────────────────────────┐
│              ODOO ARXITEKTURASI               │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │  🌐 FRONTEND (Foydalanuvchi ko'radi) │    │
│  │  ├── Veb interfeys (JavaScript/OWL)  │    │
│  │  ├── Mobil interfeys                 │    │
│  │  └── API (tashqi dasturlar uchun)    │    │
│  └──────────────────────────────────────┘    │
│                    │                          │
│  ┌──────────────────────────────────────┐    │
│  │  ⚙️ BACKEND (Server tomoni)           │    │
│  │  ├── Python (asosiy til)             │    │
│  │  ├── ORM (ma'lumotlar boshqaruvi)    │    │
│  │  └── Modullar tizimi                 │    │
│  └──────────────────────────────────────┘    │
│                    │                          │
│  ┌──────────────────────────────────────┐    │
│  │  🗄️ DATABASE (Ma'lumotlar bazasi)     │    │
│  │  └── PostgreSQL                      │    │
│  └──────────────────────────────────────┘    │
│                                              │
└──────────────────────────────────────────────┘
```

### O'rnatish variantlari:

| Variant | Tavsifi | Kim uchun? |
|---------|---------|-----------|
| **Odoo.com (Online)** | Odoo bulut serverlarida | Tez boshlash, IT bilmaydiganlar |
| **Odoo.sh** | Odoo ning professional bulut platformasi | Enterprise foydalanuvchilar |
| **On-premise** | O'z serveringizga o'rnatish | To'liq nazorat xohlaydiganlar |
| **Docker** | Konteynerda ishga tushirish | Dasturchilar, test uchun |

---

## 🆚 Odoo vs Boshqa ERP Tizimlar

| Mezon | 🟣 Odoo | SAP | Oracle | 1C |
|-------|---------|-----|--------|----|
| **Narx** | Bepul (Community) | Juda qimmat | Juda qimmat | O'rtacha |
| **Ochiq kod** | ✅ Ha | ❌ | ❌ | ❌ |
| **O'rganish** | ⭐⭐⭐ Oson | ⭐ Juda qiyin | ⭐ Juda qiyin | ⭐⭐ O'rtacha |
| **Kichik biznes** | ✅ Ideal | ❌ Mo'ljallanmagan | ❌ | ✅ |
| **Yirik biznes** | ✅ Enterprise | ✅ Ideal | ✅ Ideal | ⚠️ Cheklangan |
| **Zamonaviy UI** | ✅ Chiroyli | ⚠️ Eski | ⚠️ Eski | ❌ Eski |
| **Modullari** | 82+ rasmiy | 25+ | 20+ | 15+ |
| **Hamjamiyat** | 46,000+ app | Kichik | Kichik | O'rtacha |
| **Mobil** | ✅ | ⚠️ | ⚠️ | ❌ |
| **Joriy etish vaqti** | 1-3 oy | 6-24 oy | 6-18 oy | 1-3 oy |

### Nima uchun Odoo?

```
  ✅ Bepul boshlash mumkin (Community)
  ✅ Zamonaviy, chiroyli interfeys
  ✅ O'rganish oson
  ✅ Modular — keragini o'rnat, keraksizini emas
  ✅ Ochiq kod — o'zgartirishingiz mumkin
  ✅ Katta hamjamiyat — yordam topish oson
  ✅ Kichik biznesdan yirik korporatsiyagacha
  ✅ 50+ tilda, shu jumladan o'zbek/rus
  ✅ Doimiy yangilanib turadi
```

---

## 🟣 Odoo ning 82 ta Rasmiy Ilovasi

### Kategoriyalar bo'yicha:

```
  📊 SOTISH VA CRM
  ├── CRM
  ├── Sotish (Sales)
  ├── Obuna (Subscriptions)
  └── Ijaraga berish (Rental)

  🌐 VEB-SAYT
  ├── Veb-sayt yaratish
  ├── E-commerce (onlayn do'kon)
  ├── Blog
  ├── Forum
  └── Jonli chat (Live Chat)

  💰 MOLIYA
  ├── Buxgalteriya (Accounting)
  ├── Hisob-faktura (Invoicing)
  └── Xarajatlar (Expenses)

  📦 OMBOR VA LOGISTIKA
  ├── Ombor (Inventory)
  ├── Xarid (Purchase)
  ├── Ishlab chiqarish (Manufacturing)
  ├── PLM (Mahsulot hayot sikli)
  └── Sifat nazorati (Quality)

  👥 INSON RESURSLARI
  ├── Xodimlar (Employees)
  ├── Ishga qabul (Recruitment)
  ├── Ta'til (Time Off)
  ├── Oylik (Payroll)
  ├── Davomatlar (Attendances)
  └── Baholash (Appraisals)

  📋 LOYIHA VA SAMARADORLIK
  ├── Loyiha (Project)
  ├── Vaqt hisobi (Timesheets)
  ├── Rejalashtirish (Planning)
  ├── Field Service
  └── Helpdesk

  📣 MARKETING
  ├── Email marketing
  ├── SMS marketing
  ├── Ijtimoiy marketing
  └── Tadbirlar (Events)

  🔧 SOZLASH VA QURISH
  ├── Studio (vizual sozlash)
  └── Odoo.sh (bulut platforma)
```

---

## 🏪 Anvar Odoo Bilan Tanishadi

```
  Jasur (IT-chi): "Anvar aka, Odoo ni sinab ko'raylik.
                   Community versiyasini o'rnataman — bepul.
                   
                   Reja:
                   1-hafta: Sotish + CRM modulini yoqamiz
                   2-hafta: Ombor modulini qo'shamiz
                   3-hafta: Buxgalteriya modulini ulaymiz
                   4-hafta: HR va Hisobot modullarini qo'shamiz
                   
                   1 oy ichida to'liq tizim tayyor!"

  Anvar:  "Lekin 5 ta dasturdan ma'lumotlarni ko'chirish 
           kerak-ku?"

  Jasur:  "Ha, import/export funksiyasi bor. 
           Excel/CSV dan ma'lumotlarni oson yuklaymiz.
           Mijozlar, mahsulotlar, ta'minotchilar — 
           hammasini ko'chiramiz."

  Nilufar: "1C dagi buxgalteriya ma'lumotlari-chi?"

  Jasur:   "Buxgalteriya moduli o'zbek soliq tizimiga 
            moslashtirilgan. Ma'lumotlarni import qilamiz 
            va yangi boshlaymiz."

  Anvar:   "Boshladik! 🚀"
```

---

## ✅ Tekshirish Savollari

1. **Odoo Community va Enterprise o'rtasidagi 3 ta asosiy farq?**
2. **Nima uchun kichik biznes uchun Odoo SAP dan yaxshiroq?**
3. **"Ochiq kodli" dastur nima degani?**
4. **Odoo da nechta rasmiy ilova bor?**
5. **Anvar uchun qaysi versiya mos va nima uchun?**

---

## 💡 Asosiy Xulosalar

| Xulosa | Tushuntirish |
|--------|-------------|
| Odoo — eng mashhur ochiq kodli ERP | 12M+ foydalanuvchi, 120+ mamlakat |
| Community — bepul, Enterprise — pullik | Kichik biznes Community dan boshlaydi |
| 82+ rasmiy modul | Sotish, ombor, moliya, HR, veb-sayt... |
| Zamonaviy va oson | Chiroyli UI, tez o'rganiladi |
| Modular yondashuv | Faqat kerakli modullarni o'rnatasiz |

> **Keyingi darsda** Odoo ning har bir modulini **batafsil** ko'rib chiqamiz — real interfeys, real jarayonlar, real hayot.

---

[← Oldingi: ERP Modullari](08-erp-modullari.md) | [Bosh sahifa](/) | [Keyingi: Odoo Modullari →](10-odoo-modullari.md)
