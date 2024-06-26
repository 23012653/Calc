# Ex.08 Design of a Standard Calculator
## Date:24.04.2024

## AIM:
To design a web application for a standard calculator with minimum five operations.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for creating attractive colors.

### Step 4:
Write JavaScript program for implementing five different operations.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Standard Calculator</title>
  <style>
    /* Basic styling for the calculator */
    body {
      font-family: Arial, sans-serif;
      background-color: #d4d4d2;
    }
    .calculator {
      width: 300px;
      margin: 2000px auto;
      background-color: #5f6368;
      border-radius: 25px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      padding: 20px;
      
    }
    input[type="text"] {
      width: calc(100% - 10px);
      margin-bottom: 10px;
      padding: 10px;
      font-size: 30px;
    }
    input[type="button"] {
      width: 60px;
      height: 50px;
      margin: 5px;
      font-size: 18px;
    }
    .card-title{
        text-align: center;
        margin-bottom: 100px auto;
        position: absolute;
        margin-left: 400px;
        margin-top: -100px;
    }
    
    
  </style>
</head>
<body>
    <div class="calc">
        <h1 class="card-title">ANUBHARATHI SS(212223040017)</h1>
    </div>

<div class="calculator">
  <input type="text" id="display" disabled><br>
  <input type="button" value="AC" onclick="clearResult()">
  <input type="button" value="DEL" onclick="deleteResult()">
  <input type="button" value="%" onclick="appendToDisplay('%')">
  <input type="button" value="/" onclick="appendToDisplay('/')"><br>
  <input type="button" value="7" onclick="appendToDisplay('7')">
  <input type="button" value="8" onclick="appendToDisplay('8')">
  <input type="button" value="9" onclick="appendToDisplay('9')">
  <input type="button" value="*" onclick="appendToDisplay('*')"><br>
  <input type="button" value="4" onclick="appendToDisplay('4')">
  <input type="button" value="5" onclick="appendToDisplay('5')">
  <input type="button" value="6" onclick="appendToDisplay('6')">
  <input type="button" value="-" onclick="appendToDisplay('-')"><br>
  <input type="button" value="1" onclick="appendToDisplay('1')">
  <input type="button" value="2" onclick="appendToDisplay('2')">
  <input type="button" value="3" onclick="appendToDisplay('3')">
  <input type="button" value="+" onclick="appendToDisplay('+')"><br>
  <input type="button" value="00" onclick="appendToDisplay('00')">
  <input type="button" value="0" onclick="appendToDisplay('0')">
  <input type="button" value="." onclick="appendToDisplay('.')">
  <input type="button" value="=" onclick="calculate()">
  
  
</div>

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

</body>
</html>
 

```

## OUTPUT:
![alt text](<CALCULATOR 01.png>)
![alt text](<CALCULATOR 02.png>)
## RESULT:
The program for designing a standard calculator using HTML and CSS is executed successfully.
