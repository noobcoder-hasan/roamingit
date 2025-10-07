# Roaming Travel Portfolio

This is the frontend for the Roaming Travel Portfolio website, a platform to showcase travel services and connect with clients.

## Features

*   **Home Page:** An engaging introduction to the travel services.
*   **About Us:** Information about the team and the company's mission.
*   **Services:** Detailed descriptions of the travel packages and services offered.
*   **Contact Form:** A functional contact form for inquiries.
*   **Responsive Design:** The website is designed to work on all devices.

## Tech Stack

*   **Frontend:**
    *   [React](https://reactjs.org/)
    *   [Vite](https://vitejs.dev/)
    *   [React Router](https://reactrouter.com/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [Framer Motion](https://www.framer.com/motion/) for animations.
*   **Backend:**
    *   [Node.js](https://nodejs.org/)
    *   [Express.js](https://expressjs.com/)
    *   [Nodemailer](https://nodemailer.com/) for handling contact form submissions.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20.19+ or v22.12+ recommended). We suggest using [nvm](https://github.com/coreybutler/nvm-windows) to manage Node.js versions.
*   npm

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your_username/roamingit.git
    cd roamingit
    ```

2.  **Backend Setup:**
    ```sh
    cd backend
    npm install
    npm start
    ```
    The backend server will start on `http://localhost:5001`.

3.  **Frontend Setup:**
    Open a new terminal.
    ```sh
    cd frontend
    npm install
    npm run dev
    ```
    The frontend development server will start on `http://localhost:5173` (or another port if 5173 is busy).

## Available Scripts

In the `frontend` directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
