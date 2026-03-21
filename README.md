# iShop - Grocery Shopping App

A React Native + Expo mobile application for grocery shopping with three main sections: Dashboard, Cart, and Settings.

## Features

### Dashboard (Shop)
- Browse featured grocery products
- View product details including name, category, price, and stock status
- Clean, modern UI with product cards

### Cart
- View shopping cart items
- Adjust item quantities
- See subtotal, tax, and total calculations
- Remove items from cart
- Proceed to checkout placeholder

### Settings
- Account management options
- Preferences (notifications, location, dark mode)
- Shopping history and lists
- Support and about sections
- Sign out functionality

## Technology Stack

- **React Native** with **Expo SDK 54**
- **TypeScript** for type safety
- **React Navigation** for tab navigation
- **EAS (Expo Application Services)** configured for building

## Getting Started

### Prerequisites
- Node.js installed
- Expo CLI installed (`npm install -g expo-cli`)
- EAS CLI installed (`npm install -g eas-cli`)

### Installation

1. Navigate to the project directory:
   ```bash
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

4. Run the app:
   - **Web**: Press `w` in the terminal
   - **Android**: Press `a` in the terminal (requires Android Studio setup)
   - **iOS**: Press `i` in the terminal (requires Xcode on macOS)

### Building for Production

The project is configured with EAS Build. To build for production:

1. Configure EAS (already done):
   ```bash
   eas build:configure
   ```

2. Build for specific platforms:
   ```bash
   eas build --platform android
   eas build --platform ios
   eas build --platform all
   ```

## Project Structure

```
iShop/
├── screens/
│   ├── DashboardScreen.tsx    # Main shopping interface
│   ├── CartScreen.tsx         # Shopping cart functionality
│   └── SettingsScreen.tsx     # App settings and preferences
├── App.tsx                    # Main app with navigation setup
├── app.json                   # Expo configuration
├── eas.json                   # EAS build configuration
└── package.json               # Dependencies and scripts
```

## Current Status

✅ **Completed Features:**
- Project setup with Expo SDK 54 and EAS
- Three main screens with placeholder data
- Bottom tab navigation
- Responsive UI with modern styling
- TypeScript configuration

🚧 **Future Enhancements:**
- Actual shopping functionality
- User authentication
- Real product data integration
- Payment processing
- Push notifications
- Offline support

## Development Notes

- The app uses placeholder data for demonstration purposes
- All UI components are styled but not yet functional
- Navigation between tabs works seamlessly
- The app is ready for further feature development
