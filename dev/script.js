function setup() {
    createCanvas(450, 800);
    background("white");
    let x = width / 2;
    let y = height;
    let angle = -PI / 2;
    let length = 100;
    branch(x, y, angle, length);
  }
  
  function branch(x, y, angle, length) {
    let x2 = x + cos(angle) * length;
    let y2 = y + sin(angle) * length;
    
    strokeWeight(length / 10);
    stroke(0);
    line(x, y, x2, y2);
    
    length *= random(0.5, 1); // Уменьшение длины ветви
    
    // Рисуем круг на конце ветви с вероятностью 0.9
    if (random() > 0.9) {
      fill(0);
      circle(x2, y2, 10);
    }
  
    // Условие выхода, если длина ветви меньше порога
    if (length < 10) return;
    if (random() < 0.1 && length < 50) return;
  
    let dAngle = random(-0.3, 0.3); // Отклонение угла для ветвей
    branch(x2, y2, angle + dAngle, length); // Рисуем следующую ветвь
    branch(x2, y2, angle - dAngle, length); // Рисуем другую ветвь
  }
  