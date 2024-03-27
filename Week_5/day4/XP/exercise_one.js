
const art = document.querySelector('article')
const lastParagraph = art.lastElementChild
art.removeChild(lastParagraph)


  const h1 = document.querySelector('h1')
  console.log(h1)

  const h2 = document.querySelector('h2')
  h2.addEventListener('click', function() 
  {
      h2.style.backgroundColor = 'red'
  })

  const h3 = document.querySelector('h3')
  h3.addEventListener('click', function() 
  {
      h3.style.display = 'none'
  })


  const elementH1 = document.querySelector('h1')
  elementH1.addEventListener('mouseover', function() 
  {
      elementH1.style.fontSize = `${Math.floor(Math.random() * 100)}px`
  })

  const btn = document.createElement('button')
  btn.innerHTML = 'Make paragraphs bold'
  document.body.appendChild(btn)

  btn.addEventListener('click', function() 
  {
      const paragraphs = document.querySelectorAll('p')
      paragraphs.forEach(function(paragraph) {
          paragraph.style.fontWeight = 'bold'
      })
  })


  const secondParagraph = document.querySelectorAll('p')[1]
  secondParagraph.addEventListener('mouseover', function()
  {
      secondParagraph.classList.add('fade-out')
  })

