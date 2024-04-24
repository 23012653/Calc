<script>
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    const displayValue = document.getElementById('display').value;
    if (displayValue) {
      try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }
</script>