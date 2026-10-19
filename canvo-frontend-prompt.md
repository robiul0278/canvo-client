# CANVO — Complete Premium Fashion E-Commerce Frontend

## Project Overview

Build a complete, production-quality frontend for CANVO, a premium fashion e-commerce brand.

Existing project structure:

- `canvo-client/` — Next.js frontend
- `canvo-server/` — Existing NestJS backend
- Backend database: MongoDB
- Backend API documentation: Swagger / OpenAPI
- Project audit: `audit-report.md` at the repository root

The existing frontend is currently an unmodified Next.js template. Build the complete frontend from the ground up while preserving the existing backend architecture and business logic.

**Important:** Inspect the actual source code, API documentation, and configuration before making changes. Do not assume that an endpoint works differently from its documented or implemented behavior.

## 1. Technical Stack

Use the existing Next.js 16, React 19, TypeScript, and Tailwind CSS v4 stack.

Install the latest stable, mutually compatible versions of all approved packages. Verify their current versions and peer dependencies before installation.

### Approved packages

- shadcn/ui — Radix-based components compatible with Tailwind CSS v4
- next/font — font loading
- next-themes — light and dark theme support
- react-hook-form — form management
- zod — schema validation
- @hookform/resolvers — form validation integration
- @reduxjs/toolkit — Redux store and RTK Query
- react-redux — Redux provider and hooks
- next-auth / Auth.js — Google authentication only
- lucide-react — icons
- vaul — mobile drawers and sheets
- sonner — toast notifications
- framer-motion — user-triggered animations and carousel
- recharts — dashboard charts
- class-variance-authority
- clsx
- tailwind-merge

Do not introduce additional UI, animation, carousel, or state-management libraries without approval.

Before installing:

1. Inspect `package.json` and the lockfile.
2. Verify latest stable releases through npm registry metadata.
3. Verify React 19, Next.js 16, and Tailwind CSS v4 compatibility.
4. Avoid beta, alpha, canary, and release-candidate versions.
5. Do not use `--force` or `--legacy-peer-deps` to hide dependency conflicts.
6. Preserve the existing framework versions unless a genuine incompatibility requires approval.

Report exact installed versions.

## 2. Design Direction — Playful Premium

CANVO should look like a distinctive, modern fashion brand rather than a generic e-commerce template.

### Color system

- `ink`: pure black
- `paper`: white
- Pastel product backdrops: sage, lilac, peach, pink, butter, and mustard
- Product photography supplies the main visual color.
- Avoid gradients on interface chrome.
- Avoid drop shadows.

Define colors, borders, and radii in reusable Tailwind v4 `@theme` tokens. Do not hardcode hex colors throughout components.

### Shapes

- Cards and tiles: 2px black outline and 8–10px radius
- Buttons: 2px outline and approximately 6px radius
- Icon buttons: fully rounded with visible black outlines
- Consistent border and radius tokens across shadcn components

### Typography

- Heavy, rounded display font for CANVO branding
- Clean condensed sans-serif for headings, prices, navigation, and UI
- Uppercase section headings, product names, navigation, and buttons
- Slight letter spacing for uppercase text
- Sentence case for body copy
- Load fonts with `next/font` and provide fallbacks

### Background

Use a very subtle monochrome CANVO monogram pattern at approximately 6–8% opacity behind appropriate page backgrounds. Keep text blocks, product images, and forms readable.

If no official CANVO monogram asset exists, create a simple reusable CSS or SVG pattern without inventing an official logo asset.

### Layout

- Maximum content width: 1100–1200px
- Mobile side padding: approximately 20px
- Desktop product grids: four columns
- Tablet grids: two or three columns
- Mobile grids: one or two columns
- Consistent spacing scale
- Responsive layouts at all common breakpoints

## 3. Shared Site Layout

Build reusable components for:

- Announcement bar
- Responsive header and navigation
- CANVO wordmark
- Search interface
- Account menu
- Cart button with item count
- Mobile navigation drawer
- Breadcrumbs
- Section headings
- Product cards
- Product image galleries
- Product quick-view dialog
- Product carousels
- Category tiles
- Promotional mosaics
- Newsletter form
- Store/location links
- Footer
- Loading skeletons
- Empty states
- Inline error states
- Confirmation dialogs
- Toast notifications
- Pagination
- Reusable form controls

