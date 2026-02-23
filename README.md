# My Kitchen (ครัวของฉัน) 🥬👩‍🍳

แอปพลิเคชันจัดการสต็อกสินค้าในครัวแบบง่ายๆ สำหรับคุณแม่ ออกแบบมาเพื่อเน้นการใช้งานบนมือถือ (Mobile-First) และซิงก์ข้อมูลกับ Google Sheets โดยอัตโนมัติ

## ✨ ฟีเจอร์หลัก
- **ระบบคลังสินค้า (Inventory):** เช็คของในตู้เย็น ตู้แช่แข็ง และชั้นเก็บ ได้จากทุกที่
- **ระบบซิงก์ 30 วินาที (Batch Sync):** ประมวลผลและส่งข้อมูลแบบเป็นชุดทุก 30 วินาที เพื่อความรวดเร็วและประหยัดแบตเตอรี่
- **การป้อนคำสั่งด้วยเสียง (Thai Voice Support):** เพิ่มสินค้าด้วยการพูด เช่น "ไข่ไก่ 10 ฟอง ในตู้เย็น"
- **แจ้งเตือนวันหมดอายุ (Expiry Alerts):** ตรวจสอบและแจ้งเตือนรายการที่ใกล้หมดอายุโดยอัตโนมัติ
- **ระบบจัดการความขัดแย้ง (Conflict Resolution):** ป้องกันการเขียนทับข้อมูลขณะที่ผู้ใช้กำลังกรอกข้อมูล (Local Priority)
- **รายการซื้อของ (Shopping List):** จดรายการสิ่งที่ต้องซื้อ พร้อมระบบแนะนำสินค้าที่ใกล้หมดจากคลัง

## 🛠 เทคโนโลยีที่ใช้
- **Frontend:** HTML5, CSS3, Vue.js 3 (CDN), Tailwind CSS
- **Icon System:** Custom Inline SVGs (Zero External Library) เพื่อความเสถียรสูงสุด
- **Backend:** Google Apps Script (Web App API)
- **Database:** Google Sheets
- **PWA:** รองรับการติดตั้งลงบนมือถือและใช้งานแบบ Offline ด้วย Service Worker

## 🚀 การติดตั้งและตั้งค่า (Setup Guide)

### 1. การตั้งค่า Google Sheets หลังบ้าน
1. สร้าง Google Sheet ใหม่ และตั้งชื่อแผ่นงาน (Sheet) 2 แผ่น:
   - **Inventory:** หัวตาราง `id, category, name, quantity, unit, status, expiry`
   - **Shopping:** หัวตาราง `id, name, note, status`
2. ไปที่เมนู **Extensions -> Apps Script**
3. คัดลอกโค้ด Apps Script ที่อยู่ในคอมเมนต์ด้านบนสุดของไฟล์ `index.html` ไปวาง
4. กด **Deploy -> New Deployment**
   - **Type:** Web App
   - **Execute as:** Me
   - **Who has access:** Anyone
5. คัดลอก **Web App URL** สำหรับนำไปใส่ในแอป

### 2. การเชื่อมต่อแอป
1. เปิดไฟล์ `index.html` (หรือเข้าผ่าน URL ของคุณ)
2. กดที่ไอคอน **ฟันเฟือง (Settings)** มุมขวาบน
3. วาง **Web App URL** แล้วกดบันทึก
4. แอปจะเริ่มดึงข้อมูล (Initial Sync) และเปิดระบบ Auto-Polling ทุก 30 วินาที

## 📱 วิธีติดตั้งบนมือถือ (PWA)
แอปนี้รองรับ **PWA (Progressive Web App)** ทำให้สามารถติดตั้งได้เหมือนแอปจริง:
- **iOS (Safari):** กดปุ่ม "Share" -> เลือก "Add to Home Screen"
- **Android (Chrome):** กดปุ่มเมนู (3 จุด) -> เลือก "Install App"

## 📄 สัญญาอนุญาต (License)
โครงการนี้เผยแพร่ภายใต้ [MIT License](LICENSE)

---
สร้างด้วยความใส่ใจ เพื่อให้การจัดการครัวเป็นเรื่องสนุกและง่ายสำหรับทุกคนในครอบครัว ❤️
