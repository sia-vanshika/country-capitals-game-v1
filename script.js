// Find the profile screen on the page.
const profileSection = document.querySelector("#profile-section");

// Find the main game screen on the page.
const gameSection = document.querySelector("#game-section");

// Find the welcome screen profile option buttons.
const existingProfileButton = document.querySelector("#existing-profile-button");
const makeProfileButton = document.querySelector("#make-profile-button");
const guestButton = document.querySelector("#guest-button");
const aboutButton = document.querySelector("#about-button");
const homeOptionsView = document.querySelector(".home-options-view");

// Find the saved-profile and make-profile panels.
const aboutCreatorSignature = document.querySelector("#about-creator-signature");
const aboutSection = document.querySelector("#about-section");
const existingProfileSection = document.querySelector("#existing-profile-section");
const makeProfileSection = document.querySelector("#make-profile-section");
const existingProfileList = document.querySelector("#existing-profile-list");
const noProfilesMessage = document.querySelector("#no-profiles-message");
const deleteProfileDialog = document.querySelector("#delete-profile-dialog");
const deleteProfileName = document.querySelector("#delete-profile-name");
const cancelDeleteProfileButton = document.querySelector("#cancel-delete-profile-button");
const confirmDeleteProfileButton = document.querySelector("#confirm-delete-profile-button");
const profileNameInput = document.querySelector("#profile-name-input");
const createProfileButton = document.querySelector("#create-profile-button");
const createProfileMessage = document.querySelector("#create-profile-message");
const backToWelcomeFromAbout = document.querySelector("#back-to-welcome-from-about");
const backToWelcomeFromExisting = document.querySelector("#back-to-welcome-from-existing");
const backToWelcomeFromCreate = document.querySelector("#back-to-welcome-from-create");
const avatarSection = document.querySelector("#avatar-section");
const avatarGrid = document.querySelector("#avatar-grid");
const avatarMessage = document.querySelector("#avatar-message");
const backFromAvatarButton = document.querySelector("#back-from-avatar-button");
const profileSettingsButton = document.querySelector("#profile-settings-button");
const profileAvatarDisplay = document.querySelector("#profile-avatar-display");
const profileNameDisplay = document.querySelector("#profile-name-display");

// Find the welcome message on the page.
const welcomeMessage = document.querySelector("#welcome-message");

// Find the learning section on the page.
const learningSection = document.querySelector("#learning-section");

// Find all of the continent buttons.
const continentPicker = document.querySelector("#continent-picker");
const continentButtons = document.querySelectorAll(".continent-button");

// Find the place where flashcards will be added.
const countryList = document.querySelector("#country-list");

// Find the loading and error messages.
const loadingMessage = document.querySelector("#loading-message");
const errorMessage = document.querySelector("#error-message");
const newCountriesModeSection = document.querySelector("#new-countries-mode-section");
const newCountriesSelectionLabel = document.querySelector("#new-countries-selection-label");
const newCountriesQuizButton = document.querySelector("#new-countries-quiz-button");
const newCountriesFlashcardsButton = document.querySelector("#new-countries-flashcards-button");
const quizCurrentFlashcardsButton = document.querySelector("#quiz-current-flashcards-button");

// Find the button that opens the Master List.
const masterListButton = document.querySelector("#master-list-button");

// Find the Practice New Countries button.
const practiceButton = document.querySelector("#practice-button");

// Find the Store button and Store screen parts.
const soundToggleButton = document.querySelector("#sound-toggle-button");
const storeButton = document.querySelector("#store-button");
const storeSection = document.querySelector("#store-section");
const storeBalance = document.querySelector("#store-balance");
const storeMessage = document.querySelector("#store-message");
const storeItems = document.querySelector("#store-items");
const backFromStoreButton = document.querySelector("#back-from-store-button");

// Find the World Map button and World Map screen parts.
const worldMapButton = document.querySelector("#world-map-button");
const worldMapSection = document.querySelector("#world-map-section");
const worldMapMessage = document.querySelector("#world-map-message");
const worldTotalProgress = document.querySelector("#world-total-progress");
const worldProgressList = document.querySelector("#world-progress-list");
const backFromWorldMapButton = document.querySelector("#back-from-world-map-button");

// Find the Back button on the main profile home screen.
const profileHomeBackButton = document.querySelector("#profile-home-back-button");

// Find the mastery celebration parts.
const masteryCelebration = document.querySelector("#mastery-celebration");
const earnedStampCountry = document.querySelector("#earned-stamp-country");
const celebrationConfetti = document.querySelector("#celebration-confetti");

// Find the Master List section on the page.
const masterListSection = document.querySelector("#master-list-section");

// Find the Previous Countries menu and its two choices.
const previousCountriesSection = document.querySelector("#previous-countries-section");
const showLearnedListButton = document.querySelector("#show-learned-list-button");
const quizLearnedCountriesButton = document.querySelector("#quiz-learned-countries-button");

// Find the button that returns to the learning screen.
const backToLearningButton = document.querySelector("#back-to-learning-button");

// Find the list where country names will be shown.
const masterList = document.querySelector("#master-list");

// Find the Practice Mode parts on the page.
const practiceSection = document.querySelector("#practice-section");
const coinCount = document.querySelector("#coin-count");
const practiceQuestion = document.querySelector("#practice-question");
const answerChoices = document.querySelector("#answer-choices");
const practiceFeedback = document.querySelector("#practice-feedback");
const nextQuestionButton = document.querySelector("#next-question-button");
const answerConfetti = document.querySelector("#answer-confetti");

// This local JSON file is the app's source of truth, so country learning can work offline.
const localCountryDataUrl = "countries.json";

// These small local sound files are bundled with the app, so answer sounds work offline.
const correctAnswerSoundUrl = "assets/audio/correct-answer.wav";
const wrongAnswerSoundUrl = "assets/audio/wrong-answer.wav";

// Answer sounds stay gentle so they do not overpower the mastery THUMP.
const answerSoundVolume = 0.45;

// This friendly message appears if the bundled local data cannot load.
const countryDataLoadErrorMessage = "Country data could not load right now. Please refresh the app and try again.";

// This name is used when saving all profiles in localStorage.
const savedProfilesKey = "countryCapitalProfiles";

// The app supports 5 simple family profiles.
const numberOfProfiles = 5;

// These old names are used only to move earlier single-player progress into Profile 1.
const oldSavedCountriesKey = "masterCountries";
const oldSavedCountryDataKey = "masterCountryData";
const oldSavedStatusKey = "countryStatuses";
const oldSavedCoinsKey = "coins";

// These are the continent groups supported by the local countries.json file.
const continentSettings = [
  { name: "Europe" },
  { name: "Asia" },
  { name: "Africa" },
  { name: "North America" },
  { name: "South America" },
  { name: "Oceania" }
];

const mixAndMatchOptionName = "Mix and Match";

// These landmark choices are used as profile avatars.
// Remote image URLs were removed so avatars load reliably offline and in app-store builds.
// The local avatar assets live in assets/avatars, and avatar cards load them through img.src.
const landmarkOptions = [
  {
    id: "eiffel-tower",
    name: "Eiffel Tower",
    image: "assets/avatars/eiffel-tower.svg"
  },
  {
    id: "statue-of-liberty",
    name: "Statue of Liberty",
    image: "assets/avatars/statue-of-liberty.svg"
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    image: "assets/avatars/taj-mahal.svg"
  },
  {
    id: "colosseum",
    name: "Colosseum",
    image: "assets/avatars/colosseum.svg"
  },
  {
    id: "sydney-opera-house",
    name: "Sydney Opera House",
    image: "assets/avatars/sydney-opera-house.svg"
  },
  {
    id: "great-wall",
    name: "Great Wall of China",
    image: "assets/avatars/great-wall.svg"
  },
  {
    id: "great-pyramid",
    name: "Great Pyramid of Giza",
    image: "assets/avatars/great-pyramid.svg"
  },
  {
    id: "christ-redeemer",
    name: "Christ the Redeemer",
    image: "assets/avatars/christ-redeemer.svg"
  },
  {
    id: "mount-fuji",
    name: "Mount Fuji",
    image: "assets/avatars/mount-fuji.svg"
  },
  {
    id: "neuschwanstein",
    name: "Neuschwanstein Castle",
    image: "assets/avatars/neuschwanstein-castle.svg"
  }
];

const defaultAvatarId = "eiffel-tower";

// The Store catalog is a simple list of categories and coin prices.
// Buying these items is cosmetic only and never gives answers or learning progress.
const storeCatalog = [
  {
    name: "Passport Shop",
    items: [
      { id: "passport-explorer", name: "Explorer Passport", price: 10, previewType: "passport", previewText: "Explorer" },
      { id: "passport-gold", name: "Gold Passport", price: 20, previewType: "passport", previewText: "Gold" },
      { id: "passport-galaxy", name: "Galaxy Passport", price: 35, previewType: "passport", previewText: "Galaxy" },
      { id: "passport-world-traveler", name: "World Traveler Passport", price: 50, previewType: "passport", previewText: "World" }
    ]
  },
  {
    name: "Landmark Avatars",
    items: [
      { id: "avatar-statue-of-liberty", name: "Statue of Liberty", price: 10, previewType: "landmark", landmarkId: "statue-of-liberty" },
      { id: "avatar-colosseum", name: "Colosseum", price: 15, previewType: "landmark", landmarkId: "colosseum" },
      { id: "avatar-taj-mahal", name: "Taj Mahal", price: 20, previewType: "landmark", landmarkId: "taj-mahal" },
      { id: "avatar-sydney-opera-house", name: "Sydney Opera House", price: 25, previewType: "landmark", landmarkId: "sydney-opera-house" },
      { id: "avatar-great-pyramid", name: "Great Pyramid", price: 30, previewType: "landmark", landmarkId: "great-pyramid" },
      { id: "avatar-mount-fuji", name: "Mount Fuji", price: 35, previewType: "landmark", landmarkId: "mount-fuji" }
    ]
  },
  {
    name: "THUMP Effects",
    items: [
      { id: "thump-sparkle", name: "Sparkle THUMP", price: 15, previewType: "effect", previewText: "Sparkle" },
      { id: "thump-confetti", name: "Confetti THUMP", price: 30, previewType: "effect", previewText: "Confetti" },
      { id: "thump-mega", name: "Mega THUMP", price: 50, previewType: "effect", previewText: "Mega" }
    ]
  },
  {
    name: "Explorer Titles",
    items: [
      { id: "title-explorer", name: "Explorer", price: 10, previewType: "title", previewText: "Explorer" },
      { id: "title-world-traveler", name: "World Traveler", price: 20, previewType: "title", previewText: "Traveler" },
      { id: "title-continent-conqueror", name: "Continent Conqueror", price: 35, previewType: "title", previewText: "Conqueror" },
      { id: "title-passport-legend", name: "Passport Legend", price: 50, previewType: "title", previewText: "Legend" }
    ]
  }
];

// A country is mastered after the player answers it correctly 1 time in Quiz Mode.
const masteryAnswerGoal = 1;

// Mastering a country gives the player 5 bonus coins once.
const masteryBonusCoins = 5;

// This keeps the celebration under 2 seconds.
const masteryCelebrationDuration = 1800;

