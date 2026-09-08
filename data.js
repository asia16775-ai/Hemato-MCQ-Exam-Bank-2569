// ข้อมูลข้อสอบทั้งหมด จัดหมวดหมู่ตามบทเรียน
// src = ที่มา (Block 2.1 หรือ 2.2 และเลขข้อในไฟล์ recall ต้นฉบับ)

const CHAPTERS = [
 {id:'ch1', title:'1. พื้นฐานการเก็บตัวอย่าง, CBC และ Hematopoiesis', folder:'02_Specimen-Collection-CBC-Basics'},
 {id:'ch2', title:'2. Anemia: แนวทางประเมิน และ Nutritional Anemia (IDA, Megaloblastic)', folder:'03_Anemia-Nutritional'},
 {id:'ch3', title:'3. Hemolytic Anemia (G6PD, HS, AIHA, PNH) และ HDN', folder:'04_Hemolytic-Anemia-G6PD-HDN'},
 {id:'ch4', title:'4. Thalassemia', folder:'05_Thalassemia'},
 {id:'ch5', title:'5. Bone Marrow Failure, Aplastic Anemia, Pancytopenia', folder:'06_BM-Failure-Aplastic-Pancytopenia'},
 {id:'ch6', title:'6. Hematologic Malignancy: Leukemia, Lymphoma, MPD', folder:'07_Leukemia-Lymphoma-MPD'},
 {id:'ch7', title:'7. Hemostasis, Bleeding Disorders, Coagulation', folder:'08_Hemostasis-Bleeding-Coagulation'},
 {id:'ch8', title:'8. Thrombosis, Anticoagulant &amp; Antiplatelet Drugs', folder:'09_Thrombosis-Anticoagulant'},
 {id:'ch9', title:'9. Blood Bank: Blood Group, Compatibility, Transfusion Reaction', folder:'10_Blood-Bank-Transfusion'},
 {id:'ch10', title:'10. HIV และยาต้านไวรัส (ARV)', folder:'11_HIV-ARV'},
 {id:'ch11', title:'11. Systemic Infection &amp; Malaria', folder:'12_Systemic-Infection-Malaria'},
];

