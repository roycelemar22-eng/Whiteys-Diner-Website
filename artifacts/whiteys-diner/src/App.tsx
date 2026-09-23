import { useEffect, useState } from 'react';
import {
  ChevronRight,
  Clock3,
  Coffee,
  CreditCard,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Utensils,
  X,
} from 'lucide-react';
import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import dinerExterior from '@assets/generated_images/diner-exterior.png';
import dinerInterior from '@assets/generated_images/diner-interior.png';
import steakEggs from '@assets/generated_images/steak-eggs.png';

const queryClient = new QueryClient();

const hours = [
  ['Monday', '6:30 AM – 1:30 PM'],
  ['Tuesday', '6:30 AM – 1:30 PM'],
  ['Wednesday', '6:30 AM – 1:30 PM'],
  ['Thursday', '6:30 AM – 1:30 PM'],
  ['Friday', '6:30 AM – 1:30 PM'],
  ['Saturday', '6:30 AM – 1:30 PM'],
  ['Sunday', '6:30 AM – 1:30 PM'],
];

const photos = [
  { src: dinerInterior, title: 'Inside Whitey’s', detail: 'The counter is ready' },
  { src: steakEggs, title: 'Steak & Eggs', detail: 'A plate worth waking up for' },
  { src: dinerExterior, title: 'East State Street', detail: 'Your table is waiting' },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topstrip" data-testid="strip-hours">
        <div className="wrap">
          <span><i className="dot" />Open Daily 6:30 AM – 1:30 PM</span>
          <span><i className="dot" />Cash Only <small className="atm-chip">ATM Inside</small></span>
          <span className="strip-addr"><i className="dot" />216 E State St, Fremont, OH</span>
        </div>
      </div>
      <nav className="nav" data-testid="navigation">
        <div className="wrap">
          <a className="wordmark" href="#top" onClick={closeMenu} data-testid="link-home">
            <span className="mark" aria-hidden="true">W</span>
            <span>
              <b>WHITEY'S DINER</b>
              <small>Fremont, Ohio</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={27} /> : <MenuIcon size={27} />}
          </button>
          <div className={`navlinks${menuOpen ? ' is-open' : ''}`}>
            <a href="#menu" onClick={closeMenu} data-testid="link-menu">Menu</a>
            <a href="#why" className="hide-sm" onClick={closeMenu} data-testid="link-why">Why Whitey's</a>
            <a href="#about" className="hide-sm" onClick={closeMenu} data-testid="link-about">About</a>
            <a href="#visit" onClick={closeMenu} data-testid="link-visit">Visit</a>
            <a className="navcall" href="tel:+14193349183" onClick={closeMenu} data-testid="link-nav-phone">(419) 334-9183</a>
          </div>
        </div>
      </nav>
    </>
  );
}

