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

const hotDishesFood = [
  {
    name: 'Лапша рамен',
    price: 1500,
    description: 'Японская лапша рамен с бульоном, мясом и овощами.',
    ingredients: ['Лапша', 'Бульон', 'Мясо', 'Овощи', 'Яйцо'],
    img: ''
  },
  {
    name: 'Пельмени',
    price: 1400,
    description: 'Пельмени с мясной начинкой, подаются со сметаной.',
    ingredients: ['Тесто', 'Мясо', 'Сметана'],
    img: ''
  },
  {
    name: 'Куриная лапша',
    price: 1200,
    description: 'Куриная лапша с овощами в бульоне.',
    ingredients: ['Лапша', 'Курица', 'Овощи', 'Бульон'],
    img: ''
  },
  {
    name: 'Чечевичный суп',
    price: 1100,
    description: 'Сытный суп из чечевицы с овощами.',
    ingredients: ['Чечевица', 'Овощи', 'Бульон'],
    img: ''
  },
  {
    name: 'Феттучини с курицей',
    price: 2290,
    description: 'Итальянская паста феттучини с курицей и сливочным соусом.',
    ingredients: ['Феттучини', 'Курица', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Феттучини с креветками',
    price: 2590,
    description: 'Феттучини с креветками в сливочном соусе.',
    ingredients: ['Феттучини', 'Креветки', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Феттучини с семгой',
    price: 2890,
    description: 'Феттучини с семгой и сливочным соусом.',
    ingredients: ['Феттучини', 'Семга', 'Сливочный соус', 'Сыр'],
    img: ''
  },
  {
    name: 'Вок лапша',
    price: 1890,
    description: 'Обжаренная лапша с овощами и мясом в азиатском стиле.',
    ingredients: ['Лапша', 'Овощи', 'Мясо', 'Соус'],
    img: ''
  },
  {
    name: 'Бефстроганов',
    price: 2390,
    description: 'Говядина в сливочном соусе с грибами и луком.',
    ingredients: ['Говядина', 'Сливки', 'Грибы', 'Лук'],
    img: ''
  },
  {
    name: 'Стейк из семги',
    price: 3500,
    description: 'Стейк из семги, обжаренный до золотистой корочки.',
    ingredients: ['Семга', 'Специи', 'Лимон'],
    img: ''
  },
];

const breakfastBakery = [
  {
    name: 'Континентальный завтрак',
    price: 1500,
    description: 'Классический европейский завтрак: круассан, масло, джем, сыр, свежие овощи и яйцо.',
    ingredients: ['Круассан', 'Масло', 'Джем', 'Сыр', 'Овощи', 'Яйцо'],
    img: ''
  },
  {
    name: 'Американский завтрак',
    price: 1600,
    description: 'Яичница, бекон, тосты, картофель, овощи и соус.',
    ingredients: ['Яйца', 'Бекон', 'Тосты', 'Картофель', 'Овощи', 'Соус'],
    img: ''
  },
  {
    name: 'Национальный завтрак',
    price: 1400,
    description: 'Традиционный завтрак с кашей, лепёшкой, сыром и яйцом.',
    ingredients: ['Каша', 'Лепёшка', 'Сыр', 'Яйцо'],
    img: ''
  },
  {
    name: 'Блины со сметаной',
    price: 900,
    description: 'Тонкие блины, подаются со сметаной.',
    ingredients: ['Мука', 'Яйца', 'Молоко', 'Сметана'],
    img: ''
  },
  {
    name: 'Блины с джемом',
    price: 900,
    description: 'Тонкие блины с фруктовым джемом.',
    ingredients: ['Мука', 'Яйца', 'Молоко', 'Джем'],
    img: ''
  },
  {
    name: 'Блины с шоколадом',
    price: 1000,
    description: 'Блины с шоколадной начинкой.',
    ingredients: ['Мука', 'Яйца', 'Молоко', 'Шоколад'],
    img: ''
  },
  {
    name: 'Круассан с семгой',
    price: 1200,
    description: 'Круассан с семгой, сливочным сыром и зеленью.',
    ingredients: ['Круассан', 'Семга', 'Сливочный сыр', 'Зелень'],
    img: ''
  },
  {
    name: 'Круассан с курицей',
    price: 1100,
    description: 'Круассан с курицей, сыром и свежими овощами.',
    ingredients: ['Круассан', 'Курица', 'Сыр', 'Овощи'],
    img: ''
  },
  {
    name: 'Панини',
    price: 1200,
    description: 'Итальянский горячий сэндвич с сыром и ветчиной.',
    ingredients: ['Панини', 'Сыр', 'Ветчина'],
    img: ''
  },
];

const saladsSandwiches = [
  {
    name: 'Цезарь с курицей',
    price: 2290,
    description: 'Классический салат Цезарь с курицей, листьями салата, сухариками и соусом.',
    ingredients: ['Курица', 'Салат', 'Сухарики', 'Пармезан', 'Соус Цезарь'],
    img: ''
  },
  {
    name: 'Цезарь с креветками',
    price: 2390,
    description: 'Салат Цезарь с креветками, листьями салата, сухариками и соусом.',
    ingredients: ['Креветки', 'Салат', 'Сухарики', 'Пармезан', 'Соус Цезарь'],
    img: ''
  },
  {
    name: 'Хрустящие баклажаны',
    price: 2100,
    description: 'Жареные баклажаны с хрустящей корочкой и соусом.',
    ingredients: ['Баклажаны', 'Панировка', 'Соус'],
    img: ''
  },
  {
    name: 'Греческий салат',
    price: 1990,
    description: 'Салат с овощами, фетой, оливками и оливковым маслом.',
    ingredients: ['Огурцы', 'Помидоры', 'Фета', 'Оливки', 'Оливковое масло'],
    img: ''
  },
  {
    name: 'Классический сэндвич',
    price: 1300,
    description: 'Сэндвич с ветчиной, сыром и свежими овощами.',
    ingredients: ['Хлеб', 'Ветчина', 'Сыр', 'Овощи'],
    img: ''
  },
  {
    name: 'Бургер',
    price: 1500,
    description: 'Классический бургер с котлетой, сыром и овощами.',
    ingredients: ['Булочка', 'Котлета', 'Сыр', 'Овощи', 'Соус'],
    img: ''
  },
  {
    name: 'Наггетсы',
    price: 1600,
    description: 'Куриные наггетсы в хрустящей панировке.',
    ingredients: ['Курица', 'Панировка', 'Соус'],
    img: ''
  },
];

const sides = [
  {
    name: 'Рис',
    price: 600,
    description: 'Гарнир из отварного риса.',
    ingredients: ['Рис', 'Соль'],
    img: ''
  },
  {
    name: 'Пюре',
    price: 700,
    description: 'Картофельное пюре с маслом.',
    ingredients: ['Картофель', 'Молоко', 'Масло', 'Соль'],
    img: ''
  },
  {
    name: 'Фри',
    price: 990,
    description: 'Картофель фри, обжаренный до хрустящей корочки.',
    ingredients: ['Картофель', 'Масло', 'Соль'],
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
        <MenuTabs tabs={["Горячие напитки", "Холодные напитки", "Основные блюда"]}>
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
          {/* Основные блюда */}
          <SectionsRow>
            <Section title="Завтраки и выпечка">
              <DrinksTable data={breakfastBakery} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Салаты и Сэндвичи">
              <DrinksTable data={saladsSandwiches} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Горячие блюда">
              <DrinksTable data={hotDishesFood} setSelectedItem={setSelectedItem} />
            </Section>
            <Section title="Гарниры">
              <DrinksTable data={sides} setSelectedItem={setSelectedItem} />
            </Section>
          </SectionsRow>
        </MenuTabs>
        <DrinkInfoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </main>
    </div>
  );
}

export default App;
