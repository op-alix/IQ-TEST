const letters = ['A', 'B', 'C', 'D'];
// 13 levels × 15 countries = 195 capital questions. Emoji flags identify countries.
const levelData = [
// Level 1 — Beginner
[
['🇦🇺','Australia','Canberra'],['🇯🇵','Japan','Tokyo'],['🇨🇦','Canada','Ottawa'],['🇧🇷','Brazil','Brasília'],['🇲🇦','Morocco','Rabat'],['🇪🇬','Egypt','Cairo'],['🇮🇹','Italy','Rome'],['🇰🇷','South Korea','Seoul'],['🇦🇷','Argentina','Buenos Aires'],['🇰🇪','Kenya','Nairobi'],['🇹🇷','Türkiye','Ankara'],['🇹🇭','Thailand','Bangkok'],['🇳🇴','Norway','Oslo'],['🇳🇿','New Zealand','Wellington'],['🇨🇭','Switzerland','Bern']],
// Level 2 — Beginner
[
['🇫🇷','France','Paris'],['🇪🇸','Spain','Madrid'],['🇵🇹','Portugal','Lisbon'],['🇬🇧','United Kingdom','London'],['🇩🇪','Germany','Berlin'],['🇬🇷','Greece','Athens'],['🇨🇳','China','Beijing'],['🇮🇳','India','New Delhi'],['🇲🇽','Mexico','Mexico City'],['🇺🇸','United States','Washington, D.C.'],['🇿🇦','South Africa','Pretoria'],['🇳🇬','Nigeria','Abuja'],['🇸🇦','Saudi Arabia','Riyadh'],['🇸🇪','Sweden','Stockholm'],['🇫🇮','Finland','Helsinki']],
// Level 3 — Easy
[
['🇳🇱','Netherlands','Amsterdam'],['🇧🇪','Belgium','Brussels'],['🇦🇹','Austria','Vienna'],['🇵🇱','Poland','Warsaw'],['🇨🇿','Czechia','Prague'],['🇭🇺','Hungary','Budapest'],['🇮🇪','Ireland','Dublin'],['🇩🇰','Denmark','Copenhagen'],['🇮🇩','Indonesia','Jakarta'],['🇵🇭','Philippines','Manila'],['🇻🇳','Vietnam','Hanoi'],['🇵🇰','Pakistan','Islamabad'],['🇮🇷','Iran','Tehran'],['🇮🇶','Iraq','Baghdad'],['🇵🇪','Peru','Lima']],
// Level 4 — Easy
[
['🇨🇱','Chile','Santiago'],['🇨🇴','Colombia','Bogotá'],['🇻🇪','Venezuela','Caracas'],['🇨🇺','Cuba','Havana'],['🇯🇲','Jamaica','Kingston'],['🇵🇦','Panama','Panama City'],['🇨🇷','Costa Rica','San José'],['🇺🇾','Uruguay','Montevideo'],['🇵🇾','Paraguay','Asunción'],['🇪🇨','Ecuador','Quito'],['🇬🇭','Ghana','Accra'],['🇪🇹','Ethiopia','Addis Ababa'],['🇹🇿','Tanzania','Dodoma'],['🇺🇬','Uganda','Kampala'],['🇿🇼','Zimbabwe','Harare']],
// Level 5 — Intermediate
[
['🇷🇴','Romania','Bucharest'],['🇧🇬','Bulgaria','Sofia'],['🇭🇷','Croatia','Zagreb'],['🇷🇸','Serbia','Belgrade'],['🇸🇰','Slovakia','Bratislava'],['🇸🇮','Slovenia','Ljubljana'],['🇺🇦','Ukraine','Kyiv'],['🇱🇹','Lithuania','Vilnius'],['🇱🇻','Latvia','Riga'],['🇪🇪','Estonia','Tallinn'],['🇮🇸','Iceland','Reykjavík'],['🇷🇺','Russia','Moscow'],['🇲🇾','Malaysia','Kuala Lumpur'],['🇸🇬','Singapore','Singapore'],['🇧🇩','Bangladesh','Dhaka']],
// Level 6 — Intermediate
[
['🇳🇵','Nepal','Kathmandu'],['🇱🇰','Sri Lanka','Sri Jayawardenepura Kotte'],['🇲🇳','Mongolia','Ulaanbaatar'],['🇰🇭','Cambodia','Phnom Penh'],['🇱🇦','Laos','Vientiane'],['🇲🇲','Myanmar','Naypyidaw'],['🇦🇫','Afghanistan','Kabul'],['🇺🇿','Uzbekistan','Tashkent'],['🇰🇿','Kazakhstan','Astana'],['🇰🇬','Kyrgyzstan','Bishkek'],['🇹🇯','Tajikistan','Dushanbe'],['🇹🇲','Turkmenistan','Ashgabat'],['🇦🇿','Azerbaijan','Baku'],['🇬🇪','Georgia','Tbilisi'],['🇦🇲','Armenia','Yerevan']],
// Level 7 — Intermediate
[
['🇸🇳','Senegal','Dakar'],['🇨🇮','Côte d’Ivoire','Yamoussoukro'],['🇨🇲','Cameroon','Yaoundé'],['🇸🇩','Sudan','Khartoum'],['🇸🇸','South Sudan','Juba'],['🇷🇼','Rwanda','Kigali'],['🇧🇮','Burundi','Gitega'],['🇿🇲','Zambia','Lusaka'],['🇧🇼','Botswana','Gaborone'],['🇳🇦','Namibia','Windhoek'],['🇲🇿','Mozambique','Maputo'],['🇦🇴','Angola','Luanda'],['🇲🇬','Madagascar','Antananarivo'],['🇲🇺','Mauritius','Port Louis'],['🇸🇨','Seychelles','Victoria']],
// Level 8 — Tricky
[
['🇯🇴','Jordan','Amman'],['🇱🇧','Lebanon','Beirut'],['🇸🇾','Syria','Damascus'],['🇮🇱','Israel','Jerusalem'],['🇶🇦','Qatar','Doha'],['🇧🇭','Bahrain','Manama'],['🇰🇼','Kuwait','Kuwait City'],['🇴🇲','Oman','Muscat'],['🇾🇪','Yemen','Sana’a'],['🇲🇻','Maldives','Malé'],['🇧🇹','Bhutan','Thimphu'],['🇧🇳','Brunei','Bandar Seri Begawan'],['🇹🇱','Timor-Leste','Dili'],['🇫🇯','Fiji','Suva'],['🇵🇬','Papua New Guinea','Port Moresby']],
// Level 9 — Tricky
[
['🇧🇴','Bolivia','Sucre'],['🇬🇾','Guyana','Georgetown'],['🇸🇷','Suriname','Paramaribo'],['🇧🇸','The Bahamas','Nassau'],['🇧🇧','Barbados','Bridgetown'],['🇹🇹','Trinidad and Tobago','Port of Spain'],['🇩🇴','Dominican Republic','Santo Domingo'],['🇭🇹','Haiti','Port-au-Prince'],['🇧🇿','Belize','Belmopan'],['🇬🇹','Guatemala','Guatemala City'],['🇭🇳','Honduras','Tegucigalpa'],['🇸🇻','El Salvador','San Salvador'],['🇳🇮','Nicaragua','Managua'],['🇱🇨','Saint Lucia','Castries'],['🇬🇩','Grenada','St. George’s']],
// Level 10 — Advanced
[
['🇦🇱','Albania','Tirana'],['🇲🇰','North Macedonia','Skopje'],['🇲🇪','Montenegro','Podgorica'],['🇧🇦','Bosnia and Herzegovina','Sarajevo'],['🇽🇰','Kosovo','Pristina'],['🇲🇩','Moldova','Chișinău'],['🇧🇾','Belarus','Minsk'],['🇱🇺','Luxembourg','Luxembourg'],['🇲🇹','Malta','Valletta'],['🇨🇾','Cyprus','Nicosia'],['🇦🇩','Andorra','Andorra la Vella'],['🇲🇨','Monaco','Monaco'],['🇱🇮','Liechtenstein','Vaduz'],['🇸🇲','San Marino','San Marino'],['🇻🇦','Vatican City','Vatican City']],
// Level 11 — Advanced
[
['🇲🇷','Mauritania','Nouakchott'],['🇲🇱','Mali','Bamako'],['🇧🇫','Burkina Faso','Ouagadougou'],['🇳🇪','Niger','Niamey'],['🇹🇩','Chad','N’Djamena'],['🇨🇫','Central African Republic','Bangui'],['🇨🇬','Republic of the Congo','Brazzaville'],['🇨🇩','Democratic Republic of the Congo','Kinshasa'],['🇬🇦','Gabon','Libreville'],['🇬🇶','Equatorial Guinea','Malabo'],['🇬🇼','Guinea-Bissau','Bissau'],['🇬🇳','Guinea','Conakry'],['🇸🇱','Sierra Leone','Freetown'],['🇱🇷','Liberia','Monrovia'],['🇹🇬','Togo','Lomé']],
// Level 12 — Expert
[
['🇪🇷','Eritrea','Asmara'],['🇩🇯','Djibouti','Djibouti'],['🇸🇴','Somalia','Mogadishu'],['🇱🇸','Lesotho','Maseru'],['🇸🇿','Eswatini','Mbabane'],['🇲🇼','Malawi','Lilongwe'],['🇰🇲','Comoros','Moroni'],['🇨🇻','Cabo Verde','Praia'],['🇸🇹','São Tomé and Príncipe','São Tomé'],['🇬🇲','The Gambia','Banjul'],['🇧🇯','Benin','Porto-Novo'],['🇦🇬','Antigua and Barbuda','St. John’s'],['🇻🇨','Saint Vincent and the Grenadines','Kingstown'],['🇼🇸','Samoa','Apia'],['🇹🇴','Tonga','Nukuʻalofa']],
// Level 13 — Master
[
['🇻🇺','Vanuatu','Port Vila'],['🇸🇧','Solomon Islands','Honiara'],['🇰🇮','Kiribati','South Tarawa'],['🇹🇻','Tuvalu','Funafuti'],['🇳🇷','Nauru','Yaren'],['🇲🇭','Marshall Islands','Majuro'],['🇫🇲','Micronesia','Palikir'],['🇵🇼','Palau','Ngerulmud'],['🇩🇲','Dominica','Roseau'],['🇹🇳','Tunisia','Tunis'],['🇩🇿','Algeria','Algiers'],['🇱🇾','Libya','Tripoli'],['🇨🇰','Cook Islands','Avarua'],['🇰🇵','North Korea','Pyongyang'],['🇳🇺','Niue','Alofi']]
].map(level => level.map(([flag,country,capital]) => ({flag,country,capital})));
const TOTAL_LEVELS = 13;
const QUESTIONS_PER_LEVEL = 15;
const STORAGE_KEY = 'capitalQuestProgress';
let unlockedLevel = 1;
let completedLevels = new Set();
let savedRun = null;
let preferredLanguage = 'en';
let totalScore = 0;
let bestLevelScores = {};
let totalAttempts = 0;
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  unlockedLevel = Math.min(TOTAL_LEVELS, Math.max(1, Number(saved.unlockedLevel) || 1));
  completedLevels = new Set(Array.isArray(saved.completedLevels) ? saved.completedLevels : []);
  savedRun = saved.run || null;
  preferredLanguage = ['en', 'fr', 'ar'].includes(saved.language) ? saved.language : 'en';
  totalScore = Number(saved.totalScore) || 0;
  bestLevelScores = saved.bestLevelScores || {};
  totalAttempts = Number(saved.totalAttempts) || 0;
} catch {}
let currentLevel = 1;
let questions = [];
let answers = Array(QUESTIONS_PER_LEVEL).fill(null);
let currentIndex = 0;
let answerTimer = null;
let view = 'home';
const app = document.getElementById('app');
let language = preferredLanguage;
const translations = {
  en: {
    brand: 'Capital <b>Quest</b>', brandText: 'Capital Quest', heroTitleOne: 'Capital', heroTitleTwo: 'Quest.', globeLabel: 'Illustrated globe', pageTitle: 'Capital Quest — World Capitals Quiz', pageDescription: 'Take the Capital Quest world capitals quiz. Test your geography knowledge across 15 countries.', languageLabel: 'Language', homeLabel: 'Capital Quest home',
    nav: 'WORLD GEOGRAPHY CHALLENGE', footerBrand: 'CAPITAL QUEST', footer: 'Explore the world, one capital at a time.', footerCount: '15 questions · 5 continents',
    eyebrow: 'A WORLD OF KNOWLEDGE AWAITS', heroCopy: '195 country-capital challenges across 13 levels. Every level gets trickier. Complete one level to unlock the next!', facts: ['levels', 'questions', 'unlock as you go'], levelsTitle: 'Choose your level', levelIntro: 'Level 1 is open. Beat a level to unlock the next one.', unlocked: 'unlocked', orbitLevels: 'Levels', orbitCountries: 'Countries', ready: 'Ready to play', completed: 'Completed', finishPrevious: 'Finish previous level', countries: 'countries',
    quizScore: 'Score', question: 'Question', answered: 'answered', choose: 'Choose the capital', whatCapital: 'What is the capital of {country}?', correct: 'Correct!', notQuite: 'Not quite.', capitalIs: 'capital is', answerHint: 'Choose one answer to continue.', moving: 'Answer saved — moving to the next question…', next: 'Next Question', finishLevel: 'Finish Level', levelTag: 'WORLD CAPITALS',
    passNeeded: 'You need at least 7/15 to unlock the next level. Give it another try!', resumePrompt: 'You have a level in progress. Would you like to continue?', resume: 'Continue level', discardRun: 'Start over', paused: 'In progress', home: 'Home', legendary: 'Legendary! You completed all 13 levels and explored 195 capital challenges!', great: 'Great job! Level {n} is now unlocked.', levelComplete: 'Level cleared!', keepExploring: 'Keep exploring!', result: 'Your level {n} result', correctCount: 'correct', reviewCount: 'to review', level: 'Level', complete: 'COMPLETE', results: 'RESULTS', passMark: 'Pass mark: 7/15. Finish each level to unlock the next one.', nextLevel: 'Go to Level {n} →', allDone: '🏆 All levels completed!', retry: 'Retry Level {n} ↻', reviewTitle: 'Review your answers', yourAnswer: 'Your answer', noAnswer: 'No answer', statsTitle: 'Lifetime Stats', totalXP: 'Total XP', bestRun: 'Best runs', levelBest: 'Level {n}', noData: 'Play a level to see stats', attempts: 'Attempts',
  },
  fr: {
    brand: 'Capitales <b>du monde</b>', brandText: 'Capitales du monde', heroTitleOne: 'Capitales', heroTitleTwo: 'du monde.', globeLabel: 'Illustration du globe', pageTitle: 'Capital Quest — Quiz des capitales du monde', pageDescription: 'Testez vos connaissances des capitales du monde avec 15 questions.', languageLabel: 'Langue', homeLabel: 'Accueil Capitales du monde',
    nav: 'DÉFI DE GÉOGRAPHIE MONDIALE', footerBrand: 'CAPITALES DU MONDE', footer: 'Explorez le monde, une capitale à la fois.', footerCount: '15 questions · 5 continents',
    eyebrow: 'UN MONDE DE SAVOIR VOUS ATTEND', heroCopy: '195 défis de capitales répartis sur 13 niveaux. Chaque niveau est plus difficile. Terminez un niveau pour débloquer le suivant !', facts: ['niveaux', 'questions', 'débloquez en jouant'], levelsTitle: 'Choisissez un niveau', levelIntro: 'Le niveau 1 est ouvert. Réussissez un niveau pour débloquer le suivant.', unlocked: 'débloqués', orbitLevels: 'Niveaux', orbitCountries: 'Pays', ready: 'Prêt à jouer', completed: 'Terminé', finishPrevious: 'Terminez le niveau précédent', countries: 'pays',
    quizScore: 'Score', question: 'Question', answered: 'répondues', choose: 'Choisissez la capitale', whatCapital: 'Quelle est la capitale de {country} ?', correct: 'Correct !', notQuite: 'Pas tout à fait.', capitalIs: 'a pour capitale', answerHint: 'Choisissez une réponse pour continuer.', moving: 'Réponse enregistrée — question suivante…', next: 'Question suivante', finishLevel: 'Terminer le niveau', levelTag: 'CAPITALES DU MONDE',
    passNeeded: 'Il faut au moins 7/15 pour débloquer le niveau suivant. Réessayez !', resumePrompt: 'Vous avez un niveau en cours. Voulez-vous le reprendre ?', resume: 'Reprendre le niveau', discardRun: 'Recommencer', paused: 'En cours', home: 'Accueil', legendary: 'Incroyable ! Vous avez terminé les 13 niveaux et relevé les 195 défis !', great: 'Bravo ! Le niveau {n} est débloqué.', levelComplete: 'Niveau réussi !', keepExploring: 'Continuez à explorer !', result: 'Résultat du niveau {n}', correctCount: 'bonnes réponses', reviewCount: 'à revoir', level: 'Niveau', complete: 'TERMINÉ', results: 'RÉSULTAT', passMark: 'Score requis : 7/15. Terminez chaque niveau pour débloquer le suivant.', nextLevel: 'Passer au niveau {n} →', allDone: '🏆 Tous les niveaux terminés !', retry: 'Réessayer le niveau {n} ↻', reviewTitle: 'Corrigé de vos réponses', yourAnswer: 'Votre réponse', noAnswer: 'Sans réponse', statsTitle: 'Statistiques', totalXP: 'XP totale', bestRun: 'Meilleurs scores', levelBest: 'Niveau {n}', noData: 'Jouez un niveau pour voir', attempts: 'Parties',
  },
  ar: {
    brand: 'تحدّي <b>العواصم</b>', brandText: 'تحدّي العواصم', heroTitleOne: 'تحدّي', heroTitleTwo: 'العواصم.', globeLabel: 'رسم توضيحي للكرة الأرضية', pageTitle: 'تحدّي العواصم — اختبار عواصم العالم', pageDescription: 'اختبر معلوماتك الجغرافية في 15 سؤالًا عن عواصم العالم.', languageLabel: 'اللغة', homeLabel: 'الصفحة الرئيسية لتحدي العواصم',
    nav: 'تحدي جغرافيا العالم', footerBrand: 'تحدّي العواصم', footer: 'اكتشف العالم، عاصمةً بعد عاصمة.', footerCount: '15 سؤالًا · 5 قارات',
    eyebrow: 'عالم من المعرفة بانتظارك', heroCopy: '195 تحديًا حول عواصم الدول عبر 13 مستوى. تزداد المستويات صعوبة. أكمل المستوى لفتح المستوى التالي!', facts: ['مستويات', 'أسئلة', 'افتحها بالتدريج'], levelsTitle: 'اختر المستوى', levelIntro: 'المستوى الأول مفتوح. اجتز المستوى لفتح المستوى التالي.', unlocked: 'مفتوح', orbitLevels: 'مستويات', orbitCountries: 'دولة', ready: 'جاهز للعب', completed: 'مكتمل', finishPrevious: 'أكمل المستوى السابق', countries: 'دولة',
    quizScore: 'النقاط', question: 'السؤال', answered: 'تمت الإجابة', choose: 'اختر العاصمة', whatCapital: 'ما عاصمة {country}؟', correct: 'صحيح!', notQuite: 'ليس تمامًا.', capitalIs: 'عاصمتها', answerHint: 'اختر إجابة للمتابعة.', moving: 'تم حفظ الإجابة — إلى السؤال التالي…', next: 'السؤال التالي', finishLevel: 'إنهاء المستوى', levelTag: 'عواصم العالم',
    passNeeded: 'تحتاج إلى 7/15 على الأقل لفتح المستوى التالي. حاول مجددًا!', resumePrompt: 'لديك مستوى لم تكمله. هل تريد المتابعة؟', resume: 'أكمل المستوى', discardRun: 'ابدأ من جديد', paused: 'قيد التقدم', home: 'الرئيسية', legendary: 'مذهل! أكملت المستويات الـ13 وتحديات العواصم الـ195!', great: 'أحسنت! تم فتح المستوى {n}.', levelComplete: 'اجتزت المستوى!', keepExploring: 'واصل الاستكشاف!', result: 'نتيجتك في المستوى {n}', correctCount: 'إجابة صحيحة', reviewCount: 'للمراجعة', level: 'المستوى', complete: 'مكتمل', results: 'النتيجة', passMark: 'درجة الاجتياز: 7/15. أكمل كل مستوى لفتح التالي.', nextLevel: 'انتقل إلى المستوى {n} ←', allDone: '🏆 أكملت جميع المستويات!', retry: 'أعد المستوى {n} ↻', reviewTitle: 'راجع إجاباتك', yourAnswer: 'إجابتك', noAnswer: 'بلا إجابة', statsTitle: 'إحصائيات', totalXP: 'إجمالي النقاط', bestRun: 'أفضل النتائج', levelBest: 'المستوى {n}', noData: 'العب مستوى لرؤية الإحصائيات', attempts: 'محاولة',
  }
};
function t(key, values = {}) {
  return translations[language][key].replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}
