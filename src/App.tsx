import React, { useState } from 'react';
import { Sword, Filter, ScrollText } from 'lucide-react';

function App() {
  const [selectedVillage, setSelectedVillage] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const villages = [
    { id: 'all', name: 'All Villages' },
    { id: 'leaf', name: 'Hidden Leaf' },
    { id: 'sand', name: 'Hidden Sand' },
    { id: 'mist', name: 'Hidden Mist' },
    { id: 'cloud', name: 'Hidden Cloud' },
    { id: 'stone', name: 'Hidden Stone' }
  ];

  const categories = [
    { id: 'all', name: 'All Characters' },
    { id: 'hokage', name: 'Hokage' },
    { id: 'jinchuriki', name: 'Jinchūriki' },
    { id: 'akatsuki', name: 'Akatsuki' },
    { id: 'ninja', name: 'Ninja' }
  ];

  const characters = [
    {
      id: 1,
      name: "Naruto Uzumaki",
      village: "leaf",
      category: "hokage",
      image: "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_II.png",
      description: "The Seventh Hokage and Hero of the Hidden Leaf"
    },
    {
      id: 2,
      name: "Sasuke Uchiha",
      village: "leaf",
      category: "ninja",
      image: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_2.png",
      description: "Last survivor of the Uchiha clan"
    },
    {
      id: 3,
      name: "Kakashi Hatake",
      village: "leaf",
      category: "hokage",
      image: "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png",
      description: "The Copy Ninja and Sixth Hokage"
    },
    {
      id: 4,
      name: "Itachi Uchiha",
      village: "leaf",
      category: "akatsuki",
      image: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png",
      description: "Legendary member of the Akatsuki"
    },
    {
      id: 5,
      name: "Gaara",
      village: "sand",
      category: "jinchuriki",
      image: "https://static.wikia.nocookie.net/naruto/images/0/0f/Gaara_Part_II.png",
      description: "Kazekage of the Hidden Sand Village"
    },
    {
      id: 6,
      name: "Pain",
      village: "rain",
      category: "akatsuki",
      image: "https://static.wikia.nocookie.net/naruto/images/f/f6/Pain_Yahiko.png",
      description: "Leader of the Akatsuki"
    },
    {
      id: 7,
      name: "Minato Namikaze",
      village: "leaf",
      category: "hokage",
      image: "https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png",
      description: "The Fourth Hokage, Yellow Flash of the Leaf"
    },
    {
      id: 8,
      name: "Hinata Hyuga",
      village: "leaf",
      category: "ninja",
      image: "https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png",
      description: "Member of the Hyuga clan"
    },
    {
      id: 9,
      name: "Madara Uchiha",
      village: "leaf",
      category: "ninja",
      image: "https://static.wikia.nocookie.net/naruto/images/e/ef/Madara_Uchiha.png",
      description: "Legendary shinobi and co-founder of Hidden Leaf"
    }
  ];

  const filteredCharacters = characters.filter(character => {
    const matchesVillage = selectedVillage === 'all' || character.village === selectedVillage;
    const matchesCategory = selectedCategory === 'all' || character.category === selectedCategory;
    return matchesVillage && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-orange-900 via-red-900 to-purple-900 py-16">
        <div className="absolute inset-0 bg-[url('https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_II.png')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ScrollText className="w-8 h-8 text-orange-400 animate-pulse" />
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-500">
              Naruto Universe
            </h1>
            <Sword className="w-8 h-8 text-orange-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            Explore the legendary ninjas, powerful hokages, and memorable characters from the world of Naruto
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-gray-800 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-orange-400" />
              <span className="text-gray-300">Filter by:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <select 
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className="bg-gray-700 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
              >
                {villages.map(village => (
                  <option key={village.id} value={village.id}>
                    {village.name}
                  </option>
                ))}
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-700 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Character Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((character) => (
            <div 
              key={character.id}
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-gray-800"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {character.name}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {character.description}
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                      {villages.find(v => v.id === character.village)?.name}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      {categories.find(c => c.id === character.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Naruto Universe. Images from Naruto Wiki.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;