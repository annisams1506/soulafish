module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/component/page/ikan.jpg')",
        pantai: "url('/src/component/page/pantai.jpg')",
        ikan: "url('/src/component/datainformation/lampung.png')",
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        poly: ['Poly', 'serif'],
        cambria: ['Cambria', 'serif'],
        georgia: ['Georgia', 'serif'],
      },
      colors: {
        greenCustom: {
          100: '#03521E', // Warna hijau gelap
          200: '#0D7918', // Hijau terang
          300: '#0F8F1C', // Hijau sedikit lebih terang
          400: '#1F9D2C', // Hijau terang penuh
        },
        primary: '#F7DBA7',               // Warna utama
        primaryOpacity70: 'rgba(247, 219, 167, 0.7)', // Warna utama dengan 70% opacity
        secondary: '#103559',   
        lightGray: '#A8A8A8',
      },
    },
  },
  plugins: [],
};