function flagCode(question) {
  return [...question.flag]
    .map(character => character.codePointAt(0))
    .filter(codePoint => codePoint >= 0x1F1E6 && codePoint <= 0x1F1FF)
    .map(codePoint => String.fromCharCode(codePoint - 0x1F1E6 + 65))
    .join('');
}
function flagImage(question, extraClass = '') {
  const code = flagCode(question).toLowerCase();
  return code ? `<img class="country-flag ${extraClass}" src="https://flagicons.lipis.dev/flags/4x3/${code}.svg" alt="" aria-hidden="true" loading="lazy">` : '';
}
function localizedCountry(question) {
  const regionCode = flagCode(question);
  if (!regionCode || language === 'en' || typeof Intl.DisplayNames !== 'function') return question.country;
  try {
    const name = new Intl.DisplayNames([language], { type: 'region' }).of(regionCode);
    return name && name.toUpperCase() !== regionCode ? name : question.country;
  } catch {
    return question.country;
  }
}
const capitalNames = {
  ar: {
    Canberra: 'كانبرا', Tokyo: 'طوكيو', Ottawa: 'أوتاوا', Brasília: 'برازيليا', Rabat: 'الرباط', Cairo: 'القاهرة', Rome: 'روما', Seoul: 'سيول', 'Buenos Aires': 'بوينس آيرس', Nairobi: 'نيروبي', Ankara: 'أنقرة', Bangkok: 'بانكوك', Oslo: 'أوسلو', Wellington: 'ويلينغتون', Bern: 'برن', Paris: 'باريس', Madrid: 'مدريد', Lisbon: 'لشبونة', London: 'لندن', Berlin: 'برلين', Athens: 'أثينا', Beijing: 'بكين', 'New Delhi': 'نيودلهي', 'Mexico City': 'مكسيكو', 'Washington, D.C.': 'واشنطن', Pretoria: 'بريتوريا', Abuja: 'أبوجا', Riyadh: 'الرياض', Stockholm: 'ستوكهولم', Helsinki: 'هلسنكي', Amsterdam: 'أمستردام', Brussels: 'بروكسل', Vienna: 'فيينا', Warsaw: 'وارسو', Prague: 'براغ', Budapest: 'بودابست', Dublin: 'دبلن', Copenhagen: 'كوبنهاغن', Jakarta: 'جاكرتا', Manila: 'مانيلا', Hanoi: 'هانوي', Islamabad: 'إسلام آباد', Tehran: 'طهران', Baghdad: 'بغداد', Lima: 'ليما', Santiago: 'سانتياغو', Bogotá: 'بوغوتا', Caracas: 'كاراكاس', Havana: 'هافانا', Kingston: 'كينغستون', Quito: 'كيتو', Accra: 'أكرا', 'Addis Ababa': 'أديس أبابا', Kampala: 'كمبالا', Bucharest: 'بوخارست', Sofia: 'صوفيا', Zagreb: 'زغرب', Belgrade: 'بلغراد', Kyiv: 'كييف', Riga: 'ريغا', Tallinn: 'تالين', Moscow: 'موسكو', Singapore: 'سنغافورة', Dhaka: 'دكا', Kathmandu: 'كاتماندو', Kabul: 'كابل', Tashkent: 'طشقند', Astana: 'أستانا', Amman: 'عمّان', Beirut: 'بيروت', Damascus: 'دمشق', Jerusalem: 'القدس', Doha: 'الدوحة', Manama: 'المنامة', Kuwait: 'مدينة الكويت', Muscat: 'مسقط', Suva: 'سوفا', Sucre: 'سوكري', Georgetown: 'جورج تاون', Nassau: 'ناساو', 'Santo Domingo': 'سانتو دومينغو', Tirana: 'تيرانا', Skopje: 'سكوبيه', Sarajevo: 'سراييفو', Minsk: 'مينسك', Valletta: 'فاليتا', Nicosia: 'نيقوسيا', Nouakchott: 'نواكشوط', Bamako: 'باماكو', Niamey: 'نيامي', Khartoum: 'الخرطوم', Mogadishu: 'مقديشو', Tunis: 'تونس', Algiers: 'الجزائر', Tripoli: 'طرابلس'
  },
  fr: {
    Brasília: 'Brasilia', Rome: 'Rome', Seoul: 'Séoul', Ankara: 'Ankara', Bern: 'Berne', Lisbon: 'Lisbonne', London: 'Londres', Athens: 'Athènes', Beijing: 'Pékin', 'New Delhi': 'New Delhi', 'Mexico City': 'Mexico', 'Washington, D.C.': 'Washington', Pretoria: 'Pretoria', Abuja: 'Abuja', Riyadh: 'Riyad', Stockholm: 'Stockholm', Helsinki: 'Helsinki', Amsterdam: 'Amsterdam', Brussels: 'Bruxelles', Vienna: 'Vienne', Warsaw: 'Varsovie', Prague: 'Prague', Budapest: 'Budapest', Dublin: 'Dublin', Copenhagen: 'Copenhague', Jakarta: 'Jakarta', Manila: 'Manille', Hanoi: 'Hanoï', Islamabad: 'Islamabad', Tehran: 'Téhéran', Baghdad: 'Bagdad', Lima: 'Lima', Santiago: 'Santiago', Bogotá: 'Bogota', Havana: 'La Havane', Kingston: 'Kingston', Quito: 'Quito', Accra: 'Accra', 'Addis Ababa': 'Addis-Abeba', Bucharest: 'Bucarest', Sofia: 'Sofia', Zagreb: 'Zagreb', Belgrade: 'Belgrade', Kyiv: 'Kiev', Riga: 'Riga', Tallinn: 'Tallinn', Moscow: 'Moscou', Singapore: 'Singapour', Dhaka: 'Dacca', Kathmandu: 'Katmandou', Kabul: 'Kaboul', Tashkent: 'Tachkent', Astana: 'Astana', Amman: 'Amman', Beirut: 'Beyrouth', Damascus: 'Damas', Jerusalem: 'Jérusalem', Doha: 'Doha', Muscat: 'Mascate', Sucre: 'Sucre', Nassau: 'Nassau', 'Santo Domingo': 'Saint-Domingue', Tirana: 'Tirana', Skopje: 'Skopje', Sarajevo: 'Sarajevo', Minsk: 'Minsk', Valletta: 'La Valette', Nicosia: 'Nicosie', Nouakchott: 'Nouakchott', Bamako: 'Bamako', Niamey: 'Niamey', Khartoum: 'Khartoum', Mogadishu: 'Mogadiscio', Tunis: 'Tunis', Algiers: 'Alger', Tripoli: 'Tripoli'
  }
};
function transliterateArabicName(value) {
  const letters = {a:'ا',b:'ب',c:'ك',d:'د',e:'ي',f:'ف',g:'ج',h:'ه',i:'ي',j:'ج',k:'ك',l:'ل',m:'م',n:'ن',o:'و',p:'ب',q:'ق',r:'ر',s:'س',t:'ت',u:'و',v:'ف',w:'و',x:'كس',y:'ي',z:'ز'};
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/æ/g, 'ae').replace(/œ/g, 'oe').replace(/ß/g, 'ss')
    .replace(/sh/g, 'ش').replace(/kh/g, 'خ').replace(/gh/g, 'غ').replace(/th/g, 'ث').replace(/dh/g, 'ذ').replace(/ch/g, 'تش').replace(/ph/g, 'ف').replace(/qu/g, 'ك').replace(/ou/g, 'و')
    .replace(/[a-z]/g, letter => letters[letter]).replace(/[ʻ’']/g, '');
}
function localizedCapital(capital) {
  const translated = capitalNames[language]?.[capital];
  if (translated) return translated;
  return language === 'ar' ? transliterateArabicName(capital) : capital;
}

function setLanguage(nextLanguage) {
  language = translations[nextLanguage] ? nextLanguage : 'en';
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = t('pageTitle');
  document.querySelector('meta[name="description"]').content = t('pageDescription');
  document.querySelector('.brand > span:last-child').innerHTML = t('brand');
  document.querySelector('.brand').setAttribute('aria-label', t('homeLabel'));
  document.querySelector('.header-note').lastChild.textContent = ` ${t('nav')}`;
  document.querySelector('.site-footer span:first-child').textContent = t('footerBrand');
  document.querySelector('.site-footer span:nth-child(2)').textContent = t('footer');
  document.querySelector('.site-footer span:nth-child(3)').textContent = t('footerCount');
  document.querySelector('label[for="languageSelect"]').textContent = t('languageLabel');
  document.getElementById('languageSelect').setAttribute('aria-label', t('languageLabel'));
  saveProgress();
  document.getElementById('languageSelect').value = language;
  render();
}

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function prepareQuestions() {
  const source = levelData[currentLevel - 1];
  questions = source.map(item => {
    const distractors = shuffle(levelData.flat().filter(other => other.capital !== item.capital).map(other => other.capital));
    const options = shuffle([item.capital, ...distractors.slice(0, 3)]);
    return { ...item, options, answer: options.indexOf(item.capital) };
  });
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      unlockedLevel,
      completedLevels: [...completedLevels],
      language,
      totalScore,
      bestLevelScores,
      totalAttempts,
      run: view === 'quiz' ? { level: currentLevel, questions, answers, currentIndex } : savedRun
    }));
  } catch {}
}

