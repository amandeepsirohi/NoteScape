# NoteScape
### Your personal notes taking app
<br/>

## Features
- <b>User Authentication</b>: Utilizes Clerk for secure user authentication.
- <b>Note Management</b>: Create, edit, delete, and organize your notes effortlessly.
- <b>Real-time Updates</b>: Changes are instantly synced across devices thanks to CoveX DB.
- <b>Responsive Design</b>: Enjoy a seamless experience on desktop, tablet, and mobile.

<br/>

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- A CoveX DB account for real-time database functionality.
- A Clerk account for user authentication.

### Installation

#### 1. Clone this repository:
```console
git clone https://github.com/amandeepsirohi/NoteScape.git
```
#### 2. Install dependencies:
```console
cd NoteScape
npm install
```
#### 3. Create a .env.local file in the root directory and add the following environment variables:
```console
COVEX_DB_API_KEY=YOUR_COVEX_DB_API_KEY
CLERK_API_KEY=YOUR_CLERK_API_KEY
CLERK_FRONTEND_API_KEY=YOUR_CLERK_FRONTEND_API_KEY
```
> Replace YOUR_COVEX_DB_API_KEY, YOUR_CLERK_API_KEY, and YOUR_CLERK_FRONTEND_API_KEY with your actual CoveX DB and Clerk API keys.

#### Start the server
```console
npx convex dev
```
#### Start the client
```console
npm run dev
```
> Visit http://localhost:3000 in your browser to start using the Notescape clone.
<br/>

### Tech 
- <b>Next.js</b>: A React framework for building server-rendered applications.
- <b>CoveX DB</b>: A real-time database service for synchronizing data across devices.
- <b>Clerk</b>: A user authentication service providing secure login and signup flows.
- <b>TypeScript</b>: A superset of JavaScript that adds static types.
- <b>Tailwind CSS</b>: A utility-first CSS framework for quickly building custom designs.
<br/>

### Contributions
##### Feel free to contribute by opening issues, providing feedback, or creating pull requests. Any help is greatly appreciated.