const QUESTIONS = [

// ============ CHAPTER 1 ============
{ch:'ch1', src:'Block 2.1 ข้อ 39', topic:'Specimen collection',
 stem:'แพทย์ต้องการเจาะเลือดที่ปลายนิ้ว เพื่อวัดระดับน้ำตาล จงเลือกนิ้วและตำแหน่งที่เหมาะสมในการเจาะเลือด',
 choices:['นิ้วหัวแม่มือ ตำแหน่งขนานกับปลายนิ้วมือ','นิ้วชี้ ตำแหน่งขนานกับปลายนิ้วมือ','นิ้วกลาง ตำแหน่งขนานกับปลายนิ้วมือ','นิ้วนาง ตำแหน่งตั้งฉากกับปลายนิ้วมือ','นิ้วก้อย ตำแหน่งตั้งฉากกับปลายนิ้วมือ'],
 correctIdx:3, answer:'นิ้วนาง ตำแหน่งตั้งฉากกับปลายนิ้วมือ (ด้านข้างของปลายนิ้ว)',
 explain:'<p>หลักการเจาะเลือดปลายนิ้ว (fingerstick/capillary puncture):</p><ul>'+
 '<li><b>นิยมใช้นิ้วนางหรือนิ้วกลาง</b> เพราะมีขนาดพอเหมาะ หลีกเลี่ยงนิ้วหัวแม่มือและนิ้วชี้ (ใช้งานบ่อย เจ็บมาก และเสี่ยงปนเปื้อนจากการสัมผัสสิ่งของ) และหลีกเลี่ยงนิ้วก้อย (เนื้อเยื่อบางเกินไป เข็มอาจโดนกระดูก)</li>'+
 '<li><b>ตำแหน่งที่เจาะต้องตั้งฉากกับลายนิ้วมือ (perpendicular to the fingerprint ridges)</b> ไม่ใช่ขนาน เพราะการเจาะขวางลายนิ้วมือจะทำให้เลือดไหลออกมาเป็นหยดกลมง่ายกว่า (ไม่ไหลเป็นทางยาวตามร่องนิ้วจนเก็บยาก) และหลีกเลี่ยงกึ่งกลางปลายนิ้ว (มีปลายประสาทหนาแน่น เจ็บมากกว่า) ให้เจาะบริเวณด้านข้างของปลายนิ้วเล็กน้อย</li>'+
 '</ul>',
 ref:'02_Specimen-Collection-CBC-Basics/การเจาะเลือด.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 40', topic:'Venipuncture',
 stem:'เส้นเลือดที่เหมาะในการเจาะ (venipuncture) คือเส้นใด',
 choices:['Median cubital vein','Basilic vein','Cephalic vein','Saphenous vein'],
 correctIdx:2, answer:'Cephalic vein (เป็นหนึ่งในสามเส้นหลักที่ใช้เจาะเลือดบริเวณข้อพับแขน)',
 explain:'<p>บริเวณข้อพับแขน (antecubital fossa) มีเส้นเลือดดำ 3 เส้นหลักที่ใช้เจาะเลือดได้ เรียงตามความนิยม:</p><ul>'+
 '<li><b>Median cubital vein</b> — นิยมที่สุด เพราะอยู่ตื้น ขนาดใหญ่ ไม่ค่อยเคลื่อนที่ (fixed) และใกล้เส้นประสาท/หลอดเลือดแดงน้อยกว่า</li>'+
 '<li><b>Cephalic vein</b> — อยู่ด้านนอก (radial side) ของแขน เป็นตัวเลือกรอง ใช้เมื่อ median cubital ไม่ชัดหรือหาไม่ได้ ถือว่าปลอดภัยดีแม้จะเคลื่อนตัวได้ง่ายกว่าเล็กน้อย</li>'+
 '<li><b>Basilic vein</b> — อยู่ด้านใน (ulnar side) เป็นตัวเลือกสุดท้าย เพราะอยู่ใกล้เส้นประสาท median nerve และหลอดเลือดแดง brachial artery เสี่ยงภาวะแทรกซ้อนมากที่สุด</li>'+
 '</ul>',
 ref:'02_Specimen-Collection-CBC-Basics/การเจาะเลือด.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 41', topic:'Basic clinical skill',
 stem:'ข้อใดกล่าวถูกต้องเกี่ยวกับความดันโลหิตที่วัดได้สูงผิดปกติเฉพาะเมื่อมาพบแพทย์',
 choices:['Masked hypertension','White coat hypertension','Secondary hypertension','Orthostatic hypotension'],
 correctIdx:1, answer:'White coat hypertension — ความดันสูงกว่าความเป็นจริงเนื่องจากความเครียด/วิตกกังวลขณะพบแพทย์',
 explain:'<p><b>White coat hypertension</b> คือภาวะที่ผู้ป่วยวัดความดันโลหิตได้สูง (≥140/90 mmHg) เฉพาะเมื่อวัดในสถานพยาบาลหรือโดยบุคลากรทางการแพทย์ แต่เมื่อวัดที่บ้านหรือด้วย ambulatory BP monitoring กลับอยู่ในเกณฑ์ปกติ เกิดจากความวิตกกังวล/ความเครียดชั่วคราว ไม่ใช่ความดันโลหิตสูงจริง ตรงข้ามกับ <b>masked hypertension</b> ที่วัดในคลินิกปกติ แต่วัดที่บ้านกลับสูง</p>',
 ref:'02_Specimen-Collection-CBC-Basics/สรุปเจาะเลือด-วัดความดัน.html'},

{ch:'ch1', src:'Block 2.1 ข้อ 42', topic:'Hematopoiesis',
 stem:'Hematopoiesis ในผู้ใหญ่ (adult) เกิดขึ้นหลักที่กระดูกใด',
 choices:['กระดูกมือและเท้า (distal long bone)','กระดูกต้นแขน/ต้นขาส่วนกลาง (mid-shaft long bone)','กระดูกเชิงกราน (Pelvis) และกระดูกแกนกลางลำตัว','กะโหลกศีรษะเพียงอย่างเดียว'],
 correctIdx:2, answer:'Pelvic bone และกระดูกแกน (axial skeleton) อื่นๆ เช่น sternum, vertebrae, ribs, skull',
 explain:'<p>ในเด็กแรกเกิด hematopoiesis เกิดขึ้นในไขกระดูกของกระดูกแทบทุกชิ้นทั่วร่างกาย (red marrow เต็มพื้นที่) แต่เมื่อโตขึ้น marrow ที่กระดูกยาวส่วนปลาย (long bones ส่วน distal เช่น มือ เท้า) จะถูกแทนที่ด้วยไขมันกลายเป็น yellow marrow ในผู้ใหญ่ red marrow ที่ยัง active hematopoiesis จะเหลืออยู่เฉพาะกระดูกแกนกลางลำตัว ได้แก่ <b>pelvis (มากที่สุด และเป็นตำแหน่งมาตรฐานที่ใช้เจาะ bone marrow aspiration/biopsy คือ posterior iliac crest), sternum, vertebrae, ribs, skull, และ proximal femur/humerus</b></p>',
 ref:'02_Specimen-Collection-CBC-Basics/Normal hematopoiesis.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 43', topic:'Hematopoiesis',
 stem:'ระยะใดของการสร้างเม็ดเลือดแดง (erythropoiesis) ที่ต้องพึ่งพา Erythropoietin (EPO) มากที่สุดเพื่อความอยู่รอดของเซลล์ (survival)',
 choices:['BFU-E','CFU-E','Proerythroblast','Reticulocyte'],
 correctIdx:1, answer:'CFU-E (Colony Forming Unit-Erythroid)',
 explain:'<p>ลำดับการเจริญของเซลล์สาย erythroid: <code>Pluripotent stem cell → BFU-E → CFU-E → Proerythroblast → Basophilic → Polychromatic → Orthochromatic normoblast → Reticulocyte → Mature RBC</code></p>'+
 '<p><b>CFU-E เป็นระยะที่มี EPO receptor หนาแน่นที่สุด และพึ่งพา EPO สูงสุดเพื่อป้องกัน apoptosis (survival signal)</b> หาก EPO ต่ำ เซลล์ระยะนี้จะตายจาก apoptosis ทำให้ erythropoiesis ลดลงอย่างมาก ส่วน BFU-E ตอบสนองต่อ EPO น้อยกว่าและอาศัย growth factor อื่น (เช่น IL-3, SCF) เป็นหลักในระยะแรก</p>',
 ref:'02_Specimen-Collection-CBC-Basics/Normal hematopoiesis.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 44', topic:'WBC morphology',
 stem:'ให้ลักษณะเซลล์เม็ดเลือดขาวมา: coarse nucleus (นิวเคลียสหยาบ), neutrophilic granule, eosinophilic cytoplasm, no indentation (นิวเคลียสยังไม่เว้า) — เป็นเซลล์ระยะใด',
 choices:['Promyelocyte','Myelocyte','Metamyelocyte','Band form'],
 correctIdx:1, answer:'Myelocyte',
 explain:'<p>ลำดับการเจริญของเม็ดเลือดขาวสาย granulocyte: <code>Myeloblast → Promyelocyte → Myelocyte → Metamyelocyte → Band form → Segmented neutrophil</code></p>'+
 '<p>จุดสำคัญในการแยกระยะ: <b>Myelocyte</b> เป็นระยะแรกที่เริ่มเห็น secondary (specific) granule ชัดเจนตามชนิดเซลล์ (neutrophilic/eosinophilic/basophilic granule) นิวเคลียสเริ่มหยาบขึ้น (condensed) แต่ยัง<b>กลมรี ไม่เว้า (no indentation)</b> ต่างจาก Metamyelocyte ที่นิวเคลียสเริ่มเว้าเป็นรูปไต (kidney-shaped) และ Band form ที่นิวเคลียสโค้งเป็นแท่ง (band-shaped) ยังไม่แบ่งเป็น lobe</p>',
 ref:'02_Specimen-Collection-CBC-Basics/Normal hematopoiesis.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 45', topic:'Megakaryopoiesis',
 stem:'เกี่ยวกับ Thrombocytosis/Megakaryocyte ข้อใดถูกต้อง',
 choices:['เกิดจากการแบ่งตัวแบบ mitosis ปกติทีละเซลล์','เกิดจาก endomitosis คือแบ่งนิวเคลียสซ้ำ (karyokinesis) หลายรอบโดยไม่มี cytokinesis','เกิดจากการรวมตัว (fusion) ของหลายเซลล์เป็นเซลล์เดียว','เกิดจาก apoptosis ของ myeloblast'],
 correctIdx:1, answer:'Megakaryocyte เกิดจาก endomitosis คือมีการแบ่งนิวเคลียส (karyokinesis) ซ้ำหลายรอบ แต่ไม่มีการแบ่งไซโทพลาซึม (cytokinesis) ทำให้ได้เซลล์ขนาดใหญ่ นิวเคลียสเป็น polyploid (multilobed) เซลล์เดียว',
 explain:'<p>Megakaryocyte เจริญผ่านกระบวนการพิเศษที่เรียกว่า <b>endomitosis</b> — มีการจำลอง DNA และแบ่งนิวเคลียสซ้ำๆ (จาก 2N ไปจนถึง 8N-32N หรือมากกว่า) แต่เซลล์<b>ไม่แบ่งตัวเป็นสองเซลล์ (cytokinesis ไม่สมบูรณ์)</b> ทำให้ได้เซลล์ขนาดใหญ่มากที่มีนิวเคลียสเดียวแบบ multilobed (polyploid) จากนั้นไซโทพลาซึมจะแตกตัวเป็นเกล็ดเลือด (platelet) หลายพันตัวต่อหนึ่ง megakaryocyte โดยผ่าน proplatelet formation</p>',
 ref:'02_Specimen-Collection-CBC-Basics/Normal hematopoiesis.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 46', topic:'B cell development',
 stem:'เกี่ยวกับ B cell development ข้อใดถูกต้อง',
 choices:['Naïve B-cell พัฒนาเป็น effector cell ได้โดยไม่ต้องพึ่ง T-helper cell','B-cell ทุกตัวที่เข้า germinal center จะกลายเป็น plasma cell เสมอ','Naïve B-cell ที่เข้า germinal center จะพัฒนาไปเป็น effector cell (Plasma/Memory cell)','Memory B-cell สร้างจาก bone marrow โดยตรงไม่ผ่าน germinal center'],
 correctIdx:2, answer:'Naïve B-cell → เข้า germinal center (เจอ antigen + T-helper cell) → เกิด somatic hypermutation + affinity maturation + class switching → พัฒนาเป็น Plasma cell หรือ Memory B cell',
 explain:'<p>เมื่อ naïve B-cell เจอแอนติเจนที่จำเพาะ และได้รับสัญญาณช่วยจาก follicular helper T-cell (Tfh) จะเข้าไปตั้งถิ่นใน <b>germinal center</b> ของต่อมน้ำเหลือง แล้วเกิดกระบวนการ 3 อย่างสำคัญ:</p><ul>'+
 '<li><b>Somatic hypermutation</b> — กลายพันธุ์ยีน antibody เพื่อสร้างความหลากหลาย</li>'+
 '<li><b>Affinity maturation</b> — คัดเลือกเฉพาะ B-cell ที่จับแอนติเจนได้แน่นที่สุดให้อยู่รอด</li>'+
 '<li><b>Class switch recombination</b> — เปลี่ยนชนิด antibody จาก IgM เป็น IgG/IgA/IgE</li>'+
 '</ul><p>สุดท้ายจะแบ่งตัวเป็น <b>Plasma cell</b> (สร้าง antibody จำนวนมาก) หรือ <b>Memory B-cell</b> (คงอยู่ระยะยาวเพื่อการตอบสนองครั้งต่อไป)</p>',
 ref:'02_Specimen-Collection-CBC-Basics/Normal hematopoiesis.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 22', topic:'CBC calculation',
 stem:'ให้ค่า absolute WBC count และจำนวน NRBC (nucleated RBC) มา ให้หา corrected WBC count',
 choices:['Corrected WBC = WBC × (100+NRBC)/100','Corrected WBC = (WBC×100)/(100+NRBC)','Corrected WBC = WBC − NRBC','Corrected WBC = WBC / NRBC × 100'],
 correctIdx:1, answer:'Corrected WBC = (WBC ที่นับได้ × 100) ÷ (100 + จำนวน NRBC ต่อ WBC 100 ตัว)',
 explain:'<p>เครื่องนับเม็ดเลือดอัตโนมัติจะนับ NRBC (nucleated RBC / erythroblast) ปนไปกับ WBC เพราะทั้งคู่มีนิวเคลียส ทำให้ WBC ที่รายงานออกมาสูงเกินจริงเมื่อมี NRBC ปนในเลือดมาก (พบได้ในภาวะ severe anemia, hemolysis, marrow infiltration, extramedullary hematopoiesis)</p>'+
 '<div class="diagram-wrap"><b>สูตรแก้ไข:</b><br><code style="font-size:15px">Corrected WBC = (Uncorrected WBC × 100) / (100 + NRBC per 100 WBC)</code></div>'+
 '<p>ตัวอย่าง: WBC วัดได้ 20,000/µL นับ NRBC ได้ 25 ตัวต่อ WBC 100 ตัวบน smear → Corrected WBC = (20,000×100)/(100+25) = 16,000/µL</p>',
 ref:'02_Specimen-Collection-CBC-Basics/CBC2025.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 20', topic:'CBC calculation',
 stem:'คำนวณ Corrected Reticulocyte Count (CRC)',
 choices:['CRC(%) = Retic(%) × (45/Hct ผู้ป่วย)','CRC(%) = Retic(%) + Hct ผู้ป่วย','CRC(%) = Retic(%) × (Hct ผู้ป่วย/45)','CRC(%) = Retic(%) − (Hct ผู้ป่วย/45)'],
 correctIdx:2, answer:'CRC (%) = %Reticulocyte ที่นับได้ × (Hct ผู้ป่วย ÷ Hct ปกติ 45%)',
 explain:'<p>%Reticulocyte ดิบที่รายงานจากห้องแล็บเป็น "สัดส่วนต่อ RBC ทั้งหมด" ซึ่งจะสูงเกินจริงเมื่อผู้ป่วยมี Hct ต่ำ (เพราะสัดส่วนของ reticulocyte ต่อ RBC รวมจะดูสูงขึ้นทั้งที่ marrow อาจไม่ได้ทำงานเพิ่มขึ้นจริง) จึงต้อง "แก้ไข" ด้วย Hct เพื่อดูการตอบสนองของไขกระดูกที่แท้จริง</p>'+
 '<div class="diagram-wrap"><code style="font-size:15px">CRC (%) = Retic (%) × (Hct ผู้ป่วย / 45)</code></div>'+
 '<p>การแปลผล: <b>CRC &gt; 2-3%</b> = ไขกระดูกตอบสนองดี (adequate marrow response) พบใน hemolytic anemia หรือ acute blood loss ที่ marrow ปกติ · <b>CRC &lt; 2%</b> = ไขกระดูกตอบสนองไม่เพียงพอ (inadequate response) บ่งชี้ hypoproliferative anemia เช่น iron deficiency, aplastic anemia, anemia of chronic disease</p>',
 ref:'02_Specimen-Collection-CBC-Basics/6 การตรวจ Reticulocyte count และ.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 15', topic:'Specimen tubes',
 stem:'คนไข้มีอาการไข้มา 3 วัน อาเจียนและถ่ายเหลววันละ 3-4 ครั้ง เพลีย ทานได้น้อย และมีภาวะขาดน้ำ จะส่งเลือดชนิดใดบ้างเพื่อใช้ในการตรวจทางห้องปฏิบัติการวินิจฉัยผู้ป่วยรายนี้',
 choices:['หลอดจุกสีแดง (Clot activator) เดี่ยว','หลอดจุกสีม่วง (EDTA) เดี่ยว','หลอดจุกสีม่วง (EDTA) + หลอดจุกสีเขียว (Lithium heparin)','หลอดจุกสีฟ้า (Sodium citrate) เดี่ยว'],
 correctIdx:2, answer:'หลอดจุกปิดสีลาเวนเดอร์ที่มีสาร EDTA (สำหรับ CBC) และหลอดจุกปิดสีเขียวที่มีสาร Lithium heparin (สำหรับ electrolyte/renal function)',
 explain:'<p>ผู้ป่วยมีอาการ gastroenteritis + dehydration ต้องประเมิน 2 อย่างหลัก:</p><ul>'+
 '<li><b>CBC</b> เพื่อดู hemoconcentration, infection (leukocytosis) → ใช้หลอด <b>สีม่วง/ลาเวนเดอร์ (EDTA)</b> ซึ่งจับ Ca²⁺ ป้องกันเลือดแข็งตัวโดยไม่รบกวนรูปร่างเซลล์</li>'+
 '<li><b>Electrolyte, BUN/Cr (renal function)</b> เพื่อประเมินภาวะขาดน้ำและความผิดปกติของเกลือแร่ → ใช้หลอด <b>สีเขียว (Lithium heparin)</b> สำหรับ plasma chemistry ที่ต้องการผลเร็ว (ไม่ต้องรอ clot เหมือนหลอดสีแดง/เหลือง)</li>'+
 '</ul>',
 ref:'02_Specimen-Collection-CBC-Basics/2 ชนิดของหลอดเก็บเลือดและสารกัน.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 14', topic:'Specimen collection - special',
 stem:'ถ้าต้องการตรวจ blood alcohol level ให้ใช้น้ำยาฆ่าเชื้อชนิดใดในการเช็ดผิวหนังก่อนเจาะเลือด',
 choices:['70% Isopropyl alcohol','Povidone-iodine','Benzalkonium chloride','Chlorhexidine gluconate'],
 correctIdx:2, answer:'Benzalkonium chloride (ห้ามใช้แอลกอฮอล์เช็ดผิวหนัง)',
 explain:'<p>ปกติใช้ 70% isopropyl alcohol เช็ดผิวหนังก่อนเจาะเลือด แต่<b>ห้ามใช้แอลกอฮอล์เมื่อจะตรวจ blood alcohol level</b> เพราะแอลกอฮอล์ที่ผิวหนังอาจซึมปนเข้าตัวอย่างเลือด ทำให้ผลตรวจสูงเกินจริง (false elevation) จึงต้องเปลี่ยนไปใช้น้ำยาฆ่าเชื้อที่ไม่มีแอลกอฮอล์เป็นส่วนประกอบ เช่น <b>Benzalkonium chloride หรือ Povidone-iodine</b> แทน</p>',
 ref:'02_Specimen-Collection-CBC-Basics/2 ชนิดของหลอดเก็บเลือดและสารกัน.pdf'},

{ch:'ch1', src:'Block 2.1 ข้อ 13', topic:'Lab safety', incomplete:true,
 stem:'ข้อไหนถูกต้องเกี่ยวกับ biologic safety (ข้อมูลตัวเลือกที่จำได้ไม่ครบถ้วน)',
 choices:['สวมถุงมือทุกครั้งที่อาจสัมผัสเลือด/สารคัดหลั่ง และทิ้งเข็มในภาชนะทนเข็มทะลุทันทีโดยไม่ recap','Recap เข็มด้วยมือสองข้างก่อนทิ้งเสมอเพื่อป้องกันอุบัติเหตุ','ถือว่าเฉพาะเลือดผู้ป่วยที่ทราบว่าติดเชื้อเท่านั้นที่มีความเสี่ยง','สามารถทิ้งเข็มปนกับขยะทั่วไปได้หากเช็ดแอลกอฮอล์แล้ว'],
 correctIdx:0, answer:'หลักการ Standard/Universal Precaution: สวม PPE ทุกครั้ง, ล้างมือก่อน-หลัง, ทิ้งเข็ม/ของมีคมใน sharps container ทันที ไม่ recap เข็ม, ถือว่าเลือด/สารคัดหลั่งทุกชนิดมีเชื้อโรคปนเปื้อนเสมอ',
 explain:'<p>ข้อนี้ผู้บันทึกจำตัวเลือกไม่ครบ จึงให้หลักการทั่วไปของ Biosafety/Standard Precaution ที่มักออกสอบไว้ทบทวน: (1) ถือว่าเลือดและสารคัดหลั่งทุกตัวอย่างมีความเสี่ยงติดเชื้อเสมอ ไม่ว่าจะทราบประวัติผู้ป่วยหรือไม่ (2) สวมถุงมือ/แว่นตา/เสื้อกาวน์ตามความเสี่ยงของหัตถการ (3) ห้าม recap เข็มด้วยมือสองข้าง (two-handed recapping) (4) ทิ้งของมีคมในภาชนะทนเข็มทะลุ (puncture-resistant sharps container) ทันทีหลังใช้</p>',
 note:'ตัวเลือกต้นฉบับไม่ครบถ้วน แนะนำทบทวนจากเอกสาร specimen collection ฉบับเต็ม',
 ref:'02_Specimen-Collection-CBC-Basics/SPECIMEN COLLECTION 2026.pdf'},

// ============ CHAPTER 2: Anemia - Nutritional & Approach ============
{ch:'ch2', src:'Block 2.1 ข้อ 17', topic:'Approach to anemia', incomplete:true,
 stem:'คนไข้หญิง 4 เดือนที่ผ่านมาประจำเดือนมามาก มีอาการอ่อนเพลีย มึนหัว ควรเริ่มตรวจอะไรเป็นอย่างแรก',
 choices:['Serum ferritin ทันทีโดยไม่ต้องตรวจ CBC ก่อน','CBC + Peripheral Blood Smear','Bone marrow biopsy','Coagulogram (PT/aPTT)'],
 correctIdx:1, answer:'CBC (Complete Blood Count) พร้อมดู RBC indices (โดยเฉพาะ MCV) และ Peripheral blood smear',
 explain:'<p>ผู้ป่วยมีปัจจัยเสี่ยง <b>menorrhagia เรื้อรัง 4 เดือน</b> ซึ่งเป็นสาเหตุคลาสสิกของ <b>Iron deficiency anemia (IDA)</b> จากการเสียเลือดเรื้อรัง แนวทาง investigation:</p>'+
 '<p><b>ขั้นที่ 1 (initial):</b> CBC + MCV/MCH (ดูว่าเป็น microcytic hypochromic หรือไม่) + Peripheral blood smear (ดู microcytosis, hypochromia, anisopoikilocytosis)</p>'+
 '<p><b>ขั้นที่ 2 (ยืนยันภาวะขาดธาตุเหล็ก):</b> Serum ferritin (ลดลงชัดเจนที่สุด และไวที่สุดในการวินิจฉัย IDA), Serum iron, TIBC, %Transferrin saturation</p>',
 ref:'03_Anemia-Nutritional/Anemia ปี3 2568.pdf'},

{ch:'ch2', src:'Block 2.1 ข้อ 19', topic:'Megaloblastic anemia',
 stem:'Hb 9.8 g/dL, Hct ต่ำ, MCV 102 fL (สูง), WBC ปกติ, Platelet 145,000 — anemia นี้เกิดจากสาเหตุใด',
 choices:['Iron deficiency','Vitamin B12 deficiency','Thalassemia','G6PD deficiency'],
 correctIdx:1, answer:'Vitamin B12 (หรือ Folate) deficiency → Megaloblastic anemia',
 explain:labBar('MCV',102,80,100,130,'fL')+'<p>MCV 102 fL คือ <b>macrocytic anemia</b> (MCV &gt; 100) ซึ่งตัดตัวเลือก Iron deficiency, Thalassemia และ G6PD deficiency ออกทันที เพราะทั้งสามภาวะนี้ทำให้เกิด <b>microcytic anemia</b> (MCV ต่ำ) เป็นหลัก</p>'+
 '<p>สาเหตุหลักของ macrocytic anemia ที่พบบ่อย ได้แก่ Vitamin B12 deficiency, Folate deficiency, Alcohol use, Hypothyroidism, Liver disease, Myelodysplastic syndrome — ในบริบทข้อสอบที่เน้น nutritional anemia คำตอบที่เข้าเกณฑ์มากที่สุดคือ <b>B12/Folate deficiency</b> ซึ่งจะพบ hypersegmented neutrophil บน peripheral smear ร่วมด้วย</p>',
 ref:'03_Anemia-Nutritional/Handout S - Megaloblastic anemia ผศ.พญ.อภิรดี วรรังสฤษฎิ์ Updated.pdf'},

{ch:'ch2', src:'Block 2.1 ข้อ 30', topic:'Iron deficiency anemia',
 stem:'ผลแล็บ Hb=8 g/dL, MCV=60 fL, ผลเลือดตัวอื่นปกติ ให้รูปมาเป็น RBC ตัวเล็กๆ กระจัดกระจาย ถามว่าเป็นโรคอะไร',
 choices:['Thalassemia trait','Iron deficiency anemia','Anemia of chronic disease','Sideroblastic anemia'],
 correctIdx:1, answer:'Iron deficiency anemia (microcytic hypochromic anemia)',
 explain:labBar('MCV',60,80,100,120,'fL')+'<p>MCV 60 fL ต่ำมาก (microcytic) ร่วมกับภาพ peripheral blood smear ที่เห็น RBC ขนาดเล็กกระจัดกระจาย (microcytosis + anisocytosis) เข้าได้กับกลุ่มโรค microcytic anemia ซึ่งจำง่ายด้วยคำย่อ <b>"TAILS"</b>: Thalassemia, Anemia of chronic disease, Iron deficiency, Lead poisoning, Sideroblastic anemia</p>'+
 '<p>เมื่อ "ผลเลือดตัวอื่นปกติ" (ไม่มี hemolysis, ไม่มีประวัติครอบครัว thalassemia ชัดเจน) และ MCV ต่ำมากขนาดนี้ คำตอบที่พบบ่อยและมีโอกาสสูงสุดคือ <b>Iron deficiency anemia</b> ซึ่งควรยืนยันด้วย serum ferritin ต่ำ, serum iron ต่ำ, TIBC สูง</p>',
 ref:'03_Anemia-Nutritional/Anemia ปี3 2568.pdf'},

{ch:'ch2', src:'Block 2.1 ข้อ 31', topic:'Megaloblastic anemia / drug',
 stem:'ผู้ป่วยกิน oral methotrexate ต้องให้อะไรเป็น co-medication',
 choices:['Hydroxocobalamin','Thiamine','Folic acid'],
 correctIdx:2, answer:'Folic acid',
 explain:'<p><b>Methotrexate เป็น folate antagonist</b> (ยับยั้งเอนไซม์ dihydrofolate reductase) ซึ่งใช้รักษาโรคภูมิต้านตนเอง เช่น Rheumatoid arthritis, Psoriasis รวมถึงเป็นยาเคมีบำบัด การให้ <b>Folic acid เสริม</b> ร่วมด้วย (มักให้วันถัดจากวันกิน methotrexate) ช่วยลดผลข้างเคียงจากการขาดกรดโฟลิก เช่น mucositis, ผมร่วง, ตับอักเสบ, cytopenia โดยไม่ลดประสิทธิภาพการรักษาโรคหลัก</p>',
 ref:'03_Anemia-Nutritional/Handout S - Megaloblastic anemia ผศ.พญ.อภิรดี วรรังสฤษฎิ์ Updated.pdf'},

{ch:'ch2', src:'Block 2.1 ข้อ 32', topic:'Vitamin B12 deficiency',
 stem:'ผู้ป่วยมาพร้อมอาการชาที่เท้า (numbness) 6 เดือน สูญเสียความรู้สึกที่เท้า Hb 7, WBC 4,000, Plt 100,000, PBS พบ Hypersegmented neutrophil ควรรักษาด้วยอะไร',
 choices:['Folate','Parenteral cobalamin','Oral iron','Parenteral iron'],
 correctIdx:1, answer:'Parenteral cobalamin (Vitamin B12 ฉีด)',
 explain:'<p>อาการชา/สูญเสียความรู้สึกที่เท้าเรื้อรัง ร่วมกับ pancytopenia และ hypersegmented neutrophil บ่งชี้ <b>Vitamin B12 deficiency ที่มีการทำลายระบบประสาท (subacute combined degeneration of spinal cord)</b> ซึ่งเป็นลักษณะเฉพาะที่ folate deficiency ไม่ทำให้เกิด (folate deficiency ไม่มีอาการทางระบบประสาท)</p>'+
 '<p>เมื่อมีอาการทางระบบประสาทแล้ว <b>ต้องรักษาด้วย Parenteral (ฉีด) B12 ไม่ใช่ oral</b> เพราะสาเหตุที่พบบ่อยของ B12 deficiency คือปัญหาการดูดซึม (เช่น pernicious anemia จาก intrinsic factor พร่อง, gastrectomy, ileal disease) การให้ oral จึงมักไม่ได้ผลเพียงพอในระยะเฉียบพลัน/มีอาการทางประสาท และ<b>ห้ามให้ folic acid เดี่ยวๆ</b> เพราะจะแก้ anemia ได้แต่จะยิ่งทำให้ neurological damage แย่ลง (folic acid "masks" hematologic แต่ไม่ป้องกัน neuro damage)</p>',
 ref:'03_Anemia-Nutritional/Handout S - Megaloblastic anemia ผศ.พญ.อภิรดี วรรังสฤษฎิ์ Updated.pdf'},

{ch:'ch2', src:'Block 2.1 ข้อ 48', topic:'Approach to anemia',
 stem:'ชายไทย 35 ปี เหนื่อยง่าย ออกกำลังกายได้น้อยลง 2 สัปดาห์ CBC: Hb 8 g/dL, Hct 24%, WBC 6,200, Platelet 155,000, MCV 94 fL, MCH 28 pg, MCHC 38 g/dL, Reticulocyte count = 8% (สูง) — ข้อใดอธิบายภาวะนี้ได้ดีที่สุด',
 choices:['Anemia from chronic kidney disease','AIHA (Autoimmune hemolytic anemia)','Anemia from chronic inflammatory disease','Iron deficiency'],
 correctIdx:1, answer:'AIHA (Autoimmune Hemolytic Anemia)',
 explain:labBar('Reticulocyte count',8,0.5,2.5,10,'%')+'<p>จุดสำคัญคือ <b>Reticulocyte count สูงถึง 8%</b> (ค่าปกติ 0.5-2.5%) แปลว่าไขกระดูกกำลังตอบสนองอย่างมากเพื่อชดเชยการทำลาย/สูญเสีย RBC — เป็น <b>hyperproliferative anemia</b></p>'+
 '<p>ข้อนี้ตัดตัวเลือกที่เป็น <b>hypoproliferative anemia</b> (retic ต่ำ/ปกติ) ออกไปได้ทันที คือ Anemia of CKD (ขาด EPO) และ Anemia of chronic inflammatory disease (ACD, จาก hepcidin สูงกั้นการใช้เหล็ก) เพราะทั้งสองภาวะนี้ retic count จะไม่สูงขึ้น ส่วน Iron deficiency มักให้ MCV ต่ำ (microcytic) ไม่ใช่ normocytic MCV 94 แบบในโจทย์นี้ ดังนั้นภาวะที่เข้าได้มากที่สุดคือ <b>Hemolytic anemia (AIHA)</b> ซึ่งเป็น normocytic anemia ที่มี retic สูงชดเชยจากการที่ RBC ถูกทำลายเร็ว</p>',
 ref:'03_Anemia-Nutritional/Anemia ปี3 2568.pdf'},

{ch:'ch2', src:'Block 2.1 ข้อ 51', topic:'GI bleeding / anemia management',
 stem:'ชาย 65 ปี กิน aspirin เพื่อป้องกัน CVA มีอาการ dizziness และ melena Hb/Hct ต่ำ WBC 11,300 Platelet 150,000 BP 90/60 HR 122 — Initial management คืออะไร',
 choices:['Vitamin K','BM biopsy','IV fluid + RBC transfusion','Oral iron'],
 correctIdx:2, answer:'IV fluid resuscitation + RBC transfusion',
 explain:'<p>ผู้ป่วยมี <b>acute upper GI bleeding</b> (melena) จากผลข้างเคียงของ aspirin (กัดกระเพาะ/แผลในกระเพาะ) ร่วมกับ <b>hemodynamic instability</b> ชัดเจน (BP 90/60, HR 122 = tachycardia จากการเสียเลือด/hypovolemia)</p>'+
 '<p>Priority แรกสุดในผู้ป่วยเลือดออกเฉียบพลันที่ vital signs ไม่คงที่ คือ <b>resuscitation ก่อนเสมอ (ABC → IV fluid + blood transfusion)</b> ไม่ใช่การรอสืบค้นสาเหตุ (เช่น BM biopsy ซึ่งไม่เกี่ยวข้องกับภาวะนี้เลย) ส่วน Vitamin K จะใช้ก็ต่อเมื่อมีภาวะ coagulopathy จากการขาด vitamin K หรือกิน warfarin ซึ่งในโจทย์นี้ไม่มีข้อมูลบ่งชี้ (ผู้ป่วยกิน aspirin ซึ่งเป็น antiplatelet ไม่ใช่ vitamin K antagonist) Oral iron ไม่เหมาะกับภาวะเฉียบพลันที่ต้องการแก้ไข hemodynamic ก่อน</p>',
 note:'บางแหล่งอาจสับสนกับ Vitamin K แต่ Vitamin K ใช้แก้ภาวะขาด vit K/ผลของ warfarin เท่านั้น ไม่ใช่ยาแก้เลือดออกจาก aspirin',
 ref:'03_Anemia-Nutritional/Anemia ปี3 2568.pdf'},

{ch:'ch2', src:'Block 2.1 ข้อ 52', topic:'Anemia of CKD',
 stem:'ผู้ป่วย Chronic Kidney Disease (CKD) ตรวจพบ CBC เป็น anemia ควรรักษาอย่างไร',
 choices:['ให้ Iron supplement เพียงอย่างเดียว','ให้ Recombinant Erythropoietin (EPO)','ให้เลือดทุกสัปดาห์โดยไม่ต้องหาสาเหตุ','ให้ Vitamin B12 ฉีด'],
 correctIdx:1, answer:'ให้ Recombinant human Erythropoietin (rHuEPO) ทดแทน (หลังแก้ไข iron store ให้เพียงพอก่อน/ร่วมด้วย)',
 explain:'<p>ไตที่เสียหายจาก CKD จะสร้าง <b>Erythropoietin (EPO)</b> ได้น้อยลง (EPO สร้างจาก peritubular fibroblast ของไต) ทำให้เกิด anemia แบบ normocytic normochromic, hypoproliferative (retic ต่ำ) การรักษาหลักคือ <b>ให้ EPO ทดแทน (Erythropoiesis-Stimulating Agents)</b> ร่วมกับตรวจและแก้ไข iron store ให้เพียงพอก่อนเสมอ (เพราะถ้าขาดเหล็กจะให้ EPO ไม่ได้ผล)</p>',
 ref:'03_Anemia-Nutritional/Anemia ปี3 2568.pdf'},

// ============ CHAPTER 3: Hemolytic Anemia (G6PD, HS, AIHA, PNH), HDN ============
{ch:'ch3', src:'Block 2.1 ข้อ 18', topic:'AIHA',
 stem:'หญิงวัยกลางคน มีอาการเหลือง (icteric), dark urine, WBC และ Platelet ปกติ, RDW สูง, Reticulocyte สูง — น่าจะเป็นโรคใด',
 choices:['G6PD deficiency','Iron deficiency anemia (IDA)','Thalassemia','Anemia of chronic disease','AIHA'],
 correctIdx:4, answer:'AIHA (Autoimmune Hemolytic Anemia)',
 explain:'<p>สามอาการหลักที่บ่งชี้ <b>hemolysis</b>: (1) เหลือง/ตัวเหลือง จาก unconjugated bilirubin สูง (2) dark urine จาก urobilinogen สูง (3) Reticulocyte สูง (marrow ตอบสนองชดเชย RBC ที่ถูกทำลาย) และ RDW สูง (RBC ขนาดไม่เท่ากันเพราะมี reticulocyte ที่มีขนาดใหญ่กว่าปนออกมามาก)</p>'+
 '<p>WBC/Platelet ปกติ (ไม่ใช่ marrow failure/leukemia) ตัดตัวเลือก IDA และ Thalassemia ออกเพราะทั้งสองไม่ทำให้เหลือง/dark urine ชัดเจนแบบนี้ (ไม่ hemolysis) ในผู้หญิงวัยกลางคนที่ไม่มีประวัติ G6PD มาก่อน กลุ่มก้อนอาการนี้เข้าได้กับ <b>Autoimmune Hemolytic Anemia (AIHA)</b> ซึ่งยืนยันได้ด้วย <b>Direct Antiglobulin Test (Direct Coombs test) ที่ให้ผลบวก</b></p>',
 ref:'04_Hemolytic-Anemia-G6PD-HDN/Handout S - Hemolytic diseases ผศ.พญ.อภิรดี วรรังสฤษฎิ์.pdf'},

{ch:'ch3', src:'Block 2.1 ข้อ 25', topic:'PNH',
 stem:'ผู้ป่วยชายอายุ 40 ปี มี fatigue, dark urine ที่สีเปลี่ยนแปลงในแต่ละวัน, pale conjunctiva, mild scleral icterus, PE ปกติ, ผลแล็บเลือดต่ำกว่าเกณฑ์ทุกตัว (pancytopenia) พบ cerebral vein thrombosis ร่วมด้วย ควรส่งตรวจอะไรเพื่อยืนยันการวินิจฉัย',
 choices:['Flow cytometry for CD55, CD59','Direct Coombs test','Osmotic fragility test','Direct enzyme assay'],
 correctIdx:0, answer:'Flow cytometry for CD55, CD59 (GPI-anchored proteins)',
 explain:'<p>Triad คลาสสิกของ <b>Paroxysmal Nocturnal Hemoglobinuria (PNH)</b>: (1) Hemolytic anemia (dark urine ที่เปลี่ยนความเข้มในแต่ละวัน จาก intravascular hemolysis) (2) Pancytopenia (มักมีพื้นฐาน bone marrow failure/aplastic anemia ร่วมด้วย) (3) <b>Thrombosis ในตำแหน่งผิดปกติ</b> (unusual site เช่น hepatic vein/Budd-Chiari, cerebral vein, mesenteric vein) — ซึ่งเป็นสาเหตุการเสียชีวิตอันดับต้นของโรคนี้</p>'+
 '<p>พยาธิกำเนิดเกิดจากการกลายพันธุ์ของยีน <b>PIGA</b> ทำให้เซลล์เม็ดเลือดขาด GPI-anchor protein ที่ปกป้องเซลล์จาก complement (เช่น CD55=DAF, CD59=MIRL) เซลล์จึงถูกทำลายโดย complement ง่าย การวินิจฉัยมาตรฐานปัจจุบันคือ <b>Flow cytometry ตรวจหา GPI-anchored protein (CD55, CD59, FLAER)</b> ที่ผิวเซลล์ ซึ่งมาแทนที่ Ham\'s test/Sucrose lysis test แบบเดิม</p>',
 ref:'04_Hemolytic-Anemia-G6PD-HDN/Handout S - Hemolytic diseases ผศ.พญ.อภิรดี วรรังสฤษฎิ์.pdf'},

{ch:'ch3', src:'Block 2.1 ข้อ 27', topic:'Hereditary spherocytosis / splenectomy', incomplete:true,
 stem:'Hb 9 g/dL, WBC 5,000, Platelet ต่ำ (จำค่าที่แน่นอนไม่ได้) — การรักษาที่เหมาะสมคือ',
 choices:['Corticosteroid เพียงอย่างเดียว','Splenectomy','IVIG (Intravenous Immunoglobulin)','Plasmapheresis'],
 correctIdx:1, answer:'Splenectomy (ในบริบทของ Hereditary spherocytosis หรือ Hemolytic anemia ที่รักษายากด้วยยา)',
 explain:'<p>ข้อมูลที่จำได้ไม่ครบพอจะระบุการวินิจฉัยที่แน่ชัด แต่คำตอบ "splenectomy" บ่งชี้ว่าโจทย์เดิมน่าจะเป็นกรณี <b>Hereditary Spherocytosis (HS)</b> รุนแรง/มีภาวะแทรกซ้อนบ่อย (recurrent hemolysis, gallstones, aplastic crisis) หรือ <b>Warm AIHA ที่ดื้อต่อ corticosteroid</b> ซึ่งม้ามเป็นอวัยวะหลักที่ทำลาย spherocyte (extravascular hemolysis) การตัดม้ามจึงช่วยลดอัตราการทำลายเม็ดเลือดแดงและลดความรุนแรงของภาวะซีดได้มาก</p>',
 note:'ตัวเลขแล็บและบริบทโจทย์จำมาไม่ครบ ไม่สามารถยืนยันการวินิจฉัยที่แน่ชัดได้ 100%',
 ref:'04_Hemolytic-Anemia-G6PD-HDN/Handout S - Hemolytic diseases ผศ.พญ.อภิรดี วรรังสฤษฎิ์.pdf'},

{ch:'ch3', src:'Block 2.1 ข้อ 28', topic:'Hereditary spherocytosis',
 stem:'ผู้ป่วยพบ spherocyte บน peripheral smear และตรวจ Direct Coombs test ได้ผล negative — เป็นโรคใด',
 choices:['Warm AIHA','Hereditary Spherocytosis (HS)','G6PD deficiency','Thalassemia trait'],
 correctIdx:1, answer:'Hereditary Spherocytosis (HS)',
 explain:'<p>Spherocyte พบได้ 2 กลุ่มโรคหลักคือ (1) Warm AIHA (2) Hereditary Spherocytosis — วิธีแยกที่สำคัญที่สุดคือ <b>Direct Antiglobulin Test (Direct Coombs test)</b>: หากผลเป็น <b>บวก</b> = AIHA (มี antibody เกาะ RBC) หากผลเป็น <b>ลบ</b> = <b>Hereditary Spherocytosis</b> (ความผิดปกติทางพันธุกรรมของโปรตีนโครงร่างเยื่อหุ้มเซลล์ เช่น spectrin, ankyrin, band 3 ไม่เกี่ยวกับ antibody) ยืนยันเพิ่มเติมด้วย Osmotic fragility test ที่เพิ่มขึ้น หรือ EMA binding test</p>',
 ref:'04_Hemolytic-Anemia-G6PD-HDN/Handout S - Hemolytic diseases ผศ.พญ.อภิรดี วรรังสฤษฎิ์.pdf'},

{ch:'ch3', src:'Block 2.1 ข้อ 35', topic:'G6PD deficiency - drug trigger',
 stem:'ชายอายุ 14 ปี มีปัสสาวะสีโคล่า (cola-colored urine) หลังทำ phototherapy ควรเลี่ยงใช้ยาชนิดใด',
 choices:['Paracetamol','Amoxicillin','Trimethoprim-sulfamethoxazole (TMP-SMX)','Omeprazole'],
 correctIdx:2, answer:'Trimethoprim-sulfamethoxazole (และยากลุ่ม sulfa อื่นๆ)',
 explain:'<p>ปัสสาวะสีโคล่า/ดำ (dark cola urine) คือลักษณะเฉพาะของ <b>intravascular hemolysis</b> จาก hemoglobinuria ในผู้ป่วย <b>G6PD deficiency</b> ที่ได้รับสารกระตุ้น oxidative stress ยาที่ต้อง<b>หลีกเลี่ยงอย่างเด็ดขาด</b>ในผู้ป่วย G6PD deficiency ได้แก่ <b>Sulfa drugs (Trimethoprim-sulfamethoxazole, Dapsone, Sulfasalazine), Nitrofurantoin, Primaquine/Chloroquine (ยาต้านมาลาเรีย), Aspirin ขนาดสูง, Methylene blue, Naphthalene (ลูกเหม็น), และถั่วปากอ้า (fava bean)</b></p>',
 ref:'04_Hemolytic-Anemia-G6PD-HDN/G-6-PD deficiency.pdf'},

{ch:'ch3', src:'Block 2.1 ข้อ 37', topic:'G6PD deficiency',
 stem:'ให้ภาพ Heinz body มา ควรส่งตรวจอะไรเพิ่มเติม',
 choices:['Direct Coombs test','Osmotic fragility test','Blood for G6PD screening','Hemoglobin electrophoresis'],
 correctIdx:2, answer:'ตรวจ G6PD screening/enzyme assay',
 explain:'<p><b>Heinz body</b> คือกลุ่มก้อนของ denatured hemoglobin ที่ตกตะกอนภายใน RBC เกิดจากการที่ hemoglobin ถูก oxidative damage โดยไม่มี G6PD enzyme มาปกป้อง (G6PD สร้าง NADPH เพื่อรักษาระดับ glutathione ในรูป reduced form ที่ช่วยกำจัด oxidative stress) เมื่อพบ Heinz body บน special stain (supravital stain เช่น crystal violet) ร่วมกับประวัติเหมาะสม (กินยา/อาหารกระตุ้น, การติดเชื้อ) ต้องส่งตรวจยืนยัน <b>G6PD enzyme screening/quantitative assay</b> — ข้อควรระวัง: ควรตรวจ<b>หลังพ้นภาวะ acute hemolysis ไปแล้ว</b> (เม็ดเลือดแดงรุ่นใหม่ reticulocyte จะมีค่า enzyme สูงกว่าปกติชั่วคราว ทำให้ผลตรวจช่วง acute อาจ false negative)</p>',
 ref:'04_Hemolytic-Anemia-G6PD-HDN/G-6-PD deficiency.pdf'},

// HDN
{ch:'ch3', src:'Block 2.2 ข้อ 37', topic:'Hemolytic Disease of the Newborn',
 stem:'ทารกตัวเหลืองหลังคลอด 12 ชั่วโมง แม่หมู่เลือด O ลูกหมู่เลือด A ถามว่าเกิดจากอะไร',
 choices:['Physiologic jaundice (ปกติ)','ABO incompatibility (Hemolytic Disease of the Newborn)','Breast milk jaundice','Biliary atresia'],
 correctIdx:1, answer:'Hemolytic Disease of the Fetus and Newborn (HDFN) จาก ABO incompatibility',
 explain:'<p>ตัวเหลืองที่เกิด<b>เร็วภายใน 24 ชั่วโมงแรก</b>หลังคลอด ถือเป็น <b>pathologic jaundice</b> เสมอ (ต่างจาก physiologic jaundice ที่มักเกิดหลัง 24 ชม.) สาเหตุที่พบบ่อยที่สุดของ pathologic jaundice ในทารกแรกเกิดคือ <b>Hemolytic Disease of the Newborn (HDN)</b></p>'+
 '<p>ในกรณีนี้ แม่หมู่เลือด <b>O</b> มี anti-A และ anti-B antibody ตามธรรมชาติ (naturally-occurring, ชนิด IgG ได้บางส่วน) ซึ่งสามารถผ่านรกไปทำลายเม็ดเลือดแดงของทารกที่มีหมู่เลือด <b>A</b> (มี A antigen) ได้ เกิดเป็น <b>ABO incompatibility hemolytic disease</b> — โดยทั่วไปรุนแรงน้อยกว่า Rh incompatibility และมักเกิดได้ตั้งแต่ท้องแรก (ต่างจาก Rh ที่มักรุนแรงขึ้นในท้องถัดไป)</p>',
 ref:'04_Hemolytic-Anemia-G6PD-HDN/Hemolytic disease of the fetus and newborn.pdf'},

// ============ CHAPTER 4: Thalassemia ============
{ch:'ch4', src:'Block 2.1 ข้อ 3', topic:'Alpha-thalassemia',
 stem:'เด็ก (มีอาการ alpha-thalassemia) เสียชีวิตหลังคลอด ตรวจพบ HbF 80% ไม่มี HbA และ HbA2 — ภาวะนี้คือ genotype ใด',
 choices:['β-thalassemia major (β0/β0)','--/-- (deletion alpha-globin ทั้ง 4 ตัว) → Hb Bart\'s Hydrops Fetalis','HbE/β-thalassemia disease','α-thalassemia trait (--/α)'],
 correctIdx:1, answer:'--/-- (deletion ของยีน alpha-globin ทั้ง 4 ตัว) → Hb Bart\'s Hydrops Fetalis',
 explain:'<p>มนุษย์มียีน alpha-globin ทั้งหมด <b>4 ตัว</b> (2 ตัวต่อโครโมโซม 16 ข้างละคู่) หากขาดหายไปทั้ง 4 ตัว (genotype <code>--/--</code>) จะไม่สามารถสร้าง alpha-globin chain ได้เลย ทารกในครรภ์จึงไม่สามารถสร้าง HbF (α2γ2) หรือ HbA (α2β2) ได้ตามปกติ</p>'+
 '<p>ในภาวะนี้ เม็ดเลือดแดงจะสร้าง <b>Hb Bart\'s (γ4, gamma chain 4 ตัวจับกันเอง)</b> เป็นหลักแทน ซึ่งมี affinity ต่อออกซิเจนสูงมากจนไม่ยอมปล่อยออกซิเจนให้เนื้อเยื่อ ทำให้ทารกขาดออกซิเจนรุนแรง เกิด <b>Hydrops fetalis</b> (บวมน้ำทั้งตัวจากหัวใจล้มเหลว) และเสียชีวิตในครรภ์หรือหลังคลอดทันที — เป็นภาวะที่รุนแรงที่สุดของ thalassemia ทั้งหมด</p>',
 ref:'05_Thalassemia/handout thalassemia 2026.pdf'},

{ch:'ch4', src:'Block 2.1 ข้อ 4', topic:'Beta-thalassemia major',
 stem:'เด็กชาย 7 ปี ซีดเล็กน้อย (pale), mild icteric, ม้ามโตปานกลาง Hb 5.8, MCV 58, HbF 95%, HbA 2%, HbA2 3% — วินิจฉัยคือ',
 choices:['Iron deficiency anemia รุนแรง','Beta-thalassemia major','Alpha-thalassemia trait','Sideroblastic anemia'],
 correctIdx:1, answer:'Beta-thalassemia major (Homozygous β0-thalassemia)',
 explain:labBar('Hb',5.8,11,14,16,'g/dL')+labBar('MCV',58,75,95,120,'fL')+labBar('HbF (%)',95,0,2,100,'%')+
 '<p>ลักษณะเข้าได้กับ <b>Beta-thalassemia major</b> ทุกจุด: severe microcytic anemia (Hb 5.8, MCV 58) + hepatosplenomegaly (จาก extramedullary hematopoiesis) + jaundice เล็กน้อย (จาก ineffective erythropoiesis/hemolysis) และที่สำคัญที่สุดคือ <b>Hemoglobin typing: HbF สูงถึง 95% แทบไม่มี HbA เลย</b> ซึ่งบ่งชี้ว่าผู้ป่วยไม่สามารถสร้าง beta-globin chain ได้เลย (β0/β0 หรือ β0/β+ รุนแรง) ร่างกายจึงต้องพึ่งพา HbF (α2γ2) เกือบทั้งหมดแทน HbA (α2β2) — ผู้ป่วยกลุ่มนี้ต้องพึ่งพา<b>การให้เลือดสม่ำเสมอตลอดชีวิต (transfusion-dependent thalassemia)</b></p>',
 ref:'05_Thalassemia/handout thalassemia 2026.pdf'},

{ch:'ch4', src:'Block 2.1 ข้อ 5', topic:'Thalassemia pathophysiology',
 stem:'เด็ก Beta-thalassemia major มี skeletal deformities (ใบหน้าเปลี่ยนรูป, กะโหลกหนา) เกิดจากกลไกใด',
 choices:['Autoimmune destruction ของ erythrocytes','Vitamin D deficiency','ไขกระดูกขยายตัวเพื่อชดเชยภาวะซีดเรื้อรัง (compensatory marrow expansion)','Deposition ของสารบางอย่าง'],
 correctIdx:2, answer:'ไขกระดูกขยายตัวมากผิดปกติเพื่อชดเชยภาวะซีดเรื้อรัง (massive compensatory erythroid marrow expansion)',
 explain:'<div class="diagram-wrap"><svg class="diagram" width="640" height="140" viewBox="0 0 640 140">'+
 '<rect x="0" y="55" width="140" height="34" rx="6" fill="var(--chip)" stroke="var(--border)"/><text x="70" y="76" text-anchor="middle" font-size="12" fill="var(--text)">β-globin สร้างไม่ได้</text>'+
 '<line x1="140" y1="72" x2="180" y2="72" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow4)"/>'+
 '<rect x="180" y="55" width="140" height="34" rx="6" fill="var(--chip)" stroke="var(--border)"/><text x="250" y="76" text-anchor="middle" font-size="12" fill="var(--text)">Ineffective erythropoiesis + chronic anemia/hypoxia</text>'+
 '<line x1="320" y1="72" x2="360" y2="72" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow4)"/>'+
 '<rect x="360" y="55" width="120" height="34" rx="6" fill="var(--chip)" stroke="var(--border)"/><text x="420" y="76" text-anchor="middle" font-size="12" fill="var(--text)">EPO หลั่งเพิ่มขึ้นมาก</text>'+
 '<line x1="480" y1="72" x2="520" y2="72" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow4)"/>'+
 '<rect x="520" y="40" width="120" height="60" rx="6" fill="var(--bad-light)" stroke="var(--bad)"/><text x="580" y="65" text-anchor="middle" font-size="11.5" fill="var(--bad)">Marrow expansion</text><text x="580" y="80" text-anchor="middle" font-size="11.5" fill="var(--bad)">→ bone thinning/</text><text x="580" y="94" text-anchor="middle" font-size="11.5" fill="var(--bad)">skeletal deformity</text>'+
 '<defs><marker id="arrow4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)"/></marker></defs>'+
 '</svg><small style="color:var(--muted)">แผนภาพ: กลไกการเกิด skeletal deformity ใน β-thalassemia major</small></div>'+
 '<p>ข้อควรทราบ: กลไกที่ถูกต้องคือ <b>chronic anemia/tissue hypoxia กระตุ้นให้ไตหลั่ง EPO เพิ่มขึ้น (ไม่ใช่ EPO ลดลง)</b> เพื่อพยายามชดเชย แต่เนื่องจาก erythroid precursor ไม่สามารถสร้าง Hb ที่สมบูรณ์ได้ (ineffective erythropoiesis) เซลล์ตั้งต้นเหล่านี้จึงเพิ่มจำนวนมหาศาลในไขกระดูกโดยไม่ได้ผลผลิตเป็น RBC ที่ใช้งานได้จริงมากนัก ไขกระดูกจึง<b>ขยายตัว (expand) ล้นออกนอกโพรงกระดูกปกติ</b> ทำให้กระดูกบางลง เปลี่ยนรูป เกิดลักษณะเฉพาะ เช่น <b>frontal bossing, maxillary hyperplasia ("chipmunk face"), hair-on-end appearance บน skull X-ray</b></p>'+
 '<p><i>หมายเหตุ: ตัวเลือกที่นิสิตจำมาระบุว่า "low EPO → BM expansion" ซึ่งคลาดเคลื่อนทางสรีรวิทยา ค่า EPO ในภาวะนี้จะ<b>สูงขึ้น</b>ไม่ใช่ลดลง แต่ผลลัพธ์ปลายทางคือ marrow expansion เช่นเดียวกัน</i></p>',
 note:'คำอธิบายกลไกที่ถูกต้องทางสรีรวิทยาคือ EPO สูงขึ้น (ไม่ใช่ต่ำลง) กรุณาอ้างอิงคำอธิบายละเอียดด้านบนเป็นหลัก',
 ref:'05_Thalassemia/handout thalassemia 2026.pdf'},

{ch:'ch4', src:'Block 2.1 ข้อ 6', topic:'Thalassemia genetic counseling',
 stem:'คำนวณโอกาสที่ลูกจะเป็นทาลัสซีเมีย: พ่อ HbA 95.5%, HbA2/E 4.5% (เข้าได้กับ β-thalassemia trait) แม่ HbA 75%, HbA2/E 25% (เข้าได้กับ HbE trait) ลูกมีโอกาสเป็นโรค (disease) เท่าไหร่',
 choices:['1/2','0','3/4','1/4'],
 correctIdx:3, answer:'1/4 (ลูกมีโอกาสเป็น HbE/β-thalassemia disease 25%)',
 explain:'<div class="diagram-wrap"><b>Punnett square:</b><br>พ่อเป็นพาหะ β-thalassemia trait (genotype β/β0 หรือ β/β+) → ให้ยีน β (ปกติ) หรือ β0 (ผิดปกติ) อย่างละ 50%<br>แม่เป็นพาหะ HbE trait (genotype β/βE) → ให้ยีน β (ปกติ) หรือ βE (ผิดปกติ) อย่างละ 50%<br><br>'+
 '<table style="width:100%;border-collapse:collapse;font-size:13px;text-align:center"><tr><th style="border:1px solid var(--border);padding:6px"></th><th style="border:1px solid var(--border);padding:6px">β (แม่ 50%)</th><th style="border:1px solid var(--border);padding:6px">βE (แม่ 50%)</th></tr>'+
 '<tr><th style="border:1px solid var(--border);padding:6px">β (พ่อ 50%)</th><td style="border:1px solid var(--border);padding:6px">β/β ปกติ (25%)</td><td style="border:1px solid var(--border);padding:6px">β/βE พาหะ HbE (25%)</td></tr>'+
 '<tr><th style="border:1px solid var(--border);padding:6px">β0 (พ่อ 50%)</th><td style="border:1px solid var(--border);padding:6px">β/β0 พาหะ thal (25%)</td><td style="border:1px solid var(--border);padding:6px"><b>β0/βE = โรค (25%)</b></td></tr></table></div>'+
 '<p>ดังนั้น: <b>1/4 ปกติ, 1/4 พาหะ β-thal, 1/4 พาหะ HbE, 1/4 เป็นโรค (β-thalassemia/HbE disease)</b> ซึ่งเป็น thalassemia disease ที่พบบ่อยที่สุดในประเทศไทยและมีความรุนแรงตั้งแต่ระดับปานกลางถึงรุนแรง</p>',
 ref:'05_Thalassemia/handout thalassemia 2026.pdf'},

// ============ CHAPTER 5: BM Failure, Aplastic Anemia, Pancytopenia ============
{ch:'ch5', src:'Block 2.1 ข้อ 60', topic:'Myelophthisic anemia',
 stem:'ผู้ป่วย Prostate cancer, WBC ต่ำ, ซีด ให้ภาพเลือดมามีเม็ดเลือดขาวหลาย stage มาก (leukoerythroblastic picture) — วินิจฉัยคือ',
 choices:['Myelodysplastic syndrome (MDS)','Myelophthisic anemia (Leukoerythroblastic)','Megaloblastic anemia','Hemolytic anemia'],
 correctIdx:1, answer:'Myelophthisic anemia (Leukoerythroblastic anemia จาก marrow infiltration)',
 explain:'<p><b>Myelophthisic anemia</b> เกิดจากมะเร็งหรือพังผืดมาแทรกซึม (infiltrate) ในไขกระดูกจนแทนที่เนื้อเยื่อสร้างเม็ดเลือดปกติ — สาเหตุที่พบบ่อยคือ <b>metastatic cancer (เช่น prostate, breast, lung cancer ที่ชอบแพร่ไปกระดูก), myelofibrosis, lymphoma, granulomatous disease</b></p>'+
 '<p>ลักษณะเฉพาะบน peripheral blood smear คือ <b>"Leukoerythroblastic picture"</b> — พบเซลล์เม็ดเลือดขาวและแดงในระยะยังไม่โตเต็มที่ (immature) หลุดออกมาในกระแสเลือด เช่น myelocyte, metamyelocyte, nucleated RBC (NRBC), teardrop RBC (dacrocyte) ซึ่งปกติไม่ควรพบในเลือดส่วนปลาย เพราะไขกระดูกที่ถูกทำลาย/แทรกซึมจะดันเซลล์ตั้งต้นที่ยังไม่สมบูรณ์ออกมาก่อนเวลา</p>',
 ref:'06_BM-Failure-Aplastic-Pancytopenia/BM failure ปี 3.pdf'},

{ch:'ch5', src:'Block 2.1 ข้อ 62', topic:'Aplastic anemia',
 stem:'ผู้หญิงเลือดออกตามไรฟัน Hb ต่ำ, Platelet ต่ำ, WBC ต่ำ, PMN 26% (ต่ำมาก), ไม่มีม้ามโต, ไม่มี NRBC, ไม่มีไข้ — วินิจฉัยคือ',
 choices:['Hypersplenism','Aplastic anemia','Megaloblastic anemia','Acute leukemia'],
 correctIdx:1, answer:'Aplastic Anemia (AA)',
 explain:'<p><b>Pancytopenia (Hb ต่ำ + Plt ต่ำ + WBC ต่ำ)</b> ที่ <b>ไม่มีม้ามโต และไม่มี NRBC/blast บน smear</b> เป็นลักษณะสำคัญที่ช่วยแยก Aplastic anemia ออกจากภาวะอื่น:</p><ul>'+
 '<li>ตัด <b>Hypersplenism</b> ออก เพราะ hypersplenism ต้องมีม้ามโต (splenomegaly) เสมอ ในโจทย์นี้ไม่มี</li>'+
 '<li>ตัด <b>Acute leukemia</b> ออก เพราะมักพบ blast cell บน peripheral smear และมักมีไข้/อาการติดเชื้อร่วม</li>'+
 '<li>ตัด <b>Megaloblastic anemia</b> ออก เพราะมักมี MCV สูง (macrocytic) และพบ hypersegmented neutrophil ไม่ใช่ pancytopenia เปล่าๆ แบบนี้</li></ul>'+
 '<p><b>Aplastic anemia</b> เกิดจากไขกระดูกฝ่อ (hypocellular marrow) สร้างเม็ดเลือดทั้ง 3 สายลดลง ยืนยันด้วย <b>Bone marrow biopsy พบ hypocellular marrow แทนที่ด้วยไขมัน (fatty infiltration)</b></p>',
 ref:'06_BM-Failure-Aplastic-Pancytopenia/BM failure ปี 3.pdf'},

{ch:'ch5', src:'Block 2.1 ข้อ 63', topic:'Aplastic anemia investigation',
 stem:'ชาย 25 ปี มีประวัติ viral infection มา 4 สัปดาห์ PE: petechiae, mild pallor, CBC: Hb 7.6, MCV 92, Reticulocyte 0.1% (ต่ำมาก), Platelet 25,000 — ควรส่งตรวจอะไรต่อ',
 choices:['Iron study','Serum B12','Hemoglobin electrophoresis','Direct antiglobulin test','Bone marrow biopsy/study'],
 correctIdx:4, answer:'Bone marrow biopsy/study',
 explain:labBar('Reticulocyte (%)',0.1,0.5,2.5,3,'%')+'<p>Reticulocyte count <b>ต่ำมากเพียง 0.1%</b> ร่วมกับ pancytopenia (ซีด+เกล็ดเลือดต่ำ, น่าจะ WBC ต่ำร่วมด้วย) หลังประวัติติดเชื้อไวรัส เข้าได้กับ <b>hypoproliferative marrow failure</b> (ไขกระดูกไม่ตอบสนอง/ไม่สร้างเม็ดเลือดเลย) เช่น <b>post-viral aplastic anemia</b> (ไวรัสที่สัมพันธ์บ่อย เช่น Parvovirus B19, EBV, Hepatitis virus, HIV)</p>'+
 '<p>เมื่อสงสัย marrow failure การตรวจที่ให้คำตอบชัดเจนที่สุดคือ <b>Bone marrow aspiration/biopsy</b> เพื่อดู cellularity ของไขกระดูกโดยตรง — MCV ปกติ (92) ทำให้ตัด Iron study/B12/Hb electrophoresis ออก (ไม่ใช่ microcytic หรือ macrocytic anemia) ส่วน Direct antiglobulin test ใช้แยก hemolysis ซึ่งในที่นี้ retic ต่ำ ไม่เข้ากับ hemolysis (hemolysis ควรมี retic สูง)</p>',
 ref:'06_BM-Failure-Aplastic-Pancytopenia/BM failure ปี 3.pdf'},

{ch:'ch5', src:'Block 2.1 ข้อ 64', topic:'Chemotherapy-induced marrow suppression',
 stem:'ผู้หญิงรักษา CA ovary ด้วย chemotherapy มี fatigue, easy bruising Hb 6.7, MCV 93, Reticulocyte 0.3% (ต่ำ), WBC 2,000, Platelet 55,000 — สิ่งที่ผิดปกติเกิดจากอะไร',
 choices:['Iron deficiency anemia','Chemotherapy-induced myelosuppression','Hemolytic anemia','Anemia of chronic disease'],
 correctIdx:1, answer:'Chemotherapy หรือ immunosuppression กดไขกระดูก (Chemotherapy-induced bone marrow suppression)',
 explain:'<p>ผู้ป่วยกำลังได้รับยาเคมีบำบัดซึ่งเป็นพิษต่อเซลล์ที่แบ่งตัวเร็ว รวมถึงเซลล์ต้นกำเนิดเม็ดเลือดในไขกระดูก (myelosuppression) ทำให้เกิด <b>pancytopenia แบบ hypoproliferative</b> (Reticulocyte ต่ำ = marrow ไม่ตอบสนอง) — เป็นผลข้างเคียงที่คาดการณ์ได้ (predictable/dose-dependent toxicity) ของยาเคมีบำบัดเกือบทุกชนิด โดยเฉพาะกลุ่ม alkylating agents และ platinum-based (มักใช้ใน CA ovary)</p>'+
 '<p>การดูแล: ติดตาม CBC สม่ำเสมอ, พิจารณาให้ growth factor (G-CSF) หากมี severe neutropenia, ให้เลือด/เกล็ดเลือดทดแทนตามอาการ, ระวังภาวะติดเชื้อในช่วง nadir ของ WBC</p>',
 ref:'06_BM-Failure-Aplastic-Pancytopenia/BM failure ปี 3.pdf'},

{ch:'ch5', src:'Block 2.1 ข้อ 65', topic:'Bone marrow suppression',
 stem:'ผู้ป่วยติดเชื้อซ้ำๆ (recurrent infection) Hb/Hct/WBC ต่ำ, Reticulocyte ต่ำมาก — เกิดจากอะไร',
 choices:['Hemolysis','Bone marrow suppression','Iron deficiency','Vitamin B12 deficiency'],
 correctIdx:1, answer:'Bone marrow suppression (ไขกระดูกถูกกดการทำงาน)',
 explain:'<p>การติดเชื้อซ้ำๆ ร่วมกับ pancytopenia และ reticulocyte ต่ำมาก บ่งชี้ว่าไขกระดูก<b>ไม่สามารถผลิตเซลล์เม็ดเลือดได้เพียงพอ (bone marrow suppression/failure)</b> ทำให้ทั้ง RBC (ซีด), WBC โดยเฉพาะ neutrophil (ติดเชื้อง่าย) และ platelet ลดลงพร้อมกัน สาเหตุที่ควรนึกถึง ได้แก่ aplastic anemia, myelodysplastic syndrome, marrow infiltration จากมะเร็ง, ผลข้างเคียงยา/รังสีรักษา, การติดเชื้อไวรัสบางชนิด</p>',
 ref:'06_BM-Failure-Aplastic-Pancytopenia/BM failure ปี 3.pdf'},

{ch:'ch5', src:'Block 2.1 ข้อ 67', topic:'Pancytopenia workup',
 stem:'หญิงอายุ 40 ปี มีอาการ fatigue, fever, bruising Hb 6.8, WBC 1,900, Platelet 30,000, Reticulocyte ต่ำ, ตับ/ม้ามปกติ — ควรส่งตรวจอะไรต่อ',
 choices:['PBS และ BM biopsy','UA','Stool exam','Coagulogram only','Serum ferritin'],
 correctIdx:0, answer:'Peripheral Blood Smear (PBS) และ Bone Marrow biopsy',
 explain:'<p>Pancytopenia รุนแรง (Hb, WBC, Platelet ต่ำทั้ง 3 สาย) ร่วมกับไข้และรอยฟกช้ำ โดยตับ/ม้ามไม่โต (ตัดภาวะ infiltrative disease ที่มักโตของอวัยวะ เช่น lymphoma/leukemia บางชนิดออกไปได้ระดับหนึ่ง) แนวทางมาตรฐานเมื่อพบ unexplained pancytopenia คือต้องดู<b>สัณฐานเซลล์ทั้งในเลือดส่วนปลายและในไขกระดูกโดยตรง</b> จึงต้องส่ง <b>Peripheral Blood Smear + Bone Marrow Aspiration/Biopsy</b> เป็นอันดับแรก เพื่อแยกกลุ่มโรคสำคัญ ได้แก่ Aplastic anemia, Acute leukemia, Myelodysplastic syndrome, Marrow infiltration (metastasis/lymphoma), Megaloblastic anemia รุนแรง</p>',
 ref:'06_BM-Failure-Aplastic-Pancytopenia/BM failure ปี 3.pdf'},

{ch:'ch5', src:'Block 2.1 ข้อ 69', topic:'Cytopenia in elderly', incomplete:true,
 stem:'อายุ 70 ปี ทุกอย่างต่ำหมด ยกเว้น lymphocyte (lymphocyte สูง) มีรูป neutrophil แบบ 2 lobe (bilobed) ถามว่าเป็นโรคอะไร',
 choices:['Chronic Lymphocytic Leukemia (CLL) หรือ Myelodysplastic Syndrome (MDS) with Pseudo-Pelger-Huet anomaly','Acute Myeloid Leukemia (AML)','Infectious Mononucleosis','Iron deficiency anemia'],
 correctIdx:0, answer:'ให้พิจารณา Myelodysplastic syndrome (MDS) หรือ Chronic Lymphocytic Leukemia (CLL) ร่วมกับภาวะ dysplastic neutrophil (Pseudo-Pelger-Huet anomaly)',
 explain:'<p>นิวเคลียสของ neutrophil ที่มี 2 lobe (bilobed, ไม่แบ่งเป็น 3-5 lobe ตามปกติ) เรียกว่า <b>Pelger-Huet anomaly</b> ซึ่งพบได้ 2 แบบ: (1) แบบพันธุกรรม (benign, ไม่มีอาการ) และ (2) แบบได้มา <b>Acquired/Pseudo-Pelger-Huet anomaly</b> ซึ่งพบร่วมกับ <b>Myelodysplastic Syndrome (MDS)</b> หรือ post-chemotherapy</p>'+
 '<p>ในผู้สูงอายุที่มี lymphocyte สูงผิดปกติร่วมกับเซลล์สายอื่นต่ำ ควรนึกถึง <b>Chronic Lymphocytic Leukemia (CLL)</b> ด้วย (พบ smudge cell บน smear, absolute lymphocytosis) — ข้อนี้ข้อมูลจำมาไม่ครบพอจะฟันธงระหว่าง MDS กับ CLL ได้ 100% แนะนำให้ส่ง PBS + Flow cytometry + Bone marrow เพื่อแยกโรค</p>',
 note:'โจทย์จำข้อมูลมาไม่ครบถ้วน ไม่สามารถระบุคำตอบสุดท้ายได้ 100%',
 ref:'06_BM-Failure-Aplastic-Pancytopenia/BM failure ปี 3.pdf'},

{ch:'ch5', src:'Block 2.1 ข้อ 70', topic:'Hypersplenism', incomplete:true,
 stem:'ประวัติ: alcohol use, jaundice, hypersplenism — cytopenia เกิดจากกลไกใด',
 choices:['Hypersplenism จาก portal hypertension','Aplastic anemia','Acute hemolytic transfusion reaction','Vitamin B12 deficiency'],
 correctIdx:0, answer:'Hypersplenism (ม้ามโตจากโรคตับเรื้อรัง/portal hypertension ทำลายเม็ดเลือดที่ผ่านม้ามมากเกินปกติ)',
 explain:'<p>ผู้ป่วยดื่มแอลกอฮอล์เรื้อรัง มักนำไปสู่ <b>โรคตับแข็ง (cirrhosis) → portal hypertension → ม้ามโต (congestive splenomegaly)</b> เมื่อม้ามโตขึ้น จะมีพื้นที่และเวลาในการกักเก็บ/ทำลายเซลล์เม็ดเลือดที่ไหลผ่านมากขึ้นกว่าปกติ เรียกภาวะนี้ว่า <b>Hypersplenism</b> ซึ่งทำให้เกิด cytopenia ได้หนึ่งหรือหลายสาย (มักเจอ thrombocytopenia และ leukopenia ก่อน anemia) ตับที่เสียหายยังลดการสร้าง clotting factor และทำให้ jaundice จาก conjugated hyperbilirubinemia ร่วมด้วย</p>',
 note:'บริบทโจทย์ (ประวัติ, อาการ) จำมาไม่ครบทั้งหมด',
 ref:'06_BM-Failure-Aplastic-Pancytopenia/BM failure ปี 3.pdf'},

// ============ CHAPTER 6: Leukemia, Lymphoma, MPD ============
{ch:'ch6', src:'Block 2.1 ข้อ 58', topic:'Neutropenic fever mechanism',
 stem:'เด็กชายอายุ 4 ขวบ มีไข้ 3 สัปดาห์หลัง admit เพื่อทำ chemotherapy รักษา ALL มีไข้ ซีด ผมร่วง (alopecia) และแผลที่เหงือก (gum ulceration) Blood culture ขึ้นเชื้อ gram-negative rods หลัง 36 ชั่วโมง มี Neutropenia — กลไกที่ทำให้เกิดการติดเชื้อคืออะไร',
 choices:['Chemotherapy กด bone marrow (neutropenia) + ทำลาย mucosal barrier ทำให้เชื้อเข้ากระแสเลือดง่าย','ภูมิคุ้มกันชนิด humoral (antibody) ถูกทำลายจากเคมีบำบัดเท่านั้น','เชื้อมาจากการติดเชื้อในกระแสเลือดของผู้ป่วยรายอื่นในหอผู้ป่วยเท่านั้น','ผลข้างเคียงจากยาแก้อาเจียนที่ให้ร่วมกับเคมีบำบัด'],
 correctIdx:0, answer:'Chemotherapy ทำลาย neutrophil (myelosuppression) + ทำลาย mucosal barrier (mucositis) → เชื้อจากลำไส้/ช่องปากเข้ากระแสเลือดได้ง่ายโดยไม่มีเม็ดเลือดขาวมาต่อสู้',
 explain:'<p>ยาเคมีบำบัดออกฤทธิ์ทำลายเซลล์ที่แบ่งตัวเร็ว ซึ่งรวมถึง <b>2 กลุ่มสำคัญที่ทำให้เกิดการติดเชื้อง่าย</b>:</p><ul>'+
 '<li><b>Bone marrow suppression → Neutropenia</b>: neutrophil เป็นด่านแรกในการกำจัดแบคทีเรีย เมื่อ ANC (Absolute Neutrophil Count) ต่ำมาก ร่างกายไม่สามารถควบคุมเชื้อที่เข้าสู่กระแสเลือดได้</li>'+
 '<li><b>Mucosal barrier injury (Mucositis)</b>: เคมีบำบัดทำลายเยื่อบุช่องปากและทางเดินอาหาร (เห็นเป็นแผลที่เหงือก) ทำให้แบคทีเรียปกติที่อาศัยอยู่ในลำไส้/ช่องปาก (enteric gram-negative rods เช่น E. coli, Klebsiella, Pseudomonas) สามารถ<b>translocate เข้าสู่กระแสเลือดได้ง่ายขึ้น</b></li></ul>'+
 '<p>ผมร่วงเป็นผลข้างเคียงทั่วไปของเคมีบำบัดต่อ hair follicle ไม่เกี่ยวกับกลไกการติดเชื้อโดยตรง แต่ช่วยยืนยันว่าผู้ป่วยเพิ่งได้รับเคมีบำบัดจริง ภาวะนี้เรียกรวมว่า <b>Febrile Neutropenia</b> ซึ่งถือเป็นภาวะฉุกเฉินทางเนื้องอกวิทยา (oncologic emergency) ต้องให้ยาปฏิชีวนะ broad-spectrum ทันทีโดยไม่ต้องรอผลเพาะเชื้อ</p>',
 ref:'07_Leukemia-Lymphoma-MPD/4.1 มะเร็งเม็ดเลือดขาวชนิดเฉียบพลัน  2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 43', topic:'MPD transformation',
 stem:'ชาย 66 ปี เป็น Polycythemia Vera (PV) ที่ platelet ลดลงเรื่อยๆ WBC 32,000 Blast 28% Platelet 38,000 — เสี่ยงภาวะแทรกซ้อนอะไร',
 choices:['Chronic Myeloid Leukemia blast crisis','AML (Acute Myeloid Leukemia)','PMF (Primary Myelofibrosis)','Essential Thrombocythemia'],
 correctIdx:1, answer:'Transformation เป็น AML (Acute Myeloid Leukemia)',
 explain:labBar('Blast (%)',28,0,2,50,'%')+'<p>Blast count ในเลือด/ไขกระดูก <b>≥20%</b> เข้าเกณฑ์วินิจฉัย <b>Acute Leukemia</b> ตาม WHO classification ผู้ป่วย Myeloproliferative Neoplasm (MPN) เช่น Polycythemia Vera (PV), Essential Thrombocythemia (ET), Primary Myelofibrosis (PMF) มีความเสี่ยงระยะยาวที่จะ<b>เปลี่ยนแปลง (transform) ไปเป็น Acute Myeloid Leukemia (AML)</b> ได้ โดยเฉพาะเมื่อพบ blast เพิ่มขึ้นเรื่อยๆ ร่วมกับ platelet ที่ลดลงจากเดิม (บ่งชี้ว่าไขกระดูกเริ่มถูกแทนที่ด้วยเซลล์มะเร็งเม็ดเลือดขาวเฉียบพลันแทนที่จะเป็น megakaryocyte ปกติ)</p>',
 ref:'07_Leukemia-Lymphoma-MPD/No slide MPD leukemia lymphoma 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 44', topic:'AML - Auer rod',
 stem:'ให้รูปพบ Auer rod ร่วมกับ thrombocytopenia ควรส่ง investigation ใดต่อ',
 choices:['Peripheral blood smear ซ้ำเท่านั้น','Bone Marrow Aspiration','Coagulogram (PT/aPTT)','Lymph node biopsy'],
 correctIdx:1, answer:'Bone Marrow Aspiration (+ Flow cytometry, Cytogenetics)',
 explain:'<p><b>Auer rod</b> คือแท่งผลึกสีชมพู-แดง (eosinophilic needle-like inclusion) ที่เกิดจาก azurophilic granule รวมตัวกันผิดปกติในไซโทพลาซึม พบได้<b>เฉพาะใน myeloblast เท่านั้น</b> (ไม่พบใน lymphoblast) ดังนั้นการเห็น Auer rod = ยืนยันว่าเป็น <b>Acute Myeloid Leukemia (AML)</b> ได้ทันที (pathognomonic finding)</p>'+
 '<p>เมื่อสงสัย AML จาก peripheral smear ต้องยืนยันการวินิจฉัยและจำแนกชนิดย่อยด้วย <b>Bone Marrow Aspiration</b> เพื่อดู blast percentage, morphology, ทำ flow cytometry (immunophenotyping) และ cytogenetics/molecular study (หา translocation ที่มีผลต่อการพยากรณ์โรคและการรักษา)</p>',
 ref:'07_Leukemia-Lymphoma-MPD/4.1 มะเร็งเม็ดเลือดขาวชนิดเฉียบพลัน  2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 45', topic:'Acute Promyelocytic Leukemia',
 stem:'ให้ภาพ blood smear มา ถามว่าเป็นอะไร',
 choices:['Acute Lymphoblastic Leukemia (ALL)','Acute Promyelocytic Leukemia (APL / AML-M3)','Chronic Myeloid Leukemia (CML)','Acute Monocytic Leukemia (AML-M5)'],
 correctIdx:1, answer:'Acute Promyelocytic Leukemia (APL, AML subtype M3)',
 explain:'<p><b>Acute Promyelocytic Leukemia (APL)</b> เป็น subtype พิเศษของ AML (FAB M3) ที่มีลักษณะเด่นบน smear คือ <b>abnormal promyelocyte ที่มี Auer rod จำนวนมากมัดรวมกันเป็นกลุ่ม เรียกว่า "Faggot cell"</b> (เหมือนมัดฟืน) เกิดจาก translocation <b>t(15;17)</b> ทำให้เกิดยีนผสม <b>PML-RARA</b></p>'+
 '<p>APL มีความสำคัญทางคลินิกมากเพราะ (1) เสี่ยงเกิด <b>DIC (Disseminated Intravascular Coagulation)</b> รุนแรงจากการปล่อย procoagulant granule ทำให้เลือดออกง่ายมาก ต้องระวังเป็นพิเศษ (2) ตอบสนองดีเยี่ยมต่อยา <b>All-trans retinoic acid (ATRA)</b> ที่กระตุ้นให้ promyelocyte เจริญเป็นเซลล์ปกติ (differentiation therapy) ทำให้พยากรณ์โรคดีกว่า AML ชนิดอื่นมากหากรักษาทัน</p>',
 note:'ข้อมูลที่นิสิตจำคำตอบมาคือ "Acute monocytic leukemia" แต่จากลักษณะ Auer rod/faggot cell ที่มักออกสอบคู่กับภาพนี้ คำตอบมาตรฐานทางวิชาการคือ Acute Promyelocytic Leukemia — โปรดตรวจสอบกับภาพจริงจากอาจารย์ผู้สอนอีกครั้ง',
 ref:'07_Leukemia-Lymphoma-MPD/4.1 มะเร็งเม็ดเลือดขาวชนิดเฉียบพลัน  2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 47', topic:'AML cytogenetics/prognosis',
 stem:'ผู้ป่วยชายอายุ 40 ปี เหนื่อยง่าย เลือดออกตามไรฟัน วินิจฉัยเป็น AML chromosome abnormality ใดที่มี good prognosis',
 choices:['t(8;22)','t(9;22)','+8','-7','inv(16)'],
 correctIdx:4, answer:'inv(16) (Inversion 16)',
 explain:'<p>Cytogenetics เป็นปัจจัยพยากรณ์โรคที่สำคัญที่สุดใน AML แบ่งเป็น 3 กลุ่มหลัก:</p><ul>'+
 '<li><b>Good/Favorable prognosis:</b> t(15;17) [APL], <b>inv(16) หรือ t(16;16)</b> [CBFB-MYH11], t(8;21) [RUNX1-RUNX1T1]</li>'+
 '<li><b>Intermediate prognosis:</b> Normal karyotype, +8 (trisomy 8)</li>'+
 '<li><b>Poor/Unfavorable prognosis:</b> -5/-7 (monosomy 5 หรือ 7), complex karyotype (≥3 ความผิดปกติ), t(9;22) [BCR-ABL, พบใน CML/Ph+ ALL มากกว่า]</li></ul>'+
 '<p>ในตัวเลือกที่ให้มา <b>inv(16)</b> เป็นความผิดปกติที่จัดอยู่ในกลุ่ม <b>Core Binding Factor (CBF) leukemia</b> ซึ่งมีการพยากรณ์โรคดี ตอบสนองต่อเคมีบำบัดขนาดสูงได้ดี (high-dose cytarabine)</p>',
 ref:'07_Leukemia-Lymphoma-MPD/4.1 มะเร็งเม็ดเลือดขาวชนิดเฉียบพลัน  2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 48', topic:'นอกเนื้อหา (Neurology)', incomplete:true,
 stem:'ชายอายุ 60 ปี มีอาการอ่อนแรงที่มือ (progressive weakness) และกลืนลำบากมา 8 เดือน ตรวจพบกล้ามเนื้อฝ่อ (atrophy), fasciculation ที่ลิ้นและแขนทั้งสองข้าง deep tendon reflex 3+ ทั้ง 4 แขนขา และ Babinski sign บวกด้านขวา การตรวจความรู้สึกปกติทั้งหมด — วินิจฉัยที่เป็นไปได้มากที่สุดคือ',
 choices:['Guillain-Barré Syndrome','Cervical myelopathy','Lambert-Eaton myasthenic syndrome','Amyotrophic Lateral Sclerosis','Diabetic peripheral neuropathy'],
 correctIdx:3, answer:'Amyotrophic Lateral Sclerosis (ALS)',
 explain:'<p>ข้อนี้<b>ไม่ใช่เนื้อหาโลหิตวิทยา/การติดเชื้อทางกระแสเลือด</b> แต่เป็นข้อสอบวิชา Neurology (อาจปะปนมาจากคลังข้อสอบ block อื่น) ขออธิบายสั้นๆ ไว้เพื่อความครบถ้วน:</p>'+
 '<p>ลักษณะที่พบ <b>ทั้ง Upper Motor Neuron sign (hyperreflexia 3+, Babinski บวก) และ Lower Motor Neuron sign (muscle atrophy, fasciculation) ร่วมกัน โดยไม่มีความผิดปกติทางประสาทรับความรู้สึก (sensory intact)</b> เป็นลักษณะเฉพาะของ <b>Amyotrophic Lateral Sclerosis (ALS)</b> ซึ่งเป็นโรคความเสื่อมของ motor neuron ทั้งสองระดับพร้อมกัน แยกจาก Cervical myelopathy (มักมี sensory level), GBS (เป็น LMN pattern ล้วน ไม่มี UMN sign), Lambert-Eaton (มักมีปัญหา autonomic + reflex ลดลงหลังออกแรง)</p>',
 note:'ข้อนี้อยู่นอกขอบเขตเนื้อหา Block Hemato-ID สันนิษฐานว่าหลุดมาจากคลังข้อสอบวิชาอื่น ไม่จำเป็นต้องเน้นอ่านสำหรับสอบ Block นี้',
 ref:'ไม่มีเอกสารอ้างอิงในโฟลเดอร์ Block นี้ (นอกเนื้อหา)'},

{ch:'ch6', src:'Block 2.2 ข้อ 49', topic:'Lymphadenopathy workup', incomplete:true,
 stem:'Lymph node enlargement — ควรส่งตรวจอะไร',
 choices:['Fine Needle Aspiration (FNA) เพียงอย่างเดียว','Excisional lymph node biopsy','Core needle biopsy เท่านั้น','Bone marrow biopsy เป็นอันดับแรก'],
 correctIdx:1, answer:'มาตรฐานคือ Excisional lymph node biopsy (ตัดต่อมน้ำเหลืองทั้งก้อนออกตรวจ) เป็น gold standard',
 explain:'<p>เมื่อสงสัยว่าต่อมน้ำเหลืองโตผิดปกติอาจเป็นมะเร็งต่อมน้ำเหลือง (lymphoma) การตรวจที่เป็น <b>gold standard</b> คือ <b>Excisional lymph node biopsy</b> (ตัดเอาต่อมทั้งก้อนออกมาตรวจทั้งโครงสร้าง architecture) เพราะการวินิจฉัยชนิดของ lymphoma (โดยเฉพาะ Hodgkin lymphoma ที่ต้องหา Reed-Sternberg cell ในบริบทของโครงสร้างต่อมที่เปลี่ยนแปลง) ต้องอาศัยการดูโครงสร้างทั้งหมด ไม่ใช่แค่เซลล์เดี่ยวๆ แบบ Fine Needle Aspiration (FNA) ซึ่งมักให้ข้อมูลไม่เพียงพอ</p>'+
 '<p><b>Bone Marrow biopsy</b> ใช้เพื่อการ staging (ดูว่ามะเร็งลุกลามเข้าไขกระดูกหรือยัง) หลังทราบการวินิจฉัยจาก lymph node biopsy แล้ว ไม่ใช่การตรวจอันดับแรกสำหรับก้อนต่อมน้ำเหลืองโตที่ยังไม่ทราบสาเหตุ</p>',
 note:'คำตอบที่นิสิตจำมาคือ "BM biopsy" ซึ่งอาจถูกต้องหากโจทย์เดิมระบุบริบทว่าผู้ป่วยได้รับการวินิจฉัย lymphoma แล้วและกำลังทำ staging — แต่ตามหลักการทั่วไป การสืบค้นต่อมน้ำเหลืองโตที่ยังไม่ทราบสาเหตุควรเริ่มจาก excisional biopsy',
 ref:'07_Leukemia-Lymphoma-MPD/4.2  Lymphoid Neoplasm 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 52', topic:'Multiple Myeloma',
 stem:'ให้ภาพ Rouleaux formation มา ถามว่าต้องส่ง investigation อะไรเพื่อ confirm โรค',
 choices:['Direct Coombs test','Serum protein electrophoresis','Osmotic fragility test','Iron study'],
 correctIdx:1, answer:'Serum Protein Electrophoresis (SPEP) ± Serum Free Light Chain, Urine protein electrophoresis (Bence Jones protein)',
 explain:'<p><b>Rouleaux formation</b> คือ RBC เรียงตัวซ้อนกันเป็นแท่งคล้ายเหรียญ (stack of coins) เกิดจากระดับโปรตีนในพลาสมาสูงผิดปกติ (โดยเฉพาะ globulin/fibrinogen) ทำให้ RBC เกาะติดกันง่ายขึ้น พบได้บ่อยที่สุดใน <b>Multiple Myeloma</b> (จาก monoclonal immunoglobulin/M-protein สูง) และภาวะอักเสบเรื้อรังอื่นๆ</p>'+
 '<p>เมื่อสงสัย Multiple Myeloma ต้องส่งตรวจยืนยันหา M-protein: <b>Serum Protein Electrophoresis (SPEP)</b> จะเห็น monoclonal spike (M-spike) ชัดเจน ร่วมกับ <b>Urine Protein Electrophoresis</b> หา Bence Jones protein (free light chain ในปัสสาวะ) และตรวจเพิ่มเติมอื่นๆ เช่น Serum calcium, Renal function, Skeletal survey (หา lytic bone lesion), Bone marrow biopsy (หา plasma cell &gt;10%)</p>',
 ref:'07_Leukemia-Lymphoma-MPD/4.2  Lymphoid Neoplasm 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 53', topic:'Hodgkin Lymphoma',
 stem:'รูป Histopathology พบ Hodgkin — วินิจฉัยคือ',
 choices:['Non-Hodgkin Lymphoma, Diffuse large B-cell type','Hodgkin Lymphoma','Burkitt Lymphoma','Chronic Lymphocytic Leukemia'],
 correctIdx:1, answer:'Hodgkin Lymphoma',
 explain:'<p>การวินิจฉัย <b>Hodgkin Lymphoma</b> ทางพยาธิวิทยาอาศัยการพบ <b>Reed-Sternberg cell</b> ซึ่งเป็นเซลล์ขนาดใหญ่ นิวเคลียส 2 พู (bilobed) หรือหลายนิวเคลียส แต่ละนิวเคลียสมี nucleolus ขนาดใหญ่เด่นชัดคล้ายตา เรียกลักษณะนี้ว่า <b>"Owl-eye appearance"</b> อยู่ในพื้นหลังของเซลล์อักเสบปนกัน (mixed inflammatory background: lymphocyte, eosinophil, plasma cell, histiocyte)</p>'+
 '<p>Hodgkin lymphoma แบ่งเป็นหลาย subtype โดย <b>Nodular Sclerosis</b> พบบ่อยที่สุดในประเทศพัฒนาแล้ว มักพบในผู้หญิงวัยรุ่น/ผู้ใหญ่ตอนต้น มักลุกลามแบบต่อเนื่องเป็นลำดับขั้น (contiguous spread) ต่างจาก Non-Hodgkin lymphoma ที่มักกระจายไม่เป็นระเบียบ</p>',
 ref:'07_Leukemia-Lymphoma-MPD/4.2  Lymphoid Neoplasm 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 55', topic:'Febrile neutropenia in pediatric ALL',
 stem:'เด็กอายุ 12 ปี เป็น ALL ให้ chemotherapy ไป 5 วัน แล้วมีไข้ ANC=200 ต้องให้อะไรต่อ',
 choices:['Antifungal','Broad spectrum antibiotic','Increase chemotherapy dose','Watch and reserve'],
 correctIdx:1, answer:'Broad-spectrum antibiotic ทันที (Empirical antibiotic)',
 explain:labBar('ANC (cells/µL)',200,1500,8000,2000,'')+'<p>ANC = 200 cells/µL คือ <b>Severe neutropenia (ANC &lt; 500)</b> ร่วมกับมีไข้ = <b>Febrile Neutropenia</b> ซึ่งถือเป็น<b>ภาวะฉุกเฉินทางการแพทย์ (medical emergency)</b> เพราะผู้ป่วยไม่มีเม็ดเลือดขาวเพียงพอต่อสู้เชื้อโรค การติดเชื้อสามารถลุกลามเป็น sepsis เสียชีวิตได้อย่างรวดเร็ว</p>'+
 '<p>แนวทางมาตรฐาน: ต้องให้ <b>Broad-spectrum antibiotic ที่ครอบคลุมเชื้อ Pseudomonas (เช่น Piperacillin-tazobactam, Cefepime, Meropenem) ทันทีภายใน 1 ชั่วโมง</b> หลังเจาะเลือดส่ง culture โดย<b>ไม่ต้องรอผลเพาะเชื้อ</b> — Antifungal จะพิจารณาเพิ่มก็ต่อเมื่อไข้ไม่ลดหลังให้ยาปฏิชีวนะไปแล้ว 4-7 วัน (persistent febrile neutropenia)</p>',
 ref:'07_Leukemia-Lymphoma-MPD/ใบงาน  Acute leukemia กพ 2564.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 57', topic:'Erythrocytosis (MPN)', incomplete:true,
 stem:'โจทย์เป็นเคส erythrocytosis (ข้อมูลอาการ/ผลแล็บที่จำได้ไม่ครบถ้วน)',
 choices:['Polycythemia Vera (PV)','Secondary erythrocytosis (เช่นจากสูบบุหรี่/ขาดออกซิเจนเรื้อรัง)','Relative erythrocytosis จากภาวะขาดน้ำ','Chronic Myeloid Leukemia (CML)'],
 correctIdx:0, answer:'ข้อมูลไม่ครบพอฟันธง แต่ถ้าเป็นแนวเดียวกับข้ออื่นในชุดข้อสอบนี้ (ข้อ 59, 65) มักเน้น Polycythemia Vera',
 explain:'<p>ข้อนี้นิสิตที่รวบรวมข้อสอบจำได้เพียงหัวข้อว่าเป็นเคส "erythrocytosis" โดยไม่มีรายละเอียดอาการ/ผลแล็บเพิ่มเติม จึงไม่สามารถวิเคราะห์เจาะจงได้ แนวทางการแยกโรคกลุ่ม erythrocytosis โดยทั่วไป:</p><ul>'+
 '<li><b>Polycythemia Vera (PV):</b> Hct/Hb สูงจาก JAK2 mutation มักมี splenomegaly, aquagenic pruritus, WBC/Platelet อาจสูงร่วมด้วย (ดูรายละเอียดในข้อ Block 2.2 ข้อ 65)</li>'+
 '<li><b>Secondary erythrocytosis:</b> EPO สูงจากสาเหตุภายนอก เช่น การสูบบุหรี่เรื้อรัง, COPD, โรคหัวใจพิการแต่กำเนิดชนิดตัวเขียว, เนื้องอกหลั่ง EPO (ดูรายละเอียดในข้อ Block 2.2 ข้อ 59)</li>'+
 '<li><b>Relative (Spurious) erythrocytosis:</b> ปริมาตรพลาสมาลดลงจากภาวะขาดน้ำ ทำให้ Hct ดูสูงขึ้นทั้งที่จำนวน RBC จริงไม่ได้เพิ่ม</li></ul>'+
 '<p>แนะนำอ่านทบทวนคู่กับข้อ 59 และ 65 ในบทนี้ ซึ่งมีรายละเอียดกรณีศึกษาที่ใกล้เคียงกันและมีข้อมูลครบถ้วนกว่า</p>',
 note:'โจทย์ต้นฉบับมีเพียงหัวข้อสั้นๆ ไม่มีรายละเอียดอาการ/ผลแล็บ จึงไม่สามารถระบุคำตอบที่ชัดเจนได้ — รวมข้อนี้ไว้เพื่อความครบถ้วนของลำดับข้อสอบเท่านั้น',
 ref:'07_Leukemia-Lymphoma-MPD/No slide MPD leukemia lymphoma 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 58', topic:'CML workup',
 stem:'ให้รูป CML มา ถามว่าการส่งตรวจใดต่อไปนี้ "ไม่จำเป็น" ต่อการวินิจฉัย: 1.FISH หา BCR-ABL 2.Ph chromosome 3.Flow cytometry for leukemia 4.BM biopsy 5.aPTT/PT 6.D-dimer',
 choices:['1+2','2+3','3+4','4+5','5+6'],
 correctIdx:4, answer:'5+6 (aPTT/PT และ D-dimer)',
 explain:'<p>การวินิจฉัย <b>Chronic Myeloid Leukemia (CML)</b> อาศัยการยืนยัน <b>Philadelphia chromosome (Ph chromosome) หรือ BCR-ABL1 fusion gene</b> ซึ่งเป็นสาเหตุหลักของโรค (t(9;22)) วิธีตรวจที่ใช้ได้แก่ Cytogenetics (karyotype หา Ph chromosome), FISH (หา BCR-ABL), RT-PCR (วัดปริมาณ transcript เพื่อติดตามการรักษา), Bone marrow biopsy (ดู cellularity, myeloid hyperplasia), และ Flow cytometry ช่วยดู blast phase</p>'+
 '<p><b>aPTT/PT และ D-dimer เป็นการตรวจการแข็งตัวของเลือด (coagulation profile)</b> ซึ่งไม่ได้เป็นส่วนหนึ่งของการวินิจฉัยหรือติดตาม CML โดยตรง (ใช้ในบริบทอื่น เช่น สงสัย DIC หรือ VTE) จึงเป็นคำตอบที่ถูกต้องว่า "ไม่จำเป็น"</p>',
 ref:'07_Leukemia-Lymphoma-MPD/No slide MPD leukemia lymphoma 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 59', topic:'Secondary polycythemia',
 stem:'ชายไทยคู่ 50 ปี BT 37.2 BP 140/80 ตับไม่โต Hb 16 Hct 49 WBC 9,500 (PMN 66, Lymphocyte 25, Monocyte 6, Eosinophil 3, Basophil 0) Platelet 240,000 — สาเหตุที่เป็นไปได้ ยกเว้นข้อใด: 1.Acute cholecystitis 2.Hepatocellular carcinoma 3.Squamous lung cell carcinoma 4.Heavy smoking',
 choices:['Acute cholecystitis','Hepatocellular carcinoma','Squamous lung cell carcinoma','Heavy smoking'],
 correctIdx:0, answer:'Acute cholecystitis (ไม่ใช่สาเหตุของ erythrocytosis)',
 explain:labBar('Hb',16,13,17,20,'g/dL')+labBar('Hct',49,40,52,60,'%')+'<p>Hb และ Hct ในโจทย์อยู่ค่อนไปทางสูง (borderline/high-normal, เข้าได้กับ erythrocytosis) โดย WBC/Platelet ปกติ (ต่างจาก Polycythemia Vera ที่มักมีทั้ง 3 สายสูง) บ่งชี้ <b>Secondary Polycythemia/Erythrocytosis</b> ซึ่งเกิดจาก EPO สูงขึ้นจากสาเหตุภายนอกไขกระดูก</p>'+
 '<p>สาเหตุของ Secondary Erythrocytosis ที่พบบ่อย ได้แก่: <b>ภาวะขาดออกซิเจนเรื้อรัง</b> (Heavy smoking → carboxyhemoglobin, COPD, Obstructive Sleep Apnea, อาศัยที่สูง) และ <b>เนื้องอกที่หลั่ง EPO ผิดที่ (ectopic EPO production)</b> เช่น <b>Hepatocellular carcinoma, Renal cell carcinoma</b> — ส่วน Squamous lung cell carcinoma มักสัมพันธ์กับ hypercalcemia จาก PTHrP มากกว่า erythrocytosis โดยตรง แต่ก้อนมะเร็งปอดก็อาจทำให้ขาดออกซิเจนเรื้อรังได้เช่นกัน</p>'+
 '<p><b>Acute cholecystitis (ถุงน้ำดีอักเสบเฉียบพลัน)</b> ไม่มีกลไกใดที่ทำให้เกิด erythrocytosis จึงเป็นคำตอบที่ "ไม่ใช่" สาเหตุ</p>',
 ref:'07_Leukemia-Lymphoma-MPD/No slide MPD leukemia lymphoma 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 62', topic:'Primary Myelofibrosis',
 stem:'ชาย 75 ปี Hb 8.1 WBC 13,000 Platelet 70,000 mild splenomegaly, teardrop cell + myeloid precursor บน smear — วินิจฉัยคือ',
 choices:['Autoimmune hemolysis','Ulcer GI bleed','Infiltrate fibrosis with extramedullary hemopoiesis (Myelofibrosis)','Iron deficiency anemia'],
 correctIdx:2, answer:'Primary Myelofibrosis (Infiltrate fibrosis with extramedullary hematopoiesis)',
 explain:'<p>ลักษณะเฉพาะของ <b>Primary Myelofibrosis (PMF)</b> ซึ่งเป็นหนึ่งใน Myeloproliferative Neoplasm: (1) <b>Teardrop cell (Dacrocyte)</b> — RBC รูปหยดน้ำ เกิดจาก RBC ถูกบีบผ่านไขกระดูกที่มีพังผืด (fibrosis) จนเสียรูปทรง (2) <b>Leukoerythroblastic picture</b> — พบเซลล์ตั้งต้น myeloid ยังไม่โตเต็มที่ปนในเลือด (3) <b>Splenomegaly</b> — จาก extramedullary hematopoiesis (ม้ามและตับต้องมาช่วยสร้างเม็ดเลือดทดแทนไขกระดูกที่เต็มไปด้วยพังผืด)</p>'+
 '<p>Cytopenia (anemia, thrombocytopenia) เกิดจากไขกระดูกถูกแทนที่ด้วยพังผืด (fibrosis) ทำให้พื้นที่สร้างเม็ดเลือดน้อยลง ยืนยันด้วย <b>Bone marrow biopsy พบ reticulin/collagen fibrosis</b> (ไม่สามารถ aspirate ได้ง่าย เรียก "dry tap")</p>',
 ref:'07_Leukemia-Lymphoma-MPD/No slide MPD leukemia lymphoma 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 64', topic:'Essential Thrombocythemia',
 stem:'ผู้ป่วยมีค่า platelet 1,500,000 Hb 3-6 g/dL มีภาวะ epistaxis (bleeding) สาเหตุของการเลือดออกคืออะไร ทั้งที่ platelet สูงมาก',
 choices:['DIC','Vitamin K deficiency','Acquired von Willebrand disease','Marrow failure'],
 correctIdx:2, answer:'Acquired von Willebrand Disease (Acquired vWD จาก extreme thrombocytosis)',
 explain:labBar('Platelet count',1500000,150000,450000,1600000,'/µL')+'<p>ฟังดูขัดแย้งว่า platelet สูงมากขนาดนี้ (&gt;1,000,000) ทำไมถึงมีเลือดออก — ความจริงคือเมื่อ platelet สูงมากผิดปกติ (มักพบใน <b>Essential Thrombocythemia, ET</b>) จะเกิดปรากฏการณ์ <b>"Acquired von Willebrand Disease"</b>: platelet ที่มีจำนวนมากเกินไปจะดูดซับ (adsorb) โมเลกุล <b>von Willebrand Factor (vWF) โดยเฉพาะ high-molecular-weight multimer</b> ออกจากพลาสมาไปเกาะที่ผิว platelet มากเกินไป ทำให้ vWF ที่เหลือในกระแสเลือดทำงานได้ไม่เต็มประสิทธิภาพในการเชื่อม platelet-to-platelet และ platelet-to-endothelium</p>'+
 '<p>ผลคือ แม้จำนวน platelet จะสูงมาก แต่<b>การทำงานของ platelet กลับบกพร่อง (qualitative platelet defect)</b> ทำให้เกิดเลือดออกได้ ทั้งที่จำนวนสูง — เป็น paradox ที่พบใน ET/PV ที่มี platelet extreme thrombocytosis (มักเมื่อ platelet &gt;1,000,000-1,500,000/µL)</p>',
 ref:'07_Leukemia-Lymphoma-MPD/No slide MPD leukemia lymphoma 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 65', topic:'Polycythemia Vera',
 stem:'Splenomegaly, Hct 57%, pruritis (คัน) หลังอาบน้ำอุ่น (aquagenic pruritus) — วินิจฉัยคือ',
 choices:['Secondary polycythemia','Polycythemia Vera (PV)','Essential Thrombocythemia','Chronic Myeloid Leukemia'],
 correctIdx:1, answer:'Polycythemia Vera (PV)',
 explain:labBar('Hct',57,40,52,65,'%')+'<p><b>Aquagenic pruritus (คันหลังสัมผัสน้ำ โดยเฉพาะน้ำอุ่น)</b> เป็นอาการเฉพาะตัวที่พบได้บ่อยและค่อนข้างจำเพาะกับ <b>Polycythemia Vera (PV)</b> เชื่อว่าเกิดจาก mast cell/basophil ที่เพิ่มจำนวนผิดปกติในผิวหนังถูกกระตุ้นให้หลั่ง histamine เมื่อสัมผัสน้ำ</p>'+
 '<p>ร่วมกับ <b>Hct สูงถึง 57%</b> (erythrocytosis ชัดเจน) และ <b>splenomegaly</b> (จาก extramedullary hematopoiesis หรือ myeloid cell สะสมในม้าม) ครบ 3 อาการเข้าได้กับ PV ซึ่งเป็น Myeloproliferative Neoplasm ที่เกิดจากการกลายพันธุ์ของยีน <b>JAK2 V617F</b> ในเซลล์ต้นกำเนิดเม็ดเลือด ทำให้สร้าง RBC (และมักมี WBC, Platelet ร่วมด้วย) มากเกินความจำเป็นโดยไม่พึ่ง EPO</p>',
 ref:'07_Leukemia-Lymphoma-MPD/No slide MPD leukemia lymphoma 2569.pdf'},

{ch:'ch6', src:'Block 2.2 ข้อ 66', topic:'Polycythemia Vera', incomplete:true,
 stem:'ให้ case มาคล้ายเป็นโรค PV (ข้อมูลจำได้ไม่ครบ)',
 choices:['Polycythemia Vera (PV)','Secondary polycythemia จากการสูบบุหรี่','Relative polycythemia จากภาวะขาดน้ำ','Chronic Myeloid Leukemia (CML)'],
 correctIdx:0, answer:'ดูคำอธิบายเรื่อง Polycythemia Vera ในข้อ Block 2.2 ข้อ 65 ประกอบ',
 explain:'<p>ข้อนี้นิสิตจำโจทย์มาได้ไม่ครบถ้วน คาดว่าเป็นกรณีศึกษาเกี่ยวกับ Polycythemia Vera เช่นเดียวกับข้อ 65 แนะนำทบทวนอาการสำคัญของ PV: erythrocytosis, splenomegaly, aquagenic pruritus, thrombosis risk (โดยเฉพาะ Budd-Chiari syndrome), plethora (หน้าแดง), JAK2 mutation</p>',
 note:'ข้อมูลไม่ครบถ้วน ไม่สามารถให้เฉลยที่จำเพาะเจาะจงได้',
 ref:'07_Leukemia-Lymphoma-MPD/No slide MPD leukemia lymphoma 2569.pdf'},

// ============ CHAPTER 7: Hemostasis, Bleeding Disorders, Coagulation ============
{ch:'ch7', src:'Block 2.1 ข้อ 7', topic:'Bleeding disorder screening', incomplete:true,
 stem:'ไปทำฟันเลือดออก พอหยุดแล้วเลือดกลับมาออกใหม่ ควรใช้ test อะไร',
 choices:['Bleeding time','Clot solubility test (Factor XIII assay)','PT เพียงอย่างเดียว','Platelet count เพียงอย่างเดียว'],
 correctIdx:1, answer:'Clot solubility test / Factor XIII assay (สงสัย Factor XIII deficiency) หรือทำ coagulation screen (PT, aPTT, Platelet count) ครบชุดเพื่อแยกสาเหตุ',
 explain:'<p>รูปแบบเลือดออกที่ "หยุดแล้วกลับมาออกใหม่ (delayed re-bleeding)" หลังทำฟัน เป็นลักษณะเฉพาะที่ชวนให้คิดถึง <b>ความผิดปกติของการสร้างลิ่มเลือดให้แข็งแรง/คงตัว (clot stabilization)</b> มากกว่าปัญหาที่ primary hemostasis (platelet plug) เพราะถ้าเป็นปัญหา platelet มักจะเลือดออกทันทีตั้งแต่แรกและมักเป็นจุดเล็กๆ (petechiae) ไม่ใช่หยุดแล้วออกใหม่</p>'+
 '<p>ภาวะที่เข้าได้บ่อยคือ <b>Factor XIII deficiency</b> (factor XIII มีหน้าที่ cross-link fibrin ให้ลิ่มเลือดแข็งแรง หากขาด ลิ่มเลือดจะเปราะและสลายง่าย ทั้งที่ PT/aPTT ปกติทุกอย่าง) การตรวจยืนยันคือ <b>Clot solubility test (5M urea solubility test)</b> ซึ่งเป็นการตรวจพิเศษที่ไม่ได้อยู่ใน coagulation screen ปกติ</p>',
 note:'ตัวเลือกต้นฉบับจำมาไม่ครบ ให้เป็นแนวทางความรู้ประกอบ',
 ref:'08_Hemostasis-Bleeding-Coagulation/ภาวะเลือดออกผิดปกติ มีค 2567.pdf'},

{ch:'ch7', src:'Block 2.1 ข้อ 8', topic:'von Willebrand Disease screening',
 stem:'หญิง 24 ปี มี recurrent epistaxis และ heavy menstruation, prolonged bleeding หลังทำฟัน (dental scaling) PE ปกติ ควรส่ง initial lab investigation อะไร',
 choices:['Platelet count และดู PBS ร่วมกับ PT/aPTT','Bone marrow biopsy ทันที','Clot lysis test','vWF antigen เป็นการตรวจอันดับแรกก่อน CBC'],
 correctIdx:0, answer:'Platelet count + Peripheral Blood Smear ร่วมกับ PT/aPTT (initial coagulation screen)',
 explain:'<p>อาการ mucocutaneous bleeding หลายตำแหน่ง (เลือดกำเดาซ้ำๆ, ประจำเดือนมามาก, เลือดออกนานหลังทำฟัน) โดย PE ปกติ เป็นรูปแบบคลาสสิกของ <b>Primary hemostasis defect</b> ซึ่งสาเหตุที่พบบ่อยที่สุดในหญิงวัยเจริญพันธุ์คือ <b>von Willebrand Disease (vWD)</b> ซึ่งเป็นโรคเลือดออกทางพันธุกรรมที่พบบ่อยที่สุด</p>'+
 '<p>Investigation เบื้องต้น (initial screening) ที่ควรทำก่อนเสมอในผู้ป่วยสงสัยเลือดออกผิดปกติ คือ <b>CBC + Platelet count + Peripheral Blood Smear</b> (ดูจำนวนและรูปร่าง platelet) ร่วมกับ <b>PT, aPTT</b> (คัดกรองการแข็งตัวของเลือด) หากผลปกติทั้งหมดแต่ยังสงสัย vWD ให้ส่งตรวจจำเพาะเพิ่มเติม เช่น <b>vWF antigen, vWF activity (Ristocetin cofactor assay), Factor VIII level</b></p>',
 ref:'08_Hemostasis-Bleeding-Coagulation/ภาวะเลือดออกผิดปกติ มีค 2567.pdf'},

{ch:'ch7', src:'Block 2.1 ข้อ 9', topic:'Coagulation pathway concept', incomplete:true,
 stem:'ค่าแล็บ PT, aPTT, Platelet — สองค่าบนปกติ มีค่าหนึ่งผิดปกติ ถามว่าเป็นอย่างไรต่อ',
 choices:['ผลผิดปกติที่ PT อย่างเดียวบ่งชี้ปัญหาที่ Extrinsic pathway','ผลผิดปกติที่ platelet อย่างเดียวบ่งชี้ปัญหาที่ Common pathway','PT และ aPTT ผิดปกติพร้อมกันเสมอในทุกโรคเลือดออก','ค่า Platelet ไม่มีผลต่อการแปลผล PT/aPTT'],
 correctIdx:0, answer:'ต้องพิจารณาว่าค่าใดผิดปกติ เพื่อระบุว่าความผิดปกติอยู่ที่ Intrinsic, Extrinsic หรือ Common pathway',
 explain:'<div class="diagram-wrap"><svg class="diagram" width="600" height="200" viewBox="0 0 600 200">'+
 '<rect x="10" y="10" width="220" height="40" rx="6" fill="var(--chip)" stroke="var(--border)"/><text x="120" y="35" text-anchor="middle" font-size="12">Intrinsic pathway (XII,XI,IX,VIII)</text>'+
 '<rect x="370" y="10" width="220" height="40" rx="6" fill="var(--chip)" stroke="var(--border)"/><text x="480" y="35" text-anchor="middle" font-size="12">Extrinsic pathway (VII + Tissue Factor)</text>'+
 '<text x="120" y="68" text-anchor="middle" font-size="12" fill="var(--accent)">วัดด้วย aPTT</text>'+
 '<text x="480" y="68" text-anchor="middle" font-size="12" fill="var(--accent)">วัดด้วย PT</text>'+
 '<line x1="120" y1="50" x2="280" y2="110" stroke="var(--muted)" stroke-width="1.5"/>'+
 '<line x1="480" y1="50" x2="320" y2="110" stroke="var(--muted)" stroke-width="1.5"/>'+
 '<rect x="200" y="110" width="200" height="40" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/><text x="300" y="135" text-anchor="middle" font-size="12" fill="var(--accent-dark)">Common pathway (X, V, II, I)</text>'+
 '<line x1="300" y1="150" x2="300" y2="180" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#arrow9)"/>'+
 '<text x="300" y="196" text-anchor="middle" font-size="12">Fibrin clot</text>'+
 '<defs><marker id="arrow9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--muted)"/></marker></defs>'+
 '</svg></div>'+
 '<p>หลักการแปลผล coagulation screen:</p><ul>'+
 '<li><b>PT สูง, aPTT ปกติ:</b> ผิดปกติที่ Extrinsic pathway → นึกถึง Factor VII deficiency, Warfarin ระยะแรก, Vitamin K deficiency ระยะเริ่มต้น, ตับทำงานผิดปกติเล็กน้อย</li>'+
 '<li><b>aPTT สูง, PT ปกติ:</b> ผิดปกติที่ Intrinsic pathway → นึกถึง Hemophilia A (factor VIII), Hemophilia B (factor IX), von Willebrand disease, Heparin, Lupus anticoagulant, Factor XI/XII deficiency</li>'+
 '<li><b>Platelet ต่ำ (PT, aPTT ปกติ):</b> ผิดปกติที่ Primary hemostasis → ITP, marrow failure, hypersplenism, DIC ระยะแรก</li>'+
 '</ul>',
 note:'โจทย์ต้นฉบับจำค่าตัวเลขจริงมาไม่ครบ จึงอธิบายเป็นหลักการแปลผลทั่วไปแทน',
 ref:'08_Hemostasis-Bleeding-Coagulation/Lab screening test for bleeding disorder 2567.pdf'},

{ch:'ch7', src:'Block 2.1 ข้อ 11 &amp; 12', topic:'Warfarin mechanism',
 stem:'ผู้ป่วยใช้ Warfarin ตรวจพบ PT 31 วินาที (สูง) INR 3.6 (สูง) — จงอธิบายผลแล็บนี้ (Warfarin ส่งผลต่อ hemostasis ระดับใด/pathway ใด)',
 choices:['Affects extrinsic pathway (secondary hemostasis)','Enhance fibrinolysis','Affects platelet function only (primary hemostasis)','Inhibit Factor VIII directly'],
 correctIdx:0, answer:'Warfarin มีผลต่อ Secondary hemostasis โดยเฉพาะ Extrinsic/Common pathway (สะท้อนผ่านค่า PT/INR ที่สูงขึ้น)',
 explain:'<p><b>Warfarin</b> ยับยั้งเอนไซม์ Vitamin K epoxide reductase ทำให้ตับสร้าง <b>clotting factor ที่ต้องพึ่งพา Vitamin K ไม่ได้ (II, VII, IX, X และ Protein C, S)</b></p>'+
 '<p>ในบรรดา factor ที่ลดลง <b>Factor VII มีครึ่งชีวิตสั้นที่สุด (~6 ชั่วโมง)</b> จึงลดลงเร็วที่สุดเมื่อเริ่มยา และ Factor VII เป็นตัวหลักของ Extrinsic pathway ทำให้ <b>ค่า PT/INR ไวต่อการเปลี่ยนแปลงจาก Warfarin มากที่สุด</b> จึงใช้ PT/INR เป็นค่าติดตามการรักษามาตรฐาน (aPTT อาจสูงขึ้นบ้างเมื่อ factor II, IX, X ลดลงในระยะหลัง แต่ไม่ไวเท่า PT)</p>'+
 '<p>Warfarin เป็นความผิดปกติของ <b>Secondary hemostasis</b> (การสร้างลิ่มเลือดผ่าน coagulation cascade) ไม่ใช่ Primary hemostasis (platelet plug) และไม่ใช่การเพิ่ม fibrinolysis (สลายลิ่มเลือด) แต่อย่างใด</p>',
 ref:'09_Thrombosis-Anticoagulant/antithrombotics by A.sukrisd.pdf'},

{ch:'ch7', src:'Block 2.1 ข้อ 59', topic:'Immune Thrombocytopenia (ITP)',
 stem:'หญิง 30 ปี มี sudden severe hemorrhage Hb 5.9 Hct 29 MCV 85 Platelet 12,000 (ต่ำมาก) WBC 5,800 PMN predominant — วินิจฉัยคือ',
 choices:['Acute leukemia','Iron deficiency','DIC (Disseminated Intravascular Coagulation)','ITP (Immune Thrombocytopenic Purpura)'],
 correctIdx:3, answer:'ITP (Immune Thrombocytopenic Purpura)',
 explain:labBar('Platelet count',12000,150000,450000,500000,'/µL')+'<p>จุดสำคัญ: <b>Platelet ต่ำอย่างเดียวถึง 12,000/µL (severe thrombocytopenia)</b> โดยที่ <b>WBC และ MCV ปกติ (85 fL, ไม่ microcytic)</b> — เข้าเกณฑ์ <b>isolated thrombocytopenia</b> ซึ่งเป็นลักษณะเฉพาะของ <b>Immune Thrombocytopenic Purpura (ITP)</b> ที่ร่างกายสร้าง antibody มาทำลาย platelet ของตนเอง</p>'+
 '<p>ตัด <b>Acute leukemia</b> ออกเพราะ WBC ปกติไม่ใช่ leukocytosis ผิดปกติ และมักพบ blast บน smear ในเม็ดเลือดขาว ตัด <b>Iron deficiency</b> ออกเพราะ MCV ปกติ (ไม่ microcytic) และ IDA ไม่ทำให้เกิด severe thrombocytopenia แบบนี้ — Hb/Hct ที่ต่ำในข้อนี้เป็นผลจากการเสียเลือดเฉียบพลันรุนแรง (จาก platelet ต่ำมาก) ไม่ใช่สาเหตุตั้งต้นของโรค</p>',
 ref:'08_Hemostasis-Bleeding-Coagulation/ความผิดปกติของเกร็ดเลือด 2568.pdf'},

{ch:'ch7', src:'Block 2.2 ข้อ 28', topic:'Aspirin mechanism',
 stem:'แพทย์ให้ยา Aspirin จง mechanism การออกฤทธิ์',
 choices:['Inhibit ADP receptor (P2Y12)','Inhibit COX-1 (irreversible)','Inhibit Vitamin K epoxide reductase','Inhibit Factor Xa directly'],
 correctIdx:1, answer:'Irreversible inhibition ของ Cyclooxygenase-1 (COX-1)',
 explain:'<p><b>Aspirin (Acetylsalicylic acid)</b> ยับยั้งเอนไซม์ <b>Cyclooxygenase (COX)</b> แบบ<b>ถาวร (irreversible)</b> โดยไปเติมหมู่ acetyl บนตำแหน่ง active site ของเอนไซม์ ทำให้ platelet <b>ไม่สามารถสร้าง Thromboxane A2 (TXA2)</b> ได้ตลอดอายุขัยของ platelet นั้น (7-10 วัน เพราะ platelet ไม่มีนิวเคลียสจึงสร้างเอนไซม์ใหม่ทดแทนไม่ได้)</p>'+
 '<p>TXA2 มีหน้าที่กระตุ้นการรวมตัวของ platelet (platelet aggregation) และหดตัวของหลอดเลือด เมื่อขาด TXA2 จึงเกิดฤทธิ์ <b>ต้านการเกาะกลุ่มของเกล็ดเลือด (antiplatelet effect)</b> — Aspirin ขนาดต่ำ (low-dose) จะเลือกยับยั้ง COX-1 ใน platelet เป็นหลัก (ไม่ค่อยกระทบ COX-2 ที่เกี่ยวกับการอักเสบ) จึงใช้ป้องกันโรคหลอดเลือดหัวใจ/สมองในขนาดต่ำ</p>',
 ref:'09_Thrombosis-Anticoagulant/antithrombotics by A.sukrisd.pdf'},

{ch:'ch7', src:'Block 2.2 ข้อ 76', topic:'Hemophilia management',
 stem:'aPTT prolonged, PT normal, Platelet normal, ผล Factor 8, 9 ยังรอผล (pending) ต้องให้อะไรผู้ป่วยเป็นอันดับแรก',
 choices:['Cryoprecipitate','Factor VIII concentrate','DDAVP (Desmopressin)','Fresh Frozen Plasma (FFP)'],
 correctIdx:3, answer:'ในทางปฏิบัติจริงหากยังไม่ทราบว่าขาด Factor VIII หรือ IX ควรให้ Fresh Frozen Plasma (FFP) ซึ่งมี clotting factor ครบทุกตัว ระหว่างรอผลยืนยัน หากมีข้อมูลว่าเคยวินิจฉัย Hemophilia A มาก่อนแล้ว จึงพิจารณา DDAVP (สำหรับรายอาการไม่รุนแรง) หรือ Factor concentrate เฉพาะเจาะจง',
 explain:'<p>aPTT ยาวขึ้นโดย PT และ Platelet ปกติ บ่งชี้ความผิดปกติที่ <b>Intrinsic pathway</b> ซึ่งอาจเป็น Hemophilia A (ขาด Factor VIII), Hemophilia B (ขาด Factor IX) หรือ von Willebrand disease — ในสถานการณ์ที่ผล Factor VIII, IX <b>"pending" (ยังไม่ทราบผล)</b> การรักษาเชิง empirical ที่ปลอดภัยที่สุดคือให้ <b>FFP</b> เพราะมี clotting factor ครบทุกตัวรวมทั้ง VIII และ IX ในปริมาณพอเหมาะ ไม่จำเพาะเจาะจงเกินไป</p>'+
 '<p>ในตัวเลือกที่ให้มา 3 ข้อ:</p><ul>'+
 '<li><b>Cryoprecipitate</b> มี Factor VIII, vWF, Fibrinogen, Factor XIII สูง แต่<b>ไม่มี Factor IX</b> — หากผู้ป่วยเป็น Hemophilia B จะไม่ได้ผล</li>'+
 '<li><b>Factor VIII concentrate</b> จำเพาะกับ Hemophilia A เท่านั้น หากผู้ป่วยเป็น Hemophilia B จะไม่ช่วย</li>'+
 '<li><b>DDAVP</b> กระตุ้นการหลั่ง Factor VIII/vWF ที่สะสมในร่างกายออกมา ใช้ได้เฉพาะ Hemophilia A ชนิดไม่รุนแรง (mild) เท่านั้น ไม่ช่วย Hemophilia B</li></ul>'+
 '<p>เมื่อยังไม่ทราบชนิดที่แน่ชัด การเลือกยาที่จำเพาะเกินไปจึงมีความเสี่ยงที่จะรักษาไม่ตรงจุด</p>',
 note:'ตัวเลือกที่ให้มาไม่มี FFP ซึ่งเป็นคำตอบที่ปลอดภัยที่สุดในสถานการณ์ผล factor ยัง pending ควรตรวจสอบกับอาจารย์ผู้สอนว่าโจทย์เต็มมีตัวเลือก FFP หรือไม่',
 ref:'08_Hemostasis-Bleeding-Coagulation/ใบงาน Hemostasis and Coagulation 2569.pdf'},

{ch:'ch7', src:'Block 2.2 ข้อ 84', topic:'Factor VIII dosing',
 stem:'คำนวณ dose Factor VIII สำหรับคนไข้ Hemophilia A',
 choices:['Dose(IU) = น้ำหนักตัว(kg) × %rise × 1.5','Dose(IU) = น้ำหนักตัว(kg) × %rise × 0.5','Dose(IU) = %rise ÷ น้ำหนักตัว(kg)','Dose(IU) = น้ำหนักตัว(kg) ÷ %rise'],
 correctIdx:1, answer:'Factor VIII dose (IU) = น้ำหนักตัว (kg) × %rise ที่ต้องการ × 0.5',
 explain:'<div class="diagram-wrap"><b>สูตรคำนวณ Factor VIII replacement:</b><br><code style="font-size:15px">Dose (IU) = Body weight (kg) × Desired factor rise (%) × 0.5</code><br><br>'+
 '<b>สูตรคำนวณ Factor IX replacement (ค่าคูณต่างจาก VIII):</b><br><code style="font-size:15px">Dose (IU) = Body weight (kg) × Desired factor rise (%) × 1.0 - 1.4</code></div>'+
 '<p>หลักการ: 1 IU/kg ของ Factor VIII concentrate จะเพิ่มระดับ Factor VIII ในเลือดประมาณ <b>2%</b> (จึงใช้ค่าคูณ 0.5 ในสูตร ซึ่งเป็นส่วนกลับของ 2) ในขณะที่ Factor IX มี volume of distribution ใหญ่กว่า (กระจายออกนอกหลอดเลือดได้มากกว่า) จึงต้องใช้ขนาดยาต่อ kg สูงกว่า Factor VIII ประมาณ 2 เท่า เพื่อให้ได้ %rise เท่ากัน</p>'+
 '<p>ตัวอย่าง: ผู้ป่วยหนัก 50 kg ต้องการเพิ่ม Factor VIII 40% → Dose = 50 × 40 × 0.5 = <b>1,000 IU</b></p>',
 note:'โจทย์ต้นฉบับให้ตัวเลขการคำนวณจริงมาไม่ครบถ้วน จึงอธิบายสูตรและหลักการคำนวณให้แทน',
 ref:'08_Hemostasis-Bleeding-Coagulation/ใบงาน Hemostasis and Coagulation 2569.pdf'},

{ch:'ch7', src:'Block 2.2 ข้อ 85', topic:'Dengue with thrombocytopenia',
 stem:'ผู้ป่วย Dengue มี Platelet ต่ำมากๆ ถามว่าไม่ควรส่งตรวจอะไร',
 choices:['CBC/Platelet count','Bleeding time','NS1 antigen','Hematocrit'],
 correctIdx:1, answer:'Bleeding time',
 explain:'<p><b>Bleeding time</b> เป็นการทดสอบที่ต้องกรีดผิวหนังผู้ป่วยแล้ววัดเวลาที่เลือดหยุดไหล ซึ่ง<b>ไม่ควรทำในผู้ป่วยที่มี severe thrombocytopenia อยู่แล้ว</b> (เช่นใน Dengue ที่ platelet ต่ำมาก) เพราะ:</p><ul>'+
 '<li>ผลลัพธ์จะยาวนานผิดปกติอยู่แล้วอย่างคาดเดาได้ (ไม่ได้ให้ข้อมูลใหม่ที่เป็นประโยชน์ เนื่องจากทราบอยู่แล้วว่า platelet ต่ำจาก CBC)</li>'+
 '<li>เป็นการสร้างบาดแผลโดยไม่จำเป็นในผู้ป่วยที่เลือดหยุดยากอยู่แล้ว เสี่ยงเลือดออกไม่หยุดจากแผลที่กรีด</li>'+
 '</ul><p>ปัจจุบัน Bleeding time ถูกแทนที่ด้วยการตรวจ Platelet count และ Platelet function analyzer (PFA-100) ที่แม่นยำและปลอดภัยกว่ามากในเวชปฏิบัติทั่วไป</p>',
 ref:'08_Hemostasis-Bleeding-Coagulation/Lab screening test for bleeding disorder 2567.pdf'},

// ============ CHAPTER 8: Thrombosis, Anticoagulant & Antiplatelet ============
{ch:'ch8', src:'Block 2.2 ข้อ 32', topic:'LMWH mechanism',
 stem:'LMWH (Low Molecular Weight Heparin) จับกับอะไร',
 choices:['Thrombin (Factor IIa) เป็นหลัก','Factor Xa เป็นหลัก (ผ่าน Antithrombin)','Factor VIII โดยตรง','Plasminogen'],
 correctIdx:1, answer:'จับกับ Antithrombin แล้วยับยั้ง Factor Xa เป็นหลัก',
 explain:'<p><b>Low Molecular Weight Heparin (LMWH)</b> เช่น Enoxaparin, Dalteparin ออกฤทธิ์โดยจับกับ <b>Antithrombin (AT)</b> ทำให้ AT เปลี่ยนรูปร่างและมีฤทธิ์ยับยั้ง clotting factor ได้แรงขึ้นมาก (คล้าย catalyst) แต่เนื่องจากสายโมเลกุลของ LMWH สั้นกว่า Unfractionated Heparin (UFH) มาก จึง<b>ไม่สามารถสร้างสะพานเชื่อม (bridge) ระหว่าง AT กับ Thrombin (Factor IIa) ได้</b> ทำให้ LMWH ยับยั้ง<b>เฉพาะ Factor Xa เป็นหลัก</b> (ratio anti-Xa:anti-IIa ประมาณ 3-4:1) ต่างจาก UFH ที่ยับยั้งทั้ง Factor Xa และ IIa ในสัดส่วนใกล้เคียงกัน (1:1)</p>'+
 '<p>ข้อดีของ LMWH: ออกฤทธิ์คาดเดาได้ (predictable dose-response), half-life ยาวกว่า, ไม่ต้อง monitor aPTT บ่อยเหมือน UFH, เสี่ยง Heparin-Induced Thrombocytopenia (HIT) น้อยกว่า</p>',
 ref:'09_Thrombosis-Anticoagulant/antithrombotics by A.sukrisd.pdf'},

{ch:'ch8', src:'Block 2.2 ข้อ 67', topic:'Thrombophilia workup',
 stem:'ชายอายุ 30 ปี น่องซ้ายบวมกว่าด้านขวา 4 ซม. ไม่มีอุบัติเหตุ ไม่ได้กินยา Compression ultrasound พบ proximal DVT ควรพิจารณา next step ของ thrombophilia evaluation อย่างไร',
 choices:['ไม่ต้องส่งตรวจเพิ่มเพราะอายุยังน้อย','พิจารณา thrombophilia workup แต่ควรตรวจหลังพ้น acute phase/หยุดยา anticoagulant','ส่งตรวจ Protein C&S ทันทีในช่วง acute phase','ตรวจ Protein C&S เท่านั้นโดยไม่ต้องตรวจอื่น'],
 correctIdx:1, answer:'พิจารณาภาวะ thrombophilia เนื่องจากเป็น unprovoked DVT ในผู้ป่วยอายุน้อย แต่ "ไม่ควรส่งตรวจในช่วง acute phase หรือขณะได้รับยา anticoagulant"',
 explain:'<p>ผู้ป่วยอายุน้อย (30 ปี) เกิด DVT โดย<b>ไม่มีปัจจัยกระตุ้นชัดเจน (unprovoked VTE)</b> — เป็นข้อบ่งชี้สำคัญที่ควรพิจารณาส่งตรวจหาภาวะ <b>Thrombophilia</b> (ทั้งกรรมพันธุ์และภูมิคุ้มกัน) เช่น Protein C/S deficiency, Antithrombin deficiency, Factor V Leiden, Prothrombin gene mutation, Antiphospholipid syndrome</p>'+
 '<p><b>ข้อควรระวังสำคัญคือช่วงเวลาที่ส่งตรวจ:</b></p><ul>'+
 '<li>Protein C, Protein S, Antithrombin จะ<b>ลดลงชั่วคราวในช่วง acute thrombosis</b> (ถูกใช้ไปในกระบวนการแข็งตัวของเลือด) และยัง<b>ลดลงจากการได้รับ Warfarin</b> (Protein C, S เป็น vitamin K-dependent) หรือ<b>เพิ่มขึ้นปลอมจาก Heparin</b> (antithrombin) ทำให้ผลตรวจช่วงนี้ไม่น่าเชื่อถือ</li>'+
 '<li>ควรตรวจ<b>หลังพ้นช่วงเฉียบพลันอย่างน้อย 2-4 สัปดาห์ และหยุดยา anticoagulant มาระยะหนึ่งแล้ว</b> (หรือปรึกษาช่วงเวลาที่เหมาะสมกับยาแต่ละชนิด) เพื่อให้ผลตรวจสะท้อนภาวะพื้นฐานที่แท้จริงของผู้ป่วย</li></ul>',
 ref:'09_Thrombosis-Anticoagulant/Thrombophilia.pdf'},

{ch:'ch8', src:'Block 2.2 ข้อ 68', topic:'DVT/PE diagnostic algorithm',
 stem:'ผู้ป่วยหญิงปวดขา ขาบวมตั้งแต่ต้นขาถึงปลาย ร่วมกับปวดหลังช่วง Lumbar แพทย์สงสัย DVT ผล D-dimer สูง ควรทำอย่างไรต่อ',
 choices:['X-ray ขาส่วนล่าง','Confirm DVT ด้วย Compression Ultrasound Doppler','รอดูอาการโดยไม่ต้องตรวจเพิ่ม','ให้ Warfarin ทันทีโดยไม่ต้องยืนยันการวินิจฉัย'],
 correctIdx:1, answer:'ส่งตรวจ Compression Ultrasound Doppler ของขาเพื่อยืนยัน DVT',
 explain:'<div class="diagram-wrap"><svg class="diagram" width="620" height="130" viewBox="0 0 620 130">'+
 '<rect x="5" y="10" width="150" height="40" rx="6" fill="var(--chip)" stroke="var(--border)"/><text x="80" y="35" text-anchor="middle" font-size="11.5">สงสัย DVT ทางคลินิก</text>'+
 '<line x1="155" y1="30" x2="195" y2="30" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow8)"/>'+
 '<rect x="195" y="10" width="150" height="40" rx="6" fill="var(--chip)" stroke="var(--border)"/><text x="270" y="35" text-anchor="middle" font-size="11.5">D-dimer สูง (nonspecific)</text>'+
 '<line x1="345" y1="30" x2="385" y2="30" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow8)"/>'+
 '<rect x="385" y="10" width="220" height="40" rx="6" fill="var(--accent-light)" stroke="var(--accent)"/><text x="495" y="35" text-anchor="middle" font-size="11.5" fill="var(--accent-dark)">Compression Ultrasound Doppler</text>'+
 '<line x1="495" y1="50" x2="495" y2="80" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#arrow8)"/>'+
 '<text x="495" y="95" text-anchor="middle" font-size="11.5">ยืนยัน/ปฏิเสธ DVT ที่ขา</text>'+
 '<defs><marker id="arrow8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)"/></marker></defs>'+
 '</svg></div>'+
 '<p>D-dimer เป็นการตรวจที่มี <b>sensitivity สูงแต่ specificity ต่ำ</b> (สูงได้จากหลายสาเหตุ เช่น การอักเสบ, การผ่าตัด, การตั้งครรภ์, มะเร็ง, สูงอายุ) จึงใช้เพื่อ "rule out" ในผู้ป่วยความเสี่ยงต่ำมากกว่าจะใช้ "rule in" การวินิจฉัย</p>'+
 '<p>เมื่อสงสัย DVT ทางคลินิกและ D-dimer สูง ขั้นตอนมาตรฐานถัดไปคือ <b>Compression (Duplex) Ultrasound ของขา</b> ซึ่งเป็นการตรวจยืนยัน DVT ที่ไม่รุกล้ำ (non-invasive), ปลอดภัย, และแม่นยำสูงสำหรับ proximal DVT — CT Pulmonary Angiography จะพิจารณาเมื่อ<b>สงสัยภาวะ Pulmonary Embolism (PE) ร่วมด้วย</b> เช่น มีอาการหายใจลำบาก เจ็บหน้าอก ซึ่งในโจทย์นี้เน้นอาการที่ขาเป็นหลัก</p>',
 ref:'09_Thrombosis-Anticoagulant/Thrombophilia.pdf'},

{ch:'ch8', src:'Block 2.2 ข้อ 69', topic:'Antiphospholipid syndrome',
 stem:'ผู้ป่วยหญิงมีประวัติแท้งบุตร (Miscarriage) 3 รอบ ควรนึกถึงโรคใด',
 choices:['Antiphospholipid Syndrome (APS)','Factor V Leiden mutation','Protein C deficiency','Disseminated Intravascular Coagulation'],
 correctIdx:0, answer:'Antiphospholipid Syndrome (APS)',
 explain:'<p><b>Recurrent pregnancy loss (แท้งบุตรซ้ำๆ ตั้งแต่ 3 ครั้งขึ้นไป โดยเฉพาะช่วงหลังไตรมาสแรก)</b> เป็นหนึ่งในเกณฑ์วินิจฉัยทางคลินิกของ <b>Antiphospholipid Syndrome (APS)</b> ซึ่งเป็นโรคภูมิต้านตนเองที่ร่างกายสร้าง antibody ต่อ phospholipid-binding protein (เช่น Lupus anticoagulant, Anticardiolipin antibody, Anti-beta2 glycoprotein I) ทำให้เกิดภาวะเลือดแข็งตัวง่ายผิดปกติ (hypercoagulable state)</p>'+
 '<p>อาการทางคลินิกของ APS ที่สำคัญ ได้แก่ (1) Arterial/Venous thrombosis ซ้ำๆ (2) Recurrent pregnancy morbidity (แท้งซ้ำ, ครรภ์เป็นพิษ, ทารกโตช้าในครรภ์) การวินิจฉัยต้องมีทั้งอาการทางคลินิกและตรวจพบ antiphospholipid antibody ยืนยันซ้ำห่างกันอย่างน้อย 12 สัปดาห์</p>',
 ref:'09_Thrombosis-Anticoagulant/Thrombophilia.pdf'},

{ch:'ch8', src:'Block 2.2 ข้อ 71', topic:'Heparin-Induced Thrombocytopenia (HIT)',
 stem:'ผู้ป่วยได้รับ Unfractionated Heparin (UFH) เพื่อรักษา VTE แล้ว Platelet ลดลง ควรทำอย่างไร',
 choices:['เพิ่มขนาดยา Heparin ต่อไป','หยุด Heparin แล้วให้ Non-heparin anticoagulant แทน','ให้ Vitamin K ทันที','ให้ Platelet transfusion ทันที'],
 correctIdx:1, answer:'หยุด Heparin ทันที และเปลี่ยนไปใช้ Non-heparin anticoagulant (เช่น Argatroban, Fondaparinux, Bivalirudin)',
 explain:'<p>Platelet ลดลงหลังได้รับ Heparin (มักลดลง &gt;50% จากค่าเริ่มต้น หรือเริ่มลด 5-10 วันหลังได้ยา) ต้องสงสัย <b>Heparin-Induced Thrombocytopenia (HIT)</b> ซึ่งเป็นปฏิกิริยาภูมิคุ้มกันที่ร่างกายสร้าง antibody ต่อ complex ของ Heparin-Platelet Factor 4 (PF4) แล้วไปกระตุ้น platelet ให้ทำงานผิดปกติ ทำให้เกิด<b>ภาวะ thrombosis เพิ่มขึ้น (ทั้งที่ platelet ต่ำ) แทนที่จะเลือดออก</b> — เป็น paradox สำคัญที่ต้องจำ (HIT เพิ่มความเสี่ยง thrombosis ไม่ใช่ bleeding)</p>'+
 '<p>การจัดการ: <b>หยุด Heparin ทุกรูปแบบทันที (รวมทั้ง UFH และ LMWH)</b> และเริ่ม <b>Non-heparin anticoagulant</b> ทดแทนทันทีเพื่อป้องกัน thrombosis ต่อเนื่อง เช่น <b>Argatroban, Fondaparinux, Bivalirudin</b> — ห้ามให้ Warfarin เดี่ยวๆ ในช่วงแรกเพราะอาจกระตุ้นให้เกิด skin necrosis/venous limb gangrene ได้ (จาก Protein C ลดลงเร็วกว่า factor อื่น)</p>',
 ref:'09_Thrombosis-Anticoagulant/antithrombotics by A.sukrisd.pdf'},

// ============ CHAPTER 9: Blood Bank & Transfusion ============
{ch:'ch9', src:'Block 2.2 ข้อ 20', topic:'TRALI vs Anaphylactic transfusion reaction',
 stem:'ผู้หญิงต้องให้เลือดสำหรับผ่าตัด abdominal 2 units ตอนให้ถุงที่สอง เกิด tachypnea, chill, BP 85/33 mmHg, Pulse 113, Chest X-ray พบ infiltration — กลไก (mechanism) คืออะไร',
 choices:['Recipient IgA deficiency (Anaphylactic reaction)','TRALI จาก Donor anti-leukocyte antibody','Acute hemolytic reaction จาก ABO mismatch','Circulatory overload (TACO)'],
 correctIdx:1, answer:'TRALI (Transfusion-Related Acute Lung Injury) จาก Donor anti-leukocyte antibody',
 explain:'<p>จุดสำคัญที่สุดในการวินิจฉัยคือ <b>Chest X-ray พบ bilateral infiltration (pulmonary edema pattern)</b> ร่วมกับ hypotension และหายใจเร็วภายใน 6 ชั่วโมงหลังรับเลือด — เข้าเกณฑ์ <b>TRALI (Transfusion-Related Acute Lung Injury)</b> ซึ่งเป็นสาเหตุการเสียชีวิตจากการให้เลือดที่พบบ่อยที่สุดในปัจจุบัน</p>'+
 '<p>กลไกเกิดจาก <b>antibody ต่อ HLA หรือ Human Neutrophil Antigen (HNA) ที่มาจากผู้บริจาคเลือด (donor antibody)</b> ไปกระตุ้น neutrophil ของผู้รับเลือดให้ทำลายเยื่อบุหลอดเลือดในปอด เกิด non-cardiogenic pulmonary edema เฉียบพลัน</p>'+
 '<p>ต่างจาก <b>Anaphylactic transfusion reaction (จาก Recipient IgA deficiency)</b> ที่ผู้รับเลือดขาด IgA มาก่อนแล้วมี anti-IgA antibody ทำปฏิกิริยารุนแรงต่อ IgA ในเลือดที่ได้รับ ซึ่งมักมีอาการทางผิวหนัง (urticaria, angioedema) และหลอดลมตีบ (bronchospasm, stridor) เด่นกว่า ไม่เน้นที่ pulmonary infiltration บน X-ray แบบ TRALI</p>',
 ref:'10_Blood-Bank-Transfusion/Blood Transfusion Reaction 2026.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 22', topic:'Irradiated blood product',
 stem:'ผู้ป่วยได้รับการปลูกถ่ายไขกระดูก (BMT) มาแล้ว 30 วัน ถ้าจะให้เม็ดเลือดแดงต้องทำด้วยวิธีใดเพิ่มเติม',
 choices:['Leukoreduced blood only','Gamma-irradiated blood product','Washed blood only','CMV-negative blood only'],
 correctIdx:1, answer:'ต้องให้เลือดที่ผ่านการฉายรังสีแกมมา (Irradiated blood product)',
 explain:'<p>ผู้ป่วยหลังปลูกถ่ายไขกระดูก (Bone Marrow Transplant) มีระบบภูมิคุ้มกันที่<b>บกพร่องรุนแรง (severely immunocompromised)</b> เสี่ยงต่อภาวะ <b>Transfusion-Associated Graft-versus-Host Disease (TA-GVHD)</b> ซึ่งเกิดจาก T-lymphocyte ที่มีชีวิตอยู่ในถุงเลือดของผู้บริจาคเข้าไปโจมตีเนื้อเยื่อของผู้รับที่ไม่สามารถกำจัด lymphocyte แปลกปลอมนี้ได้ (เนื่องจากภูมิคุ้มกันตัวเองถูกกดอย่างมาก) — TA-GVHD มีอัตราตายสูงมาก (&gt;90%)</p>'+
 '<p>การป้องกันทำได้โดย<b>ฉายรังสีแกมมา (Gamma irradiation) ที่ผลิตภัณฑ์เลือดที่มีเซลล์ (RBC, Platelet)</b> ก่อนให้ผู้ป่วยกลุ่มเสี่ยงสูง (BMT recipient, congenital immunodeficiency, intrauterine transfusion, ผู้รับเลือดจากญาติสายตรง) เพื่อทำลาย DNA ของ T-lymphocyte ในถุงเลือดไม่ให้แบ่งตัวได้ โดยไม่กระทบการทำงานของ RBC/Platelet</p>',
 ref:'10_Blood-Bank-Transfusion/Blood component2026.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 23', topic:'Acute Hemolytic Transfusion Reaction',
 stem:'ชาย 52 ปี anemia secondary รับเลือดถุงที่ 2 ผ่านไป 30 นาที มี flank pain, dark urine, BT 38.9°C, HR/pulse 55/88 — Initial management คืออะไร',
 choices:['ให้ Antihistamine แล้วให้เลือดต่อ','หยุดการให้เลือดทันที + IV fluid resuscitation','ลดอัตราเร็วการให้เลือดลงครึ่งหนึ่ง','ให้ Furosemide แล้วให้เลือดต่อ'],
 correctIdx:1, answer:'หยุดการให้เลือดทันที (Stop transfusion) และให้ IV fluid resuscitation',
 explain:'<p>Flank pain (ปวดสีข้าง, มักสะท้อนการทำลายที่ไต), dark urine (hemoglobinuria), ไข้ ที่เกิดขึ้นระหว่างหรือหลังให้เลือดไม่นาน เป็นลักษณะเฉพาะของ <b>Acute Hemolytic Transfusion Reaction (AHTR)</b> ซึ่งมักเกิดจาก ABO incompatibility (ผิดพลาดในการจับคู่หมู่เลือด/ระบุตัวผู้ป่วยผิดคน) ทำให้ antibody ของผู้รับทำลาย RBC ของผู้บริจาคอย่างรุนแรงแบบ intravascular hemolysis</p>'+
 '<div class="diagram-wrap"><b>ขั้นตอนการจัดการเมื่อสงสัย Acute Transfusion Reaction (ลำดับความสำคัญ):</b><br>'+
 '1. <b>หยุดการให้เลือดทันที (Stop the transfusion)</b> — สำคัญที่สุด ทำก่อนอย่างอื่นเสมอ<br>'+
 '2. คงเส้นเลือด IV ไว้ด้วย Normal saline เพื่อ maintain IV access และป้องกัน hypotension/acute kidney injury<br>'+
 '3. ตรวจสอบ patient identification และ blood bag label ซ้ำว่าตรงกันหรือไม่<br>'+
 '4. ส่งเลือดที่เหลือในถุง + เลือดผู้ป่วยกลับไปที่ blood bank เพื่อตรวจ repeat crossmatch, Direct Coombs test<br>'+
 '5. Monitor vital signs, urine output อย่างใกล้ชิด ป้องกัน/รักษาภาวะไตวายเฉียบพลันและ DIC ที่อาจตามมา</div>',
 ref:'10_Blood-Bank-Transfusion/Blood Transfusion Reaction 2026.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 25', topic:'Allergic transfusion reaction',
 stem:'หญิง 25 ปี เกิดอาการคัน (itching) และผื่นลมพิษ (hives) 20 นาทีระหว่าง platelet transfusion อาการกำเริบมากขึ้นแม้หยุด platelet transfusion และให้ antihistamine แล้ว หากต้องทำ platelet transfusion ต่อควรพิจารณาอย่างไร',
 choices:['ให้ Rh-negative whole blood แทน','ไม่ให้ทำ transfusion ต่อ','Premedicate + พิจารณาให้ Washed หรือ Leukoreduced platelet แทน','ให้ Steroid โดยไม่สนใจอนาคต'],
 correctIdx:2, answer:'Premedicate ด้วย antihistamine/steroid ก่อนให้เลือดครั้งถัดไป และพิจารณาเปลี่ยนไปใช้ Washed platelet หรือ Leukoreduced platelet',
 explain:'<p>อาการคัน/ลมพิษระหว่างรับเลือดเป็น <b>Allergic (Urticarial) Transfusion Reaction</b> เกิดจากสารก่อภูมิแพ้ในพลาสมาของผู้บริจาค (เช่นโปรตีนแปลกปลอม) ไปกระตุ้น mast cell ของผู้รับ ส่วนใหญ่อาการไม่รุนแรงและตอบสนองดีต่อ antihistamine — แต่ในรายที่<b>อาการเป็นซ้ำหรือรุนแรงแม้ให้ยาแล้ว</b> ควรป้องกันการเกิดซ้ำในครั้งถัดไปด้วย:</p><ul>'+
 '<li><b>Premedication</b> ด้วย antihistamine (± corticosteroid) ก่อนเริ่ม transfusion ครั้งต่อไป</li>'+
 '<li>เปลี่ยนไปใช้ <b>Washed blood product</b> (ล้างพลาสมาของผู้บริจาคออกให้เหลือแต่เซลล์) เพื่อลดสารก่อภูมิแพ้ในพลาสมา</li>'+
 '<li><b>Leukoreduced product</b> (กรองเม็ดเลือดขาวออก) ช่วยลดปฏิกิริยาจาก cytokine/HLA antibody แต่หลักๆ ใช้ป้องกัน febrile non-hemolytic reaction มากกว่า allergic reaction</li></ul>'+
 '<p>ไม่จำเป็นต้องหยุดการรักษาด้วย platelet ไปเลย (ผู้ป่วยยังต้องการ platelet ตามข้อบ่งชี้ทางคลินิก) และไม่จำเป็นต้องเปลี่ยนเป็น Rh-negative whole blood ซึ่งไม่เกี่ยวข้องกับกลไกการแพ้นี้</p>',
 ref:'10_Blood-Bank-Transfusion/Blood Transfusion Reaction 2026.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 26', topic:'Septic transfusion reaction',
 stem:'หญิง 55 ปี ให้เลือดไป 30 นาที ไข้ 40°C, BP drop 70/40, HR 128/min ไม่มี flank pain ไม่มีปัสสาวะเป็นเลือด เกิดจากอะไร รักษาอย่างไร',
 choices:['Acute Hemolytic Transfusion Reaction','Septic (Bacterial contamination) Transfusion Reaction','Febrile Non-Hemolytic Transfusion Reaction','TRALI'],
 correctIdx:1, answer:'Septic Transfusion Reaction (แบคทีเรียปนเปื้อนในถุงเลือด) — รักษาด้วยการหยุดเลือดทันที ให้ IV fluid resuscitation + Broad-spectrum antibiotic ทันที',
 explain:'<p>จุดสำคัญที่ช่วยแยกจาก Acute Hemolytic Transfusion Reaction (AHTR) คือ <b>ไม่มี flank pain และไม่มีปัสสาวะเป็นเลือด/hemoglobinuria</b> (ซึ่งเป็นลักษณะเฉพาะของ hemolysis) แต่มีไข้สูงมาก (40°C) ร่วมกับ septic shock picture (BP ตก, HR เร็วมาก) — เข้าได้กับ <b>Septic Transfusion Reaction</b> จากแบคทีเรียปนเปื้อนในถุงเลือด (พบบ่อยใน platelet concentrate เพราะเก็บที่อุณหภูมิห้อง เอื้อต่อการเจริญของแบคทีเรียมากกว่า RBC ที่เก็บเย็น)</p>'+
 '<p>การรักษา: หยุดการให้เลือดทันที, ส่งเพาะเชื้อทั้งจากถุงเลือดที่เหลือและเลือดผู้ป่วย, ให้ <b>IV fluid resuscitation อย่างรวดเร็ว + Broad-spectrum antibiotic ทันที</b> เนื่องจากเป็นภาวะ septic shock ที่อันตรายถึงชีวิตหากรักษาช้า</p>',
 ref:'10_Blood-Bank-Transfusion/Blood Transfusion Reaction 2026.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 36', topic:'Emergency transfusion',
 stem:'ผู้ป่วย massive hemorrhage, vital signs ไม่คงที่ ยังไม่ได้รับคำตอบจาก blood bank ต้องให้เลือดชนิดใด',
 choices:['Packed Red Cell กรุ๊ปตรงกับผู้ป่วยทันที (รอผลตรวจ)','Packed Red Cell กรุ๊ป O Rh-negative','Fresh Frozen Plasma ก่อน RBC','รอผล crossmatch ให้เสร็จก่อนเสมอ'],
 correctIdx:1, answer:'Packed Red Cell กรุ๊ป O Rh-negative (Universal donor สำหรับ RBC)',
 explain:'<p>ในภาวะฉุกเฉินที่ผู้ป่วยเสียเลือดรุนแรงและ vital signs ไม่คงที่ (life-threatening hemorrhage) แต่<b>ยังไม่มีผลตรวจหมู่เลือด/crossmatch</b> จาก blood bank ไม่สามารถรอผลได้เพราะผู้ป่วยอาจเสียชีวิตก่อน จึงต้องให้เลือดกลุ่ม <b>O Rh-negative (Universal Donor)</b> ซึ่งไม่มี A, B antigen และไม่มี Rh(D) antigen บนผิว RBC จึงมีโอกาสน้อยที่สุดที่จะเกิดปฏิกิริยาการทำลายเม็ดเลือดจาก antibody ของผู้รับไม่ว่าผู้รับจะมีหมู่เลือดใด</p>'+
 '<p>เมื่อทราบผลหมู่เลือดที่แท้จริงของผู้ป่วยแล้ว (โดยปกติภายใน 10-15 นาที) ควรเปลี่ยนกลับไปให้เลือดตรงกับหมู่เลือดผู้ป่วยโดยเร็วที่สุด เพื่อสงวน O-negative blood ซึ่งมีปริมาณจำกัดไว้สำหรับกรณีฉุกเฉินอื่น</p>',
 ref:'10_Blood-Bank-Transfusion/Blood component2026.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 38', topic:'ABO/Rh blood typing',
 stem:'ผลตรวจพบ Anti-A agglutination และ Anti-D agglutination — ผู้ป่วยมีหมู่เลือดอะไร และสามารถรับเลือดชนิดใดได้บ้าง',
 choices:['หมู่เลือด O Rh-negative — รับได้เฉพาะ O-','หมู่เลือด A Rh-positive (A+) — รับได้ A+, A-, O+, O-','หมู่เลือด AB Rh-positive — รับได้ทุกหมู่','หมู่เลือด B Rh-negative — รับได้ B-, O-'],
 correctIdx:1, answer:'หมู่เลือด A Rh-positive (A+) — สามารถรับเลือดจากผู้บริจาคหมู่ A+, A-, O+, O- ได้',
 explain:'<p>การแปลผล Blood typing (Forward typing): เมื่อนำเลือดผู้ป่วยไปผสมกับ Anti-A serum แล้วเกิด agglutination (จับกันเป็นก้อน) แปลว่า RBC มี <b>A antigen</b> บนผิว = หมู่เลือด <b>A</b> และเมื่อผสมกับ Anti-D serum แล้วเกิด agglutination แปลว่ามี <b>D antigen (Rh factor)</b> = <b>Rh-positive</b></p>'+
 '<p>ดังนั้นผู้ป่วยมีหมู่เลือด <b>A Rh-positive (A+)</b> ตามหลัก ABO compatibility ผู้ป่วยหมู่ A+ สามารถรับเม็ดเลือดแดงจากผู้บริจาคที่<b>ไม่มี antigen แปลกปลอมที่ผู้ป่วยมี antibody อยู่</b> ได้แก่หมู่ A+ (ตรงกัน), A- , O+ , O- (ไม่มี A/B antigen แปลกปลอม และ Rh ที่เข้ากันได้)</p>',
 ref:'10_Blood-Bank-Transfusion/8.1 blood group.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 39', topic:'Weak D phenotype',
 stem:'หญิงอายุ 21 ปี ตรวจพบ weak anti-D ไม่เคยได้รับเลือดมาก่อนและไม่ได้ตั้งครรภ์ Hb 11.9 Platelet ปกติ ปกติจะให้ Packed RBC ชนิดใด',
 choices:['Rh-positive PRBC','Rh-negative PRBC','O-negative PRBC เท่านั้นไม่ว่ากรณีใด','ไม่ต้องคำนึงถึง Rh ในการให้เลือด'],
 correctIdx:1, answer:'Rh-negative PRBC (ให้เสมือนเป็นผู้รับที่เป็น Rh-negative เพื่อความปลอดภัย)',
 explain:'<p><b>Weak D (Du variant)</b> คือภาวะที่ RBC มี D antigen อยู่จริงแต่ในปริมาณน้อยหรือรูปแบบผิดปกติ ทำให้การตรวจ Rh typing มาตรฐานอาจให้ผลไม่ชัดเจนหรืออ่อน (weak reaction) การจัดการขึ้นกับบทบาทของผู้ป่วยในสถานการณ์นั้น:</p><ul>'+
 '<li>หากผู้ป่วยเป็น<b>ผู้บริจาคเลือด (donor)</b> ที่มี weak D จะถูกจัดเป็น <b>Rh-positive</b> (เพราะมี D antigen จริง อาจกระตุ้น alloimmunization ในผู้รับ Rh-negative ได้)</li>'+
 '<li>แต่หากผู้ป่วยเป็น<b>ผู้รับเลือด (recipient)</b> ที่มี weak D เพื่อความปลอดภัยสูงสุด (โดยเฉพาะในหญิงวัยเจริญพันธุ์ที่อาจตั้งครรภ์ในอนาคต) จะถือปฏิบัติว่าเป็น <b>Rh-negative</b> และให้เลือด <b>Rh-negative PRBC</b> เพื่อป้องกันการสร้าง anti-D antibody ที่อาจเป็นอันตรายต่อการตั้งครรภ์ในอนาคต (Hemolytic Disease of Newborn จาก Rh incompatibility)</li></ul>',
 ref:'10_Blood-Bank-Transfusion/8.1 blood group.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 40', topic:'Crossmatch validity',
 stem:'ผู้ป่วยมีประวัติให้เลือด 10 วันก่อน สามารถใช้ผล crossmatch เดิมให้เลือดครั้งนี้ได้หรือไม่',
 choices:['ได้ ใช้ผลเดิมได้ถ้าภายใน 7 วัน','ไม่ได้ เพราะผล crossmatch ใช้ได้ไม่เกิน 3 วัน (72 ชม.)','ได้ตลอดไปถ้าเคยตรวจแล้วครั้งหนึ่ง','ไม่ได้ ต้องรอผลตรวจนาน 1 เดือน'],
 correctIdx:1, answer:'ไม่ได้ ต้องเจาะเลือดส่ง crossmatch ใหม่ เพราะตัวอย่างเลือด/ผล crossmatch มีอายุใช้งานไม่เกิน 3 วัน (72 ชั่วโมง) นับจากวันที่เจาะเลือด หากเคยได้รับเลือดหรือตั้งครรภ์ภายใน 3 เดือนที่ผ่านมา',
 explain:'<p>มาตรฐานสากล (AABB) กำหนดว่าหาก<b>ผู้ป่วยเคยได้รับการถ่ายเลือดหรือตั้งครรภ์ในช่วง 3 เดือนที่ผ่านมา</b> (หรือไม่ทราบประวัติแน่ชัด) ตัวอย่างเลือดที่ใช้ตรวจ <b>Antibody screen และ Crossmatch มีอายุใช้งานได้ไม่เกิน 3 วัน (72 ชั่วโมง)</b> นับจากเวลาที่เจาะเลือด</p>'+
 '<p>เหตุผลคือ การได้รับเลือด/ตั้งครรภ์ก่อนหน้าอาจกระตุ้นให้ร่างกายสร้าง <b>alloantibody ใหม่ (new alloimmunization)</b> ต่อ antigen ของเม็ดเลือดแดงที่ได้รับ ซึ่ง antibody เหล่านี้อาจใช้เวลาหลายวันกว่าจะตรวจพบได้ในระดับที่มีนัยสำคัญ (anamnestic response) ดังนั้นผลตรวจที่เก่ากว่า 3 วันจึงไม่น่าเชื่อถือพอ ต้อง<b>เจาะเลือดใหม่และตรวจ crossmatch ซ้ำ</b>ทุกครั้งที่จะให้เลือดหากเกินกำหนดนี้</p>',
 ref:'10_Blood-Bank-Transfusion/8.2 blood compat test 69.pdf'},

{ch:'ch9', src:'Block 2.2 ข้อ 41', topic:'Bombay phenotype',
 stem:'Forward typing ได้กรุ๊ป O แต่ตรวจ Reverse (serum) grouping ด้วย O cell กลับพบ Agglutination อธิบายได้ว่าอย่างไร',
 choices:['A2 subgroup','O Bombay phenotype (hh genotype)','Cold agglutinin interference','Rouleaux formation artifact'],
 correctIdx:1, answer:'O Bombay phenotype (hh genotype)',
 explain:'<p>ความขัดแย้งระหว่าง Forward typing (บอกว่าเป็น O เพราะไม่มี agglutination กับ Anti-A, Anti-B) กับ Reverse/serum typing (พบว่า serum ของผู้ป่วยจับกับ<b>เม็ดเลือด O ปกติของคนอื่น</b>ด้วย ซึ่งไม่ควรเกิดขึ้นถ้าเป็น O ธรรมดา เพราะ serum ของคนหมู่ O ปกติไม่ควรมี antibody ต่อเม็ดเลือด O) เป็นลักษณะเฉพาะของ <b>Bombay phenotype (hh genotype)</b></p>'+
 '<p>Bombay phenotype เกิดจากการขาดยีน <b>H gene</b> ที่จำเป็นในการสร้าง H antigen (สารตั้งต้นของทั้ง A และ B antigen) ทำให้แม้จะมียีน A หรือ B อยู่ ก็ไม่สามารถแสดงออกเป็น antigen บนผิวเซลล์ได้เลย ผลคือ RBC ไม่มีทั้ง A, B, และ<b>H antigen</b> (ต่างจากหมู่ O ปกติที่ยังมี H antigen เต็มที่) และในซีรั่มจะมี <b>Anti-A, Anti-B, และ Anti-H antibody</b> ทำให้ agglutinate กับเม็ดเลือดกรุ๊ป O ปกติ (ที่มี H antigen เต็มที่) ด้วย — ผู้ป่วย Bombay phenotype จึง<b>รับเลือดได้เฉพาะจากผู้บริจาค Bombay phenotype ด้วยกันเองเท่านั้น</b> รับเลือดกรุ๊ป O ปกติไม่ได้</p>',
 ref:'10_Blood-Bank-Transfusion/8.1 blood group.pdf'},

// ============ CHAPTER 10: HIV & ARV ============
{ch:'ch10', src:'Block 2.2 ข้อ 7', topic:'Acute HIV / serologic window',
 stem:'ตรวจ HIV 4th generation ได้ผล positive แต่ 3rd generation ได้ผล negative แปลผลอย่างไร',
 choices:['False positive test','Window period ปกติ ไม่ติดเชื้อ','Acute HIV infection','Resolved HIV infection (หายเองแล้ว)'],
 correctIdx:2, answer:'Acute HIV Infection (ระยะติดเชื้อเฉียบพลัน)',
 explain:'<div class="diagram-wrap"><svg class="diagram" width="640" height="130" viewBox="0 0 640 130">'+
 '<line x1="20" y1="100" x2="620" y2="100" stroke="var(--border)" stroke-width="2"/>'+
 '<text x="20" y="118" font-size="11">Day 0 (ติดเชื้อ)</text>'+
 '<line x1="140" y1="90" x2="140" y2="110" stroke="var(--accent)" stroke-width="2"/><text x="140" y="80" text-anchor="middle" font-size="11">~day 10-15: p24 Ag + RNA ขึ้น</text>'+
 '<rect x="60" y="30" width="160" height="24" rx="4" fill="var(--good-light)"/><text x="140" y="46" text-anchor="middle" font-size="10.5" fill="var(--good)">4th gen (Ag/Ab combo) เริ่มบวก</text>'+
 '<line x1="350" y1="90" x2="350" y2="110" stroke="var(--bad)" stroke-width="2"/><text x="350" y="80" text-anchor="middle" font-size="11">~day 20-25: IgM/IgG antibody ขึ้น</text>'+
 '<rect x="270" y="30" width="160" height="24" rx="4" fill="var(--bad-light)"/><text x="350" y="46" text-anchor="middle" font-size="10.5" fill="var(--bad)">3rd gen (Ab only) เริ่มบวก</text>'+
 '</svg><small style="color:var(--muted)">แผนภาพ: Window period ของ HIV test รุ่นต่างๆ</small></div>'+
 '<p>ชุดตรวจ HIV แต่ละ generation ตรวจจับสารต่างกัน และมี "window period" (ช่วงที่ติดเชื้อแล้วแต่ตรวจไม่พบ) ต่างกัน:</p><ul>'+
 '<li><b>3rd generation:</b> ตรวจจับเฉพาะ <b>Antibody (IgM/IgG)</b> ต่อ HIV เท่านั้น ซึ่งร่างกายใช้เวลาสร้างประมาณ 3-4 สัปดาห์หลังติดเชื้อ</li>'+
 '<li><b>4th generation:</b> ตรวจจับทั้ง <b>Antibody และ p24 Antigen</b> (โปรตีนของตัวไวรัสเอง) ซึ่ง p24 antigen ปรากฏเร็วกว่า antibody มาก (ประมาณ 2 สัปดาห์หลังติดเชื้อ) จึงมี window period สั้นกว่า</li></ul>'+
 '<p>ดังนั้น หาก <b>4th generation positive แต่ 3rd generation negative</b> แปลว่าผู้ป่วยติดเชื้อ HIV มาไม่นาน อยู่ในช่วงที่มี p24 antigen ขึ้นแล้ว แต่ร่างกายยังสร้าง antibody ไม่มากพอให้ 3rd generation ตรวจพบ = <b>Acute HIV Infection</b> ควรยืนยันด้วย HIV RNA (Viral load) ซึ่งจะขึ้นสูงมากในระยะนี้</p>',
 ref:'11_HIV-ARV/HIV and opportunistics infection.pdf'},

{ch:'ch10', src:'Block 2.2 ข้อ 16', topic:'ARV side effect',
 stem:'ยารักษา HIV ตัวใดทำให้เกิด anemia ได้',
 choices:['Tenofovir','Zidovudine (AZT)','Dolutegravir','Lamivudine'],
 correctIdx:1, answer:'Zidovudine (AZT/ZDV)',
 explain:'<p><b>Zidovudine (AZT)</b> เป็นยากลุ่ม NRTI (Nucleoside Reverse Transcriptase Inhibitor) ที่มีผลข้างเคียงสำคัญคือกด<b>ไขกระดูก (bone marrow suppression/myelotoxicity)</b> ทำให้เกิด <b>Anemia (macrocytic anemia เป็นลักษณะเฉพาะ) และ Neutropenia</b> เป็นผลข้างเคียงที่พบได้บ่อยและเป็นเหตุผลสำคัญที่ปัจจุบันไม่ค่อยใช้ AZT เป็น first-line ในผู้ใหญ่แล้ว (แต่ยังมีบทบาทสำคัญในการป้องกันการถ่ายทอดเชื้อจากแม่สู่ลูก)</p>'+
 '<p>ควรตรวจ CBC ติดตามเป็นระยะในผู้ป่วยที่ได้รับยานี้ และพิจารณาเปลี่ยนยาหากเกิด severe anemia (Hb &lt; 7-8 g/dL) หรือ severe neutropenia</p>',
 ref:'11_HIV-ARV/Antiretroviral drugs.pdf'},

{ch:'ch10', src:'Block 2.2 ข้อ 17', topic:'First-line ART regimen',
 stem:'สูตรยา HIV ที่ใช้รักษาผู้ที่เพิ่งได้รับการยืนยันว่าติดเชื้อและไม่มี underlying อื่นๆ ตาม Guideline ล่าสุด คือสูตรใด',
 choices:['Efavirenz + TDF + 3TC (สูตรเก่า)','TDF + 3TC/FTC + Dolutegravir (DTG)','AZT + 3TC + Nevirapine','Protease inhibitor เดี่ยว'],
 correctIdx:1, answer:'TDF (Tenofovir) + 3TC/FTC (Lamivudine/Emtricitabine) + Dolutegravir (DTG) — สูตร first-line ตาม Thailand National Guideline ปัจจุบัน',
 explain:'<p>แนวทางการรักษา HIV ปัจจุบัน (ทั้งของไทยและสากล WHO) แนะนำให้เริ่มการรักษาด้วยยาต้านไวรัสทันทีที่วินิจฉัย (Treat all/Test and treat) โดย<b>สูตรมาตรฐาน first-line ในผู้ใหญ่ที่ไม่มีข้อห้ามพิเศษ</b> ประกอบด้วยยา 3 ตัวจาก 2 กลุ่ม:</p><ul>'+
 '<li><b>NRTI backbone 2 ตัว:</b> Tenofovir disoproxil fumarate (TDF) + Lamivudine (3TC) หรือ Emtricitabine (FTC)</li>'+
 '<li><b>Integrase Strand Transfer Inhibitor (INSTI) 1 ตัว:</b> <b>Dolutegravir (DTG)</b> ซึ่งมีประสิทธิภาพสูง ทนต่อการดื้อยาได้ดี ผลข้างเคียงน้อย และกินเพียงวันละครั้ง จึงเป็นตัวเลือกหลักในปัจจุบัน (แทนที่สูตรเดิมที่ใช้ Efavirenz ซึ่งเป็น NNRTI)</li></ul>'+
 '<p>ควรระวังในหญิงวัยเจริญพันธุ์ที่อาจตั้งครรภ์ (DTG เคยมีความกังวลเรื่อง neural tube defect ในไตรมาสแรก แต่ข้อมูลปัจจุบันแนะนำให้ใช้ได้ภายใต้การให้คำปรึกษาเรื่องการคุมกำเนิด)</p>',
 ref:'11_HIV-ARV/Antiretroviral drugs.pdf'},

{ch:'ch10', src:'Block 2.2 ข้อ 18', topic:'NNRTI mechanism',
 stem:'Nevirapine มีกลไกการออกฤทธิ์ (function) อย่างไร',
 choices:['จับที่ active site ของเอนไซม์โดยตรงเหมือน NRTI','Binds directly to an allosteric site ของเอนไซม์ (NNRTI)','ยับยั้ง Protease enzyme','ยับยั้ง Integrase enzyme'],
 correctIdx:1, answer:'Non-Nucleoside Reverse Transcriptase Inhibitor (NNRTI) — จับที่ allosteric site ของเอนไซม์ Reverse Transcriptase โดยตรง',
 explain:'<p><b>Nevirapine</b> จัดอยู่ในกลุ่มยา <b>Non-Nucleoside Reverse Transcriptase Inhibitor (NNRTI)</b> ออกฤทธิ์แตกต่างจากกลุ่ม NRTI (เช่น Zidovudine, Tenofovir): NNRTI จะ<b>จับกับตำแหน่ง allosteric site</b> (ตำแหน่งที่ไม่ใช่ active site) ของเอนไซม์ <b>Reverse Transcriptase โดยตรง</b> ทำให้เอนไซม์เปลี่ยนรูปร่างและไม่สามารถเปลี่ยน viral RNA เป็น DNA ได้ (block การทำงานโดยตรง ไม่ต้องอาศัยการเปลี่ยนรูปเป็น active metabolite ก่อนแบบ NRTI ซึ่งเป็น nucleoside analogue ที่ต้องถูก phosphorylate ก่อนจึงจะออกฤทธิ์แบบ chain terminator)</p>',
 ref:'11_HIV-ARV/Antiretroviral drugs.pdf'},

// ============ CHAPTER 11: Systemic Infection & Malaria ============
{ch:'ch11', src:'Block 2.2 ข้อ 1', topic:'Enteric fever (Typhoid)',
 stem:'ไข้สูงลอย 8 วัน มี relative bradycardia, erythematous maculopapular rash, มีก้อนที่ท้อง (hepatosplenomegaly) ต้องส่งตรวจอะไร',
 choices:['Thick film','Leptospira IgM','Dengue NS1','Blood culture'],
 correctIdx:3, answer:'Blood culture (Hemoculture)',
 explain:'<p>Constellation ของอาการ <b>ไข้สูงลอยนาน (prolonged fever, มักมากกว่า 7 วัน), Relative bradycardia (ชีพจรช้ากว่าที่ควรเทียบกับระดับไข้ — เรียกว่า "Faget sign"), Rose spots (erythematous maculopapular rash บนลำตัว), และ Hepatosplenomegaly</b> เป็นลักษณะคลาสสิกของ <b>Enteric Fever (Typhoid fever)</b> จากเชื้อ <i>Salmonella Typhi/Paratyphi</i></p>'+
 '<p>การตรวจยืนยันมาตรฐาน (Gold standard) คือ <b>Blood culture</b> ซึ่งควรเจาะช่วงมีไข้ (bacteremia phase) ให้ผลบวกได้สูงในสัปดาห์แรกของโรค — Thick film ใช้หามาลาเรีย, Leptospira IgM ใช้เมื่อสงสัย leptospirosis (มักมี conjunctival suffusion, myalgia รุนแรง), Dengue NS1 ใช้เมื่อสงสัยไข้เลือดออก (มักมี thrombocytopenia, tourniquet test positive) ซึ่งไม่ตรงกับลักษณะในโจทย์นี้</p>',
 ref:'12_Systemic-Infection-Malaria/APPROACH TO SYSTEMIC INFECTION 1.pdf'},

{ch:'ch11', src:'Block 2.2 ข้อ 3', topic:'Leptospirosis',
 stem:'ชาวไร่อายุ 35 ปี ไข้ หนาวสั่น ปวดน่องทั้งสองข้างรุนแรง (severe bilateral calf pain), ปวดหัว ทำงานในน้ำท่วม ตรวจพบ Suffusion conjunctiva ถามว่า complication ของโรคนี้คืออะไร',
 choices:['Weil\'s disease (AKI + Jaundice + Pulmonary hemorrhage)','Disseminated Intravascular Coagulation (DIC) เท่านั้น','Guillain-Barré Syndrome','Toxic megacolon'],
 correctIdx:0, answer:'Leptospirosis — complication ที่สำคัญคือ Weil\'s disease (Acute kidney injury + Jaundice/liver failure + Pulmonary hemorrhage)',
 explain:'<p>ประวัติสัมผัสน้ำท่วม/พื้นที่ชื้นแฉะ (ปัจจัยเสี่ยงคลาสสิกของ Leptospirosis) ร่วมกับ <b>Severe myalgia โดยเฉพาะที่น่อง (calf pain) และ Conjunctival suffusion (ตาแดงโดยไม่มีขี้ตา ไม่เจ็บ)</b> เป็นลักษณะเฉพาะที่จำเพาะมากสำหรับ <b>Leptospirosis</b></p>'+
 '<p>ภาวะแทรกซ้อนรุนแรงที่สำคัญที่สุดคือ <b>Weil\'s disease</b> ซึ่งประกอบด้วย 3 อย่าง: (1) <b>Acute Kidney Injury</b> จากการอักเสบของท่อไต (2) <b>Jaundice</b> จากตับอักเสบ (hepatocellular + cholestatic pattern) (3) <b>Pulmonary hemorrhage</b> ซึ่งเป็นสาเหตุการเสียชีวิตที่พบบ่อยที่สุด — นอกจากนี้ยังอาจพบ myocarditis, aseptic meningitis, uveitis ตามมาได้</p>',
 ref:'12_Systemic-Infection-Malaria/APPROACH TO SYSTEMIC INFECTION 1.pdf'},

{ch:'ch11', src:'Block 2.2 ข้อ 6', topic:'Melioidosis',
 stem:'ชาวนา (rice farmer) เป็นไข้ ตรวจพบเชื้อ gram-negative bacilli ที่มีลักษณะ bipolar staining ถามชื่อเชื้อ',
 choices:['Leptospira interrogans','Burkholderia pseudomallei','Salmonella Typhi','Rickettsia typhi'],
 correctIdx:1, answer:'Burkholderia pseudomallei (สาเหตุของโรค Melioidosis)',
 explain:'<p><b>Burkholderia pseudomallei</b> เป็นเชื้อแบคทีเรีย gram-negative bacilli ที่พบในดินและน้ำโดยเฉพาะพื้นที่ทำนา/เกษตรกรรมในภาคตะวันออกเฉียงเหนือของไทย ติดต่อผ่านทางบาดแผลที่ผิวหนังสัมผัสดิน/น้ำที่ปนเปื้อน หรือการสูดดม</p>'+
 '<p>ลักษณะเฉพาะทางห้องปฏิบัติการ: ย้อม gram stain พบเป็น <b>gram-negative bacilli ที่มีลักษณะติดสีเข้มที่ปลายทั้งสองข้าง (bipolar staining) คล้าย "safety pin appearance"</b> ก่อโรค <b>Melioidosis</b> ซึ่งมีอาการหลากหลายมาก (great mimicker) ตั้งแต่ pneumonia, skin/soft tissue abscess, ไปจนถึง disseminated sepsis with multiple organ abscess (โดยเฉพาะที่ตับ ม้าม) มีอัตราตายสูงหากรักษาไม่ทัน ต้องรักษาด้วยยาปฏิชีวนะระยะยาว (intensive phase ด้วย Ceftazidime/Meropenem ตามด้วย eradication phase ด้วย TMP-SMX นานหลายเดือน)</p>',
 ref:'12_Systemic-Infection-Malaria/Case Melioidosis.pdf'},

{ch:'ch11', src:'Block 2.2 ข้อ 8', topic:'PCP Pneumonia',
 stem:'ผู้ป่วยมี Fever, Dry cough, Bilateral infiltration ทั้งสองปอด — น่าจะเป็นโรคอะไร',
 choices:['Bacterial pneumonia (Typical)','PCP (Pneumocystis jirovecii Pneumonia)','Pulmonary tuberculosis','Pulmonary edema'],
 correctIdx:1, answer:'PCP (Pneumocystis Pneumonia)',
 explain:'<p><b>PCP (Pneumocystis jirovecii Pneumonia)</b> เป็น Opportunistic infection ที่พบบ่อยที่สุดในผู้ป่วย HIV ที่มี CD4 count ต่ำมาก (โดยเฉพาะ &lt;200 cells/µL) ลักษณะเฉพาะคือ <b>ไข้ + ไอแห้ง (dry cough, ไม่มีเสมหะ) + หายใจลำบากแบบค่อยเป็นค่อยไป (progressive dyspnea) + Chest X-ray พบ bilateral diffuse/interstitial infiltration</b> (ลักษณะคล้ายกระจกฝ้า ground-glass opacity) โดยที่ตรวจร่างกายปอดมักฟังไม่พบเสียงผิดปกติชัดเจน (clear auscultation ทั้งที่ X-ray ผิดปกติมาก — เป็นจุดสังเกตสำคัญ)</p>'+
 '<p>การวินิจฉัยยืนยันด้วยการย้อมพิเศษหรือ PCR หา Pneumocystis จาก sputum induction หรือ bronchoalveolar lavage รักษาหลักด้วย TMP-SMX ขนาดสูง</p>',
 ref:'11_HIV-ARV/HIV and opportunistics infection.pdf'},

{ch:'ch11', src:'Block 2.2 ข้อ 9', topic:'HIV-associated Tuberculosis',
 stem:'ผู้ป่วยมี B-symptom (ไข้ เหงื่อออกกลางคืน น้ำหนักลด) และมีฝีที่ปอดกลีบขวาบน (RU lobe, สงสัยติด TB) ควรส่งตรวจอะไร',
 choices:['Tuberculin skin test เพียงอย่างเดียว','Sputum AFB smear + GeneXpert MTB/RIF','Blood culture เพียงอย่างเดียว','Serum galactomannan'],
 correctIdx:1, answer:'Sputum AFB smear + Sputum GeneXpert MTB/RIF (หรือ AFB culture) เป็นการตรวจยืนยันมาตรฐาน',
 explain:'<p>อาการ B-symptom (ไข้เรื้อรัง, เหงื่อออกตอนกลางคืน, น้ำหนักลด) ร่วมกับรอยโรคที่ปอดกลีบบน (upper lobe) ซึ่งเป็นตำแหน่งที่พบบ่อยที่สุดของ <b>Pulmonary Tuberculosis</b> (เพราะมีปริมาณออกซิเจนสูง เหมาะกับเชื้อ Mycobacterium tuberculosis ที่เป็น obligate aerobe)</p>'+
 '<p>การตรวจยืนยันมาตรฐานปัจจุบันคือ <b>Sputum AFB (Acid-Fast Bacilli) smear</b> ร่วมกับ <b>GeneXpert MTB/RIF</b> (PCR-based, ให้ผลเร็วภายในไม่กี่ชั่วโมง และบอกการดื้อยา Rifampicin ได้ด้วย) และ/หรือ AFB culture (gold standard แต่ใช้เวลานาน 2-8 สัปดาห์) — Tuberculin skin test (TST) มีประโยชน์ในการคัดกรอง latent TB มากกว่าการวินิจฉัย active TB ในผู้ป่วยที่มีอาการและรอยโรคชัดเจนแบบนี้ และในผู้ป่วย HIV อาจให้ผลลบปลอมได้บ่อยจากภูมิคุ้มกันต่ำ</p>',
 note:'คำตอบที่นิสิตจำมาคือ "Tuberculin skin test" ซึ่งมีประโยชน์จำกัดกว่าการส่ง sputum AFB/GeneXpert ในผู้ป่วยที่มีรอยโรคและอาการเข้าได้กับ active TB ชัดเจนแบบนี้ ควรทบทวนกับอาจารย์ผู้สอนเพิ่มเติม',
 ref:'11_HIV-ARV/HIV and opportunistics infection.pdf'},

{ch:'ch11', src:'Block 2.2 ข้อ 14', topic:'Malaria treatment',
 stem:'First line treatment ของ Malaria falciparum ที่ประกอบด้วยยา 3 ตัว คือสูตรใด',
 choices:['Chloroquine เดี่ยว 3 วัน','Dihydroartemisinin-Piperaquine + Primaquine (ACT)','Quinine เดี่ยว 7 วัน','Doxycycline เดี่ยว 7 วัน'],
 correctIdx:1, answer:'Artemisinin-based Combination Therapy (ACT) เช่น Dihydroartemisinin-Piperaquine หรือ Artesunate-Mefloquine ร่วมกับ Primaquine (single dose เพื่อกำจัด gametocyte)',
 explain:'<p>แนวทางการรักษา Uncomplicated Falciparum Malaria ในประเทศไทยใช้ <b>Artemisinin-based Combination Therapy (ACT)</b> เป็นหลัก โดยสูตรที่มี 3 ตัวยาที่มักออกสอบคือ:</p><ul>'+
 '<li><b>Dihydroartemisinin-Piperaquine (DHA-PPQ)</b> — เป็นยาเม็ดรวม (fixed-dose combination) นับเป็น "2 ตัวยาในเม็ดเดียว"</li>'+
 '<li>ร่วมกับ <b>Primaquine ขนาดต่ำครั้งเดียว (single dose)</b> เพื่อกำจัด gametocyte ในเลือด ลดการแพร่เชื้อต่อไปยังยุง (ไม่ใช่เพื่อรักษาตัวโรคหลัก)</li></ul>'+
 '<p>รวมเป็น 3 ตัวยา: Dihydroartemisinin + Piperaquine + Primaquine — ห้ามใช้ Primaquine ในผู้ที่มีภาวะ G6PD deficiency เพราะจะกระตุ้นให้เกิด hemolysis รุนแรง ต้องตรวจ G6PD ก่อนให้ยาเสมอ</p>',
 ref:'12_Systemic-Infection-Malaria/Review of antimalarial drugs 1-69.pdf'},

{ch:'ch11', src:'Block 2.2 ข้อ 15', topic:'Artesunate monotherapy risk',
 stem:'ผู้ป่วยหญิงเป็น Severe falciparum malaria แพทย์ให้ยา Artesunate แล้วดีขึ้น ถามว่าทำไมจึงไม่ควรให้ Artesunate เดี่ยวๆ (monotherapy)',
 choices:['ครึ่งชีวิตยาว ออกฤทธิ์ต่อเนื่องได้นานพอ ไม่ต้องใช้ร่วมกับยาอื่น','ครึ่งชีวิตสั้นมาก เสี่ยงเชื้อดื้อยา/กลับเป็นซ้ำหากใช้เดี่ยว','ออกฤทธิ์เฉพาะต่อ liver stage เท่านั้น','ไม่สามารถฆ่าเชื้อในกระแสเลือดได้เลย'],
 correctIdx:1, answer:'Artemisinin derivative มีครึ่งชีวิตสั้นมาก (ประมาณ 1 ชั่วโมง) การให้ monotherapy เพิ่มความเสี่ยงเชื้อดื้อยา (resistance) และเชื้อกลับเป็นซ้ำ (recrudescence) จึงต้องให้ร่วมกับยาคู่หูที่ออกฤทธิ์นานกว่าเสมอ',
 explain:'<p>ยากลุ่ม <b>Artemisinin (เช่น Artesunate)</b> มีข้อดีคือออกฤทธิ์ฆ่าเชื้อมาลาเรียได้เร็วมาก (rapid parasite clearance) แต่มีจุดอ่อนสำคัญคือ <b>ครึ่งชีวิต (half-life) สั้นมาก เพียงประมาณ 1 ชั่วโมง</b> ทำให้ยาถูกกำจัดออกจากร่างกายเร็ว หากให้เป็นยาเดี่ยว (monotherapy) เชื้อมาลาเรียบางส่วนที่หลงเหลืออยู่ (แม้จำนวนน้อย) อาจไม่ถูกกำจัดหมดและเพิ่มจำนวนกลับมาใหม่ (recrudescence) และที่สำคัญคือ<b>เพิ่มความเสี่ยงในการคัดเลือกเชื้อที่ดื้อยา (selection of resistant strain)</b> ซึ่งเป็นปัญหาใหญ่ระดับโลกที่พบแล้วในภูมิภาคลุ่มแม่น้ำโขง</p>'+
 '<p>ด้วยเหตุนี้ องค์การอนามัยโลก (WHO) จึงกำหนดให้ใช้ Artemisinin <b>ร่วมกับยาคู่หูที่ออกฤทธิ์นานกว่าเสมอ (Artemisinin-based Combination Therapy, ACT)</b> เช่น Piperaquine, Mefloquine เพื่อให้ยาคู่หูช่วยกำจัดเชื้อที่เหลือรอดหลัง Artemisinin ถูกขับออกจากร่างกายไปแล้ว ป้องกันทั้งการดื้อยาและการกลับเป็นซ้ำ</p>',
 ref:'12_Systemic-Infection-Malaria/Review of antimalarial drugs 1-69.pdf'},

];

// ============================================================
// รายการข้อที่ "ว่างเปล่า" ในไฟล์ recall ต้นฉบับ (ไม่มีนิสิตคนใดจำโจทย์/คำตอบได้)
// ใส่ไว้เพื่อความโปร่งใส ยืนยันว่าไม่ได้มีการตัดข้อที่มีเนื้อหาออกไปโดยไม่แจ้ง
// ============================================================
const SKIPPED_BLOCK_2_1 = [1,2,10,16,21,23,24,26,29,33,34,36,38,47,49,50,53,54,55,56,57,61,66,68];
const SKIPPED_BLOCK_2_2 = [2,4,5,10,11,12,13,19,21,24,27,29,30,31,33,34,35,42,46,50,51,54,56,60,61,63,70,72,73,74,75,77,78,79,80,81,82,83];
