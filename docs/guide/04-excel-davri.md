# 📊 4-Dars: Excel Davri

> **"Excel — dunyodagi eng ko'p ishlatiladigan 'dasturlash tili'."**

[← Oldingi: Kichik Do'kon](03-kichik-dokon.md) | [Bosh sahifa](/) | [Keyingi: Google Sheets →](05-google-sheets.md)

---

## 📋 Dars Rejasi

Anvar daftardan charchadi. Do'stining yordamida u **Microsoft Excel** ni o'rgana boshladi. Bu darsda biz Excel ning biznes uchun qanday afzalliklari borligini va qachon u ham **yetarli bo'lmay qolishini** ko'ramiz.

---

## 💻 Anvar Excel Bilan Tanishadi

### 2021-yil, yanvar

Anvar kompyuter sotib oldi va Excel ni o'rgana boshladi. Do'sti unga asosiy narsalarni o'rgatdi:

```
📚 ANVAR O'RGANGAN NARSALAR (1 hafta):
├── 1-kun: Katakchaga yozish, formatting
├── 2-kun: Oddiy formulalar (SUM, AVERAGE)
├── 3-kun: Jadval yaratish, filtr
├── 4-kun: Grafik chizish
├── 5-kun: IF formulasi, shartli formatlash
├── 6-kun: O'z shablonlarini yaratish
└── 7-kun: Amaliyot — haqiqiy ma'lumotlarni kiritish
```

---

## 📋 Anvarning Excel Fayllari

### 📊 1-fayl: Kunlik Savdo (`savdo_2021.xlsx`)

```
┌─────┬──────────┬──────────┬─────┬──────────┬──────────┬───────────┐
│  #  │   Sana   │ Mahsulot │ Soni│  Narx    │  Summa   │  To'lov   │
├─────┼──────────┼──────────┼─────┼──────────┼──────────┼───────────┤
│  1  │ 01.01.21 │ Oq non   │  85 │  3,000   │  255,000 │   Naqd    │
│  2  │ 01.01.21 │ Patir    │  35 │  5,000   │  175,000 │   Naqd    │
│  3  │ 01.01.21 │ Somsa    │  50 │  7,000   │  350,000 │   Naqd    │
│  4  │ 02.01.21 │ Oq non   │  90 │  3,000   │  270,000 │   Naqd    │
│  5  │ 02.01.21 │ Patir    │  40 │  5,000   │  200,000 │   Naqd    │
│ ... │   ...    │   ...    │ ... │   ...    │   ...    │   ...     │
│ 780 │ 31.12.21 │ Somsa    │  60 │  7,000   │  420,000 │   Karta   │
├─────┼──────────┼──────────┼─────┼──────────┼──────────┼───────────┤
│     │          │          │     │  JAMI:   │48,360,000│           │
└─────┴──────────┴──────────┴─────┴──────────┴──────────┴───────────┘

  Formula: =D2*E2  → Summani avtomatik hisoblaydi!
  Formula: =SUM(F2:F781) → Jami summani bir soniyada beradi!
```

### 📊 2-fayl: Xarajatlar (`xarajatlar_2021.xlsx`)

```
┌─────┬──────────┬────────────────┬──────────┬────────────┐
│  #  │   Sana   │   Xarajat turi │  Summa   │ Kategoriya │
├─────┼──────────┼────────────────┼──────────┼────────────┤
│  1  │ 01.01.21 │ Un (50kg)      │  400,000 │ Xom ashyo  │
│  2  │ 01.01.21 │ Yog'           │   75,000 │ Xom ashyo  │
│  3  │ 01.01.21 │ Yordamchi oylik│   50,000 │ Mehnat     │
│  4  │ 05.01.21 │ Gaz to'lovi    │  200,000 │ Kommunal   │
│  5  │ 10.01.21 │ Ijara          │3,000,000 │ Ijara      │
│ ... │   ...    │   ...          │   ...    │   ...      │
└─────┴──────────┴────────────────┴──────────┴────────────┘
```

### 📊 3-fayl: Qarzlar (`qarzlar_2021.xlsx`)

```
┌─────┬───────────────┬──────────┬──────────┬──────────┬──────────┐
│  #  │   Mijoz       │ Qarz sana│  Summa   │ To'langan│ Qoldiq   │
├─────┼───────────────┼──────────┼──────────┼──────────┼──────────┤
│  1  │ Rest. "Milliy"│ 01.01.21 │  760,000 │  760,000 │     0  ✅│
│  2  │ Karim aka     │ 15.01.21 │   50,000 │   30,000 │ 20,000 ⚠️│
│  3  │ 12-maktab     │ 01.02.21 │  600,000 │  600,000 │     0  ✅│
│  4  │ To'ra aka     │ 20.02.21 │   35,000 │        0 │ 35,000 🔴│
└─────┴───────────────┴──────────┴──────────┴──────────┴──────────┘

  Formula: =D2-E2 → Qoldiqni avtomatik hisoblaydi
  Shartli formatlash: Qoldiq > 0 bo'lsa qizil rangda ko'rsatadi 🔴
```

---

## ✅ Excel ning Afzalliklari

Daftarga nisbatan Excel **inqilob** edi:

### 1. Avtomatik hisoblash
```
Daftar: 780 ta yozuvni qo'lda qo'shish → 3 soat
Excel:  =SUM(F2:F781) → 0.1 soniya ⚡
```

### 2. Qidirish
```
Daftar: "Karim akaning qarzini toping" → 30 daqiqa varaqlab
Excel:  Ctrl+F → "Karim" → 1 soniya ⚡
```

### 3. Filtr va Saralash
```
"Faqat somsa sotuvi" → Filtr → Mahsulot = "Somsa" → Tayyor!
"Eng ko'p sotilgan kun" → Saralash → Yuqoridan pastga → Tayyor!
```

### 4. Grafik va Vizualizatsiya

```
📊 OYLIK SAVDO GRAFIGI (Excel da)

   Mln
   50 ┤                                    ╭─
   45 ┤                              ╭─────╯
   40 ┤                        ╭─────╯
   35 ┤                  ╭─────╯
   30 ┤            ╭─────╯
   25 ┤      ╭─────╯
   22 ┤──────╯
      └──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──
        Yan Fev Mar Apr May Iyn Iyl Avg Sen Okt Noy Dek
```

### 5. Shartli formatlash
```
✅ Yashil — to'lov qilingan
⚠️ Sariq — muddati yaqin
🔴 Qizil — muddati o'tgan
```

### 6. Formulalar bilan murakkab hisob-kitob
```
=IF(F2>1000000, "KATTA BUYURTMA", "Oddiy")
=SUMIF(D:D, "Xom ashyo", E:E)     → Faqat xom ashyo xarajatlari
=VLOOKUP("Patir", A:F, 5, FALSE)  → Patir narxini topish
=SUMPRODUCT((B2:B100="Somsa")*(C2:C100))  → Jami somsa soni
```

---

## 📈 Excel Bilan Anvarning Yangi Imkoniyatlari

### Oylik hisobot — endi 15 daqiqa!

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📊 OYLIK HISOBOT — 2021 YANVAR
  (Avtomatik formulalar bilan)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  DAROMAD:
  ├── Oq non:   =SUMIF(...)  →  8,370,000
  ├── Patir:    =SUMIF(...)  →  5,250,000
  ├── Somsa:    =SUMIF(...)  → 10,920,000
  └── JAMI:     =SUM(...)    → 24,540,000
  
  XARAJAT:
  ├── Xom ashyo: =SUMIF(...) → 12,000,000
  ├── Mehnat:    =SUMIF(...) →  3,500,000
  ├── Ijara:                 →  3,000,000
  ├── Kommunal:  =SUMIF(...) →    800,000
  └── JAMI:      =SUM(...)   → 19,300,000
  
  ─────────────────────────────────────────
  FOYDA:  =Daromad-Xarajat   →  5,240,000
  MARGIN: =Foyda/Daromad      →     21.4%
  ─────────────────────────────────────────
  
  ⏱️ Vaqt: 15 daqiqa (daftarda 9 soat edi!)
  📊 Aniqlik: 99.9% (daftarda 85% edi!)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🚀 Biznes O'sdi — 2021-yil Natijalari

Excel tufayli Anvar biznesini yaxshiroq boshqara boshladi:

```
📈 2021-YIL O'SISH KO'RSATKICHLARI

  Ko'rsatkich          2020          2021        O'sish
  ──────────────────────────────────────────────────────
  Oylik daromad       25M so'm      40M so'm     +60%
  Xodimlar soni       2 kishi       5 kishi      +150%
  Mahsulot turlari    3 ta          8 ta         +167%
  Doimiy mijozlar     15 ta         45 ta        +200%
  Filiallar           1 ta          1 ta          0%
  ──────────────────────────────────────────────────────
```

Anvar endi:
- 👨‍🍳 3 ta novvoy yolladi
- 🚚 1 ta haydovchi — yetkazib berish uchun
- 📱 Telegram orqali buyurtma qabul qila boshladi
- 🏪 Mahsulot turlarini ko'paytirdi (tort, pirojniy, pechene)

**Lekin... biznes o'sishi bilan yangi muammolar ham paydo bo'ldi.**

---

## 🚨 Excel ning Cheklovlari

### 🔴 Muammo #1: Collaboration (Hamkorlik) Yo'q

```
  Vaziyat:
  Anvar va uning yangi buxgalteri Nilufar ikkalasi bir vaqtda
  ishlashi kerak. Lekin Excel fayl faqat 1 kishi ochishi mumkin!

  ┌──────────┐     ┌──────────┐
  │  ANVAR   │     │ NILUFAR  │
  │  Savdo   │     │ Xarajat  │
  │  yozmoqchi│     │ yozmoqchi│
  └────┬─────┘     └────┬─────┘
       │                │
       ▼                ▼
  ┌──────────────────────────┐
  │   savdo_2021.xlsx        │
  │   🔒 QULFLANGAN!        │
  │   "Fayl boshqa foydalanu-│
  │   vchi tomonidan ochilgan"│
  └──────────────────────────┘
  
  Natija: Nilufar kutishi kerak yoki alohida fayl ochadi.
  Keyin ikki faylni birlashtirish kerak — xatoliklar!
```

### 🔴 Muammo #2: Versiya Nizolari

```
  Holat:
  
  Anvar: savdo_2021_yanvar.xlsx
  Nilufar: savdo_2021_yanvar_v2.xlsx
  Yordamchi: savdo_2021_yanvar_oxirgi.xlsx
  Anvar: savdo_2021_yanvar_OXIRGI_FINAL.xlsx
  Nilufar: savdo_2021_yanvar_OXIRGI_FINAL_v2.xlsx
  
  ❓ Qaysi biri to'g'ri? Hech kim bilmaydi!
  
  📁 Kompyuterdagi fayl ro'yxati:
  ├── savdo_yanvar.xlsx
  ├── savdo_yanvar_copy.xlsx
  ├── savdo_yanvar_v2.xlsx
  ├── savdo_yanvar_FINAL.xlsx
  ├── savdo_yanvar_FINAL_v2.xlsx
  ├── savdo_yanvar_FINAL_FINAL.xlsx  ← 😱
  └── savdo_yanvar_eski_o'chirma.xlsx
```

### 🔴 Muammo #3: Ma'lumotlar Bir-Biriga Bog'lanmagan

```
  Muammo:
  Savdo, Xarajat va Qarz — 3 ta ALOHIDA fayl.
  Ular bir-birini "bilmaydi".
  
  Masalan:
  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
  │ savdo.xlsx   │   │ xarajat.xlsx │   │ qarz.xlsx    │
  │              │   │              │   │              │
  │ Rest."Milliy"│   │ Un xaridi    │   │ Rest."Milliy"│
  │ 760,000 sotdi│   │ 400,000      │   │ 360,000 qarz │
  └──────────────┘   └──────────────┘   └──────────────┘
        ↕                  ↕                  ↕
     BOG'LANISH YO'Q! ─── BOG'LANISH YO'Q! ──┘
  
  Savol: "Restoran Milliy" jami qancha pul to'ladi?
  Javob: 3 ta faylni ochib, qo'lda tekshirish kerak!
```

### 🔴 Muammo #4: Xavfsizlik Yo'q

```
  Vaziyat:
  Yordamchi bola noto'g'ri formulani o'zgartirdi.
  Butun oylik hisobot noto'g'ri chiqdi.
  Anvar buni 2 haftadan keyin payqadi.
  
  Excel da:
  ❌ "Kim o'zgartirdi?" — noma'lum
  ❌ "Qachon o'zgartirdi?" — noma'lum
  ❌ "Nima o'zgartirildi?" — noma'lum
  ❌ "Oldingi versiyaga qaytish" — imkonsiz
```

### 🔴 Muammo #5: Masshtablanmaydigan (Not Scalable)

```
  2020: 1 fayl, 780 qator — tez ishlaydi ✅
  2021: 3 fayl, 5,000+ qator — sekinlashdi ⚠️
  2022: 8 fayl, 20,000+ qator — juda sekin! 🔴
  
  Excel limiti: ~1,048,576 qator
  Lekin amalda 10,000+ qatorda sekinlasha boshlaydi
  Murakkab formulalar — faylni ochish 2-3 daqiqa
```

---

## 📊 Daftar vs Excel — Solishtirma

| Mezon | 📓 Daftar | 📊 Excel |
|-------|-----------|----------|
| Narx | 10,000 so'm | 500,000+ so'm (kompyuter + litsenziya) |
| Hisoblash tezligi | Qo'lda, sekin | Avtomatik, tez |
| Xatolik ehtimoli | Yuqori | Past |
| Qidirish | 30 daqiqa | 1 soniya |
| Grafik/Hisobot | Mumkin emas | Oson |
| Collaboration | Yo'q | Yo'q ❌ |
| Versiya boshqaruvi | Yo'q | Yo'q ❌ |
| Ma'lumot integratsiyasi | Yo'q | Yo'q ❌ |
| Xavfsizlik | Past | Past ❌ |
| Masshtablanish | Juda past | O'rtacha |

---

## 💡 Anvarning Ikkinchi "Aha!" Momenti

```
  Nilufar: "Anvar aka, men ham bir vaqtda ishlashim kerak.
            Do'stim aytdi — Google Sheets degan narsa bor.
            Internetda ishlaydi. Ikkalamiz BIR VAQTDA 
            bir faylda ishlashimiz mumkin ekan!"
  
  Anvar:   "Internet kerakmi? Bizda Wi-Fi bor-ku."
  
  Nilufar: "Ha! Va eng muhimi — fayl hech qachon yo'qolmaydi.
            Google serverlarida saqlanadi. Telefonda ham
            ko'rish mumkin!"
  
  Anvar:   "Telefonda ham?! 😮 Ko'rsating!"
```

---

## 📈 Excel Qachon Yetarli?

Excel **hali ham** ajoyib vosita, agar:

| Shart | Excel yetarlimi? |
|-------|-------------------|
| 1-2 kishi ishlaydi | ✅ Ha |
| Kuniga 50 dan kam tranzaksiya | ✅ Ha |
| Oddiy hisob-kitob | ✅ Ha |
| Bir martalik tahlillar | ✅ Ha |
| Shaxsiy moliya boshqaruvi | ✅ Ha |

Excel **yetarli emas**, agar:

| Shart | Excel yetarlimi? |
|-------|-------------------|
| 3+ kishi bir vaqtda ishlaydi | ❌ Yo'q |
| Real-time ma'lumot kerak | ❌ Yo'q |
| Murakkab biznes jarayonlari | ❌ Yo'q |
| Audit trail (kim nima qildi) kerak | ❌ Yo'q |
| Mobil qurilmadan kirish kerak | ❌ Yo'q |

---

## ✅ Tekshirish Savollari

1. **Excel daftarga nisbatan qanday afzalliklarga ega?**
2. **"Collaboration" muammosi nima va nima uchun muhim?**
3. **Versiya nizolari (version conflicts) qanday paydo bo'ladi?**
4. **Nima uchun Excel dagi 3 ta alohida fayl muammo?**
5. **Sizning biznesingiz uchun Excel yetarlimi? Nima uchun?**

---

## 💡 Asosiy Xulosalar

| Xulosa | Tushuntirish |
|--------|-------------|
| Excel — daftardan katta qadam | Formulalar, grafiklar, filtrlar — inqilob |
| Lekin Excel — yakka o'yinchi uchun | 1 kishi ishlasa — ajoyib. 3+ kishi — muammo |
| Versiya nizolari — eng katta muammo | Qaysi fayl to'g'ri? Hech kim bilmaydi |
| Ma'lumotlar tarqoq qoladi | Alohida fayllar bir-birini bilmaydi |
| Keyingi qadam — bulutli yechim | Google Sheets bu muammolarni hal qiladi |

> **Keyingi darsda** Anvar va Nilufar Google Sheets ga o'tishadi. Bir vaqtda ishlash, telefonda kirish, avtomatik saqlash — yangi imkoniyatlar. Lekin... biznes yanada o'sadi va Google Sheets ham yetmay qoladi.

---

[← Oldingi: Kichik Do'kon](03-kichik-dokon.md) | [Bosh sahifa](/) | [Keyingi: Google Sheets →](05-google-sheets.md)
