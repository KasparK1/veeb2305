fetch('http://localhost8000')
  .then(function() {
    // handle the response
    console.log('õnnestus!')
  })
  .catch(function() {
    // handle the error
    console.log('ei õnnestunud :/')
  });