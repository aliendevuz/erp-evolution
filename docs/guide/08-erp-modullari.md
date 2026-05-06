# 🧩 8-Dars: ERP Modullari

> **"ERP — bu lego konstruktori. Kerakli modullarni yig'ib, o'z tizimingizni qurasiz."**

[← Oldingi: ERP Nima?](07-erp-nima.md) | [Bosh sahifa](/) | [Keyingi: Odoo Platformasi →](09-odoo-platformasi.md)

---

## 📋 Dars Rejasi

ERP tizimi **modullardan** tashkil topgan. Har bir modul biznesning ma'lum bir sohasini boshqaradi. Bu darsda biz barcha asosiy modullarni Anvar misolida ko'rib chiqamiz.

---

## 🧩 ERP Modullari — Umumiy Ko'rinish

```
┌────────────────────────────────────────────────────────┐
│                    🏗️ ERP TIZIMI                       │
│                                                        │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│  │ 🛒      │ │ 📦      │ │ 🏭      │ │ 🛍️      │     │
│  │ Sotish  │ │  Xarid  │ │ Ishlab  │ │  Ombor  │     │
│  │ (Sales) │ │(Purchase│ │chiqarish│ │(Invent.)│     │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│  │ 💰      │ │ 👥      │ │ 👤      │ │ 📊      │     │
│  │ Moliya  │ │   HR    │ │  CRM   │ │ Hisobot │     │
│  │(Account)│ │(Kadrlar)│ │(Mijoz) │ │(Report) │     │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘     │
│                                                        │
│              ┌─────────────────────┐                   │
│              │  📦 YAGONA BAZASI   │                   │
│              └─────────────────────┘                   │
└────────────────────────────────────────────────────────┘
```

---

## 🛒 1. Sotish Moduli (Sales)

### Bu modul nima qiladi?
Mijozlarga mahsulot va xizmat **sotish jarayonini** boshqaradi.

### Asosiy funksiyalari:

| Funksiya | Tavsifi |
|----------|---------|
| **Kotirovka (Quotation)** | Mijozga narx taklifi yuborish |
| **Sotish buyurtmasi (Sales Order)** | Tasdiqlangan buyurtma |
| **Hisob-faktura (Invoice)** | To'lov uchun hujjat |
| **Narx ro'yxati (Pricelist)** | Turli mijozlar uchun turli narxlar |
| **Chegirma boshqaruvi** | Aksiya va chegirmalar |

### 🏪 Anvar misolida:

```
  Restoran "Milliy" buyurtma berdi:

  ┌─────────────────────────────────────────────┐
  │  📋 SOTISH BUYURTMASI: SO-2023-0547        │
  │                                             │
  │  Mijoz: Restoran "Milliy" (VIP)             │
  │  Sana: 2023-05-06                           │
  │  Yetkazish: 2023-05-07, 06:00               │
  │                                             │
  │  # Mahsulot     Soni  Narx      Summa       │
  │  1 Oq non       100   2,700*    270,000     │
  │  2 Patir         50   4,500*    225,000     │
  │  3 Somsa         30   7,000     210,000     │
  │  ───────────────────────────────────────    │
  │  Jami:                          705,000     │
  │  QQS (12%):                      84,600     │
  │  UMUMIY:                        789,600     │
  │                                             │
  │  * VIP chegirma: 10%                        │
  │  📝 To'lov: 15 kunlik kredit                │
  │                                             │
  │  Status: ✅ Tasdiqlandi                      │
  └─────────────────────────────────────────────┘
  
  → Avtomatik: Ombor moduliga → "100 non, 50 patir tayyorlang"
  → Avtomatik: Moliya moduliga → "789,600 debitor qarz"
```

---

## 📦 2. Xarid Moduli (Purchase)

### Bu modul nima qiladi?
Ta'minotchilardan xom ashyo va tovar **xarid qilish jarayonini** boshqaradi.

### Asosiy funksiyalari:

| Funksiya | Tavsifi |
|----------|---------|
| **Xarid so'rovi (RFQ)** | Ta'minotchidan narx so'rash |
| **Xarid buyurtmasi (PO)** | Tasdiqlangan xarid |
| **Ta'minotchi baholash** | Narx, sifat, tezlik bo'yicha |
| **Avtomatik xarid** | Zaxira kamayganda avtomatik buyurtma |

### 🏪 Anvar misolida:

