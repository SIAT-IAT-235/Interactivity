# Simple Modal Tutorial

This project demonstrates how to create a basic modal (popup) window using HTML, CSS, and JavaScript.

## Project Structure

- `index.html` - Contains the HTML structure
- `styles.css` - Contains the modal styling
- `script.js` - Contains the modal functionality

## How It Works

### HTML Structure

The modal consists of:

1. A button to open the modal
2. A modal container with:
   - A close button (×)
   - A header
   - Content area

### CSS Features

- Modal is hidden by default (`display: none`)
- Covers the entire screen when opened
- Semi-transparent black background overlay
- Centered white content box
- Responsive design with max-width

### JavaScript Functionality

- Opens modal when the "Open Modal" button is clicked
- Closes modal when:
  - Clicking the × button
  - Clicking outside the modal content

## How to Use

1. Include all three files in your project
2. Open `index.html` in a web browser
3. Click the "Open Modal" button to test

## Customization

### Changing Content

Edit the content inside the `.modal-content` div in `index.html`:

```html
<div class="modal-content">
  <span class="close">&times;</span>
  <h2>Your Header</h2>
  <p>Your content here</p>
</div>
```

### Styling

Modify `styles.css` to change:

- Modal size (`max-width`)
- Colors (`background-color`)
- Position (`margin`)
- Animation (add transitions)

## Browser Compatibility

Works in all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge
