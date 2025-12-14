# Admin Panel Documentation

## Overview
A complete admin panel system for managing GSS Clubs with neo-brutalism design matching the main website.

## Features
- 🔐 **Login Page** - Secure admin authentication
- 📊 **Dashboard** - Overview with statistics and recent activity
- 🎨 **Consistent Styling** - Neo-brutalism design with bold borders and shadows
- 📱 **Responsive** - Mobile-friendly with collapsible sidebar
- 🧩 **Reusable Layout** - Easy-to-use wrapper component for all admin pages

## File Structure

```
app/
├── admin/
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── dashboard/
│   │   └── page.tsx          # Main dashboard
│   ├── clubs/
│   │   └── page.tsx          # Manage clubs
│   ├── events/
│   │   └── page.tsx          # Manage events
│   └── settings/
│       └── page.tsx          # Settings page

components/
└── admin/
    ├── admin-layout.tsx      # Layout wrapper component
    └── admin-sidebar.tsx     # Sidebar navigation component
```

## Usage

### Creating a New Admin Page

1. **Create a new page file** in `app/admin/[your-page]/page.tsx`

2. **Import the AdminLayout component**:
```tsx
import { AdminLayout } from "@/components/admin/admin-layout"
```

3. **Wrap your content** with AdminLayout:
```tsx
export default function YourAdminPage() {
  return (
    <AdminLayout
      title="Your Page Title"
      description="Optional description of the page"
    >
      {/* Your page content here */}
    </AdminLayout>
  )
}
```

### Example: Basic Admin Page

```tsx
"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function MyAdminPage() {
  return (
    <AdminLayout
      title="My Custom Page"
      description="This is a custom admin page"
    >
      <motion.div
        className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="font-ranade font-black text-2xl text-neo-yellow mb-4">
          Content Section
        </h2>
        <p className="font-ranade text-white mb-4">
          Your content here...
        </p>
        <Button className="rounded-none bg-neo-teal text-black border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase">
          Action Button
        </Button>
      </motion.div>
    </AdminLayout>
  )
}
```

## Adding Navigation Items

To add a new page to the sidebar navigation:

1. Open `components/admin/admin-sidebar.tsx`
2. Add your route to the `navItems` array:

```tsx
const navItems: NavItem[] = [
  // ... existing items
  { name: "Your Page", href: "/admin/your-page", icon: YourIcon },
]
```

## Styling Guidelines

### Color Classes
- **Primary Accent**: `bg-neo-teal` (cyan)
- **Secondary Accent**: `bg-neo-yellow` (yellow)
- **Success**: `bg-green-500`
- **Warning**: `bg-orange-500`
- **Danger**: `bg-red-500`
- **Purple**: `bg-purple-500`
- **Pink**: `bg-pink-500`

### Common Patterns

#### Card with Header
```tsx
<div className="bg-blue-950/30 backdrop-blur-sm border-4 border-black shadow-neo-lg">
  <div className="bg-neo-teal border-b-4 border-black p-6">
    <h2 className="font-ranade font-black text-2xl text-black uppercase">
      Card Title
    </h2>
  </div>
  <div className="p-6">
    {/* Card content */}
  </div>
</div>
```

#### Action Button
```tsx
<Button className="rounded-none bg-neo-teal hover:bg-neo-teal/90 text-black border-4 border-black shadow-neo hover:shadow-neo-hover font-ranade font-bold uppercase">
  Button Text
</Button>
```

#### Stat Card
```tsx
<div className="bg-neo-yellow border-4 border-black shadow-neo p-6">
  <h3 className="font-ranade font-bold text-sm text-black/70 uppercase">
    Label
  </h3>
  <p className="font-ranade font-black text-4xl text-black">
    Value
  </p>
</div>
```

## Routes

- `/admin/login` - Login page
- `/admin/dashboard` - Main dashboard
- `/admin/clubs` - Manage clubs
- `/admin/events` - Manage events
- `/admin/members` - Manage members
- `/admin/submissions` - View submissions
- `/admin/gallery` - Manage gallery
- `/admin/settings` - System settings

## Authentication

Currently, the login page has a simulated authentication. To implement real authentication:

1. Update `app/admin/login/page.tsx` with your authentication logic
2. Add middleware to protect admin routes
3. Store session/token in localStorage or cookies
4. Add logout functionality in the sidebar

## Customization

### Change Sidebar Width
In `components/admin/admin-sidebar.tsx`, modify:
```tsx
<aside className="... w-72 ...">  {/* Change w-72 to your desired width */}
```

And update the main content margin in `components/admin/admin-layout.tsx`:
```tsx
<main className="lg:ml-72 ...">  {/* Match the sidebar width */}
```

### Add User Profile
Add user information to the sidebar header in `admin-sidebar.tsx`:
```tsx
<div className="bg-neo-yellow border-b-4 border-black p-6">
  <p className="font-ranade font-bold text-black">
    Welcome, Admin Name
  </p>
</div>
```

## Tips

1. **Use motion.div** for animations to maintain consistency
2. **Always use uppercase** for headings and buttons (className includes `uppercase`)
3. **Use border-4** and `shadow-neo` classes for the brutalism style
4. **Maintain 4-unit spacing** between elements (gap-4, p-6, etc.)
5. **Test on mobile** - sidebar collapses on small screens

## Next Steps

- Implement real authentication
- Add form validation
- Connect to backend API
- Add loading states
- Implement error handling
- Add toast notifications for actions
