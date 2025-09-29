# 🚀 CryptoPlace - Cryptocurrency Marketplace

A modern, responsive cryptocurrency marketplace built with React and Vite. Track real-time crypto prices, view interactive charts, and explore the largest cryptocurrency marketplace.

<div align="center">
  <img src="./src/assets/logo.png" alt="CryptoPlace Logo" width="200">
  <p><strong>Largest Crypto Marketplace</strong></p>
</div>

## ✨ Features

- **📊 Real-time Price Tracking** - Live cryptocurrency prices from CoinGecko API
- **📈 Interactive Charts** - Beautiful line charts for price history
- **💱 Multi-Currency Support** - USD, EUR, INR, GBP, JPY, and more
- **🔍 Search Functionality** - Find any cryptocurrency instantly
- **📱 Responsive Design** - Works perfectly on desktop and mobile
- **🎨 Modern UI** - Beautiful gradients and smooth animations
- **🔐 Authentication Ready** - Login/signup modal system included

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cryptoplace.git
   cd cryptoplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable UI components
│   ├── Navbar/     # Navigation with currency selector
│   └── LineChart/  # Interactive price charts
├── context/        # React Context for state management
├── pages/          # Page components
│   ├── Home/       # Main dashboard
│   └── Coin/       # Individual coin details
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CoinGecko API** - Cryptocurrency data
- **React Router** - Client-side routing
- **CSS3** - Custom styling with gradients
- **React Google Charts** - Interactive charts

## 🎯 Usage

1. **Browse Cryptocurrencies** - View top cryptocurrencies on the home page
2. **Change Currency** - Use the dropdown to switch between USD, EUR, INR, etc.
3. **View Details** - Click on any cryptocurrency to see detailed information
4. **Interactive Charts** - View 10-day price history with beautiful charts
5. **Search** - Use the search bar to find specific cryptocurrencies

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [CoinGecko API](https://www.coingecko.com/) for cryptocurrency data
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast development experience

---

<div align="center">
  Made with ❤️ for the crypto community
</div>