function OriginalHeroArtwork() {
  return (
    <div className="hero-art reveal reveal-delay-2" data-testid="photo-hero-sign">
      <div className="hero-art-inner">
        <svg viewBox="0 0 640 480" role="img" aria-label="Whitey's Diner illustrated sign">
          <defs>
            <linearGradient id="art-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFDF6" />
              <stop offset="1" stopColor="#FFF1C4" />
            </linearGradient>
            <linearGradient id="art-chrome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset=".45" stopColor="#D8D4C9" />
              <stop offset=".55" stopColor="#F2F0EA" />
              <stop offset="1" stopColor="#B9B4A8" />
            </linearGradient>
          </defs>
          <rect width="640" height="480" fill="url(#art-sky)" />
          <path d="M0 84 C150 34 420 32 640 68 L640 236 C420 204 150 206 0 254 Z" fill="#F7C815" />
          <path d="M0 84 C150 34 420 32 640 68 L640 84 C420 48 150 50 0 100 Z" fill="#1A1713" opacity=".85" />
          <path d="M0 238 C150 190 420 188 640 220 L640 236 C420 204 150 206 0 254 Z" fill="#1A1713" opacity=".85" />
          <text x="320" y="158" textAnchor="middle" fontFamily="Alfa Slab One, Georgia, serif" fontSize="50" fill="#1A1713" letterSpacing="2">WHITEY&apos;S</text>
          <text x="320" y="212" textAnchor="middle" fontFamily="Alfa Slab One, Georgia, serif" fontSize="50" fill="#1A1713" letterSpacing="2">DINER</text>
          <rect x="0" y="330" width="640" height="26" fill="url(#art-chrome)" />
          <rect x="0" y="356" width="640" height="124" fill="#FFF8E6" />
          <g stroke="#E4DCC4" strokeWidth="2">
            <path d="M60 356 V480" /><path d="M180 356 V480" /><path d="M300 356 V480" /><path d="M420 356 V480" /><path d="M540 356 V480" />
          </g>
          <g transform="translate(78,236)">
            <path d="M8 60 C8 30 12 26 20 26 L84 26 C92 26 96 30 96 60 C96 82 84 94 52 94 C20 94 8 82 8 60 Z" fill="#FFFDF6" stroke="#1A1713" strokeWidth="5" />
            <path d="M96 40 C122 36 128 74 96 74" fill="none" stroke="#1A1713" strokeWidth="5" />
            <rect x="4" y="26" width="96" height="12" rx="4" fill="#C8322B" />
            <path d="M34 14 C40 4 28 2 34 -8 M62 14 C68 4 56 2 62 -8" fill="none" stroke="#C8A94B" strokeWidth="4" strokeLinecap="round" opacity=".75" />
          </g>
          <g transform="translate(230,244)">
            <ellipse cx="120" cy="70" rx="118" ry="42" fill="#FFFDF6" stroke="#1A1713" strokeWidth="5" />
            <ellipse cx="120" cy="66" rx="96" ry="32" fill="#FFF8E6" stroke="#E4DCC4" strokeWidth="3" />
            <ellipse cx="82" cy="60" rx="40" ry="24" fill="#FFFFFF" stroke="#1A1713" strokeWidth="4" />
            <circle cx="82" cy="58" r="13" fill="#F7C815" stroke="#E0A800" strokeWidth="3" />
            <ellipse cx="150" cy="64" rx="36" ry="21" fill="#FFFFFF" stroke="#1A1713" strokeWidth="4" />
            <circle cx="150" cy="62" r="11" fill="#F7C815" stroke="#E0A800" strokeWidth="3" />
            <path d="M176 44 C196 34 200 52 220 42 M172 58 C192 48 198 66 218 56" fill="none" stroke="#C8322B" strokeWidth="10" strokeLinecap="round" />
          </g>
          <g transform="translate(470,258)">
            <ellipse cx="70" cy="78" rx="72" ry="20" fill="#E9C77A" stroke="#1A1713" strokeWidth="4" />
            <ellipse cx="70" cy="60" rx="66" ry="19" fill="#F0D492" stroke="#1A1713" strokeWidth="4" />
            <ellipse cx="70" cy="42" rx="60" ry="18" fill="#F6E0AC" stroke="#1A1713" strokeWidth="4" />
            <rect x="52" y="22" width="34" height="16" rx="3" fill="#F7C815" stroke="#1A1713" strokeWidth="4" />
          </g>
        </svg>
        <div className="art-checker" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="reveal">
          <div className="badge" aria-label="Whitey's Diner hometown favorite badge" data-testid="badge-hometown">
            <span>W</span>
          </div>
          <div className="headline">
            <span className="script">The neighborhood favorite</span>
            <span className="big">BIG PLATES,<br /><em>SMALL TOWN</em><br />PRICES.</span>
            <p>Homemade breakfast served hot every morning on East State Street — hash browned, hotcaked, and gravy-smothered since way back.</p>
            <div className="herobtns">
              <a className="btn btn-yellow" href="#menu" data-testid="link-hero-menu">See the Menu <ChevronRight size={16} /></a>
              <a className="btn btn-ghost" href="tel:+14193349183" data-testid="link-hero-phone">Call Ahead <Phone size={15} /></a>
            </div>
          </div>
        </div>
        <OriginalHeroArtwork />
      </div>
      <div className="facts" data-testid="facts-strip">
        <div className="facts-track">
          <div className="fact-group">
            <div className="fact" data-testid="fact-rating"><b>4.6 ★</b><span>871 Google Reviews</span></div>
            <div className="fact" data-testid="fact-price"><b>$10–20</b><span>Per Person</span></div>
            <div className="fact" data-testid="fact-hours"><b>6:30–1:30</b><span>Open Daily</span></div>
            <div className="fact" data-testid="fact-payment"><b>Cash</b><span>Only, Please <small className="atm-chip">ATM Inside</small></span></div>
          </div>
          <div className="fact-group" aria-hidden="true">
            <div className="fact"><b>4.6 ★</b><span>871 Google Reviews</span></div>
            <div className="fact"><b>$10–20</b><span>Per Person</span></div>
            <div className="fact"><b>6:30–1:30</b><span>Open Daily</span></div>
            <div className="fact"><b>Cash</b><span>Only, Please <small className="atm-chip">ATM Inside</small></span></div>
          </div>
        </div>
      </div>
    </header>
  );
}

