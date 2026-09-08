// ---------- quiz state ----------
var STATE_KEY = 'hemato_id_quiz_state_v1';
var state = {}; // { qid: {selected: idx, checked: bool} }
try {
  var saved = localStorage.getItem(STATE_KEY);
  if (saved) state = JSON.parse(saved);
} catch(e) { state = {}; }

function saveState(){
  try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch(e){}
}

// ---------- render ----------
(function(){
  var chaptersEl = document.getElementById('chapters');
  var sideNav = document.getElementById('sideNav');
  var totalCount = document.getElementById('totalCount');
  var scoreBar = document.getElementById('scoreBar');

  var navHtml = '';
  CHAPTERS.forEach(function(ch){
    var qs = QUESTIONS.filter(function(q){return q.ch===ch.id;});
    navHtml += '<a href="#'+ch.id+'"><span>'+ch.title+'</span><span class="count">'+qs.length+'</span></a>';
  });
  navHtml += '<a href="#appendix" style="opacity:.7"><span>ภาคผนวก: ข้อที่ว่างในต้นฉบับ</span></a>';
  sideNav.innerHTML = navHtml;

  var total = QUESTIONS.length;
  totalCount.textContent = 'รวม ' + total + ' ข้อ';

  function escapeHtml(s){
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function qid(ch, idx){ return ch+'-'+idx; }

  function renderCard(q, idx){
    var id = qid(q.ch, idx);
    var st = state[id] || {selected: null, checked: false};
    var html = '<div class="card" id="card-'+id+'" data-search="'+escapeHtml((q.stem+' '+(q.choices||[]).join(' ')+' '+q.answer+' '+q.explain).toLowerCase())+'">';
    html += '<div class="meta"><span class="badge src">'+q.src+'</span><span class="badge topic">'+q.topic+'</span>';
    if(q.incomplete){ html += '<span class="badge flag-incomplete">ข้อมูลไม่ครบ</span>'; }
    html += '</div>';
    html += '<div class="stem">'+escapeHtml(q.stem)+'</div>';

    html += '<ul class="choices" id="choices-'+id+'">';
    (q.choices||[]).forEach(function(c, i){
      var cls = 'choice';
      if(st.selected===i) cls += ' selected';
      if(st.checked){
        if(i===q.correctIdx) cls += ' correct-reveal';
        else if(i===st.selected) cls += ' wrong-reveal';
        cls += ' locked';
      }
      html += '<li class="'+cls+'" data-idx="'+i+'" onclick="selectChoice(\''+id+'\','+i+')">'+
        '<span class="choice-letter">'+String.fromCharCode(65+i)+'</span>'+
        '<span class="choice-text">'+escapeHtml(c)+'</span></li>';
    });
    html += '</ul>';

    html += '<div class="actions">';
    html += '<button class="toggle-btn check-btn" id="check-'+id+'" onclick="checkAnswer(\''+id+'\')" '+((st.selected===null||st.checked)?'disabled':'')+'>ตรวจคำตอบ</button>';
    html += '<button class="link-btn" onclick="revealOnly(\''+id+'\')">ข้ามข้อนี้ ดูเฉลยเลย</button>';
    html += '</div>';

    html += '<div class="answer'+(st.checked?' open':'')+'" id="ans-'+id+'">';
    html += '<div class="ans-line">✅ เฉลย: '+escapeHtml(q.answer)+'</div>';
    html += '<div class="explain">'+q.explain+'</div>';
    if(q.note){ html += '<div class="note-box">⚠️ '+q.note+'</div>'; }
    html += '<div class="ref">📖 อ่านเพิ่มเติม: <code>'+q.ref+'</code></div>';
    html += '</div>';

    html += '</div>';
    return html;
  }

  function renderAll(){
    var html = '';
    CHAPTERS.forEach(function(ch){
      var qs = QUESTIONS.filter(function(q){return q.ch===ch.id;});
      if(qs.length===0) return;
      html += '<section class="chapter" id="'+ch.id+'">';
      html += '<h2>'+ch.title+'</h2>';
      html += '<div class="chsub">'+qs.length+' ข้อ · เอกสารอ้างอิงเพิ่มเติมอยู่ในโฟลเดอร์ <code>'+ch.folder+'</code></div>';
      if(ch.diagram){ html += ch.diagram; }
      qs.forEach(function(q, idx){ html += renderCard(q, idx); });
      html += '</section>';
    });
    html += renderAppendix();
    chaptersEl.innerHTML = html;
    updateScoreBar();
  }
  function renderAppendix(){
    if(typeof SKIPPED_BLOCK_2_1==='undefined' || typeof SKIPPED_BLOCK_2_2==='undefined') return '';
    var n21 = 70, n22 = 85;
    var used21 = n21 - SKIPPED_BLOCK_2_1.length;
    var used22 = n22 - SKIPPED_BLOCK_2_2.length;
    var html = '<section class="chapter" id="appendix">';
    html += '<h2>ภาคผนวก: ความครอบคลุมของข้อสอบต้นฉบับ</h2>';
    html += '<div class="intro" style="margin-top:0">';
    html += '<p>ไฟล์ recall ต้นฉบับเป็นตารางที่ให้นิสิตหลายคนช่วยกันกรอกความจำหลังสอบ ทำให้<b>มีข้อว่างจำนวนมาก</b> (ไม่ใช่ทุกคนจำได้ทุกข้อ) หน้านี้รวมเฉพาะข้อที่มีเนื้อหาพอวิเคราะห์ได้เท่านั้น รายการด้านล่างคือเลขข้อที่ <b>"ว่างเปล่าในไฟล์ต้นฉบับ"</b> (ไม่มีโจทย์/คำตอบเขียนไว้เลย) แสดงไว้เพื่อความโปร่งใสว่าไม่มีการตัดข้อที่มีเนื้อหาออกไปโดยไม่แจ้ง</p>';
    html += '<p><b>Block 2.1:</b> มีเนื้อหาให้ทำ '+used21+' จากทั้งหมด '+n21+' ข้อ (ข้อ 11 และ 12 เป็นโจทย์เรื่องเดียวกันจึงรวมเป็นการ์ดเดียว) — ข้อที่ว่างเปล่า: <code>'+SKIPPED_BLOCK_2_1.join(', ')+'</code></p>';
    html += '<p><b>Block 2.2:</b> มีเนื้อหาให้ทำ '+used22+' จากทั้งหมด '+n22+' ข้อ — ข้อที่ว่างเปล่า: <code>'+SKIPPED_BLOCK_2_2.join(', ')+'</code></p>';
    html += '<p style="margin-bottom:0">หากใครจำโจทย์ข้อที่ขาดหายไปเหล่านี้ได้ สามารถเพิ่มเข้าไปในไฟล์ <code>data.js</code> ได้เลย (ดูรูปแบบจากข้ออื่นในไฟล์เดียวกัน)</p>';
    html += '</div></section>';
    return html;
  }

  renderAll();

  function updateScoreBar(){
    var answered = 0, correct = 0;
    QUESTIONS.forEach(function(q, gi){});
    CHAPTERS.forEach(function(ch){
      var qs = QUESTIONS.filter(function(q){return q.ch===ch.id;});
      qs.forEach(function(q, idx){
        var id = qid(q.ch, idx);
        var st = state[id];
        if(st && st.checked){
          answered++;
          if(st.selected===q.correctIdx) correct++;
        }
      });
    });
    var pct = answered ? Math.round(correct/answered*100) : 0;
    scoreBar.innerHTML = 'ทำไปแล้ว <b>'+answered+'</b>/'+total+' ข้อ · ตอบถูก <b>'+correct+'</b> ข้อ ('+pct+'%)';
  }

  window.selectChoice = function(id, i){
    var st = state[id] || {selected:null, checked:false};
    if(st.checked) return; // locked after checking
    st.selected = i;
    state[id] = st;
    saveState();
    // update DOM without full re-render
    var ul = document.getElementById('choices-'+id);
    if(ul){
      Array.prototype.forEach.call(ul.children, function(li){
        li.classList.toggle('selected', parseInt(li.getAttribute('data-idx'),10)===i);
      });
    }
    var btn = document.getElementById('check-'+id);
    if(btn) btn.disabled = false;
  };

  window.checkAnswer = function(id){
    var st = state[id];
    if(!st || st.selected===null || st.checked) return;
    st.checked = true;
    state[id] = st;
    saveState();
    renderAll();
    var card = document.getElementById('card-'+id);
    if(card){ card.scrollIntoView({behavior:'smooth', block:'nearest'}); }
  };

  window.revealOnly = function(id){
    var st = state[id] || {selected:null, checked:false};
    st.checked = true;
    state[id] = st;
    saveState();
    renderAll();
  };

  window.resetQuiz = function(){
    if(!confirm('ล้างคำตอบทั้งหมดและเริ่มทำใหม่ทั้งชุด?')) return;
    state = {};
    saveState();
    renderAll();
  };

  // search
  document.getElementById('searchInput').addEventListener('input', function(e){
    var term = e.target.value.trim().toLowerCase();
    document.querySelectorAll('.card').forEach(function(card){
      var match = !term || card.getAttribute('data-search').indexOf(term) !== -1;
      card.style.display = match ? '' : 'none';
    });
    document.querySelectorAll('.chapter').forEach(function(sec){
      var anyVisible = Array.prototype.some.call(sec.querySelectorAll('.card'), function(c){return c.style.display!=='none';});
      sec.style.display = (!term || anyVisible) ? '' : 'none';
    });
  });

  // scrollspy-ish active nav
  window.addEventListener('scroll', function(){
    var links = sideNav.querySelectorAll('a');
    var pos = window.scrollY + 100;
    var current = '';
    document.querySelectorAll('.chapter').forEach(function(sec){
      if(sec.offsetTop <= pos) current = sec.id;
    });
    links.forEach(function(a){
      a.classList.toggle('active', a.getAttribute('href')==='#'+current);
    });
  });
})();