### Announcement bar

Create a full-width black strip with continuously scrolling promotional text separated by white stars.

Respect `prefers-reduced-motion`. Do not introduce unnecessary continuous animations elsewhere.

### Header

Desktop:

- CANVO wordmark on the left
- Centered black pill navigation
- Navigation links: Shop, New, Collections, About, Stores
- Round outlined search, account, and cart buttons
- Cart item count
- Account menu showing Profile, Orders, Sign out, and Admin where authorized

Mobile:

- Compact header
- Accessible mobile menu using Vaul
- Search and cart access
- No horizontal overflow

Navigation must use real internal links and working interactions.

### Footer

- Large scrolling CANVO wordmark
- Black footer background
- Four link columns
- Social links
- Payment method icons
- Shipping, returns, privacy, and terms links
- Newsletter form
- Dynamic footer content where supported by the backend

## 4. Homepage — `/`

Build a complete premium fashion homepage.

### Hero carousel

- Large outlined rounded frame
- High-quality fashion photography
- White outlined content card over the image
- Oversized headline
- Short supporting text
- Black Shop Now button
- Previous and next arrow buttons
- Framer Motion transitions
- Drag and swipe on mobile
- Keyboard-accessible controls
- Pause controls for automatic movement, if autoplay is enabled
- Respect reduced-motion preferences

Load hero content from the existing frontend-content API when the backend supports it.

### Category tiles

Display four prominent image tiles:

- Women
- Men
- Accessories
- New In

Use flat pastel or two-tone backgrounds, image-led presentation, and centered white labels.

Use real backend category data when available. Do not invent categories as though they were returned by the API.

### Featured products

- Fetch featured products
- Four-column desktop grid
- Responsive horizontal scroll-snap rows on smaller screens
- Product image, category, name, and price
- Hover/focus image swap when a second image exists
- Quick View dialog
- Add to Cart
- Product detail links
- Loading, empty, and error states

### New arrivals

Fetch new arrivals from the existing backend endpoint.

Use the same product card system as Featured Products.

### Promotional mosaic

Create a large tile beside two stacked tiles for campaign concepts such as Lookbook, Accessories, and Collabs.

Use real frontend-content data where available. If content is not configured, show clearly identified local fallback content.

### Newsletter

- CANVO branding
- Short headline
- Email input
- Subscribe button
- React Hook Form and Zod validation
- Success and error feedback

Do not invent a newsletter API endpoint. If the backend does not support newsletter subscriptions, implement the UI with a clearly documented stub and report the missing API.

### Store locations

Create outlined pill links for stores or locations only when real location data or confirmed content exists. Do not invent physical addresses.

## 5. Shop — `/shop`

Implement a complete product listing page.

Features:

- Product grid
- Search input
- Category filter
- Available price filters based on actual product data
- Sorting by price, name, newest, and supported popularity metrics
- Pagination
- Filter count
- Clear Filters action
- URL query parameters for search, filters, sorting, and pagination
- Responsive filter sidebar on desktop
- Vaul bottom sheet for filters on mobile
- Loading skeletons
- No-results state
- Inline errors with Retry
- Accessible filter controls

Use the existing `GET /api/products` endpoint.

Inspect the actual query DTO and response format before choosing query parameter names.

Use RTK Query for interactive client-side filtering and refetching. Server-render the initial listing when practical, and hydrate the RTK Query cache when doing so avoids duplicate requests.

Preserve shareable URLs when filters change.

## 6. Category Pages — `/category/[slug]`

Implement category listing pages.

Features:

- Category title and description when available
- Category image
- Breadcrumbs
- Product grid
- Filters and sorting
- Pagination
- Loading, empty, and error states
- SEO metadata

Use existing category and product APIs. Confirm whether product filtering by category is supported before implementing it.

## 7. Product Details — `/product/[slug]`

Build a complete product details page.

Features:

- Main product image
- Thumbnail gallery
- Correct image ordering
- Product name and price
- Sale price when supported by API data
- Product description
- Product variants and available sizes/colors
- Stock status and quantity selector
- Add to Cart
- Quick product information
- Related products only when supported by existing data
- Approved customer reviews
- Review submission for authenticated users
- Rating summary when reliable rating data exists
- Breadcrumbs
- Responsive mobile image gallery
- Loading and error states
- Product-specific SEO metadata

