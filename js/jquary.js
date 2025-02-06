// preloader start
// setTimeout(() => {
//   document.querySelector(".loader").style.display = "none";
// }, 3000); // Adjust time as needed
// preloader end

// magic cursor start
// if ($(".mouse-cursor")) {
//   const e = document.querySelector(".cursor-inner"),
//       t = document.querySelector(".cursor-outer");
//   let n, i = 0,
//       o = !1;
//   window.onmousemove = function (s) {
//       o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
//   }, $("body").on("mouseenter", "a,.know_tm_topbar .trigger, .cursor-pointer", function () {
//       e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
//   }), $("body").on("mouseleave", "a,.know_tm_topbar .trigger, .cursor-pointer", function () {
//       $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
//   }), e.style.visibility = "visible", t.style.visibility = "visible"
// }
// magic cursor end

// banner part
  // ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = 'walking the path'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'web developer.',
    'web designer.',
    ' freelancer.',
    ' coder.',
    
  ]
  
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1000)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()
// wow js
new WOW().init();

$("Document").ready(function(){
    $('.counter').counterUp();
    });

   parallax($('.element'), 15,false)
