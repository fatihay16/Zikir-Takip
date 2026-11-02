# Günlük Zikir Takip – Android

Bu depo, mevcut web uygulamasını Capacitor ile Android APK olarak paketler.

## APK oluşturma
GitHub deposunda **Actions → Android APK → Run workflow** seçeneğini kullan. Derleme tamamlandığında iş akışının Artifacts bölümünden `gunluk-zikir-takip-android-apk` dosyasını indir.

## Telefona yükleme
İndirilen ZIP dosyasını aç, içindeki `app-debug.apk` dosyasını Android telefona aktar ve aç. Android'in istediği durumda bu kaynağa uygulama yükleme izni ver.

Uygulamanın HTML, CSS, JavaScript ve simge dosyaları APK içine paketlenir. Sayaç ve tamamlanma kayıtları cihazın uygulama depolamasında tutulur.

Not: Bu ilk sürüm test amaçlı imzalanmış debug APK'dır. Google Play yayını için ayrıca imzalı release paketi ve mağaza hazırlığı gerekir.