function finishLevel() {
  const score = currentScore();
  totalScore += score;
  totalAttempts++;
  if (!bestLevelScores[currentLevel] || score > bestLevelScores[currentLevel]) {
    bestLevelScores[currentLevel] = score;
  }
  view = 'results';
  if (score >= 7) {
    completedLevels.add(currentLevel);
    unlockedLevel = Math.max(unlockedLevel, Math.min(TOTAL_LEVELS, currentLevel + 1));
  }
  saveProgress();
  render();
}

function resumeLevel() {
  if (!savedRun || savedRun.level > unlockedLevel) return;
  currentLevel = savedRun.level;
  questions = savedRun.questions;
  answers = savedRun.answers;
  currentIndex = savedRun.currentIndex;
  savedRun = null;
  if (answers[currentIndex] !== null) {
    if (currentIndex === questions.length - 1) return finishLevel();
    currentIndex++;
  }
  view = 'quiz';
  saveProgress();
  render();
}

function startLevel(level) {
  if (level > unlockedLevel || level < 1 || level > TOTAL_LEVELS) return;
  savedRun = null;
  currentLevel = level;
  prepareQuestions();
  answers = Array(QUESTIONS_PER_LEVEL).fill(null);
  currentIndex = 0;
  view = 'quiz';
  saveProgress();
  render();
}