Use `GET /api/products/{slug}` and `GET /api/reviews/product/{id}`.

Inspect the product response schema before implementing variants, inventory, price ranges, or image selection.

Do not invent backend fields or endpoints.

## 8. Search

Implement product search with:

- Search overlay or dialog
- Keyboard-accessible interaction
- Debounced input
- Search results
- Loading and error states
- No-results message
- Link to full search results

Use existing product search capabilities. If a separate search endpoint does not exist, use supported product-list query parameters or report the limitation.

Do not add a separate search library.

## 9. Cart

Use a Redux slice for cart state.

Requirements:

- Persist cart contents across refreshes
- Add products
- Remove products
- Change quantities
- Handle product variants correctly
- Display item count
- Calculate subtotal
- Display discount when validated
- Display totals clearly
- Provide Continue Shopping
- Provide Proceed to Checkout
- Handle empty cart
- Add-to-cart confirmation through Sonner
- Cart drawer built with Vaul
- Full cart page at `/cart`

Avoid hydration mismatches when restoring persisted state.

Treat browser storage as untrusted. Revalidate product IDs, prices, stock, and totals against the backend during checkout. Never trust client-provided prices.

If backend cart synchronization does not exist, use local persistence and document the limitation. Do not create a fictional cart endpoint.

## 10. Checkout — `/checkout`

Create a clear, responsive checkout page.

Use React Hook Form and Zod for validation.

Features:

- Shipping/contact information
- Address selection or entry
- Order summary
- Product quantities
- Coupon validation
- Shipping cost where supported
- Final payable amount
- Payment method selection based on supported backend behavior
- Loading and error states
- Order confirmation

Use:

- `POST /api/orders`
- `POST /api/discounts/validate`
- Existing SSLCommerz payment initialization endpoint

Inspect order DTOs, payment DTOs, authentication requirements, and callback handling before integrating them.

### Payment security

- Use SSLCommerz sandbox credentials for development.
- Never expose payment secrets to the browser.
- Never treat a client redirect as proof of successful payment.
- Verify payment results through the existing trusted backend flow.
- Do not mark an order paid based only on a frontend success screen.
- Do not invent a payment endpoint if the actual implementation differs from Swagger.
- Report any missing backend requirements before attempting a workaround.

## 11. Google Authentication

Implement Google-only login using the latest stable NextAuth/Auth.js version compatible with the existing project.

Do not implement email/password login.

Login page:

- CANVO branding
- Continue with Google button
- Short terms and privacy notice
- Clear loading and error states

### Authentication integration

Before coding:

1. Inspect the NestJS auth controller and service.
2. Inspect `/api/auth/sync` request DTO and response format.
3. Determine how the backend identifies a Google user.
4. Determine whether the backend issues its own JWT or another session credential.
5. Determine how the backend expects that credential to be supplied to protected API requests.

If the existing documentation and code do not define the exchange flow, stop that portion of implementation and report the exact missing information. Do not modify backend authentication logic or fabricate token formats.

Use secure server-side session handling. Never place secrets in public environment variables or expose sensitive tokens to browser code unnecessarily.

## 12. User Profile — `/profile`

Protected route for authenticated users.

Features:

- Profile information
- Name and email display
- Phone number
- Address management
- Edit profile
- Form validation
- Save confirmation
- Loading and error states

Use the existing `/api/auth/me` and `PATCH /api/auth/me` endpoints according to their actual DTOs.

Do not allow users to change protected identity or role fields through profile forms.

## 13. Order History — `/orders`

Protected route.

Features:

- Order list
- Order number
- Order date
- Order total
- Payment and order status when available
- Tracking information
- Order detail view
- Cancellation for eligible pending orders
- Empty and error states

Use the existing order history endpoints and actual response schemas.

Do not assume that order status and payment status are interchangeable.

## 14. Admin Dashboard — `/admin`

Create a distinct, responsive admin interface.

Requirements:

- Sidebar navigation
- Mobile navigation drawer
- Header with authenticated user menu
- Outlined cards and consistent design tokens
- Tables with search, sorting, and pagination
- Forms using React Hook Form and Zod
- Confirmation dialogs for destructive actions
- Loading, empty, and error states
- Sonner notifications
- Role-based route protection

