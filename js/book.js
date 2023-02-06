function change() {
    let results = Array.from(document.querySelectorAll('.product-container > div'));
    // Hide all results
    results.forEach(function(result) {
      result.style.display = 'none';
    });
    // Filter results to only those that meet ALL requirements:
    Array.from(document.querySelectorAll('.filter__list input[id]:checked'), function(input) {
      const attrib = input.getAttribute('id');
      results = results.filter(function(result) {
        return result.classList.contains(attrib);
      });
    });
    // Show those filtered results:
    results.forEach(function(result) {
      result.style.display = 'block';
    });
  }
  
  change();