function currentScore() {
  return answers.reduce((score, answer, index) => score + (answer !== null && answer === questions[index].answer ? 1 : 0), 0);
}

function homePage() {
  const levels = Array.from({length: TOTAL_LEVELS}, (_, i) => {
    const level = i + 1;
    const unlocked = level <= unlockedLevel;
      return `<button class="level-card ${unlocked ? 'unlocked' : 'locked'} ${completedLevels.has(level) ? 'completed' : ''} ${savedRun?.level === level ? 'in-progress' : ''}" data-level="${level}" ${unlocked ? '' : 'disabled'}>
      <span class="level-emoji">${unlocked ? (completedLevels.has(level) ? '✅' : '🔓') : '🔒'}</span>
      <span class="level-name">${t('level')} ${level}</span><small>${savedRun?.level === level ? t('paused') : unlocked ? (completedLevels.has(level) ? t('completed') : t('ready')) : t('finishPrevious')}</small>
      <span class="level-count">15 ${t('countries')}</span></button>`;
  }).join('');
  return `<div class="page-wrap home-page">
    ${savedRun ? `<section class="resume-panel"><div><strong>${t('resumePrompt')}</strong><p>${t('level')} ${savedRun.level} · ${savedRun.answers.filter(answer => answer !== null).length}/15</p></div><div class="resume-actions"><button class="button" id="resumeButton">${t('resume')}</button><button class="button secondary" id="discardRunButton">${t('discardRun')}</button></div></section>` : ''}
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-content"><div class="eyebrow">${t('eyebrow')}</div>
        <h1 id="home-title">${t('heroTitleOne')}<br><span>${t('heroTitleTwo')}</span></h1>
        <p class="hero-copy">${t('heroCopy')}</p>
        <div class="hero-facts"><div><strong>13</strong>${translations[language].facts[0]}</div><div><strong>195</strong>${translations[language].facts[1]}</div><div><strong>🔒</strong>${translations[language].facts[2]}</div></div>
      </div>
      <div class="globe-wrap"><div class="globe-glow"></div><div class="globe-orbit"></div><div class="globe-orbit two"></div><div class="globe-art" role="img" aria-label="${t('globeLabel')}"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyk7Fv-57syToP-OkWbaBwvID1XqDI9uKMfO0BA2VSww&amp;s" alt=""></div><div class="orbit-chip chip-top"><strong>13</strong> ${t('orbitLevels')}</div><div class="orbit-chip chip-bottom"><strong>195</strong> ${t('orbitCountries')}</div></div>
    </section>
    <section class="levels-section"><div class="levels-heading"><div><h2>${t('levelsTitle')}</h2><p>${t('levelIntro')}</p></div><span class="level-progress-pill">${unlockedLevel} / ${TOTAL_LEVELS} ${t('unlocked')}</span></div><div class="levels-grid">${levels}</div></section>
    <section class="stats-section"><div class="stats-heading"><h2>${t('statsTitle')}</h2></div><div class="stats-grid">
      <div class="stat-card"><span class="stat-value">${totalScore}</span><span class="stat-label">${t('totalXP')}</span></div>
      <div class="stat-card"><span class="stat-value">${completedLevels.size} / 13</span><span class="stat-label">${t('complete')}</span></div>
      <div class="stat-card"><span class="stat-value">${totalAttempts}</span><span class="stat-label">${t('attempts')}</span></div>
      <div class="stat-card"><span class="stat-value">${totalAttempts ? Math.round(totalScore / totalAttempts) : '—'}</span><span class="stat-label">${t('question')} / ${t('answered')}</span></div>
    </div>
    ${Object.keys(bestLevelScores).length ? `<div class="best-section"><h3>${t('bestRun')}</h3><div class="best-grid">${Object.entries(bestLevelScores).sort(([a],[b]) => a - b).map(([level, score]) => `<span class="best-chip">${t('levelBest', {n: level})}: <strong>${score}/15</strong></span>`).join('')}</div></div>` : `<p class="stats-empty">${t('noData')}</p>`}
    </section>
  </div>`;
}