// This keeps the small correct-answer confetti quick and lightweight.
const answerConfettiDuration = 900;

// This list holds the currently loaded country records from countries.json.
let countryCapitalList = [];

// This object stores fetched countries so the app does not fetch the same continent twice.
const countryDataByContinent = {};

// This caches the bundled JSON after the first successful load.
let localCountryData = null;
let localCountryDataLoadPromise = null;

// These are the 5 countries shown on the current set of flashcards.
let countriesToLearn = [];

// This array tracks which visible country names the player has selected.
// It stores countries, not capitals, so the checkmark belongs to the country card.
const selectedCountryCards = [];

// This stores the unlearned countries from the selected Mix and Match or continent set.
let newCountriesSelectionPool = [];

// This stores the country set currently being used by New Countries Quiz mode.
let newCountriesQuizPool = [];

// This stores the current New Countries Quiz question.
let currentNewCountriesQuizItem = null;

// This tells the shared Next Question button which quiz flow is currently active.
let activePracticeQuestionMode = "previousCountries";

// This stores the currently selected Practice New Countries option.
// It starts blank so no country set is selected until the player chooses one.
let selectedContinent = "";

// This tracks what the bottom New Countries button should do right now.
// "newCountries" opens the continent picker from the main profile page.
// "backToProfile" returns from the New Countries screens to the previous profile page.
let practiceButtonMode = "newCountries";

// This tracks what the Previous Countries button should do right now.
// It can open Previous Countries, go back home, or return from a quiz to the menu.
let previousCountriesButtonMode = "openPreviousCountries";

// This remembers which game screen was open before the World Map.
// The Back button uses it to return the player to that same area.
let worldMapPreviousScreen = "profileHome";

// An array is a list that can store many values in one place.
// This array stores country names the selected profile has learned.
// It gets saved inside that profile so the app can restore it later.
const masterCountries = [];

// This array stores the selected profile's learned country names with their capitals.
const masterCountryData = [];

// This object stores each country's latest Practice Mode result for the selected profile.
// Example: countryStatuses["France"] = "correct";
const countryStatuses = {};

// This object stores how many times each country has been answered correctly.
// Example: correctAnswerCounts["France"] = 1 means France is mastered.
const correctAnswerCounts = {};

// This array stores countries that have reached the mastery goal.
const masteredCountries = [];

// This array stores countries that have earned passport stamps.
const passportStamps = [];

// This array stores Store item ids the current player has unlocked.
// It is saved inside the selected profile, so each profile has different purchases.
const storePurchases = [];

// This number stores the coins earned by the selected profile.
let coins = 0;

// This stores whether the current profile wants answer sounds on or off.
let soundEnabled = true;

// This stores the current Practice Mode question.
let currentPracticeCountry = null;

// This stores the timer that hides the mastery celebration.
let masteryCelebrationTimer = null;

// This stores the timer that clears the smaller correct-answer confetti.
let answerConfettiTimer = null;

// These audio objects are reused for every answer click instead of being recreated.
const correctAnswerSound = createReusableAnswerSound(correctAnswerSoundUrl);
const wrongAnswerSound = createReusableAnswerSound(wrongAnswerSoundUrl);

// This creates one reusable audio object for a bundled local sound file.
function createReusableAnswerSound(soundUrl) {
  if (typeof Audio === "undefined") {
    return null;
  }

  const sound = new Audio(soundUrl);
  sound.preload = "auto";
  sound.volume = answerSoundVolume;
  return sound;
}

// This keeps the Sound button text matched to the current profile setting.
function updateSoundToggleDisplay() {
  if (!soundToggleButton) {
    return;
  }

  if (soundEnabled) {
    soundToggleButton.textContent = "\uD83D\uDD0A Sound On";
    soundToggleButton.setAttribute("aria-pressed", "true");
    soundToggleButton.setAttribute("aria-label", "Turn answer sounds off");
  } else {
    soundToggleButton.textContent = "\uD83D\uDD07 Sound Off";
    soundToggleButton.setAttribute("aria-pressed", "false");
    soundToggleButton.setAttribute("aria-label", "Turn answer sounds on");
  }
}

// This turns sound on or off for the current profile and saves the choice.
function toggleSoundPreference() {
  soundEnabled = !soundEnabled;
  updateSoundToggleDisplay();
  saveProgress();
}

// This plays a reused sound from the beginning each time an answer is clicked.
function playReusableAnswerSound(sound) {
  if (!soundEnabled || sound === null) {
    return;
  }

  try {
    sound.pause();
    sound.currentTime = 0;

    const playPromise = sound.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        // If the device blocks audio, keep the quiz moving without an error.
      });
    }
  } catch (error) {
    // If sound cannot play, the quiz should still continue normally.
  }
}

// This builds a small colorful burst after a correct answer.
function showAnswerConfetti() {
  if (!answerConfetti) {
    return;
  }

  const confettiColors = ["#2563eb", "#14b8a6", "#facc15", "#fb7185", "#22c55e"];

  hideAnswerConfetti();

  answerConfetti.innerHTML = "";

  for (let index = 0; index < 10; index = index + 1) {
    const confettiPiece = document.createElement("span");
    confettiPiece.classList.add("answer-confetti-piece");
    confettiPiece.style.backgroundColor = confettiColors[index % confettiColors.length];
    confettiPiece.style.setProperty("--answer-confetti-x", (Math.random() * 130 - 65) + "px");
    confettiPiece.style.setProperty("--answer-confetti-y", (Math.random() * 95 - 115) + "px");
    confettiPiece.style.setProperty("--answer-confetti-rotation", (Math.random() * 260 - 130) + "deg");
    answerConfetti.appendChild(confettiPiece);
  }

  answerConfetti.classList.add("hidden");
  answerConfetti.offsetWidth;
  answerConfetti.classList.remove("hidden");

  answerConfettiTimer = setTimeout(function () {
    answerConfetti.classList.add("hidden");
    answerConfetti.innerHTML = "";
  }, answerConfettiDuration);
}

// This clears any old small burst before a wrong answer can show stale confetti.
function hideAnswerConfetti() {
  if (!answerConfetti) {
    return;
  }

  if (answerConfettiTimer !== null) {
    clearTimeout(answerConfettiTimer);
    answerConfettiTimer = null;
  }

  answerConfetti.classList.add("hidden");
  answerConfetti.innerHTML = "";
}

// Correct answers get both a chime and a small burst.
function playCorrectAnswerEffects() {
  playReusableAnswerSound(correctAnswerSound);
  showAnswerConfetti();
}

// Wrong answers get a different sound but no confetti.
function playWrongAnswerEffects() {
  playReusableAnswerSound(wrongAnswerSound);
  hideAnswerConfetti();
}

// This updates the always-visible coin badge.
// The emoji makes it feel like a game reward, and the number shows saved coins.
function updateCoinDisplay() {
  coinCount.textContent = "\uD83E\uDE99 " + coins;
}

// This puts the button emoji above the label text.
// The CSS centers both spans so the two profile home buttons look neat and even.
function setStackedActionButton(button, icon, labelText) {
  button.innerHTML = "<span class=\"action-button-icon\">" + icon + "</span><span class=\"action-button-text\">" + labelText + "</span>";
  button.setAttribute("aria-label", icon + " " + labelText);
  button.classList.add("stacked-action");
}

// This shows how many countries the current player has already learned.
// The count comes from the masterCountries array, so it updates with the saved profile.
function updateProfileActionButtons() {
  if (previousCountriesButtonMode === "backToProfile" || previousCountriesButtonMode === "backToPreviousMenu") {
    masterListButton.textContent = "\u2190 Back";
    masterListButton.classList.add("back-mode");
    masterListButton.classList.remove("stacked-action");
    masterListButton.removeAttribute("aria-label");
  } else {
    setStackedActionButton(masterListButton, "\uD83C\uDFAF", "Practice Previous Countries (" + masterCountries.length + ")");
    masterListButton.classList.remove("back-mode");
  }

  if (practiceButtonMode === "backToProfile") {
    practiceButton.textContent = "\u2190 Back";
    practiceButton.classList.add("back-mode");
    practiceButton.classList.remove("stacked-action");
    practiceButton.removeAttribute("aria-label");
  } else {
    setStackedActionButton(practiceButton, "\uD83C\uDF0D", "Practice New Countries");
    practiceButton.classList.remove("back-mode");
  }
}

// This updates the coin balance shown inside the Store screen.
function updateStoreBalance() {
  storeBalance.textContent = "\uD83E\uDE99 " + coins;
}

// This checks whether the current player already bought one Store item.
function isStoreItemUnlocked(itemId) {
  return storePurchases.includes(itemId);
}

// This builds the small picture or badge at the top of a Store item card.
function createStorePreview(item) {
  const preview = document.createElement("div");
  preview.classList.add("store-item-preview", "preview-" + item.previewType);

  if (item.previewType === "landmark") {
    const landmark = findLandmarkAvatar(item.landmarkId);
    const image = document.createElement("img");
    image.src = landmark.image;
    image.alt = landmark.name;
    preview.appendChild(image);
  } else {
    preview.textContent = item.previewText;
  }

  return preview;
}

// This redraws all Store categories and item cards.
function renderStoreItems() {
  storeItems.innerHTML = "";
  updateStoreBalance();

  storeCatalog.forEach(function (category) {
    const categorySection = document.createElement("section");
    categorySection.classList.add("store-category");

    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = category.name;
    categorySection.appendChild(categoryTitle);

    const itemGrid = document.createElement("div");
    itemGrid.classList.add("store-item-grid");

    category.items.forEach(function (item) {
      const isUnlocked = isStoreItemUnlocked(item.id);
      const itemCard = document.createElement("article");
      itemCard.classList.add("store-item-card");

      if (isUnlocked) {
        itemCard.classList.add("unlocked");
      }

      const itemName = document.createElement("h4");
      itemName.textContent = item.name;

      const itemPrice = document.createElement("p");
      itemPrice.classList.add("store-item-price");
      itemPrice.textContent = item.price + (item.price === 1 ? " coin" : " coins");

      const itemStatus = document.createElement("p");
      itemStatus.classList.add("store-item-status");
      itemStatus.textContent = isUnlocked ? "\u2705 Unlocked" : "\uD83D\uDD12 Locked";

      const buyButton = document.createElement("button");
      buyButton.classList.add("store-buy-button");
      buyButton.type = "button";

      if (isUnlocked) {
        buyButton.textContent = "Unlocked";
        buyButton.disabled = true;
      } else {
        buyButton.textContent = "Buy";
        buyButton.addEventListener("click", function () {
          buyStoreItem(item);
        });
      }

      itemCard.appendChild(createStorePreview(item));
      itemCard.appendChild(itemName);
      itemCard.appendChild(itemPrice);
      itemCard.appendChild(itemStatus);
      itemCard.appendChild(buyButton);
      itemGrid.appendChild(itemCard);
    });

    categorySection.appendChild(itemGrid);
    storeItems.appendChild(categorySection);
  });
}