Only users authorized as `admin` may access admin-only functions. Allow `moderator` access only to operations permitted by the existing backend authorization rules.

Never rely on hiding buttons in the UI as the only authorization control. Preserve backend authorization.

### Dashboard overview

Use existing analytics endpoints:

- `/api/dashboard/overview`
- `/api/dashboard/revenue-chart`
- `/api/dashboard/top-products`
- `/api/dashboard/recent-orders`
- `/api/dashboard/stock-alerts`
- `/api/dashboard/order-status-breakdown`

Use Recharts for charts:

- Revenue over time
- Order status breakdown
- Top-selling products
- Summary statistics
- Recent orders
- Low-stock alerts

Use real API data, appropriate loading states, accessible chart labels, and design tokens.

### Product management

Implement:

- Product table
- Search and pagination
- Create product
- Edit product
- Delete product
- Image upload
- Image ordering
- Image deletion
- Variant management where supported

Use existing product management endpoints and actual DTOs.

### Category management

Implement:

- Category listing
- Create/edit/delete
- Image upload
- Reordering
- Visibility controls when supported

### Order management

Implement:

- Order list
- Order detail
- Update order status
- Tracking number management
- Relevant order information

Do not allow payment status changes through a generic order-status form unless the backend explicitly supports that operation.

### Customer management

Implement:

- Customer listing
- Customer details where available
- Role management
- Account activation/deactivation
- Delete user with confirmation

Use existing authorization and role restrictions.

### Discount management

Implement:

- Discount listing
- Create/edit/delete
- Validation rules
- Start/end dates
- Active status when supported

### Review moderation

Implement:

- Review listing
- Approve review
- Reply to review
- Delete review

### Frontend content management

Implement:

- Hero section editing
- Hero image upload
- Promotional banner editing
- Banner image upload
- Homepage section content
- Announcement and footer content when supported by the actual API

Use the existing frontend-content API and its actual data format.

## 15. Data Architecture

Use a hybrid architecture.

### Server Components

Use Server Components for public, SEO-sensitive pages where appropriate:

- Homepage
- Initial product listing
- Category pages
- Product details

Fetch public data server-side and pass serializable results into Client Components.

### RTK Query

Create one shared `baseApi` and inject endpoints by feature.

Organize endpoints for:

- Products
- Categories
- Authentication/profile
- Orders
- Discounts
- Reviews
- Dashboard
- Frontend content
- Admin operations

Use appropriate cache tags and invalidation after mutations.

Hydrate server-fetched data into RTK Query when it avoids duplicate requests. Do not create a second competing cache for the same client data.

### Environment variables

Use server-only `API_URL` for server-side requests.

Use a safe `NEXT_PUBLIC_API_URL` or same-origin proxy for browser requests where necessary.

Only public, non-secret values may use `NEXT_PUBLIC_` variables.

Never expose:

- MongoDB URI
- Google OAuth client secret
- Auth.js secret
- SSLCommerz secrets
- Cloudinary API secrets
- Backend private tokens

Do not print environment-file contents in terminal summaries, logs, or AI responses.

## 16. Shared UI and Component Structure

Use a maintainable structure similar to:

- `src/app/` — routes and layouts
- `src/components/ui/` — shadcn components
- `src/components/layout/` — header, footer, announcement bar
- `src/components/home/` — homepage sections
- `src/components/products/` — cards, gallery, filters
- `src/components/cart/` — cart drawer and cart items
- `src/components/forms/` — reusable form elements
- `src/components/admin/` — admin navigation and shared components
- `src/lib/` — utilities and API helpers
- `src/lib/api/` — baseApi and injected endpoints
- `src/lib/auth/` — auth configuration and helpers
- `src/store/` — Redux store and cart slice
- `src/providers/` — Redux, theme, and session providers
- `src/types/` — shared TypeScript types
- `src/hooks/` — reusable hooks

Adapt this structure to the existing project where sensible. Avoid unnecessary files and duplicated components.

## 17. Loading, Empty, and Error States

Every data-driven page must handle:

### Loading

- Skeletons matching the final component shapes
- No large layout shifts
- Accessible loading announcements where appropriate