function quizPage() {
  const question = questions[currentIndex];
  const selected = answers[currentIndex];
  const answeredCount = answers.filter(answer => answer !== null).length;
  const progress = (answeredCount / questions.length) * 100;
  const choices = question.options.map((option, index) => {
    const state = selected === index ? ' selected' : '';
    return `<button class="answer-option${state}" type="button" data-choice="${index}" ${selected !== null ? 'disabled' : ''} aria-pressed="${selected === index}"><span class="option-letter">${letters[index]}</span><span class="option-text">${localizedCapital(option)}</span></button>`;
  }).join('');
  return `<section class="quiz-page" aria-labelledby="questionTitle"><div class="quiz-heading"><span class="quiz-brand">🌐 ${translations[language].brandText} · ${t('level')} ${currentLevel}</span><span class="score-chip">${answeredCount}/15 ${t('answered')}</span></div>
    <div class="progress-info"><span>${t('level')} ${currentLevel} · ${t('question')} ${currentIndex + 1} / 15</span><span>${answeredCount} ${t('answered')}</span></div><div class="progress-track" role="progressbar" aria-label="${t('level')} progress" aria-valuemin="0" aria-valuemax="15" aria-valuenow="${answeredCount}"><div class="progress-fill" style="width:${progress}%"></div></div>
    <article class="question-card"><span class="question-tag">✦ ${t('level')} ${currentLevel} · ${t('levelTag')}</span><div class="question-country">${flagImage(question)}<span>${localizedCountry(question)}</span></div><h1 class="question-title" id="questionTitle" tabindex="-1">${t('whatCapital', {country: localizedCountry(question)})}</h1><div class="answers" role="group" aria-label="${t('choose')}">${choices}</div><div class="question-controls"><span class="answer-hint">${selected === null ? t('answerHint') : t('moving')}</span></div></article></section>`;
}

