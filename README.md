# My Kitchen (ครัวของฉัน) 🥬👩‍🍳

แอปพลิเคชันจัดการสต็อกสินค้าในครัวแบบง่ายๆ สำหรับคุณแม่ ออกแบบมาเพื่อเน้นการใช้งานบนมือถือ (Mobile-First) และซิงก์ข้อมูลกับ Google Sheets โดยอัตโนมัติ

## ✨ ฟีเจอร์หลัก
- **ระบบคลังสินค้า (Inventory):** เช็คของในตู้เย็น ตู้แช่แข็ง และชั้นเก็บของ ได้จากทุกที่
- **แจ้งเตือนวันหมดอายุ (Expiry Alerts):** แจ้งเตือนรายการที่ใกล้หมดอายุในหน้าแรก
- **รายการซื้อของ (Shopping List):** จดรายการสิ่งที่ต้องซื้อ และติ๊กถูกเมื่อซื้อเสร็จแล้ว
- **ซิงก์ข้อมูลอัตโนมัติ (Google Sheets Sync):** ใช้ Google Sheets เป็นฐานข้อมูลหลังบ้าน ทำให้ข้อมูลไม่หายและแก้ไขผ่านตารางได้

## 🛠 เทคโนโลยีที่ใช้
- **Frontend:** HTML5, Tailwind CSS, Vue.js (CDN)
- **Icons:** Lucide Icons
- **Backend:** Google Apps Script (Web App)
- **Database:** Google Sheets

## 🚀 การติดตั้งและตั้งค่า (Setup Guide)

### 1. การตั้งค่า Google Sheets
1. สร้าง Google Sheet ใหม่ และตั้งชื่อแผ่นงาน (Sheet) 2 แผ่นว่า:
   - `Inventory` (ใส่หัวตารางที่ A1: `id, category, name, quantity, expiry`)
   - `Shopping` (ใส่หัวตารางที่ A1: `id, name, note, status`)
2. ไปที่เมนู **Extensions -> Apps Script**
3. คัดลอกโค้ด Apps Script ที่อยู่ในคอมเมนต์ด้านบนสุดของไฟล์ `index.html` ไปวาง
4. กด **Deploy -> New Deployment** เลือกประเภทเป็น **Web App**
5. ตั้งค่า **Who has access** เป็น **Anyone** แล้วคัดลอก **Web App URL** ไว้

### 2. การเชื่อมต่อแอป
1. เปิดไฟล์ `index.html` หรือเปิดผ่าน GitHub Pages
2. กดที่ไอคอน **ฟันเฟือง (Settings)** มุมขวาบน
3. วาง **Web App URL** ที่ได้จากขั้นตอนก่อนหน้าแล้วกดบันทึก

## 📱 วิธีใช้งานบนมือถือให้เหมือนแอป (Add to Home Screen)
- **iPhone (Safari):** กดปุ่มแชร์ (ลูกศรชี้ขึ้น) -> เลือก "Add to Home Screen"
- **Android (Chrome):** กดจุดสามจุดมุมขวาบน -> เลือก "Install app" หรือ "Add to Home screen"

---
สร้างด้วยความใส่ใจ เพื่อให้การจัดการครัวเป็นเรื่องสนุกและง่ายสำหรับทุกคนในครอบครัว ❤️
