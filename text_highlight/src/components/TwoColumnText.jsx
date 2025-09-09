import React, { useState, useRef } from "react";
import "./TwoColumnText.css";

/* ---------- bullets + extra narrative ---------- */
const bullets = [  
  { base: "Abdominal pain for 2–3 days, no bowel movement", detail: "the last documented bowel movement was three days prior, and moderate abdominal distension was noted on clinical examination" },
  { base: "CT showed large-bowel obstruction with cecal volvulus", detail: "the scan was performed on 12-Dec-2023 and showed no contrast extravasation; caecal volvulus was definitively confirmed" },
  { base: "Patient underwent exploratory laparotomy, found to have cecal volvulus, and had a right hemicolectomy with ileocolic anastomosis", detail: "the operation lasted three hours and ten minutes with an estimated blood loss of 250 mL and no intra-operative complications" },
  { base: "Past medical history significant for CAD, MI, HTN, DKD, renal-cell CA, atrial fibrillation", detail: "his last myocardial infarction occurred in 2018, he has stage III chronic kidney disease and is currently anticoagulated with apixaban" },
  { base: "Past surgical history: cholecystectomy, left nephrectomy, cystectomy with ileal conduit, AAA repair, pacemaker, PTCA", detail: "the left nephrectomy was performed in 2015 for renal-cell carcinoma and an endovascular stent graft was placed for the abdominal aortic aneurysm in 2019" }
];

/* opening narrative glue */
const narrative =
  "The patient presented to the emergency department with acute abdominal discomfort. Vital signs on arrival were stable. Laboratory work-up revealed mild leukocytosis and prerenal azotaemia. Following multidisciplinary discussion the decision was made to proceed with urgent surgery. The patient was optimised with fluid resuscitation and electrolyte correction pre-operatively. ";

export default function TwoColumnText() {
  const [activeIdx, setActiveIdx] = useState(null);
  const paraRef = useRef(null);

  const handleClick = (idx) => {
    setActiveIdx(idx);
    const mark = paraRef.current?.querySelector(`[data-i='${idx}']`);
    if (mark) mark.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      setActiveIdx(null);
    }, 3000); // remove highlight after 3 seconds
  };

  /* ----- Highlight and Scroll Logic ----- */
  const paragraph = (
    <>
    <h4 className="para-title">Patient Details</h4>
    <p ref={paraRef} className="report">
      {narrative}
      {bullets.map((b, i) => (
        <span key={i} className="clause">
          <span data-i={i} className={activeIdx === i ? "highlight" : ""}>
            {b.base}
          </span>
          {b.detail && <span className="detail">. {b.detail}</span>}
          {i < bullets.length - 1 ? ". " : ". "}
        </span>        
      ))}
    </p>
    </>    
  );

  return (
    <div className="two-column-text">
      {/* LEFT –  bullets points */}
      <div className="col left">
        {bullets.map((b, i) => (
          <p key={i} className="bullet" onClick={() => handleClick(i)}>
            {b.base}.
          </p>
        ))}
      </div>

      {/* RIGHT – single paragraph containing all bullets + context */}
      <div className="col right">{paragraph}</div>
    </div>
  );
}