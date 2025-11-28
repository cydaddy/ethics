import React, { useState } from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import Modal from './components/Modal';
import { content } from './data/content';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <Header />

      <main className="container">
        <CategorySection
          title="생명을 지키는 사람들"
          items={content.people}
          color="#FF6B6B"
          onCardClick={handleCardClick}
        />

        <CategorySection
          title="생명을 존중하는 단체들"
          items={content.organizations}
          color="#4ECDC4"
          onCardClick={handleCardClick}
        />

        <CategorySection
          title="생명을 보호하는 시설들"
          items={content.facilities}
          color="#FFE66D"
          onCardClick={handleCardClick}
        />
      </main>

      <Modal
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
        item={selectedItem}
      />

      <footer style={{ textAlign: 'center', padding: '40px 0', color: '#888' }}>
        <p>© 2025 생명 존중 실천 사례</p>
      </footer>
    </div>
  );
}

export default App;