```
  ERP tizimi avtomatik aniqladi:
  ⚠️ "Un qoldig'i 120 kg — minimum 100 kg ga yaqin!"

  ┌─────────────────────────────────────────────┐
  │  📋 XARID BUYURTMASI: PO-2023-0312         │
  │                                             │
  │  Ta'minotchi: "Oltin Bug'doy" tegirmoni     │
  │  Sana: 2023-05-06                           │
  │  Yetkazish: 2023-05-07                      │
  │                                             │
  │  # Mahsulot         Soni   Narx     Summa   │
  │  1 Un (1-navli)     500kg  8,000  4,000,000 │
  │  2 Xamirturush       10kg  25,000   250,000  │
  │  ───────────────────────────────────────    │
  │  Jami:                            4,250,000  │
  │                                             │
  │  To'lov: 15 kunlik kredit                   │
  │  Status: 📨 Ta'minotchiga yuborildi          │
  └─────────────────────────────────────────────┘
  
  → Avtomatik: Moliya moduliga → "4,250,000 kreditor qarz"
  → Avtomatik: Omborga → "500 kg un kutilmoqda"
```

---

## 🏭 3. Ishlab Chiqarish Moduli (Manufacturing)

### Bu modul nima qiladi?
Xom ashyodan tayyor mahsulot **ishlab chiqarish jarayonini** boshqaradi.

### Asosiy funksiyalari:

| Funksiya | Tavsifi |
|----------|---------|
| **BOM (Bill of Materials)** | Mahsulot retsepti |
| **Ishlab chiqarish buyrug'i** | Nima, qancha ishlab chiqarish |
| **Ish markazlari** | Tandir, xamir qorish joyi |
| **Sifat nazorati** | Tayyor mahsulot tekshiruvi |

### 🏪 Anvar misolida:

```
  Sotish moduli: "100 ta oq non kerak!"
       ↓ avtomatik
  Ishlab chiqarish moduli:

  ┌─────────────────────────────────────────────┐
  │  🏭 ISHLAB CHIQARISH BUYRUG'I: MO-2023-089 │
  │                                             │
  │  Mahsulot: Oq non                           │
  │  Miqdor: 100 dona                           │
  │                                             │
  │  📋 BOM (Retsept):                          │
  │  ┌───────────────┬────────┬────────────┐    │
  │  │ Ingredientlar │ 1 dona │ 100 dona   │    │
  │  ├───────────────┼────────┼────────────┤    │
  │  │ Un            │ 200 g  │ 20 kg      │    │
  │  │ Suv           │ 120 ml │ 12 litr    │    │
  │  │ Xamirturush    │ 3 g    │ 300 g      │    │
  │  │ Tuz           │ 4 g    │ 400 g      │    │
  │  └───────────────┴────────┴────────────┘    │
  │                                             │
  │  📦 Ombor tekshiruvi:                       │
  │  ├── Un: 350 kg (kerak 20 kg) ✅             │
  │  ├── Xamirturush: 8 kg (kerak 0.3 kg) ✅     │
  │  └── Tuz: 5 kg (kerak 0.4 kg) ✅             │
  │                                             │
  │  ⏱️ Vaqt: 2 soat (xamir + pishirish)         │
  │  Status: 🔄 Jarayonda                        │
  └─────────────────────────────────────────────┘
  
  → Ombor: xom ashyo chiqim qilindi (20 kg un, ...)
  → Ombor: 100 ta oq non kirim qilindi
```

---

## 🛍️ 4. Ombor Moduli (Inventory / Warehouse)

### Bu modul nima qiladi?
Barcha tovarlar va xom ashyolarning **kirim-chiqimini, qoldiqlarini** nazorat qiladi.

### Asosiy funksiyalari:

| Funksiya | Tavsifi |
|----------|---------|
| **Qoldiq nazorati** | Hozir omborda nima bor? |
| **Kirim/Chiqim** | Tovar keldi/ketdi |
| **Joylashuv** | Qaysi javonda, qaysi filialda? |
| **Inventarizatsiya** | Haqiqiy qoldiqni tekshirish |
| **Avtomatik buyurtma** | Minimum zaxiraga yetganda ogohlantirish |

### 🏪 Anvar misolida:

```
  ┌─────────────────────────────────────────────────────┐
  │  🛍️ OMBOR HOLATI — Real-time                        │
  │  📅 2023-05-06, 14:30                                │
  │                                                     │
  │  📍 1-FILIAL (Registon):                             │
  │  ┌──────────────┬────────┬────────┬────────┐        │
  │  │ Mahsulot     │ Qoldiq │ Min.   │ Status │        │
  │  ├──────────────┼────────┼────────┼────────┤        │
  │  │ Un (1-navli) │ 330 kg │ 100 kg │ ✅      │        │
  │  │ Xamirturush   │ 7.7 kg │ 2 kg   │ ✅      │        │
  │  │ Tuz          │ 4.6 kg │ 3 kg   │ ⚠️      │        │
  │  │ Yog'         │ 12 lt  │ 5 lt   │ ✅      │        │
  │  │ Tuxum        │ 15 dona│ 30 dona│ 🔴      │        │
  │  └──────────────┴────────┴────────┴────────┘        │
  │                                                     │
  │  📍 2-FILIAL (Markaz):                               │
  │  ┌──────────────┬────────┬────────┬────────┐        │
  │  │ Un (1-navli) │ 200 kg │ 100 kg │ ✅      │        │
  │  │ Xamirturush   │ 3 kg   │ 2 kg   │ ⚠️      │        │
  │  │ ...          │ ...    │ ...    │ ...    │        │
  │  └──────────────┴────────┴────────┴────────┘        │
  │                                                     │
  │  🔔 Ogohlantirishlar:                                │
  │  ├── 🔴 Tuxum — BUYURTMA KERAK! (1-filial)          │
  │  └── ⚠️ Tuz va Xamirturush — tez orada kerak bo'ladi │
  └─────────────────────────────────────────────────────┘
```

