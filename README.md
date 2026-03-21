# iShop - Grocery Shopping App

A React Native mobile application built with Expo SDK 55 and EAS (Expo Application Services) for grocery shopping management.

## Features

- **Dashboard**: View grocery items with categories, prices, and stock status
- **Cart**: Manage shopping cart with quantity controls and price calculations
- **Settings**: User preferences, account management, and app settings

## Tech Stack

- **React Native** with **Expo SDK 55**
- **TypeScript** for type safety
- **Expo Router** for navigation
- **EAS** for building and deployment

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Expo CLI
- EAS CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd iShop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

### Running the App

- **Web**: `npm run web`
- **Android**: `npm run android` (requires Android Studio/emulator)
- **iOS**: `npm run ios` (requires macOS and Xcode)

## Project Structure

```
iShop/
├── app/
│   ├── _layout.tsx          # Root layout and navigation
│   ├── index.tsx            # Home screen
│   ├── dashboard.tsx        # Dashboard screen
│   ├── cart.tsx            # Cart screen
│   └── settings.tsx        # Settings screen
├── assets/                  # App assets (icons, images)
├── types/                   # TypeScript type definitions
├── app.json                 # Expo configuration
├── eas.json                 # EAS build configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Building with EAS

### Setup EAS

1. Login to EAS:
```bash
npx eas login
```

2. Configure the project:
```bash
npx eas build:configure
```

### Build Profiles

- **Development**: For testing with Expo Go
- **Preview**: For internal testing and distribution
- **Production**: For app store release

### Build Commands

```bash
# Development build
npx eas build --profile development

# Preview build
npx eas build --profile preview

# Production build
npx eas build --profile production
```

## Placeholder Data

The app currently includes placeholder data for:

- **Grocery Items**: 10 sample items with categories (Fruits, Dairy, Bakery, Meat, Seafood, Vegetables, Beverages)
- **Cart Items**: 5 items with quantities and price calculations
- **Settings**: Toggle switches for notifications, dark mode, biometric login, etc.

## Future Development

This is a foundation for a full-featured grocery shopping app. Future features could include:

- Real-time inventory management
- User authentication and profiles
- Payment integration
- Order tracking
- Barcode scanning
- Recipe suggestions
- Shopping lists and meal planning

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2026 iShop. All rights reserved.
