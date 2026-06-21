# Country Capitals Game

Country Capitals Game is a beginner-friendly HTML, CSS, and JavaScript app for learning countries, capitals, and continents. The web app is wrapped with Capacitor for Android and iPhone builds.

## Project Structure

- `index.html` - app screens and UI containers.
- `style.css` - visual styles, safe-area support, flashcards, confetti, and celebrations.
- `script.js` - profiles, quizzes, coins, mastery, Store, World Map, sounds, and data loading.
- `countries.json` - offline country/capital data.
- `assets/avatars/` - local landmark avatar SVGs.
- `assets/audio/` - local answer sound WAV files.
- `www/` - Capacitor web bundle copied into native apps.
- `android/` - Capacitor Android project.
- `ios/` - Capacitor iOS project.
- `release-notes-template.md` - release checklist and store notes template.

## Sound System

Correct and wrong answer sounds use local WAV files:

- `assets/audio/correct-answer.wav`
- `assets/audio/wrong-answer.wav`

The app creates reusable `Audio` objects in `script.js` and replays them from the beginning on each answer. Sounds work offline because the files are bundled into `www/` and copied into the native apps by Capacitor.

Each saved profile has its own `soundEnabled` setting. The Sound button turns answer sounds on or off and saves that choice with the selected profile. Guest mode can toggle sound too, but guest progress is not saved.

The existing mastery THUMP sound is still generated separately with `AudioContext` and was not replaced.

## Confetti Behavior

Every correct quiz answer shows a small confetti burst from `#answer-confetti`.

Mastery still uses the larger existing celebration:

- Passport stamp
- THUMP sound
- Larger passport-page confetti
- 5 bonus coins

## Android Build

Requirements:

- Node.js and npm
- Java/JDK compatible with the Android Gradle plugin
- Android Studio or Android SDK

Commands:

```sh
npm install
npx cap sync android
./android/gradlew -p android assembleDebug
./android/gradlew -p android assembleRelease
```

Release output is normally under `android/app/build/outputs/`.

## iPhone Build

Requirements:

- macOS with full Xcode installed
- Xcode command line tools selected with `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`
- Node.js and npm

Commands:

```sh
npm install
npx cap sync ios
xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Debug -destination 'generic/platform=iOS Simulator' build
xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Release -destination 'generic/platform=iOS' build
```

Open the project in Xcode for signing, device testing, archives, and App Store upload:

```sh
npx cap open ios
```

## Release Instructions

Before a store release:

1. Update `www/` with the latest `index.html`, `style.css`, `script.js`, `countries.json`, and assets.
2. Run `npx cap sync`.
3. Confirm Android app id is `com.sia.countryapp`.
4. Confirm iOS bundle id is `com.sia.countryapp`.
5. Generate or verify native icons and splash screens with `npx capacitor-assets generate`.
6. Run Android debug and release builds.
7. Run iOS debug and release builds in Xcode or with `xcodebuild`.
8. Test profiles, avatars, Store, World Map, quizzes, sounds, confetti, mastery, coins, splash screen, and offline country loading.
9. Fill out `release-notes-template.md`.
10. Upload Android release artifacts to Google Play Console and iOS archives to App Store Connect.

## Files Added For This Release

- `assets/audio/correct-answer.wav`
- `assets/audio/wrong-answer.wav`
- `www/assets/audio/correct-answer.wav`
- `www/assets/audio/wrong-answer.wav`
- `ios/`
- `README.md`
- `release-notes-template.md`
