document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    e.target.closest('.nav-btn').classList.add('active');
    document.getElementById('content-frame').src = e.target.closest('.nav-btn').dataset.page;
  });
});
