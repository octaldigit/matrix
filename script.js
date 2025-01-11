const canvas = document.getElementById('asciiCanvas');
const ctx = canvas.getContext('2d');

// 캔버스 크기 설정
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 텍스트 데이터 및 초기 설정
const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
const fontSize = 10;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  // 배경 흐림 효과
  ctx.fillStyle = "rgba(15, 15, 15, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 텍스트 스타일
  ctx.fillStyle = "#00ffcc";
  ctx.font = `${fontSize}px 'Courier New'`;

  // 텍스트 드로잉
  drops.forEach((y, x) => {
    const text = charset[Math.floor(Math.random() * charset.length)];
    ctx.fillText(text, x * fontSize, y * fontSize);

    // 드롭 위치 재설정
    if (y * fontSize > canvas.height && Math.random() > 0.98) {
      drops[x] = 0;
    }
    drops[x]++;
  });
}

// 애니메이션 루프
setInterval(draw, 50);

// 창 크기 변경 시 캔버스 크기 업데이트
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
