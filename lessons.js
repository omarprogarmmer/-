// lessons.js
const lessonsContent = `
  <h2>📚 الدروس</h2>
  <div class="lesson-card">
    <div class="lesson-title">الدرس الأول: مقدمة</div>
    <div class="lesson-description">تعريف بالمادة وأهداف التعلم.</div>
  </div>
  <div class="lesson-card">
    <div class="lesson-title">الدرس الثاني: التقدم</div>
    <div class="lesson-description">كيف تطور مهاراتك خلال فترة قصيرة.</div>
  </div>
  <div class="lesson-card">
    <div class="lesson-title">الدرس الثالث: التقييم</div>
    <div class="lesson-description">طرق قياس الفهم والتحصيل.</div>
  </div>
`;

document.getElementById('main-content').innerHTML = lessonsContent;
