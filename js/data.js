// Database seed data matching the Google Sheets schema
const regionsData = [
  { id: 1, city: "عمّان", country: "الأردن", lat: 31.9539, lng: 35.9106 },
  { id: 2, city: "القاهرة", country: "مصر", lat: 30.0444, lng: 31.2357 },
  { id: 3, city: "بيروت", country: "لبنان", lat: 33.8938, lng: 35.5018 },
  { id: 4, city: "الرياض", country: "السعودية", lat: 24.7136, lng: 46.6753 },
  { id: 5, city: "بغداد", country: "العراق", lat: 33.3152, lng: 44.3661 }
];

const slangTermsData = [
  { id: 1, region_id: 1, term: "شو الأخبار؟", meaning: "ما الأخبار؟ / كيف هي أحوالك؟", example: "هلا يا غالي، شو الأخبار معك اليوم؟", tone: "عامي / يومي", is_approved: 1 },
  { id: 2, region_id: 1, term: "مفشكل", meaning: "غير مرتب / فوضوي ومبعثر", example: "الجدول كله مفشكل ومحتاج ترتيب.", tone: "غير رسمي", is_approved: 1 },
  { id: 3, region_id: 1, term: "نهفة", meaning: "شخص مضحك جداً وذو طابع فكاهي", example: "صاحبنا هاد نهفة، كل ما يحكي بموت ضحك.", tone: "فكاهي / طريف", is_approved: 1 },
  { id: 4, region_id: 1, term: "فقعت معي", meaning: "نفد صبري / ضقت ذرعاً", example: "حاولت معه كثير بس فقعت معي وتركت الموضوع.", tone: "عامي / يومي", is_approved: 1 },
  { id: 5, region_id: 1, term: "كشخة", meaning: "أنيق جداً ومرتّب المظهر", example: "طالع اليوم كشخة عالآخر بالبدلة.", tone: "مدح / إطراء", is_approved: 1 },
  { id: 6, region_id: 2, term: "إزيك؟", meaning: "كيف حالك؟ / كيف أمورك؟", example: "إزيك يا باشا، طمني عن أخبارك؟", tone: "ودّي", is_approved: 1 },
  { id: 7, region_id: 2, term: "فضلت خيرك", meaning: "عبارة شكر تقال عند الاكتفاء من الطعام أو العطاء (زاد فضلك)", example: "شبعت والله يا صاحبي، فضلت خيرك.", tone: "مهذب", is_approved: 1 },
  { id: 8, region_id: 2, term: "يا رايق", meaning: "شخص هادئ ومسترخٍ ومزاجه عالي", example: "قاعد بتشرب شاي في البلكونة يا رايق.", tone: "عامي / يومي", is_approved: 1 },
  { id: 9, region_id: 2, term: "على الحديدة", meaning: "مفلس تماماً / لا يملك أي مال", example: "مش هقدر أخرج الليلة، أنا على الحديدة.", tone: "شعبي / دارج", is_approved: 1 },
  { id: 10, region_id: 2, term: "فكك مني", meaning: "دعني وشأني / ابتعد عني ولا تزعجني", example: "فكك من السيرة دي وركز في الشغل.", tone: "غير رسمي", is_approved: 1 },
  { id: 11, region_id: 3, term: "شو في ما في؟", meaning: "ما الجديد؟ / ماذا يحدث؟", example: "هاي! شو في ما في اليوم بالجامعة؟", tone: "عامي / يومي", is_approved: 1 },
  { id: 12, region_id: 3, term: "مهضوم", meaning: "محبوب ولطيف وذو روح مرحة", example: "كتير مهضوم هيدا الزلمة وحديثه حلو.", tone: "مدح / إطراء", is_approved: 1 },
  { id: 13, region_id: 3, term: "روّق / روقي", meaning: "اهدأ واسترح / لا تنفعل", example: "روّق أعصابك ما في شي بيستاهل العصبية.", tone: "ودّي", is_approved: 1 },
  { id: 14, region_id: 3, term: "يا زلمة", meaning: "يا رجل (نداء شائع للتأكيد أو العتاب الودي)", example: "يا زلمة صرلي ساعة ناطرك وينك؟", tone: "عامي / يومي", is_approved: 1 },
  { id: 15, region_id: 3, term: "بلا طعمة", meaning: "لا معنى له / سخيف وبلا فائدة", example: "هالمزحة كانت بلا طعمة وما حدا ضحك.", tone: "غير رسمي", is_approved: 1 },
  { id: 16, region_id: 4, term: "وش دعوة؟", meaning: "لمَ التردد أو التعجب؟ / الأمر لا يستحق العناء", example: "وش دعوة يا ابن الحلال، إحنا إخوان.", tone: "ودّي", is_approved: 1 },
  { id: 17, region_id: 4, term: "يا رجال", meaning: "يا رجل (تقال للتخفيف أو الاستغراب)", example: "يا رجال وسع صدرك الموضوع بسيط.", tone: "عامي / يومي", is_approved: 1 },
  { id: 18, region_id: 4, term: "صامل", meaning: "عازم ومصرّ وجاد في قراره", example: "أنا صامل أسجل بالكورس بكرا بإذن الله.", tone: "شعبي / دارج", is_approved: 1 },
  { id: 19, region_id: 4, term: "سالفة", meaning: "قصة / موضوع أو حديث", example: "تعال أقولك سالفة صارت معي اليوم.", tone: "عامي / يومي", is_approved: 1 },
  { id: 20, region_id: 4, term: "ما عندك أحد", meaning: "غافل / غير مبالٍ ولا يدري ما يجري", example: "أسأله عن الامتحان وهو ما عنده أحد.", tone: "فكاهي / طريف", is_approved: 1 },
  { id: 21, region_id: 5, term: "شلونك؟", meaning: "كيف حالك وصحتك؟", example: "شلونك عيوني، عساك بخير وصحة؟", tone: "ودّي", is_approved: 1 },
  { id: 22, region_id: 5, term: "هسة", meaning: "الآن / فوراً في هذه اللحظة", example: "لا تتأخر، تعال هسة منتظريك.", tone: "عامي / يومي", is_approved: 1 },
  { id: 23, region_id: 5, term: "فدوة", meaning: "تعبير يدل على المحبة والاستعداد للتضحية من أجل شخص", example: "فدوة لعينك ما قصرت ويايه أبداً.", tone: "مدح / إطراء", is_approved: 1 },
  { id: 24, region_id: 5, term: "شلتح", meaning: "شخص مهمل وغير منظم في تصرفاته", example: "لا تعتمد عليه بهالشغلة، ترا تصرفاته شلتح.", tone: "غير رسمي", is_approved: 1 },
  { id: 25, region_id: 5, term: "ولا يهمك", meaning: "لا تقلق أبداً / الأمر محلول", example: "ولا يهمك السالفة محلولة يمي.", tone: "ودّي", is_approved: 1 }
];

// Helper functions that mimic API calls
function getRegions() {
  return regionsData;
}

function getApprovedTerms() {
  return slangTermsData.filter(t => t.is_approved === 1);
}

function getRegionById(id) {
  return regionsData.find(r => r.id === id);
}