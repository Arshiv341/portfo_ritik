(function createParticles(){
      const container = document.getElementById('particles-container');
      const n = 28;
      for(let i=0;i<n;i++){
        const d = document.createElement('div');
        d.className='particle';
        d.style.left = (Math.random()*95)+'%';
        d.style.top = (60 + Math.random()*40)+'%';
        d.style.opacity = (0.2 + Math.random()*0.9);
        d.style.width = (1 + Math.random()*3)+'px';
        d.style.height = d.style.width;
        d.style.animationDuration = (6 + Math.random()*6)+'s';
        container.appendChild(d);
      }
    })();

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const href = a.getAttribute('href');
        if(href.startsWith('#')) {
          e.preventDefault();
          const el = document.querySelector(href);
          if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
    // === Avatar Box Opposite Movement on Hover ===
const avatarBox = document.querySelector('.avatar-box');

if (avatarBox) {
  avatarBox.addEventListener('mousemove', (e) => {
    const rect = avatarBox.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor x inside box
    const y = e.clientY - rect.top;  // cursor y inside box

    // Move opposite side (negative multiplier)
    const moveX = ((x - rect.width / 2) / rect.width) * -25;  // adjust sensitivity
    const moveY = ((y - rect.height / 2) / rect.height) * -25;

    avatarBox.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  avatarBox.addEventListener('mouseleave', () => {
    avatarBox.classList.add('leave');
    avatarBox.style.transform = 'translate(0, 0)';
    setTimeout(() => avatarBox.classList.remove('leave'), 200);
  });
}


    // contact form: simple client-side feedback (real backend not included)
    function handleContact(e){
      e.preventDefault();
      const msg = document.getElementById('contact-msg');
      msg.style.display='block';
      msg.textContent = 'Transmission successful — I will reply within 48 hours. (This demo form is client-side only.)';
      setTimeout(()=>{ msg.style.display='none'; e.target.reset(); }, 4500);
    }
    // === Water Bubble Cursor Follower ===
const bubble = document.createElement("div");
bubble.classList.add("cursor-bubble");
document.body.appendChild(bubble);

let mouseX = 0, mouseY = 0;
let bubbleX = 0, bubbleY = 0;

// Track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth movement loop
function animateBubble() {
  bubbleX += (mouseX - bubbleX) * 0.15;  // smooth follow
  bubbleY += (mouseY - bubbleY) * 0.15;
  bubble.style.left = bubbleX + "px";
  bubble.style.top = bubbleY + "px";
  requestAnimationFrame(animateBubble);
}
animateBubble();
//form submit
// ✅ Include EmailJS SDK
emailjs.init("DlIUUIGhaUMC0lHyB");

// ✅ Handle form submit
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const msgBox = document.getElementById("form-msg");

  const params = {
    from_name: form.name.value,
    from_email: form.email.value,
    message: form.message.value,
  };

  // ✅ Use your single template
  emailjs.send("form", "template_45qdv14", params)
    .then(() => {
      msgBox.textContent = "✅ Message transmitted successfully! You'll get a confirmation soon.";
      msgBox.classList.remove("hidden");
      msgBox.style.color = "#00ffff";
      form.reset();

      // Optional: Hide message after a few seconds
      setTimeout(() => {
        msgBox.classList.add("hidden");
        msgBox.textContent = "";
      }, 4000);
    })
    .catch((error) => {
      msgBox.textContent = "❌ Transmission failed. Please try again.";
      msgBox.classList.remove("hidden");
      msgBox.style.color = "#ff4d4d";
      console.error(error);
    });
});