function resultsPage() {
  const score = currentScore();
  const percentage = Math.round(score / QUESTIONS_PER_LEVEL * 100);
  const passed = score >= 7;
  const finalLevel = currentLevel === TOTAL_LEVELS;
  const message = !passed ? t('passNeeded') : finalLevel ? t('legendary') : t('great', {n: currentLevel + 1});
  const review = questions.map((question, index) => {
    const correct = answers[index] === question.answer;
    const chosen = answers[index] === null ? t('noAnswer') : localizedCapital(question.options[answers[index]]);
    return `<div class="review-item"><span class="review-mark ${correct ? 'correct' : 'incorrect'}">${correct ? '✓' : '×'}</span><span class="review-copy"><span class="country-name">${flagImage(question)}${localizedCountry(question)}</span><small>${t('yourAnswer')}: ${chosen} · ${t('capitalIs')}: ${localizedCapital(question.capital)}</small></span></div>`;
  }).join('');
  return `<section class="results-page"><div class="result-card"><div class="result-globe">${passed ? '🏆' : '🗺️'}</div><div class="eyebrow" style="justify-content:center">${t('level')} ${currentLevel} ${passed ? t('complete') : t('results')}</div><h1>${passed ? t('levelComplete') : t('keepExploring')}</h1><p>${t('result', {n: currentLevel})}</p>
    <div class="score-circle" style="--score:${percentage * 3.6}deg"><div class="score-inner"><strong>${score}<span style="font-size:20px;color:#91a5b3">/15</span></strong><span>${percentage}%</span></div></div><p class="result-message"><strong>${message}</strong></p><div class="result-meta"><span>✓ ${score} ${t('correctCount')}</span><span>↻ ${15-score} ${t('reviewCount')}</span><span>🌍 ${t('level')} ${currentLevel}/13</span></div>
    <div class="result-actions">${passed && !finalLevel ? `<button class="button" id="nextLevelButton">${t('nextLevel', {n: currentLevel+1})}</button>` : ''}${passed && finalLevel ? `<button class="button" id="finishButton">${t('allDone')}</button>` : ''}<button class="button secondary" id="retryButton">${t('retry', {n: currentLevel})}</button></div><p class="result-note">${t('passMark')}</p></div>
    <section class="result-review"><h2>${t('reviewTitle')}</h2><div class="review-list">${review}</div></section></section>`;
}

function render() {
  app.innerHTML = view === 'home' ? homePage() : view === 'quiz' ? quizPage() : resultsPage();
  if (view === 'home') {
    document.getElementById('app').querySelectorAll('[data-level]').forEach(button => button.addEventListener('click', () => startLevel(Number(button.dataset.level))));
    document.getElementById('resumeButton')?.addEventListener('click', resumeLevel);
    document.getElementById('discardRunButton')?.addEventListener('click', () => { savedRun = null; saveProgress(); render(); });
  } else if (view === 'quiz') {
    document.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => {
      if (answers[currentIndex] !== null) return;
      answers[currentIndex] = Number(button.dataset.choice);
      render();
      answerTimer = setTimeout(() => {
        answerTimer = null;
        if (currentIndex === questions.length - 1) {
          finishLevel();
        } else {
          currentIndex++;
          saveProgress();
          render();
          document.querySelector('.question-title')?.focus();
        }
      }, 700);
    }));
  } else {
    const next = document.getElementById('nextLevelButton');
    if (next) next.addEventListener('click', () => startLevel(currentLevel + 1));
    const retry = document.getElementById('retryButton');
    if (retry) retry.addEventListener('click', () => startLevel(currentLevel));
    const finish = document.getElementById('finishButton');
    if (finish) finish.addEventListener('click', () => { view = 'home'; render(); });
  }
}

setLanguage(language);
document.getElementById('languageSelect').addEventListener('change', event => setLanguage(event.target.value));
document.querySelector('.brand').addEventListener('click', event => {
  event.preventDefault();
  if (answerTimer) { clearTimeout(answerTimer); answerTimer = null; }
  if (view === 'quiz') savedRun = { level: currentLevel, questions, answers, currentIndex };
  view = 'home';
  saveProgress();
  render();
  window.scrollTo(0, 0);
});