// This handles buying one item with earned coins.
function buyStoreItem(item) {
  if (isStoreItemUnlocked(item.id)) {
    storeMessage.textContent = item.name + " is already unlocked.";
    return;
  }

  if (coins < item.price) {
    storeMessage.textContent = "You need more coins to buy this item!";
    return;
  }

  // Deduct the price from the player's earned coins.
  coins = coins - item.price;

  // Add the item id to the unlocked list for this profile.
  // Guest mode uses the same array in memory, but saveProgress() skips localStorage for guests.
  storePurchases.push(item.id);

  updateCoinDisplay();
  renderStoreItems();
  storeMessage.textContent = item.name + " unlocked!";

  // This saves coins and unlocked Store item ids inside the selected profile.
  saveProgress();
}

// This opens the Store as its own screen.
function showStore() {
  welcomeMessage.classList.add("hidden");
  learningSection.classList.add("hidden");
  previousCountriesSection.classList.add("hidden");
  masterListSection.classList.add("hidden");
  practiceSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");
  profileHomeBackButton.classList.add("hidden");
  masterListButton.classList.add("hidden");
  practiceButton.classList.add("hidden");

  storeMessage.textContent = "";
  renderStoreItems();
  storeSection.classList.remove("hidden");
}

// This returns from the Store to the main profile home screen.
function returnToProfilePageFromStore() {
  showGameForSelectedProfile();
}

// This checks which game screen is currently open before showing the World Map.
function getCurrentGameScreenName() {
  if (!learningSection.classList.contains("hidden")) {
    return "learning";
  }

  if (!previousCountriesSection.classList.contains("hidden")) {
    return "previousCountries";
  }

  if (!masterListSection.classList.contains("hidden")) {
    return "masterList";
  }

  if (!practiceSection.classList.contains("hidden")) {
    return "practice";
  }

  if (!storeSection.classList.contains("hidden")) {
    return "store";
  }

  return "profileHome";
}

// This hides the middle game screens so the World Map can replace them.
function hideGameScreensForWorldMap() {
  welcomeMessage.classList.add("hidden");
  learningSection.classList.add("hidden");
  previousCountriesSection.classList.add("hidden");
  masterListSection.classList.add("hidden");
  practiceSection.classList.add("hidden");
  storeSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");
  profileHomeBackButton.classList.add("hidden");
  masterListButton.classList.add("hidden");
  practiceButton.classList.add("hidden");
}

// World Map mastery is counted from saved Quiz correct-answer data only.
// Countries that were only shown or added to Previous Countries do not count here.
function isCountryMasteredForWorldMap(country) {
  return getCorrectAnswerCount(country) >= masteryAnswerGoal;
}

// This finds the mastered country names for one continent.
// The names are saved in the card data, but they stay hidden until the card is clicked.
function getMasteredCountryNamesForContinent(countries) {
  return countries.filter(function (item) {
    // World Map uses Quiz correct-answer counts as the source of truth.
    // Seeing a country in Previous Countries is not enough to count as mastered.
    return isCountryMasteredForWorldMap(item.country);
  }).map(function (item) {
    return item.country;
  }).sort(function (countryA, countryB) {
    return countryA.localeCompare(countryB);
  });
}

// This calculates progress for every continent by comparing mastered countries to total countries.
async function calculateWorldProgress() {
  const continentProgress = [];
  let totalMasteredCountries = 0;
  let totalWorldCountries = 0;

  // Each continent uses the same local-data loading and filtering as Practice New Countries.
  for (let index = 0; index < continentSettings.length; index = index + 1) {
    const continentName = continentSettings[index].name;
    const countries = await loadCountriesForContinent(continentName);
    const masteredCountryNames = getMasteredCountryNamesForContinent(countries);
    const masteredCount = masteredCountryNames.length;
    const totalCount = countries.length;
    const percentage = totalCount === 0 ? 0 : Math.round((masteredCount / totalCount) * 100);

    continentProgress.push({
      name: continentName,
      mastered: masteredCount,
      total: totalCount,
      percentage: percentage,
      masteredCountryNames: masteredCountryNames
    });

    totalMasteredCountries = totalMasteredCountries + masteredCount;
    totalWorldCountries = totalWorldCountries + totalCount;
  }

  return {
    continents: continentProgress,
    mastered: totalMasteredCountries,
    total: totalWorldCountries
  };
}

// This flips the World Map continent card open or closed.
// Clicking again hides the mastered country names so they are not shown upfront.
function toggleWorldProgressCard(card, list) {
  const isExpanded = card.classList.toggle("expanded");
  card.setAttribute("aria-expanded", isExpanded.toString());
  list.setAttribute("aria-hidden", (!isExpanded).toString());
}

// This builds one continent progress card for the World Map screen.
function createContinentProgressCard(progress) {
  const card = document.createElement("article");
  card.classList.add("world-progress-card");
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-expanded", "false");
  card.setAttribute("aria-label", progress.name + " progress. Click to show mastered countries.");

  const titleRow = document.createElement("div");
  titleRow.classList.add("world-progress-title-row");

  const title = document.createElement("h3");
  title.textContent = progress.name;

  const percent = document.createElement("span");
  percent.textContent = progress.percentage + "%";

  const progressBar = document.createElement("div");
  progressBar.classList.add("world-progress-bar");

  const progressFill = document.createElement("div");
  progressFill.classList.add("world-progress-fill");
  progressFill.style.width = progress.percentage + "%";

  const countText = document.createElement("p");
  countText.textContent = progress.mastered + " / " + progress.total + " Countries Mastered";

  const masteredList = document.createElement("ul");
  masteredList.classList.add("world-mastered-list");
  masteredList.setAttribute("aria-hidden", "true");

  if (progress.masteredCountryNames.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "No mastered countries here yet.";
    masteredList.appendChild(emptyItem);
  } else {
    progress.masteredCountryNames.forEach(function (country) {
      const countryItem = document.createElement("li");
      // Mastered country names are added to this hidden list only after progress is calculated.
      countryItem.textContent = country;
      masteredList.appendChild(countryItem);
    });
  }

  titleRow.appendChild(title);
  titleRow.appendChild(percent);
  progressBar.appendChild(progressFill);
  card.appendChild(titleRow);
  card.appendChild(progressBar);
  card.appendChild(countText);
  card.appendChild(masteredList);

  // The card expands and collapses on click so the country names stay hidden until asked for.
  card.addEventListener("click", function () {
    toggleWorldProgressCard(card, masteredList);
  });

  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleWorldProgressCard(card, masteredList);
    }
  });

  return card;
}

// This shows the calculated world progress on the page.
function renderWorldProgress(progressData) {
  worldProgressList.innerHTML = "";
  worldTotalProgress.textContent = progressData.mastered + " / " + progressData.total + " Countries Mastered";

  progressData.continents.forEach(function (progress) {
    worldProgressList.appendChild(createContinentProgressCard(progress));
  });
}

// This opens the World Map screen and loads continent progress.
async function showWorldMap() {
  if (worldMapSection.classList.contains("hidden") === false) {
    return;
  }

  worldMapPreviousScreen = getCurrentGameScreenName();
  hideGameScreensForWorldMap();

  worldMapMessage.textContent = "Loading world progress...";
  worldTotalProgress.textContent = "Loading...";
  worldProgressList.innerHTML = "";
  worldMapSection.classList.remove("hidden");

  try {
    const progressData = await calculateWorldProgress();
    renderWorldProgress(progressData);
    worldMapMessage.textContent = "";
  } catch (error) {
    worldTotalProgress.textContent = "Progress unavailable";
    worldProgressList.innerHTML = "";
    worldMapMessage.textContent = "World progress could not load. Please try again.";
  }
}

// This returns from the World Map to the screen the player came from.
function returnFromWorldMap() {
  const previousScreen = worldMapPreviousScreen;
  worldMapSection.classList.add("hidden");
  worldMapMessage.textContent = "";

  if (previousScreen === "learning") {
    welcomeMessage.classList.add("hidden");
    previousCountriesSection.classList.add("hidden");
    masterListSection.classList.add("hidden");
    practiceSection.classList.add("hidden");
    storeSection.classList.add("hidden");
    worldMapSection.classList.add("hidden");
    profileHomeBackButton.classList.add("hidden");
    learningSection.classList.remove("hidden");
    masterListButton.classList.remove("hidden");
    practiceButton.classList.remove("hidden");
    return;
  }

  if (previousScreen === "previousCountries") {
    showPreviousCountriesMenu();
    masterListButton.classList.remove("hidden");
    practiceButton.classList.remove("hidden");
    return;
  }

  if (previousScreen === "masterList") {
    showMasterList();
    masterListButton.classList.remove("hidden");
    practiceButton.classList.remove("hidden");
    return;
  }

  if (previousScreen === "practice") {
    welcomeMessage.classList.add("hidden");
    learningSection.classList.add("hidden");
    previousCountriesSection.classList.add("hidden");
    masterListSection.classList.add("hidden");
    storeSection.classList.add("hidden");
    worldMapSection.classList.add("hidden");
    profileHomeBackButton.classList.add("hidden");
    practiceSection.classList.remove("hidden");
    masterListButton.classList.remove("hidden");
    practiceButton.classList.remove("hidden");
    return;
  }

  if (previousScreen === "store") {
    showStore();
    return;
  }

  showGameForSelectedProfile();
}

// This stores which profile is being used right now.
let selectedProfileIndex = null;

// This array stores the saved data for all 5 profiles.
let profiles = [];

// Guest mode lets someone play without saving progress permanently.
let isGuestMode = false;

// These values remember why the avatar chooser is open.
let avatarSelectionMode = "create";
let pendingProfileName = "";
let pendingProfileIndex = null;

// This remembers which profile is waiting for delete confirmation.
let profileIndexToDelete = null;

// A profile is one player's saved progress on this shared device.
// Each profile has its own coins, Master List, country status icons, mastery progress, passport stamps, and Store purchases.
function createEmptyProfile(profileName) {
  return {
    name: profileName || "",
    avatar: defaultAvatarId,
    soundEnabled: true,
    coins: 0,
    masterCountries: [],
    masterCountryData: [],
    countryStatuses: {},
    correctAnswerCounts: {},
    masteredCountries: [],
    passportStamps: [],
    storePurchases: []
  };
}

// This makes the 5 blank profiles the app needs.
function createEmptyProfiles() {
  const emptyProfiles = [];

  for (let count = 0; count < numberOfProfiles; count = count + 1) {
    emptyProfiles.push(createEmptyProfile(""));
  }

  return emptyProfiles;
}

// This checks whether a saved slot has a real profile in it.
function profileExists(profile) {
  return profile.name.trim() !== "" ||
    profile.masterCountries.length > 0 ||
    profile.masterCountryData.length > 0 ||
    Object.keys(profile.countryStatuses).length > 0 ||
    Object.keys(profile.correctAnswerCounts).length > 0 ||
    profile.masteredCountries.length > 0 ||
    profile.passportStamps.length > 0 ||
    profile.storePurchases.length > 0 ||
    profile.coins > 0;
}

// This makes profile names easy to compare.
// trim() ignores spaces at the start and end, and toLowerCase() ignores capital letters.
function normalizeProfileName(profileName) {
  return profileName.trim().toLowerCase();
}

// This checks whether another saved profile already has the same name.
// some() stops as soon as it finds a duplicate name.
function profileNameAlreadyExists(profileName) {
  const newProfileName = normalizeProfileName(profileName);

  return profiles.some(function (profile) {
    if (!profileExists(profile)) {
      return false;
    }

    return normalizeProfileName(profile.name) === newProfileName;
  });
}

