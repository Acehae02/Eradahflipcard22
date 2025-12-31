const data = [
  { q: "ما الجهة المانحة لاعتماد BHCOE؟", a: "مركز التميز في الصحة السلوكية – الولايات المتحدة الأمريكية." },
  { q: "ما الهدف من برنامج التدخل المبكر؟", a: "دعم النمو المبكر وتقليل آثار الإعاقة." },
  { q: "ما رؤية جمعية إرادة؟", a: "تعزيز جودة الحياة لذوي الاحتياجات الخاصة وإدماجهم بالمجتمع." }
];

const grid = document.getElementById("grid");

for (let i = 0; i < 300; i++) {
  const item = data[i % data.length];

  const card = document.createElement("div");
  card.className = "card";
  card.state = 0;

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const front = document.createElement("div");
  front.className = "card-face front";
  front.innerHTML = `<img src="images/irada-logo.png" alt="إرادة">`;

  const back = document.createElement("div");
  back.className = "card-face back";

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  card.addEventListener("click", () => {
    card.classList.remove("returning");

    if (card.state === 0) {
      back.textContent = item.q;
      card.classList.add("flipped");
      card.state = 1;
    } else if (card.state === 1) {
      back.textContent = item.a;
      card.state = 2;
    } else {
      card.classList.remove("flipped");
      card.classList.add("returning");
      card.state = 0;
    }
  });

  grid.appendChild(card);
}
