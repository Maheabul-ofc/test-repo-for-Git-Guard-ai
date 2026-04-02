// Button Animation with CSS and JavaScript

// HTML Structure (reference)
/*
<button class="animated-btn" id="myButton">Click Me</button>
*/

// Create button element
const button = document.createElement('button');
button.className = 'animated-btn';
button.textContent = 'Click Me';
button.id = 'myButton';
document.body.appendChild(button);

// CSS Styles (inject into document)
const style = document.createElement('style');
style.textContent = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        font-family: 'Arial', sans-serif;
    }

    .animated-btn {
        padding: 12px 40px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: 2px solid white;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .animated-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }

    .animated-btn:active {
        transform: translateY(-1px);
        animation: pulse 0.6s ease;
    }

    .animated-btn.clicked {
        animation: bounce 0.6s ease;
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
        }
        50% {
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
        }
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-10px);
        }
        50% {
            transform: translateY(0);
        }
        75% {
            transform: translateY(-5px);
        }
    }
`;
document.head.appendChild(style);

// Button click event listener
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 600);
});

// Mouse enter effect
myButton.addEventListener('mouseenter', function() {
    console.log('Button hovered');
});

// Mouse leave effect
myButton.addEventListener('mouseleave', function() {
    console.log('Button left');
});