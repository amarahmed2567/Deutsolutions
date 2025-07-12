# استكشاف أخطاء Google Analytics

## المشكلة: Google Analytics يظهر 0 viewers

### 1. تحقق من Google Analytics ID

أولاً، تأكد من أن الـ Measurement ID صحيح:

```javascript
// في index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NWCNB6N585"></script>
```

**تحقق من:**
1. اذهب إلى [Google Analytics](https://analytics.google.com/)
2. اختر موقعك
3. اذهب إلى Admin > Data Streams
4. انقر على موقعك
5. انسخ الـ Measurement ID

### 2. تحقق من إعدادات Google Analytics

#### أ. تحقق من Real-time Reports
1. اذهب إلى Google Analytics
2. اذهب إلى Reports > Real-time > Overview
3. يجب أن ترى الزيارات في الوقت الفعلي

#### ب. تحقق من Events
1. اذهب إلى Reports > Real-time > Events
2. يجب أن ترى الأحداث المرسلة

### 3. اختبار في المتصفح

#### أ. فتح Developer Tools
1. اضغط F12
2. اذهب إلى تبويب Console
3. اكتب الأوامر التالية:

```javascript
// تحقق من وجود gtag
console.log(window.gtag);

// تحقق من dataLayer
console.log(window.dataLayer);

// تحقق من الموافقة
console.log(localStorage.getItem("cookie_consent"));

// إرسال حدث اختبار
window.gtag('event', 'test_event', {
  'event_category': 'test',
  'event_label': 'manual_test',
  'value': 1
});
```

#### ب. تحقق من Network Tab
1. اذهب إلى تبويب Network
2. ابحث عن طلبات إلى `google-analytics.com`
3. تأكد من أن الطلبات تُرسل بنجاح

### 4. حلول محتملة

#### أ. تحديث Measurement ID
إذا كان الـ ID خاطئ، قم بتحديثه في `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_CORRECT_ID"></script>
```

#### ب. إضافة Debug Mode
أضف `debug_mode: true` في إعدادات Google Analytics:

```javascript
gtag('config', 'G-NWCNB6N585', {
  'debug_mode': true
});
```

#### ج. تحقق من مانع الإعلانات
1. تعطيل مانع الإعلانات مؤقتاً
2. تحقق من إعدادات الخصوصية في المتصفح

#### د. اختبار في متصفح مختلف
جرب في متصفح آخر أو وضع التصفح الخاص

### 5. اختبار شامل

#### أ. مسح localStorage وإعادة المحاولة
```javascript
localStorage.removeItem("cookie_consent");
location.reload();
```

#### ب. إرسال أحداث متعددة
```javascript
// إرسال page_view
gtag('event', 'page_view', {
  'page_title': document.title,
  'page_location': window.location.href
});

// إرسال حدث مخصص
gtag('event', 'custom_event', {
  'event_category': 'engagement',
  'event_label': 'test',
  'value': 1
});
```

### 6. تحقق من إعدادات Google Analytics

#### أ. تحقق من Data Streams
1. اذهب إلى Admin > Data Streams
2. تأكد من أن الـ stream مفعل
3. تحقق من الـ Measurement ID

#### ب. تحقق من Real-time Settings
1. اذهب إلى Admin > Property Settings
2. تأكد من أن Real-time Reports مفعلة

#### ج. تحقق من Filters
1. اذهب إلى Admin > Data Filters
2. تأكد من عدم وجود filters تمنع البيانات

### 7. إذا لم يعمل أي شيء

#### أ. إنشاء Google Analytics جديد
1. اذهب إلى [Google Analytics](https://analytics.google.com/)
2. أنشئ property جديد
3. احصل على Measurement ID جديد
4. استبدل الـ ID في الكود

#### ب. استخدام Google Tag Manager
بدلاً من Google Analytics مباشرة، استخدم Google Tag Manager:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

### 8. نصائح إضافية

1. **انتظر 24-48 ساعة**: Google Analytics قد يستغرق وقتاً لتحديث البيانات
2. **تحقق من Timezone**: تأكد من أن timezone صحيح في Google Analytics
3. **استخدم Real-time**: Real-time reports تظهر البيانات فوراً
4. **تحقق من Browser Console**: ابحث عن أخطاء JavaScript

### 9. أوامر مفيدة للاختبار

```javascript
// فحص شامل
console.log('=== Google Analytics Debug ===');
console.log('gtag available:', !!window.gtag);
console.log('dataLayer available:', !!window.dataLayer);
console.log('consent:', localStorage.getItem("cookie_consent"));
console.log('current URL:', window.location.href);
console.log('user agent:', navigator.userAgent);

// إرسال حدث شامل
if (window.gtag) {
  gtag('event', 'comprehensive_test', {
    'event_category': 'debug',
    'event_label': 'full_test',
    'value': 1,
    'custom_parameter': 'test_value',
    'page_title': document.title,
    'page_location': window.location.href
  });
  console.log('✅ Comprehensive test event sent');
}
``` 