function p(q) {
  return document.querySelector(q);
}
p('.right .panel').style.padding =
p('.left .panel').style.padding = '6px';
p('.left .panel').style.width = '670px';
p('#content').style.width = '1022px';
r = document.querySelectorAll('.cboxElement');
for (s of r) {
  s.firstChild.src = s.href + 'm.jpg';
  s.firstChild.style.width =
  s.firstChild.style.height =
  s.parentNode.style.width =
  s.parentNode.style.height = 'auto';
}