---

## 💰 5. Moliya/Buxgalteriya Moduli (Accounting)

### Bu modul nima qiladi?
Kompaniyaning barcha **moliyaviy operatsiyalarini** boshqaradi.

### Asosiy funksiyalari:

| Funksiya | Tavsifi |
|----------|---------|
| **Bosh jurnal** | Barcha moliyaviy yozuvlar |
| **Debitor qarzlar** | Bizga kim qarzdar? |
| **Kreditor qarzlar** | Biz kimga qarzdormiz? |
| **Bank integratsiyasi** | Bank hisobi bilan sinxronlash |
| **Soliq hisoboti** | Avtomatik soliq hisoblash |
| **Moliyaviy hisobotlar** | Balans, foyda/zarar, pul oqimi |

### 🏪 Anvar misolida — Avtomatik moliya:

```
  Buyurtma #SO-2023-0547 tasdiqlanganda:

  📝 BUXGALTERIYA YOZUVLARI (avtomatik):
  ┌──────────┬─────────────────┬──────────┬──────────┐
  │   Sana   │     Tavsif      │  Debet   │  Kredit  │
  ├──────────┼─────────────────┼──────────┼──────────┤
  │ 06.05.23 │ Debitor qarz    │ 789,600  │          │
  │          │ Sotish daromadi  │          │ 705,000  │
  │          │ QQS majburiyati  │          │  84,600  │
  └──────────┴─────────────────┴──────────┴──────────┘

  Mijoz to'lov qilganda (15 kundan keyin):
  ┌──────────┬─────────────────┬──────────┬──────────┐
  │ 21.05.23 │ Bank hisob      │ 789,600  │          │
  │          │ Debitor qarz    │          │ 789,600  │
  └──────────┴─────────────────┴──────────┴──────────┘
  
  ✅ Hamma narsa AVTOMATIK — Nilufar faqat tekshiradi
```

---

## 👥 6. HR Moduli (Inson Resurslari)

### Bu modul nima qiladi?
**Xodimlarni** boshqarish — ishga olishdan oylik hisoblashgacha.

### Asosiy funksiyalari:

| Funksiya | Tavsifi |
|----------|---------|
| **Xodim ma'lumotlari** | Shaxsiy kartochka |
| **Ish grafigi** | Smenalar, dam olish kunlari |
| **Oylik hisoblash** | Ish haqi + soliqlar |
| **Ta'til boshqaruvi** | Mehnat ta'tili, kasallik |
| **Ish samaradorligi** | KPI, baholash |

### 🏪 Anvar misolida:

```
  ┌──────────────────────────────────────────────┐
  │  👤 XODIM KARTOCHKASI                        │
  │                                              │
  │  Ismi: Sardor Karimov                        │
  │  Lavozim: Bosh novvoy                        │
  │  Filial: 1-filial (Registon)                 │
  │  Ishga kirgan: 2021-03-15                    │
  │  Tajriba: 2 yil 2 oy                        │
  │                                              │
  │  💰 OYLIK HISOB:                              │
  │  ├── Asosiy oylik:     3,500,000 so'm        │
  │  ├── Bonus (may):        350,000 so'm        │
  │  ├── Ovqat kompensatsiya: 300,000 so'm       │
  │  ├── JAMI:             4,150,000 so'm        │
  │  │                                           │
  │  ├── JSHSHS (12%):       498,000 so'm        │
  │  └── QOLGA:            3,652,000 so'm        │
  │                                              │
  │  📅 Ta'til: 5 kun qoldi (24 dan 19 ishlatgan)│
  └──────────────────────────────────────────────┘
```

---

## 👤 7. CRM Moduli (Mijozlar Bilan Munosabat)

### Bu modul nima qiladi?
Mijozlarni topish, saqlab qolish va **munosabatlarni boshqarish**.

### ERP ichidagi CRM ning farqi:

```
  ALOHIDA CRM (Bitrix24):        ERP ICHIDAGI CRM:
  
  Faqat mijoz ma'lumotlari        Mijoz ma'lumotlari
  Faqat savdo pipeline            + Xarid tarixi (Sotish modulidan)
  Faqat kontaktlar                + Qarz holati (Moliya modulidan)
  ❌ Buxgalteriya bilmaydi        + Yetkazish tarixi (Ombor)
  ❌ Ombor bilmaydi               + Shikoyatlar tarixi
                                  ✅ HAMMA NARSA BOG'LIQ!
```

---

## 📊 8. Hisobot Moduli (Reporting & Analytics)

### Bu modul nima qiladi?
Barcha modullardan ma'lumot yig'ib, **vizual hisobotlar** tayyorlaydi.

### 🏪 Anvar endi bir tugmada ko'radi:

```
  ┌─────────────────────────────────────────────────┐
  │  📊 DASHBOARD — 2023-yil MAY                    │
  │                                                 │
  │  💰 DAROMAD        💸 XARAJAT       📊 FOYDA     │
  │  ┌───────────┐    ┌───────────┐   ┌──────────┐ │
  │  │ 78.5M     │    │ 52.3M     │   │ 26.2M    │ │
  │  │ ▲ +12%    │    │ ▲ +5%     │   │ ▲ +28%   │ │
  │  └───────────┘    └───────────┘   └──────────┘ │
  │                                                 │
  │  🏆 TOP MIJOZLAR:        📦 TOP MAHSULOTLAR:    │
  │  1. Rest."Milliy" 19.7M  1. Somsa      28.3M   │
  │  2. 12-maktab     15.6M  2. Oq non     22.1M   │
  │  3. "Olmos" kafe   8.2M  3. Patir      15.8M   │
  │                                                 │
  │  📦 OMBOR HOLATI:         👥 XODIMLAR:          │
  │  ✅ Yetarli: 8 pozitsiya   Jami: 12 kishi      │
  │  ⚠️ Kam: 2 pozitsiya       Yangi: 1 kishi      │
  │  🔴 Tugagan: 1 pozitsiya   Ta'tilda: 0 kishi   │
  │                                                 │
  │  🏪 FILIALLAR:                                   │
  │  1-filial: 45.2M (58%)                          │
  │  2-filial: 33.3M (42%)                          │
  └─────────────────────────────────────────────────┘
  
  ⏱️ Bu hisobot oldin: 9+ soat qo'lda
  ⏱️ ERP bilan: REAL-TIME, har soniyada yangilanadi
```

---

## 🔗 Modullar Qanday Bir-Biriga Bog'langan?

```
  Buyurtma keldi (SOTISH)
       │
       ├──→ Ombor tekshirish (OMBOR)
       │         │
       │         ├──→ Yetarli → Yetkazishga tayyor
       │         │
       │         └──→ Yetarli emas → Ishlab chiqarish (ISHLAB CHIQARISH)
       │                                    │
       │                                    └──→ Xom ashyo tekshirish (OMBOR)
       │                                              │
       │                                              └──→ Kam → Xarid (XARID)
       │
       ├──→ Hisob-faktura (MOLIYA)
       │
       ├──→ Mijoz tarixi yangilash (CRM)
       │
       └──→ Hisobot yangilash (HISOBOT)
  
  ✅ BITTA BUYURTMA → 6 TA MODUL AVTOMATIK ISHLADI!
```

---

## ✅ Tekshirish Savollari

1. **Sotish moduli va Xarid moduli o'rtasidagi farq nima?**
2. **BOM nima va qaysi modulda ishlatiladi?**
3. **Nima uchun ERP ichidagi CRM alohida CRM dan yaxshiroq?**
4. **Moliya moduli qanday avtomatlashtirishlar qiladi?**
5. **Bitta buyurtma nechta modulni harakatga keltiradi?**

---

## 💡 Asosiy Xulosalar

| Modul | Bir gapda |
|-------|-----------|
| Sotish | Mijozga sotish va hisob-faktura |
| Xarid | Ta'minotchidan xom ashyo olish |
| Ishlab chiqarish | Xom ashyodan tayyor mahsulot |
| Ombor | Barcha tovarlar nazorati |
| Moliya | Pul kirim-chiqimi va soliqlar |
| HR | Xodimlar va oylik |
| CRM | Mijoz munosabatlari |
| Hisobot | Bir tugmada tahlil |

> **Keyingi darsda** biz **Odoo** platformasini o'rganamiz — dunyo bo'ylab 12+ million foydalanuvchiga ega bo'lgan eng mashhur ochiq kodli ERP tizimi.

---

[← Oldingi: ERP Nima?](07-erp-nima.md) | [Bosh sahifa](/) | [Keyingi: Odoo Platformasi →](09-odoo-platformasi.md)