// This finds the landmark avatar details by the saved avatar id.
function findLandmarkAvatar(avatarId) {
  const landmark = landmarkOptions.find(function (option) {
    return option.id === avatarId;
  });

  return landmark || landmarkOptions[0];
}

// This keeps saved profile data in the shape the app expects.
function cleanProfile(profile) {
  const cleanData = createEmptyProfile();

  if (!profile) {
    return cleanData;
  }

  if (typeof profile.name === "string") {
    cleanData.name = profile.name.trim();
  }

  if (typeof profile.avatar === "string") {
    cleanData.avatar = findLandmarkAvatar(profile.avatar).id;
  }

  if (typeof profile.soundEnabled === "boolean") {
    cleanData.soundEnabled = profile.soundEnabled;
  }

  if (Array.isArray(profile.masterCountries)) {
    cleanData.masterCountries = profile.masterCountries;
  }

  if (Array.isArray(profile.masterCountryData)) {
    cleanData.masterCountryData = profile.masterCountryData;
  }

  if (profile.countryStatuses && typeof profile.countryStatuses === "object" && !Array.isArray(profile.countryStatuses)) {
    cleanData.countryStatuses = profile.countryStatuses;
  }

  if (profile.correctAnswerCounts && typeof profile.correctAnswerCounts === "object" && !Array.isArray(profile.correctAnswerCounts)) {
    Object.keys(profile.correctAnswerCounts).forEach(function (country) {
      const count = Number(profile.correctAnswerCounts[country]);

      if (!Number.isNaN(count) && count > 0) {
        cleanData.correctAnswerCounts[country] = count;
      }
    });
  }

  if (Array.isArray(profile.masteredCountries)) {
    cleanData.masteredCountries = profile.masteredCountries.filter(function (country) {
      return typeof country === "string";
    });
  }

  if (Array.isArray(profile.passportStamps)) {
    cleanData.passportStamps = profile.passportStamps.filter(function (country) {
      return typeof country === "string";
    });
  }

  if (Array.isArray(profile.storePurchases)) {
    // Store purchases are saved as item ids, such as "passport-gold".
    cleanData.storePurchases = profile.storePurchases.filter(function (itemId) {
      return typeof itemId === "string";
    });
  }

  if (!Number.isNaN(Number(profile.coins))) {
    cleanData.coins = Number(profile.coins);
  }

  return cleanData;
}

// This safely restores an old saved array if it exists.
function restoreOldArray(key) {
  const savedText = localStorage.getItem(key);

  if (savedText === null) {
    return [];
  }

  try {
    const restoredArray = JSON.parse(savedText);
    return Array.isArray(restoredArray) ? restoredArray : [];
  } catch (error) {
    return [];
  }
}

// This safely restores an old saved object if it exists.
function restoreOldObject(key) {
  const savedText = localStorage.getItem(key);

  if (savedText === null) {
    return {};
  }

  try {
    const restoredObject = JSON.parse(savedText);

    if (restoredObject && typeof restoredObject === "object" && !Array.isArray(restoredObject)) {
      return restoredObject;
    }
  } catch (error) {
    return {};
  }

  return {};
}

// This moves any earlier single-player save into Profile 1.
function moveOldProgressToFirstProfile() {
  const oldCountries = restoreOldArray(oldSavedCountriesKey);
  const oldCountryData = restoreOldArray(oldSavedCountryDataKey);
  const oldStatuses = restoreOldObject(oldSavedStatusKey);
  const oldCoinsText = localStorage.getItem(oldSavedCoinsKey);
  const oldCoins = oldCoinsText === null ? 0 : Number(oldCoinsText);

  const hasOldProgress = oldCountries.length > 0 || oldCountryData.length > 0 || Object.keys(oldStatuses).length > 0 || oldCoins > 0;

  if (hasOldProgress) {
    profiles[0] = {
      name: "Profile 1",
      avatar: defaultAvatarId,
      soundEnabled: true,
      coins: Number.isNaN(oldCoins) ? 0 : oldCoins,
      masterCountries: oldCountries,
      masterCountryData: oldCountryData,
      countryStatuses: oldStatuses,
      correctAnswerCounts: {},
      masteredCountries: [],
      passportStamps: [],
      storePurchases: []
    };
  }
}

// localStorage is browser storage for small pieces of saved text.
// The app stores all named profiles together as one array of profile objects.
function saveProfilesToStorage() {
  localStorage.setItem(savedProfilesKey, JSON.stringify(profiles));
}

// This loads the saved profile array from localStorage when the app opens.
function loadProfilesFromStorage() {
  profiles = createEmptyProfiles();

  const savedProfiles = localStorage.getItem(savedProfilesKey);

  if (savedProfiles === null) {
    moveOldProgressToFirstProfile();
    saveProfilesToStorage();
    return;
  }

  try {
    const restoredProfiles = JSON.parse(savedProfiles);

    if (Array.isArray(restoredProfiles)) {
      restoredProfiles.forEach(function (profile, index) {
        if (index < numberOfProfiles) {
          const cleanedProfile = cleanProfile(profile);

          // Older saved profiles did not have names, so give them simple names.
          if (cleanedProfile.name === "" && profileExists(cleanedProfile)) {
            cleanedProfile.name = "Profile " + (index + 1);
          }

          profiles[index] = cleanedProfile;
        }
      });
    }
  } catch (error) {
    profiles = createEmptyProfiles();
  }

  saveProfilesToStorage();
}

// This clears the current player's data before another profile is loaded.
function clearCurrentProfileData() {
  masterCountries.length = 0;
  masterCountryData.length = 0;
  coins = 0;
  soundEnabled = true;

  Object.keys(countryStatuses).forEach(function (country) {
    delete countryStatuses[country];
  });

  Object.keys(correctAnswerCounts).forEach(function (country) {
    delete correctAnswerCounts[country];
  });

  masteredCountries.length = 0;
  passportStamps.length = 0;
  storePurchases.length = 0;
}

// This loads only the selected profile's saved progress into the game.
function loadSelectedProfile(profileIndex) {
  const profile = cleanProfile(profiles[profileIndex]);

  isGuestMode = false;
  clearCurrentProfileData();

  profile.masterCountries.forEach(function (country) {
    masterCountries.push(country);
  });

  profile.masterCountryData.forEach(function (item) {
    masterCountryData.push(item);
  });

  Object.keys(profile.countryStatuses).forEach(function (country) {
    countryStatuses[country] = profile.countryStatuses[country];
  });

  Object.keys(profile.correctAnswerCounts).forEach(function (country) {
    correctAnswerCounts[country] = profile.correctAnswerCounts[country];
  });

  profile.masteredCountries.forEach(function (country) {
    masteredCountries.push(country);
  });

  profile.passportStamps.forEach(function (country) {
    passportStamps.push(country);
  });

  profile.storePurchases.forEach(function (itemId) {
    storePurchases.push(itemId);
  });

  coins = profile.coins;
  updateCoinDisplay();
  soundEnabled = profile.soundEnabled;
  updateSoundToggleDisplay();
}

// This saves the current player's progress back into their profile.
function saveProgress() {
  // Guest mode progress stays only in memory, so it is not saved to localStorage.
  if (isGuestMode || selectedProfileIndex === null) {
    return;
  }

  // JSON.stringify turns the profile array into text for localStorage.
  profiles[selectedProfileIndex] = {
    name: profiles[selectedProfileIndex].name,
    avatar: profiles[selectedProfileIndex].avatar,
    soundEnabled: soundEnabled,
    coins: coins,
    masterCountries: masterCountries.slice(),
    masterCountryData: masterCountryData.slice(),
    countryStatuses: Object.assign({}, countryStatuses),
    correctAnswerCounts: Object.assign({}, correctAnswerCounts),
    masteredCountries: masteredCountries.slice(),
    passportStamps: passportStamps.slice(),
    storePurchases: storePurchases.slice()
  };

  saveProfilesToStorage();
}

// This displays the landmark choices as tappable avatar cards.
function showLandmarkChoices(selectedAvatarId) {
  avatarGrid.innerHTML = "";

  landmarkOptions.forEach(function (landmark) {
    const avatarCard = document.createElement("button");
    avatarCard.classList.add("avatar-card");
    avatarCard.type = "button";

    if (landmark.id === selectedAvatarId) {
      avatarCard.classList.add("selected");
    }

    const avatarImage = document.createElement("img");
    avatarImage.classList.add("avatar-image");
    // Each card uses the local SVG path from landmarkOptions, so no internet image request is needed.
    avatarImage.src = landmark.image;
    avatarImage.alt = landmark.name;
    avatarImage.loading = "lazy";

    const avatarName = document.createElement("span");
    avatarName.classList.add("avatar-name");
    avatarName.textContent = landmark.name;

    avatarCard.appendChild(avatarImage);
    avatarCard.appendChild(avatarName);

    avatarCard.addEventListener("click", function () {
      chooseLandmarkAvatar(landmark.id);
    });

    avatarGrid.appendChild(avatarCard);
  });
}

// This opens the landmark avatar screen for a new profile or profile settings.
function showAvatarSelection(mode, selectedAvatarId) {
  avatarSelectionMode = mode;
  homeOptionsView.classList.add("hidden");
  existingProfileSection.classList.add("hidden");
  makeProfileSection.classList.add("hidden");
  avatarSection.classList.remove("hidden");
  avatarMessage.textContent = "";
  profileSection.classList.remove("hidden");
  gameSection.classList.add("hidden");
  soundToggleButton.classList.add("hidden");
  storeButton.classList.add("hidden");
  worldMapButton.classList.add("hidden");

  showLandmarkChoices(selectedAvatarId || defaultAvatarId);
}

// This saves the selected landmark id with the profile.
function chooseLandmarkAvatar(avatarId) {
  if (avatarSelectionMode === "create") {
    profiles[pendingProfileIndex] = createEmptyProfile(pendingProfileName);
    profiles[pendingProfileIndex].avatar = avatarId;
    saveProfilesToStorage();
    selectProfile(pendingProfileIndex);
    pendingProfileName = "";
    pendingProfileIndex = null;
    return;
  }

  if (avatarSelectionMode === "settings" && selectedProfileIndex !== null) {
    profiles[selectedProfileIndex].avatar = avatarId;
    saveProgress();
    returnToGameFromAvatarSettings();
  }
}

// This returns from avatar settings without resetting the current game view.
function returnToGameFromAvatarSettings() {
  avatarSection.classList.add("hidden");
  profileSection.classList.add("hidden");
  gameSection.classList.remove("hidden");
  soundToggleButton.classList.remove("hidden");
  storeButton.classList.remove("hidden");
  worldMapButton.classList.remove("hidden");
  updateProfileAvatarDisplay();
}

// This handles the Back button on the avatar screen.
function goBackFromAvatarSelection() {
  avatarSection.classList.add("hidden");

  if (avatarSelectionMode === "create") {
    homeOptionsView.classList.add("hidden");
    makeProfileSection.classList.remove("hidden");
    profileNameInput.value = pendingProfileName;
    return;
  }

  returnToGameFromAvatarSettings();
}

