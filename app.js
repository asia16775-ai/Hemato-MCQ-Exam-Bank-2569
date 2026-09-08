// ---------- render ----------
(function(){
  var chaptersEl = document.getElementById('chapters');
  var sideNav = document.getElementById('sideNav');
  var totalCount = document.getElementById('totalCount');

  var navHtml = '';
  CHAPTERS.forEach(function(ch){
    var qs = QUESTIONS.filter(function(q){return q.ch===ch.id;});
    navHtml += '<a href="#'+ch.id+'"><span>'+ch.title+'</span><span class="count">'+qs.length+'</span></a>';
  });
  sideNav.innerHTML = navHtml;

  var total = QUESTIONS.length;
  totalCount.textContent = 'รวม ' + total + ' ข้อ';

  var html = '';
  CHAPTERS.forEach(function(ch){
    var qs = QUESTIONS.filter(function(q){return q.ch===ch.id;});
    if(qs.length===0) return;
    html += '<section class="chapter" id="'+ch.id+'">';
    html += '<h2>'+ch.title+'</h2>';
    html += '<div class="chsub">'+qs.length+' ข้อ · เอกสารอ้างอิงเพิ่มเติมอยู่ในโฟลเดอร์ <code>'+ch.folder+'</code></div>';
    if(ch.diagram){ html += ch.diagram; }
    qs.forEach(function(q, idx){
      var qid = ch.id+'-'+idx;
      html += '<div class="card" data-search="'+escapeHtml((q.stem+' '+(q.choices||[]).join(' ')+' '+q.answer+' '+q.explain).toLowerCase())+'">';
      html += '<div class="meta"><span class="badge src">'+q.src+'</span><span class="badge topic">'+q.topic+'</span>';
      if(q.incomplete){ html += '<span class="badge flag-incomplete">ข้อมูลไม่ครบ</span>'; }
      html += '</div>';
      html += '<div class="stem">'+escapeHtml(q.stem)+'</div>';
      if(q.choices && q.choices.length){
        html += '<ul class="choices">';
        q.choices.forEach(function(c){
          var isCorrect = q.correctIdx!==undefined && c===q.choices[q.correctIdx];
          html += '<li'+(isCorrect?' class="correct"':'')+'>'+escapeHtml(c)+'</li>';
        });
        html += '</ul>';
      }
      html += '<button class="toggle-btn" onclick="toggleAns(\''+qid+'\')">แสดงเฉลยละเอียด</button>';
      html += '<div class="answer" id="ans-'+qid+'">';
      html += '<div class="ans-line">✅ เฉลย: '+escapeHtml(q.answer)+'</div>';
      html += '<div class="explain">'+q.explain+'</div>';
      if(q.note){ html += '<div class="note-box">⚠️ '+q.note+'</div>'; }
      html += '<div class="ref">📖 อ่านเพิ่มเติม: <code>'+q.ref+'</code></div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</section>';
  });
  chaptersEl.innerHTML = html;

  function escapeHtml(s){
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  window.toggleAns = function(qid){
    var el = document.getElementById('ans-'+qid);
    el.classList.toggle('open');
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
