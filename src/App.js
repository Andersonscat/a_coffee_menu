import React, { useState } from 'react';
import Header from './components/Header';
import MenuTabs from './components/MenuTabs';
import DrinksTable from './components/DrinksTable';
import './App.css';

const hotDrinks = [
  {
    name: 'Эспрессо',
    sizes: [{ size: '-', price: 650 }],
    description: 'Крепкий итальянский кофе, подается в маленькой чашке.',
    ingredients: ['Молотый кофе', 'Вода'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
  },
  {
    name: 'Американо',
    sizes: [
      { size: 'S', price: 650 },
      { size: 'M', price: 650 }
    ],
    description: 'Классический американо — эспрессо, разбавленный горячей водой.',
    ingredients: ['Эспрессо', 'Горячая вода'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'
  },
  {
    name: 'Капучино',
    sizes: [
      { size: 'S', price: 900 },
      { size: 'M', price: 900 },
      { size: 'L', price: 900 }
    ],
    description: 'Итальянский кофе с молоком и пышной молочной пеной.',
    ingredients: ['Эспрессо', 'Молоко', 'Молочная пена'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg'
  },
  {
    name: 'Латте',
    sizes: [
      { size: 'M', price: 900 },
      { size: 'L', price: 900 }
    ],
    description: 'Мягкий кофейный напиток с большим количеством молока.',
    ingredients: ['Эспрессо', 'Молоко', 'Молочная пена'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Latte_art_3.jpg'
  },
];

const authorTea = [
  {
    name: 'Чай',
    size: 'M',
    price: 300,
    description: 'Классический черный чай.',
    ingredients: ['Черный чай', 'Вода'],
    img: ''
  },
  {
    name: 'Чай с молоком',
    size: 'M',
    price: 350,
    description: 'Черный чай с добавлением молока.',
    ingredients: ['Черный чай', 'Молоко', 'Вода'],
    img: ''
  },
  {
    name: 'Чай черный чайник',
    size: 'L',
    price: 900,
    description: 'Черный чай в чайнике для компании.',
    ingredients: ['Черный чай', 'Вода'],
    img: ''
  },
  {
    name: 'Чай с молоком чайник',
    size: 'L',
    price: 900,
    description: 'Чай с молоком в чайнике для компании.',
    ingredients: ['Черный чай', 'Молоко', 'Вода'],
    img: ''
  },
  {
    name: 'Чай ягодный',
    size: 'L',
    price: 1900,
    description: 'Ароматный ягодный чай с натуральными ягодами.',
    ingredients: ['Черный чай', 'Ягоды', 'Вода'],
    img: ''
  },
  {
    name: 'Чай облепиховый',
    size: 'L',
    price: 1900,
    description: 'Полезный облепиховый чай с витаминами.',
    ingredients: ['Черный чай', 'Облепиха', 'Вода'],
    img: ''
  },
  {
    name: 'Чай ташкентский',
    size: 'L',
    price: 1900,
    description: 'Традиционный ташкентский чай с особым вкусом.',
    ingredients: ['Черный чай', 'Специи', 'Вода'],
    img: ''
  },
];

const coldAuthor = [
  {
    name: 'Айс латте / капучино',
    size: 'L',
    price: 950,
    description: 'Латте или капучино, приготовленный на льду.',
    ingredients: ['Эспрессо', 'Молоко', 'Лёд'],
    img: ''
  },
];

const coldRefresh = [
  {
    name: 'Кола 0.5',
    size: 'L',
    price: 700,
    description: 'Кока-кола объемом 0.5 литра.',
    ingredients: ['Кола', 'Лёд'],
    img: ''
  },
  {
    name: 'Фанта 0.5',
    size: 'L',
    price: 700,
    description: 'Фанта объемом 0.5 литра.',
    ingredients: ['Фанта', 'Лёд'],
    img: ''
  },
  {
    name: 'Редбул',
    size: 'L',
    price: 1100,
    description: 'Энергетический напиток Red Bull.',
    ingredients: ['Red Bull'],
    img: ''
  },
  {
    name: 'Горилла',
    size: 'L',
    price: 700,
    description: 'Энергетический напиток Gorilla.',
    ingredients: ['Gorilla'],
    img: ''
  },
  {
    name: 'Вода',
    size: 'L',
    price: 450,
    description: 'Питьевая вода.',
    ingredients: ['Вода'],
    img: ''
  },
  {
    name: 'Детский сок',
    size: 'M',
    price: 350,
    description: 'Натуральный сок для детей.',
    ingredients: ['Сок'],
    img: ''
  },
  {
    name: 'Лимонад 0.5',
    size: 'M',
    price: 950,
    description: 'Домашний лимонад объемом 0.5 литра.',
    ingredients: ['Лимон', 'Сахар', 'Вода', 'Лёд'],
    img: ''
  },
  {
    name: 'Лимонад 1 л',
    size: 'L',
    price: 2500,
    description: 'Домашний лимонад объемом 1 литр.',
    ingredients: ['Лимон', 'Сахар', 'Вода', 'Лёд'],
    img: ''
  },
];

function Section({ title, children }) {
  return (
    <div className="section">
      <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: 22, letterSpacing: 1 }}>{title}</h2>
      {children}
    </div>
  );
}

function SectionsRow({ children }) {
  return <div className="sections-row">{children}</div>;
}

function Modal({ children, onClose }) {
  return (
    <div>
      <div
        className="modal-overlay"
        onClick={onClose}
      />
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Закрыть"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

function DrinkInfoModal({ item, onClose }) {
  if (!item) return null;
  return (
    <Modal onClose={onClose}>
      {item.img && (
        <div style={{ marginBottom: 24 }}>
          <img src={item.img} alt={item.name} style={{ maxWidth: 260, maxHeight: 180, borderRadius: 16, boxShadow: '0 2px 8px #0001' }} />
        </div>
      )}
      <div style={{ color: '#222', textAlign: 'center', fontFamily: 'Fira Mono, monospace' }}>
        <h2 style={{ margin: '12px 0 8px 0', fontWeight: 500, fontSize: 26 }}>{item.name}</h2>
        {item.description && <p style={{ fontSize: 16, margin: '8px 0 16px 0', color: '#444' }}>{item.description}</p>}
        {item.ingredients && (
          <>
            <h4 style={{ margin: '12px 0 4px 0', fontWeight: 400, fontSize: 18, color: '#333' }}>Ингредиенты:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 15, color: '#444' }}>
              {item.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
          </>
        )}
      </div>
    </Modal>
  );
}

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="App" style={{ background: '#fff' }}>
      <div className="menu-accent" />
      <Header />
      <main>
        <MenuTabs tabs={["Горячие напитки", "Холодные напитки"]}>
          {/* Горячие напитки */}
          <SectionsRow>
            <Section title="Классика">
              <DrinksTable data={hotDrinks} setSelectedItem={setSelectedItem} />
            </Section>
            {authorTea.length > 0 && (
              <Section title="Чай">
                <DrinksTable data={authorTea} setSelectedItem={setSelectedItem} />
              </Section>
            )}
          </SectionsRow>
          {/* Холодные напитки */}
          <SectionsRow>
            {coldAuthor.length > 0 && (
              <Section title="Холодный кофе">
                <DrinksTable data={coldAuthor} setSelectedItem={setSelectedItem} />
              </Section>
            )}
            <Section title="Прохладительные напитки">
              <DrinksTable data={coldRefresh} setSelectedItem={setSelectedItem} />
            </Section>
          </SectionsRow>
        </MenuTabs>
        <DrinkInfoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </main>
    </div>
  );
}

export default App;