// This updates the profile badge when a saved profile is loaded again later.
function updateProfileAvatarDisplay() {
  if (isGuestMode || selectedProfileIndex === null) {
    profileSettingsButton.classList.add("hidden");
    profileAvatarDisplay.innerHTML = "";
    profileNameDisplay.textContent = "";
    return;
  }

  const currentProfile = profiles[selectedProfileIndex];
  const landmark = findLandmarkAvatar(currentProfile.avatar);

  profileAvatarDisplay.innerHTML = "";

  const avatarImage = document.createElement("img");
  avatarImage.src = landmark.image;
  avatarImage.alt = landmark.name;

  profileAvatarDisplay.appendChild(avatarImage);
  profileNameDisplay.textContent = currentProfile.name;
  profileSettingsButton.classList.remove("hidden");
}

// This opens the custom confirmation dialog before deleting anything.
function openDeleteProfileDialog(profileIndex) {
  const profile = profiles[profileIndex];

  if (!profileExists(profile)) {
    return;
  }

  profileIndexToDelete = profileIndex;
  deleteProfileName.textContent = "Profile: " + profile.name;
  deleteProfileDialog.classList.remove("hidden");
}

// This closes the confirmation dialog and keeps the profile safe.
function cancelDeleteProfile() {
  profileIndexToDelete = null;
  deleteProfileDialog.classList.add("hidden");
}

// This deletes one profile's saved data after the user confirms.
function deleteConfirmedProfile() {
  if (profileIndexToDelete === null) {
    return;
  }

  // Replacing the profile with an empty one removes coins, learned countries,
  // progress, achievements, avatar choice, and all saved profile data.
  profiles[profileIndexToDelete] = createEmptyProfile("");
  saveProfilesToStorage();

  profileIndexToDelete = null;

  // Redraw the profile list immediately so the deleted profile disappears.
  showExistingProfiles();
}

// This returns the welcome screen to its three main buttons.
function showWelcomeOptions() {
  // The main home screen is the welcome title, helper text, and three option buttons.
  // Showing it again replaces any profile sub-screen.
  homeOptionsView.classList.remove("hidden");
  aboutCreatorSignature.classList.add("hidden");
  aboutSection.classList.add("hidden");
  existingProfileSection.classList.add("hidden");
  makeProfileSection.classList.add("hidden");
  avatarSection.classList.add("hidden");
  deleteProfileDialog.classList.add("hidden");
  profileIndexToDelete = null;
  createProfileMessage.textContent = "";
}

// This shows app information from the first welcome screen.
function showAboutScreen() {
  showWelcomeOptions();
  homeOptionsView.classList.add("hidden");
  aboutCreatorSignature.classList.remove("hidden");
  aboutSection.classList.remove("hidden");
}

