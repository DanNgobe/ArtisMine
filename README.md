# ArtisMine

## Overview

ArtisMine is a Web3 application aimed at addressing critical challenges in the traditional creative industries, such as delayed royalty payments, unfair revenue splits, limited fan engagement, opaque reporting, and low earnings for emerging artists.

## Getting Started

Follow these steps to get up and running with ArtisMine.

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn
- Hardhat

### Installation

1. Clone the repository:

   ```shell
   git clone <repository_url>
   cd ArtisMine
   ```

2. Install dependencies:
   ```shell
   npm install
   ```

### Running Hardhat Tasks

#### Available Tasks

- **Help**: List all available Hardhat tasks

  ```shell
  npx hardhat help
  ```

- **Run Tests**: Execute tests

  ```shell
  npx hardhat test
  ```

- **Gas Report**: Generate gas usage reports during testing

  ```shell
  REPORT_GAS=true npx hardhat test
  ```

- **Start Node**: Run a local blockchain node

  ```shell
  npx hardhat node
  ```

- **Deploy Contracts**: Deploy contracts using Ignition
  ```shell
  npx hardhat ignition deploy ./ignition/modules/Lock.js
  ```

### React Frontend

The project includes a React-based frontend to interact with the Web3 contracts.

#### Running the React App

1. Start the development server:

   ```shell
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to view the app.

### Contributing

Contributions are welcome! Please follow the standard GitHub workflow:

- Fork the repository
- Create a new branch for your feature or fix
- Submit a pull request

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.
