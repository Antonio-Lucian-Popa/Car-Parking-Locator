# 🚘 Unde mi-am parcat mașina?

Aplicație mobilă realizată în **Ionic + Capacitor** care îți salvează locația curentă și te ajută să găsești rapid locul unde ai parcat mașina. Funcționează **complet offline** (folosește doar GPS-ul telefonului) și nu necesită niciun cont sau server.

---

## 📱 Funcționalități

- ✅ Salvează locația GPS curentă
- ✅ Deschide Google Maps pentru navigare pietonală către mașină
- ✅ Afișează hartă statică (OpenStreetMap sau Leaflet)
- ✅ Funcționează offline (fără backend, fără internet)
- ✅ UI modern și responsive

---

## 🛠️ Tehnologii

- [Ionic Angular](https://ionicframework.com/)
- [Capacitor](https://capacitorjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/) (fără API key)
- [Leaflet.js (opțional)](https://leafletjs.com/) – hartă interactivă
- Capacitor Storage + Geolocation

---

## ⚙️ Instalare locală

### 1. Clonează proiectul

```bash
git clone https://github.com/username/unde-mi-am-parcat.git
cd unde-mi-am-parcat
```
### 2. Instalează dependențele

```bash
npm install
```
### 3. Instalează Capacitor

```bash
npx cap init unde-mi-am-parcat com.example.undemiamparcat "Unde mi-am parcat mașina?"
npx cap add android
npx cap add ios
```
### 4. Deschide proiectul în Android Studio sau Xcode

```bash
npx cap open android
npx cap open ios
```
### 5. Rulează aplicația pe emulator sau dispozitiv fizic

```bash
npx cap run android
npx cap run ios
```