function WhySection() {
  const features = [
    { icon: Utensils, title: 'Portions That Mean It', body: '"Large portions of bacon!!!" is a direct quote from a five-star review, and it is not an exaggeration. Nobody leaves Whitey’s hungry.' },
    { icon: Coffee, title: 'Homemade, Every Morning', body: 'Home fries, hotcakes, corned beef hash and sausage gravy made the same way for years. Regulars call it the best homemade food in town.' },
    { icon: Clock3, title: 'In & Out, No Wait', body: 'Most folks are seated, fed, and back on the road in 25 minutes to an hour. Great service, fast plates, fair prices.' },
  ];

  return (
    <section className="why" id="why" data-testid="section-why">
      <div className="wrap">
        <p className="eyebrow">Why folks keep coming back</p>
        <h2>No frills. Just a<br />good plate of food.</h2>
        <p className="lede">Whitey&apos;s is a cozy counter-and-booths diner on East State Street, known around Fremont for hearty grub — burgers, breakfast sandwiches, and sausage gravy done right.</p>
        <div className="feats">
          {features.map(({ icon: Icon, title, body }, index) => (
            <div className={`feat reveal reveal-delay-${index + 1}`} key={title} data-testid={`feature-${index}`}>
              <Icon className="feat-icon" strokeWidth={1.8} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type MenuItem = {
  name: string;
  price: string;
  note?: string;
  tag?: string;
};

function MenuCourse({
  title,
  subtitle,
  note,
  items,
  testId,
}: {
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
  testId: string;
}) {
  return (
    <div className="course" data-testid={testId}>
      <h3>{title}</h3>
      {subtitle && <p className="sub">{subtitle}</p>}
      {note && <p className="course-note">{note}</p>}
      {items.map((item) => (
        <div className="item" key={`${title}-${item.name}-${item.price}`}>
          <span className="nm">
            {item.name}
            {item.tag && <span className="tag alt tag-block">{item.tag}</span>}
            {item.note && <em>{item.note}</em>}
          </span>
          <span className="pr">{item.price}</span>
        </div>
      ))}
    </div>
  );
}

function MenuSection() {
  const breakfastSpecials: MenuItem[] = [
    { name: 'Corned Beef Hash & 2 Eggs with Toast', price: '$10.40' },
    { name: 'Sausage Gravy & Biscuits', price: '$7.65' },
    { name: 'Pork Chops & Eggs', price: '$13.00' },
    { name: 'Steak & Eggs', price: '$16.80', tag: 'Hometown Favorite' },
    { name: 'Country Fried Steak, Eggs & Home Fries', price: '$13.40' },
  ];
  const eggs: MenuItem[] = [
    { name: 'Two Country Fresh Eggs', price: '$5.45', note: 'Includes toast & coffee or hot tea. Extra egg $2.00.' },
    { name: 'Two Eggs with Ham, Bacon or Sausage', price: '$10.40' },
    { name: 'One Egg with Ham, Bacon or Sausage', price: '$9.40' },
    { name: 'Home Fries', price: '$4.50', note: 'A must at Whitey’s.' },
    { name: 'Trash Potatoes', price: '$11.00' },
  ];
  const hotcakes: MenuItem[] = [
    { name: 'Hotcakes', price: '$8.00' },
    { name: 'Hotcakes with Two Eggs', price: '$9.35' },
    { name: 'Hotcakes with Ham or Bacon or Sausage', price: '$11.20' },
    { name: 'Hotcakes with Eggs and Meat', price: '$15.20' },
  ];
  const frenchToast: MenuItem[] = [
    { name: 'French Toast', price: '$8.00' },
    { name: 'French Toast with Two Eggs', price: '$9.35' },
    { name: 'French Toast with Ham or Bacon or Sausage', price: '$11.20' },
    { name: 'French Toast with Eggs and Meat', price: '$15.20' },
  ];
  const omelets: MenuItem[] = [
    { name: 'Potato with Cheese', price: '$9.30' },
    { name: 'Veggie with Cheese', price: '$10.40' },
    { name: 'Cheese', price: '$8.50' },
    { name: 'Ham', price: '$10.40' },
    { name: 'Ham & Cheese', price: '$10.95' },
    { name: 'Sausage', price: '$10.40' },
    { name: 'Sausage & Cheese', price: '$10.95' },
    { name: 'Western', price: '$10.95' },
    { name: 'Western with Cheese', price: '$11.95' },
    { name: 'Bubba', price: '$12.15' },
    { name: 'Bubba with Cheese', price: '$13.15' },
    { name: 'Broccoli & Cheese', price: '$9.50' },
  ];
  const rolls: MenuItem[] = [
    { name: 'Sweet Roll', price: '$2.00' },
    { name: 'Toast', price: '$1.50' },
    { name: 'Cinnamon Toast', price: '$2.00' },
    { name: 'Raisin Toast', price: '$2.00' },
    { name: 'English Muffin', price: '$1.50' },
  ];
  const cereals: MenuItem[] = [
    { name: 'Oatmeal', price: '$4.00' },
    { name: 'Grits', price: '$4.00' },
  ];
  const sideOrders: MenuItem[] = [
    { name: 'Corned Beef Hash', price: '$7.90' },
    { name: 'Bacon', price: '$7.90' },
    { name: 'Ham', price: '$7.90' },
    { name: 'Sausage', price: '$7.90' },
    { name: 'Extra Cheese', price: '$2.00' },
    { name: 'Peppers', price: '$1.50' },
    { name: 'Onions', price: '$1.50' },
    { name: 'Mushrooms', price: '$1.50' },
    { name: 'Tomatoes', price: '$1.50' },
    { name: 'Broccoli', price: '$1.50' },
    { name: 'Jalapenos', price: '$1.50' },
  ];
  const juices: MenuItem[] = [
    { name: 'Orange', price: '$3.00 / $3.50' },
    { name: 'Apple', price: '$2.00 / $2.25' },
    { name: 'Tomato', price: '$2.50 / $2.75' },
  ];
  const wakeUp: MenuItem[] = [
    { name: 'Wake Up Sandwich', price: '$10.00', note: 'Ham or sausage or bacon with egg & cheese on a muffin with coffee or juice.' },
  ];
  const salads: MenuItem[] = [
    { name: 'Head Lettuce & Tomato', price: '$3.50' },
    { name: 'Cottage Cheese', price: '$3.00' },
    { name: 'Cole Slaw', price: '$3.00' },
    { name: 'Chicken Chef Salad', price: '$10.50 / $12.50' },
    { name: 'Ham & Cheese Chef Salad', price: '$9.50 / $11.00' },
    { name: 'Soup & Salad', price: '$9.50' },
    { name: 'Applesauce', price: '$3.00' },
  ];
  const soups: MenuItem[] = [
    { name: 'Homemade Vegetable', price: '$4.00 cup / $4.75 bowl' },
    { name: 'Homemade Chili', price: '$4.50 cup / $5.25 bowl' },
    { name: 'Soup Of The Day', price: '$4.50 cup / $5.25 bowl' },
  ];
  const tastySandwiches: MenuItem[] = [
    { name: 'Egg & Cheese', price: '$5.50' },
    { name: 'Hamburger, Plain', price: '$8.50' },
    { name: 'Hamburger, Deluxe', price: '$9.00' },
    { name: 'Cheeseburger, Plain', price: '$9.50' },
    { name: 'Cheeseburger, Deluxe', price: '$10.00' },
    { name: 'Bacon Burger', price: '$10.00' },
    { name: 'Bacon Burger, Deluxe', price: '$10.50' },
    { name: 'Bacon Cheeseburger', price: '$11.00' },
    { name: 'Bacon Cheeseburger, Deluxe', price: '$11.50' },
    { name: 'Fried Ham', price: '$8.50' },
    { name: 'Fried Ham with Egg & Cheese', price: '$9.85' },
    { name: 'Bacon, Plain', price: '$8.50' },
    { name: 'BLT on Toast', price: '$9.00' },
    { name: 'Bacon with Egg and Cheese', price: '$9.85' },
    { name: 'Sausage, Plain', price: '$8.50' },
    { name: 'Sausage with Egg & Cheese', price: '$9.85' },
    { name: 'Breaded Veal', price: '$9.00' },
    { name: 'Egg with Tomato', price: '$5.00' },
    { name: 'Chicken Salad', price: '$8.00' },
    { name: 'Toasted Cheese', price: '$6.00' },
    { name: 'Broiled Chicken Breast Sandwich with cup of soup', price: '$10.95' },
    { name: 'Pork Tenderloin Sandwich with cup of soup', price: '$10.95' },
  ];
  const lunchSides: MenuItem[] = [
    { name: 'French Fries', price: '$4.50' },
    { name: 'Home Fries', price: '$4.50' },
    { name: 'Onion Rings', price: '$7.00' },
  ];
  const dinners: MenuItem[] = [
    { name: 'Ham Steak', price: '$13.45' },
    { name: 'Hamburger Steak', price: '$13.45' },
    { name: 'Baked Veal', price: '$13.45' },
    { name: 'Perch Dinner', price: 'Market Price' },
    { name: 'Liver & Onions', price: '$13.45' },
    { name: 'Chicken Breast', price: '$13.45' },
    { name: 'Country Fried Steak', price: '$13.45' },
  ];
  const beverages: MenuItem[] = [
    { name: 'Coffee', price: '$2.00' },
    { name: 'Tea', price: '$1.25' },
    { name: 'Hot Chocolate', price: '$2.00' },
    { name: 'Chocolate Milk', price: '$1.50 sm / $2.00 lg' },
    { name: 'Milk', price: '$1.00 sm / $1.25 lg' },
    { name: 'Milk Shake', price: '$6.00' },
    { name: 'Iced Tea (Free Refills)', price: '$2.00' },
    { name: 'Soft Drinks', price: '$2.50' },
  ];
  const desserts: MenuItem[] = [
    { name: 'Fresh Homemade Pie — A MUST', price: '$4.50' },
    { name: 'Pie A la Mode', price: '$5.25' },
    { name: 'Ice Cream', price: '$3.50' },
    { name: 'Chocolate Sundae', price: '$4.50' },
    { name: 'Cheesecake Traditional', price: '$4.50' },
    { name: 'Cheesecake Cherry', price: '$5.00' },
  ];

  return (
    <section className="menu" id="menu" data-testid="section-menu">
      <div className="wrap">
        <div className="menuhead">
          <div>
            <p className="eyebrow">Breakfast · lunch · dinner</p>
            <h2>The Whitey&apos;s Menu</h2>
            <p className="lede">The full menu from the counter: eggs, hotcakes, sandwiches, soups, dinners, drinks, and something sweet to finish.</p>
          </div>
          <div className="menunote atm-ticker" data-testid="menu-note"><span>ATM INSIDE</span><span>Cash Only</span><span>Prices Subject to Change</span></div>
        </div>
        <div className="menugrid">
          <MenuCourse title="Whitey’s Breakfast Specials" subtitle="The big ones" items={breakfastSpecials} testId="menu-category-specials" />
          <MenuCourse title="Eggs, Etc." subtitle="Includes toast & coffee or hot tea · extra egg $2.00" items={eggs} testId="menu-category-eggs" />
          <MenuCourse title="Hotcakes" subtitle="Includes syrup & coffee or hot tea" items={hotcakes} testId="menu-category-hotcakes" />
          <MenuCourse title="French Toast" subtitle="Includes syrup & coffee or hot tea" items={frenchToast} testId="menu-category-french-toast" />
          <MenuCourse title="Omelets" subtitle="Includes toast & coffee or hot tea" items={omelets} testId="menu-category-omelets" />
          <MenuCourse title="Wake Up Sandwiches" subtitle="A quick start" items={wakeUp} testId="menu-category-wake-up" />
          <MenuCourse title="Rolls...etc." items={rolls} testId="menu-category-rolls" />
          <MenuCourse title="Cereals" items={cereals} testId="menu-category-cereals" />
          <MenuCourse title="Side Orders" items={sideOrders} testId="menu-category-side-orders" />
          <MenuCourse title="Juices" subtitle="Small / large" items={juices} testId="menu-category-juices" />
          <MenuCourse title="Salads" items={salads} testId="menu-category-salads" />
          <MenuCourse title="Soups" subtitle="Cup / bowl" items={soups} testId="menu-category-soups" />
          <MenuCourse title="Tasty Sandwiches" subtitle="Make it a platter for $5.00 more · 1/2 fries & 1 cold side" items={tastySandwiches} testId="menu-category-tasty-sandwiches" />
          <MenuCourse title="Lunch Side Orders" items={lunchSides} testId="menu-category-lunch-sides" />
          <MenuCourse title="Dinner" subtitle="Includes potatoes, vegetable, choice of cold side" items={dinners} testId="menu-category-dinner" />
          <MenuCourse title="Beverages" items={beverages} testId="menu-category-beverages" />
          <MenuCourse title="Desserts" items={desserts} testId="menu-category-desserts" />
        </div>
        <p className="lede menu-foot">Items marked with an asterisk contain eggs. Call <a href="tel:+14193349183" data-testid="link-menu-phone">(419) 334-9183</a> to hear what&apos;s cooking today.</p>
      </div>
    </section>
  );
}

function GallerySection({ onSelect }: { onSelect: (src: string, alt: string) => void }) {
  return (
    <section className="gallery" id="gallery" data-testid="section-gallery">
      <div className="wrap">
        <div className="gallery-head">
          <div>
            <p className="eyebrow">Pull up a stool</p>
            <h2>A little taste of the place.</h2>
          </div>
          <p className="gallery-note">Chrome, red vinyl, warm coffee, and a front door that has welcomed Fremont for 45 years.</p>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              type="button"
              className="gallery-tile"
              key={photo.title}
              onClick={() => onSelect(photo.src, `${photo.title} — ${photo.detail}`)}
              data-testid={`button-gallery-${index}`}
            >
              <img src={photo.src} alt={`${photo.title} at Whitey's Diner`} />
              <span className="tile-caption"><b>{photo.title}</b><span>{photo.detail}</span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    '"Cute little place, with good service and tasty food — large portions of bacon!!!"',
    '"Good portion size, tasted wonderfully, and great service and people."',
    '"Best homemade food place to eat in town."',
  ];

  return (
    <section className="reviews" data-testid="section-reviews">
      <div className="wrap">
        <p className="eyebrow">4.6 stars · 871 Google reviews</p>
        <h2>What Fremont says.</h2>
        <div className="quotes">
          {reviews.map((review, index) => (
            <div className="quote" key={review} data-testid={`review-${index}`}>
              <div className="stars" aria-label="Five star review">★★★★★</div>
              <p>{review}</p>
              <cite>Google Review</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about" id="about" data-testid="section-about">
      <div className="wrap">
        <div className="aboutbox">
          <p className="eyebrow">About the place</p>
          <h2>A Fremont fixture on East State.</h2>
          <p><strong>Whitey&apos;s Diner has been in business for 45 years.</strong> It&apos;s the kind of diner that doesn&apos;t need a gimmick. A short counter, a handful of booths, mounted fish and ducks up on the wall, and a griddle that&apos;s been going since before the sun came up.</p>
          <p>Breakfast is the main event — eggs cooked how you asked, home fries folks drive in for, and sausage gravy over hot biscuits. It&apos;s cash only and there&apos;s no reservation list. Just come in, grab a seat, and somebody will get your coffee going.</p>
        </div>
        <div className="plaque" data-testid="about-plaque">
          <div className="checker" />
          <h3>WHITEY&apos;S DINER</h3>
          <span className="script">45 years on East State</span>
          <ul className="plaquelist">
            <li><span>Style</span><b>American Diner</b></li>
            <li><span>Price</span><b>$10–20 per person</b></li>
            <li><span>Payment</span><b>Cash only</b></li>
            <li><span>Reservations</span><b>Not needed</b></li>
            <li><span>Typical visit</span><b>25 min – 1 hr</b></li>
          </ul>
          <div className="checker" style={{ marginTop: '1.2rem' }} />
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section className="visit" id="visit" data-testid="section-visit">
      <div className="wrap">
        <p className="eyebrow">Come see us</p>
        <h2>Find Whitey&apos;s.</h2>
        <div className="visitgrid">
          <div className="vcard">
            <h3>Location &amp; Contact</h3>
            <div className="vrow">
              <MapPin aria-hidden="true" />
              <span><b>Address</b><a href="https://maps.google.com/?q=216+E+State+St,+Fremont,+OH+43420" target="_blank" rel="noopener" data-testid="link-address">216 E State St<br />Fremont, OH 43420</a></span>
            </div>
            <div className="vrow">
              <Phone aria-hidden="true" />
              <span><b>Phone</b><a href="tel:+14193349183" data-testid="link-phone">(419) 334-9183</a></span>
            </div>
            <div className="vrow">
              <CreditCard aria-hidden="true" />
              <span><b>Payment</b><span style={{ fontWeight: 600 }}>Cash only — no cards</span></span>
            </div>
            <div className="cashnote" data-testid="cash-note"><span className="atm-chip atm-chip-light">ATM Inside</span> Please bring cash · No reservations taken</div>
          </div>
          <div className="vcard">
            <h3>Hours</h3>
            <ul className="hourslist">
              {hours.map(([day, time]) => <li key={day}><span>{day}</span><b>{time}</b></li>)}
            </ul>
            <p className="visit-note">Busiest between 9 AM and noon. Kitchen closes at 1:30 — call ahead if you&apos;re cutting it close.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-testid="footer">
      <div className="wrap">
        <div className="fmark">WHITEY&apos;S DINER</div>
        <div className="fscript">45 years on East State</div>
        <div className="frule" />
        <p>216 E State St, Fremont, OH 43420 · <a href="tel:+14193349183" data-testid="link-footer-phone">(419) 334-9183</a></p>
        <p>Open daily 6:30 AM – 1:30 PM · Cash only</p>
        <p className="fsmall">© {new Date().getFullYear()} Whitey&apos;s Diner</p>
      </div>
    </footer>
  );
}

function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhoto(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  return (
    <div className="min-h-[100dvh]">
      <Nav />
      <main>
        <Hero />
        <WhySection />
        <MenuSection />
        <GallerySection onSelect={(src, alt) => setSelectedPhoto({ src, alt })} />
        <ReviewsSection />
        <AboutSection />
        <VisitSection />
      </main>
      <Footer />
      {selectedPhoto && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded diner photograph" onClick={() => setSelectedPhoto(null)} data-testid="lightbox">
          <button className="lightbox-close" type="button" aria-label="Close photograph" onClick={() => setSelectedPhoto(null)} data-testid="button-close-lightbox"><X size={24} /></button>
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;