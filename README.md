# Waffle Time landing page

Open `index.html` in a browser. No build step, no server needed.

## Files
- `index.html` page structure
- `style.css` colors, fonts, layout
- `script.js` **all editable content is in the `SITE` block at the top**
- `assets/` images (add food photos here)

## Replace placeholders (edit `SITE` in `script.js`)
| Item | Field | Now |
|---|---|---|
| Facebook link per branch | `branches[].facebook` | `null` (button shows "coming soon") |
| Branch address, hours, phone | `branches[].address / hours / phone` | `null` (shows "To be confirmed") |
| Footer contact | `contact` | `null` |
| Menu description, price, photo | `menu[]` | 11 confirmed item names; prices and photos pending |
| Hero photo | `heroImage` | `null` (waffle-grid graphic) |

Example: `facebook: "https://www.facebook.com/your-page"` turns the button on automatically.

## Publish (owner action, not done yet)
GitHub Pages: create a repository, upload these files, then Settings > Pages > deploy from the main branch.