// This shows saved profiles so the player can load one.
function showExistingProfiles() {
  showWelcomeOptions();

  // Hide the main home screen so the profile list replaces it in the same card area.
  homeOptionsView.classList.add("hidden");
  existingProfileList.innerHTML = "";

  const existingProfiles = profiles
    .map(function (profile, index) {
      return {
        profile: profile,
        index: index
      };
    })
    .filter(function (item) {
      return profileExists(item.profile);
    });

  if (existingProfiles.length === 0) {
    noProfilesMessage.classList.remove("hidden");
  } else {
    noProfilesMessage.classList.add("hidden");
  }

  existingProfiles.forEach(function (item) {
    const landmark = findLandmarkAvatar(item.profile.avatar);
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");

    const selectProfileButton = document.createElement("button");
    selectProfileButton.classList.add("profile-select-button");
    selectProfileButton.type = "button";

    const avatarImage = document.createElement("img");
    avatarImage.classList.add("profile-card-avatar");
    avatarImage.src = landmark.image;
    avatarImage.alt = landmark.name;
    avatarImage.loading = "lazy";

    const profileName = document.createElement("span");
    profileName.textContent = item.profile.name;

    selectProfileButton.appendChild(avatarImage);
    selectProfileButton.appendChild(profileName);

    // Clicking a saved profile loads only that profile's saved data.
    selectProfileButton.addEventListener("click", function () {
      selectProfile(item.index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("profile-delete-button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    // Delete does not remove data right away; it opens the confirmation dialog first.
    deleteButton.addEventListener("click", function () {
      openDeleteProfileDialog(item.index);
    });

    profileCard.appendChild(selectProfileButton);
    profileCard.appendChild(deleteButton);
    existingProfileList.appendChild(profileCard);
  });

  // This makes the "Choose Your Profile" screen appear as its own view.
  existingProfileSection.classList.remove("hidden");
}

// This opens the simple form for making a new profile.
function showMakeProfileForm() {
  showWelcomeOptions();
  homeOptionsView.classList.add("hidden");
  profileNameInput.value = "";
  createProfileMessage.textContent = "";
  makeProfileSection.classList.remove("hidden");
  profileNameInput.focus();
}

// This creates a new named profile and saves it in localStorage.
function createProfile() {
  const profileName = profileNameInput.value.trim();

  if (profileName === "") {
    createProfileMessage.textContent = "Please enter a profile name.";
    return;
  }

  // Before creating a profile, check the saved names with spaces and capital letters ignored.
  // This means "Sia", "sia", and " Sia " all count as the same profile name.
  if (profileNameAlreadyExists(profileName)) {
    createProfileMessage.textContent = "A profile with this name already exists. Please choose a different name.";
    return;
  }

  const emptyProfileIndex = profiles.findIndex(function (profile) {
    return !profileExists(profile);
  });

  if (emptyProfileIndex === -1) {
    createProfileMessage.textContent = "You already have 5 profiles.";
    return;
  }

  pendingProfileName = profileName;
  pendingProfileIndex = emptyProfileIndex;
  showAvatarSelection("create", defaultAvatarId);
}

// Guest mode starts with empty progress and does not save to localStorage.
function startGuestMode() {
  selectedProfileIndex = null;
  isGuestMode = true;
  clearCurrentProfileData();
  showGameForSelectedProfile();
}

// This shows the game after a profile has been chosen.
function showGameForSelectedProfile() {
  profileSection.classList.add("hidden");
  gameSection.classList.remove("hidden");

  welcomeMessage.classList.remove("hidden");
  learningSection.classList.add("hidden");
  previousCountriesSection.classList.add("hidden");
  masterListSection.classList.add("hidden");
  practiceSection.classList.add("hidden");
  storeSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");

  countryList.innerHTML = "";
  answerChoices.innerHTML = "";
  practiceQuestion.textContent = "";
  practiceFeedback.textContent = "";
  loadingMessage.classList.add("hidden");
  errorMessage.classList.add("hidden");
  nextQuestionButton.classList.add("hidden");
  newCountriesModeSection.classList.add("hidden");
  quizCurrentFlashcardsButton.classList.add("hidden");
  continentPicker.classList.remove("hidden");
  newCountriesSelectionPool = [];
  newCountriesQuizPool = [];
  currentNewCountriesQuizItem = null;
  activePracticeQuestionMode = "previousCountries";

  selectedContinent = "";
  updateActiveContinentButton(selectedContinent);
  updateCoinDisplay();
  updateSoundToggleDisplay();
  practiceButtonMode = "newCountries";
  previousCountriesButtonMode = "openPreviousCountries";
  updateProfileActionButtons();
  updateProfileAvatarDisplay();

  // The two profile home buttons stay visible and aligned.
  // Previous Countries shows "(0)" when this profile has not learned countries yet.
  masterListButton.classList.remove("hidden");
  practiceButton.classList.remove("hidden");
  soundToggleButton.classList.remove("hidden");
  storeButton.classList.remove("hidden");
  worldMapButton.classList.remove("hidden");
  profileHomeBackButton.classList.remove("hidden");
}

// This returns from the profile home screen to the first profile choices.
// It hides the game screen and shows Existing Profile, New Profile, and Guest Player again.
function returnToProfileChoices() {
  gameSection.classList.add("hidden");
  profileSection.classList.remove("hidden");
  profileHomeBackButton.classList.add("hidden");
  soundToggleButton.classList.add("hidden");
  storeButton.classList.add("hidden");
  worldMapButton.classList.add("hidden");
  showWelcomeOptions();
}

// This chooses one saved profile and loads only that profile's data.
function selectProfile(profileIndex) {
  selectedProfileIndex = profileIndex;
  loadSelectedProfile(selectedProfileIndex);
  showGameForSelectedProfile();
}

// This validates one countries.json record and keeps the shape the game already uses.
function normalizeCountryRecord(country) {
  const countryName = typeof country.country === "string" ? country.country.trim() : "";
  const capital = typeof country.capital === "string" ? country.capital.trim() : "";
  const continent = typeof country.continent === "string" ? country.continent.trim() : "";

  if (!countryName || !capital || !continent) {
    return null;
  }

  return {
    country: countryName,
    capital: capital,
    continent: continent
  };
}

// This keeps country records sorted and removes entries without the fields the app needs.
function normalizeCountryRecords(countries) {
  return countries
    .map(function (country) {
      return normalizeCountryRecord(country);
    })
    .filter(function (country) {
      return country !== null;
    })
    .sort(function (firstCountry, secondCountry) {
      return firstCountry.country.localeCompare(secondCountry.country);
    });
}

// This loads countries.json from the app bundle, keeping country learning offline-friendly.
// The local file is permanent source of truth because app-store builds cannot depend on a live country API.
async function loadLocalCountryData() {
  if (localCountryData !== null) {
    return localCountryData;
  }

  if (localCountryDataLoadPromise !== null) {
    return localCountryDataLoadPromise;
  }

  localCountryDataLoadPromise = fetch(localCountryDataUrl)
    .then(async function (response) {
      if (!response.ok) {
        throw new Error("Could not load local country data.");
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Local country data is not an array.");
      }

      const normalizedData = normalizeCountryRecords(data);

      if (normalizedData.length === 0) {
        throw new Error("Local country data is empty.");
      }

      localCountryData = normalizedData;
      return localCountryData;
    })
    .catch(function (error) {
      // If the local JSON load fails, clear the promise so a later retry can try again.
      localCountryDataLoadPromise = null;
      throw error;
    });

  return localCountryDataLoadPromise;
}

// Continent filtering now reads the continent field that is stored directly in countries.json.
function getCountriesForContinent(countries, continentName) {
  return countries.filter(function (country) {
    return country.continent === continentName;
  });
}

// Country loading uses only local JSON, so the app works with no internet connection.
async function loadCountriesForContinent(continentName) {
  // If the continent was already fetched, use the saved copy.
  if (countryDataByContinent[continentName]) {
    countryCapitalList = countryDataByContinent[continentName];
    return countryCapitalList;
  }

  try {
    const localCountries = await loadLocalCountryData();
    const filteredLocalCountries = getCountriesForContinent(localCountries, continentName);

    if (filteredLocalCountries.length === 0) {
      throw new Error("Local country data did not include " + continentName + ".");
    }

    countryDataByContinent[continentName] = filteredLocalCountries;
    countryCapitalList = filteredLocalCountries;
    return countryCapitalList;
  } catch (error) {
    // If countries.json cannot load or does not include this continent, callers show a friendly message.
    throw new Error(countryDataLoadErrorMessage);
  }
}

// This checks whether the player chose the special mixed country set.
function isMixAndMatchSelection(selectionName) {
  return selectionName === mixAndMatchOptionName;
}

// Mix and Match loads countries from every configured continent by reusing the same
// local-JSON-first loader, then combines those continent lists into one array.
async function loadCountriesForMixAndMatch() {
  const countryGroups = await Promise.all(continentSettings.map(function (setting) {
    return loadCountriesForContinent(setting.name);
  }));

  const combinedCountries = [];

  countryGroups.forEach(function (countries) {
    countries.forEach(function (country) {
      combinedCountries.push(country);
    });
  });

  countryCapitalList = combinedCountries;
  return combinedCountries;
}

// Shuffle an array so items appear in a random order.
function shuffleArray(array) {
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}

// Choose 5 countries from the selected continent array.
function chooseFiveCountries(countries) {
  // slice() makes a copy, so the original local data stays safe.
  const shuffledCountries = shuffleArray(countries.slice());

  // slice(0, 5) picks the first 5 countries from the shuffled copy.
  return shuffledCountries.slice(0, 5);
}

// Keep only countries that are not already in the player's learned list.
// This prevents the New Countries page from showing duplicate countries.
function getNewCountriesOnly(countries) {
  return countries.filter(function (item) {
    return !masterCountries.includes(item.country);
  });
}

// This loads the selected set for the 2-step Practice New Countries flow.
// Mix and Match uses every continent; continent choices use only the matching countries.json continent.
async function loadCountriesForPracticeSelection(selectionName) {
  if (isMixAndMatchSelection(selectionName)) {
    return loadCountriesForMixAndMatch();
  }

  return loadCountriesForContinent(selectionName);
}

// After the player picks Mix and Match or a continent, this shows the second step: Quiz or Flash Cards.
function showNewCountriesModeChoice(selectionName, countries) {
  newCountriesSelectionPool = countries.slice();
  countriesToLearn = [];
  countryList.innerHTML = "";
  selectedCountryCards.length = 0;
  quizCurrentFlashcardsButton.classList.add("hidden");
  continentPicker.classList.add("hidden");
  newCountriesSelectionLabel.textContent = selectionName + " selected";
  newCountriesModeSection.classList.remove("hidden");
}

// This builds multiple-choice answers from the selected New Countries quiz set.
function buildAnswerChoicesFromCountryItems(countryItems, correctCapital) {
  const capitals = countryItems
    .map(function (item) {
      return item.capital;
    })
    .filter(function (capital, index, allCapitals) {
      return capital !== "" && allCapitals.indexOf(capital) === index;
    });

  const wrongCapitals = capitals.filter(function (capital) {
    return capital !== correctCapital;
  });

  const choices = shuffleArray(wrongCapitals).slice(0, 3);
  choices.push(correctCapital);
  return shuffleArray(choices);
}

// Flash Cards mode shows 5 countries from the selected set and keeps them for Quiz Me.
function startNewCountriesFlashCardsMode() {
  if (newCountriesSelectionPool.length === 0) {
    errorMessage.textContent = "No new countries are available for this choice yet.";
    errorMessage.classList.remove("hidden");
    return;
  }

  newCountriesModeSection.classList.add("hidden");
  errorMessage.classList.add("hidden");

  // The 5-card set is saved in countriesToLearn so Quiz Me can use exactly these flash cards.
  countriesToLearn = chooseFiveCountries(newCountriesSelectionPool);
  showFlashcards(countriesToLearn);
  quizCurrentFlashcardsButton.classList.remove("hidden");
}

// Quiz Me starts from the exact 5-card flashcard set that is currently on screen.
function startQuizFromCurrentFlashCards() {
  if (countriesToLearn.length === 0) {
    return;
  }

  startNewCountriesQuiz(countriesToLearn);
}

// Quiz mode uses the selected Mix and Match or continent set and asks one country at a time.
function startNewCountriesQuiz(countries) {
  activePracticeQuestionMode = "newCountries";
  newCountriesQuizPool = countries.slice();
  currentNewCountriesQuizItem = null;

  welcomeMessage.classList.add("hidden");
  learningSection.classList.add("hidden");
  previousCountriesSection.classList.add("hidden");
  masterListSection.classList.add("hidden");
  storeSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");
  profileHomeBackButton.classList.add("hidden");
  practiceSection.classList.remove("hidden");
  updateCoinDisplay();
  answerChoices.innerHTML = "";
  practiceFeedback.textContent = "";
  nextQuestionButton.classList.add("hidden");

  showNewCountriesQuizQuestion();
}

// This shows one New Countries Quiz question from the selected country set.
function showNewCountriesQuizQuestion() {
  if (newCountriesQuizPool.length === 0) {
    currentNewCountriesQuizItem = null;
    practiceQuestion.textContent = "Nice! You finished this quiz.";
    answerChoices.innerHTML = "";
    practiceFeedback.textContent = "";
    nextQuestionButton.classList.add("hidden");
    return;
  }

  currentNewCountriesQuizItem = pickRandomItem(newCountriesQuizPool);

  const correctCapital = currentNewCountriesQuizItem.capital;
  const choices = buildAnswerChoicesFromCountryItems(newCountriesQuizPool, correctCapital);

  practiceQuestion.textContent = "What is the capital of " + currentNewCountriesQuizItem.country + "?";
  practiceFeedback.textContent = "";
  answerChoices.innerHTML = "";
  nextQuestionButton.classList.add("hidden");

  choices.forEach(function (choice) {
    const choiceButton = document.createElement("button");
    choiceButton.classList.add("choice-button");
    choiceButton.type = "button";
    choiceButton.textContent = choice;

    choiceButton.addEventListener("click", function () {
      checkNewCountriesQuizAnswer(choice, correctCapital);
    });

    answerChoices.appendChild(choiceButton);
  });
}

// Correct New Countries Quiz answers add that country to the learned countries list.
function checkNewCountriesQuizAnswer(selectedCapital, correctCapital) {
  const choiceButtons = document.querySelectorAll(".choice-button");

  choiceButtons.forEach(function (button) {
    button.disabled = true;
  });

  if (selectedCapital === correctCapital) {
    playCorrectAnswerEffects();
    addCountryToMasterList(currentNewCountriesQuizItem);

    newCountriesQuizPool = newCountriesQuizPool.filter(function (item) {
      return item.country !== currentNewCountriesQuizItem.country;
    });

    practiceFeedback.textContent = "Correct! " + currentNewCountriesQuizItem.country + " was added to your learned countries.";
  } else {
    playWrongAnswerEffects();
    practiceFeedback.textContent = "Not quite. The correct answer is " + correctCapital + ".";
  }

  nextQuestionButton.classList.remove("hidden");
}

// Add or remove the selected state for one country card.
function toggleCountryCardSelection(flashcard, countryName) {
  const selectedIndex = selectedCountryCards.indexOf(countryName);

  // If the country name is not in the array yet, add it and show the checkmark.
  if (selectedIndex === -1) {
    selectedCountryCards.push(countryName);
    flashcard.classList.add("selected");
    flashcard.setAttribute("aria-pressed", "true");
  } else {
    // If the country name is already in the array, remove it and hide the checkmark.
    selectedCountryCards.splice(selectedIndex, 1);
    flashcard.classList.remove("selected");
    flashcard.setAttribute("aria-pressed", "false");
  }
}

// Add the flip behavior to one flashcard.
function addFlashcardFlip(flashcard, item) {
  const countryName = item.country;

  flashcard.addEventListener("click", function () {
    const isSelected = flashcard.classList.contains("selected");
    const isFlipped = flashcard.classList.contains("flipped");

    // If the selected card is showing the capital, flip back to the country side.
    // The country stays selected, so its checkmark returns on the country face.
    if (isSelected && isFlipped) {
      flashcard.classList.remove("flipped");
      return;
    }

    // If the selected country side is clicked, deselect that country card.
    if (isSelected) {
      toggleCountryCardSelection(flashcard, countryName);
      return;
    }

    // This flips the card to show the capital city.
    // CSS uses the "flipped" class to turn the card around.
    flashcard.classList.add("flipped");

    // A country is saved only after the player actually flips its card.
    // Showing the card on the screen is not the same as learning it.
    addCountryToMasterList(item);

    // This tracks whether the country card is selected by its country name.
    // The checkmark is inside the country side, so it stays attached to that country card.
    toggleCountryCardSelection(flashcard, countryName);
  });
}

// Show 5 country-capital flashcards on the page.
function showFlashcards(countries) {
  countryList.innerHTML = "";
  selectedCountryCards.length = 0;

  countries.forEach(function (item) {
    const flashcard = document.createElement("button");
    flashcard.classList.add("flashcard");
    flashcard.type = "button";
    flashcard.setAttribute("aria-pressed", "false");

    const flashcardInner = document.createElement("span");
    flashcardInner.classList.add("flashcard-inner");

    const flashcardFront = document.createElement("span");
    flashcardFront.classList.add("flashcard-front");
    flashcardFront.textContent = item.country;

    const flashcardBack = document.createElement("span");
    flashcardBack.classList.add("flashcard-back");
    flashcardBack.textContent = item.capital;

    const checkmark = document.createElement("span");
    checkmark.classList.add("flashcard-checkmark");
    checkmark.textContent = "✅";
    checkmark.setAttribute("aria-hidden", "true");

    // The checkmark is added to the front side with the country name.
    // It is not added to the capital side, so it does not move to the capital text.
    flashcardFront.appendChild(checkmark);
    flashcardInner.appendChild(flashcardFront);
    flashcardInner.appendChild(flashcardBack);
    flashcard.appendChild(flashcardInner);
    countryList.appendChild(flashcard);

    addFlashcardFlip(flashcard, item);
  });
}

// Add one country-capital pair to the learned country data.
function addCountryDataToMaster(item) {
  const savedItem = masterCountryData.find(function (countryData) {
    return countryData.country === item.country;
  });

  if (savedItem) {
    savedItem.capital = item.capital;
  } else {
    masterCountryData.push({
      country: item.country,
      capital: item.capital
    });
  }
}

// Get the status icon for one country.
function getCountryStatusIcon(country) {
  // countryStatuses stores only one value per country.
  // Practice Mode replaces that value after every answer, so this is the latest result.
  if (countryStatuses[country] === "correct") {
    return "\u2705";
  }

  if (countryStatuses[country] === "incorrect") {
    return "\u274C";
  }

  return "";
}

// Add flip behavior to one Master List card.
function addMasterListCardFlip(card) {
  card.addEventListener("click", function () {
    // Tapping toggles the "flipped" class, so the player can review back and forth.
    card.classList.toggle("flipped");
  });
}

// This reads how many correct answers one country has.
function getCorrectAnswerCount(country) {
  return Number(correctAnswerCounts[country]) || 0;
}

// This adds one Quiz Mode correct answer to the country being practiced.
// When the count reaches 1, the country is considered mastered.
function increaseCorrectAnswerCount(country) {
  correctAnswerCounts[country] = getCorrectAnswerCount(country) + 1;
  return correctAnswerCounts[country];
}

// Mastery is calculated from the saved Quiz Mode correct-answer count.
// The masteredCountries array records the reward, but the count is the source of truth.
function isCountryMastered(country) {
  return getCorrectAnswerCount(country) >= masteryAnswerGoal;
}

// This marks a country as mastered one time.
function markCountryAsMastered(country) {
  if (!masteredCountries.includes(country)) {
    masteredCountries.push(country);
  }
}

// This adds a passport stamp one time for the mastered country.
function addPassportStamp(country) {
  if (!passportStamps.includes(country)) {
    passportStamps.push(country);
  }
}

// This creates a tiny sound using the browser, so no audio file is needed.
function playStampThumpEffect() {
  try {
    if (typeof window === "undefined") {
      return;
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) {
      return;
    }

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(110, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(48, audioContext.currentTime + 0.16);
    gain.gain.setValueAtTime(0.18, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.18);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.18);
  } catch (error) {
    // If the browser blocks sound, the visual THUMP still shows.
  }
}

// This builds a small burst of confetti pieces for the stamp celebration.
function createCelebrationConfetti() {
  const confettiColors = ["#2563eb", "#14b8a6", "#facc15", "#fb7185", "#22c55e"];

  celebrationConfetti.innerHTML = "";

  for (let index = 0; index < 14; index = index + 1) {
    const confettiPiece = document.createElement("span");
    confettiPiece.classList.add("confetti-piece");
    confettiPiece.style.backgroundColor = confettiColors[index % confettiColors.length];
    confettiPiece.style.setProperty("--confetti-x", (Math.random() * 150 - 75) + "px");
    confettiPiece.style.setProperty("--confetti-y", (Math.random() * -95 - 20) + "px");
    celebrationConfetti.appendChild(confettiPiece);
  }
}

// This shows the passport book, dropping stamp, THUMP text, and confetti.
function showMasteryCelebration(country) {
  earnedStampCountry.textContent = country;
  createCelebrationConfetti();

  if (masteryCelebrationTimer !== null) {
    clearTimeout(masteryCelebrationTimer);
  }

  masteryCelebration.classList.add("hidden");
  masteryCelebration.offsetWidth;
  masteryCelebration.classList.remove("hidden");
  playStampThumpEffect();

  masteryCelebrationTimer = setTimeout(function () {
    masteryCelebration.classList.add("hidden");
  }, masteryCelebrationDuration);
}

// This handles the special reward when a country becomes mastered.
function celebrateNewMastery(country) {
  // The country is now marked as mastered for the player's saved progress.
  markCountryAsMastered(country);

  // A passport stamp is saved with this profile.
  addPassportStamp(country);

  // The player gets 5 bonus coins only once for this country.
  coins = coins + masteryBonusCoins;
  updateCoinDisplay();

  showMasteryCelebration(country);
}

// This opens the learning screen from the profile home actions.
// The New Countries button uses this function to load a fresh set of countries.
function showNewCountries() {
  if (selectedProfileIndex === null && !isGuestMode) {
    return;
  }

  // This screen is the continent selection page, so the bottom button becomes Back.
  // Back returns to the previous page: the main profile page with both practice buttons.
  practiceButtonMode = "backToProfile";
  updateProfileActionButtons();

  // Opening the New Countries page starts with no continent selected.
  // The player chooses a continent before countries are shown.
  selectedContinent = "";
  newCountriesSelectionPool = [];
  newCountriesQuizPool = [];
  currentNewCountriesQuizItem = null;
  updateActiveContinentButton(selectedContinent);

  welcomeMessage.classList.add("hidden");
  previousCountriesSection.classList.add("hidden");
  masterListSection.classList.add("hidden");
  practiceSection.classList.add("hidden");
  storeSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");
  profileHomeBackButton.classList.add("hidden");
  learningSection.classList.remove("hidden");
  continentPicker.classList.remove("hidden");
  newCountriesModeSection.classList.add("hidden");
  quizCurrentFlashcardsButton.classList.add("hidden");
  loadingMessage.classList.add("hidden");
  errorMessage.classList.add("hidden");
  countryList.innerHTML = "";
}

// This Back button returns from New Countries screens to the previous main profile page.
// showGameForSelectedProfile() rebuilds that page and does not go back to profile selection.
// Practice Previous Countries is not changed here, so its label and flow stay the same.
function returnToProfilePageFromNewCountries() {
  practiceButtonMode = "newCountries";
  showGameForSelectedProfile();
}

// This Back button returns from the Previous Countries menu to the profile home screen.
// It replaces Practice Previous Countries on that page because the player is already there.
function returnToProfilePageFromPreviousCountries() {
  previousCountriesButtonMode = "openPreviousCountries";
  showGameForSelectedProfile();
}

// This Back button returns from the Practice Mode question screen to the Previous Countries menu.
// The quiz screen replaces Practice Previous Countries with Back because the player is already practicing.
function returnToPreviousCountriesMenuFromPractice() {
  showPreviousCountriesMenu();
}

// Show the Previous Countries menu instead of opening the full Master List right away.
function showPreviousCountriesMenu() {
  welcomeMessage.classList.add("hidden");
  learningSection.classList.add("hidden");
  masterListSection.classList.add("hidden");
  practiceSection.classList.add("hidden");
  storeSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");
  profileHomeBackButton.classList.add("hidden");

  practiceButtonMode = "newCountries";
  // The Previous Countries page uses the top button for navigation instead of reopening itself.
  previousCountriesButtonMode = "backToProfile";
  updateProfileActionButtons();

  previousCountriesSection.classList.remove("hidden");
}

// Show Me The List uses the existing Master List renderer.
function showLearnedCountriesList() {
  // The list displays the latest status from countryStatuses for each country.
  // Since updateCountryStatus() overwrites old values, the icon is always the most recent answer.
  previousCountriesButtonMode = "openPreviousCountries";
  updateProfileActionButtons();
  showMasterList();
}

// Quiz Me starts the existing Practice Mode immediately.
function startLearnedCountriesQuiz() {
  // Practice Mode already uses only countries from masterCountries.
  // That keeps the quiz focused on countries the player has learned before.
  // The quiz screen uses the top button as Back so it returns to this Previous Countries menu.
  previousCountriesButtonMode = "backToPreviousMenu";
  updateProfileActionButtons();
  startPracticeMode();
}

// Show the flashcard learning view.
function showLearningView() {
  // This hides the Master List so the learning screen replaces it.
  previousCountriesSection.classList.add("hidden");
  masterListSection.classList.add("hidden");
  practiceSection.classList.add("hidden");
  storeSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");
  profileHomeBackButton.classList.add("hidden");

  // This shows the flashcard learning area again.
  welcomeMessage.classList.add("hidden");
  learningSection.classList.remove("hidden");

  // If there are no flashcards yet, load only after a continent has been selected.
  if (countryList.children.length === 0 && selectedContinent !== "") {
    showContinentCountries(selectedContinent);
  }
}

// Show the Master List view.
function showMasterListView() {
  // This makes the Master List replace the flashcard learning screen.
  welcomeMessage.classList.add("hidden");
  learningSection.classList.add("hidden");
  previousCountriesSection.classList.add("hidden");
  practiceSection.classList.add("hidden");
  storeSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");
  profileHomeBackButton.classList.add("hidden");

  masterListSection.classList.remove("hidden");
}

// Update a country's latest correct/incorrect status.
function updateCountryStatus(country, status) {
  // The countryStatuses object stores the most recent answer result.
  // If a country was incorrect before, setting it to correct replaces the old status.
  countryStatuses[country] = status;

  // Save the new status so it stays after refresh.
  saveProgress();

  // If the Master List is open, refresh it so the icon changes right away.
  if (!masterListSection.classList.contains("hidden")) {
    showMasterList();
  }
}

// Add one interacted-with country to the Master List without adding duplicates.
function addCountryToMasterList(item) {
  // This runs after a flashcard is flipped or a New Countries Quiz answer is correct.
  // Just displaying a card or question does not save it as learned.
  if (!masterCountries.includes(item.country)) {
    // The country name gets added here after the player interacts with it.
    masterCountries.push(item.country);
  }

  // Save the capital too, so the Master List flashcard can show it on the back.
  addCountryDataToMaster(item);

  // Refresh the Previous Countries button so the number in parentheses is current.
  updateProfileActionButtons();

  // Save the updated Master List in localStorage.
  saveProgress();
}

// Show the master list on the page.
function showMasterList() {
  // Clear the list first so it does not repeat items on the page.
  masterList.innerHTML = "";

  // Sort a copy of the Master List by country name before showing it.
  // slice() keeps the saved Master List data unchanged.
  const sortedMasterCountries = masterCountries.slice().sort(function (countryA, countryB) {
    return countryA.localeCompare(countryB);
  });

  // Sorting is applied every time showMasterList() runs, so the display stays A to Z.
  // Create one flip card for each country in the sorted display list.
  sortedMasterCountries.forEach(function (country) {
    const listItem = document.createElement("li");

    const card = document.createElement("button");
    card.classList.add("master-flashcard");
    card.type = "button";

    const cardInner = document.createElement("span");
    cardInner.classList.add("master-flashcard-inner");

    const cardFront = document.createElement("span");
    cardFront.classList.add("master-flashcard-front");
    // The country name is stored on the front side of the card.
    cardFront.textContent = country;

    const cardBack = document.createElement("span");
    cardBack.classList.add("master-flashcard-back");
    // The saved capital is stored on the back side of the same country card.
    cardBack.textContent = findCapital(country) || "Capital not saved yet";

    const statusIcon = document.createElement("span");
    statusIcon.classList.add("country-status");
    // getCountryStatusIcon() checks the most recent correct/incorrect answer.
    statusIcon.textContent = getCountryStatusIcon(country);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    // The status icon is attached to the card itself, outside the flipping sides.
    // That keeps ✅ or ❌ visible when the card flips to the capital.
    card.appendChild(statusIcon);
    listItem.appendChild(card);
    masterList.appendChild(listItem);

    addMasterListCardFlip(card);
  });

  // Switch views so the Master List replaces the learning screen.
  showMasterListView();
}

// Find the capital for a country name.
function findCapital(countryName) {
  const savedCountryInfo = masterCountryData.find(function (item) {
    return item.country === countryName;
  });

  if (savedCountryInfo) {
    return savedCountryInfo.capital;
  }

  const countryInfo = countryCapitalList.find(function (item) {
    return item.country === countryName;
  });

  if (countryInfo) {
    return countryInfo.capital;
  }

  return "";
}

// Pick a random item from an array.
function pickRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Build multiple-choice answers for the current country.
function buildAnswerChoices(correctCapital) {
  // Practice Mode uses countries from the Master List.
  // First, get the capitals for those learned countries.
  const learnedCapitals = masterCountries
    .map(function (country) {
      return findCapital(country);
    })
    .filter(function (capital) {
      return capital !== "";
    });

  // Remove the correct answer from the wrong answer choices.
  const wrongCapitals = learnedCapitals.filter(function (capital) {
    return capital !== correctCapital;
  });

  // Pick up to 3 wrong answers, then add the correct answer.
  const choices = shuffleArray(wrongCapitals).slice(0, 3);
  choices.push(correctCapital);

  // Shuffle again so the correct answer is not always last.
  return shuffleArray(choices);
}

// Show one Practice Mode question.
function showPracticeQuestion() {
  // Pick a country from the Master List array.
  const practiceCountries = masterCountries.filter(function (country) {
    return findCapital(country) !== "";
  });

  if (practiceCountries.length === 0) {
    practiceQuestion.textContent = "Start learning countries first.";
    answerChoices.innerHTML = "";
    practiceFeedback.textContent = "";
    nextQuestionButton.classList.add("hidden");
    return;
  }

  currentPracticeCountry = pickRandomItem(practiceCountries);

  const correctCapital = findCapital(currentPracticeCountry);
  const choices = buildAnswerChoices(correctCapital);

  practiceQuestion.textContent = "What is the capital of " + currentPracticeCountry + "?";
  practiceFeedback.textContent = "";
  answerChoices.innerHTML = "";
  nextQuestionButton.classList.add("hidden");

  choices.forEach(function (choice) {
    const choiceButton = document.createElement("button");
    choiceButton.classList.add("choice-button");
    choiceButton.type = "button";
    choiceButton.textContent = choice;

    choiceButton.addEventListener("click", function () {
      checkPracticeAnswer(choice, correctCapital);
    });

    answerChoices.appendChild(choiceButton);
  });
}

// Check the answer the user clicked.
function checkPracticeAnswer(selectedCapital, correctCapital) {
  const choiceButtons = document.querySelectorAll(".choice-button");

  choiceButtons.forEach(function (button) {
    button.disabled = true;
  });

  if (selectedCapital === correctCapital) {
    playCorrectAnswerEffects();

    // Add 1 coin when the answer is correct.
    const answerCoinReward = 1;
    coins = coins + answerCoinReward;
    updateCoinDisplay();

    const wasAlreadyMastered = isCountryMastered(currentPracticeCountry);

    // This Quiz Mode correct answer adds 1 to the country's saved count.
    // Because masteryAnswerGoal is 1, this can master the country immediately.
    increaseCorrectAnswerCount(currentPracticeCountry);

    // The mastery display updates after the correct answer by saving a stamp,
    // bonus coins, and the mastered country when this answer reaches the goal.
    if (!wasAlreadyMastered && isCountryMastered(currentPracticeCountry)) {
      celebrateNewMastery(currentPracticeCountry);
    }

    // Save this country as correct for the Master List status.
    updateCountryStatus(currentPracticeCountry, "correct");

    practiceFeedback.textContent = "Correct! You earned " + answerCoinReward + (answerCoinReward === 1 ? " coin." : " coins.");
  } else {
    playWrongAnswerEffects();

    // Save this country as incorrect for the Master List status.
    updateCountryStatus(currentPracticeCountry, "incorrect");

    // Show the correct answer when the answer is incorrect.
    practiceFeedback.textContent = "Not quite. The correct answer is " + correctCapital + ".";
  }

  nextQuestionButton.classList.remove("hidden");
}

// Start Practice Mode using only countries from the Master List.
async function startPracticeMode() {
  activePracticeQuestionMode = "previousCountries";
  welcomeMessage.classList.add("hidden");
  learningSection.classList.add("hidden");
  previousCountriesSection.classList.add("hidden");
  masterListSection.classList.add("hidden");
  storeSection.classList.add("hidden");
  worldMapSection.classList.add("hidden");
  profileHomeBackButton.classList.add("hidden");
  practiceSection.classList.remove("hidden");
  updateCoinDisplay();
  practiceQuestion.textContent = "Loading practice question...";
  answerChoices.innerHTML = "";
  practiceFeedback.textContent = "";

  try {
    if (selectedContinent !== "") {
      if (isMixAndMatchSelection(selectedContinent)) {
        await loadCountriesForMixAndMatch();
      } else {
        await loadCountriesForContinent(selectedContinent);
      }
    }

    showPracticeQuestion();
  } catch (error) {
    practiceQuestion.textContent = countryDataLoadErrorMessage;
  }
}

// Show which continent button is selected.
function updateActiveContinentButton(continentName) {
  continentButtons.forEach(function (button) {
    if (button.dataset.continent === continentName) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Step 1 of Practice New Countries: choose Mix and Match or a continent, then show the mode choice.
async function showContinentCountries(continentName) {
  const isMixAndMatch = isMixAndMatchSelection(continentName);

  selectedContinent = continentName;
  updateActiveContinentButton(continentName);

  loadingMessage.textContent = isMixAndMatch ? "Loading countries from around the world..." : "Loading " + continentName + " countries...";
  loadingMessage.classList.remove("hidden");
  errorMessage.classList.add("hidden");
  countryList.innerHTML = "";
  quizCurrentFlashcardsButton.classList.add("hidden");
  newCountriesModeSection.classList.add("hidden");

  try {
    const countries = await loadCountriesForPracticeSelection(continentName);

    if (selectedContinent !== continentName) {
      return;
    }

    const newCountries = getNewCountriesOnly(countries);

    if (newCountries.length === 0) {
      loadingMessage.classList.add("hidden");
      errorMessage.textContent = isMixAndMatch ? "You have already learned the available countries. Try a continent-specific option!" : "You have already learned the available " + continentName + " countries. Try another continent!";
      errorMessage.classList.remove("hidden");
      return;
    }

    // Step 2 is shown after loading the selected country set.
    // Quiz uses this full set; Flash Cards picks 5 countries from it.
    showNewCountriesModeChoice(continentName, newCountries);

    // The bottom button stays Back while the mode choice, quiz, or flash cards are visible.
    // Practice Previous Countries is only updated for its count and keeps its same behavior.
    practiceButtonMode = "backToProfile";
    updateProfileActionButtons();

    // Show the buttons that use the Master List.
    masterListButton.classList.remove("hidden");
    practiceButton.classList.remove("hidden");

    loadingMessage.classList.add("hidden");
  } catch (error) {
    loadingMessage.classList.add("hidden");
    // This message appears if countries.json cannot load or is missing the requested continent.
    errorMessage.textContent = countryDataLoadErrorMessage;
    errorMessage.classList.remove("hidden");
  }
}

// Restore all saved profiles when the page loads.
loadProfilesFromStorage();
updateCoinDisplay();
updateSoundToggleDisplay();
updateProfileActionButtons();

// Keep the game locked until the user chooses a profile.
profileSection.classList.remove("hidden");
gameSection.classList.add("hidden");
showWelcomeOptions();

// Show saved profiles when the player already has one.
existingProfileButton.addEventListener("click", function () {
  showExistingProfiles();
});

// Show the profile name form when the player wants a new profile.
makeProfileButton.addEventListener("click", function () {
  showMakeProfileForm();
});

// Guest mode enters the game without saving progress permanently.
guestButton.addEventListener("click", function () {
  startGuestMode();
});

// This button saves answer sound preference inside the current profile.
soundToggleButton.addEventListener("click", function () {
  toggleSoundPreference();
});

// Show app details from the welcome screen.
aboutButton.addEventListener("click", function () {
  showAboutScreen();
});

// Create a saved profile from the typed name.
createProfileButton.addEventListener("click", function () {
  createProfile();
});

// Pressing Enter in the name box also creates the profile.
profileNameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createProfile();
  }
});

// The Back button on the profile screen returns to the main home screen.
// showWelcomeOptions() hides the profile screen and shows the three home choices again.
backToWelcomeFromExisting.addEventListener("click", function () {
  showWelcomeOptions();
});

// The Back button on the About screen returns to the same home choices.
backToWelcomeFromAbout.addEventListener("click", function () {
  showWelcomeOptions();
});

// The Back button on the new-profile screen also returns to the same home choices.
backToWelcomeFromCreate.addEventListener("click", function () {
  showWelcomeOptions();
});

// Cancel keeps the profile and closes the delete confirmation dialog.
cancelDeleteProfileButton.addEventListener("click", function () {
  cancelDeleteProfile();
});

// This button is the only place where profile data is actually deleted.
confirmDeleteProfileButton.addEventListener("click", function () {
  deleteConfirmedProfile();
});

// Saved profiles can reopen this screen later to change their landmark avatar.
profileSettingsButton.addEventListener("click", function () {
  if (selectedProfileIndex !== null && !isGuestMode) {
    showAvatarSelection("settings", profiles[selectedProfileIndex].avatar);
  }
});

// The avatar screen can go back to profile creation or back to the game.
backFromAvatarButton.addEventListener("click", function () {
  goBackFromAvatarSelection();
});

// Each Practice New Countries option uses its data-continent value to choose what to load.
continentButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const continentName = button.dataset.continent;
    showContinentCountries(continentName);
  });
});

