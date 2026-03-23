# Design System: The Ember & Ash Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Culinary Hearth"
This design system moves away from the sterile, transactional nature of standard food apps and toward a high-end, immersive editorial experience. It is designed to feel like a premium, wood-fired kitchen at midnight—atmospherically dark, tactile, and aromatic. We achieve this by breaking the rigid digital grid with intentional asymmetry, overlapping "smoke" textures, and a hierarchy that prioritizes the sensory appeal of food over the mechanics of an interface.

The experience is defined by **tonal depth**. By utilizing a deep black foundation (`surface-dim`) and layering it with realistic steam overlays and ember-like accents, we create a 3D environment where menu items don't just sit on a screen—they emerge from the heat of the grill.

---

## 2. Colors

The palette is rooted in the visceral colors of a live fire: charred wood, glowing coals, and rising heat.

### The Palette Roles
- **Foundation (`background`, `surface`):** `#0e0e0e`. A true deep black that allows photography and "smoke" overlays to pop with maximum contrast.
- **The Glow (`primary`, `primary-container`):** `#ffd16c` and `#fdc003`. These represent the core of the flame. Use these for pricing and high-priority titles to draw the eye immediately.
- **The Ember (`secondary`, `tertiary`):** `#ff743b` and `#ffac54`. Burnt oranges used for accents, category headers, and interactive states to mimic the heat of a grill.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited. They feel "app-like" and clinical. In this system, sections are defined by:
1.  **Background Shifts:** Moving from `surface` to `surface-container-low` to create a subtle change in "density."
2.  **Negative Space:** Using the Spacing Scale (specifically `8` and `12` increments) to create breathing room between courses.
3.  **Atmospheric Breaks:** Using smoke overlays to naturally "veil" one section and reveal the next.

### Signature Textures
Apply a subtle linear gradient to main headers transitioning from `primary` to `secondary`. This creates a "heat-map" effect that feels more sophisticated than a flat color fill.

---

## 3. Typography

The typography strategy is a juxtaposition between "The Maker" (distressed, human-made) and "The Detail" (clean, technical precision).

- **Display & Headlines (Epilogue):** This is our "Branded Wood" voice. Use bold weights for category titles (e.g., "HAMBURGUESAS"). The intentional weight of Epilogue mimics the impact of a physical stamp or a chalkboard header.
- **Body & Titles (Work Sans):** This provides the "Legible Sans" required for descriptions and prices. It remains clean and unobtrusive, ensuring that even in a dark, "smoky" environment, the price and ingredients are crystal clear.
- **The "Price Focus" Pattern:** Prices should always use `title-lg` in `primary-fixed` color. The contrast between the clean Work Sans price and the distressed Epilogue header creates a high-end, boutique menu feel.

---

## 4. Elevation & Depth

We do not use shadows to create "lift"; we use light to create "presence."

### The Layering Principle
Hierarchy is achieved by stacking surface tiers. A featured "Chef’s Special" should sit in a `surface-container-high` (`#20201f`) container against the `surface-dim` background. This creates a natural, soft "glow" around the content without the need for artificial drop shadows.

### Glassmorphism & Steam
For any floating elements (like a sticky "Back to Top" or a floating category toggle), use:
- **Color:** `surface-variant` at 40% opacity.
- **Backdrop-blur:** 12px to 16px.
- **Edge:** A "Ghost Border" using `outline-variant` at 15% opacity to catch the light, mimicking the edge of a clean glass pane in a smoky room.

---

## 5. Components

### Cards & Menu Items
Forbid the use of divider lines. Each menu item is a discrete unit of content.
- **Layout:** Use asymmetrical positioning. Place high-quality photography (circular or organic "smoke-edged" masks) partially overlapping the text area.
- **Spacing:** Use `spacing-4` (1.4rem) between the item name and description to ensure the "Editorial" feel.

### Chips (Category Selectors)
- **Resting:** `surface-container-highest` background with `on-surface-variant` text.
- **Active:** `primary-container` background with `on-primary-container` text. No borders.
- **Shape:** `rounded-lg` (0.5rem) to maintain a rugged but modern feel.

### Buttons (Action-Oriented)
Since we have no "Add to Cart" buttons, buttons are used for navigation (e.g., "View Drinks" or "Location").
- **Primary:** Background `primary-fixed`, text `on-primary-fixed`. 
- **States:** On hover/active, transition to a `secondary` gradient to simulate an ember flaring up when touched.

### Input Fields (Contact/Search)
- **Style:** Minimalist. Only a bottom-border (Ghost Border style: `outline-variant` at 20%).
- **Focus:** The bottom-border transitions to `primary` with a soft outer glow (`primary` at 10% opacity, 8px blur).

---

## 6. Do's and Don'ts

### Do:
- **Use "Smoke" as a Mask:** Use smoke/steam overlays to mask the bottom of food photography, making images feel like they are emerging from the grill.
- **Embrace Asymmetry:** Align prices to the right and titles to the left, but allow images to break the vertical container lines.
- **Prioritize the "Glow":** Use the `primary` yellow sparingly but powerfully—only for things the user must see (Price, Item Name).

### Don't:
- **Don't use 100% white text for everything:** Use `on-surface-variant` (`#adaaaa`) for descriptions to keep the visual hierarchy centered on the item titles and prices.
- **Don't use standard grids:** Avoid "3-column card layouts." Instead, try a staggered list where images and text alternate sides, creating a rhythmic, editorial flow.
- **Don't use sharp corners:** While we are "Rugged," we aren't "Industrial." Use `rounded-md` (0.375rem) as the default to keep the interface feeling premium and accessible.

### Accessibility Note
Ensure all `Work Sans` body text maintains a contrast ratio of at least 4.5:1 against the smoke-overlay backgrounds. If the smoke is too thick, increase the `surface-container` darkness to compensate.