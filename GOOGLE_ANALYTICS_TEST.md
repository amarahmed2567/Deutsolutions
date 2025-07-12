# اختبار Google Analytics

## كيفية اختبار Google Analytics

### 1. تشغيل التطبيق
```bash
npm run dev
```

### 2. فتح Developer Tools
- اضغط F12 أو Ctrl+Shift+I
- اذهب إلى تبويب Console

### 3. اختبار الموافقة على الكوكيز
1. اذهب إلى الموقع
2. ستظهر رسالة الموافقة على الكوكيز
3. اضغط على "موافق" أو "Accept"
4. راقب Console للرسائل التالية:
   - `PrivacyBanner: Enabling Google Analytics...`
   - `PrivacyBanner: Google Analytics enabled successfully`
   - `PrivacyBanner: Test event sent to Google Analytics`

### 4. اختبار مكون AnalyticsTest
- ستجد زر "Test GA" و "Check Consent" في أعلى يمين الصفحة
- اضغط على "Check Consent" لفحص حالة الموافقة
- اضغط على "Test GA" لاختبار إرسال أحداث إلى Google Analytics

### 5. التحقق من Google Analytics
1. اذهب إلى [Google Analytics](https://analytics.google.com/)
2. اختر الموقع الخاص بك
3. اذهب إلى Real-time > Events
4. يجب أن ترى الأحداث التالية:
   - `page_view`
   - `test_event`

### 6. اختبار في Console
```javascript
// اختبار وجود gtag
console.log(window.gtag);

// فحص حالة الموافقة
console.log(localStorage.getItem("cookie_consent"));

// إرسال حدث اختبار
window.gtag('event', 'manual_test', {
  'event_category': 'test',
  'event_label': 'manual_test',
  'value': 1
});
```

## كيفية عمل النظام

### 1. تحميل Google Analytics
- يتم تحميل Google Analytics في `index.html` عند بدء التطبيق
- الإعدادات الافتراضية ترفض جميع أنواع التتبع

### 2. نظام الموافقة
- عند زيارة الموقع لأول مرة، تظهر رسالة الموافقة
- عند الضغط على "موافق"، يتم:
  - حفظ الموافقة في localStorage
  - تفعيل Google Analytics
  - إرسال أحداث التتبع

### 3. الزيارات اللاحقة
- عند زيارة الموقع مرة أخرى، يتم فحص localStorage
- إذا وجدت الموافقة، يتم تفعيل Google Analytics تلقائياً

## استكشاف الأخطاء

### إذا لم تظهر رسائل في Console:
1. تأكد من أن localStorage يحتوي على `cookie_consent: "true"`
2. امسح localStorage وأعد المحاولة:
   ```javascript
   localStorage.removeItem("cookie_consent");
   location.reload();
   ```

### إذا لم تصل الأحداث إلى Google Analytics:
1. تأكد من صحة Measurement ID: `G-NWCNB6N585`
2. تحقق من إعدادات Google Analytics
3. تأكد من عدم وجود مانع إعلانات
4. تحقق من أن Google Analytics script تم تحميله في `index.html`

### إذا ظهرت أخطاء في Console:
- تحقق من رسائل الخطأ
- تأكد من اتصال الإنترنت
- تحقق من إعدادات الأمان في المتصفح

### إذا لم يعمل gtag:
```javascript
// تحقق من وجود gtag
console.log(window.gtag);

// تحقق من وجود dataLayer
console.log(window.dataLayer);

// تحقق من تحميل script
console.log(document.querySelector('script[src*="googletagmanager"]'));
```

## إزالة مكون الاختبار

بعد التأكد من عمل Google Analytics، يمكنك إزالة مكون `AnalyticsTest` من `App.jsx`:

```jsx
// احذف هذا السطر
import AnalyticsTest from "./Components/Utils/AnalyticsTest";

// واحذف هذا السطر
<AnalyticsTest />
```

## ملاحظات مهمة

1. **الامتثال للقوانين**: النظام يضمن الامتثال لـ GDPR ولوائح الخصوصية
2. **الأداء**: Google Analytics يتم تحميله فقط بعد موافقة المستخدم
3. **التتبع**: يتم تتبع الأحداث التالية:
   - `page_view`: عند تحميل الصفحة
   - `test_event`: عند اختبار النظام
   - أحداث مخصصة يمكن إضافتها حسب الحاجة 