### Empty

- Clear explanation
- Helpful next action
- Empty cart → Continue Shopping
- No results → Clear Filters
- No orders → Browse Products

### Error

- Explain what failed in plain language
- Provide Retry when appropriate
- Preserve relevant user input
- Use inline error blocks for page failures
- Use Sonner for transient mutation feedback

Never silently replace API errors with fake successful data.

## 18. Accessibility and Responsiveness

Requirements:

- Semantic HTML landmarks
- Accessible labels
- Keyboard-accessible navigation
- Visible focus indicators
- Focus management in dialogs and drawers
- WCAG AA contrast
- Reduced-motion support
- Responsive mobile navigation
- Touch-friendly controls
- Correct image alt text
- No horizontal overflow
- Accessible table and chart labels

## 19. Light and Dark Themes

Use `next-themes`.

Define light and dark palettes using the same design tokens. Light mode should use paper backgrounds and ink text. Dark mode should invert the primary surfaces and maintain clearly visible outlines.

Avoid hardcoded component colors that bypass the token system.

## 20. SEO, Images, and Performance

Implement:

- Page-specific metadata
- Open Graph metadata
- Canonical URLs where appropriate
- Product metadata based on actual API fields
- Semantic headings
- `next/image` with correct sizes and safe remote-host configuration
- Lazy loading for below-the-fold imagery
- Appropriate priority for the main hero image
- Blur placeholders only when a valid placeholder is available
- Server rendering for public SEO-sensitive data
- Optimized fonts and images

Do not invent product ratings, stock, discounts, testimonials, or physical store addresses.

## 21. Development Phases

Complete all six phases sequentially. Do not attempt the entire implementation in one giant code change.

### Phase 1 — Foundation and Shared Layout

- Compatible package installation
- Tailwind v4 design tokens
- Fonts and theme provider
- Redux store
- Base RTK Query API
- Auth.js setup after verifying the backend flow
- shadcn/ui configuration and required components
- Header
- Announcement bar
- Footer
- Shared loading, empty, and error components
- Environment configuration

### Phase 2 — Homepage

- Hero carousel
- Category tiles
- Featured products
- New arrivals
- Promotional mosaic
- Newsletter
- Store/location links when real content exists

### Phase 3 — Storefront

- Shop
- Search
- Filters
- Sorting
- Pagination
- Category pages
- Product details
- Reviews display
- Quick view

### Phase 4 — Commerce

- Persistent cart
- Cart drawer
- Cart page
- Coupon validation
- Checkout
- Order creation
- SSLCommerz sandbox integration
- Order confirmation

### Phase 5 — Account

- Google login
- Secure session integration
- Profile
- Address management
- Order history
- Order details
- Order cancellation and tracking

### Phase 6 — Admin

- Protected admin layout
- Overview dashboard
- Charts and analytics
- Product management
- Category management
- Order management
- Customer management
- Discount management
- Review moderation
- Frontend content management

## 22. Testing and Completion Criteria

After each phase:

1. Run TypeScript checks.
2. Run lint where configured.
3. Run a production build when practical.
4. Fix errors introduced by the implementation.
5. Verify responsive layouts.
6. Verify API requests and response handling.
7. Verify loading, empty, and error states.
8. Verify permissions for protected functionality.
9. Check for exposed secrets and unsafe client-side API usage.

Do not claim an integration works unless it has been tested. If backend services or credentials are unavailable, report the limitation and provide the exact manual test steps.

At the end of each phase, report:

- Files created
- Files modified
- Features completed
- Features still stubbed
- APIs integrated
- Missing backend capabilities
- Build and lint results
- Required environment variables by name only
- Manual verification steps

Keep `canvo-server/` business logic unchanged unless a genuine blocker is discovered. If a backend change is necessary, explain the gap and request approval first.

**Execution requirement:** Start with Phase 1, then continue through Phases 2–6 sequentially. Do not stop for approval between phases unless you encounter a genuine blocker, a missing authentication/payment contract, a destructive change, or a decision requiring my input. Do not report the entire website as complete until all phases have been implemented and verified.

The final result must be a functional, responsive CANVO fashion e-commerce frontend connected to the existing backend wherever supported, not merely a static visual mockup.