// The second step lets the player choose a quiz from the selected set or flash cards first.
newCountriesQuizButton.addEventListener("click", function () {
  startNewCountriesQuiz(newCountriesSelectionPool);
});

// Flash Cards mode shows 5 cards, then its Quiz Me button uses those same 5 countries.
newCountriesFlashcardsButton.addEventListener("click", function () {
  startNewCountriesFlashCardsMode();
});

quizCurrentFlashcardsButton.addEventListener("click", function () {
  startQuizFromCurrentFlashCards();
});

// Run this code when the Master List button is clicked.
masterListButton.addEventListener("click", function () {
  if (previousCountriesButtonMode === "backToProfile") {
    returnToProfilePageFromPreviousCountries();
    return;
  }

  if (previousCountriesButtonMode === "backToPreviousMenu") {
    returnToPreviousCountriesMenuFromPractice();
    return;
  }

  // Previous Countries now opens a small menu first.
  // Practice Previous Countries keeps its label and count; only the next screen changed.
  showPreviousCountriesMenu();
});

// Show Me The List opens the Master List view with each country's latest status.
showLearnedListButton.addEventListener("click", function () {
  showLearnedCountriesList();
});

// Quiz Me starts Practice Mode using the learned countries already stored in the Master List.
quizLearnedCountriesButton.addEventListener("click", function () {
  startLearnedCountriesQuiz();
});

