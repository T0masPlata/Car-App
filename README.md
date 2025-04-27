# VroomGPT - Smart Navigation App

A modern navigation application that combines the power of GPT with Google Maps for an intelligent driving experience.

## Features

- Interactive Google Maps integration
- Modern, clean UI with rounded corners and intuitive design
- Three main sections: Navigation, Vehicle, and AI Assistant
- Settings panel for customization
- Dark mode map styling for better visibility

## Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create a `.env.local` file in the root directory and add your Google Maps API key:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000/vroom](http://localhost:3000/vroom) in your browser to see the result.

## Required Environment Variables

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Your Google Maps API key with Maps JavaScript API and Places API enabled

## Technology Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Google Maps JavaScript API
- React Icons

## Development

The app is structured as follows:

- `app/vroom/page.tsx`: Main page component
- `app/components/vroom/Map.tsx`: Google Maps integration
- Styling is handled through Tailwind CSS
- Icons are from react-icons library

## Notes

- Make sure to enable the necessary Google Maps APIs in your Google Cloud Console
- The map uses a dark theme by default for better visibility
- The bottom navigation bar uses a glass-morphism effect for modern aesthetics 