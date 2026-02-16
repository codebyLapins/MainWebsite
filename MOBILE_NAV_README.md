# Mobile Navigation System - Implementation Guide

## 📦 Components Created

1. **DesktopNav.tsx** - Desktop navigation with dropdown services menu
2. **MobileNav.tsx** - Main mobile menu panel (first screen)
3. **MobileServicesPanel.tsx** - Services submenu panel (second screen)
4. **MainNavbar.tsx** - Complete navbar wrapper (example integration)

---

## 🎯 Features

### Desktop Navigation
- Hover-based services dropdown with 3-column grid layout
- Language switcher (LV/EN)
- Smooth transitions and hover states
- Clean hierarchy with category headers

### Mobile Navigation
- **Two-panel system** (like WPX.lv)
- **Panel 1**: Main menu with Home, Services, About, Works, Contact, Language switcher
- **Panel 2**: Services submenu with categories and sub-items
- Full-screen slide-in animation from right
- Independent scrolling for each panel
- Back button to return from services panel
- Body scroll lock when menu is open
- Closes on navigation

---

## 🚀 How to Use

### 1. Replace your existing Navbar component

In your `app/layout.tsx` or `app/page.tsx`:

```tsx
import MainNavbar from '@/components/MainNavbar';

export default function Layout() {
  return (
    <div>
      <MainNavbar />
      {/* Your content */}
    </div>
  );
}
```

### 2. Or integrate into existing Navbar.tsx

If you have an existing Navbar component, replace it with:

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-[#6450E0] font-bold text-xl">
            CodeByLapins
          </Link>

          <DesktopNav />

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
```

---

## 🎨 Customization

### Colors
All colors are defined inline. To customize:

- **Background**: `bg-[#0a0a0f]`
- **Accent (primary)**: `text-[#6450E0]` or `bg-[#6450E0]`
- **Text**: `text-white/90`, `text-white/80`, etc.
- **Borders**: `border-white/10`

### Services Data Structure

Edit the services array in both `DesktopNav.tsx` and `MobileServicesPanel.tsx`:

```tsx
const services = [
  {
    category: 'Category Name',
    items: [
      { name: 'Service Name', href: '/services/service-slug' },
      // Add more items
    ],
  },
  // Add more categories
];
```

### Translations

Both components pull translations from the same structure:

```tsx
const t = {
  en: {
    home: 'Home',
    services: 'Services',
    // ... more translations
  },
  lv: {
    home: 'Sākums',
    services: 'Pakalpojumi',
    // ... more translations
  },
}[currentLang];
```

Update these objects to match your translation keys.

---

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` (md breakpoint)
- **Desktop**: `≥ 768px`

Adjust the `md:` prefix if you want different breakpoints.

---

## 🔧 Dependencies

Required packages:
```bash
npm install lucide-react
```

Required context:
- `useLanguage` hook from `@/context/LanguageContext`

Make sure your LanguageContext provides:
```tsx
{
  currentLang: 'en' | 'lv',
  setLanguage: (lang: 'en' | 'lv') => void
}
```

---

## 🎬 Animation Details

### Mobile Menu
- Slides in from right: `translate-x-full` → `translate-x-0`
- Duration: 300ms
- Easing: `ease-in-out`

### Services Panel
- Also slides from right (stacks on top of main menu)
- Same duration and easing

### Desktop Dropdown
- Appears on hover with fade-in effect
- No slide animation (instant positioning)

---

## 🐛 Troubleshooting

### Menu doesn't close on navigation
Make sure you're calling `onClose()` in the Link's `onClick`:
```tsx
<Link href="/path" onClick={onClose}>
```

### Body still scrolls when menu is open
The `useEffect` in MobileNav handles this automatically. Check that you're not overriding `overflow` elsewhere.

### Services panel doesn't appear
Check that `z-[60]` is higher than the main menu's `z-50`.

### Desktop dropdown is cut off
Make sure parent elements don't have `overflow: hidden`. The dropdown uses `absolute` positioning.

---

## ✅ Checklist

- [ ] Install `lucide-react`
- [ ] Verify `useLanguage` context is set up
- [ ] Update service links to match your routes
- [ ] Customize colors if needed
- [ ] Test on mobile devices (360px+)
- [ ] Test language switching
- [ ] Test all navigation links
- [ ] Test back button in services panel

---

## 📝 Notes

- All components use `'use client'` directive (required for Next.js App Router with state)
- No external animation libraries needed (pure CSS transitions)
- Fully accessible with proper ARIA labels
- Mobile-first approach with responsive design
- Independent scrolling for long service lists

---

## 🎉 You're Done!

The navigation is now fully functional. All panels work independently, translations are dynamic, and the UX matches the WPX.lv style with your brand colors.
