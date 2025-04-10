# Test Dashboard Screens also mobile responsive

## Overview

This project is a React.js application built with Vite that includes two  Dashboard screen. The UI is implemented to be pixel-perfect and responsive, using **shadcn** for UI components.

## Features


- **Dashboard**: Displays customer data .
- **Component Reusability**: UI elements such as buttons and input fields are reusable.
- **Performance Optimization**: Uses lazy loading and code splitting.
- **Testing**: Unit tests written with Jest or React Testing Library.
- **Responsive UI**: Works seamlessly on mobile and desktop.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>=16.x)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/Ayotayo1689/pricelss-dashboard.git
cd priceless-dashboard
```

### Install Dependencies

```bash
npm install
```

OR

```bash
yarn install
```

### Install shadcn

shadcn is used for UI components. To set it up, run:

```bash
npx shadcn-ui@latest init
```

Then, install the necessary components:

```bash
npx shadcn-ui@latest add button input card
```

### Start the Development Server

```bash
npm run dev
```

OR

```bash
yarn dev
```

## Usage

### Navigation

Use the following steps to navigate the pages:

- Automatically you see the first page.
- click on Nintendo on the side bar to view the second page 



## Project Structure

```
📂 src
 ├── 📂 components  # Reusable UI components
 ├── 📂 pages       # Login and Dashboard pages
 ├── 📂 styles      # Global styles and Tailwind configuration
 ├── 📂 utils       # Helper functions
 ├── App.jsx        # Main app component
 ├── main.jsx       # Entry point
```

## Performance Optimization

- **Lazy Loading**: Implemented for better performance.
- **Code Splitting**: Ensures efficient loading.

## Testing

Unit tests are written using Jest or React Testing Library. Run tests with:

```bash
npm run test
```

OR

```bash
yarn test
```

## Deployment

To build the app for production:

```bash
npm run build
```

## Contributing

Feel free to submit issues or contribute by creating pull requests.

## License

This project is licensed under the MIT License.

---

**Happy Coding! 🚀**