// Run this code when the Master List Back button is clicked.
backToLearningButton.addEventListener("click", function () {
  // Return to the Previous Countries menu that opened the list.
  showPreviousCountriesMenu();
});

// Run this code when the New Countries button is clicked.
practiceButton.addEventListener("click", function () {
  if (practiceButtonMode === "backToProfile") {
    returnToProfilePageFromNewCountries();
  } else {
    showNewCountries();
  }
});

// Run this code when the Store button is clicked.
storeButton.addEventListener("click", function () {
  showStore();
});

// Run this code when the Store Back button is clicked.
backFromStoreButton.addEventListener("click", function () {
  returnToProfilePageFromStore();
});

// Run this code when the World Map button is clicked.
worldMapButton.addEventListener("click", function () {
  showWorldMap();
});

// Run this code when the World Map Back button is clicked.
backFromWorldMapButton.addEventListener("click", function () {
  returnFromWorldMap();
});

// Run this code when the profile home Back button is clicked.
profileHomeBackButton.addEventListener("click", function () {
  returnToProfileChoices();
});

// Run this code when the Next Question button is clicked.
nextQuestionButton.addEventListener("click", function () {
  if (activePracticeQuestionMode === "newCountries") {
    showNewCountriesQuizQuestion();
  } else {
    showPracticeQuestion();
  }
});
// Show the startup screen for 2.5 seconds and then fade it away.
window.addEventListener("load", function () {
  setTimeout(function () {
    const startupScreen = document.querySelector("#startup-screen");

    if (!startupScreen) {
      return;
    }

    startupScreen.style.transition = "opacity 0.8s ease";
    startupScreen.style.opacity = "0";

    setTimeout(function () {
      startupScreen.style.display = "none";
    }, 800);

  }, 2500);
});
