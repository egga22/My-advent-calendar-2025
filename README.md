# My Advent Calendar 2025

A lightweight, static advent calendar web page for 2025. It renders a grid of 25 days, each with a festive prompt that unlocks based on the current date.

## Features
- Responsive grid of 25 day cards with a holiday-inspired gradient.
- Daily prompts that unlock automatically when the calendar date is reached (configurable in `script.js`).
- Simple modal overlay to display the day content and close it without reloading the page.

## Getting started
1. Install a simple HTTP server (any static file server works). For example, with Python:
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000` in your browser to view the calendar.

## Customization
- Edit the `entries` array in `script.js` to change the messages for each day.
- Adjust colors, gradients, and typography in `styles.css` to match your preferred holiday theme.

## License
This project is licensed under the MIT License. See `LICENSE` for details.
